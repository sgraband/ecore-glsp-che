"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var node_1 = require("@theia/core/lib/node");
var node_2 = require("@theia/languages/lib/node");
var inversify_1 = require("inversify");
var generate_protocol_1 = require("../common/generate-protocol");
var ecore_file_generation_1 = require("./ecore-file-generation");
var ecore_glsp_server_contribution_1 = require("./ecore-glsp-server-contribution");
var glsp_server_launcher_1 = require("./glsp-server-launcher");
var path_1 = require("path");
var EcoreGlspLaunchOptions = /** @class */ (function () {
    function EcoreGlspLaunchOptions() {
        this.isRunning = false;
        this.hostname = 'localhost';
        this.jarPath = path_1.resolve(path_1.join(__dirname, '..', '..', 'build', 'org.eclipse.emfcloud.ecore.glsp-0.0.2-SNAPSHOT-glsp.jar'));
        this.serverPort = 5007;
    }
    EcoreGlspLaunchOptions = __decorate([
        inversify_1.injectable()
    ], EcoreGlspLaunchOptions);
    return EcoreGlspLaunchOptions;
}());
exports.EcoreGlspLaunchOptions = EcoreGlspLaunchOptions;
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(glsp_server_launcher_1.GLSPLaunchOptionsSymb).to(EcoreGlspLaunchOptions).inSingletonScope();
    bind(node_2.LanguageServerContribution).to(ecore_glsp_server_contribution_1.EcoreGLServerContribution).inSingletonScope();
    bind(ecore_file_generation_1.EcoreFileGenServer).toSelf().inSingletonScope();
    bind(node_1.BackendApplicationContribution).toService(ecore_file_generation_1.EcoreFileGenServer);
    bind(core_1.ConnectionHandler).toDynamicValue(function (ctx) {
        return new core_1.JsonRpcConnectionHandler(generate_protocol_1.FILEGEN_SERVICE_PATH, function () {
            return ctx.container.get(ecore_file_generation_1.EcoreFileGenServer);
        });
    }).inSingletonScope();
    bind(node_1.BackendApplicationContribution).to(glsp_server_launcher_1.GLSPServerLauncher);
});
//# sourceMappingURL=backend-extension.js.map