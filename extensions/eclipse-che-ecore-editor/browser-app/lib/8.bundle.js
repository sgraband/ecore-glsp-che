(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "../node_modules/@theia/output/lib/browser/output-contribution.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/output/lib/browser/output-contribution.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "../node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var output_widget_1 = __webpack_require__(/*! ./output-widget */ "../node_modules/@theia/output/lib/browser/output-widget.js");
var OutputCommands;
(function (OutputCommands) {
    var OUTPUT_CATEGORY = 'Output';
    OutputCommands.CLEAR_OUTPUT_TOOLBAR = {
        id: 'output:clear',
        category: OUTPUT_CATEGORY,
        label: 'Clear Output',
        iconClass: 'clear-all'
    };
})(OutputCommands = exports.OutputCommands || (exports.OutputCommands = {}));
var OutputContribution = /** @class */ (function (_super) {
    __extends(OutputContribution, _super);
    function OutputContribution() {
        return _super.call(this, {
            widgetId: output_widget_1.OUTPUT_WIDGET_KIND,
            widgetName: 'Output',
            defaultWidgetOptions: {
                area: 'bottom'
            },
            toggleCommandId: 'output:toggle',
            toggleKeybinding: 'ctrlcmd+shift+u'
        }) || this;
    }
    OutputContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(OutputCommands.CLEAR_OUTPUT_TOOLBAR, {
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return true; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return true; }); },
            execute: function (widget) { return _this.withWidget(widget, function (outputWidget) { return _this.clear(outputWidget); }); }
        });
    };
    OutputContribution.prototype.clear = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                widget.clear();
                return [2 /*return*/];
            });
        });
    };
    OutputContribution.prototype.withWidget = function (widget, cb) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof output_widget_1.OutputWidget && widget.id === output_widget_1.OUTPUT_WIDGET_KIND) {
            return cb(widget);
        }
        return false;
    };
    OutputContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], OutputContribution);
    return OutputContribution;
}(view_contribution_1.AbstractViewContribution));
exports.OutputContribution = OutputContribution;


/***/ }),

/***/ "../node_modules/@theia/output/lib/browser/output-widget.js":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/output/lib/browser/output-widget.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var output_channel_1 = __webpack_require__(/*! ../common/output-channel */ "../node_modules/@theia/output/lib/common/output-channel.js");
var react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
__webpack_require__(/*! ../../src/browser/style/output.css */ "../node_modules/@theia/output/src/browser/style/output.css");
exports.OUTPUT_WIDGET_KIND = 'outputView';
var OutputWidget = /** @class */ (function (_super) {
    __extends(OutputWidget, _super);
    function OutputWidget() {
        var _this = _super.call(this) || this;
        _this.id = exports.OUTPUT_WIDGET_KIND;
        _this.title.label = 'Output';
        _this.title.caption = 'Output';
        _this.title.iconClass = 'fa output-tab-icon';
        _this.title.closable = true;
        _this.addClass('theia-output');
        _this.node.tabIndex = 0;
        return _this;
    }
    OutputWidget_1 = OutputWidget;
    OutputWidget.prototype.init = function () {
        var _this = this;
        this.outputChannelManager.getChannels().forEach(this.registerListener.bind(this));
        this.toDispose.push(this.outputChannelManager.onChannelAdded(function (channel) {
            _this.registerListener(channel);
            _this.update();
        }));
        this.toDispose.push(this.outputChannelManager.onSelectedChannelChange(function (event) {
            _this.update();
        }));
        this.update();
    };
    OutputWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        var channelSelector = document.getElementById(OutputWidget_1.IDs.CHANNEL_LIST);
        if (channelSelector) {
            channelSelector.focus();
        }
        else {
            this.node.focus();
        }
    };
    OutputWidget.prototype.registerListener = function (outputChannel) {
        var _this = this;
        this.toDispose.push(outputChannel.onContentChange(function (c) {
            if (outputChannel === _this.outputChannelManager.selectedChannel) {
                _this.update();
            }
        }));
    };
    OutputWidget.prototype.render = function () {
        return React.createElement(React.Fragment, null, this.renderChannelContents());
    };
    OutputWidget.prototype.clear = function () {
        if (this.outputChannelManager.selectedChannel) {
            this.outputChannelManager.selectedChannel.clear();
        }
    };
    OutputWidget.prototype.renderChannelContents = function () {
        return React.createElement("div", { id: OutputWidget_1.IDs.CONTENTS }, this.renderLines());
    };
    OutputWidget.prototype.renderLines = function () {
        var e_1, _a, e_2, _b;
        var id = 0;
        var result = [];
        var style = {
            whiteSpace: 'pre',
            fontFamily: 'monospace',
        };
        if (this.outputChannelManager.selectedChannel) {
            try {
                for (var _c = __values(this.outputChannelManager.selectedChannel.getLines()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var text = _d.value;
                    var lines = text.split(/[\n\r]+/);
                    try {
                        for (var lines_1 = (e_2 = void 0, __values(lines)), lines_1_1 = lines_1.next(); !lines_1_1.done; lines_1_1 = lines_1.next()) {
                            var line = lines_1_1.value;
                            result.push(React.createElement("div", { style: style, key: id++ }, line));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (lines_1_1 && !lines_1_1.done && (_b = lines_1.return)) _b.call(lines_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (result.length === 0) {
            result.push(React.createElement("div", { style: style, key: id++ }, '<no output yet>'));
        }
        return result;
    };
    OutputWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        setTimeout(function () {
            var div = document.getElementById(OutputWidget_1.IDs.CONTENTS);
            if (div && div.children.length > 0) {
                div.children[div.children.length - 1].scrollIntoView(false);
            }
        });
    };
    var OutputWidget_1;
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], OutputWidget.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OutputWidget.prototype, "init", null);
    OutputWidget = OutputWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], OutputWidget);
    return OutputWidget;
}(react_widget_1.ReactWidget));
exports.OutputWidget = OutputWidget;
(function (OutputWidget) {
    var IDs;
    (function (IDs) {
        IDs.CONTENTS = 'outputContents';
        IDs.CHANNEL_LIST = 'outputChannelList';
    })(IDs = OutputWidget.IDs || (OutputWidget.IDs = {}));
})(OutputWidget = exports.OutputWidget || (exports.OutputWidget = {}));
exports.OutputWidget = OutputWidget;


/***/ }),

/***/ "../node_modules/@theia/output/lib/common/output-channel.js":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/output/lib/common/output-channel.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var output_preferences_1 = __webpack_require__(/*! ./output-preferences */ "../node_modules/@theia/output/lib/common/output-preferences.js");
var vscode_ws_jsonrpc_1 = __webpack_require__(/*! vscode-ws-jsonrpc */ "../node_modules/vscode-ws-jsonrpc/lib/index.js");
var OutputChannelManager = /** @class */ (function () {
    function OutputChannelManager() {
        this.channels = new Map();
        this.channelDeleteEmitter = new core_1.Emitter();
        this.channelAddedEmitter = new core_1.Emitter();
        this.selectedChannelEmitter = new core_1.Emitter();
        this.listOrSelectionEmitter = new core_1.Emitter();
        this.onChannelDelete = this.channelDeleteEmitter.event;
        this.onChannelAdded = this.channelAddedEmitter.event;
        this.onSelectedChannelChange = this.selectedChannelEmitter.event;
        this.onListOrSelectionChange = this.listOrSelectionEmitter.event;
        this.toDispose = new vscode_ws_jsonrpc_1.DisposableCollection();
    }
    OutputChannelManager.prototype.init = function () {
        var _this = this;
        this.getChannels().forEach(this.registerListener.bind(this));
        this.toDispose.push(this.onChannelAdded(function (channel) {
            _this.listOrSelectionEmitter.fire(undefined);
            _this.registerListener(channel);
        }));
        this.toDispose.push(this.onChannelDelete(function (event) {
            _this.listOrSelectionEmitter.fire(undefined);
            if (_this.selectedChannel && _this.selectedChannel.name === event.channelName) {
                _this.selectedChannel = _this.getVisibleChannels()[0];
            }
        }));
    };
    OutputChannelManager.prototype.registerListener = function (outputChannel) {
        var _this = this;
        if (!this.selectedChannel) {
            this.selectedChannel = outputChannel;
        }
        this.toDispose.push(outputChannel.onVisibilityChange(function (event) {
            if (event.visible) {
                _this.selectedChannel = outputChannel;
            }
            else if (outputChannel === _this.selectedChannel) {
                _this.selectedChannel = _this.getVisibleChannels()[0];
            }
        }));
    };
    OutputChannelManager.prototype.getChannel = function (name) {
        var existing = this.channels.get(name);
        if (existing) {
            return existing;
        }
        var channel = new OutputChannel(name, this.preferences);
        this.channels.set(name, channel);
        this.channelAddedEmitter.fire(channel);
        return channel;
    };
    OutputChannelManager.prototype.deleteChannel = function (name) {
        this.channels.delete(name);
        this.channelDeleteEmitter.fire({ channelName: name });
    };
    OutputChannelManager.prototype.getChannels = function () {
        return Array.from(this.channels.values());
    };
    OutputChannelManager.prototype.getVisibleChannels = function () {
        return this.getChannels().filter(function (channel) { return channel.isVisible; });
    };
    OutputChannelManager.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(OutputChannelManager.prototype, "selectedChannel", {
        get: function () {
            return this.selectedChannelValue;
        },
        set: function (channel) {
            this.selectedChannelValue = channel;
            this.selectedChannelEmitter.fire(undefined);
            this.listOrSelectionEmitter.fire(undefined);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(output_preferences_1.OutputPreferences),
        __metadata("design:type", Object)
    ], OutputChannelManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OutputChannelManager.prototype, "init", null);
    OutputChannelManager = __decorate([
        inversify_1.injectable()
    ], OutputChannelManager);
    return OutputChannelManager;
}());
exports.OutputChannelManager = OutputChannelManager;
var OutputChannel = /** @class */ (function () {
    function OutputChannel(name, preferences) {
        this.name = name;
        this.preferences = preferences;
        this.visibilityChangeEmitter = new core_1.Emitter();
        this.contentChangeEmitter = new core_1.Emitter();
        this.lines = [];
        this.visible = true;
        this.onVisibilityChange = this.visibilityChangeEmitter.event;
        this.onContentChange = this.contentChangeEmitter.event;
    }
    OutputChannel.prototype.append = function (value) {
        if (this.currentLine === undefined) {
            this.currentLine = value;
        }
        else {
            this.currentLine += value;
        }
        this.contentChangeEmitter.fire(this);
    };
    OutputChannel.prototype.appendLine = function (line) {
        if (this.currentLine !== undefined) {
            this.lines.push(this.currentLine + line);
            this.currentLine = undefined;
        }
        else {
            this.lines.push(line);
        }
        var maxChannelHistory = this.preferences['output.maxChannelHistory'];
        if (this.lines.length > maxChannelHistory) {
            this.lines.splice(0, this.lines.length - maxChannelHistory);
        }
        this.contentChangeEmitter.fire(this);
    };
    OutputChannel.prototype.clear = function () {
        this.lines.length = 0;
        this.currentLine = undefined;
        this.contentChangeEmitter.fire(this);
    };
    OutputChannel.prototype.setVisibility = function (visible) {
        this.visible = visible;
        this.visibilityChangeEmitter.fire({ visible: visible });
    };
    OutputChannel.prototype.getLines = function () {
        if (this.currentLine !== undefined) {
            return __spread(this.lines, [this.currentLine]);
        }
        else {
            return this.lines;
        }
    };
    Object.defineProperty(OutputChannel.prototype, "isVisible", {
        get: function () {
            return this.visible;
        },
        enumerable: true,
        configurable: true
    });
    return OutputChannel;
}());
exports.OutputChannel = OutputChannel;


/***/ }),

