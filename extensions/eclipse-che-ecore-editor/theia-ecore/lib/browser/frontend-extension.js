"use strict";
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
var browser_1 = require("@eclipse-glsp/theia-integration/lib/browser");
var core_1 = require("@theia/core");
var browser_2 = require("@theia/core/lib/browser");
var inversify_1 = require("inversify");
var lib_1 = require("sprotty-theia/lib");
var generate_protocol_1 = require("../common/generate-protocol");
var ecore_diagram_configuration_1 = require("./diagram/ecore-diagram-configuration");
var ecore_diagram_manager_1 = require("./diagram/ecore-diagram-manager.");
var ecore_glsp_diagram_client_1 = require("./diagram/ecore-glsp-diagram-client");
var ecore_glsp__contribution_1 = require("./ecore-glsp--contribution");
var EcoreCommandContribution_1 = require("./EcoreCommandContribution");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(ecore_glsp__contribution_1.EcoreGLSPClientContribution).toSelf().inSingletonScope();
    bind(browser_1.GLSPClientContribution).toService(ecore_glsp__contribution_1.EcoreGLSPClientContribution);
    bind(ecore_glsp_diagram_client_1.EcoreGLSPDiagramClient).toSelf().inSingletonScope();
    bind(lib_1.DiagramConfiguration).to(ecore_diagram_configuration_1.EcoreDiagramConfiguration).inSingletonScope();
    bind(ecore_diagram_manager_1.EcoreDiagramManager).toSelf().inSingletonScope();
    bind(browser_2.FrontendApplicationContribution).toService(ecore_diagram_manager_1.EcoreDiagramManager);
    bind(browser_2.OpenHandler).toService(ecore_diagram_manager_1.EcoreDiagramManager);
    bind(browser_2.WidgetFactory).toService(ecore_diagram_manager_1.EcoreDiagramManager);
    bind(lib_1.DiagramManagerProvider).toProvider(function (context) {
        return function () {
            return new Promise(function (resolve) {
                var diagramManager = context.container.get(ecore_diagram_manager_1.EcoreDiagramManager);
                resolve(diagramManager);
            });
        };
    });
    bind(core_1.CommandContribution).to(EcoreCommandContribution_1.EcoreCommandContribution);
    bind(generate_protocol_1.FileGenServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_2.WebSocketConnectionProvider);
        return connection.createProxy(generate_protocol_1.FILEGEN_SERVICE_PATH);
    }).inSingletonScope();
});
//# sourceMappingURL=frontend-extension.js.map