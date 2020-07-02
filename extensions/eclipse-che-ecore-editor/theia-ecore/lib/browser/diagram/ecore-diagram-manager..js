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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var client_1 = require("@eclipse-glsp/client");
var browser_1 = require("@eclipse-glsp/theia-integration/lib/browser");
var core_1 = require("@theia/core");
var browser_2 = require("@theia/core/lib/browser");
var browser_3 = require("@theia/editor/lib/browser");
var inversify_1 = require("inversify");
var sprotty_1 = require("sprotty");
var sprotty_theia_1 = require("sprotty-theia");
var ecore_language_1 = require("../../common/ecore-language");
var ecore_glsp_diagram_client_1 = require("./ecore-glsp-diagram-client");
var EcoreDiagramManager = /** @class */ (function (_super) {
    __extends(EcoreDiagramManager, _super);
    function EcoreDiagramManager(diagramClient, fileSaver, widgetManager, editorManager, messageService, notificationManager) {
        var _this = _super.call(this) || this;
        _this.diagramType = ecore_language_1.EcoreLanguage.DiagramType;
        _this.iconClass = "fa fa-project-diagram";
        _this.label = ecore_language_1.EcoreLanguage.Label + " Editor";
        _this._diagramConnector = new browser_1.GLSPTheiaSprottyConnector({ diagramClient: diagramClient,
            fileSaver: fileSaver, editorManager: editorManager, widgetManager: widgetManager, diagramManager: _this, messageService: messageService, notificationManager: notificationManager });
        return _this;
    }
    EcoreDiagramManager.prototype.createWidget = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var clientId, config, diContainer, diagramWidget;
            return __generator(this, function (_a) {
                if (sprotty_theia_1.DiagramWidgetOptions.is(options)) {
                    clientId = this.createClientId();
                    config = this.diagramConfigurationRegistry.get(options.diagramType);
                    diContainer = config.createContainer(clientId);
                    diagramWidget = new EcoreDiagramWidget(options, clientId + '_widget', diContainer, this.editorPreferences, this.diagramConnector);
                    return [2 /*return*/, diagramWidget];
                }
                throw Error('DiagramWidgetFactory needs DiagramWidgetOptions but got ' + JSON.stringify(options));
            });
        });
    };
    Object.defineProperty(EcoreDiagramManager.prototype, "fileExtensions", {
        get: function () {
            return [ecore_language_1.EcoreLanguage.FileExtension];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EcoreDiagramManager.prototype, "diagramConnector", {
        get: function () {
            return this._diagramConnector;
        },
        enumerable: true,
        configurable: true
    });
    EcoreDiagramManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(ecore_glsp_diagram_client_1.EcoreGLSPDiagramClient)),
        __param(1, inversify_1.inject(sprotty_theia_1.TheiaFileSaver)),
        __param(2, inversify_1.inject(browser_2.WidgetManager)),
        __param(3, inversify_1.inject(browser_3.EditorManager)),
        __param(4, inversify_1.inject(core_1.MessageService)),
        __param(5, inversify_1.inject(browser_1.GLSPNotificationManager)),
        __metadata("design:paramtypes", [ecore_glsp_diagram_client_1.EcoreGLSPDiagramClient,
            sprotty_theia_1.TheiaFileSaver,
            browser_2.WidgetManager,
            browser_3.EditorManager,
            core_1.MessageService,
            browser_1.GLSPNotificationManager])
    ], EcoreDiagramManager);
    return EcoreDiagramManager;
}(browser_1.GLSPDiagramManager));
exports.EcoreDiagramManager = EcoreDiagramManager;
var EcoreDiagramWidget = /** @class */ (function (_super) {
    __extends(EcoreDiagramWidget, _super);
    function EcoreDiagramWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EcoreDiagramWidget.prototype.initializeSprotty = function () {
        var _this = this;
        var modelSource = this.diContainer.get(sprotty_1.TYPES.ModelSource);
        if (modelSource instanceof sprotty_1.DiagramServer)
            modelSource.clientId = this.id;
        if (modelSource instanceof browser_1.GLSPTheiaDiagramServer && this.connector)
            this.connector.connect(modelSource);
        this.disposed.connect(function () {
            if (modelSource instanceof browser_1.GLSPTheiaDiagramServer && _this.connector)
                _this.connector.disconnect(modelSource);
        });
        this.actionDispatcher.dispatch(new sprotty_1.RequestModelAction(__assign({ sourceUri: this.options.uri.replace("file://", ""), needsClientLayout: "" + this.viewerOptions.needsClientLayout }, this.options)));
        this.actionDispatcher.dispatch(new client_1.RequestTypeHintsAction(this.options.diagramType));
        this.actionDispatcher.dispatch(new client_1.EnableToolPaletteAction());
    };
    return EcoreDiagramWidget;
}(browser_1.GLSPDiagramWidget));
exports.EcoreDiagramWidget = EcoreDiagramWidget;
//# sourceMappingURL=ecore-diagram-manager..js.map