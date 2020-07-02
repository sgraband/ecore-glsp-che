"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2019-2020 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
var core_1 = require("@theia/core");
var raw_process_1 = require("@theia/process/lib/node/raw-process");
var inversify_1 = require("inversify");
var path = require("path");
var os = require('os');
var EcoreFileGenServer = /** @class */ (function () {
    function EcoreFileGenServer(processFactory, logger) {
        this.processFactory = processFactory;
        this.logger = logger;
    }
    EcoreFileGenServer.prototype.generateEcore = function (name, prefix, uri, workspacePath) {
        var _this = this;
        var jarPath = path.resolve(__dirname, '..', '..', 'server', 'ecore-backend-server-1.0-SNAPSHOT-jar-with-dependencies.jar');
        if (jarPath.length === 0) {
            throw new Error('The EcoreGeneration.jar is not found. ');
        }
        var command = 'java';
        var args = [];
        var platformWorkspacePath = workspacePath;
        if (os.platform() === 'win32') {
            platformWorkspacePath = workspacePath.substr(1);
        }
        args.push('-jar', jarPath, '-name', name, '-prefix', prefix, '-uri', uri, '-workspacePath', platformWorkspacePath);
        return new Promise(function (resolve) {
            var process = _this.spawnProcess(command, args);
            if (process === undefined || process.process === undefined || process === null || process.process === null) {
                resolve('Process not spawned');
                return;
            }
            process.process.on('exit', function (code) {
                switch (code) {
                    case 0:
                        resolve('OK');
                        break;
                    case -10:
                        resolve('Name Parameter missing');
                        break;
                    case -11:
                        resolve('NsPrefix Parameter missing');
                        break;
                    case -12:
                        resolve('NsURI Parameter missing');
                        break;
                    case -13:
                        resolve('Workspace Path Parameter missing');
                        break;
                    case -20:
                        resolve('Encoding not found, check Server Log!');
                        break;
                    case -30:
                        resolve('IO Exception occurred, check Server Log!');
                        break;
                    default:
                        resolve('UNKNOWN ERROR');
                        break;
                }
            });
        });
    };
    EcoreFileGenServer.prototype.onStop = function (app) {
        this.dispose();
    };
    EcoreFileGenServer.prototype.dispose = function () {
        // do nothing
    };
    EcoreFileGenServer.prototype.setClient = function () {
        // do nothing
    };
    EcoreFileGenServer.prototype.spawnProcess = function (command, args) {
        var rawProcess = this.processFactory({ command: command, args: args });
        if (rawProcess.process === undefined) {
            return undefined;
        }
        rawProcess.process.on('error', this.onDidFailSpawnProcess.bind(this));
        var stderr = rawProcess.process.stderr;
        if (stderr) {
            stderr.on('data', this.logError.bind(this));
        }
        return rawProcess;
    };
    EcoreFileGenServer.prototype.onDidFailSpawnProcess = function (error) {
        this.logger.error(error);
    };
    EcoreFileGenServer.prototype.logError = function (data) {
        if (data) {
            this.logger.error("Ecore Gen: " + data);
        }
    };
    EcoreFileGenServer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(raw_process_1.RawProcessFactory)),
        __param(1, inversify_1.inject(core_1.ILogger)),
        __metadata("design:paramtypes", [Function, Object])
    ], EcoreFileGenServer);
    return EcoreFileGenServer;
}());
exports.EcoreFileGenServer = EcoreFileGenServer;
//# sourceMappingURL=ecore-file-generation.js.map