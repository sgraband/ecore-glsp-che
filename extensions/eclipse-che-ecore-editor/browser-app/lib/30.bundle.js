(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "../node_modules/@theia/callhierarchy/lib/browser/callhierarchy-context.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@theia/callhierarchy/lib/browser/callhierarchy-context.js ***!
  \*********************************************************************************/
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
var services_1 = __webpack_require__(/*! monaco-languageclient/lib/services */ "../node_modules/monaco-languageclient/lib/services.js");
var utils = __webpack_require__(/*! ./utils */ "../node_modules/@theia/callhierarchy/lib/browser/utils.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var CallHierarchyContext = /** @class */ (function () {
    function CallHierarchyContext(languageClient, textModelService, logger) {
        this.languageClient = languageClient;
        this.textModelService = textModelService;
        this.logger = logger;
        this.symbolCache = new Map();
        this.disposables = [];
    }
    CallHierarchyContext.prototype.getAllSymbols = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var cachedSymbols, result, symbols;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cachedSymbols = this.symbolCache.get(uri);
                        if (cachedSymbols) {
                            return [2 /*return*/, cachedSymbols];
                        }
                        return [4 /*yield*/, this.languageClient.sendRequest(services_1.DocumentSymbolRequest.type, {
                                textDocument: services_1.TextDocumentIdentifier.create(uri)
                            })];
                    case 1:
                        result = _a.sent();
                        symbols = (result || []);
                        this.symbolCache.set(uri, symbols);
                        return [2 /*return*/, symbols];
                }
            });
        });
    };
    // tslint:disable-next-line:typedef
    CallHierarchyContext.prototype.getEditorModelReference = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.textModelService.createModelReference(new uri_1.default(uri))];
                    case 1:
                        model = _a.sent();
                        this.disposables.push(model);
                        return [2 /*return*/, model];
                }
            });
        });
    };
    CallHierarchyContext.prototype.getDefinitionLocation = function (uri, position) {
        return __awaiter(this, void 0, void 0, function () {
            var locations, error_1, targetLocation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        locations = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.languageClient.sendRequest(services_1.DefinitionRequest.type, {
                                position: position,
                                textDocument: { uri: uri }
                            })];
                    case 2:
                        locations = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.logger.error("Error from definitions request: " + uri + "#" + position.line + "/" + position.character, error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        if (!locations) {
                            return [2 /*return*/, undefined];
                        }
                        targetLocation = Array.isArray(locations) ? locations[0] : locations;
                        return [2 /*return*/, services_1.LocationLink.is(targetLocation) ? {
                                uri: targetLocation.targetUri,
                                range: targetLocation.targetSelectionRange
                            } : targetLocation];
                }
            });
        });
    };
    CallHierarchyContext.prototype.getCallerReferences = function (definition) {
        return __awaiter(this, void 0, void 0, function () {
            var references, uniqueReferences, filteredReferences, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.languageClient.sendRequest(services_1.ReferencesRequest.type, {
                                context: {
                                    includeDeclaration: false // TODO find out, why definitions are still contained
                                },
                                position: {
                                    line: definition.range.start.line,
                                    character: definition.range.start.character
                                },
                                textDocument: {
                                    uri: definition.uri
                                }
                            })];
                    case 1:
                        references = _a.sent();
                        uniqueReferences = utils.filterUnique(references);
                        filteredReferences = utils.filterSame(uniqueReferences, definition);
                        return [2 /*return*/, filteredReferences];
                    case 2:
                        error_2 = _a.sent();
                        this.logger.error('Error from references request', error_2);
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CallHierarchyContext.prototype.dispose = function () {
        this.disposables.forEach(function (element) {
            element.dispose();
        });
        this.symbolCache.clear();
    };
    return CallHierarchyContext;
}());
exports.CallHierarchyContext = CallHierarchyContext;


/***/ }),