/***/ "../node_modules/@theia/output/lib/common/output-preferences.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/output/lib/common/output-preferences.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
exports.OutputConfigSchema = {
    'type': 'object',
    'properties': {
        'output.maxChannelHistory': {
            'type': 'number',
            'description': 'The maximum number of entries in an output channel.',
            'default': 1000
        }
    }
};
exports.OutputPreferences = Symbol('OutputPreferences');
function createOutputPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.OutputConfigSchema);
}
exports.createOutputPreferences = createOutputPreferences;
function bindOutputPreferences(bind) {
    bind(exports.OutputPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createOutputPreferences(preferences);
    });
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.OutputConfigSchema });
}
exports.bindOutputPreferences = bindOutputPreferences;


/***/ }),

/***/ "../node_modules/@theia/output/src/browser/style/output.css":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/output/src/browser/style/output.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./output.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/output/src/browser/style/output.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/output/src/browser/style/output.css":
/*!*********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/output/src/browser/style/output.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n #outputView {\n\tfont-size: var(--theia-ui-font-size1);\n}\n\n#outputView #outputContents {\n    overflow: auto;\n    height: inherit;\n    padding: 6px;\n    box-sizing: border-box;\n}\n\n.theia-side-panel #outputView #outputContents {\n    margin-left: 14px;\n}\n\n#outputView #outputChannelList {\n    line-height: var(--theia-content-line-height);\n    font-size: var(--theia-ui-font-size1);\n    \n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background-position: calc(100% - 6px) 8px, calc(100% - 2px) 8px, 100% 0;\n    background-size: 4px 5px;\n    background-repeat: no-repeat;\n    padding-left: 3px;\n    padding-right: 15px;\n}\n\n#outputView #outputClear {\n    background-image: var(--theia-icon-clear);\n    background-position: center;\n    background-repeat: no-repeat;\n    display: inline-block;\n    width: 21px;\n    opacity: var(--theia-mod-disabled-opacity);;\n}\n\n#outputView #outputClear.enabled {\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n#outputView #outputClear.enabled:hover {\n    opacity: 1;\n}\n\n.output-tab-icon::before {\n    content: \"\\F024\"\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/lib/connection.js":
/*!***********************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/lib/connection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var socket_1 = __webpack_require__(/*! ./socket */ "../node_modules/vscode-ws-jsonrpc/lib/socket/index.js");

var logger_1 = __webpack_require__(/*! ./logger */ "../node_modules/vscode-ws-jsonrpc/lib/logger.js");

function listen(options) {
  var webSocket = options.webSocket,
      onConnection = options.onConnection;
  var logger = options.logger || new logger_1.ConsoleLogger();

  webSocket.onopen = function () {
    var socket = toSocket(webSocket);
    var connection = socket_1.createWebSocketConnection(socket, logger);
    onConnection(connection);
  };
}

exports.listen = listen;

function toSocket(webSocket) {
  return {
    send: function send(content) {
      return webSocket.send(content);
    },
    onMessage: function onMessage(cb) {
      return webSocket.onmessage = function (event) {
        return cb(event.data);
      };
    },
    onError: function onError(cb) {
      return webSocket.onerror = function (event) {
        if ('message' in event) {
          cb(event.message);
        }
      };
    },
    onClose: function onClose(cb) {
      return webSocket.onclose = function (event) {
        return cb(event.code, event.reason);
      };
    },
    dispose: function dispose() {
      return webSocket.close();
    }
  };
}

exports.toSocket = toSocket;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/lib/disposable.js":
/*!***********************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/lib/disposable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var events_1 = __webpack_require__(/*! vscode-jsonrpc/lib/events */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/events.js");

exports.Disposable = events_1.Disposable;

var DisposableCollection =
/** @class */
function () {
  function DisposableCollection() {
    this.disposables = [];
  }

  DisposableCollection.prototype.dispose = function () {
    while (this.disposables.length !== 0) {
      this.disposables.pop().dispose();
    }
  };

  DisposableCollection.prototype.push = function (disposable) {
    var disposables = this.disposables;
    disposables.push(disposable);
    return {
      dispose: function dispose() {
        var index = disposables.indexOf(disposable);

        if (index !== -1) {
          disposables.splice(index, 1);
        }
      }
    };
  };

  return DisposableCollection;
}();

exports.DisposableCollection = DisposableCollection;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/lib/index.js":
/*!******************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

__export(__webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/main.js"));

__export(__webpack_require__(/*! vscode-jsonrpc/lib/messages */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messages.js"));

__export(__webpack_require__(/*! ./disposable */ "../node_modules/vscode-ws-jsonrpc/lib/disposable.js"));

__export(__webpack_require__(/*! ./socket */ "../node_modules/vscode-ws-jsonrpc/lib/socket/index.js"));

__export(__webpack_require__(/*! ./logger */ "../node_modules/vscode-ws-jsonrpc/lib/logger.js"));

__export(__webpack_require__(/*! ./connection */ "../node_modules/vscode-ws-jsonrpc/lib/connection.js"));

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/lib/logger.js":
/*!*******************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/lib/logger.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var ConsoleLogger =
/** @class */
function () {
  function ConsoleLogger() {}

  ConsoleLogger.prototype.error = function (message) {
    console.error(message);
  };

  ConsoleLogger.prototype.warn = function (message) {
    console.warn(message);
  };

  ConsoleLogger.prototype.info = function (message) {
    console.info(message);
  };

  ConsoleLogger.prototype.log = function (message) {
    console.log(message);
  };

  ConsoleLogger.prototype.debug = function (message) {
    console.debug(message);
  };

  return ConsoleLogger;
}();

exports.ConsoleLogger = ConsoleLogger;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/lib/socket/connection.js":
/*!******************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/lib/socket/connection.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/main.js");

var reader_1 = __webpack_require__(/*! ./reader */ "../node_modules/vscode-ws-jsonrpc/lib/socket/reader.js");

var writer_1 = __webpack_require__(/*! ./writer */ "../node_modules/vscode-ws-jsonrpc/lib/socket/writer.js");

function createWebSocketConnection(socket, logger) {
  var messageReader = new reader_1.WebSocketMessageReader(socket);
  var messageWriter = new writer_1.WebSocketMessageWriter(socket);
  var connection = vscode_jsonrpc_1.createMessageConnection(messageReader, messageWriter, logger);
  connection.onClose(function () {
    return connection.dispose();
  });
  return connection;
}

exports.createWebSocketConnection = createWebSocketConnection;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/lib/socket/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/lib/socket/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(/*! ./reader */ "../node_modules/vscode-ws-jsonrpc/lib/socket/reader.js"));

__export(__webpack_require__(/*! ./writer */ "../node_modules/vscode-ws-jsonrpc/lib/socket/writer.js"));

__export(__webpack_require__(/*! ./connection */ "../node_modules/vscode-ws-jsonrpc/lib/socket/connection.js"));

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/lib/socket/reader.js":
/*!**************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/lib/socket/reader.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var __extends = this && this.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var messageReader_1 = __webpack_require__(/*! vscode-jsonrpc/lib/messageReader */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageReader.js");

var WebSocketMessageReader =
/** @class */
function (_super) {
  __extends(WebSocketMessageReader, _super);

  function WebSocketMessageReader(socket) {
    var _this = _super.call(this) || this;

    _this.socket = socket;
    _this.state = 'initial';
    _this.events = [];

    _this.socket.onMessage(function (message) {
      return _this.readMessage(message);
    });

    _this.socket.onError(function (error) {
      return _this.fireError(error);
    });

    _this.socket.onClose(function (code, reason) {
      if (code !== 1000) {
        var error = {
          name: '' + code,
          message: "Error during socket reconnect: code = " + code + ", reason = " + reason
        };

        _this.fireError(error);
      }

      _this.fireClose();
    });

    return _this;
  }

  WebSocketMessageReader.prototype.listen = function (callback) {
    if (this.state === 'initial') {
      this.state = 'listening';
      this.callback = callback;

      while (this.events.length !== 0) {
        var event_1 = this.events.pop();

        if (event_1.message) {
          this.readMessage(event_1.message);
        } else if (event_1.error) {
          this.fireError(event_1.error);
        } else {
          this.fireClose();
        }
      }
    }
  };

  WebSocketMessageReader.prototype.readMessage = function (message) {
    if (this.state === 'initial') {
      this.events.splice(0, 0, {
        message: message
      });
    } else if (this.state === 'listening') {
      var data = JSON.parse(message);
      this.callback(data);
    }
  };

  WebSocketMessageReader.prototype.fireError = function (error) {
    if (this.state === 'initial') {
      this.events.splice(0, 0, {
        error: error
      });
    } else if (this.state === 'listening') {
      _super.prototype.fireError.call(this, error);
    }
  };

  WebSocketMessageReader.prototype.fireClose = function () {
    if (this.state === 'initial') {
      this.events.splice(0, 0, {});
    } else if (this.state === 'listening') {
      _super.prototype.fireClose.call(this);
    }

    this.state = 'closed';
  };

  return WebSocketMessageReader;
}(messageReader_1.AbstractMessageReader);

exports.WebSocketMessageReader = WebSocketMessageReader;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/lib/socket/writer.js":
/*!**************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/lib/socket/writer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var __extends = this && this.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var messageWriter_1 = __webpack_require__(/*! vscode-jsonrpc/lib/messageWriter */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageWriter.js");

var WebSocketMessageWriter =
/** @class */
function (_super) {
  __extends(WebSocketMessageWriter, _super);

  function WebSocketMessageWriter(socket) {
    var _this = _super.call(this) || this;

    _this.socket = socket;
    _this.errorCount = 0;
    return _this;
  }

  WebSocketMessageWriter.prototype.write = function (msg) {
    try {
      var content = JSON.stringify(msg);
      this.socket.send(content);
    } catch (e) {
      this.errorCount++;
      this.fireError(e, msg, this.errorCount);
    }
  };

  return WebSocketMessageWriter;
}(messageWriter_1.AbstractMessageWriter);

exports.WebSocketMessageWriter = WebSocketMessageWriter;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/cancellation.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/cancellation.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = __webpack_require__(/*! ./events */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/events.js");

var Is = __webpack_require__(/*! ./is */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/is.js");

var CancellationToken;

(function (CancellationToken) {
  CancellationToken.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: events_1.Event.None
  });
  CancellationToken.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: events_1.Event.None
  });

  function is(value) {
    var candidate = value;
    return candidate && (candidate === CancellationToken.None || candidate === CancellationToken.Cancelled || Is["boolean"](candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
  }

  CancellationToken.is = is;
})(CancellationToken = exports.CancellationToken || (exports.CancellationToken = {}));

