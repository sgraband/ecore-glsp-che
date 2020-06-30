"use strict";
/*********************************************************************
* Copyright (c) 2018 Red Hat, Inc.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const logger_1 = require("./logger");
const path = require("path");
const cli_error_1 = require("./cli-error");
const production_1 = require("./production");
const init_1 = require("./init");
const cdn_1 = require("./cdn");
const init_sources_1 = require("./init-sources");
const clean_1 = require("./clean");
const ASSSEMBLY_PATH = 'examples/assembly';
/**
 * Entry point of this helper script
 * @author Florent Benoit
 */
const commandArgs = yargs
    .usage('$0 <cmd> [args]')
    .command({
    command: 'init',
    describe: 'Initialize current theia to beahve like a Che/Theia',
    builder: init_sources_1.InitSources.argBuilder,
    handler: (args) => __awaiter(this, void 0, void 0, function* () {
        try {
            const assemblyFolder = path.resolve(process.cwd(), ASSSEMBLY_PATH);
            const packagesFolder = path.resolve(process.cwd(), 'packages');
            const pluginsFolder = path.resolve(process.cwd(), 'plugins');
            const cheFolder = path.resolve(process.cwd(), 'che');
            const init = new init_1.Init(process.cwd(), assemblyFolder, cheFolder, pluginsFolder);
            const version = yield init.getCurrentVersion();
            yield init.generate();
            yield init.updadeBuildConfiguration();
            yield init.updatePluginsConfigurtion();
            const extensions = new init_sources_1.InitSources(process.cwd(), packagesFolder, pluginsFolder, cheFolder, assemblyFolder, version);
            yield extensions.initSourceLocationAliases(args.alias);
            yield extensions.readConfigurationAndGenerate(args.config, args.dev);
        }
        catch (err) {
            handleError(err);
        }
    }),
})
    .command({
    command: 'production',
    describe: 'Copy Theia to a production directory',
    handler: () => __awaiter(this, void 0, void 0, function* () {
        try {
            const assemblyFolder = path.resolve(process.cwd(), ASSSEMBLY_PATH);
            const production = new production_1.Production(process.cwd(), assemblyFolder, 'production');
            yield production.create();
        }
        catch (err) {
            handleError(err);
        }
    }),
})
    .command({
    command: 'cdn',
    describe: 'Add or update the CDN support configuration',
    builder: cdn_1.Cdn.argBuilder,
    handler: (argv) => __awaiter(this, void 0, void 0, function* () {
        try {
            const assemblyFolder = path.resolve(process.cwd(), ASSSEMBLY_PATH);
            const cdn = new cdn_1.Cdn(assemblyFolder, argv.theia, argv.monaco);
            yield cdn.create();
        }
        catch (err) {
            handleError(err);
        }
    }),
})
    .command({
    command: 'clean',
    describe: 'Clean Theia repository',
    handler: () => __awaiter(this, void 0, void 0, function* () {
        try {
            const assemblyFolder = path.resolve(process.cwd(), ASSSEMBLY_PATH);
            const packagesFolder = path.resolve(process.cwd(), 'packages');
            const pluginsFolder = path.resolve(process.cwd(), 'plugins');
            const cheFolder = path.resolve(process.cwd(), 'che');
            const nodeModules = path.resolve(process.cwd(), 'node_modules');
            const clean = new clean_1.Clean(assemblyFolder, cheFolder, packagesFolder, pluginsFolder, nodeModules);
            yield clean.cleanCheTheia();
        }
        catch (err) {
            handleError(err);
        }
    })
})
    .help()
    .strict()
    .demandCommand()
    .argv;
if (!commandArgs) {
    yargs.showHelp();
}
function handleError(error) {
    if (error instanceof cli_error_1.CliError) {
        logger_1.Logger.error('=> 🚒 ' + error.message);
    }
    else {
        logger_1.Logger.error(error);
    }
    process.exit(1);
}
//# sourceMappingURL=yargs.js.map