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
const path = require("path");
const mustache = require("mustache");
const readPkg = require("read-pkg");
const command_1 = require("./command");
const logger_1 = require("./logger");
/**
 * Generates the examples/assembly
 * @author Florent Benoit
 */
class Init {
    constructor(rootFolder, examplesAssemblyFolder, checkoutFolder, pluginsFolder) {
        this.rootFolder = rootFolder;
        this.examplesAssemblyFolder = examplesAssemblyFolder;
        this.checkoutFolder = checkoutFolder;
        this.pluginsFolder = pluginsFolder;
    }
    getCurrentVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield readPkg(path.join(this.rootFolder, 'packages/core/package.json'))).version;
        });
    }
    getPackageWithVersion(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const pkg = JSON.parse(yield new command_1.Command(path.resolve(this.rootFolder)).exec(Init.GET_PACKAGE_WITH_VERSION_CMD + name)).data.trees[0];
            return pkg ? pkg.name : '';
        });
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            const srcDir = path.resolve(__dirname, '../src');
            const distDir = path.resolve(__dirname, '../dist');
            const templateDir = path.join(srcDir, 'templates');
            const compileTsConfig = path.join(templateDir, 'assembly-compile.tsconfig.json');
            const packageJsonContent = yield fs.readFile(path.join(templateDir, 'assembly-package.mst'));
            // generate assembly if does not exists
            const rendered = yield this.generateAssemblyPackage(packageJsonContent.toString());
            yield fs.ensureDir(this.examplesAssemblyFolder);
            yield fs.writeFile(path.join(this.examplesAssemblyFolder, 'package.json'), rendered);
            yield fs.copy(compileTsConfig, path.join(this.examplesAssemblyFolder, 'compile.tsconfig.json'));
            yield fs.copy(path.join(templateDir, 'cdn'), path.join(this.examplesAssemblyFolder, 'cdn'));
            logger_1.Logger.info(distDir);
            yield fs.copy(path.join(distDir, 'cdn'), path.join(this.examplesAssemblyFolder, 'cdn'));
            yield fs.copy(path.join(srcDir, 'scripts'), path.join(this.examplesAssemblyFolder, 'scripts'));
            // Generate checkout folder is does not exist
            yield fs.ensureDir(this.checkoutFolder);
            // copy build all plugins scripts
            yield fs.ensureDir(this.pluginsFolder);
            yield fs.copy(path.join(srcDir, 'foreach_yarn'), path.join(this.pluginsFolder, 'foreach_yarn'));
        });
    }
    generateAssemblyPackage(template) {
        return __awaiter(this, void 0, void 0, function* () {
            const tags = {
                version: yield this.getCurrentVersion(),
                monacopkg: yield this.getPackageWithVersion(Init.MONACO_CORE_PKG),
                monacohtmlcontribpkg: yield this.getPackageWithVersion(Init.MONACO_HTML_CONTRIB_PKG),
                monacocsscontribpkg: yield this.getPackageWithVersion(Init.MONACO_CSS_CONTRIB_PKG)
            };
            return mustache.render(template, tags).replace(/&#x2F;/g, '/');
        });
    }
    updadeBuildConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            const theiaPackagePath = path.join(this.rootFolder, 'package.json');
            const theiaPackage = yield readPkg(theiaPackagePath);
            const scriptsConfiguration = theiaPackage.scripts;
            if (scriptsConfiguration && scriptsConfiguration['prepare:build']) {
                scriptsConfiguration['prepare:build'] = 'yarn build && run lint && lerna run build';
            }
            const json = JSON.stringify(theiaPackage, undefined, 2);
            yield fs.writeFile(theiaPackagePath, json);
        });
    }
    updatePluginsConfigurtion() {
        return __awaiter(this, void 0, void 0, function* () {
            const theiaPackagePath = path.join(this.rootFolder, 'package.json');
            const theiaPackage = yield readPkg(theiaPackagePath);
            theiaPackage['theiaPlugins'] = yield this.getPluginsList();
            const json = JSON.stringify(theiaPackage, undefined, 2);
            yield fs.writeFile(theiaPackagePath, json);
        });
    }
    getPluginsList() {
        return __awaiter(this, void 0, void 0, function* () {
            const srcDir = path.resolve(__dirname, '../src');
            const templateDir = path.join(srcDir, 'templates');
            const pluginsJsonContent = yield fs.readFile(path.join(templateDir, 'theiaPlugins.json'));
            return JSON.parse(pluginsJsonContent.toString());
        });
    }
}
Init.GET_PACKAGE_WITH_VERSION_CMD = 'yarn --json --non-interactive --no-progress list --pattern=';
Init.MONACO_CORE_PKG = '@theia/monaco-editor-core';
Init.MONACO_HTML_CONTRIB_PKG = 'monaco-html';
Init.MONACO_CSS_CONTRIB_PKG = 'monaco-css';
exports.Init = Init;
//# sourceMappingURL=init.js.map