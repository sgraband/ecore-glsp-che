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
var browser_1 = require("@theia/core/lib/browser");
var message_service_1 = require("@theia/core/lib/common/message-service");
var progress_service_1 = require("@theia/core/lib/common/progress-service");
var selection_service_1 = require("@theia/core/lib/common/selection-service");
var uri_1 = require("@theia/core/lib/common/uri");
var uri_command_handler_1 = require("@theia/core/lib/common/uri-command-handler");
var browser_2 = require("@theia/editor/lib/browser");
var browser_3 = require("@theia/filesystem/lib/browser");
var filesystem_1 = require("@theia/filesystem/lib/common/filesystem");
var navigator_contribution_1 = require("@theia/navigator/lib/browser/navigator-contribution");
var browser_4 = require("@theia/workspace/lib/browser");
var inversify_1 = require("inversify");
var generate_protocol_1 = require("../common/generate-protocol");
exports.EXAMPLE_NAVIGATOR = __spread(navigator_contribution_1.NAVIGATOR_CONTEXT_MENU, ['example']);
exports.EXAMPLE_EDITOR = __spread(browser_2.EDITOR_CONTEXT_MENU, ['example']);
exports.NEW_ECORE_FILE = {
    id: 'file.newEcoreFile',
    category: 'File',
    label: 'New Ecore-File',
};
var EcoreCommandContribution = /** @class */ (function () {
    function EcoreCommandContribution() {
    }
    EcoreCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.NEW_ECORE_FILE, this.newWorkspaceRootUriAwareCommandHandler({
            execute: function (uri) { return _this.getDirectory(uri).then(function (parent) {
                if (parent) {
                    var parentUri_1 = new uri_1.default(parent.uri);
                    var createEcore_1 = function (name, nsPrefix, nsURI) {
                        if (name) {
                            _this.fileGenServer.generateEcore(name, nsPrefix, nsURI, parentUri_1.path.toString()).then(function () {
                                var ecorePath = parentUri_1.toString() + '/' + name + '.ecore';
                                var fileUriEcore = new uri_1.default(ecorePath);
                                browser_1.open(_this.openerService, fileUriEcore);
                            });
                        }
                    };
                    var showInput_1 = function (hint, prefix, onEnter) {
                        var quickOpenModel = {
                            onType: function (lookFor, acceptor) {
                                var dynamicItems = [];
                                var suffix = "Press 'Enter' to confirm or 'Escape' to cancel.";
                                dynamicItems.push(new SingleStringInputOpenItem(prefix + ": " + lookFor + ". " + suffix, function () { return onEnter(lookFor); }, function (mode) { return mode === browser_1.QuickOpenMode.OPEN; }, function () { return false; }));
                                acceptor(dynamicItems);
                            }
                        };
                        _this.quickOpenService.open(quickOpenModel, _this.getOptions(hint, false));
                    };
                    showInput_1("Name", "Name of Ecore", function (nameOfEcore) {
                        showInput_1("Prefix", "Prefix", function (prefix) {
                            showInput_1("URI", "URI", function (ecore_uri) {
                                createEcore_1(nameOfEcore, prefix, ecore_uri);
                            });
                        });
                    });
                }
            }); }
        }));
    };
    EcoreCommandContribution.prototype.withProgress = function (task) {
        return this.progressService.withProgress('', 'scm', task);
    };
    EcoreCommandContribution.prototype.newUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler);
    };
    EcoreCommandContribution.prototype.newMultiUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler, { multi: true });
    };
    EcoreCommandContribution.prototype.newWorkspaceRootUriAwareCommandHandler = function (handler) {
        return new WorkspaceRootUriAwareCommandHandler(this.workspaceService, this.selectionService, handler);
    };
    EcoreCommandContribution.prototype.getDirectory = function (candidate) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.getFileStat(candidate.toString())];
                    case 1:
                        stat = _a.sent();
                        if (stat && stat.isDirectory) {
                            return [2 /*return*/, stat];
                        }
                        return [2 /*return*/, this.getParent(candidate)];
                }
            });
        });
    };
    EcoreCommandContribution.prototype.getParent = function (candidate) {
        return this.fileSystem.getFileStat(candidate.parent.toString());
    };
    EcoreCommandContribution.prototype.getOptions = function (placeholder, fuzzyMatchLabel, onClose) {
        if (fuzzyMatchLabel === void 0) { fuzzyMatchLabel = true; }
        if (onClose === void 0) { onClose = function () { }; }
        return browser_1.QuickOpenOptions.resolve({
            placeholder: placeholder,
            fuzzyMatchLabel: fuzzyMatchLabel,
            fuzzySort: false,
            onClose: onClose
        });
    };
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], EcoreCommandContribution.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(selection_service_1.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], EcoreCommandContribution.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], EcoreCommandContribution.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], EcoreCommandContribution.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], EcoreCommandContribution.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_3.FileDialogService),
        __metadata("design:type", Object)
    ], EcoreCommandContribution.prototype, "fileDialogService", void 0);
    __decorate([
        inversify_1.inject(browser_4.WorkspaceService),
        __metadata("design:type", browser_4.WorkspaceService)
    ], EcoreCommandContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], EcoreCommandContribution.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], EcoreCommandContribution.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(generate_protocol_1.FileGenServer),
        __metadata("design:type", Object)
    ], EcoreCommandContribution.prototype, "fileGenServer", void 0);
    EcoreCommandContribution = __decorate([
        inversify_1.injectable()
    ], EcoreCommandContribution);
    return EcoreCommandContribution;
}());
exports.EcoreCommandContribution = EcoreCommandContribution;
var WorkspaceRootUriAwareCommandHandler = /** @class */ (function (_super) {
    __extends(WorkspaceRootUriAwareCommandHandler, _super);
    function WorkspaceRootUriAwareCommandHandler(workspaceService, selectionService, handler) {
        var _this = _super.call(this, selectionService, handler) || this;
        _this.workspaceService = workspaceService;
        _this.selectionService = selectionService;
        _this.handler = handler;
        return _this;
    }
    WorkspaceRootUriAwareCommandHandler.prototype.isEnabled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.prototype.isEnabled.apply(this, __spread(args)) && !!this.workspaceService.tryGetRoots().length;
    };
    WorkspaceRootUriAwareCommandHandler.prototype.isVisible = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.prototype.isVisible.apply(this, __spread(args)) && !!this.workspaceService.tryGetRoots().length;
    };
    WorkspaceRootUriAwareCommandHandler.prototype.getUri = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var uri = _super.prototype.getUri.apply(this, __spread(args));
        // If the URI is available, return it immediately.
        if (uri) {
            return uri;
        }
        // Return the first root if available.
        if (!!this.workspaceService.tryGetRoots().length) {
            return new uri_1.default(this.workspaceService.tryGetRoots()[0].uri);
        }
        return undefined;
    };
    return WorkspaceRootUriAwareCommandHandler;
}(uri_command_handler_1.UriAwareCommandHandler));
exports.WorkspaceRootUriAwareCommandHandler = WorkspaceRootUriAwareCommandHandler;
var SingleStringInputOpenItem = /** @class */ (function (_super) {
    __extends(SingleStringInputOpenItem, _super);
    function SingleStringInputOpenItem(label, execute, canRun, canClose) {
        if (execute === void 0) { execute = function () { }; }
        if (canRun === void 0) { canRun = function (mode) { return mode === browser_1.QuickOpenMode.OPEN; }; }
        if (canClose === void 0) { canClose = function (mode) { return true; }; }
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.execute = execute;
        _this.canRun = canRun;
        _this.canClose = canClose;
        return _this;
    }
    SingleStringInputOpenItem.prototype.getLabel = function () {
        return this.label;
    };
    SingleStringInputOpenItem.prototype.run = function (mode) {
        if (!this.canRun(mode)) {
            return false;
        }
        this.execute(this);
        return this.canClose(mode);
    };
    return SingleStringInputOpenItem;
}(browser_1.QuickOpenItem));
//# sourceMappingURL=EcoreCommandContribution.js.map