/***/ "../node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service-impl.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service-impl.js ***!
  \**************************************************************************************/
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
var language_client_provider_1 = __webpack_require__(/*! @theia/languages/lib/browser/language-client-provider */ "../node_modules/@theia/languages/lib/browser/language-client-provider.js");
var services_1 = __webpack_require__(/*! monaco-languageclient/lib/services */ "../node_modules/monaco-languageclient/lib/services.js");
var utils = __webpack_require__(/*! ./utils */ "../node_modules/@theia/callhierarchy/lib/browser/utils.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var monaco_text_model_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-text-model-service */ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var callhierarchy_context_1 = __webpack_require__(/*! ./callhierarchy-context */ "../node_modules/@theia/callhierarchy/lib/browser/callhierarchy-context.js");
var AbstractDefaultCallHierarchyService = /** @class */ (function () {
    function AbstractDefaultCallHierarchyService() {
    }
    Object.defineProperty(AbstractDefaultCallHierarchyService.prototype, "selector", {
        get: function () {
            return this.languageId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns root definition of caller hierarchy.
     */
    AbstractDefaultCallHierarchyService.prototype.getRootDefinition = function (uri, position) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.withContext(function (services) { return __awaiter(_this, void 0, void 0, function () {
                        var definitionLocation, definitionSymbol;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, services.getDefinitionLocation(uri, position)];
                                case 1:
                                    definitionLocation = _a.sent();
                                    if (!definitionLocation) {
                                        return [2 /*return*/, undefined];
                                    }
                                    return [4 /*yield*/, this.getEnclosingRootSymbol(definitionLocation, services)];
                                case 2:
                                    definitionSymbol = _a.sent();
                                    if (!definitionSymbol) {
                                        return [2 /*return*/, undefined];
                                    }
                                    return [2 /*return*/, this.toDefinition(definitionSymbol, services)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Returns next level of caller definitions.
     */
    AbstractDefaultCallHierarchyService.prototype.getCallers = function (definition) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.withContext(function (services) { return __awaiter(_this, void 0, void 0, function () {
                        var callerReferences, callers;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, services.getCallerReferences(definition.location)];
                                case 1:
                                    callerReferences = _a.sent();
                                    callers = this.createCallers(callerReferences, services);
                                    return [2 /*return*/, callers];
                            }
                        });
                    }); })];
            });
        });
    };
    AbstractDefaultCallHierarchyService.prototype.withContext = function (lambda) {
        return __awaiter(this, void 0, void 0, function () {
            var context_1, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.createContext()];
                    case 1:
                        context_1 = _a.sent();
                        if (!context_1) return [3 /*break*/, 3];
                        return [4 /*yield*/, lambda.call(this, context_1)];
                    case 2:
                        result = _a.sent();
                        context_1.dispose();
                        return [2 /*return*/, result];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.logger.error('Error getting language client', error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, undefined];
                }
            });
        });
    };
    AbstractDefaultCallHierarchyService.prototype.createContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.languageClientProvider.getLanguageClient(this.languageId)];
                    case 1:
                        languageClient = _a.sent();
                        if (!languageClient) {
                            this.logger.error('No language client with ID ' + this.languageId);
                            return [2 /*return*/, undefined];
                        }
                        else {
                            return [2 /*return*/, new callhierarchy_context_1.CallHierarchyContext(languageClient, this.textModelService, this.logger)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates callers for given references and method symbols.
     */
    AbstractDefaultCallHierarchyService.prototype.createCallers = function (callerReferences, context) {
        return __awaiter(this, void 0, void 0, function () {
            var result, caller2references, callerReferences_1, callerReferences_1_1, reference, callerSymbol, references, e_1_1, _a, _b, callerSymbol, locations, definition, caller, e_2_1;
            var e_1, _c, e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        result = [];
                        caller2references = new Map();
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 8]);
                        callerReferences_1 = __values(callerReferences), callerReferences_1_1 = callerReferences_1.next();
                        _e.label = 2;
                    case 2:
                        if (!!callerReferences_1_1.done) return [3 /*break*/, 5];
                        reference = callerReferences_1_1.value;
                        return [4 /*yield*/, this.getEnclosingCallerSymbol(reference, context)];
                    case 3:
                        callerSymbol = _e.sent();
                        if (callerSymbol) {
                            references = caller2references.get(callerSymbol);
                            if (references) {
                                references.push(reference);
                            }
                            else {
                                caller2references.set(callerSymbol, [reference]);
                            }
                        }
                        _e.label = 4;
                    case 4:
                        callerReferences_1_1 = callerReferences_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (callerReferences_1_1 && !callerReferences_1_1.done && (_c = callerReferences_1.return)) _c.call(callerReferences_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        _e.trys.push([8, 13, 14, 15]);
                        _a = __values(caller2references.keys()), _b = _a.next();
                        _e.label = 9;
                    case 9:
                        if (!!_b.done) return [3 /*break*/, 12];
                        callerSymbol = _b.value;
                        locations = caller2references.get(callerSymbol);
                        if (!locations) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.toDefinition(callerSymbol, context)];
                    case 10:
                        definition = _e.sent();
                        if (definition) {
                            caller = this.toCaller(definition, locations);
                            result.push(caller);
                        }
                        _e.label = 11;
                    case 11:
                        _b = _a.next();
                        return [3 /*break*/, 9];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/, result];
                }
            });
        });
    };
    AbstractDefaultCallHierarchyService.prototype.toCaller = function (def, references) {
        return { callerDefinition: def, references: references.map(function (ref) { return ref.range; }) };
    };
    AbstractDefaultCallHierarchyService.prototype.toDefinition = function (symbol, context) {
        return __awaiter(this, void 0, void 0, function () {
            var location, symbolName, symbolKind, containerName, selectionRange;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSymbolNameLocation(symbol, context)];
                    case 1:
                        location = _a.sent();
                        if (!location) {
                            return [2 /*return*/, undefined];
                        }
                        symbolName = symbol.name;
                        symbolKind = symbol.kind;
                        containerName = symbol.containerName;
                        selectionRange = location.range;
                        return [2 /*return*/, { location: location, selectionRange: selectionRange, symbolName: symbolName, symbolKind: symbolKind, containerName: containerName }];
                }
            });
        });
    };
    /**
     * Override this to configure the callables of your language.
     */
    AbstractDefaultCallHierarchyService.prototype.isCallable = function (symbol) {
        switch (symbol.kind) {
            case services_1.SymbolKind.Constant:
            case services_1.SymbolKind.Constructor:
            case services_1.SymbolKind.Field:
            case services_1.SymbolKind.Function:
            case services_1.SymbolKind.Method:
            case services_1.SymbolKind.Property:
            case services_1.SymbolKind.Variable:
                return true;
            default:
                return false;
        }
    };
    /**
     * Finds the symbol that encloses the definition range of the root element
     *
     * As symbols can be nested, we are looking for the one with the smallest region.
     * As we only check regions that contain the definition, that is the one with the
     * latest start position.
     */
    AbstractDefaultCallHierarchyService.prototype.getEnclosingRootSymbol = function (definition, context) {
        return __awaiter(this, void 0, void 0, function () {
            var allSymbols, symbols, containsDefinition, symbols_1, symbols_1_1, symbol, containerName, candidate, children, children_1, children_1_1, child, symbols, bestMatch, bestRange, symbols_2, symbols_2_1, candidate, candidateRange;
            var e_3, _a, e_4, _b, e_5, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, context.getAllSymbols(definition.uri)];
                    case 1:
                        allSymbols = _d.sent();
                        if (allSymbols.length === 0) {
                            return [2 /*return*/, undefined];
                        }
                        if (services_1.DocumentSymbol.is(allSymbols[0])) {
                            symbols = allSymbols;
                            containsDefinition = function (symbol) { return utils.containsRange(symbol.range, definition.range); };
                            try {
                                for (symbols_1 = __values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                                    symbol = symbols_1_1.value;
                                    containerName = definition.uri.split('/').pop();
                                    candidate = containsDefinition(symbol) ? symbol : undefined;
                                    outer: while (candidate) {
                                        children = candidate.children || [];
                                        try {
                                            for (children_1 = (e_4 = void 0, __values(children)), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                                                child = children_1_1.value;
                                                if (containsDefinition(child)) {
                                                    containerName = candidate.name;
                                                    candidate = child;
                                                    continue outer;
                                                }
                                            }
                                        }
                                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                        finally {
                                            try {
                                                if (children_1_1 && !children_1_1.done && (_b = children_1.return)) _b.call(children_1);
                                            }
                                            finally { if (e_4) throw e_4.error; }
                                        }
                                        break;
                                    }
                                    if (candidate) {
                                        return [2 /*return*/, __assign({ uri: definition.uri, containerName: containerName }, candidate)];
                                    }
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            return [2 /*return*/, undefined];
                        }
                        else {
                            symbols = allSymbols.filter(function (s) { return _this.isCallable(s); });
                            bestMatch = undefined;
                            bestRange = undefined;
                            try {
                                for (symbols_2 = __values(symbols), symbols_2_1 = symbols_2.next(); !symbols_2_1.done; symbols_2_1 = symbols_2.next()) {
                                    candidate = symbols_2_1.value;
                                    candidateRange = candidate.location.range;
                                    if (utils.containsRange(candidateRange, definition.range)) {
                                        if (!bestMatch || utils.startsAfter(candidateRange, bestRange)) {
                                            bestMatch = candidate;
                                            bestRange = candidateRange;
                                        }
                                    }
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (symbols_2_1 && !symbols_2_1.done && (_c = symbols_2.return)) _c.call(symbols_2);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                            return [2 /*return*/, bestMatch];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Finds the symbol that encloses the reference range of a caller
     */
    AbstractDefaultCallHierarchyService.prototype.getEnclosingCallerSymbol = function (reference, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getEnclosingRootSymbol(reference, context)];
            });
        });
    };
    /**
     * Finds the location of its name within a symbol's location.
     */
    AbstractDefaultCallHierarchyService.prototype.getSymbolNameLocation = function (symbol, context) {
        return __awaiter(this, void 0, void 0, function () {
            var symbolLocation, model, position, endPosition, word, range, delta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        symbolLocation = services_1.DocumentSymbol.is(symbol) ? symbol : symbol.location;
                        return [4 /*yield*/, context.getEditorModelReference(symbolLocation.uri)];
                    case 1:
                        model = _a.sent();
                        position = new monaco.Position(symbolLocation.range.start.line + 1, symbolLocation.range.start.character + 1);
                        endPosition = new monaco.Position(symbolLocation.range.end.line + 1, symbolLocation.range.end.character + 1);
                        do {
                            word = model.object.textEditorModel.getWordAtPosition(position);
                            if (word && word.word === symbol.name) {
                                range = services_1.Range.create(services_1.Position.create(position.lineNumber - 1, position.column - 1), services_1.Position.create(position.lineNumber - 1, position.column - 1 + symbol.name.length));
                                return [2 /*return*/, services_1.Location.create(symbolLocation.uri, range)];
                            }
                            delta = (word) ? word.word.length + 1 : 1;
                            position = model.object.textEditorModel.modifyPosition(position, delta);
                        } while (position.isBefore(endPosition));
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(language_client_provider_1.LanguageClientProvider),
        __metadata("design:type", Object)
    ], AbstractDefaultCallHierarchyService.prototype, "languageClientProvider", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], AbstractDefaultCallHierarchyService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], AbstractDefaultCallHierarchyService.prototype, "textModelService", void 0);
    AbstractDefaultCallHierarchyService = __decorate([
        inversify_1.injectable()
    ], AbstractDefaultCallHierarchyService);
    return AbstractDefaultCallHierarchyService;
}());
exports.AbstractDefaultCallHierarchyService = AbstractDefaultCallHierarchyService;


