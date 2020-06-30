(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!***********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/@babel/runtime/regenerator/index.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "../../node_modules/glob-to-regexp/index.js":
/*!*****************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/glob-to-regexp/index.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (glob, opts) {
  if (typeof glob !== 'string') {
    throw new TypeError('Expected a string');
  }

  var str = String(glob);

  // The regexp we are building, as a string.
  var reStr = "";

  // Whether we are matching so called "extended" globs (like bash) and should
  // support single character matching, matching ranges of characters, group
  // matching, etc.
  var extended = opts ? !!opts.extended : false;

  // When globstar is _false_ (default), '/foo/*' is translated a regexp like
  // '^\/foo\/.*$' which will match any string beginning with '/foo/'
  // When globstar is _true_, '/foo/*' is translated to regexp like
  // '^\/foo\/[^/]*$' which will match any string beginning with '/foo/' BUT
  // which does not have a '/' to the right of it.
  // E.g. with '/foo/*' these will match: '/foo/bar', '/foo/bar.txt' but
  // these will not '/foo/bar/baz', '/foo/bar/baz.txt'
  // Lastely, when globstar is _true_, '/foo/**' is equivelant to '/foo/*' when
  // globstar is _false_
  var globstar = opts ? !!opts.globstar : false;

  // If we are doing extended matching, this boolean is true when we are inside
  // a group (eg {*.html,*.js}), and false otherwise.
  var inGroup = false;

  // RegExp flags (eg "i" ) to pass in to RegExp constructor.
  var flags = opts && typeof( opts.flags ) === "string" ? opts.flags : "";

  var c;
  for (var i = 0, len = str.length; i < len; i++) {
    c = str[i];

    switch (c) {
    case "\\":
    case "/":
    case "$":
    case "^":
    case "+":
    case ".":
    case "(":
    case ")":
    case "=":
    case "!":
    case "|":
      reStr += "\\" + c;
      break;

    case "?":
      if (extended) {
        reStr += ".";
	    break;
      }

    case "[":
    case "]":
      if (extended) {
        reStr += c;
	    break;
      }

    case "{":
      if (extended) {
        inGroup = true;
	    reStr += "(";
	    break;
      }

    case "}":
      if (extended) {
        inGroup = false;
	    reStr += ")";
	    break;
      }

    case ",":
      if (inGroup) {
        reStr += "|";
	    break;
      }
      reStr += "\\" + c;
      break;

    case "*":
      // Move over all consecutive "*"'s.
      // Also store the previous and next characters
      var prevChar = str[i - 1];
      var starCount = 1;
      while(str[i + 1] === "*") {
        starCount++;
        i++;
      }
      var nextChar = str[i + 1];

      if (!globstar) {
        // globstar is disabled, so treat any number of "*" as one
        reStr += ".*";
      } else {
        // globstar is enabled, so determine if this is a globstar segment
        var isGlobstar = starCount > 1                      // multiple "*"'s
          && (prevChar === "/" || prevChar === undefined)   // from the start of the segment
          && (nextChar === "/" || nextChar === undefined)   // to the end of the segment

        if (isGlobstar) {
          // it's a globstar, so match zero or more path segments
          reStr += "(?:[^/]*(?:\/|$))*";
          i++; // move over the "/"
        } else {
          // it's not a globstar, so only match one path segment
          reStr += "[^/]*";
        }
      }
      break;

    default:
      reStr += c;
    }
  }

  // When regexp 'g' flag is specified don't
  // constrain the regular expression with ^ & $
  if (!flags || !~flags.indexOf('g')) {
    reStr = "^" + reStr + "$";
  }

  return new RegExp(reStr, flags);
};


/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/disposable.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/disposable.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var services_1 = __webpack_require__(/*! ./services */ "../../node_modules/monaco-languageclient/lib/services.js");

exports.Disposable = services_1.Disposable;

var DisposableCollection = /*#__PURE__*/function () {
  function DisposableCollection() {
    _classCallCheck(this, DisposableCollection);

    this.disposables = [];
  }

  _createClass(DisposableCollection, [{
    key: "dispose",
    value: function dispose() {
      while (this.disposables.length !== 0) {
        this.disposables.pop().dispose();
      }
    }
  }, {
    key: "push",
    value: function push(disposable) {
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
    }
  }]);

  return DisposableCollection;
}();

exports.DisposableCollection = DisposableCollection;

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/services.js":
/*!*******************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/services.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

exports.Disposable = vscode_jsonrpc_1.Disposable;
exports.CancellationToken = vscode_jsonrpc_1.CancellationToken;
exports.Event = vscode_jsonrpc_1.Event;
exports.Emitter = vscode_jsonrpc_1.Emitter;

__export(__webpack_require__(/*! vscode-languageserver-protocol/lib/main */ "../../node_modules/vscode-languageserver-protocol/lib/main.js"));

var Services;

(function (Services) {
  var global = window;
  var symbol = Symbol('Services');

  Services.get = function () {
    var services = global[symbol];

    if (!services) {
      throw new Error('Language Client services has not been installed');
    }

    return services;
  };

  function install(services) {
    if (global[symbol]) {
      console.error(new Error('Language Client services has been overridden'));
    }

    global[symbol] = services;
    return vscode_jsonrpc_1.Disposable.create(function () {
      return global[symbol] = undefined;
    });
  }

  Services.install = install;
})(Services = exports.Services || (exports.Services = {}));

function isDocumentSelector(selector) {
  if (!selector || !Array.isArray(selector)) {
    return false;
  }

  return selector.every(function (value) {
    return typeof value === 'string' || vscode_languageserver_protocol_1.DocumentFilter.is(value);
  });
}

exports.isDocumentSelector = isDocumentSelector;
var SignatureHelpTriggerKind;

(function (SignatureHelpTriggerKind) {
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
  SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind = exports.SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = {})); // runtime support


var VsCodeDiagnosticSeverity;

(function (VsCodeDiagnosticSeverity) {
  VsCodeDiagnosticSeverity[VsCodeDiagnosticSeverity["Error"] = 0] = "Error";
  VsCodeDiagnosticSeverity[VsCodeDiagnosticSeverity["Warning"] = 1] = "Warning";
  VsCodeDiagnosticSeverity[VsCodeDiagnosticSeverity["Information"] = 2] = "Information";
  VsCodeDiagnosticSeverity[VsCodeDiagnosticSeverity["Hint"] = 3] = "Hint";
})(VsCodeDiagnosticSeverity = exports.VsCodeDiagnosticSeverity || (exports.VsCodeDiagnosticSeverity = {}));

var DocumentIdentifier;

(function (DocumentIdentifier) {
  function is(arg) {
    return !!arg && 'uri' in arg && 'languageId' in arg;
  }

  DocumentIdentifier.is = is;
})(DocumentIdentifier = exports.DocumentIdentifier || (exports.DocumentIdentifier = {}));

var ConfigurationTarget;

(function (ConfigurationTarget) {
  ConfigurationTarget[ConfigurationTarget["Global"] = 1] = "Global";
  ConfigurationTarget[ConfigurationTarget["Workspace"] = 2] = "Workspace";
  ConfigurationTarget[ConfigurationTarget["WorkspaceFolder"] = 3] = "WorkspaceFolder";
})(ConfigurationTarget = exports.ConfigurationTarget || (exports.ConfigurationTarget = {}));

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/vscode-api.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/vscode-api.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../../node_modules/vscode-uri/lib/esm/index.js");

var disposable_1 = __webpack_require__(/*! ./disposable */ "../../node_modules/monaco-languageclient/lib/disposable.js");

var services_1 = __webpack_require__(/*! ./services */ "../../node_modules/monaco-languageclient/lib/services.js");

var ServicesModule = __webpack_require__(/*! ./services */ "../../node_modules/monaco-languageclient/lib/services.js");

