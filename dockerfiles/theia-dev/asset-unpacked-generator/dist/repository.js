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
const cli_error_1 = require("./cli-error");
const command_1 = require("./command");
const path = require("path");
/**
 * Allow to clone git repositories easily
 */
class Repository {
    /**
     * Default constructor with the given URI
     * @param uri
     */
    constructor(uri) {
        this.uri = uri;
    }
    /**
     * Grab the repository name based on the given URI of repository.
     */
    getRepositoryName() {
        // check dir exists
        const regex = /(https:\/\/*git*.*\/.*\/|file:\/\/.*\/)(.*)/gm;
        const folderDirExp = regex.exec(this.uri);
        if (!folderDirExp || folderDirExp.length < 1) {
            throw new cli_error_1.CliError(`Invalid repository name: ${this.uri}`);
        }
        return folderDirExp[2];
    }
    /**
     * Performs the clone operation
     * @param checkoutFolder the CWD / directory where to launch the clone operation
     * @param dest the destination folder of the clone
     * @param checkoutTo the optional branch/tag to use when cloning
     * @param keepHistory the optional flag to keep / omit git history
     */
    clone(checkoutFolder, dest, checkoutTo, keepHistory = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const commandTheiaFolder = new command_1.Command(checkoutFolder);
            // Use -b to clone the specific branch
            let opts = checkoutTo ? `-b ${checkoutTo}` : '';
            // Use --single-branch and --depth to omit git history
            opts += keepHistory ? '' : ' --single-branch --depth 1';
            yield commandTheiaFolder.exec(`git clone ${opts} ${this.uri} ${dest}`);
            const clonedDir = path.resolve(checkoutFolder, dest);
            return clonedDir;
        });
    }
}
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map