/***/ }),

/***/ "../node_modules/@theia/callhierarchy/lib/browser/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@theia/callhierarchy/lib/browser/index.js ***!
  \*****************************************************************/
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./callhierarchy */ "../node_modules/@theia/callhierarchy/lib/browser/callhierarchy.js"));
__export(__webpack_require__(/*! ./callhierarchy-contribution */ "../node_modules/@theia/callhierarchy/lib/browser/callhierarchy-contribution.js"));
__export(__webpack_require__(/*! ./callhierarchy-frontend-module */ "../node_modules/@theia/callhierarchy/lib/browser/callhierarchy-frontend-module.js"));
__export(__webpack_require__(/*! ./callhierarchy-service */ "../node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service.js"));


/***/ }),

/***/ "../node_modules/@theia/callhierarchy/lib/browser/utils.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@theia/callhierarchy/lib/browser/utils.js ***!
  \*****************************************************************/
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
/**
 * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
 */
function containsRange(range, otherRange) {
    if (otherRange.start.line < range.start.line || otherRange.end.line < range.start.line) {
        return false;
    }
    if (otherRange.start.line > range.end.line || otherRange.end.line > range.end.line) {
        return false;
    }
    if (otherRange.start.line === range.start.line && otherRange.start.character < range.start.character) {
        return false;
    }
    if (otherRange.end.line === range.end.line && otherRange.end.character > range.end.character) {
        return false;
    }
    return true;
}
exports.containsRange = containsRange;
function containsPosition(range, position) {
    return comparePosition(range.start, position) >= 0 && comparePosition(range.end, position) <= 0;
}
exports.containsPosition = containsPosition;
function sameStart(a, b) {
    var pos1 = a.start;
    var pos2 = b.start;
    return pos1.line === pos2.line
        && pos1.character === pos2.character;
}
function filterSame(locations, definition) {
    return locations.filter(function (candidate) { return candidate.uri !== definition.uri
        || !sameStart(candidate.range, definition.range); });
}
exports.filterSame = filterSame;
function comparePosition(left, right) {
    var diff = right.line - left.line;
    if (diff !== 0) {
        return diff;
    }
    return right.character - left.character;
}
exports.comparePosition = comparePosition;
function filterUnique(locations) {
    var e_1, _a;
    if (!locations) {
        return [];
    }
    var result = [];
    var set = new Set();
    try {
        for (var locations_1 = __values(locations), locations_1_1 = locations_1.next(); !locations_1_1.done; locations_1_1 = locations_1.next()) {
            var location_1 = locations_1_1.value;
            var json = JSON.stringify(location_1);
            if (!set.has(json)) {
                set.add(json);
                result.push(location_1);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (locations_1_1 && !locations_1_1.done && (_a = locations_1.return)) _a.call(locations_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
exports.filterUnique = filterUnique;
function startsAfter(a, b) {
    if (a.start.line > b.start.line) {
        return true;
    }
    if (a.start.line === b.start.line) {
        if (a.start.character > b.start.character) {
            return true;
        }
        if (a.start.character === b.start.character) {
            if (a.end.line > b.end.line) {
                return true;
            }
        }
    }
    return false;
}
exports.startsAfter = startsAfter;
function isSame(a, b) {
    return a.uri === b.uri
        && a.range.start.line === b.range.start.line
        && a.range.end.line === b.range.end.line
        && a.range.start.character === b.range.start.character
        && a.range.end.character === b.range.end.character;
}
exports.isSame = isSame;


/***/ }),

/***/ "../node_modules/@theia/typescript/lib/browser/typescript-callhierarchy-service.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/typescript/lib/browser/typescript-callhierarchy-service.js ***!
  \*****************************************************************************************/
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
var callhierarchy_service_impl_1 = __webpack_require__(/*! @theia/callhierarchy/lib/browser/callhierarchy-service-impl */ "../node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service-impl.js");
var common_1 = __webpack_require__(/*! ../common */ "../node_modules/@theia/typescript/lib/common/index.js");
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "../node_modules/vscode-languageserver-types/lib/esm/main.js");
var utils = __webpack_require__(/*! @theia/callhierarchy/lib/browser/utils */ "../node_modules/@theia/callhierarchy/lib/browser/utils.js");
var TypeScriptCallHierarchyService = /** @class */ (function (_super) {
    __extends(TypeScriptCallHierarchyService, _super);
    function TypeScriptCallHierarchyService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.languageId = common_1.TYPESCRIPT_LANGUAGE_ID;
        return _this;
    }
    /**
     * Finds the symbol that encloses the definition range of a caller.
     *
     * In the case of typescript, a method's definition and all its override definitions
     * are returned as a reference as well. As these are not calls they have to be filtered.
     * We also just want ot see the top-most caller symbol.
     */
    TypeScriptCallHierarchyService.prototype.getEnclosingCallerSymbol = function (reference, context) {
        return __awaiter(this, void 0, void 0, function () {
            var allSymbols, symbols, bestMatch, bestRange, symbols_1, symbols_1_1, candidate, candidateRange, nameLocation;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, context.getAllSymbols(reference.uri)];
                    case 1:
                        allSymbols = _b.sent();
                        if (allSymbols.length === 0) {
                            return [2 /*return*/, undefined];
                        }
                        if (vscode_languageserver_types_1.DocumentSymbol.is(allSymbols[0])) {
                            return [2 /*return*/, this.getEnclosingRootSymbol(reference, context)];
                        }
                        symbols = allSymbols.filter(function (s) { return _this.isCallable(s); });
                        bestMatch = undefined;
                        bestRange = undefined;
                        try {
                            for (symbols_1 = __values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                                candidate = symbols_1_1.value;
                                candidateRange = candidate.location.range;
                                if (utils.containsRange(candidateRange, reference.range)) {
                                    // as opposed to default, find the topmost (earliest) symbol
                                    if (!bestMatch || utils.startsAfter(bestRange, candidateRange)) {
                                        bestMatch = candidate;
                                        bestRange = candidateRange;
                                    }
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (!bestMatch) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getSymbolNameLocation(bestMatch, context)];
                    case 2:
                        nameLocation = _b.sent();
                        if (!nameLocation || utils.isSame(nameLocation, reference)) {
                            return [2 /*return*/, undefined];
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/, bestMatch];
                }
            });
        });
    };
    TypeScriptCallHierarchyService = __decorate([
        inversify_1.injectable()
    ], TypeScriptCallHierarchyService);
    return TypeScriptCallHierarchyService;
}(callhierarchy_service_impl_1.AbstractDefaultCallHierarchyService));
exports.TypeScriptCallHierarchyService = TypeScriptCallHierarchyService;