function createVSCodeApi(servicesProvider) {
  var _this = this;

  var unsupported = function unsupported() {
    throw new Error('unsupported');
  };

  var Uri = vscode_uri_1.URI;

  var CompletionItem = function CompletionItem(label, kind) {
    _classCallCheck(this, CompletionItem);

    this.label = label;
    this.kind = kind;
  };

  var CodeLens = /*#__PURE__*/function () {
    function CodeLens(range, command) {
      _classCallCheck(this, CodeLens);

      this.range = range;
      this.command = command;
    }

    _createClass(CodeLens, [{
      key: "isResolved",
      get: function get() {
        return !!this.command;
      }
    }]);

    return CodeLens;
  }();

  var DocumentLink = function DocumentLink(range, target) {
    _classCallCheck(this, DocumentLink);

    this.range = range;
    this.target = target;
  };

  var CodeActionKind = /*#__PURE__*/function () {
    function CodeActionKind(value) {
      _classCallCheck(this, CodeActionKind);

      this.value = value;
      this.contains = unsupported;
      this.intersects = unsupported;
    }

    _createClass(CodeActionKind, [{
      key: "append",
      value: function append(parts) {
        return new CodeActionKind(this.value ? this.value + CodeActionKind.sep + parts : parts);
      }
    }]);

    return CodeActionKind;
  }();

  CodeActionKind.sep = '.';
  CodeActionKind.Empty = new CodeActionKind('');
  CodeActionKind.QuickFix = new CodeActionKind('quickfix');
  CodeActionKind.Refactor = new CodeActionKind('refactor');
  CodeActionKind.RefactorExtract = CodeActionKind.Refactor.append('extract');
  CodeActionKind.RefactorInline = CodeActionKind.Refactor.append('inline');
  CodeActionKind.RefactorRewrite = CodeActionKind.Refactor.append('rewrite');
  CodeActionKind.Source = new CodeActionKind('source');
  CodeActionKind.SourceOrganizeImports = CodeActionKind.Source.append('organizeImports');
  CodeActionKind.SourceFixAll = CodeActionKind.Source.append('fixAll');

  var EmptyFileSystem = /*#__PURE__*/function () {
    function EmptyFileSystem() {
      _classCallCheck(this, EmptyFileSystem);
    }

    _createClass(EmptyFileSystem, [{
      key: "stat",
      value: function stat(uri) {
        throw new Error("Method not implemented.");
      }
    }, {
      key: "readDirectory",
      value: function readDirectory(uri) {
        return Promise.resolve([]);
      }
    }, {
      key: "createDirectory",
      value: function createDirectory(uri) {
        return Promise.resolve();
      }
    }, {
      key: "readFile",
      value: function readFile(uri) {
        return Promise.resolve(new Uint8Array(0));
      }
    }, {
      key: "writeFile",
      value: function writeFile(uri, content) {
        return Promise.resolve();
      }
    }, {
      key: "delete",
      value: function _delete(uri, options) {
        return Promise.resolve();
      }
    }, {
      key: "rename",
      value: function rename(source, target, options) {
        return Promise.resolve();
      }
    }, {
      key: "copy",
      value: function copy(source, target, options) {
        return Promise.resolve();
      }
    }]);

    return EmptyFileSystem;
  }();

  var workspace = {
    fs: new EmptyFileSystem(),
    workspaceFile: undefined,
    createFileSystemWatcher: function createFileSystemWatcher(globPattern, ignoreCreateEvents, ignoreChangeEvents, ignoreDeleteEvents) {
      var services = servicesProvider();

      if (typeof globPattern !== 'string') {
        throw new Error('unsupported');
      }

      if (services.workspace.createFileSystemWatcher) {
        var watcher = services.workspace.createFileSystemWatcher(globPattern, ignoreCreateEvents, ignoreChangeEvents, ignoreDeleteEvents);
        return Object.assign(watcher, {
          ignoreCreateEvents: !!ignoreCreateEvents,
          ignoreChangeEvents: !!ignoreChangeEvents,
          ignoreDeleteEvents: !!ignoreDeleteEvents
        });
      }

      return {
        ignoreCreateEvents: !!ignoreCreateEvents,
        ignoreChangeEvents: !!ignoreChangeEvents,
        ignoreDeleteEvents: !!ignoreDeleteEvents,
        onDidCreate: services_1.Event.None,
        onDidChange: services_1.Event.None,
        onDidDelete: services_1.Event.None,
        dispose: function dispose() {}
      };
    },
    applyEdit: function applyEdit(edit) {
      return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var services;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                services = servicesProvider();

                if (!services_1.WorkspaceEdit.is(edit)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", services.workspace.applyEdit(edit));

              case 3:
                throw new Error('unsupported');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    },
    getConfiguration: function getConfiguration(section, resource) {
      var _servicesProvider = servicesProvider(),
          workspace = _servicesProvider.workspace;

      var configuration = workspace.configurations ? workspace.configurations.getConfiguration(section, resource ? resource.toString() : undefined) : undefined;
      var result = {
        get: function get(section, defaultValue) {
          return configuration ? configuration.get(section, defaultValue) : defaultValue;
        },
        has: function has(section) {
          return configuration ? configuration.has(section) : false;
        },
        inspect: unsupported,
        update: unsupported
      };
      return Object.assign(result, {
        toJSON: function toJSON() {
          return configuration ? configuration.toJSON() : undefined;
        }
      });
    },

    get onDidChangeConfiguration() {
      var services = servicesProvider();

      if (services.workspace.configurations) {
        return services.workspace.configurations.onDidChangeConfiguration;
      }

      return services_1.Event.None;
    },

    get workspaceFolders() {
      var services = servicesProvider();

      if ('workspaceFolders' in services.workspace) {
        return services.workspace.workspaceFolders;
      }

      var rootUri = services.workspace.rootUri;

      if (!rootUri) {
        return undefined;
      }

      var uri = Uri.parse(rootUri);
      return [{
        uri: uri,
        index: 0,
        name: uri.toString()
      }];
    },

    get onDidChangeWorkspaceFolders() {
      var services = servicesProvider();
      return services.workspace.onDidChangeWorkspaceFolders || services_1.Event.None;
    },

    get textDocuments() {
      var services = servicesProvider();
      return services.workspace.textDocuments;
    },

    get onDidOpenTextDocument() {
      var services = servicesProvider();
      return services.workspace.onDidOpenTextDocument;
    },

    get onDidCloseTextDocument() {
      var services = servicesProvider();
      return services.workspace.onDidCloseTextDocument;
    },

    get onDidChangeTextDocument() {
      var services = servicesProvider();
      return function (listener, thisArgs, disposables) {
        return services.workspace.onDidChangeTextDocument(function (_ref) {
          var textDocument = _ref.textDocument,
              contentChanges = _ref.contentChanges;
          var l = listener.bind(thisArgs);
          l({
            document: textDocument,
            contentChanges: contentChanges
          });
        }, undefined, disposables);
      };
    },

    get onWillSaveTextDocument() {
      var services = servicesProvider();
      var onWillSaveTextDocument = services.workspace.onWillSaveTextDocument;

      if (!onWillSaveTextDocument) {
        return services_1.Event.None;
      }

      return function (listener, thisArgs, disposables) {
        return onWillSaveTextDocument(function (_ref2) {
          var textDocument = _ref2.textDocument,
              reason = _ref2.reason,
              _waitUntil = _ref2.waitUntil;
          var l = listener.bind(thisArgs);
          l({
            document: textDocument,
            reason: reason,
            waitUntil: function waitUntil(edits) {
              if (_waitUntil) {
                _waitUntil(edits);
              }
            }
          });
        }, undefined, disposables);
      };
    },

    get onDidSaveTextDocument() {
      var services = servicesProvider();
      return services.workspace.onDidSaveTextDocument || services_1.Event.None;
    },

    get onWillCreateFiles() {
      return services_1.Event.None;
    },

    get onDidCreateFiles() {
      return services_1.Event.None;
    },

    get onWillDeleteFiles() {
      return services_1.Event.None;
    },

    get onDidDeleteFiles() {
      return services_1.Event.None;
    },

    get onWillRenameFiles() {
      return services_1.Event.None;
    },

    get onDidRenameFiles() {
      return services_1.Event.None;
    },

    getWorkspaceFolder: unsupported,
    asRelativePath: unsupported,
    updateWorkspaceFolders: unsupported,
    findFiles: unsupported,
    saveAll: unsupported,
    openTextDocument: unsupported,
    registerTextDocumentContentProvider: unsupported,
    registerTaskProvider: unsupported,
    registerFileSystemProvider: unsupported,
    rootPath: undefined,
    name: undefined
  };

  function isVsCodeUri(v) {
    return v instanceof vscode_uri_1.URI !== undefined;
  }

  var ApiDiagnosticCollection = /*#__PURE__*/function () {
    function ApiDiagnosticCollection(name) {
      _classCallCheck(this, ApiDiagnosticCollection);

      this.name = name || 'default', this.services = servicesProvider();
      this.collection = this.services.languages.createDiagnosticCollection ? this.services.languages.createDiagnosticCollection(name) : undefined;
    }

    _createClass(ApiDiagnosticCollection, [{
      key: "entries",
      value: function entries() {}
    }, {
      key: "set",
      value: function set(arg0, arg1) {
        var _this2 = this;

        function toInternalSeverity(severity) {
          // there is a typing mismatch, trying to use the proper switch
          // mixes error with warnings etc...
          // just cast for now, this as the correct behaviour
          return severity; // we don't want to rely on the runtime vscode module here, so we use our version
          // of the enum

          /*
          switch ((severity as unknown) as VsCodeDiagnosticSeverity)
          {
              case VsCodeDiagnosticSeverity.Warning:
                  return DiagnosticSeverity.Warning;
              case VsCodeDiagnosticSeverity.Information:
                  return DiagnosticSeverity.Information;
              case VsCodeDiagnosticSeverity.Hint:
                  return DiagnosticSeverity.Hint;
              case VsCodeDiagnosticSeverity.Error:
                  return DiagnosticSeverity.Error;
          }
          return DiagnosticSeverity.Error;
          // */
        }

        if (isVsCodeUri(arg0)) {
          if (this.collection) {
            if (arg1) {
              this.collection.set(arg0.toString(), arg1.map(function (diag) {
                return {
                  range: diag.range,
                  code: diag.code,
                  source: diag.source,
                  message: diag.message,
                  tags: diag.tags,
                  relatedInformation: undefined,
                  severity: toInternalSeverity(diag.severity)
                };
              }));
            } else {
              this.collection.set(arg0.toString(), []);
            }
          }
        } else {
          arg0.forEach(function (element) {
            _this2.set(element[0], element[1]);
          });
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (this.collection) {
          this.collection.dispose();
        }
      }
    }, {
      key: "delete",
      value: function _delete(uri) {}
    }, {
      key: "clear",
      value: function clear() {}
    }, {
      key: "forEach",
      value: function forEach(callback, thisArg) {}
    }, {
      key: "get",
      value: function get(uri) {
        return undefined;
      }
    }, {
      key: "has",
      value: function has(uri) {
        return false;
      }
    }]);

    return ApiDiagnosticCollection;
  }();

  var languages = {
    match: function match(selector, document) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      if (!services_1.DocumentIdentifier.is(document)) {
        throw new Error('unexpected document: ' + JSON.stringify(document));
      }

      var services = servicesProvider();
      var result = services.languages.match(selector, document);
      return result ? 1 : 0;
    },
    registerCallHierarchyProvider: function registerCallHierarchyProvider(selector, provider) {
      /* empty stub for now */
      return {
        dispose: function dispose() {}
      };
    },
    createDiagnosticCollection: function createDiagnosticCollection(name) {
      return new ApiDiagnosticCollection(name);
    },
    registerCompletionItemProvider: function registerCompletionItemProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider2 = servicesProvider(),
          languages = _servicesProvider2.languages;

      if (!languages.registerCompletionItemProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      var resolveCompletionItem = provider.resolveCompletionItem;

      for (var _len = arguments.length, triggerCharacters = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        triggerCharacters[_key - 2] = arguments[_key];
      }

      return languages.registerCompletionItemProvider.apply(languages, [selector, {
        provideCompletionItems: function provideCompletionItems(_ref3, token) {
          var textDocument = _ref3.textDocument,
              position = _ref3.position,
              context = _ref3.context;
          return provider.provideCompletionItems(textDocument, position, token, context || {
            triggerKind: services_1.CompletionTriggerKind.Invoked
          });
        },
        resolveCompletionItem: resolveCompletionItem ? function (item, token) {
          return resolveCompletionItem(item, token);
        } : undefined
      }].concat(triggerCharacters));
    },
    registerCodeActionsProvider: function registerCodeActionsProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider3 = servicesProvider(),
          languages = _servicesProvider3.languages;

      if (!languages.registerCodeActionsProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerCodeActionsProvider(selector, {
        provideCodeActions: function provideCodeActions(_ref4, token) {
          var textDocument = _ref4.textDocument,
              range = _ref4.range,
              context = _ref4.context;
          return provider.provideCodeActions(textDocument, range, context, token);
        }
      });
    },
    registerCodeLensProvider: function registerCodeLensProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider4 = servicesProvider(),
          languages = _servicesProvider4.languages;

      if (!languages.registerCodeLensProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      var resolveCodeLens = provider.resolveCodeLens;
      return languages.registerCodeLensProvider(selector, {
        provideCodeLenses: function provideCodeLenses(_ref5, token) {
          var textDocument = _ref5.textDocument;
          return provider.provideCodeLenses(textDocument, token);
        },
        resolveCodeLens: resolveCodeLens ? function (codeLens, token) {
          return resolveCodeLens(codeLens, token);
        } : undefined
      });
    },
    registerDefinitionProvider: function registerDefinitionProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider5 = servicesProvider(),
          languages = _servicesProvider5.languages;

      if (!languages.registerDefinitionProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDefinitionProvider(selector, {
        provideDefinition: function provideDefinition(_ref6, token) {
          var textDocument = _ref6.textDocument,
              position = _ref6.position;
          return provider.provideDefinition(textDocument, position, token);
        }
      });
    },
    registerImplementationProvider: function registerImplementationProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider6 = servicesProvider(),
          languages = _servicesProvider6.languages;

      if (!languages.registerImplementationProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerImplementationProvider(selector, {
        provideImplementation: function provideImplementation(_ref7, token) {
          var textDocument = _ref7.textDocument,
              position = _ref7.position;
          return provider.provideImplementation(textDocument, position, token);
        }
      });
    },
    registerTypeDefinitionProvider: function registerTypeDefinitionProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider7 = servicesProvider(),
          languages = _servicesProvider7.languages;

      if (!languages.registerTypeDefinitionProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerTypeDefinitionProvider(selector, {
        provideTypeDefinition: function provideTypeDefinition(_ref8, token) {
          var textDocument = _ref8.textDocument,
              position = _ref8.position;
          return provider.provideTypeDefinition(textDocument, position, token);
        }
      });
    },
    registerDeclarationProvider: function registerDeclarationProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider8 = servicesProvider(),
          languages = _servicesProvider8.languages;

      if (!languages.registerDeclarationProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDeclarationProvider(selector, {
        provideDeclaration: function provideDeclaration(_ref9, token) {
          var textDocument = _ref9.textDocument,
              position = _ref9.position;
          return provider.provideDeclaration(textDocument, position, token);
        }
      });
    },
    registerHoverProvider: function registerHoverProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider9 = servicesProvider(),
          languages = _servicesProvider9.languages;

      if (languages.registerHoverProvider) {
        return languages.registerHoverProvider(selector, {
          provideHover: function provideHover(_ref10, token) {
            var textDocument = _ref10.textDocument,
                position = _ref10.position;
            return provider.provideHover(textDocument, position, token);
          }
        });
      }

      return disposable_1.Disposable.create(function () {});
    },
    registerDocumentHighlightProvider: function registerDocumentHighlightProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider10 = servicesProvider(),
          languages = _servicesProvider10.languages;

      if (!languages.registerDocumentHighlightProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDocumentHighlightProvider(selector, {
        provideDocumentHighlights: function provideDocumentHighlights(_ref11, token) {
          var textDocument = _ref11.textDocument,
              position = _ref11.position;
          return provider.provideDocumentHighlights(textDocument, position, token);
        }
      });
    },
    registerDocumentSymbolProvider: function registerDocumentSymbolProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider11 = servicesProvider(),
          languages = _servicesProvider11.languages;

      if (!languages.registerDocumentSymbolProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDocumentSymbolProvider(selector, {
        provideDocumentSymbols: function provideDocumentSymbols(_ref12, token) {
          var textDocument = _ref12.textDocument;
          return provider.provideDocumentSymbols(textDocument, token);
        }
      });
    },
    registerWorkspaceSymbolProvider: function registerWorkspaceSymbolProvider(provider) {
      var _servicesProvider12 = servicesProvider(),
          languages = _servicesProvider12.languages;

      if (!languages.registerWorkspaceSymbolProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerWorkspaceSymbolProvider({
        provideWorkspaceSymbols: function provideWorkspaceSymbols(_ref13, token) {
          var query = _ref13.query;
          return provider.provideWorkspaceSymbols(query, token);
        }
      });
    },
    registerReferenceProvider: function registerReferenceProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider13 = servicesProvider(),
          languages = _servicesProvider13.languages;

      if (!languages.registerReferenceProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerReferenceProvider(selector, {
        provideReferences: function provideReferences(_ref14, token) {
          var textDocument = _ref14.textDocument,
              position = _ref14.position,
              context = _ref14.context;
          return provider.provideReferences(textDocument, position, context, token);
        }
      });
    },
    registerRenameProvider: function registerRenameProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider14 = servicesProvider(),
          languages = _servicesProvider14.languages;

      if (!languages.registerRenameProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerRenameProvider(selector, {
        provideRenameEdits: function provideRenameEdits(_ref15, token) {
          var textDocument = _ref15.textDocument,
              position = _ref15.position,
              newName = _ref15.newName;
          return provider.provideRenameEdits(textDocument, position, newName, token);
        }
      });
    },
    registerDocumentFormattingEditProvider: function registerDocumentFormattingEditProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider15 = servicesProvider(),
          languages = _servicesProvider15.languages;

      if (!languages.registerDocumentFormattingEditProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDocumentFormattingEditProvider(selector, {
        provideDocumentFormattingEdits: function provideDocumentFormattingEdits(_ref16, token) {
          var textDocument = _ref16.textDocument,
              options = _ref16.options;
          return provider.provideDocumentFormattingEdits(textDocument, options, token);
        }
      });
    },
    registerDocumentRangeFormattingEditProvider: function registerDocumentRangeFormattingEditProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider16 = servicesProvider(),
          languages = _servicesProvider16.languages;

      if (!languages.registerDocumentRangeFormattingEditProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerDocumentRangeFormattingEditProvider(selector, {
        provideDocumentRangeFormattingEdits: function provideDocumentRangeFormattingEdits(_ref17, token) {
          var textDocument = _ref17.textDocument,
              range = _ref17.range,
              options = _ref17.options;
          return provider.provideDocumentRangeFormattingEdits(textDocument, range, options, token);
        }
      });
    },
    registerOnTypeFormattingEditProvider: function registerOnTypeFormattingEditProvider(selector, provider, firstTriggerCharacter) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider17 = servicesProvider(),
          languages = _servicesProvider17.languages;

      if (!languages.registerOnTypeFormattingEditProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      for (var _len2 = arguments.length, moreTriggerCharacter = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        moreTriggerCharacter[_key2 - 3] = arguments[_key2];
      }

      return languages.registerOnTypeFormattingEditProvider.apply(languages, [selector, {
        provideOnTypeFormattingEdits: function provideOnTypeFormattingEdits(_ref18, token) {
          var textDocument = _ref18.textDocument,
              position = _ref18.position,
              ch = _ref18.ch,
              options = _ref18.options;
          return provider.provideOnTypeFormattingEdits(textDocument, position, ch, options, token);
        }
      }, firstTriggerCharacter].concat(moreTriggerCharacter));
    },
    registerSignatureHelpProvider: function registerSignatureHelpProvider(selector, provider, firstItem) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider18 = servicesProvider(),
          languages = _servicesProvider18.languages;

      if (!languages.registerSignatureHelpProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      var triggerCharacters;
      var retriggerCharacters;

      if (typeof firstItem === 'string') {
        for (var _len3 = arguments.length, remaining = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          remaining[_key3 - 3] = arguments[_key3];
        }

        triggerCharacters = [firstItem].concat(remaining);
      } else if (firstItem) {
        triggerCharacters = firstItem.triggerCharacters;
        retriggerCharacters = firstItem.retriggerCharacters;
      }

      return languages.registerSignatureHelpProvider(selector, {
        triggerCharacters: triggerCharacters,
        retriggerCharacters: retriggerCharacters,
        provideSignatureHelp: function provideSignatureHelp(_ref19, token, context) {
          var textDocument = _ref19.textDocument,
              position = _ref19.position;
          return provider.provideSignatureHelp(textDocument, position, token, context);
        }
      });
    },
    registerDocumentLinkProvider: function registerDocumentLinkProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider19 = servicesProvider(),
          languages = _servicesProvider19.languages;

      if (!languages.registerDocumentLinkProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      var resolveDocumentLink = provider.resolveDocumentLink;
      return languages.registerDocumentLinkProvider(selector, {
        provideDocumentLinks: function provideDocumentLinks(_ref20, token) {
          var textDocument = _ref20.textDocument;
          return provider.provideDocumentLinks(textDocument, token);
        },
        resolveDocumentLink: resolveDocumentLink ? function (link, token) {
          return resolveDocumentLink(link, token);
        } : undefined
      });
    },
    registerColorProvider: function registerColorProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider20 = servicesProvider(),
          languages = _servicesProvider20.languages;

      if (!languages.registerColorProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerColorProvider(selector, {
        provideDocumentColors: function provideDocumentColors(_ref21, token) {
          var textDocument = _ref21.textDocument;
          return provider.provideDocumentColors(textDocument, token);
        },
        provideColorPresentations: function provideColorPresentations(_ref22, token) {
          var textDocument = _ref22.textDocument,
              color = _ref22.color,
              range = _ref22.range;
          return provider.provideColorPresentations(color, {
            document: textDocument,
            range: range
          }, token);
        }
      });
    },
    registerFoldingRangeProvider: function registerFoldingRangeProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider21 = servicesProvider(),
          languages = _servicesProvider21.languages;

      if (!languages.registerFoldingRangeProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerFoldingRangeProvider(selector, {
        provideFoldingRanges: function provideFoldingRanges(_ref23, token) {
          var textDocument = _ref23.textDocument;
          return provider.provideFoldingRanges(textDocument, {}, token);
        }
      });
    },
    registerSelectionRangeProvider: function registerSelectionRangeProvider(selector, provider) {
      if (!services_1.isDocumentSelector(selector)) {
        throw new Error('unexpected selector: ' + JSON.stringify(selector));
      }

      var _servicesProvider22 = servicesProvider(),
          languages = _servicesProvider22.languages;

      if (!languages.registerSelectionRangeProvider) {
        return disposable_1.Disposable.create(function () {});
      }

      return languages.registerSelectionRangeProvider(selector, {
        provideSelectionRanges: function provideSelectionRanges(_ref24, token) {
          var textDocument = _ref24.textDocument,
              positions = _ref24.positions;
          return provider.provideSelectionRanges(textDocument, positions, token);
        }
      });
    },
    getLanguages: unsupported,
    setTextDocumentLanguage: unsupported,
    getDiagnostics: unsupported,
    setLanguageConfiguration: unsupported,
    onDidChangeDiagnostics: unsupported
  };

  function showMessage(type, arg0) {
    if (typeof arg0 !== "string") {
      throw new Error('unexpected message: ' + JSON.stringify(arg0));
    }

    var message = arg0;

    for (var _len4 = arguments.length, arg1 = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      arg1[_key4 - 2] = arguments[_key4];
    }

    if (arg1 !== undefined && !Array.isArray(arg1)) {
      throw new Error('unexpected actions: ' + JSON.stringify(arg1));
    }

    var actions = arg1 || [];

    var _servicesProvider23 = servicesProvider(),
        window = _servicesProvider23.window;

    if (!window) {
      return Promise.resolve(undefined);
    }

    return window.showMessage.apply(window, [type, message].concat(actions));
  }

  var window = {
    showInformationMessage: showMessage.bind(undefined, services_1.MessageType.Info),
    showWarningMessage: showMessage.bind(undefined, services_1.MessageType.Warning),
    showErrorMessage: showMessage.bind(undefined, services_1.MessageType.Error),
    createOutputChannel: function createOutputChannel(name) {
      var _servicesProvider24 = servicesProvider(),
          window = _servicesProvider24.window;

      var createOutputChannel = window ? window.createOutputChannel : undefined;
      var channel = createOutputChannel ? createOutputChannel.bind(window)(name) : undefined;
      return {
        name: name,
        append: channel ? channel.append.bind(channel) : function () {},
        appendLine: channel ? channel.appendLine.bind(channel) : function () {},
        clear: unsupported,
        show: function show(arg) {
          if (arg !== undefined && typeof arg !== 'boolean') {
            throw new Error('unexpected preserveFocus argument: ' + JSON.stringify(arg, undefined, 4));
          }

          return channel ? channel.show(arg) : function () {};
        },
        hide: unsupported,
        dispose: channel ? channel.dispose.bind(channel) : function () {}
      };
    },
    withProgress: function withProgress(options, task) {
      var _servicesProvider25 = servicesProvider(),
          window = _servicesProvider25.window;

      if (window && window.withProgress) {
        return window.withProgress(options, task);
      }

      return task({
        report: function report() {}
      }, new vscode.CancellationTokenSource().token);
    },
    showTextDocument: unsupported,
    createTextEditorDecorationType: unsupported,
    showQuickPick: unsupported,
    showWorkspaceFolderPick: unsupported,
    showOpenDialog: unsupported,
    showSaveDialog: unsupported,
    showInputBox: unsupported,
    createWebviewPanel: unsupported,
    setStatusBarMessage: unsupported,
    withScmProgress: unsupported,
    createStatusBarItem: unsupported,
    createTerminal: unsupported,
    registerTreeDataProvider: unsupported,
    createTreeView: unsupported,
    registerWebviewPanelSerializer: unsupported,

    get activeTextEditor() {
      return unsupported();
    },

    get visibleTextEditors() {
      return unsupported();
    },

    onDidChangeActiveTextEditor: unsupported,
    onDidChangeVisibleTextEditors: unsupported,
    onDidChangeTextEditorSelection: unsupported,
    onDidChangeTextEditorVisibleRanges: unsupported,
    onDidChangeTextEditorOptions: unsupported,
    onDidChangeTextEditorViewColumn: unsupported,

    get terminals() {
      return unsupported();
    },

    get activeTerminal() {
      return unsupported();
    },

    onDidChangeActiveTerminal: unsupported,
    onDidOpenTerminal: unsupported,
    onDidCloseTerminal: unsupported,

    get state() {
      return unsupported();
    },

    onDidChangeWindowState: unsupported,
    createQuickPick: unsupported,
    createInputBox: unsupported,
    registerUriHandler: unsupported
  };
  var commands = {
    registerCommand: function registerCommand(command, callback, thisArg) {
      var _servicesProvider26 = servicesProvider(),
          commands = _servicesProvider26.commands;

      if (!commands) {
        return disposable_1.Disposable.create(function () {});
      }

      return commands.registerCommand(command, callback, thisArg);
    },
    registerTextEditorCommand: unsupported,
    executeCommand: unsupported,
    getCommands: unsupported
  };

  var CodeDisposable = /*#__PURE__*/function () {
    function CodeDisposable(callOnDispose) {
      _classCallCheck(this, CodeDisposable);

      this.callOnDispose = callOnDispose;
    }

    _createClass(CodeDisposable, [{
      key: "dispose",
      value: function dispose() {
        this.callOnDispose();
      }
    }]);

    return CodeDisposable;
  }();

  return {
    workspace: workspace,
    languages: languages,
    window: window,
    commands: commands,
    Uri: Uri,
    CompletionItem: CompletionItem,
    CodeLens: CodeLens,
    DocumentLink: DocumentLink,
    CodeActionKind: CodeActionKind,
    Disposable: CodeDisposable,
    SignatureHelpTriggerKind: services_1.SignatureHelpTriggerKind,
    DiagnosticSeverity: ServicesModule.DiagnosticSeverity
  };
}

exports.createVSCodeApi = createVSCodeApi;

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js":
/*!*******************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/vscode-compatibility.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var vscode_api_1 = __webpack_require__(/*! ./vscode-api */ "../../node_modules/monaco-languageclient/lib/vscode-api.js");

