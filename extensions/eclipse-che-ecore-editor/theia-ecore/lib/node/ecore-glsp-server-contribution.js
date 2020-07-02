"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var node_1 = require("@eclipse-glsp/theia-integration/lib/node");
var inversify_1 = require("inversify");
var net = require("net");
var server_1 = require("vscode-ws-jsonrpc/lib/server");
var ecore_language_1 = require("../common/ecore-language");
var glsp_server_launcher_1 = require("./glsp-server-launcher");
var EcoreGLServerContribution = /** @class */ (function (_super) {
    __extends(EcoreGLServerContribution, _super);
    function EcoreGLServerContribution() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = ecore_language_1.EcoreLanguage.Id;
        _this.name = ecore_language_1.EcoreLanguage.Name;
        _this.serverStarted = false;
        _this.description = {
            id: 'ecore',
            name: 'Ecore',
            documentSelector: ['ecore'],
            fileEvents: [
                '**/*.ecorediagram'
            ]
        };
        return _this;
    }
    EcoreGLServerContribution.prototype.start = function (clientConnection) {
        var socketPort = this.launchOptions.serverPort;
        if (socketPort) {
            var socket_1 = new net.Socket();
            var serverConnection = server_1.createSocketConnection(socket_1, socket_1, function () {
                socket_1.destroy();
            });
            this.forward(clientConnection, serverConnection);
            socket_1.connect(socketPort);
        }
        else {
            console.error("Error when trying to connect to Ecore GLSP server");
        }
    };
    __decorate([
        inversify_1.inject(glsp_server_launcher_1.GLSPLaunchOptionsSymb), inversify_1.optional(),
        __metadata("design:type", Object)
    ], EcoreGLServerContribution.prototype, "launchOptions", void 0);
    EcoreGLServerContribution = __decorate([
        inversify_1.injectable()
    ], EcoreGLServerContribution);
    return EcoreGLServerContribution;
}(node_1.BaseGLSPServerContribution));
exports.EcoreGLServerContribution = EcoreGLServerContribution;
//# sourceMappingURL=ecore-glsp-server-contribution.js.map