/***/ }),

/***/ "../node_modules/@theia/typescript/lib/browser/typescript-client-contribution.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/typescript/lib/browser/typescript-client-contribution.js ***!
  \***************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../node_modules/@theia/core/lib/browser/preferences/index.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var workspace_variable_contribution_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-variable-contribution */ "../node_modules/@theia/workspace/lib/browser/workspace-variable-contribution.js");
var common_1 = __webpack_require__(/*! ../common */ "../node_modules/@theia/typescript/lib/common/index.js");
var typescript_preferences_1 = __webpack_require__(/*! ./typescript-preferences */ "../node_modules/@theia/typescript/lib/browser/typescript-preferences.js");
var typescript_version_service_1 = __webpack_require__(/*! ../common/typescript-version-service */ "../node_modules/@theia/typescript/lib/common/typescript-version-service.js");
var TypeScriptClientContribution = /** @class */ (function (_super) {
    __extends(TypeScriptClientContribution, _super);
    function TypeScriptClientContribution(workspace, languages, languageClientFactory) {
        var _this = _super.call(this, workspace, languages, languageClientFactory) || this;
        _this.workspace = workspace;
        _this.languages = languages;
        _this.languageClientFactory = languageClientFactory;
        _this.id = common_1.TYPESCRIPT_LANGUAGE_ID;
        _this.name = common_1.TYPESCRIPT_LANGUAGE_NAME;
        _this.onDidChangeVersionEmitter = new event_1.Emitter();
        _this.onDidChangeVersion = _this.onDidChangeVersionEmitter.event;
        _this.restored = new promise_util_1.Deferred();
        return _this;
    }
    TypeScriptClientContribution.prototype.init = function () {
        var _this = this;
        this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'typescript.server.log') {
                _this.restart();
            }
        });
        this.onDidChangeVersion(function () { return _this.restart(); });
    };
    Object.defineProperty(TypeScriptClientContribution.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: true,
        configurable: true
    });
    TypeScriptClientContribution.prototype.setVersion = function (raw) {
        return __awaiter(this, void 0, void 0, function () {
            var version, tsdkPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateVersion(raw)];
                    case 1:
                        version = _a.sent();
                        if (typescript_version_service_1.TypescriptVersion.equals(this._version, version)) {
                            return [2 /*return*/];
                        }
                        this._version = version;
                        if (version && version.qualifier === 'Workspace') {
                            tsdkPath = this.workspaceVariables.getWorkspaceRelativePath(new uri_1.default(version.uri));
                            if (tsdkPath) {
                                this.preferenceService.set('typescript.tsdk', tsdkPath, preferences_1.PreferenceScope.Workspace);
                            }
                        }
                        this.onDidChangeVersionEmitter.fire(this._version);
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeScriptClientContribution.prototype.getStartParameters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restored.promise];
                    case 1:
                        _a.sent();
                        version = this.version;
                        return [4 /*yield*/, this.setVersion(version)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { version: version }];
                }
            });
        });
    };
    Object.defineProperty(TypeScriptClientContribution.prototype, "documentSelector", {
        get: function () {
            return [
                common_1.TYPESCRIPT_LANGUAGE_ID,
                common_1.TYPESCRIPT_REACT_LANGUAGE_ID,
                common_1.JAVASCRIPT_LANGUAGE_ID,
                common_1.JAVASCRIPT_REACT_LANGUAGE_ID
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeScriptClientContribution.prototype, "workspaceContains", {
        get: function () {
            // FIXME requires https://github.com/eclipse-theia/theia/issues/2359
            // return [
            //     "**/tsconfig.json",
            //     "**/jsconfig.json",
            //     "**/tsconfig.*.json",
            //     "**/jsconfig.*.json"
            // ];
            return [
                'tsconfig.json',
                'jsconfig.json'
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeScriptClientContribution.prototype, "initializationOptions", {
        get: function () {
            var options = {};
            var logVerbosity = this.preferences['typescript.server.log'];
            if (logVerbosity !== 'off') {
                options.logVerbosity = logVerbosity;
            }
            return options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeScriptClientContribution.prototype, "logFileUri", {
        get: function () {
            return this._logFileUri;
        },
        enumerable: true,
        configurable: true
    });
    TypeScriptClientContribution.prototype.onReady = function (languageClient) {
        var _this = this;
        if (languageClient.initializeResult) {
            var initializeResult = languageClient.initializeResult;
            this._logFileUri = initializeResult.logFileUri !== undefined ? new uri_1.default(initializeResult.logFileUri) : undefined;
        }
        languageClient.onDidChangeState(function (_a) {
            var newState = _a.newState;
            if (newState === browser_1.State.Stopped) {
                _this._logFileUri = undefined;
            }
        });
        _super.prototype.onReady.call(this, languageClient);
    };
    TypeScriptClientContribution.prototype.validateVersion = function (candidate) {
        return __awaiter(this, void 0, void 0, function () {
            var versions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVersions()];
                    case 1:
                        versions = _a.sent();
                        if (candidate && versions.some(function (version) { return typescript_version_service_1.TypescriptVersion.equals(candidate, version); })) {
                            return [2 /*return*/, candidate];
                        }
                        return [2 /*return*/, versions.find(function (version) { return version.qualifier === 'Workspace'; }) || versions[0]];
                }
            });
        });
    };
    TypeScriptClientContribution.prototype.getVersions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([this.preferences.ready, this.workspace.ready])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.versionService.getVersions(this.versionOptions)];
                }
            });
        });
    };
    Object.defineProperty(TypeScriptClientContribution.prototype, "versionOptions", {
        get: function () {
            return {
                workspaceFolders: this.workspaceService.tryGetRoots().map(function (_a) {
                    var uri = _a.uri;
                    return uri;
                }),
                localTsdk: this.preferences['typescript.tsdk']
            };
        },
        enumerable: true,
        configurable: true
    });
    TypeScriptClientContribution.prototype.store = function () {
        return {
            version: this._version
        };
    };
    TypeScriptClientContribution.prototype.restore = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 3, 4]);
                        if (!!this._version) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setVersion(data && data.version)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        this.restored.resolve();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], TypeScriptClientContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(workspace_variable_contribution_1.WorkspaceVariableContribution),
        __metadata("design:type", workspace_variable_contribution_1.WorkspaceVariableContribution)
    ], TypeScriptClientContribution.prototype, "workspaceVariables", void 0);
    __decorate([
        inversify_1.inject(typescript_preferences_1.TypescriptPreferences),
        __metadata("design:type", Object)
    ], TypeScriptClientContribution.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(preferences_1.PreferenceService),
        __metadata("design:type", Object)
    ], TypeScriptClientContribution.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(typescript_version_service_1.TypescriptVersionService),
        __metadata("design:type", Object)
    ], TypeScriptClientContribution.prototype, "versionService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeScriptClientContribution.prototype, "init", null);
    TypeScriptClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.Workspace)),
        __param(1, inversify_1.inject(browser_1.Languages)),
        __param(2, inversify_1.inject(browser_1.LanguageClientFactory)),
        __metadata("design:paramtypes", [Object, Object, browser_1.LanguageClientFactory])
    ], TypeScriptClientContribution);
    return TypeScriptClientContribution;
}(browser_1.BaseLanguageClientContribution));
exports.TypeScriptClientContribution = TypeScriptClientContribution;


