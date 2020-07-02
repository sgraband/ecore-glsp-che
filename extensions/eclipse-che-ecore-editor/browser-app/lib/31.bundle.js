(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "../node_modules/@eclipse-glsp/theia-integration/css/command-palette.css":
/*!*******************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/css/command-palette.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader!./command-palette.css */ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/theia-integration/css/command-palette.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-client.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-client.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
 * Copyright (c) 2019 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../../common */ "../node_modules/@eclipse-glsp/theia-integration/lib/common/index.js");
var glsp_client_contribution_1 = __webpack_require__(/*! ../language/glsp-client-contribution */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-contribution.js");
var GLSPDiagramClient = /** @class */ (function () {
    function GLSPDiagramClient(glspClientContribution, editorManager) {
        var _this = this;
        this.glspClientContribution = glspClientContribution;
        this.editorManager = editorManager;
        this.actionMessageReceivers = [];
        this.glspClientContribution.glspClient
            .then(function (gc) { return gc.onNotification(common_1.ActionMessageNotification.type, _this.onMessageReceived.bind(_this)); })
            .catch(function (err) { return console.error(err); });
    }
    GLSPDiagramClient.prototype.sendThroughLsp = function (message) {
        this.glspClientContribution.glspClient
            .then(function (gc) { return gc.onReady()
            .then(function () { return gc.sendNotification(common_1.ActionMessageNotification.type, message); }); });
    };
    GLSPDiagramClient.prototype.onMessageReceived = function (message) {
        this.actionMessageReceivers.forEach(function (client) { return client.onMessageReceived(message); });
    };
    Object.defineProperty(GLSPDiagramClient.prototype, "glspClient", {
        get: function () {
            return this.glspClientContribution.glspClient;
        },
        enumerable: true,
        configurable: true
    });
    GLSPDiagramClient.prototype.didClose = function (clientId) {
        // this.glspClient.then(gc => gc.stop())
    };
    GLSPDiagramClient.prototype.connect = function (client) {
        this.actionMessageReceivers.push(client);
    };
    GLSPDiagramClient.prototype.disconnect = function (client) {
        var index = this.actionMessageReceivers.indexOf(client);
        if (index >= 0) {
            this.actionMessageReceivers.splice(index);
        }
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], GLSPDiagramClient.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], GLSPDiagramClient.prototype, "commandsRegistry", void 0);
    GLSPDiagramClient = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Object, browser_2.EditorManager])
    ], GLSPDiagramClient);
    return GLSPDiagramClient;
}());
exports.GLSPDiagramClient = GLSPDiagramClient;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-manager.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-manager.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var glsp_diagram_widget_1 = __webpack_require__(/*! ./glsp-diagram-widget */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-widget.js");
var GLSPDiagramManager = /** @class */ (function (_super) {
    __extends(GLSPDiagramManager, _super);
    function GLSPDiagramManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GLSPDiagramManager.prototype.createWidget = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var clientId, config, diContainer;
            return __generator(this, function (_a) {
                if (sprotty_theia_1.DiagramWidgetOptions.is(options)) {
                    clientId = this.createClientId();
                    config = this.diagramConfigurationRegistry.get(options.diagramType);
                    diContainer = config.createContainer(clientId);
                    return [2 /*return*/, new glsp_diagram_widget_1.GLSPDiagramWidget(options, clientId + '_widget', diContainer, this.editorPreferences, this.diagramConnector)];
                }
                throw Error('DiagramWidgetFactory needs DiagramWidgetOptions but got ' + JSON.stringify(options));
            });
        });
    };
    GLSPDiagramManager.prototype.canHandle = function (uri, options) {
        var e_1, _a;
        try {
            for (var _b = __values(this.fileExtensions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var extension = _c.value;
                if (uri.path.toString().endsWith(extension)) {
                    return 1001;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return 0;
    };
    Object.defineProperty(GLSPDiagramManager.prototype, "diagramConnector", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(browser_1.EditorPreferences),
        __metadata("design:type", Object)
    ], GLSPDiagramManager.prototype, "editorPreferences", void 0);
    GLSPDiagramManager = __decorate([
        inversify_1.injectable()
    ], GLSPDiagramManager);
    return GLSPDiagramManager;
}(sprotty_theia_1.DiagramManager));
exports.GLSPDiagramManager = GLSPDiagramManager;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-widget.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-widget.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2019 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var client_1 = __webpack_require__(/*! @eclipse-glsp/client */ "../node_modules/@eclipse-glsp/client/lib/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var glsp_theia_diagram_server_1 = __webpack_require__(/*! ./glsp-theia-diagram-server */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-diagram-server.js");
var GLSPDiagramWidget = /** @class */ (function (_super) {
    __extends(GLSPDiagramWidget, _super);
    function GLSPDiagramWidget(options, widgetId, diContainer, editorPreferences, connector) {
        var _this = _super.call(this, options, widgetId, diContainer, connector) || this;
        _this.widgetId = widgetId;
        _this.diContainer = diContainer;
        _this.editorPreferences = editorPreferences;
        _this.connector = connector;
        _this.saveable = new SaveableGLSPModelSource(_this.actionDispatcher, _this.diContainer.get(client_1.TYPES.ModelSource));
        _this.updateSaveable();
        var prefUpdater = editorPreferences.onPreferenceChanged(function () { return _this.updateSaveable(); });
        _this.toDispose.push(prefUpdater);
        _this.toDispose.push(_this.saveable);
        return _this;
    }
    GLSPDiagramWidget.prototype.updateSaveable = function () {
        this.saveable.autoSave = this.editorPreferences['editor.autoSave'];
        this.saveable.autoSaveDelay = this.editorPreferences['editor.autoSaveDelay'];
    };
    GLSPDiagramWidget.prototype.initializeSprotty = function () {
        var _this = this;
        var modelSource = this.diContainer.get(client_1.TYPES.ModelSource);
        if (modelSource instanceof client_1.DiagramServer)
            modelSource.clientId = this.id;
        if (modelSource instanceof glsp_theia_diagram_server_1.GLSPTheiaDiagramServer && this.connector)
            this.connector.connect(modelSource);
        this.disposed.connect(function () {
            if (modelSource instanceof glsp_theia_diagram_server_1.GLSPTheiaDiagramServer && _this.connector)
                _this.connector.disconnect(modelSource);
        });
        this.actionDispatcher.dispatch(new client_1.RequestModelAction(__assign({ sourceUri: this.options.uri.replace("file://", ""), needsClientLayout: "" + this.viewerOptions.needsClientLayout }, this.options)));
        this.actionDispatcher.dispatch(new client_1.RequestTypeHintsAction(this.options.diagramType));
        this.actionDispatcher.dispatch(new client_1.EnableToolPaletteAction());
    };
    GLSPDiagramWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        if (this.diContainer.isBound(client_1.GLSP_TYPES.ICopyPasteHandler)) {
            this.copyPasteHandler = this.diContainer.get(client_1.GLSP_TYPES.ICopyPasteHandler);
            this.addClipboardListener(this.node, 'copy', function (e) { return _this.handleCopy(e); });
            this.addClipboardListener(this.node, 'paste', function (e) { return _this.handlePaste(e); });
            this.addClipboardListener(this.node, 'cut', function (e) { return _this.handleCut(e); });
        }
    };
    GLSPDiagramWidget.prototype.handleCopy = function (e) {
        if (this.copyPasteHandler) {
            this.copyPasteHandler.handleCopy(e);
        }
    };
    GLSPDiagramWidget.prototype.handleCut = function (e) {
        if (this.copyPasteHandler) {
            this.copyPasteHandler.handleCut(e);
        }
    };
    GLSPDiagramWidget.prototype.handlePaste = function (e) {
        if (this.copyPasteHandler) {
            this.copyPasteHandler.handlePaste(e);
        }
    };
    return GLSPDiagramWidget;
}(sprotty_theia_1.DiagramWidget));
exports.GLSPDiagramWidget = GLSPDiagramWidget;
var SaveableGLSPModelSource = /** @class */ (function () {
    function SaveableGLSPModelSource(actionDispatcher, modelSource) {
        var _this = this;
        this.actionDispatcher = actionDispatcher;
        this.modelSource = modelSource;
        this.isAutoSave = "on";
        this.autoSaveDelay = 500;
        this.autoSaveJobs = new common_1.DisposableCollection();
        this.isDirty = false;
        this.dirtyChangedEmitter = new common_1.Emitter();
        if (glsp_theia_diagram_server_1.DirtyStateNotifier.is(this.modelSource)) {
            this.modelSource.onDirtyStateChange(function (dirtyState) { return _this.dirty = dirtyState.isDirty; });
        }
    }
    Object.defineProperty(SaveableGLSPModelSource.prototype, "onDirtyChanged", {
        get: function () {
            return this.dirtyChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    SaveableGLSPModelSource.prototype.save = function () {
        return this.actionDispatcher.dispatch(new client_1.SaveModelAction());
    };
    Object.defineProperty(SaveableGLSPModelSource.prototype, "dirty", {
        get: function () {
            return this.isDirty;
        },
        set: function (newDirty) {
            var oldValue = this.isDirty;
            if (oldValue !== newDirty) {
                this.isDirty = newDirty;
                this.dirtyChangedEmitter.fire(undefined);
            }
            this.scheduleAutoSave();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaveableGLSPModelSource.prototype, "autoSave", {
        get: function () {
            return this.isAutoSave;
        },
        set: function (isAutoSave) {
            this.isAutoSave = isAutoSave;
            if (this.shouldAutoSave) {
                this.scheduleAutoSave();
            }
            else {
                this.autoSaveJobs.dispose();
            }
        },
        enumerable: true,
        configurable: true
    });
    SaveableGLSPModelSource.prototype.scheduleAutoSave = function () {
        var _this = this;
        if (this.shouldAutoSave) {
            this.autoSaveJobs.dispose();
            var autoSaveJob_1 = window.setTimeout(function () { return _this.doAutoSave(); }, this.autoSaveDelay);
            var disposableAutoSaveJob = common_1.Disposable.create(function () { return window.clearTimeout(autoSaveJob_1); });
            this.autoSaveJobs.push(disposableAutoSaveJob);
        }
    };
    SaveableGLSPModelSource.prototype.doAutoSave = function () {
        if (this.shouldAutoSave) {
            this.save();
        }
    };
    Object.defineProperty(SaveableGLSPModelSource.prototype, "shouldAutoSave", {
        get: function () {
            return this.dirty && this.autoSave === 'on';
        },
        enumerable: true,
        configurable: true
    });
    SaveableGLSPModelSource.prototype.dispose = function () {
        this.autoSaveJobs.dispose();
        this.dirtyChangedEmitter.dispose();
    };
    return SaveableGLSPModelSource;
}());
exports.SaveableGLSPModelSource = SaveableGLSPModelSource;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-diagram-server.js":
/*!********************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-diagram-server.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2019 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var client_1 = __webpack_require__(/*! @eclipse-glsp/client */ "../node_modules/@eclipse-glsp/client/lib/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var GLSPTheiaDiagramServer = /** @class */ (function (_super) {
    __extends(GLSPTheiaDiagramServer, _super);
    function GLSPTheiaDiagramServer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handledActionEventEmitter = new common_1.Emitter();
        _this.dirtyStateChangeEmitter = new common_1.Emitter();
        _this.dirtyState = { isDirty: false };
        return _this;
    }
    GLSPTheiaDiagramServer.prototype.initialize = function (registry) {
        registry.register(SetDirtyStateAction.KIND, this);
        registry.register(client_1.ServerMessageAction.KIND, this);
        client_1.registerDefaultGLSPServerActions(registry, this);
    };
    GLSPTheiaDiagramServer.prototype.getSourceURI = function () {
        return this.sourceUri;
    };
    Object.defineProperty(GLSPTheiaDiagramServer.prototype, "onHandledAction", {
        get: function () {
            return this.handledActionEventEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GLSPTheiaDiagramServer.prototype, "onDirtyStateChange", {
        get: function () {
            return this.dirtyStateChangeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    GLSPTheiaDiagramServer.prototype.setDirty = function (dirty) {
        if (dirty !== this.dirtyState.isDirty) {
            this.dirtyState = { isDirty: dirty };
            this.dirtyStateChangeEmitter.fire(this.dirtyState);
        }
    };
    GLSPTheiaDiagramServer.prototype.handle = function (action) {
        this.handledActionEventEmitter.fire(action);
        return _super.prototype.handle.call(this, action);
    };
    GLSPTheiaDiagramServer.prototype.handleLocally = function (action) {
        if (isSetDirtyStateAction(action)) {
            this.setDirty(action.isDirty);
            return false;
        }
        if (client_1.isServerMessageAction(action)) {
            return this.handleServerMessageAction(action);
        }
        return _super.prototype.handleLocally.call(this, action);
    };
    GLSPTheiaDiagramServer.prototype.handleComputedBounds = function (action) {
        return true;
    };
    GLSPTheiaDiagramServer.prototype.handleServerMessageAction = function (status) {
        this.connector.showMessage(this.clientId, status);
        return false;
    };
    GLSPTheiaDiagramServer = __decorate([
        inversify_1.injectable()
    ], GLSPTheiaDiagramServer);
    return GLSPTheiaDiagramServer;
}(sprotty_theia_1.TheiaDiagramServer));
exports.GLSPTheiaDiagramServer = GLSPTheiaDiagramServer;
var NotifyingModelSource;
(function (NotifyingModelSource) {
    function is(arg) {
        return !!arg && ('onHandledAction' in arg);
    }
    NotifyingModelSource.is = is;
})(NotifyingModelSource = exports.NotifyingModelSource || (exports.NotifyingModelSource = {}));
var SetDirtyStateAction = /** @class */ (function () {
    function SetDirtyStateAction(isDirty) {
        this.isDirty = isDirty;
        this.kind = SetDirtyStateAction.KIND;
    }
    SetDirtyStateAction.KIND = 'setDirtyState';
    return SetDirtyStateAction;
}());
exports.SetDirtyStateAction = SetDirtyStateAction;
function isSetDirtyStateAction(action) {
    return SetDirtyStateAction.KIND === action.kind && ('isDirty' in action);
}
exports.isSetDirtyStateAction = isSetDirtyStateAction;
var DirtyStateNotifier;
(function (DirtyStateNotifier) {
    function is(arg) {
        return !!arg && ('onDirtyStateChange' in arg);
    }
    DirtyStateNotifier.is = is;
})(DirtyStateNotifier = exports.DirtyStateNotifier || (exports.DirtyStateNotifier = {}));


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/index.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2019 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./theia-command-palette */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/theia-command-palette.js"));
// diagram export
__export(__webpack_require__(/*! ./diagram/glsp-diagram-client */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-client.js"));
__export(__webpack_require__(/*! ./diagram/glsp-diagram-manager */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-manager.js"));
__export(__webpack_require__(/*! ./diagram/glsp-diagram-widget */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-widget.js"));
__export(__webpack_require__(/*! ./diagram/glsp-theia-diagram-server */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-diagram-server.js"));
__export(__webpack_require__(/*! ./diagram/glsp-theia-sprotty-connector */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-sprotty-connector.js"));
__export(__webpack_require__(/*! ./diagram/glsp-notification-manager */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-notification-manager.js"));
__export(__webpack_require__(/*! ./diagram/glsp-theia-context-menu-service */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-context-menu-service.js"));
// language export
__export(__webpack_require__(/*! ./language/glsp-client */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client.js"));
__export(__webpack_require__(/*! ./language/glsp-client-contribution */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-contribution.js"));
__export(__webpack_require__(/*! ./language/glsp-client-provider */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-provider.js"));
__export(__webpack_require__(/*! ./language/glsp-client-services */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-services.js"));
__export(__webpack_require__(/*! ./language/glsp-frontend-contribution */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-frontend-contribution.js"));


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/theia-command-palette.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/theia-command-palette.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2019 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
__webpack_require__(/*! ../../css/command-palette.css */ "../node_modules/@eclipse-glsp/theia-integration/css/command-palette.css");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var TheiaCommandPalette = /** @class */ (function (_super) {
    __extends(TheiaCommandPalette, _super);
    function TheiaCommandPalette() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingIndicatorClasses = ['loading', 'fa', 'fa-spinner', 'fa-pulse', 'fa-3x', 'fa-fw'];
        return _this;
    }
    return TheiaCommandPalette;
}(sprotty_1.CommandPalette));
exports.TheiaCommandPalette = TheiaCommandPalette;


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/theia-integration/css/command-palette.css":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@eclipse-glsp/theia-integration/css/command-palette.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (c) 2019 EclipseSource and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.command-palette {\n    z-index: var(--theia-menu-z-index);\n    -webkit-animation: fadein 0.3s;\n    -moz-animation: fadein 0.3s;\n    -ms-animation: fadein 0.3s;\n    -o-animation: fadein 0.3s;\n    animation: fadein 0.3s;\n}\n\n.command-palette.validation .validation-decorator {\n    position: absolute;\n    padding-left: 5px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border-radius: 5px 5px 0px 0px;\n    color: white;\n    /* indent second line for icon */\n    padding-left: 25px;\n    text-indent: -10px;\n    /* let error decoration fade in */\n    -webkit-animation: fadein 0.3s;\n    -moz-animation: fadein 0.3s;\n    -ms-animation: fadein 0.3s;\n    -o-animation: fadein 0.3s;\n    animation: fadein 0.3s;\n}\n\n.command-palette.validation.error input, .command-palette.validation.error input:focus {\n    color: var(--theia-inputValidation-errorForeground);\n    outline-color: var(--theia-inputValidation-errorBorder);\n}\n\n.command-palette.validation.error .validation-decorator.error {\n    border: 1px solid var(--theia-inputValidation-errorBorder);\n    background-color: var(--theia-inputValidation-errorBorder);\n}\n\n.command-palette.validation.warning input, .command-palette.validation.warning input:focus {\n    color: var(--theia-inputValidation-warningForeground);\n    outline-color: var(--theia-inputValidation-warningBorder);\n}\n\n.command-palette.validation.warning .validation-decorator.warning {\n    border: 1px solid var(--theia-inputValidation-warningBorder);\n    background-color: var(--theia-inputValidation-warningBorder);\n}\n\n.command-palette {\n    box-shadow: var(--theia-border-width) var(--theia-border-width) var(--theia-widget-shadow);\n    background-color: var(--theia-menu-background);\n}\n\n.command-palette input {\n    background: var(--theia-input-background);\n    color: var(--theia-input-foreground);\n    border: var(--theia-border-width) solid var(--theia-input-border);\n    font-family: var(--theia-ui-font-family);\n    font-size: var(--theia-ui-font-size1);\n    line-height: var(--theia-content-line-height);\n    padding-left: 5px;\n}\n\n.command-palette .command-palette-suggestions {\n    background: inherit;\n    line-height: var(--theia-content-line-height);\n}\n\n.command-palette .command-palette-suggestions>div:hover:not(.group) {\n    background: var(--theia-menubar-selectionBackground);\n}\n\n.command-palette .command-palette-suggestions>div.selected {\n    background: var(--theia-menu-selectionBackground);\n    color: var(--theia-menu-selectionForeground);\n}\n\n.command-palette .loading {\n    position: absolute;\n    font-size: inherit;\n    top: 5px;\n    right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/sprotty/css/edit-label.css":
/*!*****************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/sprotty/css/edit-label.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (c) 2019-2020 EclipseSource and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.label-edit input, .label-edit textarea {\n    background: rgba(255, 255, 255, 0.5);\n    border-radius: 5px;\n    border: 0;\n    width: 99%;\n    height: 99%;\n}\n\n.label-edit input:focus, .label-edit textarea:focus {\n    outline: none;\n    outline-offset: 0px;\n}\n\n.label-edit {\n    border-left: 1px dotted gray;\n}\n\n.label-edit.validation-warning {\n    color: orange;\n    border-left: 1px dotted orange;\n}\n\n.label-edit.validation-error {\n    color: red;\n    border-left: 1px dotted red;\n}", ""]);

// exports


/***/ }),

/***/ "../node_modules/sprotty/css/edit-label.css":
/*!**************************************************!*\
  !*** ../node_modules/sprotty/css/edit-label.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!./edit-label.css */ "../node_modules/css-loader/index.js!../node_modules/sprotty/css/edit-label.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=31.bundle.js.map