var shortcutEvent = Object.freeze(function (callback, context) {
  var handle = setTimeout(callback.bind(context), 0);
  return {
    dispose: function dispose() {
      clearTimeout(handle);
    }
  };
});

var MutableToken =
/** @class */
function () {
  function MutableToken() {
    this._isCancelled = false;
  }

  MutableToken.prototype.cancel = function () {
    if (!this._isCancelled) {
      this._isCancelled = true;

      if (this._emitter) {
        this._emitter.fire(undefined);

        this._emitter = undefined;
      }
    }
  };

  Object.defineProperty(MutableToken.prototype, "isCancellationRequested", {
    get: function get() {
      return this._isCancelled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MutableToken.prototype, "onCancellationRequested", {
    get: function get() {
      if (this._isCancelled) {
        return shortcutEvent;
      }

      if (!this._emitter) {
        this._emitter = new events_1.Emitter();
      }

      return this._emitter.event;
    },
    enumerable: true,
    configurable: true
  });
  return MutableToken;
}();

var CancellationTokenSource =
/** @class */
function () {
  function CancellationTokenSource() {}

  Object.defineProperty(CancellationTokenSource.prototype, "token", {
    get: function get() {
      if (!this._token) {
        // be lazy and create the token only when
        // actually needed
        this._token = new MutableToken();
      }

      return this._token;
    },
    enumerable: true,
    configurable: true
  });

  CancellationTokenSource.prototype.cancel = function () {
    if (!this._token) {
      // save an object by returning the default
      // cancelled token when cancellation happens
      // before someone asks for the token
      this._token = CancellationToken.Cancelled;
    } else {
      this._token.cancel();
    }
  };

  CancellationTokenSource.prototype.dispose = function () {
    this.cancel();
  };

  return CancellationTokenSource;
}();

exports.CancellationTokenSource = CancellationTokenSource;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/events.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/events.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Disposable;

(function (Disposable) {
  function create(func) {
    return {
      dispose: func
    };
  }

  Disposable.create = create;
})(Disposable = exports.Disposable || (exports.Disposable = {}));

var Event;

(function (Event) {
  var _disposable = {
    dispose: function dispose() {}
  };

  Event.None = function () {
    return _disposable;
  };
})(Event = exports.Event || (exports.Event = {}));

var CallbackList =
/** @class */
function () {
  function CallbackList() {}

  CallbackList.prototype.add = function (callback, context, bucket) {
    var _this = this;

    if (context === void 0) {
      context = null;
    }

    if (!this._callbacks) {
      this._callbacks = [];
      this._contexts = [];
    }

    this._callbacks.push(callback);

    this._contexts.push(context);

    if (Array.isArray(bucket)) {
      bucket.push({
        dispose: function dispose() {
          return _this.remove(callback, context);
        }
      });
    }
  };

  CallbackList.prototype.remove = function (callback, context) {
    if (context === void 0) {
      context = null;
    }

    if (!this._callbacks) {
      return;
    }

    var foundCallbackWithDifferentContext = false;

    for (var i = 0, len = this._callbacks.length; i < len; i++) {
      if (this._callbacks[i] === callback) {
        if (this._contexts[i] === context) {
          // callback & context match => remove it
          this._callbacks.splice(i, 1);

          this._contexts.splice(i, 1);

          return;
        } else {
          foundCallbackWithDifferentContext = true;
        }
      }
    }

    if (foundCallbackWithDifferentContext) {
      throw new Error('When adding a listener with a context, you should remove it with the same context');
    }
  };

  CallbackList.prototype.invoke = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!this._callbacks) {
      return [];
    }

    var ret = [],
        callbacks = this._callbacks.slice(0),
        contexts = this._contexts.slice(0);

    for (var i = 0, len = callbacks.length; i < len; i++) {
      try {
        ret.push(callbacks[i].apply(contexts[i], args));
      } catch (e) {
        console.error(e);
      }
    }

    return ret;
  };

  CallbackList.prototype.isEmpty = function () {
    return !this._callbacks || this._callbacks.length === 0;
  };

  CallbackList.prototype.dispose = function () {
    this._callbacks = undefined;
    this._contexts = undefined;
  };

  return CallbackList;
}();