/***/ }),

/***/ "../node_modules/@theia/typescript/lib/browser/typescript-frontend-contribution.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/typescript/lib/browser/typescript-frontend-contribution.js ***!
  \*****************************************************************************************/
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
var commands_1 = __webpack_require__(/*! typescript-language-server/lib/commands */ "../node_modules/typescript-language-server/lib/commands.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var browser_4 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var monaco_editor_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var common_2 = __webpack_require__(/*! ../common */ "../node_modules/@theia/typescript/lib/common/index.js");
var typescript_client_contribution_1 = __webpack_require__(/*! ./typescript-client-contribution */ "../node_modules/@theia/typescript/lib/browser/typescript-client-contribution.js");
var typescript_keybinding_contexts_1 = __webpack_require__(/*! ./typescript-keybinding-contexts */ "../node_modules/@theia/typescript/lib/browser/typescript-keybinding-contexts.js");
var typescript_version_service_1 = __webpack_require__(/*! ../common/typescript-version-service */ "../node_modules/@theia/typescript/lib/common/typescript-version-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var TypeScriptCommands;
(function (TypeScriptCommands) {
    TypeScriptCommands.applyCompletionCodeAction = {
        id: commands_1.Commands.APPLY_COMPLETION_CODE_ACTION
    };
    // TODO: get rid of me when https://github.com/TypeFox/monaco-languageclient/issues/104 is resolved
    TypeScriptCommands.organizeImports = {
        category: 'TypeScript',
        label: 'Organize Imports',
        id: 'typescript.edit.organizeImports'
    };
    TypeScriptCommands.openServerLog = {
        category: 'TypeScript',
        label: 'Open Server Log',
        id: 'typescript.server.openLog'
    };
    TypeScriptCommands.selectVersion = {
        category: 'TypeScript',
        label: 'Select Version',
        id: 'typescript.selectVersion'
    };
})(TypeScriptCommands = exports.TypeScriptCommands || (exports.TypeScriptCommands = {}));
var TypeScriptFrontendContribution = /** @class */ (function () {
    function TypeScriptFrontendContribution() {
        this.storageKey = 'typescript.contribution';
        this.toDisposeOnCurrentEditorChanged = new common_1.DisposableCollection();
    }
    TypeScriptFrontendContribution.prototype.init = function () {
        var _this = this;
        this.fileSystemWatcher.onDidMove(function (event) { return _this.renameFile(event); });
    };
    TypeScriptFrontendContribution.prototype.onStart = function () {
        var _this = this;
        this.restore();
        this.updateStatusBar();
        this.editorManager.onCurrentEditorChanged(function () { return _this.updateStatusBar(); });
        this.clientContribution.onDidChangeVersion(function () { return _this.updateStatusBar(); });
    };
    TypeScriptFrontendContribution.prototype.onStop = function () {
        this.store();
    };
    TypeScriptFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(TypeScriptCommands.applyCompletionCodeAction, {
            execute: function (file, codeActions) { return __awaiter(_this, void 0, void 0, function () {
                var codeAction;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.pickCodeAction(codeActions)];
                        case 1:
                            codeAction = _a.sent();
                            return [2 /*return*/, codeAction && this.applyCodeAction(codeAction)];
                    }
                });
            }); }
        });
        commands.registerCommand(TypeScriptCommands.organizeImports, {
            execute: function () { return _this.organizeImports(); },
            isEnabled: function () { return !!_this.currentEditor; },
            isVisible: function () { return !!_this.currentEditor; }
        });
        commands.registerCommand(TypeScriptCommands.openServerLog, {
            execute: function () { return _this.openServerLog(); },
            isEnabled: function () { return !!_this.clientContribution.logFileUri; },
            isVisible: function () { return !!_this.clientContribution.logFileUri; }
        });
        commands.registerCommand(TypeScriptCommands.selectVersion, {
            execute: function () { return _this.selectVersion(); }
        });
    };
    TypeScriptFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(__spread(browser_4.EDITOR_CONTEXT_MENU, ['1_modification']), {
            commandId: TypeScriptCommands.organizeImports.id,
            label: 'Organize Imports'
        });
    };
    TypeScriptFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: TypeScriptCommands.organizeImports.id,
            context: typescript_keybinding_contexts_1.TypeScriptKeybindingContexts.typescriptEditorTextFocus,
            keybinding: 'shift+alt+o'
        });
    };
    TypeScriptFrontendContribution.prototype.openServerLog = function () {
        var logFileUri = this.clientContribution.logFileUri;
        if (logFileUri) {
            this.editorManager.open(logFileUri);
        }
    };
    TypeScriptFrontendContribution.prototype.organizeImports = function () {
        var editor = monaco_editor_1.MonacoEditor.get(this.currentEditor);
        if (editor) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var action = editor.getControl().getAction('editor.action.organizeImports');
            // workaround isSupported check
            action._run();
        }
    };
    Object.defineProperty(TypeScriptFrontendContribution.prototype, "currentEditor", {
        get: function () {
            var currentEditor = this.editorManager.currentEditor;
            if (currentEditor && currentEditor.editor.document.languageId === common_2.TYPESCRIPT_LANGUAGE_ID) {
                return currentEditor;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeScriptFrontendContribution.prototype.pickCodeAction = function (codeActions) {
        return this.quickPickService.show(codeActions.map(function (value) { return ({
            label: value.description,
            value: value
        }); }, {
            placeholder: 'Select code action to apply'
        }));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TypeScriptFrontendContribution.prototype.applyCodeAction = function (codeAction) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        client = _a.sent();
                        return [2 /*return*/, client.sendRequest(browser_2.ExecuteCommandRequest.type, {
                                command: commands_1.Commands.APPLY_CODE_ACTION,
                                arguments: [codeAction]
                            })];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.renameFile = function (_a) {
        var sourceUri = _a.sourceUri, targetUri = _a.targetUri;
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.clientContribution.languageClient];
                    case 1:
                        client = _b.sent();
                        return [2 /*return*/, client.sendRequest(browser_2.ExecuteCommandRequest.type, {
                                command: commands_1.Commands.APPLY_RENAME_FILE,
                                arguments: [{
                                        sourceUri: sourceUri.toString(),
                                        targetUri: targetUri.toString()
                                    }]
                            })];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.selectVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items, currentVersion, currentItem, _a, _b, version, item, e_1_1, selectedVersion;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        items = [];
                        currentVersion = this.clientContribution.version;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        return [4 /*yield*/, this.clientContribution.getVersions()];
                    case 2:
                        _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 5];
                        version = _b.value;
                        item = {
                            label: "Use " + version.qualifier + " Version",
                            description: version.version,
                            detail: this.labelProvider.getLongName(new uri_1.default(version.uri)),
                            value: version
                        };
                        if (!currentItem && typescript_version_service_1.TypescriptVersion.equals(version, currentVersion)) {
                            currentItem = item;
                        }
                        items.push(item);
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        if (!currentItem) {
                            currentItem = items[0];
                        }
                        if (currentItem) {
                            currentItem.label = '• ' + currentItem.label;
                        }
                        return [4 /*yield*/, this.quickPickService.show(items, {
                                placeholder: 'Select the TypeScript version used for JavaScript and TypeScript language features'
                            })];
                    case 9:
                        selectedVersion = _d.sent();
                        if (selectedVersion) {
                            this.clientContribution.setVersion(selectedVersion);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.restore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getData(this.storageKey)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.clientContribution.restore(data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.store = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.clientContribution.store();
                        return [4 /*yield*/, this.storage.setData(this.storageKey, data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TypeScriptFrontendContribution.prototype.updateStatusBar = function () {
        var _this = this;
        this.toDisposeOnCurrentEditorChanged.dispose();
        var widget = this.editorManager.currentEditor;
        var editor = widget && widget.editor;
        this.updateVersionStatus(editor);
        if (editor) {
            this.toDisposeOnCurrentEditorChanged.push(editor.onLanguageChanged(function () { return _this.updateVersionStatus(editor); }));
        }
    };
    TypeScriptFrontendContribution.prototype.updateVersionStatus = function (editor) {
        var version = this.clientContribution.version;
        var languageId = editor && editor.document.languageId;
        if (!languageId || !common_2.TS_JS_LANGUAGES.has(languageId) || !version) {
            this.statusBar.removeElement('editor-ts-version');
            return;
        }
        this.statusBar.setElement('editor-ts-version', {
            text: version.version,
            alignment: browser_1.StatusBarAlignment.RIGHT,
            priority: 0.9,
            command: TypeScriptCommands.selectVersion.id
        });
    };
    __decorate([
        inversify_1.inject(browser_1.StatusBar),
        __metadata("design:type", Object)
    ], TypeScriptFrontendContribution.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(browser_4.EditorManager),
        __metadata("design:type", browser_4.EditorManager)
    ], TypeScriptFrontendContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickPickService),
        __metadata("design:type", Object)
    ], TypeScriptFrontendContribution.prototype, "quickPickService", void 0);
    __decorate([
        inversify_1.inject(typescript_client_contribution_1.TypeScriptClientContribution),
        __metadata("design:type", typescript_client_contribution_1.TypeScriptClientContribution)
    ], TypeScriptFrontendContribution.prototype, "clientContribution", void 0);
    __decorate([
        inversify_1.inject(browser_3.FileSystemWatcher),
        __metadata("design:type", browser_3.FileSystemWatcher)
    ], TypeScriptFrontendContribution.prototype, "fileSystemWatcher", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], TypeScriptFrontendContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], TypeScriptFrontendContribution.prototype, "storage", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TypeScriptFrontendContribution.prototype, "init", null);
    TypeScriptFrontendContribution = __decorate([
        inversify_1.injectable()
    ], TypeScriptFrontendContribution);
    return TypeScriptFrontendContribution;
}());
exports.TypeScriptFrontendContribution = TypeScriptFrontendContribution;


/***/ }),

