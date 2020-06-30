"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*********************************************************************
* Copyright (c) 2018 Red Hat, Inc.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
const fs = require("fs-extra");
const logger_1 = require("./logger");
const yarn_1 = require("./yarn");
const cli_error_1 = require("./cli-error");
const glob = require("glob-promise");
const path = require("path");
const command_1 = require("./command");
/**
 * Generates the assembly directory, copying only subset of files and cleaning up some folders
 * @author Florent Benoit
 */
class Production {
    constructor(rootFolder, assemblyFolder, productionDirectory) {
        this.rootFolder = rootFolder;
        this.assemblyFolder = assemblyFolder;
        this.productionDirectory = productionDirectory;
        this.dependencies = [];
        this.toCopyFiles = [];
        this.dependencies = [];
        this.command = new command_1.Command(productionDirectory);
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.Logger.info('🗂  Get dependencies...');
            // get dependencies
            yield this.getDependencies();
            logger_1.Logger.info('🗃  Resolving files...');
            yield this.resolveFiles();
            logger_1.Logger.info('✍️  Copying files...');
            yield this.copyFiles();
            logger_1.Logger.info('✂️  Cleaning-up files...');
            yield this.cleanup();
            logger_1.Logger.info(`🎉  Theia production-ready available in ${this.productionDirectory}.`);
            return path.resolve(this.productionDirectory);
        });
    }
    copyFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            const assemblyLength = this.assemblyFolder.length;
            const rootDirLength = this.rootFolder.length;
            yield Promise.all(this.toCopyFiles.map((file) => {
                let destFile;
                if (file.startsWith(this.assemblyFolder)) {
                    destFile = file.substring(assemblyLength);
                }
                else {
                    destFile = file.substring(rootDirLength);
                }
                return fs.copy(file, path.join(this.productionDirectory, destFile));
            }));
        });
    }
    cleanup() {
        return __awaiter(this, void 0, void 0, function* () {
            const sizeBefore = yield this.getSize();
            yield this.yarnClean();
            yield this.cleanupFind();
            const sizeAfter = yield this.getSize();
            logger_1.Logger.info('Removed :' + (sizeBefore - sizeAfter) + ' KiB');
        });
    }
    getSize() {
        return __awaiter(this, void 0, void 0, function* () {
            return parseInt(yield this.command.exec('du -s -k . | cut -f1'), 10);
        });
    }
    yarnClean() {
        return __awaiter(this, void 0, void 0, function* () {
            const yarnCleanFolder = path.resolve(__dirname, '../src/conf');
            const yarnCleanPath = path.join(yarnCleanFolder, '.yarnclean');
            yield fs.copy(path.join(this.rootFolder, 'yarn.lock'), path.join(this.productionDirectory, 'yarn.lock'));
            const yarnCleanDestPath = path.join(this.productionDirectory, '.yarnclean');
            yield fs.copy(yarnCleanPath, yarnCleanDestPath);
            const output = yield this.command.exec('yarn autoclean --force');
            yield fs.remove(yarnCleanDestPath);
            logger_1.Logger.info(output);
        });
    }
    cleanupFind() {
        return __awaiter(this, void 0, void 0, function* () {
            const cleanupFindFolder = path.resolve(__dirname, '../src/conf');
            const cleanupFindContent = yield fs.readFile(path.join(cleanupFindFolder, 'cleanup-find'));
            const command = new command_1.Command(this.productionDirectory);
            yield Promise.all(cleanupFindContent.toString().split('\n').map((line) => __awaiter(this, void 0, void 0, function* () {
                if (line.length > 0 && !line.startsWith('#')) {
                    yield command.exec(`find . -name ${line} | xargs rm -rf {}`);
                }
            })));
        });
    }
    resolveFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            // check dependency folders are there
            this.dependencies.forEach((dependency) => {
                if (!fs.existsSync(dependency)) {
                    throw new cli_error_1.CliError('The dependency ' + dependency
                        + ' is referenced but is not available on the filesystem');
                }
            });
            // ok now, add all files from these dependencies
            const globOptions = { nocase: true, nosort: true, nodir: true, dot: true };
            this.toCopyFiles = this.toCopyFiles.concat.apply([], yield Promise.all(this.dependencies.map(dependencyDirectory => {
                return glob.promise('**', Object.assign(globOptions, { cwd: dependencyDirectory }))
                    .then((data) => data.map((name) => path.join(dependencyDirectory, name)));
            })));
            // add as well the lib folder
            this.toCopyFiles = this.toCopyFiles.concat(yield (glob.promise('lib/**', Object.assign(globOptions, { cwd: this.assemblyFolder }))
                .then((data) => data.map((name) => path.join(this.assemblyFolder, name)))));
            this.toCopyFiles = this.toCopyFiles.concat(yield (glob.promise('src-gen/**', Object.assign(globOptions, { cwd: this.assemblyFolder }))
                .then((data) => data.map((name) => path.join(this.assemblyFolder, name)))));
            this.toCopyFiles = this.toCopyFiles.concat(path.join(this.assemblyFolder, 'package.json'));
            return Promise.resolve(true);
        });
    }
    getDependencies() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dependencies = (yield new yarn_1.Yarn('', Production.ASSEMBLY_DIRECTORY, Production.FORBIDDEN_PACKAGES, Production.EXCLUDED_PACKAGES).getDependencies('@eclipse-che/theia-assembly'));
            return Promise.resolve(true);
        });
    }
}
/**
 * Ensure we've no dependencies to these packages that bring a lot of dependencies !
 */
Production.FORBIDDEN_PACKAGES = ['webpack', 'webpack-cli', '@theia/application-manager'];
/**
 * Remove these client dependencies as they're already bundled with webpack
 */
Production.EXCLUDED_PACKAGES = ['electron',
    'react',
    'react-virtualized',
    'onigasm',
    'oniguruma',
    '@theia/monaco',
    'monaco-css',
    'react-dom',
    'font-awesome',
    'monaco-html',
    '@theia/monaco-editor-core'];
Production.ASSEMBLY_DIRECTORY = path.resolve('examples/assembly');
exports.Production = Production;
//# sourceMappingURL=production.js.map