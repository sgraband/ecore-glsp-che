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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
var process_manager_1 = require("@theia/process/lib/node/process-manager");
var raw_process_1 = require("@theia/process/lib/node/raw-process");
var inversify_1 = require("inversify");
exports.GLSPLaunchOptionsSymb = Symbol.for('LaunchOptions');
var GLSPServerLauncher = /** @class */ (function () {
    function GLSPServerLauncher() {
    }
    GLSPServerLauncher.prototype.initialize = function () {
        if (!this.launchOptions.isRunning && !this.start()) {
            this.logError('Error during model server startup');
        }
    };
    GLSPServerLauncher.prototype.start = function () {
        if (!this.launchOptions.isRunning) {
            return this.startServer();
        }
        return true;
    };
    GLSPServerLauncher.prototype.startServer = function () {
        if (this.launchOptions.jarPath) {
            var args = ['-jar', this.launchOptions.jarPath, '--port', "" + this.launchOptions.serverPort];
            if (this.launchOptions.additionalArgs) {
                args = __spread(args, this.launchOptions.additionalArgs);
            }
            this.spawnProcessAsync('java', args);
        }
        else {
            this.logError('Could not start GLSP server. No path to executable is specified');
        }
        return true;
    };
    GLSPServerLauncher.prototype.spawnProcessAsync = function (command, args, options) {
        var _this = this;
        var rawProcess = this.processFactory({ command: command, args: args, options: options });
        rawProcess.errorStream.on('data', this.logError.bind(this));
        rawProcess.outputStream.on('data', this.logInfo.bind(this));
        return new Promise(function (resolve, reject) {
            rawProcess.onError(function (error) {
                _this.onDidFailSpawnProcess(error);
                if (error.code === 'ENOENT') {
                    var guess = command.split(/\s+/).shift();
                    if (guess) {
                        reject(new Error("Failed to spawn " + guess + "\nPerhaps it is not on the PATH."));
                        return;
                    }
                }
                reject(error);
            });
            process.nextTick(function () { return resolve(rawProcess); });
        });
    };
    GLSPServerLauncher.prototype.onDidFailSpawnProcess = function (error) {
        this.logError(error.message);
    };
    GLSPServerLauncher.prototype.logError = function (data) {
        if (data) {
            this.logger.error("ModelServerBackendContribution: " + data);
        }
    };
    GLSPServerLauncher.prototype.logInfo = function (data) {
        if (data) {
            this.logger.info("ModelServerBackendContribution: " + data);
        }
    };
    __decorate([
        inversify_1.inject(exports.GLSPLaunchOptionsSymb),
        __metadata("design:type", Object)
    ], GLSPServerLauncher.prototype, "launchOptions", void 0);
    __decorate([
        inversify_1.inject(raw_process_1.RawProcessFactory),
        __metadata("design:type", Function)
    ], GLSPServerLauncher.prototype, "processFactory", void 0);
    __decorate([
        inversify_1.inject(process_manager_1.ProcessManager),
        __metadata("design:type", process_manager_1.ProcessManager)
    ], GLSPServerLauncher.prototype, "processManager", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], GLSPServerLauncher.prototype, "logger", void 0);
    GLSPServerLauncher = __decorate([
        inversify_1.injectable()
    ], GLSPServerLauncher);
    return GLSPServerLauncher;
}());
exports.GLSPServerLauncher = GLSPServerLauncher;
//# sourceMappingURL=glsp-server-launcher.js.map