/***/ "../node_modules/@theia/typescript/lib/browser/typescript-frontend-module.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/typescript/lib/browser/typescript-frontend-module.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox, Ericsson and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/callhierarchy/lib/browser */ "../node_modules/@theia/callhierarchy/lib/browser/index.js");
var typescript_client_contribution_1 = __webpack_require__(/*! ./typescript-client-contribution */ "../node_modules/@theia/typescript/lib/browser/typescript-client-contribution.js");
var typescript_callhierarchy_service_1 = __webpack_require__(/*! ./typescript-callhierarchy-service */ "../node_modules/@theia/typescript/lib/browser/typescript-callhierarchy-service.js");
var typescript_frontend_contribution_1 = __webpack_require__(/*! ./typescript-frontend-contribution */ "../node_modules/@theia/typescript/lib/browser/typescript-frontend-contribution.js");
var typescript_keybinding_contexts_1 = __webpack_require__(/*! ./typescript-keybinding-contexts */ "../node_modules/@theia/typescript/lib/browser/typescript-keybinding-contexts.js");
var typescript_preferences_1 = __webpack_require__(/*! ./typescript-preferences */ "../node_modules/@theia/typescript/lib/browser/typescript-preferences.js");
var typescript_version_service_1 = __webpack_require__(/*! ../common/typescript-version-service */ "../node_modules/@theia/typescript/lib/common/typescript-version-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    typescript_preferences_1.bindTypescriptPreferences(bind);
    bind(typescript_version_service_1.TypescriptVersionService).toDynamicValue(function (_a) {
        var container = _a.container;
        return browser_1.WebSocketConnectionProvider.createProxy(container, typescript_version_service_1.typescriptVersionPath);
    }).inSingletonScope();
    bind(typescript_client_contribution_1.TypeScriptClientContribution).toSelf().inSingletonScope();
    bind(browser_2.LanguageClientContribution).toService(typescript_client_contribution_1.TypeScriptClientContribution);
    bind(typescript_callhierarchy_service_1.TypeScriptCallHierarchyService).toSelf().inSingletonScope();
    bind(browser_3.CallHierarchyService).toService(typescript_callhierarchy_service_1.TypeScriptCallHierarchyService);
    bind(typescript_frontend_contribution_1.TypeScriptFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(typescript_frontend_contribution_1.TypeScriptFrontendContribution);
    bind(common_1.MenuContribution).toService(typescript_frontend_contribution_1.TypeScriptFrontendContribution);
    bind(browser_1.KeybindingContribution).toService(typescript_frontend_contribution_1.TypeScriptFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(typescript_frontend_contribution_1.TypeScriptFrontendContribution);
    bind(browser_1.KeybindingContext).to(typescript_keybinding_contexts_1.TypeScriptEditorTextFocusContext).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/typescript/lib/browser/typescript-keybinding-contexts.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@theia/typescript/lib/browser/typescript-keybinding-contexts.js ***!
  \***************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var common_1 = __webpack_require__(/*! ../common */ "../node_modules/@theia/typescript/lib/common/index.js");
var TypeScriptKeybindingContexts;
(function (TypeScriptKeybindingContexts) {
    TypeScriptKeybindingContexts.typescriptEditorTextFocus = 'typescriptEditorTextFocus';
})(TypeScriptKeybindingContexts = exports.TypeScriptKeybindingContexts || (exports.TypeScriptKeybindingContexts = {}));
var TypeScriptEditorTextFocusContext = /** @class */ (function (_super) {
    __extends(TypeScriptEditorTextFocusContext, _super);
    function TypeScriptEditorTextFocusContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = TypeScriptKeybindingContexts.typescriptEditorTextFocus;
        return _this;
    }
    TypeScriptEditorTextFocusContext.prototype.canHandle = function (widget) {
        return _super.prototype.canHandle.call(this, widget) && widget.editor.document.languageId === common_1.TYPESCRIPT_LANGUAGE_ID;
    };
    TypeScriptEditorTextFocusContext = __decorate([
        inversify_1.injectable()
    ], TypeScriptEditorTextFocusContext);
    return TypeScriptEditorTextFocusContext;
}(browser_1.EditorTextFocusContext));
exports.TypeScriptEditorTextFocusContext = TypeScriptEditorTextFocusContext;


/***/ }),

