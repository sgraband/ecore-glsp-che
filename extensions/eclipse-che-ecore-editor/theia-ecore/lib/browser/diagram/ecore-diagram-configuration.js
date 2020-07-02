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
var lib_1 = require("@eclipse-glsp/client/lib");
var core_1 = require("@theia/core");
var inversify_1 = require("inversify");
var lib_2 = require("sprotty-ecore/lib");
var lib_3 = require("sprotty-theia/lib");
var ecore_language_1 = require("../../common/ecore-language");
var ecore_glsp_theia_diagram_server_1 = require("./ecore-glsp-theia-diagram-server");
var EcoreDiagramConfiguration = /** @class */ (function () {
    function EcoreDiagramConfiguration() {
        this.diagramType = ecore_language_1.EcoreLanguage.DiagramType;
    }
    EcoreDiagramConfiguration.prototype.createContainer = function (widgetId) {
        var container = lib_2.createEcoreDiagramContainer(widgetId);
        container.bind(lib_1.TYPES.ModelSource).to(ecore_glsp_theia_diagram_server_1.EcoreGLSPTheiaDiagramServer).inSingletonScope();
        container.bind(lib_3.TheiaDiagramServer).toService(ecore_glsp_theia_diagram_server_1.EcoreGLSPTheiaDiagramServer);
        // container.rebind(KeyTool).to(TheiaKeyTool).inSingletonScope()
        container.bind(lib_1.TYPES.IActionHandlerInitializer).to(lib_3.TheiaSprottySelectionForwarder);
        container.bind(core_1.SelectionService).toConstantValue(this.selectionService);
        return container;
    };
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], EcoreDiagramConfiguration.prototype, "selectionService", void 0);
    EcoreDiagramConfiguration = __decorate([
        inversify_1.injectable()
    ], EcoreDiagramConfiguration);
    return EcoreDiagramConfiguration;
}());
exports.EcoreDiagramConfiguration = EcoreDiagramConfiguration;
//# sourceMappingURL=ecore-diagram-configuration.js.map