var services_1 = __webpack_require__(/*! ./services */ "../../node_modules/monaco-languageclient/lib/services.js");

module.exports = vscode_api_1.createVSCodeApi(services_1.Services.get);

/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/regenerator-runtime/runtime.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/main.js":
/*!************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/main.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

exports.ErrorCodes = vscode_jsonrpc_1.ErrorCodes;
exports.ResponseError = vscode_jsonrpc_1.ResponseError;
exports.CancellationToken = vscode_jsonrpc_1.CancellationToken;
exports.CancellationTokenSource = vscode_jsonrpc_1.CancellationTokenSource;
exports.Disposable = vscode_jsonrpc_1.Disposable;
exports.Event = vscode_jsonrpc_1.Event;
exports.Emitter = vscode_jsonrpc_1.Emitter;
exports.Trace = vscode_jsonrpc_1.Trace;
exports.TraceFormat = vscode_jsonrpc_1.TraceFormat;
exports.SetTraceNotification = vscode_jsonrpc_1.SetTraceNotification;
exports.LogTraceNotification = vscode_jsonrpc_1.LogTraceNotification;
exports.RequestType = vscode_jsonrpc_1.RequestType;
exports.RequestType0 = vscode_jsonrpc_1.RequestType0;
exports.NotificationType = vscode_jsonrpc_1.NotificationType;
exports.NotificationType0 = vscode_jsonrpc_1.NotificationType0;
exports.MessageReader = vscode_jsonrpc_1.MessageReader;
exports.MessageWriter = vscode_jsonrpc_1.MessageWriter;
exports.ConnectionStrategy = vscode_jsonrpc_1.ConnectionStrategy;
exports.StreamMessageReader = vscode_jsonrpc_1.StreamMessageReader;
exports.StreamMessageWriter = vscode_jsonrpc_1.StreamMessageWriter;
exports.IPCMessageReader = vscode_jsonrpc_1.IPCMessageReader;
exports.IPCMessageWriter = vscode_jsonrpc_1.IPCMessageWriter;
exports.createClientPipeTransport = vscode_jsonrpc_1.createClientPipeTransport;
exports.createServerPipeTransport = vscode_jsonrpc_1.createServerPipeTransport;
exports.generateRandomPipeName = vscode_jsonrpc_1.generateRandomPipeName;
exports.createClientSocketTransport = vscode_jsonrpc_1.createClientSocketTransport;
exports.createServerSocketTransport = vscode_jsonrpc_1.createServerSocketTransport;
exports.ProgressType = vscode_jsonrpc_1.ProgressType;

__export(__webpack_require__(/*! vscode-languageserver-types */ "../../node_modules/vscode-languageserver-types/lib/esm/main.js"));

