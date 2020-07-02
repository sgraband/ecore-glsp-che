(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-editor-model.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-editor-model.js ***!
  \************************************************************************/
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
var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../node_modules/vscode-languageserver-protocol/lib/main.js");
exports.TextDocumentSaveReason = vscode_languageserver_protocol_1.TextDocumentSaveReason;
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "../node_modules/@theia/core/lib/common/cancellation.js");
var resource_1 = __webpack_require__(/*! @theia/core/lib/common/resource */ "../node_modules/@theia/core/lib/common/resource.js");
var MonacoEditorModel = /** @class */ (function () {
    function MonacoEditorModel(resource, m2p, p2m, options) {
        var _this = this;
        this.resource = resource;
        this.m2p = m2p;
        this.p2m = p2m;
        this.autoSave = 'on';
        this.autoSaveDelay = 500;
        /* @deprecated there is no general save timeout, each participant should introduce a sensible timeout  */
        this.onWillSaveLoopTimeOut = 1500;
        this.toDispose = new disposable_1.DisposableCollection();
        this.toDisposeOnAutoSave = new disposable_1.DisposableCollection();
        this.onDidChangeContentEmitter = new event_1.Emitter();
        this.onDidChangeContent = this.onDidChangeContentEmitter.event;
        this.onDidSaveModelEmitter = new event_1.Emitter();
        this.onDidSaveModel = this.onDidSaveModelEmitter.event;
        this.onWillSaveModelEmitter = new event_1.Emitter();
        this.onWillSaveModel = this.onWillSaveModelEmitter.event;
        this.onDidChangeValidEmitter = new event_1.Emitter();
        this.onDidChangeValid = this.onDidChangeValidEmitter.event;
        this.preferredEncoding = undefined;
        /**
         * Use `valid` to access it.
         * Use `setValid` to mutate it.
         */
        this._valid = false;
        this._dirty = false;
        this.onDirtyChangedEmitter = new event_1.Emitter();
        this.pendingOperation = Promise.resolve();
        this.syncCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        this.ignoreDirtyEdits = false;
        this.saveCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        this.ignoreContentChanges = false;
        this.contentChanges = [];
        this.toDispose.push(resource);
        this.toDispose.push(this.toDisposeOnAutoSave);
        this.toDispose.push(this.onDidChangeContentEmitter);
        this.toDispose.push(this.onDidSaveModelEmitter);
        this.toDispose.push(this.onWillSaveModelEmitter);
        this.toDispose.push(this.onDirtyChangedEmitter);
        this.toDispose.push(this.onDidChangeValidEmitter);
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.cancelSave(); }));
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.cancelSync(); }));
        this.defaultEncoding = options && options.encoding ? options.encoding : undefined;
        this.resolveModel = this.readContents().then(function (content) { return _this.initialize(content || ''); }, function (e) { return console.error("Failed to initialize for '" + _this.uri + "':", e); });
    }
    MonacoEditorModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    MonacoEditorModel.prototype.reopenWithEncoding = function (encoding) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (encoding === this.preferredEncoding || (!this.preferredEncoding && encoding === this.defaultEncoding)) {
                    return [2 /*return*/];
                }
                if (this.dirty) {
                    return [2 /*return*/];
                }
                this.preferredEncoding = encoding;
                return [2 /*return*/, this.sync()];
            });
        });
    };
    MonacoEditorModel.prototype.saveWithEncoding = function (encoding) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.scheduleSave(vscode_languageserver_protocol_1.TextDocumentSaveReason.Manual, this.cancelSave(), encoding)
                        .then(function () { _this.preferredEncoding = encoding; })];
            });
        });
    };
    MonacoEditorModel.prototype.getEncoding = function () {
        return this.preferredEncoding || this.defaultEncoding;
    };
    /**
     * #### Important
     * Only this method can create an instance of `monaco.editor.IModel`,
     * there should not be other calls to `monaco.editor.createModel`.
     */
    MonacoEditorModel.prototype.initialize = function (content) {
        var _this = this;
        if (!this.toDispose.disposed) {
            this.model = monaco.editor.createModel(content, undefined, monaco.Uri.parse(this.resource.uri.toString()));
            this.resourceVersion = this.resource.version;
            this.updateSavedVersionId();
            this.toDispose.push(this.model);
            this.toDispose.push(this.model.onDidChangeContent(function (event) { return _this.fireDidChangeContent(event); }));
            if (this.resource.onDidChangeContents) {
                this.toDispose.push(this.resource.onDidChangeContents(function () { return _this.sync(); }));
            }
        }
    };
    Object.defineProperty(MonacoEditorModel.prototype, "valid", {
        /**
         * Whether it is possible to load content from the underlying resource.
         */
        get: function () {
            return this._valid;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorModel.prototype.setValid = function (valid) {
        if (valid === this._valid) {
            return;
        }
        this._valid = valid;
        this.onDidChangeValidEmitter.fire(undefined);
    };
    Object.defineProperty(MonacoEditorModel.prototype, "dirty", {
        get: function () {
            return this._dirty;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorModel.prototype.setDirty = function (dirty) {
        if (dirty === this._dirty) {
            return;
        }
        this._dirty = dirty;
        if (dirty === false) {
            this.updateSavedVersionId();
        }
        this.onDirtyChangedEmitter.fire(undefined);
    };
    MonacoEditorModel.prototype.updateSavedVersionId = function () {
        this.bufferSavedVersionId = this.model.getAlternativeVersionId();
    };
    Object.defineProperty(MonacoEditorModel.prototype, "onDirtyChanged", {
        get: function () {
            return this.onDirtyChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "uri", {
        get: function () {
            return this.model.uri.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "languageId", {
        get: function () {
            return this._languageId !== undefined ? this._languageId : this.model.getModeId();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * It's a hack to dispatch close notification with an old language id, don't use it.
     */
    MonacoEditorModel.prototype.setLanguageId = function (languageId) {
        this._languageId = languageId;
    };
    Object.defineProperty(MonacoEditorModel.prototype, "version", {
        get: function () {
            return this.model.getVersionId();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Return selected text by Range or all text by default
     */
    MonacoEditorModel.prototype.getText = function (range) {
        if (!range) {
            return this.model.getValue();
        }
        else {
            return this.model.getValueInRange(this.p2m.asRange(range));
        }
    };
    MonacoEditorModel.prototype.positionAt = function (offset) {
        var _a = this.model.getPositionAt(offset), lineNumber = _a.lineNumber, column = _a.column;
        return this.m2p.asPosition(lineNumber, column);
    };
    MonacoEditorModel.prototype.offsetAt = function (position) {
        return this.model.getOffsetAt(this.p2m.asPosition(position));
    };
    Object.defineProperty(MonacoEditorModel.prototype, "lineCount", {
        get: function () {
            return this.model.getLineCount();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves a line in a text document expressed as a one-based position.
     */
    MonacoEditorModel.prototype.getLineContent = function (lineNumber) {
        return this.model.getLineContent(lineNumber);
    };
    MonacoEditorModel.prototype.getLineMaxColumn = function (lineNumber) {
        return this.model.getLineMaxColumn(lineNumber);
    };
    Object.defineProperty(MonacoEditorModel.prototype, "readOnly", {
        get: function () {
            return this.resource.saveContents === undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditorModel.prototype, "textEditorModel", {
        get: function () {
            return this.model;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorModel.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveModel];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    MonacoEditorModel.prototype.save = function () {
        return this.scheduleSave(vscode_languageserver_protocol_1.TextDocumentSaveReason.Manual);
    };
    MonacoEditorModel.prototype.run = function (operation) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.toDispose.disposed) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this.pendingOperation = this.pendingOperation.then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, operation()];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    console.error(e_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    MonacoEditorModel.prototype.cancelSync = function () {
        this.syncCancellationTokenSource.cancel();
        this.syncCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        return this.syncCancellationTokenSource.token;
    };
    MonacoEditorModel.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                token = this.cancelSync();
                return [2 /*return*/, this.run(function () { return _this.doSync(token); })];
            });
        });
    };
    MonacoEditorModel.prototype.doSync = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var newText, value, range;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.readContents()];
                    case 1:
                        newText = _a.sent();
                        if (newText === undefined || token.isCancellationRequested || this._dirty) {
                            return [2 /*return*/];
                        }
                        this.resourceVersion = this.resource.version;
                        value = this.model.getValue();
                        if (value === newText) {
                            return [2 /*return*/];
                        }
                        range = this.m2p.asRange(this.model.getFullModelRange());
                        this.applyEdits([this.p2m.asTextEdit({ range: range, newText: newText })], {
                            ignoreDirty: true,
                            ignoreContentChanges: true
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.readContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.resource.readContents({ encoding: this.getEncoding() })];
                    case 1:
                        content = _a.sent();
                        this.setValid(true);
                        return [2 /*return*/, content];
                    case 2:
                        e_2 = _a.sent();
                        this.setValid(false);
                        if (resource_1.ResourceError.NotFound.is(e_2)) {
                            return [2 /*return*/, undefined];
                        }
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.markAsDirty = function () {
        if (this.ignoreDirtyEdits) {
            return;
        }
        this.cancelSync();
        this.setDirty(true);
        this.doAutoSave();
    };
    MonacoEditorModel.prototype.doAutoSave = function () {
        var _this = this;
        if (this.autoSave === 'on') {
            var token_1 = this.cancelSave();
            this.toDisposeOnAutoSave.dispose();
            var handle_1 = window.setTimeout(function () {
                _this.scheduleSave(vscode_languageserver_protocol_1.TextDocumentSaveReason.AfterDelay, token_1);
            }, this.autoSaveDelay);
            this.toDisposeOnAutoSave.push(disposable_1.Disposable.create(function () {
                return window.clearTimeout(handle_1);
            }));
        }
    };
    MonacoEditorModel.prototype.cancelSave = function () {
        this.saveCancellationTokenSource.cancel();
        this.saveCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        return this.saveCancellationTokenSource.token;
    };
    MonacoEditorModel.prototype.scheduleSave = function (reason, token, overwriteEncoding) {
        var _this = this;
        if (token === void 0) { token = this.cancelSave(); }
        return this.run(function () { return _this.doSave(reason, token, overwriteEncoding); });
    };
    MonacoEditorModel.prototype.pushContentChanges = function (contentChanges) {
        var _a;
        if (!this.ignoreContentChanges) {
            (_a = this.contentChanges).push.apply(_a, __spread(contentChanges));
        }
    };
    MonacoEditorModel.prototype.fireDidChangeContent = function (event) {
        if (this.model.getAlternativeVersionId() === this.bufferSavedVersionId) {
            this.setDirty(false);
        }
        else {
            this.markAsDirty();
        }
        var changeContentEvent = this.asContentChangedEvent(event);
        this.onDidChangeContentEmitter.fire(changeContentEvent);
        this.pushContentChanges(changeContentEvent.contentChanges);
    };
    MonacoEditorModel.prototype.asContentChangedEvent = function (event) {
        var _this = this;
        var contentChanges = event.changes.map(function (change) { return _this.asTextDocumentContentChangeEvent(change); });
        return { model: this, contentChanges: contentChanges };
    };
    MonacoEditorModel.prototype.asTextDocumentContentChangeEvent = function (change) {
        var range = this.m2p.asRange(change.range);
        var rangeLength = change.rangeLength;
        var text = change.text;
        return { range: range, rangeLength: rangeLength, text: text };
    };
    MonacoEditorModel.prototype.applyEdits = function (operations, options) {
        var resolvedOptions = __assign({ ignoreDirty: false, ignoreContentChanges: false }, options);
        var _a = this, ignoreDirtyEdits = _a.ignoreDirtyEdits, ignoreContentChanges = _a.ignoreContentChanges;
        this.ignoreDirtyEdits = resolvedOptions.ignoreDirty;
        this.ignoreContentChanges = resolvedOptions.ignoreContentChanges;
        try {
            return this.model.applyEdits(operations);
        }
        finally {
            this.ignoreDirtyEdits = ignoreDirtyEdits;
            this.ignoreContentChanges = ignoreContentChanges;
        }
    };
    MonacoEditorModel.prototype.doSave = function (reason, token, overwriteEncoding) {
        return __awaiter(this, void 0, void 0, function () {
            var changes, content, encoding, version, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (token.isCancellationRequested || !this.resource.saveContents) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.fireWillSaveModel(reason, token)];
                    case 1:
                        _a.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        changes = __spread(this.contentChanges);
                        if (changes.length === 0 && overwriteEncoding === undefined) {
                            return [2 /*return*/];
                        }
                        content = this.model.getValue();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        encoding = this.getEncoding();
                        version = this.resourceVersion;
                        return [4 /*yield*/, resource_1.Resource.save(this.resource, { changes: changes, content: content, options: { encoding: encoding, overwriteEncoding: overwriteEncoding, version: version } }, token)];
                    case 3:
                        _a.sent();
                        this.contentChanges.splice(0, changes.length);
                        this.resourceVersion = this.resource.version;
                        this.setValid(true);
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.setDirty(false);
                        this.fireDidSaveModel();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        if (!resource_1.ResourceError.OutOfSync.is(e_3)) {
                            throw e_3;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.fireWillSaveModel = function (reason, token) {
        return __awaiter(this, void 0, void 0, function () {
            var firing, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firing = this.onWillSaveModelEmitter.sequence(function (listener) { return __awaiter(_this, void 0, void 0, function () {
                            var waitables, version, event, edits;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (token.isCancellationRequested) {
                                            return [2 /*return*/, false];
                                        }
                                        waitables = [];
                                        version = this.version;
                                        event = {
                                            model: this, reason: reason,
                                            waitUntil: function (thenable) {
                                                if (Object.isFrozen(waitables)) {
                                                    throw new Error('waitUntil cannot be called asynchronously.');
                                                }
                                                waitables.push(thenable);
                                            }
                                        };
                                        // Fire.
                                        try {
                                            listener(event);
                                        }
                                        catch (err) {
                                            console.error(err);
                                            return [2 /*return*/, true];
                                        }
                                        // Asynchronous calls to `waitUntil` should fail.
                                        Object.freeze(waitables);
                                        return [4 /*yield*/, Promise.all(waitables).then(function (allOperations) {
                                                var _a;
                                                return (_a = []).concat.apply(_a, __spread(allOperations));
                                            })];
                                    case 1:
                                        edits = _a.sent();
                                        if (token.isCancellationRequested) {
                                            return [2 /*return*/, false];
                                        }
                                        // In a perfect world, we should only apply edits if document is clean.
                                        if (version !== this.version) {
                                            console.error('onWillSave listeners should provide edits, not directly alter the document.');
                                        }
                                        // Finally apply edits provided by this listener before firing the next.
                                        if (edits && edits.length > 0) {
                                            this.applyEdits(edits, {
                                                ignoreDirty: true,
                                            });
                                        }
                                        return [2 /*return*/, true];
                                }
                            });
                        }); });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, firing];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.fireDidSaveModel = function () {
        this.onDidSaveModelEmitter.fire(this.model);
    };
    MonacoEditorModel.prototype.revert = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var soft, dirty;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cancelSave();
                        soft = options && options.soft;
                        if (!(soft !== true)) return [3 /*break*/, 4];
                        dirty = this._dirty;
                        this._dirty = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.sync()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this._dirty = dirty;
                        return [7 /*endfinally*/];
                    case 4:
                        this.setDirty(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoEditorModel.prototype.createSnapshot = function () {
        return {
            value: this.getText()
        };
    };
    MonacoEditorModel.prototype.applySnapshot = function (snapshot) {
        this.model.setValue(snapshot.value);
    };
    return MonacoEditorModel;
}());
exports.MonacoEditorModel = MonacoEditorModel;
//# sourceMappingURL=monaco-editor-model.js.map

/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-editor.js ***!
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
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var domutils_1 = __webpack_require__(/*! @phosphor/domutils */ "../node_modules/@phosphor/domutils/lib/index.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var MonacoEditorServices = /** @class */ (function () {
    function MonacoEditorServices(services) {
        Object.assign(this, services);
    }
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], MonacoEditorServices.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter),
        __metadata("design:type", monaco_languageclient_1.ProtocolToMonacoConverter)
    ], MonacoEditorServices.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], MonacoEditorServices.prototype, "contextKeyService", void 0);
    MonacoEditorServices = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.unmanaged()),
        __metadata("design:paramtypes", [MonacoEditorServices])
    ], MonacoEditorServices);
    return MonacoEditorServices;
}());
exports.MonacoEditorServices = MonacoEditorServices;
var MonacoEditor = /** @class */ (function (_super) {
    __extends(MonacoEditor, _super);
    function MonacoEditor(uri, document, node, services, options, override) {
        var _this = _super.call(this, services) || this;
        _this.uri = uri;
        _this.document = document;
        _this.node = node;
        _this.toDispose = new common_1.DisposableCollection();
        _this.onCursorPositionChangedEmitter = new common_1.Emitter();
        _this.onSelectionChangedEmitter = new common_1.Emitter();
        _this.onFocusChangedEmitter = new common_1.Emitter();
        _this.onDocumentContentChangedEmitter = new common_1.Emitter();
        _this.onMouseDownEmitter = new common_1.Emitter();
        _this.onLanguageChangedEmitter = new common_1.Emitter();
        _this.onLanguageChanged = _this.onLanguageChangedEmitter.event;
        _this.onScrollChangedEmitter = new common_1.Emitter();
        _this.onEncodingChangedEmitter = new common_1.Emitter();
        _this.onEncodingChanged = _this.onEncodingChangedEmitter.event;
        _this.documents = new Set();
        /* `true` because it is derived from an URI during the instantiation */
        _this._languageAutoDetected = true;
        _this.toDispose.pushAll([
            _this.onCursorPositionChangedEmitter,
            _this.onSelectionChangedEmitter,
            _this.onFocusChangedEmitter,
            _this.onDocumentContentChangedEmitter,
            _this.onMouseDownEmitter,
            _this.onLanguageChangedEmitter,
            _this.onScrollChangedEmitter,
            _this.onEncodingChangedEmitter
        ]);
        _this.documents.add(document);
        _this.autoSizing = options && options.autoSizing !== undefined ? options.autoSizing : false;
        _this.minHeight = options && options.minHeight !== undefined ? options.minHeight : -1;
        _this.maxHeight = options && options.maxHeight !== undefined ? options.maxHeight : -1;
        _this.toDispose.push(_this.create(options, override));
        _this.addHandlers(_this.editor);
        return _this;
    }
    MonacoEditor.prototype.getEncoding = function () {
        return this.document.getEncoding() || 'utf8';
    };
    MonacoEditor.prototype.setEncoding = function (encoding, mode) {
        var _this = this;
        if (mode === 1 /* Decode */) {
            // reopen file with encoding
            this.document.reopenWithEncoding(encoding)
                .then(function () { return _this.onEncodingChangedEmitter.fire(encoding); });
        }
        else {
            // encode and save file
            this.document.saveWithEncoding(encoding)
                .then(function () { return _this.onEncodingChangedEmitter.fire(encoding); });
        }
    };
    MonacoEditor.prototype.create = function (options, override) {
        return this.editor = monaco.editor.create(this.node, __assign({}, options, { lightbulb: { enabled: true }, fixedOverflowWidgets: true, scrollbar: {
                useShadows: false,
                verticalHasArrows: false,
                horizontalHasArrows: false,
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10
            } }), override);
    };
    MonacoEditor.prototype.addHandlers = function (codeEditor) {
        var _this = this;
        this.toDispose.push(codeEditor.onDidChangeModelLanguage(function (e) {
            return _this.fireLanguageChanged(e.newLanguage);
        }));
        this.toDispose.push(codeEditor.onDidChangeConfiguration(function () { return _this.refresh(); }));
        this.toDispose.push(codeEditor.onDidChangeModel(function () { return _this.refresh(); }));
        this.toDispose.push(codeEditor.onDidChangeModelContent(function (e) {
            _this.refresh();
            _this.onDocumentContentChangedEmitter.fire({ document: _this.document, contentChanges: e.changes.map(_this.mapModelContentChange.bind(_this)) });
        }));
        this.toDispose.push(codeEditor.onDidChangeCursorPosition(function () {
            return _this.onCursorPositionChangedEmitter.fire(_this.cursor);
        }));
        this.toDispose.push(codeEditor.onDidChangeCursorSelection(function () {
            return _this.onSelectionChangedEmitter.fire(_this.selection);
        }));
        this.toDispose.push(codeEditor.onDidFocusEditorText(function () {
            return _this.onFocusChangedEmitter.fire(_this.isFocused());
        }));
        this.toDispose.push(codeEditor.onDidBlurEditorText(function () {
            return _this.onFocusChangedEmitter.fire(_this.isFocused());
        }));
        this.toDispose.push(codeEditor.onMouseDown(function (e) {
            var _a = e.target, element = _a.element, position = _a.position, range = _a.range;
            _this.onMouseDownEmitter.fire({
                target: __assign({}, e.target, { element: element || undefined, mouseColumn: _this.m2p.asPosition(undefined, e.target.mouseColumn).character, range: range && _this.m2p.asRange(range) || undefined, position: position && _this.m2p.asPosition(position.lineNumber, position.column) || undefined }),
                event: e.event.browserEvent
            });
        }));
        this.toDispose.push(codeEditor.onDidScrollChange(function (e) {
            _this.onScrollChangedEmitter.fire(undefined);
        }));
    };
    MonacoEditor.prototype.getVisibleRanges = function () {
        var _this = this;
        return this.editor.getVisibleRanges().map(function (range) { return _this.m2p.asRange(range); });
    };
    MonacoEditor.prototype.mapModelContentChange = function (change) {
        return {
            range: this.m2p.asRange(change.range),
            rangeLength: change.rangeLength,
            text: change.text
        };
    };
    Object.defineProperty(MonacoEditor.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onDocumentContentChanged", {
        get: function () {
            return this.onDocumentContentChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "cursor", {
        get: function () {
            var _a = this.editor.getPosition(), lineNumber = _a.lineNumber, column = _a.column;
            return this.m2p.asPosition(lineNumber, column);
        },
        set: function (cursor) {
            var position = this.p2m.asPosition(cursor);
            this.editor.setPosition(position);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onCursorPositionChanged", {
        get: function () {
            return this.onCursorPositionChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "selection", {
        get: function () {
            return this.m2p.asRange(this.editor.getSelection());
        },
        set: function (selection) {
            var range = this.p2m.asRange(selection);
            this.editor.setSelection(range);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onSelectionChanged", {
        get: function () {
            return this.onSelectionChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onScrollChanged", {
        get: function () {
            return this.onScrollChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditor.prototype.revealPosition = function (raw, options) {
        if (options === void 0) { options = { vertical: 'center' }; }
        var position = this.p2m.asPosition(raw);
        switch (options.vertical) {
            case 'auto':
                this.editor.revealPosition(position);
                break;
            case 'center':
                this.editor.revealPositionInCenter(position);
                break;
            case 'centerIfOutsideViewport':
                this.editor.revealPositionInCenterIfOutsideViewport(position);
                break;
        }
    };
    MonacoEditor.prototype.revealRange = function (raw, options) {
        if (options === void 0) { options = { at: 'center' }; }
        var range = this.p2m.asRange(raw);
        switch (options.at) {
            case 'top':
                this.editor.revealRangeAtTop(range);
                break;
            case 'center':
                this.editor.revealRangeInCenter(range);
                break;
            case 'centerIfOutsideViewport':
                this.editor.revealRangeInCenterIfOutsideViewport(range);
                break;
            case 'auto':
                this.editor.revealRange(range);
                break;
        }
    };
    MonacoEditor.prototype.focus = function () {
        this.editor.focus();
    };
    MonacoEditor.prototype.blur = function () {
        var node = this.editor.getDomNode();
        if (node) {
            var textarea = node.querySelector('textarea');
            textarea.blur();
        }
    };
    MonacoEditor.prototype.isFocused = function (_a) {
        var strict = (_a === void 0 ? { strict: false } : _a).strict;
        if (!this.editor.hasTextFocus()) {
            return false;
        }
        if (strict) {
            return !this.isSuggestWidgetVisible() && !this.isFindWidgetVisible() && !this.isRenameInputVisible();
        }
        return true;
    };
    Object.defineProperty(MonacoEditor.prototype, "onFocusChanged", {
        get: function () {
            return this.onFocusChangedEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "onMouseDown", {
        get: function () {
            return this.onMouseDownEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `true` if the suggest widget is visible in the editor. Otherwise, `false`.
     */
    MonacoEditor.prototype.isSuggestWidgetVisible = function () {
        return this.contextKeyService.match('suggestWidgetVisible', this.editor.getDomNode() || this.node);
    };
    /**
     * `true` if the find (and replace) widget is visible in the editor. Otherwise, `false`.
     */
    MonacoEditor.prototype.isFindWidgetVisible = function () {
        return this.contextKeyService.match('findWidgetVisible', this.editor.getDomNode() || this.node);
    };
    /**
     * `true` if the name rename refactoring input HTML element is visible. Otherwise, `false`.
     */
    MonacoEditor.prototype.isRenameInputVisible = function () {
        return this.contextKeyService.match('renameInputVisible', this.editor.getDomNode() || this.node);
    };
    MonacoEditor.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoEditor.prototype.trigger = function (source, handlerId, payload) {
        this.editor.trigger(source, handlerId, payload);
    };
    MonacoEditor.prototype.getControl = function () {
        return this.editor;
    };
    MonacoEditor.prototype.refresh = function () {
        this.autoresize();
    };
    MonacoEditor.prototype.resizeToFit = function () {
        this.autoresize();
    };
    MonacoEditor.prototype.setSize = function (dimension) {
        this.resize(dimension);
    };
    MonacoEditor.prototype.autoresize = function () {
        if (this.autoSizing) {
            // eslint-disable-next-line no-null/no-null
            this.resize(null);
        }
    };
    MonacoEditor.prototype.resize = function (dimension) {
        if (this.node) {
            var layoutSize = this.computeLayoutSize(this.node, dimension);
            this.editor.layout(layoutSize);
        }
    };
    MonacoEditor.prototype.computeLayoutSize = function (hostNode, dimension) {
        if (dimension && dimension.width >= 0 && dimension.height >= 0) {
            return dimension;
        }
        var boxSizing = domutils_1.ElementExt.boxSizing(hostNode);
        var width = (!dimension || dimension.width < 0) ?
            this.getWidth(hostNode, boxSizing) :
            dimension.width;
        var height = (!dimension || dimension.height < 0) ?
            this.getHeight(hostNode, boxSizing) :
            dimension.height;
        return { width: width, height: height };
    };
    MonacoEditor.prototype.getWidth = function (hostNode, boxSizing) {
        return hostNode.offsetWidth - boxSizing.horizontalSum;
    };
    MonacoEditor.prototype.getHeight = function (hostNode, boxSizing) {
        if (!this.autoSizing) {
            return hostNode.offsetHeight - boxSizing.verticalSum;
        }
        var configuration = this.editor.getConfiguration();
        var lineHeight = configuration.lineHeight;
        var lineCount = this.editor.getModel().getLineCount();
        var contentHeight = lineHeight * lineCount;
        var horizontalScrollbarHeight = configuration.layoutInfo.horizontalScrollbarHeight;
        var editorHeight = contentHeight + horizontalScrollbarHeight;
        if (this.minHeight >= 0) {
            var minHeight = lineHeight * this.minHeight + horizontalScrollbarHeight;
            if (editorHeight < minHeight) {
                return minHeight;
            }
        }
        if (this.maxHeight >= 0) {
            var maxHeight = lineHeight * this.maxHeight + horizontalScrollbarHeight;
            return Math.min(maxHeight, editorHeight);
        }
        return editorHeight;
    };
    MonacoEditor.prototype.isActionSupported = function (id) {
        var action = this.editor.getAction(id);
        return !!action && action.isSupported();
    };
    MonacoEditor.prototype.runAction = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var action;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        action = this.editor.getAction(id);
                        if (!(action && action.isSupported())) return [3 /*break*/, 2];
                        return [4 /*yield*/, action.run()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MonacoEditor.prototype, "commandService", {
        get: function () {
            return this.editor._commandService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoEditor.prototype, "instantiationService", {
        get: function () {
            return this.editor._instantiationService;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditor.prototype.deltaDecorations = function (params) {
        var oldDecorations = params.oldDecorations;
        var newDecorations = this.toDeltaDecorations(params);
        return this.editor.deltaDecorations(oldDecorations, newDecorations);
    };
    MonacoEditor.prototype.toDeltaDecorations = function (params) {
        var _this = this;
        return params.newDecorations.map(function (decoration) { return (__assign({}, decoration, { range: _this.p2m.asRange(decoration.range) })); });
    };
    MonacoEditor.prototype.getLinesDecorations = function (startLineNumber, endLineNumber) {
        var _this = this;
        var toPosition = function (line) { return _this.p2m.asPosition({ line: line, character: 0 }); };
        var start = toPosition(startLineNumber).lineNumber;
        var end = toPosition(endLineNumber).lineNumber;
        return this.editor
            .getModel()
            .getLinesDecorations(start, end)
            .map(this.toEditorDecoration.bind(this));
    };
    MonacoEditor.prototype.toEditorDecoration = function (decoration) {
        var range = this.m2p.asRange(decoration.range);
        var id = decoration.id, options = decoration.options;
        return {
            options: options,
            range: range,
            id: id
        };
    };
    MonacoEditor.prototype.getVisibleColumn = function (position) {
        return this.editor.getVisibleColumnFromPosition(this.p2m.asPosition(position));
    };
    MonacoEditor.prototype.replaceText = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var edits;
            var _this = this;
            return __generator(this, function (_a) {
                edits = params.replaceOperations.map(function (param) {
                    var range = monaco.Range.fromPositions(_this.p2m.asPosition(param.range.start), _this.p2m.asPosition(param.range.end));
                    return {
                        forceMoveMarkers: true,
                        identifier: {
                            major: range.startLineNumber,
                            minor: range.startColumn
                        },
                        range: range,
                        text: param.text
                    };
                });
                return [2 /*return*/, this.editor.executeEdits(params.source, edits)];
            });
        });
    };
    MonacoEditor.prototype.executeEdits = function (edits) {
        return this.editor.executeEdits('MonacoEditor', this.p2m.asTextEdits(edits));
    };
    MonacoEditor.prototype.storeViewState = function () {
        return this.editor.saveViewState();
    };
    MonacoEditor.prototype.restoreViewState = function (state) {
        this.editor.restoreViewState(state);
    };
    Object.defineProperty(MonacoEditor.prototype, "languageAutoDetected", {
        get: function () {
            return this._languageAutoDetected;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditor.prototype.detectLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modeService, firstLine, model, language;
            return __generator(this, function (_a) {
                modeService = monaco.services.StaticServices.modeService.get();
                firstLine = this.document.textEditorModel.getLineContent(1);
                model = this.getControl().getModel();
                language = modeService.createByFilepathOrFirstLine(model && model.uri, firstLine);
                this.setLanguage(language.languageIdentifier.language);
                this._languageAutoDetected = true;
                return [2 /*return*/];
            });
        });
    };
    MonacoEditor.prototype.setLanguage = function (languageId) {
        var e_1, _a;
        try {
            for (var _b = __values(this.documents), _c = _b.next(); !_c.done; _c = _b.next()) {
                var document_1 = _c.value;
                monaco.editor.setModelLanguage(document_1.textEditorModel, languageId);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MonacoEditor.prototype.fireLanguageChanged = function (languageId) {
        this._languageAutoDetected = false;
        this.onLanguageChangedEmitter.fire(languageId);
    };
    MonacoEditor.prototype.getResourceUri = function () {
        return this.uri;
    };
    MonacoEditor.prototype.createMoveToUri = function (resourceUri) {
        return this.uri.withPath(resourceUri.path);
    };
    return MonacoEditor;
}(MonacoEditorServices));
exports.MonacoEditor = MonacoEditor;
(function (MonacoEditor) {
    function getAll(manager) {
        return manager.all.map(function (e) { return get(e); }).filter(function (e) { return !!e; });
    }
    MonacoEditor.getAll = getAll;
    function getCurrent(manager) {
        return get(manager.currentEditor);
    }
    MonacoEditor.getCurrent = getCurrent;
    function getActive(manager) {
        return get(manager.activeEditor);
    }
    MonacoEditor.getActive = getActive;
    function get(editorWidget) {
        if (editorWidget && editorWidget.editor instanceof MonacoEditor) {
            return editorWidget.editor;
        }
        return undefined;
    }
    MonacoEditor.get = get;
    function findByDocument(manager, document) {
        return getAll(manager).filter(function (editor) { return editor.documents.has(document); });
    }
    MonacoEditor.findByDocument = findByDocument;
    function getWidgetFor(manager, control) {
        if (!control) {
            return undefined;
        }
        return manager.all.find(function (widget) {
            var editor = get(widget);
            return !!editor && editor.getControl() === control;
        });
    }
    MonacoEditor.getWidgetFor = getWidgetFor;
})(MonacoEditor = exports.MonacoEditor || (exports.MonacoEditor = {}));
exports.MonacoEditor = MonacoEditor;
//# sourceMappingURL=monaco-editor.js.map

/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js ***!
  \******************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_model_1 = __webpack_require__(/*! ./monaco-editor-model */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-model.js");
var MonacoTextModelService = /** @class */ (function () {
    function MonacoTextModelService() {
        var _this = this;
        this._models = new core_1.ReferenceCollection(function (uri) { return _this.loadModel(new uri_1.default(uri)); });
        this.modelOptions = {
            'editor.tabSize': 'tabSize',
            'editor.insertSpaces': 'insertSpaces'
        };
    }
    Object.defineProperty(MonacoTextModelService.prototype, "models", {
        get: function () {
            return this._models.values();
        },
        enumerable: true,
        configurable: true
    });
    MonacoTextModelService.prototype.get = function (uri) {
        return this._models.get(uri);
    };
    Object.defineProperty(MonacoTextModelService.prototype, "onDidCreate", {
        get: function () {
            return this._models.onDidCreate;
        },
        enumerable: true,
        configurable: true
    });
    MonacoTextModelService.prototype.createModelReference = function (raw) {
        return this._models.acquire(raw.toString());
    };
    MonacoTextModelService.prototype.loadModel = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, model, disposable;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorPreferences.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.resourceProvider(uri)];
                    case 2:
                        resource = _a.sent();
                        return [4 /*yield*/, (new monaco_editor_model_1.MonacoEditorModel(resource, this.m2p, this.p2m, { encoding: this.editorPreferences.get('files.encoding') }).load())];
                    case 3:
                        model = _a.sent();
                        this.updateModel(model);
                        model.textEditorModel.onDidChangeLanguage(function () { return _this.updateModel(model); });
                        disposable = this.editorPreferences.onPreferenceChanged(function (change) { return _this.updateModel(model, change); });
                        model.onDispose(function () { return disposable.dispose(); });
                        return [2 /*return*/, model];
                }
            });
        });
    };
    MonacoTextModelService.prototype.updateModel = function (model, change) {
        if (change) {
            if (!change.affects(model.uri, model.languageId)) {
                return;
            }
            if (change.preferenceName === 'editor.autoSave') {
                model.autoSave = this.editorPreferences.get('editor.autoSave', undefined, model.uri);
            }
            if (change.preferenceName === 'editor.autoSaveDelay') {
                model.autoSaveDelay = this.editorPreferences.get('editor.autoSaveDelay', undefined, model.uri);
            }
            var modelOption = this.modelOptions[change.preferenceName];
            if (modelOption) {
                var options = {};
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options[modelOption] = change.newValue;
                model.textEditorModel.updateOptions(options);
            }
        }
        else {
            model.autoSave = this.editorPreferences.get('editor.autoSave', undefined, model.uri);
            model.autoSaveDelay = this.editorPreferences.get('editor.autoSaveDelay', undefined, model.uri);
            model.textEditorModel.updateOptions(this.getModelOptions(model));
        }
    };
    MonacoTextModelService.prototype.getModelOptions = function (arg) {
        var uri = typeof arg === 'string' ? arg : arg.uri;
        var overrideIdentifier = typeof arg === 'string' ? undefined : arg.languageId;
        return {
            tabSize: this.editorPreferences.get({ preferenceName: 'editor.tabSize', overrideIdentifier: overrideIdentifier }, undefined, uri),
            insertSpaces: this.editorPreferences.get({ preferenceName: 'editor.insertSpaces', overrideIdentifier: overrideIdentifier }, undefined, uri)
        };
    };
    MonacoTextModelService.prototype.registerTextModelContentProvider = function (scheme, provider) {
        return {
            dispose: function () {
                // no-op
            }
        };
    };
    __decorate([
        inversify_1.inject(core_1.ResourceProvider),
        __metadata("design:type", Function)
    ], MonacoTextModelService.prototype, "resourceProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorPreferences),
        __metadata("design:type", Object)
    ], MonacoTextModelService.prototype, "editorPreferences", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], MonacoTextModelService.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter),
        __metadata("design:type", monaco_languageclient_1.ProtocolToMonacoConverter)
    ], MonacoTextModelService.prototype, "p2m", void 0);
    MonacoTextModelService = __decorate([
        inversify_1.injectable()
    ], MonacoTextModelService);
    return MonacoTextModelService;
}());
exports.MonacoTextModelService = MonacoTextModelService;


/***/ })

}]);
//# sourceMappingURL=15.bundle.js.map