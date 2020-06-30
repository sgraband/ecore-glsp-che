(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js ***!
  \******************************************************************************/
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
exports.bindFileSystemPreferences = exports.createFileSystemPreferences = exports.FileSystemPreferences = exports.filesystemPreferenceSchema = void 0;
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/index.js");
exports.filesystemPreferenceSchema = {
    'type': 'object',
    'properties': {
        'files.watcherExclude': {
            'description': 'List of paths to exclude from the filesystem watcher',
            'additionalProperties': {
                'type': 'boolean'
            },
            'default': {
                '**/.git/objects/**': true,
                '**/.git/subtree-cache/**': true,
                '**/node_modules/**': true
            },
            'scope': 'resource'
        },
        'files.exclude': {
            'type': 'object',
            'default': { '**/.git': true, '**/.svn': true, '**/.hg': true, '**/CVS': true, '**/.DS_Store': true },
            'description': 'Configure glob patterns for excluding files and folders.',
            'scope': 'resource'
        },
        'files.enableTrash': {
            'type': 'boolean',
            'default': true,
            'description': 'Moves files/folders to the OS trash (recycle bin on Windows) when deleting. Disabling this will delete files/folders permanently.'
        },
        'files.associations': {
            'type': 'object',
            'description': 'Configure file associations to languages (e.g. \"*.extension\": \"html\"). \
These have precedence over the default associations of the languages installed.'
        }
    }
};
exports.FileSystemPreferences = Symbol('FileSystemPreferences');
function createFileSystemPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.filesystemPreferenceSchema);
}
exports.createFileSystemPreferences = createFileSystemPreferences;
function bindFileSystemPreferences(bind) {
    bind(exports.FileSystemPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createFileSystemPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.filesystemPreferenceSchema });
}
exports.bindFileSystemPreferences = bindFileSystemPreferences;


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js ***!
  \**************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemWatcher = exports.FileOperationEmitter = exports.FileMoveEvent = exports.FileChangeEvent = exports.FileChange = exports.FileChangeType = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri.js");