/***/ "../node_modules/@theia/typescript/lib/browser/typescript-preferences.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/typescript/lib/browser/typescript-preferences.js ***!
  \*******************************************************************************/
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
exports.typescriptPreferenceSchema = {
    'type': 'object',
    'properties': {
        'typescript.server.log': {
            'type': 'string',
            'enum': [
                'off',
                'terse',
                'normal',
                'verbose'
            ],
            'default': 'off',
            // eslint-disable-next-line max-len
            'description': 'Enables logging of the TS server to a file. This log can be used to diagnose TS Server issues. The log may contain file paths, source code, and other potentially sensitive information from your project.'
        },
        'typescript.tsdk': {
            'type': [
                'string',
                'null'
            ],
            // eslint-disable-next-line no-null/no-null
            'default': null,
            'description': 'Specifies the folder path containing the tsserver and lib*.d.ts files to use.',
            'scope': 'window'
        }
    }
};
exports.TypescriptPreferences = Symbol('TypescriptPreferences');
function createTypescriptPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.typescriptPreferenceSchema);
}
exports.createTypescriptPreferences = createTypescriptPreferences;
function bindTypescriptPreferences(bind) {
    bind(exports.TypescriptPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createTypescriptPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.typescriptPreferenceSchema });
}
exports.bindTypescriptPreferences = bindTypescriptPreferences;