var Emitter =
/** @class */
function () {
  function Emitter(_options) {
    this._options = _options;
  }

  Object.defineProperty(Emitter.prototype, "event", {
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get: function get() {
      var _this = this;

      if (!this._event) {
        this._event = function (listener, thisArgs, disposables) {
          if (!_this._callbacks) {
            _this._callbacks = new CallbackList();
          }

          if (_this._options && _this._options.onFirstListenerAdd && _this._callbacks.isEmpty()) {
            _this._options.onFirstListenerAdd(_this);
          }

          _this._callbacks.add(listener, thisArgs);

          var result;
          result = {
            dispose: function dispose() {
              _this._callbacks.remove(listener, thisArgs);

              result.dispose = Emitter._noop;

              if (_this._options && _this._options.onLastListenerRemove && _this._callbacks.isEmpty()) {
                _this._options.onLastListenerRemove(_this);
              }
            }
          };

          if (Array.isArray(disposables)) {
            disposables.push(result);
          }

          return result;
        };
      }

      return this._event;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * To be kept private to fire an event to
   * subscribers
   */

  Emitter.prototype.fire = function (event) {
    if (this._callbacks) {
      this._callbacks.invoke.call(this._callbacks, event);
    }
  };

  Emitter.prototype.dispose = function () {
    if (this._callbacks) {
      this._callbacks.dispose();

      this._callbacks = undefined;
    }
  };

  Emitter._noop = function () {};

  return Emitter;
}();

exports.Emitter = Emitter;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/is.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/is.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toString = Object.prototype.toString;

function _boolean(value) {
  return value === true || value === false;
}

exports["boolean"] = _boolean;

function string(value) {
  return toString.call(value) === '[object String]';
}

exports.string = string;

function number(value) {
  return toString.call(value) === '[object Number]';
}

exports.number = number;

function error(value) {
  return toString.call(value) === '[object Error]';
}

exports.error = error;

function func(value) {
  return toString.call(value) === '[object Function]';
}

exports.func = func;

function array(value) {
  return Array.isArray(value);
}

exports.array = array;

function stringArray(value) {
  return array(value) && value.every(function (elem) {
    return string(elem);
  });
}

exports.stringArray = stringArray;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/linkedMap.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/linkedMap.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Touch;

(function (Touch) {
  Touch.None = 0;
  Touch.First = 1;
  Touch.Last = 2;
})(Touch = exports.Touch || (exports.Touch = {}));

var LinkedMap =
/** @class */
function () {
  function LinkedMap() {
    this._map = new Map();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
  }

  LinkedMap.prototype.clear = function () {
    this._map.clear();

    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
  };

  LinkedMap.prototype.isEmpty = function () {
    return !this._head && !this._tail;
  };

  Object.defineProperty(LinkedMap.prototype, "size", {
    get: function get() {
      return this._size;
    },
    enumerable: true,
    configurable: true
  });

  LinkedMap.prototype.has = function (key) {
    return this._map.has(key);
  };

  LinkedMap.prototype.get = function (key) {
    var item = this._map.get(key);

    if (!item) {
      return undefined;
    }

    return item.value;
  };

  LinkedMap.prototype.set = function (key, value, touch) {
    if (touch === void 0) {
      touch = Touch.None;
    }

    var item = this._map.get(key);

    if (item) {
      item.value = value;

      if (touch !== Touch.None) {
        this.touch(item, touch);
      }
    } else {
      item = {
        key: key,
        value: value,
        next: undefined,
        previous: undefined
      };

      switch (touch) {
        case Touch.None:
          this.addItemLast(item);
          break;

        case Touch.First:
          this.addItemFirst(item);
          break;

        case Touch.Last:
          this.addItemLast(item);
          break;

        default:
          this.addItemLast(item);
          break;
      }

      this._map.set(key, item);

      this._size++;
    }
  };

  LinkedMap.prototype["delete"] = function (key) {
    var item = this._map.get(key);

    if (!item) {
      return false;
    }

    this._map["delete"](key);

    this.removeItem(item);
    this._size--;
    return true;
  };

  LinkedMap.prototype.shift = function () {
    if (!this._head && !this._tail) {
      return undefined;
    }

    if (!this._head || !this._tail) {
      throw new Error('Invalid list');
    }

    var item = this._head;

    this._map["delete"](item.key);

    this.removeItem(item);
    this._size--;
    return item.value;
  };

  LinkedMap.prototype.forEach = function (callbackfn, thisArg) {
    var current = this._head;

    while (current) {
      if (thisArg) {
        callbackfn.bind(thisArg)(current.value, current.key, this);
      } else {
        callbackfn(current.value, current.key, this);
      }

      current = current.next;
    }
  };

  LinkedMap.prototype.forEachReverse = function (callbackfn, thisArg) {
    var current = this._tail;

    while (current) {
      if (thisArg) {
        callbackfn.bind(thisArg)(current.value, current.key, this);
      } else {
        callbackfn(current.value, current.key, this);
      }

      current = current.previous;
    }
  };

  LinkedMap.prototype.values = function () {
    var result = [];
    var current = this._head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  };

  LinkedMap.prototype.keys = function () {
    var result = [];
    var current = this._head;

    while (current) {
      result.push(current.key);
      current = current.next;
    }

    return result;
  };
  /* JSON RPC run on es5 which has no Symbol.iterator
  public keys(): IterableIterator<K> {
      let current = this._head;
      let iterator: IterableIterator<K> = {
          [Symbol.iterator]() {
              return iterator;
          },
          next():IteratorResult<K> {
              if (current) {
                  let result = { value: current.key, done: false };
                  current = current.next;
                  return result;
              } else {
                  return { value: undefined, done: true };
              }
          }
      };
      return iterator;
  }
    public values(): IterableIterator<V> {
      let current = this._head;
      let iterator: IterableIterator<V> = {
          [Symbol.iterator]() {
              return iterator;
          },
          next():IteratorResult<V> {
              if (current) {
                  let result = { value: current.value, done: false };
                  current = current.next;
                  return result;
              } else {
                  return { value: undefined, done: true };
              }
          }
      };
      return iterator;
  }
  */


  LinkedMap.prototype.addItemFirst = function (item) {
    // First time Insert
    if (!this._head && !this._tail) {
      this._tail = item;
    } else if (!this._head) {
      throw new Error('Invalid list');
    } else {
      item.next = this._head;
      this._head.previous = item;
    }

    this._head = item;
  };

  LinkedMap.prototype.addItemLast = function (item) {
    // First time Insert
    if (!this._head && !this._tail) {
      this._head = item;
    } else if (!this._tail) {
      throw new Error('Invalid list');
    } else {
      item.previous = this._tail;
      this._tail.next = item;
    }

    this._tail = item;
  };

  LinkedMap.prototype.removeItem = function (item) {
    if (item === this._head && item === this._tail) {
      this._head = undefined;
      this._tail = undefined;
    } else if (item === this._head) {
      this._head = item.next;
    } else if (item === this._tail) {
      this._tail = item.previous;
    } else {
      var next = item.next;
      var previous = item.previous;

      if (!next || !previous) {
        throw new Error('Invalid list');
      }

      next.previous = previous;
      previous.next = next;
    }
  };

  LinkedMap.prototype.touch = function (item, touch) {
    if (!this._head || !this._tail) {
      throw new Error('Invalid list');
    }

    if (touch !== Touch.First && touch !== Touch.Last) {
      return;
    }

    if (touch === Touch.First) {
      if (item === this._head) {
        return;
      }

      var next = item.next;
      var previous = item.previous; // Unlink the item

      if (item === this._tail) {
        // previous must be defined since item was not head but is tail
        // So there are more than on item in the map
        previous.next = undefined;
        this._tail = previous;
      } else {
        // Both next and previous are not undefined since item was neither head nor tail.
        next.previous = previous;
        previous.next = next;
      } // Insert the node at head


      item.previous = undefined;
      item.next = this._head;
      this._head.previous = item;
      this._head = item;
    } else if (touch === Touch.Last) {
      if (item === this._tail) {
        return;
      }

      var next = item.next;
      var previous = item.previous; // Unlink the item.

      if (item === this._head) {
        // next must be defined since item was not tail but is head
        // So there are more than on item in the map
        next.previous = undefined;
        this._head = next;
      } else {
        // Both next and previous are not undefined since item was neither head nor tail.
        next.previous = previous;
        previous.next = next;
      }

      item.next = undefined;
      item.previous = this._tail;
      this._tail.next = item;
      this._tail = item;
    }
  };

  return LinkedMap;
}();

exports.LinkedMap = LinkedMap;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/main.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/main.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
/// <reference path="./thenable.ts" />


var __extends = this && this.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Is = __webpack_require__(/*! ./is */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/is.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messages.js");

exports.RequestType = messages_1.RequestType;
exports.RequestType0 = messages_1.RequestType0;
exports.RequestType1 = messages_1.RequestType1;
exports.RequestType2 = messages_1.RequestType2;
exports.RequestType3 = messages_1.RequestType3;
exports.RequestType4 = messages_1.RequestType4;
exports.RequestType5 = messages_1.RequestType5;
exports.RequestType6 = messages_1.RequestType6;
exports.RequestType7 = messages_1.RequestType7;
exports.RequestType8 = messages_1.RequestType8;
exports.RequestType9 = messages_1.RequestType9;
exports.ResponseError = messages_1.ResponseError;
exports.ErrorCodes = messages_1.ErrorCodes;
exports.NotificationType = messages_1.NotificationType;
exports.NotificationType0 = messages_1.NotificationType0;
exports.NotificationType1 = messages_1.NotificationType1;
exports.NotificationType2 = messages_1.NotificationType2;
exports.NotificationType3 = messages_1.NotificationType3;
exports.NotificationType4 = messages_1.NotificationType4;
exports.NotificationType5 = messages_1.NotificationType5;
exports.NotificationType6 = messages_1.NotificationType6;
exports.NotificationType7 = messages_1.NotificationType7;
exports.NotificationType8 = messages_1.NotificationType8;
exports.NotificationType9 = messages_1.NotificationType9;

var messageReader_1 = __webpack_require__(/*! ./messageReader */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageReader.js");

exports.MessageReader = messageReader_1.MessageReader;
exports.StreamMessageReader = messageReader_1.StreamMessageReader;
exports.IPCMessageReader = messageReader_1.IPCMessageReader;
exports.SocketMessageReader = messageReader_1.SocketMessageReader;

var messageWriter_1 = __webpack_require__(/*! ./messageWriter */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageWriter.js");

exports.MessageWriter = messageWriter_1.MessageWriter;
exports.StreamMessageWriter = messageWriter_1.StreamMessageWriter;
exports.IPCMessageWriter = messageWriter_1.IPCMessageWriter;
exports.SocketMessageWriter = messageWriter_1.SocketMessageWriter;

var events_1 = __webpack_require__(/*! ./events */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/events.js");

exports.Disposable = events_1.Disposable;
exports.Event = events_1.Event;
exports.Emitter = events_1.Emitter;

var cancellation_1 = __webpack_require__(/*! ./cancellation */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/cancellation.js");

exports.CancellationTokenSource = cancellation_1.CancellationTokenSource;
exports.CancellationToken = cancellation_1.CancellationToken;

var linkedMap_1 = __webpack_require__(/*! ./linkedMap */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/linkedMap.js");

__export(__webpack_require__(/*! ./pipeSupport */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/pipeSupport.js"));

__export(__webpack_require__(/*! ./socketSupport */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/socketSupport.js"));

var CancelNotification;

(function (CancelNotification) {
  CancelNotification.type = new messages_1.NotificationType('$/cancelRequest');
})(CancelNotification || (CancelNotification = {}));

exports.NullLogger = Object.freeze({
  error: function error() {},
  warn: function warn() {},
  info: function info() {},
  log: function log() {}
});
var Trace;

(function (Trace) {
  Trace[Trace["Off"] = 0] = "Off";
  Trace[Trace["Messages"] = 1] = "Messages";
  Trace[Trace["Verbose"] = 2] = "Verbose";
})(Trace = exports.Trace || (exports.Trace = {}));

(function (Trace) {
  function fromString(value) {
    value = value.toLowerCase();

    switch (value) {
      case 'off':
        return Trace.Off;

      case 'messages':
        return Trace.Messages;

      case 'verbose':
        return Trace.Verbose;

      default:
        return Trace.Off;
    }
  }

  Trace.fromString = fromString;

  function toString(value) {
    switch (value) {
      case Trace.Off:
        return 'off';

      case Trace.Messages:
        return 'messages';

      case Trace.Verbose:
        return 'verbose';

      default:
        return 'off';
    }
  }

  Trace.toString = toString;
})(Trace = exports.Trace || (exports.Trace = {}));

var SetTraceNotification;

(function (SetTraceNotification) {
  SetTraceNotification.type = new messages_1.NotificationType('$/setTraceNotification');
})(SetTraceNotification = exports.SetTraceNotification || (exports.SetTraceNotification = {}));

var LogTraceNotification;

(function (LogTraceNotification) {
  LogTraceNotification.type = new messages_1.NotificationType('$/logTraceNotification');
})(LogTraceNotification = exports.LogTraceNotification || (exports.LogTraceNotification = {}));

var ConnectionErrors;

(function (ConnectionErrors) {
  /**
   * The connection is closed.
   */
  ConnectionErrors[ConnectionErrors["Closed"] = 1] = "Closed";
  /**
   * The connection got disposed.
   */

  ConnectionErrors[ConnectionErrors["Disposed"] = 2] = "Disposed";
  /**
   * The connection is already in listening mode.
   */

  ConnectionErrors[ConnectionErrors["AlreadyListening"] = 3] = "AlreadyListening";
})(ConnectionErrors = exports.ConnectionErrors || (exports.ConnectionErrors = {}));

var ConnectionError =
/** @class */
function (_super) {
  __extends(ConnectionError, _super);

  function ConnectionError(code, message) {
    var _this = _super.call(this, message) || this;

    _this.code = code;
    Object.setPrototypeOf(_this, ConnectionError.prototype);
    return _this;
  }

  return ConnectionError;
}(Error);

exports.ConnectionError = ConnectionError;
var ConnectionStrategy;

(function (ConnectionStrategy) {
  function is(value) {
    var candidate = value;
    return candidate && Is.func(candidate.cancelUndispatched);
  }

  ConnectionStrategy.is = is;
})(ConnectionStrategy = exports.ConnectionStrategy || (exports.ConnectionStrategy = {}));

var ConnectionState;

(function (ConnectionState) {
  ConnectionState[ConnectionState["New"] = 1] = "New";
  ConnectionState[ConnectionState["Listening"] = 2] = "Listening";
  ConnectionState[ConnectionState["Closed"] = 3] = "Closed";
  ConnectionState[ConnectionState["Disposed"] = 4] = "Disposed";
})(ConnectionState || (ConnectionState = {}));

function _createMessageConnection(messageReader, messageWriter, logger, strategy) {
  var sequenceNumber = 0;
  var notificationSquenceNumber = 0;
  var unknownResponseSquenceNumber = 0;
  var version = '2.0';
  var starRequestHandler = undefined;
  var requestHandlers = Object.create(null);
  var starNotificationHandler = undefined;
  var notificationHandlers = Object.create(null);
  var timer;
  var messageQueue = new linkedMap_1.LinkedMap();
  var responsePromises = Object.create(null);
  var requestTokens = Object.create(null);
  var _trace = Trace.Off;
  var tracer;
  var state = ConnectionState.New;
  var errorEmitter = new events_1.Emitter();
  var closeEmitter = new events_1.Emitter();
  var unhandledNotificationEmitter = new events_1.Emitter();
  var disposeEmitter = new events_1.Emitter();

  function createRequestQueueKey(id) {
    return 'req-' + id.toString();
  }

  function createResponseQueueKey(id) {
    if (id === null) {
      return 'res-unknown-' + (++unknownResponseSquenceNumber).toString();
    } else {
      return 'res-' + id.toString();
    }
  }

  function createNotificationQueueKey() {
    return 'not-' + (++notificationSquenceNumber).toString();
  }

  function addMessageToQueue(queue, message) {
    if (messages_1.isRequestMessage(message)) {
      queue.set(createRequestQueueKey(message.id), message);
    } else if (messages_1.isResponseMessage(message)) {
      queue.set(createResponseQueueKey(message.id), message);
    } else {
      queue.set(createNotificationQueueKey(), message);
    }
  }

  function cancelUndispatched(_message) {
    return undefined;
  }

  function isListening() {
    return state === ConnectionState.Listening;
  }

  function isClosed() {
    return state === ConnectionState.Closed;
  }

  function isDisposed() {
    return state === ConnectionState.Disposed;
  }

  function closeHandler() {
    if (state === ConnectionState.New || state === ConnectionState.Listening) {
      state = ConnectionState.Closed;
      closeEmitter.fire(undefined);
    } // If the connection is disposed don't sent close events.

  }

  ;

  function readErrorHandler(error) {
    errorEmitter.fire([error, undefined, undefined]);
  }

  function writeErrorHandler(data) {
    errorEmitter.fire(data);
  }

  messageReader.onClose(closeHandler);
  messageReader.onError(readErrorHandler);
  messageWriter.onClose(closeHandler);
  messageWriter.onError(writeErrorHandler);

  function triggerMessageQueue() {
    if (timer || messageQueue.size === 0) {
      return;
    }

    timer = setImmediate(function () {
      timer = undefined;
      processMessageQueue();
    });
  }

  function processMessageQueue() {
    if (messageQueue.size === 0) {
      return;
    }

    var message = messageQueue.shift();

    try {
      if (messages_1.isRequestMessage(message)) {
        handleRequest(message);
      } else if (messages_1.isNotificationMessage(message)) {
        handleNotification(message);
      } else if (messages_1.isResponseMessage(message)) {
        handleResponse(message);
      } else {
        handleInvalidMessage(message);
      }
    } finally {
      triggerMessageQueue();
    }
  }

  var callback = function callback(message) {
    try {
      // We have received a cancellation message. Check if the message is still in the queue
      // and cancel it if allowed to do so.
      if (messages_1.isNotificationMessage(message) && message.method === CancelNotification.type.method) {
        var key = createRequestQueueKey(message.params.id);
        var toCancel = messageQueue.get(key);

        if (messages_1.isRequestMessage(toCancel)) {
          var response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);

          if (response && (response.error !== void 0 || response.result !== void 0)) {
            messageQueue["delete"](key);
            response.id = toCancel.id;
            traceSendingResponse(response, message.method, Date.now());
            messageWriter.write(response);
            return;
          }
        }
      }

      addMessageToQueue(messageQueue, message);
    } finally {
      triggerMessageQueue();
    }
  };

  function handleRequest(requestMessage) {
    if (isDisposed()) {
      // we return here silently since we fired an event when the
      // connection got disposed.
      return;
    }

    function reply(resultOrError, method, startTime) {
      var message = {
        jsonrpc: version,
        id: requestMessage.id
      };

      if (resultOrError instanceof messages_1.ResponseError) {
        message.error = resultOrError.toJson();
      } else {
        message.result = resultOrError === void 0 ? null : resultOrError;
      }

      traceSendingResponse(message, method, startTime);
      messageWriter.write(message);
    }

    function replyError(error, method, startTime) {
      var message = {
        jsonrpc: version,
        id: requestMessage.id,
        error: error.toJson()
      };
      traceSendingResponse(message, method, startTime);
      messageWriter.write(message);
    }

    function replySuccess(result, method, startTime) {
      // The JSON RPC defines that a response must either have a result or an error
      // So we can't treat undefined as a valid response result.
      if (result === void 0) {
        result = null;
      }

      var message = {
        jsonrpc: version,
        id: requestMessage.id,
        result: result
      };
      traceSendingResponse(message, method, startTime);
      messageWriter.write(message);
    }

    traceReceivedRequest(requestMessage);
    var element = requestHandlers[requestMessage.method];
    var type;
    var requestHandler;

    if (element) {
      type = element.type;
      requestHandler = element.handler;
    }

    var startTime = Date.now();

    if (requestHandler || starRequestHandler) {
      var cancellationSource = new cancellation_1.CancellationTokenSource();
      var tokenKey_1 = String(requestMessage.id);
      requestTokens[tokenKey_1] = cancellationSource;

      try {
        var handlerResult = void 0;

        if (requestMessage.params === void 0 || type !== void 0 && type.numberOfParams === 0) {
          handlerResult = requestHandler ? requestHandler(cancellationSource.token) : starRequestHandler(requestMessage.method, cancellationSource.token);
        } else if (Is.array(requestMessage.params) && (type === void 0 || type.numberOfParams > 1)) {
          handlerResult = requestHandler ? requestHandler.apply(void 0, requestMessage.params.concat([cancellationSource.token])) : starRequestHandler.apply(void 0, [requestMessage.method].concat(requestMessage.params, [cancellationSource.token]));
        } else {
          handlerResult = requestHandler ? requestHandler(requestMessage.params, cancellationSource.token) : starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
        }

        var promise = handlerResult;

        if (!handlerResult) {
          delete requestTokens[tokenKey_1];
          replySuccess(handlerResult, requestMessage.method, startTime);
        } else if (promise.then) {
          promise.then(function (resultOrError) {
            delete requestTokens[tokenKey_1];
            reply(resultOrError, requestMessage.method, startTime);
          }, function (error) {
            delete requestTokens[tokenKey_1];

            if (error instanceof messages_1.ResponseError) {
              replyError(error, requestMessage.method, startTime);
            } else if (error && Is.string(error.message)) {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, "Request " + requestMessage.method + " failed with message: " + error.message), requestMessage.method, startTime);
            } else {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, "Request " + requestMessage.method + " failed unexpectedly without providing any details."), requestMessage.method, startTime);
            }
          });
        } else {
          delete requestTokens[tokenKey_1];
          reply(handlerResult, requestMessage.method, startTime);
        }
      } catch (error) {
        delete requestTokens[tokenKey_1];

        if (error instanceof messages_1.ResponseError) {
          reply(error, requestMessage.method, startTime);
        } else if (error && Is.string(error.message)) {
          replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, "Request " + requestMessage.method + " failed with message: " + error.message), requestMessage.method, startTime);
        } else {
          replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, "Request " + requestMessage.method + " failed unexpectedly without providing any details."), requestMessage.method, startTime);
        }
      }
    } else {
      replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, "Unhandled method " + requestMessage.method), requestMessage.method, startTime);
    }
  }

  function handleResponse(responseMessage) {
    if (isDisposed()) {
      // See handle request.
      return;
    }

    if (responseMessage.id === null) {
      if (responseMessage.error) {
        logger.error("Received response message without id: Error is: \n" + JSON.stringify(responseMessage.error, undefined, 4));
      } else {
        logger.error("Received response message without id. No further error information provided.");
      }
    } else {
      var key = String(responseMessage.id);
      var responsePromise = responsePromises[key];
      traceReceivedResponse(responseMessage, responsePromise);

      if (responsePromise) {
        delete responsePromises[key];

        try {
          if (responseMessage.error) {
            var error = responseMessage.error;
            responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
          } else if (responseMessage.result !== void 0) {
            responsePromise.resolve(responseMessage.result);
          } else {
            throw new Error('Should never happen.');
          }
        } catch (error) {
          if (error.message) {
            logger.error("Response handler '" + responsePromise.method + "' failed with message: " + error.message);
          } else {
            logger.error("Response handler '" + responsePromise.method + "' failed unexpectedly.");
          }
        }
      }
    }
  }

  function handleNotification(message) {
    if (isDisposed()) {
      // See handle request.
      return;
    }

    var type = undefined;
    var notificationHandler;

    if (message.method === CancelNotification.type.method) {
      notificationHandler = function notificationHandler(params) {
        var id = params.id;
        var source = requestTokens[String(id)];

        if (source) {
          source.cancel();
        }
      };
    } else {
      var element = notificationHandlers[message.method];

      if (element) {
        notificationHandler = element.handler;
        type = element.type;
      }
    }

    if (notificationHandler || starNotificationHandler) {
      try {
        traceReceivedNotification(message);

        if (message.params === void 0 || type !== void 0 && type.numberOfParams === 0) {
          notificationHandler ? notificationHandler() : starNotificationHandler(message.method);
        } else if (Is.array(message.params) && (type === void 0 || type.numberOfParams > 1)) {
          notificationHandler ? notificationHandler.apply(void 0, message.params) : starNotificationHandler.apply(void 0, [message.method].concat(message.params));
        } else {
          notificationHandler ? notificationHandler(message.params) : starNotificationHandler(message.method, message.params);
        }
      } catch (error) {
        if (error.message) {
          logger.error("Notification handler '" + message.method + "' failed with message: " + error.message);
        } else {
          logger.error("Notification handler '" + message.method + "' failed unexpectedly.");
        }
      }
    } else {
      unhandledNotificationEmitter.fire(message);
    }
  }

  function handleInvalidMessage(message) {
    if (!message) {
      logger.error('Received empty message.');
      return;
    }

    logger.error("Received message which is neither a response nor a notification message:\n" + JSON.stringify(message, null, 4)); // Test whether we find an id to reject the promise

    var responseMessage = message;

    if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
      var key = String(responseMessage.id);
      var responseHandler = responsePromises[key];

      if (responseHandler) {
        responseHandler.reject(new Error('The received response has neither a result nor an error property.'));
      }
    }
  }

  function traceSendingRequest(message) {
    if (_trace === Trace.Off || !tracer) {
      return;
    }

    var data = undefined;

    if (_trace === Trace.Verbose && message.params) {
      data = "Params: " + JSON.stringify(message.params, null, 4) + "\n\n";
    }

    tracer.log("Sending request '" + message.method + " - (" + message.id + ")'.", data);
  }

  function traceSendNotification(message) {
    if (_trace === Trace.Off || !tracer) {
      return;
    }

    var data = undefined;

    if (_trace === Trace.Verbose) {
      if (message.params) {
        data = "Params: " + JSON.stringify(message.params, null, 4) + "\n\n";
      } else {
        data = 'No parameters provided.\n\n';
      }
    }

    tracer.log("Sending notification '" + message.method + "'.", data);
  }

  function traceSendingResponse(message, method, startTime) {
    if (_trace === Trace.Off || !tracer) {
      return;
    }

    var data = undefined;

    if (_trace === Trace.Verbose) {
      if (message.error && message.error.data) {
        data = "Error data: " + JSON.stringify(message.error.data, null, 4) + "\n\n";
      } else {
        if (message.result) {
          data = "Result: " + JSON.stringify(message.result, null, 4) + "\n\n";
        } else if (message.error === void 0) {
          data = 'No result returned.\n\n';
        }
      }
    }

    tracer.log("Sending response '" + method + " - (" + message.id + ")'. Processing request took " + (Date.now() - startTime) + "ms", data);
  }

  function traceReceivedRequest(message) {
    if (_trace === Trace.Off || !tracer) {
      return;
    }

    var data = undefined;

    if (_trace === Trace.Verbose && message.params) {
      data = "Params: " + JSON.stringify(message.params, null, 4) + "\n\n";
    }

    tracer.log("Received request '" + message.method + " - (" + message.id + ")'.", data);
  }

  function traceReceivedNotification(message) {
    if (_trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
      return;
    }

    var data = undefined;

    if (_trace === Trace.Verbose) {
      if (message.params) {
        data = "Params: " + JSON.stringify(message.params, null, 4) + "\n\n";
      } else {
        data = 'No parameters provided.\n\n';
      }
    }

    tracer.log("Received notification '" + message.method + "'.", data);
  }

  function traceReceivedResponse(message, responsePromise) {
    if (_trace === Trace.Off || !tracer) {
      return;
    }

    var data = undefined;

    if (_trace === Trace.Verbose) {
      if (message.error && message.error.data) {
        data = "Error data: " + JSON.stringify(message.error.data, null, 4) + "\n\n";
      } else {
        if (message.result) {
          data = "Result: " + JSON.stringify(message.result, null, 4) + "\n\n";
        } else if (message.error === void 0) {
          data = 'No result returned.\n\n';
        }
      }
    }

    if (responsePromise) {
      var error = message.error ? " Request failed: " + message.error.message + " (" + message.error.code + ")." : '';
      tracer.log("Received response '" + responsePromise.method + " - (" + message.id + ")' in " + (Date.now() - responsePromise.timerStart) + "ms." + error, data);
    } else {
      tracer.log("Received response " + message.id + " without active response promise.", data);
    }
  }

  function throwIfClosedOrDisposed() {
    if (isClosed()) {
      throw new ConnectionError(ConnectionErrors.Closed, 'Connection is closed.');
    }

    if (isDisposed()) {
      throw new ConnectionError(ConnectionErrors.Disposed, 'Connection is disposed.');
    }
  }

  function throwIfListening() {
    if (isListening()) {
      throw new ConnectionError(ConnectionErrors.AlreadyListening, 'Connection is already listening');
    }
  }

  function throwIfNotListening() {
    if (!isListening()) {
      throw new Error('Call listen() first.');
    }
  }

  function undefinedToNull(param) {
    if (param === void 0) {
      return null;
    } else {
      return param;
    }
  }

  function computeMessageParams(type, params) {
    var result;
    var numberOfParams = type.numberOfParams;

    switch (numberOfParams) {
      case 0:
        result = null;
        break;

      case 1:
        result = undefinedToNull(params[0]);
        break;

      default:
        result = [];

        for (var i = 0; i < params.length && i < numberOfParams; i++) {
          result.push(undefinedToNull(params[i]));
        }

        if (params.length < numberOfParams) {
          for (var i = params.length; i < numberOfParams; i++) {
            result.push(null);
          }
        }

        break;
    }

    return result;
  }

  var connection = {
    sendNotification: function sendNotification(type) {
      var params = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
      }

      throwIfClosedOrDisposed();
      var method;
      var messageParams;

      if (Is.string(type)) {
        method = type;

        switch (params.length) {
          case 0:
            messageParams = null;
            break;

          case 1:
            messageParams = params[0];
            break;

          default:
            messageParams = params;
            break;
        }
      } else {
        method = type.method;
        messageParams = computeMessageParams(type, params);
      }

      var notificationMessage = {
        jsonrpc: version,
        method: method,
        params: messageParams
      };
      traceSendNotification(notificationMessage);
      messageWriter.write(notificationMessage);
    },
    onNotification: function onNotification(type, handler) {
      throwIfClosedOrDisposed();

      if (Is.func(type)) {
        starNotificationHandler = type;
      } else if (handler) {
        if (Is.string(type)) {
          notificationHandlers[type] = {
            type: undefined,
            handler: handler
          };
        } else {
          notificationHandlers[type.method] = {
            type: type,
            handler: handler
          };
        }
      }
    },
    sendRequest: function sendRequest(type) {
      var params = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
      }

      throwIfClosedOrDisposed();
      throwIfNotListening();
      var method;
      var messageParams;
      var token = undefined;

      if (Is.string(type)) {
        method = type;

        switch (params.length) {
          case 0:
            messageParams = null;
            break;

          case 1:
            // The cancellation token is optional so it can also be undefined.
            if (cancellation_1.CancellationToken.is(params[0])) {
              messageParams = null;
              token = params[0];
            } else {
              messageParams = undefinedToNull(params[0]);
            }

            break;

          default:
            var last = params.length - 1;

            if (cancellation_1.CancellationToken.is(params[last])) {
              token = params[last];

              if (params.length === 2) {
                messageParams = undefinedToNull(params[0]);
              } else {
                messageParams = params.slice(0, last).map(function (value) {
                  return undefinedToNull(value);
                });
              }
            } else {
              messageParams = params.map(function (value) {
                return undefinedToNull(value);
              });
            }

            break;
        }
      } else {
        method = type.method;
        messageParams = computeMessageParams(type, params);
        var numberOfParams = type.numberOfParams;
        token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : undefined;
      }

      var id = sequenceNumber++;
      var result = new Promise(function (resolve, reject) {
        var requestMessage = {
          jsonrpc: version,
          id: id,
          method: method,
          params: messageParams
        };
        var responsePromise = {
          method: method,
          timerStart: Date.now(),
          resolve: resolve,
          reject: reject
        };
        traceSendingRequest(requestMessage);

        try {
          messageWriter.write(requestMessage);
        } catch (e) {
          // Writing the message failed. So we need to reject the promise.
          responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, e.message ? e.message : 'Unknown reason'));
          responsePromise = null;
        }

        if (responsePromise) {
          responsePromises[String(id)] = responsePromise;
        }
      });

      if (token) {
        token.onCancellationRequested(function () {
          connection.sendNotification(CancelNotification.type, {
            id: id
          });
        });
      }

      return result;
    },
    onRequest: function onRequest(type, handler) {
      throwIfClosedOrDisposed();

      if (Is.func(type)) {
        starRequestHandler = type;
      } else if (handler) {
        if (Is.string(type)) {
          requestHandlers[type] = {
            type: undefined,
            handler: handler
          };
        } else {
          requestHandlers[type.method] = {
            type: type,
            handler: handler
          };
        }
      }
    },
    trace: function trace(_value, _tracer, sendNotification) {
      if (sendNotification === void 0) {
        sendNotification = false;
      }

      _trace = _value;

      if (_trace === Trace.Off) {
        tracer = undefined;
      } else {
        tracer = _tracer;
      }

      if (sendNotification && !isClosed() && !isDisposed()) {
        connection.sendNotification(SetTraceNotification.type, {
          value: Trace.toString(_value)
        });
      }
    },
    onError: errorEmitter.event,
    onClose: closeEmitter.event,
    onUnhandledNotification: unhandledNotificationEmitter.event,
    onDispose: disposeEmitter.event,
    dispose: function dispose() {
      if (isDisposed()) {
        return;
      }

      state = ConnectionState.Disposed;
      disposeEmitter.fire(undefined);
      var error = new Error('Connection got disposed.');
      Object.keys(responsePromises).forEach(function (key) {
        responsePromises[key].reject(error);
      });
      responsePromises = Object.create(null);
      requestTokens = Object.create(null);
      messageQueue = new linkedMap_1.LinkedMap(); // Test for backwards compatibility

      if (Is.func(messageWriter.dispose)) {
        messageWriter.dispose();
      }

      if (Is.func(messageReader.dispose)) {
        messageReader.dispose();
      }
    },
    listen: function listen() {
      throwIfClosedOrDisposed();
      throwIfListening();
      state = ConnectionState.Listening;
      messageReader.listen(callback);
    },
    inspect: function inspect() {
      console.log("inspect");
    }
  };
  connection.onNotification(LogTraceNotification.type, function (params) {
    if (_trace === Trace.Off || !tracer) {
      return;
    }

    tracer.log(params.message, _trace === Trace.Verbose ? params.verbose : undefined);
  });
  return connection;
}

