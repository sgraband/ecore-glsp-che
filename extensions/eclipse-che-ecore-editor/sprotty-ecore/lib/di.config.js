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
require("@eclipse-glsp/client/css/glsp-sprotty.css");
require("sprotty/css/edit-label.css");
var lib_1 = require("@eclipse-glsp/client/lib");
var di_config_1 = require("@eclipse-glsp/client/lib/features/execute/di.config");
var inversify_1 = require("inversify");
var lib_2 = require("sprotty/lib");
var edit_label_autocomplete_1 = require("./features/edit-label-autocomplete");
var feedback_1 = require("./feedback");
var model_1 = require("./model");
var views_1 = require("./views");
exports.default = (function (containerId) {
    var classDiagramModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
        rebind(lib_1.TYPES.ILogger).to(lib_1.ConsoleLogger).inSingletonScope();
        rebind(lib_1.TYPES.LogLevel).toConstantValue(lib_1.LogLevel.info);
        rebind(lib_2.EditLabelUI).to(edit_label_autocomplete_1.EditLabelUIAutocomplete);
        var context = { bind: bind, unbind: unbind, isBound: isBound, rebind: rebind };
        bind(lib_1.TYPES.IVNodePostprocessor).to(feedback_1.LabelSelectionFeedback);
        lib_1.configureModelElement(context, 'graph', lib_1.GLSPGraph, lib_1.SGraphView);
        lib_1.configureModelElement(context, 'node:class', model_1.LabeledNode, views_1.ClassNodeView);
        lib_1.configureModelElement(context, 'node:enum', model_1.LabeledNode, views_1.ClassNodeView);
        lib_1.configureModelElement(context, 'node:datatype', model_1.LabeledNode, views_1.ClassNodeView);
        lib_1.configureModelElement(context, 'label:name', model_1.SEditableLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'label:edge-name', model_1.SEditableLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'label:edge-multiplicity', model_1.SEditableLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'label:instancename', model_1.SLabelNode, views_1.LabelNodeView);
        lib_1.configureModelElement(context, 'node:attribute', model_1.SLabelNodeAttribute, views_1.LabelNodeView);
        lib_1.configureModelElement(context, 'node:enumliteral', model_1.SLabelNodeLiteral, views_1.LabelNodeView);
        lib_1.configureModelElement(context, 'node:operation', lib_1.SNode, lib_1.RectangularNodeView);
        lib_1.configureModelElement(context, 'label:text', lib_1.SLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'comp:comp', lib_1.SCompartment, lib_1.SCompartmentView);
        lib_1.configureModelElement(context, 'comp:header', lib_1.SCompartment, lib_1.SCompartmentView);
        lib_1.configureModelElement(context, 'icon:class', model_1.IconClass, views_1.IconView);
        lib_1.configureModelElement(context, 'icon:abstract', model_1.IconAbstract, views_1.IconView);
        lib_1.configureModelElement(context, 'icon:interface', model_1.IconInterface, views_1.IconView);
        lib_1.configureModelElement(context, 'icon:enum', model_1.IconEnum, views_1.IconView);
        lib_1.configureModelElement(context, 'icon:datatype', model_1.IconDataType, views_1.IconView);
        lib_1.configureModelElement(context, 'label:icon', lib_1.SLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'html', lib_1.HtmlRoot, lib_1.HtmlRootView);
        lib_1.configureModelElement(context, 'routing-point', lib_1.SRoutingHandle, lib_1.SRoutingHandleView);
        lib_1.configureModelElement(context, 'volatile-routing-point', lib_1.SRoutingHandle, lib_1.SRoutingHandleView);
        lib_1.configureModelElement(context, 'edge:reference', model_1.ArrowEdge, views_1.ArrowEdgeView);
        lib_1.configureModelElement(context, 'edge:bidirectional_reference', model_1.BidirectionalArrowEdge, views_1.BidirectionalEdgeView);
        lib_1.configureModelElement(context, 'edge:bidirectional_composition', model_1.CompositionEdge, views_1.CompositionEdgeView);
        lib_1.configureModelElement(context, 'edge:inheritance', model_1.InheritanceEdge, views_1.InheritanceEdgeView);
        lib_1.configureModelElement(context, 'edge:composition', model_1.CompositionEdge, views_1.CompositionEdgeView);
        lib_1.configureModelElement(context, 'edge', lib_1.SEdge, lib_1.PolylineEdgeView);
        lib_1.configureViewerOptions(context, {
            needsClientLayout: true,
            baseDiv: containerId
        });
    });
    var container = new inversify_1.Container();
    container.load(lib_1.decorationModule, lib_1.validationModule, lib_1.defaultModule, lib_1.glspMouseToolModule, lib_1.defaultGLSPModule, lib_1.glspSelectModule, lib_1.boundsModule, lib_1.viewportModule, lib_1.toolsModule, lib_1.glspHoverModule, lib_1.fadeModule, lib_1.exportModule, lib_1.expandModule, lib_1.openModule, lib_1.buttonModule, lib_1.modelSourceModule, lib_1.labelEditModule, lib_1.labelEditUiModule, lib_1.glspEditLabelValidationModule, classDiagramModule, lib_1.saveModule, di_config_1.default, lib_1.toolFeedbackModule, lib_1.modelHintsModule, lib_2.contextMenuModule, lib_1.glspContextMenuModule, lib_1.glspServerCopyPasteModule, lib_1.copyPasteContextMenuModule, lib_1.commandPaletteModule, lib_1.glspCommandPaletteModule, lib_1.paletteModule, lib_1.requestResponseModule, lib_1.routingModule, lib_1.edgeLayoutModule, lib_1.zorderModule, lib_1.layoutCommandsModule);
    return container;
});
//# sourceMappingURL=di.config.js.map