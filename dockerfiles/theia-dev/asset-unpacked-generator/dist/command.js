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
const cp = require("child_process");
const cli_error_1 = require("./cli-error");
/**
 * Allow to run some commands
 * @author Florent Benoit
 */
class Command {
    constructor(directory) {
        this.directory = directory;
    }
    exec(commandLine) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const execProcess = cp.exec(commandLine, {
                    cwd: this.directory,
                    maxBuffer: 1024 * 1024
                }, (error, stdout, stderr) => {
                    const exitCode = execProcess.exitCode;
                    if (error) {
                        reject(new cli_error_1.CliError('Unable to execute the command ' + commandLine + ': ' + error));
                    }
                    if (exitCode !== 0) {
                        reject(new cli_error_1.CliError('Invalid exit code ' + exitCode));
                    }
                    resolve(stdout);
                });
            });
        });
    }
}
exports.Command = Command;
//# sourceMappingURL=command.js.map