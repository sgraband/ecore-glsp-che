(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@theia/filesystem/lib/common/filesystem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/common/filesystem.js ***!
  \*****************************************************************/
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
exports.FileSystemError = exports.FileStat = exports.DispatchingFileSystemClient = exports.FileShouldOverwrite = exports.FileAccess = exports.FileSystem = exports.fileSystemPath = void 0;
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
exports.fileSystemPath = '/services/filesystem';
exports.FileSystem = Symbol('FileSystem');
var FileAccess;
(function (FileAccess) {
    var Constants;
    (function (Constants) {
        /**
         * Flag indicating that the file is visible to the calling process.
         * This is useful for determining if a file exists, but says nothing about rwx permissions. Default if no mode is specified.
         */
        Constants.F_OK = 0;
        /**
         * Flag indicating that the file can be read by the calling process.
         */
        Constants.R_OK = 4;
        /**
         * Flag indicating that the file can be written by the calling process.
         */
        Constants.W_OK = 2;
        /**
         * Flag indicating that the file can be executed by the calling process.
         * This has no effect on Windows (will behave like `FileAccess.F_OK`).
         */
        Constants.X_OK = 1;
    })(Constants = FileAccess.Constants || (FileAccess.Constants = {}));
})(FileAccess = exports.FileAccess || (exports.FileAccess = {}));
/**
 * A callback type, called when we try to save a file but realize it has been
 * modified by somebody else since we have opened it.  `originalStat` is the
 * stat at the moment we opened the file, `currentStat` is the stat at the
 * moment we try to save it (after the external modification).  The callback
 * should return true if we still want to save the file, false otherwise.
 */
exports.FileShouldOverwrite = Symbol('FileShouldOverwrite');
var DispatchingFileSystemClient = /** @class */ (function () {
    function DispatchingFileSystemClient() {
        this.clients = new Set();
    }
    DispatchingFileSystemClient.prototype.shouldOverwrite = function (originalStat, currentStat) {
        return Promise.race(Array.from(this.clients, function (client) {
            return client.shouldOverwrite(originalStat, currentStat);
        }));
    };
    DispatchingFileSystemClient.prototype.willCreate = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Array.from(this.clients, function (client) { return client.willCreate(uri); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DispatchingFileSystemClient.prototype.didCreate = function (uri, failed) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Array.from(this.clients, function (client) { return client.didCreate(uri, failed); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DispatchingFileSystemClient.prototype.willDelete = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Array.from(this.clients, function (client) { return client.willDelete(uri); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DispatchingFileSystemClient.prototype.didDelete = function (uri, failed) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Array.from(this.clients, function (client) { return client.didDelete(uri, failed); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DispatchingFileSystemClient.prototype.willMove = function (sourceUri, targetUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Array.from(this.clients, function (client) { return client.willMove(sourceUri, targetUri); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DispatchingFileSystemClient.prototype.didMove = function (sourceUri, targetUri, failed) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Array.from(this.clients, function (client) { return client.didMove(sourceUri, targetUri, failed); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DispatchingFileSystemClient = __decorate([
        inversify_1.injectable()
    ], DispatchingFileSystemClient);
    return DispatchingFileSystemClient;
}());
exports.DispatchingFileSystemClient = DispatchingFileSystemClient;
var FileStat;
(function (FileStat) {
    function is(candidate) {
        return typeof candidate === 'object' && ('uri' in candidate) && ('lastModification' in candidate) && ('isDirectory' in candidate);
    }
    FileStat.is = is;
    function equals(one, other) {
        if (!one || !other || !is(one) || !is(other)) {
            return false;
        }
        return one.uri === other.uri
            && one.lastModification === other.lastModification
            && one.isDirectory === other.isDirectory;
    }
    FileStat.equals = equals;
})(FileStat = exports.FileStat || (exports.FileStat = {}));
var FileSystemError;
(function (FileSystemError) {
    FileSystemError.FileNotFound = common_1.ApplicationError.declare(-33000, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' has not been found.",
        data: { uri: uri }
    }); });
    FileSystemError.FileExists = common_1.ApplicationError.declare(-33001, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' already exists.",
        data: { uri: uri }
    }); });
    FileSystemError.FileIsDirectory = common_1.ApplicationError.declare(-33002, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' is a directory.",
        data: { uri: uri }
    }); });
    FileSystemError.FileNotDirectory = common_1.ApplicationError.declare(-33003, function (uri, prefix) { return ({
        message: (prefix ? prefix + ' ' : '') + "'" + uri + "' is not a directory.",
        data: { uri: uri }
    }); });
    FileSystemError.FileIsOutOfSync = common_1.ApplicationError.declare(-33004, function (file, stat) { return ({
        message: "'" + file.uri + "' is out of sync.",
        data: { file: file, stat: stat }
    }); });
})(FileSystemError = exports.FileSystemError || (exports.FileSystemError = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/application-package/lib/environment.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/application-package/lib/environment.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
var isElectron = __webpack_require__(/*! is-electron */ "../../node_modules/is-electron/index.js");
/**
 * The electron specific environment.
 */
var ElectronEnv = /** @class */ (function () {
    function ElectronEnv() {
        /**
         * Environment variable that can be accessed on the `process` to check if running in electron or not.
         */
        this.THEIA_ELECTRON_VERSION = 'THEIA_ELECTRON_VERSION';
    }
    /**
     * `true` if running in electron. Otherwise, `false`.
     *
     * Can be called from both the `main` and the render process. Also works for forked cluster workers.
     */
    ElectronEnv.prototype.is = function () {
        return isElectron();
    };
    /**
     * `true` if running in Electron in development mode. Otherwise, `false`.
     *
     * Cannot be used from the browser. From the browser, it is always `false`.
     */
    ElectronEnv.prototype.isDevMode = function () {
        return this.is()
            && typeof process !== 'undefined'
            // `defaultApp` does not exist on the Node.js API, but on electron (`electron.d.ts`).
            && (process.defaultApp || /node_modules[/]electron[/]/.test(process.execPath)); // eslint-disable-line @typescript-eslint/no-explicit-any
    };
    /**
     * Creates and return with a new environment object which always contains the `ELECTRON_RUN_AS_NODE: 1` property pair.
     * This should be used to `spawn` and `fork` a new Node.js process from the Node.js shipped with Electron. Otherwise, a new Electron
     * process will be spawned which [has side-effects](https://github.com/eclipse-theia/theia/issues/5385).
     *
     * If called from the backend and the `env` argument is not defined, it falls back to `process.env` such as Node.js behaves
     * with the [`SpawnOptions`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options).
     * If `env` is defined, it will be shallow-copied.
     *
     * Calling this function from the frontend does not make any sense, hence throw an error.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ElectronEnv.prototype.runAsNodeEnv = function (env) {
        if (typeof process === 'undefined') {
            throw new Error("'process' cannot be undefined.");
        }
        return __assign(__assign({}, (env === undefined ? process.env : env)), { ELECTRON_RUN_AS_NODE: 1 });
    };
    return ElectronEnv;
}());
var electron = new ElectronEnv();
var environment = { electron: electron };
exports.environment = environment;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/application-error.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/application-error.js ***!
  \*************************************************************************************************/
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
exports.ApplicationError = void 0;
var ApplicationError;
(function (ApplicationError) {
    var codes = [];
    function declare(code, factory) {
        if (codes.indexOf(code) !== -1) {
            throw new Error("An application error for '" + code + "' code is already declared");
        }
        var constructorOpt = Object.assign(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new Impl(code, factory.apply(void 0, __spread(args)), constructorOpt);
        }, {
            code: code,
            is: function (arg) {
                return arg instanceof Impl && arg.code === code;
            }
        });
        return constructorOpt;
    }
    ApplicationError.declare = declare;
    function is(arg) {
        return arg instanceof Impl;
    }
    ApplicationError.is = is;
    function fromJson(code, raw) {
        return new Impl(code, raw);
    }
    ApplicationError.fromJson = fromJson;
    var Impl = /** @class */ (function (_super) {
        __extends(Impl, _super);
        function Impl(code, raw, constructorOpt) {
            var _this = _super.call(this, raw.message) || this;
            _this.code = code;
            _this.data = raw.data;
            Object.setPrototypeOf(_this, Impl.prototype);
            if (raw.stack) {
                _this.stack = raw.stack;
            }
            else if (Error.captureStackTrace && constructorOpt) {
                Error.captureStackTrace(_this, constructorOpt);
            }
            return _this;
        }
        Impl.prototype.toJson = function () {
            var _a = this, message = _a.message, data = _a.data, stack = _a.stack;
            return { message: message, data: data, stack: stack };
        };
        return Impl;
    }(Error));
})(ApplicationError = exports.ApplicationError || (exports.ApplicationError = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/cancellation.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/cancellation.js ***!
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation and others. All rights reserved.
 *  Licensed under the MIT License. See https://github.com/Microsoft/vscode/blob/master/LICENSE.txt for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCancelled = exports.isCancelled = exports.cancelled = exports.CancellationTokenSource = exports.CancellationToken = void 0;
var event_1 = __webpack_require__(/*! ./event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var shortcutEvent = Object.freeze(Object.assign(function (callback, context) {
    var handle = setTimeout(callback.bind(context), 0);
    return { dispose: function () { clearTimeout(handle); } };
}, { maxListeners: 0 }));
var CancellationToken;
(function (CancellationToken) {
    CancellationToken.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: event_1.Event.None
    });
    CancellationToken.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutEvent
    });
})(CancellationToken = exports.CancellationToken || (exports.CancellationToken = {}));
var MutableToken = /** @class */ (function () {
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
        get: function () {
            return this._isCancelled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MutableToken.prototype, "onCancellationRequested", {
        get: function () {
            if (this._isCancelled) {
                return shortcutEvent;
            }
            if (!this._emitter) {
                this._emitter = new event_1.Emitter();
            }
            return this._emitter.event;
        },
        enumerable: false,
        configurable: true
    });
    return MutableToken;
}());
var CancellationTokenSource = /** @class */ (function () {
    function CancellationTokenSource() {
    }
    Object.defineProperty(CancellationTokenSource.prototype, "token", {
        get: function () {
            if (!this._token) {
                // be lazy and create the token only when
                // actually needed
                this._token = new MutableToken();
            }
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    CancellationTokenSource.prototype.cancel = function () {
        if (!this._token) {
            // save an object by returning the default
            // cancelled token when cancellation happens
            // before someone asks for the token
            this._token = CancellationToken.Cancelled;
        }
        else if (this._token !== CancellationToken.Cancelled) {
            this._token.cancel();
        }
    };
    CancellationTokenSource.prototype.dispose = function () {
        this.cancel();
    };
    return CancellationTokenSource;
}());
exports.CancellationTokenSource = CancellationTokenSource;
var cancelledMessage = 'Cancelled';
function cancelled() {
    return new Error(cancelledMessage);
}
exports.cancelled = cancelled;
function isCancelled(err) {
    return !!err && err.message === cancelledMessage;
}
exports.isCancelled = isCancelled;
function checkCancelled(token) {
    if (!!token && token.isCancellationRequested) {
        throw cancelled();
    }
}
exports.checkCancelled = checkCancelled;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/command.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/command.js ***!
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
exports.CommandRegistry = exports.CommandService = exports.commandServicePath = exports.CommandContribution = exports.Command = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! ./event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! ./disposable */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/disposable.js");
var contribution_provider_1 = __webpack_require__(/*! ./contribution-provider */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/contribution-provider.js");
var Command;
(function (Command) {
    /* Determine whether object is a Command */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(arg) {
        return !!arg && arg === Object(arg) && 'id' in arg;
    }
    Command.is = is;
    /** Comparator function for when sorting commands */
    function compareCommands(a, b) {
        if (a.label && b.label) {
            var aCommand = (a.category ? a.category + ": " + a.label : a.label).toLowerCase();
            var bCommand = (b.category ? b.category + ": " + b.label : b.label).toLowerCase();
            return (aCommand).localeCompare(bCommand);
        }
        else {
            return 0;
        }
    }
    Command.compareCommands = compareCommands;
    /**
     * Determine if two commands are equal.
     *
     * @param a the first command for comparison.
     * @param b the second command for comparison.
     */
    function equals(a, b) {
        return (a.id === b.id &&
            a.label === b.label &&
            a.iconClass === b.iconClass &&
            a.category === b.category);
    }
    Command.equals = equals;
})(Command = exports.Command || (exports.Command = {}));
exports.CommandContribution = Symbol('CommandContribution');
exports.commandServicePath = '/services/commands';
exports.CommandService = Symbol('CommandService');
/**
 * The command registry manages commands and handlers.
 */
var CommandRegistry = /** @class */ (function () {
    function CommandRegistry(contributionProvider) {
        this.contributionProvider = contributionProvider;
        this._commands = {};
        this._handlers = {};
        this.toUnregisterCommands = new Map();
        // List of recently used commands.
        this._recent = [];
        this.onWillExecuteCommandEmitter = new event_1.Emitter();
        this.onWillExecuteCommand = this.onWillExecuteCommandEmitter.event;
        this.onDidExecuteCommandEmitter = new event_1.Emitter();
        this.onDidExecuteCommand = this.onDidExecuteCommandEmitter.event;
    }
    CommandRegistry.prototype.onStart = function () {
        var e_1, _a;
        var contributions = this.contributionProvider.getContributions();
        try {
            for (var contributions_1 = __values(contributions), contributions_1_1 = contributions_1.next(); !contributions_1_1.done; contributions_1_1 = contributions_1.next()) {
                var contrib = contributions_1_1.value;
                contrib.registerCommands(this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (contributions_1_1 && !contributions_1_1.done && (_a = contributions_1.return)) _a.call(contributions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Register the given command and handler if present.
     *
     * Throw if a command is already registered for the given command identifier.
     */
    CommandRegistry.prototype.registerCommand = function (command, handler) {
        var _this = this;
        if (this._commands[command.id]) {
            console.warn("A command " + command.id + " is already registered.");
            return disposable_1.Disposable.NULL;
        }
        var toDispose = new disposable_1.DisposableCollection(this.doRegisterCommand(command));
        if (handler) {
            toDispose.push(this.registerHandler(command.id, handler));
        }
        this.toUnregisterCommands.set(command.id, toDispose);
        toDispose.push(disposable_1.Disposable.create(function () { return _this.toUnregisterCommands.delete(command.id); }));
        return toDispose;
    };
    CommandRegistry.prototype.doRegisterCommand = function (command) {
        var _this = this;
        this._commands[command.id] = command;
        return {
            dispose: function () {
                delete _this._commands[command.id];
            }
        };
    };
    CommandRegistry.prototype.unregisterCommand = function (commandOrId) {
        var id = Command.is(commandOrId) ? commandOrId.id : commandOrId;
        var toUnregister = this.toUnregisterCommands.get(id);
        if (toUnregister) {
            toUnregister.dispose();
        }
    };
    /**
     * Register the given handler for the given command identifier.
     *
     * If there is already a handler for the given command
     * then the given handler is registered as more specific, and
     * has higher priority during enablement, visibility and toggle state evaluations.
     */
    CommandRegistry.prototype.registerHandler = function (commandId, handler) {
        var handlers = this._handlers[commandId];
        if (!handlers) {
            this._handlers[commandId] = handlers = [];
        }
        handlers.unshift(handler);
        return {
            dispose: function () {
                var idx = handlers.indexOf(handler);
                if (idx >= 0) {
                    handlers.splice(idx, 1);
                }
            }
        };
    };
    /**
     * Test whether there is an active handler for the given command.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CommandRegistry.prototype.isEnabled = function (command) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return typeof this.getActiveHandler.apply(this, __spread([command], args)) !== 'undefined';
    };
    /**
     * Test whether there is a visible handler for the given command.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CommandRegistry.prototype.isVisible = function (command) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return typeof this.getVisibleHandler.apply(this, __spread([command], args)) !== 'undefined';
    };
    /**
     * Test whether there is a toggled handler for the given command.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CommandRegistry.prototype.isToggled = function (command) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return typeof this.getToggledHandler.apply(this, __spread([command], args)) !== 'undefined';
    };
    /**
     * Execute the active handler for the given command and arguments.
     *
     * Reject if a command cannot be executed.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CommandRegistry.prototype.executeCommand = function (commandId) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var handler, result, argsMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handler = this.getActiveHandler.apply(this, __spread([commandId], args));
                        if (!handler) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fireWillExecuteCommand(commandId, args)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, handler.execute.apply(handler, __spread(args))];
                    case 2:
                        result = _a.sent();
                        this.onDidExecuteCommandEmitter.fire({ commandId: commandId, args: args });
                        return [2 /*return*/, result];
                    case 3:
                        argsMessage = args && args.length > 0 ? " (args: " + JSON.stringify(args) + ")" : '';
                        // eslint-disable-next-line max-len
                        throw Object.assign(new Error("The command '" + commandId + "' cannot be executed. There are no active handlers available for the command." + argsMessage), { code: 'NO_ACTIVE_HANDLER' });
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CommandRegistry.prototype.fireWillExecuteCommand = function (commandId, args) {
        if (args === void 0) { args = []; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillExecuteCommandEmitter, { commandId: commandId, args: args }, 30000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get a visible handler for the given command or `undefined`.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CommandRegistry.prototype.getVisibleHandler = function (commandId) {
        var e_2, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var handlers = this._handlers[commandId];
        if (handlers) {
            try {
                for (var handlers_1 = __values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
                    var handler = handlers_1_1.value;
                    try {
                        if (!handler.isVisible || handler.isVisible.apply(handler, __spread(args))) {
                            return handler;
                        }
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (handlers_1_1 && !handlers_1_1.done && (_a = handlers_1.return)) _a.call(handlers_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return undefined;
    };
    /**
     * Get an active handler for the given command or `undefined`.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CommandRegistry.prototype.getActiveHandler = function (commandId) {
        var e_3, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var handlers = this._handlers[commandId];
        if (handlers) {
            try {
                for (var handlers_2 = __values(handlers), handlers_2_1 = handlers_2.next(); !handlers_2_1.done; handlers_2_1 = handlers_2.next()) {
                    var handler = handlers_2_1.value;
                    try {
                        if (!handler.isEnabled || handler.isEnabled.apply(handler, __spread(args))) {
                            return handler;
                        }
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (handlers_2_1 && !handlers_2_1.done && (_a = handlers_2.return)) _a.call(handlers_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return undefined;
    };
    /**
     * Get a toggled handler for the given command or `undefined`.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CommandRegistry.prototype.getToggledHandler = function (commandId) {
        var e_4, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var handlers = this._handlers[commandId];
        if (handlers) {
            try {
                for (var handlers_3 = __values(handlers), handlers_3_1 = handlers_3.next(); !handlers_3_1.done; handlers_3_1 = handlers_3.next()) {
                    var handler = handlers_3_1.value;
                    try {
                        if (handler.isToggled && handler.isToggled.apply(handler, __spread(args))) {
                            return handler;
                        }
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (handlers_3_1 && !handlers_3_1.done && (_a = handlers_3.return)) _a.call(handlers_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return undefined;
    };
    /**
     * Returns with all handlers for the given command. If the command does not have any handlers,
     * or the command is not registered, returns an empty array.
     */
    CommandRegistry.prototype.getAllHandlers = function (commandId) {
        var handlers = this._handlers[commandId];
        return handlers ? handlers.slice() : [];
    };
    Object.defineProperty(CommandRegistry.prototype, "commands", {
        /**
         * Get all registered commands.
         */
        get: function () {
            var e_5, _a;
            var commands = [];
            try {
                for (var _b = __values(this.commandIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var id = _c.value;
                    var cmd = this.getCommand(id);
                    if (cmd) {
                        commands.push(cmd);
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
            return commands;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get a command for the given command identifier.
     */
    CommandRegistry.prototype.getCommand = function (id) {
        return this._commands[id];
    };
    Object.defineProperty(CommandRegistry.prototype, "commandIds", {
        /**
         * Get all registered commands identifiers.
         */
        get: function () {
            return Object.keys(this._commands);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommandRegistry.prototype, "recent", {
        /**
         * Get the list of recently used commands.
         */
        get: function () {
            return this._recent;
        },
        /**
         * Set the list of recently used commands.
         * @param commands the list of recently used commands.
         */
        set: function (commands) {
            this._recent = commands;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds a command to recently used list.
     * Prioritizes commands that were recently executed to be most recent.
     *
     * @param recent a recent command, or array of recent commands.
     */
    CommandRegistry.prototype.addRecentCommand = function (recent) {
        var _this = this;
        if (Array.isArray(recent)) {
            recent.forEach(function (command) { return _this.addRecentCommand(command); });
        }
        else {
            // Determine if the command currently exists in the recently used list.
            var index = this._recent.findIndex(function (command) { return Command.equals(recent, command); });
            // If the command exists, remove it from the array so it can later be placed at the top.
            if (index >= 0) {
                this._recent.splice(index, 1);
            }
            // Add the recent command to the beginning of the array (most recent).
            this._recent.unshift(recent);
        }
    };
    /**
     * Clear the list of recently used commands.
     */
    CommandRegistry.prototype.clearCommandHistory = function () {
        this.recent = [];
    };
    CommandRegistry = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(contribution_provider_1.ContributionProvider)), __param(0, inversify_1.named(exports.CommandContribution)),
        __metadata("design:paramtypes", [Object])
    ], CommandRegistry);
    return CommandRegistry;
}());
exports.CommandRegistry = CommandRegistry;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/contribution-provider.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/contribution-provider.js ***!
  \*****************************************************************************************************/
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
exports.bindContributionProvider = exports.Bindable = exports.ContributionProvider = void 0;
exports.ContributionProvider = Symbol('ContributionProvider');
var ContainerBasedContributionProvider = /** @class */ (function () {
    function ContainerBasedContributionProvider(serviceIdentifier, container) {
        this.serviceIdentifier = serviceIdentifier;
        this.container = container;
    }
    ContainerBasedContributionProvider.prototype.getContributions = function (recursive) {
        if (this.services === undefined) {
            var currentServices = [];
            var currentContainer = this.container;
            // eslint-disable-next-line no-null/no-null
            while (currentContainer !== null) {
                if (currentContainer.isBound(this.serviceIdentifier)) {
                    try {
                        currentServices.push.apply(currentServices, __spread(currentContainer.getAll(this.serviceIdentifier)));
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
                // eslint-disable-next-line no-null/no-null
                currentContainer = recursive === true ? currentContainer.parent : null;
            }
            this.services = currentServices;
        }
        return this.services;
    };
    return ContainerBasedContributionProvider;
}());
var Bindable;
(function (Bindable) {
    function isContainer(arg) {
        return typeof arg !== 'function'
            // https://github.com/eclipse-theia/theia/issues/3204#issue-371029654
            // In InversifyJS `4.14.0` containers no longer have a property `guid`.
            && ('guid' in arg || 'parent' in arg);
    }
    Bindable.isContainer = isContainer;
})(Bindable = exports.Bindable || (exports.Bindable = {}));
function bindContributionProvider(bindable, id) {
    var bindingToSyntax = (Bindable.isContainer(bindable) ? bindable.bind(exports.ContributionProvider) : bindable(exports.ContributionProvider));
    bindingToSyntax
        .toDynamicValue(function (ctx) { return new ContainerBasedContributionProvider(id, ctx.container); })
        .inSingletonScope().whenTargetNamed(id);
}
exports.bindContributionProvider = bindContributionProvider;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/disposable.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/disposable.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DisposableCollection = exports.Disposable = void 0;
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
var event_1 = __webpack_require__(/*! ./event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js");
var Disposable;
(function (Disposable) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'dispose' in arg && typeof arg['dispose'] === 'function';
    }
    Disposable.is = is;
    function create(func) {
        return {
            dispose: func
        };
    }
    Disposable.create = create;
    Disposable.NULL = create(function () { });
})(Disposable = exports.Disposable || (exports.Disposable = {}));
var DisposableCollection = /** @class */ (function () {
    function DisposableCollection() {
        var _this = this;
        var toDispose = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            toDispose[_i] = arguments[_i];
        }
        this.disposables = [];
        this.onDisposeEmitter = new event_1.Emitter();
        this.disposingElements = false;
        toDispose.forEach(function (d) { return _this.push(d); });
    }
    Object.defineProperty(DisposableCollection.prototype, "onDispose", {
        /**
         * This event is fired only once
         * on first dispose of not empty collection.
         */
        get: function () {
            return this.onDisposeEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    DisposableCollection.prototype.checkDisposed = function () {
        if (this.disposed && !this.disposingElements) {
            this.onDisposeEmitter.fire(undefined);
            this.onDisposeEmitter.dispose();
        }
    };
    Object.defineProperty(DisposableCollection.prototype, "disposed", {
        get: function () {
            return this.disposables.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    DisposableCollection.prototype.dispose = function () {
        if (this.disposed || this.disposingElements) {
            return;
        }
        this.disposingElements = true;
        while (!this.disposed) {
            try {
                this.disposables.pop().dispose();
            }
            catch (e) {
                console.error(e);
            }
        }
        this.disposingElements = false;
        this.checkDisposed();
    };
    DisposableCollection.prototype.push = function (disposable) {
        var _this = this;
        var disposables = this.disposables;
        disposables.push(disposable);
        var originalDispose = disposable.dispose.bind(disposable);
        var toRemove = Disposable.create(function () {
            var index = disposables.indexOf(disposable);
            if (index !== -1) {
                disposables.splice(index, 1);
            }
            _this.checkDisposed();
        });
        disposable.dispose = function () {
            toRemove.dispose();
            originalDispose();
        };
        return toRemove;
    };
    DisposableCollection.prototype.pushAll = function (disposables) {
        var _this = this;
        return disposables.map(function (disposable) {
            return _this.push(disposable);
        });
    };
    return DisposableCollection;
}());
exports.DisposableCollection = DisposableCollection;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js ***!
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
exports.WaitUntilEvent = exports.Emitter = exports.Event = void 0;
var Event;
(function (Event) {
    var _disposable = { dispose: function () { } };
    Event.None = Object.assign(function () { return _disposable; }, {
        get maxListeners() { return 0; },
        set maxListeners(maxListeners) { }
    });
    /**
     * Given an event and a `map` function, returns another event which maps each element
     * through the mapping function.
     */
    function map(event, mapFunc) {
        return Object.assign(function (listener, thisArgs, disposables) { return event(function (i) { return listener.call(thisArgs, mapFunc(i)); }, undefined, disposables); }, {
            maxListeners: 0,
        });
    }
    Event.map = map;
})(Event = exports.Event || (exports.Event = {}));
var CallbackList = /** @class */ (function () {
    function CallbackList() {
    }
    Object.defineProperty(CallbackList.prototype, "length", {
        get: function () {
            return this._callbacks && this._callbacks.length || 0;
        },
        enumerable: false,
        configurable: true
    });
    CallbackList.prototype.add = function (callback, context, bucket) {
        var _this = this;
        if (context === void 0) { context = undefined; }
        if (!this._callbacks) {
            this._callbacks = [];
            this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
            bucket.push({ dispose: function () { return _this.remove(callback, context); } });
        }
    };
    CallbackList.prototype.remove = function (callback, context) {
        if (context === void 0) { context = undefined; }
        if (!this._callbacks) {
            return;
        }
        var foundCallbackWithDifferentContext = false;
        for (var i = 0; i < this._callbacks.length; i++) {
            if (this._callbacks[i] === callback) {
                if (this._contexts[i] === context) {
                    // callback & context match => remove it
                    this._callbacks.splice(i, 1);
                    this._contexts.splice(i, 1);
                    return;
                }
                else {
                    foundCallbackWithDifferentContext = true;
                }
            }
        }
        if (foundCallbackWithDifferentContext) {
            throw new Error('When adding a listener with a context, you should remove it with the same context');
        }
    };
    // tslint:disable-next-line:typedef
    CallbackList.prototype[Symbol.iterator] = function () {
        if (!this._callbacks) {
            return [][Symbol.iterator]();
        }
        var callbacks = this._callbacks.slice(0);
        var contexts = this._contexts.slice(0);
        return callbacks.map(function (callback, i) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return callback.apply(contexts[i], args);
            };
        })[Symbol.iterator]();
    };
    CallbackList.prototype.invoke = function () {
        var e_1, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var ret = [];
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var callback = _c.value;
                try {
                    ret.push(callback.apply(void 0, __spread(args)));
                }
                catch (e) {
                    console.error(e);
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
}());
var Emitter = /** @class */ (function () {
    function Emitter(_options) {
        this._options = _options;
        this._disposed = false;
        this._leakWarnCountdown = 0;
    }
    Object.defineProperty(Emitter.prototype, "event", {
        /**
         * For the public to allow to subscribe
         * to events from this Emitter
         */
        get: function () {
            var _this = this;
            if (!this._event) {
                this._event = Object.assign(function (listener, thisArgs, disposables) {
                    if (!_this._callbacks) {
                        _this._callbacks = new CallbackList();
                    }
                    if (_this._options && _this._options.onFirstListenerAdd && _this._callbacks.isEmpty()) {
                        _this._options.onFirstListenerAdd(_this);
                    }
                    _this._callbacks.add(listener, thisArgs);
                    var removeMaxListenersCheck = _this.checkMaxListeners(_this._event.maxListeners);
                    var result = {
                        dispose: function () {
                            if (removeMaxListenersCheck) {
                                removeMaxListenersCheck();
                            }
                            result.dispose = Emitter._noop;
                            if (!_this._disposed) {
                                _this._callbacks.remove(listener, thisArgs);
                                result.dispose = Emitter._noop;
                                if (_this._options && _this._options.onLastListenerRemove && _this._callbacks.isEmpty()) {
                                    _this._options.onLastListenerRemove(_this);
                                }
                            }
                        }
                    };
                    if (Array.isArray(disposables)) {
                        disposables.push(result);
                    }
                    return result;
                }, {
                    maxListeners: Emitter.LEAK_WARNING_THRESHHOLD
                });
            }
            return this._event;
        },
        enumerable: false,
        configurable: true
    });
    Emitter.prototype.checkMaxListeners = function (maxListeners) {
        if (maxListeners === 0 || !this._callbacks) {
            return undefined;
        }
        var listenerCount = this._callbacks.length;
        if (listenerCount <= maxListeners) {
            return undefined;
        }
        var popStack = this.pushLeakingStack();
        this._leakWarnCountdown -= 1;
        if (this._leakWarnCountdown <= 0) {
            // only warn on first exceed and then every time the limit
            // is exceeded by 50% again
            this._leakWarnCountdown = maxListeners * 0.5;
            var topStack_1;
            var topCount_1 = 0;
            this._leakingStacks.forEach(function (stackCount, stack) {
                if (!topStack_1 || topCount_1 < stackCount) {
                    topStack_1 = stack;
                    topCount_1 = stackCount;
                }
            });
            // eslint-disable-next-line max-len
            console.warn("Possible Emitter memory leak detected. " + listenerCount + " listeners added. Use event.maxListeners to increase the limit (" + maxListeners + "). MOST frequent listener (" + topCount_1 + "):");
            console.warn(topStack_1);
        }
        return popStack;
    };
    Emitter.prototype.pushLeakingStack = function () {
        var _this = this;
        if (!this._leakingStacks) {
            this._leakingStacks = new Map();
        }
        var stack = new Error().stack.split('\n').slice(3).join('\n');
        var count = (this._leakingStacks.get(stack) || 0);
        this._leakingStacks.set(stack, count + 1);
        return function () { return _this.popLeakingStack(stack); };
    };
    Emitter.prototype.popLeakingStack = function (stack) {
        if (!this._leakingStacks) {
            return;
        }
        var count = (this._leakingStacks.get(stack) || 0);
        this._leakingStacks.set(stack, count - 1);
    };
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    Emitter.prototype.fire = function (event) {
        if (this._callbacks) {
            this._callbacks.invoke(event);
        }
    };
    /**
     * Process each listener one by one.
     * Return `false` to stop iterating over the listeners, `true` to continue.
     */
    Emitter.prototype.sequence = function (processor) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, listener, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this._callbacks) return [3 /*break*/, 8];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(this._callbacks), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        listener = _b.value;
                        return [4 /*yield*/, processor(listener)];
                    case 3:
                        if (!(_d.sent())) {
                            return [3 /*break*/, 5];
                        }
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Emitter.prototype.dispose = function () {
        if (this._leakingStacks) {
            this._leakingStacks.clear();
            this._leakingStacks = undefined;
        }
        if (this._callbacks) {
            this._callbacks.dispose();
            this._callbacks = undefined;
        }
        this._disposed = true;
    };
    Emitter.LEAK_WARNING_THRESHHOLD = 175;
    Emitter._noop = function () { };
    return Emitter;
}());
exports.Emitter = Emitter;
var WaitUntilEvent;
(function (WaitUntilEvent) {
    function fire(emitter, event, timeout) {
        if (timeout === void 0) { timeout = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            var waitables, asyncEvent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        waitables = [];
                        asyncEvent = Object.assign(event, {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            waitUntil: function (thenable) {
                                if (Object.isFrozen(waitables)) {
                                    throw new Error('waitUntil cannot be called asynchronously.');
                                }
                                waitables.push(thenable);
                            }
                        });
                        try {
                            emitter.fire(asyncEvent);
                            // Asynchronous calls to `waitUntil` should fail.
                            Object.freeze(waitables);
                        }
                        finally {
                            delete asyncEvent['waitUntil'];
                        }
                        if (!waitables.length) {
                            return [2 /*return*/];
                        }
                        if (!(timeout !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.race([Promise.all(waitables), new Promise(function (resolve) { return setTimeout(resolve, timeout); })])];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Promise.all(waitables)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    WaitUntilEvent.fire = fire;
})(WaitUntilEvent = exports.WaitUntilEvent || (exports.WaitUntilEvent = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/index.js ***!
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
exports.environment = void 0;
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/types.js"), exports);
__exportStar(__webpack_require__(/*! ./disposable */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/disposable.js"), exports);
__exportStar(__webpack_require__(/*! ./reference */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/reference.js"), exports);
__exportStar(__webpack_require__(/*! ./event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js"), exports);
__exportStar(__webpack_require__(/*! ./cancellation */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/cancellation.js"), exports);
__exportStar(__webpack_require__(/*! ./command */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/command.js"), exports);
__exportStar(__webpack_require__(/*! ./menu */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/menu.js"), exports);
__exportStar(__webpack_require__(/*! ./selection-service */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/selection-service.js"), exports);
__exportStar(__webpack_require__(/*! ./objects */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/objects.js"), exports);
__exportStar(__webpack_require__(/*! ./os */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/os.js"), exports);
__exportStar(__webpack_require__(/*! ./resource */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/resource.js"), exports);
__exportStar(__webpack_require__(/*! ./contribution-provider */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/contribution-provider.js"), exports);
__exportStar(__webpack_require__(/*! ./path */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/path.js"), exports);
__exportStar(__webpack_require__(/*! ./logger */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/logger.js"), exports);
__exportStar(__webpack_require__(/*! ./messaging */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/index.js"), exports);
__exportStar(__webpack_require__(/*! ./message-service */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/message-service.js"), exports);
__exportStar(__webpack_require__(/*! ./message-service-protocol */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/message-service-protocol.js"), exports);
__exportStar(__webpack_require__(/*! ./progress-service */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/progress-service.js"), exports);
__exportStar(__webpack_require__(/*! ./progress-service-protocol */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/progress-service-protocol.js"), exports);
__exportStar(__webpack_require__(/*! ./selection */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/selection.js"), exports);
__exportStar(__webpack_require__(/*! ./strings */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/strings.js"), exports);
__exportStar(__webpack_require__(/*! ./application-error */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/application-error.js"), exports);
__exportStar(__webpack_require__(/*! ./lsp-types */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/lsp-types.js"), exports);
var environment_1 = __webpack_require__(/*! @theia/application-package/lib/environment */ "./node_modules/@theia/filesystem/node_modules/@theia/application-package/lib/environment.js");
Object.defineProperty(exports, "environment", { enumerable: true, get: function () { return environment_1.environment; } });


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/logger-protocol.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/logger-protocol.js ***!
  \***********************************************************************************************/
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = exports.LogLevel = exports.rootLoggerName = exports.DispatchingLoggerClient = exports.ILoggerClient = exports.loggerPath = exports.ILoggerServer = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
exports.ILoggerServer = Symbol('ILoggerServer');
exports.loggerPath = '/services/logger';
exports.ILoggerClient = Symbol('ILoggerClient');
var DispatchingLoggerClient = /** @class */ (function () {
    function DispatchingLoggerClient() {
        this.clients = new Set();
    }
    DispatchingLoggerClient.prototype.onLogLevelChanged = function (event) {
        this.clients.forEach(function (client) { return client.onLogLevelChanged(event); });
    };
    DispatchingLoggerClient = __decorate([
        inversify_1.injectable()
    ], DispatchingLoggerClient);
    return DispatchingLoggerClient;
}());
exports.DispatchingLoggerClient = DispatchingLoggerClient;
exports.rootLoggerName = 'root';
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["FATAL"] = 60] = "FATAL";
    LogLevel[LogLevel["ERROR"] = 50] = "ERROR";
    LogLevel[LogLevel["WARN"] = 40] = "WARN";
    LogLevel[LogLevel["INFO"] = 30] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 20] = "DEBUG";
    LogLevel[LogLevel["TRACE"] = 10] = "TRACE";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
(function (LogLevel) {
    LogLevel.strings = new Map([
        [LogLevel.FATAL, 'fatal'],
        [LogLevel.ERROR, 'error'],
        [LogLevel.WARN, 'warn'],
        [LogLevel.INFO, 'info'],
        [LogLevel.DEBUG, 'debug'],
        [LogLevel.TRACE, 'trace']
    ]);
    function toString(level) {
        return LogLevel.strings.get(level);
    }
    LogLevel.toString = toString;
    function fromString(levelStr) {
        var e_1, _a;
        try {
            for (var strings_1 = __values(LogLevel.strings), strings_1_1 = strings_1.next(); !strings_1_1.done; strings_1_1 = strings_1.next()) {
                var pair = strings_1_1.value;
                if (pair[1] === levelStr) {
                    return pair[0];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (strings_1_1 && !strings_1_1.done && (_a = strings_1.return)) _a.call(strings_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    }
    LogLevel.fromString = fromString;
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/* eslint-disable @typescript-eslint/no-explicit-any */
var ConsoleLogger;
(function (ConsoleLogger) {
    var originalConsoleLog = console.log;
    var consoles = new Map([
        [LogLevel.FATAL, console.error],
        [LogLevel.ERROR, console.error],
        [LogLevel.WARN, console.warn],
        [LogLevel.INFO, console.info],
        [LogLevel.DEBUG, console.debug],
        [LogLevel.TRACE, console.trace]
    ]);
    function reset() {
        console.error = consoles.get(LogLevel.ERROR);
        console.warn = consoles.get(LogLevel.WARN);
        console.info = consoles.get(LogLevel.INFO);
        console.debug = consoles.get(LogLevel.DEBUG);
        console.trace = consoles.get(LogLevel.TRACE);
        console.log = originalConsoleLog;
    }
    ConsoleLogger.reset = reset;
    function log(name, logLevel, message, params) {
        var console = consoles.get(logLevel) || originalConsoleLog;
        var severity = (LogLevel.strings.get(logLevel) || 'unknown').toUpperCase();
        console.apply(void 0, __spread([name + " " + severity + " " + message], params));
    }
    ConsoleLogger.log = log;
})(ConsoleLogger = exports.ConsoleLogger || (exports.ConsoleLogger = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/logger-watcher.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/logger-watcher.js ***!
  \**********************************************************************************************/
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
exports.LoggerWatcher = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! ./event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js");
var LoggerWatcher = /** @class */ (function () {
    function LoggerWatcher() {
        this.onLogLevelChangedEmitter = new event_1.Emitter();
    }
    LoggerWatcher.prototype.getLoggerClient = function () {
        var emitter = this.onLogLevelChangedEmitter;
        return {
            onLogLevelChanged: function (event) {
                emitter.fire(event);
            }
        };
    };
    Object.defineProperty(LoggerWatcher.prototype, "onLogLevelChanged", {
        get: function () {
            return this.onLogLevelChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    // FIXME: get rid of it, backend services should as well set a client on the server
    LoggerWatcher.prototype.fireLogLevelChanged = function (event) {
        this.onLogLevelChangedEmitter.fire(event);
    };
    LoggerWatcher = __decorate([
        inversify_1.injectable()
    ], LoggerWatcher);
    return LoggerWatcher;
}());
exports.LoggerWatcher = LoggerWatcher;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/logger.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/logger.js ***!
  \**************************************************************************************/
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.Logger = exports.ILogger = exports.LoggerName = exports.LoggerFactory = exports.setRootLogger = exports.unsetRootLogger = exports.logger = exports.rootLoggerName = exports.LogLevel = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var logger_watcher_1 = __webpack_require__(/*! ./logger-watcher */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/logger-watcher.js");
var logger_protocol_1 = __webpack_require__(/*! ./logger-protocol */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/logger-protocol.js");
Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function () { return logger_protocol_1.LogLevel; } });
Object.defineProperty(exports, "rootLoggerName", { enumerable: true, get: function () { return logger_protocol_1.rootLoggerName; } });
/**
 * Counterpart of the `#setRootLogger(ILogger)`. Restores the `console.xxx` bindings to the original one.
 * Invoking has no side-effect if `setRootLogger` was not called before. Multiple function invocation has
 * no side-effect either.
 */
function unsetRootLogger() {
    if (exports.logger !== undefined) {
        logger_protocol_1.ConsoleLogger.reset();
        exports.logger = undefined;
    }
}
exports.unsetRootLogger = unsetRootLogger;
function setRootLogger(aLogger) {
    exports.logger = aLogger;
    var log = function (logLevel, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        return exports.logger.log.apply(exports.logger, __spread([logLevel, message], optionalParams));
    };
    console.error = log.bind(undefined, logger_protocol_1.LogLevel.ERROR);
    console.warn = log.bind(undefined, logger_protocol_1.LogLevel.WARN);
    console.info = log.bind(undefined, logger_protocol_1.LogLevel.INFO);
    console.debug = log.bind(undefined, logger_protocol_1.LogLevel.DEBUG);
    console.trace = log.bind(undefined, logger_protocol_1.LogLevel.TRACE);
    console.log = log.bind(undefined, logger_protocol_1.LogLevel.INFO);
}
exports.setRootLogger = setRootLogger;
exports.LoggerFactory = Symbol('LoggerFactory');
exports.LoggerName = Symbol('LoggerName');
exports.ILogger = Symbol('ILogger');
var Logger = /** @class */ (function () {
    /**
     * Build a new Logger.
     */
    function Logger(server, loggerWatcher, factory, name) {
        var _this = this;
        this.server = server;
        this.loggerWatcher = loggerWatcher;
        this.factory = factory;
        this.name = name;
        if (name !== logger_protocol_1.rootLoggerName) {
            /* Creating a child logger.  */
            this.created = server.child(name);
        }
        else {
            /* Creating the root logger (it already exists at startup).  */
            this.created = Promise.resolve();
        }
        /* Fetch the log level so it's cached in the frontend.  */
        this._logLevel = this.created.then(function (_) { return _this.server.getLogLevel(name); });
        /* Update the log level if it changes in the backend. */
        loggerWatcher.onLogLevelChanged(function (event) {
            _this.created.then(function () {
                if (event.loggerName === name) {
                    _this._logLevel = Promise.resolve(event.newLogLevel);
                }
            });
        });
    }
    Logger.prototype.setLogLevel = function (logLevel) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.created.then(function () {
                _this._logLevel.then(function (oldLevel) {
                    _this.server.setLogLevel(_this.name, logLevel).then(function () {
                        _this._logLevel = Promise.resolve(logLevel);
                        resolve();
                    });
                });
            });
        });
    };
    Logger.prototype.getLogLevel = function () {
        return this._logLevel;
    };
    Logger.prototype.isEnabled = function (logLevel) {
        return this._logLevel.then(function (level) {
            return logLevel >= level;
        });
    };
    Logger.prototype.ifEnabled = function (logLevel) {
        var _this = this;
        return new Promise(function (resolve) {
            return _this.isEnabled(logLevel).then(function (enabled) {
                if (enabled) {
                    resolve();
                }
            });
        });
    };
    Logger.prototype.log = function (logLevel, arg2) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        return this.getLog(logLevel).then(function (log) {
            if (typeof arg2 === 'function') {
                var loggable = arg2;
                loggable(log);
            }
            else if (arg2) {
                log.apply(void 0, __spread([arg2], params));
            }
        });
    };
    Logger.prototype.getLog = function (logLevel) {
        var _this = this;
        return this.ifEnabled(logLevel).then(function () {
            return _this.created.then(function () {
                return function (message) {
                    var params = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        params[_i - 1] = arguments[_i];
                    }
                    return _this.server.log(_this.name, logLevel, _this.format(message), params.map(function (p) { return _this.format(p); }));
                };
            });
        });
    };
    Logger.prototype.format = function (value) {
        if (value instanceof Error) {
            return value.stack || value.toString();
        }
        return value;
    };
    Logger.prototype.isTrace = function () {
        return this.isEnabled(logger_protocol_1.LogLevel.TRACE);
    };
    Logger.prototype.ifTrace = function () {
        return this.ifEnabled(logger_protocol_1.LogLevel.TRACE);
    };
    Logger.prototype.trace = function (arg) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return this.log.apply(this, __spread([logger_protocol_1.LogLevel.TRACE, arg], params));
    };
    Logger.prototype.isDebug = function () {
        return this.isEnabled(logger_protocol_1.LogLevel.DEBUG);
    };
    Logger.prototype.ifDebug = function () {
        return this.ifEnabled(logger_protocol_1.LogLevel.DEBUG);
    };
    Logger.prototype.debug = function (arg) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return this.log.apply(this, __spread([logger_protocol_1.LogLevel.DEBUG, arg], params));
    };
    Logger.prototype.isInfo = function () {
        return this.isEnabled(logger_protocol_1.LogLevel.INFO);
    };
    Logger.prototype.ifInfo = function () {
        return this.ifEnabled(logger_protocol_1.LogLevel.INFO);
    };
    Logger.prototype.info = function (arg) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return this.log.apply(this, __spread([logger_protocol_1.LogLevel.INFO, arg], params));
    };
    Logger.prototype.isWarn = function () {
        return this.isEnabled(logger_protocol_1.LogLevel.WARN);
    };
    Logger.prototype.ifWarn = function () {
        return this.ifEnabled(logger_protocol_1.LogLevel.WARN);
    };
    Logger.prototype.warn = function (arg) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return this.log.apply(this, __spread([logger_protocol_1.LogLevel.WARN, arg], params));
    };
    Logger.prototype.isError = function () {
        return this.isEnabled(logger_protocol_1.LogLevel.ERROR);
    };
    Logger.prototype.ifError = function () {
        return this.ifEnabled(logger_protocol_1.LogLevel.ERROR);
    };
    Logger.prototype.error = function (arg) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return this.log.apply(this, __spread([logger_protocol_1.LogLevel.ERROR, arg], params));
    };
    Logger.prototype.isFatal = function () {
        return this.isEnabled(logger_protocol_1.LogLevel.FATAL);
    };
    Logger.prototype.ifFatal = function () {
        return this.ifEnabled(logger_protocol_1.LogLevel.FATAL);
    };
    Logger.prototype.fatal = function (arg) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return this.log.apply(this, __spread([logger_protocol_1.LogLevel.FATAL, arg], params));
    };
    Logger.prototype.child = function (name) {
        return this.factory(name);
    };
    Logger = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(logger_protocol_1.ILoggerServer)),
        __param(1, inversify_1.inject(logger_watcher_1.LoggerWatcher)),
        __param(2, inversify_1.inject(exports.LoggerFactory)),
        __param(3, inversify_1.inject(exports.LoggerName)),
        __metadata("design:paramtypes", [Object, logger_watcher_1.LoggerWatcher, Function, String])
    ], Logger);
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/lsp-types.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/lsp-types.js ***!
  \*****************************************************************************************/
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
exports.TextDocumentContentChangeDelta = void 0;
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "../../node_modules/vscode-languageserver-types/lib/esm/main.js");
var TextDocumentContentChangeDelta;
(function (TextDocumentContentChangeDelta) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(arg) {
        return !!arg && typeof arg['text'] === 'string' && (typeof arg['rangeLength'] === 'number' || typeof arg['rangeLength'] === 'undefined') && vscode_languageserver_types_1.Range.is(arg['range']);
    }
    TextDocumentContentChangeDelta.is = is;
})(TextDocumentContentChangeDelta = exports.TextDocumentContentChangeDelta || (exports.TextDocumentContentChangeDelta = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/menu.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/menu.js ***!
  \************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMenuNode = exports.CompositeMenuNode = exports.MenuModelRegistry = exports.MenuContribution = exports.MAIN_MENU_BAR = exports.MenuAction = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var command_1 = __webpack_require__(/*! ./command */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/command.js");
var contribution_provider_1 = __webpack_require__(/*! ./contribution-provider */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/contribution-provider.js");
var MenuAction;
(function (MenuAction) {
    /* Determine whether object is a MenuAction */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(arg) {
        return !!arg && arg === Object(arg) && 'commandId' in arg;
    }
    MenuAction.is = is;
})(MenuAction = exports.MenuAction || (exports.MenuAction = {}));
exports.MAIN_MENU_BAR = ['menubar'];
exports.MenuContribution = Symbol('MenuContribution');
var MenuModelRegistry = /** @class */ (function () {
    function MenuModelRegistry(contributions, commands) {
        this.contributions = contributions;
        this.commands = commands;
        this.root = new CompositeMenuNode('');
    }
    MenuModelRegistry.prototype.onStart = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contrib = _c.value;
                contrib.registerMenus(this);
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
    MenuModelRegistry.prototype.registerMenuAction = function (menuPath, item) {
        var parent = this.findGroup(menuPath);
        var actionNode = new ActionMenuNode(item, this.commands);
        return parent.addNode(actionNode);
    };
    MenuModelRegistry.prototype.registerSubmenu = function (menuPath, label, options) {
        if (menuPath.length === 0) {
            throw new Error('The sub menu path cannot be empty.');
        }
        var index = menuPath.length - 1;
        var menuId = menuPath[index];
        var groupPath = index === 0 ? [] : menuPath.slice(0, index);
        var parent = this.findGroup(groupPath);
        var groupNode = this.findSubMenu(parent, menuId);
        if (!groupNode) {
            groupNode = new CompositeMenuNode(menuId, label, options);
            return parent.addNode(groupNode);
        }
        else {
            if (!groupNode.label) {
                groupNode.label = label;
            }
            else if (groupNode.label !== label) {
                throw new Error("The group '" + menuPath.join('/') + "' already has a different label.");
            }
            if (options) {
                if (!groupNode.iconClass) {
                    groupNode.iconClass = options.iconClass;
                }
                if (!groupNode.order) {
                    groupNode.order = options.order;
                }
            }
            return { dispose: function () { } };
        }
    };
    MenuModelRegistry.prototype.unregisterMenuAction = function (itemOrCommandOrId, menuPath) {
        var id = MenuAction.is(itemOrCommandOrId) ? itemOrCommandOrId.commandId
            : command_1.Command.is(itemOrCommandOrId) ? itemOrCommandOrId.id
                : itemOrCommandOrId;
        if (menuPath) {
            var parent_1 = this.findGroup(menuPath);
            parent_1.removeNode(id);
            return;
        }
        // Recurse all menus, removing any menus matching the id
        var recurse = function (root) {
            root.children.forEach(function (node) {
                if (node instanceof CompositeMenuNode) {
                    node.removeNode(id);
                    recurse(node);
                }
            });
        };
        recurse(this.root);
    };
    MenuModelRegistry.prototype.findGroup = function (menuPath) {
        var e_2, _a;
        var currentMenu = this.root;
        try {
            for (var menuPath_1 = __values(menuPath), menuPath_1_1 = menuPath_1.next(); !menuPath_1_1.done; menuPath_1_1 = menuPath_1.next()) {
                var segment = menuPath_1_1.value;
                currentMenu = this.findSubMenu(currentMenu, segment);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (menuPath_1_1 && !menuPath_1_1.done && (_a = menuPath_1.return)) _a.call(menuPath_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return currentMenu;
    };
    MenuModelRegistry.prototype.findSubMenu = function (current, menuId) {
        var sub = current.children.find(function (e) { return e.id === menuId; });
        if (sub instanceof CompositeMenuNode) {
            return sub;
        }
        if (sub) {
            throw new Error("'" + menuId + "' is not a menu group.");
        }
        var newSub = new CompositeMenuNode(menuId);
        current.addNode(newSub);
        return newSub;
    };
    MenuModelRegistry.prototype.getMenu = function (menuPath) {
        if (menuPath === void 0) { menuPath = []; }
        return this.findGroup(menuPath);
    };
    MenuModelRegistry = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(contribution_provider_1.ContributionProvider)), __param(0, inversify_1.named(exports.MenuContribution)),
        __param(1, inversify_1.inject(command_1.CommandRegistry)),
        __metadata("design:paramtypes", [Object, command_1.CommandRegistry])
    ], MenuModelRegistry);
    return MenuModelRegistry;
}());
exports.MenuModelRegistry = MenuModelRegistry;
var CompositeMenuNode = /** @class */ (function () {
    function CompositeMenuNode(id, label, options) {
        this.id = id;
        this.label = label;
        this._children = [];
        if (options) {
            this.iconClass = options.iconClass;
            this.order = options.order;
        }
    }
    Object.defineProperty(CompositeMenuNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    CompositeMenuNode.prototype.addNode = function (node) {
        var _this = this;
        this._children.push(node);
        this._children.sort(function (m1, m2) {
            // The navigation group is special as it will always be sorted to the top/beginning of a menu.
            if (CompositeMenuNode.isNavigationGroup(m1)) {
                return -1;
            }
            if (CompositeMenuNode.isNavigationGroup(m2)) {
                return 1;
            }
            if (m1.sortString < m2.sortString) {
                return -1;
            }
            else if (m1.sortString > m2.sortString) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return {
            dispose: function () {
                var idx = _this._children.indexOf(node);
                if (idx >= 0) {
                    _this._children.splice(idx, 1);
                }
            }
        };
    };
    CompositeMenuNode.prototype.removeNode = function (id) {
        var node = this._children.find(function (n) { return n.id === id; });
        if (node) {
            var idx = this._children.indexOf(node);
            if (idx >= 0) {
                this._children.splice(idx, 1);
            }
        }
    };
    Object.defineProperty(CompositeMenuNode.prototype, "sortString", {
        get: function () {
            return this.order || this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompositeMenuNode.prototype, "isSubmenu", {
        get: function () {
            return this.label !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    CompositeMenuNode.isNavigationGroup = function (node) {
        return node instanceof CompositeMenuNode && node.id === 'navigation';
    };
    return CompositeMenuNode;
}());
exports.CompositeMenuNode = CompositeMenuNode;
var ActionMenuNode = /** @class */ (function () {
    function ActionMenuNode(action, commands) {
        this.action = action;
        this.commands = commands;
        if (action.alt) {
            this.altNode = new ActionMenuNode({ commandId: action.alt }, commands);
        }
    }
    Object.defineProperty(ActionMenuNode.prototype, "id", {
        get: function () {
            return this.action.commandId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionMenuNode.prototype, "label", {
        get: function () {
            if (this.action.label) {
                return this.action.label;
            }
            var cmd = this.commands.getCommand(this.action.commandId);
            if (!cmd) {
                throw new Error("A command with id '" + this.action.commandId + "' does not exist.");
            }
            return cmd.label || cmd.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionMenuNode.prototype, "icon", {
        get: function () {
            if (this.action.icon) {
                return this.action.icon;
            }
            var command = this.commands.getCommand(this.action.commandId);
            return command && command.iconClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionMenuNode.prototype, "sortString", {
        get: function () {
            return this.action.order || this.label;
        },
        enumerable: false,
        configurable: true
    });
    return ActionMenuNode;
}());
exports.ActionMenuNode = ActionMenuNode;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/message-service-protocol.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/message-service-protocol.js ***!
  \********************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageClient = exports.ProgressMessage = exports.MessageType = exports.messageServicePath = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
exports.messageServicePath = '/services/messageService';
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Error"] = 1] = "Error";
    MessageType[MessageType["Warning"] = 2] = "Warning";
    MessageType[MessageType["Info"] = 3] = "Info";
    MessageType[MessageType["Log"] = 4] = "Log";
    MessageType[MessageType["Progress"] = 5] = "Progress";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ProgressMessage;
(function (ProgressMessage) {
    ProgressMessage.Cancel = 'Cancel';
    function isCancelable(message) {
        return !message.options
            || message.options.cancelable === undefined
            || message.options.cancelable === true;
    }
    ProgressMessage.isCancelable = isCancelable;
})(ProgressMessage = exports.ProgressMessage || (exports.ProgressMessage = {}));
var MessageClient = /** @class */ (function () {
    function MessageClient() {
    }
    /**
     * Show a message of the given type and possible actions to the user.
     * Resolve to a chosen action.
     * Never reject.
     *
     * To be implemented by an extension, e.g. by the messages extension.
     */
    MessageClient.prototype.showMessage = function (message) {
        console.info(message.text);
        return Promise.resolve(undefined);
    };
    /**
     * Show a progress message with possible actions to user.
     *
     * To be implemented by an extension, e.g. by the messages extension.
     */
    MessageClient.prototype.showProgress = function (progressId, message, cancellationToken) {
        console.info(message.text);
        return Promise.resolve(undefined);
    };
    /**
     * Update a previously created progress message.
     *
     * To be implemented by an extension, e.g. by the messages extension.
     */
    MessageClient.prototype.reportProgress = function (progressId, update, message, cancellationToken) {
        return Promise.resolve(undefined);
    };
    MessageClient = __decorate([
        inversify_1.injectable()
    ], MessageClient);
    return MessageClient;
}());
exports.MessageClient = MessageClient;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/message-service.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/message-service.js ***!
  \***********************************************************************************************/
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
exports.MessageService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var message_service_protocol_1 = __webpack_require__(/*! ./message-service-protocol */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/message-service-protocol.js");
var cancellation_1 = __webpack_require__(/*! ./cancellation */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/cancellation.js");
var MessageService = /** @class */ (function () {
    function MessageService(client) {
        this.client = client;
        this.progressIdPrefix = Math.random().toString(36).substring(5);
        this.counter = 0;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MessageService.prototype.log = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.processMessage(message_service_protocol_1.MessageType.Log, message, args);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MessageService.prototype.info = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.processMessage(message_service_protocol_1.MessageType.Info, message, args);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MessageService.prototype.warn = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.processMessage(message_service_protocol_1.MessageType.Warning, message, args);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MessageService.prototype.error = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.processMessage(message_service_protocol_1.MessageType.Error, message, args);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MessageService.prototype.processMessage = function (type, text, args) {
        if (!!args && args.length > 0) {
            var first = args[0];
            var actions = Array.from(new Set(args.filter(function (a) { return typeof a === 'string'; })));
            var options = (typeof first === 'object' && !Array.isArray(first))
                ? first
                : undefined;
            return this.client.showMessage({ type: type, options: options, text: text, actions: actions });
        }
        return this.client.showMessage({ type: type, text: text });
    };
    MessageService.prototype.showProgress = function (message, onDidCancel) {
        return __awaiter(this, void 0, void 0, function () {
            var id, cancellationSource, report, actions, clientMessage, result;
            var _this = this;
            return __generator(this, function (_a) {
                id = this.newProgressId();
                cancellationSource = new cancellation_1.CancellationTokenSource();
                report = function (update) {
                    _this.client.reportProgress(id, update, message, cancellationSource.token);
                };
                actions = new Set(message.actions);
                if (message_service_protocol_1.ProgressMessage.isCancelable(message)) {
                    actions.delete(message_service_protocol_1.ProgressMessage.Cancel);
                    actions.add(message_service_protocol_1.ProgressMessage.Cancel);
                }
                clientMessage = __assign(__assign({}, message), { actions: Array.from(actions) });
                result = this.client.showProgress(id, clientMessage, cancellationSource.token);
                if (message_service_protocol_1.ProgressMessage.isCancelable(message) && typeof onDidCancel === 'function') {
                    result.then(function (value) {
                        if (value === message_service_protocol_1.ProgressMessage.Cancel) {
                            onDidCancel();
                        }
                    });
                }
                return [2 /*return*/, {
                        id: id,
                        cancel: function () { return cancellationSource.cancel(); },
                        result: result,
                        report: report
                    }];
            });
        });
    };
    MessageService.prototype.newProgressId = function () {
        return this.progressIdPrefix + "-" + ++this.counter;
    };
    MessageService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(message_service_protocol_1.MessageClient)),
        __metadata("design:paramtypes", [message_service_protocol_1.MessageClient])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/connection-error-handler.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/connection-error-handler.js ***!
  \******************************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionErrorHandler = void 0;
var ConnectionErrorHandler = /** @class */ (function () {
    function ConnectionErrorHandler(options) {
        this.restarts = [];
        this.options = __assign({ maxErrors: 3, maxRestarts: 5, restartInterval: 3 }, options);
    }
    ConnectionErrorHandler.prototype.shouldStop = function (error, message, count) {
        return !count || count > this.options.maxErrors;
    };
    ConnectionErrorHandler.prototype.shouldRestart = function () {
        this.restarts.push(Date.now());
        if (this.restarts.length <= this.options.maxRestarts) {
            return true;
        }
        var diff = this.restarts[this.restarts.length - 1] - this.restarts[0];
        if (diff <= this.options.restartInterval * 60 * 1000) {
            // eslint-disable-next-line max-len
            this.options.logger.error("The " + this.options.serverName + " server crashed " + this.options.maxRestarts + " times in the last " + this.options.restartInterval + " minutes. The server will not be restarted.");
            return false;
        }
        this.restarts.shift();
        return true;
    };
    return ConnectionErrorHandler;
}());
exports.ConnectionErrorHandler = ConnectionErrorHandler;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/handler.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/handler.js ***!
  \*************************************************************************************************/
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
exports.ConnectionHandler = void 0;
exports.ConnectionHandler = Symbol('ConnectionHandler');


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/index.js ***!
  \***********************************************************************************************/
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
__exportStar(__webpack_require__(/*! ./handler */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/handler.js"), exports);
__exportStar(__webpack_require__(/*! ./proxy-factory */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/proxy-factory.js"), exports);
__exportStar(__webpack_require__(/*! ./connection-error-handler */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/connection-error-handler.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/proxy-factory.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/messaging/proxy-factory.js ***!
  \*******************************************************************************************************/
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
exports.JsonRpcProxyFactory = exports.JsonRpcConnectionHandler = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");
var application_error_1 = __webpack_require__(/*! ../application-error */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/application-error.js");
var event_1 = __webpack_require__(/*! ../event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js");
var JsonRpcConnectionHandler = /** @class */ (function () {
    function JsonRpcConnectionHandler(path, targetFactory) {
        this.path = path;
        this.targetFactory = targetFactory;
    }
    JsonRpcConnectionHandler.prototype.onConnection = function (connection) {
        var factory = new JsonRpcProxyFactory(this.path);
        var proxy = factory.createProxy();
        factory.target = this.targetFactory(proxy);
        factory.listen(connection);
    };
    return JsonRpcConnectionHandler;
}());
exports.JsonRpcConnectionHandler = JsonRpcConnectionHandler;
/**
 * Factory for JSON-RPC proxy objects.
 *
 * A JSON-RPC proxy exposes the programmatic interface of an object through
 * JSON-RPC.  This allows remote programs to call methods of this objects by
 * sending JSON-RPC requests.  This takes place over a bi-directional stream,
 * where both ends can expose an object and both can call methods each other's
 * exposed object.
 *
 * For example, assuming we have an object of the following type on one end:
 *
 *     class Foo {
 *         bar(baz: number): number { return baz + 1 }
 *     }
 *
 * which we want to expose through a JSON-RPC interface.  We would do:
 *
 *     let target = new Foo()
 *     let factory = new JsonRpcProxyFactory<Foo>('/foo', target)
 *     factory.onConnection(connection)
 *
 * The party at the other end of the `connection`, in order to remotely call
 * methods on this object would do:
 *
 *     let factory = new JsonRpcProxyFactory<Foo>('/foo')
 *     factory.onConnection(connection)
 *     let proxy = factory.createProxy();
 *     let result = proxy.bar(42)
 *     // result is equal to 43
 *
 * One the wire, it would look like this:
 *
 *     --> {"jsonrpc": "2.0", "id": 0, "method": "bar", "params": {"baz": 42}}
 *     <-- {"jsonrpc": "2.0", "id": 0, "result": 43}
 *
 * Note that in the code of the caller, we didn't pass a target object to
 * JsonRpcProxyFactory, because we don't want/need to expose an object.
 * If we had passed a target object, the other side could've called methods on
 * it.
 *
 * @param <T> - The type of the object to expose to JSON-RPC.
 */
var JsonRpcProxyFactory = /** @class */ (function () {
    /**
     * Build a new JsonRpcProxyFactory.
     *
     * @param target - The object to expose to JSON-RPC methods calls.  If this
     *   is omitted, the proxy won't be able to handle requests, only send them.
     */
    function JsonRpcProxyFactory(target) {
        this.target = target;
        this.onDidOpenConnectionEmitter = new event_1.Emitter();
        this.onDidCloseConnectionEmitter = new event_1.Emitter();
        this.waitForConnection();
    }
    JsonRpcProxyFactory.prototype.waitForConnection = function () {
        var _this = this;
        this.connectionPromise = new Promise(function (resolve) {
            return _this.connectionPromiseResolve = resolve;
        });
        this.connectionPromise.then(function (connection) {
            connection.onClose(function () {
                return _this.onDidCloseConnectionEmitter.fire(undefined);
            });
            _this.onDidOpenConnectionEmitter.fire(undefined);
        });
    };
    /**
     * Connect a MessageConnection to the factory.
     *
     * This connection will be used to send/receive JSON-RPC requests and
     * response.
     */
    JsonRpcProxyFactory.prototype.listen = function (connection) {
        var _this = this;
        if (this.target) {
            var _loop_1 = function (prop) {
                if (typeof this_1.target[prop] === 'function') {
                    connection.onRequest(prop, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return _this.onRequest.apply(_this, __spread([prop], args));
                    });
                    connection.onNotification(prop, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return _this.onNotification.apply(_this, __spread([prop], args));
                    });
                }
            };
            var this_1 = this;
            for (var prop in this.target) {
                _loop_1(prop);
            }
        }
        connection.onDispose(function () { return _this.waitForConnection(); });
        connection.listen();
        this.connectionPromiseResolve(connection);
    };
    /**
     * Process an incoming JSON-RPC method call.
     *
     * onRequest is called when the JSON-RPC connection received a method call
     * request.  It calls the corresponding method on [[target]].
     *
     * The return value is a Promise object that is resolved with the return
     * value of the method call, if it is successful.  The promise is rejected
     * if the called method does not exist or if it throws.
     *
     * @returns A promise of the method call completion.
     */
    JsonRpcProxyFactory.prototype.onRequest = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var error_1, e, reason, stack;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (_a = this.target)[method].apply(_a, __spread(args))];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2:
                        error_1 = _b.sent();
                        e = this.serializeError(error_1);
                        if (e instanceof vscode_jsonrpc_1.ResponseError) {
                            throw e;
                        }
                        reason = e.message || '';
                        stack = e.stack || '';
                        console.error("Request " + method + " failed with error: " + reason, stack);
                        throw e;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Process an incoming JSON-RPC notification.
     *
     * Same as [[onRequest]], but called on incoming notifications rather than
     * methods calls.
     */
    JsonRpcProxyFactory.prototype.onNotification = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.target)[method].apply(_a, __spread(args));
    };
    /**
     * Create a Proxy exposing the interface of an object of type T.  This Proxy
     * can be used to do JSON-RPC method calls on the remote target object as
     * if it was local.
     *
     * If `T` implements `JsonRpcServer` then a client is used as a target object for a remote target object.
     */
    JsonRpcProxyFactory.prototype.createProxy = function () {
        var result = new Proxy(this, this);
        return result;
    };
    /**
     * Get a callable object that executes a JSON-RPC method call.
     *
     * Getting a property on the Proxy object returns a callable that, when
     * called, executes a JSON-RPC call.  The name of the property defines the
     * method to be called.  The callable takes a variable number of arguments,
     * which are passed in the JSON-RPC method call.
     *
     * For example, if you have a Proxy object:
     *
     *     let fooProxyFactory = JsonRpcProxyFactory<Foo>('/foo')
     *     let fooProxy = fooProxyFactory.createProxy()
     *
     * accessing `fooProxy.bar` will return a callable that, when called,
     * executes a JSON-RPC method call to method `bar`.  Therefore, doing
     * `fooProxy.bar()` will call the `bar` method on the remote Foo object.
     *
     * @param target - unused.
     * @param p - The property accessed on the Proxy object.
     * @param receiver - unused.
     * @returns A callable that executes the JSON-RPC call.
     */
    JsonRpcProxyFactory.prototype.get = function (target, p, receiver) {
        var _this = this;
        if (p === 'setClient') {
            return function (client) {
                _this.target = client;
            };
        }
        if (p === 'getClient') {
            return function () { return _this.target; };
        }
        if (p === 'onDidOpenConnection') {
            return this.onDidOpenConnectionEmitter.event;
        }
        if (p === 'onDidCloseConnection') {
            return this.onDidCloseConnectionEmitter.event;
        }
        var isNotify = this.isNotification(p);
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var method = p.toString();
            var capturedError = new Error("Request '" + method + "' failed");
            return _this.connectionPromise.then(function (connection) {
                return new Promise(function (resolve, reject) {
                    try {
                        if (isNotify) {
                            connection.sendNotification.apply(connection, __spread([method], args));
                            resolve();
                        }
                        else {
                            var resultPromise = connection.sendRequest.apply(connection, __spread([method], args));
                            resultPromise
                                .catch(function (err) { return reject(_this.deserializeError(capturedError, err)); })
                                .then(function (result) { return resolve(result); });
                        }
                    }
                    catch (err) {
                        reject(err);
                    }
                });
            });
        };
    };
    /**
     * Return whether the given property represents a notification.
     *
     * A property leads to a notification rather than a method call if its name
     * begins with `notify` or `on`.
     *
     * @param p - The property being called on the proxy.
     * @return Whether `p` represents a notification.
     */
    JsonRpcProxyFactory.prototype.isNotification = function (p) {
        return p.toString().startsWith('notify') || p.toString().startsWith('on');
    };
    JsonRpcProxyFactory.prototype.serializeError = function (e) {
        if (application_error_1.ApplicationError.is(e)) {
            return new vscode_jsonrpc_1.ResponseError(e.code, '', Object.assign({ kind: 'application' }, e.toJson()));
        }
        return e;
    };
    JsonRpcProxyFactory.prototype.deserializeError = function (capturedError, e) {
        if (e instanceof vscode_jsonrpc_1.ResponseError) {
            var capturedStack = capturedError.stack || '';
            if (e.data && e.data.kind === 'application') {
                var _a = e.data, stack = _a.stack, data = _a.data, message = _a.message;
                return application_error_1.ApplicationError.fromJson(e.code, {
                    message: message || capturedError.message,
                    data: data,
                    stack: capturedStack + "\nCaused by: " + stack
                });
            }
            e.stack = capturedStack;
        }
        return e;
    };
    return JsonRpcProxyFactory;
}());
exports.JsonRpcProxyFactory = JsonRpcProxyFactory;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/objects.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/objects.js ***!
  \***************************************************************************************/
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
exports.isEmpty = exports.notEmpty = exports.deepFreeze = exports.deepClone = void 0;
function deepClone(obj) {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof RegExp) {
        return obj;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(function (key) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var prop = obj[key];
        if (prop && typeof prop === 'object') {
            result[key] = deepClone(prop);
        }
        else {
            result[key] = prop;
        }
    });
    return result;
}
exports.deepClone = deepClone;
function deepFreeze(obj) {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var stack = [obj];
    while (stack.length > 0) {
        var objectToFreeze = stack.shift();
        Object.freeze(objectToFreeze);
        for (var key in objectToFreeze) {
            if (_hasOwnProperty.call(objectToFreeze, key)) {
                var prop = objectToFreeze[key];
                if (typeof prop === 'object' && !Object.isFrozen(prop)) {
                    stack.push(prop);
                }
            }
        }
    }
    return obj;
}
exports.deepFreeze = deepFreeze;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function notEmpty(arg) {
    // eslint-disable-next-line no-null/no-null
    return arg !== undefined && arg !== null;
}
exports.notEmpty = notEmpty;
/**
 * `true` if the argument is an empty object. Otherwise, `false`.
 */
function isEmpty(arg) {
    return Object.keys(arg).length === 0 && arg.constructor === Object;
}
exports.isEmpty = isEmpty;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/os.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/os.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
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
exports.OS = exports.cmd = exports.isOSX = exports.isWindows = void 0;
function is(userAgent, platform) {
    if (typeof navigator !== 'undefined') {
        if (navigator.userAgent && navigator.userAgent.indexOf(userAgent) >= 0) {
            return true;
        }
    }
    if (typeof process !== 'undefined') {
        return (process.platform === platform);
    }
    return false;
}
exports.isWindows = is('Windows', 'win32');
exports.isOSX = is('Mac', 'darwin');
function cmd(command) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return [
        exports.isWindows ? 'cmd' : command,
        exports.isWindows ? __spread(['/c', command], args) : args
    ];
}
exports.cmd = cmd;
var OS;
(function (OS) {
    /**
     * Enumeration of the supported operating systems.
     */
    var Type;
    (function (Type) {
        Type["Windows"] = "Windows";
        Type["Linux"] = "Linux";
        Type["OSX"] = "OSX";
    })(Type = OS.Type || (OS.Type = {}));
    /**
     * Returns with the type of the operating system. If it is neither [Windows](isWindows) nor [OS X](isOSX), then
     * it always return with the `Linux` OS type.
     */
    function type() {
        if (exports.isWindows) {
            return Type.Windows;
        }
        if (exports.isOSX) {
            return Type.OSX;
        }
        return Type.Linux;
    }
    OS.type = type;
})(OS = exports.OS || (exports.OS = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/path.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/path.js ***!
  \************************************************************************************/
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
exports.Path = void 0;
/**
 * On POSIX:
 * ┌──────────────────────┬────────────┐
 * │          dir         │    base    │
 * ├──────┬               ├──────┬─────┤
 * │ root │               │ name │ ext │
 * "  /     home/user/dir / file  .txt "
 * └──────┴───────────────┴──────┴─────┘
 *
 * On Windows:
 * ┌──────────────────────┬────────────┐
 * │           dir        │    base    │
 * ├──────┬               ├──────┬─────┤
 * │ root │               │ name │ ext │
 * "  /c: / home/user/dir / file  .txt "
 * └──────┴───────────────┴──────┴─────┘
 */
var Path = /** @class */ (function () {
    /**
     * The raw should be normalized, meaning that only '/' is allowed as a path separator.
     */
    function Path(raw) {
        this.raw = Path.normalizeDrive(raw);
        var firstIndex = raw.indexOf(Path.separator);
        var lastIndex = raw.lastIndexOf(Path.separator);
        this.isAbsolute = firstIndex === 0;
        this.base = lastIndex === -1 ? raw : raw.substr(lastIndex + 1);
        this.isRoot = this.isAbsolute && firstIndex === lastIndex && (!this.base || Path.isDrive(this.base));
        this.root = this.computeRoot();
        var extIndex = this.base.lastIndexOf('.');
        this.name = extIndex === -1 ? this.base : this.base.substr(0, extIndex);
        this.ext = extIndex === -1 ? '' : this.base.substr(extIndex);
    }
    Path.isDrive = function (segment) {
        return segment.endsWith(':');
    };
    /**
     * vscode-uri always normalizes drive letters to lower case:
     * https://github.com/Microsoft/vscode-uri/blob/b1d3221579f97f28a839b6f996d76fc45e9964d8/src/index.ts#L1025
     * Theia path should be adjusted to this.
     */
    Path.normalizeDrive = function (path) {
        // lower-case windows drive letters in /C:/fff or C:/fff
        if (path.length >= 3 && path.charCodeAt(0) === 47 /* '/' */ && path.charCodeAt(2) === 58 /* ':' */) {
            var code = path.charCodeAt(1);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = "/" + String.fromCharCode(code + 32) + ":" + path.substr(3); // "/c:".length === 3
            }
        }
        else if (path.length >= 2 && path.charCodeAt(1) === 58 /* ':' */) {
            var code = path.charCodeAt(0);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = String.fromCharCode(code + 32) + ":" + path.substr(2); // "/c:".length === 3
            }
        }
        return path;
    };
    Path.prototype.computeRoot = function () {
        // '/' -> '/'
        // '/c:' -> '/c:'
        if (this.isRoot) {
            return this;
        }
        // 'foo/bar' -> `undefined`
        if (!this.isAbsolute) {
            return undefined;
        }
        var index = this.raw.indexOf(Path.separator, Path.separator.length);
        if (index === -1) {
            // '/foo/bar' -> '/'
            return new Path(Path.separator);
        }
        // '/c:/foo/bar' -> '/c:'
        // '/foo/bar' -> '/'
        return new Path(this.raw.substr(0, index)).root;
    };
    Object.defineProperty(Path.prototype, "dir", {
        /**
         * Returns the parent directory if it exists (`hasDir === true`) or `this` otherwise.
         */
        get: function () {
            if (this._dir === undefined) {
                this._dir = this.computeDir();
            }
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Path.prototype, "hasDir", {
        /**
         * Returns `true` if this has a parent directory, `false` otherwise.
         *
         * _This implementation returns `true` if and only if this is not the root dir and
         * there is a path separator in the raw path._
         */
        get: function () {
            return !this.isRoot && this.raw.lastIndexOf(Path.separator) !== -1;
        },
        enumerable: false,
        configurable: true
    });
    Path.prototype.computeDir = function () {
        if (!this.hasDir) {
            return this;
        }
        var lastIndex = this.raw.lastIndexOf(Path.separator);
        if (this.isAbsolute) {
            var firstIndex = this.raw.indexOf(Path.separator);
            if (firstIndex === lastIndex) {
                return new Path(this.raw.substr(0, firstIndex + 1));
            }
        }
        return new Path(this.raw.substr(0, lastIndex));
    };
    Path.prototype.join = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        var relativePath = paths.filter(function (s) { return !!s; }).join(Path.separator);
        if (!relativePath) {
            return this;
        }
        if (this.raw.endsWith(Path.separator)) {
            return new Path(this.raw + relativePath);
        }
        return new Path(this.raw + Path.separator + relativePath);
    };
    Path.prototype.toString = function () {
        return this.raw;
    };
    Path.prototype.relative = function (path) {
        if (this.raw === path.raw) {
            return new Path('');
        }
        if (!this.raw || !path.raw) {
            return undefined;
        }
        var raw = this.base ? this.raw + Path.separator : this.raw;
        if (!path.raw.startsWith(raw)) {
            return undefined;
        }
        var relativePath = path.raw.substr(raw.length);
        return new Path(relativePath);
    };
    Path.prototype.isEqualOrParent = function (path) {
        return !!this.relative(path);
    };
    Path.prototype.relativity = function (path) {
        var relative = this.relative(path);
        if (relative) {
            var relativeStr = relative.toString();
            if (relativeStr === '') {
                return 0;
            }
            return relativeStr.split(Path.separator).length;
        }
        return -1;
    };
    /*
     * return a normalized Path, resolving '..' and '.' segments
     */
    Path.prototype.normalize = function () {
        var _this = this;
        var trailingSlash = this.raw.endsWith('/');
        var pathArray = this.toString().split('/');
        var resultArray = [];
        pathArray.forEach(function (value, index) {
            if (!value || value === '.') {
                return;
            }
            if (value === '..') {
                if (resultArray.length && resultArray[resultArray.length - 1] !== '..') {
                    resultArray.pop();
                }
                else if (!_this.isAbsolute) {
                    resultArray.push('..');
                }
            }
            else {
                resultArray.push(value);
            }
        });
        if (resultArray.length === 0) {
            if (this.isRoot) {
                return new Path('/');
            }
            else {
                return new Path('.');
            }
        }
        return new Path((this.isAbsolute ? '/' : '') + resultArray.join('/') + (trailingSlash ? '/' : ''));
    };
    Path.separator = '/';
    return Path;
}());
exports.Path = Path;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/progress-service-protocol.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/progress-service-protocol.js ***!
  \*********************************************************************************************************/
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
exports.ProgressClient = void 0;
exports.ProgressClient = Symbol('ProgressClient');


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/progress-service.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/progress-service.js ***!
  \************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var message_service_protocol_1 = __webpack_require__(/*! ./message-service-protocol */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/message-service-protocol.js");
var cancellation_1 = __webpack_require__(/*! ./cancellation */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/cancellation.js");
var progress_service_protocol_1 = __webpack_require__(/*! ./progress-service-protocol */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/progress-service-protocol.js");
var message_service_1 = __webpack_require__(/*! ./message-service */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/message-service.js");
var ProgressService = /** @class */ (function () {
    function ProgressService() {
        this.progressIdPrefix = Math.random().toString(36).substring(5);
        this.counter = 0;
    }
    ProgressService.prototype.showProgress = function (message, onDidCancel) {
        return __awaiter(this, void 0, void 0, function () {
            var id, cancellationSource, report, actions, clientMessage, result;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.shouldDelegate(message)) {
                    return [2 /*return*/, this.messageService.showProgress(message, onDidCancel)];
                }
                id = this.newProgressId();
                cancellationSource = new cancellation_1.CancellationTokenSource();
                report = function (update) {
                    _this.client.reportProgress(id, update, message, cancellationSource.token);
                };
                actions = new Set(message.actions);
                if (message_service_protocol_1.ProgressMessage.isCancelable(message)) {
                    actions.delete(message_service_protocol_1.ProgressMessage.Cancel);
                    actions.add(message_service_protocol_1.ProgressMessage.Cancel);
                }
                clientMessage = __assign(__assign({}, message), { actions: Array.from(actions) });
                result = this.client.showProgress(id, clientMessage, cancellationSource.token);
                if (message_service_protocol_1.ProgressMessage.isCancelable(message) && typeof onDidCancel === 'function') {
                    result.then(function (value) {
                        if (value === message_service_protocol_1.ProgressMessage.Cancel) {
                            onDidCancel();
                        }
                    });
                }
                return [2 /*return*/, {
                        id: id,
                        cancel: function () { return cancellationSource.cancel(); },
                        result: result,
                        report: report
                    }];
            });
        });
    };
    ProgressService.prototype.shouldDelegate = function (message) {
        var location = message.options && message.options.location;
        return location === 'notification';
    };
    ProgressService.prototype.newProgressId = function () {
        return this.progressIdPrefix + "-" + ++this.counter;
    };
    ProgressService.prototype.withProgress = function (text, locationId, task) {
        return __awaiter(this, void 0, void 0, function () {
            var progress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showProgress({ text: text, options: { cancelable: true, location: locationId } })];
                    case 1:
                        progress = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, task()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        progress.cancel();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(progress_service_protocol_1.ProgressClient),
        __metadata("design:type", Object)
    ], ProgressService.prototype, "client", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], ProgressService.prototype, "messageService", void 0);
    ProgressService = __decorate([
        inversify_1.injectable()
    ], ProgressService);
    return ProgressService;
}());
exports.ProgressService = ProgressService;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/reference.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/reference.js ***!
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
exports.SyncReferenceCollection = exports.ReferenceCollection = exports.AbstractReferenceCollection = void 0;
var disposable_1 = __webpack_require__(/*! ./disposable */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! ./event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js");
var AbstractReferenceCollection = /** @class */ (function () {
    function AbstractReferenceCollection() {
        var _this = this;
        this._keys = new Map();
        this._values = new Map();
        this.references = new Map();
        this.onDidCreateEmitter = new event_1.Emitter();
        this.onDidCreate = this.onDidCreateEmitter.event;
        this.onWillDisposeEmitter = new event_1.Emitter();
        this.onWillDispose = this.onWillDisposeEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection();
        this.toDispose.push(this.onDidCreateEmitter);
        this.toDispose.push(this.onWillDisposeEmitter);
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.clear(); }));
    }
    AbstractReferenceCollection.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    AbstractReferenceCollection.prototype.clear = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this._values.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                try {
                    value.dispose();
                }
                catch (e) {
                    console.error(e);
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
    };
    AbstractReferenceCollection.prototype.has = function (args) {
        var key = this.toKey(args);
        return this.references.has(key);
    };
    AbstractReferenceCollection.prototype.keys = function () {
        return __spread(this._keys.values());
    };
    AbstractReferenceCollection.prototype.values = function () {
        return __spread(this._values.values());
    };
    AbstractReferenceCollection.prototype.get = function (args) {
        var key = this.toKey(args);
        return this._values.get(key);
    };
    AbstractReferenceCollection.prototype.doAcquire = function (key, object) {
        var references = this.references.get(key) || this.createReferences(key, object);
        var reference = {
            object: object,
            dispose: function () { }
        };
        references.push(reference);
        return reference;
    };
    AbstractReferenceCollection.prototype.toKey = function (args) {
        return JSON.stringify(args);
    };
    AbstractReferenceCollection.prototype.createReferences = function (key, value) {
        var _this = this;
        var references = new disposable_1.DisposableCollection();
        references.onDispose(function () { return value.dispose(); });
        var disposeObject = value.dispose.bind(value);
        value.dispose = function () {
            _this.onWillDisposeEmitter.fire(value);
            disposeObject();
            _this._values.delete(key);
            _this._keys.delete(key);
            _this.references.delete(key);
            references.dispose();
        };
        this.references.set(key, references);
        return references;
    };
    return AbstractReferenceCollection;
}());
exports.AbstractReferenceCollection = AbstractReferenceCollection;
var ReferenceCollection = /** @class */ (function (_super) {
    __extends(ReferenceCollection, _super);
    function ReferenceCollection(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.pendingValues = new Map();
        return _this;
    }
    ReferenceCollection.prototype.acquire = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var key, existing, object;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = this.toKey(args);
                        existing = this._values.get(key);
                        if (existing) {
                            return [2 /*return*/, this.doAcquire(key, existing)];
                        }
                        return [4 /*yield*/, this.getOrCreateValue(key, args)];
                    case 1:
                        object = _a.sent();
                        return [2 /*return*/, this.doAcquire(key, object)];
                }
            });
        });
    };
    ReferenceCollection.prototype.getOrCreateValue = function (key, args) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, pending, value, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        existing = this.pendingValues.get(key);
                        if (existing) {
                            return [2 /*return*/, existing];
                        }
                        pending = this.factory(args);
                        this._keys.set(key, args);
                        this.pendingValues.set(key, pending);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, pending];
                    case 2:
                        value = _a.sent();
                        this._values.set(key, value);
                        this.onDidCreateEmitter.fire(value);
                        return [2 /*return*/, value];
                    case 3:
                        e_2 = _a.sent();
                        this._keys.delete(key);
                        throw e_2;
                    case 4:
                        this.pendingValues.delete(key);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return ReferenceCollection;
}(AbstractReferenceCollection));
exports.ReferenceCollection = ReferenceCollection;
var SyncReferenceCollection = /** @class */ (function (_super) {
    __extends(SyncReferenceCollection, _super);
    function SyncReferenceCollection(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        return _this;
    }
    SyncReferenceCollection.prototype.acquire = function (args) {
        var key = this.toKey(args);
        var object = this.getOrCreateValue(key, args);
        return this.doAcquire(key, object);
    };
    SyncReferenceCollection.prototype.getOrCreateValue = function (key, args) {
        var existing = this._values.get(key);
        if (existing) {
            return existing;
        }
        var value = this.factory(args);
        this._keys.set(key, args);
        this._values.set(key, value);
        this.onDidCreateEmitter.fire(value);
        return value;
    };
    return SyncReferenceCollection;
}(AbstractReferenceCollection));
exports.SyncReferenceCollection = SyncReferenceCollection;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/resource.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/resource.js ***!
  \****************************************************************************************/
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
exports.InMemoryResources = exports.MutableResource = exports.DefaultResourceProvider = exports.ResourceProvider = exports.ResourceResolver = exports.ResourceError = exports.Resource = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var contribution_provider_1 = __webpack_require__(/*! ./contribution-provider */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/contribution-provider.js");
var event_1 = __webpack_require__(/*! ./event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js");
var application_error_1 = __webpack_require__(/*! ./application-error */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/application-error.js");
var Resource;
(function (Resource) {
    function save(resource, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!resource.saveContents) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, trySaveContentChanges(resource, context)];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/];
                        }
                        if (token && token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, resource.saveContents(context.content, context.options)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    Resource.save = save;
    function trySaveContentChanges(resource, context) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!context.changes || !resource.saveContentChanges || shouldSaveContent(context)) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, resource.saveContentChanges(context.changes, context.options)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _a.sent();
                        if (!ResourceError.NotFound.is(e_1) && !ResourceError.OutOfSync.is(e_1)) {
                            console.error("Failed to apply incremental changes to '" + resource.uri.toString() + "':", e_1);
                        }
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    Resource.trySaveContentChanges = trySaveContentChanges;
    function shouldSaveContent(_a) {
        var e_2, _b;
        var content = _a.content, changes = _a.changes;
        if (!changes) {
            return true;
        }
        var contentChangesLength = 0;
        var contentLength = content.length;
        try {
            for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                var change = changes_1_1.value;
                contentChangesLength += JSON.stringify(change).length;
                if (contentChangesLength > contentLength) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (changes_1_1 && !changes_1_1.done && (_b = changes_1.return)) _b.call(changes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return contentChangesLength > contentLength;
    }
    Resource.shouldSaveContent = shouldSaveContent;
})(Resource = exports.Resource || (exports.Resource = {}));
var ResourceError;
(function (ResourceError) {
    ResourceError.NotFound = application_error_1.ApplicationError.declare(-40000, function (raw) { return raw; });
    ResourceError.OutOfSync = application_error_1.ApplicationError.declare(-40001, function (raw) { return raw; });
})(ResourceError = exports.ResourceError || (exports.ResourceError = {}));
exports.ResourceResolver = Symbol('ResourceResolver');
exports.ResourceProvider = Symbol('ResourceProvider');
var DefaultResourceProvider = /** @class */ (function () {
    function DefaultResourceProvider(resolversProvider) {
        this.resolversProvider = resolversProvider;
    }
    /**
     * Reject if a resource cannot be provided.
     */
    DefaultResourceProvider.prototype.get = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var resolvers, resolvers_1, resolvers_1_1, resolver, err_1, e_3_1;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        resolvers = this.resolversProvider.getContributions();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 10]);
                        resolvers_1 = __values(resolvers), resolvers_1_1 = resolvers_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!resolvers_1_1.done) return [3 /*break*/, 7];
                        resolver = resolvers_1_1.value;
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, resolver.resolve(uri)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5:
                        err_1 = _b.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        resolvers_1_1 = resolvers_1.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (resolvers_1_1 && !resolvers_1_1.done && (_a = resolvers_1.return)) _a.call(resolvers_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, Promise.reject(new Error("A resource provider for '" + uri.toString() + "' is not registered."))];
                }
            });
        });
    };
    DefaultResourceProvider = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(contribution_provider_1.ContributionProvider)), __param(0, inversify_1.named(exports.ResourceResolver)),
        __metadata("design:paramtypes", [Object])
    ], DefaultResourceProvider);
    return DefaultResourceProvider;
}());
exports.DefaultResourceProvider = DefaultResourceProvider;
var MutableResource = /** @class */ (function () {
    function MutableResource(uri, contents, dispose) {
        this.uri = uri;
        this.dispose = dispose;
        this.onDidChangeContentsEmitter = new event_1.Emitter();
        this.onDidChangeContents = this.onDidChangeContentsEmitter.event;
        this.contents = contents;
    }
    MutableResource.prototype.readContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.contents];
            });
        });
    };
    MutableResource.prototype.saveContents = function (contents) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.contents = contents;
                this.fireDidChangeContents();
                return [2 /*return*/];
            });
        });
    };
    MutableResource.prototype.fireDidChangeContents = function () {
        this.onDidChangeContentsEmitter.fire(undefined);
    };
    return MutableResource;
}());
exports.MutableResource = MutableResource;
var InMemoryResources = /** @class */ (function () {
    function InMemoryResources() {
        this.resources = new Map();
    }
    InMemoryResources.prototype.add = function (uri, contents) {
        var _this = this;
        var resourceUri = uri.toString();
        if (this.resources.has(resourceUri)) {
            throw new Error("Cannot add already existing in-memory resource '" + resourceUri + "'");
        }
        var resource = new MutableResource(uri, contents, function () { return _this.resources.delete(resourceUri); });
        this.resources.set(resourceUri, resource);
        return resource;
    };
    InMemoryResources.prototype.update = function (uri, contents) {
        var resourceUri = uri.toString();
        var resource = this.resources.get(resourceUri);
        if (!resource) {
            throw new Error("Cannot update non-existed in-memory resource '" + resourceUri + "'");
        }
        resource.saveContents(contents);
        return resource;
    };
    InMemoryResources.prototype.resolve = function (uri) {
        var uriString = uri.toString();
        if (!this.resources.has(uriString)) {
            throw new Error("In memory '" + uriString + "' resource does not exist.");
        }
        return this.resources.get(uriString);
    };
    InMemoryResources = __decorate([
        inversify_1.injectable()
    ], InMemoryResources);
    return InMemoryResources;
}());
exports.InMemoryResources = InMemoryResources;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/selection-service.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/selection-service.js ***!
  \*************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! ../common/event */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/event.js");
var SelectionService = /** @class */ (function () {
    function SelectionService() {
        this.onSelectionChangedEmitter = new event_1.Emitter();
        this.onSelectionChanged = this.onSelectionChangedEmitter.event;
    }
    Object.defineProperty(SelectionService.prototype, "selection", {
        get: function () {
            return this.currentSelection;
        },
        set: function (selection) {
            this.currentSelection = selection;
            this.onSelectionChangedEmitter.fire(this.currentSelection);
        },
        enumerable: false,
        configurable: true
    });
    SelectionService = __decorate([
        inversify_1.injectable()
    ], SelectionService);
    return SelectionService;
}());
exports.SelectionService = SelectionService;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/selection.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/selection.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UriSelection = void 0;
var uri_1 = __webpack_require__(/*! ./uri */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri.js");
var UriSelection;
(function (UriSelection) {
    function is(arg) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return typeof arg === 'object' && ('uri' in arg) && arg['uri'] instanceof uri_1.default;
    }
    UriSelection.is = is;
    function getUri(selection) {
        if (is(selection)) {
            return selection.uri;
        }
        if (Array.isArray(selection) && is(selection[0])) {
            return selection[0].uri;
        }
        return undefined;
    }
    UriSelection.getUri = getUri;
    function getUris(selection) {
        if (is(selection)) {
            return [selection.uri];
        }
        if (Array.isArray(selection)) {
            return selection.filter(is).map(function (s) { return s.uri; });
        }
        return [];
    }
    UriSelection.getUris = getUris;
})(UriSelection = exports.UriSelection || (exports.UriSelection = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/strings.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/strings.js ***!
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
exports.escapeRegExpCharacters = exports.unescapeInvisibleChars = exports.escapeInvisibleChars = exports.split = void 0;
function split(s, splitter) {
    var start, end;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                start = 0;
                _a.label = 1;
            case 1:
                if (!(start < s.length)) return [3 /*break*/, 3];
                end = s.indexOf(splitter, start);
                if (end === -1) {
                    end = s.length;
                }
                return [4 /*yield*/, s.substring(start, end)];
            case 2:
                _a.sent();
                start = end + splitter.length;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
exports.split = split;
function escapeInvisibleChars(value) {
    return value.replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}
exports.escapeInvisibleChars = escapeInvisibleChars;
function unescapeInvisibleChars(value) {
    return value.replace(/\\n/g, '\n').replace(/\\r/g, '\r');
}
exports.unescapeInvisibleChars = unescapeInvisibleChars;
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, '\\$&');
}
exports.escapeRegExpCharacters = escapeRegExpCharacters;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/types.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/types.js ***!
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
exports.Prioritizeable = void 0;
var Prioritizeable;
(function (Prioritizeable) {
    function toPrioritizeable(rawValue, getPriority) {
        return __awaiter(this, void 0, void 0, function () {
            var value, priority;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rawValue instanceof Array) {
                            return [2 /*return*/, Promise.all(rawValue.map(function (v) { return toPrioritizeable(v, getPriority); }))];
                        }
                        return [4 /*yield*/, rawValue];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, getPriority(value)];
                    case 2:
                        priority = _a.sent();
                        return [2 /*return*/, { priority: priority, value: value }];
                }
            });
        });
    }
    Prioritizeable.toPrioritizeable = toPrioritizeable;
    function toPrioritizeableSync(rawValue, getPriority) {
        return rawValue.map(function (v) { return ({
            value: v,
            priority: getPriority(v)
        }); });
    }
    Prioritizeable.toPrioritizeableSync = toPrioritizeableSync;
    function prioritizeAllSync(values, getPriority) {
        var prioritizeable = toPrioritizeableSync(values, getPriority);
        return prioritizeable.filter(isValid).sort(compare);
    }
    Prioritizeable.prioritizeAllSync = prioritizeAllSync;
    function prioritizeAll(values, getPriority) {
        return __awaiter(this, void 0, void 0, function () {
            var prioritizeable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toPrioritizeable(values, getPriority)];
                    case 1:
                        prioritizeable = _a.sent();
                        return [2 /*return*/, prioritizeable.filter(isValid).sort(compare)];
                }
            });
        });
    }
    Prioritizeable.prioritizeAll = prioritizeAll;
    function isValid(p) {
        return p.priority > 0;
    }
    Prioritizeable.isValid = isValid;
    function compare(p, p2) {
        return p2.priority - p.priority;
    }
    Prioritizeable.compare = compare;
})(Prioritizeable = exports.Prioritizeable || (exports.Prioritizeable = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri.js ***!
  \***********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../../node_modules/vscode-uri/lib/esm/index.js");
var path_1 = __webpack_require__(/*! ./path */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/path.js");
var URI = /** @class */ (function () {
    function URI(uri) {
        if (uri === void 0) { uri = ''; }
        if (uri instanceof vscode_uri_1.URI) {
            this.codeUri = uri;
        }
        else {
            this.codeUri = vscode_uri_1.URI.parse(uri);
        }
    }
    Object.defineProperty(URI.prototype, "displayName", {
        /**
         * TODO move implementation to `DefaultUriLabelProviderContribution.getName`
         *
         * @deprecated use `LabelProvider.getName` instead
         */
        get: function () {
            var base = this.path.base;
            if (base) {
                return base;
            }
            if (this.path.isRoot) {
                return this.path.toString();
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URI.prototype, "allLocations", {
        /**
         * Return all uri from the current to the top most.
         */
        get: function () {
            var locations = [];
            var location = this;
            while (!location.path.isRoot && location.path.hasDir) {
                locations.push(location);
                location = location.parent;
            }
            locations.push(location);
            return locations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URI.prototype, "parent", {
        get: function () {
            if (this.path.isRoot) {
                return this;
            }
            return this.withPath(this.path.dir);
        },
        enumerable: false,
        configurable: true
    });
    URI.prototype.relative = function (uri) {
        if (this.authority !== uri.authority || this.scheme !== uri.scheme) {
            return undefined;
        }
        return this.path.relative(uri.path);
    };
    URI.prototype.resolve = function (path) {
        return this.withPath(this.path.join(path.toString()));
    };
    /**
     * return a new URI replacing the current with the given scheme
     */
    URI.prototype.withScheme = function (scheme) {
        var newCodeUri = vscode_uri_1.URI.from(__assign(__assign({}, this.codeUri.toJSON()), { scheme: scheme }));
        return new URI(newCodeUri);
    };
    /**
     * return a new URI replacing the current with the given authority
     */
    URI.prototype.withAuthority = function (authority) {
        var newCodeUri = vscode_uri_1.URI.from(__assign(__assign({}, this.codeUri.toJSON()), { scheme: this.codeUri.scheme, authority: authority }));
        return new URI(newCodeUri);
    };
    /**
     * return this URI without a authority
     */
    URI.prototype.withoutAuthority = function () {
        return this.withAuthority('');
    };
    /**
     * return a new URI replacing the current with the given path
     */
    URI.prototype.withPath = function (path) {
        var newCodeUri = vscode_uri_1.URI.from(__assign(__assign({}, this.codeUri.toJSON()), { scheme: this.codeUri.scheme, path: path.toString() }));
        return new URI(newCodeUri);
    };
    /**
     * return this URI without a path
     */
    URI.prototype.withoutPath = function () {
        return this.withPath('');
    };
    /**
     * return a new URI replacing the current with the given query
     */
    URI.prototype.withQuery = function (query) {
        var newCodeUri = vscode_uri_1.URI.from(__assign(__assign({}, this.codeUri.toJSON()), { scheme: this.codeUri.scheme, query: query }));
        return new URI(newCodeUri);
    };
    /**
     * return this URI without a query
     */
    URI.prototype.withoutQuery = function () {
        return this.withQuery('');
    };
    /**
     * return a new URI replacing the current with the given fragment
     */
    URI.prototype.withFragment = function (fragment) {
        var newCodeUri = vscode_uri_1.URI.from(__assign(__assign({}, this.codeUri.toJSON()), { scheme: this.codeUri.scheme, fragment: fragment }));
        return new URI(newCodeUri);
    };
    /**
     * return this URI without a fragment
     */
    URI.prototype.withoutFragment = function () {
        return this.withFragment('');
    };
    /**
     * return a new URI replacing the current with its normalized path, resolving '..' and '.' segments
     */
    URI.prototype.normalizePath = function () {
        return this.withPath(this.path.normalize());
    };
    Object.defineProperty(URI.prototype, "scheme", {
        get: function () {
            return this.codeUri.scheme;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URI.prototype, "authority", {
        get: function () {
            return this.codeUri.authority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URI.prototype, "path", {
        get: function () {
            if (this._path === undefined) {
                this._path = new path_1.Path(this.codeUri.path);
            }
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URI.prototype, "query", {
        get: function () {
            return this.codeUri.query;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(URI.prototype, "fragment", {
        get: function () {
            return this.codeUri.fragment;
        },
        enumerable: false,
        configurable: true
    });
    URI.prototype.toString = function (skipEncoding) {
        return this.codeUri.toString(skipEncoding);
    };
    URI.prototype.isEqualOrParent = function (uri) {
        return this.authority === uri.authority && this.scheme === uri.scheme && this.path.isEqualOrParent(uri.path);
    };
    URI.getDistinctParents = function (uris) {
        var result = [];
        uris.forEach(function (uri, i) {
            if (!uris.some(function (otherUri, index) { return index !== i && otherUri.isEqualOrParent(uri); })) {
                result.push(uri);
            }
        });
        return result;
    };
    return URI;
}());
exports.default = URI;


/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map