function isMessageReader(value) {
  return value.listen !== void 0 && value.read === void 0;
}

function isMessageWriter(value) {
  return value.write !== void 0 && value.end === void 0;
}

function createMessageConnection(input, output, logger, strategy) {
  if (!logger) {
    logger = exports.NullLogger;
  }

  var reader = isMessageReader(input) ? input : new messageReader_1.StreamMessageReader(input);
  var writer = isMessageWriter(output) ? output : new messageWriter_1.StreamMessageWriter(output);
  return _createMessageConnection(reader, writer, logger, strategy);
}

exports.createMessageConnection = createMessageConnection;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../timers-browserify/main.js */ "../node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageReader.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageReader.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var __extends = this && this.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = __webpack_require__(/*! ./events */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/events.js");

var Is = __webpack_require__(/*! ./is */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/is.js");

var DefaultSize = 8192;
var CR = new Buffer('\r', 'ascii')[0];
var LF = new Buffer('\n', 'ascii')[0];
var CRLF = '\r\n';

var MessageBuffer =
/** @class */
function () {
  function MessageBuffer(encoding) {
    if (encoding === void 0) {
      encoding = 'utf8';
    }

    this.encoding = encoding;
    this.index = 0;
    this.buffer = new Buffer(DefaultSize);
  }

  MessageBuffer.prototype.append = function (chunk) {
    var toAppend = chunk;

    if (typeof chunk === 'string') {
      var str = chunk;
      var bufferLen = Buffer.byteLength(str, this.encoding);
      toAppend = new Buffer(bufferLen);
      toAppend.write(str, 0, bufferLen, this.encoding);
    }

    if (this.buffer.length - this.index >= toAppend.length) {
      toAppend.copy(this.buffer, this.index, 0, toAppend.length);
    } else {
      var newSize = (Math.ceil((this.index + toAppend.length) / DefaultSize) + 1) * DefaultSize;

      if (this.index === 0) {
        this.buffer = new Buffer(newSize);
        toAppend.copy(this.buffer, 0, 0, toAppend.length);
      } else {
        this.buffer = Buffer.concat([this.buffer.slice(0, this.index), toAppend], newSize);
      }
    }

    this.index += toAppend.length;
  };

  MessageBuffer.prototype.tryReadHeaders = function () {
    var result = undefined;
    var current = 0;

    while (current + 3 < this.index && (this.buffer[current] !== CR || this.buffer[current + 1] !== LF || this.buffer[current + 2] !== CR || this.buffer[current + 3] !== LF)) {
      current++;
    } // No header / body separator found (e.g CRLFCRLF)


    if (current + 3 >= this.index) {
      return result;
    }

    result = Object.create(null);
    var headers = this.buffer.toString('ascii', 0, current).split(CRLF);
    headers.forEach(function (header) {
      var index = header.indexOf(':');

      if (index === -1) {
        throw new Error('Message header must separate key and value using :');
      }

      var key = header.substr(0, index);
      var value = header.substr(index + 1).trim();
      result[key] = value;
    });
    var nextStart = current + 4;
    this.buffer = this.buffer.slice(nextStart);
    this.index = this.index - nextStart;
    return result;
  };

  MessageBuffer.prototype.tryReadContent = function (length) {
    if (this.index < length) {
      return null;
    }

    var result = this.buffer.toString(this.encoding, 0, length);
    var nextStart = length;
    this.buffer.copy(this.buffer, 0, nextStart);
    this.index = this.index - nextStart;
    return result;
  };

  Object.defineProperty(MessageBuffer.prototype, "numberOfBytes", {
    get: function get() {
      return this.index;
    },
    enumerable: true,
    configurable: true
  });
  return MessageBuffer;
}();

var MessageReader;

(function (MessageReader) {
  function is(value) {
    var candidate = value;
    return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
  }

  MessageReader.is = is;
})(MessageReader = exports.MessageReader || (exports.MessageReader = {}));

var AbstractMessageReader =
/** @class */
function () {
  function AbstractMessageReader() {
    this.errorEmitter = new events_1.Emitter();
    this.closeEmitter = new events_1.Emitter();
    this.partialMessageEmitter = new events_1.Emitter();
  }

  AbstractMessageReader.prototype.dispose = function () {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
  };

  Object.defineProperty(AbstractMessageReader.prototype, "onError", {
    get: function get() {
      return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
  });

  AbstractMessageReader.prototype.fireError = function (error) {
    this.errorEmitter.fire(this.asError(error));
  };

  Object.defineProperty(AbstractMessageReader.prototype, "onClose", {
    get: function get() {
      return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
  });

  AbstractMessageReader.prototype.fireClose = function () {
    this.closeEmitter.fire(undefined);
  };

  Object.defineProperty(AbstractMessageReader.prototype, "onPartialMessage", {
    get: function get() {
      return this.partialMessageEmitter.event;
    },
    enumerable: true,
    configurable: true
  });

  AbstractMessageReader.prototype.firePartialMessage = function (info) {
    this.partialMessageEmitter.fire(info);
  };

  AbstractMessageReader.prototype.asError = function (error) {
    if (error instanceof Error) {
      return error;
    } else {
      return new Error("Reader recevied error. Reason: " + (Is.string(error.message) ? error.message : 'unknown'));
    }
  };

  return AbstractMessageReader;
}();

exports.AbstractMessageReader = AbstractMessageReader;

var StreamMessageReader =
/** @class */
function (_super) {
  __extends(StreamMessageReader, _super);

  function StreamMessageReader(readable, encoding) {
    if (encoding === void 0) {
      encoding = 'utf8';
    }

    var _this = _super.call(this) || this;

    _this.readable = readable;
    _this.buffer = new MessageBuffer(encoding);
    _this._partialMessageTimeout = 10000;
    return _this;
  }

  Object.defineProperty(StreamMessageReader.prototype, "partialMessageTimeout", {
    get: function get() {
      return this._partialMessageTimeout;
    },
    set: function set(timeout) {
      this._partialMessageTimeout = timeout;
    },
    enumerable: true,
    configurable: true
  });

  StreamMessageReader.prototype.listen = function (callback) {
    var _this = this;

    this.nextMessageLength = -1;
    this.messageToken = 0;
    this.partialMessageTimer = undefined;
    this.callback = callback;
    this.readable.on('data', function (data) {
      _this.onData(data);
    });
    this.readable.on('error', function (error) {
      return _this.fireError(error);
    });
    this.readable.on('close', function () {
      return _this.fireClose();
    });
  };

  StreamMessageReader.prototype.onData = function (data) {
    this.buffer.append(data);

    while (true) {
      if (this.nextMessageLength === -1) {
        var headers = this.buffer.tryReadHeaders();

        if (!headers) {
          return;
        }

        var contentLength = headers['Content-Length'];

        if (!contentLength) {
          throw new Error('Header must provide a Content-Length property.');
        }

        var length = parseInt(contentLength);

        if (isNaN(length)) {
          throw new Error('Content-Length value must be a number.');
        }

        this.nextMessageLength = length; // Take the encoding form the header. For compatibility
        // treat both utf-8 and utf8 as node utf8
      }

      var msg = this.buffer.tryReadContent(this.nextMessageLength);

      if (msg === null) {
        /** We haven't recevied the full message yet. */
        this.setPartialMessageTimer();
        return;
      }

      this.clearPartialMessageTimer();
      this.nextMessageLength = -1;
      this.messageToken++;
      var json = JSON.parse(msg);
      this.callback(json);
    }
  };

  StreamMessageReader.prototype.clearPartialMessageTimer = function () {
    if (this.partialMessageTimer) {
      clearTimeout(this.partialMessageTimer);
      this.partialMessageTimer = undefined;
    }
  };

  StreamMessageReader.prototype.setPartialMessageTimer = function () {
    var _this = this;

    this.clearPartialMessageTimer();

    if (this._partialMessageTimeout <= 0) {
      return;
    }

    this.partialMessageTimer = setTimeout(function (token, timeout) {
      _this.partialMessageTimer = undefined;

      if (token === _this.messageToken) {
        _this.firePartialMessage({
          messageToken: token,
          waitingTime: timeout
        });

        _this.setPartialMessageTimer();
      }
    }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
  };

  return StreamMessageReader;
}(AbstractMessageReader);

exports.StreamMessageReader = StreamMessageReader;

var IPCMessageReader =
/** @class */
function (_super) {
  __extends(IPCMessageReader, _super);

  function IPCMessageReader(process) {
    var _this = _super.call(this) || this;

    _this.process = process;
    var eventEmitter = _this.process;
    eventEmitter.on('error', function (error) {
      return _this.fireError(error);
    });
    eventEmitter.on('close', function () {
      return _this.fireClose();
    });
    return _this;
  }

  IPCMessageReader.prototype.listen = function (callback) {
    this.process.on('message', callback);
  };

  return IPCMessageReader;
}(AbstractMessageReader);

exports.IPCMessageReader = IPCMessageReader;

var SocketMessageReader =
/** @class */
function (_super) {
  __extends(SocketMessageReader, _super);

  function SocketMessageReader(socket, encoding) {
    if (encoding === void 0) {
      encoding = 'utf-8';
    }

    return _super.call(this, socket, encoding) || this;
  }

  return SocketMessageReader;
}(StreamMessageReader);

exports.SocketMessageReader = SocketMessageReader;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageWriter.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageWriter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var __extends = this && this.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = __webpack_require__(/*! ./events */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/events.js");

var Is = __webpack_require__(/*! ./is */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/is.js");

var ContentLength = 'Content-Length: ';
var CRLF = '\r\n';
var MessageWriter;

(function (MessageWriter) {
  function is(value) {
    var candidate = value;
    return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
  }

  MessageWriter.is = is;
})(MessageWriter = exports.MessageWriter || (exports.MessageWriter = {}));

var AbstractMessageWriter =
/** @class */
function () {
  function AbstractMessageWriter() {
    this.errorEmitter = new events_1.Emitter();
    this.closeEmitter = new events_1.Emitter();
  }

  AbstractMessageWriter.prototype.dispose = function () {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
  };

  Object.defineProperty(AbstractMessageWriter.prototype, "onError", {
    get: function get() {
      return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
  });

  AbstractMessageWriter.prototype.fireError = function (error, message, count) {
    this.errorEmitter.fire([this.asError(error), message, count]);
  };

  Object.defineProperty(AbstractMessageWriter.prototype, "onClose", {
    get: function get() {
      return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
  });

  AbstractMessageWriter.prototype.fireClose = function () {
    this.closeEmitter.fire(undefined);
  };

  AbstractMessageWriter.prototype.asError = function (error) {
    if (error instanceof Error) {
      return error;
    } else {
      return new Error("Writer recevied error. Reason: " + (Is.string(error.message) ? error.message : 'unknown'));
    }
  };

  return AbstractMessageWriter;
}();

exports.AbstractMessageWriter = AbstractMessageWriter;

var StreamMessageWriter =
/** @class */
function (_super) {
  __extends(StreamMessageWriter, _super);

  function StreamMessageWriter(writable, encoding) {
    if (encoding === void 0) {
      encoding = 'utf8';
    }

    var _this = _super.call(this) || this;

    _this.writable = writable;
    _this.encoding = encoding;
    _this.errorCount = 0;

    _this.writable.on('error', function (error) {
      return _this.fireError(error);
    });

    _this.writable.on('close', function () {
      return _this.fireClose();
    });

    return _this;
  }

  StreamMessageWriter.prototype.write = function (msg) {
    var json = JSON.stringify(msg);
    var contentLength = Buffer.byteLength(json, this.encoding);
    var headers = [ContentLength, contentLength.toString(), CRLF, CRLF];

    try {
      // Header must be written in ASCII encoding
      this.writable.write(headers.join(''), 'ascii'); // Now write the content. This can be written in any encoding

      this.writable.write(json, this.encoding);
      this.errorCount = 0;
    } catch (error) {
      this.errorCount++;
      this.fireError(error, msg, this.errorCount);
    }
  };

  return StreamMessageWriter;
}(AbstractMessageWriter);

exports.StreamMessageWriter = StreamMessageWriter;

var IPCMessageWriter =
/** @class */
function (_super) {
  __extends(IPCMessageWriter, _super);

  function IPCMessageWriter(process) {
    var _this = _super.call(this) || this;

    _this.process = process;
    _this.errorCount = 0;
    _this.queue = [];
    _this.sending = false;
    var eventEmitter = _this.process;
    eventEmitter.on('error', function (error) {
      return _this.fireError(error);
    });
    eventEmitter.on('close', function () {
      return _this.fireClose;
    });
    return _this;
  }

  IPCMessageWriter.prototype.write = function (msg) {
    if (!this.sending && this.queue.length === 0) {
      // See https://github.com/nodejs/node/issues/7657
      this.doWriteMessage(msg);
    } else {
      this.queue.push(msg);
    }
  };

  IPCMessageWriter.prototype.doWriteMessage = function (msg) {
    var _this = this;

    try {
      if (this.process.send) {
        this.sending = true;
        this.process.send(msg, undefined, undefined, function (error) {
          _this.sending = false;

          if (error) {
            _this.errorCount++;

            _this.fireError(error, msg, _this.errorCount);
          } else {
            _this.errorCount = 0;
          }

          if (_this.queue.length > 0) {
            _this.doWriteMessage(_this.queue.shift());
          }
        });
      }
    } catch (error) {
      this.errorCount++;
      this.fireError(error, msg, this.errorCount);
    }
  };

  return IPCMessageWriter;
}(AbstractMessageWriter);

exports.IPCMessageWriter = IPCMessageWriter;

var SocketMessageWriter =
/** @class */
function (_super) {
  __extends(SocketMessageWriter, _super);

  function SocketMessageWriter(socket, encoding) {
    if (encoding === void 0) {
      encoding = 'utf8';
    }

    var _this = _super.call(this) || this;

    _this.socket = socket;
    _this.queue = [];
    _this.sending = false;
    _this.encoding = encoding;
    _this.errorCount = 0;

    _this.socket.on('error', function (error) {
      return _this.fireError(error);
    });

    _this.socket.on('close', function () {
      return _this.fireClose();
    });

    return _this;
  }

  SocketMessageWriter.prototype.write = function (msg) {
    if (!this.sending && this.queue.length === 0) {
      // See https://github.com/nodejs/node/issues/7657
      this.doWriteMessage(msg);
    } else {
      this.queue.push(msg);
    }
  };

  SocketMessageWriter.prototype.doWriteMessage = function (msg) {
    var _this = this;

    var json = JSON.stringify(msg);
    var contentLength = Buffer.byteLength(json, this.encoding);
    var headers = [ContentLength, contentLength.toString(), CRLF, CRLF];

    try {
      // Header must be written in ASCII encoding
      this.sending = true;
      this.socket.write(headers.join(''), 'ascii', function (error) {
        if (error) {
          _this.handleError(error, msg);
        }

        try {
          // Now write the content. This can be written in any encoding
          _this.socket.write(json, _this.encoding, function (error) {
            _this.sending = false;

            if (error) {
              _this.handleError(error, msg);
            } else {
              _this.errorCount = 0;
            }

            if (_this.queue.length > 0) {
              _this.doWriteMessage(_this.queue.shift());
            }
          });
        } catch (error) {
          _this.handleError(error, msg);
        }
      });
    } catch (error) {
      this.handleError(error, msg);
    }
  };

  SocketMessageWriter.prototype.handleError = function (error, msg) {
    this.errorCount++;
    this.fireError(error, msg, this.errorCount);
  };

  return SocketMessageWriter;
}(AbstractMessageWriter);

exports.SocketMessageWriter = SocketMessageWriter;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messages.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messages.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var __extends = this && this.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var is = __webpack_require__(/*! ./is */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/is.js");
/**
 * Predefined error codes.
 */


var ErrorCodes;

(function (ErrorCodes) {
  // Defined by JSON RPC
  ErrorCodes.ParseError = -32700;
  ErrorCodes.InvalidRequest = -32600;
  ErrorCodes.MethodNotFound = -32601;
  ErrorCodes.InvalidParams = -32602;
  ErrorCodes.InternalError = -32603;
  ErrorCodes.serverErrorStart = -32099;
  ErrorCodes.serverErrorEnd = -32000;
  ErrorCodes.ServerNotInitialized = -32002;
  ErrorCodes.UnknownErrorCode = -32001; // Defined by the protocol.

  ErrorCodes.RequestCancelled = -32800; // Defined by VSCode library.

  ErrorCodes.MessageWriteError = 1;
  ErrorCodes.MessageReadError = 2;
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
/**
 * An error object return in a response in case a request
 * has failed.
 */


var ResponseError =
/** @class */
function (_super) {
  __extends(ResponseError, _super);

  function ResponseError(code, message, data) {
    var _this = _super.call(this, message) || this;

    _this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
    _this.data = data;
    Object.setPrototypeOf(_this, ResponseError.prototype);
    return _this;
  }

  ResponseError.prototype.toJson = function () {
    return {
      code: this.code,
      message: this.message,
      data: this.data
    };
  };

  return ResponseError;
}(Error);

exports.ResponseError = ResponseError;
/**
 * An abstract implementation of a MessageType.
 */

var AbstractMessageType =
/** @class */
function () {
  function AbstractMessageType(_method, _numberOfParams) {
    this._method = _method;
    this._numberOfParams = _numberOfParams;
  }

  Object.defineProperty(AbstractMessageType.prototype, "method", {
    get: function get() {
      return this._method;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractMessageType.prototype, "numberOfParams", {
    get: function get() {
      return this._numberOfParams;
    },
    enumerable: true,
    configurable: true
  });
  return AbstractMessageType;
}();

exports.AbstractMessageType = AbstractMessageType;
/**
 * Classes to type request response pairs
 */

var RequestType0 =
/** @class */
function (_super) {
  __extends(RequestType0, _super);

  function RequestType0(method) {
    var _this = _super.call(this, method, 0) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType0;
}(AbstractMessageType);

exports.RequestType0 = RequestType0;

var RequestType =
/** @class */
function (_super) {
  __extends(RequestType, _super);

  function RequestType(method) {
    var _this = _super.call(this, method, 1) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType;
}(AbstractMessageType);

exports.RequestType = RequestType;

var RequestType1 =
/** @class */
function (_super) {
  __extends(RequestType1, _super);

  function RequestType1(method) {
    var _this = _super.call(this, method, 1) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType1;
}(AbstractMessageType);

exports.RequestType1 = RequestType1;

var RequestType2 =
/** @class */
function (_super) {
  __extends(RequestType2, _super);

  function RequestType2(method) {
    var _this = _super.call(this, method, 2) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType2;
}(AbstractMessageType);

exports.RequestType2 = RequestType2;

var RequestType3 =
/** @class */
function (_super) {
  __extends(RequestType3, _super);

  function RequestType3(method) {
    var _this = _super.call(this, method, 3) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType3;
}(AbstractMessageType);

exports.RequestType3 = RequestType3;

var RequestType4 =
/** @class */
function (_super) {
  __extends(RequestType4, _super);

  function RequestType4(method) {
    var _this = _super.call(this, method, 4) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType4;
}(AbstractMessageType);

exports.RequestType4 = RequestType4;

var RequestType5 =
/** @class */
function (_super) {
  __extends(RequestType5, _super);

  function RequestType5(method) {
    var _this = _super.call(this, method, 5) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType5;
}(AbstractMessageType);

exports.RequestType5 = RequestType5;

var RequestType6 =
/** @class */
function (_super) {
  __extends(RequestType6, _super);

  function RequestType6(method) {
    var _this = _super.call(this, method, 6) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType6;
}(AbstractMessageType);

exports.RequestType6 = RequestType6;

var RequestType7 =
/** @class */
function (_super) {
  __extends(RequestType7, _super);

  function RequestType7(method) {
    var _this = _super.call(this, method, 7) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType7;
}(AbstractMessageType);

exports.RequestType7 = RequestType7;

var RequestType8 =
/** @class */
function (_super) {
  __extends(RequestType8, _super);

  function RequestType8(method) {
    var _this = _super.call(this, method, 8) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType8;
}(AbstractMessageType);

exports.RequestType8 = RequestType8;

var RequestType9 =
/** @class */
function (_super) {
  __extends(RequestType9, _super);

  function RequestType9(method) {
    var _this = _super.call(this, method, 9) || this;

    _this._ = undefined;
    return _this;
  }

  return RequestType9;
}(AbstractMessageType);

exports.RequestType9 = RequestType9;

var NotificationType =
/** @class */
function (_super) {
  __extends(NotificationType, _super);

  function NotificationType(method) {
    var _this = _super.call(this, method, 1) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType;
}(AbstractMessageType);

exports.NotificationType = NotificationType;

var NotificationType0 =
/** @class */
function (_super) {
  __extends(NotificationType0, _super);

  function NotificationType0(method) {
    var _this = _super.call(this, method, 0) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType0;
}(AbstractMessageType);

exports.NotificationType0 = NotificationType0;

var NotificationType1 =
/** @class */
function (_super) {
  __extends(NotificationType1, _super);

  function NotificationType1(method) {
    var _this = _super.call(this, method, 1) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType1;
}(AbstractMessageType);

exports.NotificationType1 = NotificationType1;

var NotificationType2 =
/** @class */
function (_super) {
  __extends(NotificationType2, _super);

  function NotificationType2(method) {
    var _this = _super.call(this, method, 2) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType2;
}(AbstractMessageType);

exports.NotificationType2 = NotificationType2;

var NotificationType3 =
/** @class */
function (_super) {
  __extends(NotificationType3, _super);

  function NotificationType3(method) {
    var _this = _super.call(this, method, 3) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType3;
}(AbstractMessageType);

exports.NotificationType3 = NotificationType3;

var NotificationType4 =
/** @class */
function (_super) {
  __extends(NotificationType4, _super);

  function NotificationType4(method) {
    var _this = _super.call(this, method, 4) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType4;
}(AbstractMessageType);

exports.NotificationType4 = NotificationType4;

var NotificationType5 =
/** @class */
function (_super) {
  __extends(NotificationType5, _super);

  function NotificationType5(method) {
    var _this = _super.call(this, method, 5) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType5;
}(AbstractMessageType);

exports.NotificationType5 = NotificationType5;

var NotificationType6 =
/** @class */
function (_super) {
  __extends(NotificationType6, _super);

  function NotificationType6(method) {
    var _this = _super.call(this, method, 6) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType6;
}(AbstractMessageType);

exports.NotificationType6 = NotificationType6;

var NotificationType7 =
/** @class */
function (_super) {
  __extends(NotificationType7, _super);

  function NotificationType7(method) {
    var _this = _super.call(this, method, 7) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType7;
}(AbstractMessageType);

exports.NotificationType7 = NotificationType7;

var NotificationType8 =
/** @class */
function (_super) {
  __extends(NotificationType8, _super);

  function NotificationType8(method) {
    var _this = _super.call(this, method, 8) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType8;
}(AbstractMessageType);

exports.NotificationType8 = NotificationType8;

var NotificationType9 =
/** @class */
function (_super) {
  __extends(NotificationType9, _super);

  function NotificationType9(method) {
    var _this = _super.call(this, method, 9) || this;

    _this._ = undefined;
    return _this;
  }

  return NotificationType9;
}(AbstractMessageType);

exports.NotificationType9 = NotificationType9;
/**
 * Tests if the given message is a request message
 */

function isRequestMessage(message) {
  var candidate = message;
  return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
}

exports.isRequestMessage = isRequestMessage;
/**
 * Tests if the given message is a notification message
 */

function isNotificationMessage(message) {
  var candidate = message;
  return candidate && is.string(candidate.method) && message.id === void 0;
}

exports.isNotificationMessage = isNotificationMessage;
/**
 * Tests if the given message is a response message
 */

function isResponseMessage(message) {
  var candidate = message;
  return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
}

exports.isResponseMessage = isResponseMessage;

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/pipeSupport.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/pipeSupport.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var path_1 = __webpack_require__(/*! path */ "../node_modules/path-browserify/index.js");

var os_1 = __webpack_require__(/*! os */ "../node_modules/os-browserify/browser.js");

var crypto_1 = __webpack_require__(/*! crypto */ "../node_modules/node-libs-browser/mock/empty.js");

var net_1 = __webpack_require__(/*! net */ "../node_modules/node-libs-browser/mock/empty.js");

var messageReader_1 = __webpack_require__(/*! ./messageReader */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageReader.js");

var messageWriter_1 = __webpack_require__(/*! ./messageWriter */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageWriter.js");

function generateRandomPipeName() {
  var randomSuffix = crypto_1.randomBytes(21).toString('hex');

  if (process.platform === 'win32') {
    return "\\\\.\\pipe\\vscode-jsonrpc-" + randomSuffix + "-sock";
  } else {
    // Mac/Unix: use socket file
    return path_1.join(os_1.tmpdir(), "vscode-" + randomSuffix + ".sock");
  }
}

exports.generateRandomPipeName = generateRandomPipeName;

function createClientPipeTransport(pipeName, encoding) {
  if (encoding === void 0) {
    encoding = 'utf-8';
  }

  var connectResolve;
  var connected = new Promise(function (resolve, _reject) {
    connectResolve = resolve;
  });
  return new Promise(function (resolve, reject) {
    var server = net_1.createServer(function (socket) {
      server.close();
      connectResolve([new messageReader_1.SocketMessageReader(socket, encoding), new messageWriter_1.SocketMessageWriter(socket, encoding)]);
    });
    server.on('error', reject);
    server.listen(pipeName, function () {
      server.removeListener('error', reject);
      resolve({
        onConnected: function onConnected() {
          return connected;
        }
      });
    });
  });
}

exports.createClientPipeTransport = createClientPipeTransport;

function createServerPipeTransport(pipeName, encoding) {
  if (encoding === void 0) {
    encoding = 'utf-8';
  }

  var socket = net_1.createConnection(pipeName);
  return [new messageReader_1.SocketMessageReader(socket, encoding), new messageWriter_1.SocketMessageWriter(socket, encoding)];
}

exports.createServerPipeTransport = createServerPipeTransport;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/socketSupport.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/socketSupport.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var net_1 = __webpack_require__(/*! net */ "../node_modules/node-libs-browser/mock/empty.js");

var messageReader_1 = __webpack_require__(/*! ./messageReader */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageReader.js");

var messageWriter_1 = __webpack_require__(/*! ./messageWriter */ "../node_modules/vscode-ws-jsonrpc/node_modules/vscode-jsonrpc/lib/messageWriter.js");

function createClientSocketTransport(port, encoding) {
  if (encoding === void 0) {
    encoding = 'utf-8';
  }

  var connectResolve;
  var connected = new Promise(function (resolve, _reject) {
    connectResolve = resolve;
  });
  return new Promise(function (resolve, reject) {
    var server = net_1.createServer(function (socket) {
      server.close();
      connectResolve([new messageReader_1.SocketMessageReader(socket, encoding), new messageWriter_1.SocketMessageWriter(socket, encoding)]);
    });
    server.on('error', reject);
    server.listen(port, '127.0.0.1', function () {
      server.removeListener('error', reject);
      resolve({
        onConnected: function onConnected() {
          return connected;
        }
      });
    });
  });
}

exports.createClientSocketTransport = createClientSocketTransport;

function createServerSocketTransport(port, encoding) {
  if (encoding === void 0) {
    encoding = 'utf-8';
  }

  var socket = net_1.createConnection(port, '127.0.0.1');
  return [new messageReader_1.SocketMessageReader(socket, encoding), new messageWriter_1.SocketMessageWriter(socket, encoding)];
}

exports.createServerSocketTransport = createServerSocketTransport;

/***/ })

}]);
//# sourceMappingURL=8.bundle.js.map