__export(__webpack_require__(/*! ./protocol */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.js"));

var callHierarchy = __webpack_require__(/*! ./protocol.callHierarchy.proposed */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.callHierarchy.proposed.js");

var st = __webpack_require__(/*! ./protocol.sematicTokens.proposed */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.sematicTokens.proposed.js");

var Proposed;

(function (Proposed) {
  var CallHierarchyPrepareRequest;

  (function (CallHierarchyPrepareRequest) {
    CallHierarchyPrepareRequest.method = callHierarchy.CallHierarchyPrepareRequest.method;
    CallHierarchyPrepareRequest.type = callHierarchy.CallHierarchyPrepareRequest.type;
  })(CallHierarchyPrepareRequest = Proposed.CallHierarchyPrepareRequest || (Proposed.CallHierarchyPrepareRequest = {}));

  var CallHierarchyIncomingCallsRequest;

  (function (CallHierarchyIncomingCallsRequest) {
    CallHierarchyIncomingCallsRequest.method = callHierarchy.CallHierarchyIncomingCallsRequest.method;
    CallHierarchyIncomingCallsRequest.type = callHierarchy.CallHierarchyIncomingCallsRequest.type;
  })(CallHierarchyIncomingCallsRequest = Proposed.CallHierarchyIncomingCallsRequest || (Proposed.CallHierarchyIncomingCallsRequest = {}));

  var CallHierarchyOutgoingCallsRequest;

  (function (CallHierarchyOutgoingCallsRequest) {
    CallHierarchyOutgoingCallsRequest.method = callHierarchy.CallHierarchyOutgoingCallsRequest.method;
    CallHierarchyOutgoingCallsRequest.type = callHierarchy.CallHierarchyOutgoingCallsRequest.type;
  })(CallHierarchyOutgoingCallsRequest = Proposed.CallHierarchyOutgoingCallsRequest || (Proposed.CallHierarchyOutgoingCallsRequest = {}));

  Proposed.SemanticTokenTypes = st.SemanticTokenTypes;
  Proposed.SemanticTokenModifiers = st.SemanticTokenModifiers;
  Proposed.SemanticTokens = st.SemanticTokens;
  var SemanticTokensRequest;

  (function (SemanticTokensRequest) {
    SemanticTokensRequest.method = st.SemanticTokensRequest.method;
    SemanticTokensRequest.type = st.SemanticTokensRequest.type;
  })(SemanticTokensRequest = Proposed.SemanticTokensRequest || (Proposed.SemanticTokensRequest = {}));

  var SemanticTokensEditsRequest;

  (function (SemanticTokensEditsRequest) {
    SemanticTokensEditsRequest.method = st.SemanticTokensEditsRequest.method;
    SemanticTokensEditsRequest.type = st.SemanticTokensEditsRequest.type;
  })(SemanticTokensEditsRequest = Proposed.SemanticTokensEditsRequest || (Proposed.SemanticTokensEditsRequest = {}));

  var SemanticTokensRangeRequest;

  (function (SemanticTokensRangeRequest) {
    SemanticTokensRangeRequest.method = st.SemanticTokensRangeRequest.method;
    SemanticTokensRangeRequest.type = st.SemanticTokensRangeRequest.type;
  })(SemanticTokensRangeRequest = Proposed.SemanticTokensRangeRequest || (Proposed.SemanticTokensRangeRequest = {}));
})(Proposed = exports.Proposed || (exports.Proposed = {}));

function createProtocolConnection(reader, writer, logger, strategy) {
  return vscode_jsonrpc_1.createMessageConnection(reader, writer, logger, strategy);
}

exports.createProtocolConnection = createProtocolConnection;

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/messages.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/messages.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

var ProtocolRequestType0 = /*#__PURE__*/function (_vscode_jsonrpc_1$Req) {
  _inherits(ProtocolRequestType0, _vscode_jsonrpc_1$Req);

  var _super = _createSuper(ProtocolRequestType0);

  function ProtocolRequestType0(method) {
    _classCallCheck(this, ProtocolRequestType0);

    return _super.call(this, method);
  }

  return ProtocolRequestType0;
}(vscode_jsonrpc_1.RequestType0);

exports.ProtocolRequestType0 = ProtocolRequestType0;

var ProtocolRequestType = /*#__PURE__*/function (_vscode_jsonrpc_1$Req2) {
  _inherits(ProtocolRequestType, _vscode_jsonrpc_1$Req2);

  var _super2 = _createSuper(ProtocolRequestType);

  function ProtocolRequestType(method) {
    _classCallCheck(this, ProtocolRequestType);

    return _super2.call(this, method);
  }

  return ProtocolRequestType;
}(vscode_jsonrpc_1.RequestType);

exports.ProtocolRequestType = ProtocolRequestType;

var ProtocolNotificationType = /*#__PURE__*/function (_vscode_jsonrpc_1$Not) {
  _inherits(ProtocolNotificationType, _vscode_jsonrpc_1$Not);

  var _super3 = _createSuper(ProtocolNotificationType);

  function ProtocolNotificationType(method) {
    _classCallCheck(this, ProtocolNotificationType);

    return _super3.call(this, method);
  }

  return ProtocolNotificationType;
}(vscode_jsonrpc_1.NotificationType);

exports.ProtocolNotificationType = ProtocolNotificationType;

var ProtocolNotificationType0 = /*#__PURE__*/function (_vscode_jsonrpc_1$Not2) {
  _inherits(ProtocolNotificationType0, _vscode_jsonrpc_1$Not2);

  var _super4 = _createSuper(ProtocolNotificationType0);

  function ProtocolNotificationType0(method) {
    _classCallCheck(this, ProtocolNotificationType0);

    return _super4.call(this, method);
  }

  return ProtocolNotificationType0;
}(vscode_jsonrpc_1.NotificationType0);

exports.ProtocolNotificationType0 = ProtocolNotificationType0;

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.callHierarchy.proposed.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.callHierarchy.proposed.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) TypeFox and others. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * A request to result a `CallHierarchyItem` in a document at a given position.
 * Can be used as an input to a incoming or outgoing call hierarchy.
 *
 * @since 3.16.0 - Proposed state
 */


var CallHierarchyPrepareRequest;

(function (CallHierarchyPrepareRequest) {
  CallHierarchyPrepareRequest.method = 'textDocument/prepareCallHierarchy';
  CallHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest.method);
})(CallHierarchyPrepareRequest = exports.CallHierarchyPrepareRequest || (exports.CallHierarchyPrepareRequest = {}));
/**
 * A request to resolve the incoming calls for a given `CallHierarchyItem`.
 *
 * @since 3.16.0 - Proposed state
 */


var CallHierarchyIncomingCallsRequest;

(function (CallHierarchyIncomingCallsRequest) {
  CallHierarchyIncomingCallsRequest.method = 'callHierarchy/incomingCalls';
  CallHierarchyIncomingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest.method);
})(CallHierarchyIncomingCallsRequest = exports.CallHierarchyIncomingCallsRequest || (exports.CallHierarchyIncomingCallsRequest = {}));
/**
 * A request to resolve the outgoing calls for a given `CallHierarchyItem`.
 *
 * @since 3.16.0 - Proposed state
 */


var CallHierarchyOutgoingCallsRequest;

(function (CallHierarchyOutgoingCallsRequest) {
  CallHierarchyOutgoingCallsRequest.method = 'callHierarchy/outgoingCalls';
  CallHierarchyOutgoingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest.method);
})(CallHierarchyOutgoingCallsRequest = exports.CallHierarchyOutgoingCallsRequest || (exports.CallHierarchyOutgoingCallsRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.colorProvider.js":
/*!******************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.colorProvider.js ***!
  \******************************************************************************************************************************************************/
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

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * A request to list all color symbols found in a given text document. The request's
 * parameter is of type [DocumentColorParams](#DocumentColorParams) the
 * response is of type [ColorInformation[]](#ColorInformation) or a Thenable
 * that resolves to such.
 */


var DocumentColorRequest;

(function (DocumentColorRequest) {
  DocumentColorRequest.method = 'textDocument/documentColor';
  DocumentColorRequest.type = new messages_1.ProtocolRequestType(DocumentColorRequest.method);
  /** @deprecated Use DocumentColorRequest.type */

  DocumentColorRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DocumentColorRequest = exports.DocumentColorRequest || (exports.DocumentColorRequest = {}));
/**
 * A request to list all presentation for a color. The request's
 * parameter is of type [ColorPresentationParams](#ColorPresentationParams) the
 * response is of type [ColorInformation[]](#ColorInformation) or a Thenable
 * that resolves to such.
 */


var ColorPresentationRequest;

(function (ColorPresentationRequest) {
  ColorPresentationRequest.type = new messages_1.ProtocolRequestType('textDocument/colorPresentation');
})(ColorPresentationRequest = exports.ColorPresentationRequest || (exports.ColorPresentationRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.configuration.js":
/*!******************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.configuration.js ***!
  \******************************************************************************************************************************************************/
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

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * The 'workspace/configuration' request is sent from the server to the client to fetch a certain
 * configuration setting.
 *
 * This pull model replaces the old push model were the client signaled configuration change via an
 * event. If the server still needs to react to configuration changes (since the server caches the
 * result of `workspace/configuration` requests) the server should register for an empty configuration
 * change event and empty the cache if such an event is received.
 */


var ConfigurationRequest;

(function (ConfigurationRequest) {
  ConfigurationRequest.type = new messages_1.ProtocolRequestType('workspace/configuration');
})(ConfigurationRequest = exports.ConfigurationRequest || (exports.ConfigurationRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.declaration.js":
/*!****************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.declaration.js ***!
  \****************************************************************************************************************************************************/
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

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js"); // @ts-ignore: to avoid inlining LocatioLink as dynamic import


var __noDynamicImport;
/**
 * A request to resolve the type definition locations of a symbol at a given text
 * document position. The request's parameter is of type [TextDocumentPositioParams]
 * (#TextDocumentPositionParams) the response is of type [Declaration](#Declaration)
 * or a typed array of [DeclarationLink](#DeclarationLink) or a Thenable that resolves
 * to such.
 */


var DeclarationRequest;

(function (DeclarationRequest) {
  DeclarationRequest.method = 'textDocument/declaration';
  DeclarationRequest.type = new messages_1.ProtocolRequestType(DeclarationRequest.method);
  /** @deprecated Use DeclarationRequest.type */

  DeclarationRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DeclarationRequest = exports.DeclarationRequest || (exports.DeclarationRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.foldingRange.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.foldingRange.js ***!
  \*****************************************************************************************************************************************************/
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

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * Enum of known range kinds
 */


var FoldingRangeKind;

(function (FoldingRangeKind) {
  /**
   * Folding range for a comment
   */
  FoldingRangeKind["Comment"] = "comment";
  /**
   * Folding range for a imports or includes
   */

  FoldingRangeKind["Imports"] = "imports";
  /**
   * Folding range for a region (e.g. `#region`)
   */

  FoldingRangeKind["Region"] = "region";
})(FoldingRangeKind = exports.FoldingRangeKind || (exports.FoldingRangeKind = {}));
/**
 * A request to provide folding ranges in a document. The request's
 * parameter is of type [FoldingRangeParams](#FoldingRangeParams), the
 * response is of type [FoldingRangeList](#FoldingRangeList) or a Thenable
 * that resolves to such.
 */


var FoldingRangeRequest;

(function (FoldingRangeRequest) {
  FoldingRangeRequest.method = 'textDocument/foldingRange';
  FoldingRangeRequest.type = new messages_1.ProtocolRequestType(FoldingRangeRequest.method);
  /** @deprecated Use FoldingRangeRequest.type */

  FoldingRangeRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(FoldingRangeRequest = exports.FoldingRangeRequest || (exports.FoldingRangeRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.implementation.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.implementation.js ***!
  \*******************************************************************************************************************************************************/
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

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js"); // @ts-ignore: to avoid inlining LocatioLink as dynamic import


var __noDynamicImport;
/**
 * A request to resolve the implementation locations of a symbol at a given text
 * document position. The request's parameter is of type [TextDocumentPositioParams]
 * (#TextDocumentPositionParams) the response is of type [Definition](#Definition) or a
 * Thenable that resolves to such.
 */


var ImplementationRequest;

(function (ImplementationRequest) {
  ImplementationRequest.method = 'textDocument/implementation';
  ImplementationRequest.type = new messages_1.ProtocolRequestType(ImplementationRequest.method);
  /** @deprecated Use ImplementationRequest.type */

  ImplementationRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(ImplementationRequest = exports.ImplementationRequest || (exports.ImplementationRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Is = __webpack_require__(/*! ./utils/is */ "../../node_modules/vscode-languageserver-protocol/lib/utils/is.js");

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js");

var protocol_implementation_1 = __webpack_require__(/*! ./protocol.implementation */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.implementation.js");

exports.ImplementationRequest = protocol_implementation_1.ImplementationRequest;

var protocol_typeDefinition_1 = __webpack_require__(/*! ./protocol.typeDefinition */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.typeDefinition.js");

exports.TypeDefinitionRequest = protocol_typeDefinition_1.TypeDefinitionRequest;

var protocol_workspaceFolders_1 = __webpack_require__(/*! ./protocol.workspaceFolders */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.workspaceFolders.js");

exports.WorkspaceFoldersRequest = protocol_workspaceFolders_1.WorkspaceFoldersRequest;
exports.DidChangeWorkspaceFoldersNotification = protocol_workspaceFolders_1.DidChangeWorkspaceFoldersNotification;

var protocol_configuration_1 = __webpack_require__(/*! ./protocol.configuration */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.configuration.js");

exports.ConfigurationRequest = protocol_configuration_1.ConfigurationRequest;

var protocol_colorProvider_1 = __webpack_require__(/*! ./protocol.colorProvider */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.colorProvider.js");

exports.DocumentColorRequest = protocol_colorProvider_1.DocumentColorRequest;
exports.ColorPresentationRequest = protocol_colorProvider_1.ColorPresentationRequest;

var protocol_foldingRange_1 = __webpack_require__(/*! ./protocol.foldingRange */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.foldingRange.js");

exports.FoldingRangeRequest = protocol_foldingRange_1.FoldingRangeRequest;

var protocol_declaration_1 = __webpack_require__(/*! ./protocol.declaration */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.declaration.js");

exports.DeclarationRequest = protocol_declaration_1.DeclarationRequest;

var protocol_selectionRange_1 = __webpack_require__(/*! ./protocol.selectionRange */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.selectionRange.js");

exports.SelectionRangeRequest = protocol_selectionRange_1.SelectionRangeRequest;

var protocol_progress_1 = __webpack_require__(/*! ./protocol.progress */ "../../node_modules/vscode-languageserver-protocol/lib/protocol.progress.js");

exports.WorkDoneProgress = protocol_progress_1.WorkDoneProgress;
exports.WorkDoneProgressCreateRequest = protocol_progress_1.WorkDoneProgressCreateRequest;
exports.WorkDoneProgressCancelNotification = protocol_progress_1.WorkDoneProgressCancelNotification; // @ts-ignore: to avoid inlining LocatioLink as dynamic import

var __noDynamicImport;
/**
 * The DocumentFilter namespace provides helper functions to work with
 * [DocumentFilter](#DocumentFilter) literals.
 */


var DocumentFilter;

(function (DocumentFilter) {
  function is(value) {
    var candidate = value;
    return Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern);
  }

  DocumentFilter.is = is;
})(DocumentFilter = exports.DocumentFilter || (exports.DocumentFilter = {}));
/**
 * The DocumentSelector namespace provides helper functions to work with
 * [DocumentSelector](#DocumentSelector)s.
 */


var DocumentSelector;

(function (DocumentSelector) {
  function is(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    var _iterator = _createForOfIteratorHelper(value),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;

        if (!Is.string(elem) && !DocumentFilter.is(elem)) {
          return false;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return true;
  }

  DocumentSelector.is = is;
})(DocumentSelector = exports.DocumentSelector || (exports.DocumentSelector = {}));
/**
 * The `client/registerCapability` request is sent from the server to the client to register a new capability
 * handler on the client side.
 */


var RegistrationRequest;

(function (RegistrationRequest) {
  RegistrationRequest.type = new messages_1.ProtocolRequestType('client/registerCapability');
})(RegistrationRequest = exports.RegistrationRequest || (exports.RegistrationRequest = {}));
/**
 * The `client/unregisterCapability` request is sent from the server to the client to unregister a previously registered capability
 * handler on the client side.
 */


var UnregistrationRequest;

(function (UnregistrationRequest) {
  UnregistrationRequest.type = new messages_1.ProtocolRequestType('client/unregisterCapability');
})(UnregistrationRequest = exports.UnregistrationRequest || (exports.UnregistrationRequest = {}));

var ResourceOperationKind;

(function (ResourceOperationKind) {
  /**
   * Supports creating new files and folders.
   */
  ResourceOperationKind.Create = 'create';
  /**
   * Supports renaming existing files and folders.
   */

  ResourceOperationKind.Rename = 'rename';
  /**
   * Supports deleting existing files and folders.
   */

  ResourceOperationKind.Delete = 'delete';
})(ResourceOperationKind = exports.ResourceOperationKind || (exports.ResourceOperationKind = {}));

var FailureHandlingKind;

(function (FailureHandlingKind) {
  /**
   * Applying the workspace change is simply aborted if one of the changes provided
   * fails. All operations executed before the failing operation stay executed.
   */
  FailureHandlingKind.Abort = 'abort';
  /**
   * All operations are executed transactional. That means they either all
   * succeed or no changes at all are applied to the workspace.
   */

  FailureHandlingKind.Transactional = 'transactional';
  /**
   * If the workspace edit contains only textual file changes they are executed transactional.
   * If resource changes (create, rename or delete file) are part of the change the failure
   * handling startegy is abort.
   */

  FailureHandlingKind.TextOnlyTransactional = 'textOnlyTransactional';
  /**
   * The client tries to undo the operations already executed. But there is no
   * guarantee that this is succeeding.
   */

  FailureHandlingKind.Undo = 'undo';
})(FailureHandlingKind = exports.FailureHandlingKind || (exports.FailureHandlingKind = {}));
/**
 * The StaticRegistrationOptions namespace provides helper functions to work with
 * [StaticRegistrationOptions](#StaticRegistrationOptions) literals.
 */


var StaticRegistrationOptions;

(function (StaticRegistrationOptions) {
  function hasId(value) {
    var candidate = value;
    return candidate && Is.string(candidate.id) && candidate.id.length > 0;
  }

  StaticRegistrationOptions.hasId = hasId;
})(StaticRegistrationOptions = exports.StaticRegistrationOptions || (exports.StaticRegistrationOptions = {}));
/**
 * The TextDocumentRegistrationOptions namespace provides helper functions to work with
 * [TextDocumentRegistrationOptions](#TextDocumentRegistrationOptions) literals.
 */


var TextDocumentRegistrationOptions;

(function (TextDocumentRegistrationOptions) {
  function is(value) {
    var candidate = value;
    return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
  }

  TextDocumentRegistrationOptions.is = is;
})(TextDocumentRegistrationOptions = exports.TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = {}));
/**
 * The WorkDoneProgressOptions namespace provides helper functions to work with
 * [WorkDoneProgressOptions](#WorkDoneProgressOptions) literals.
 */


var WorkDoneProgressOptions;

(function (WorkDoneProgressOptions) {
  function is(value) {
    var candidate = value;
    return Is.objectLiteral(candidate) && (candidate.workDoneProgress === undefined || Is["boolean"](candidate.workDoneProgress));
  }

  WorkDoneProgressOptions.is = is;

  function hasWorkDoneProgress(value) {
    var candidate = value;
    return candidate && Is["boolean"](candidate.workDoneProgress);
  }

  WorkDoneProgressOptions.hasWorkDoneProgress = hasWorkDoneProgress;
})(WorkDoneProgressOptions = exports.WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = {}));
/**
 * The initialize request is sent from the client to the server.
 * It is sent once as the request after starting up the server.
 * The requests parameter is of type [InitializeParams](#InitializeParams)
 * the response if of type [InitializeResult](#InitializeResult) of a Thenable that
 * resolves to such.
 */


var InitializeRequest;

(function (InitializeRequest) {
  InitializeRequest.type = new messages_1.ProtocolRequestType('initialize');
})(InitializeRequest = exports.InitializeRequest || (exports.InitializeRequest = {}));
/**
 * Known error codes for an `InitializeError`;
 */


var InitializeError;

(function (InitializeError) {
  /**
   * If the protocol version provided by the client can't be handled by the server.
   * @deprecated This initialize error got replaced by client capabilities. There is
   * no version handshake in version 3.0x
   */
  InitializeError.unknownProtocolVersion = 1;
})(InitializeError = exports.InitializeError || (exports.InitializeError = {}));
/**
 * The intialized notification is sent from the client to the
 * server after the client is fully initialized and the server
 * is allowed to send requests from the server to the client.
 */


var InitializedNotification;

(function (InitializedNotification) {
  InitializedNotification.type = new messages_1.ProtocolNotificationType('initialized');
})(InitializedNotification = exports.InitializedNotification || (exports.InitializedNotification = {})); //---- Shutdown Method ----

/**
 * A shutdown request is sent from the client to the server.
 * It is sent once when the client decides to shutdown the
 * server. The only notification that is sent after a shutdown request
 * is the exit event.
 */


var ShutdownRequest;

(function (ShutdownRequest) {
  ShutdownRequest.type = new messages_1.ProtocolRequestType0('shutdown');
})(ShutdownRequest = exports.ShutdownRequest || (exports.ShutdownRequest = {})); //---- Exit Notification ----

/**
 * The exit event is sent from the client to the server to
 * ask the server to exit its process.
 */


var ExitNotification;

(function (ExitNotification) {
  ExitNotification.type = new messages_1.ProtocolNotificationType0('exit');
})(ExitNotification = exports.ExitNotification || (exports.ExitNotification = {}));
/**
 * The configuration change notification is sent from the client to the server
 * when the client's configuration has changed. The notification contains
 * the changed configuration as defined by the language client.
 */


var DidChangeConfigurationNotification;

(function (DidChangeConfigurationNotification) {
  DidChangeConfigurationNotification.type = new messages_1.ProtocolNotificationType('workspace/didChangeConfiguration');
})(DidChangeConfigurationNotification = exports.DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = {})); //---- Message show and log notifications ----

/**
 * The message type
 */


var MessageType;

(function (MessageType) {
  /**
   * An error message.
   */
  MessageType.Error = 1;
  /**
   * A warning message.
   */

  MessageType.Warning = 2;
  /**
   * An information message.
   */

  MessageType.Info = 3;
  /**
   * A log message.
   */

  MessageType.Log = 4;
})(MessageType = exports.MessageType || (exports.MessageType = {}));
/**
 * The show message notification is sent from a server to a client to ask
 * the client to display a particular message in the user interface.
 */


var ShowMessageNotification;

(function (ShowMessageNotification) {
  ShowMessageNotification.type = new messages_1.ProtocolNotificationType('window/showMessage');
})(ShowMessageNotification = exports.ShowMessageNotification || (exports.ShowMessageNotification = {}));
/**
 * The show message request is sent from the server to the client to show a message
 * and a set of options actions to the user.
 */


var ShowMessageRequest;

(function (ShowMessageRequest) {
  ShowMessageRequest.type = new messages_1.ProtocolRequestType('window/showMessageRequest');
})(ShowMessageRequest = exports.ShowMessageRequest || (exports.ShowMessageRequest = {}));
/**
 * The log message notification is sent from the server to the client to ask
 * the client to log a particular message.
 */


var LogMessageNotification;

(function (LogMessageNotification) {
  LogMessageNotification.type = new messages_1.ProtocolNotificationType('window/logMessage');
})(LogMessageNotification = exports.LogMessageNotification || (exports.LogMessageNotification = {})); //---- Telemetry notification

/**
 * The telemetry event notification is sent from the server to the client to ask
 * the client to log telemetry data.
 */


var TelemetryEventNotification;

(function (TelemetryEventNotification) {
  TelemetryEventNotification.type = new messages_1.ProtocolNotificationType('telemetry/event');
})(TelemetryEventNotification = exports.TelemetryEventNotification || (exports.TelemetryEventNotification = {}));
/**
 * Defines how the host (editor) should sync
 * document changes to the language server.
 */


var TextDocumentSyncKind;

(function (TextDocumentSyncKind) {
  /**
   * Documents should not be synced at all.
   */
  TextDocumentSyncKind.None = 0;
  /**
   * Documents are synced by always sending the full content
   * of the document.
   */

  TextDocumentSyncKind.Full = 1;
  /**
   * Documents are synced by sending the full content on open.
   * After that only incremental updates to the document are
   * send.
   */

  TextDocumentSyncKind.Incremental = 2;
})(TextDocumentSyncKind = exports.TextDocumentSyncKind || (exports.TextDocumentSyncKind = {}));
/**
 * The document open notification is sent from the client to the server to signal
 * newly opened text documents. The document's truth is now managed by the client
 * and the server must not try to read the document's truth using the document's
 * uri. Open in this sense means it is managed by the client. It doesn't necessarily
 * mean that its content is presented in an editor. An open notification must not
 * be sent more than once without a corresponding close notification send before.
 * This means open and close notification must be balanced and the max open count
 * is one.
 */


var DidOpenTextDocumentNotification;

(function (DidOpenTextDocumentNotification) {
  DidOpenTextDocumentNotification.method = 'textDocument/didOpen';
  DidOpenTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification.method);
})(DidOpenTextDocumentNotification = exports.DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = {}));
/**
 * The document change notification is sent from the client to the server to signal
 * changes to a text document.
 */


var DidChangeTextDocumentNotification;

(function (DidChangeTextDocumentNotification) {
  DidChangeTextDocumentNotification.method = 'textDocument/didChange';
  DidChangeTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification.method);
})(DidChangeTextDocumentNotification = exports.DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = {}));
/**
 * The document close notification is sent from the client to the server when
 * the document got closed in the client. The document's truth now exists where
 * the document's uri points to (e.g. if the document's uri is a file uri the
 * truth now exists on disk). As with the open notification the close notification
 * is about managing the document's content. Receiving a close notification
 * doesn't mean that the document was open in an editor before. A close
 * notification requires a previous open notification to be sent.
 */


var DidCloseTextDocumentNotification;

(function (DidCloseTextDocumentNotification) {
  DidCloseTextDocumentNotification.method = 'textDocument/didClose';
  DidCloseTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification.method);
})(DidCloseTextDocumentNotification = exports.DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = {}));
/**
 * The document save notification is sent from the client to the server when
 * the document got saved in the client.
 */


var DidSaveTextDocumentNotification;

(function (DidSaveTextDocumentNotification) {
  DidSaveTextDocumentNotification.method = 'textDocument/didSave';
  DidSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification.method);
})(DidSaveTextDocumentNotification = exports.DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = {}));
/**
 * Represents reasons why a text document is saved.
 */


var TextDocumentSaveReason;

(function (TextDocumentSaveReason) {
  /**
   * Manually triggered, e.g. by the user pressing save, by starting debugging,
   * or by an API call.
   */
  TextDocumentSaveReason.Manual = 1;
  /**
   * Automatic after a delay.
   */

  TextDocumentSaveReason.AfterDelay = 2;
  /**
   * When the editor lost focus.
   */

  TextDocumentSaveReason.FocusOut = 3;
})(TextDocumentSaveReason = exports.TextDocumentSaveReason || (exports.TextDocumentSaveReason = {}));
/**
 * A document will save notification is sent from the client to the server before
 * the document is actually saved.
 */


var WillSaveTextDocumentNotification;

(function (WillSaveTextDocumentNotification) {
  WillSaveTextDocumentNotification.method = 'textDocument/willSave';
  WillSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification.method);
})(WillSaveTextDocumentNotification = exports.WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = {}));
/**
 * A document will save request is sent from the client to the server before
 * the document is actually saved. The request can return an array of TextEdits
 * which will be applied to the text document before it is saved. Please note that
 * clients might drop results if computing the text edits took too long or if a
 * server constantly fails on this request. This is done to keep the save fast and
 * reliable.
 */


var WillSaveTextDocumentWaitUntilRequest;

(function (WillSaveTextDocumentWaitUntilRequest) {
  WillSaveTextDocumentWaitUntilRequest.method = 'textDocument/willSaveWaitUntil';
  WillSaveTextDocumentWaitUntilRequest.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest.method);
})(WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = {}));
/**
 * The watched files notification is sent from the client to the server when
 * the client detects changes to file watched by the language client.
 */


var DidChangeWatchedFilesNotification;

(function (DidChangeWatchedFilesNotification) {
  DidChangeWatchedFilesNotification.type = new messages_1.ProtocolNotificationType('workspace/didChangeWatchedFiles');
})(DidChangeWatchedFilesNotification = exports.DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = {}));
/**
 * The file event type
 */


var FileChangeType;

(function (FileChangeType) {
  /**
   * The file got created.
   */
  FileChangeType.Created = 1;
  /**
   * The file got changed.
   */

  FileChangeType.Changed = 2;
  /**
   * The file got deleted.
   */

  FileChangeType.Deleted = 3;
})(FileChangeType = exports.FileChangeType || (exports.FileChangeType = {}));

var WatchKind;

(function (WatchKind) {
  /**
   * Interested in create events.
   */
  WatchKind.Create = 1;
  /**
   * Interested in change events
   */

  WatchKind.Change = 2;
  /**
   * Interested in delete events
   */

  WatchKind.Delete = 4;
})(WatchKind = exports.WatchKind || (exports.WatchKind = {}));
/**
 * Diagnostics notification are sent from the server to the client to signal
 * results of validation runs.
 */


var PublishDiagnosticsNotification;

(function (PublishDiagnosticsNotification) {
  PublishDiagnosticsNotification.type = new messages_1.ProtocolNotificationType('textDocument/publishDiagnostics');
})(PublishDiagnosticsNotification = exports.PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = {}));
/**
 * How a completion was triggered
 */


var CompletionTriggerKind;

(function (CompletionTriggerKind) {
  /**
   * Completion was triggered by typing an identifier (24x7 code
   * complete), manual invocation (e.g Ctrl+Space) or via API.
   */
  CompletionTriggerKind.Invoked = 1;
  /**
   * Completion was triggered by a trigger character specified by
   * the `triggerCharacters` properties of the `CompletionRegistrationOptions`.
   */

  CompletionTriggerKind.TriggerCharacter = 2;
  /**
   * Completion was re-triggered as current completion list is incomplete
   */

  CompletionTriggerKind.TriggerForIncompleteCompletions = 3;
})(CompletionTriggerKind = exports.CompletionTriggerKind || (exports.CompletionTriggerKind = {}));
/**
 * Request to request completion at a given text document position. The request's
 * parameter is of type [TextDocumentPosition](#TextDocumentPosition) the response
 * is of type [CompletionItem[]](#CompletionItem) or [CompletionList](#CompletionList)
 * or a Thenable that resolves to such.
 *
 * The request can delay the computation of the [`detail`](#CompletionItem.detail)
 * and [`documentation`](#CompletionItem.documentation) properties to the `completionItem/resolve`
 * request. However, properties that are needed for the initial sorting and filtering, like `sortText`,
 * `filterText`, `insertText`, and `textEdit`, must not be changed during resolve.
 */


var CompletionRequest;

(function (CompletionRequest) {
  CompletionRequest.method = 'textDocument/completion';
  CompletionRequest.type = new messages_1.ProtocolRequestType(CompletionRequest.method);
  /** @deprecated Use CompletionRequest.type */

  CompletionRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(CompletionRequest = exports.CompletionRequest || (exports.CompletionRequest = {}));
/**
 * Request to resolve additional information for a given completion item.The request's
 * parameter is of type [CompletionItem](#CompletionItem) the response
 * is of type [CompletionItem](#CompletionItem) or a Thenable that resolves to such.
 */


var CompletionResolveRequest;

(function (CompletionResolveRequest) {
  CompletionResolveRequest.method = 'completionItem/resolve';
  CompletionResolveRequest.type = new messages_1.ProtocolRequestType(CompletionResolveRequest.method);
})(CompletionResolveRequest = exports.CompletionResolveRequest || (exports.CompletionResolveRequest = {}));
/**
 * Request to request hover information at a given text document position. The request's
 * parameter is of type [TextDocumentPosition](#TextDocumentPosition) the response is of
 * type [Hover](#Hover) or a Thenable that resolves to such.
 */


var HoverRequest;

(function (HoverRequest) {
  HoverRequest.method = 'textDocument/hover';
  HoverRequest.type = new messages_1.ProtocolRequestType(HoverRequest.method);
})(HoverRequest = exports.HoverRequest || (exports.HoverRequest = {}));
/**
 * How a signature help was triggered.
 *
 * @since 3.15.0
 */


var SignatureHelpTriggerKind;

(function (SignatureHelpTriggerKind) {
  /**
   * Signature help was invoked manually by the user or by a command.
   */
  SignatureHelpTriggerKind.Invoked = 1;
  /**
   * Signature help was triggered by a trigger character.
   */

  SignatureHelpTriggerKind.TriggerCharacter = 2;
  /**
   * Signature help was triggered by the cursor moving or by the document content changing.
   */

  SignatureHelpTriggerKind.ContentChange = 3;
})(SignatureHelpTriggerKind = exports.SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = {}));

var SignatureHelpRequest;

(function (SignatureHelpRequest) {
  SignatureHelpRequest.method = 'textDocument/signatureHelp';
  SignatureHelpRequest.type = new messages_1.ProtocolRequestType(SignatureHelpRequest.method);
})(SignatureHelpRequest = exports.SignatureHelpRequest || (exports.SignatureHelpRequest = {}));
/**
 * A request to resolve the definition location of a symbol at a given text
 * document position. The request's parameter is of type [TextDocumentPosition]
 * (#TextDocumentPosition) the response is of either type [Definition](#Definition)
 * or a typed array of [DefinitionLink](#DefinitionLink) or a Thenable that resolves
 * to such.
 */


var DefinitionRequest;

(function (DefinitionRequest) {
  DefinitionRequest.method = 'textDocument/definition';
  DefinitionRequest.type = new messages_1.ProtocolRequestType(DefinitionRequest.method);
  /** @deprecated Use DefinitionRequest.type */

  DefinitionRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DefinitionRequest = exports.DefinitionRequest || (exports.DefinitionRequest = {}));
/**
 * A request to resolve project-wide references for the symbol denoted
 * by the given text document position. The request's parameter is of
 * type [ReferenceParams](#ReferenceParams) the response is of type
 * [Location[]](#Location) or a Thenable that resolves to such.
 */


var ReferencesRequest;

(function (ReferencesRequest) {
  ReferencesRequest.method = 'textDocument/references';
  ReferencesRequest.type = new messages_1.ProtocolRequestType(ReferencesRequest.method);
  /** @deprecated Use ReferencesRequest.type */

  ReferencesRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(ReferencesRequest = exports.ReferencesRequest || (exports.ReferencesRequest = {}));
/**
 * Request to resolve a [DocumentHighlight](#DocumentHighlight) for a given
 * text document position. The request's parameter is of type [TextDocumentPosition]
 * (#TextDocumentPosition) the request response is of type [DocumentHighlight[]]
 * (#DocumentHighlight) or a Thenable that resolves to such.
 */


var DocumentHighlightRequest;

(function (DocumentHighlightRequest) {
  DocumentHighlightRequest.method = 'textDocument/documentHighlight';
  DocumentHighlightRequest.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest.method);
  /** @deprecated Use DocumentHighlightRequest.type */

  DocumentHighlightRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DocumentHighlightRequest = exports.DocumentHighlightRequest || (exports.DocumentHighlightRequest = {}));
/**
 * A request to list all symbols found in a given text document. The request's
 * parameter is of type [TextDocumentIdentifier](#TextDocumentIdentifier) the
 * response is of type [SymbolInformation[]](#SymbolInformation) or a Thenable
 * that resolves to such.
 */


var DocumentSymbolRequest;

(function (DocumentSymbolRequest) {
  DocumentSymbolRequest.method = 'textDocument/documentSymbol';
  DocumentSymbolRequest.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest.method);
  /** @deprecated Use DocumentSymbolRequest.type */

  DocumentSymbolRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DocumentSymbolRequest = exports.DocumentSymbolRequest || (exports.DocumentSymbolRequest = {}));
/**
 * A request to provide commands for the given text document and range.
 */


var CodeActionRequest;

(function (CodeActionRequest) {
  CodeActionRequest.method = 'textDocument/codeAction';
  CodeActionRequest.type = new messages_1.ProtocolRequestType(CodeActionRequest.method);
  /** @deprecated Use CodeActionRequest.type */

  CodeActionRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(CodeActionRequest = exports.CodeActionRequest || (exports.CodeActionRequest = {}));
/**
 * A request to list project-wide symbols matching the query string given
 * by the [WorkspaceSymbolParams](#WorkspaceSymbolParams). The response is
 * of type [SymbolInformation[]](#SymbolInformation) or a Thenable that
 * resolves to such.
 */


var WorkspaceSymbolRequest;

(function (WorkspaceSymbolRequest) {
  WorkspaceSymbolRequest.method = 'workspace/symbol';
  WorkspaceSymbolRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest.method);
  /** @deprecated Use WorkspaceSymbolRequest.type */

  WorkspaceSymbolRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(WorkspaceSymbolRequest = exports.WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = {}));
/**
 * A request to provide code lens for the given text document.
 */


var CodeLensRequest;

(function (CodeLensRequest) {
  CodeLensRequest.type = new messages_1.ProtocolRequestType('textDocument/codeLens');
  /** @deprecated Use CodeLensRequest.type */

  CodeLensRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(CodeLensRequest = exports.CodeLensRequest || (exports.CodeLensRequest = {}));
/**
 * A request to resolve a command for a given code lens.
 */


var CodeLensResolveRequest;

(function (CodeLensResolveRequest) {
  CodeLensResolveRequest.type = new messages_1.ProtocolRequestType('codeLens/resolve');
})(CodeLensResolveRequest = exports.CodeLensResolveRequest || (exports.CodeLensResolveRequest = {}));
/**
 * A request to provide document links
 */


var DocumentLinkRequest;

(function (DocumentLinkRequest) {
  DocumentLinkRequest.method = 'textDocument/documentLink';
  DocumentLinkRequest.type = new messages_1.ProtocolRequestType(DocumentLinkRequest.method);
  /** @deprecated Use DocumentLinkRequest.type */

  DocumentLinkRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(DocumentLinkRequest = exports.DocumentLinkRequest || (exports.DocumentLinkRequest = {}));
/**
 * Request to resolve additional information for a given document link. The request's
 * parameter is of type [DocumentLink](#DocumentLink) the response
 * is of type [DocumentLink](#DocumentLink) or a Thenable that resolves to such.
 */


var DocumentLinkResolveRequest;

(function (DocumentLinkResolveRequest) {
  DocumentLinkResolveRequest.type = new messages_1.ProtocolRequestType('documentLink/resolve');
})(DocumentLinkResolveRequest = exports.DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = {}));
/**
 * A request to to format a whole document.
 */


var DocumentFormattingRequest;

(function (DocumentFormattingRequest) {
  DocumentFormattingRequest.method = 'textDocument/formatting';
  DocumentFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest.method);
})(DocumentFormattingRequest = exports.DocumentFormattingRequest || (exports.DocumentFormattingRequest = {}));
/**
 * A request to to format a range in a document.
 */


var DocumentRangeFormattingRequest;

(function (DocumentRangeFormattingRequest) {
  DocumentRangeFormattingRequest.method = 'textDocument/rangeFormatting';
  DocumentRangeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest.method);
})(DocumentRangeFormattingRequest = exports.DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = {}));
/**
 * A request to format a document on type.
 */


var DocumentOnTypeFormattingRequest;

(function (DocumentOnTypeFormattingRequest) {
  DocumentOnTypeFormattingRequest.method = 'textDocument/onTypeFormatting';
  DocumentOnTypeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest.method);
})(DocumentOnTypeFormattingRequest = exports.DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = {}));
/**
 * A request to rename a symbol.
 */


var RenameRequest;

(function (RenameRequest) {
  RenameRequest.method = 'textDocument/rename';
  RenameRequest.type = new messages_1.ProtocolRequestType(RenameRequest.method);
})(RenameRequest = exports.RenameRequest || (exports.RenameRequest = {}));
/**
 * A request to test and perform the setup necessary for a rename.
 */


var PrepareRenameRequest;

(function (PrepareRenameRequest) {
  PrepareRenameRequest.method = 'textDocument/prepareRename';
  PrepareRenameRequest.type = new messages_1.ProtocolRequestType(PrepareRenameRequest.method);
})(PrepareRenameRequest = exports.PrepareRenameRequest || (exports.PrepareRenameRequest = {}));
/**
 * A request send from the client to the server to execute a command. The request might return
 * a workspace edit which the client will apply to the workspace.
 */


var ExecuteCommandRequest;

(function (ExecuteCommandRequest) {
  ExecuteCommandRequest.type = new messages_1.ProtocolRequestType('workspace/executeCommand');
})(ExecuteCommandRequest = exports.ExecuteCommandRequest || (exports.ExecuteCommandRequest = {}));
/**
 * A request sent from the server to the client to modified certain resources.
 */


var ApplyWorkspaceEditRequest;

(function (ApplyWorkspaceEditRequest) {
  ApplyWorkspaceEditRequest.type = new messages_1.ProtocolRequestType('workspace/applyEdit');
})(ApplyWorkspaceEditRequest = exports.ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.progress.js":
/*!*************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.progress.js ***!
  \*************************************************************************************************************************************************/
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

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js");

var WorkDoneProgress;

(function (WorkDoneProgress) {
  WorkDoneProgress.type = new vscode_jsonrpc_1.ProgressType();
})(WorkDoneProgress = exports.WorkDoneProgress || (exports.WorkDoneProgress = {}));
/**
 * The `window/workDoneProgress/create` request is sent from the server to the client to initiate progress
 * reporting from the server.
 */


var WorkDoneProgressCreateRequest;

(function (WorkDoneProgressCreateRequest) {
  WorkDoneProgressCreateRequest.type = new messages_1.ProtocolRequestType('window/workDoneProgress/create');
})(WorkDoneProgressCreateRequest = exports.WorkDoneProgressCreateRequest || (exports.WorkDoneProgressCreateRequest = {}));
/**
 * The `window/workDoneProgress/cancel` notification is sent from  the client to the server to cancel a progress
 * initiated on the server side.
 */


var WorkDoneProgressCancelNotification;

(function (WorkDoneProgressCancelNotification) {
  WorkDoneProgressCancelNotification.type = new messages_1.ProtocolNotificationType('window/workDoneProgress/cancel');
})(WorkDoneProgressCancelNotification = exports.WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.selectionRange.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.selectionRange.js ***!
  \*******************************************************************************************************************************************************/
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

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * A request to provide selection ranges in a document. The request's
 * parameter is of type [SelectionRangeParams](#SelectionRangeParams), the
 * response is of type [SelectionRange[]](#SelectionRange[]) or a Thenable
 * that resolves to such.
 */


var SelectionRangeRequest;

(function (SelectionRangeRequest) {
  SelectionRangeRequest.method = 'textDocument/selectionRange';
  SelectionRangeRequest.type = new messages_1.ProtocolRequestType(SelectionRangeRequest.method);
  /** @deprecated  Use SelectionRangeRequest.type */

  SelectionRangeRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(SelectionRangeRequest = exports.SelectionRangeRequest || (exports.SelectionRangeRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.sematicTokens.proposed.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.sematicTokens.proposed.js ***!
  \***************************************************************************************************************************************************************/
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

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * A set of predefined token types. This set is not fixed
 * an clients can specify additional token types via the
 * corresponding client capabilities.
 *
 * @since 3.16.0 - Proposed state
 */


var SemanticTokenTypes;

(function (SemanticTokenTypes) {
  SemanticTokenTypes["comment"] = "comment";
  SemanticTokenTypes["keyword"] = "keyword";
  SemanticTokenTypes["string"] = "string";
  SemanticTokenTypes["number"] = "number";
  SemanticTokenTypes["regexp"] = "regexp";
  SemanticTokenTypes["operator"] = "operator";
  SemanticTokenTypes["namespace"] = "namespace";
  SemanticTokenTypes["type"] = "type";
  SemanticTokenTypes["struct"] = "struct";
  SemanticTokenTypes["class"] = "class";
  SemanticTokenTypes["interface"] = "interface";
  SemanticTokenTypes["enum"] = "enum";
  SemanticTokenTypes["typeParameter"] = "typeParameter";
  SemanticTokenTypes["function"] = "function";
  SemanticTokenTypes["member"] = "member";
  SemanticTokenTypes["property"] = "property";
  SemanticTokenTypes["macro"] = "macro";
  SemanticTokenTypes["variable"] = "variable";
  SemanticTokenTypes["parameter"] = "parameter";
  SemanticTokenTypes["label"] = "label";
})(SemanticTokenTypes = exports.SemanticTokenTypes || (exports.SemanticTokenTypes = {}));
/**
 * A set of predefined token modifiers. This set is not fixed
 * an clients can specify additional token types via the
 * corresponding client capabilities.
 *
 * @since 3.16.0 - Proposed state
 */


var SemanticTokenModifiers;

(function (SemanticTokenModifiers) {
  SemanticTokenModifiers["documentation"] = "documentation";
  SemanticTokenModifiers["declaration"] = "declaration";
  SemanticTokenModifiers["definition"] = "definition";
  SemanticTokenModifiers["reference"] = "reference";
  SemanticTokenModifiers["static"] = "static";
  SemanticTokenModifiers["abstract"] = "abstract";
  SemanticTokenModifiers["deprecated"] = "deprecated";
  SemanticTokenModifiers["async"] = "async";
  SemanticTokenModifiers["volatile"] = "volatile";
  SemanticTokenModifiers["readonly"] = "readonly";
})(SemanticTokenModifiers = exports.SemanticTokenModifiers || (exports.SemanticTokenModifiers = {}));
/**
 * @since 3.16.0 - Proposed state
 */


var SemanticTokens;

(function (SemanticTokens) {
  function is(value) {
    var candidate = value;
    return candidate !== undefined && (candidate.resultId === undefined || typeof candidate.resultId === 'string') && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === 'number');
  }

  SemanticTokens.is = is;
})(SemanticTokens = exports.SemanticTokens || (exports.SemanticTokens = {}));
/**
 * @since 3.16.0 - Proposed state
 */


var SemanticTokensRequest;

(function (SemanticTokensRequest) {
  SemanticTokensRequest.method = 'textDocument/semanticTokens';
  SemanticTokensRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRequest.method);
})(SemanticTokensRequest = exports.SemanticTokensRequest || (exports.SemanticTokensRequest = {}));
/**
 * @since 3.16.0 - Proposed state
 */


var SemanticTokensEditsRequest;

(function (SemanticTokensEditsRequest) {
  SemanticTokensEditsRequest.method = 'textDocument/semanticTokens/edits';
  SemanticTokensEditsRequest.type = new messages_1.ProtocolRequestType(SemanticTokensEditsRequest.method);
})(SemanticTokensEditsRequest = exports.SemanticTokensEditsRequest || (exports.SemanticTokensEditsRequest = {}));
/**
 * @since 3.16.0 - Proposed state
 */


var SemanticTokensRangeRequest;

(function (SemanticTokensRangeRequest) {
  SemanticTokensRangeRequest.method = 'textDocument/semanticTokens/range';
  SemanticTokensRangeRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest.method);
})(SemanticTokensRangeRequest = exports.SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.typeDefinition.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.typeDefinition.js ***!
  \*******************************************************************************************************************************************************/
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

var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../../node_modules/vscode-jsonrpc/lib/main.js");

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js"); // @ts-ignore: to avoid inlining LocatioLink as dynamic import


var __noDynamicImport;
/**
 * A request to resolve the type definition locations of a symbol at a given text
 * document position. The request's parameter is of type [TextDocumentPositioParams]
 * (#TextDocumentPositionParams) the response is of type [Definition](#Definition) or a
 * Thenable that resolves to such.
 */


var TypeDefinitionRequest;

(function (TypeDefinitionRequest) {
  TypeDefinitionRequest.method = 'textDocument/typeDefinition';
  TypeDefinitionRequest.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest.method);
  /** @deprecated Use TypeDefinitionRequest.type */

  TypeDefinitionRequest.resultType = new vscode_jsonrpc_1.ProgressType();
})(TypeDefinitionRequest = exports.TypeDefinitionRequest || (exports.TypeDefinitionRequest = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/protocol.workspaceFolders.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/protocol.workspaceFolders.js ***!
  \*********************************************************************************************************************************************************/
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

var messages_1 = __webpack_require__(/*! ./messages */ "../../node_modules/vscode-languageserver-protocol/lib/messages.js");
/**
 * The `workspace/workspaceFolders` is sent from the server to the client to fetch the open workspace folders.
 */


var WorkspaceFoldersRequest;

(function (WorkspaceFoldersRequest) {
  WorkspaceFoldersRequest.type = new messages_1.ProtocolRequestType0('workspace/workspaceFolders');
})(WorkspaceFoldersRequest = exports.WorkspaceFoldersRequest || (exports.WorkspaceFoldersRequest = {}));
/**
 * The `workspace/didChangeWorkspaceFolders` notification is sent from the client to the server when the workspace
 * folder configuration changes.
 */


var DidChangeWorkspaceFoldersNotification;

(function (DidChangeWorkspaceFoldersNotification) {
  DidChangeWorkspaceFoldersNotification.type = new messages_1.ProtocolNotificationType('workspace/didChangeWorkspaceFolders');
})(DidChangeWorkspaceFoldersNotification = exports.DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = {}));

/***/ }),

/***/ "../../node_modules/vscode-languageserver-protocol/lib/utils/is.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageserver-protocol/lib/utils/is.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _boolean(value) {
  return value === true || value === false;
}

exports["boolean"] = _boolean;

function string(value) {
  return typeof value === 'string' || value instanceof String;
}

exports.string = string;

function number(value) {
  return typeof value === 'number' || value instanceof Number;
}

exports.number = number;

function error(value) {
  return value instanceof Error;
}

exports.error = error;

function func(value) {
  return typeof value === 'function';
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

function typedArray(value, check) {
  return Array.isArray(value) && value.every(check);
}

exports.typedArray = typedArray;

function objectLiteral(value) {
  // Strictly speaking class instances pass this check as well. Since the LSP
  // doesn't use classes we ignore this for now. If we do we need to add something
  // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
  return value !== null && _typeof(value) === 'object';
}

exports.objectLiteral = objectLiteral;

/***/ })

}]);
//# sourceMappingURL=5.bundle.js.map