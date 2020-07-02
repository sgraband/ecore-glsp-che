(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "../node_modules/@theia/terminal/lib/browser/base/terminal-service.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/base/terminal-service.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Service manipulating terminal widgets.
 */
exports.TerminalService = Symbol('TerminalService');


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/base/terminal-widget.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/base/terminal-widget.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
/**
 * Terminal UI widget.
 */
var TerminalWidget = /** @class */ (function (_super) {
    __extends(TerminalWidget, _super);
    function TerminalWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TerminalWidget;
}(browser_1.BaseWidget));
exports.TerminalWidget = TerminalWidget;
/**
 * Terminal widget options.
 */
exports.TerminalWidgetOptions = Symbol('TerminalWidgetOptions');


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/search/terminal-search-container.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/search/terminal-search-container.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var terminal_search_widget_1 = __webpack_require__(/*! ./terminal-search-widget */ "../node_modules/@theia/terminal/lib/browser/search/terminal-search-widget.js");
var xterm_1 = __webpack_require__(/*! xterm */ "../node_modules/xterm/lib/xterm.js");
function createTerminalSearchFactory(container) {
    container.bind(terminal_search_widget_1.TerminalSearchWidget).toSelf().inSingletonScope();
    return function (terminal) {
        container.bind(xterm_1.Terminal).toConstantValue(terminal);
        return container.get(terminal_search_widget_1.TerminalSearchWidget);
    };
}
exports.createTerminalSearchFactory = createTerminalSearchFactory;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/search/terminal-search-widget.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/search/terminal-search-widget.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
__webpack_require__(/*! ../../../src/browser/style/terminal-search.css */ "../node_modules/@theia/terminal/src/browser/style/terminal-search.css");
var xterm_1 = __webpack_require__(/*! xterm */ "../node_modules/xterm/lib/xterm.js");
var xterm_addon_search_1 = __webpack_require__(/*! xterm-addon-search */ "../node_modules/xterm-addon-search/lib/xterm-addon-search.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
exports.TERMINAL_SEARCH_WIDGET_FACTORY_ID = 'terminal-search';
exports.TerminalSearchWidgetFactory = Symbol('TerminalSearchWidgetFactory');
var TerminalSearchWidget = /** @class */ (function (_super) {
    __extends(TerminalSearchWidget, _super);
    function TerminalSearchWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchOptions = {};
        _this.onSearchInputFocus = function () {
            if (_this.searchBox) {
                _this.searchBox.classList.add('focused');
            }
        };
        _this.onSearchInputBlur = function () {
            if (_this.searchBox) {
                _this.searchBox.classList.remove('focused');
            }
        };
        _this.handleHide = function () {
            _this.hide();
        };
        _this.handleCaseSensitiveOptionClicked = function (event) {
            _this.searchOptions.caseSensitive = !_this.searchOptions.caseSensitive;
            _this.updateSearchInputBox(_this.searchOptions.caseSensitive, event.currentTarget);
        };
        _this.handleWholeWordOptionClicked = function (event) {
            _this.searchOptions.wholeWord = !_this.searchOptions.wholeWord;
            _this.updateSearchInputBox(_this.searchOptions.wholeWord, event.currentTarget);
        };
        _this.handleRegexOptionClicked = function (event) {
            _this.searchOptions.regex = !_this.searchOptions.regex;
            _this.updateSearchInputBox(_this.searchOptions.regex, event.currentTarget);
        };
        _this.onInputChanged = function (event) {
            // move to previous search result on `Shift + Enter`
            if (event && event.shiftKey && event.keyCode === browser_1.Key.ENTER.keyCode) {
                _this.search(false, 'previous');
                return;
            }
            // move to next search result on `Enter`
            if (event && event.keyCode === browser_1.Key.ENTER.keyCode) {
                _this.search(false, 'next');
                return;
            }
            _this.search(true, 'next');
        };
        _this.handleNextButtonClicked = function () {
            _this.search(false, 'next');
        };
        _this.handlePreviousButtonClicked = function () {
            _this.search(false, 'previous');
        };
        return _this;
    }
    TerminalSearchWidget.prototype.init = function () {
        this.node.classList.add('theia-search-terminal-widget-parent');
        this.searchAddon = new xterm_addon_search_1.SearchAddon();
        this.terminal.loadAddon(this.searchAddon);
        this.hide();
        this.update();
    };
    TerminalSearchWidget.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: 'theia-search-terminal-widget' },
            React.createElement("div", { className: 'theia-search-elem-box', ref: function (searchBox) { return _this.searchBox = searchBox; } },
                React.createElement("input", { title: 'Find', type: 'text', placeholder: 'Find', ref: function (ip) { return _this.searchInput = ip; }, onKeyUp: this.onInputChanged, onFocus: this.onSearchInputFocus, onBlur: this.onSearchInputBlur }),
                React.createElement("div", { title: 'Match case', tabIndex: 0, className: 'search-elem match-case', onClick: this.handleCaseSensitiveOptionClicked }),
                React.createElement("div", { title: 'Match whole word', tabIndex: 0, className: 'search-elem whole-word', onClick: this.handleWholeWordOptionClicked }),
                React.createElement("div", { title: 'Use regular expression', tabIndex: 0, className: 'search-elem use-regexp', onClick: this.handleRegexOptionClicked })),
            React.createElement("button", { title: 'Previous match', className: 'search-elem arrow-up', onClick: this.handlePreviousButtonClicked }),
            React.createElement("button", { title: 'Next match', className: 'search-elem arrow-down', onClick: this.handleNextButtonClicked }),
            React.createElement("button", { title: 'Close', className: 'search-elem close', onClick: this.handleHide }));
    };
    TerminalSearchWidget.prototype.updateSearchInputBox = function (enable, optionElement) {
        if (enable) {
            optionElement.classList.add('option-enabled');
        }
        else {
            optionElement.classList.remove('option-enabled');
        }
        this.searchInput.focus();
    };
    TerminalSearchWidget.prototype.search = function (incremental, searchDirection) {
        if (this.searchInput) {
            this.searchOptions.incremental = incremental;
            var searchText = this.searchInput.value;
            if (searchDirection === 'next') {
                this.searchAddon.findNext(searchText, this.searchOptions);
            }
            if (searchDirection === 'previous') {
                this.searchAddon.findPrevious(searchText, this.searchOptions);
            }
        }
    };
    TerminalSearchWidget.prototype.onAfterHide = function () {
        this.terminal.focus();
    };
    TerminalSearchWidget.prototype.onAfterShow = function () {
        if (this.searchInput) {
            this.searchInput.select();
        }
    };
    __decorate([
        inversify_1.inject(xterm_1.Terminal),
        __metadata("design:type", xterm_1.Terminal)
    ], TerminalSearchWidget.prototype, "terminal", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalSearchWidget.prototype, "init", null);
    TerminalSearchWidget = __decorate([
        inversify_1.injectable()
    ], TerminalSearchWidget);
    return TerminalSearchWidget;
}(react_widget_1.ReactWidget));
exports.TerminalSearchWidget = TerminalSearchWidget;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-contribution.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-contribution.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
exports.TerminalContribution = Symbol('TerminalContribution');


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-copy-on-selection-handler.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-copy-on-selection-handler.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var TerminalCopyOnSelectionHandler = /** @class */ (function () {
    function TerminalCopyOnSelectionHandler() {
        var _this = this;
        this.copyListener = function (ev) {
            if (_this.interceptCopy && ev.clipboardData) {
                ev.clipboardData.setData('text/plain', _this.textToCopy);
                ev.preventDefault();
            }
        };
    }
    TerminalCopyOnSelectionHandler.prototype.init = function () {
        document.addEventListener('copy', this.copyListener);
    };
    TerminalCopyOnSelectionHandler.prototype.clipBoardCopyIsGranted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permissions, state, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Unfortunately Firefox doesn't support permission check `clipboard-write`, so let try to copy anyway,
                        if (browser_1.isFirefox) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        permissions = navigator.permissions;
                        return [4 /*yield*/, permissions.query({ name: 'clipboard-write' })];
                    case 2:
                        state = (_a.sent()).state;
                        if (state === 'granted') {
                            return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    TerminalCopyOnSelectionHandler.prototype.executeCommandCopy = function () {
        try {
            this.interceptCopy = true;
            document.execCommand('copy');
            this.interceptCopy = false;
        }
        catch (e) {
            // do nothing
        }
    };
    TerminalCopyOnSelectionHandler.prototype.writeToClipBoard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clipboard, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clipboard = navigator.clipboard;
                        if (!clipboard) {
                            this.executeCommandCopy();
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, clipboard.writeText(this.textToCopy)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        this.executeCommandCopy();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TerminalCopyOnSelectionHandler.prototype.copy = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var permissions, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.textToCopy = text;
                        permissions = navigator.permissions;
                        _a = permissions && permissions.query;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.clipBoardCopyIsGranted()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.writeToClipBoard()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.executeCommandCopy();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalCopyOnSelectionHandler.prototype, "init", null);
    TerminalCopyOnSelectionHandler = __decorate([
        inversify_1.injectable()
    ], TerminalCopyOnSelectionHandler);
    return TerminalCopyOnSelectionHandler;
}());
exports.TerminalCopyOnSelectionHandler = TerminalCopyOnSelectionHandler;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var quick_pick_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-pick-service */ "../node_modules/@theia/core/lib/common/quick-pick-service.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var terminal_widget_impl_1 = __webpack_require__(/*! ./terminal-widget-impl */ "../node_modules/@theia/terminal/lib/browser/terminal-widget-impl.js");
var terminal_keybinding_contexts_1 = __webpack_require__(/*! ./terminal-keybinding-contexts */ "../node_modules/@theia/terminal/lib/browser/terminal-keybinding-contexts.js");
var terminal_widget_1 = __webpack_require__(/*! ./base/terminal-widget */ "../node_modules/@theia/terminal/lib/browser/base/terminal-widget.js");
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "../node_modules/@theia/core/lib/common/uri-command-handler.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "../node_modules/@theia/filesystem/lib/common/index.js");
var shell_terminal_protocol_1 = __webpack_require__(/*! ../common/shell-terminal-protocol */ "../node_modules/@theia/terminal/lib/common/shell-terminal-protocol.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var terminal_theme_service_1 = __webpack_require__(/*! ./terminal-theme-service */ "../node_modules/@theia/terminal/lib/browser/terminal-theme-service.js");
var TerminalMenus;
(function (TerminalMenus) {
    TerminalMenus.TERMINAL = __spread(core_1.MAIN_MENU_BAR, ['7_terminal']);
    TerminalMenus.TERMINAL_NEW = __spread(TerminalMenus.TERMINAL, ['1_terminal']);
    TerminalMenus.TERMINAL_TASKS = __spread(TerminalMenus.TERMINAL, ['2_terminal']);
    TerminalMenus.TERMINAL_TASKS_INFO = __spread(TerminalMenus.TERMINAL_TASKS, ['3_terminal']);
    TerminalMenus.TERMINAL_TASKS_CONFIG = __spread(TerminalMenus.TERMINAL_TASKS, ['4_terminal']);
    TerminalMenus.TERMINAL_NAVIGATOR_CONTEXT_MENU = ['navigator-context-menu', 'navigation'];
})(TerminalMenus = exports.TerminalMenus || (exports.TerminalMenus = {}));
var TerminalCommands;
(function (TerminalCommands) {
    var TERMINAL_CATEGORY = 'Terminal';
    TerminalCommands.NEW = {
        id: 'terminal:new',
        category: TERMINAL_CATEGORY,
        label: 'Open New Terminal'
    };
    TerminalCommands.NEW_ACTIVE_WORKSPACE = {
        id: 'terminal:new:active:workspace',
        category: TERMINAL_CATEGORY,
        label: 'Open New Terminal (In Active Workspace)'
    };
    TerminalCommands.TERMINAL_CLEAR = {
        id: 'terminal:clear',
        category: TERMINAL_CATEGORY,
        label: 'Clear Terminal'
    };
    TerminalCommands.TERMINAL_CONTEXT = {
        id: 'terminal:context',
        category: TERMINAL_CATEGORY,
        label: 'Open in Terminal'
    };
    TerminalCommands.SPLIT = {
        id: 'terminal:split',
        category: TERMINAL_CATEGORY,
        label: 'Split Terminal'
    };
    TerminalCommands.TERMINAL_FIND_TEXT = {
        id: 'terminal:find',
        category: TERMINAL_CATEGORY,
        label: 'Find'
    };
    TerminalCommands.TERMINAL_FIND_TEXT_CANCEL = {
        id: 'terminal:find:cancel',
        category: TERMINAL_CATEGORY,
        label: 'Hide find widget'
    };
    TerminalCommands.SCROLL_LINE_UP = {
        id: 'terminal:scroll:line:up',
        category: TERMINAL_CATEGORY,
        label: 'Scroll line up'
    };
    TerminalCommands.SCROLL_LINE_DOWN = {
        id: 'terminal:scroll:line:down',
        category: TERMINAL_CATEGORY,
        label: 'Scroll line down'
    };
    TerminalCommands.SCROLL_TO_TOP = {
        id: 'terminal:scroll:top',
        category: TERMINAL_CATEGORY,
        label: 'Scroll to top'
    };
    TerminalCommands.SCROLL_PAGE_UP = {
        id: 'terminal:scroll:page:up',
        category: TERMINAL_CATEGORY,
        label: 'Scroll page up'
    };
    TerminalCommands.SCROLL_PAGE_DOWN = {
        id: 'terminal:scroll:page:down',
        category: TERMINAL_CATEGORY,
        label: 'Scroll page down'
    };
    /**
     * Command that displays all terminals that are currently opened
     */
    TerminalCommands.SHOW_ALL_OPENED_TERMINALS = {
        id: 'workbench.action.showAllTerminals',
        category: 'View',
        label: 'Show All Opened Terminals'
    };
})(TerminalCommands = exports.TerminalCommands || (exports.TerminalCommands = {}));
var TerminalFrontendContribution = /** @class */ (function () {
    function TerminalFrontendContribution(shell, shellTerminalServer, widgetManager, fileSystem, selectionService) {
        this.shell = shell;
        this.shellTerminalServer = shellTerminalServer;
        this.widgetManager = widgetManager;
        this.fileSystem = fileSystem;
        this.selectionService = selectionService;
        this.onDidCreateTerminalEmitter = new common_1.Emitter();
        this.onDidCreateTerminal = this.onDidCreateTerminalEmitter.event;
        this.onDidChangeCurrentTerminalEmitter = new common_1.Emitter();
        this.onDidChangeCurrentTerminal = this.onDidChangeCurrentTerminalEmitter.event;
    }
    TerminalFrontendContribution.prototype.init = function () {
        var _this = this;
        this.shell.currentChanged.connect(function () { return _this.updateCurrentTerminal(); });
        this.widgetManager.onDidCreateWidget(function (_a) {
            var widget = _a.widget;
            if (widget instanceof terminal_widget_1.TerminalWidget) {
                _this.updateCurrentTerminal();
                _this.onDidCreateTerminalEmitter.fire(widget);
            }
        });
        var terminalFocusKey = this.contextKeyService.createKey('terminalFocus', false);
        var updateFocusKey = function () { return terminalFocusKey.set(_this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget); };
        updateFocusKey();
        this.shell.activeChanged.connect(updateFocusKey);
    };
    Object.defineProperty(TerminalFrontendContribution.prototype, "currentTerminal", {
        get: function () {
            return this._currentTerminal;
        },
        enumerable: true,
        configurable: true
    });
    TerminalFrontendContribution.prototype.setCurrentTerminal = function (current) {
        if (this._currentTerminal !== current) {
            this._currentTerminal = current;
            this.onDidChangeCurrentTerminalEmitter.fire(this._currentTerminal);
        }
    };
    TerminalFrontendContribution.prototype.updateCurrentTerminal = function () {
        var widget = this.shell.currentWidget;
        if (widget instanceof terminal_widget_1.TerminalWidget) {
            this.setCurrentTerminal(widget);
        }
        else if (!this._currentTerminal || !this._currentTerminal.isVisible) {
            this.setCurrentTerminal(undefined);
        }
    };
    Object.defineProperty(TerminalFrontendContribution.prototype, "all", {
        get: function () {
            return this.widgetManager.getWidgets(terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID);
        },
        enumerable: true,
        configurable: true
    });
    TerminalFrontendContribution.prototype.getById = function (id) {
        return this.all.find(function (terminal) { return terminal.id === id; });
    };
    TerminalFrontendContribution.prototype.getDefaultShell = function () {
        return this.shellTerminalServer.getDefaultShell();
    };
    TerminalFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(TerminalCommands.NEW, {
            execute: function () { return _this.openTerminal(); }
        });
        commands.registerCommand(TerminalCommands.NEW_ACTIVE_WORKSPACE, {
            execute: function () { return _this.openActiveWorkspaceTerminal(); }
        });
        commands.registerCommand(TerminalCommands.SPLIT, {
            execute: function (widget) { return _this.splitTerminal(widget); },
            isEnabled: function (widget) { return !!_this.getTerminalRef(widget); },
            isVisible: function (widget) { return !!_this.getTerminalRef(widget); }
        });
        commands.registerCommand(TerminalCommands.TERMINAL_CLEAR);
        commands.registerHandler(TerminalCommands.TERMINAL_CLEAR.id, {
            isEnabled: function () { return _this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget; },
            execute: function () { return _this.shell.activeWidget.clearOutput(); }
        });
        commands.registerCommand(TerminalCommands.TERMINAL_CONTEXT, new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, {
            execute: function (uri) { return __awaiter(_this, void 0, void 0, function () {
                var stat, cwd, termWidget;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.fileSystem.getFileStat(uri.toString())];
                        case 1:
                            stat = _a.sent();
                            if (!stat) {
                                return [2 /*return*/];
                            }
                            cwd = (stat.isDirectory) ? uri.toString() : uri.parent.toString();
                            return [4 /*yield*/, this.newTerminal({ cwd: cwd })];
                        case 2:
                            termWidget = _a.sent();
                            termWidget.start();
                            this.activateTerminal(termWidget);
                            return [2 /*return*/];
                    }
                });
            }); }
        }));
        commands.registerCommand(TerminalCommands.TERMINAL_FIND_TEXT);
        commands.registerHandler(TerminalCommands.TERMINAL_FIND_TEXT.id, {
            isEnabled: function () {
                if (_this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget) {
                    return !_this.shell.activeWidget.getSearchBox().isVisible;
                }
                return false;
            },
            execute: function () {
                var termWidget = _this.shell.activeWidget;
                var terminalSearchBox = termWidget.getSearchBox();
                terminalSearchBox.show();
            }
        });
        commands.registerCommand(TerminalCommands.TERMINAL_FIND_TEXT_CANCEL);
        commands.registerHandler(TerminalCommands.TERMINAL_FIND_TEXT_CANCEL.id, {
            isEnabled: function () {
                if (_this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget) {
                    return _this.shell.activeWidget.getSearchBox().isVisible;
                }
                return false;
            },
            execute: function () {
                var termWidget = _this.shell.activeWidget;
                var terminalSearchBox = termWidget.getSearchBox();
                terminalSearchBox.hide();
            }
        });
        commands.registerCommand(TerminalCommands.SCROLL_LINE_UP, {
            isEnabled: function () { return _this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget; },
            isVisible: function () { return false; },
            execute: function () {
                _this.shell.activeWidget.scrollLineUp();
            }
        });
        commands.registerCommand(TerminalCommands.SCROLL_LINE_DOWN, {
            isEnabled: function () { return _this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget; },
            isVisible: function () { return false; },
            execute: function () {
                _this.shell.activeWidget.scrollLineDown();
            }
        });
        commands.registerCommand(TerminalCommands.SCROLL_TO_TOP, {
            isEnabled: function () { return _this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget; },
            isVisible: function () { return false; },
            execute: function () {
                _this.shell.activeWidget.scrollToTop();
            }
        });
        commands.registerCommand(TerminalCommands.SCROLL_PAGE_UP, {
            isEnabled: function () { return _this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget; },
            isVisible: function () { return false; },
            execute: function () {
                _this.shell.activeWidget.scrollPageUp();
            }
        });
        commands.registerCommand(TerminalCommands.SCROLL_PAGE_DOWN, {
            isEnabled: function () { return _this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget; },
            isVisible: function () { return false; },
            execute: function () {
                _this.shell.activeWidget.scrollPageDown();
            }
        });
    };
    TerminalFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerSubmenu(TerminalMenus.TERMINAL, 'Terminal');
        menus.registerMenuAction(TerminalMenus.TERMINAL_NEW, {
            commandId: TerminalCommands.NEW.id,
            label: 'New Terminal',
            order: '0'
        });
        menus.registerMenuAction(TerminalMenus.TERMINAL_NEW, {
            commandId: TerminalCommands.SPLIT.id,
            order: '1'
        });
        menus.registerMenuAction(TerminalMenus.TERMINAL_NAVIGATOR_CONTEXT_MENU, {
            commandId: TerminalCommands.TERMINAL_CONTEXT.id,
            order: 'z'
        });
    };
    TerminalFrontendContribution.prototype.registerToolbarItems = function (toolbar) {
        toolbar.registerItem({
            id: TerminalCommands.SPLIT.id,
            command: TerminalCommands.SPLIT.id,
            text: '$(columns)',
            tooltip: TerminalCommands.SPLIT.label
        });
    };
    TerminalFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: TerminalCommands.NEW.id,
            keybinding: 'ctrl+shift+`'
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.NEW_ACTIVE_WORKSPACE.id,
            keybinding: 'ctrl+`'
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.TERMINAL_CLEAR.id,
            keybinding: 'ctrlcmd+k',
            context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.TERMINAL_FIND_TEXT.id,
            keybinding: 'ctrlcmd+f',
            context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.TERMINAL_FIND_TEXT_CANCEL.id,
            keybinding: 'esc',
            context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalHideSearch
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.SCROLL_LINE_UP.id,
            keybinding: 'ctrl+shift+up',
            context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.SCROLL_LINE_DOWN.id,
            keybinding: 'ctrl+shift+down',
            context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.SCROLL_TO_TOP.id,
            keybinding: 'shift-home',
            context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.SCROLL_PAGE_UP.id,
            keybinding: 'shift-pageUp',
            context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
        });
        keybindings.registerKeybinding({
            command: TerminalCommands.SCROLL_PAGE_DOWN.id,
            keybinding: 'shift-pageDown',
            context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
        });
        /* Register passthrough keybindings for combinations recognized by
           xterm.js and converted to control characters.

             See: https://github.com/xtermjs/xterm.js/blob/v3/src/Terminal.ts#L1684 */
        /* Register ctrl + k (the passed Key) as a passthrough command in the
           context of the terminal.  */
        var regCtrl = function (k) {
            keybindings.registerKeybinding({
                command: browser_1.KeybindingRegistry.PASSTHROUGH_PSEUDO_COMMAND,
                keybinding: browser_1.KeyCode.createKeyCode({ key: k, ctrl: true }).toString(),
                context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive,
            });
        };
        /* Register alt + k (the passed Key) as a passthrough command in the
           context of the terminal.  */
        var regAlt = function (k) {
            keybindings.registerKeybinding({
                command: browser_1.KeybindingRegistry.PASSTHROUGH_PSEUDO_COMMAND,
                keybinding: browser_1.KeyCode.createKeyCode({ key: k, alt: true }).toString(),
                context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
            });
        };
        /* ctrl-space (000 - NUL).  */
        regCtrl(browser_1.Key.SPACE);
        /* ctrl-A (001/1/0x1) through ctrl-Z (032/26/0x1A).  */
        for (var i = 0; i < 26; i++) {
            regCtrl({
                keyCode: browser_1.Key.KEY_A.keyCode + i,
                code: 'Key' + String.fromCharCode('A'.charCodeAt(0) + i)
            });
        }
        /* ctrl-[ or ctrl-3 (033/27/0x1B - ESC).  */
        regCtrl(browser_1.Key.BRACKET_LEFT);
        regCtrl(browser_1.Key.DIGIT3);
        /* ctrl-\ or ctrl-4 (034/28/0x1C - FS).  */
        regCtrl(browser_1.Key.BACKSLASH);
        regCtrl(browser_1.Key.DIGIT4);
        /* ctrl-] or ctrl-5 (035/29/0x1D - GS).  */
        regCtrl(browser_1.Key.BRACKET_RIGHT);
        regCtrl(browser_1.Key.DIGIT5);
        /* ctrl-6 (036/30/0x1E - RS).  */
        regCtrl(browser_1.Key.DIGIT6);
        /* ctrl-7 (037/31/0x1F - US).  */
        regCtrl(browser_1.Key.DIGIT7);
        /* ctrl-8 (177/127/0x7F - DEL).  */
        regCtrl(browser_1.Key.DIGIT8);
        /* alt-A (0x1B 0x62) through alt-Z (0x1B 0x7A).  */
        for (var i = 0; i < 26; i++) {
            regAlt({
                keyCode: browser_1.Key.KEY_A.keyCode + i,
                code: 'Key' + String.fromCharCode('A'.charCodeAt(0) + i)
            });
        }
        /* alt-` (0x1B 0x60).  */
        regAlt(browser_1.Key.BACKQUOTE);
        /* alt-0 (0x1B 0x30) through alt-9 (0x1B 0x39).  */
        for (var i = 0; i < 10; i++) {
            regAlt({
                keyCode: browser_1.Key.DIGIT0.keyCode + i,
                code: 'Digit' + String.fromCharCode('0'.charCodeAt(0) + i)
            });
        }
        if (common_1.isOSX) {
            // selectAll on OSX
            keybindings.registerKeybinding({
                command: browser_1.KeybindingRegistry.PASSTHROUGH_PSEUDO_COMMAND,
                keybinding: 'ctrlcmd+a',
                context: terminal_keybinding_contexts_1.TerminalKeybindingContexts.terminalActive
            });
        }
    };
    TerminalFrontendContribution.prototype.newTerminal = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widgetManager.getOrCreateWidget(terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID, __assign({ created: new Date().toString() }, options))];
                    case 1:
                        widget = _a.sent();
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    TerminalFrontendContribution.prototype.activateTerminal = function (widget, widgetOptions) {
        this.open(widget, { widgetOptions: widgetOptions });
    };
    // TODO: reuse WidgetOpenHandler.open
    TerminalFrontendContribution.prototype.open = function (widget, options) {
        var op = __assign({ mode: 'activate' }, options, { widgetOptions: __assign({ area: 'bottom' }, (options && options.widgetOptions)) });
        if (!widget.isAttached) {
            this.shell.addWidget(widget, op.widgetOptions);
        }
        if (op.mode === 'activate') {
            this.shell.activateWidget(widget.id);
        }
        else if (op.mode === 'reveal') {
            this.shell.revealWidget(widget.id);
        }
    };
    TerminalFrontendContribution.prototype.selectTerminalCwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots;
            var _this = this;
            return __generator(this, function (_a) {
                roots = this.workspaceService.tryGetRoots();
                return [2 /*return*/, this.quickPick.show(roots.map(function (_a) {
                        var uri = _a.uri;
                        return ({ label: _this.labelProvider.getName(new uri_1.default(uri)), description: _this.labelProvider.getLongName(new uri_1.default(uri)), value: uri });
                    }), { placeholder: 'Select current working directory for new terminal' })];
            });
        });
    };
    TerminalFrontendContribution.prototype.splitTerminal = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.getTerminalRef(widget);
                        if (!ref) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.openTerminal({ ref: ref, mode: 'split-right' })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TerminalFrontendContribution.prototype.getTerminalRef = function (widget) {
        var ref = widget ? widget : this.shell.currentWidget;
        return ref instanceof terminal_widget_1.TerminalWidget ? ref : undefined;
    };
    TerminalFrontendContribution.prototype.openTerminal = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var cwd, termWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectTerminalCwd()];
                    case 1:
                        cwd = _a.sent();
                        return [4 /*yield*/, this.newTerminal({ cwd: cwd })];
                    case 2:
                        termWidget = _a.sent();
                        termWidget.start();
                        this.open(termWidget, { widgetOptions: options });
                        return [2 /*return*/];
                }
            });
        });
    };
    TerminalFrontendContribution.prototype.openActiveWorkspaceTerminal = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var termWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.newTerminal({})];
                    case 1:
                        termWidget = _a.sent();
                        termWidget.start();
                        this.open(termWidget, { widgetOptions: options });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * It should be aligned with https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     */
    TerminalFrontendContribution.prototype.registerColors = function (colors) {
        colors.register({
            id: 'terminal.background',
            defaults: {
                dark: 'panel.background',
                light: 'panel.background',
                hc: 'panel.background'
            },
            description: 'The background color of the terminal, this allows coloring the terminal differently to the panel.'
        });
        colors.register({
            id: 'terminal.foreground',
            defaults: {
                light: '#333333',
                dark: '#CCCCCC',
                hc: '#FFFFFF'
            },
            description: 'The foreground color of the terminal.'
        });
        colors.register({
            id: 'terminalCursor.foreground',
            description: 'The foreground color of the terminal cursor.'
        });
        colors.register({
            id: 'terminalCursor.background',
            description: 'The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.'
        });
        colors.register({
            id: 'terminal.selectionBackground',
            defaults: {
                light: '#00000040',
                dark: '#FFFFFF40',
                hc: '#FFFFFF80'
            },
            description: 'The selection background color of the terminal.'
        });
        colors.register({
            id: 'terminal.border',
            defaults: {
                light: 'panel.border',
                dark: 'panel.border',
                hc: 'panel.border'
            },
            description: 'The color of the border that separates split panes within the terminal. This defaults to panel.border.'
        });
        // eslint-disable-next-line guard-for-in
        for (var id in terminal_theme_service_1.terminalAnsiColorMap) {
            var entry = terminal_theme_service_1.terminalAnsiColorMap[id];
            var colorName = id.substring(13);
            colors.register({
                id: id,
                defaults: entry.defaults,
                description: "'" + colorName + "'  ANSI color in the terminal."
            });
        }
    };
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], TerminalFrontendContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], TerminalFrontendContribution.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], TerminalFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], TerminalFrontendContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalFrontendContribution.prototype, "init", null);
    TerminalFrontendContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.ApplicationShell)),
        __param(1, inversify_1.inject(shell_terminal_protocol_1.ShellTerminalServerProxy)),
        __param(2, inversify_1.inject(browser_2.WidgetManager)),
        __param(3, inversify_1.inject(common_2.FileSystem)),
        __param(4, inversify_1.inject(common_1.SelectionService)),
        __metadata("design:paramtypes", [browser_1.ApplicationShell, Object, browser_2.WidgetManager, Object, common_1.SelectionService])
    ], TerminalFrontendContribution);
    return TerminalFrontendContribution;
}());
exports.TerminalFrontendContribution = TerminalFrontendContribution;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-frontend-module.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-frontend-module.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
__webpack_require__(/*! ../../src/browser/style/terminal.css */ "../node_modules/@theia/terminal/src/browser/style/terminal.css");
__webpack_require__(/*! xterm/css/xterm.css */ "../node_modules/xterm/css/xterm.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var terminal_frontend_contribution_1 = __webpack_require__(/*! ./terminal-frontend-contribution */ "../node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js");
var terminal_widget_impl_1 = __webpack_require__(/*! ./terminal-widget-impl */ "../node_modules/@theia/terminal/lib/browser/terminal-widget-impl.js");
var terminal_widget_1 = __webpack_require__(/*! ./base/terminal-widget */ "../node_modules/@theia/terminal/lib/browser/base/terminal-widget.js");
var terminal_protocol_1 = __webpack_require__(/*! ../common/terminal-protocol */ "../node_modules/@theia/terminal/lib/common/terminal-protocol.js");
var terminal_watcher_1 = __webpack_require__(/*! ../common/terminal-watcher */ "../node_modules/@theia/terminal/lib/common/terminal-watcher.js");
var shell_terminal_protocol_1 = __webpack_require__(/*! ../common/shell-terminal-protocol */ "../node_modules/@theia/terminal/lib/common/shell-terminal-protocol.js");
var terminal_keybinding_contexts_1 = __webpack_require__(/*! ./terminal-keybinding-contexts */ "../node_modules/@theia/terminal/lib/browser/terminal-keybinding-contexts.js");
var terminal_common_module_1 = __webpack_require__(/*! ../common/terminal-common-module */ "../node_modules/@theia/terminal/lib/common/terminal-common-module.js");
var terminal_service_1 = __webpack_require__(/*! ./base/terminal-service */ "../node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var terminal_preferences_1 = __webpack_require__(/*! ./terminal-preferences */ "../node_modules/@theia/terminal/lib/browser/terminal-preferences.js");
var terminal_linkmatcher_1 = __webpack_require__(/*! ./terminal-linkmatcher */ "../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher.js");
var terminal_contribution_1 = __webpack_require__(/*! ./terminal-contribution */ "../node_modules/@theia/terminal/lib/browser/terminal-contribution.js");
var terminal_linkmatcher_files_1 = __webpack_require__(/*! ./terminal-linkmatcher-files */ "../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-files.js");
var terminal_linkmatcher_diff_1 = __webpack_require__(/*! ./terminal-linkmatcher-diff */ "../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-diff.js");
var terminal_search_widget_1 = __webpack_require__(/*! ./search/terminal-search-widget */ "../node_modules/@theia/terminal/lib/browser/search/terminal-search-widget.js");
var terminal_quick_open_service_1 = __webpack_require__(/*! ./terminal-quick-open-service */ "../node_modules/@theia/terminal/lib/browser/terminal-quick-open-service.js");
var terminal_search_container_1 = __webpack_require__(/*! ./search/terminal-search-container */ "../node_modules/@theia/terminal/lib/browser/search/terminal-search-container.js");
var terminal_copy_on_selection_handler_1 = __webpack_require__(/*! ./terminal-copy-on-selection-handler */ "../node_modules/@theia/terminal/lib/browser/terminal-copy-on-selection-handler.js");
var color_application_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/color-application-contribution */ "../node_modules/@theia/core/lib/browser/color-application-contribution.js");
var terminal_theme_service_1 = __webpack_require__(/*! ./terminal-theme-service */ "../node_modules/@theia/terminal/lib/browser/terminal-theme-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a, e_2, _b;
    terminal_preferences_1.bindTerminalPreferences(bind);
    bind(browser_1.KeybindingContext).to(terminal_keybinding_contexts_1.TerminalActiveContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(terminal_keybinding_contexts_1.TerminalSearchVisibleContext).inSingletonScope();
    bind(terminal_widget_1.TerminalWidget).to(terminal_widget_impl_1.TerminalWidgetImpl).inTransientScope();
    bind(terminal_watcher_1.TerminalWatcher).toSelf().inSingletonScope();
    var terminalNum = 0;
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID,
        createWidget: function (options) {
            var child = new inversify_1.Container({ defaultScope: 'Singleton' });
            child.parent = ctx.container;
            var counter = terminalNum++;
            var domId = options.id || 'terminal-' + counter;
            var widgetOptions = __assign({ title: 'Terminal ' + counter, useServerTitle: true, destroyTermOnClose: true }, options);
            child.bind(terminal_widget_1.TerminalWidgetOptions).toConstantValue(widgetOptions);
            child.bind('terminal-dom-id').toConstantValue(domId);
            child.bind(terminal_search_widget_1.TerminalSearchWidgetFactory).toDynamicValue(function (context) { return terminal_search_container_1.createTerminalSearchFactory(context.container); });
            return child.get(terminal_widget_1.TerminalWidget);
        }
    }); });
    bind(terminal_quick_open_service_1.TerminalQuickOpenService).toSelf().inSingletonScope();
    bind(terminal_copy_on_selection_handler_1.TerminalCopyOnSelectionHandler).toSelf().inSingletonScope();
    bind(terminal_quick_open_service_1.TerminalQuickOpenContribution).toSelf().inSingletonScope();
    try {
        for (var _c = __values([common_1.CommandContribution, browser_1.QuickOpenContribution]), _d = _c.next(); !_d.done; _d = _c.next()) {
            var identifier = _d.value;
            bind(identifier).toService(terminal_quick_open_service_1.TerminalQuickOpenContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(terminal_theme_service_1.TerminalThemeService).toSelf().inSingletonScope();
    bind(terminal_frontend_contribution_1.TerminalFrontendContribution).toSelf().inSingletonScope();
    bind(terminal_service_1.TerminalService).toService(terminal_frontend_contribution_1.TerminalFrontendContribution);
    try {
        for (var _e = __values([common_1.CommandContribution, common_1.MenuContribution, browser_1.KeybindingContribution, tab_bar_toolbar_1.TabBarToolbarContribution, color_application_contribution_1.ColorContribution]), _f = _e.next(); !_f.done; _f = _e.next()) {
            var identifier = _f.value;
            bind(identifier).toService(terminal_frontend_contribution_1.TerminalFrontendContribution);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_2) throw e_2.error; }
    }
    bind(terminal_protocol_1.ITerminalServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var terminalWatcher = ctx.container.get(terminal_watcher_1.TerminalWatcher);
        return connection.createProxy(terminal_protocol_1.terminalPath, terminalWatcher.getTerminalClient());
    }).inSingletonScope();
    bind(shell_terminal_protocol_1.ShellTerminalServerProxy).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var terminalWatcher = ctx.container.get(terminal_watcher_1.TerminalWatcher);
        return connection.createProxy(shell_terminal_protocol_1.shellTerminalPath, terminalWatcher.getTerminalClient());
    }).inSingletonScope();
    bind(shell_terminal_protocol_1.IShellTerminalServer).toService(shell_terminal_protocol_1.ShellTerminalServerProxy);
    terminal_common_module_1.createCommonBindings(bind);
    // link matchers
    core_1.bindContributionProvider(bind, terminal_contribution_1.TerminalContribution);
    bind(terminal_linkmatcher_1.URLMatcher).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_1.URLMatcher);
    bind(terminal_linkmatcher_1.LocalhostMatcher).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_1.LocalhostMatcher);
    bind(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles);
    bind(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPre).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPre);
    bind(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPost).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPost);
});


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-keybinding-contexts.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-keybinding-contexts.js ***!
  \***********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var terminal_widget_1 = __webpack_require__(/*! ./base/terminal-widget */ "../node_modules/@theia/terminal/lib/browser/base/terminal-widget.js");
var TerminalKeybindingContexts;
(function (TerminalKeybindingContexts) {
    TerminalKeybindingContexts.terminalActive = 'terminalActive';
    TerminalKeybindingContexts.terminalHideSearch = 'hideSearch';
})(TerminalKeybindingContexts = exports.TerminalKeybindingContexts || (exports.TerminalKeybindingContexts = {}));
var TerminalActiveContext = /** @class */ (function () {
    function TerminalActiveContext() {
        this.id = TerminalKeybindingContexts.terminalActive;
    }
    TerminalActiveContext.prototype.isEnabled = function () {
        return this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget;
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], TerminalActiveContext.prototype, "shell", void 0);
    TerminalActiveContext = __decorate([
        inversify_1.injectable()
    ], TerminalActiveContext);
    return TerminalActiveContext;
}());
exports.TerminalActiveContext = TerminalActiveContext;
var TerminalSearchVisibleContext = /** @class */ (function () {
    function TerminalSearchVisibleContext() {
        this.id = TerminalKeybindingContexts.terminalHideSearch;
    }
    TerminalSearchVisibleContext.prototype.isEnabled = function () {
        if (!(this.shell.activeWidget instanceof terminal_widget_1.TerminalWidget)) {
            return false;
        }
        var searchWidget = this.shell.activeWidget.getSearchBox();
        return searchWidget.isVisible;
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], TerminalSearchVisibleContext.prototype, "shell", void 0);
    TerminalSearchVisibleContext = __decorate([
        inversify_1.injectable()
    ], TerminalSearchVisibleContext);
    return TerminalSearchVisibleContext;
}());
exports.TerminalSearchVisibleContext = TerminalSearchVisibleContext;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-diff.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-diff.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var terminal_linkmatcher_files_1 = __webpack_require__(/*! ./terminal-linkmatcher-files */ "../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-files.js");
var TerminalLinkmatcherDiffPre = /** @class */ (function (_super) {
    __extends(TerminalLinkmatcherDiffPre, _super);
    function TerminalLinkmatcherDiffPre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerminalLinkmatcherDiffPre.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, /^--- a\/(\S*)/];
            });
        });
    };
    TerminalLinkmatcherDiffPre = __decorate([
        inversify_1.injectable()
    ], TerminalLinkmatcherDiffPre);
    return TerminalLinkmatcherDiffPre;
}(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles));
exports.TerminalLinkmatcherDiffPre = TerminalLinkmatcherDiffPre;
var TerminalLinkmatcherDiffPost = /** @class */ (function (_super) {
    __extends(TerminalLinkmatcherDiffPost, _super);
    function TerminalLinkmatcherDiffPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerminalLinkmatcherDiffPost.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, /^\+\+\+ b\/(\S*)/];
            });
        });
    };
    TerminalLinkmatcherDiffPost = __decorate([
        inversify_1.injectable()
    ], TerminalLinkmatcherDiffPost);
    return TerminalLinkmatcherDiffPost;
}(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles));
exports.TerminalLinkmatcherDiffPost = TerminalLinkmatcherDiffPost;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-files.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-files.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var application_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/application-protocol */ "../node_modules/@theia/core/lib/common/application-protocol.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var terminal_linkmatcher_1 = __webpack_require__(/*! ./terminal-linkmatcher */ "../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "../node_modules/@theia/filesystem/lib/common/index.js");
var TerminalLinkmatcherFiles = /** @class */ (function (_super) {
    __extends(TerminalLinkmatcherFiles, _super);
    function TerminalLinkmatcherFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerminalLinkmatcherFiles.prototype.init = function () {
        this.backendOs = this.appServer.getBackendOS();
    };
    TerminalLinkmatcherFiles.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var os, baseLocalLinkClause;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.backendOs];
                    case 1:
                        os = _a.sent();
                        baseLocalLinkClause = os === common_1.OS.Type.Windows ? winLocalLinkClause : unixLocalLinkClause;
                        return [2 /*return*/, new RegExp(baseLocalLinkClause + "(" + lineAndColumnClause + ")")];
                }
            });
        });
    };
    TerminalLinkmatcherFiles.prototype.getValidate = function (terminalWidget) {
        var _this = this;
        return function (match) { return __awaiter(_this, void 0, void 0, function () {
            var toOpen, _a, _b, f, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        _a = this.toURI;
                        _b = [match];
                        return [4 /*yield*/, terminalWidget.cwd];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2:
                        toOpen = _c.sent();
                        if (!toOpen) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fileSystem.getFileStat(toOpen.toString())];
                    case 3:
                        f = _c.sent();
                        // eslint-disable-next-line no-null/no-null
                        return [2 /*return*/, f !== undefined && f !== null && !f.isDirectory];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _c.sent();
                        console.trace('Error validating ' + match);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, false];
                }
            });
        }); };
    };
    TerminalLinkmatcherFiles.prototype.getHandler = function (terminalWidget) {
        var _this = this;
        return function (event, fullMatch) { return __awaiter(_this, void 0, void 0, function () {
            var toOpen, _a, _b, position, options, opener_1, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.toURI;
                        _b = [fullMatch];
                        return [4 /*yield*/, terminalWidget.cwd];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2:
                        toOpen = _c.sent();
                        if (!toOpen) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.extractPosition(fullMatch)];
                    case 3:
                        position = _c.sent();
                        options = {};
                        if (position) {
                            options = {
                                selection: {
                                    start: position
                                }
                            };
                        }
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.openerService.getOpener(toOpen, options)];
                    case 5:
                        opener_1 = _c.sent();
                        opener_1.open(toOpen, options);
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _c.sent();
                        console.error('Cannot open link ' + fullMatch, err_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    };
    TerminalLinkmatcherFiles.prototype.toURI = function (match, cwd) {
        return __awaiter(this, void 0, void 0, function () {
            var path, pathObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.extractPath(match)];
                    case 1:
                        path = _a.sent();
                        if (!path) {
                            return [2 /*return*/];
                        }
                        pathObj = new core_1.Path(path);
                        return [2 /*return*/, pathObj.isAbsolute ? cwd.withPath(path) : cwd.resolve(path)];
                }
            });
        });
    };
    TerminalLinkmatcherFiles.prototype.extractPosition = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            var matches, info, lineAndColumnMatchIndex, i, lineMatchIndex, rowNumber, columnNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegExp()];
                    case 1:
                        matches = (_a.sent()).exec(link);
                        info = {
                            line: 1,
                            character: 1
                        };
                        if (!matches) {
                            return [2 /*return*/, info];
                        }
                        return [4 /*yield*/, this.backendOs];
                    case 2:
                        lineAndColumnMatchIndex = (_a.sent()) === common_1.OS.Type.Windows ? winLineAndColumnMatchIndex : unixLineAndColumnMatchIndex;
                        for (i = 0; i < lineAndColumnClause.length; i++) {
                            lineMatchIndex = lineAndColumnMatchIndex + (lineAndColumnClauseGroupCount * i);
                            rowNumber = matches[lineMatchIndex];
                            if (rowNumber) {
                                info.line = parseInt(rowNumber, 10) - 1;
                                columnNumber = matches[lineMatchIndex + 2];
                                if (columnNumber) {
                                    info.character = parseInt(columnNumber, 10) - 1;
                                }
                                break;
                            }
                        }
                        return [2 /*return*/, info];
                }
            });
        });
    };
    TerminalLinkmatcherFiles.prototype.extractPath = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            var matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegExp()];
                    case 1:
                        matches = (_a.sent()).exec(link);
                        if (!matches) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, matches[1]];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(application_protocol_1.ApplicationServer),
        __metadata("design:type", Object)
    ], TerminalLinkmatcherFiles.prototype, "appServer", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], TerminalLinkmatcherFiles.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], TerminalLinkmatcherFiles.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalLinkmatcherFiles.prototype, "init", null);
    TerminalLinkmatcherFiles = __decorate([
        inversify_1.injectable()
    ], TerminalLinkmatcherFiles);
    return TerminalLinkmatcherFiles;
}(terminal_linkmatcher_1.AbstractCmdClickTerminalContribution));
exports.TerminalLinkmatcherFiles = TerminalLinkmatcherFiles;
// The following regular expressions are taken from:
// https://github.com/microsoft/vscode/blob/fbbc1aa80332189aa0d3006cb2159b79a9eba480/src/vs/workbench/contrib/terminal/browser/terminalLinkHandler.ts
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var pathPrefix = '(\\.\\.?|\\~)';
var pathSeparatorClause = '\\/';
// '":; are allowed in paths but they are often separators so ignore them
// Also disallow \\ to prevent a catastrophic backtracking case #24798
var excludedPathCharactersClause = '[^\\0\\s!$`&*()\\[\\]+\'":;\\\\]';
/** A regex that matches paths in the form /foo, ~/foo, ./foo, ../foo, foo/bar */
var unixLocalLinkClause = '((' + pathPrefix + '|(' + excludedPathCharactersClause + ')+)?(' + pathSeparatorClause + '(' + excludedPathCharactersClause + ')+)+)';
var winDrivePrefix = '[a-zA-Z]:';
var winPathPrefix = '(' + winDrivePrefix + '|\\.\\.?|\\~)';
var winPathSeparatorClause = '(\\\\|\\/)';
var winExcludedPathCharactersClause = '[^\\0<>\\?\\|\\/\\s!$`&*()\\[\\]+\'":;]';
/** A regex that matches paths in the form c:\foo, ~\foo, .\foo, ..\foo, foo\bar */
var winLocalLinkClause = '((' + winPathPrefix + '|(' + winExcludedPathCharactersClause + ')+)?(' + winPathSeparatorClause + '(' + winExcludedPathCharactersClause + ')+)+)';
/** As xterm reads from DOM, space in that case is non-breaking char ASCII code - 160, replacing space with nonBreakingSpace or space ASCII code - 32. */
var lineAndColumnClause = [
    // "(file path)", line 45 [see #40468]
    '((\\S*)", line ((\\d+)( column (\\d+))?))',
    // (file path) on line 8, column 13
    '((\\S*) on line ((\\d+)(, column (\\d+))?))',
    // (file path):line 8, column 13
    '((\\S*):line ((\\d+)(, column (\\d+))?))',
    // (file path)(45), (file path) (45), (file path)(45,18), (file path) (45,18), (file path)(45, 18), (file path) (45, 18), also with []
    '(([^\\s\\(\\)]*)(\\s?[\\(\\[](\\d+)(,\\s?(\\d+))?)[\\)\\]])',
    // (file path):336, (file path):336:9
    '(([^:\\s\\(\\)<>\'\"\\[\\]]*)(:(\\d+))?(:(\\d+))?)'
].join('|').replace(/ /g, "[" + '\u00A0' + " ]");
// Changing any regex may effect this value, hence changes this as well if required.
var winLineAndColumnMatchIndex = 12;
var unixLineAndColumnMatchIndex = 11;
// Each line and column clause have 6 groups (ie no. of expressions in round brackets)
var lineAndColumnClauseGroupCount = 6;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-linkmatcher.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "../node_modules/@theia/core/lib/browser/opener-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var AbstractCmdClickTerminalContribution = /** @class */ (function () {
    function AbstractCmdClickTerminalContribution() {
    }
    AbstractCmdClickTerminalContribution.prototype.getValidate = function (terminalWidget) {
        return function () { return Promise.resolve(true); };
    };
    AbstractCmdClickTerminalContribution.prototype.onCreate = function (terminalWidget) {
        return __awaiter(this, void 0, void 0, function () {
            var term, regexp, handler, validate, wrappedHandler, matcherId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        term = terminalWidget.getTerminal();
                        return [4 /*yield*/, this.getRegExp(terminalWidget)];
                    case 1:
                        regexp = _a.sent();
                        handler = this.getHandler(terminalWidget);
                        validate = this.getValidate(terminalWidget);
                        wrappedHandler = function (event, match) {
                            event.preventDefault();
                            if (_this.isCommandPressed(event) || _this.wasTouchEvent(event, terminalWidget.lastTouchEndEvent)) {
                                handler(event, match);
                            }
                            else {
                                term.focus();
                            }
                        };
                        matcherId = term.registerLinkMatcher(regexp, wrappedHandler, {
                            willLinkActivate: function (event, uri) { return _this.isCommandPressed(event) || _this.wasTouchEvent(event, terminalWidget.lastTouchEndEvent); },
                            tooltipCallback: function (event, uri) {
                                if (!_this.wasTouchEvent(event, terminalWidget.lastTouchEndEvent)) {
                                    terminalWidget.showHoverMessage(event.clientX, event.clientY, _this.getHoverMessage());
                                }
                            },
                            leaveCallback: function () {
                                terminalWidget.hideHover();
                            },
                            validationCallback: function (uri, callBack) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = callBack;
                                            return [4 /*yield*/, validate(uri)];
                                        case 1:
                                            _a.apply(void 0, [_b.sent()]);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        });
                        terminalWidget.onDispose(function () {
                            term.deregisterLinkMatcher(matcherId);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AbstractCmdClickTerminalContribution.prototype.isCommandPressed = function (event) {
        return core_1.isOSX ? event.metaKey : event.ctrlKey;
    };
    AbstractCmdClickTerminalContribution.prototype.wasTouchEvent = function (event, lastTouchEnd) {
        if (!lastTouchEnd) {
            return false;
        }
        if ((event.timeStamp - lastTouchEnd.timeStamp) > 400) {
            // A 'touchend' event typically precedes a matching 'click' event by 50ms.
            return false;
        }
        if (Math.abs(event.pageX - lastTouchEnd.pageX) > 5) {
            // Matching 'touchend' and 'click' events typically have the same page coordinates,
            // plus or minus 1 pixel.
            return false;
        }
        if (Math.abs(event.pageY - lastTouchEnd.pageY) > 5) {
            return false;
        }
        // We have a match! This link was tapped.
        return true;
    };
    AbstractCmdClickTerminalContribution.prototype.getHoverMessage = function () {
        if (core_1.isOSX) {
            return 'Cmd + click to follow link';
        }
        else {
            return 'Ctrl + click to follow link';
        }
    };
    AbstractCmdClickTerminalContribution = __decorate([
        inversify_1.injectable()
    ], AbstractCmdClickTerminalContribution);
    return AbstractCmdClickTerminalContribution;
}());
exports.AbstractCmdClickTerminalContribution = AbstractCmdClickTerminalContribution;
var URLMatcher = /** @class */ (function (_super) {
    __extends(URLMatcher, _super);
    function URLMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    URLMatcher.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/];
            });
        });
    };
    URLMatcher.prototype.getHandler = function () {
        var _this = this;
        return function (event, uri) {
            return opener_service_1.open(_this.openerService, new uri_1.default(uri));
        };
    };
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], URLMatcher.prototype, "openerService", void 0);
    URLMatcher = __decorate([
        inversify_1.injectable()
    ], URLMatcher);
    return URLMatcher;
}(AbstractCmdClickTerminalContribution));
exports.URLMatcher = URLMatcher;
var LocalhostMatcher = /** @class */ (function (_super) {
    __extends(LocalhostMatcher, _super);
    function LocalhostMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalhostMatcher.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, /(https?:\/\/)?(localhost|127\.0\.0\.1|0\.0\.0\.0)(:[0-9]{1,5})?([-a-zA-Z0-9@:%_\+.~#?&//=]*)/];
            });
        });
    };
    LocalhostMatcher.prototype.getHandler = function () {
        var _this = this;
        return function (event, matched) {
            var uri = matched.startsWith('http') ? matched : "http://" + matched;
            opener_service_1.open(_this.openerService, new uri_1.default(uri));
        };
    };
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], LocalhostMatcher.prototype, "openerService", void 0);
    LocalhostMatcher = __decorate([
        inversify_1.injectable()
    ], LocalhostMatcher);
    return LocalhostMatcher;
}(AbstractCmdClickTerminalContribution));
exports.LocalhostMatcher = LocalhostMatcher;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-preferences.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-preferences.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Bitsler and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
exports.TerminalConfigSchema = {
    type: 'object',
    properties: {
        'terminal.enableCopy': {
            type: 'boolean',
            description: 'Enable ctrl-c (cmd-c on macOS) to copy selected text',
            default: true
        },
        'terminal.enablePaste': {
            type: 'boolean',
            description: 'Enable ctrl-v (cmd-v on macOS) to paste from clipboard',
            default: true
        },
        'terminal.integrated.fontFamily': {
            type: 'string',
            description: 'Controls the font family of the terminal.',
            default: browser_2.EDITOR_FONT_DEFAULTS.fontFamily
        },
        'terminal.integrated.fontSize': {
            type: 'number',
            description: 'Controls the font size in pixels of the terminal.',
            minimum: 6,
            default: browser_2.EDITOR_FONT_DEFAULTS.fontSize
        },
        'terminal.integrated.fontWeight': {
            type: 'string',
            enum: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
            description: 'The font weight to use within the terminal for non-bold text.',
            default: 'normal'
        },
        'terminal.integrated.fontWeightBold': {
            type: 'string',
            enum: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
            description: 'The font weight to use within the terminal for bold text.',
            default: 'bold'
        },
        'terminal.integrated.drawBoldTextInBrightColors': {
            description: 'Controls whether to draw bold text in bright colors.',
            type: 'boolean',
            default: true,
        },
        'terminal.integrated.letterSpacing': {
            description: 'Controls the letter spacing of the terminal, this is an integer value which represents the amount of additional pixels to add between characters.',
            type: 'number',
            default: 1
        },
        'terminal.integrated.lineHeight': {
            description: 'Controls the line height of the terminal, this number is multiplied by the terminal font size to get the actual line-height in pixels.',
            type: 'number',
            minimum: 1,
            default: 1
        },
        'terminal.integrated.scrollback': {
            description: 'Controls the maximum amount of lines the terminal keeps in its buffer.',
            type: 'number',
            default: 1000
        },
        'terminal.integrated.fastScrollSensitivity': {
            description: 'Controls the scrolling speed when pressing \'alt\'.',
            type: 'number',
            default: 5,
        },
        'terminal.integrated.rendererType': {
            description: 'Controls how the terminal is rendered.',
            type: 'string',
            enum: ['canvas', 'dom'],
            default: 'canvas'
        },
        'terminal.integrated.copyOnSelection': {
            description: 'Controls whether text selected in the terminal will be copied to the clipboard.',
            type: 'boolean',
            default: false,
        },
        'terminal.integrated.cursorBlinking': {
            description: 'Controls whether the terminal cursor blinks.',
            type: 'boolean',
            default: false
        },
        'terminal.integrated.cursorStyle': {
            description: 'Controls the style of the terminal cursor.',
            enum: ['block', 'underline', 'line'],
            default: 'block'
        },
        'terminal.integrated.cursorWidth': {
            description: 'Controls the width of the cursor when \'terminal.integrated.cursorStyle\' is set to \'line\'.',
            markdownDescription: 'Controls the width of the cursor when `#terminal.integrated.cursorStyle#` is set to `line`.',
            type: 'number',
            default: 1
        },
    }
};
exports.DEFAULT_TERMINAL_RENDERER_TYPE = 'canvas';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTerminalRendererType(arg) {
    return typeof arg === 'string' && (arg === 'canvas' || arg === 'dom');
}
exports.isTerminalRendererType = isTerminalRendererType;
exports.TerminalPreferences = Symbol('TerminalPreferences');
function createTerminalPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.TerminalConfigSchema);
}
exports.createTerminalPreferences = createTerminalPreferences;
function bindTerminalPreferences(bind) {
    bind(exports.TerminalPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createTerminalPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.TerminalConfigSchema });
}
exports.bindTerminalPreferences = bindTerminalPreferences;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-quick-open-service.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-quick-open-service.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var terminal_service_1 = __webpack_require__(/*! ./base/terminal-service */ "../node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var terminal_frontend_contribution_1 = __webpack_require__(/*! ./terminal-frontend-contribution */ "../node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js");
var TerminalQuickOpenService = /** @class */ (function () {
    function TerminalQuickOpenService() {
        this.prefix = 'term ';
    }
    Object.defineProperty(TerminalQuickOpenService.prototype, "description", {
        get: function () {
            return 'Show All Opened Terminals';
        },
        enumerable: true,
        configurable: true
    });
    TerminalQuickOpenService.prototype.getModel = function () {
        return this;
    };
    TerminalQuickOpenService.prototype.getOptions = function () {
        return {
            fuzzyMatchLabel: {
                enableSeparateSubstringMatching: true
            },
            fuzzyMatchDescription: {
                enableSeparateSubstringMatching: true
            }
        };
    };
    TerminalQuickOpenService.prototype.open = function () {
        this.prefixQuickOpenService.open(this.prefix);
    };
    TerminalQuickOpenService.prototype.onType = function (lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var terminalItems, widgets, widgets_1, widgets_1_1, widget, item, e_1_1, createNewTerminalItem;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        terminalItems = [];
                        widgets = this.terminalService.all
                            .sort(function (a, b) { return _this.compareItems(a, b); });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        widgets_1 = __values(widgets), widgets_1_1 = widgets_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!widgets_1_1.done) return [3 /*break*/, 5];
                        widget = widgets_1_1.value;
                        return [4 /*yield*/, this.toItem(widget)];
                    case 3:
                        item = _b.sent();
                        terminalItems.push(item);
                        _b.label = 4;
                    case 4:
                        widgets_1_1 = widgets_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (widgets_1_1 && !widgets_1_1.done && (_a = widgets_1.return)) _a.call(widgets_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        createNewTerminalItem = new browser_1.QuickOpenGroupItem({
                            label: 'Open New Terminal',
                            iconClass: 'fa fa-plus',
                            run: this.doCreateNewTerminal(),
                            groupLabel: undefined,
                            showBorder: !!terminalItems.length
                        });
                        terminalItems.push(createNewTerminalItem);
                        acceptor(terminalItems);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Compare two terminal widgets by label. If labels are identical, compare by the widget id.
     * @param a `TerminalWidget` for comparison
     * @param b `TerminalWidget` for comparison
     */
    TerminalQuickOpenService.prototype.compareItems = function (a, b) {
        var normalize = function (str) { return str.trim().toLowerCase(); };
        if (normalize(a.title.label) !== normalize(b.title.label)) {
            return normalize(a.title.label).localeCompare(normalize(b.title.label));
        }
        else {
            return normalize(a.id).localeCompare(normalize(b.id));
        }
    };
    /**
     * Get the function that can create a new terminal.
     * @param {TerminalWidget} widget - the terminal widget to be opened.
     * @returns Function that would create a new terminal if mode === QuickOpenMode.OPEN.
     */
    TerminalQuickOpenService.prototype.doCreateNewTerminal = function () {
        var _this = this;
        return function (mode) {
            if (mode !== browser_1.QuickOpenMode.OPEN) {
                return false;
            }
            _this.commandService.executeCommand(terminal_frontend_contribution_1.TerminalCommands.NEW.id);
            return true;
        };
    };
    /**
     * Convert the terminal widget to the quick open item.
     * @param {TerminalWidget} widget - the terminal widget.
     * @returns The quick open group item.
     */
    TerminalQuickOpenService.prototype.toItem = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                options = {
                    label: widget.title.label,
                    description: widget.id,
                    tooltip: widget.title.label,
                    hidden: false,
                    run: this.getRunFunction(widget),
                    groupLabel: undefined,
                    showBorder: false
                };
                return [2 /*return*/, new browser_1.QuickOpenGroupItem(options)];
            });
        });
    };
    /**
     * Get the function that can open the editor file.
     * @param {TerminalWidget} widget - the terminal widget to be opened.
     * @returns Function that would open the terminal if mode === QuickOpenMode.OPEN.
     */
    TerminalQuickOpenService.prototype.getRunFunction = function (widget) {
        var _this = this;
        return function (mode) {
            if (mode !== browser_1.QuickOpenMode.OPEN) {
                return false;
            }
            _this.terminalService.open(widget);
            return true;
        };
    };
    __decorate([
        inversify_1.inject(browser_1.PrefixQuickOpenService),
        __metadata("design:type", browser_1.PrefixQuickOpenService)
    ], TerminalQuickOpenService.prototype, "prefixQuickOpenService", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandService),
        __metadata("design:type", Object)
    ], TerminalQuickOpenService.prototype, "commandService", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TerminalQuickOpenService.prototype, "terminalService", void 0);
    TerminalQuickOpenService = __decorate([
        inversify_1.injectable()
    ], TerminalQuickOpenService);
    return TerminalQuickOpenService;
}());
exports.TerminalQuickOpenService = TerminalQuickOpenService;
/**
 * TODO: merge it to TerminalFrontendContribution.
 */
var TerminalQuickOpenContribution = /** @class */ (function () {
    function TerminalQuickOpenContribution() {
    }
    TerminalQuickOpenContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.terminalQuickOpenService);
    };
    TerminalQuickOpenContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(terminal_frontend_contribution_1.TerminalCommands.SHOW_ALL_OPENED_TERMINALS, {
            execute: function () { return _this.terminalQuickOpenService.open(); }
        });
    };
    __decorate([
        inversify_1.inject(TerminalQuickOpenService),
        __metadata("design:type", TerminalQuickOpenService)
    ], TerminalQuickOpenContribution.prototype, "terminalQuickOpenService", void 0);
    TerminalQuickOpenContribution = __decorate([
        inversify_1.injectable()
    ], TerminalQuickOpenContribution);
    return TerminalQuickOpenContribution;
}());
exports.TerminalQuickOpenContribution = TerminalQuickOpenContribution;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-theme-service.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-theme-service.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../node_modules/@theia/core/lib/browser/color-registry.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "../node_modules/@theia/core/lib/browser/theming.js");
/**
 * It should be aligned with https://github.com/microsoft/vscode/blob/0dfa355b3ad185a6289ba28a99c141ab9e72d2be/src/vs/workbench/contrib/terminal/common/terminalColorRegistry.ts#L40
 */
exports.terminalAnsiColorMap = {
    'terminal.ansiBlack': {
        index: 0,
        defaults: {
            light: '#000000',
            dark: '#000000',
            hc: '#000000'
        }
    },
    'terminal.ansiRed': {
        index: 1,
        defaults: {
            light: '#cd3131',
            dark: '#cd3131',
            hc: '#cd0000'
        }
    },
    'terminal.ansiGreen': {
        index: 2,
        defaults: {
            light: '#00BC00',
            dark: '#0DBC79',
            hc: '#00cd00'
        }
    },
    'terminal.ansiYellow': {
        index: 3,
        defaults: {
            light: '#949800',
            dark: '#e5e510',
            hc: '#cdcd00'
        }
    },
    'terminal.ansiBlue': {
        index: 4,
        defaults: {
            light: '#0451a5',
            dark: '#2472c8',
            hc: '#0000ee'
        }
    },
    'terminal.ansiMagenta': {
        index: 5,
        defaults: {
            light: '#bc05bc',
            dark: '#bc3fbc',
            hc: '#cd00cd'
        }
    },
    'terminal.ansiCyan': {
        index: 6,
        defaults: {
            light: '#0598bc',
            dark: '#11a8cd',
            hc: '#00cdcd'
        }
    },
    'terminal.ansiWhite': {
        index: 7,
        defaults: {
            light: '#555555',
            dark: '#e5e5e5',
            hc: '#e5e5e5'
        }
    },
    'terminal.ansiBrightBlack': {
        index: 8,
        defaults: {
            light: '#666666',
            dark: '#666666',
            hc: '#7f7f7f'
        }
    },
    'terminal.ansiBrightRed': {
        index: 9,
        defaults: {
            light: '#cd3131',
            dark: '#f14c4c',
            hc: '#ff0000'
        }
    },
    'terminal.ansiBrightGreen': {
        index: 10,
        defaults: {
            light: '#14CE14',
            dark: '#23d18b',
            hc: '#00ff00'
        }
    },
    'terminal.ansiBrightYellow': {
        index: 11,
        defaults: {
            light: '#b5ba00',
            dark: '#f5f543',
            hc: '#ffff00'
        }
    },
    'terminal.ansiBrightBlue': {
        index: 12,
        defaults: {
            light: '#0451a5',
            dark: '#3b8eea',
            hc: '#5c5cff'
        }
    },
    'terminal.ansiBrightMagenta': {
        index: 13,
        defaults: {
            light: '#bc05bc',
            dark: '#d670d6',
            hc: '#ff00ff'
        }
    },
    'terminal.ansiBrightCyan': {
        index: 14,
        defaults: {
            light: '#0598bc',
            dark: '#29b8db',
            hc: '#00ffff'
        }
    },
    'terminal.ansiBrightWhite': {
        index: 15,
        defaults: {
            light: '#a5a5a5',
            dark: '#e5e5e5',
            hc: '#ffffff'
        }
    }
};
var TerminalThemeService = /** @class */ (function () {
    function TerminalThemeService() {
        this.onDidChange = theming_1.ThemeService.get().onThemeChange;
    }
    Object.defineProperty(TerminalThemeService.prototype, "theme", {
        get: function () {
            var foregroundColor = this.colorRegistry.getCurrentColor('terminal.foreground');
            var backgroundColor = this.colorRegistry.getCurrentColor('terminal.background') || this.colorRegistry.getCurrentColor('panel.background');
            var cursorColor = this.colorRegistry.getCurrentColor('terminalCursor.foreground') || foregroundColor;
            var cursorAccentColor = this.colorRegistry.getCurrentColor('terminalCursor.background') || backgroundColor;
            var selectionColor = this.colorRegistry.getCurrentColor('terminal.selectionBackground');
            var theme = {
                background: backgroundColor,
                foreground: foregroundColor,
                cursor: cursorColor,
                cursorAccent: cursorAccentColor,
                selection: selectionColor
            };
            // eslint-disable-next-line guard-for-in
            for (var id in exports.terminalAnsiColorMap) {
                var colorId = id.substring(13);
                var colorName = colorId.charAt(0).toLowerCase() + colorId.slice(1);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                theme[colorName] = this.colorRegistry.getCurrentColor(id);
            }
            return theme;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], TerminalThemeService.prototype, "colorRegistry", void 0);
    TerminalThemeService = __decorate([
        inversify_1.injectable()
    ], TerminalThemeService);
    return TerminalThemeService;
}());
exports.TerminalThemeService = TerminalThemeService;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/browser/terminal-widget-impl.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/browser/terminal-widget-impl.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var xterm_1 = __webpack_require__(/*! xterm */ "../node_modules/xterm/lib/xterm.js");
var xterm_addon_fit_1 = __webpack_require__(/*! xterm-addon-fit */ "../node_modules/xterm-addon-fit/lib/xterm-addon-fit.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var shell_terminal_protocol_1 = __webpack_require__(/*! ../common/shell-terminal-protocol */ "../node_modules/@theia/terminal/lib/common/shell-terminal-protocol.js");
var terminal_protocol_1 = __webpack_require__(/*! ../common/terminal-protocol */ "../node_modules/@theia/terminal/lib/common/terminal-protocol.js");
var base_terminal_protocol_1 = __webpack_require__(/*! ../common/base-terminal-protocol */ "../node_modules/@theia/terminal/lib/common/base-terminal-protocol.js");
var terminal_watcher_1 = __webpack_require__(/*! ../common/terminal-watcher */ "../node_modules/@theia/terminal/lib/common/terminal-watcher.js");
var terminal_widget_1 = __webpack_require__(/*! ./base/terminal-widget */ "../node_modules/@theia/terminal/lib/browser/base/terminal-widget.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var terminal_preferences_1 = __webpack_require__(/*! ./terminal-preferences */ "../node_modules/@theia/terminal/lib/browser/terminal-preferences.js");
var terminal_contribution_1 = __webpack_require__(/*! ./terminal-contribution */ "../node_modules/@theia/terminal/lib/browser/terminal-contribution.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var terminal_service_1 = __webpack_require__(/*! ./base/terminal-service */ "../node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var terminal_search_widget_1 = __webpack_require__(/*! ./search/terminal-search-widget */ "../node_modules/@theia/terminal/lib/browser/search/terminal-search-widget.js");
var terminal_copy_on_selection_handler_1 = __webpack_require__(/*! ./terminal-copy-on-selection-handler */ "../node_modules/@theia/terminal/lib/browser/terminal-copy-on-selection-handler.js");
var terminal_theme_service_1 = __webpack_require__(/*! ./terminal-theme-service */ "../node_modules/@theia/terminal/lib/browser/terminal-theme-service.js");
exports.TERMINAL_WIDGET_FACTORY_ID = 'terminal';
var TerminalWidgetImpl = /** @class */ (function (_super) {
    __extends(TerminalWidgetImpl, _super);
    function TerminalWidgetImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TERMINAL = 'Terminal';
        _this.onTermDidClose = new core_1.Emitter();
        _this.terminalId = -1;
        _this.restored = false;
        _this.closeOnDispose = true;
        _this.onDidOpenEmitter = new core_1.Emitter();
        _this.onDidOpen = _this.onDidOpenEmitter.event;
        _this.toDisposeOnConnect = new core_1.DisposableCollection();
        _this.needsResize = true;
        // Device status code emitted by Xterm.js
        // Check: https://github.com/xtermjs/xterm.js/blob/release/3.14/src/InputHandler.ts#L1055-L1082
        _this.deviceStatusCodes = new Set(['\u001B[>0;276;0c', '\u001B[>85;95;0c', '\u001B[>83;40003;0c', '\u001B[?1;2c', '\u001B[?6c']);
        _this.termOpened = false;
        _this.initialData = '';
        return _this;
    }
    TerminalWidgetImpl.prototype.init = function () {
        var e_1, _a;
        var _this = this;
        this.title.caption = this.options.title || this.TERMINAL;
        this.title.label = this.options.title || this.TERMINAL;
        this.title.iconClass = 'fa fa-terminal';
        if (this.options.destroyTermOnClose === true) {
            this.toDispose.push(core_1.Disposable.create(function () {
                return _this.term.dispose();
            }));
        }
        this.title.closable = true;
        this.addClass('terminal-container');
        this.term = new xterm_1.Terminal({
            cursorBlink: this.preferences['terminal.integrated.cursorBlinking'],
            cursorStyle: this.getCursorStyle(),
            cursorWidth: this.preferences['terminal.integrated.cursorWidth'],
            fontFamily: this.preferences['terminal.integrated.fontFamily'],
            fontSize: this.preferences['terminal.integrated.fontSize'],
            fontWeight: this.preferences['terminal.integrated.fontWeight'],
            fontWeightBold: this.preferences['terminal.integrated.fontWeightBold'],
            drawBoldTextInBrightColors: this.preferences['terminal.integrated.drawBoldTextInBrightColors'],
            letterSpacing: this.preferences['terminal.integrated.letterSpacing'],
            lineHeight: this.preferences['terminal.integrated.lineHeight'],
            scrollback: this.preferences['terminal.integrated.scrollback'],
            fastScrollSensitivity: this.preferences['terminal.integrated.fastScrollSensitivity'],
            rendererType: this.getTerminalRendererType(this.preferences['terminal.integrated.rendererType']),
            theme: this.themeService.theme
        });
        this.fitAddon = new xterm_addon_fit_1.FitAddon();
        this.term.loadAddon(this.fitAddon);
        this.hoverMessage = document.createElement('div');
        this.hoverMessage.textContent = 'Cmd + click to follow link';
        this.hoverMessage.style.position = 'fixed';
        // TODO use `var(--theia-editorHoverWidget-foreground) with a newer Monaco version
        this.hoverMessage.style.color = 'var(--theia-editorWidget-foreground)';
        this.hoverMessage.style.backgroundColor = 'var(--theia-editorHoverWidget-background)';
        this.hoverMessage.style.borderColor = 'var(--theia-editorHoverWidget-border)';
        this.hoverMessage.style.borderWidth = '0.5px';
        this.hoverMessage.style.borderStyle = 'solid';
        this.hoverMessage.style.padding = '5px';
        // Above the xterm.js canvas layers:
        // https://github.com/xtermjs/xterm.js/blob/ff790236c1b205469f17a21246141f512d844295/src/renderer/Renderer.ts#L41-L46
        this.hoverMessage.style.zIndex = '10';
        // Initially invisible:
        this.hoverMessage.style.display = 'none';
        this.node.appendChild(this.hoverMessage);
        this.toDispose.push(this.preferences.onPreferenceChanged(function (change) {
            var lastSeparator = change.preferenceName.lastIndexOf('.');
            if (lastSeparator > 0) {
                var preferenceName = change.preferenceName.substr(lastSeparator + 1);
                var preferenceValue = _this.preferences[change.preferenceName];
                if (preferenceName === 'rendererType') {
                    var newRendererType = _this.preferences[change.preferenceName];
                    if (newRendererType !== _this.getTerminalRendererType(newRendererType)) {
                        // given terminal renderer type is not supported or invalid
                        preferenceValue = terminal_preferences_1.DEFAULT_TERMINAL_RENDERER_TYPE;
                    }
                }
                // Convert the terminal preference into a valid `xterm` option.
                if (preferenceName === 'cursorBlinking') {
                    preferenceName = 'cursorBlink';
                }
                else if (preferenceName === 'cursorStyle') {
                    preferenceValue = _this.getCursorStyle();
                }
                _this.term.setOption(preferenceName, preferenceValue);
                _this.needsResize = true;
                _this.update();
            }
        }));
        this.toDispose.push(this.themeService.onDidChange(function () { return _this.term.setOption('theme', _this.themeService.theme); }));
        this.attachCustomKeyEventHandler();
        var titleChangeListenerDispose = this.term.onTitleChange(function (title) {
            if (_this.options.useServerTitle) {
                _this.title.label = title;
            }
        });
        this.toDispose.push(titleChangeListenerDispose);
        this.toDispose.push(this.terminalWatcher.onTerminalError(function (_a) {
            var terminalId = _a.terminalId, error = _a.error;
            if (terminalId === _this.terminalId) {
                _this.dispose();
                _this.onTermDidClose.fire(_this);
                _this.onTermDidClose.dispose();
                _this.logger.error("The terminal process terminated. Cause: " + error);
            }
        }));
        this.toDispose.push(this.terminalWatcher.onTerminalExit(function (_a) {
            var terminalId = _a.terminalId;
            if (terminalId === _this.terminalId) {
                _this.dispose();
                _this.onTermDidClose.fire(_this);
                _this.onTermDidClose.dispose();
            }
        }));
        this.toDispose.push(this.toDisposeOnConnect);
        this.toDispose.push(this.shellTerminalServer.onDidCloseConnection(function () {
            var disposable = _this.shellTerminalServer.onDidOpenConnection(function () {
                disposable.dispose();
                _this.reconnectTerminalProcess();
            });
            _this.toDispose.push(disposable);
        }));
        this.toDispose.push(this.onTermDidClose);
        this.toDispose.push(this.onDidOpenEmitter);
        var touchEndListener = function (event) {
            if (_this.node.contains(event.target)) {
                _this.lastTouchEnd = event;
            }
        };
        document.addEventListener('touchend', touchEndListener, { passive: true });
        this.onDispose(function () {
            document.removeEventListener('touchend', touchEndListener);
        });
        this.toDispose.push(this.term.onSelectionChange(function () {
            if (_this.copyOnSelection) {
                _this.copyOnSelectionHandler.copy(_this.term.getSelection());
            }
        }));
        try {
            for (var _b = __values(this.terminalContributionProvider.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                contribution.onCreate(this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.searchBox = this.terminalSearchBoxFactory(this.term);
        this.toDispose.push(this.searchBox);
    };
    /**
     * Get the cursor style compatible with `xterm`.
     * @returns CursorStyle
     */
    TerminalWidgetImpl.prototype.getCursorStyle = function () {
        var value = this.preferences['terminal.integrated.cursorStyle'];
        return value === 'line' ? 'bar' : value;
    };
    /**
     * Returns given renderer type if it is valid and supported or default renderer otherwise.
     *
     * @param terminalRendererType desired terminal renderer type
     */
    TerminalWidgetImpl.prototype.getTerminalRendererType = function (terminalRendererType) {
        if (terminalRendererType && terminal_preferences_1.isTerminalRendererType(terminalRendererType)) {
            return terminalRendererType;
        }
        return terminal_preferences_1.DEFAULT_TERMINAL_RENDERER_TYPE;
    };
    TerminalWidgetImpl.prototype.showHoverMessage = function (x, y, message) {
        this.hoverMessage.innerText = message;
        this.hoverMessage.style.display = 'inline';
        this.hoverMessage.style.top = y - 30 + "px";
        this.hoverMessage.style.left = x - 60 + "px";
    };
    TerminalWidgetImpl.prototype.hideHover = function () {
        this.hoverMessage.style.display = 'none';
    };
    TerminalWidgetImpl.prototype.getTerminal = function () {
        return this.term;
    };
    TerminalWidgetImpl.prototype.getSearchBox = function () {
        return this.searchBox;
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "cwd", {
        get: function () {
            if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                return Promise.reject(new Error('terminal is not started'));
            }
            if (this.terminalService.getById(this.id)) {
                return this.shellTerminalServer.getCwdURI(this.terminalId)
                    .then(function (cwdUrl) { return new uri_1.default(cwdUrl); });
            }
            return Promise.resolve(new uri_1.default());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "processId", {
        get: function () {
            if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                return Promise.reject(new Error('terminal is not started'));
            }
            return this.shellTerminalServer.getProcessId(this.terminalId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "lastTouchEndEvent", {
        get: function () {
            return this.lastTouchEnd;
        },
        enumerable: true,
        configurable: true
    });
    TerminalWidgetImpl.prototype.onDispose = function (onDispose) {
        this.toDispose.push(core_1.Disposable.create(onDispose));
    };
    TerminalWidgetImpl.prototype.clearOutput = function () {
        this.term.clear();
    };
    TerminalWidgetImpl.prototype.hasChildProcesses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.shellTerminalServer).hasChildProcesses;
                        return [4 /*yield*/, this.processId];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.storeState = function () {
        this.closeOnDispose = false;
        return { terminalId: this.terminalId, titleLabel: this.title.label };
    };
    TerminalWidgetImpl.prototype.restoreState = function (oldState) {
        if (this.restored === false) {
            var state = oldState;
            /* This is a workaround to issue #879 */
            this.restored = true;
            this.title.label = state.titleLabel;
            this.start(state.terminalId);
        }
    };
    /**
     * Create a new shell terminal in the back-end and attach it to a
     * new terminal widget.
     * If id is provided attach to the terminal for this id.
     */
    TerminalWidgetImpl.prototype.start = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!(typeof id !== 'number')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createTerminal()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.attachTerminal(id)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        _a.terminalId = _b;
                        this.resizeTerminalProcess();
                        this.connectTerminalProcess();
                        if (base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                            this.onDidOpenEmitter.fire(undefined);
                            return [2 /*return*/, this.terminalId];
                        }
                        throw new Error('Failed to start terminal' + (id ? " for id: " + id + "." : '.'));
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.attachTerminal = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var terminalId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shellTerminalServer.attach(id)];
                    case 1:
                        terminalId = _a.sent();
                        if (base_terminal_protocol_1.IBaseTerminalServer.validateId(terminalId)) {
                            return [2 /*return*/, terminalId];
                        }
                        this.logger.error("Error attaching to terminal id " + id + ", the terminal is most likely gone. Starting up a new terminal instead.");
                        return [2 /*return*/, this.createTerminal()];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.createTerminal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rootURI, root, _a, cols, rows, terminalId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        rootURI = this.options.cwd;
                        if (!!rootURI) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        root = (_b.sent())[0];
                        rootURI = root && root.uri;
                        _b.label = 2;
                    case 2:
                        _a = this.term, cols = _a.cols, rows = _a.rows;
                        return [4 /*yield*/, this.shellTerminalServer.create({
                                shell: this.options.shellPath,
                                args: this.options.shellArgs,
                                env: this.options.env,
                                rootURI: rootURI,
                                cols: cols,
                                rows: rows
                            })];
                    case 3:
                        terminalId = _b.sent();
                        if (base_terminal_protocol_1.IBaseTerminalServer.validateId(terminalId)) {
                            return [2 /*return*/, terminalId];
                        }
                        throw new Error('Error creating terminal widget, see the backend error log for more information.');
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.processMessage = function (msg) {
        _super.prototype.processMessage.call(this, msg);
        switch (msg.type) {
            case 'fit-request':
                this.onFitRequest(msg);
                break;
            default:
                break;
        }
    };
    TerminalWidgetImpl.prototype.onFitRequest = function (msg) {
        _super.prototype.onFitRequest.call(this, msg);
        browser_1.MessageLoop.sendMessage(this, browser_1.Widget.ResizeMessage.UnknownSize);
    };
    TerminalWidgetImpl.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.term.focus();
    };
    TerminalWidgetImpl.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.update();
    };
    TerminalWidgetImpl.prototype.onAfterAttach = function (msg) {
        browser_1.Widget.attach(this.searchBox, this.node);
        _super.prototype.onAfterAttach.call(this, msg);
        this.update();
    };
    TerminalWidgetImpl.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        this.needsResize = true;
        this.update();
    };
    TerminalWidgetImpl.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        if (!this.isVisible || !this.isAttached) {
            return;
        }
        this.open();
        if (this.needsResize) {
            this.resizeTerminal();
            this.needsResize = false;
            this.resizeTerminalProcess();
        }
    };
    TerminalWidgetImpl.prototype.connectTerminalProcess = function () {
        var _this = this;
        if (typeof this.terminalId !== 'number') {
            return;
        }
        this.toDisposeOnConnect.dispose();
        this.toDispose.push(this.toDisposeOnConnect);
        this.term.reset();
        var waitForConnection = this.waitForConnection = new promise_util_1.Deferred();
        this.webSocketConnectionProvider.listen({
            path: terminal_protocol_1.terminalsPath + "/" + this.terminalId,
            onConnection: function (connection) {
                connection.onNotification('onData', function (data) { return _this.write(data); });
                // Excludes the device status code emitted by Xterm.js
                var sendData = function (data) {
                    if (data && !_this.deviceStatusCodes.has(data)) {
                        return connection.sendRequest('write', data);
                    }
                };
                var disposable = _this.term.onData(sendData);
                connection.onDispose(function () { return disposable.dispose(); });
                _this.toDisposeOnConnect.push(connection);
                connection.listen();
                if (waitForConnection) {
                    waitForConnection.resolve(connection);
                }
            }
        }, { reconnecting: false });
    };
    TerminalWidgetImpl.prototype.reconnectTerminalProcess = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this.terminalId === 'number')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.start(this.terminalId)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.open = function () {
        if (this.termOpened) {
            return;
        }
        this.term.open(this.node);
        if (this.initialData) {
            this.term.write(this.initialData);
        }
        this.termOpened = true;
        this.initialData = '';
        if (browser_1.isFirefox) {
            // The software scrollbars don't work with xterm.js, so we disable the scrollbar if we are on firefox.
            if (this.term.element) {
                this.term.element.children.item(0).style.overflow = 'hidden';
            }
        }
    };
    TerminalWidgetImpl.prototype.write = function (data) {
        if (this.termOpened) {
            this.term.write(data);
        }
        else {
            this.initialData += data;
        }
    };
    TerminalWidgetImpl.prototype.sendText = function (text) {
        if (this.waitForConnection) {
            this.waitForConnection.promise.then(function (connection) {
                return connection.sendRequest('write', text);
            });
        }
    };
    TerminalWidgetImpl.prototype.scrollLineUp = function () {
        this.term.scrollLines(-1);
    };
    TerminalWidgetImpl.prototype.scrollLineDown = function () {
        this.term.scrollLines(1);
    };
    TerminalWidgetImpl.prototype.scrollToTop = function () {
        this.term.scrollToTop();
    };
    TerminalWidgetImpl.prototype.scrollPageUp = function () {
        this.term.scrollPages(-1);
    };
    TerminalWidgetImpl.prototype.scrollPageDown = function () {
        this.term.scrollPages(1);
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "onTerminalDidClose", {
        get: function () {
            return this.onTermDidClose.event;
        },
        enumerable: true,
        configurable: true
    });
    TerminalWidgetImpl.prototype.dispose = function () {
        /* Close the backend terminal only when explicitly closing the terminal
         * a refresh for example won't close it.  */
        if (this.closeOnDispose === true && typeof this.terminalId === 'number') {
            this.shellTerminalServer.close(this.terminalId);
            this.onTermDidClose.fire(this);
            this.onTermDidClose.dispose();
        }
        _super.prototype.dispose.call(this);
    };
    TerminalWidgetImpl.prototype.resizeTerminal = function () {
        var geo = this.fitAddon.proposeDimensions();
        var cols = geo.cols;
        var rows = geo.rows - 1; // subtract one row for margin
        this.term.resize(cols, rows);
    };
    TerminalWidgetImpl.prototype.resizeTerminalProcess = function () {
        if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)
            && !this.terminalService.getById(this.id)) {
            return;
        }
        var _a = this.term, cols = _a.cols, rows = _a.rows;
        this.shellTerminalServer.resize(this.terminalId, cols, rows);
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "enableCopy", {
        get: function () {
            return this.preferences['terminal.enableCopy'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "enablePaste", {
        get: function () {
            return this.preferences['terminal.enablePaste'];
        },
        enumerable: true,
        configurable: true
    });
    TerminalWidgetImpl.prototype.customKeyHandler = function (event) {
        var keyBindings = browser_1.KeyCode.createKeyCode(event).toString();
        var ctrlCmdCopy = (common_1.isOSX && keyBindings === 'meta+c') || (!common_1.isOSX && keyBindings === 'ctrl+c');
        var ctrlCmdPaste = (common_1.isOSX && keyBindings === 'meta+v') || (!common_1.isOSX && keyBindings === 'ctrl+v');
        if (ctrlCmdCopy && this.enableCopy && this.term.hasSelection()) {
            return false;
        }
        if (ctrlCmdPaste && this.enablePaste) {
            return false;
        }
        return true;
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "copyOnSelection", {
        get: function () {
            return this.preferences['terminal.integrated.copyOnSelection'];
        },
        enumerable: true,
        configurable: true
    });
    TerminalWidgetImpl.prototype.attachCustomKeyEventHandler = function () {
        var _this = this;
        this.term.attachCustomKeyEventHandler(function (e) { return _this.customKeyHandler(e); });
    };
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], TerminalWidgetImpl.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WebSocketConnectionProvider),
        __metadata("design:type", browser_1.WebSocketConnectionProvider)
    ], TerminalWidgetImpl.prototype, "webSocketConnectionProvider", void 0);
    __decorate([
        inversify_1.inject(terminal_widget_1.TerminalWidgetOptions),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(shell_terminal_protocol_1.ShellTerminalServerProxy),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "shellTerminalServer", void 0);
    __decorate([
        inversify_1.inject(terminal_watcher_1.TerminalWatcher),
        __metadata("design:type", terminal_watcher_1.TerminalWatcher)
    ], TerminalWidgetImpl.prototype, "terminalWatcher", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger), inversify_1.named('terminal'),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject('terminal-dom-id'),
        __metadata("design:type", String)
    ], TerminalWidgetImpl.prototype, "id", void 0);
    __decorate([
        inversify_1.inject(terminal_preferences_1.TerminalPreferences),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(core_1.ContributionProvider), inversify_1.named(terminal_contribution_1.TerminalContribution),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "terminalContributionProvider", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(terminal_search_widget_1.TerminalSearchWidgetFactory),
        __metadata("design:type", Function)
    ], TerminalWidgetImpl.prototype, "terminalSearchBoxFactory", void 0);
    __decorate([
        inversify_1.inject(terminal_copy_on_selection_handler_1.TerminalCopyOnSelectionHandler),
        __metadata("design:type", terminal_copy_on_selection_handler_1.TerminalCopyOnSelectionHandler)
    ], TerminalWidgetImpl.prototype, "copyOnSelectionHandler", void 0);
    __decorate([
        inversify_1.inject(terminal_theme_service_1.TerminalThemeService),
        __metadata("design:type", terminal_theme_service_1.TerminalThemeService)
    ], TerminalWidgetImpl.prototype, "themeService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalWidgetImpl.prototype, "init", null);
    TerminalWidgetImpl = __decorate([
        inversify_1.injectable()
    ], TerminalWidgetImpl);
    return TerminalWidgetImpl;
}(terminal_widget_1.TerminalWidget));
exports.TerminalWidgetImpl = TerminalWidgetImpl;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/common/base-terminal-protocol.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/common/base-terminal-protocol.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var IBaseTerminalServer;
(function (IBaseTerminalServer) {
    function validateId(id) {
        return typeof id === 'number' && id !== -1;
    }
    IBaseTerminalServer.validateId = validateId;
})(IBaseTerminalServer = exports.IBaseTerminalServer || (exports.IBaseTerminalServer = {}));
var DispatchingBaseTerminalClient = /** @class */ (function () {
    function DispatchingBaseTerminalClient() {
        this.clients = new Set();
    }
    DispatchingBaseTerminalClient.prototype.push = function (client) {
        var _this = this;
        this.clients.add(client);
        return core_1.Disposable.create(function () { return _this.clients.delete(client); });
    };
    DispatchingBaseTerminalClient.prototype.onTerminalExitChanged = function (event) {
        this.clients.forEach(function (c) {
            try {
                c.onTerminalExitChanged(event);
            }
            catch (e) {
                console.error(e);
            }
        });
    };
    DispatchingBaseTerminalClient.prototype.onTerminalError = function (event) {
        this.clients.forEach(function (c) {
            try {
                c.onTerminalError(event);
            }
            catch (e) {
                console.error(e);
            }
        });
    };
    return DispatchingBaseTerminalClient;
}());
exports.DispatchingBaseTerminalClient = DispatchingBaseTerminalClient;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/common/shell-terminal-protocol.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/common/shell-terminal-protocol.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
exports.IShellTerminalServer = Symbol('IShellTerminalServer');
exports.shellTerminalPath = '/services/shell-terminal';
exports.ShellTerminalServerProxy = Symbol('ShellTerminalServerProxy');


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/common/terminal-common-module.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/common/terminal-common-module.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
/**
 * Create the bindings common to node and browser.
 *
 * @param bind The bind function from inversify.
 */
function createCommonBindings(bind) {
    bind(core_1.ILogger).toDynamicValue(function (ctx) {
        var logger = ctx.container.get(core_1.ILogger);
        return logger.child('terminal');
    }).inSingletonScope().whenTargetNamed('terminal');
}
exports.createCommonBindings = createCommonBindings;


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/common/terminal-protocol.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/common/terminal-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
exports.ITerminalServer = Symbol('ITerminalServer');
exports.terminalPath = '/services/terminal';
exports.terminalsPath = '/services/terminals';


/***/ }),

/***/ "../node_modules/@theia/terminal/lib/common/terminal-watcher.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/terminal/lib/common/terminal-watcher.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var TerminalWatcher = /** @class */ (function () {
    function TerminalWatcher() {
        this.onTerminalExitEmitter = new event_1.Emitter();
        this.onTerminalErrorEmitter = new event_1.Emitter();
    }
    TerminalWatcher.prototype.getTerminalClient = function () {
        var exitEmitter = this.onTerminalExitEmitter;
        var errorEmitter = this.onTerminalErrorEmitter;
        return {
            onTerminalExitChanged: function (event) {
                exitEmitter.fire(event);
            },
            onTerminalError: function (event) {
                errorEmitter.fire(event);
            }
        };
    };
    Object.defineProperty(TerminalWatcher.prototype, "onTerminalExit", {
        get: function () {
            return this.onTerminalExitEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TerminalWatcher.prototype, "onTerminalError", {
        get: function () {
            return this.onTerminalErrorEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    TerminalWatcher = __decorate([
        inversify_1.injectable()
    ], TerminalWatcher);
    return TerminalWatcher;
}());
exports.TerminalWatcher = TerminalWatcher;


/***/ }),

/***/ "../node_modules/@theia/terminal/src/browser/style/terminal-search.css":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/terminal/src/browser/style/terminal-search.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./terminal-search.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/terminal/src/browser/style/terminal-search.css");

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

/***/ "../node_modules/@theia/terminal/src/browser/style/terminal.css":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/terminal/src/browser/style/terminal.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./terminal.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/terminal/src/browser/style/terminal.css");

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

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/terminal/src/browser/style/terminal-search.css":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/terminal/src/browser/style/terminal-search.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2019 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-search-terminal-widget-parent {\n    background: var(--theia-sideBar-background);\n    position: absolute;\n    margin: 0px;\n    border: var(--theia-border-width) solid transparent;\n    padding: 0px;\n    top: 1px;\n    right: 19px;\n\n    z-index: 10;\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box {\n    display: flex;\n    margin: 0px;\n    border: var(--theia-border-width) solid transparent;\n    padding: 0px;\n    align-items: center;\n    color: var(--theia-input-foreground);\n    background: var(--theia-input-background);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box input {\n    margin-left: 5px;\n    padding: 0px;\n    width: 100px;\n    height: 18px;\n    color: inherit;\n    background-color: inherit;\n    border: var(--theia-border-width) solid transparent;\n    outline: none;\n}\n\n.theia-search-terminal-widget-parent .search-elem {\n    border: var(--theia-border-width) solid transparent;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 18px;\n    width: 18px;\n    margin: 1px;\n    opacity: 0.7;\n    outline: none;\n}\n\n.theia-search-terminal-widget-parent .search-elem:hover {\n    opacity: 1;\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box.focused {\n    border: var(--theia-border-width) solid var(--theia-focusBorder);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box .search-elem.option-enabled {\n    border: var(--theia-border-width) solid var(--theia-inputOption-activeBorder);\n    background-color: var(--theia-inputOption-activeBackground);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box .whole-word {\n    background-image: var(--theia-icon-whole-word);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box .match-case {\n    background-image: var(--theia-icon-case-sensitive);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box .use-regexp {\n    background-image: var(--theia-icon-regex);\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget {\n    margin: 2px;\n    display: flex;\n    align-items: center;\n    font: var(--theia-content-font-size);\n    color: var(--theia-input-foreground);\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget button {\n    background-color: transparent;\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget button:focus {\n    border: var(--theia-border-width) var(--theia-focusBorder) solid;\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget .search-elem.close {\n    background-image: var(--theia-icon-close);\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget .search-elem.arrow-up {\n    background-image: var(--theia-icon-arrow-up);\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget .search-elem.arrow-down {\n    background-image: var(--theia-icon-arrow-down);\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/terminal/src/browser/style/terminal.css":
/*!*************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/terminal/src/browser/style/terminal.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.terminal-container {\n    width:100%;\n    height:100%;\n    padding: var(--theia-code-padding);\n    background: var(--theia-terminal-background);\n}\n\n.xterm .xterm-screen canvas {\n  /* fix random 1px white border on terminal in Firefox. See https://github.com/eclipse-theia/theia/issues/4665 */\n  border: 1px solid var(--theia-terminal-background);\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/xterm/css/xterm.css":
/*!**********************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/xterm/css/xterm.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Copyright (c) 2014 The xterm.js authors. All rights reserved.\n * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)\n * https://github.com/chjj/term.js\n * @license MIT\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n * Originally forked from (with the author's permission):\n *   Fabrice Bellard's javascript vt100 for jslinux:\n *   http://bellard.org/jslinux/\n *   Copyright (c) 2011 Fabrice Bellard\n *   The original design remains. The terminal itself\n *   has been extended to include xterm CSI codes, among\n *   other features.\n */\n\n/**\n *  Default styles for xterm.js\n */\n\n.xterm {\n    font-feature-settings: \"liga\" 0;\n    position: relative;\n    user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n}\n\n.xterm.focus,\n.xterm:focus {\n    outline: none;\n}\n\n.xterm .xterm-helpers {\n    position: absolute;\n    top: 0;\n    /**\n     * The z-index of the helpers must be higher than the canvases in order for\n     * IMEs to appear on top.\n     */\n    z-index: 5;\n}\n\n.xterm .xterm-helper-textarea {\n    /*\n     * HACK: to fix IE's blinking cursor\n     * Move textarea out of the screen to the far left, so that the cursor is not visible.\n     */\n    position: absolute;\n    opacity: 0;\n    left: -9999em;\n    top: 0;\n    width: 0;\n    height: 0;\n    z-index: -5;\n    /** Prevent wrapping so the IME appears against the textarea at the correct position */\n    white-space: nowrap;\n    overflow: hidden;\n    resize: none;\n}\n\n.xterm .composition-view {\n    /* TODO: Composition position got messed up somewhere */\n    background: #000;\n    color: #FFF;\n    display: none;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n}\n\n.xterm .composition-view.active {\n    display: block;\n}\n\n.xterm .xterm-viewport {\n    /* On OS X this is required in order for the scroll bar to appear fully opaque */\n    background-color: #000;\n    overflow-y: scroll;\n    cursor: default;\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n}\n\n.xterm .xterm-screen {\n    position: relative;\n}\n\n.xterm .xterm-screen canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.xterm .xterm-scroll-area {\n    visibility: hidden;\n}\n\n.xterm-char-measure-element {\n    display: inline-block;\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: -9999em;\n    line-height: normal;\n}\n\n.xterm {\n    cursor: text;\n}\n\n.xterm.enable-mouse-events {\n    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */\n    cursor: default;\n}\n\n.xterm.xterm-cursor-pointer {\n    cursor: pointer;\n}\n\n.xterm.column-select.focus {\n    /* Column selection mode */\n    cursor: crosshair;\n}\n\n.xterm .xterm-accessibility,\n.xterm .xterm-message {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 10;\n    color: transparent;\n}\n\n.xterm .live-region {\n    position: absolute;\n    left: -9999px;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n\n.xterm-dim {\n    opacity: 0.5;\n}\n\n.xterm-underline {\n    text-decoration: underline;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/xterm-addon-fit/lib/xterm-addon-fit.js":
/*!**************************************************************!*\
  !*** ../node_modules/xterm-addon-fit/lib/xterm-addon-fit.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.activate=function(e){this._terminal=e},e.prototype.dispose=function(){},e.prototype.fit=function(){var e=this.proposeDimensions();if(e&&this._terminal){var t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}},e.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var e=this._terminal._core,t=window.getComputedStyle(this._terminal.element.parentElement),r=parseInt(t.getPropertyValue("height")),n=Math.max(0,parseInt(t.getPropertyValue("width"))),o=window.getComputedStyle(this._terminal.element),i=r-(parseInt(o.getPropertyValue("padding-top"))+parseInt(o.getPropertyValue("padding-bottom"))),a=n-(parseInt(o.getPropertyValue("padding-right"))+parseInt(o.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(a/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(i/e._renderService.dimensions.actualCellHeight))}}},e}();t.FitAddon=n}])});


/***/ }),

/***/ "../node_modules/xterm-addon-search/lib/xterm-addon-search.js":
/*!********************************************************************!*\
  !*** ../node_modules/xterm-addon-search/lib/xterm-addon-search.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._linesCacheTimeoutId=0}return e.prototype.activate=function(e){this._terminal=e},e.prototype.dispose=function(){},e.prototype.findNext=function(e,t){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");if(!e||0===e.length)return this._terminal.clearSelection(),!1;var i,r=0,n=0;if(this._terminal.hasSelection()){var o=!!t&&t.incremental;i=this._terminal.getSelectionPosition(),n=o?i.startRow:i.endRow,r=o?i.startColumn:i.endColumn}this._initLinesCache();var s={startRow:n,startCol:r},a=this._findInLine(e,s,t);if(!a)for(var l=n+1;l<this._terminal.buffer.baseY+this._terminal.rows&&(s.startRow=l,s.startCol=0,!(a=this._findInLine(e,s,t)));l++);if(!a&&0!==n)for(l=0;l<n&&(s.startRow=l,s.startCol=0,!(a=this._findInLine(e,s,t)));l++);return!(a||!i)||this._selectResult(a)},e.prototype.findPrevious=function(e,t){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");if(!e||0===e.length)return this._terminal.clearSelection(),!1;var i,r,n=this._terminal.buffer.baseY+this._terminal.rows,o=this._terminal.cols,s=!!t&&t.incremental;this._terminal.hasSelection()&&(n=(r=this._terminal.getSelectionPosition()).startRow,o=r.startColumn),this._initLinesCache();var a={startRow:n,startCol:o};if(s&&(i=this._findInLine(e,a,t,!1))&&i.row===n&&i.col===o||(i=this._findInLine(e,a,t,!0)),!i){a.startCol=Math.max(a.startCol,this._terminal.cols);for(var l=n-1;l>=0&&(a.startRow=l,!(i=this._findInLine(e,a,t,!0)));l--);}if(!i&&n!==this._terminal.buffer.baseY+this._terminal.rows)for(l=this._terminal.buffer.baseY+this._terminal.rows;l>n&&(a.startRow=l,!(i=this._findInLine(e,a,t,!0)));l--);return!(i||!r)||this._selectResult(i)},e.prototype._initLinesCache=function(){var e=this,t=this._terminal;this._linesCache||(this._linesCache=new Array(t.buffer.length),this._cursorMoveListener=t.onCursorMove(function(){return e._destroyLinesCache()}),this._resizeListener=t.onResize(function(){return e._destroyLinesCache()})),window.clearTimeout(this._linesCacheTimeoutId),this._linesCacheTimeoutId=window.setTimeout(function(){return e._destroyLinesCache()},15e3)},e.prototype._destroyLinesCache=function(){this._linesCache=void 0,this._cursorMoveListener&&(this._cursorMoveListener.dispose(),this._cursorMoveListener=void 0),this._resizeListener&&(this._resizeListener.dispose(),this._resizeListener=void 0),this._linesCacheTimeoutId&&(window.clearTimeout(this._linesCacheTimeoutId),this._linesCacheTimeoutId=0)},e.prototype._isWholeWord=function(e,t,i){return!(0!==e&&-1===" ~!@#$%^&*()+`-=[]{}|;:\"',./<>?".indexOf(t[e-1])||e+i.length!==t.length&&-1===" ~!@#$%^&*()+`-=[]{}|;:\"',./<>?".indexOf(t[e+i.length]))},e.prototype._findInLine=function(e,t,i,r){void 0===i&&(i={}),void 0===r&&(r=!1);var n=this._terminal,o=t.startRow,s=t.startCol,a=n.buffer.getLine(o);if(a&&a.isWrapped)return r?void(t.startCol+=n.cols):(t.startRow--,t.startCol+=n.cols,this._findInLine(e,t,i));var l=this._linesCache?this._linesCache[o]:void 0;void 0===l&&(l=this._translateBufferLineToStringWithWrap(o,!0),this._linesCache&&(this._linesCache[o]=l));var f=i.caseSensitive?e:e.toLowerCase(),h=i.caseSensitive?l:l.toLowerCase(),u=-1;if(i.regex){var c=RegExp(f,"g"),d=void 0;if(r)for(;d=c.exec(h.slice(0,s));)u=c.lastIndex-d[0].length,e=d[0],c.lastIndex-=e.length-1;else(d=c.exec(h.slice(s)))&&d[0].length>0&&(u=s+(c.lastIndex-d[0].length),e=d[0])}else r?s-f.length>=0&&(u=h.lastIndexOf(f,s-f.length)):u=h.indexOf(f,s);if(u>=0){if(u>=n.cols&&(o+=Math.floor(u/n.cols),u%=n.cols),i.wholeWord&&!this._isWholeWord(u,h,e))return;var _=n.buffer.getLine(o);if(_)for(var p=0;p<u;p++){var v=_.getCell(p);if(!v)break;var m=v.getChars();m.length>1&&(u-=m.length-1),0===v.getWidth()&&u++}return{term:e,col:u,row:o}}},e.prototype._translateBufferLineToStringWithWrap=function(e,t){var i,r=this._terminal,n="";do{var o=r.buffer.getLine(e+1);i=!!o&&o.isWrapped;var s=r.buffer.getLine(e);if(!s)break;n+=s.translateToString(!i&&t).substring(0,r.cols),e++}while(i);return n},e.prototype._selectResult=function(e){var t=this._terminal;if(!e)return t.clearSelection(),!1;if(t.select(e.col,e.row,e.term.length),e.row>=t.buffer.viewportY+t.rows||e.row<t.buffer.viewportY){var i=e.row-t.buffer.viewportY;i-=Math.floor(t.rows/2),t.scrollLines(i)}return!0},e}();t.SearchAddon=r}])});


/***/ }),

/***/ "../node_modules/xterm/css/xterm.css":
/*!*******************************************!*\
  !*** ../node_modules/xterm/css/xterm.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!./xterm.css */ "../node_modules/css-loader/index.js!../node_modules/xterm/css/xterm.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/xterm/lib/xterm.js":
/*!******************************************!*\
  !*** ../node_modules/xterm/lib/xterm.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var i, r; }}(window,function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=32)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(14);t.IBufferService=i.createDecorator("BufferService"),t.ICoreMouseService=i.createDecorator("CoreMouseService"),t.ICoreService=i.createDecorator("CoreService"),t.ICharsetService=i.createDecorator("CharsetService"),t.IDirtyRowService=i.createDecorator("DirtyRowService"),t.IInstantiationService=i.createDecorator("InstantiationService"),t.ILogService=i.createDecorator("LogService"),t.IOptionsService=i.createDecorator("OptionsService"),t.IUnicodeService=i.createDecorator("UnicodeService")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this._listeners=[],this._disposed=!1}return Object.defineProperty(e.prototype,"event",{get:function(){var e=this;return this._event||(this._event=function(t){return e._listeners.push(t),{dispose:function(){if(!e._disposed)for(var r=0;r<e._listeners.length;r++)if(e._listeners[r]===t)return void e._listeners.splice(r,1)}}}),this._event},enumerable:!0,configurable:!0}),e.prototype.fire=function(e,t){for(var r=[],i=0;i<this._listeners.length;i++)r.push(this._listeners[i]);for(i=0;i<r.length;i++)r[i].call(void 0,e,t)},e.prototype.dispose=function(){this._listeners&&(this._listeners.length=0),this._disposed=!0},e}();t.EventEmitter=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this._disposables=[],this._isDisposed=!1}return e.prototype.dispose=function(){this._isDisposed=!0,this._disposables.forEach(function(e){return e.dispose()}),this._disposables.length=0},e.prototype.register=function(e){this._disposables.push(e)},e.prototype.unregister=function(e){var t=this._disposables.indexOf(e);-1!==t&&this._disposables.splice(t,1)},e}();t.Disposable=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_COLOR=256,t.DEFAULT_ATTR=256|t.DEFAULT_COLOR<<9,t.CHAR_DATA_ATTR_INDEX=0,t.CHAR_DATA_CHAR_INDEX=1,t.CHAR_DATA_WIDTH_INDEX=2,t.CHAR_DATA_CODE_INDEX=3,t.NULL_CELL_CHAR="",t.NULL_CELL_WIDTH=1,t.NULL_CELL_CODE=0,t.WHITESPACE_CELL_CHAR=" ",t.WHITESPACE_CELL_WIDTH=1,t.WHITESPACE_CELL_CODE=32},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(14);t.ICharSizeService=i.createDecorator("CharSizeService"),t.ICoreBrowserService=i.createDecorator("CoreBrowserService"),t.IMouseService=i.createDecorator("MouseService"),t.IRenderService=i.createDecorator("RenderService"),t.ISelectionService=i.createDecorator("SelectionService"),t.ISoundService=i.createDecorator("SoundService")},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(7),s=r(3),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.content=0,t.fg=0,t.bg=0,t.combinedData="",t}return n(t,e),t.fromCharData=function(e){var r=new t;return r.setFromCharData(e),r},t.prototype.isCombined=function(){return 2097152&this.content},t.prototype.getWidth=function(){return this.content>>22},t.prototype.getChars=function(){return 2097152&this.content?this.combinedData:2097151&this.content?o.stringFromCodePoint(2097151&this.content):""},t.prototype.getCode=function(){return this.isCombined()?this.combinedData.charCodeAt(this.combinedData.length-1):2097151&this.content},t.prototype.setFromCharData=function(e){this.fg=e[s.CHAR_DATA_ATTR_INDEX],this.bg=0;var t=!1;if(e[s.CHAR_DATA_CHAR_INDEX].length>2)t=!0;else if(2===e[s.CHAR_DATA_CHAR_INDEX].length){var r=e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);if(55296<=r&&r<=56319){var i=e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);56320<=i&&i<=57343?this.content=1024*(r-55296)+i-56320+65536|e[s.CHAR_DATA_WIDTH_INDEX]<<22:t=!0}else t=!0}else this.content=e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0)|e[s.CHAR_DATA_WIDTH_INDEX]<<22;t&&(this.combinedData=e[s.CHAR_DATA_CHAR_INDEX],this.content=2097152|e[s.CHAR_DATA_WIDTH_INDEX]<<22)},t.prototype.getAsCharData=function(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]},t}(r(6).AttributeData);t.CellData=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.fg=0,this.bg=0}return e.toColorRGB=function(e){return[e>>>16&255,e>>>8&255,255&e]},e.fromColorRGB=function(e){return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},e.prototype.clone=function(){var t=new e;return t.fg=this.fg,t.bg=this.bg,t},e.prototype.isInverse=function(){return 67108864&this.fg},e.prototype.isBold=function(){return 134217728&this.fg},e.prototype.isUnderline=function(){return 268435456&this.fg},e.prototype.isBlink=function(){return 536870912&this.fg},e.prototype.isInvisible=function(){return 1073741824&this.fg},e.prototype.isItalic=function(){return 67108864&this.bg},e.prototype.isDim=function(){return 134217728&this.bg},e.prototype.getFgColorMode=function(){return 50331648&this.fg},e.prototype.getBgColorMode=function(){return 50331648&this.bg},e.prototype.isFgRGB=function(){return 50331648==(50331648&this.fg)},e.prototype.isBgRGB=function(){return 50331648==(50331648&this.bg)},e.prototype.isFgPalette=function(){return 16777216==(50331648&this.fg)||33554432==(50331648&this.fg)},e.prototype.isBgPalette=function(){return 16777216==(50331648&this.bg)||33554432==(50331648&this.bg)},e.prototype.isFgDefault=function(){return 0==(50331648&this.fg)},e.prototype.isBgDefault=function(){return 0==(50331648&this.bg)},e.prototype.isAttributeDefault=function(){return 0===this.fg&&0===this.bg},e.prototype.getFgColor=function(){switch(50331648&this.fg){case 16777216:case 33554432:return 255&this.fg;case 50331648:return 16777215&this.fg;default:return-1}},e.prototype.getBgColor=function(){switch(50331648&this.bg){case 16777216:case 33554432:return 255&this.bg;case 50331648:return 16777215&this.bg;default:return-1}},e}();t.AttributeData=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stringFromCodePoint=function(e){return e>65535?(e-=65536,String.fromCharCode(55296+(e>>10))+String.fromCharCode(e%1024+56320)):String.fromCharCode(e)},t.utf32ToString=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=e.length);for(var i="",n=t;n<r;++n){var o=e[n];o>65535?(o-=65536,i+=String.fromCharCode(55296+(o>>10))+String.fromCharCode(o%1024+56320)):i+=String.fromCharCode(o)}return i};var i=function(){function e(){this._interim=0}return e.prototype.clear=function(){this._interim=0},e.prototype.decode=function(e,t){var r=e.length;if(!r)return 0;var i=0,n=0;this._interim&&(56320<=(a=e.charCodeAt(n++))&&a<=57343?t[i++]=1024*(this._interim-55296)+a-56320+65536:(t[i++]=this._interim,t[i++]=a),this._interim=0);for(var o=n;o<r;++o){var s=e.charCodeAt(o);if(55296<=s&&s<=56319){if(++o>=r)return this._interim=s,i;var a;56320<=(a=e.charCodeAt(o))&&a<=57343?t[i++]=1024*(s-55296)+a-56320+65536:(t[i++]=s,t[i++]=a)}else t[i++]=s}return i},e}();t.StringToUtf32=i;var n=function(){function e(){this.interim=new Uint8Array(3)}return e.prototype.clear=function(){this.interim.fill(0)},e.prototype.decode=function(e,t){var r=e.length;if(!r)return 0;var i,n,o,s,a=0,c=0,l=0;if(this.interim[0]){var h=!1,u=this.interim[0];u&=192==(224&u)?31:224==(240&u)?15:7;for(var f=0,_=void 0;(_=63&this.interim[++f])&&f<4;)u<<=6,u|=_;for(var d=192==(224&this.interim[0])?2:224==(240&this.interim[0])?3:4,p=d-f;l<p;){if(l>=r)return 0;if(128!=(192&(_=e[l++]))){l--,h=!0;break}this.interim[f++]=_,u<<=6,u|=63&_}h||(2===d?u<128?l--:t[a++]=u:3===d?u<2048||u>=55296&&u<=57343||(t[a++]=u):u<65536||u>1114111||(t[a++]=u)),this.interim.fill(0)}for(var v=r-4,g=l;g<r;){for(;!(!(g<v)||128&(i=e[g])||128&(n=e[g+1])||128&(o=e[g+2])||128&(s=e[g+3]));)t[a++]=i,t[a++]=n,t[a++]=o,t[a++]=s,g+=4;if((i=e[g++])<128)t[a++]=i;else if(192==(224&i)){if(g>=r)return this.interim[0]=i,a;if(128!=(192&(n=e[g++]))){g--;continue}if((c=(31&i)<<6|63&n)<128){g--;continue}t[a++]=c}else if(224==(240&i)){if(g>=r)return this.interim[0]=i,a;if(128!=(192&(n=e[g++]))){g--;continue}if(g>=r)return this.interim[0]=i,this.interim[1]=n,a;if(128!=(192&(o=e[g++]))){g--;continue}if((c=(15&i)<<12|(63&n)<<6|63&o)<2048||c>=55296&&c<=57343)continue;t[a++]=c}else if(240==(248&i)){if(g>=r)return this.interim[0]=i,a;if(128!=(192&(n=e[g++]))){g--;continue}if(g>=r)return this.interim[0]=i,this.interim[1]=n,a;if(128!=(192&(o=e[g++]))){g--;continue}if(g>=r)return this.interim[0]=i,this.interim[1]=n,this.interim[2]=o,a;if(128!=(192&(s=e[g++]))){g--;continue}if((c=(7&i)<<18|(63&n)<<12|(63&o)<<6|63&s)<65536||c>1114111)continue;t[a++]=c}}return a},e}();t.Utf8ToUtf32=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addDisposableDomListener=function(e,t,r,i){e.addEventListener(t,r,i);var n=!1;return{dispose:function(){n&&(n=!0,e.removeEventListener(t,r,i))}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INVERTED_DEFAULT_COLOR=257,t.DIM_OPACITY=.5,t.CHAR_ATLAS_CELL_SPACING=1},function(e,t,r){"use strict";var i,n,o,s;function a(e){var t=e.toString(16);return t.length<2?"0"+t:t}function c(e,t){return e<t?(t+.05)/(e+.05):(e+.05)/(t+.05)}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.toCss=function(e,t,r,i){return void 0!==i?"#"+a(e)+a(t)+a(r)+a(i):"#"+a(e)+a(t)+a(r)},e.toRgba=function(e,t,r,i){return void 0===i&&(i=255),(e<<24|t<<16|r<<8|i)>>>0}}(i=t.channels||(t.channels={})),(n=t.color||(t.color={})).blend=function(e,t){var r=(255&t.rgba)/255;if(1===r)return{css:t.css,rgba:t.rgba};var n=t.rgba>>24&255,o=t.rgba>>16&255,s=t.rgba>>8&255,a=e.rgba>>24&255,c=e.rgba>>16&255,l=e.rgba>>8&255,h=a+Math.round((n-a)*r),u=c+Math.round((o-c)*r),f=l+Math.round((s-l)*r);return{css:i.toCss(h,u,f),rgba:i.toRgba(h,u,f)}},n.ensureContrastRatio=function(e,t,r){var i=s.ensureContrastRatio(e.rgba,t.rgba,r);if(i)return s.toColor(i>>24&255,i>>16&255,i>>8&255)},n.opaque=function(e){var t=(255|e.rgba)>>>0,r=s.toChannels(t),n=r[0],o=r[1],a=r[2];return{css:i.toCss(n,o,a),rgba:t}},(t.css||(t.css={})).toColor=function(e){return{css:e,rgba:(parseInt(e.slice(1),16)<<8|255)>>>0}},function(e){function t(e,t,r){var i=e/255,n=t/255,o=r/255;return.2126*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))}e.relativeLuminance=function(e){return t(e>>16&255,e>>8&255,255&e)},e.relativeLuminance2=t}(o=t.rgb||(t.rgb={})),function(e){function t(e,t,r){for(var i=e>>24&255,n=e>>16&255,s=e>>8&255,a=t>>24&255,l=t>>16&255,h=t>>8&255,u=c(o.relativeLuminance2(a,h,l),o.relativeLuminance2(i,n,s));u<r&&(a>0||l>0||h>0);)a-=Math.max(0,Math.ceil(.1*a)),l-=Math.max(0,Math.ceil(.1*l)),h-=Math.max(0,Math.ceil(.1*h)),u=c(o.relativeLuminance2(a,h,l),o.relativeLuminance2(i,n,s));return(a<<24|l<<16|h<<8|255)>>>0}function r(e,t,r){for(var i=e>>24&255,n=e>>16&255,s=e>>8&255,a=t>>24&255,l=t>>16&255,h=t>>8&255,u=c(o.relativeLuminance2(a,h,l),o.relativeLuminance2(i,n,s));u<r&&(a<255||l<255||h<255);)a=Math.min(255,a+Math.ceil(.1*(255-a))),l=Math.min(255,l+Math.ceil(.1*(255-l))),h=Math.min(255,h+Math.ceil(.1*(255-h))),u=c(o.relativeLuminance2(a,h,l),o.relativeLuminance2(i,n,s));return(a<<24|l<<16|h<<8|255)>>>0}e.ensureContrastRatio=function(e,i,n){var s=o.relativeLuminance(e>>8),a=o.relativeLuminance(i>>8);if(c(s,a)<n)return a<s?t(e,i,n):r(e,i,n)},e.reduceLuminance=t,e.increaseLuminance=r,e.toChannels=function(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]},e.toColor=function(e,t,r){return{css:i.toCss(e,t,r),rgba:i.toRgba(e,t,r)}}}(s=t.rgba||(t.rgba={})),t.toPaddedHex=a,t.contrastRatio=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"==typeof navigator,n=i?"node":navigator.userAgent,o=i?"node":navigator.platform;function s(e,t){return e.indexOf(t)>=0}t.isFirefox=!!~n.indexOf("Firefox"),t.isSafari=/^((?!chrome|android).)*safari/i.test(n),t.isMac=s(["Macintosh","MacIntel","MacPPC","Mac68K"],o),t.isIpad="iPad"===o,t.isIphone="iPhone"===o,t.isWindows=s(["Windows","Win16","Win32","WinCE"],o),t.isLinux=o.indexOf("Linux")>=0},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.NUL="\0",e.SOH="",e.STX="",e.ETX="",e.EOT="",e.ENQ="",e.ACK="",e.BEL="",e.BS="\b",e.HT="\t",e.LF="\n",e.VT="\v",e.FF="\f",e.CR="\r",e.SO="",e.SI="",e.DLE="",e.DC1="",e.DC2="",e.DC3="",e.DC4="",e.NAK="",e.SYN="",e.ETB="",e.CAN="",e.EM="",e.SUB="",e.ESC="",e.FS="",e.GS="",e.RS="",e.US="",e.SP=" ",e.DEL=""}(t.C0||(t.C0={})),function(e){e.PAD="",e.HOP="",e.BPH="",e.NBH="",e.IND="",e.NEL="",e.SSA="",e.ESA="",e.HTS="",e.HTJ="",e.VTS="",e.PLD="",e.PLU="",e.RI="",e.SS2="",e.SS3="",e.DCS="",e.PU1="",e.PU2="",e.STS="",e.CCH="",e.MW="",e.SPA="",e.EPA="",e.SOS="",e.SGCI="",e.SCI="",e.CSI="",e.ST="",e.OSC="",e.PM="",e.APC=""}(t.C1||(t.C1={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),n=r(9),o=r(23),s=r(6),a=r(26),c=r(10),l=function(){function e(e,t,r,i,n,o,s,a){this._container=e,this._alpha=i,this._colors=n,this._rendererId=o,this._bufferService=s,this._optionsService=a,this._scaledCharWidth=0,this._scaledCharHeight=0,this._scaledCellWidth=0,this._scaledCellHeight=0,this._scaledCharLeft=0,this._scaledCharTop=0,this._currentGlyphIdentifier={chars:"",code:0,bg:0,fg:0,bold:!1,dim:!1,italic:!1},this._canvas=document.createElement("canvas"),this._canvas.classList.add("xterm-"+t+"-layer"),this._canvas.style.zIndex=r.toString(),this._initCanvas(),this._container.appendChild(this._canvas)}return e.prototype.dispose=function(){var e;this._container.removeChild(this._canvas),null===(e=this._charAtlas)||void 0===e||e.dispose()},e.prototype._initCanvas=function(){this._ctx=a.throwIfFalsy(this._canvas.getContext("2d",{alpha:this._alpha})),this._alpha||this._clearAll()},e.prototype.onOptionsChanged=function(){},e.prototype.onBlur=function(){},e.prototype.onFocus=function(){},e.prototype.onCursorMove=function(){},e.prototype.onGridChanged=function(e,t){},e.prototype.onSelectionChanged=function(e,t,r){void 0===r&&(r=!1)},e.prototype.setColors=function(e){this._refreshCharAtlas(e)},e.prototype._setTransparency=function(e){if(e!==this._alpha){var t=this._canvas;this._alpha=e,this._canvas=this._canvas.cloneNode(),this._initCanvas(),this._container.replaceChild(this._canvas,t),this._refreshCharAtlas(this._colors),this.onGridChanged(0,this._bufferService.rows-1)}},e.prototype._refreshCharAtlas=function(e){this._scaledCharWidth<=0&&this._scaledCharHeight<=0||(this._charAtlas=o.acquireCharAtlas(this._optionsService.options,this._rendererId,e,this._scaledCharWidth,this._scaledCharHeight),this._charAtlas.warmUp())},e.prototype.resize=function(e){this._scaledCellWidth=e.scaledCellWidth,this._scaledCellHeight=e.scaledCellHeight,this._scaledCharWidth=e.scaledCharWidth,this._scaledCharHeight=e.scaledCharHeight,this._scaledCharLeft=e.scaledCharLeft,this._scaledCharTop=e.scaledCharTop,this._canvas.width=e.scaledCanvasWidth,this._canvas.height=e.scaledCanvasHeight,this._canvas.style.width=e.canvasWidth+"px",this._canvas.style.height=e.canvasHeight+"px",this._alpha||this._clearAll(),this._refreshCharAtlas(this._colors)},e.prototype._fillCells=function(e,t,r,i){this._ctx.fillRect(e*this._scaledCellWidth,t*this._scaledCellHeight,r*this._scaledCellWidth,i*this._scaledCellHeight)},e.prototype._fillBottomLineAtCells=function(e,t,r){void 0===r&&(r=1),this._ctx.fillRect(e*this._scaledCellWidth,(t+1)*this._scaledCellHeight-window.devicePixelRatio-1,r*this._scaledCellWidth,window.devicePixelRatio)},e.prototype._fillLeftLineAtCell=function(e,t,r){this._ctx.fillRect(e*this._scaledCellWidth,t*this._scaledCellHeight,window.devicePixelRatio*r,this._scaledCellHeight)},e.prototype._strokeRectAtCell=function(e,t,r,i){this._ctx.lineWidth=window.devicePixelRatio,this._ctx.strokeRect(e*this._scaledCellWidth+window.devicePixelRatio/2,t*this._scaledCellHeight+window.devicePixelRatio/2,r*this._scaledCellWidth-window.devicePixelRatio,i*this._scaledCellHeight-window.devicePixelRatio)},e.prototype._clearAll=function(){this._alpha?this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height):(this._ctx.fillStyle=this._colors.background.css,this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height))},e.prototype._clearCells=function(e,t,r,i){this._alpha?this._ctx.clearRect(e*this._scaledCellWidth,t*this._scaledCellHeight,r*this._scaledCellWidth,i*this._scaledCellHeight):(this._ctx.fillStyle=this._colors.background.css,this._ctx.fillRect(e*this._scaledCellWidth,t*this._scaledCellHeight,r*this._scaledCellWidth,i*this._scaledCellHeight))},e.prototype._fillCharTrueColor=function(e,t,r){this._ctx.font=this._getFont(!1,!1),this._ctx.textBaseline="middle",this._clipRow(r),this._ctx.fillText(e.getChars(),t*this._scaledCellWidth+this._scaledCharLeft,r*this._scaledCellHeight+this._scaledCharTop+this._scaledCharHeight/2)},e.prototype._drawChars=function(e,t,r){var o,s,a=this._getContrastColor(e);a||e.isFgRGB()||e.isBgRGB()?this._drawUncachedChars(e,t,r,a):(e.isInverse()?(o=e.isBgDefault()?n.INVERTED_DEFAULT_COLOR:e.getBgColor(),s=e.isFgDefault()?n.INVERTED_DEFAULT_COLOR:e.getFgColor()):(s=e.isBgDefault()?i.DEFAULT_COLOR:e.getBgColor(),o=e.isFgDefault()?i.DEFAULT_COLOR:e.getFgColor()),o+=this._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&o<8?8:0,this._currentGlyphIdentifier.chars=e.getChars()||i.WHITESPACE_CELL_CHAR,this._currentGlyphIdentifier.code=e.getCode()||i.WHITESPACE_CELL_CODE,this._currentGlyphIdentifier.bg=s,this._currentGlyphIdentifier.fg=o,this._currentGlyphIdentifier.bold=!!e.isBold(),this._currentGlyphIdentifier.dim=!!e.isDim(),this._currentGlyphIdentifier.italic=!!e.isItalic(),this._charAtlas&&this._charAtlas.draw(this._ctx,this._currentGlyphIdentifier,t*this._scaledCellWidth+this._scaledCharLeft,r*this._scaledCellHeight+this._scaledCharTop)||this._drawUncachedChars(e,t,r))},e.prototype._drawUncachedChars=function(e,t,r,i){if(this._ctx.save(),this._ctx.font=this._getFont(!!e.isBold(),!!e.isItalic()),this._ctx.textBaseline="middle",e.isInverse())if(i)this._ctx.fillStyle=i.css;else if(e.isBgDefault())this._ctx.fillStyle=c.color.opaque(this._colors.background).css;else if(e.isBgRGB())this._ctx.fillStyle="rgb("+s.AttributeData.toColorRGB(e.getBgColor()).join(",")+")";else{var o=e.getBgColor();this._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&o<8&&(o+=8),this._ctx.fillStyle=this._colors.ansi[o].css}else if(i)this._ctx.fillStyle=i.css;else if(e.isFgDefault())this._ctx.fillStyle=this._colors.foreground.css;else if(e.isFgRGB())this._ctx.fillStyle="rgb("+s.AttributeData.toColorRGB(e.getFgColor()).join(",")+")";else{var a=e.getFgColor();this._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&a<8&&(a+=8),this._ctx.fillStyle=this._colors.ansi[a].css}this._clipRow(r),e.isDim()&&(this._ctx.globalAlpha=n.DIM_OPACITY),this._ctx.fillText(e.getChars(),t*this._scaledCellWidth+this._scaledCharLeft,r*this._scaledCellHeight+this._scaledCharTop+this._scaledCharHeight/2),this._ctx.restore()},e.prototype._clipRow=function(e){this._ctx.beginPath(),this._ctx.rect(0,e*this._scaledCellHeight,this._bufferService.cols*this._scaledCellWidth,this._scaledCellHeight),this._ctx.clip()},e.prototype._getFont=function(e,t){return(t?"italic":"")+" "+(e?this._optionsService.options.fontWeightBold:this._optionsService.options.fontWeight)+" "+this._optionsService.options.fontSize*window.devicePixelRatio+"px "+this._optionsService.options.fontFamily},e.prototype._getContrastColor=function(e){if(1!==this._optionsService.options.minimumContrastRatio){var t=this._colors.contrastCache.getColor(e.bg,e.fg);if(void 0!==t)return t||void 0;var r=e.getFgColor(),i=e.getFgColorMode(),n=e.getBgColor(),o=e.getBgColorMode(),s=!!e.isInverse(),a=!!e.isInverse();if(s){var l=r;r=n,n=l;var h=i;i=o,o=h}var u=this._resolveBackgroundRgba(o,n,s),f=this._resolveForegroundRgba(i,r,s,a),_=c.rgba.ensureContrastRatio(u,f,this._optionsService.options.minimumContrastRatio);if(_){var d={css:c.channels.toCss(_>>24&255,_>>16&255,_>>8&255),rgba:_};return this._colors.contrastCache.setColor(e.bg,e.fg,d),d}this._colors.contrastCache.setColor(e.bg,e.fg,null)}},e.prototype._resolveBackgroundRgba=function(e,t,r){switch(e){case 16777216:case 33554432:return this._colors.ansi[t].rgba;case 50331648:return t<<8;case 0:default:return r?this._colors.foreground.rgba:this._colors.background.rgba}},e.prototype._resolveForegroundRgba=function(e,t,r,i){switch(e){case 16777216:case 33554432:return this._optionsService.options.drawBoldTextInBrightColors&&i&&t<8&&(t+=8),this._colors.ansi[t].rgba;case 50331648:return t<<8;case 0:default:return r?this._colors.background.rgba:this._colors.foreground.rgba}},e}();t.BaseRenderLayer=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="di$target",n="di$dependencies";function o(e,t,r){t[i]===t?t[n].push({id:e,index:r}):(t[n]=[{id:e,index:r}],t[i]=t)}t.serviceRegistry=new Map,t.getServiceDependencies=function(e){return e[n]||[]},t.createDecorator=function(e){if(t.serviceRegistry.has(e))return t.serviceRegistry.get(e);var r=function(e,t,i){if(3!==arguments.length)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");o(r,e,i)};return r.toString=function(){return e},t.serviceRegistry.set(e,r),r}},function(e,t,r){"use strict";function i(e,t,r,i){if(void 0===r&&(r=0),void 0===i&&(i=e.length),r>=e.length)return e;r=(e.length+r)%e.length,i=i>=e.length?e.length:(e.length+i)%e.length;for(var n=r;n<i;++n)e[n]=t;return e}Object.defineProperty(t,"__esModule",{value:!0}),t.fill=function(e,t,r,n){return e.fill?e.fill(t,r,n):i(e,t,r,n)},t.fillFallback=i,t.concat=function(e,t){var r=new e.constructor(e.length+t.length);return r.set(e),r.set(t,e.length),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),n=r(3),o=r(5),s=r(6),a=3;t.DEFAULT_ATTR_DATA=Object.freeze(new s.AttributeData);var c=function(){function e(e,t,r){void 0===r&&(r=!1),this.isWrapped=r,this._combined={},this._data=new Uint32Array(e*a);for(var i=t||o.CellData.fromCharData([0,n.NULL_CELL_CHAR,n.NULL_CELL_WIDTH,n.NULL_CELL_CODE]),s=0;s<e;++s)this.setCell(s,i);this.length=e}return e.prototype.get=function(e){var t=this._data[e*a+0],r=2097151&t;return[this._data[e*a+1],2097152&t?this._combined[e]:r?i.stringFromCodePoint(r):"",t>>22,2097152&t?this._combined[e].charCodeAt(this._combined[e].length-1):r]},e.prototype.set=function(e,t){this._data[e*a+1]=t[n.CHAR_DATA_ATTR_INDEX],t[n.CHAR_DATA_CHAR_INDEX].length>1?(this._combined[e]=t[1],this._data[e*a+0]=2097152|e|t[n.CHAR_DATA_WIDTH_INDEX]<<22):this._data[e*a+0]=t[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0)|t[n.CHAR_DATA_WIDTH_INDEX]<<22},e.prototype.getWidth=function(e){return this._data[e*a+0]>>22},e.prototype.hasWidth=function(e){return 12582912&this._data[e*a+0]},e.prototype.getFg=function(e){return this._data[e*a+1]},e.prototype.getBg=function(e){return this._data[e*a+2]},e.prototype.hasContent=function(e){return 4194303&this._data[e*a+0]},e.prototype.getCodePoint=function(e){var t=this._data[e*a+0];return 2097152&t?this._combined[e].charCodeAt(this._combined[e].length-1):2097151&t},e.prototype.isCombined=function(e){return 2097152&this._data[e*a+0]},e.prototype.getString=function(e){var t=this._data[e*a+0];return 2097152&t?this._combined[e]:2097151&t?i.stringFromCodePoint(2097151&t):""},e.prototype.loadCell=function(e,t){var r=e*a;return t.content=this._data[r+0],t.fg=this._data[r+1],t.bg=this._data[r+2],2097152&t.content&&(t.combinedData=this._combined[e]),t},e.prototype.setCell=function(e,t){2097152&t.content&&(this._combined[e]=t.combinedData),this._data[e*a+0]=t.content,this._data[e*a+1]=t.fg,this._data[e*a+2]=t.bg},e.prototype.setCellFromCodePoint=function(e,t,r,i,n){this._data[e*a+0]=t|r<<22,this._data[e*a+1]=i,this._data[e*a+2]=n},e.prototype.addCodepointToCell=function(e,t){var r=this._data[e*a+0];2097152&r?this._combined[e]+=i.stringFromCodePoint(t):(2097151&r?(this._combined[e]=i.stringFromCodePoint(2097151&r)+i.stringFromCodePoint(t),r&=-2097152,r|=2097152):r=t|1<<22,this._data[e*a+0]=r)},e.prototype.insertCells=function(e,t,r,i){var n,s,a,c;if((e%=this.length)&&2===this.getWidth(e-1)&&this.setCellFromCodePoint(e-1,0,1,(null===(n=i)||void 0===n?void 0:n.fg)||0,(null===(s=i)||void 0===s?void 0:s.bg)||0),t<this.length-e){for(var l=new o.CellData,h=this.length-e-t-1;h>=0;--h)this.setCell(e+t+h,this.loadCell(e+h,l));for(h=0;h<t;++h)this.setCell(e+h,r)}else for(h=e;h<this.length;++h)this.setCell(h,r);2===this.getWidth(this.length-1)&&this.setCellFromCodePoint(this.length-1,0,1,(null===(a=i)||void 0===a?void 0:a.fg)||0,(null===(c=i)||void 0===c?void 0:c.bg)||0)},e.prototype.deleteCells=function(e,t,r,i){var n,s,a,c;if(e%=this.length,t<this.length-e){for(var l=new o.CellData,h=0;h<this.length-e-t;++h)this.setCell(e+h,this.loadCell(e+t+h,l));for(h=this.length-t;h<this.length;++h)this.setCell(h,r)}else for(h=e;h<this.length;++h)this.setCell(h,r);e&&2===this.getWidth(e-1)&&this.setCellFromCodePoint(e-1,0,1,(null===(n=i)||void 0===n?void 0:n.fg)||0,(null===(s=i)||void 0===s?void 0:s.bg)||0),0!==this.getWidth(e)||this.hasContent(e)||this.setCellFromCodePoint(e,0,1,(null===(a=i)||void 0===a?void 0:a.fg)||0,(null===(c=i)||void 0===c?void 0:c.bg)||0)},e.prototype.replaceCells=function(e,t,r,i){var n,o,s,a;for(e&&2===this.getWidth(e-1)&&this.setCellFromCodePoint(e-1,0,1,(null===(n=i)||void 0===n?void 0:n.fg)||0,(null===(o=i)||void 0===o?void 0:o.bg)||0),t<this.length&&2===this.getWidth(t-1)&&this.setCellFromCodePoint(t,0,1,(null===(s=i)||void 0===s?void 0:s.fg)||0,(null===(a=i)||void 0===a?void 0:a.bg)||0);e<t&&e<this.length;)this.setCell(e++,r)},e.prototype.resize=function(e,t){if(e!==this.length){if(e>this.length){var r=new Uint32Array(e*a);this.length&&(e*a<this._data.length?r.set(this._data.subarray(0,e*a)):r.set(this._data)),this._data=r;for(var i=this.length;i<e;++i)this.setCell(i,t)}else if(e){(r=new Uint32Array(e*a)).set(this._data.subarray(0,e*a)),this._data=r;var n=Object.keys(this._combined);for(i=0;i<n.length;i++){var o=parseInt(n[i],10);o>=e&&delete this._combined[o]}}else this._data=new Uint32Array(0),this._combined={};this.length=e}},e.prototype.fill=function(e){this._combined={};for(var t=0;t<this.length;++t)this.setCell(t,e)},e.prototype.copyFrom=function(e){for(var t in this.length!==e.length?this._data=new Uint32Array(e._data):this._data.set(e._data),this.length=e.length,this._combined={},e._combined)this._combined[t]=e._combined[t];this.isWrapped=e.isWrapped},e.prototype.clone=function(){var t=new e(0);for(var r in t._data=new Uint32Array(this._data),t.length=this.length,this._combined)t._combined[r]=this._combined[r];return t.isWrapped=this.isWrapped,t},e.prototype.getTrimmedLength=function(){for(var e=this.length-1;e>=0;--e)if(4194303&this._data[e*a+0])return e+(this._data[e*a+0]>>22);return 0},e.prototype.copyCellsFrom=function(e,t,r,i,n){var o=e._data;if(n)for(var s=i-1;s>=0;s--)for(var c=0;c<a;c++)this._data[(r+s)*a+c]=o[(t+s)*a+c];else for(s=0;s<i;s++)for(c=0;c<a;c++)this._data[(r+s)*a+c]=o[(t+s)*a+c];var l=Object.keys(e._combined);for(c=0;c<l.length;c++){var h=parseInt(l[c],10);h>=t&&(this._combined[h-t+r]=e._combined[h])}},e.prototype.translateToString=function(e,t,r){void 0===e&&(e=!1),void 0===t&&(t=0),void 0===r&&(r=this.length),e&&(r=Math.min(r,this.getTrimmedLength()));for(var o="";t<r;){var s=this._data[t*a+0],c=2097151&s;o+=2097152&s?this._combined[t]:c?i.stringFromCodePoint(c):n.WHITESPACE_CELL_CHAR,t+=s>>22||1}return o},e}();t.BufferLine=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.promptLabel="Terminal input",t.tooMuchOutput="Too much output to announce, navigate to rows manually to read"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHARSETS={},t.DEFAULT_CHARSET=t.CHARSETS.B,t.CHARSETS[0]={"`":"◆",a:"▒",b:"␉",c:"␌",d:"␍",e:"␊",f:"°",g:"±",h:"␤",i:"␋",j:"┘",k:"┐",l:"┌",m:"└",n:"┼",o:"⎺",p:"⎻",q:"─",r:"⎼",s:"⎽",t:"├",u:"┤",v:"┴",w:"┬",x:"│",y:"≤",z:"≥","{":"π","|":"≠","}":"£","~":"·"},t.CHARSETS.A={"#":"£"},t.CHARSETS.B=null,t.CHARSETS[4]={"#":"£","@":"¾","[":"ij","\\":"½","]":"|","{":"¨","|":"f","}":"¼","~":"´"},t.CHARSETS.C=t.CHARSETS[5]={"[":"Ä","\\":"Ö","]":"Å","^":"Ü","`":"é","{":"ä","|":"ö","}":"å","~":"ü"},t.CHARSETS.R={"#":"£","@":"à","[":"°","\\":"ç","]":"§","{":"é","|":"ù","}":"è","~":"¨"},t.CHARSETS.Q={"@":"à","[":"â","\\":"ç","]":"ê","^":"î","`":"ô","{":"é","|":"ù","}":"è","~":"û"},t.CHARSETS.K={"@":"§","[":"Ä","\\":"Ö","]":"Ü","{":"ä","|":"ö","}":"ü","~":"ß"},t.CHARSETS.Y={"#":"£","@":"§","[":"°","\\":"ç","]":"é","`":"ù","{":"à","|":"ò","}":"è","~":"ì"},t.CHARSETS.E=t.CHARSETS[6]={"@":"Ä","[":"Æ","\\":"Ø","]":"Å","^":"Ü","`":"ä","{":"æ","|":"ø","}":"å","~":"ü"},t.CHARSETS.Z={"#":"£","@":"§","[":"¡","\\":"Ñ","]":"¿","{":"°","|":"ñ","}":"ç"},t.CHARSETS.H=t.CHARSETS[7]={"@":"É","[":"Ä","\\":"Ö","]":"Å","^":"Ü","`":"é","{":"ä","|":"ö","}":"å","~":"ü"},t.CHARSETS["="]={"#":"ù","@":"à","[":"é","\\":"ç","]":"ê","^":"î",_:"è","`":"ô","{":"ä","|":"ö","}":"ü","~":"û"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=256,n=function(){function e(e,t){if(void 0===e&&(e=32),void 0===t&&(t=32),this.maxLength=e,this.maxSubParamsLength=t,t>i)throw new Error("maxSubParamsLength must not be greater than 256");this.params=new Int32Array(e),this.length=0,this._subParams=new Int32Array(t),this._subParamsLength=0,this._subParamsIdx=new Uint16Array(e),this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1}return e.fromArray=function(t){var r=new e;if(!t.length)return r;for(var i=t[0]instanceof Array?1:0;i<t.length;++i){var n=t[i];if(n instanceof Array)for(var o=0;o<n.length;++o)r.addSubParam(n[o]);else r.addParam(n)}return r},e.prototype.clone=function(){var t=new e(this.maxLength,this.maxSubParamsLength);return t.params.set(this.params),t.length=this.length,t._subParams.set(this._subParams),t._subParamsLength=this._subParamsLength,t._subParamsIdx.set(this._subParamsIdx),t._rejectDigits=this._rejectDigits,t._rejectSubDigits=this._rejectSubDigits,t._digitIsSub=this._digitIsSub,t},e.prototype.toArray=function(){for(var e=[],t=0;t<this.length;++t){e.push(this.params[t]);var r=this._subParamsIdx[t]>>8,i=255&this._subParamsIdx[t];i-r>0&&e.push(Array.prototype.slice.call(this._subParams,r,i))}return e},e.prototype.reset=function(){this.length=0,this._subParamsLength=0,this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1},e.prototype.addParam=function(e){if(this._digitIsSub=!1,this.length>=this.maxLength)this._rejectDigits=!0;else{if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParamsIdx[this.length]=this._subParamsLength<<8|this._subParamsLength,this.params[this.length++]=e>2147483647?2147483647:e}},e.prototype.addSubParam=function(e){if(this._digitIsSub=!0,this.length)if(this._rejectDigits||this._subParamsLength>=this.maxSubParamsLength)this._rejectSubDigits=!0;else{if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParams[this._subParamsLength++]=e>2147483647?2147483647:e,this._subParamsIdx[this.length-1]++}},e.prototype.hasSubParams=function(e){return(255&this._subParamsIdx[e])-(this._subParamsIdx[e]>>8)>0},e.prototype.getSubParams=function(e){var t=this._subParamsIdx[e]>>8,r=255&this._subParamsIdx[e];return r-t>0?this._subParams.subarray(t,r):null},e.prototype.getSubParamsAll=function(){for(var e={},t=0;t<this.length;++t){var r=this._subParamsIdx[t]>>8,i=255&this._subParamsIdx[t];i-r>0&&(e[t]=this._subParams.slice(r,i))}return e},e.prototype.addDigit=function(e){var t;if(!(this._rejectDigits||!(t=this._digitIsSub?this._subParamsLength:this.length)||this._digitIsSub&&this._rejectSubDigits)){var r=this._digitIsSub?this._subParams:this.params,i=r[t-1];r[t-1]=~i?Math.min(10*i+e,2147483647):e}},e}();t.Params=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(21),n=r(7),o=function(){function e(){this._state=0,this._id=-1,this._handlers=Object.create(null),this._handlerFb=function(){}}return e.prototype.addHandler=function(e,t){void 0===this._handlers[e]&&(this._handlers[e]=[]);var r=this._handlers[e];return r.push(t),{dispose:function(){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}}},e.prototype.setHandler=function(e,t){this._handlers[e]=[t]},e.prototype.clearHandler=function(e){this._handlers[e]&&delete this._handlers[e]},e.prototype.setHandlerFallback=function(e){this._handlerFb=e},e.prototype.dispose=function(){this._handlers=Object.create(null),this._handlerFb=function(){}},e.prototype.reset=function(){2===this._state&&this.end(!1),this._id=-1,this._state=0},e.prototype._start=function(){var e=this._handlers[this._id];if(e)for(var t=e.length-1;t>=0;t--)e[t].start();else this._handlerFb(this._id,"START")},e.prototype._put=function(e,t,r){var i=this._handlers[this._id];if(i)for(var o=i.length-1;o>=0;o--)i[o].put(e,t,r);else this._handlerFb(this._id,"PUT",n.utf32ToString(e,t,r))},e.prototype._end=function(e){var t=this._handlers[this._id];if(t){for(var r=t.length-1;r>=0&&!1===t[r].end(e);r--);for(r--;r>=0;r--)t[r].end(!1)}else this._handlerFb(this._id,"END",e)},e.prototype.start=function(){this.reset(),this._id=-1,this._state=1},e.prototype.put=function(e,t,r){if(3!==this._state){if(1===this._state)for(;t<r;){var i=e[t++];if(59===i){this._state=2,this._start();break}if(i<48||57<i)return void(this._state=3);-1===this._id&&(this._id=0),this._id=10*this._id+i-48}2===this._state&&r-t>0&&this._put(e,t,r)}},e.prototype.end=function(e){0!==this._state&&(3!==this._state&&(1===this._state&&this._start(),this._end(e)),this._id=-1,this._state=0)},e}();t.OscParser=o;var s=function(){function e(e){this._handler=e,this._data="",this._hitLimit=!1}return e.prototype.start=function(){this._data="",this._hitLimit=!1},e.prototype.put=function(e,t,r){this._hitLimit||(this._data+=n.utf32ToString(e,t,r),this._data.length>i.PAYLOAD_LIMIT&&(this._data="",this._hitLimit=!0))},e.prototype.end=function(e){var t;return this._hitLimit?t=!1:e&&(t=this._handler(this._data)),this._data="",this._hitLimit=!1,t},e}();t.OscHandler=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PAYLOAD_LIMIT=1e7},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),n=r(19),o=r(21),s=[],a=function(){function e(){this._handlers=Object.create(null),this._active=s,this._ident=0,this._handlerFb=function(){}}return e.prototype.dispose=function(){this._handlers=Object.create(null),this._handlerFb=function(){}},e.prototype.addHandler=function(e,t){void 0===this._handlers[e]&&(this._handlers[e]=[]);var r=this._handlers[e];return r.push(t),{dispose:function(){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}}},e.prototype.setHandler=function(e,t){this._handlers[e]=[t]},e.prototype.clearHandler=function(e){this._handlers[e]&&delete this._handlers[e]},e.prototype.setHandlerFallback=function(e){this._handlerFb=e},e.prototype.reset=function(){this._active.length&&this.unhook(!1),this._active=s,this._ident=0},e.prototype.hook=function(e,t){if(this.reset(),this._ident=e,this._active=this._handlers[e]||s,this._active.length)for(var r=this._active.length-1;r>=0;r--)this._active[r].hook(t);else this._handlerFb(this._ident,"HOOK",t)},e.prototype.put=function(e,t,r){if(this._active.length)for(var n=this._active.length-1;n>=0;n--)this._active[n].put(e,t,r);else this._handlerFb(this._ident,"PUT",i.utf32ToString(e,t,r))},e.prototype.unhook=function(e){if(this._active.length){for(var t=this._active.length-1;t>=0&&!1===this._active[t].unhook(e);t--);for(t--;t>=0;t--)this._active[t].unhook(!1)}else this._handlerFb(this._ident,"UNHOOK",e);this._active=s,this._ident=0},e}();t.DcsParser=a;var c=function(){function e(e){this._handler=e,this._data="",this._hitLimit=!1}return e.prototype.hook=function(e){this._params=e.clone(),this._data="",this._hitLimit=!1},e.prototype.put=function(e,t,r){this._hitLimit||(this._data+=i.utf32ToString(e,t,r),this._data.length>o.PAYLOAD_LIMIT&&(this._data="",this._hitLimit=!0))},e.prototype.unhook=function(e){var t;return this._hitLimit?t=!1:e&&(t=this._handler(this._data,this._params?this._params:new n.Params)),this._params=void 0,this._data="",this._hitLimit=!1,t},e}();t.DcsHandler=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(24),n=r(42),o=[];t.acquireCharAtlas=function(e,t,r,s,a){for(var c=i.generateConfig(s,a,e,r),l=0;l<o.length;l++){var h=(u=o[l]).ownedBy.indexOf(t);if(h>=0){if(i.configEquals(u.config,c))return u.atlas;1===u.ownedBy.length?(u.atlas.dispose(),o.splice(l,1)):u.ownedBy.splice(h,1);break}}for(l=0;l<o.length;l++){var u=o[l];if(i.configEquals(u.config,c))return u.ownedBy.push(t),u.atlas}var f={atlas:new n.DynamicCharAtlas(document,c),config:c,ownedBy:[t]};return o.push(f),f.atlas},t.removeTerminalFromCache=function(e){for(var t=0;t<o.length;t++){var r=o[t].ownedBy.indexOf(e);if(-1!==r){1===o[t].ownedBy.length?(o[t].atlas.dispose(),o.splice(t,1)):o[t].ownedBy.splice(r,1);break}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(3);t.generateConfig=function(e,t,r,i){var n={foreground:i.foreground,background:i.background,cursor:void 0,cursorAccent:void 0,selection:void 0,ansi:i.ansi.slice(0,16)};return{devicePixelRatio:window.devicePixelRatio,scaledCharWidth:e,scaledCharHeight:t,fontFamily:r.fontFamily,fontSize:r.fontSize,fontWeight:r.fontWeight,fontWeightBold:r.fontWeightBold,allowTransparency:r.allowTransparency,colors:n}},t.configEquals=function(e,t){for(var r=0;r<e.colors.ansi.length;r++)if(e.colors.ansi[r].rgba!==t.colors.ansi[r].rgba)return!1;return e.devicePixelRatio===t.devicePixelRatio&&e.fontFamily===t.fontFamily&&e.fontSize===t.fontSize&&e.fontWeight===t.fontWeight&&e.fontWeightBold===t.fontWeightBold&&e.allowTransparency===t.allowTransparency&&e.scaledCharWidth===t.scaledCharWidth&&e.scaledCharHeight===t.scaledCharHeight&&e.colors.foreground===t.colors.foreground&&e.colors.background===t.colors.background},t.is256Color=function(e){return e<i.DEFAULT_COLOR}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(10),n=r(44),o=i.css.toColor("#ffffff"),s=i.css.toColor("#000000"),a=i.css.toColor("#ffffff"),c=i.css.toColor("#000000"),l={css:"rgba(255, 255, 255, 0.3)",rgba:4294967117};t.DEFAULT_ANSI_COLORS=function(){for(var e=[i.css.toColor("#2e3436"),i.css.toColor("#cc0000"),i.css.toColor("#4e9a06"),i.css.toColor("#c4a000"),i.css.toColor("#3465a4"),i.css.toColor("#75507b"),i.css.toColor("#06989a"),i.css.toColor("#d3d7cf"),i.css.toColor("#555753"),i.css.toColor("#ef2929"),i.css.toColor("#8ae234"),i.css.toColor("#fce94f"),i.css.toColor("#729fcf"),i.css.toColor("#ad7fa8"),i.css.toColor("#34e2e2"),i.css.toColor("#eeeeec")],t=[0,95,135,175,215,255],r=0;r<216;r++){var n=t[r/36%6|0],o=t[r/6%6|0],s=t[r%6];e.push({css:i.channels.toCss(n,o,s),rgba:i.channels.toRgba(n,o,s)})}for(r=0;r<24;r++){var a=8+10*r;e.push({css:i.channels.toCss(a,a,a),rgba:i.channels.toRgba(a,a,a)})}return e}();var h=function(){function e(e,r){this.allowTransparency=r;var h=e.createElement("canvas");h.width=1,h.height=1;var u=h.getContext("2d");if(!u)throw new Error("Could not get rendering context");this._ctx=u,this._ctx.globalCompositeOperation="copy",this._litmusColor=this._ctx.createLinearGradient(0,0,1,1),this._contrastCache=new n.ColorContrastCache,this.colors={foreground:o,background:s,cursor:a,cursorAccent:c,selection:l,selectionOpaque:i.color.blend(s,l),ansi:t.DEFAULT_ANSI_COLORS.slice(),contrastCache:this._contrastCache}}return e.prototype.onOptionsChange=function(e){"minimumContrastRatio"===e&&this._contrastCache.clear()},e.prototype.setTheme=function(e){void 0===e&&(e={}),this.colors.foreground=this._parseColor(e.foreground,o),this.colors.background=this._parseColor(e.background,s),this.colors.cursor=this._parseColor(e.cursor,a,!0),this.colors.cursorAccent=this._parseColor(e.cursorAccent,c,!0),this.colors.selection=this._parseColor(e.selection,l,!0),this.colors.selectionOpaque=i.color.blend(this.colors.background,this.colors.selection),this.colors.ansi[0]=this._parseColor(e.black,t.DEFAULT_ANSI_COLORS[0]),this.colors.ansi[1]=this._parseColor(e.red,t.DEFAULT_ANSI_COLORS[1]),this.colors.ansi[2]=this._parseColor(e.green,t.DEFAULT_ANSI_COLORS[2]),this.colors.ansi[3]=this._parseColor(e.yellow,t.DEFAULT_ANSI_COLORS[3]),this.colors.ansi[4]=this._parseColor(e.blue,t.DEFAULT_ANSI_COLORS[4]),this.colors.ansi[5]=this._parseColor(e.magenta,t.DEFAULT_ANSI_COLORS[5]),this.colors.ansi[6]=this._parseColor(e.cyan,t.DEFAULT_ANSI_COLORS[6]),this.colors.ansi[7]=this._parseColor(e.white,t.DEFAULT_ANSI_COLORS[7]),this.colors.ansi[8]=this._parseColor(e.brightBlack,t.DEFAULT_ANSI_COLORS[8]),this.colors.ansi[9]=this._parseColor(e.brightRed,t.DEFAULT_ANSI_COLORS[9]),this.colors.ansi[10]=this._parseColor(e.brightGreen,t.DEFAULT_ANSI_COLORS[10]),this.colors.ansi[11]=this._parseColor(e.brightYellow,t.DEFAULT_ANSI_COLORS[11]),this.colors.ansi[12]=this._parseColor(e.brightBlue,t.DEFAULT_ANSI_COLORS[12]),this.colors.ansi[13]=this._parseColor(e.brightMagenta,t.DEFAULT_ANSI_COLORS[13]),this.colors.ansi[14]=this._parseColor(e.brightCyan,t.DEFAULT_ANSI_COLORS[14]),this.colors.ansi[15]=this._parseColor(e.brightWhite,t.DEFAULT_ANSI_COLORS[15]),this._contrastCache.clear()},e.prototype._parseColor=function(e,t,r){if(void 0===r&&(r=this.allowTransparency),void 0===e)return t;if(this._ctx.fillStyle=this._litmusColor,this._ctx.fillStyle=e,"string"!=typeof this._ctx.fillStyle)return console.warn("Color: "+e+" is invalid using fallback "+t.css),t;this._ctx.fillRect(0,0,1,1);var n=this._ctx.getImageData(0,0,1,1).data;if(255!==n[3]){if(!r)return console.warn("Color: "+e+" is using transparency, but allowTransparency is false. Using fallback "+t.css+"."),t;var o=this._ctx.fillStyle.substring(5,this._ctx.fillStyle.length-1).split(",").map(function(e){return Number(e)}),s=o[0],a=o[1],c=o[2],l=o[3],h=Math.round(255*l);return{rgba:i.channels.toRgba(s,a,c,h),css:i.channels.toCss(s,a,c,h)}}return{css:this._ctx.fillStyle,rgba:i.channels.toRgba(n[0],n[1],n[2],n[3])}},e}();t.ColorManager=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.throwIfFalsy=function(e){if(!e)throw new Error("value must not be falsy");return e}},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),s=r(3),a=r(5),c=function(e){function t(t,r,i){var n=e.call(this)||this;return n.content=0,n.combinedData="",n.fg=t.fg,n.bg=t.bg,n.combinedData=r,n._width=i,n}return n(t,e),t.prototype.isCombined=function(){return 2097152},t.prototype.getWidth=function(){return this._width},t.prototype.getChars=function(){return this.combinedData},t.prototype.getCode=function(){return 2097151},t.prototype.setFromCharData=function(e){throw new Error("not implemented")},t.prototype.getAsCharData=function(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]},t}(o.AttributeData);t.JoinedCellData=c;var l=function(){function e(e){this._bufferService=e,this._characterJoiners=[],this._nextCharacterJoinerId=0,this._workCell=new a.CellData}return e.prototype.registerCharacterJoiner=function(e){var t={id:this._nextCharacterJoinerId++,handler:e};return this._characterJoiners.push(t),t.id},e.prototype.deregisterCharacterJoiner=function(e){for(var t=0;t<this._characterJoiners.length;t++)if(this._characterJoiners[t].id===e)return this._characterJoiners.splice(t,1),!0;return!1},e.prototype.getJoinedCharacters=function(e){if(0===this._characterJoiners.length)return[];var t=this._bufferService.buffer.lines.get(e);if(!t||0===t.length)return[];for(var r=[],i=t.translateToString(!0),n=0,o=0,a=0,c=t.getFg(0),l=t.getBg(0),h=0;h<t.getTrimmedLength();h++)if(t.loadCell(h,this._workCell),0!==this._workCell.getWidth()){if(this._workCell.fg!==c||this._workCell.bg!==l){if(h-n>1)for(var u=this._getJoinedRanges(i,a,o,t,n),f=0;f<u.length;f++)r.push(u[f]);n=h,a=o,c=this._workCell.fg,l=this._workCell.bg}o+=this._workCell.getChars().length||s.WHITESPACE_CELL_CHAR.length}if(this._bufferService.cols-n>1)for(u=this._getJoinedRanges(i,a,o,t,n),f=0;f<u.length;f++)r.push(u[f]);return r},e.prototype._getJoinedRanges=function(t,r,i,n,o){for(var s=t.substring(r,i),a=this._characterJoiners[0].handler(s),c=1;c<this._characterJoiners.length;c++)for(var l=this._characterJoiners[c].handler(s),h=0;h<l.length;h++)e._mergeRanges(a,l[h]);return this._stringRangesToCellRanges(a,n,o),a},e.prototype._stringRangesToCellRanges=function(e,t,r){var i=0,n=!1,o=0,a=e[i];if(a){for(var c=r;c<this._bufferService.cols;c++){var l=t.getWidth(c),h=t.getString(c).length||s.WHITESPACE_CELL_CHAR.length;if(0!==l){if(!n&&a[0]<=o&&(a[0]=c,n=!0),a[1]<=o){if(a[1]=c,!(a=e[++i]))break;a[0]<=o?(a[0]=c,n=!0):n=!1}o+=h}}a&&(a[1]=this._bufferService.cols)}},e._mergeRanges=function(e,t){for(var r=!1,i=0;i<e.length;i++){var n=e[i];if(r){if(t[1]<=n[0])return e[i-1][1]=t[1],e;if(t[1]<=n[1])return e[i-1][1]=Math.max(t[1],n[1]),e.splice(i,1),e;e.splice(i,1),i--}else{if(t[1]<=n[0])return e.splice(i,0,t),e;if(t[1]<=n[1])return n[0]=Math.min(t[0],n[0]),e;t[0]<n[1]&&(n[0]=Math.min(t[0],n[0]),r=!0)}}return r?e[e.length-1][1]=t[1]:e.push(t),e},e}();t.CharacterJoinerRegistry=l},function(e,t,r){"use strict";function i(e,t){var r=t.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]}Object.defineProperty(t,"__esModule",{value:!0}),t.getCoordsRelativeToElement=i,t.getCoords=function(e,t,r,n,o,s,a,c){if(o){var l=i(e,t);if(l)return l[0]=Math.ceil((l[0]+(c?s/2:0))/s),l[1]=Math.ceil(l[1]/a),l[0]=Math.min(Math.max(l[0],1),r+(c?1:0)),l[1]=Math.min(Math.max(l[1],1),n),l}},t.getRawByteCoords=function(e){if(e)return{x:e[0]+32,y:e[1]+32}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this._renderCallback=e}return e.prototype.dispose=function(){this._animationFrame&&(window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)},e.prototype.refresh=function(e,t,r){var i=this;this._rowCount=r,e=void 0!==e?e:0,t=void 0!==t?t:this._rowCount-1,this._rowStart=void 0!==this._rowStart?Math.min(this._rowStart,e):e,this._rowEnd=void 0!==this._rowEnd?Math.max(this._rowEnd,t):t,this._animationFrame||(this._animationFrame=window.requestAnimationFrame(function(){return i._innerRefresh()}))},e.prototype._innerRefresh=function(){void 0!==this._rowStart&&void 0!==this._rowEnd&&void 0!==this._rowCount&&(this._rowStart=Math.max(this._rowStart,0),this._rowEnd=Math.min(this._rowEnd,this._rowCount-1),this._renderCallback(this._rowStart,this._rowEnd),this._rowStart=void 0,this._rowEnd=void 0,this._animationFrame=void 0)},e}();t.RenderDebouncer=i},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._currentDevicePixelRatio=window.devicePixelRatio,t}return n(t,e),t.prototype.setListener=function(e){var t=this;this._listener&&this.clearListener(),this._listener=e,this._outerListener=function(){t._listener&&(t._listener(window.devicePixelRatio,t._currentDevicePixelRatio),t._updateDpr())},this._updateDpr()},t.prototype.dispose=function(){e.prototype.dispose.call(this),this.clearListener()},t.prototype._updateDpr=function(){this._resolutionMediaMatchList&&this._outerListener&&(this._resolutionMediaMatchList.removeListener(this._outerListener),this._currentDevicePixelRatio=window.devicePixelRatio,this._resolutionMediaMatchList=window.matchMedia("screen and (resolution: "+window.devicePixelRatio+"dppx)"),this._resolutionMediaMatchList.addListener(this._outerListener))},t.prototype.clearListener=function(){this._resolutionMediaMatchList&&this._listener&&this._outerListener&&(this._resolutionMediaMatchList.removeListener(this._outerListener),this._resolutionMediaMatchList=void 0,this._listener=void 0,this._outerListener=void 0)},t}(r(2).Disposable);t.ScreenDprMonitor=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clone=function e(t,r){if(void 0===r&&(r=5),"object"!=typeof t)return t;var i=Array.isArray(t)?[]:{};for(var n in t)i[n]=r<=1?t[n]:t[n]?e(t[n],r-1):t[n];return i}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(5),n=r(33),o=r(17),s=r(80),a=function(){function e(e){this._core=new n.Terminal(e),this._addonManager=new s.AddonManager}return Object.defineProperty(e.prototype,"onCursorMove",{get:function(){return this._core.onCursorMove},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onLineFeed",{get:function(){return this._core.onLineFeed},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onSelectionChange",{get:function(){return this._core.onSelectionChange},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onData",{get:function(){return this._core.onData},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onBinary",{get:function(){return this._core.onBinary},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTitleChange",{get:function(){return this._core.onTitleChange},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onScroll",{get:function(){return this._core.onScroll},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onKey",{get:function(){return this._core.onKey},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onRender",{get:function(){return this._core.onRender},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onResize",{get:function(){return this._core.onResize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"element",{get:function(){return this._core.element},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parser",{get:function(){return this._parser||(this._parser=new h(this._core)),this._parser},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"unicode",{get:function(){return new u(this._core)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textarea",{get:function(){return this._core.textarea},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rows",{get:function(){return this._core.rows},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cols",{get:function(){return this._core.cols},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{get:function(){return new c(this._core.buffer)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"markers",{get:function(){return this._core.markers},enumerable:!0,configurable:!0}),e.prototype.blur=function(){this._core.blur()},e.prototype.focus=function(){this._core.focus()},e.prototype.resize=function(e,t){this._verifyIntegers(e,t),this._core.resize(e,t)},e.prototype.open=function(e){this._core.open(e)},e.prototype.attachCustomKeyEventHandler=function(e){this._core.attachCustomKeyEventHandler(e)},e.prototype.registerLinkMatcher=function(e,t,r){return this._core.registerLinkMatcher(e,t,r)},e.prototype.deregisterLinkMatcher=function(e){this._core.deregisterLinkMatcher(e)},e.prototype.registerCharacterJoiner=function(e){return this._core.registerCharacterJoiner(e)},e.prototype.deregisterCharacterJoiner=function(e){this._core.deregisterCharacterJoiner(e)},e.prototype.registerMarker=function(e){return this._verifyIntegers(e),this._core.addMarker(e)},e.prototype.addMarker=function(e){return this.registerMarker(e)},e.prototype.hasSelection=function(){return this._core.hasSelection()},e.prototype.select=function(e,t,r){this._verifyIntegers(e,t,r),this._core.select(e,t,r)},e.prototype.getSelection=function(){return this._core.getSelection()},e.prototype.getSelectionPosition=function(){return this._core.getSelectionPosition()},e.prototype.clearSelection=function(){this._core.clearSelection()},e.prototype.selectAll=function(){this._core.selectAll()},e.prototype.selectLines=function(e,t){this._verifyIntegers(e,t),this._core.selectLines(e,t)},e.prototype.dispose=function(){this._addonManager.dispose(),this._core.dispose()},e.prototype.scrollLines=function(e){this._verifyIntegers(e),this._core.scrollLines(e)},e.prototype.scrollPages=function(e){this._verifyIntegers(e),this._core.scrollPages(e)},e.prototype.scrollToTop=function(){this._core.scrollToTop()},e.prototype.scrollToBottom=function(){this._core.scrollToBottom()},e.prototype.scrollToLine=function(e){this._verifyIntegers(e),this._core.scrollToLine(e)},e.prototype.clear=function(){this._core.clear()},e.prototype.write=function(e,t){this._core.write(e,t)},e.prototype.writeUtf8=function(e,t){this._core.write(e,t)},e.prototype.writeln=function(e,t){this._core.write(e),this._core.write("\r\n",t)},e.prototype.paste=function(e){this._core.paste(e)},e.prototype.getOption=function(e){return this._core.optionsService.getOption(e)},e.prototype.setOption=function(e,t){this._core.optionsService.setOption(e,t)},e.prototype.refresh=function(e,t){this._verifyIntegers(e,t),this._core.refresh(e,t)},e.prototype.reset=function(){this._core.reset()},e.prototype.loadAddon=function(e){return this._addonManager.loadAddon(this,e)},Object.defineProperty(e,"strings",{get:function(){return o},enumerable:!0,configurable:!0}),e.prototype._verifyIntegers=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach(function(e){if(e===1/0||isNaN(e)||e%1!=0)throw new Error("This API only accepts integers")})},e}();t.Terminal=a;var c=function(){function e(e){this._buffer=e}return Object.defineProperty(e.prototype,"cursorY",{get:function(){return this._buffer.y},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cursorX",{get:function(){return this._buffer.x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"viewportY",{get:function(){return this._buffer.ydisp},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"baseY",{get:function(){return this._buffer.ybase},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._buffer.lines.length},enumerable:!0,configurable:!0}),e.prototype.getLine=function(e){var t=this._buffer.lines.get(e);if(t)return new l(t)},e.prototype.getNullCell=function(){return new i.CellData},e}(),l=function(){function e(e){this._line=e}return Object.defineProperty(e.prototype,"isWrapped",{get:function(){return this._line.isWrapped},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._line.length},enumerable:!0,configurable:!0}),e.prototype.getCell=function(e,t){if(!(e<0||e>=this._line.length))return t?(this._line.loadCell(e,t),t):this._line.loadCell(e,new i.CellData)},e.prototype.translateToString=function(e,t,r){return this._line.translateToString(e,t,r)},e}(),h=function(){function e(e){this._core=e}return e.prototype.registerCsiHandler=function(e,t){return this._core.addCsiHandler(e,function(e){return t(e.toArray())})},e.prototype.addCsiHandler=function(e,t){return this.registerCsiHandler(e,t)},e.prototype.registerDcsHandler=function(e,t){return this._core.addDcsHandler(e,function(e,r){return t(e,r.toArray())})},e.prototype.addDcsHandler=function(e,t){return this.registerDcsHandler(e,t)},e.prototype.registerEscHandler=function(e,t){return this._core.addEscHandler(e,t)},e.prototype.addEscHandler=function(e,t){return this.registerEscHandler(e,t)},e.prototype.registerOscHandler=function(e,t){return this._core.addOscHandler(e,t)},e.prototype.addOscHandler=function(e,t){return this.registerOscHandler(e,t)},e}(),u=function(){function e(e){this._core=e}return e.prototype.register=function(e){this._core.unicodeService.register(e)},Object.defineProperty(e.prototype,"versions",{get:function(){return this._core.unicodeService.versions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeVersion",{get:function(){return this._core.unicodeService.activeVersion},set:function(e){this._core.unicodeService.activeVersion=e},enumerable:!0,configurable:!0}),e}()},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(34),s=r(35),a=r(36),c=r(12),l=r(37),h=r(39),u=r(49),f=r(50),_=r(11),d=r(8),p=r(17),v=r(53),g=r(54),y=r(55),b=r(56),m=r(58),S=r(1),C=r(16),w=r(59),E=r(25),L=r(60),A=r(0),R=r(61),x=r(4),k=r(62),D=r(63),T=r(2),O=r(69),M=r(70),P=r(71),H=r(72),I=r(73),B=r(74),F=r(75),j=r(76),W=r(77),q=r(79),U="undefined"!=typeof window?window.document:null,N=function(e){function t(t){void 0===t&&(t={});var r=e.call(this)||this;return r.browser=_,r.mouseEvents=0,r._keyDownHandled=!1,r._blankLine=null,r._onCursorMove=new S.EventEmitter,r._onData=new S.EventEmitter,r._onBinary=new S.EventEmitter,r._onKey=new S.EventEmitter,r._onLineFeed=new S.EventEmitter,r._onRender=new S.EventEmitter,r._onResize=new S.EventEmitter,r._onScroll=new S.EventEmitter,r._onSelectionChange=new S.EventEmitter,r._onTitleChange=new S.EventEmitter,r._onFocus=new S.EventEmitter,r._onBlur=new S.EventEmitter,r.onA11yCharEmitter=new S.EventEmitter,r.onA11yTabEmitter=new S.EventEmitter,r._instantiationService=new I.InstantiationService,r.optionsService=new R.OptionsService(t),r._instantiationService.setService(A.IOptionsService,r.optionsService),r._bufferService=r._instantiationService.createInstance(D.BufferService),r._instantiationService.setService(A.IBufferService,r._bufferService),r._logService=r._instantiationService.createInstance(P.LogService),r._instantiationService.setService(A.ILogService,r._logService),r._coreService=r._instantiationService.createInstance(M.CoreService,function(){return r.scrollToBottom()}),r._instantiationService.setService(A.ICoreService,r._coreService),r._coreService.onData(function(e){return r._onData.fire(e)}),r._coreService.onBinary(function(e){return r._onBinary.fire(e)}),r._coreMouseService=r._instantiationService.createInstance(B.CoreMouseService),r._instantiationService.setService(A.ICoreMouseService,r._coreMouseService),r._dirtyRowService=r._instantiationService.createInstance(H.DirtyRowService),r._instantiationService.setService(A.IDirtyRowService,r._dirtyRowService),r.unicodeService=r._instantiationService.createInstance(W.UnicodeService),r._instantiationService.setService(A.IUnicodeService,r.unicodeService),r._charsetService=r._instantiationService.createInstance(q.CharsetService),r._instantiationService.setService(A.ICharsetService,r._charsetService),r._setupOptionsListeners(),r._setup(),r._writeBuffer=new F.WriteBuffer(function(e){return r._inputHandler.parse(e)}),r}return n(t,e),Object.defineProperty(t.prototype,"options",{get:function(){return this.optionsService.options},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cols",{get:function(){return this._bufferService.cols},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rows",{get:function(){return this._bufferService.rows},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onCursorMove",{get:function(){return this._onCursorMove.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onData",{get:function(){return this._onData.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onBinary",{get:function(){return this._onBinary.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onKey",{get:function(){return this._onKey.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onLineFeed",{get:function(){return this._onLineFeed.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onRender",{get:function(){return this._onRender.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onResize",{get:function(){return this._onResize.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onScroll",{get:function(){return this._onScroll.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onSelectionChange",{get:function(){return this._onSelectionChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onTitleChange",{get:function(){return this._onTitleChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onFocus",{get:function(){return this._onFocus.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onBlur",{get:function(){return this._onBlur.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onA11yChar",{get:function(){return this.onA11yCharEmitter.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onA11yTab",{get:function(){return this.onA11yTabEmitter.event},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){var t,r,i,n;this._isDisposed||(e.prototype.dispose.call(this),null===(t=this._windowsMode)||void 0===t||t.dispose(),this._windowsMode=void 0,null===(r=this._renderService)||void 0===r||r.dispose(),this._customKeyEventHandler=null,this.write=function(){},null===(n=null===(i=this.element)||void 0===i?void 0:i.parentNode)||void 0===n||n.removeChild(this.element))},t.prototype._setup=function(){var e=this;this._customKeyEventHandler=null,this.insertMode=!1,this.bracketedPasteMode=!1,this._userScrolling=!1,this._inputHandler?this._inputHandler.reset():(this._inputHandler=new l.InputHandler(this,this._bufferService,this._charsetService,this._coreService,this._dirtyRowService,this._logService,this.optionsService,this._coreMouseService,this.unicodeService,this._instantiationService),this._inputHandler.onRequestBell(function(){return e.bell()}),this._inputHandler.onRequestRefreshRows(function(t,r){return e.refresh(t,r)}),this._inputHandler.onRequestReset(function(){return e.reset()}),this._inputHandler.onCursorMove(function(){return e._onCursorMove.fire()}),this._inputHandler.onLineFeed(function(){return e._onLineFeed.fire()}),this.register(this._inputHandler)),this.linkifier||(this.linkifier=new u.Linkifier(this._bufferService,this._logService,this.optionsService,this.unicodeService)),this.options.windowsMode&&this._enableWindowsMode()},t.prototype._enableWindowsMode=function(){var e=this;if(!this._windowsMode){var t=[];t.push(this.onLineFeed(w.updateWindowsModeWrappedState.bind(null,this._bufferService))),t.push(this.addCsiHandler({final:"H"},function(){return w.updateWindowsModeWrappedState(e._bufferService),!1})),this._windowsMode={dispose:function(){t.forEach(function(e){return e.dispose()})}}}},Object.defineProperty(t.prototype,"buffer",{get:function(){return this.buffers.active},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"buffers",{get:function(){return this._bufferService.buffers},enumerable:!0,configurable:!0}),t.prototype.focus=function(){this.textarea&&this.textarea.focus({preventScroll:!0})},t.prototype._setupOptionsListeners=function(){var e=this;this.optionsService.onOptionChange(function(t){var r,i,n,o,s;switch(t){case"fontFamily":case"fontSize":null===(r=e._renderService)||void 0===r||r.clear(),null===(i=e._charSizeService)||void 0===i||i.measure();break;case"cursorBlink":case"cursorStyle":e.refresh(e.buffer.y,e.buffer.y);break;case"drawBoldTextInBrightColors":case"letterSpacing":case"lineHeight":case"fontWeight":case"fontWeightBold":case"minimumContrastRatio":e._renderService&&(e._renderService.clear(),e._renderService.onResize(e.cols,e.rows),e.refresh(0,e.rows-1));break;case"rendererType":e._renderService&&(e._renderService.setRenderer(e._createRenderer()),e._renderService.onResize(e.cols,e.rows));break;case"scrollback":e.buffers.resize(e.cols,e.rows),null===(n=e.viewport)||void 0===n||n.syncScrollArea();break;case"screenReaderMode":e.optionsService.options.screenReaderMode?!e._accessibilityManager&&e._renderService&&(e._accessibilityManager=new y.AccessibilityManager(e,e._renderService)):(null===(o=e._accessibilityManager)||void 0===o||o.dispose(),e._accessibilityManager=null);break;case"tabStopWidth":e.buffers.setupTabStops();break;case"theme":e._setTheme(e.optionsService.options.theme);break;case"windowsMode":e.optionsService.options.windowsMode?e._enableWindowsMode():(null===(s=e._windowsMode)||void 0===s||s.dispose(),e._windowsMode=void 0)}})},t.prototype._onTextAreaFocus=function(e){this.sendFocus&&this._coreService.triggerDataEvent(c.C0.ESC+"[I"),this.updateCursorStyle(e),this.element.classList.add("focus"),this.showCursor(),this._onFocus.fire()},t.prototype.blur=function(){return this.textarea.blur()},t.prototype._onTextAreaBlur=function(){this.textarea.value="",this.refresh(this.buffer.y,this.buffer.y),this.sendFocus&&this._coreService.triggerDataEvent(c.C0.ESC+"[O"),this.element.classList.remove("focus"),this._onBlur.fire()},t.prototype._initGlobal=function(){var e=this;this._bindKeys(),this.register(d.addDisposableDomListener(this.element,"copy",function(t){e.hasSelection()&&a.copyHandler(t,e._selectionService)}));var t=function(t){return a.handlePasteEvent(t,e.textarea,e.bracketedPasteMode,e._coreService)};this.register(d.addDisposableDomListener(this.textarea,"paste",t)),this.register(d.addDisposableDomListener(this.element,"paste",t)),_.isFirefox?this.register(d.addDisposableDomListener(this.element,"mousedown",function(t){2===t.button&&a.rightClickHandler(t,e.textarea,e.screenElement,e._selectionService,e.options.rightClickSelectsWord)})):this.register(d.addDisposableDomListener(this.element,"contextmenu",function(t){a.rightClickHandler(t,e.textarea,e.screenElement,e._selectionService,e.options.rightClickSelectsWord)})),_.isLinux&&this.register(d.addDisposableDomListener(this.element,"auxclick",function(t){1===t.button&&a.moveTextAreaUnderMouseCursor(t,e.textarea,e.screenElement)}))},t.prototype._bindKeys=function(){var e=this;this.register(d.addDisposableDomListener(this.textarea,"keyup",function(t){return e._keyUp(t)},!0)),this.register(d.addDisposableDomListener(this.textarea,"keydown",function(t){return e._keyDown(t)},!0)),this.register(d.addDisposableDomListener(this.textarea,"keypress",function(t){return e._keyPress(t)},!0)),this.register(d.addDisposableDomListener(this.textarea,"compositionstart",function(){return e._compositionHelper.compositionstart()})),this.register(d.addDisposableDomListener(this.textarea,"compositionupdate",function(t){return e._compositionHelper.compositionupdate(t)})),this.register(d.addDisposableDomListener(this.textarea,"compositionend",function(){return e._compositionHelper.compositionend()})),this.register(this.onRender(function(){return e._compositionHelper.updateCompositionElements()})),this.register(this.onRender(function(t){return e._queueLinkification(t.start,t.end)}))},t.prototype.open=function(e){var t=this;if(!e)throw new Error("Terminal requires a parent element.");U.body.contains(e)||this._logService.warn("Terminal.open was called on an element that was not attached to the DOM"),this._document=e.ownerDocument,this.element=this._document.createElement("div"),this.element.dir="ltr",this.element.classList.add("terminal"),this.element.classList.add("xterm"),this.element.setAttribute("tabindex","0"),e.appendChild(this.element);var r=U.createDocumentFragment();this._viewportElement=U.createElement("div"),this._viewportElement.classList.add("xterm-viewport"),r.appendChild(this._viewportElement),this._viewportScrollArea=U.createElement("div"),this._viewportScrollArea.classList.add("xterm-scroll-area"),this._viewportElement.appendChild(this._viewportScrollArea),this.screenElement=U.createElement("div"),this.screenElement.classList.add("xterm-screen"),this._helperContainer=U.createElement("div"),this._helperContainer.classList.add("xterm-helpers"),this.screenElement.appendChild(this._helperContainer),r.appendChild(this.screenElement),this.textarea=U.createElement("textarea"),this.textarea.classList.add("xterm-helper-textarea"),this.textarea.setAttribute("aria-label",p.promptLabel),this.textarea.setAttribute("aria-multiline","false"),this.textarea.setAttribute("autocorrect","off"),this.textarea.setAttribute("autocapitalize","off"),this.textarea.setAttribute("spellcheck","false"),this.textarea.tabIndex=0,this.register(d.addDisposableDomListener(this.textarea,"focus",function(e){return t._onTextAreaFocus(e)})),this.register(d.addDisposableDomListener(this.textarea,"blur",function(){return t._onTextAreaBlur()})),this._helperContainer.appendChild(this.textarea);var i=this._instantiationService.createInstance(j.CoreBrowserService,this.textarea);this._instantiationService.setService(x.ICoreBrowserService,i),this._charSizeService=this._instantiationService.createInstance(k.CharSizeService,this._document,this._helperContainer),this._instantiationService.setService(x.ICharSizeService,this._charSizeService),this._compositionView=U.createElement("div"),this._compositionView.classList.add("composition-view"),this._compositionHelper=this._instantiationService.createInstance(o.CompositionHelper,this.textarea,this._compositionView),this._helperContainer.appendChild(this._compositionView),this.element.appendChild(r),this._theme=this.options.theme||this._theme,this.options.theme=void 0,this._colorManager=new E.ColorManager(U,this.options.allowTransparency),this.optionsService.onOptionChange(function(e){return t._colorManager.onOptionsChange(e)}),this._colorManager.setTheme(this._theme);var n=this._createRenderer();this._renderService=this._instantiationService.createInstance(L.RenderService,n,this.rows,this.screenElement),this._instantiationService.setService(x.IRenderService,this._renderService),this._renderService.onRender(function(e){return t._onRender.fire(e)}),this.onResize(function(e){return t._renderService.resize(e.cols,e.rows)}),this._soundService=this._instantiationService.createInstance(v.SoundService),this._instantiationService.setService(x.ISoundService,this._soundService),this._mouseService=this._instantiationService.createInstance(O.MouseService),this._instantiationService.setService(x.IMouseService,this._mouseService),this.viewport=this._instantiationService.createInstance(s.Viewport,function(e,r){return t.scrollLines(e,r)},this._viewportElement,this._viewportScrollArea),this.viewport.onThemeChange(this._colorManager.colors),this.register(this.viewport),this.register(this.onCursorMove(function(){return t._renderService.onCursorMove()})),this.register(this.onResize(function(){return t._renderService.onResize(t.cols,t.rows)})),this.register(this.onBlur(function(){return t._renderService.onBlur()})),this.register(this.onFocus(function(){return t._renderService.onFocus()})),this.register(this._renderService.onDimensionsChange(function(){return t.viewport.syncScrollArea()})),this._selectionService=this._instantiationService.createInstance(f.SelectionService,function(e,r){return t.scrollLines(e,r)},this.element,this.screenElement),this._instantiationService.setService(x.ISelectionService,this._selectionService),this.register(this._selectionService.onSelectionChange(function(){return t._onSelectionChange.fire()})),this.register(this._selectionService.onRedrawRequest(function(e){return t._renderService.onSelectionChanged(e.start,e.end,e.columnSelectMode)})),this.register(this._selectionService.onLinuxMouseSelection(function(e){t.textarea.value=e,t.textarea.focus(),t.textarea.select()})),this.register(this.onScroll(function(){t.viewport.syncScrollArea(),t._selectionService.refresh()})),this.register(d.addDisposableDomListener(this._viewportElement,"scroll",function(){return t._selectionService.refresh()})),this._mouseZoneManager=this._instantiationService.createInstance(g.MouseZoneManager,this.element,this.screenElement),this.register(this._mouseZoneManager),this.register(this.onScroll(function(){return t._mouseZoneManager.clearAll()})),this.linkifier.attachToDom(this.element,this._mouseZoneManager),this.register(d.addDisposableDomListener(this.element,"mousedown",function(e){return t._selectionService.onMouseDown(e)})),this.mouseEvents?(this._selectionService.disable(),this.element.classList.add("enable-mouse-events")):this._selectionService.enable(),this.options.screenReaderMode&&(this._accessibilityManager=new y.AccessibilityManager(this,this._renderService)),this._charSizeService.measure(),this.refresh(0,this.rows-1),this._initGlobal(),this.bindMouse()},t.prototype._createRenderer=function(){switch(this.options.rendererType){case"canvas":return this._instantiationService.createInstance(h.Renderer,this._colorManager.colors,this.screenElement,this.linkifier);case"dom":return this._instantiationService.createInstance(b.DomRenderer,this._colorManager.colors,this.element,this.screenElement,this._viewportElement,this.linkifier);default:throw new Error('Unrecognized rendererType "'+this.options.rendererType+'"')}},t.prototype._setTheme=function(e){var t,r,i;this._theme=e,null===(t=this._colorManager)||void 0===t||t.setTheme(e),null===(r=this._renderService)||void 0===r||r.setColors(this._colorManager.colors),null===(i=this.viewport)||void 0===i||i.onThemeChange(this._colorManager.colors)},t.prototype.bindMouse=function(){var e=this,t=this,r=this.element;function i(e){var r,i,n;if(!(r=t._mouseService.getRawByteCoords(e,t.screenElement,t.cols,t.rows)))return!1;switch(e.overrideType||e.type){case"mousemove":n=32,void 0===e.buttons?(i=3,void 0!==e.button&&(i=e.button<3?e.button:3)):i=1&e.buttons?0:4&e.buttons?1:2&e.buttons?2:3;break;case"mouseup":n=0,i=e.button<3?e.button:3;break;case"mousedown":n=1,i=e.button<3?e.button:3;break;case"wheel":0!==e.deltaY&&(n=e.deltaY<0?0:1),i=4;break;default:return!1}return!(void 0===n||void 0===i||i>4)&&t._coreMouseService.triggerMouseEvent({col:r.x-33,row:r.y-33,button:i,action:n,ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey})}var n={mouseup:null,wheel:null,mousedrag:null,mousemove:null},o=function(t){return i(t),t.buttons||(e._document.removeEventListener("mouseup",n.mouseup),n.mousedrag&&e._document.removeEventListener("mousemove",n.mousedrag)),e.cancel(t)},s=function(t){return i(t),t.preventDefault(),e.cancel(t)},a=function(e){e.buttons&&i(e)},l=function(e){e.buttons||i(e)};this._coreMouseService.onProtocolChange(function(t){e.mouseEvents=t,t?("debug"===e.optionsService.options.logLevel&&e._logService.debug("Binding to mouse events:",e._coreMouseService.explainEvents(t)),e.element.classList.add("enable-mouse-events"),e._selectionService.disable()):(e._logService.debug("Unbinding from mouse events."),e.element.classList.remove("enable-mouse-events"),e._selectionService.enable()),8&t?n.mousemove||(r.addEventListener("mousemove",l),n.mousemove=l):(r.removeEventListener("mousemove",n.mousemove),n.mousemove=null),16&t?n.wheel||(r.addEventListener("wheel",s),n.wheel=s):(r.removeEventListener("wheel",n.wheel),n.wheel=null),2&t?n.mouseup||(n.mouseup=o):(e._document.removeEventListener("mouseup",n.mouseup),n.mouseup=null),4&t?n.mousedrag||(n.mousedrag=a):(e._document.removeEventListener("mousemove",n.mousedrag),n.mousedrag=null)}),this._coreMouseService.activeProtocol=this._coreMouseService.activeProtocol,this.register(d.addDisposableDomListener(r,"mousedown",function(t){if(t.preventDefault(),e.focus(),e.mouseEvents&&!e._selectionService.shouldForceSelection(t))return i(t),n.mouseup&&e._document.addEventListener("mouseup",n.mouseup),n.mousedrag&&e._document.addEventListener("mousemove",n.mousedrag),e.cancel(t)})),this.register(d.addDisposableDomListener(r,"wheel",function(t){if(n.wheel);else if(!e.buffer.hasScrollback){var r=e.viewport.getLinesScrolled(t);if(0===r)return;for(var i=c.C0.ESC+(e._coreService.decPrivateModes.applicationCursorKeys?"O":"[")+(t.deltaY<0?"A":"B"),o="",s=0;s<Math.abs(r);s++)o+=i;e._coreService.triggerDataEvent(o,!0)}})),this.register(d.addDisposableDomListener(r,"wheel",function(t){if(!n.wheel)return e.viewport.onWheel(t)?void 0:e.cancel(t)})),this.register(d.addDisposableDomListener(r,"touchstart",function(t){if(!e.mouseEvents)return e.viewport.onTouchStart(t),e.cancel(t)})),this.register(d.addDisposableDomListener(r,"touchmove",function(t){if(!e.mouseEvents)return e.viewport.onTouchMove(t)?void 0:e.cancel(t)}))},t.prototype.refresh=function(e,t){var r;null===(r=this._renderService)||void 0===r||r.refreshRows(e,t)},t.prototype._queueLinkification=function(e,t){var r;null===(r=this.linkifier)||void 0===r||r.linkifyRows(e,t)},t.prototype.updateCursorStyle=function(e){this._selectionService&&this._selectionService.shouldColumnSelect(e)?this.element.classList.add("column-select"):this.element.classList.remove("column-select")},t.prototype.showCursor=function(){this._coreService.isCursorInitialized||(this._coreService.isCursorInitialized=!0,this.refresh(this.buffer.y,this.buffer.y))},t.prototype.scroll=function(e,t){var r;void 0===t&&(t=!1),(r=this._blankLine)&&r.length===this.cols&&r.getFg(0)===e.fg&&r.getBg(0)===e.bg||(r=this.buffer.getBlankLine(e,t),this._blankLine=r),r.isWrapped=t;var i=this.buffer.ybase+this.buffer.scrollTop,n=this.buffer.ybase+this.buffer.scrollBottom;if(0===this.buffer.scrollTop){var o=this.buffer.lines.isFull;n===this.buffer.lines.length-1?o?this.buffer.lines.recycle().copyFrom(r):this.buffer.lines.push(r.clone()):this.buffer.lines.splice(n+1,0,r.clone()),o?this._userScrolling&&(this.buffer.ydisp=Math.max(this.buffer.ydisp-1,0)):(this.buffer.ybase++,this._userScrolling||this.buffer.ydisp++)}else{var s=n-i+1;this.buffer.lines.shiftElements(i+1,s-1,-1),this.buffer.lines.set(n,r.clone())}this._userScrolling||(this.buffer.ydisp=this.buffer.ybase),this._dirtyRowService.markRangeDirty(this.buffer.scrollTop,this.buffer.scrollBottom),this._onScroll.fire(this.buffer.ydisp)},t.prototype.scrollLines=function(e,t){if(e<0){if(0===this.buffer.ydisp)return;this._userScrolling=!0}else e+this.buffer.ydisp>=this.buffer.ybase&&(this._userScrolling=!1);var r=this.buffer.ydisp;this.buffer.ydisp=Math.max(Math.min(this.buffer.ydisp+e,this.buffer.ybase),0),r!==this.buffer.ydisp&&(t||this._onScroll.fire(this.buffer.ydisp),this.refresh(0,this.rows-1))},t.prototype.scrollPages=function(e){this.scrollLines(e*(this.rows-1))},t.prototype.scrollToTop=function(){this.scrollLines(-this.buffer.ydisp)},t.prototype.scrollToBottom=function(){this.scrollLines(this.buffer.ybase-this.buffer.ydisp)},t.prototype.scrollToLine=function(e){var t=e-this.buffer.ydisp;0!==t&&this.scrollLines(t)},t.prototype.paste=function(e){a.paste(e,this.textarea,this.bracketedPasteMode,this._coreService)},t.prototype.attachCustomKeyEventHandler=function(e){this._customKeyEventHandler=e},t.prototype.addEscHandler=function(e,t){return this._inputHandler.addEscHandler(e,t)},t.prototype.addDcsHandler=function(e,t){return this._inputHandler.addDcsHandler(e,t)},t.prototype.addCsiHandler=function(e,t){return this._inputHandler.addCsiHandler(e,t)},t.prototype.addOscHandler=function(e,t){return this._inputHandler.addOscHandler(e,t)},t.prototype.registerLinkMatcher=function(e,t,r){var i=this.linkifier.registerLinkMatcher(e,t,r);return this.refresh(0,this.rows-1),i},t.prototype.deregisterLinkMatcher=function(e){this.linkifier.deregisterLinkMatcher(e)&&this.refresh(0,this.rows-1)},t.prototype.registerCharacterJoiner=function(e){var t=this._renderService.registerCharacterJoiner(e);return this.refresh(0,this.rows-1),t},t.prototype.deregisterCharacterJoiner=function(e){this._renderService.deregisterCharacterJoiner(e)&&this.refresh(0,this.rows-1)},Object.defineProperty(t.prototype,"markers",{get:function(){return this.buffer.markers},enumerable:!0,configurable:!0}),t.prototype.addMarker=function(e){if(this.buffer===this.buffers.normal)return this.buffer.addMarker(this.buffer.ybase+this.buffer.y+e)},t.prototype.hasSelection=function(){return!!this._selectionService&&this._selectionService.hasSelection},t.prototype.select=function(e,t,r){this._selectionService.setSelection(e,t,r)},t.prototype.getSelection=function(){return this._selectionService?this._selectionService.selectionText:""},t.prototype.getSelectionPosition=function(){if(this._selectionService.hasSelection)return{startColumn:this._selectionService.selectionStart[0],startRow:this._selectionService.selectionStart[1],endColumn:this._selectionService.selectionEnd[0],endRow:this._selectionService.selectionEnd[1]}},t.prototype.clearSelection=function(){var e;null===(e=this._selectionService)||void 0===e||e.clearSelection()},t.prototype.selectAll=function(){var e;null===(e=this._selectionService)||void 0===e||e.selectAll()},t.prototype.selectLines=function(e,t){var r;null===(r=this._selectionService)||void 0===r||r.selectLines(e,t)},t.prototype._keyDown=function(e){if(this._keyDownHandled=!1,this._customKeyEventHandler&&!1===this._customKeyEventHandler(e))return!1;if(!this._compositionHelper.keydown(e))return this.buffer.ybase!==this.buffer.ydisp&&this.scrollToBottom(),!1;var t=m.evaluateKeyboardEvent(e,this._coreService.decPrivateModes.applicationCursorKeys,this.browser.isMac,this.options.macOptionIsMeta);if(this.updateCursorStyle(e),3===t.type||2===t.type){var r=this.rows-1;return this.scrollLines(2===t.type?-r:r),this.cancel(e,!0)}return 1===t.type&&this.selectAll(),!!this._isThirdLevelShift(this.browser,e)||(t.cancel&&this.cancel(e,!0),!t.key||(t.key!==c.C0.ETX&&t.key!==c.C0.CR||(this.textarea.value=""),this._onKey.fire({key:t.key,domEvent:e}),this.showCursor(),this._coreService.triggerDataEvent(t.key,!0),this.optionsService.options.screenReaderMode?void(this._keyDownHandled=!0):this.cancel(e,!0)))},t.prototype._isThirdLevelShift=function(e,t){var r=e.isMac&&!this.options.macOptionIsMeta&&t.altKey&&!t.ctrlKey&&!t.metaKey||e.isWindows&&t.altKey&&t.ctrlKey&&!t.metaKey;return"keypress"===t.type?r:r&&(!t.keyCode||t.keyCode>47)},t.prototype._keyUp=function(e){this._customKeyEventHandler&&!1===this._customKeyEventHandler(e)||(function(e){return 16===e.keyCode||17===e.keyCode||18===e.keyCode}(e)||this.focus(),this.updateCursorStyle(e))},t.prototype._keyPress=function(e){var t;if(this._keyDownHandled)return!1;if(this._customKeyEventHandler&&!1===this._customKeyEventHandler(e))return!1;if(this.cancel(e),e.charCode)t=e.charCode;else if(null===e.which||void 0===e.which)t=e.keyCode;else{if(0===e.which||0===e.charCode)return!1;t=e.which}return!(!t||(e.altKey||e.ctrlKey||e.metaKey)&&!this._isThirdLevelShift(this.browser,e))&&(t=String.fromCharCode(t),this._onKey.fire({key:t,domEvent:e}),this.showCursor(),this._coreService.triggerDataEvent(t,!0),!0)},t.prototype.bell=function(){var e=this;this._soundBell()&&this._soundService.playBellSound(),this._visualBell()&&(this.element.classList.add("visual-bell-active"),clearTimeout(this._visualBellTimer),this._visualBellTimer=window.setTimeout(function(){e.element.classList.remove("visual-bell-active")},200))},t.prototype.resize=function(e,t){var r,i;isNaN(e)||isNaN(t)||(e!==this.cols||t!==this.rows?(e<D.MINIMUM_COLS&&(e=D.MINIMUM_COLS),t<D.MINIMUM_ROWS&&(t=D.MINIMUM_ROWS),this.buffers.resize(e,t),this._bufferService.resize(e,t),this.buffers.setupTabStops(this.cols),null===(r=this._charSizeService)||void 0===r||r.measure(),null===(i=this.viewport)||void 0===i||i.syncScrollArea(!0),this.refresh(0,this.rows-1),this._onResize.fire({cols:e,rows:t})):this._charSizeService&&!this._charSizeService.hasValidSize&&this._charSizeService.measure())},t.prototype.clear=function(){if(0!==this.buffer.ybase||0!==this.buffer.y){this.buffer.lines.set(0,this.buffer.lines.get(this.buffer.ybase+this.buffer.y)),this.buffer.lines.length=1,this.buffer.ydisp=0,this.buffer.ybase=0,this.buffer.y=0;for(var e=1;e<this.rows;e++)this.buffer.lines.push(this.buffer.getBlankLine(C.DEFAULT_ATTR_DATA));this.refresh(0,this.rows-1),this._onScroll.fire(this.buffer.ydisp)}},t.prototype.is=function(e){return 0===(this.options.termName+"").indexOf(e)},t.prototype.handleTitle=function(e){this._onTitleChange.fire(e)},t.prototype.reset=function(){var e,t;this.options.rows=this.rows,this.options.cols=this.cols;var r=this._customKeyEventHandler,i=this._userScrolling;this._setup(),this._bufferService.reset(),this._charsetService.reset(),this._coreService.reset(),this._coreMouseService.reset(),null===(e=this._selectionService)||void 0===e||e.reset(),this._customKeyEventHandler=r,this._userScrolling=i,this.refresh(0,this.rows-1),null===(t=this.viewport)||void 0===t||t.syncScrollArea()},t.prototype.cancel=function(e,t){if(this.options.cancelEvents||t)return e.preventDefault(),e.stopPropagation(),!1},t.prototype._visualBell=function(){return!1},t.prototype._soundBell=function(){return"sound"===this.options.bellStyle},t.prototype.write=function(e,t){this._writeBuffer.write(e,t)},t.prototype.writeSync=function(e){this._writeBuffer.writeSync(e)},t}(T.Disposable);t.Terminal=N},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(4),s=r(0),a=function(){function e(e,t,r,i,n,o){this._textarea=e,this._compositionView=t,this._bufferService=r,this._optionsService=i,this._charSizeService=n,this._coreService=o,this._isComposing=!1,this._isSendingComposition=!1,this._compositionPosition={start:0,end:0}}return e.prototype.compositionstart=function(){this._isComposing=!0,this._compositionPosition.start=this._textarea.value.length,this._compositionView.textContent="",this._compositionView.classList.add("active")},e.prototype.compositionupdate=function(e){var t=this;this._compositionView.textContent=e.data,this.updateCompositionElements(),setTimeout(function(){t._compositionPosition.end=t._textarea.value.length},0)},e.prototype.compositionend=function(){this._finalizeComposition(!0)},e.prototype.keydown=function(e){if(this._isComposing||this._isSendingComposition){if(229===e.keyCode)return!1;if(16===e.keyCode||17===e.keyCode||18===e.keyCode)return!1;this._finalizeComposition(!1)}return 229!==e.keyCode||(this._handleAnyTextareaChanges(),!1)},e.prototype._finalizeComposition=function(e){var t=this;if(this._compositionView.classList.remove("active"),this._isComposing=!1,this._clearTextareaPosition(),e){var r={start:this._compositionPosition.start,end:this._compositionPosition.end};this._isSendingComposition=!0,setTimeout(function(){if(t._isSendingComposition){t._isSendingComposition=!1;var e=void 0;e=t._isComposing?t._textarea.value.substring(r.start,r.end):t._textarea.value.substring(r.start),t._coreService.triggerDataEvent(e,!0)}},0)}else{this._isSendingComposition=!1;var i=this._textarea.value.substring(this._compositionPosition.start,this._compositionPosition.end);this._coreService.triggerDataEvent(i,!0)}},e.prototype._handleAnyTextareaChanges=function(){var e=this,t=this._textarea.value;setTimeout(function(){if(!e._isComposing){var r=e._textarea.value.replace(t,"");r.length>0&&e._coreService.triggerDataEvent(r,!0)}},0)},e.prototype.updateCompositionElements=function(e){var t=this;if(this._isComposing){if(this._bufferService.buffer.isCursorInViewport){var r=Math.ceil(this._charSizeService.height*this._optionsService.options.lineHeight),i=this._bufferService.buffer.y*r,n=this._bufferService.buffer.x*this._charSizeService.width;this._compositionView.style.left=n+"px",this._compositionView.style.top=i+"px",this._compositionView.style.height=r+"px",this._compositionView.style.lineHeight=r+"px",this._compositionView.style.fontFamily=this._optionsService.options.fontFamily,this._compositionView.style.fontSize=this._optionsService.options.fontSize+"px";var o=this._compositionView.getBoundingClientRect();this._textarea.style.left=n+"px",this._textarea.style.top=i+"px",this._textarea.style.width=o.width+"px",this._textarea.style.height=o.height+"px",this._textarea.style.lineHeight=o.height+"px"}e||setTimeout(function(){return t.updateCompositionElements(!0)},0)}},e.prototype._clearTextareaPosition=function(){this._textarea.style.left="",this._textarea.style.top=""},e=i([n(2,s.IBufferService),n(3,s.IOptionsService),n(4,o.ICharSizeService),n(5,s.ICoreService)],e)}();t.CompositionHelper=a},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),c=r(8),l=r(4),h=r(0),u=15,f=function(e){function t(t,r,i,n,o,s,a){var l=e.call(this)||this;return l._scrollLines=t,l._viewportElement=r,l._scrollArea=i,l._bufferService=n,l._optionsService=o,l._charSizeService=s,l._renderService=a,l.scrollBarWidth=0,l._currentRowHeight=0,l._lastRecordedBufferLength=0,l._lastRecordedViewportHeight=0,l._lastRecordedBufferHeight=0,l._lastTouchY=0,l._lastScrollTop=0,l._wheelPartialScroll=0,l._refreshAnimationFrame=null,l._ignoreNextScrollEvent=!1,l.scrollBarWidth=l._viewportElement.offsetWidth-l._scrollArea.offsetWidth||u,l.register(c.addDisposableDomListener(l._viewportElement,"scroll",l._onScroll.bind(l))),setTimeout(function(){return l.syncScrollArea()},0),l}return n(t,e),t.prototype.onThemeChange=function(e){this._viewportElement.style.backgroundColor=e.background.css},t.prototype._refresh=function(e){var t=this;if(e)return this._innerRefresh(),void(null!==this._refreshAnimationFrame&&cancelAnimationFrame(this._refreshAnimationFrame));null===this._refreshAnimationFrame&&(this._refreshAnimationFrame=requestAnimationFrame(function(){return t._innerRefresh()}))},t.prototype._innerRefresh=function(){if(this._charSizeService.height>0){this._currentRowHeight=this._renderService.dimensions.scaledCellHeight/window.devicePixelRatio,this._lastRecordedViewportHeight=this._viewportElement.offsetHeight;var e=Math.round(this._currentRowHeight*this._lastRecordedBufferLength)+(this._lastRecordedViewportHeight-this._renderService.dimensions.canvasHeight);this._lastRecordedBufferHeight!==e&&(this._lastRecordedBufferHeight=e,this._scrollArea.style.height=this._lastRecordedBufferHeight+"px")}var t=this._bufferService.buffer.ydisp*this._currentRowHeight;this._viewportElement.scrollTop!==t&&(this._ignoreNextScrollEvent=!0,this._viewportElement.scrollTop=t),this._refreshAnimationFrame=null},t.prototype.syncScrollArea=function(e){if(void 0===e&&(e=!1),this._lastRecordedBufferLength!==this._bufferService.buffer.lines.length)return this._lastRecordedBufferLength=this._bufferService.buffer.lines.length,void this._refresh(e);if(this._lastRecordedViewportHeight===this._renderService.dimensions.canvasHeight){var t=this._bufferService.buffer.ydisp*this._currentRowHeight;this._lastScrollTop===t&&this._lastScrollTop===this._viewportElement.scrollTop&&this._renderService.dimensions.scaledCellHeight/window.devicePixelRatio===this._currentRowHeight||this._refresh(e)}else this._refresh(e)},t.prototype._onScroll=function(e){if(this._lastScrollTop=this._viewportElement.scrollTop,this._viewportElement.offsetParent)if(this._ignoreNextScrollEvent)this._ignoreNextScrollEvent=!1;else{var t=Math.round(this._lastScrollTop/this._currentRowHeight)-this._bufferService.buffer.ydisp;this._scrollLines(t,!0)}},t.prototype._bubbleScroll=function(e,t){var r=this._viewportElement.scrollTop+this._lastRecordedViewportHeight;return!(t<0&&0!==this._viewportElement.scrollTop||t>0&&r<this._lastRecordedBufferHeight)||(e.cancelable&&e.preventDefault(),!1)},t.prototype.onWheel=function(e){var t=this._getPixelsScrolled(e);return 0!==t&&(this._viewportElement.scrollTop+=t,this._bubbleScroll(e,t))},t.prototype._getPixelsScrolled=function(e){if(0===e.deltaY)return 0;var t=this._applyScrollModifier(e.deltaY,e);return e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._currentRowHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._currentRowHeight*this._bufferService.rows),t},t.prototype.getLinesScrolled=function(e){if(0===e.deltaY)return 0;var t=this._applyScrollModifier(e.deltaY,e);return e.deltaMode===WheelEvent.DOM_DELTA_PIXEL?(t/=this._currentRowHeight+0,this._wheelPartialScroll+=t,t=Math.floor(Math.abs(this._wheelPartialScroll))*(this._wheelPartialScroll>0?1:-1),this._wheelPartialScroll%=1):e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._bufferService.rows),t},t.prototype._applyScrollModifier=function(e,t){var r=this._optionsService.options.fastScrollModifier;return"alt"===r&&t.altKey||"ctrl"===r&&t.ctrlKey||"shift"===r&&t.shiftKey?e*this._optionsService.options.fastScrollSensitivity*this._optionsService.options.scrollSensitivity:e*this._optionsService.options.scrollSensitivity},t.prototype.onTouchStart=function(e){this._lastTouchY=e.touches[0].pageY},t.prototype.onTouchMove=function(e){var t=this._lastTouchY-e.touches[0].pageY;return this._lastTouchY=e.touches[0].pageY,0!==t&&(this._viewportElement.scrollTop+=t,this._bubbleScroll(e,t))},t=o([s(3,h.IBufferService),s(4,h.IOptionsService),s(5,l.ICharSizeService),s(6,l.IRenderService)],t)}(a.Disposable);t.Viewport=f},function(e,t,r){"use strict";function i(e){return e.replace(/\r?\n/g,"\r")}function n(e,t){return t?"[200~"+e+"[201~":e}function o(e,t,r,o){e=n(e=i(e),r),o.triggerDataEvent(e,!0),t.value=""}function s(e,t,r){var i=r.getBoundingClientRect(),n=e.clientX-i.left-10,o=e.clientY-i.top-10;t.style.position="absolute",t.style.width="20px",t.style.height="20px",t.style.left=n+"px",t.style.top=o+"px",t.style.zIndex="1000",t.focus(),setTimeout(function(){t.style.position="",t.style.width="",t.style.height="",t.style.left="",t.style.top="",t.style.zIndex=""},200)}Object.defineProperty(t,"__esModule",{value:!0}),t.prepareTextForTerminal=i,t.bracketTextForPaste=n,t.copyHandler=function(e,t){e.clipboardData&&e.clipboardData.setData("text/plain",t.selectionText),e.preventDefault()},t.handlePasteEvent=function(e,t,r,i){e.stopPropagation(),e.clipboardData&&o(e.clipboardData.getData("text/plain"),t,r,i)},t.paste=o,t.moveTextAreaUnderMouseCursor=s,t.rightClickHandler=function(e,t,r,i,n){s(e,t,r),n&&!i.isClickInSelection(e)&&i.selectWordAtCursor(e),t.value=i.selectionText,t.select()}},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(12),s=r(18),a=r(38),c=r(2),l=r(15),h=r(7),u=r(16),f=r(1),_=r(3),d=r(5),p=r(6),v=r(20),g=r(22),y=r(4),b={"(":0,")":1,"*":2,"+":3,"-":1,".":2};function m(e,t){if(e>24)return t.setWinLines||!1;switch(e){case 1:return!!t.restoreWin;case 2:return!!t.minimizeWin;case 3:return!!t.setWinPosition;case 4:return!!t.setWinSizePixels;case 5:return!!t.raiseWin;case 6:return!!t.lowerWin;case 7:return!!t.refreshWin;case 8:return!!t.setWinSizeChars;case 9:return!!t.maximizeWin;case 10:return!!t.fullscreenWin;case 11:return!!t.getWinState;case 13:return!!t.getWinPosition;case 14:return!!t.getWinSizePixels;case 15:return!!t.getScreenSizePixels;case 16:return!!t.getCellSizePixels;case 18:return!!t.getWinSizeChars;case 19:return!!t.getScreenSizeChars;case 20:return!!t.getIconTitle;case 21:return!!t.getWinTitle;case 22:return!!t.pushTitle;case 23:return!!t.popTitle;case 24:return!!t.setWinLines}return!1}var S=function(){function e(e,t,r,i){this._bufferService=e,this._coreService=t,this._logService=r,this._optionsService=i,this._data=new Uint32Array(0)}return e.prototype.hook=function(e){this._data=new Uint32Array(0)},e.prototype.put=function(e,t,r){this._data=l.concat(this._data,e.subarray(t,r))},e.prototype.unhook=function(e){if(e){var t=h.utf32ToString(this._data);switch(this._data=new Uint32Array(0),t){case'"q':return this._coreService.triggerDataEvent(o.C0.ESC+'P1$r0"q'+o.C0.ESC+"\\");case'"p':return this._coreService.triggerDataEvent(o.C0.ESC+'P1$r61;1"p'+o.C0.ESC+"\\");case"r":var r=this._bufferService.buffer.scrollTop+1+";"+(this._bufferService.buffer.scrollBottom+1)+"r";return this._coreService.triggerDataEvent(o.C0.ESC+"P1$r"+r+o.C0.ESC+"\\");case"m":return this._coreService.triggerDataEvent(o.C0.ESC+"P1$r0m"+o.C0.ESC+"\\");case" q":var i={block:2,underline:4,bar:6}[this._optionsService.options.cursorStyle];return i-=this._optionsService.options.cursorBlink?1:0,this._coreService.triggerDataEvent(o.C0.ESC+"P1$r"+i+" q"+o.C0.ESC+"\\");default:this._logService.debug("Unknown DCS $q %s",t),this._coreService.triggerDataEvent(o.C0.ESC+"P0$r"+o.C0.ESC+"\\")}}else this._data=new Uint32Array(0)},e}(),C=function(e){function t(t,r,i,n,c,l,_,p,g,y,b){void 0===b&&(b=new a.EscapeSequenceParser);var m=e.call(this)||this;m._terminal=t,m._bufferService=r,m._charsetService=i,m._coreService=n,m._dirtyRowService=c,m._logService=l,m._optionsService=_,m._coreMouseService=p,m._unicodeService=g,m._instantiationService=y,m._parser=b,m._parseBuffer=new Uint32Array(4096),m._stringDecoder=new h.StringToUtf32,m._utf8Decoder=new h.Utf8ToUtf32,m._workCell=new d.CellData,m._windowTitle="",m._iconName="",m._windowTitleStack=[],m._iconNameStack=[],m._curAttrData=u.DEFAULT_ATTR_DATA.clone(),m._eraseAttrDataInternal=u.DEFAULT_ATTR_DATA.clone(),m._onRequestRefreshRows=new f.EventEmitter,m._onRequestReset=new f.EventEmitter,m._onRequestBell=new f.EventEmitter,m._onCursorMove=new f.EventEmitter,m._onLineFeed=new f.EventEmitter,m._onScroll=new f.EventEmitter,m.register(m._parser),m._parser.setCsiHandlerFallback(function(e,t){m._logService.debug("Unknown CSI code: ",{identifier:m._parser.identToString(e),params:t.toArray()})}),m._parser.setEscHandlerFallback(function(e){m._logService.debug("Unknown ESC code: ",{identifier:m._parser.identToString(e)})}),m._parser.setExecuteHandlerFallback(function(e){m._logService.debug("Unknown EXECUTE code: ",{code:e})}),m._parser.setOscHandlerFallback(function(e,t,r){m._logService.debug("Unknown OSC code: ",{identifier:e,action:t,data:r})}),m._parser.setDcsHandlerFallback(function(e,t,r){"HOOK"===t&&(r=r.toArray()),m._logService.debug("Unknown DCS code: ",{identifier:m._parser.identToString(e),action:t,payload:r})}),m._parser.setPrintHandler(function(e,t,r){return m.print(e,t,r)}),m._parser.setCsiHandler({final:"@"},function(e){return m.insertChars(e)}),m._parser.setCsiHandler({intermediates:" ",final:"@"},function(e){return m.scrollLeft(e)}),m._parser.setCsiHandler({final:"A"},function(e){return m.cursorUp(e)}),m._parser.setCsiHandler({intermediates:" ",final:"A"},function(e){return m.scrollRight(e)}),m._parser.setCsiHandler({final:"B"},function(e){return m.cursorDown(e)}),m._parser.setCsiHandler({final:"C"},function(e){return m.cursorForward(e)}),m._parser.setCsiHandler({final:"D"},function(e){return m.cursorBackward(e)}),m._parser.setCsiHandler({final:"E"},function(e){return m.cursorNextLine(e)}),m._parser.setCsiHandler({final:"F"},function(e){return m.cursorPrecedingLine(e)}),m._parser.setCsiHandler({final:"G"},function(e){return m.cursorCharAbsolute(e)}),m._parser.setCsiHandler({final:"H"},function(e){return m.cursorPosition(e)}),m._parser.setCsiHandler({final:"I"},function(e){return m.cursorForwardTab(e)}),m._parser.setCsiHandler({final:"J"},function(e){return m.eraseInDisplay(e)}),m._parser.setCsiHandler({prefix:"?",final:"J"},function(e){return m.eraseInDisplay(e)}),m._parser.setCsiHandler({final:"K"},function(e){return m.eraseInLine(e)}),m._parser.setCsiHandler({prefix:"?",final:"K"},function(e){return m.eraseInLine(e)}),m._parser.setCsiHandler({final:"L"},function(e){return m.insertLines(e)}),m._parser.setCsiHandler({final:"M"},function(e){return m.deleteLines(e)}),m._parser.setCsiHandler({final:"P"},function(e){return m.deleteChars(e)}),m._parser.setCsiHandler({final:"S"},function(e){return m.scrollUp(e)}),m._parser.setCsiHandler({final:"T"},function(e){return m.scrollDown(e)}),m._parser.setCsiHandler({final:"X"},function(e){return m.eraseChars(e)}),m._parser.setCsiHandler({final:"Z"},function(e){return m.cursorBackwardTab(e)}),m._parser.setCsiHandler({final:"`"},function(e){return m.charPosAbsolute(e)}),m._parser.setCsiHandler({final:"a"},function(e){return m.hPositionRelative(e)}),m._parser.setCsiHandler({final:"b"},function(e){return m.repeatPrecedingCharacter(e)}),m._parser.setCsiHandler({final:"c"},function(e){return m.sendDeviceAttributesPrimary(e)}),m._parser.setCsiHandler({prefix:">",final:"c"},function(e){return m.sendDeviceAttributesSecondary(e)}),m._parser.setCsiHandler({final:"d"},function(e){return m.linePosAbsolute(e)}),m._parser.setCsiHandler({final:"e"},function(e){return m.vPositionRelative(e)}),m._parser.setCsiHandler({final:"f"},function(e){return m.hVPosition(e)}),m._parser.setCsiHandler({final:"g"},function(e){return m.tabClear(e)}),m._parser.setCsiHandler({final:"h"},function(e){return m.setMode(e)}),m._parser.setCsiHandler({prefix:"?",final:"h"},function(e){return m.setModePrivate(e)}),m._parser.setCsiHandler({final:"l"},function(e){return m.resetMode(e)}),m._parser.setCsiHandler({prefix:"?",final:"l"},function(e){return m.resetModePrivate(e)}),m._parser.setCsiHandler({final:"m"},function(e){return m.charAttributes(e)}),m._parser.setCsiHandler({final:"n"},function(e){return m.deviceStatus(e)}),m._parser.setCsiHandler({prefix:"?",final:"n"},function(e){return m.deviceStatusPrivate(e)}),m._parser.setCsiHandler({intermediates:"!",final:"p"},function(e){return m.softReset(e)}),m._parser.setCsiHandler({intermediates:" ",final:"q"},function(e){return m.setCursorStyle(e)}),m._parser.setCsiHandler({final:"r"},function(e){return m.setScrollRegion(e)}),m._parser.setCsiHandler({final:"s"},function(e){return m.saveCursor(e)}),m._parser.setCsiHandler({final:"t"},function(e){return m.windowOptions(e)}),m._parser.setCsiHandler({final:"u"},function(e){return m.restoreCursor(e)}),m._parser.setCsiHandler({intermediates:"'",final:"}"},function(e){return m.insertColumns(e)}),m._parser.setCsiHandler({intermediates:"'",final:"~"},function(e){return m.deleteColumns(e)}),m._parser.setExecuteHandler(o.C0.BEL,function(){return m.bell()}),m._parser.setExecuteHandler(o.C0.LF,function(){return m.lineFeed()}),m._parser.setExecuteHandler(o.C0.VT,function(){return m.lineFeed()}),m._parser.setExecuteHandler(o.C0.FF,function(){return m.lineFeed()}),m._parser.setExecuteHandler(o.C0.CR,function(){return m.carriageReturn()}),m._parser.setExecuteHandler(o.C0.BS,function(){return m.backspace()}),m._parser.setExecuteHandler(o.C0.HT,function(){return m.tab()}),m._parser.setExecuteHandler(o.C0.SO,function(){return m.shiftOut()}),m._parser.setExecuteHandler(o.C0.SI,function(){return m.shiftIn()}),m._parser.setExecuteHandler(o.C1.IND,function(){return m.index()}),m._parser.setExecuteHandler(o.C1.NEL,function(){return m.nextLine()}),m._parser.setExecuteHandler(o.C1.HTS,function(){return m.tabSet()}),m._parser.setOscHandler(0,new v.OscHandler(function(e){m.setTitle(e),m.setIconName(e)})),m._parser.setOscHandler(1,new v.OscHandler(function(e){return m.setIconName(e)})),m._parser.setOscHandler(2,new v.OscHandler(function(e){return m.setTitle(e)})),m._parser.setEscHandler({final:"7"},function(){return m.saveCursor()}),m._parser.setEscHandler({final:"8"},function(){return m.restoreCursor()}),m._parser.setEscHandler({final:"D"},function(){return m.index()}),m._parser.setEscHandler({final:"E"},function(){return m.nextLine()}),m._parser.setEscHandler({final:"H"},function(){return m.tabSet()}),m._parser.setEscHandler({final:"M"},function(){return m.reverseIndex()}),m._parser.setEscHandler({final:"="},function(){return m.keypadApplicationMode()}),m._parser.setEscHandler({final:">"},function(){return m.keypadNumericMode()}),m._parser.setEscHandler({final:"c"},function(){return m.fullReset()}),m._parser.setEscHandler({final:"n"},function(){return m.setgLevel(2)}),m._parser.setEscHandler({final:"o"},function(){return m.setgLevel(3)}),m._parser.setEscHandler({final:"|"},function(){return m.setgLevel(3)}),m._parser.setEscHandler({final:"}"},function(){return m.setgLevel(2)}),m._parser.setEscHandler({final:"~"},function(){return m.setgLevel(1)}),m._parser.setEscHandler({intermediates:"%",final:"@"},function(){return m.selectDefaultCharset()}),m._parser.setEscHandler({intermediates:"%",final:"G"},function(){return m.selectDefaultCharset()});var C=function(e){w._parser.setEscHandler({intermediates:"(",final:e},function(){return m.selectCharset("("+e)}),w._parser.setEscHandler({intermediates:")",final:e},function(){return m.selectCharset(")"+e)}),w._parser.setEscHandler({intermediates:"*",final:e},function(){return m.selectCharset("*"+e)}),w._parser.setEscHandler({intermediates:"+",final:e},function(){return m.selectCharset("+"+e)}),w._parser.setEscHandler({intermediates:"-",final:e},function(){return m.selectCharset("-"+e)}),w._parser.setEscHandler({intermediates:".",final:e},function(){return m.selectCharset("."+e)}),w._parser.setEscHandler({intermediates:"/",final:e},function(){return m.selectCharset("/"+e)})},w=this;for(var E in s.CHARSETS)C(E);return m._parser.setEscHandler({intermediates:"#",final:"8"},function(){return m.screenAlignmentPattern()}),m._parser.setErrorHandler(function(e){return m._logService.error("Parsing error: ",e),e}),m._parser.setDcsHandler({intermediates:"$",final:"q"},new S(m._bufferService,m._coreService,m._logService,m._optionsService)),m}return n(t,e),Object.defineProperty(t.prototype,"onRequestRefreshRows",{get:function(){return this._onRequestRefreshRows.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onRequestReset",{get:function(){return this._onRequestReset.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onRequestBell",{get:function(){return this._onRequestBell.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onCursorMove",{get:function(){return this._onCursorMove.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onLineFeed",{get:function(){return this._onLineFeed.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onScroll",{get:function(){return this._onScroll.event},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){e.prototype.dispose.call(this)},t.prototype.parse=function(e){var t=this._bufferService.buffer,r=t.x,i=t.y;if(this._logService.debug("parsing data",e),this._parseBuffer.length<e.length&&this._parseBuffer.length<131072&&(this._parseBuffer=new Uint32Array(Math.min(e.length,131072))),this._dirtyRowService.clearRange(),e.length>131072)for(var n=0;n<e.length;n+=131072){var o=n+131072<e.length?n+131072:e.length,s="string"==typeof e?this._stringDecoder.decode(e.substring(n,o),this._parseBuffer):this._utf8Decoder.decode(e.subarray(n,o),this._parseBuffer);this._parser.parse(this._parseBuffer,s)}else{s="string"==typeof e?this._stringDecoder.decode(e,this._parseBuffer):this._utf8Decoder.decode(e,this._parseBuffer);this._parser.parse(this._parseBuffer,s)}(t=this._bufferService.buffer).x===r&&t.y===i||this._onCursorMove.fire(),this._onRequestRefreshRows.fire(this._dirtyRowService.start,this._dirtyRowService.end)},t.prototype.print=function(e,t,r){var i,n,o=this._bufferService.buffer,s=this._charsetService.charset,a=this._optionsService.options.screenReaderMode,c=this._bufferService.cols,l=this._coreService.decPrivateModes.wraparound,u=this._terminal.insertMode,f=this._curAttrData,d=o.lines.get(o.y+o.ybase);this._dirtyRowService.markDirty(o.y),o.x&&r-t>0&&2===d.getWidth(o.x-1)&&d.setCellFromCodePoint(o.x-1,0,1,f.fg,f.bg);for(var p=t;p<r;++p){if(i=e[p],n=this._unicodeService.wcwidth(i),i<127&&s){var v=s[String.fromCharCode(i)];v&&(i=v.charCodeAt(0))}if(a&&this._terminal.onA11yCharEmitter.fire(h.stringFromCodePoint(i)),n||!o.x){if(o.x+n-1>=c)if(l)o.x=0,o.y++,o.y===o.scrollBottom+1?(o.y--,this._terminal.scroll(this._eraseAttrData(),!0)):(o.y>=this._bufferService.rows&&(o.y=this._bufferService.rows-1),o.lines.get(o.y).isWrapped=!0),d=o.lines.get(o.y+o.ybase);else if(o.x=c-1,2===n)continue;if(u&&(d.insertCells(o.x,n,o.getNullCell(f),f),2===d.getWidth(c-1)&&d.setCellFromCodePoint(c-1,_.NULL_CELL_CODE,_.NULL_CELL_WIDTH,f.fg,f.bg)),d.setCellFromCodePoint(o.x++,i,n,f.fg,f.bg),n>0)for(;--n;)d.setCellFromCodePoint(o.x++,0,0,f.fg,f.bg)}else d.getWidth(o.x-1)?d.addCodepointToCell(o.x-1,i):d.addCodepointToCell(o.x-2,i)}r-t>0&&(d.loadCell(o.x-1,this._workCell),2===this._workCell.getWidth()||this._workCell.getCode()>65535?this._parser.precedingCodepoint=0:this._workCell.isCombined()?this._parser.precedingCodepoint=this._workCell.getChars().charCodeAt(0):this._parser.precedingCodepoint=this._workCell.content),o.x<c&&r-t>0&&0===d.getWidth(o.x)&&!d.hasContent(o.x)&&d.setCellFromCodePoint(o.x,0,1,f.fg,f.bg),this._dirtyRowService.markDirty(o.y)},t.prototype.addCsiHandler=function(e,t){var r=this;return"t"!==e.final||e.prefix||e.intermediates?this._parser.addCsiHandler(e,t):this._parser.addCsiHandler(e,function(e){return!m(e.params[0],r._optionsService.options.windowOptions)||t(e)})},t.prototype.addDcsHandler=function(e,t){return this._parser.addDcsHandler(e,new g.DcsHandler(t))},t.prototype.addEscHandler=function(e,t){return this._parser.addEscHandler(e,t)},t.prototype.addOscHandler=function(e,t){return this._parser.addOscHandler(e,new v.OscHandler(t))},t.prototype.bell=function(){this._onRequestBell.fire()},t.prototype.lineFeed=function(){var e=this._bufferService.buffer;this._dirtyRowService.markDirty(e.y),this._optionsService.options.convertEol&&(e.x=0),e.y++,e.y===e.scrollBottom+1?(e.y--,this._terminal.scroll(this._eraseAttrData())):e.y>=this._bufferService.rows&&(e.y=this._bufferService.rows-1),e.x>=this._bufferService.cols&&e.x--,this._dirtyRowService.markDirty(e.y),this._onLineFeed.fire()},t.prototype.carriageReturn=function(){this._bufferService.buffer.x=0},t.prototype.backspace=function(){this._restrictCursor(),this._bufferService.buffer.x>0&&this._bufferService.buffer.x--},t.prototype.tab=function(){if(!(this._bufferService.buffer.x>=this._bufferService.cols)){var e=this._bufferService.buffer.x;this._bufferService.buffer.x=this._bufferService.buffer.nextStop(),this._optionsService.options.screenReaderMode&&this._terminal.onA11yTabEmitter.fire(this._bufferService.buffer.x-e)}},t.prototype.shiftOut=function(){this._charsetService.setgLevel(1)},t.prototype.shiftIn=function(){this._charsetService.setgLevel(0)},t.prototype._restrictCursor=function(){this._bufferService.buffer.x=Math.min(this._bufferService.cols-1,Math.max(0,this._bufferService.buffer.x)),this._bufferService.buffer.y=this._coreService.decPrivateModes.origin?Math.min(this._bufferService.buffer.scrollBottom,Math.max(this._bufferService.buffer.scrollTop,this._bufferService.buffer.y)):Math.min(this._bufferService.rows-1,Math.max(0,this._bufferService.buffer.y)),this._dirtyRowService.markDirty(this._bufferService.buffer.y)},t.prototype._setCursor=function(e,t){this._dirtyRowService.markDirty(this._bufferService.buffer.y),this._coreService.decPrivateModes.origin?(this._bufferService.buffer.x=e,this._bufferService.buffer.y=this._bufferService.buffer.scrollTop+t):(this._bufferService.buffer.x=e,this._bufferService.buffer.y=t),this._restrictCursor(),this._dirtyRowService.markDirty(this._bufferService.buffer.y)},t.prototype._moveCursor=function(e,t){this._restrictCursor(),this._setCursor(this._bufferService.buffer.x+e,this._bufferService.buffer.y+t)},t.prototype.cursorUp=function(e){var t=this._bufferService.buffer.y-this._bufferService.buffer.scrollTop;t>=0?this._moveCursor(0,-Math.min(t,e.params[0]||1)):this._moveCursor(0,-(e.params[0]||1))},t.prototype.cursorDown=function(e){var t=this._bufferService.buffer.scrollBottom-this._bufferService.buffer.y;t>=0?this._moveCursor(0,Math.min(t,e.params[0]||1)):this._moveCursor(0,e.params[0]||1)},t.prototype.cursorForward=function(e){this._moveCursor(e.params[0]||1,0)},t.prototype.cursorBackward=function(e){this._moveCursor(-(e.params[0]||1),0)},t.prototype.cursorNextLine=function(e){this.cursorDown(e),this._bufferService.buffer.x=0},t.prototype.cursorPrecedingLine=function(e){this.cursorUp(e),this._bufferService.buffer.x=0},t.prototype.cursorCharAbsolute=function(e){this._setCursor((e.params[0]||1)-1,this._bufferService.buffer.y)},t.prototype.cursorPosition=function(e){this._setCursor(e.length>=2?(e.params[1]||1)-1:0,(e.params[0]||1)-1)},t.prototype.charPosAbsolute=function(e){this._setCursor((e.params[0]||1)-1,this._bufferService.buffer.y)},t.prototype.hPositionRelative=function(e){this._moveCursor(e.params[0]||1,0)},t.prototype.linePosAbsolute=function(e){this._setCursor(this._bufferService.buffer.x,(e.params[0]||1)-1)},t.prototype.vPositionRelative=function(e){this._moveCursor(0,e.params[0]||1)},t.prototype.hVPosition=function(e){this.cursorPosition(e)},t.prototype.tabClear=function(e){var t=e.params[0];0===t?delete this._bufferService.buffer.tabs[this._bufferService.buffer.x]:3===t&&(this._bufferService.buffer.tabs={})},t.prototype.cursorForwardTab=function(e){if(!(this._bufferService.buffer.x>=this._bufferService.cols))for(var t=e.params[0]||1;t--;)this._bufferService.buffer.x=this._bufferService.buffer.nextStop()},t.prototype.cursorBackwardTab=function(e){if(!(this._bufferService.buffer.x>=this._bufferService.cols))for(var t=e.params[0]||1,r=this._bufferService.buffer;t--;)r.x=r.prevStop()},t.prototype._eraseInBufferLine=function(e,t,r,i){void 0===i&&(i=!1);var n=this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase+e);n.replaceCells(t,r,this._bufferService.buffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),i&&(n.isWrapped=!1)},t.prototype._resetBufferLine=function(e){var t=this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase+e);t.fill(this._bufferService.buffer.getNullCell(this._eraseAttrData())),t.isWrapped=!1},t.prototype.eraseInDisplay=function(e){var t;switch(this._restrictCursor(),e.params[0]){case 0:for(t=this._bufferService.buffer.y,this._dirtyRowService.markDirty(t),this._eraseInBufferLine(t++,this._bufferService.buffer.x,this._bufferService.cols,0===this._bufferService.buffer.x);t<this._bufferService.rows;t++)this._resetBufferLine(t);this._dirtyRowService.markDirty(t);break;case 1:for(t=this._bufferService.buffer.y,this._dirtyRowService.markDirty(t),this._eraseInBufferLine(t,0,this._bufferService.buffer.x+1,!0),this._bufferService.buffer.x+1>=this._bufferService.cols&&(this._bufferService.buffer.lines.get(t+1).isWrapped=!1);t--;)this._resetBufferLine(t);this._dirtyRowService.markDirty(0);break;case 2:for(t=this._bufferService.rows,this._dirtyRowService.markDirty(t-1);t--;)this._resetBufferLine(t);this._dirtyRowService.markDirty(0);break;case 3:var r=this._bufferService.buffer.lines.length-this._bufferService.rows;r>0&&(this._bufferService.buffer.lines.trimStart(r),this._bufferService.buffer.ybase=Math.max(this._bufferService.buffer.ybase-r,0),this._bufferService.buffer.ydisp=Math.max(this._bufferService.buffer.ydisp-r,0),this._onScroll.fire(0))}},t.prototype.eraseInLine=function(e){switch(this._restrictCursor(),e.params[0]){case 0:this._eraseInBufferLine(this._bufferService.buffer.y,this._bufferService.buffer.x,this._bufferService.cols);break;case 1:this._eraseInBufferLine(this._bufferService.buffer.y,0,this._bufferService.buffer.x+1);break;case 2:this._eraseInBufferLine(this._bufferService.buffer.y,0,this._bufferService.cols)}this._dirtyRowService.markDirty(this._bufferService.buffer.y)},t.prototype.insertLines=function(e){this._restrictCursor();var t=e.params[0]||1,r=this._bufferService.buffer;if(!(r.y>r.scrollBottom||r.y<r.scrollTop)){for(var i=r.y+r.ybase,n=this._bufferService.rows-1-r.scrollBottom,o=this._bufferService.rows-1+r.ybase-n+1;t--;)r.lines.splice(o-1,1),r.lines.splice(i,0,r.getBlankLine(this._eraseAttrData()));this._dirtyRowService.markRangeDirty(r.y,r.scrollBottom),r.x=0}},t.prototype.deleteLines=function(e){this._restrictCursor();var t=e.params[0]||1,r=this._bufferService.buffer;if(!(r.y>r.scrollBottom||r.y<r.scrollTop)){var i,n=r.y+r.ybase;for(i=this._bufferService.rows-1-r.scrollBottom,i=this._bufferService.rows-1+r.ybase-i;t--;)r.lines.splice(n,1),r.lines.splice(i,0,r.getBlankLine(this._eraseAttrData()));this._dirtyRowService.markRangeDirty(r.y,r.scrollBottom),r.x=0}},t.prototype.insertChars=function(e){this._restrictCursor();var t=this._bufferService.buffer.lines.get(this._bufferService.buffer.y+this._bufferService.buffer.ybase);t&&(t.insertCells(this._bufferService.buffer.x,e.params[0]||1,this._bufferService.buffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),this._dirtyRowService.markDirty(this._bufferService.buffer.y))},t.prototype.deleteChars=function(e){this._restrictCursor();var t=this._bufferService.buffer.lines.get(this._bufferService.buffer.y+this._bufferService.buffer.ybase);t&&(t.deleteCells(this._bufferService.buffer.x,e.params[0]||1,this._bufferService.buffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),this._dirtyRowService.markDirty(this._bufferService.buffer.y))},t.prototype.scrollUp=function(e){for(var t=e.params[0]||1,r=this._bufferService.buffer;t--;)r.lines.splice(r.ybase+r.scrollTop,1),r.lines.splice(r.ybase+r.scrollBottom,0,r.getBlankLine(this._eraseAttrData()));this._dirtyRowService.markRangeDirty(r.scrollTop,r.scrollBottom)},t.prototype.scrollDown=function(e){for(var t=e.params[0]||1,r=this._bufferService.buffer;t--;)r.lines.splice(r.ybase+r.scrollBottom,1),r.lines.splice(r.ybase+r.scrollTop,0,r.getBlankLine(u.DEFAULT_ATTR_DATA));this._dirtyRowService.markRangeDirty(r.scrollTop,r.scrollBottom)},t.prototype.scrollLeft=function(e){var t=this._bufferService.buffer;if(!(t.y>t.scrollBottom||t.y<t.scrollTop)){for(var r=e.params[0]||1,i=t.scrollTop;i<=t.scrollBottom;++i){var n=t.lines.get(t.ybase+i);n.deleteCells(0,r,t.getNullCell(this._eraseAttrData()),this._eraseAttrData()),n.isWrapped=!1}this._dirtyRowService.markRangeDirty(t.scrollTop,t.scrollBottom)}},t.prototype.scrollRight=function(e){var t=this._bufferService.buffer;if(!(t.y>t.scrollBottom||t.y<t.scrollTop)){for(var r=e.params[0]||1,i=t.scrollTop;i<=t.scrollBottom;++i){var n=t.lines.get(t.ybase+i);n.insertCells(0,r,t.getNullCell(this._eraseAttrData()),this._eraseAttrData()),n.isWrapped=!1}this._dirtyRowService.markRangeDirty(t.scrollTop,t.scrollBottom)}},t.prototype.insertColumns=function(e){var t=this._bufferService.buffer;if(!(t.y>t.scrollBottom||t.y<t.scrollTop)){for(var r=e.params[0]||1,i=t.scrollTop;i<=t.scrollBottom;++i){var n=this._bufferService.buffer.lines.get(t.ybase+i);n.insertCells(t.x,r,t.getNullCell(this._eraseAttrData()),this._eraseAttrData()),n.isWrapped=!1}this._dirtyRowService.markRangeDirty(t.scrollTop,t.scrollBottom)}},t.prototype.deleteColumns=function(e){var t=this._bufferService.buffer;if(!(t.y>t.scrollBottom||t.y<t.scrollTop)){for(var r=e.params[0]||1,i=t.scrollTop;i<=t.scrollBottom;++i){var n=t.lines.get(t.ybase+i);n.deleteCells(t.x,r,t.getNullCell(this._eraseAttrData()),this._eraseAttrData()),n.isWrapped=!1}this._dirtyRowService.markRangeDirty(t.scrollTop,t.scrollBottom)}},t.prototype.eraseChars=function(e){this._restrictCursor();var t=this._bufferService.buffer.lines.get(this._bufferService.buffer.y+this._bufferService.buffer.ybase);t&&(t.replaceCells(this._bufferService.buffer.x,this._bufferService.buffer.x+(e.params[0]||1),this._bufferService.buffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),this._dirtyRowService.markDirty(this._bufferService.buffer.y))},t.prototype.repeatPrecedingCharacter=function(e){if(this._parser.precedingCodepoint){for(var t=e.params[0]||1,r=new Uint32Array(t),i=0;i<t;++i)r[i]=this._parser.precedingCodepoint;this.print(r,0,r.length)}},t.prototype.sendDeviceAttributesPrimary=function(e){e.params[0]>0||(this._terminal.is("xterm")||this._terminal.is("rxvt-unicode")||this._terminal.is("screen")?this._coreService.triggerDataEvent(o.C0.ESC+"[?1;2c"):this._terminal.is("linux")&&this._coreService.triggerDataEvent(o.C0.ESC+"[?6c"))},t.prototype.sendDeviceAttributesSecondary=function(e){e.params[0]>0||(this._terminal.is("xterm")?this._coreService.triggerDataEvent(o.C0.ESC+"[>0;276;0c"):this._terminal.is("rxvt-unicode")?this._coreService.triggerDataEvent(o.C0.ESC+"[>85;95;0c"):this._terminal.is("linux")?this._coreService.triggerDataEvent(e.params[0]+"c"):this._terminal.is("screen")&&this._coreService.triggerDataEvent(o.C0.ESC+"[>83;40003;0c"))},t.prototype.setMode=function(e){for(var t=0;t<e.length;t++)switch(e.params[t]){case 4:this._terminal.insertMode=!0}},t.prototype.setModePrivate=function(e){for(var t,r,i=0;i<e.length;i++)switch(e.params[i]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!0;break;case 2:this._charsetService.setgCharset(0,s.DEFAULT_CHARSET),this._charsetService.setgCharset(1,s.DEFAULT_CHARSET),this._charsetService.setgCharset(2,s.DEFAULT_CHARSET),this._charsetService.setgCharset(3,s.DEFAULT_CHARSET);break;case 3:this._optionsService.options.windowOptions.setWinLines&&(this._terminal.resize(132,this._bufferService.rows),this._onRequestReset.fire());break;case 6:this._coreService.decPrivateModes.origin=!0,this._setCursor(0,0);break;case 7:this._coreService.decPrivateModes.wraparound=!0;break;case 12:break;case 66:this._logService.debug("Serial port requested application keypad."),this._coreService.decPrivateModes.applicationKeypad=!0,null===(t=this._terminal.viewport)||void 0===t||t.syncScrollArea();break;case 9:this._coreMouseService.activeProtocol="X10";break;case 1e3:this._coreMouseService.activeProtocol="VT200";break;case 1002:this._coreMouseService.activeProtocol="DRAG";break;case 1003:this._coreMouseService.activeProtocol="ANY";break;case 1004:this._terminal.sendFocus=!0;break;case 1005:this._logService.debug("DECSET 1005 not supported (see #2507)");break;case 1006:this._coreMouseService.activeEncoding="SGR";break;case 1015:this._logService.debug("DECSET 1015 not supported (see #2507)");break;case 25:this._coreService.isCursorHidden=!1;break;case 1048:this.saveCursor();break;case 1049:this.saveCursor();case 47:case 1047:this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()),this._onRequestRefreshRows.fire(0,this._bufferService.rows-1),null===(r=this._terminal.viewport)||void 0===r||r.syncScrollArea(),this._terminal.showCursor();break;case 2004:this._terminal.bracketedPasteMode=!0}},t.prototype.resetMode=function(e){for(var t=0;t<e.length;t++)switch(e.params[t]){case 4:this._terminal.insertMode=!1}},t.prototype.resetModePrivate=function(e){for(var t,r,i=0;i<e.length;i++)switch(e.params[i]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!1;break;case 3:this._optionsService.options.windowOptions.setWinLines&&(this._terminal.resize(80,this._bufferService.rows),this._onRequestReset.fire());break;case 6:this._coreService.decPrivateModes.origin=!1,this._setCursor(0,0);break;case 7:this._coreService.decPrivateModes.wraparound=!1;break;case 12:break;case 66:this._logService.debug("Switching back to normal keypad."),this._coreService.decPrivateModes.applicationKeypad=!1,null===(t=this._terminal.viewport)||void 0===t||t.syncScrollArea();break;case 9:case 1e3:case 1002:case 1003:this._coreMouseService.activeProtocol="NONE";break;case 1004:this._terminal.sendFocus=!1;break;case 1005:this._logService.debug("DECRST 1005 not supported (see #2507)");break;case 1006:this._coreMouseService.activeEncoding="DEFAULT";break;case 1015:this._logService.debug("DECRST 1015 not supported (see #2507)");break;case 25:this._coreService.isCursorHidden=!0;break;case 1048:this.restoreCursor();break;case 1049:case 47:case 1047:this._bufferService.buffers.activateNormalBuffer(),1049===e.params[i]&&this.restoreCursor(),this._onRequestRefreshRows.fire(0,this._bufferService.rows-1),null===(r=this._terminal.viewport)||void 0===r||r.syncScrollArea(),this._terminal.showCursor();break;case 2004:this._terminal.bracketedPasteMode=!1}},t.prototype._extractColor=function(e,t,r){var i=[0,0,-1,0,0,0],n=0,o=0;do{if(i[o+n]=e.params[t+o],e.hasSubParams(t+o)){var s=e.getSubParams(t+o),a=0;do{5===i[1]&&(n=1),i[o+a+1+n]=s[a]}while(++a<s.length&&a+o+1+n<i.length);break}if(5===i[1]&&o+n>=2||2===i[1]&&o+n>=5)break;i[1]&&(n=1)}while(++o+t<e.length&&o+n<i.length);for(a=2;a<i.length;++a)-1===i[a]&&(i[a]=0);return 38===i[0]?2===i[1]?(r.fg|=50331648,r.fg&=-16777216,r.fg|=p.AttributeData.fromColorRGB([i[3],i[4],i[5]])):5===i[1]&&(r.fg&=-50331904,r.fg|=33554432|255&i[3]):48===i[0]&&(2===i[1]?(r.bg|=50331648,r.bg&=-16777216,r.bg|=p.AttributeData.fromColorRGB([i[3],i[4],i[5]])):5===i[1]&&(r.bg&=-50331904,r.bg|=33554432|255&i[3])),o},t.prototype.charAttributes=function(e){if(1===e.length&&0===e.params[0])return this._curAttrData.fg=u.DEFAULT_ATTR_DATA.fg,void(this._curAttrData.bg=u.DEFAULT_ATTR_DATA.bg);for(var t,r=e.length,i=this._curAttrData,n=0;n<r;n++)(t=e.params[n])>=30&&t<=37?(i.fg&=-50331904,i.fg|=16777216|t-30):t>=40&&t<=47?(i.bg&=-50331904,i.bg|=16777216|t-40):t>=90&&t<=97?(i.fg&=-50331904,i.fg|=16777224|t-90):t>=100&&t<=107?(i.bg&=-50331904,i.bg|=16777224|t-100):0===t?(i.fg=u.DEFAULT_ATTR_DATA.fg,i.bg=u.DEFAULT_ATTR_DATA.bg):1===t?i.fg|=134217728:3===t?i.bg|=67108864:4===t?i.fg|=268435456:5===t?i.fg|=536870912:7===t?i.fg|=67108864:8===t?i.fg|=1073741824:2===t?i.bg|=134217728:22===t?(i.fg&=-134217729,i.bg&=-134217729):23===t?i.bg&=-67108865:24===t?i.fg&=-268435457:25===t?i.fg&=-536870913:27===t?i.fg&=-67108865:28===t?i.fg&=-1073741825:39===t?(i.fg&=-67108864,i.fg|=16777215&u.DEFAULT_ATTR_DATA.fg):49===t?(i.bg&=-67108864,i.bg|=16777215&u.DEFAULT_ATTR_DATA.bg):38===t||48===t?n+=this._extractColor(e,n,i):100===t?(i.fg&=-67108864,i.fg|=16777215&u.DEFAULT_ATTR_DATA.fg,i.bg&=-67108864,i.bg|=16777215&u.DEFAULT_ATTR_DATA.bg):this._logService.debug("Unknown SGR attribute: %d.",t)},t.prototype.deviceStatus=function(e){switch(e.params[0]){case 5:this._coreService.triggerDataEvent(o.C0.ESC+"[0n");break;case 6:var t=this._bufferService.buffer.y+1,r=this._bufferService.buffer.x+1;this._coreService.triggerDataEvent(o.C0.ESC+"["+t+";"+r+"R")}},t.prototype.deviceStatusPrivate=function(e){switch(e.params[0]){case 6:var t=this._bufferService.buffer.y+1,r=this._bufferService.buffer.x+1;this._coreService.triggerDataEvent(o.C0.ESC+"[?"+t+";"+r+"R")}},t.prototype.softReset=function(e){var t;this._coreService.isCursorHidden=!1,this._terminal.insertMode=!1,null===(t=this._terminal.viewport)||void 0===t||t.syncScrollArea(),this._bufferService.buffer.scrollTop=0,this._bufferService.buffer.scrollBottom=this._bufferService.rows-1,this._curAttrData=u.DEFAULT_ATTR_DATA.clone(),this._bufferService.buffer.x=this._bufferService.buffer.y=0,this._coreService.reset(),this._charsetService.reset()},t.prototype.setCursorStyle=function(e){var t=e.params[0]||1;switch(t){case 1:case 2:this._optionsService.options.cursorStyle="block";break;case 3:case 4:this._optionsService.options.cursorStyle="underline";break;case 5:case 6:this._optionsService.options.cursorStyle="bar"}var r=t%2==1;this._optionsService.options.cursorBlink=r},t.prototype.setScrollRegion=function(e){var t,r=e.params[0]||1;(e.length<2||(t=e.params[1])>this._bufferService.rows||0===t)&&(t=this._bufferService.rows),t>r&&(this._bufferService.buffer.scrollTop=r-1,this._bufferService.buffer.scrollBottom=t-1,this._setCursor(0,0))},t.prototype.windowOptions=function(e){if(m(e.params[0],this._optionsService.options.windowOptions)){var t=e.length>1?e.params[1]:0,r=this._instantiationService.getService(y.IRenderService);switch(e.params[0]){case 14:if(r&&2!==t){console.log(r.dimensions);var i=r.dimensions.scaledCanvasWidth.toFixed(0),n=r.dimensions.scaledCanvasHeight.toFixed(0);this._coreService.triggerDataEvent(o.C0.ESC+"[4;"+n+";"+i+"t")}break;case 16:if(r){i=r.dimensions.scaledCellWidth.toFixed(0),n=r.dimensions.scaledCellHeight.toFixed(0);this._coreService.triggerDataEvent(o.C0.ESC+"[6;"+n+";"+i+"t")}break;case 18:this._bufferService&&this._coreService.triggerDataEvent(o.C0.ESC+"[8;"+this._bufferService.rows+";"+this._bufferService.cols+"t");break;case 22:0!==t&&2!==t||(this._windowTitleStack.push(this._windowTitle),this._windowTitleStack.length>10&&this._windowTitleStack.shift()),0!==t&&1!==t||(this._iconNameStack.push(this._iconName),this._iconNameStack.length>10&&this._iconNameStack.shift());break;case 23:0!==t&&2!==t||this._windowTitleStack.length&&this.setTitle(this._windowTitleStack.pop()),0!==t&&1!==t||this._iconNameStack.length&&this.setIconName(this._iconNameStack.pop())}}},t.prototype.saveCursor=function(e){this._bufferService.buffer.savedX=this._bufferService.buffer.x,this._bufferService.buffer.savedY=this._bufferService.buffer.ybase+this._bufferService.buffer.y,this._bufferService.buffer.savedCurAttrData.fg=this._curAttrData.fg,this._bufferService.buffer.savedCurAttrData.bg=this._curAttrData.bg,this._bufferService.buffer.savedCharset=this._charsetService.charset},t.prototype.restoreCursor=function(e){this._bufferService.buffer.x=this._bufferService.buffer.savedX||0,this._bufferService.buffer.y=Math.max(this._bufferService.buffer.savedY-this._bufferService.buffer.ybase,0),this._curAttrData.fg=this._bufferService.buffer.savedCurAttrData.fg,this._curAttrData.bg=this._bufferService.buffer.savedCurAttrData.bg,this._charsetService.charset=this._savedCharset,this._bufferService.buffer.savedCharset&&(this._charsetService.charset=this._bufferService.buffer.savedCharset),this._restrictCursor()},t.prototype.setTitle=function(e){this._windowTitle=e,this._terminal.handleTitle(e)},t.prototype.setIconName=function(e){this._iconName=e},t.prototype.nextLine=function(){this._bufferService.buffer.x=0,this.index()},t.prototype.keypadApplicationMode=function(){var e;this._logService.debug("Serial port requested application keypad."),this._coreService.decPrivateModes.applicationKeypad=!0,null===(e=this._terminal.viewport)||void 0===e||e.syncScrollArea()},t.prototype.keypadNumericMode=function(){var e;this._logService.debug("Switching back to normal keypad."),this._coreService.decPrivateModes.applicationKeypad=!1,null===(e=this._terminal.viewport)||void 0===e||e.syncScrollArea()},t.prototype.selectDefaultCharset=function(){this._charsetService.setgLevel(0),this._charsetService.setgCharset(0,s.DEFAULT_CHARSET)},t.prototype.selectCharset=function(e){2===e.length?"/"!==e[0]&&this._charsetService.setgCharset(b[e[0]],s.CHARSETS[e[1]]||s.DEFAULT_CHARSET):this.selectDefaultCharset()},t.prototype.index=function(){this._restrictCursor();var e=this._bufferService.buffer;this._bufferService.buffer.y++,e.y===e.scrollBottom+1?(e.y--,this._terminal.scroll(this._eraseAttrData())):e.y>=this._bufferService.rows&&(e.y=this._bufferService.rows-1),this._restrictCursor()},t.prototype.tabSet=function(){this._bufferService.buffer.tabs[this._bufferService.buffer.x]=!0},t.prototype.reverseIndex=function(){this._restrictCursor();var e=this._bufferService.buffer;if(e.y===e.scrollTop){var t=e.scrollBottom-e.scrollTop;e.lines.shiftElements(e.y+e.ybase,t,1),e.lines.set(e.y+e.ybase,e.getBlankLine(this._eraseAttrData())),this._dirtyRowService.markRangeDirty(e.scrollTop,e.scrollBottom)}else e.y--,this._restrictCursor()},t.prototype.fullReset=function(){this._parser.reset(),this._onRequestReset.fire()},t.prototype.reset=function(){this._curAttrData=u.DEFAULT_ATTR_DATA.clone(),this._eraseAttrDataInternal=u.DEFAULT_ATTR_DATA.clone()},t.prototype._eraseAttrData=function(){return this._eraseAttrDataInternal.bg&=-67108864,this._eraseAttrDataInternal.bg|=67108863&this._curAttrData.bg,this._eraseAttrDataInternal},t.prototype.setgLevel=function(e){this._charsetService.setgLevel(e)},t.prototype.screenAlignmentPattern=function(){var e=new d.CellData;e.content=1<<22|"E".charCodeAt(0),e.fg=this._curAttrData.fg,e.bg=this._curAttrData.bg;var t=this._bufferService.buffer;this._setCursor(0,0);for(var r=0;r<this._bufferService.rows;++r){var i=t.y+t.ybase+r;t.lines.get(i).fill(e),t.lines.get(i).isWrapped=!1}this._dirtyRowService.markAllDirty(),this._setCursor(0,0)},t}(c.Disposable);t.InputHandler=C},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),s=r(15),a=r(19),c=r(20),l=r(22),h=function(){function e(e){this.table=new Uint8Array(e)}return e.prototype.setDefault=function(e,t){s.fill(this.table,e<<4|t)},e.prototype.add=function(e,t,r,i){this.table[t<<8|e]=r<<4|i},e.prototype.addMany=function(e,t,r,i){for(var n=0;n<e.length;n++)this.table[t<<8|e[n]]=r<<4|i},e}();t.TransitionTable=h;t.VT500_TRANSITION_TABLE=function(){var e=new h(4095),t=Array.apply(null,Array(256)).map(function(e,t){return t}),r=function(e,r){return t.slice(e,r)},i=r(32,127),n=r(0,24);n.push(25),n.push.apply(n,r(28,32));var o,s=r(0,14);for(o in e.setDefault(1,0),e.addMany(i,0,2,0),s)e.addMany([24,26,153,154],o,3,0),e.addMany(r(128,144),o,3,0),e.addMany(r(144,152),o,3,0),e.add(156,o,0,0),e.add(27,o,11,1),e.add(157,o,4,8),e.addMany([152,158,159],o,0,7),e.add(155,o,11,3),e.add(144,o,11,9);return e.addMany(n,0,3,0),e.addMany(n,1,3,1),e.add(127,1,0,1),e.addMany(n,8,0,8),e.addMany(n,3,3,3),e.add(127,3,0,3),e.addMany(n,4,3,4),e.add(127,4,0,4),e.addMany(n,6,3,6),e.addMany(n,5,3,5),e.add(127,5,0,5),e.addMany(n,2,3,2),e.add(127,2,0,2),e.add(93,1,4,8),e.addMany(i,8,5,8),e.add(127,8,5,8),e.addMany([156,27,24,26,7],8,6,0),e.addMany(r(28,32),8,0,8),e.addMany([88,94,95],1,0,7),e.addMany(i,7,0,7),e.addMany(n,7,0,7),e.add(156,7,0,0),e.add(127,7,0,7),e.add(91,1,11,3),e.addMany(r(64,127),3,7,0),e.addMany(r(48,60),3,8,4),e.addMany([60,61,62,63],3,9,4),e.addMany(r(48,60),4,8,4),e.addMany(r(64,127),4,7,0),e.addMany([60,61,62,63],4,0,6),e.addMany(r(32,64),6,0,6),e.add(127,6,0,6),e.addMany(r(64,127),6,0,0),e.addMany(r(32,48),3,9,5),e.addMany(r(32,48),5,9,5),e.addMany(r(48,64),5,0,6),e.addMany(r(64,127),5,7,0),e.addMany(r(32,48),4,9,5),e.addMany(r(32,48),1,9,2),e.addMany(r(32,48),2,9,2),e.addMany(r(48,127),2,10,0),e.addMany(r(48,80),1,10,0),e.addMany(r(81,88),1,10,0),e.addMany([89,90,92],1,10,0),e.addMany(r(96,127),1,10,0),e.add(80,1,11,9),e.addMany(n,9,0,9),e.add(127,9,0,9),e.addMany(r(28,32),9,0,9),e.addMany(r(32,48),9,9,12),e.addMany(r(48,60),9,8,10),e.addMany([60,61,62,63],9,9,10),e.addMany(n,11,0,11),e.addMany(r(32,128),11,0,11),e.addMany(r(28,32),11,0,11),e.addMany(n,10,0,10),e.add(127,10,0,10),e.addMany(r(28,32),10,0,10),e.addMany(r(48,60),10,8,10),e.addMany([60,61,62,63],10,0,11),e.addMany(r(32,48),10,9,12),e.addMany(n,12,0,12),e.add(127,12,0,12),e.addMany(r(28,32),12,0,12),e.addMany(r(32,48),12,9,12),e.addMany(r(48,64),12,0,11),e.addMany(r(64,127),12,12,13),e.addMany(r(64,127),10,12,13),e.addMany(r(64,127),9,12,13),e.addMany(n,13,13,13),e.addMany(i,13,13,13),e.add(127,13,0,13),e.addMany([27,156,24,26],13,14,0),e.add(160,0,2,0),e.add(160,8,5,8),e.add(160,6,0,6),e.add(160,11,0,11),e.add(160,13,13,13),e}();var u=function(e){function r(r){void 0===r&&(r=t.VT500_TRANSITION_TABLE);var i=e.call(this)||this;return i.TRANSITIONS=r,i.initialState=0,i.currentState=i.initialState,i._params=new a.Params,i._params.addParam(0),i._collect=0,i.precedingCodepoint=0,i._printHandlerFb=function(e,t,r){},i._executeHandlerFb=function(e){},i._csiHandlerFb=function(e,t){},i._escHandlerFb=function(e){},i._errorHandlerFb=function(e){return e},i._printHandler=i._printHandlerFb,i._executeHandlers=Object.create(null),i._csiHandlers=Object.create(null),i._escHandlers=Object.create(null),i._oscParser=new c.OscParser,i._dcsParser=new l.DcsParser,i._errorHandler=i._errorHandlerFb,i.setEscHandler({final:"\\"},function(){}),i}return n(r,e),r.prototype._identifier=function(e,t){void 0===t&&(t=[64,126]);var r=0;if(e.prefix){if(e.prefix.length>1)throw new Error("only one byte as prefix supported");if((r=e.prefix.charCodeAt(0))&&60>r||r>63)throw new Error("prefix must be in range 0x3c .. 0x3f")}if(e.intermediates){if(e.intermediates.length>2)throw new Error("only two bytes as intermediates are supported");for(var i=0;i<e.intermediates.length;++i){var n=e.intermediates.charCodeAt(i);if(32>n||n>47)throw new Error("intermediate must be in range 0x20 .. 0x2f");r<<=8,r|=n}}if(1!==e.final.length)throw new Error("final must be a single byte");var o=e.final.charCodeAt(0);if(t[0]>o||o>t[1])throw new Error("final must be in range "+t[0]+" .. "+t[1]);return r<<=8,r|=o},r.prototype.identToString=function(e){for(var t=[];e;)t.push(String.fromCharCode(255&e)),e>>=8;return t.reverse().join("")},r.prototype.dispose=function(){this._csiHandlers=Object.create(null),this._executeHandlers=Object.create(null),this._escHandlers=Object.create(null),this._oscParser.dispose(),this._dcsParser.dispose()},r.prototype.setPrintHandler=function(e){this._printHandler=e},r.prototype.clearPrintHandler=function(){this._printHandler=this._printHandlerFb},r.prototype.addEscHandler=function(e,t){var r=this._identifier(e,[48,126]);void 0===this._escHandlers[r]&&(this._escHandlers[r]=[]);var i=this._escHandlers[r];return i.push(t),{dispose:function(){var e=i.indexOf(t);-1!==e&&i.splice(e,1)}}},r.prototype.setEscHandler=function(e,t){this._escHandlers[this._identifier(e,[48,126])]=[t]},r.prototype.clearEscHandler=function(e){this._escHandlers[this._identifier(e,[48,126])]&&delete this._escHandlers[this._identifier(e,[48,126])]},r.prototype.setEscHandlerFallback=function(e){this._escHandlerFb=e},r.prototype.setExecuteHandler=function(e,t){this._executeHandlers[e.charCodeAt(0)]=t},r.prototype.clearExecuteHandler=function(e){this._executeHandlers[e.charCodeAt(0)]&&delete this._executeHandlers[e.charCodeAt(0)]},r.prototype.setExecuteHandlerFallback=function(e){this._executeHandlerFb=e},r.prototype.addCsiHandler=function(e,t){var r=this._identifier(e);void 0===this._csiHandlers[r]&&(this._csiHandlers[r]=[]);var i=this._csiHandlers[r];return i.push(t),{dispose:function(){var e=i.indexOf(t);-1!==e&&i.splice(e,1)}}},r.prototype.setCsiHandler=function(e,t){this._csiHandlers[this._identifier(e)]=[t]},r.prototype.clearCsiHandler=function(e){this._csiHandlers[this._identifier(e)]&&delete this._csiHandlers[this._identifier(e)]},r.prototype.setCsiHandlerFallback=function(e){this._csiHandlerFb=e},r.prototype.addDcsHandler=function(e,t){return this._dcsParser.addHandler(this._identifier(e),t)},r.prototype.setDcsHandler=function(e,t){this._dcsParser.setHandler(this._identifier(e),t)},r.prototype.clearDcsHandler=function(e){this._dcsParser.clearHandler(this._identifier(e))},r.prototype.setDcsHandlerFallback=function(e){this._dcsParser.setHandlerFallback(e)},r.prototype.addOscHandler=function(e,t){return this._oscParser.addHandler(e,t)},r.prototype.setOscHandler=function(e,t){this._oscParser.setHandler(e,t)},r.prototype.clearOscHandler=function(e){this._oscParser.clearHandler(e)},r.prototype.setOscHandlerFallback=function(e){this._oscParser.setHandlerFallback(e)},r.prototype.setErrorHandler=function(e){this._errorHandler=e},r.prototype.clearErrorHandler=function(){this._errorHandler=this._errorHandlerFb},r.prototype.reset=function(){this.currentState=this.initialState,this._oscParser.reset(),this._dcsParser.reset(),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingCodepoint=0},r.prototype.parse=function(e,t){for(var r=0,i=0,n=this.currentState,o=this._oscParser,s=this._dcsParser,a=this._collect,c=this._params,l=this.TRANSITIONS.table,h=0;h<t;++h){switch((i=l[n<<8|((r=e[h])<160?r:160)])>>4){case 2:for(var u=h+1;;++u){if(u>=t||(r=e[u])<32||r>126&&r<160){this._printHandler(e,h,u),h=u-1;break}if(++u>=t||(r=e[u])<32||r>126&&r<160){this._printHandler(e,h,u),h=u-1;break}if(++u>=t||(r=e[u])<32||r>126&&r<160){this._printHandler(e,h,u),h=u-1;break}if(++u>=t||(r=e[u])<32||r>126&&r<160){this._printHandler(e,h,u),h=u-1;break}}break;case 3:this._executeHandlers[r]?this._executeHandlers[r]():this._executeHandlerFb(r),this.precedingCodepoint=0;break;case 0:break;case 1:if(this._errorHandler({position:h,code:r,currentState:n,collect:a,params:c,abort:!1}).abort)return;break;case 7:for(var f=this._csiHandlers[a<<8|r],_=f?f.length-1:-1;_>=0&&!1===f[_](c);_--);_<0&&this._csiHandlerFb(a<<8|r,c),this.precedingCodepoint=0;break;case 8:do{switch(r){case 59:c.addParam(0);break;case 58:c.addSubParam(-1);break;default:c.addDigit(r-48)}}while(++h<t&&(r=e[h])>47&&r<60);h--;break;case 9:a<<=8,a|=r;break;case 10:for(var d=this._escHandlers[a<<8|r],p=d?d.length-1:-1;p>=0&&!1===d[p]();p--);p<0&&this._escHandlerFb(a<<8|r),this.precedingCodepoint=0;break;case 11:c.reset(),c.addParam(0),a=0;break;case 12:s.hook(a<<8|r,c);break;case 13:for(var v=h+1;;++v)if(v>=t||24===(r=e[v])||26===r||27===r||r>127&&r<160){s.put(e,h,v),h=v-1;break}break;case 14:s.unhook(24!==r&&26!==r),27===r&&(i|=1),c.reset(),c.addParam(0),a=0,this.precedingCodepoint=0;break;case 4:o.start();break;case 5:for(var g=h+1;;g++)if(g>=t||(r=e[g])<32||r>127&&r<=159){o.put(e,h,g),h=g-1;break}break;case 6:o.end(24!==r&&26!==r),27===r&&(i|=1),c.reset(),c.addParam(0),a=0,this.precedingCodepoint=0}n=15&i}this._collect=a,this.currentState=n},r}(o.Disposable);t.EscapeSequenceParser=u},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(40),c=r(46),l=r(47),h=r(48),u=r(27),f=r(2),_=r(4),d=r(0),p=r(23),v=r(1),g=1,y=function(e){function t(t,r,i,n,o,s,f,_){var d=e.call(this)||this;d._colors=t,d._screenElement=r,d._linkifier=i,d._bufferService=n,d._charSizeService=o,d._optionsService=s,d.coreService=f,d.coreBrowserService=_,d._id=g++,d._onRequestRefreshRows=new v.EventEmitter;var p=d._optionsService.options.allowTransparency;return d._characterJoinerRegistry=new u.CharacterJoinerRegistry(d._bufferService),d._renderLayers=[new a.TextRenderLayer(d._screenElement,0,d._colors,d._characterJoinerRegistry,p,d._id,d._bufferService,s),new c.SelectionRenderLayer(d._screenElement,1,d._colors,d._id,d._bufferService,s),new h.LinkRenderLayer(d._screenElement,2,d._colors,d._id,d._linkifier,d._bufferService,s),new l.CursorRenderLayer(d._screenElement,3,d._colors,d._id,d._onRequestRefreshRows,d._bufferService,s,f,_)],d.dimensions={scaledCharWidth:0,scaledCharHeight:0,scaledCellWidth:0,scaledCellHeight:0,scaledCharLeft:0,scaledCharTop:0,scaledCanvasWidth:0,scaledCanvasHeight:0,canvasWidth:0,canvasHeight:0,actualCellWidth:0,actualCellHeight:0},d._devicePixelRatio=window.devicePixelRatio,d._updateDimensions(),d.onOptionsChanged(),d}return n(t,e),Object.defineProperty(t.prototype,"onRequestRefreshRows",{get:function(){return this._onRequestRefreshRows.event},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){e.prototype.dispose.call(this),this._renderLayers.forEach(function(e){return e.dispose()}),p.removeTerminalFromCache(this._id)},t.prototype.onDevicePixelRatioChange=function(){this._devicePixelRatio!==window.devicePixelRatio&&(this._devicePixelRatio=window.devicePixelRatio,this.onResize(this._bufferService.cols,this._bufferService.rows))},t.prototype.setColors=function(e){var t=this;this._colors=e,this._renderLayers.forEach(function(e){e.setColors(t._colors),e.reset()})},t.prototype.onResize=function(e,t){var r=this;this._updateDimensions(),this._renderLayers.forEach(function(e){return e.resize(r.dimensions)}),this._screenElement.style.width=this.dimensions.canvasWidth+"px",this._screenElement.style.height=this.dimensions.canvasHeight+"px"},t.prototype.onCharSizeChanged=function(){this.onResize(this._bufferService.cols,this._bufferService.rows)},t.prototype.onBlur=function(){this._runOperation(function(e){return e.onBlur()})},t.prototype.onFocus=function(){this._runOperation(function(e){return e.onFocus()})},t.prototype.onSelectionChanged=function(e,t,r){void 0===r&&(r=!1),this._runOperation(function(i){return i.onSelectionChanged(e,t,r)})},t.prototype.onCursorMove=function(){this._runOperation(function(e){return e.onCursorMove()})},t.prototype.onOptionsChanged=function(){this._runOperation(function(e){return e.onOptionsChanged()})},t.prototype.clear=function(){this._runOperation(function(e){return e.reset()})},t.prototype._runOperation=function(e){this._renderLayers.forEach(function(t){return e(t)})},t.prototype.renderRows=function(e,t){this._renderLayers.forEach(function(r){return r.onGridChanged(e,t)})},t.prototype._updateDimensions=function(){this._charSizeService.hasValidSize&&(this.dimensions.scaledCharWidth=Math.floor(this._charSizeService.width*window.devicePixelRatio),this.dimensions.scaledCharHeight=Math.ceil(this._charSizeService.height*window.devicePixelRatio),this.dimensions.scaledCellHeight=Math.floor(this.dimensions.scaledCharHeight*this._optionsService.options.lineHeight),this.dimensions.scaledCharTop=1===this._optionsService.options.lineHeight?0:Math.round((this.dimensions.scaledCellHeight-this.dimensions.scaledCharHeight)/2),this.dimensions.scaledCellWidth=this.dimensions.scaledCharWidth+Math.round(this._optionsService.options.letterSpacing),this.dimensions.scaledCharLeft=Math.floor(this._optionsService.options.letterSpacing/2),this.dimensions.scaledCanvasHeight=this._bufferService.rows*this.dimensions.scaledCellHeight,this.dimensions.scaledCanvasWidth=this._bufferService.cols*this.dimensions.scaledCellWidth,this.dimensions.canvasHeight=Math.round(this.dimensions.scaledCanvasHeight/window.devicePixelRatio),this.dimensions.canvasWidth=Math.round(this.dimensions.scaledCanvasWidth/window.devicePixelRatio),this.dimensions.actualCellHeight=this.dimensions.canvasHeight/this._bufferService.rows,this.dimensions.actualCellWidth=this.dimensions.canvasWidth/this._bufferService.cols)},t.prototype.registerCharacterJoiner=function(e){return this._characterJoinerRegistry.registerCharacterJoiner(e)},t.prototype.deregisterCharacterJoiner=function(e){return this._characterJoinerRegistry.deregisterCharacterJoiner(e)},t=o([s(3,d.IBufferService),s(4,_.ICharSizeService),s(5,d.IOptionsService),s(6,d.ICoreService),s(7,_.ICoreBrowserService)],t)}(f.Disposable);t.Renderer=y},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(41),s=r(13),a=r(6),c=r(3),l=r(27),h=r(5),u=function(e){function t(t,r,i,n,s,a,c,l){var u=e.call(this,t,"text",r,s,i,a,c,l)||this;return u.bufferService=c,u.optionsService=l,u._characterWidth=0,u._characterFont="",u._characterOverlapCache={},u._workCell=new h.CellData,u._state=new o.GridCache,u._characterJoinerRegistry=n,u}return n(t,e),t.prototype.resize=function(t){e.prototype.resize.call(this,t);var r=this._getFont(!1,!1);this._characterWidth===t.scaledCharWidth&&this._characterFont===r||(this._characterWidth=t.scaledCharWidth,this._characterFont=r,this._characterOverlapCache={}),this._state.clear(),this._state.resize(this._bufferService.cols,this._bufferService.rows)},t.prototype.reset=function(){this._state.clear(),this._clearAll()},t.prototype._forEachCell=function(e,t,r,i){for(var n=e;n<=t;n++)for(var o=n+this._bufferService.buffer.ydisp,s=this._bufferService.buffer.lines.get(o),a=r?r.getJoinedCharacters(o):[],h=0;h<this._bufferService.cols;h++){s.loadCell(h,this._workCell);var u=this._workCell,f=!1,_=h;if(0!==u.getWidth()){if(a.length>0&&h===a[0][0]){f=!0;var d=a.shift();u=new l.JoinedCellData(this._workCell,s.translateToString(!0,d[0],d[1]),d[1]-d[0]),_=d[1]-1}!f&&this._isOverlapping(u)&&_<s.length-1&&s.getCodePoint(_+1)===c.NULL_CELL_CODE&&(u.content&=-12582913,u.content|=2<<22),i(u,h,n),h=_}}},t.prototype._drawBackground=function(e,t){var r=this,i=this._ctx,n=this._bufferService.cols,o=0,s=0,c=null;i.save(),this._forEachCell(e,t,null,function(e,t,l){var h=null;e.isInverse()?h=e.isFgDefault()?r._colors.foreground.css:e.isFgRGB()?"rgb("+a.AttributeData.toColorRGB(e.getFgColor()).join(",")+")":r._colors.ansi[e.getFgColor()].css:e.isBgRGB()?h="rgb("+a.AttributeData.toColorRGB(e.getBgColor()).join(",")+")":e.isBgPalette()&&(h=r._colors.ansi[e.getBgColor()].css),null===c&&(o=t,s=l),l!==s?(i.fillStyle=c||"",r._fillCells(o,s,n-o,1),o=t,s=l):c!==h&&(i.fillStyle=c||"",r._fillCells(o,s,t-o,1),o=t,s=l),c=h}),null!==c&&(i.fillStyle=c,this._fillCells(o,s,n-o,1)),i.restore()},t.prototype._drawForeground=function(e,t){var r=this;this._forEachCell(e,t,this._characterJoinerRegistry,function(e,t,i){if(!e.isInvisible()&&(r._drawChars(e,t,i),e.isUnderline())){if(r._ctx.save(),e.isInverse())if(e.isBgDefault())r._ctx.fillStyle=r._colors.background.css;else if(e.isBgRGB())r._ctx.fillStyle="rgb("+a.AttributeData.toColorRGB(e.getBgColor()).join(",")+")";else{var n=e.getBgColor();r._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&n<8&&(n+=8),r._ctx.fillStyle=r._colors.ansi[n].css}else if(e.isFgDefault())r._ctx.fillStyle=r._colors.foreground.css;else if(e.isFgRGB())r._ctx.fillStyle="rgb("+a.AttributeData.toColorRGB(e.getFgColor()).join(",")+")";else{var o=e.getFgColor();r._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&o<8&&(o+=8),r._ctx.fillStyle=r._colors.ansi[o].css}r._fillBottomLineAtCells(t,i,e.getWidth()),r._ctx.restore()}})},t.prototype.onGridChanged=function(e,t){0!==this._state.cache.length&&(this._charAtlas&&this._charAtlas.beginFrame(),this._clearCells(0,e,this._bufferService.cols,t-e+1),this._drawBackground(e,t),this._drawForeground(e,t))},t.prototype.onOptionsChanged=function(){this._setTransparency(this._optionsService.options.allowTransparency)},t.prototype._isOverlapping=function(e){if(1!==e.getWidth())return!1;if(e.getCode()<256)return!1;var t=e.getChars();if(this._characterOverlapCache.hasOwnProperty(t))return this._characterOverlapCache[t];this._ctx.save(),this._ctx.font=this._characterFont;var r=Math.floor(this._ctx.measureText(t).width)>this._characterWidth;return this._ctx.restore(),this._characterOverlapCache[t]=r,r},t}(s.BaseRenderLayer);t.TextRenderLayer=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.cache=[]}return e.prototype.resize=function(e,t){for(var r=0;r<e;r++){this.cache.length<=r&&this.cache.push([]);for(var i=this.cache[r].length;i<t;i++)this.cache[r].push(void 0);this.cache[r].length=t}this.cache.length=e},e.prototype.clear=function(){for(var e=0;e<this.cache.length;e++)for(var t=0;t<this.cache[e].length;t++)this.cache[e][t]=void 0},e}();t.GridCache=i},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(9),s=r(43),a=r(25),c=r(45),l=r(11),h=r(26),u=r(10),f=1024,_=1024,d={css:"rgba(0, 0, 0, 0)",rgba:0};function p(e){return e.code<<21|e.bg<<12|e.fg<<3|(e.bold?0:4)+(e.dim?0:2)+(e.italic?0:1)}t.getGlyphCacheKey=p;var v=function(e){function t(t,r){var i=e.call(this)||this;i._config=r,i._drawToCacheCount=0,i._glyphsWaitingOnBitmap=[],i._bitmapCommitTimeout=null,i._bitmap=null,i._cacheCanvas=t.createElement("canvas"),i._cacheCanvas.width=f,i._cacheCanvas.height=_,i._cacheCtx=h.throwIfFalsy(i._cacheCanvas.getContext("2d",{alpha:!0}));var n=t.createElement("canvas");n.width=i._config.scaledCharWidth,n.height=i._config.scaledCharHeight,i._tmpCtx=h.throwIfFalsy(n.getContext("2d",{alpha:i._config.allowTransparency})),i._width=Math.floor(f/i._config.scaledCharWidth),i._height=Math.floor(_/i._config.scaledCharHeight);var o=i._width*i._height;return i._cacheMap=new c.LRUMap(o),i._cacheMap.prealloc(o),i}return n(t,e),t.prototype.dispose=function(){null!==this._bitmapCommitTimeout&&(window.clearTimeout(this._bitmapCommitTimeout),this._bitmapCommitTimeout=null)},t.prototype.beginFrame=function(){this._drawToCacheCount=0},t.prototype.draw=function(e,t,r,i){if(32===t.code)return!0;if(!this._canCache(t))return!1;var n=p(t),o=this._cacheMap.get(n);if(null!=o)return this._drawFromCache(e,o,r,i),!0;if(this._drawToCacheCount<100){var s=void 0;s=this._cacheMap.size<this._cacheMap.capacity?this._cacheMap.size:this._cacheMap.peek().index;var a=this._drawToCache(t,s);return this._cacheMap.set(n,a),this._drawFromCache(e,a,r,i),!0}return!1},t.prototype._canCache=function(e){return e.code<256},t.prototype._toCoordinateX=function(e){return e%this._width*this._config.scaledCharWidth},t.prototype._toCoordinateY=function(e){return Math.floor(e/this._width)*this._config.scaledCharHeight},t.prototype._drawFromCache=function(e,t,r,i){if(!t.isEmpty){var n=this._toCoordinateX(t.index),o=this._toCoordinateY(t.index);e.drawImage(t.inBitmap?this._bitmap:this._cacheCanvas,n,o,this._config.scaledCharWidth,this._config.scaledCharHeight,r,i,this._config.scaledCharWidth,this._config.scaledCharHeight)}},t.prototype._getColorFromAnsiIndex=function(e){return e<this._config.colors.ansi.length?this._config.colors.ansi[e]:a.DEFAULT_ANSI_COLORS[e]},t.prototype._getBackgroundColor=function(e){return this._config.allowTransparency?d:e.bg===o.INVERTED_DEFAULT_COLOR?this._config.colors.foreground:e.bg<256?this._getColorFromAnsiIndex(e.bg):this._config.colors.background},t.prototype._getForegroundColor=function(e){return e.fg===o.INVERTED_DEFAULT_COLOR?u.color.opaque(this._config.colors.background):e.fg<256?this._getColorFromAnsiIndex(e.fg):this._config.colors.foreground},t.prototype._drawToCache=function(e,t){this._drawToCacheCount++,this._tmpCtx.save();var r=this._getBackgroundColor(e);this._tmpCtx.globalCompositeOperation="copy",this._tmpCtx.fillStyle=r.css,this._tmpCtx.fillRect(0,0,this._config.scaledCharWidth,this._config.scaledCharHeight),this._tmpCtx.globalCompositeOperation="source-over";var i=e.bold?this._config.fontWeightBold:this._config.fontWeight,n=e.italic?"italic":"";this._tmpCtx.font=n+" "+i+" "+this._config.fontSize*this._config.devicePixelRatio+"px "+this._config.fontFamily,this._tmpCtx.textBaseline="middle",this._tmpCtx.fillStyle=this._getForegroundColor(e).css,e.dim&&(this._tmpCtx.globalAlpha=o.DIM_OPACITY),this._tmpCtx.fillText(e.chars,0,this._config.scaledCharHeight/2),this._tmpCtx.restore();var s=this._tmpCtx.getImageData(0,0,this._config.scaledCharWidth,this._config.scaledCharHeight),a=!1;this._config.allowTransparency||(a=function(e,t){for(var r=!0,i=t.rgba>>>24,n=t.rgba>>>16&255,o=t.rgba>>>8&255,s=0;s<e.data.length;s+=4)e.data[s]===i&&e.data[s+1]===n&&e.data[s+2]===o?e.data[s+3]=0:r=!1;return r}(s,r));var c=this._toCoordinateX(t),l=this._toCoordinateY(t);this._cacheCtx.putImageData(s,c,l);var h={index:t,isEmpty:a,inBitmap:!1};return this._addGlyphToBitmap(h),h},t.prototype._addGlyphToBitmap=function(e){var t=this;"createImageBitmap"in window&&!l.isFirefox&&!l.isSafari&&(this._glyphsWaitingOnBitmap.push(e),null===this._bitmapCommitTimeout&&(this._bitmapCommitTimeout=window.setTimeout(function(){return t._generateBitmap()},100)))},t.prototype._generateBitmap=function(){var e=this,t=this._glyphsWaitingOnBitmap;this._glyphsWaitingOnBitmap=[],window.createImageBitmap(this._cacheCanvas).then(function(r){e._bitmap=r;for(var i=0;i<t.length;i++){t[i].inBitmap=!0}}),this._bitmapCommitTimeout=null},t}(s.BaseCharAtlas);t.DynamicCharAtlas=v;var g=function(e){function t(t,r){return e.call(this)||this}return n(t,e),t.prototype.draw=function(e,t,r,i){return!1},t}(s.BaseCharAtlas);t.NoneCharAtlas=g},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this._didWarmUp=!1}return e.prototype.dispose=function(){},e.prototype.warmUp=function(){this._didWarmUp||(this._doWarmUp(),this._didWarmUp=!0)},e.prototype._doWarmUp=function(){},e.prototype.beginFrame=function(){},e}();t.BaseCharAtlas=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this._color={},this._rgba={}}return e.prototype.clear=function(){this._color={},this._rgba={}},e.prototype.setCss=function(e,t,r){this._rgba[e]||(this._rgba[e]={}),this._rgba[e][t]=r},e.prototype.getCss=function(e,t){return this._rgba[e]?this._rgba[e][t]:void 0},e.prototype.setColor=function(e,t,r){this._color[e]||(this._color[e]={}),this._color[e][t]=r},e.prototype.getColor=function(e,t){return this._color[e]?this._color[e][t]:void 0},e}();t.ColorContrastCache=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.capacity=e,this._map={},this._head=null,this._tail=null,this._nodePool=[],this.size=0}return e.prototype._unlinkNode=function(e){var t=e.prev,r=e.next;e===this._head&&(this._head=r),e===this._tail&&(this._tail=t),null!==t&&(t.next=r),null!==r&&(r.prev=t)},e.prototype._appendNode=function(e){var t=this._tail;null!==t&&(t.next=e),e.prev=t,e.next=null,this._tail=e,null===this._head&&(this._head=e)},e.prototype.prealloc=function(e){for(var t=this._nodePool,r=0;r<e;r++)t.push({prev:null,next:null,key:null,value:null})},e.prototype.get=function(e){var t=this._map[e];return void 0!==t?(this._unlinkNode(t),this._appendNode(t),t.value):null},e.prototype.peekValue=function(e){var t=this._map[e];return void 0!==t?t.value:null},e.prototype.peek=function(){var e=this._head;return null===e?null:e.value},e.prototype.set=function(e,t){var r=this._map[e];if(void 0!==r)r=this._map[e],this._unlinkNode(r),r.value=t;else if(this.size>=this.capacity)r=this._head,this._unlinkNode(r),delete this._map[r.key],r.key=e,r.value=t,this._map[e]=r;else{var i=this._nodePool;i.length>0?((r=i.pop()).key=e,r.value=t):r={prev:null,next:null,key:e,value:t},this._map[e]=r,this.size++}this._appendNode(r)},e}();t.LRUMap=i},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,r,i,n,o,s){var a=e.call(this,t,"selection",r,!0,i,n,o,s)||this;return a.bufferService=o,a.optionsService=s,a._clearState(),a}return n(t,e),t.prototype._clearState=function(){this._state={start:void 0,end:void 0,columnSelectMode:void 0,ydisp:void 0}},t.prototype.resize=function(t){e.prototype.resize.call(this,t),this._clearState()},t.prototype.reset=function(){this._state.start&&this._state.end&&(this._clearState(),this._clearAll())},t.prototype.onSelectionChanged=function(e,t,r){if(this._didStateChange(e,t,r,this._bufferService.buffer.ydisp))if(this._clearAll(),e&&t){var i=e[1]-this._bufferService.buffer.ydisp,n=t[1]-this._bufferService.buffer.ydisp,o=Math.max(i,0),s=Math.min(n,this._bufferService.rows-1);if(!(o>=this._bufferService.rows||s<0)){if(this._ctx.fillStyle=this._colors.selection.css,r){var a=e[0],c=t[0]-a,l=s-o+1;this._fillCells(a,o,c,l)}else{a=i===o?e[0]:0;var h=o===s?t[0]:this._bufferService.cols;this._fillCells(a,o,h-a,1);var u=Math.max(s-o-1,0);if(this._fillCells(0,o+1,this._bufferService.cols,u),o!==s){var f=n===s?t[0]:this._bufferService.cols;this._fillCells(0,s,f,1)}}this._state.start=[e[0],e[1]],this._state.end=[t[0],t[1]],this._state.columnSelectMode=r,this._state.ydisp=this._bufferService.buffer.ydisp}}else this._clearState()},t.prototype._didStateChange=function(e,t,r,i){return!this._areCoordinatesEqual(e,this._state.start)||!this._areCoordinatesEqual(t,this._state.end)||r!==this._state.columnSelectMode||i!==this._state.ydisp},t.prototype._areCoordinatesEqual=function(e,t){return!(!e||!t)&&(e[0]===t[0]&&e[1]===t[1])},t}(r(13).BaseRenderLayer);t.SelectionRenderLayer=o},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(13),s=r(5),a=function(e){function t(t,r,i,n,o,a,c,l,h){var u=e.call(this,t,"cursor",r,!0,i,n,a,c)||this;return u._onRequestRefreshRowsEvent=o,u.bufferService=a,u.optionsService=c,u._coreService=l,u._coreBrowserService=h,u._cell=new s.CellData,u._state={x:0,y:0,isFocused:!1,style:"",width:0},u._cursorRenderers={bar:u._renderBarCursor.bind(u),block:u._renderBlockCursor.bind(u),underline:u._renderUnderlineCursor.bind(u)},u}return n(t,e),t.prototype.resize=function(t){e.prototype.resize.call(this,t),this._state={x:0,y:0,isFocused:!1,style:"",width:0}},t.prototype.reset=function(){this._clearCursor(),this._cursorBlinkStateManager&&(this._cursorBlinkStateManager.dispose(),this._cursorBlinkStateManager=void 0,this.onOptionsChanged())},t.prototype.onBlur=function(){this._cursorBlinkStateManager&&this._cursorBlinkStateManager.pause(),this._onRequestRefreshRowsEvent.fire({start:this._bufferService.buffer.y,end:this._bufferService.buffer.y})},t.prototype.onFocus=function(){this._cursorBlinkStateManager?this._cursorBlinkStateManager.resume():this._onRequestRefreshRowsEvent.fire({start:this._bufferService.buffer.y,end:this._bufferService.buffer.y})},t.prototype.onOptionsChanged=function(){var e,t=this;this._optionsService.options.cursorBlink?this._cursorBlinkStateManager||(this._cursorBlinkStateManager=new c(this._coreBrowserService.isFocused,function(){t._render(!0)})):(null===(e=this._cursorBlinkStateManager)||void 0===e||e.dispose(),this._cursorBlinkStateManager=void 0),this._onRequestRefreshRowsEvent.fire({start:this._bufferService.buffer.y,end:this._bufferService.buffer.y})},t.prototype.onCursorMove=function(){this._cursorBlinkStateManager&&this._cursorBlinkStateManager.restartBlinkAnimation()},t.prototype.onGridChanged=function(e,t){!this._cursorBlinkStateManager||this._cursorBlinkStateManager.isPaused?this._render(!1):this._cursorBlinkStateManager.restartBlinkAnimation()},t.prototype._render=function(e){if(this._coreService.isCursorInitialized&&!this._coreService.isCursorHidden){var t=this._bufferService.buffer.ybase+this._bufferService.buffer.y,r=t-this._bufferService.buffer.ydisp;if(r<0||r>=this._bufferService.rows)this._clearCursor();else if(this._bufferService.buffer.lines.get(t).loadCell(this._bufferService.buffer.x,this._cell),void 0!==this._cell.content){if(!this._coreBrowserService.isFocused){this._clearCursor(),this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css;var i=this._optionsService.options.cursorStyle;return i&&"block"!==i?this._cursorRenderers[i](this._bufferService.buffer.x,r,this._cell):this._renderBlurCursor(this._bufferService.buffer.x,r,this._cell),this._ctx.restore(),this._state.x=this._bufferService.buffer.x,this._state.y=r,this._state.isFocused=!1,this._state.style=i,void(this._state.width=this._cell.getWidth())}if(!this._cursorBlinkStateManager||this._cursorBlinkStateManager.isCursorVisible){if(this._state){if(this._state.x===this._bufferService.buffer.x&&this._state.y===r&&this._state.isFocused===this._coreBrowserService.isFocused&&this._state.style===this._optionsService.options.cursorStyle&&this._state.width===this._cell.getWidth())return;this._clearCursor()}this._ctx.save(),this._cursorRenderers[this._optionsService.options.cursorStyle||"block"](this._bufferService.buffer.x,r,this._cell),this._ctx.restore(),this._state.x=this._bufferService.buffer.x,this._state.y=r,this._state.isFocused=!1,this._state.style=this._optionsService.options.cursorStyle,this._state.width=this._cell.getWidth()}else this._clearCursor()}}else this._clearCursor()},t.prototype._clearCursor=function(){this._state&&(this._clearCells(this._state.x,this._state.y,this._state.width,1),this._state={x:0,y:0,isFocused:!1,style:"",width:0})},t.prototype._renderBarCursor=function(e,t,r){this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css,this._fillLeftLineAtCell(e,t,this._optionsService.options.cursorWidth),this._ctx.restore()},t.prototype._renderBlockCursor=function(e,t,r){this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css,this._fillCells(e,t,r.getWidth(),1),this._ctx.fillStyle=this._colors.cursorAccent.css,this._fillCharTrueColor(r,e,t),this._ctx.restore()},t.prototype._renderUnderlineCursor=function(e,t,r){this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css,this._fillBottomLineAtCells(e,t),this._ctx.restore()},t.prototype._renderBlurCursor=function(e,t,r){this._ctx.save(),this._ctx.strokeStyle=this._colors.cursor.css,this._strokeRectAtCell(e,t,r.getWidth(),1),this._ctx.restore()},t}(o.BaseRenderLayer);t.CursorRenderLayer=a;var c=function(){function e(e,t){this._renderCallback=t,this.isCursorVisible=!0,e&&this._restartInterval()}return Object.defineProperty(e.prototype,"isPaused",{get:function(){return!(this._blinkStartTimeout||this._blinkInterval)},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._blinkInterval&&(window.clearInterval(this._blinkInterval),this._blinkInterval=void 0),this._blinkStartTimeout&&(window.clearTimeout(this._blinkStartTimeout),this._blinkStartTimeout=void 0),this._animationFrame&&(window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)},e.prototype.restartBlinkAnimation=function(){var e=this;this.isPaused||(this._animationTimeRestarted=Date.now(),this.isCursorVisible=!0,this._animationFrame||(this._animationFrame=window.requestAnimationFrame(function(){e._renderCallback(),e._animationFrame=void 0})))},e.prototype._restartInterval=function(e){var t=this;void 0===e&&(e=600),this._blinkInterval&&window.clearInterval(this._blinkInterval),this._blinkStartTimeout=setTimeout(function(){if(t._animationTimeRestarted){var e=600-(Date.now()-t._animationTimeRestarted);if(t._animationTimeRestarted=void 0,e>0)return void t._restartInterval(e)}t.isCursorVisible=!1,t._animationFrame=window.requestAnimationFrame(function(){t._renderCallback(),t._animationFrame=void 0}),t._blinkInterval=setInterval(function(){if(t._animationTimeRestarted){var e=600-(Date.now()-t._animationTimeRestarted);return t._animationTimeRestarted=void 0,void t._restartInterval(e)}t.isCursorVisible=!t.isCursorVisible,t._animationFrame=window.requestAnimationFrame(function(){t._renderCallback(),t._animationFrame=void 0})},600)},e)},e.prototype.pause=function(){this.isCursorVisible=!0,this._blinkInterval&&(window.clearInterval(this._blinkInterval),this._blinkInterval=void 0),this._blinkStartTimeout&&(window.clearTimeout(this._blinkStartTimeout),this._blinkStartTimeout=void 0),this._animationFrame&&(window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)},e.prototype.resume=function(){this._animationTimeRestarted=void 0,this._restartInterval(),this.restartBlinkAnimation()},e}()},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(13),s=r(9),a=r(24),c=function(e){function t(t,r,i,n,o,s,a){var c=e.call(this,t,"link",r,!0,i,n,s,a)||this;return c.bufferService=s,c.optionsService=a,o.onLinkHover(function(e){return c._onLinkHover(e)}),o.onLinkLeave(function(e){return c._onLinkLeave(e)}),c}return n(t,e),t.prototype.resize=function(t){e.prototype.resize.call(this,t),this._state=void 0},t.prototype.reset=function(){this._clearCurrentLink()},t.prototype._clearCurrentLink=function(){if(this._state){this._clearCells(this._state.x1,this._state.y1,this._state.cols-this._state.x1,1);var e=this._state.y2-this._state.y1-1;e>0&&this._clearCells(0,this._state.y1+1,this._state.cols,e),this._clearCells(0,this._state.y2,this._state.x2,1),this._state=void 0}},t.prototype._onLinkHover=function(e){if(e.fg===s.INVERTED_DEFAULT_COLOR?this._ctx.fillStyle=this._colors.background.css:e.fg&&a.is256Color(e.fg)?this._ctx.fillStyle=this._colors.ansi[e.fg].css:this._ctx.fillStyle=this._colors.foreground.css,e.y1===e.y2)this._fillBottomLineAtCells(e.x1,e.y1,e.x2-e.x1);else{this._fillBottomLineAtCells(e.x1,e.y1,e.cols-e.x1);for(var t=e.y1+1;t<e.y2;t++)this._fillBottomLineAtCells(0,t,e.cols);this._fillBottomLineAtCells(0,e.y2,e.x2)}this._state=e},t.prototype._onLinkLeave=function(e){this._clearCurrentLink()},t}(o.BaseRenderLayer);t.LinkRenderLayer=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),n=function(){function e(e,t,r,n){this._bufferService=e,this._logService=t,this._optionsService=r,this._unicodeService=n,this._linkMatchers=[],this._nextLinkMatcherId=0,this._onLinkHover=new i.EventEmitter,this._onLinkLeave=new i.EventEmitter,this._onLinkTooltip=new i.EventEmitter,this._rowsToLinkify={start:void 0,end:void 0}}return Object.defineProperty(e.prototype,"onLinkHover",{get:function(){return this._onLinkHover.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onLinkLeave",{get:function(){return this._onLinkLeave.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onLinkTooltip",{get:function(){return this._onLinkTooltip.event},enumerable:!0,configurable:!0}),e.prototype.attachToDom=function(e,t){this._element=e,this._mouseZoneManager=t},e.prototype.linkifyRows=function(t,r){var i=this;this._mouseZoneManager&&(void 0===this._rowsToLinkify.start||void 0===this._rowsToLinkify.end?(this._rowsToLinkify.start=t,this._rowsToLinkify.end=r):(this._rowsToLinkify.start=Math.min(this._rowsToLinkify.start,t),this._rowsToLinkify.end=Math.max(this._rowsToLinkify.end,r)),this._mouseZoneManager.clearAll(t,r),this._rowsTimeoutId&&clearTimeout(this._rowsTimeoutId),this._rowsTimeoutId=setTimeout(function(){return i._linkifyRows()},e._timeBeforeLatency))},e.prototype._linkifyRows=function(){this._rowsTimeoutId=void 0;var e=this._bufferService.buffer;if(void 0!==this._rowsToLinkify.start&&void 0!==this._rowsToLinkify.end){var t=e.ydisp+this._rowsToLinkify.start;if(!(t>=e.lines.length)){for(var r=e.ydisp+Math.min(this._rowsToLinkify.end,this._bufferService.rows)+1,i=Math.ceil(2e3/this._bufferService.cols),n=this._bufferService.buffer.iterator(!1,t,r,i,i);n.hasNext();)for(var o=n.next(),s=0;s<this._linkMatchers.length;s++)this._doLinkifyRow(o.range.first,o.content,this._linkMatchers[s]);this._rowsToLinkify.start=void 0,this._rowsToLinkify.end=void 0}}else this._logService.debug("_rowToLinkify was unset before _linkifyRows was called")},e.prototype.registerLinkMatcher=function(e,t,r){if(void 0===r&&(r={}),!t)throw new Error("handler must be defined");var i={id:this._nextLinkMatcherId++,regex:e,handler:t,matchIndex:r.matchIndex,validationCallback:r.validationCallback,hoverTooltipCallback:r.tooltipCallback,hoverLeaveCallback:r.leaveCallback,willLinkActivate:r.willLinkActivate,priority:r.priority||0};return this._addLinkMatcherToList(i),i.id},e.prototype._addLinkMatcherToList=function(e){if(0!==this._linkMatchers.length){for(var t=this._linkMatchers.length-1;t>=0;t--)if(e.priority<=this._linkMatchers[t].priority)return void this._linkMatchers.splice(t+1,0,e);this._linkMatchers.splice(0,0,e)}else this._linkMatchers.push(e)},e.prototype.deregisterLinkMatcher=function(e){for(var t=0;t<this._linkMatchers.length;t++)if(this._linkMatchers[t].id===e)return this._linkMatchers.splice(t,1),!0;return!1},e.prototype._doLinkifyRow=function(e,t,r){for(var i,n=this,o=new RegExp(r.regex.source,(r.regex.flags||"")+"g"),s=-1,a=function(){var a=i["number"!=typeof r.matchIndex?0:r.matchIndex];if(!a)return c._logService.debug("match found without corresponding matchIndex",i,r),"break";if(s=t.indexOf(a,s+1),o.lastIndex=s+a.length,s<0)return"break";var l=c._bufferService.buffer.stringIndexToBufferIndex(e,s);if(l[0]<0)return"break";var h=c._bufferService.buffer.lines.get(l[0]);if(!h)return"break";var u=h.getFg(l[1]),f=u?u>>9&511:void 0;r.validationCallback?r.validationCallback(a,function(e){n._rowsTimeoutId||e&&n._addLink(l[1],l[0]-n._bufferService.buffer.ydisp,a,r,f)}):c._addLink(l[1],l[0]-c._bufferService.buffer.ydisp,a,r,f)},c=this;null!==(i=o.exec(t));){if("break"===a())break}},e.prototype._addLink=function(e,t,r,i,n){var s=this;if(this._mouseZoneManager&&this._element){var a=this._unicodeService.getStringCellWidth(r),c=e%this._bufferService.cols,l=t+Math.floor(e/this._bufferService.cols),h=(c+a)%this._bufferService.cols,u=l+Math.floor((c+a)/this._bufferService.cols);0===h&&(h=this._bufferService.cols,u--),this._mouseZoneManager.add(new o(c+1,l+1,h+1,u+1,function(e){if(i.handler)return i.handler(e,r);var t=window.open();t?(t.opener=null,t.location.href=r):console.warn("Opening link blocked as opener could not be cleared")},function(){s._onLinkHover.fire(s._createLinkHoverEvent(c,l,h,u,n)),s._element.classList.add("xterm-cursor-pointer")},function(e){s._onLinkTooltip.fire(s._createLinkHoverEvent(c,l,h,u,n)),i.hoverTooltipCallback&&i.hoverTooltipCallback(e,r,{start:{x:c,y:l},end:{x:h,y:u}})},function(){s._onLinkLeave.fire(s._createLinkHoverEvent(c,l,h,u,n)),s._element.classList.remove("xterm-cursor-pointer"),i.hoverLeaveCallback&&i.hoverLeaveCallback()},function(e){return!i.willLinkActivate||i.willLinkActivate(e,r)}))}},e.prototype._createLinkHoverEvent=function(e,t,r,i,n){return{x1:e,y1:t,x2:r,y2:i,cols:this._bufferService.cols,fg:n}},e._timeBeforeLatency=200,e}();t.Linkifier=n;var o=function(e,t,r,i,n,o,s,a,c){this.x1=e,this.y1=t,this.x2=r,this.y2=i,this.clickCallback=n,this.hoverCallback=o,this.tooltipCallback=s,this.leaveCallback=a,this.willLinkActivate=c};t.MouseZone=o},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(11),s=r(51),a=r(5),c=r(1),l=r(4),h=r(0),u=r(28),f=r(52),_=String.fromCharCode(160),d=new RegExp(_,"g"),p=function(){function e(e,t,r,i,n,o,l,h){var u=this;this._scrollLines=e,this._element=t,this._screenElement=r,this._charSizeService=i,this._bufferService=n,this._coreService=o,this._mouseService=l,this._optionsService=h,this._dragScrollAmount=0,this._enabled=!0,this._workCell=new a.CellData,this._mouseDownTimeStamp=0,this._onLinuxMouseSelection=new c.EventEmitter,this._onRedrawRequest=new c.EventEmitter,this._onSelectionChange=new c.EventEmitter,this._mouseMoveListener=function(e){return u._onMouseMove(e)},this._mouseUpListener=function(e){return u._onMouseUp(e)},this._coreService.onUserInput(function(){u.hasSelection&&u.clearSelection()}),this._trimListener=this._bufferService.buffer.lines.onTrim(function(e){return u._onTrim(e)}),this._bufferService.buffers.onBufferActivate(function(e){return u._onBufferActivate(e)}),this.enable(),this._model=new s.SelectionModel(this._bufferService),this._activeSelectionMode=0}return Object.defineProperty(e.prototype,"onLinuxMouseSelection",{get:function(){return this._onLinuxMouseSelection.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onRedrawRequest",{get:function(){return this._onRedrawRequest.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onSelectionChange",{get:function(){return this._onSelectionChange.event},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._removeMouseDownListeners()},e.prototype.reset=function(){this.clearSelection()},e.prototype.disable=function(){this.clearSelection(),this._enabled=!1},e.prototype.enable=function(){this._enabled=!0},Object.defineProperty(e.prototype,"selectionStart",{get:function(){return this._model.finalSelectionStart},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectionEnd",{get:function(){return this._model.finalSelectionEnd},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasSelection",{get:function(){var e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd;return!(!e||!t)&&(e[0]!==t[0]||e[1]!==t[1])},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectionText",{get:function(){var e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd;if(!e||!t)return"";var r=this._bufferService.buffer,i=[];if(3===this._activeSelectionMode){if(e[0]===t[0])return"";for(var n=e[1];n<=t[1];n++){var s=r.translateBufferLineToString(n,!0,e[0],t[0]);i.push(s)}}else{var a=e[1]===t[1]?t[0]:void 0;i.push(r.translateBufferLineToString(e[1],!0,e[0],a));for(n=e[1]+1;n<=t[1]-1;n++){var c=r.lines.get(n);s=r.translateBufferLineToString(n,!0);c&&c.isWrapped?i[i.length-1]+=s:i.push(s)}if(e[1]!==t[1]){c=r.lines.get(t[1]),s=r.translateBufferLineToString(t[1],!0,0,t[0]);c&&c.isWrapped?i[i.length-1]+=s:i.push(s)}}return i.map(function(e){return e.replace(d," ")}).join(o.isWindows?"\r\n":"\n")},enumerable:!0,configurable:!0}),e.prototype.clearSelection=function(){this._model.clearSelection(),this._removeMouseDownListeners(),this.refresh(),this._onSelectionChange.fire()},e.prototype.refresh=function(e){var t=this;(this._refreshAnimationFrame||(this._refreshAnimationFrame=window.requestAnimationFrame(function(){return t._refresh()})),o.isLinux&&e)&&(this.selectionText.length&&this._onLinuxMouseSelection.fire(this.selectionText))},e.prototype._refresh=function(){this._refreshAnimationFrame=void 0,this._onRedrawRequest.fire({start:this._model.finalSelectionStart,end:this._model.finalSelectionEnd,columnSelectMode:3===this._activeSelectionMode})},e.prototype.isClickInSelection=function(e){var t=this._getMouseBufferCoords(e),r=this._model.finalSelectionStart,i=this._model.finalSelectionEnd;return!!(r&&i&&t)&&this._areCoordsInSelection(t,r,i)},e.prototype._areCoordsInSelection=function(e,t,r){return e[1]>t[1]&&e[1]<r[1]||t[1]===r[1]&&e[1]===t[1]&&e[0]>=t[0]&&e[0]<r[0]||t[1]<r[1]&&e[1]===r[1]&&e[0]<r[0]||t[1]<r[1]&&e[1]===t[1]&&e[0]>=t[0]},e.prototype.selectWordAtCursor=function(e){var t=this._getMouseBufferCoords(e);t&&(this._selectWordAt(t,!1),this._model.selectionEnd=void 0,this.refresh(!0))},e.prototype.selectAll=function(){this._model.isSelectAllActive=!0,this.refresh(),this._onSelectionChange.fire()},e.prototype.selectLines=function(e,t){this._model.clearSelection(),e=Math.max(e,0),t=Math.min(t,this._bufferService.buffer.lines.length-1),this._model.selectionStart=[0,e],this._model.selectionEnd=[this._bufferService.cols,t],this.refresh(),this._onSelectionChange.fire()},e.prototype._onTrim=function(e){this._model.onTrim(e)&&this.refresh()},e.prototype._getMouseBufferCoords=function(e){var t=this._mouseService.getCoords(e,this._screenElement,this._bufferService.cols,this._bufferService.rows,!0);if(t)return t[0]--,t[1]--,t[1]+=this._bufferService.buffer.ydisp,t},e.prototype._getMouseEventScrollAmount=function(e){var t=u.getCoordsRelativeToElement(e,this._screenElement)[1],r=this._bufferService.rows*Math.ceil(this._charSizeService.height*this._optionsService.options.lineHeight);return t>=0&&t<=r?0:(t>r&&(t-=r),t=Math.min(Math.max(t,-50),50),(t/=50)/Math.abs(t)+Math.round(14*t))},e.prototype.shouldForceSelection=function(e){return o.isMac?e.altKey&&this._optionsService.options.macOptionClickForcesSelection:e.shiftKey},e.prototype.onMouseDown=function(e){if(this._mouseDownTimeStamp=e.timeStamp,(2!==e.button||!this.hasSelection)&&0===e.button){if(!this._enabled){if(!this.shouldForceSelection(e))return;e.stopPropagation()}e.preventDefault(),this._dragScrollAmount=0,this._enabled&&e.shiftKey?this._onIncrementalClick(e):1===e.detail?this._onSingleClick(e):2===e.detail?this._onDoubleClick(e):3===e.detail&&this._onTripleClick(e),this._addMouseDownListeners(),this.refresh(!0)}},e.prototype._addMouseDownListeners=function(){var e=this;this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.addEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.addEventListener("mouseup",this._mouseUpListener)),this._dragScrollIntervalTimer=window.setInterval(function(){return e._dragScroll()},50)},e.prototype._removeMouseDownListeners=function(){this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.removeEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.removeEventListener("mouseup",this._mouseUpListener)),clearInterval(this._dragScrollIntervalTimer),this._dragScrollIntervalTimer=void 0},e.prototype._onIncrementalClick=function(e){this._model.selectionStart&&(this._model.selectionEnd=this._getMouseBufferCoords(e))},e.prototype._onSingleClick=function(e){if(this._model.selectionStartLength=0,this._model.isSelectAllActive=!1,this._activeSelectionMode=this.shouldColumnSelect(e)?3:0,this._model.selectionStart=this._getMouseBufferCoords(e),this._model.selectionStart){this._model.selectionEnd=void 0;var t=this._bufferService.buffer.lines.get(this._model.selectionStart[1]);t&&t.length!==this._model.selectionStart[0]&&0===t.hasWidth(this._model.selectionStart[0])&&this._model.selectionStart[0]++}},e.prototype._onDoubleClick=function(e){var t=this._getMouseBufferCoords(e);t&&(this._activeSelectionMode=1,this._selectWordAt(t,!0))},e.prototype._onTripleClick=function(e){var t=this._getMouseBufferCoords(e);t&&(this._activeSelectionMode=2,this._selectLineAt(t[1]))},e.prototype.shouldColumnSelect=function(e){return e.altKey&&!(o.isMac&&this._optionsService.options.macOptionClickForcesSelection)},e.prototype._onMouseMove=function(e){if(e.stopImmediatePropagation(),this._model.selectionStart){var t=this._model.selectionEnd?[this._model.selectionEnd[0],this._model.selectionEnd[1]]:null;if(this._model.selectionEnd=this._getMouseBufferCoords(e),this._model.selectionEnd){2===this._activeSelectionMode?this._model.selectionEnd[1]<this._model.selectionStart[1]?this._model.selectionEnd[0]=0:this._model.selectionEnd[0]=this._bufferService.cols:1===this._activeSelectionMode&&this._selectToWordAt(this._model.selectionEnd),this._dragScrollAmount=this._getMouseEventScrollAmount(e),3!==this._activeSelectionMode&&(this._dragScrollAmount>0?this._model.selectionEnd[0]=this._bufferService.cols:this._dragScrollAmount<0&&(this._model.selectionEnd[0]=0));var r=this._bufferService.buffer;if(this._model.selectionEnd[1]<r.lines.length){var i=r.lines.get(this._model.selectionEnd[1]);i&&0===i.hasWidth(this._model.selectionEnd[0])&&this._model.selectionEnd[0]++}t&&t[0]===this._model.selectionEnd[0]&&t[1]===this._model.selectionEnd[1]||this.refresh(!0)}else this.refresh(!0)}},e.prototype._dragScroll=function(){if(this._model.selectionEnd&&this._model.selectionStart&&this._dragScrollAmount){this._scrollLines(this._dragScrollAmount,!1);var e=this._bufferService.buffer;this._dragScrollAmount>0?(3!==this._activeSelectionMode&&(this._model.selectionEnd[0]=this._bufferService.cols),this._model.selectionEnd[1]=Math.min(e.ydisp+this._bufferService.rows,e.lines.length-1)):(3!==this._activeSelectionMode&&(this._model.selectionEnd[0]=0),this._model.selectionEnd[1]=e.ydisp),this.refresh()}},e.prototype._onMouseUp=function(e){var t=e.timeStamp-this._mouseDownTimeStamp;if(this._removeMouseDownListeners(),this.selectionText.length<=1&&t<500){if(e.altKey&&this._bufferService.buffer.ybase===this._bufferService.buffer.ydisp){var r=this._mouseService.getCoords(e,this._element,this._bufferService.cols,this._bufferService.rows,!1);if(r&&void 0!==r[0]&&void 0!==r[1]){var i=f.moveToCellSequence(r[0]-1,r[1]-1,this._bufferService,this._coreService.decPrivateModes.applicationCursorKeys);this._coreService.triggerDataEvent(i,!0)}}}else this.hasSelection&&this._onSelectionChange.fire()},e.prototype._onBufferActivate=function(e){var t=this;this.clearSelection(),this._trimListener.dispose(),this._trimListener=e.activeBuffer.lines.onTrim(function(e){return t._onTrim(e)})},e.prototype._convertViewportColToCharacterIndex=function(e,t){for(var r=t[0],i=0;t[0]>=i;i++){var n=e.loadCell(i,this._workCell).getChars().length;0===this._workCell.getWidth()?r--:n>1&&t[0]!==i&&(r+=n-1)}return r},e.prototype.setSelection=function(e,t,r){this._model.clearSelection(),this._removeMouseDownListeners(),this._model.selectionStart=[e,t],this._model.selectionStartLength=r,this.refresh()},e.prototype._getWordAt=function(e,t,r,i){if(void 0===r&&(r=!0),void 0===i&&(i=!0),!(e[0]>=this._bufferService.cols)){var n=this._bufferService.buffer,o=n.lines.get(e[1]);if(o){var s=n.translateBufferLineToString(e[1],!1),a=this._convertViewportColToCharacterIndex(o,e),c=a,l=e[0]-a,h=0,u=0,f=0,_=0;if(" "===s.charAt(a)){for(;a>0&&" "===s.charAt(a-1);)a--;for(;c<s.length&&" "===s.charAt(c+1);)c++}else{var d=e[0],p=e[0];0===o.getWidth(d)&&(h++,d--),2===o.getWidth(p)&&(u++,p++);var v=o.getString(p).length;for(v>1&&(_+=v-1,c+=v-1);d>0&&a>0&&!this._isCharWordSeparator(o.loadCell(d-1,this._workCell));){o.loadCell(d-1,this._workCell);var g=this._workCell.getChars().length;0===this._workCell.getWidth()?(h++,d--):g>1&&(f+=g-1,a-=g-1),a--,d--}for(;p<o.length&&c+1<s.length&&!this._isCharWordSeparator(o.loadCell(p+1,this._workCell));){o.loadCell(p+1,this._workCell);var y=this._workCell.getChars().length;2===this._workCell.getWidth()?(u++,p++):y>1&&(_+=y-1,c+=y-1),c++,p++}}c++;var b=a+l-h+f,m=Math.min(this._bufferService.cols,c-a+h+u-f-_);if(t||""!==s.slice(a,c).trim()){if(r&&0===b&&32!==o.getCodePoint(0)){var S=n.lines.get(e[1]-1);if(S&&o.isWrapped&&32!==S.getCodePoint(this._bufferService.cols-1)){var C=this._getWordAt([this._bufferService.cols-1,e[1]-1],!1,!0,!1);if(C){var w=this._bufferService.cols-C.start;b-=w,m+=w}}}if(i&&b+m===this._bufferService.cols&&32!==o.getCodePoint(this._bufferService.cols-1)){var E=n.lines.get(e[1]+1);if(E&&E.isWrapped&&32!==E.getCodePoint(0)){var L=this._getWordAt([0,e[1]+1],!1,!1,!0);L&&(m+=L.length)}}return{start:b,length:m}}}}},e.prototype._selectWordAt=function(e,t){var r=this._getWordAt(e,t);if(r){for(;r.start<0;)r.start+=this._bufferService.cols,e[1]--;this._model.selectionStart=[r.start,e[1]],this._model.selectionStartLength=r.length}},e.prototype._selectToWordAt=function(e){var t=this._getWordAt(e,!0);if(t){for(var r=e[1];t.start<0;)t.start+=this._bufferService.cols,r--;if(!this._model.areSelectionValuesReversed())for(;t.start+t.length>this._bufferService.cols;)t.length-=this._bufferService.cols,r++;this._model.selectionEnd=[this._model.areSelectionValuesReversed()?t.start:t.start+t.length,r]}},e.prototype._isCharWordSeparator=function(e){return 0!==e.getWidth()&&this._optionsService.options.wordSeparator.indexOf(e.getChars())>=0},e.prototype._selectLineAt=function(e){var t=this._bufferService.buffer.getWrappedRangeForLine(e);this._model.selectionStart=[0,t.first],this._model.selectionEnd=[this._bufferService.cols,t.last],this._model.selectionStartLength=0},e=i([n(3,l.ICharSizeService),n(4,h.IBufferService),n(5,h.ICoreService),n(6,l.IMouseService),n(7,h.IOptionsService)],e)}();t.SelectionService=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this._bufferService=e,this.isSelectAllActive=!1,this.selectionStartLength=0}return e.prototype.clearSelection=function(){this.selectionStart=void 0,this.selectionEnd=void 0,this.isSelectAllActive=!1,this.selectionStartLength=0},Object.defineProperty(e.prototype,"finalSelectionStart",{get:function(){return this.isSelectAllActive?[0,0]:this.selectionEnd&&this.selectionStart&&this.areSelectionValuesReversed()?this.selectionEnd:this.selectionStart},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"finalSelectionEnd",{get:function(){if(this.isSelectAllActive)return[this._bufferService.cols,this._bufferService.buffer.ybase+this._bufferService.rows-1];if(this.selectionStart){if(!this.selectionEnd||this.areSelectionValuesReversed()){var e=this.selectionStart[0]+this.selectionStartLength;return e>this._bufferService.cols?[e%this._bufferService.cols,this.selectionStart[1]+Math.floor(e/this._bufferService.cols)]:[e,this.selectionStart[1]]}return this.selectionStartLength&&this.selectionEnd[1]===this.selectionStart[1]?[Math.max(this.selectionStart[0]+this.selectionStartLength,this.selectionEnd[0]),this.selectionEnd[1]]:this.selectionEnd}},enumerable:!0,configurable:!0}),e.prototype.areSelectionValuesReversed=function(){var e=this.selectionStart,t=this.selectionEnd;return!(!e||!t)&&(e[1]>t[1]||e[1]===t[1]&&e[0]>t[0])},e.prototype.onTrim=function(e){return this.selectionStart&&(this.selectionStart[1]-=e),this.selectionEnd&&(this.selectionEnd[1]-=e),this.selectionEnd&&this.selectionEnd[1]<0?(this.clearSelection(),!0):(this.selectionStart&&this.selectionStart[1]<0&&(this.selectionStart[1]=0),!1)},e}();t.SelectionModel=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(12);function n(e,t,r,i){var n=e-o(r,e),s=t-o(r,t);return h(Math.abs(n-s)-function(e,t,r){for(var i=0,n=e-o(r,e),s=t-o(r,t),c=0;c<Math.abs(n-s);c++){var l="A"===a(e,t)?-1:1,h=r.buffer.lines.get(n+l*c);h&&h.isWrapped&&i++}return i}(e,t,r),l(a(e,t),i))}function o(e,t){for(var r=0,i=e.buffer.lines.get(t),n=i&&i.isWrapped;n&&t>=0&&t<e.rows;)r++,n=(i=e.buffer.lines.get(--t))&&i.isWrapped;return r}function s(e,t,r,i,s,a){var c;return c=n(r,i,s,a).length>0?i-o(s,i):t,e<r&&c<=i||e>=r&&c<i?"C":"D"}function a(e,t){return e>t?"A":"B"}function c(e,t,r,i,n,o){for(var s=e,a=t,c="";s!==r||a!==i;)s+=n?1:-1,n&&s>o.cols-1?(c+=o.buffer.translateBufferLineToString(a,!1,e,s),s=0,e=0,a++):!n&&s<0&&(c+=o.buffer.translateBufferLineToString(a,!1,0,e+1),e=s=o.cols-1,a--);return c+o.buffer.translateBufferLineToString(a,!1,e,s)}function l(e,t){var r=t?"O":"[";return i.C0.ESC+r+e}function h(e,t){e=Math.floor(e);for(var r="",i=0;i<e;i++)r+=t;return r}t.moveToCellSequence=function(e,t,r,i){var a,u=r.buffer.x,f=r.buffer.y;if(!r.buffer.hasScrollback)return function(e,t,r,i,s,a){if(0===n(t,i,s,a).length)return"";return h(c(e,t,e,t-o(s,t),!1,s).length,l("D",a))}(u,f,0,t,r,i)+n(f,t,r,i)+function(e,t,r,i,a,u){var f;f=n(t,i,a,u).length>0?i-o(a,i):t;var _=i,d=s(e,t,r,i,a,u);return h(c(e,f,r,_,"C"===d,a).length,l(d,u))}(u,f,e,t,r,i);if(f===t)return a=u>e?"D":"C",h(Math.abs(u-e),l(a,i));a=f>t?"D":"C";var _=Math.abs(f-t);return h(function(e,t){return t.cols-e}(f>t?e:u,r)+(_-1)*r.cols+1+((f>t?u:e)-1),l(a,i))}},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s=function(){function e(e){this._optionsService=e}return Object.defineProperty(e,"audioContext",{get:function(){if(!e._audioContext){var t=window.AudioContext||window.webkitAudioContext;if(!t)return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"),null;e._audioContext=new t}return e._audioContext},enumerable:!0,configurable:!0}),e.prototype.playBellSound=function(){var t=e.audioContext;if(t){var r=t.createBufferSource();t.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.options.bellSound)),function(e){r.buffer=e,r.connect(t.destination),r.start(0)})}},e.prototype._base64ToArrayBuffer=function(e){for(var t=window.atob(e),r=t.length,i=new Uint8Array(r),n=0;n<r;n++)i[n]=t.charCodeAt(n);return i.buffer},e.prototype._removeMimeType=function(e){return e.split(",")[1]},e=i([n(0,o.IOptionsService)],e)}();t.SoundService=s},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),c=r(8),l=r(4),h=r(0),u=function(e){function t(t,r,i,n,o){var s=e.call(this)||this;return s._element=t,s._screenElement=r,s._bufferService=i,s._mouseService=n,s._selectionService=o,s._zones=[],s._areZonesActive=!1,s._lastHoverCoords=[void 0,void 0],s._initialSelectionLength=0,s.register(c.addDisposableDomListener(s._element,"mousedown",function(e){return s._onMouseDown(e)})),s._mouseMoveListener=function(e){return s._onMouseMove(e)},s._mouseLeaveListener=function(e){return s._onMouseLeave(e)},s._clickListener=function(e){return s._onClick(e)},s}return n(t,e),t.prototype.dispose=function(){e.prototype.dispose.call(this),this._deactivate()},t.prototype.add=function(e){this._zones.push(e),1===this._zones.length&&this._activate()},t.prototype.clearAll=function(e,t){if(0!==this._zones.length){e&&t||(e=0,t=this._bufferService.rows-1);for(var r=0;r<this._zones.length;r++){var i=this._zones[r];(i.y1>e&&i.y1<=t+1||i.y2>e&&i.y2<=t+1||i.y1<e&&i.y2>t+1)&&(this._currentZone&&this._currentZone===i&&(this._currentZone.leaveCallback(),this._currentZone=void 0),this._zones.splice(r--,1))}0===this._zones.length&&this._deactivate()}},t.prototype._activate=function(){this._areZonesActive||(this._areZonesActive=!0,this._element.addEventListener("mousemove",this._mouseMoveListener),this._element.addEventListener("mouseleave",this._mouseLeaveListener),this._element.addEventListener("click",this._clickListener))},t.prototype._deactivate=function(){this._areZonesActive&&(this._areZonesActive=!1,this._element.removeEventListener("mousemove",this._mouseMoveListener),this._element.removeEventListener("mouseleave",this._mouseLeaveListener),this._element.removeEventListener("click",this._clickListener))},t.prototype._onMouseMove=function(e){this._lastHoverCoords[0]===e.pageX&&this._lastHoverCoords[1]===e.pageY||(this._onHover(e),this._lastHoverCoords=[e.pageX,e.pageY])},t.prototype._onHover=function(e){var t=this,r=this._findZoneEventAt(e);r!==this._currentZone&&(this._currentZone&&(this._currentZone.leaveCallback(),this._currentZone=void 0,this._tooltipTimeout&&clearTimeout(this._tooltipTimeout)),r&&(this._currentZone=r,r.hoverCallback&&r.hoverCallback(e),this._tooltipTimeout=setTimeout(function(){return t._onTooltip(e)},500)))},t.prototype._onTooltip=function(e){this._tooltipTimeout=void 0;var t=this._findZoneEventAt(e);t&&t.tooltipCallback&&t.tooltipCallback(e)},t.prototype._onMouseDown=function(e){var t;(this._initialSelectionLength=this._getSelectionLength(),this._areZonesActive)&&((null===(t=this._findZoneEventAt(e))||void 0===t?void 0:t.willLinkActivate(e))&&(e.preventDefault(),e.stopImmediatePropagation()))},t.prototype._onMouseLeave=function(e){this._currentZone&&(this._currentZone.leaveCallback(),this._currentZone=void 0,this._tooltipTimeout&&clearTimeout(this._tooltipTimeout))},t.prototype._onClick=function(e){var t=this._findZoneEventAt(e),r=this._getSelectionLength();t&&r===this._initialSelectionLength&&(t.clickCallback(e),e.preventDefault(),e.stopImmediatePropagation())},t.prototype._getSelectionLength=function(){var e=this._selectionService.selectionText;return e?e.length:0},t.prototype._findZoneEventAt=function(e){var t=this._mouseService.getCoords(e,this._screenElement,this._bufferService.cols,this._bufferService.rows);if(t)for(var r=t[0],i=t[1],n=0;n<this._zones.length;n++){var o=this._zones[n];if(o.y1===o.y2){if(i===o.y1&&r>=o.x1&&r<o.x2)return o}else if(i===o.y1&&r>=o.x1||i===o.y2&&r<o.x2||i>o.y1&&i<o.y2)return o}},t=o([s(2,h.IBufferService),s(3,l.IMouseService),s(4,l.ISelectionService)],t)}(a.Disposable);t.MouseZoneManager=u},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(17),s=r(11),a=r(29),c=r(8),l=r(2),h=r(30),u=function(e){function t(t,r){var i=e.call(this)||this;i._terminal=t,i._renderService=r,i._liveRegionLineCount=0,i._charsToConsume=[],i._charsToAnnounce="",i._accessibilityTreeRoot=document.createElement("div"),i._accessibilityTreeRoot.classList.add("xterm-accessibility"),i._rowContainer=document.createElement("div"),i._rowContainer.classList.add("xterm-accessibility-tree"),i._rowElements=[];for(var n=0;n<i._terminal.rows;n++)i._rowElements[n]=i._createAccessibilityTreeNode(),i._rowContainer.appendChild(i._rowElements[n]);return i._topBoundaryFocusListener=function(e){return i._onBoundaryFocus(e,0)},i._bottomBoundaryFocusListener=function(e){return i._onBoundaryFocus(e,1)},i._rowElements[0].addEventListener("focus",i._topBoundaryFocusListener),i._rowElements[i._rowElements.length-1].addEventListener("focus",i._bottomBoundaryFocusListener),i._refreshRowsDimensions(),i._accessibilityTreeRoot.appendChild(i._rowContainer),i._renderRowsDebouncer=new a.RenderDebouncer(i._renderRows.bind(i)),i._refreshRows(),i._liveRegion=document.createElement("div"),i._liveRegion.classList.add("live-region"),i._liveRegion.setAttribute("aria-live","assertive"),i._accessibilityTreeRoot.appendChild(i._liveRegion),i._terminal.element.insertAdjacentElement("afterbegin",i._accessibilityTreeRoot),i.register(i._renderRowsDebouncer),i.register(i._terminal.onResize(function(e){return i._onResize(e.rows)})),i.register(i._terminal.onRender(function(e){return i._refreshRows(e.start,e.end)})),i.register(i._terminal.onScroll(function(){return i._refreshRows()})),i.register(i._terminal.onA11yChar(function(e){return i._onChar(e)})),i.register(i._terminal.onLineFeed(function(){return i._onChar("\n")})),i.register(i._terminal.onA11yTab(function(e){return i._onTab(e)})),i.register(i._terminal.onKey(function(e){return i._onKey(e.key)})),i.register(i._terminal.onBlur(function(){return i._clearLiveRegion()})),i.register(i._renderService.onDimensionsChange(function(){return i._refreshRowsDimensions()})),i._screenDprMonitor=new h.ScreenDprMonitor,i.register(i._screenDprMonitor),i._screenDprMonitor.setListener(function(){return i._refreshRowsDimensions()}),i.register(c.addDisposableDomListener(window,"resize",function(){return i._refreshRowsDimensions()})),i}return n(t,e),t.prototype.dispose=function(){e.prototype.dispose.call(this),this._terminal.element.removeChild(this._accessibilityTreeRoot),this._rowElements.length=0},t.prototype._onBoundaryFocus=function(e,t){var r=e.target,i=this._rowElements[0===t?1:this._rowElements.length-2];if(r.getAttribute("aria-posinset")!==(0===t?"1":""+this._terminal.buffer.lines.length)&&e.relatedTarget===i){var n,o;if(0===t?(n=r,o=this._rowElements.pop(),this._rowContainer.removeChild(o)):(n=this._rowElements.shift(),o=r,this._rowContainer.removeChild(n)),n.removeEventListener("focus",this._topBoundaryFocusListener),o.removeEventListener("focus",this._bottomBoundaryFocusListener),0===t){var s=this._createAccessibilityTreeNode();this._rowElements.unshift(s),this._rowContainer.insertAdjacentElement("afterbegin",s)}else{s=this._createAccessibilityTreeNode();this._rowElements.push(s),this._rowContainer.appendChild(s)}this._rowElements[0].addEventListener("focus",this._topBoundaryFocusListener),this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._terminal.scrollLines(0===t?-1:1),this._rowElements[0===t?1:this._rowElements.length-2].focus(),e.preventDefault(),e.stopImmediatePropagation()}},t.prototype._onResize=function(e){this._rowElements[this._rowElements.length-1].removeEventListener("focus",this._bottomBoundaryFocusListener);for(var t=this._rowContainer.children.length;t<this._terminal.rows;t++)this._rowElements[t]=this._createAccessibilityTreeNode(),this._rowContainer.appendChild(this._rowElements[t]);for(;this._rowElements.length>e;)this._rowContainer.removeChild(this._rowElements.pop());this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._refreshRowsDimensions()},t.prototype._createAccessibilityTreeNode=function(){var e=document.createElement("div");return e.setAttribute("role","listitem"),e.tabIndex=-1,this._refreshRowDimensions(e),e},t.prototype._onTab=function(e){for(var t=0;t<e;t++)this._onChar(" ")},t.prototype._onChar=function(e){var t=this;if(this._liveRegionLineCount<21){if(this._charsToConsume.length>0)this._charsToConsume.shift()!==e&&(this._charsToAnnounce+=e);else this._charsToAnnounce+=e;"\n"===e&&(this._liveRegionLineCount++,21===this._liveRegionLineCount&&(this._liveRegion.textContent+=o.tooMuchOutput)),s.isMac&&this._liveRegion.textContent&&this._liveRegion.textContent.length>0&&!this._liveRegion.parentNode&&setTimeout(function(){t._accessibilityTreeRoot.appendChild(t._liveRegion)},0)}},t.prototype._clearLiveRegion=function(){this._liveRegion.textContent="",this._liveRegionLineCount=0,s.isMac&&this._liveRegion.parentNode&&this._accessibilityTreeRoot.removeChild(this._liveRegion)},t.prototype._onKey=function(e){this._clearLiveRegion(),this._charsToConsume.push(e)},t.prototype._refreshRows=function(e,t){this._renderRowsDebouncer.refresh(e,t,this._terminal.rows)},t.prototype._renderRows=function(e,t){for(var r=this._terminal.buffer,i=r.lines.length.toString(),n=e;n<=t;n++){var o=r.translateBufferLineToString(r.ydisp+n,!0),s=(r.ydisp+n+1).toString(),a=this._rowElements[n];a&&(0===o.length?a.innerHTML="&nbsp;":a.textContent=o,a.setAttribute("aria-posinset",s),a.setAttribute("aria-setsize",i))}this._announceCharacters()},t.prototype._refreshRowsDimensions=function(){if(this._renderService.dimensions.actualCellHeight){this._rowElements.length!==this._terminal.rows&&this._onResize(this._terminal.rows);for(var e=0;e<this._terminal.rows;e++)this._refreshRowDimensions(this._rowElements[e])}},t.prototype._refreshRowDimensions=function(e){e.style.height=this._renderService.dimensions.actualCellHeight+"px"},t.prototype._announceCharacters=function(){0!==this._charsToAnnounce.length&&(this._liveRegion.textContent+=this._charsToAnnounce,this._charsToAnnounce="")},t}(l.Disposable);t.AccessibilityManager=u},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(57),c=r(9),l=r(2),h=r(4),u=r(0),f=r(1),_=r(10),d="xterm-dom-renderer-owner-",p="xterm-rows",v="xterm-selection",g=1,y=function(e){function t(t,r,i,n,o,s,c,l){var h=e.call(this)||this;return h._colors=t,h._element=r,h._screenElement=i,h._viewportElement=n,h._linkifier=o,h._charSizeService=s,h._optionsService=c,h._bufferService=l,h._terminalClass=g++,h._rowElements=[],h._onRequestRefreshRows=new f.EventEmitter,h._rowContainer=document.createElement("div"),h._rowContainer.classList.add(p),h._rowContainer.style.lineHeight="normal",h._rowContainer.setAttribute("aria-hidden","true"),h._refreshRowElements(h._bufferService.cols,h._bufferService.rows),h._selectionContainer=document.createElement("div"),h._selectionContainer.classList.add(v),h._selectionContainer.setAttribute("aria-hidden","true"),h.dimensions={scaledCharWidth:0,scaledCharHeight:0,scaledCellWidth:0,scaledCellHeight:0,scaledCharLeft:0,scaledCharTop:0,scaledCanvasWidth:0,scaledCanvasHeight:0,canvasWidth:0,canvasHeight:0,actualCellWidth:0,actualCellHeight:0},h._updateDimensions(),h._injectCss(),h._rowFactory=new a.DomRendererRowFactory(document,h._optionsService,h._colors),h._element.classList.add(d+h._terminalClass),h._screenElement.appendChild(h._rowContainer),h._screenElement.appendChild(h._selectionContainer),h._linkifier.onLinkHover(function(e){return h._onLinkHover(e)}),h._linkifier.onLinkLeave(function(e){return h._onLinkLeave(e)}),h}return n(t,e),Object.defineProperty(t.prototype,"onRequestRefreshRows",{get:function(){return this._onRequestRefreshRows.event},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this._element.classList.remove(d+this._terminalClass),this._screenElement.removeChild(this._rowContainer),this._screenElement.removeChild(this._selectionContainer),this._screenElement.removeChild(this._themeStyleElement),this._screenElement.removeChild(this._dimensionsStyleElement),e.prototype.dispose.call(this)},t.prototype._updateDimensions=function(){var e=this;this.dimensions.scaledCharWidth=this._charSizeService.width*window.devicePixelRatio,this.dimensions.scaledCharHeight=Math.ceil(this._charSizeService.height*window.devicePixelRatio),this.dimensions.scaledCellWidth=this.dimensions.scaledCharWidth+Math.round(this._optionsService.options.letterSpacing),this.dimensions.scaledCellHeight=Math.floor(this.dimensions.scaledCharHeight*this._optionsService.options.lineHeight),this.dimensions.scaledCharLeft=0,this.dimensions.scaledCharTop=0,this.dimensions.scaledCanvasWidth=this.dimensions.scaledCellWidth*this._bufferService.cols,this.dimensions.scaledCanvasHeight=this.dimensions.scaledCellHeight*this._bufferService.rows,this.dimensions.canvasWidth=Math.round(this.dimensions.scaledCanvasWidth/window.devicePixelRatio),this.dimensions.canvasHeight=Math.round(this.dimensions.scaledCanvasHeight/window.devicePixelRatio),this.dimensions.actualCellWidth=this.dimensions.canvasWidth/this._bufferService.cols,this.dimensions.actualCellHeight=this.dimensions.canvasHeight/this._bufferService.rows,this._rowElements.forEach(function(t){t.style.width=e.dimensions.canvasWidth+"px",t.style.height=e.dimensions.actualCellHeight+"px",t.style.lineHeight=e.dimensions.actualCellHeight+"px",t.style.overflow="hidden"}),this._dimensionsStyleElement||(this._dimensionsStyleElement=document.createElement("style"),this._screenElement.appendChild(this._dimensionsStyleElement));var t=this._terminalSelector+" ."+p+" span { display: inline-block; height: 100%; vertical-align: top; width: "+this.dimensions.actualCellWidth+"px}";this._dimensionsStyleElement.innerHTML=t,this._selectionContainer.style.height=this._viewportElement.style.height,this._screenElement.style.width=this.dimensions.canvasWidth+"px",this._screenElement.style.height=this.dimensions.canvasHeight+"px"},t.prototype.setColors=function(e){this._colors=e,this._injectCss()},t.prototype._injectCss=function(){var e=this;this._themeStyleElement||(this._themeStyleElement=document.createElement("style"),this._screenElement.appendChild(this._themeStyleElement));var t=this._terminalSelector+" ."+p+" { color: "+this._colors.foreground.css+"; background-color: "+this._colors.background.css+"; font-family: "+this._optionsService.options.fontFamily+"; font-size: "+this._optionsService.options.fontSize+"px;}";t+=this._terminalSelector+" span:not(."+a.BOLD_CLASS+") { font-weight: "+this._optionsService.options.fontWeight+";}"+this._terminalSelector+" span."+a.BOLD_CLASS+" { font-weight: "+this._optionsService.options.fontWeightBold+";}"+this._terminalSelector+" span."+a.ITALIC_CLASS+" { font-style: italic;}",t+="@keyframes blink_box_shadow_"+this._terminalClass+" { 50% {  box-shadow: none; }}",t+="@keyframes blink_block_"+this._terminalClass+" { 0% {  background-color: "+this._colors.cursor.css+";  color: "+this._colors.cursorAccent.css+"; } 50% {  background-color: "+this._colors.cursorAccent.css+";  color: "+this._colors.cursor.css+"; }}",t+=this._terminalSelector+" ."+p+":not(.xterm-focus) ."+a.CURSOR_CLASS+"."+a.CURSOR_STYLE_BLOCK_CLASS+" { outline: 1px solid "+this._colors.cursor.css+"; outline-offset: -1px;}"+this._terminalSelector+" ."+p+".xterm-focus ."+a.CURSOR_CLASS+"."+a.CURSOR_BLINK_CLASS+":not(."+a.CURSOR_STYLE_BLOCK_CLASS+") { animation: blink_box_shadow_"+this._terminalClass+" 1s step-end infinite;}"+this._terminalSelector+" ."+p+".xterm-focus ."+a.CURSOR_CLASS+"."+a.CURSOR_BLINK_CLASS+"."+a.CURSOR_STYLE_BLOCK_CLASS+" { animation: blink_block_"+this._terminalClass+" 1s step-end infinite;}"+this._terminalSelector+" ."+p+".xterm-focus ."+a.CURSOR_CLASS+"."+a.CURSOR_STYLE_BLOCK_CLASS+" { background-color: "+this._colors.cursor.css+"; color: "+this._colors.cursorAccent.css+";}"+this._terminalSelector+" ."+p+" ."+a.CURSOR_CLASS+"."+a.CURSOR_STYLE_BAR_CLASS+" { box-shadow: "+this._optionsService.options.cursorWidth+"px 0 0 "+this._colors.cursor.css+" inset;}"+this._terminalSelector+" ."+p+" ."+a.CURSOR_CLASS+"."+a.CURSOR_STYLE_UNDERLINE_CLASS+" { box-shadow: 0 -1px 0 "+this._colors.cursor.css+" inset;}",t+=this._terminalSelector+" ."+v+" { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}"+this._terminalSelector+" ."+v+" div { position: absolute; background-color: "+this._colors.selection.css+";}",this._colors.ansi.forEach(function(r,i){t+=e._terminalSelector+" .xterm-fg-"+i+" { color: "+r.css+"; }"+e._terminalSelector+" .xterm-bg-"+i+" { background-color: "+r.css+"; }"}),t+=this._terminalSelector+" .xterm-fg-"+c.INVERTED_DEFAULT_COLOR+" { color: "+_.color.opaque(this._colors.background).css+"; }"+this._terminalSelector+" .xterm-bg-"+c.INVERTED_DEFAULT_COLOR+" { background-color: "+this._colors.foreground.css+"; }",this._themeStyleElement.innerHTML=t},t.prototype.onDevicePixelRatioChange=function(){this._updateDimensions()},t.prototype._refreshRowElements=function(e,t){for(var r=this._rowElements.length;r<=t;r++){var i=document.createElement("div");this._rowContainer.appendChild(i),this._rowElements.push(i)}for(;this._rowElements.length>t;)this._rowContainer.removeChild(this._rowElements.pop())},t.prototype.onResize=function(e,t){this._refreshRowElements(e,t),this._updateDimensions()},t.prototype.onCharSizeChanged=function(){this._updateDimensions()},t.prototype.onBlur=function(){this._rowContainer.classList.remove("xterm-focus")},t.prototype.onFocus=function(){this._rowContainer.classList.add("xterm-focus")},t.prototype.onSelectionChanged=function(e,t,r){for(;this._selectionContainer.children.length;)this._selectionContainer.removeChild(this._selectionContainer.children[0]);if(e&&t){var i=e[1]-this._bufferService.buffer.ydisp,n=t[1]-this._bufferService.buffer.ydisp,o=Math.max(i,0),s=Math.min(n,this._bufferService.rows-1);if(!(o>=this._bufferService.rows||s<0)){var a=document.createDocumentFragment();if(r)a.appendChild(this._createSelectionElement(o,e[0],t[0],s-o+1));else{var c=i===o?e[0]:0,l=o===s?t[0]:this._bufferService.cols;a.appendChild(this._createSelectionElement(o,c,l));var h=s-o-1;if(a.appendChild(this._createSelectionElement(o+1,0,this._bufferService.cols,h)),o!==s){var u=n===s?t[0]:this._bufferService.cols;a.appendChild(this._createSelectionElement(s,0,u))}}this._selectionContainer.appendChild(a)}}},t.prototype._createSelectionElement=function(e,t,r,i){void 0===i&&(i=1);var n=document.createElement("div");return n.style.height=i*this.dimensions.actualCellHeight+"px",n.style.top=e*this.dimensions.actualCellHeight+"px",n.style.left=t*this.dimensions.actualCellWidth+"px",n.style.width=this.dimensions.actualCellWidth*(r-t)+"px",n},t.prototype.onCursorMove=function(){},t.prototype.onOptionsChanged=function(){this._updateDimensions(),this._injectCss()},t.prototype.clear=function(){this._rowElements.forEach(function(e){return e.innerHTML=""})},t.prototype.renderRows=function(e,t){for(var r=this._bufferService.buffer.ybase+this._bufferService.buffer.y,i=this._bufferService.buffer.x,n=this._optionsService.options.cursorBlink,o=e;o<=t;o++){var s=this._rowElements[o];s.innerHTML="";var a=o+this._bufferService.buffer.ydisp,c=this._bufferService.buffer.lines.get(a),l=this._optionsService.options.cursorStyle;s.appendChild(this._rowFactory.createRow(c,a===r,l,i,n,this.dimensions.actualCellWidth,this._bufferService.cols))}},Object.defineProperty(t.prototype,"_terminalSelector",{get:function(){return"."+d+this._terminalClass},enumerable:!0,configurable:!0}),t.prototype.registerCharacterJoiner=function(e){return-1},t.prototype.deregisterCharacterJoiner=function(e){return!1},t.prototype._onLinkHover=function(e){this._setCellUnderline(e.x1,e.x2,e.y1,e.y2,e.cols,!0)},t.prototype._onLinkLeave=function(e){this._setCellUnderline(e.x1,e.x2,e.y1,e.y2,e.cols,!1)},t.prototype._setCellUnderline=function(e,t,r,i,n,o){for(;e!==t||r!==i;){var s=this._rowElements[r];if(!s)return;var a=s.children[e];a&&(a.style.textDecoration=o?"underline":"none"),++e>=n&&(e=0,r++)}},t=o([s(5,h.ICharSizeService),s(6,u.IOptionsService),s(7,u.IBufferService)],t)}(l.Disposable);t.DomRenderer=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(9),n=r(3),o=r(5),s=r(10);t.BOLD_CLASS="xterm-bold",t.DIM_CLASS="xterm-dim",t.ITALIC_CLASS="xterm-italic",t.UNDERLINE_CLASS="xterm-underline",t.CURSOR_CLASS="xterm-cursor",t.CURSOR_BLINK_CLASS="xterm-cursor-blink",t.CURSOR_STYLE_BLOCK_CLASS="xterm-cursor-block",t.CURSOR_STYLE_BAR_CLASS="xterm-cursor-bar",t.CURSOR_STYLE_UNDERLINE_CLASS="xterm-cursor-underline";var a=function(){function e(e,t,r){this._document=e,this._optionsService=t,this._colors=r,this._workCell=new o.CellData}return e.prototype.setColors=function(e){this._colors=e},e.prototype.createRow=function(e,r,o,a,l,h,u){for(var f=this._document.createDocumentFragment(),_=0,d=Math.min(e.length,u)-1;d>=0;d--)if(e.loadCell(d,this._workCell).getCode()!==n.NULL_CELL_CODE||r&&d===a){_=d+1;break}for(d=0;d<_;d++){e.loadCell(d,this._workCell);var p=this._workCell.getWidth();if(0!==p){var v=this._document.createElement("span");if(p>1&&(v.style.width=h*p+"px"),r&&d===a)switch(v.classList.add(t.CURSOR_CLASS),l&&v.classList.add(t.CURSOR_BLINK_CLASS),o){case"bar":v.classList.add(t.CURSOR_STYLE_BAR_CLASS);break;case"underline":v.classList.add(t.CURSOR_STYLE_UNDERLINE_CLASS);break;default:v.classList.add(t.CURSOR_STYLE_BLOCK_CLASS)}this._workCell.isBold()&&v.classList.add(t.BOLD_CLASS),this._workCell.isItalic()&&v.classList.add(t.ITALIC_CLASS),this._workCell.isDim()&&v.classList.add(t.DIM_CLASS),this._workCell.isUnderline()&&v.classList.add(t.UNDERLINE_CLASS),this._workCell.isInvisible()?v.textContent=n.WHITESPACE_CELL_CHAR:v.textContent=this._workCell.getChars()||n.WHITESPACE_CELL_CHAR;var g=this._workCell.getFgColor(),y=this._workCell.getFgColorMode(),b=this._workCell.getBgColor(),m=this._workCell.getBgColorMode(),S=!!this._workCell.isInverse();if(S){var C=g;g=b,b=C;var w=y;y=m,m=w}switch(y){case 16777216:case 33554432:this._workCell.isBold()&&g<8&&this._optionsService.options.drawBoldTextInBrightColors&&(g+=8),this._applyMinimumContrast(v,this._colors.background,this._colors.ansi[g])||v.classList.add("xterm-fg-"+g);break;case 50331648:var E=s.rgba.toColor(g>>16&255,g>>8&255,255&g);this._applyMinimumContrast(v,this._colors.background,E)||this._addStyle(v,"color:#"+c(g.toString(16),"0",6));break;case 0:default:this._applyMinimumContrast(v,this._colors.background,this._colors.foreground)||S&&v.classList.add("xterm-fg-"+i.INVERTED_DEFAULT_COLOR)}switch(m){case 16777216:case 33554432:v.classList.add("xterm-bg-"+b);break;case 50331648:this._addStyle(v,"background-color:#"+c(b.toString(16),"0",6));break;case 0:default:S&&v.classList.add("xterm-bg-"+i.INVERTED_DEFAULT_COLOR)}f.appendChild(v)}}return f},e.prototype._applyMinimumContrast=function(e,t,r){if(1===this._optionsService.options.minimumContrastRatio)return!1;var i=this._colors.contrastCache.getColor(this._workCell.bg,this._workCell.fg);return void 0===i&&(i=s.color.ensureContrastRatio(t,r,this._optionsService.options.minimumContrastRatio),this._colors.contrastCache.setColor(this._workCell.bg,this._workCell.fg,null!=i?i:null)),!!i&&(this._addStyle(e,"color:"+i.css),!0)},e.prototype._addStyle=function(e,t){e.setAttribute("style",""+(e.getAttribute("style")||"")+t+";")},e}();function c(e,t,r){for(;e.length<r;)e=t+e;return e}t.DomRendererRowFactory=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(12),n={48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"']};t.evaluateKeyboardEvent=function(e,t,r,o){var s={type:0,cancel:!1,key:void 0},a=(e.shiftKey?1:0)|(e.altKey?2:0)|(e.ctrlKey?4:0)|(e.metaKey?8:0);switch(e.keyCode){case 0:"UIKeyInputUpArrow"===e.key?s.key=t?i.C0.ESC+"OA":i.C0.ESC+"[A":"UIKeyInputLeftArrow"===e.key?s.key=t?i.C0.ESC+"OD":i.C0.ESC+"[D":"UIKeyInputRightArrow"===e.key?s.key=t?i.C0.ESC+"OC":i.C0.ESC+"[C":"UIKeyInputDownArrow"===e.key&&(s.key=t?i.C0.ESC+"OB":i.C0.ESC+"[B");break;case 8:if(e.shiftKey){s.key=i.C0.BS;break}if(e.altKey){s.key=i.C0.ESC+i.C0.DEL;break}s.key=i.C0.DEL;break;case 9:if(e.shiftKey){s.key=i.C0.ESC+"[Z";break}s.key=i.C0.HT,s.cancel=!0;break;case 13:s.key=i.C0.CR,s.cancel=!0;break;case 27:s.key=i.C0.ESC,s.cancel=!0;break;case 37:if(e.metaKey)break;a?(s.key=i.C0.ESC+"[1;"+(a+1)+"D",s.key===i.C0.ESC+"[1;3D"&&(s.key=i.C0.ESC+(r?"b":"[1;5D"))):s.key=t?i.C0.ESC+"OD":i.C0.ESC+"[D";break;case 39:if(e.metaKey)break;a?(s.key=i.C0.ESC+"[1;"+(a+1)+"C",s.key===i.C0.ESC+"[1;3C"&&(s.key=i.C0.ESC+(r?"f":"[1;5C"))):s.key=t?i.C0.ESC+"OC":i.C0.ESC+"[C";break;case 38:if(e.metaKey)break;a?(s.key=i.C0.ESC+"[1;"+(a+1)+"A",r||s.key!==i.C0.ESC+"[1;3A"||(s.key=i.C0.ESC+"[1;5A")):s.key=t?i.C0.ESC+"OA":i.C0.ESC+"[A";break;case 40:if(e.metaKey)break;a?(s.key=i.C0.ESC+"[1;"+(a+1)+"B",r||s.key!==i.C0.ESC+"[1;3B"||(s.key=i.C0.ESC+"[1;5B")):s.key=t?i.C0.ESC+"OB":i.C0.ESC+"[B";break;case 45:e.shiftKey||e.ctrlKey||(s.key=i.C0.ESC+"[2~");break;case 46:s.key=a?i.C0.ESC+"[3;"+(a+1)+"~":i.C0.ESC+"[3~";break;case 36:s.key=a?i.C0.ESC+"[1;"+(a+1)+"H":t?i.C0.ESC+"OH":i.C0.ESC+"[H";break;case 35:s.key=a?i.C0.ESC+"[1;"+(a+1)+"F":t?i.C0.ESC+"OF":i.C0.ESC+"[F";break;case 33:e.shiftKey?s.type=2:s.key=i.C0.ESC+"[5~";break;case 34:e.shiftKey?s.type=3:s.key=i.C0.ESC+"[6~";break;case 112:s.key=a?i.C0.ESC+"[1;"+(a+1)+"P":i.C0.ESC+"OP";break;case 113:s.key=a?i.C0.ESC+"[1;"+(a+1)+"Q":i.C0.ESC+"OQ";break;case 114:s.key=a?i.C0.ESC+"[1;"+(a+1)+"R":i.C0.ESC+"OR";break;case 115:s.key=a?i.C0.ESC+"[1;"+(a+1)+"S":i.C0.ESC+"OS";break;case 116:s.key=a?i.C0.ESC+"[15;"+(a+1)+"~":i.C0.ESC+"[15~";break;case 117:s.key=a?i.C0.ESC+"[17;"+(a+1)+"~":i.C0.ESC+"[17~";break;case 118:s.key=a?i.C0.ESC+"[18;"+(a+1)+"~":i.C0.ESC+"[18~";break;case 119:s.key=a?i.C0.ESC+"[19;"+(a+1)+"~":i.C0.ESC+"[19~";break;case 120:s.key=a?i.C0.ESC+"[20;"+(a+1)+"~":i.C0.ESC+"[20~";break;case 121:s.key=a?i.C0.ESC+"[21;"+(a+1)+"~":i.C0.ESC+"[21~";break;case 122:s.key=a?i.C0.ESC+"[23;"+(a+1)+"~":i.C0.ESC+"[23~";break;case 123:s.key=a?i.C0.ESC+"[24;"+(a+1)+"~":i.C0.ESC+"[24~";break;default:if(!e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)if(r&&!o||!e.altKey||e.metaKey)r&&!e.altKey&&!e.ctrlKey&&e.metaKey?65===e.keyCode&&(s.type=1):e.key&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&e.keyCode>=48&&1===e.key.length?s.key=e.key:e.key&&e.ctrlKey&&"_"===e.key&&(s.key=i.C0.US);else{var c=n[e.keyCode],l=c&&c[e.shiftKey?1:0];if(l)s.key=i.C0.ESC+l;else if(e.keyCode>=65&&e.keyCode<=90){var h=e.ctrlKey?e.keyCode-64:e.keyCode+32;s.key=i.C0.ESC+String.fromCharCode(h)}}else e.keyCode>=65&&e.keyCode<=90?s.key=String.fromCharCode(e.keyCode-64):32===e.keyCode?s.key=i.C0.NUL:e.keyCode>=51&&e.keyCode<=55?s.key=String.fromCharCode(e.keyCode-51+27):56===e.keyCode?s.key=i.C0.DEL:219===e.keyCode?s.key=i.C0.ESC:220===e.keyCode?s.key=i.C0.FS:221===e.keyCode&&(s.key=i.C0.GS)}return s}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(3);t.updateWindowsModeWrappedState=function(e){var t,r=null===(t=e.buffer.lines.get(e.buffer.ybase+e.buffer.y-1))||void 0===t?void 0:t.get(e.cols-1),n=e.buffer.lines.get(e.buffer.ybase+e.buffer.y);n&&r&&(n.isWrapped=r[i.CHAR_DATA_CODE_INDEX]!==i.NULL_CELL_CODE&&r[i.CHAR_DATA_CODE_INDEX]!==i.WHITESPACE_CELL_CODE)}},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(29),c=r(1),l=r(2),h=r(30),u=r(8),f=r(0),_=r(4),d=function(e){function t(t,r,i,n,o){var s=e.call(this)||this;if(s._renderer=t,s._rowCount=r,s.screenElement=i,s.optionsService=n,s.charSizeService=o,s._isPaused=!1,s._needsFullRefresh=!1,s._canvasWidth=0,s._canvasHeight=0,s._onDimensionsChange=new c.EventEmitter,s._onRender=new c.EventEmitter,s._onRefreshRequest=new c.EventEmitter,s._renderDebouncer=new a.RenderDebouncer(function(e,t){return s._renderRows(e,t)}),s.register(s._renderDebouncer),s._screenDprMonitor=new h.ScreenDprMonitor,s._screenDprMonitor.setListener(function(){return s.onDevicePixelRatioChange()}),s.register(s._screenDprMonitor),s.register(n.onOptionChange(function(){return s._renderer.onOptionsChanged()})),s.register(o.onCharSizeChange(function(){return s.onCharSizeChanged()})),s._renderer.onRequestRefreshRows(function(e){return s.refreshRows(e.start,e.end)}),s.register(u.addDisposableDomListener(window,"resize",function(){return s.onDevicePixelRatioChange()})),"IntersectionObserver"in window){var l=new IntersectionObserver(function(e){return s._onIntersectionChange(e[e.length-1])},{threshold:0});l.observe(i),s.register({dispose:function(){return l.disconnect()}})}return s}return n(t,e),Object.defineProperty(t.prototype,"onDimensionsChange",{get:function(){return this._onDimensionsChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onRender",{get:function(){return this._onRender.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onRefreshRequest",{get:function(){return this._onRefreshRequest.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dimensions",{get:function(){return this._renderer.dimensions},enumerable:!0,configurable:!0}),t.prototype._onIntersectionChange=function(e){this._isPaused=0===e.intersectionRatio,!this._isPaused&&this._needsFullRefresh&&(this.refreshRows(0,this._rowCount-1),this._needsFullRefresh=!1)},t.prototype.refreshRows=function(e,t){this._isPaused?this._needsFullRefresh=!0:this._renderDebouncer.refresh(e,t,this._rowCount)},t.prototype._renderRows=function(e,t){this._renderer.renderRows(e,t),this._onRender.fire({start:e,end:t})},t.prototype.resize=function(e,t){this._rowCount=t,this._fireOnCanvasResize()},t.prototype.changeOptions=function(){this._renderer.onOptionsChanged(),this.refreshRows(0,this._rowCount-1),this._fireOnCanvasResize()},t.prototype._fireOnCanvasResize=function(){this._renderer.dimensions.canvasWidth===this._canvasWidth&&this._renderer.dimensions.canvasHeight===this._canvasHeight||this._onDimensionsChange.fire(this._renderer.dimensions)},t.prototype.dispose=function(){this._renderer.dispose(),e.prototype.dispose.call(this)},t.prototype.setRenderer=function(e){var t=this;this._renderer.dispose(),this._renderer=e,this._renderer.onRequestRefreshRows(function(e){return t.refreshRows(e.start,e.end)}),this.refreshRows(0,this._rowCount-1)},t.prototype._fullRefresh=function(){this._isPaused?this._needsFullRefresh=!0:this.refreshRows(0,this._rowCount-1)},t.prototype.setColors=function(e){this._renderer.setColors(e),this._fullRefresh()},t.prototype.onDevicePixelRatioChange=function(){this._renderer.onDevicePixelRatioChange(),this.refreshRows(0,this._rowCount-1)},t.prototype.onResize=function(e,t){this._renderer.onResize(e,t),this._fullRefresh()},t.prototype.onCharSizeChanged=function(){this._renderer.onCharSizeChanged()},t.prototype.onBlur=function(){this._renderer.onBlur()},t.prototype.onFocus=function(){this._renderer.onFocus()},t.prototype.onSelectionChanged=function(e,t,r){this._renderer.onSelectionChanged(e,t,r)},t.prototype.onCursorMove=function(){this._renderer.onCursorMove()},t.prototype.clear=function(){this._renderer.clear()},t.prototype.registerCharacterJoiner=function(e){return this._renderer.registerCharacterJoiner(e)},t.prototype.deregisterCharacterJoiner=function(e){return this._renderer.deregisterCharacterJoiner(e)},t=o([s(3,f.IOptionsService),s(4,_.ICharSizeService)],t)}(l.Disposable);t.RenderService=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),n=r(11),o=r(31);t.DEFAULT_BELL_SOUND="data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",t.DEFAULT_OPTIONS=Object.freeze({cols:80,rows:24,cursorBlink:!1,cursorStyle:"block",cursorWidth:1,bellSound:t.DEFAULT_BELL_SOUND,bellStyle:"none",drawBoldTextInBrightColors:!0,fastScrollModifier:"alt",fastScrollSensitivity:5,fontFamily:"courier-new, courier, monospace",fontSize:15,fontWeight:"normal",fontWeightBold:"bold",lineHeight:1,letterSpacing:0,logLevel:"info",scrollback:1e3,scrollSensitivity:1,screenReaderMode:!1,macOptionIsMeta:!1,macOptionClickForcesSelection:!1,minimumContrastRatio:1,disableStdin:!1,allowTransparency:!1,tabStopWidth:8,theme:{},rightClickSelectsWord:n.isMac,rendererType:"canvas",windowOptions:{},windowsMode:!1,wordSeparator:" ()[]{}',\"`",convertEol:!1,termName:"xterm",cancelEvents:!1});var s=["cols","rows"],a=function(){function e(e){var r=this;this._onOptionChange=new i.EventEmitter,this.options=o.clone(t.DEFAULT_OPTIONS),Object.keys(e).forEach(function(t){if(t in r.options){var i=e[t];r.options[t]=i}})}return Object.defineProperty(e.prototype,"onOptionChange",{get:function(){return this._onOptionChange.event},enumerable:!0,configurable:!0}),e.prototype.setOption=function(e,r){if(!(e in t.DEFAULT_OPTIONS))throw new Error('No option with key "'+e+'"');if(-1!==s.indexOf(e))throw new Error('Option "'+e+'" can only be set in the constructor');this.options[e]!==r&&(r=this._sanitizeAndValidateOption(e,r),this.options[e]!==r&&(this.options[e]=r,this._onOptionChange.fire(e)))},e.prototype._sanitizeAndValidateOption=function(e,r){switch(e){case"bellStyle":case"cursorStyle":case"fontWeight":case"fontWeightBold":case"rendererType":case"wordSeparator":r||(r=t.DEFAULT_OPTIONS[e]);break;case"cursorWidth":r=Math.floor(r);case"lineHeight":case"tabStopWidth":if(r<1)throw new Error(e+" cannot be less than 1, value: "+r);break;case"minimumContrastRatio":r=Math.max(1,Math.min(21,Math.round(10*r)/10));break;case"scrollback":if((r=Math.min(r,4294967295))<0)throw new Error(e+" cannot be less than 0, value: "+r);break;case"fastScrollSensitivity":case"scrollSensitivity":if(r<=0)throw new Error(e+" cannot be less than or equal to 0, value: "+r)}return r},e.prototype.getOption=function(e){if(!(e in t.DEFAULT_OPTIONS))throw new Error('No option with key "'+e+'"');return this.options[e]},e}();t.OptionsService=a},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s=r(1),a=function(){function e(e,t,r){this.document=e,this.parentElement=t,this._optionsService=r,this.width=0,this.height=0,this._onCharSizeChange=new s.EventEmitter,this._measureStrategy=new c(e,t,this._optionsService)}return Object.defineProperty(e.prototype,"hasValidSize",{get:function(){return this.width>0&&this.height>0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onCharSizeChange",{get:function(){return this._onCharSizeChange.event},enumerable:!0,configurable:!0}),e.prototype.measure=function(){var e=this._measureStrategy.measure();e.width===this.width&&e.height===this.height||(this.width=e.width,this.height=e.height,this._onCharSizeChange.fire())},e=i([n(2,o.IOptionsService)],e)}();t.CharSizeService=a;var c=function(){function e(e,t,r){this._document=e,this._parentElement=t,this._optionsService=r,this._result={width:0,height:0},this._measureElement=this._document.createElement("span"),this._measureElement.classList.add("xterm-char-measure-element"),this._measureElement.textContent="W",this._measureElement.setAttribute("aria-hidden","true"),this._parentElement.appendChild(this._measureElement)}return e.prototype.measure=function(){this._measureElement.style.fontFamily=this._optionsService.options.fontFamily,this._measureElement.style.fontSize=this._optionsService.options.fontSize+"px";var e=this._measureElement.getBoundingClientRect();return 0!==e.width&&0!==e.height&&(this._result.width=e.width,this._result.height=Math.ceil(e.height)),this._result},e}()},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s=r(64);t.MINIMUM_COLS=2,t.MINIMUM_ROWS=1;var a=function(){function e(e){this._optionsService=e,this.cols=Math.max(e.options.cols,t.MINIMUM_COLS),this.rows=Math.max(e.options.rows,t.MINIMUM_ROWS),this.buffers=new s.BufferSet(e,this)}return Object.defineProperty(e.prototype,"buffer",{get:function(){return this.buffers.active},enumerable:!0,configurable:!0}),e.prototype.resize=function(e,t){this.cols=e,this.rows=t},e.prototype.reset=function(){this.buffers=new s.BufferSet(this._optionsService,this)},e=i([n(0,o.IOptionsService)],e)}();t.BufferService=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(65),n=r(1),o=function(){function e(e,t){this.optionsService=e,this.bufferService=t,this._onBufferActivate=new n.EventEmitter,this._normal=new i.Buffer(!0,e,t),this._normal.fillViewportRows(),this._alt=new i.Buffer(!1,e,t),this._activeBuffer=this._normal,this.setupTabStops()}return Object.defineProperty(e.prototype,"onBufferActivate",{get:function(){return this._onBufferActivate.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"alt",{get:function(){return this._alt},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"active",{get:function(){return this._activeBuffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"normal",{get:function(){return this._normal},enumerable:!0,configurable:!0}),e.prototype.activateNormalBuffer=function(){this._activeBuffer!==this._normal&&(this._normal.x=this._alt.x,this._normal.y=this._alt.y,this._alt.clear(),this._activeBuffer=this._normal,this._onBufferActivate.fire({activeBuffer:this._normal,inactiveBuffer:this._alt}))},e.prototype.activateAltBuffer=function(e){this._activeBuffer!==this._alt&&(this._alt.fillViewportRows(e),this._alt.x=this._normal.x,this._alt.y=this._normal.y,this._activeBuffer=this._alt,this._onBufferActivate.fire({activeBuffer:this._alt,inactiveBuffer:this._normal}))},e.prototype.resize=function(e,t){this._normal.resize(e,t),this._alt.resize(e,t)},e.prototype.setupTabStops=function(e){this._normal.setupTabStops(e),this._alt.setupTabStops(e)},e}();t.BufferSet=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(66),n=r(16),o=r(5),s=r(3),a=r(67),c=r(68),l=r(18);t.MAX_BUFFER_SIZE=4294967295;var h=function(){function e(e,t,r){this._hasScrollback=e,this._optionsService=t,this._bufferService=r,this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.savedY=0,this.savedX=0,this.savedCurAttrData=n.DEFAULT_ATTR_DATA.clone(),this.savedCharset=l.DEFAULT_CHARSET,this.markers=[],this._nullCell=o.CellData.fromCharData([0,s.NULL_CELL_CHAR,s.NULL_CELL_WIDTH,s.NULL_CELL_CODE]),this._whitespaceCell=o.CellData.fromCharData([0,s.WHITESPACE_CELL_CHAR,s.WHITESPACE_CELL_WIDTH,s.WHITESPACE_CELL_CODE]),this._cols=this._bufferService.cols,this._rows=this._bufferService.rows,this.lines=new i.CircularList(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()}return e.prototype.getNullCell=function(e){return e?(this._nullCell.fg=e.fg,this._nullCell.bg=e.bg):(this._nullCell.fg=0,this._nullCell.bg=0),this._nullCell},e.prototype.getWhitespaceCell=function(e){return e?(this._whitespaceCell.fg=e.fg,this._whitespaceCell.bg=e.bg):(this._whitespaceCell.fg=0,this._whitespaceCell.bg=0),this._whitespaceCell},e.prototype.getBlankLine=function(e,t){return new n.BufferLine(this._bufferService.cols,this.getNullCell(e),t)},Object.defineProperty(e.prototype,"hasScrollback",{get:function(){return this._hasScrollback&&this.lines.maxLength>this._rows},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isCursorInViewport",{get:function(){var e=this.ybase+this.y-this.ydisp;return e>=0&&e<this._rows},enumerable:!0,configurable:!0}),e.prototype._getCorrectBufferLength=function(e){if(!this._hasScrollback)return e;var r=e+this._optionsService.options.scrollback;return r>t.MAX_BUFFER_SIZE?t.MAX_BUFFER_SIZE:r},e.prototype.fillViewportRows=function(e){if(0===this.lines.length){void 0===e&&(e=n.DEFAULT_ATTR_DATA);for(var t=this._rows;t--;)this.lines.push(this.getBlankLine(e))}},e.prototype.clear=function(){this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.lines=new i.CircularList(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()},e.prototype.resize=function(e,t){var r=this.getNullCell(n.DEFAULT_ATTR_DATA),i=this._getCorrectBufferLength(t);if(i>this.lines.maxLength&&(this.lines.maxLength=i),this.lines.length>0){if(this._cols<e)for(var o=0;o<this.lines.length;o++)this.lines.get(o).resize(e,r);var s=0;if(this._rows<t)for(var a=this._rows;a<t;a++)this.lines.length<t+this.ybase&&(this._optionsService.options.windowsMode?this.lines.push(new n.BufferLine(e,r)):this.ybase>0&&this.lines.length<=this.ybase+this.y+s+1?(this.ybase--,s++,this.ydisp>0&&this.ydisp--):this.lines.push(new n.BufferLine(e,r)));else for(a=this._rows;a>t;a--)this.lines.length>t+this.ybase&&(this.lines.length>this.ybase+this.y+1?this.lines.pop():(this.ybase++,this.ydisp++));if(i<this.lines.maxLength){var c=this.lines.length-i;c>0&&(this.lines.trimStart(c),this.ybase=Math.max(this.ybase-c,0),this.ydisp=Math.max(this.ydisp-c,0),this.savedY=Math.max(this.savedY-c,0)),this.lines.maxLength=i}this.x=Math.min(this.x,e-1),this.y=Math.min(this.y,t-1),s&&(this.y+=s),this.savedX=Math.min(this.savedX,e-1),this.scrollTop=0}if(this.scrollBottom=t-1,this._isReflowEnabled&&(this._reflow(e,t),this._cols>e))for(o=0;o<this.lines.length;o++)this.lines.get(o).resize(e,r);this._cols=e,this._rows=t},Object.defineProperty(e.prototype,"_isReflowEnabled",{get:function(){return this._hasScrollback&&!this._optionsService.options.windowsMode},enumerable:!0,configurable:!0}),e.prototype._reflow=function(e,t){this._cols!==e&&(e>this._cols?this._reflowLarger(e,t):this._reflowSmaller(e,t))},e.prototype._reflowLarger=function(e,t){var r=a.reflowLargerGetLinesToRemove(this.lines,this._cols,e,this.ybase+this.y,this.getNullCell(n.DEFAULT_ATTR_DATA));if(r.length>0){var i=a.reflowLargerCreateNewLayout(this.lines,r);a.reflowLargerApplyNewLayout(this.lines,i.layout),this._reflowLargerAdjustViewport(e,t,i.countRemoved)}},e.prototype._reflowLargerAdjustViewport=function(e,t,r){for(var i=this.getNullCell(n.DEFAULT_ATTR_DATA),o=r;o-- >0;)0===this.ybase?(this.y>0&&this.y--,this.lines.length<t&&this.lines.push(new n.BufferLine(e,i))):(this.ydisp===this.ybase&&this.ydisp--,this.ybase--);this.savedY=Math.max(this.savedY-r,0)},e.prototype._reflowSmaller=function(e,t){for(var r=this.getNullCell(n.DEFAULT_ATTR_DATA),i=[],o=0,s=this.lines.length-1;s>=0;s--){var c=this.lines.get(s);if(!(!c||!c.isWrapped&&c.getTrimmedLength()<=e)){for(var l=[c];c.isWrapped&&s>0;)c=this.lines.get(--s),l.unshift(c);var h=this.ybase+this.y;if(!(h>=s&&h<s+l.length)){var u=l[l.length-1].getTrimmedLength(),f=a.reflowSmallerGetNewLineLengths(l,this._cols,e),_=f.length-l.length,d=void 0;d=0===this.ybase&&this.y!==this.lines.length-1?Math.max(0,this.y-this.lines.maxLength+_):Math.max(0,this.lines.length-this.lines.maxLength+_);for(var p=[],v=0;v<_;v++){var g=this.getBlankLine(n.DEFAULT_ATTR_DATA,!0);p.push(g)}p.length>0&&(i.push({start:s+l.length+o,newLines:p}),o+=p.length),l.push.apply(l,p);var y=f.length-1,b=f[y];0===b&&(b=f[--y]);for(var m=l.length-_-1,S=u;m>=0;){var C=Math.min(S,b);if(l[y].copyCellsFrom(l[m],S-C,b-C,C,!0),0===(b-=C)&&(b=f[--y]),0===(S-=C)){m--;var w=Math.max(m,0);S=a.getWrappedLineTrimmedLength(l,w,this._cols)}}for(v=0;v<l.length;v++)f[v]<e&&l[v].setCell(f[v],r);for(var E=_-d;E-- >0;)0===this.ybase?this.y<t-1?(this.y++,this.lines.pop()):(this.ybase++,this.ydisp++):this.ybase<Math.min(this.lines.maxLength,this.lines.length+o)-t&&(this.ybase===this.ydisp&&this.ydisp++,this.ybase++);this.savedY=Math.min(this.savedY+_,this.ybase+t-1)}}}if(i.length>0){var L=[],A=[];for(v=0;v<this.lines.length;v++)A.push(this.lines.get(v));var R=this.lines.length,x=R-1,k=0,D=i[k];this.lines.length=Math.min(this.lines.maxLength,this.lines.length+o);var T=0;for(v=Math.min(this.lines.maxLength-1,R+o-1);v>=0;v--)if(D&&D.start>x+T){for(var O=D.newLines.length-1;O>=0;O--)this.lines.set(v--,D.newLines[O]);v++,L.push({index:x+1,amount:D.newLines.length}),T+=D.newLines.length,D=i[++k]}else this.lines.set(v,A[x--]);var M=0;for(v=L.length-1;v>=0;v--)L[v].index+=M,this.lines.onInsertEmitter.fire(L[v]),M+=L[v].amount;var P=Math.max(0,R+o-this.lines.maxLength);P>0&&this.lines.onTrimEmitter.fire(P)}},e.prototype.stringIndexToBufferIndex=function(e,t,r){for(void 0===r&&(r=!1);t;){var i=this.lines.get(e);if(!i)return[-1,-1];for(var n=r?i.getTrimmedLength():i.length,o=0;o<n;++o)if(i.get(o)[s.CHAR_DATA_WIDTH_INDEX]&&(t-=i.get(o)[s.CHAR_DATA_CHAR_INDEX].length||1),t<0)return[e,o];e++}return[e,0]},e.prototype.translateBufferLineToString=function(e,t,r,i){void 0===r&&(r=0);var n=this.lines.get(e);return n?n.translateToString(t,r,i):""},e.prototype.getWrappedRangeForLine=function(e){for(var t=e,r=e;t>0&&this.lines.get(t).isWrapped;)t--;for(;r+1<this.lines.length&&this.lines.get(r+1).isWrapped;)r++;return{first:t,last:r}},e.prototype.setupTabStops=function(e){for(null!=e?this.tabs[e]||(e=this.prevStop(e)):(this.tabs={},e=0);e<this._cols;e+=this._optionsService.options.tabStopWidth)this.tabs[e]=!0},e.prototype.prevStop=function(e){for(null==e&&(e=this.x);!this.tabs[--e]&&e>0;);return e>=this._cols?this._cols-1:e<0?0:e},e.prototype.nextStop=function(e){for(null==e&&(e=this.x);!this.tabs[++e]&&e<this._cols;);return e>=this._cols?this._cols-1:e<0?0:e},e.prototype.addMarker=function(e){var t=this,r=new c.Marker(e);return this.markers.push(r),r.register(this.lines.onTrim(function(e){r.line-=e,r.line<0&&r.dispose()})),r.register(this.lines.onInsert(function(e){r.line>=e.index&&(r.line+=e.amount)})),r.register(this.lines.onDelete(function(e){r.line>=e.index&&r.line<e.index+e.amount&&r.dispose(),r.line>e.index&&(r.line-=e.amount)})),r.register(r.onDispose(function(){return t._removeMarker(r)})),r},e.prototype._removeMarker=function(e){this.markers.splice(this.markers.indexOf(e),1)},e.prototype.iterator=function(e,t,r,i,n){return new u(this,e,t,r,i,n)},e}();t.Buffer=h;var u=function(){function e(e,t,r,i,n,o){void 0===r&&(r=0),void 0===i&&(i=e.lines.length),void 0===n&&(n=0),void 0===o&&(o=0),this._buffer=e,this._trimRight=t,this._startIndex=r,this._endIndex=i,this._startOverscan=n,this._endOverscan=o,this._startIndex<0&&(this._startIndex=0),this._endIndex>this._buffer.lines.length&&(this._endIndex=this._buffer.lines.length),this._current=this._startIndex}return e.prototype.hasNext=function(){return this._current<this._endIndex},e.prototype.next=function(){var e=this._buffer.getWrappedRangeForLine(this._current);e.first<this._startIndex-this._startOverscan&&(e.first=this._startIndex-this._startOverscan),e.last>this._endIndex+this._endOverscan&&(e.last=this._endIndex+this._endOverscan),e.first=Math.max(e.first,0),e.last=Math.min(e.last,this._buffer.lines.length);for(var t="",r=e.first;r<=e.last;++r)t+=this._buffer.translateBufferLineToString(r,this._trimRight);return this._current=e.last+1,{range:e,content:t}},e}();t.BufferStringIterator=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),n=function(){function e(e){this._maxLength=e,this.onDeleteEmitter=new i.EventEmitter,this.onInsertEmitter=new i.EventEmitter,this.onTrimEmitter=new i.EventEmitter,this._array=new Array(this._maxLength),this._startIndex=0,this._length=0}return Object.defineProperty(e.prototype,"onDelete",{get:function(){return this.onDeleteEmitter.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onInsert",{get:function(){return this.onInsertEmitter.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTrim",{get:function(){return this.onTrimEmitter.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this._maxLength},set:function(e){if(this._maxLength!==e){for(var t=new Array(e),r=0;r<Math.min(e,this.length);r++)t[r]=this._array[this._getCyclicIndex(r)];this._array=t,this._maxLength=e,this._startIndex=0}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._length},set:function(e){if(e>this._length)for(var t=this._length;t<e;t++)this._array[t]=void 0;this._length=e},enumerable:!0,configurable:!0}),e.prototype.get=function(e){return this._array[this._getCyclicIndex(e)]},e.prototype.set=function(e,t){this._array[this._getCyclicIndex(e)]=t},e.prototype.push=function(e){this._array[this._getCyclicIndex(this._length)]=e,this._length===this._maxLength?(this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1)):this._length++},e.prototype.recycle=function(){if(this._length!==this._maxLength)throw new Error("Can only recycle when the buffer is full");return this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1),this._array[this._getCyclicIndex(this._length-1)]},Object.defineProperty(e.prototype,"isFull",{get:function(){return this._length===this._maxLength},enumerable:!0,configurable:!0}),e.prototype.pop=function(){return this._array[this._getCyclicIndex(this._length---1)]},e.prototype.splice=function(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(t){for(var n=e;n<this._length-t;n++)this._array[this._getCyclicIndex(n)]=this._array[this._getCyclicIndex(n+t)];this._length-=t}for(n=this._length-1;n>=e;n--)this._array[this._getCyclicIndex(n+r.length)]=this._array[this._getCyclicIndex(n)];for(n=0;n<r.length;n++)this._array[this._getCyclicIndex(e+n)]=r[n];if(this._length+r.length>this._maxLength){var o=this._length+r.length-this._maxLength;this._startIndex+=o,this._length=this._maxLength,this.onTrimEmitter.fire(o)}else this._length+=r.length},e.prototype.trimStart=function(e){e>this._length&&(e=this._length),this._startIndex+=e,this._length-=e,this.onTrimEmitter.fire(e)},e.prototype.shiftElements=function(e,t,r){if(!(t<=0)){if(e<0||e>=this._length)throw new Error("start argument out of range");if(e+r<0)throw new Error("Cannot shift elements in list beyond index 0");if(r>0){for(var i=t-1;i>=0;i--)this.set(e+i+r,this.get(e+i));var n=e+t+r-this._length;if(n>0)for(this._length+=n;this._length>this._maxLength;)this._length--,this._startIndex++,this.onTrimEmitter.fire(1)}else for(i=0;i<t;i++)this.set(e+i+r,this.get(e+i))}},e.prototype._getCyclicIndex=function(e){return(this._startIndex+e)%this._maxLength},e}();t.CircularList=n},function(e,t,r){"use strict";function i(e,t,r){if(t===e.length-1)return e[t].getTrimmedLength();var i=!e[t].hasContent(r-1)&&1===e[t].getWidth(r-1),n=2===e[t+1].getWidth(0);return i&&n?r-1:r}Object.defineProperty(t,"__esModule",{value:!0}),t.reflowLargerGetLinesToRemove=function(e,t,r,n,o){for(var s=[],a=0;a<e.length-1;a++){var c=a,l=e.get(++c);if(l.isWrapped){for(var h=[e.get(a)];c<e.length&&l.isWrapped;)h.push(l),l=e.get(++c);if(n>=a&&n<c)a+=h.length-1;else{for(var u=0,f=i(h,u,t),_=1,d=0;_<h.length;){var p=i(h,_,t),v=p-d,g=r-f,y=Math.min(v,g);h[u].copyCellsFrom(h[_],d,f,y,!1),(f+=y)===r&&(u++,f=0),(d+=y)===p&&(_++,d=0),0===f&&0!==u&&2===h[u-1].getWidth(r-1)&&(h[u].copyCellsFrom(h[u-1],r-1,f++,1,!1),h[u-1].setCell(r-1,o))}h[u].replaceCells(f,r,o);for(var b=0,m=h.length-1;m>0&&(m>u||0===h[m].getTrimmedLength());m--)b++;b>0&&(s.push(a+h.length-b),s.push(b)),a+=h.length-1}}}return s},t.reflowLargerCreateNewLayout=function(e,t){for(var r=[],i=0,n=t[i],o=0,s=0;s<e.length;s++)if(n===s){var a=t[++i];e.onDeleteEmitter.fire({index:s-o,amount:a}),s+=a-1,o+=a,n=t[++i]}else r.push(s);return{layout:r,countRemoved:o}},t.reflowLargerApplyNewLayout=function(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.get(t[i]));for(i=0;i<r.length;i++)e.set(i,r[i]);e.length=t.length},t.reflowSmallerGetNewLineLengths=function(e,t,r){for(var n=[],o=e.map(function(r,n){return i(e,n,t)}).reduce(function(e,t){return e+t}),s=0,a=0,c=0;c<o;){if(o-c<r){n.push(o-c);break}s+=r;var l=i(e,a,t);s>l&&(s-=l,a++);var h=2===e[a].getWidth(s-1);h&&s--;var u=h?r-1:r;n.push(u),c+=u}return n},t.getWrappedLineTrimmedLength=i},function(e,t,r){"use strict";var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),s=function(e){function t(r){var i=e.call(this)||this;return i.line=r,i._id=t._nextId++,i.isDisposed=!1,i._onDispose=new o.EventEmitter,i}return n(t,e),Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onDispose",{get:function(){return this._onDispose.event},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this.line=-1,this._onDispose.fire())},t._nextId=1,t}(r(2).Disposable);t.Marker=s},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(4),s=r(28),a=function(){function e(e,t){this._renderService=e,this._charSizeService=t}return e.prototype.getCoords=function(e,t,r,i,n){return s.getCoords(e,t,r,i,this._charSizeService.hasValidSize,this._renderService.dimensions.actualCellWidth,this._renderService.dimensions.actualCellHeight,n)},e.prototype.getRawByteCoords=function(e,t,r,i){var n=this.getCoords(e,t,r,i);return s.getRawByteCoords(n)},e=i([n(0,o.IRenderService),n(1,o.ICharSizeService)],e)}();t.MouseService=a},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s=r(1),a=r(31),c=Object.freeze({applicationCursorKeys:!1,applicationKeypad:!1,origin:!1,wraparound:!0}),l=function(){function e(e,t,r,i){this._scrollToBottom=e,this._bufferService=t,this._logService=r,this._optionsService=i,this.isCursorInitialized=!1,this.isCursorHidden=!1,this._onData=new s.EventEmitter,this._onUserInput=new s.EventEmitter,this._onBinary=new s.EventEmitter,this.decPrivateModes=a.clone(c)}return Object.defineProperty(e.prototype,"onData",{get:function(){return this._onData.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onUserInput",{get:function(){return this._onUserInput.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onBinary",{get:function(){return this._onBinary.event},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this.decPrivateModes=a.clone(c)},e.prototype.triggerDataEvent=function(e,t){if(void 0===t&&(t=!1),!this._optionsService.options.disableStdin){var r=this._bufferService.buffer;r.ybase!==r.ydisp&&this._scrollToBottom(),t&&this._onUserInput.fire(),this._logService.debug('sending data "'+e+'"',function(){return e.split("").map(function(e){return e.charCodeAt(0)})}),this._onData.fire(e)}},e.prototype.triggerBinaryEvent=function(e){this._optionsService.options.disableStdin||(this._logService.debug('sending binary "'+e+'"',function(){return e.split("").map(function(e){return e.charCodeAt(0)})}),this._onBinary.fire(e))},e=i([n(1,o.IBufferService),n(2,o.ILogService),n(3,o.IOptionsService)],e)}();t.CoreService=l},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}},o=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),n=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,n++)i[n]=o[s];return i};Object.defineProperty(t,"__esModule",{value:!0});var s,a=r(0);!function(e){e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e[e.OFF=4]="OFF"}(s=t.LogLevel||(t.LogLevel={}));var c={debug:s.DEBUG,info:s.INFO,warn:s.WARN,error:s.ERROR,off:s.OFF},l=function(){function e(e){var t=this;this._optionsService=e,this._updateLogLevel(),this._optionsService.onOptionChange(function(e){"logLevel"===e&&t._updateLogLevel()})}return e.prototype._updateLogLevel=function(){this._logLevel=c[this._optionsService.options.logLevel]},e.prototype._evalLazyOptionalParams=function(e){for(var t=0;t<e.length;t++)"function"==typeof e[t]&&(e[t]=e[t]())},e.prototype._log=function(e,t,r){this._evalLazyOptionalParams(r),e.call.apply(e,o([console,"xterm.js: "+t],r))},e.prototype.debug=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this._logLevel<=s.DEBUG&&this._log(console.log,e,t)},e.prototype.info=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this._logLevel<=s.INFO&&this._log(console.info,e,t)},e.prototype.warn=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this._logLevel<=s.WARN&&this._log(console.warn,e,t)},e.prototype.error=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this._logLevel<=s.ERROR&&this._log(console.error,e,t)},e=i([n(0,a.IOptionsService)],e)}();t.LogService=l},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s=function(){function e(e){this._bufferService=e,this.clearRange()}return Object.defineProperty(e.prototype,"start",{get:function(){return this._start},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._end},enumerable:!0,configurable:!0}),e.prototype.clearRange=function(){this._start=this._bufferService.buffer.y,this._end=this._bufferService.buffer.y},e.prototype.markDirty=function(e){e<this._start?this._start=e:e>this._end&&(this._end=e)},e.prototype.markRangeDirty=function(e,t){if(e>t){var r=e;e=t,t=r}e<this._start&&(this._start=e),t>this._end&&(this._end=t)},e.prototype.markAllDirty=function(){this.markRangeDirty(0,this._bufferService.rows-1)},e=i([n(0,o.IBufferService)],e)}();t.DirtyRowService=s},function(e,t,r){"use strict";var i=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),n=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,n++)i[n]=o[s];return i};Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(14),s=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._entries=new Map;for(var r=0,i=e;r<i.length;r++){var n=i[r],o=n[0],s=n[1];this.set(o,s)}}return e.prototype.set=function(e,t){var r=this._entries.get(e);return this._entries.set(e,t),r},e.prototype.forEach=function(e){this._entries.forEach(function(t,r){return e(r,t)})},e.prototype.has=function(e){return this._entries.has(e)},e.prototype.get=function(e){return this._entries.get(e)},e}();t.ServiceCollection=s;var a=function(){function e(){this._services=new s,this._services.set(n.IInstantiationService,this)}return e.prototype.setService=function(e,t){this._services.set(e,t)},e.prototype.getService=function(e){return this._services.get(e)},e.prototype.createInstance=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=o.getServiceDependencies(e).sort(function(e,t){return e.index-t.index}),s=[],a=0,c=n;a<c.length;a++){var l=c[a],h=this._services.get(l.id);if(!h)throw new Error("[createInstance] "+e.name+" depends on UNKNOWN service "+l.id+".");s.push(h)}var u=n.length>0?n[0].index:t.length;if(t.length!==u)throw new Error("[createInstance] First service dependency of "+e.name+" at position "+(u+1)+" conflicts with "+t.length+" static arguments");return new(e.bind.apply(e,i([void 0],i(t,s))))},e}();t.InstantiationService=a},function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s=r(1),a={NONE:{events:0,restrict:function(){return!1}},X10:{events:1,restrict:function(e){return 4!==e.button&&1===e.action&&(e.ctrl=!1,e.alt=!1,e.shift=!1,!0)}},VT200:{events:19,restrict:function(e){return 32!==e.action}},DRAG:{events:23,restrict:function(e){return 32!==e.action||3!==e.button}},ANY:{events:31,restrict:function(e){return!0}}};function c(e,t){var r=(e.ctrl?16:0)|(e.shift?4:0)|(e.alt?8:0);return 4===e.button?(r|=64,r|=e.action):(r|=3&e.button,4&e.button&&(r|=64),8&e.button&&(r|=128),32===e.action?r|=32:0!==e.action||t||(r|=3)),r}var l=String.fromCharCode,h={DEFAULT:function(e){var t=[c(e,!1)+32,e.col+32,e.row+32];return t[0]>255||t[1]>255||t[2]>255?"":"[M"+l(t[0])+l(t[1])+l(t[2])},SGR:function(e){var t=0===e.action&&4!==e.button?"m":"M";return"[<"+c(e,!0)+";"+e.col+";"+e.row+t}},u=function(){function e(e,t){var r=this;this._bufferService=e,this._coreService=t,this._protocols={},this._encodings={},this._activeProtocol="",this._activeEncoding="",this._onProtocolChange=new s.EventEmitter,this._lastEvent=null,Object.keys(a).forEach(function(e){return r.addProtocol(e,a[e])}),Object.keys(h).forEach(function(e){return r.addEncoding(e,h[e])}),this.reset()}return e.prototype.addProtocol=function(e,t){this._protocols[e]=t},e.prototype.addEncoding=function(e,t){this._encodings[e]=t},Object.defineProperty(e.prototype,"activeProtocol",{get:function(){return this._activeProtocol},set:function(e){if(!this._protocols[e])throw new Error('unknown protocol "'+e+'"');this._activeProtocol=e,this._onProtocolChange.fire(this._protocols[e].events)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeEncoding",{get:function(){return this._activeEncoding},set:function(e){if(!this._encodings[e])throw new Error('unknown encoding "'+e+'"');this._activeEncoding=e},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this.activeProtocol="NONE",this.activeEncoding="DEFAULT",this._lastEvent=null},Object.defineProperty(e.prototype,"onProtocolChange",{get:function(){return this._onProtocolChange.event},enumerable:!0,configurable:!0}),e.prototype.triggerMouseEvent=function(e){if(e.col<0||e.col>=this._bufferService.cols||e.row<0||e.row>=this._bufferService.rows)return!1;if(4===e.button&&32===e.action)return!1;if(3===e.button&&32!==e.action)return!1;if(4!==e.button&&(2===e.action||3===e.action))return!1;if(e.col++,e.row++,32===e.action&&this._lastEvent&&this._compareEvents(this._lastEvent,e))return!1;if(!this._protocols[this._activeProtocol].restrict(e))return!1;var t=this._encodings[this._activeEncoding](e);return t&&("DEFAULT"===this._activeEncoding?this._coreService.triggerBinaryEvent(t):this._coreService.triggerDataEvent(t,!0)),this._lastEvent=e,!0},e.prototype.explainEvents=function(e){return{DOWN:!!(1&e),UP:!!(2&e),DRAG:!!(4&e),MOVE:!!(8&e),WHEEL:!!(16&e)}},e.prototype._compareEvents=function(e,t){return e.col===t.col&&(e.row===t.row&&(e.button===t.button&&(e.action===t.action&&(e.ctrl===t.ctrl&&(e.alt===t.alt&&e.shift===t.shift)))))},e=i([n(0,o.IBufferService),n(1,o.ICoreService)],e)}();t.CoreMouseService=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this._action=e,this._writeBuffer=[],this._callbacks=[],this._pendingData=0,this._bufferOffset=0}return e.prototype.writeSync=function(e){if(this._writeBuffer.length){for(var t=this._bufferOffset;t<this._writeBuffer.length;++t){var r=this._writeBuffer[t],i=this._callbacks[t];this._action(r),i&&i()}this._writeBuffer=[],this._callbacks=[],this._pendingData=0,this._bufferOffset=2147483647}this._action(e)},e.prototype.write=function(e,t){var r=this;if(this._pendingData>5e7)throw new Error("write data discarded, use flow control to avoid losing data");this._writeBuffer.length||(this._bufferOffset=0,setTimeout(function(){return r._innerWrite()})),this._pendingData+=e.length,this._writeBuffer.push(e),this._callbacks.push(t)},e.prototype._innerWrite=function(){for(var e=this,t=Date.now();this._writeBuffer.length>this._bufferOffset;){var r=this._writeBuffer[this._bufferOffset],i=this._callbacks[this._bufferOffset];if(this._bufferOffset++,this._action(r),this._pendingData-=r.length,i&&i(),Date.now()-t>=12)break}this._writeBuffer.length>this._bufferOffset?(this._bufferOffset>50&&(this._writeBuffer=this._writeBuffer.slice(this._bufferOffset),this._callbacks=this._callbacks.slice(this._bufferOffset),this._bufferOffset=0),setTimeout(function(){return e._innerWrite()},0)):(this._writeBuffer=[],this._callbacks=[],this._pendingData=0,this._bufferOffset=0)},e}();t.WriteBuffer=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this._textarea=e}return Object.defineProperty(e.prototype,"isFocused",{get:function(){return document.activeElement===this._textarea&&document.hasFocus()},enumerable:!0,configurable:!0}),e}();t.CoreBrowserService=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),n=r(78),o=function(){function e(){this._providers=Object.create(null),this._active="",this._onChange=new i.EventEmitter;var e=new n.UnicodeV6;this.register(e),this._active=e.version,this._activeProvider=e}return Object.defineProperty(e.prototype,"onChange",{get:function(){return this._onChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"versions",{get:function(){return Object.keys(this._providers)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeVersion",{get:function(){return this._active},set:function(e){if(!this._providers[e])throw new Error('unknown Unicode version "'+e+'"');this._active=e,this._activeProvider=this._providers[e],this._onChange.fire(e)},enumerable:!0,configurable:!0}),e.prototype.register=function(e){this._providers[e.version]=e},e.prototype.wcwidth=function(e){return this._activeProvider.wcwidth(e)},e.prototype.getStringCellWidth=function(e){for(var t=0,r=e.length,i=0;i<r;++i){var n=e.charCodeAt(i);if(55296<=n&&n<=56319){if(++i>=r)return t+this.wcwidth(n);var o=e.charCodeAt(i);56320<=o&&o<=57343?n=1024*(n-55296)+o-56320+65536:t+=this.wcwidth(o)}t+=this.wcwidth(n)}return t},e}();t.UnicodeService=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=r(15),o=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531]],s=[[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]];var a=function(){function e(){if(this.version="6",!i){i=new Uint8Array(65536),n.fill(i,1),i[0]=0,n.fill(i,0,1,32),n.fill(i,0,127,160),n.fill(i,2,4352,4448),i[9001]=2,i[9002]=2,n.fill(i,2,11904,42192),i[12351]=1,n.fill(i,2,44032,55204),n.fill(i,2,63744,64256),n.fill(i,2,65040,65050),n.fill(i,2,65072,65136),n.fill(i,2,65280,65377),n.fill(i,2,65504,65511);for(var e=0;e<o.length;++e)n.fill(i,0,o[e][0],o[e][1]+1)}}return e.prototype.wcwidth=function(e){return e<32?0:e<127?1:e<65536?i[e]:function(e,t){var r,i=0,n=t.length-1;if(e<t[0][0]||e>t[n][1])return!1;for(;n>=i;)if(e>t[r=i+n>>1][1])i=r+1;else{if(!(e<t[r][0]))return!0;n=r-1}return!1}(e,s)?0:e>=131072&&e<=196605||e>=196608&&e<=262141?2:1},e}();t.UnicodeV6=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.charsets=[],this.glevel=0}return e.prototype.reset=function(){this.charset=void 0,this.charsets=[],this.glevel=0},e.prototype.setgLevel=function(e){this.glevel=e,this.charset=this.charsets[e]},e.prototype.setgCharset=function(e,t){this.charsets[e]=t,this.glevel===e&&(this.charset=t)},e}();t.CharsetService=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this._addons=[]}return e.prototype.dispose=function(){for(var e=this._addons.length-1;e>=0;e--)this._addons[e].instance.dispose()},e.prototype.loadAddon=function(e,t){var r=this,i={instance:t,dispose:t.dispose,isDisposed:!1};this._addons.push(i),t.dispose=function(){return r._wrappedAddonDispose(i)},t.activate(e)},e.prototype._wrappedAddonDispose=function(e){if(!e.isDisposed){for(var t=-1,r=0;r<this._addons.length;r++)if(this._addons[r]===e){t=r;break}if(-1===t)throw new Error("Could not dispose an addon that has not been loaded");e.isDisposed=!0,e.dispose.apply(e.instance),this._addons.splice(t,1)}},e}();t.AddonManager=i}])});


/***/ })

}]);
//# sourceMappingURL=25.bundle.js.map