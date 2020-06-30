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
const jsYaml = require("js-yaml");
const path = require("path");
const fs = require("fs-extra");
const readPkg = require("read-pkg");
const logger_1 = require("./logger");
const repository_1 = require("./repository");
const cli_error_1 = require("./cli-error");
const tmp = require("tmp");
const axios = require("axios");
/**
 * Init all sources of extensions and plugins by cloning them, creating symlinks, update package.json, etc.
 * @author Florent Benoit
 */
class InitSources {
    /**
     * Constructor
     */
    constructor(rootFolder, packagesFolder, pluginsFolder, cheTheiaFolder, assemblyFolder, theiaVersion) {
        this.rootFolder = rootFolder;
        this.packagesFolder = packagesFolder;
        this.pluginsFolder = pluginsFolder;
        this.cheTheiaFolder = cheTheiaFolder;
        this.assemblyFolder = assemblyFolder;
        this.theiaVersion = theiaVersion;
        /**
         * Source clone locations could be replaced from the command line --alias option.
         */
        this.sourceLocationAliases = new Map();
        /**
         * Set of global dependencies
         */
        this.globalDevDependencies = new Map();
        /**
         * Will clone sources keeping or omiting the history
         */
        this.keepHistory = true;
    }
    /**
     * Keep or omit git history when cloning sources
     */
    set keepGitHistory(value) {
        this.keepHistory = value;
    }
    /**
     * Install all extensions
     */
    generate(extensionsPath, isDevMode = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const extensionsYamlContent = yield fs.readFile(extensionsPath);
            const extensionsYaml = jsYaml.load(extensionsYamlContent.toString());
            yield this.initGlobalDependencies();
            yield fs.ensureDir(this.cheTheiaFolder);
            yield Promise.all(extensionsYaml.sources.map((extension) => __awaiter(this, void 0, void 0, function* () {
                if (isDevMode) {
                    extension.checkoutTo = 'master';
                }
                yield this.addExtension(extension);
            })));
            yield this.initRootCompilationUnits();
        });
    }
    /**
     * Update configs/root-compilation.tsconfig.json
     */
    initRootCompilationUnits() {
        return __awaiter(this, void 0, void 0, function* () {
            const rootCompilationUnitPath = path.join(this.rootFolder, 'configs/root-compilation.tsconfig.json');
            const rawData = yield fs.readFile(rootCompilationUnitPath);
            const parsed = JSON.parse(rawData.toString());
            // add assembly unit
            const item = {
                'path': '../examples/assembly/compile.tsconfig.json'
            };
            const assemblyTsConfig = parsed['references'].find(reference => { return reference['path'] === item['path']; });
            if (!assemblyTsConfig) {
                parsed['references'].push(item);
            }
            // write it back
            const json = JSON.stringify(parsed, undefined, 2);
            yield fs.writeFile(rootCompilationUnitPath, json);
        });
    }
    /**
     * Scan package.json file and grab all dev dependencies and store them in globalDevDependencies variable
     */
    initGlobalDependencies() {
        return __awaiter(this, void 0, void 0, function* () {
            const extensionPackage = yield readPkg(path.join(this.rootFolder, 'package.json'), { normalize: false });
            const keys = Object.keys(extensionPackage.devDependencies);
            yield Promise.all(keys.map(key => {
                this.globalDevDependencies.set(key, extensionPackage.devDependencies[key]);
            }));
        });
    }
    /**
     * Adds an extension to the current theia
     * @param extension the extension to add
     */
    addExtension(extension) {
        return __awaiter(this, void 0, void 0, function* () {
            // dealing with aliases that may be passed to the command line
            const sourceAlias = this.sourceLocationAliases.get(extension.source);
            if (sourceAlias) {
                logger_1.Logger.info(`Source alias detected for ${extension.source}, replacing with provided source: ${sourceAlias}`);
                extension.source = sourceAlias;
            }
            // first, clone
            yield this.clone(extension);
            // perform symlink
            yield this.symlink(extension);
            yield this.updateDependencies(extension);
            // insert extensions
            yield this.insertExtensionIntoAssembly(extension);
            // perform plugins
            yield this.pluginsSymlink(extension);
        });
    }
    /**
     * perform update of devDependencies or dependencies in package.json file of the cloned extension
     */
    updateDependencies(extension, rewrite = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(extension.extSymbolicLinks.map((symbolicLink) => __awaiter(this, void 0, void 0, function* () {
                // grab package.json
                const extensionJsonPath = path.join(symbolicLink, 'package.json');
                const extensionPackage = yield readPkg(extensionJsonPath, { normalize: false });
                const rawExtensionPackage = require(extensionJsonPath);
                const dependencies = extensionPackage.dependencies;
                const devDependencies = extensionPackage.devDependencies;
                const updatedDependencies = {};
                const updatedDevDependencies = {};
                const keysDependencies = dependencies ? Object.keys(dependencies) : [];
                yield Promise.all(keysDependencies.map((key) => __awaiter(this, void 0, void 0, function* () {
                    updatedDependencies[key] = this.updateDependency(key, dependencies[key]);
                })));
                rawExtensionPackage['dependencies'] = updatedDependencies;
                const keysDevDependencies = devDependencies ? Object.keys(devDependencies) : [];
                yield Promise.all(keysDevDependencies.map((key) => __awaiter(this, void 0, void 0, function* () {
                    updatedDevDependencies[key] = this.updateDependency(key, devDependencies[key]);
                })));
                rawExtensionPackage['devDependencies'] = updatedDevDependencies;
                // write again the file
                if (rewrite) {
                    const json = JSON.stringify(rawExtensionPackage, undefined, 2);
                    yield fs.writeFile(extensionJsonPath, json);
                }
            })));
        });
    }
    /**
     * Update the given dependency by comparing with global dependencies or checking if it's a theia dependency.
     * @param dependencyKey the key of dependency
     * @param dependencyValue its original value
     */
    updateDependency(dependencyKey, dependencyValue) {
        // is it already defined as a Theia dev dependency ? if yes then return this value
        const rest = this.globalDevDependencies.get(dependencyKey);
        if (rest) {
            return rest;
        }
        // is it a theia dependency
        if (dependencyKey.startsWith('@theia/')) {
            // add carret and the current version
            return `^${this.theiaVersion}`;
        }
        // return default value
        return dependencyValue;
    }
    /**
     * Insert the given extension into the package.json of the assembly.
     * @param extension the given extension
     */
    insertExtensionIntoAssembly(extension) {
        return __awaiter(this, void 0, void 0, function* () {
            // first, read the assembly json file
            const assemblyPackageJsonPath = path.join(this.assemblyFolder, 'package.json');
            const assemblyJsonRawContent = require(assemblyPackageJsonPath);
            const dependencies = assemblyJsonRawContent.dependencies;
            extension.extSymbolicLinks.forEach(extensionSymLink => {
                // first resolve path
                const resolvedPath = path.resolve(extensionSymLink, 'package.json');
                // read extension name within symlink
                const extensionName = require(resolvedPath).name;
                const extensionVersion = require(resolvedPath).version;
                dependencies[extensionName] = extensionVersion;
            });
            const json = JSON.stringify(assemblyJsonRawContent, undefined, 2);
            yield fs.writeFile(assemblyPackageJsonPath, json);
        });
    }
    symlink(source) {
        return __awaiter(this, void 0, void 0, function* () {
            const symbolicLinks = [];
            // now, perform symlink for specific folder or current folder
            if (source.extensions) {
                // ok here we have several folders, need to iterate
                yield Promise.all(source.extensions.map((folder) => __awaiter(this, void 0, void 0, function* () {
                    // source folder
                    const sourceFolder = path.resolve(source.clonedDir, folder);
                    const dest = path.resolve(this.packagesFolder, `${InitSources.PREFIX_PACKAGES_EXTENSIONS}${path.basename(sourceFolder)}`);
                    logger_1.Logger.info(`Creating symlink from ${sourceFolder} to ${dest}`);
                    yield fs.ensureSymlink(sourceFolder, dest);
                    symbolicLinks.push(dest);
                })));
            }
            else {
                const dest = path.resolve(this.packagesFolder, `${InitSources.PREFIX_PACKAGES_EXTENSIONS}${path.basename(source.clonedDir)}`);
                logger_1.Logger.info(`Creating symlink from ${source.clonedDir} to ${dest}`);
                yield fs.ensureSymlink(source.clonedDir, dest);
                symbolicLinks.push(dest);
            }
            source.extSymbolicLinks = symbolicLinks;
        });
    }
    pluginsSymlink(source) {
        return __awaiter(this, void 0, void 0, function* () {
            const symbolicLinks = [];
            // now, perform symlink for specific folder or current folder
            if (source.plugins) {
                // ok here we have several folders, need to iterate
                yield Promise.all(source.plugins.map((folder) => __awaiter(this, void 0, void 0, function* () {
                    // source folder
                    const sourceFolder = path.resolve(source.clonedDir, folder);
                    const dest = path.resolve(this.pluginsFolder, `${path.basename(sourceFolder)}`);
                    logger_1.Logger.info(`Creating symlink from ${sourceFolder} to ${dest}`);
                    yield fs.ensureSymlink(sourceFolder, dest);
                    symbolicLinks.push(dest);
                })));
            }
            else {
                const dest = path.resolve(this.pluginsFolder, `${path.basename(source.clonedDir)}`);
                logger_1.Logger.info(`Creating symlink from ${source.clonedDir} to ${dest}`);
                yield fs.ensureSymlink(source.clonedDir, dest);
                symbolicLinks.push(dest);
            }
            source.pluginSymbolicLinks = symbolicLinks;
        });
    }
    /**
     * Clone the given extension with the correct branch/tag
     * @param extension the extension to clone
     */
    clone(extension) {
        return __awaiter(this, void 0, void 0, function* () {
            if (fs.existsSync(extension.source)) {
                logger_1.Logger.info(`Skipping cloning sources for ${extension.source} already provided...`);
                extension.clonedDir = extension.source;
            }
            else {
                logger_1.Logger.info(`Cloning ${extension.source}...`);
                const repository = new repository_1.Repository(extension.source);
                extension.clonedDir = yield repository.clone(this.cheTheiaFolder, repository.getRepositoryName(), extension.checkoutTo, this.keepHistory);
            }
        });
    }
    initSourceLocationAliases(alias) {
        return __awaiter(this, void 0, void 0, function* () {
            if (alias) {
                alias.forEach(element => {
                    if (element.indexOf('=')) {
                        const index = element.substring(0, element.indexOf('='));
                        const value = element.substring(element.indexOf('=') + 1, element.length);
                        this.sourceLocationAliases.set(index, value);
                    }
                });
            }
        });
    }
    readConfigurationAndGenerate(configPath, dev) {
        return __awaiter(this, void 0, void 0, function* () {
            let extensionsYamlPath;
            if (configPath) {
                extensionsYamlPath = path.resolve(configPath);
                if (!fs.existsSync(extensionsYamlPath)) {
                    throw new cli_error_1.CliError('Config file does not exists');
                }
            }
            else {
                logger_1.Logger.debug("Config wasn't provided, downloading default...");
                const tmpFile = tmp.fileSync();
                const response = yield axios.default.get(InitSources.DEFAULT_EXTENSIONS_URI);
                const data = response.data;
                fs.writeFileSync(tmpFile.name, data);
                extensionsYamlPath = tmpFile.name;
            }
            yield this.generate(extensionsYamlPath, dev);
        });
    }
}
/**
 * Prefix for extensions.
 */
InitSources.PREFIX_PACKAGES_EXTENSIONS = '@che-';
InitSources.DEFAULT_EXTENSIONS_URI = 'https://raw.githubusercontent.com/eclipse/che-theia/master/che-theia-init-sources.yml';
InitSources.argBuilder = (theYargs) => {
    return theYargs.option('config', {
        description: 'Path to custom config file',
        alias: 'c',
    }).option('dev', {
        description: 'Initialize current Theia with Che/Theia extensions from "master" branch instead of provided branches',
        alias: 'd',
        type: 'boolean',
        default: false,
    }).option('alias', {
        description: 'Replace clone source location. If a local path is provided, it won\'t clone anything but use the folder as a source folder.',
        type: 'array'
    });
};
exports.InitSources = InitSources;
//# sourceMappingURL=init-sources.js.map