/***/ }),

/***/ "../node_modules/@theia/typescript/lib/common/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/@theia/typescript/lib/common/index.js ***!
  \*************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPESCRIPT_LANGUAGE_ID = 'typescript';
exports.TYPESCRIPT_LANGUAGE_NAME = 'TypeScript';
exports.TYPESCRIPT_REACT_LANGUAGE_ID = 'typescriptreact';
exports.TYPESCRIPT_REACT_LANGUAGE_NAME = 'TypeScript React';
exports.JAVASCRIPT_LANGUAGE_ID = 'javascript';
exports.JAVASCRIPT_LANGUAGE_NAME = 'JavaScript';
exports.JAVASCRIPT_REACT_LANGUAGE_ID = 'javascriptreact';
exports.JAVASCRIPT_REACT_LANGUAGE_NAME = 'JavaScript React';
exports.JSX_TAGS_LANGUAGE_ID = 'jsx-tags';
exports.TS_JS_LANGUAGES = new Set([
    exports.TYPESCRIPT_LANGUAGE_ID,
    exports.TYPESCRIPT_REACT_LANGUAGE_ID,
    exports.JAVASCRIPT_LANGUAGE_ID,
    exports.JAVASCRIPT_REACT_LANGUAGE_ID,
    exports.JSX_TAGS_LANGUAGE_ID
]);


/***/ }),

/***/ "../node_modules/@theia/typescript/lib/common/typescript-version-service.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/typescript/lib/common/typescript-version-service.js ***!
  \**********************************************************************************/
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
exports.typescriptVersionPath = '/services/ts-version';
var TypescriptVersion;
(function (TypescriptVersion) {
    function equals(one, another) {
        return JSON.stringify({ version: one }) === JSON.stringify({ version: another });
    }
    TypescriptVersion.equals = equals;
})(TypescriptVersion = exports.TypescriptVersion || (exports.TypescriptVersion = {}));
exports.TypescriptVersionService = Symbol('TypescriptVersionService');


/***/ }),

/***/ "../node_modules/typescript-language-server/lib/commands.js":
/*!******************************************************************!*\
  !*** ../node_modules/typescript-language-server/lib/commands.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2018 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Commands;
(function (Commands) {
    Commands.APPLY_WORKSPACE_EDIT = "_typescript.applyWorkspaceEdit";
    Commands.APPLY_CODE_ACTION = "_typescript.applyCodeAction";
    Commands.APPLY_REFACTORING = "_typescript.applyRefactoring";
    Commands.ORGANIZE_IMPORTS = '_typescript.organizeImports';
    Commands.APPLY_RENAME_FILE = '_typescript.applyRenameFile';
    /** Commands below should be implemented by the client */
    Commands.APPLY_COMPLETION_CODE_ACTION = "_typescript.applyCompletionCodeAction";
    Commands.SELECT_REFACTORING = '_typescript.selectRefactoring';
})(Commands = exports.Commands || (exports.Commands = {}));


/***/ })

}]);
//# sourceMappingURL=30.bundle.js.map