var filesystem_1 = __webpack_require__(/*! ../common/filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js");
var filesystem_watcher_protocol_1 = __webpack_require__(/*! ../common/filesystem-watcher-protocol */ "./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js");
Object.defineProperty(exports, "FileChangeType", { enumerable: true, get: function () { return filesystem_watcher_protocol_1.FileChangeType; } });
var filesystem_preferences_1 = __webpack_require__(/*! ./filesystem-preferences */ "./node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js");
var FileChange;
(function (FileChange) {
    function isUpdated(change, uri) {
        return change.type === filesystem_watcher_protocol_1.FileChangeType.UPDATED && uri.toString() === change.uri.toString();
    }
    FileChange.isUpdated = isUpdated;
    function isAdded(change, uri) {
        return change.type === filesystem_watcher_protocol_1.FileChangeType.ADDED && uri.toString() === change.uri.toString();
    }
    FileChange.isAdded = isAdded;
    function isDeleted(change, uri) {
        return change.type === filesystem_watcher_protocol_1.FileChangeType.DELETED && change.uri.isEqualOrParent(uri);
    }
    FileChange.isDeleted = isDeleted;
    function isAffected(change, uri) {
        return isDeleted(change, uri) || uri.toString() === change.uri.toString();
    }
    FileChange.isAffected = isAffected;
    function isChanged(change, uri) {
        return !isDeleted(change, uri) && uri.toString() === change.uri.toString();
    }
    FileChange.isChanged = isChanged;
})(FileChange = exports.FileChange || (exports.FileChange = {}));
var FileChangeEvent;
(function (FileChangeEvent) {
    function isUpdated(event, uri) {
        return event.some(function (change) { return FileChange.isUpdated(change, uri); });
    }
    FileChangeEvent.isUpdated = isUpdated;
    function isAdded(event, uri) {
        return event.some(function (change) { return FileChange.isAdded(change, uri); });
    }
    FileChangeEvent.isAdded = isAdded;
    function isDeleted(event, uri) {
        return event.some(function (change) { return FileChange.isDeleted(change, uri); });
    }
    FileChangeEvent.isDeleted = isDeleted;
    function isAffected(event, uri) {
        return event.some(function (change) { return FileChange.isAffected(change, uri); });
    }
    FileChangeEvent.isAffected = isAffected;
    function isChanged(event, uri) {
        return !isDeleted(event, uri) && event.some(function (change) { return FileChange.isChanged(change, uri); });
    }
    FileChangeEvent.isChanged = isChanged;
})(FileChangeEvent = exports.FileChangeEvent || (exports.FileChangeEvent = {}));
var FileMoveEvent;
(function (FileMoveEvent) {
    function isRename(_a) {
        var sourceUri = _a.sourceUri, targetUri = _a.targetUri;
        return sourceUri.parent.toString() === targetUri.parent.toString();
    }
    FileMoveEvent.isRename = isRename;
})(FileMoveEvent = exports.FileMoveEvent || (exports.FileMoveEvent = {}));
var FileOperationEmitter = /** @class */ (function () {
    function FileOperationEmitter() {
        this.onWillEmitter = new event_1.Emitter();
        this.onWill = this.onWillEmitter.event;
        this.onDidFailEmitter = new event_1.Emitter();
        this.onDidFail = this.onDidFailEmitter.event;
        this.onDidEmitter = new event_1.Emitter();
        this.onDid = this.onDidEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection(this.onWillEmitter, this.onDidFailEmitter, this.onDidEmitter);
    }
    FileOperationEmitter.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileOperationEmitter.prototype.fireWill = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillEmitter, event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileOperationEmitter.prototype.fireDid = function (failed, event) {
        return __awaiter(this, void 0, void 0, function () {
            var onDidEmitter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onDidEmitter = failed ? this.onDidFailEmitter : this.onDidEmitter;
                        return [4 /*yield*/, event_1.WaitUntilEvent.fire(onDidEmitter, event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FileOperationEmitter;
}());
exports.FileOperationEmitter = FileOperationEmitter;
/**
 * React to file system events, including calls originating from the
 * application or event coming from the system's filesystem directly
 * (actual file watching).
 *
 * `on(will|did)(create|rename|delete)` events solely come from application
 * usage, not from actual filesystem.
 */
var FileSystemWatcher = /** @class */ (function () {
    function FileSystemWatcher() {
        this.toDispose = new disposable_1.DisposableCollection();
        this.toRestartAll = new disposable_1.DisposableCollection();
        this.onFileChangedEmitter = new event_1.Emitter();
        this.onFilesChanged = this.onFileChangedEmitter.event;
        this.fileCreateEmitter = new FileOperationEmitter();
        this.onWillCreate = this.fileCreateEmitter.onWill;
        this.onDidFailCreate = this.fileCreateEmitter.onDidFail;
        this.onDidCreate = this.fileCreateEmitter.onDid;
        this.fileDeleteEmitter = new FileOperationEmitter();
        this.onWillDelete = this.fileDeleteEmitter.onWill;
        this.onDidFailDelete = this.fileDeleteEmitter.onDidFail;
        this.onDidDelete = this.fileDeleteEmitter.onDid;
        this.fileMoveEmitter = new FileOperationEmitter();
        this.onWillMove = this.fileMoveEmitter.onWill;
        this.onDidFailMove = this.fileMoveEmitter.onDidFail;
        this.onDidMove = this.fileMoveEmitter.onDid;
    }
    FileSystemWatcher.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.onFileChangedEmitter);
        this.toDispose.push(this.fileDeleteEmitter);
        this.toDispose.push(this.fileMoveEmitter);
        this.toDispose.push(this.server);
        this.server.setClient({
            onDidFilesChanged: function (e) { return _this.onDidFilesChanged(e); }
        });
        this.toDispose.push(this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'files.watcherExclude') {
                _this.toRestartAll.dispose();
            }
        }));
        this.filesystem.setClient({
            /* eslint-disable no-void */
            shouldOverwrite: this.shouldOverwrite.bind(this),
            willCreate: function (uri) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileCreateEmitter.fireWill({ uri: new uri_1.default(uri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            didCreate: function (uri, failed) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileCreateEmitter.fireDid(failed, { uri: new uri_1.default(uri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            willDelete: function (uri) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileDeleteEmitter.fireWill({ uri: new uri_1.default(uri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            didDelete: function (uri, failed) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileDeleteEmitter.fireDid(failed, { uri: new uri_1.default(uri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            willMove: function (sourceUri, targetUri) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileMoveEmitter.fireWill({ sourceUri: new uri_1.default(sourceUri), targetUri: new uri_1.default(targetUri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            didMove: function (sourceUri, targetUri, failed) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileMoveEmitter.fireDid(failed, { sourceUri: new uri_1.default(sourceUri), targetUri: new uri_1.default(targetUri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
        });
    };
    /**
     * Stop watching.
     */
    FileSystemWatcher.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileSystemWatcher.prototype.onDidFilesChanged = function (event) {
        var changes = event.changes.map(function (change) { return ({
            uri: new uri_1.default(change.uri),
            type: change.type
        }); });
        this.onFileChangedEmitter.fire(changes);
    };
    /**
     * Start file watching under the given uri.
     *
     * Resolve when watching is started.
     * Return a disposable to stop file watching under the given uri.
     */
    FileSystemWatcher.prototype.watchFileChanges = function (uri) {
        var _this = this;
        return this.createWatchOptions(uri.toString())
            .then(function (options) {
            return _this.server.watchFileChanges(uri.toString(), options);
        })
            .then(function (watcher) {
            var toDispose = new disposable_1.DisposableCollection();
            var toStop = disposable_1.Disposable.create(function () {
                return _this.server.unwatchFileChanges(watcher);
            });
            var toRestart = toDispose.push(toStop);
            _this.toRestartAll.push(disposable_1.Disposable.create(function () {
                toRestart.dispose();
                toStop.dispose();
                _this.watchFileChanges(uri).then(function (disposable) {
                    return toDispose.push(disposable);
                });
            }));
            return toDispose;
        });
    };
    FileSystemWatcher.prototype.createWatchOptions = function (uri) {
        return this.getIgnored(uri).then(function (ignored) { return ({
            // always ignore temporary upload files
            ignored: ignored.concat('**/theia_upload_*')
        }); });
    };
    FileSystemWatcher.prototype.getIgnored = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var patterns;
            return __generator(this, function (_a) {
                patterns = this.preferences.get('files.watcherExclude', undefined, uri);
                return [2 /*return*/, Object.keys(patterns).filter(function (pattern) { return patterns[pattern]; })];
            });
        });
    };
    __decorate([
        inversify_1.inject(filesystem_watcher_protocol_1.FileSystemWatcherServer),
        __metadata("design:type", Object)
    ], FileSystemWatcher.prototype, "server", void 0);
    __decorate([
        inversify_1.inject(filesystem_preferences_1.FileSystemPreferences),
        __metadata("design:type", Object)
    ], FileSystemWatcher.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], FileSystemWatcher.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileShouldOverwrite),
        __metadata("design:type", Function)
    ], FileSystemWatcher.prototype, "shouldOverwrite", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileSystemWatcher.prototype, "init", null);
    FileSystemWatcher = __decorate([
        inversify_1.injectable()
    ], FileSystemWatcher);
    return FileSystemWatcher;
}());
exports.FileSystemWatcher = FileSystemWatcher;


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/common/filesystem-utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/common/filesystem-utils.js ***!
  \***********************************************************************/
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
exports.FileSystemUtils = void 0;
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/index.js");
var FileSystemUtils;
(function (FileSystemUtils) {
    /**
     * Tildify path, replacing `home` with `~` if user's `home` is present at the beginning of the path.
     * This is a non-operation for Windows.
     *
     * @param resourcePath
     * @param home
     */
    function tildifyPath(resourcePath, home) {
        var path = new common_1.Path(resourcePath);
        var isWindows = path.root && common_1.Path.isDrive(path.root.base);
        if (!isWindows && home && resourcePath.indexOf(home + "/") === 0) {
            return resourcePath.replace(home + "/", '~/');
        }
        return resourcePath;
    }
    FileSystemUtils.tildifyPath = tildifyPath;
    /**
     * Generate unique URI for a given parent which does not collide
     *
     * @param parentUri the `URI` of the parent
     * @param parent the `FileStat` of the parent
     * @param name the resource name
     * @param ext the resource extension
     */
    function generateUniqueResourceURI(parentUri, parent, name, ext) {
        if (ext === void 0) { ext = ''; }
        var children = !parent.children ? [] : parent.children.map(function (child) { return new uri_1.default(child.uri); });
        var index = 1;
        var base = name + ext;
        while (children.some(function (child) { return child.path.base === base; })) {
            index = index + 1;
            base = name + '_' + index + ext;
        }
        return parentUri.resolve(base);
    }
    FileSystemUtils.generateUniqueResourceURI = generateUniqueResourceURI;
})(FileSystemUtils = exports.FileSystemUtils || (exports.FileSystemUtils = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js ***!
  \**********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconnectingFileSystemWatcherServer = exports.FileSystemWatcherServerProxy = exports.FileChangeType = exports.FileSystemWatcherServer = exports.fileSystemWatcherPath = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
exports.fileSystemWatcherPath = '/services/fs-watcher';
exports.FileSystemWatcherServer = Symbol('FileSystemWatcherServer');
var FileChangeType;
(function (FileChangeType) {
    FileChangeType[FileChangeType["UPDATED"] = 0] = "UPDATED";
    FileChangeType[FileChangeType["ADDED"] = 1] = "ADDED";
    FileChangeType[FileChangeType["DELETED"] = 2] = "DELETED";
})(FileChangeType = exports.FileChangeType || (exports.FileChangeType = {}));
exports.FileSystemWatcherServerProxy = Symbol('FileSystemWatcherServerProxy');
var ReconnectingFileSystemWatcherServer = /** @class */ (function () {
    function ReconnectingFileSystemWatcherServer(proxy) {
        var _this = this;
        this.proxy = proxy;
        this.watcherSequence = 1;
        this.watchParams = new Map();
        this.localToRemoteWatcher = new Map();
        var onInitialized = this.proxy.onDidOpenConnection(function () {
            // skip reconnection on the first connection
            onInitialized.dispose();
            _this.proxy.onDidOpenConnection(function () { return _this.reconnect(); });
        });
    }
    ReconnectingFileSystemWatcherServer.prototype.reconnect = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.watchParams.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), watcher = _d[0], _e = _d[1], uri = _e.uri, options = _e.options;
                this.doWatchFileChanges(watcher, uri, options);
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
    ReconnectingFileSystemWatcherServer.prototype.dispose = function () {
        this.proxy.dispose();
    };
    ReconnectingFileSystemWatcherServer.prototype.watchFileChanges = function (uri, options) {
        var watcher = this.watcherSequence++;
        this.watchParams.set(watcher, { uri: uri, options: options });
        return this.doWatchFileChanges(watcher, uri, options);
    };
    ReconnectingFileSystemWatcherServer.prototype.doWatchFileChanges = function (watcher, uri, options) {
        var _this = this;
        return this.proxy.watchFileChanges(uri, options).then(function (remote) {
            _this.localToRemoteWatcher.set(watcher, remote);
            return watcher;
        });
    };
    ReconnectingFileSystemWatcherServer.prototype.unwatchFileChanges = function (watcher) {
        this.watchParams.delete(watcher);
        var remote = this.localToRemoteWatcher.get(watcher);
        if (remote) {
            this.localToRemoteWatcher.delete(watcher);
            return this.proxy.unwatchFileChanges(remote);
        }
        return Promise.resolve();
    };
    ReconnectingFileSystemWatcherServer.prototype.setClient = function (client) {
        this.proxy.setClient(client);
    };
    ReconnectingFileSystemWatcherServer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.FileSystemWatcherServerProxy)),
        __metadata("design:paramtypes", [Object])
    ], ReconnectingFileSystemWatcherServer);
    return ReconnectingFileSystemWatcherServer;
}());
exports.ReconnectingFileSystemWatcherServer = ReconnectingFileSystemWatcherServer;


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/common/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/common/index.js ***!
  \************************************************************/
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js"), exports);
__exportStar(__webpack_require__(/*! ./filesystem-utils */ "./node_modules/@theia/filesystem/lib/common/filesystem-utils.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/frontend-application-config-provider.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/frontend-application-config-provider.js ***!
  \*********************************************************************************************************************/
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
exports.FrontendApplicationConfigProvider = void 0;
var FrontendApplicationConfigProvider = /** @class */ (function () {
    function FrontendApplicationConfigProvider() {
    }
    FrontendApplicationConfigProvider.get = function () {
        var config = FrontendApplicationConfigProvider.doGet();
        if (config === undefined) {
            throw new Error('The configuration is not set. Did you call FrontendApplicationConfigProvider#set?');
        }
        return config;
    };
    FrontendApplicationConfigProvider.set = function (config) {
        if (FrontendApplicationConfigProvider.doGet() !== undefined) {
            throw new Error('The configuration is already set.');
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var globalObject = window;
        var key = FrontendApplicationConfigProvider.KEY;
        globalObject[key] = config;
    };
    FrontendApplicationConfigProvider.doGet = function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var globalObject = window;
        var key = FrontendApplicationConfigProvider.KEY;
        return globalObject[key];
    };
    FrontendApplicationConfigProvider.KEY = Symbol('FrontendApplicationConfigProvider');
    return FrontendApplicationConfigProvider;
}());
exports.FrontendApplicationConfigProvider = FrontendApplicationConfigProvider;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/index.js ***!
  \**************************************************************************************************/
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./preference-service */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-service.js"), exports);
__exportStar(__webpack_require__(/*! ./preference-proxy */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-proxy.js"), exports);
__exportStar(__webpack_require__(/*! ./preference-contribution */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-contribution.js"), exports);
__exportStar(__webpack_require__(/*! ./preference-provider */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-provider.js"), exports);
__exportStar(__webpack_require__(/*! ./preference-scope */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-scope.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-configurations.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-configurations.js ***!
  \**********************************************************************************************************************/
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
exports.PreferenceConfigurations = exports.bindPreferenceConfigurations = exports.PreferenceConfiguration = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var contribution_provider_1 = __webpack_require__(/*! ../../common/contribution-provider */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/contribution-provider.js");
exports.PreferenceConfiguration = Symbol('PreferenceConfiguration');
function bindPreferenceConfigurations(bind) {
    contribution_provider_1.bindContributionProvider(bind, exports.PreferenceConfiguration);
    bind(PreferenceConfigurations).toSelf().inSingletonScope();
}
exports.bindPreferenceConfigurations = bindPreferenceConfigurations;
var PreferenceConfigurations = /** @class */ (function () {
    function PreferenceConfigurations() {
    }
    /* prefer Theia over VS Code by default */
    PreferenceConfigurations.prototype.getPaths = function () {
        return ['.theia', '.vscode'];
    };
    PreferenceConfigurations.prototype.getConfigName = function () {
        return 'settings';
    };
    PreferenceConfigurations.prototype.getSectionNames = function () {
        if (!this.sectionNames) {
            this.sectionNames = this.provider.getContributions().map(function (p) { return p.name; });
        }
        return this.sectionNames;
    };
    PreferenceConfigurations.prototype.isSectionName = function (name) {
        return this.getSectionNames().indexOf(name) !== -1;
    };
    PreferenceConfigurations.prototype.isSectionUri = function (configUri) {
        return !!configUri && this.isSectionName(this.getName(configUri));
    };
    PreferenceConfigurations.prototype.isConfigUri = function (configUri) {
        return !!configUri && this.getName(configUri) === this.getConfigName();
    };
    PreferenceConfigurations.prototype.getName = function (configUri) {
        return configUri.path.name;
    };
    PreferenceConfigurations.prototype.getPath = function (configUri) {
        return configUri.parent.path.base;
    };
    PreferenceConfigurations.prototype.createUri = function (folder, configPath, configName) {
        if (configPath === void 0) { configPath = this.getPaths()[0]; }
        if (configName === void 0) { configName = this.getConfigName(); }
        return folder.resolve(configPath).resolve(configName + '.json');
    };
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider),
        inversify_1.named(exports.PreferenceConfiguration),
        __metadata("design:type", Object)
    ], PreferenceConfigurations.prototype, "provider", void 0);
    PreferenceConfigurations = __decorate([
        inversify_1.injectable()
    ], PreferenceConfigurations);
    return PreferenceConfigurations;
}());
exports.PreferenceConfigurations = PreferenceConfigurations;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-contribution.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-contribution.js ***!
  \********************************************************************************************************************/
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
exports.PreferenceSchemaProvider = exports.FrontendApplicationPreferenceConfig = exports.OVERRIDE_PROPERTY_PATTERN = exports.OverridePreferenceName = exports.bindPreferenceSchemaProvider = exports.PreferenceContribution = exports.PreferenceDataProperty = exports.PreferenceSchemaProperties = exports.PreferenceSchema = void 0;
var Ajv = __webpack_require__(/*! ajv */ "../../node_modules/ajv/lib/ajv.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/index.js");
var preference_scope_1 = __webpack_require__(/*! ./preference-scope */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-scope.js");
var preference_provider_1 = __webpack_require__(/*! ./preference-provider */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-provider.js");
var preference_schema_1 = __webpack_require__(/*! ../../common/preferences/preference-schema */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/preferences/preference-schema.js");
Object.defineProperty(exports, "PreferenceSchema", { enumerable: true, get: function () { return preference_schema_1.PreferenceSchema; } });
Object.defineProperty(exports, "PreferenceSchemaProperties", { enumerable: true, get: function () { return preference_schema_1.PreferenceSchemaProperties; } });
Object.defineProperty(exports, "PreferenceDataProperty", { enumerable: true, get: function () { return preference_schema_1.PreferenceDataProperty; } });
var frontend_application_config_provider_1 = __webpack_require__(/*! ../frontend-application-config-provider */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/frontend-application-config-provider.js");
var preference_configurations_1 = __webpack_require__(/*! ./preference-configurations */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
/* eslint-disable guard-for-in, @typescript-eslint/no-explicit-any */
exports.PreferenceContribution = Symbol('PreferenceContribution');
function bindPreferenceSchemaProvider(bind) {
    preference_configurations_1.bindPreferenceConfigurations(bind);
    bind(PreferenceSchemaProvider).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, exports.PreferenceContribution);
}
exports.bindPreferenceSchemaProvider = bindPreferenceSchemaProvider;
var OverridePreferenceName;
(function (OverridePreferenceName) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'preferenceName' in arg && 'overrideIdentifier' in arg;
    }
    OverridePreferenceName.is = is;
})(OverridePreferenceName = exports.OverridePreferenceName || (exports.OverridePreferenceName = {}));
var OVERRIDE_PROPERTY = '\\[(.*)\\]$';
exports.OVERRIDE_PROPERTY_PATTERN = new RegExp(OVERRIDE_PROPERTY);
var OVERRIDE_PATTERN_WITH_SUBSTITUTION = '\\[(${0})\\]$';
var FrontendApplicationPreferenceConfig;
(function (FrontendApplicationPreferenceConfig) {
    function is(config) {
        return 'preferences' in config && typeof config['preferences'] === 'object';
    }
    FrontendApplicationPreferenceConfig.is = is;
})(FrontendApplicationPreferenceConfig = exports.FrontendApplicationPreferenceConfig || (exports.FrontendApplicationPreferenceConfig = {}));
var PreferenceSchemaProvider = /** @class */ (function (_super) {
    __extends(PreferenceSchemaProvider, _super);
    function PreferenceSchemaProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preferences = {};
        _this.combinedSchema = { properties: {}, patternProperties: {} };
        _this.onDidPreferenceSchemaChangedEmitter = new common_1.Emitter();
        _this.onDidPreferenceSchemaChanged = _this.onDidPreferenceSchemaChangedEmitter.event;
        _this.overrideIdentifiers = new Set();
        _this.overridePatternProperties = {
            type: 'object',
            description: 'Configure editor settings to be overridden for a language.',
            errorMessage: 'Unknown Identifier. Use language identifiers',
            properties: {},
            additionalProperties: false
        };
        return _this;
    }
    PreferenceSchemaProvider.prototype.fireDidPreferenceSchemaChanged = function () {
        this.onDidPreferenceSchemaChangedEmitter.fire(undefined);
    };
    PreferenceSchemaProvider.prototype.init = function () {
        var _this = this;
        this.preferenceContributions.getContributions().forEach(function (contrib) {
            _this.doSetSchema(contrib.schema);
        });
        this.combinedSchema.additionalProperties = false;
        this._ready.resolve();
    };
    PreferenceSchemaProvider.prototype.registerOverrideIdentifier = function (overrideIdentifier) {
        if (this.overrideIdentifiers.has(overrideIdentifier)) {
            return;
        }
        this.overrideIdentifiers.add(overrideIdentifier);
        this.updateOverridePatternPropertiesKey();
    };
    PreferenceSchemaProvider.prototype.updateOverridePatternPropertiesKey = function () {
        var oldKey = this.overridePatternPropertiesKey;
        var newKey = this.computeOverridePatternPropertiesKey();
        if (oldKey === newKey) {
            return;
        }
        if (oldKey) {
            delete this.combinedSchema.patternProperties[oldKey];
        }
        this.overridePatternPropertiesKey = newKey;
        if (newKey) {
            this.combinedSchema.patternProperties[newKey] = this.overridePatternProperties;
        }
        this.fireDidPreferenceSchemaChanged();
    };
    PreferenceSchemaProvider.prototype.computeOverridePatternPropertiesKey = function () {
        var e_1, _a;
        var param = '';
        try {
            for (var _b = __values(this.overrideIdentifiers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var overrideIdentifier = _c.value;
                if (param.length) {
                    param += '|';
                }
                param += new RegExp(common_1.escapeRegExpCharacters(overrideIdentifier)).source;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return param.length ? OVERRIDE_PATTERN_WITH_SUBSTITUTION.replace('${0}', param) : undefined;
    };
    PreferenceSchemaProvider.prototype.doUnsetSchema = function (changes) {
        var e_2, _a;
        var inverseChanges = [];
        try {
            for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                var change = changes_1_1.value;
                var preferenceName = change.preferenceName;
                var overridden = this.overriddenPreferenceName(preferenceName);
                if (overridden) {
                    delete this.overridePatternProperties.properties["[" + overridden.overrideIdentifier + "]"];
                    delete this.combinedSchema.properties["[" + overridden.overrideIdentifier + "]"];
                }
                else {
                    delete this.combinedSchema.properties[preferenceName];
                }
                var newValue = change.oldValue;
                var oldValue = change.newValue;
                var scope = change.scope, domain = change.domain;
                var inverseChange = { preferenceName: preferenceName, oldValue: oldValue, scope: scope, domain: domain };
                if (typeof newValue === undefined) {
                    delete this.preferences[preferenceName];
                }
                else {
                    inverseChange.newValue = newValue;
                    this.preferences[preferenceName] = newValue;
                }
                inverseChanges.push(inverseChange);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return inverseChanges;
    };
    PreferenceSchemaProvider.prototype.doSetSchema = function (schema) {
        var e_3, _a;
        var ajv = new Ajv();
        var valid = ajv.validateSchema(schema);
        if (!valid) {
            var errors = !!ajv.errors ? ajv.errorsText(ajv.errors) : 'unknown validation error';
            console.warn('A contributed preference schema has validation issues : ' + errors);
        }
        var scope = preference_scope_1.PreferenceScope.Default;
        var domain = this.getDomain();
        var changes = [];
        var defaultScope = preference_schema_1.PreferenceSchema.getDefaultScope(schema);
        var overridable = schema.overridable || false;
        try {
            for (var _b = __values(Object.keys(schema.properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var preferenceName = _c.value;
                if (this.combinedSchema.properties[preferenceName]) {
                    console.error('Preference name collision detected in the schema for property: ' + preferenceName);
                }
                else {
                    var schemaProps = preference_schema_1.PreferenceDataProperty.fromPreferenceSchemaProperty(schema.properties[preferenceName], defaultScope);
                    if (typeof schemaProps.overridable !== 'boolean' && overridable) {
                        schemaProps.overridable = true;
                    }
                    if (schemaProps.overridable) {
                        this.overridePatternProperties.properties[preferenceName] = schemaProps;
                    }
                    this.combinedSchema.properties[preferenceName] = schemaProps;
                    var value = schemaProps.defaultValue = this.getDefaultValue(schemaProps, preferenceName);
                    if (this.testOverrideValue(preferenceName, value)) {
                        for (var overriddenPreferenceName in value) {
                            var overrideValue = value[overriddenPreferenceName];
                            var overridePreferenceName = preferenceName + "." + overriddenPreferenceName;
                            changes.push(this.doSetPreferenceValue(overridePreferenceName, overrideValue, { scope: scope, domain: domain }));
                        }
                    }
                    else {
                        changes.push(this.doSetPreferenceValue(preferenceName, value, { scope: scope, domain: domain }));
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return changes;
    };
    PreferenceSchemaProvider.prototype.doSetPreferenceValue = function (preferenceName, newValue, _a) {
        var scope = _a.scope, domain = _a.domain;
        var oldValue = this.preferences[preferenceName];
        this.preferences[preferenceName] = newValue;
        return { preferenceName: preferenceName, oldValue: oldValue, newValue: newValue, scope: scope, domain: domain };
    };
    PreferenceSchemaProvider.prototype.getDefaultValue = function (property, preferenceName) {
        var config = frontend_application_config_provider_1.FrontendApplicationConfigProvider.get();
        if (preferenceName && FrontendApplicationPreferenceConfig.is(config) && preferenceName in config.preferences) {
            return config.preferences[preferenceName];
        }
        if (property.defaultValue !== undefined) {
            return property.defaultValue;
        }
        if (property.default !== undefined) {
            return property.default;
        }
        var type = Array.isArray(property.type) ? property.type[0] : property.type;
        switch (type) {
            case 'boolean':
                return false;
            case 'integer':
            case 'number':
                return 0;
            case 'string':
                return '';
            case 'array':
                return [];
            case 'object':
                return {};
        }
        // eslint-disable-next-line no-null/no-null
        return null;
    };
    PreferenceSchemaProvider.prototype.getCombinedSchema = function () {
        return this.combinedSchema;
    };
    PreferenceSchemaProvider.prototype.setSchema = function (schema) {
        var _this = this;
        var changes = this.doSetSchema(schema);
        if (!changes.length) {
            return common_1.Disposable.NULL;
        }
        this.fireDidPreferenceSchemaChanged();
        this.emitPreferencesChangedEvent(changes);
        return common_1.Disposable.create(function () {
            var inverseChanges = _this.doUnsetSchema(changes);
            if (!inverseChanges.length) {
                return;
            }
            _this.fireDidPreferenceSchemaChanged();
            _this.emitPreferencesChangedEvent(inverseChanges);
        });
    };
    PreferenceSchemaProvider.prototype.getPreferences = function () {
        return this.preferences;
    };
    PreferenceSchemaProvider.prototype.setPreference = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, false];
            });
        });
    };
    PreferenceSchemaProvider.prototype.isValidInScope = function (preferenceName, scope) {
        var property;
        var overridden = this.overriddenPreferenceName(preferenceName);
        if (overridden) {
            // try from overridden schema
            property = this.overridePatternProperties["[" + overridden.overrideIdentifier + "]"];
            property = property && property[overridden.preferenceName];
            if (!property) {
                // try from overridden identifier
                property = this.overridePatternProperties[overridden.preferenceName];
            }
            if (!property) {
                // try from overridden value
                property = this.combinedSchema.properties[overridden.preferenceName];
            }
        }
        else {
            property = this.combinedSchema.properties[preferenceName];
        }
        return property && property.scope >= scope;
    };
    PreferenceSchemaProvider.prototype.getPreferenceNames = function () {
        var _a, _b, _i, preferenceName, _c, _d, overridePreferenceName, e_4_1;
        var e_4, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _a = [];
                    for (_b in this.combinedSchema.properties)
                        _a.push(_b);
                    _i = 0;
                    _f.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 11];
                    preferenceName = _a[_i];
                    return [4 /*yield*/, preferenceName];
                case 2:
                    _f.sent();
                    _f.label = 3;
                case 3:
                    _f.trys.push([3, 8, 9, 10]);
                    _c = (e_4 = void 0, __values(this.getOverridePreferenceNames(preferenceName))), _d = _c.next();
                    _f.label = 4;
                case 4:
                    if (!!_d.done) return [3 /*break*/, 7];
                    overridePreferenceName = _d.value;
                    return [4 /*yield*/, overridePreferenceName];
                case 5:
                    _f.sent();
                    _f.label = 6;
                case 6:
                    _d = _c.next();
                    return [3 /*break*/, 4];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_4_1 = _f.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 10:
                    _i++;
                    return [3 /*break*/, 1];
                case 11: return [2 /*return*/];
            }
        });
    };
    PreferenceSchemaProvider.prototype.getOverridePreferenceNames = function (preferenceName) {
        var preference, _a, _b, overrideIdentifier, e_5_1;
        var e_5, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    preference = this.combinedSchema.properties[preferenceName];
                    if (!(preference && preference.overridable)) return [3 /*break*/, 8];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    _a = __values(this.overrideIdentifiers), _b = _a.next();
                    _d.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 5];
                    overrideIdentifier = _b.value;
                    return [4 /*yield*/, this.overridePreferenceName({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier })];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_5_1 = _d.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
    PreferenceSchemaProvider.prototype.overridePreferenceName = function (_a) {
        var preferenceName = _a.preferenceName, overrideIdentifier = _a.overrideIdentifier;
        return "[" + overrideIdentifier + "]." + preferenceName;
    };
    PreferenceSchemaProvider.prototype.overriddenPreferenceName = function (name) {
        var index = name.indexOf('.');
        if (index === -1) {
            return undefined;
        }
        var matches = name.substr(0, index).match(exports.OVERRIDE_PROPERTY_PATTERN);
        var overrideIdentifier = matches && matches[1];
        if (!overrideIdentifier || !this.overrideIdentifiers.has(overrideIdentifier)) {
            return undefined;
        }
        var preferenceName = name.substr(index + 1);
        return { preferenceName: preferenceName, overrideIdentifier: overrideIdentifier };
    };
    PreferenceSchemaProvider.prototype.testOverrideValue = function (name, value) {
        return preference_schema_1.PreferenceSchemaProperties.is(value) && exports.OVERRIDE_PROPERTY_PATTERN.test(name);
    };
    __decorate([
        inversify_1.inject(common_1.ContributionProvider),
        inversify_1.named(exports.PreferenceContribution),
        __metadata("design:type", Object)
    ], PreferenceSchemaProvider.prototype, "preferenceContributions", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferenceSchemaProvider.prototype, "configurations", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferenceSchemaProvider.prototype, "init", null);
    PreferenceSchemaProvider = __decorate([
        inversify_1.injectable()
    ], PreferenceSchemaProvider);
    return PreferenceSchemaProvider;
}(preference_provider_1.PreferenceProvider));
exports.PreferenceSchemaProvider = PreferenceSchemaProvider;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-provider.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-provider.js ***!
  \****************************************************************************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
exports.PreferenceProvider = exports.PreferenceProviderDataChange = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var debounce = __webpack_require__(/*! p-debounce */ "../../node_modules/p-debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var json_1 = __webpack_require__(/*! @phosphor/coreutils/lib/json */ "../../node_modules/@phosphor/coreutils/lib/json.js");
var uri_1 = __webpack_require__(/*! ../../common/uri */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/index.js");
var promise_util_1 = __webpack_require__(/*! ../../common/promise-util */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/promise-util.js");
var PreferenceProviderDataChange;
(function (PreferenceProviderDataChange) {
    function affects(change, resourceUri) {
        var resourcePath = resourceUri && new uri_1.default(resourceUri).path;
        var domain = change.domain;
        return !resourcePath || !domain || domain.some(function (uri) { return new uri_1.default(uri).path.relativity(resourcePath) >= 0; });
    }
    PreferenceProviderDataChange.affects = affects;
})(PreferenceProviderDataChange = exports.PreferenceProviderDataChange || (exports.PreferenceProviderDataChange = {}));
var PreferenceProvider = /** @class */ (function () {
    function PreferenceProvider() {
        var _this = this;
        this.onDidPreferencesChangedEmitter = new common_1.Emitter();
        this.onDidPreferencesChanged = this.onDidPreferencesChangedEmitter.event;
        this.toDispose = new common_1.DisposableCollection();
        this._ready = new promise_util_1.Deferred();
        this._pendingChanges = Promise.resolve(false);
        this.fireDidPreferencesChanged = debounce(function () {
            var changes = _this.deferredChanges;
            _this.deferredChanges = undefined;
            if (changes && Object.keys(changes).length) {
                _this.onDidPreferencesChangedEmitter.fire(changes);
                return true;
            }
            return false;
        }, 0);
        this.toDispose.push(this.onDidPreferencesChangedEmitter);
    }
    PreferenceProvider.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(PreferenceProvider.prototype, "pendingChanges", {
        get: function () {
            return this._pendingChanges;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Informs the listeners that one or more preferences of this provider are changed.
     * The listeners are able to find what was changed from the emitted event.
     */
    PreferenceProvider.prototype.emitPreferencesChangedEvent = function (changes) {
        var e_1, _a, e_2, _b;
        if (Array.isArray(changes)) {
            try {
                for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                    var change = changes_1_1.value;
                    this.mergePreferenceProviderDataChange(change);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            try {
                for (var _c = __values(Object.keys(changes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var preferenceName = _d.value;
                    this.mergePreferenceProviderDataChange(changes[preferenceName]);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return this._pendingChanges = this.fireDidPreferencesChanged();
    };
    PreferenceProvider.prototype.mergePreferenceProviderDataChange = function (change) {
        if (!this.deferredChanges) {
            this.deferredChanges = {};
        }
        var current = this.deferredChanges[change.preferenceName];
        var newValue = change.newValue, scope = change.scope, domain = change.domain;
        if (!current) {
            // new
            this.deferredChanges[change.preferenceName] = change;
        }
        else if (current.oldValue === newValue) {
            // delete
            delete this.deferredChanges[change.preferenceName];
        }
        else {
            // update
            Object.assign(current, { newValue: newValue, scope: scope, domain: domain });
        }
    };
    PreferenceProvider.prototype.get = function (preferenceName, resourceUri) {
        return this.resolve(preferenceName, resourceUri).value;
    };
    PreferenceProvider.prototype.resolve = function (preferenceName, resourceUri) {
        var value = this.getPreferences(resourceUri)[preferenceName];
        if (value !== undefined) {
            return {
                value: value,
                configUri: this.getConfigUri(resourceUri)
            };
        }
        return {};
    };
    Object.defineProperty(PreferenceProvider.prototype, "ready", {
        /**
         * Resolved when the preference provider is ready to provide preferences
         * It should be resolved by subclasses.
         */
        get: function () {
            return this._ready.promise;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * undefined if all belongs
     */
    PreferenceProvider.prototype.getDomain = function () {
        return undefined;
    };
    /**
     * undefined if cannot be provided for the given resource uri
     */
    PreferenceProvider.prototype.getConfigUri = function (resourceUri) {
        return undefined;
    };
    PreferenceProvider.merge = function (source, target) {
        var e_3, _a;
        if (source === undefined || !json_1.JSONExt.isObject(source)) {
            return json_1.JSONExt.deepCopy(target);
        }
        if (json_1.JSONExt.isPrimitive(target)) {
            return {};
        }
        try {
            for (var _b = __values(Object.keys(target)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var value = target[key];
                if (key in source) {
                    if (json_1.JSONExt.isObject(source[key]) && json_1.JSONExt.isObject(value)) {
                        this.merge(source[key], value);
                        continue;
                    }
                }
                source[key] = json_1.JSONExt.deepCopy(value);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return source;
    };
    PreferenceProvider = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PreferenceProvider);
    return PreferenceProvider;
}());
exports.PreferenceProvider = PreferenceProvider;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-proxy.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-proxy.js ***!
  \*************************************************************************************************************/
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
exports.createPreferenceProxy = void 0;
var preference_contribution_1 = __webpack_require__(/*! ./preference-contribution */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-contribution.js");
var preference_scope_1 = __webpack_require__(/*! ./preference-scope */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-scope.js");
function createPreferenceProxy(preferences, schema, options) {
    var opts = options || {};
    var prefix = opts.prefix || '';
    var style = opts.style || 'flat';
    var isDeep = style === 'deep' || style === 'both';
    var isFlat = style === 'both' || style === 'flat';
    var onPreferenceChanged = function (listener, thisArgs, disposables) { return preferences.onPreferencesChanged(function (changes) {
        var e_1, _a;
        var _loop_1 = function (key) {
            var e = changes[key];
            var overridden = preferences.overriddenPreferenceName(e.preferenceName);
            var preferenceName = overridden ? overridden.preferenceName : e.preferenceName;
            if (preferenceName.startsWith(prefix) && (!overridden || !opts.overrideIdentifier || overridden.overrideIdentifier === opts.overrideIdentifier)) {
                if (schema.properties[preferenceName]) {
                    var newValue = e.newValue, oldValue = e.oldValue;
                    listener({
                        newValue: newValue, oldValue: oldValue, preferenceName: preferenceName,
                        affects: function (resourceUri, overrideIdentifier) {
                            if (overrideIdentifier !== undefined) {
                                if (overridden && overridden.overrideIdentifier !== overrideIdentifier) {
                                    return false;
                                }
                            }
                            return e.affects(resourceUri);
                        }
                    });
                }
            }
        };
        try {
            for (var _b = __values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_1(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }, thisArgs, disposables); };
    var unsupportedOperation = function (_, __) {
        throw new Error('Unsupported operation');
    };
    var getValue = function (arg, defaultValue, resourceUri) {
        var preferenceName = preference_contribution_1.OverridePreferenceName.is(arg) ?
            preferences.overridePreferenceName(arg) :
            arg;
        return preferences.get(preferenceName, defaultValue, resourceUri || opts.resourceUri);
    };
    var ownKeys = function () {
        var e_2, _a;
        var properties = [];
        try {
            for (var _b = __values(Object.keys(schema.properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var p = _c.value;
                if (p.startsWith(prefix)) {
                    var idx = p.indexOf('.', prefix.length);
                    if (idx !== -1 && isDeep) {
                        var pre = p.substr(prefix.length, idx - prefix.length);
                        if (properties.indexOf(pre) === -1) {
                            properties.push(pre);
                        }
                    }
                    var prop = p.substr(prefix.length);
                    if (isFlat || prop.indexOf('.') === -1) {
                        properties.push(prop);
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return properties;
    };
    var set = function (_, property, value) {
        var e_3, _a, e_4, _b;
        if (typeof property !== 'string') {
            throw new Error("unexpected property: " + String(property));
        }
        if (style === 'deep' && property.indexOf('.') !== -1) {
            return false;
        }
        var fullProperty = prefix ? prefix + property : property;
        if (schema.properties[fullProperty]) {
            preferences.set(fullProperty, value, preference_scope_1.PreferenceScope.Default);
            return true;
        }
        var newPrefix = fullProperty + '.';
        try {
            for (var _c = __values(Object.keys(schema.properties)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var p = _d.value;
                if (p.startsWith(newPrefix)) {
                    var subProxy = createPreferenceProxy(preferences, schema, {
                        prefix: newPrefix,
                        resourceUri: opts.resourceUri,
                        overrideIdentifier: opts.overrideIdentifier,
                        style: style
                    });
                    try {
                        for (var _e = (e_4 = void 0, __values(Object.keys(value))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var k = _f.value;
                            subProxy[k] = value[k];
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return false;
    };
    var get = function (_, property) {
        var e_5, _a;
        if (typeof property !== 'string') {
            throw new Error("unexpected property: " + String(property));
        }
        var fullProperty = prefix ? prefix + property : property;
        if (isFlat || property.indexOf('.') === -1) {
            if (schema.properties[fullProperty]) {
                var value = void 0;
                if (opts.overrideIdentifier) {
                    value = preferences.get(preferences.overridePreferenceName({
                        overrideIdentifier: opts.overrideIdentifier,
                        preferenceName: fullProperty
                    }), undefined, opts.resourceUri);
                }
                if (value === undefined) {
                    value = preferences.get(fullProperty, undefined, opts.resourceUri);
                }
                return value;
            }
        }
        if (property === 'onPreferenceChanged') {
            return onPreferenceChanged;
        }
        if (property === 'dispose') {
            return function () { };
        }
        if (property === 'ready') {
            return preferences.ready;
        }
        if (property === 'get') {
            return getValue;
        }
        if (property === 'toJSON') {
            return toJSON();
        }
        if (isDeep) {
            var newPrefix = fullProperty + '.';
            try {
                for (var _b = __values(Object.keys(schema.properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var p = _c.value;
                    if (p.startsWith(newPrefix)) {
                        return createPreferenceProxy(preferences, schema, { prefix: newPrefix, resourceUri: opts.resourceUri, overrideIdentifier: opts.overrideIdentifier, style: style });
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            var value = void 0;
            var parentSegment = fullProperty;
            var segments = [];
            do {
                var index = parentSegment.lastIndexOf('.');
                segments.push(parentSegment.substring(index + 1));
                parentSegment = parentSegment.substring(0, index);
                if (parentSegment in schema.properties) {
                    value = get(_, parentSegment);
                }
            } while (parentSegment && value === undefined);
            var segment = void 0;
            while (typeof value === 'object' && (segment = segments.pop())) {
                value = value[segment];
            }
            return segments.length ? undefined : value;
        }
        return undefined;
    };
    var toJSON = function () {
        var e_6, _a;
        var result = {};
        try {
            for (var _b = __values(ownKeys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var k = _c.value;
                result[k] = get(undefined, k);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return result;
    };
    return new Proxy({}, {
        get: get,
        ownKeys: ownKeys,
        getOwnPropertyDescriptor: function (_, property) {
            if (ownKeys().indexOf(property) !== -1) {
                return {
                    enumerable: true,
                    configurable: true
                };
            }
            return {};
        },
        set: set,
        deleteProperty: unsupportedOperation,
        defineProperty: unsupportedOperation
    });
}
exports.createPreferenceProxy = createPreferenceProxy;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-scope.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-scope.js ***!
  \*************************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceScope = void 0;
var preference_scope_1 = __webpack_require__(/*! ../../common/preferences/preference-scope */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/preferences/preference-scope.js");
Object.defineProperty(exports, "PreferenceScope", { enumerable: true, get: function () { return preference_scope_1.PreferenceScope; } });


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-service.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-service.js ***!
  \***************************************************************************************************************/
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
exports.PreferenceServiceImpl = exports.PreferenceProviderProvider = exports.PreferenceService = exports.PreferenceChangeImpl = exports.PreferenceScope = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/index.js");
var promise_util_1 = __webpack_require__(/*! ../../common/promise-util */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/promise-util.js");
var preference_provider_1 = __webpack_require__(/*! ./preference-provider */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-provider.js");
var preference_contribution_1 = __webpack_require__(/*! ./preference-contribution */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-contribution.js");
var uri_1 = __webpack_require__(/*! ../../common/uri */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri.js");
var preference_scope_1 = __webpack_require__(/*! ./preference-scope */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-scope.js");
Object.defineProperty(exports, "PreferenceScope", { enumerable: true, get: function () { return preference_scope_1.PreferenceScope; } });
var preference_configurations_1 = __webpack_require__(/*! ./preference-configurations */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var PreferenceChangeImpl = /** @class */ (function () {
    function PreferenceChangeImpl(change) {
        this.change = change;
    }
    Object.defineProperty(PreferenceChangeImpl.prototype, "preferenceName", {
        get: function () {
            return this.change.preferenceName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreferenceChangeImpl.prototype, "newValue", {
        get: function () {
            return this.change.newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreferenceChangeImpl.prototype, "oldValue", {
        get: function () {
            return this.change.oldValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreferenceChangeImpl.prototype, "scope", {
        get: function () {
            return this.change.scope;
        },
        enumerable: false,
        configurable: true
    });
    // TODO add tests
    PreferenceChangeImpl.prototype.affects = function (resourceUri) {
        var resourcePath = resourceUri && new uri_1.default(resourceUri).path;
        var domain = this.change.domain;
        return !resourcePath || !domain || domain.some(function (uri) { return new uri_1.default(uri).path.relativity(resourcePath) >= 0; });
    };
    return PreferenceChangeImpl;
}());
exports.PreferenceChangeImpl = PreferenceChangeImpl;
exports.PreferenceService = Symbol('PreferenceService');
/**
 * We cannot load providers directly in the case if they depend on `PreferenceService` somehow.
 * It allows to load them lazilly after DI is configured.
 */
exports.PreferenceProviderProvider = Symbol('PreferenceProviderProvider');
var PreferenceServiceImpl = /** @class */ (function () {
    function PreferenceServiceImpl() {
        this.onPreferenceChangedEmitter = new common_1.Emitter();
        this.onPreferenceChanged = this.onPreferenceChangedEmitter.event;
        this.onPreferencesChangedEmitter = new common_1.Emitter();
        this.onPreferencesChanged = this.onPreferencesChangedEmitter.event;
        this.toDispose = new common_1.DisposableCollection(this.onPreferenceChangedEmitter, this.onPreferencesChangedEmitter);
        this.preferenceProviders = new Map();
        this._ready = new promise_util_1.Deferred();
    }
    PreferenceServiceImpl.prototype.initializeProviders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, scope, provider, e_1_1, e_2;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 9, , 10]);
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(preference_scope_1.PreferenceScope.getScopes()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        scope = _b.value;
                        provider = this.providerProvider(scope);
                        this.preferenceProviders.set(scope, provider);
                        this.toDispose.push(provider.onDidPreferencesChanged(function (changes) {
                            return _this.reconcilePreferences(changes);
                        }));
                        return [4 /*yield*/, provider.ready];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
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
                        this._ready.resolve();
                        return [3 /*break*/, 10];
                    case 9:
                        e_2 = _d.sent();
                        this._ready.reject(e_2);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    PreferenceServiceImpl.prototype.init = function () {
        var _this = this;
        this.toDispose.push(common_1.Disposable.create(function () { return _this._ready.reject(new Error('preference service is disposed')); }));
        this.initializeProviders();
    };
    PreferenceServiceImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(PreferenceServiceImpl.prototype, "ready", {
        get: function () {
            return this._ready.promise;
        },
        enumerable: false,
        configurable: true
    });
    PreferenceServiceImpl.prototype.reconcilePreferences = function (changes) {
        var e_3, _a, e_4, _b;
        var _this = this;
        var changesToEmit = {};
        var acceptChange = function (change) {
            return _this.getAffectedPreferenceNames(change, function (preferenceName) {
                return changesToEmit[preferenceName] = new PreferenceChangeImpl(__assign(__assign({}, change), { preferenceName: preferenceName }));
            });
        };
        try {
            for (var _c = __values(Object.keys(changes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var preferenceName = _d.value;
                var change = changes[preferenceName];
                if (change.newValue === undefined) {
                    var overridden = this.overriddenPreferenceName(change.preferenceName);
                    if (overridden) {
                        change = __assign(__assign({}, change), { newValue: this.doGet(overridden.preferenceName) });
                    }
                }
                if (this.schema.isValidInScope(preferenceName, preference_scope_1.PreferenceScope.Folder)) {
                    acceptChange(change);
                    continue;
                }
                try {
                    for (var _e = (e_4 = void 0, __values(preference_scope_1.PreferenceScope.getReversedScopes())), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var scope = _f.value;
                        if (this.schema.isValidInScope(preferenceName, scope)) {
                            var provider = this.getProvider(scope);
                            if (provider) {
                                var value = provider.get(preferenceName);
                                if (scope > change.scope && value !== undefined) {
                                    // preference defined in a more specific scope
                                    break;
                                }
                                else if (scope === change.scope && change.newValue !== undefined) {
                                    // preference is changed into something other than `undefined`
                                    acceptChange(change);
                                }
                                else if (scope < change.scope && change.newValue === undefined && value !== undefined) {
                                    // preference is changed to `undefined`, use the value from a more general scope
                                    change = __assign(__assign({}, change), { newValue: value, scope: scope });
                                    acceptChange(change);
                                }
                            }
                        }
                        else if (change.newValue === undefined && change.scope === preference_scope_1.PreferenceScope.Default) {
                            // preference is removed
                            acceptChange(change);
                            break;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // emit the changes
        var changedPreferenceNames = Object.keys(changesToEmit);
        if (changedPreferenceNames.length > 0) {
            this.onPreferencesChangedEmitter.fire(changesToEmit);
        }
        changedPreferenceNames.forEach(function (preferenceName) { return _this.onPreferenceChangedEmitter.fire(changesToEmit[preferenceName]); });
    };
    PreferenceServiceImpl.prototype.getAffectedPreferenceNames = function (change, accept) {
        var e_5, _a;
        accept(change.preferenceName);
        try {
            for (var _b = __values(this.schema.getOverridePreferenceNames(change.preferenceName)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var overridePreferenceName = _c.value;
                if (!this.doHas(overridePreferenceName)) {
                    accept(overridePreferenceName);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    PreferenceServiceImpl.prototype.getProvider = function (scope) {
        return this.preferenceProviders.get(scope);
    };
    PreferenceServiceImpl.prototype.has = function (preferenceName, resourceUri) {
        return this.get(preferenceName, undefined, resourceUri) !== undefined;
    };
    PreferenceServiceImpl.prototype.get = function (preferenceName, defaultValue, resourceUri) {
        return this.resolve(preferenceName, defaultValue, resourceUri).value;
    };
    PreferenceServiceImpl.prototype.resolve = function (preferenceName, defaultValue, resourceUri) {
        var _a = this.doResolve(preferenceName, defaultValue, resourceUri), value = _a.value, configUri = _a.configUri;
        if (value === undefined) {
            var overridden = this.overriddenPreferenceName(preferenceName);
            if (overridden) {
                return this.doResolve(overridden.preferenceName, defaultValue, resourceUri);
            }
        }
        return { value: value, configUri: configUri };
    };
    PreferenceServiceImpl.prototype.set = function (preferenceName, value, scope, resourceUri) {
        return __awaiter(this, void 0, void 0, function () {
            var resolvedScope, provider, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        resolvedScope = scope !== undefined ? scope : (!resourceUri ? preference_scope_1.PreferenceScope.Workspace : preference_scope_1.PreferenceScope.Folder);
                        if (resolvedScope === preference_scope_1.PreferenceScope.User && this.configurations.isSectionName(preferenceName.split('.', 1)[0])) {
                            throw new Error("Unable to write to User Settings because " + preferenceName + " does not support for global scope.");
                        }
                        if (resolvedScope === preference_scope_1.PreferenceScope.Folder && !resourceUri) {
                            throw new Error('Unable to write to Folder Settings because no resource is provided.');
                        }
                        provider = this.getProvider(resolvedScope);
                        _a = provider;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, provider.setPreference(preferenceName, value, resourceUri)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            return [2 /*return*/];
                        }
                        throw new Error("Unable to write to " + preference_scope_1.PreferenceScope.getScopeNames(resolvedScope)[0] + " Settings.");
                }
            });
        });
    };
    PreferenceServiceImpl.prototype.getBoolean = function (preferenceName, defaultValue, resourceUri) {
        var value = resourceUri ? this.get(preferenceName, defaultValue, resourceUri) : this.get(preferenceName, defaultValue);
        // eslint-disable-next-line no-null/no-null
        return value !== null && value !== undefined ? !!value : defaultValue;
    };
    PreferenceServiceImpl.prototype.getString = function (preferenceName, defaultValue, resourceUri) {
        var value = resourceUri ? this.get(preferenceName, defaultValue, resourceUri) : this.get(preferenceName, defaultValue);
        // eslint-disable-next-line no-null/no-null
        if (value === null || value === undefined) {
            return defaultValue;
        }
        return value.toString();
    };
    PreferenceServiceImpl.prototype.getNumber = function (preferenceName, defaultValue, resourceUri) {
        var value = resourceUri ? this.get(preferenceName, defaultValue, resourceUri) : this.get(preferenceName, defaultValue);
        // eslint-disable-next-line no-null/no-null
        if (value === null || value === undefined) {
            return defaultValue;
        }
        if (typeof value === 'number') {
            return value;
        }
        return Number(value);
    };
    PreferenceServiceImpl.prototype.inspect = function (preferenceName, resourceUri) {
        var defaultValue = this.inspectInScope(preferenceName, preference_scope_1.PreferenceScope.Default, resourceUri);
        var globalValue = this.inspectInScope(preferenceName, preference_scope_1.PreferenceScope.User, resourceUri);
        var workspaceValue = this.inspectInScope(preferenceName, preference_scope_1.PreferenceScope.Workspace, resourceUri);
        var workspaceFolderValue = this.inspectInScope(preferenceName, preference_scope_1.PreferenceScope.Folder, resourceUri);
        return { preferenceName: preferenceName, defaultValue: defaultValue, globalValue: globalValue, workspaceValue: workspaceValue, workspaceFolderValue: workspaceFolderValue };
    };
    PreferenceServiceImpl.prototype.inspectInScope = function (preferenceName, scope, resourceUri) {
        var value = this.doInspectInScope(preferenceName, scope, resourceUri);
        if (value === undefined) {
            var overridden = this.overriddenPreferenceName(preferenceName);
            if (overridden) {
                return this.doInspectInScope(overridden.preferenceName, scope, resourceUri);
            }
        }
        return value;
    };
    PreferenceServiceImpl.prototype.overridePreferenceName = function (options) {
        return this.schema.overridePreferenceName(options);
    };
    PreferenceServiceImpl.prototype.overriddenPreferenceName = function (preferenceName) {
        return this.schema.overriddenPreferenceName(preferenceName);
    };
    PreferenceServiceImpl.prototype.doHas = function (preferenceName, resourceUri) {
        return this.doGet(preferenceName, undefined, resourceUri) !== undefined;
    };
    PreferenceServiceImpl.prototype.doInspectInScope = function (preferenceName, scope, resourceUri) {
        var provider = this.getProvider(scope);
        return provider && provider.get(preferenceName, resourceUri);
    };
    PreferenceServiceImpl.prototype.doGet = function (preferenceName, defaultValue, resourceUri) {
        return this.doResolve(preferenceName, defaultValue, resourceUri).value;
    };
    PreferenceServiceImpl.prototype.doResolve = function (preferenceName, defaultValue, resourceUri) {
        var e_6, _a;
        var result = {};
        try {
            for (var _b = __values(preference_scope_1.PreferenceScope.getScopes()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var scope = _c.value;
                if (this.schema.isValidInScope(preferenceName, scope)) {
                    var provider = this.getProvider(scope);
                    if (provider) {
                        var _d = provider.resolve(preferenceName, resourceUri), configUri = _d.configUri, value = _d.value;
                        if (value !== undefined) {
                            result.configUri = configUri;
                            result.value = preference_provider_1.PreferenceProvider.merge(result.value, value);
                        }
                    }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return {
            configUri: result.configUri,
            value: result.value !== undefined ? common_1.deepFreeze(result.value) : defaultValue
        };
    };
    __decorate([
        inversify_1.inject(preference_contribution_1.PreferenceSchemaProvider),
        __metadata("design:type", preference_contribution_1.PreferenceSchemaProvider)
    ], PreferenceServiceImpl.prototype, "schema", void 0);
    __decorate([
        inversify_1.inject(exports.PreferenceProviderProvider),
        __metadata("design:type", Function)
    ], PreferenceServiceImpl.prototype, "providerProvider", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferenceServiceImpl.prototype, "configurations", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferenceServiceImpl.prototype, "init", null);
    PreferenceServiceImpl = __decorate([
        inversify_1.injectable()
    ], PreferenceServiceImpl);
    return PreferenceServiceImpl;
}());
exports.PreferenceServiceImpl = PreferenceServiceImpl;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/preferences/preference-schema.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/preferences/preference-schema.js ***!
  \*************************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceDataProperty = exports.PreferenceSchemaProperties = exports.PreferenceSchema = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var preference_scope_1 = __webpack_require__(/*! ./preference-scope */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/preferences/preference-scope.js");
var PreferenceSchema;
(function (PreferenceSchema) {
    function is(obj) {
        return !!obj && ('properties' in obj) && PreferenceSchemaProperties.is(obj['properties']);
    }
    PreferenceSchema.is = is;
    function getDefaultScope(schema) {
        var defaultScope = preference_scope_1.PreferenceScope.Workspace;
        if (!preference_scope_1.PreferenceScope.is(schema.scope)) {
            defaultScope = preference_scope_1.PreferenceScope.fromString(schema.scope) || preference_scope_1.PreferenceScope.Workspace;
        }
        else {
            defaultScope = schema.scope;
        }
        return defaultScope;
    }
    PreferenceSchema.getDefaultScope = getDefaultScope;
})(PreferenceSchema = exports.PreferenceSchema || (exports.PreferenceSchema = {}));
var PreferenceSchemaProperties;
(function (PreferenceSchemaProperties) {
    function is(obj) {
        return !!obj && typeof obj === 'object';
    }
    PreferenceSchemaProperties.is = is;
})(PreferenceSchemaProperties = exports.PreferenceSchemaProperties || (exports.PreferenceSchemaProperties = {}));
var PreferenceDataProperty;
(function (PreferenceDataProperty) {
    function fromPreferenceSchemaProperty(schemaProps, defaultScope) {
        if (defaultScope === void 0) { defaultScope = preference_scope_1.PreferenceScope.Workspace; }
        if (!schemaProps.scope) {
            schemaProps.scope = defaultScope;
        }
        else if (typeof schemaProps.scope === 'string') {
            return Object.assign(schemaProps, { scope: preference_scope_1.PreferenceScope.fromString(schemaProps.scope) || defaultScope });
        }
        return schemaProps;
    }
    PreferenceDataProperty.fromPreferenceSchemaProperty = fromPreferenceSchemaProperty;
})(PreferenceDataProperty = exports.PreferenceDataProperty || (exports.PreferenceDataProperty = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/preferences/preference-scope.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/preferences/preference-scope.js ***!
  \************************************************************************************************************/
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
exports.PreferenceScope = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var PreferenceScope;
(function (PreferenceScope) {
    PreferenceScope[PreferenceScope["Default"] = 0] = "Default";
    PreferenceScope[PreferenceScope["User"] = 1] = "User";
    PreferenceScope[PreferenceScope["Workspace"] = 2] = "Workspace";
    PreferenceScope[PreferenceScope["Folder"] = 3] = "Folder";
})(PreferenceScope = exports.PreferenceScope || (exports.PreferenceScope = {}));
(function (PreferenceScope) {
    function is(scope) {
        return typeof scope === 'number' && getScopes().findIndex(function (s) { return s === scope; }) >= 0;
    }
    PreferenceScope.is = is;
    function getScopes() {
        return Object.keys(PreferenceScope)
            .filter(function (k) { return typeof PreferenceScope[k] === 'string'; })
            .map(function (v) { return Number(v); });
    }
    PreferenceScope.getScopes = getScopes;
    function getReversedScopes() {
        return getScopes().reverse();
    }
    PreferenceScope.getReversedScopes = getReversedScopes;
    function getScopeNames(scope) {
        var e_1, _a;
        var names = [];
        var allNames = Object.keys(PreferenceScope)
            .filter(function (k) { return typeof PreferenceScope[k] === 'number'; });
        if (scope) {
            try {
                for (var allNames_1 = __values(allNames), allNames_1_1 = allNames_1.next(); !allNames_1_1.done; allNames_1_1 = allNames_1.next()) {
                    var name_1 = allNames_1_1.value;
                    if (PreferenceScope[name_1] <= scope) {
                        names.push(name_1);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (allNames_1_1 && !allNames_1_1.done && (_a = allNames_1.return)) _a.call(allNames_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return names;
    }
    PreferenceScope.getScopeNames = getScopeNames;
    function fromString(strScope) {
        switch (strScope) {
            case 'application':
                return PreferenceScope.User;
            case 'window':
                return PreferenceScope.Folder;
            case 'resource':
                return PreferenceScope.Folder;
        }
    }
    PreferenceScope.fromString = fromString;
})(PreferenceScope = exports.PreferenceScope || (exports.PreferenceScope = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/promise-util.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/promise-util.js ***!
  \********************************************************************************************/
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
exports.timeout = exports.Deferred = void 0;
var cancellation_1 = __webpack_require__(/*! ./cancellation */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/cancellation.js");
/**
 * Simple implementation of the deferred pattern.
 * An object that exposes a promise and functions to resolve and reject it.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());
exports.Deferred = Deferred;
/**
 * @returns resolves after a specified number of milliseconds
 * @throws cancelled if a given token is cancelled before a specified number of milliseconds
 */
function timeout(ms, token) {
    if (token === void 0) { token = cancellation_1.CancellationToken.None; }
    var deferred = new Deferred();
    var handle = setTimeout(function () { return deferred.resolve(); }, ms);
    token.onCancellationRequested(function () {
        clearTimeout(handle);
        deferred.reject(cancellation_1.cancelled());
    });
    return deferred.promise;
}
exports.timeout = timeout;


/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map