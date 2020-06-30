(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/connection.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/connection.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var main_1 = __webpack_require__(/*! vscode-languageserver-protocol/lib/main */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! vscode-languageserver-protocol/lib/utils/is */ "../../node_modules/vscode-languageserver-protocol/lib/utils/is.js");

function createConnection(connection, errorHandler, closeHandler) {
  connection.onError(function (data) {
    errorHandler(data[0], data[1], data[2]);
  });
  connection.onClose(closeHandler);
  return {
    listen: function listen() {
      return connection.listen();
    },
    sendRequest: function sendRequest(type) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return connection.sendRequest.apply(connection, [Is.string(type) ? type : type.method].concat(params));
    },
    onRequest: function onRequest(type, handler) {
      return connection.onRequest(Is.string(type) ? type : type.method, handler);
    },
    sendNotification: function sendNotification(type, params) {
      return connection.sendNotification(Is.string(type) ? type : type.method, params);
    },
    onNotification: function onNotification(type, handler) {
      return connection.onNotification(Is.string(type) ? type : type.method, handler);
    },
    trace: function trace(value, tracer) {
      var sendNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return connection.trace(value, tracer, sendNotification);
    },
    initialize: function initialize(params) {
      return connection.sendRequest(main_1.InitializeRequest.type, params);
    },
    shutdown: function shutdown() {
      return connection.sendRequest(main_1.ShutdownRequest.type, undefined);
    },
    exit: function exit() {
      return connection.sendNotification(main_1.ExitNotification.type);
    },
    onLogMessage: function onLogMessage(handler) {
      return connection.onNotification(main_1.LogMessageNotification.type, handler);
    },
    onShowMessage: function onShowMessage(handler) {
      return connection.onNotification(main_1.ShowMessageNotification.type, handler);
    },
    onTelemetry: function onTelemetry(handler) {
      return connection.onNotification(main_1.TelemetryEventNotification.type, handler);
    },
    didChangeConfiguration: function didChangeConfiguration(params) {
      return connection.sendNotification(main_1.DidChangeConfigurationNotification.type, params);
    },
    didChangeWatchedFiles: function didChangeWatchedFiles(params) {
      return connection.sendNotification(main_1.DidChangeWatchedFilesNotification.type, params);
    },
    didOpenTextDocument: function didOpenTextDocument(params) {
      return connection.sendNotification(main_1.DidOpenTextDocumentNotification.type, params);
    },
    didChangeTextDocument: function didChangeTextDocument(params) {
      return connection.sendNotification(main_1.DidChangeTextDocumentNotification.type, params);
    },
    didCloseTextDocument: function didCloseTextDocument(params) {
      return connection.sendNotification(main_1.DidCloseTextDocumentNotification.type, params);
    },
    didSaveTextDocument: function didSaveTextDocument(params) {
      return connection.sendNotification(main_1.DidSaveTextDocumentNotification.type, params);
    },
    onDiagnostics: function onDiagnostics(handler) {
      return connection.onNotification(main_1.PublishDiagnosticsNotification.type, handler);
    },
    dispose: function dispose() {
      return connection.dispose();
    }
  };
}

exports.createConnection = createConnection;

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/console-window.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/console-window.js ***!
  \*************************************************************************************************************************************/
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

var ConsoleWindow = /*#__PURE__*/function () {
  function ConsoleWindow() {
    _classCallCheck(this, ConsoleWindow);

    this.channels = new Map();
  }

  _createClass(ConsoleWindow, [{
    key: "showMessage",
    value: function showMessage(type, message) {
      if (type === services_1.MessageType.Error) {
        console.error(message);
      }

      if (type === services_1.MessageType.Warning) {
        console.warn(message);
      }

      if (type === services_1.MessageType.Info) {
        console.info(message);
      }

      if (type === services_1.MessageType.Log) {
        console.log(message);
      }

      return Promise.resolve(undefined);
    }
  }, {
    key: "createOutputChannel",
    value: function createOutputChannel(name) {
      var existing = this.channels.get(name);

      if (existing) {
        return existing;
      }

      var channel = {
        append: function append(value) {
          console.log(name + ': ' + value);
        },
        appendLine: function appendLine(line) {
          console.log(name + ': ' + line);
        },
        show: function show() {// no-op
        },
        dispose: function dispose() {// no-op
        }
      };
      this.channels.set(name, channel);
      return channel;
    }
  }]);

  return ConsoleWindow;
}();

exports.ConsoleWindow = ConsoleWindow;

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/index.js":
/*!****************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/index.js ***!
  \****************************************************************************************************************************/
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

__export(__webpack_require__(/*! ./disposable */ "../../node_modules/monaco-languageclient/lib/disposable.js"));

__export(__webpack_require__(/*! ./services */ "../../node_modules/monaco-languageclient/lib/services.js"));

__export(__webpack_require__(/*! ./connection */ "../../node_modules/monaco-languageclient/lib/connection.js"));

__export(__webpack_require__(/*! ./monaco-language-client */ "../../node_modules/monaco-languageclient/lib/monaco-language-client.js"));

__export(__webpack_require__(/*! ./monaco-commands */ "../../node_modules/monaco-languageclient/lib/monaco-commands.js"));

__export(__webpack_require__(/*! ./console-window */ "../../node_modules/monaco-languageclient/lib/console-window.js"));

__export(__webpack_require__(/*! ./monaco-languages */ "../../node_modules/monaco-languageclient/lib/monaco-languages.js"));

__export(__webpack_require__(/*! ./monaco-workspace */ "../../node_modules/monaco-languageclient/lib/monaco-workspace.js"));

__export(__webpack_require__(/*! ./monaco-services */ "../../node_modules/monaco-languageclient/lib/monaco-services.js"));

__export(__webpack_require__(/*! ./monaco-converter */ "../../node_modules/monaco-languageclient/lib/monaco-converter.js"));

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/monaco-commands.js":
/*!**************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/monaco-commands.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MonacoCommands = /*#__PURE__*/function () {
  function MonacoCommands(editor) {
    _classCallCheck(this, MonacoCommands);

    this.editor = editor;
  }

  _createClass(MonacoCommands, [{
    key: "registerCommand",
    value: function registerCommand(command, callback, thisArg) {
      return this.editor._commandService.addCommand({
        id: command,
        handler: function handler(_accessor) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return callback.apply(void 0, args);
        }
      });
    }
  }]);

  return MonacoCommands;
}();

exports.MonacoCommands = MonacoCommands;

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/monaco-converter.js":
/*!***************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/monaco-converter.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var ls = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! vscode-languageserver-protocol/lib/utils/is */ "../../node_modules/vscode-languageserver-protocol/lib/utils/is.js");

var services_1 = __webpack_require__(/*! ./services */ "../../node_modules/monaco-languageclient/lib/services.js");

var ProtocolDocumentLink;

(function (ProtocolDocumentLink) {
  function is(item) {
    return !!item && 'data' in item;
  }

  ProtocolDocumentLink.is = is;
})(ProtocolDocumentLink = exports.ProtocolDocumentLink || (exports.ProtocolDocumentLink = {}));

var ProtocolCodeLens;

(function (ProtocolCodeLens) {
  function is(item) {
    return !!item && 'data' in item;
  }

  ProtocolCodeLens.is = is;
})(ProtocolCodeLens = exports.ProtocolCodeLens || (exports.ProtocolCodeLens = {}));

var ProtocolCompletionItem;

(function (ProtocolCompletionItem) {
  function is(item) {
    return !!item && 'data' in item;
  }

  ProtocolCompletionItem.is = is;
})(ProtocolCompletionItem = exports.ProtocolCompletionItem || (exports.ProtocolCompletionItem = {}));

function isRangeReplace(v) {
  return v.insert !== undefined;
}

var MonacoToProtocolConverter = /*#__PURE__*/function () {
  function MonacoToProtocolConverter() {
    _classCallCheck(this, MonacoToProtocolConverter);
  }

  _createClass(MonacoToProtocolConverter, [{
    key: "asPosition",
    value: function asPosition(lineNumber, column) {
      var line = lineNumber === undefined || lineNumber === null ? undefined : lineNumber - 1;
      var character = column === undefined || column === null ? undefined : column - 1;
      return {
        line: line,
        character: character
      };
    }
  }, {
    key: "asRange",
    value: function asRange(range) {
      if (range === undefined) {
        return undefined;
      }

      if (range === null) {
        return null;
      }

      if (isRangeReplace(range)) {
        return this.asRange(range.insert);
      } else {
        var start = this.asPosition(range.startLineNumber, range.startColumn);
        var end = this.asPosition(range.endLineNumber, range.endColumn);
        return {
          start: start,
          end: end
        };
      }
    }
  }, {
    key: "asTextDocumentIdentifier",
    value: function asTextDocumentIdentifier(model) {
      return {
        uri: model.uri.toString()
      };
    }
  }, {
    key: "asTextDocumentPositionParams",
    value: function asTextDocumentPositionParams(model, position) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        position: this.asPosition(position.lineNumber, position.column)
      };
    }
  }, {
    key: "asCompletionParams",
    value: function asCompletionParams(model, position, context) {
      return Object.assign(this.asTextDocumentPositionParams(model, position), {
        context: this.asCompletionContext(context)
      });
    }
  }, {
    key: "asCompletionContext",
    value: function asCompletionContext(context) {
      return {
        triggerKind: this.asCompletionTriggerKind(context.triggerKind),
        triggerCharacter: context.triggerCharacter
      };
    }
  }, {
    key: "asSignatureHelpContext",
    value: function asSignatureHelpContext(context) {
      return {
        triggerKind: this.asSignatureHelpTriggerKind(context.triggerKind),
        triggerCharacter: context.triggerCharacter,
        isRetrigger: context.isRetrigger,
        activeSignatureHelp: this.asSignatureHelp(context.activeSignatureHelp)
      };
    }
  }, {
    key: "asSignatureHelp",
    value: function asSignatureHelp(signatureHelp) {
      var _this = this;

      if (signatureHelp === undefined) {
        return undefined;
      }

      return {
        signatures: signatureHelp.signatures.map(function (signatureInfo) {
          return _this.asSignatureInformation(signatureInfo);
        }),
        activeParameter: signatureHelp.activeParameter,
        activeSignature: signatureHelp.activeSignature
      };
    }
  }, {
    key: "asSignatureInformation",
    value: function asSignatureInformation(signatureInformation) {
      var _this2 = this;

      return {
        documentation: this.asMarkupContent(signatureInformation.documentation),
        label: signatureInformation.label,
        parameters: signatureInformation.parameters.map(function (paramInfo) {
          return _this2.asParameterInformation(paramInfo);
        })
      };
    }
  }, {
    key: "asParameterInformation",
    value: function asParameterInformation(parameterInformation) {
      return {
        documentation: this.asMarkupContent(parameterInformation.documentation),
        label: parameterInformation.label
      };
    }
  }, {
    key: "asMarkupContent",
    value: function asMarkupContent(markupContent) {
      if (markupContent === undefined) {
        return undefined;
      }

      if (typeof markupContent === "string") {
        return markupContent;
      }

      return {
        kind: services_1.MarkupKind.Markdown,
        value: markupContent.value
      };
    }
  }, {
    key: "asSignatureHelpTriggerKind",
    value: function asSignatureHelpTriggerKind(triggerKind) {
      switch (triggerKind) {
        case monaco.languages.SignatureHelpTriggerKind.ContentChange:
          return services_1.SignatureHelpTriggerKind.ContentChange;

        case monaco.languages.SignatureHelpTriggerKind.TriggerCharacter:
          return services_1.SignatureHelpTriggerKind.TriggerCharacter;

        default:
          return services_1.SignatureHelpTriggerKind.Invoke;
      }
    }
  }, {
    key: "asCompletionTriggerKind",
    value: function asCompletionTriggerKind(triggerKind) {
      switch (triggerKind) {
        case monaco.languages.CompletionTriggerKind.TriggerCharacter:
          return services_1.CompletionTriggerKind.TriggerCharacter;

        case monaco.languages.CompletionTriggerKind.TriggerForIncompleteCompletions:
          return services_1.CompletionTriggerKind.TriggerForIncompleteCompletions;

        default:
          return services_1.CompletionTriggerKind.Invoked;
      }
    }
  }, {
    key: "asCompletionItem",
    value: function asCompletionItem(item) {
      var result = {
        label: item.label
      };
      var protocolItem = ProtocolCompletionItem.is(item) ? item : undefined;

      if (item.detail) {
        result.detail = item.detail;
      } // We only send items back we created. So this can't be something else than
      // a string right now.


      if (item.documentation) {
        if (!protocolItem || !protocolItem.documentationFormat) {
          result.documentation = item.documentation;
        } else {
          result.documentation = this.asDocumentation(protocolItem.documentationFormat, item.documentation);
        }
      }

      if (item.filterText) {
        result.filterText = item.filterText;
      }

      this.fillPrimaryInsertText(result, item);

      if (Is.number(item.kind)) {
        result.kind = this.asCompletionItemKind(item.kind, protocolItem && protocolItem.originalItemKind);
      }

      if (item.sortText) {
        result.sortText = item.sortText;
      }

      if (item.additionalTextEdits) {
        result.additionalTextEdits = this.asTextEdits(item.additionalTextEdits);
      }

      if (item.command) {
        result.command = this.asCommand(item.command);
      }

      if (item.commitCharacters) {
        result.commitCharacters = item.commitCharacters.slice();
      }

      if (item.command) {
        result.command = this.asCommand(item.command);
      } // TODO if (item.preselect === true || item.preselect === false) { result.preselect = item.preselect; }


      if (protocolItem) {
        if (protocolItem.data !== undefined) {
          result.data = protocolItem.data;
        }

        if (protocolItem.deprecated === true || protocolItem.deprecated === false) {
          result.deprecated = protocolItem.deprecated;
        }
      }

      return result;
    }
  }, {
    key: "asCompletionItemKind",
    value: function asCompletionItemKind(value, original) {
      if (original !== undefined) {
        return original;
      }

      switch (value) {
        case monaco.languages.CompletionItemKind.Method:
          return services_1.CompletionItemKind.Method;

        case monaco.languages.CompletionItemKind.Function:
          return services_1.CompletionItemKind.Function;

        case monaco.languages.CompletionItemKind.Constructor:
          return services_1.CompletionItemKind.Constructor;

        case monaco.languages.CompletionItemKind.Field:
          return services_1.CompletionItemKind.Field;

        case monaco.languages.CompletionItemKind.Variable:
          return services_1.CompletionItemKind.Variable;

        case monaco.languages.CompletionItemKind.Class:
          return services_1.CompletionItemKind.Class;

        case monaco.languages.CompletionItemKind.Struct:
          return services_1.CompletionItemKind.Struct;

        case monaco.languages.CompletionItemKind.Interface:
          return services_1.CompletionItemKind.Interface;

        case monaco.languages.CompletionItemKind.Module:
          return services_1.CompletionItemKind.Module;

        case monaco.languages.CompletionItemKind.Property:
          return services_1.CompletionItemKind.Property;

        case monaco.languages.CompletionItemKind.Event:
          return services_1.CompletionItemKind.Event;

        case monaco.languages.CompletionItemKind.Operator:
          return services_1.CompletionItemKind.Operator;

        case monaco.languages.CompletionItemKind.Unit:
          return services_1.CompletionItemKind.Unit;

        case monaco.languages.CompletionItemKind.Value:
          return services_1.CompletionItemKind.Value;

        case monaco.languages.CompletionItemKind.Constant:
          return services_1.CompletionItemKind.Constant;

        case monaco.languages.CompletionItemKind.Enum:
          return services_1.CompletionItemKind.Enum;

        case monaco.languages.CompletionItemKind.EnumMember:
          return services_1.CompletionItemKind.EnumMember;

        case monaco.languages.CompletionItemKind.Keyword:
          return services_1.CompletionItemKind.Keyword;

        case monaco.languages.CompletionItemKind.Text:
          return services_1.CompletionItemKind.Text;

        case monaco.languages.CompletionItemKind.Color:
          return services_1.CompletionItemKind.Color;

        case monaco.languages.CompletionItemKind.File:
          return services_1.CompletionItemKind.File;

        case monaco.languages.CompletionItemKind.Reference:
          return services_1.CompletionItemKind.Reference;

        case monaco.languages.CompletionItemKind.Customcolor:
          return services_1.CompletionItemKind.Color;

        case monaco.languages.CompletionItemKind.Folder:
          return services_1.CompletionItemKind.Folder;

        case monaco.languages.CompletionItemKind.TypeParameter:
          return services_1.CompletionItemKind.TypeParameter;

        case monaco.languages.CompletionItemKind.Snippet:
          return services_1.CompletionItemKind.Snippet;

        default:
          return value + 1;
      }
    }
  }, {
    key: "asDocumentation",
    value: function asDocumentation(format, documentation) {
      switch (format) {
        case services_1.MarkupKind.PlainText:
          return {
            kind: format,
            value: documentation
          };

        case services_1.MarkupKind.Markdown:
          return {
            kind: format,
            value: documentation.value
          };

        default:
          return "Unsupported Markup content received. Kind is: ".concat(format);
      }
    }
  }, {
    key: "fillPrimaryInsertText",
    value: function fillPrimaryInsertText(target, source) {
      var format = services_1.InsertTextFormat.PlainText;
      var text;
      var range;

      if (source.insertTextRules !== undefined && (source.insertTextRules & monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet) === 0) {
        format = services_1.InsertTextFormat.Snippet;
        text = source.insertText;
      }

      target.insertTextFormat = format;
      text = source.insertText;

      if (source.range) {
        range = this.asRange(source.range);
      }

      target.insertTextFormat = format;

      if (source.fromEdit && text && range) {
        target.textEdit = {
          newText: text,
          range: range
        };
      } else {
        target.insertText = text;
      }
    }
  }, {
    key: "asTextEdit",
    value: function asTextEdit(edit) {
      var range = this.asRange(edit.range);
      return {
        range: range,
        newText: edit.text || ''
      };
    }
  }, {
    key: "asTextEdits",
    value: function asTextEdits(items) {
      var _this3 = this;

      if (!items) {
        return undefined;
      }

      return items.map(function (item) {
        return _this3.asTextEdit(item);
      });
    }
  }, {
    key: "asReferenceParams",
    value: function asReferenceParams(model, position, options) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        position: this.asPosition(position.lineNumber, position.column),
        context: {
          includeDeclaration: options.includeDeclaration
        }
      };
    }
  }, {
    key: "asDocumentSymbolParams",
    value: function asDocumentSymbolParams(model) {
      return {
        textDocument: this.asTextDocumentIdentifier(model)
      };
    }
  }, {
    key: "asCodeLensParams",
    value: function asCodeLensParams(model) {
      return {
        textDocument: this.asTextDocumentIdentifier(model)
      };
    }
  }, {
    key: "asDiagnosticSeverity",
    value: function asDiagnosticSeverity(value) {
      switch (value) {
        case monaco.MarkerSeverity.Error:
          return services_1.DiagnosticSeverity.Error;

        case monaco.MarkerSeverity.Warning:
          return services_1.DiagnosticSeverity.Warning;

        case monaco.MarkerSeverity.Info:
          return services_1.DiagnosticSeverity.Information;

        case monaco.MarkerSeverity.Hint:
          return services_1.DiagnosticSeverity.Hint;
      }

      return undefined;
    }
  }, {
    key: "asDiagnostic",
    value: function asDiagnostic(marker) {
      var range = this.asRange(new monaco.Range(marker.startLineNumber, marker.startColumn, marker.endLineNumber, marker.endColumn));
      var severity = this.asDiagnosticSeverity(marker.severity);
      return services_1.Diagnostic.create(range, marker.message, severity, marker.code, marker.source);
    }
  }, {
    key: "asDiagnostics",
    value: function asDiagnostics(markers) {
      var _this4 = this;

      if (markers === void 0 || markers === null) {
        return markers;
      }

      return markers.map(function (marker) {
        return _this4.asDiagnostic(marker);
      });
    }
  }, {
    key: "asCodeActionContext",
    value: function asCodeActionContext(context) {
      if (context === void 0 || context === null) {
        return context;
      }

      var diagnostics = this.asDiagnostics(context.markers);
      return services_1.CodeActionContext.create(diagnostics, Is.string(context.only) ? [context.only] : undefined);
    }
  }, {
    key: "asCodeActionParams",
    value: function asCodeActionParams(model, range, context) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        range: this.asRange(range),
        context: this.asCodeActionContext(context)
      };
    }
  }, {
    key: "asCommand",
    value: function asCommand(item) {
      if (item) {
        var _services_1$Command;

        var args = item.arguments || [];
        return (_services_1$Command = services_1.Command).create.apply(_services_1$Command, [item.title, item.id].concat(_toConsumableArray(args)));
      }

      return undefined;
    }
  }, {
    key: "asCodeLens",
    value: function asCodeLens(item) {
      var result = services_1.CodeLens.create(this.asRange(item.range));

      if (item.command) {
        result.command = this.asCommand(item.command);
      }

      if (ProtocolCodeLens.is(item)) {
        if (item.data) {
          result.data = item.data;
        }

        ;
      }

      return result;
    }
  }, {
    key: "asFormattingOptions",
    value: function asFormattingOptions(options) {
      return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
      };
    }
  }, {
    key: "asDocumentFormattingParams",
    value: function asDocumentFormattingParams(model, options) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        options: this.asFormattingOptions(options)
      };
    }
  }, {
    key: "asDocumentRangeFormattingParams",
    value: function asDocumentRangeFormattingParams(model, range, options) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        range: this.asRange(range),
        options: this.asFormattingOptions(options)
      };
    }
  }, {
    key: "asDocumentOnTypeFormattingParams",
    value: function asDocumentOnTypeFormattingParams(model, position, ch, options) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        position: this.asPosition(position.lineNumber, position.column),
        ch: ch,
        options: this.asFormattingOptions(options)
      };
    }
  }, {
    key: "asRenameParams",
    value: function asRenameParams(model, position, newName) {
      return {
        textDocument: this.asTextDocumentIdentifier(model),
        position: this.asPosition(position.lineNumber, position.column),
        newName: newName
      };
    }
  }, {
    key: "asDocumentLinkParams",
    value: function asDocumentLinkParams(model) {
      return {
        textDocument: this.asTextDocumentIdentifier(model)
      };
    }
  }, {
    key: "asDocumentLink",
    value: function asDocumentLink(item) {
      var result = services_1.DocumentLink.create(this.asRange(item.range));

      if (item.url) {
        result.target = typeof item.url === 'string' ? item.url : item.url.toString();
      }

      if (ProtocolDocumentLink.is(item) && item.data) {
        result.data = item.data;
      }

      return result;
    }
  }]);

  return MonacoToProtocolConverter;
}();

exports.MonacoToProtocolConverter = MonacoToProtocolConverter;

var ProtocolToMonacoConverter = /*#__PURE__*/function () {
  function ProtocolToMonacoConverter() {
    _classCallCheck(this, ProtocolToMonacoConverter);
  }

  _createClass(ProtocolToMonacoConverter, [{
    key: "asResourceEdits",
    value: function asResourceEdits(resource, edits, modelVersionId) {
      return {
        resource: resource,
        edits: this.asTextEdits(edits),
        modelVersionId: modelVersionId
      };
    }
  }, {
    key: "asWorkspaceEdit",
    value: function asWorkspaceEdit(item) {
      var _this5 = this;

      if (!item) {
        return undefined;
      }

      var edits = [];

      if (item.documentChanges) {
        item.documentChanges.forEach(function (change) {
          if (ls.CreateFile.is(change)) {
            edits.push({
              newUri: monaco.Uri.parse(change.uri),
              options: change.options
            });
          } else if (ls.RenameFile.is(change)) {
            edits.push({
              oldUri: monaco.Uri.parse(change.oldUri),
              newUri: monaco.Uri.parse(change.newUri),
              options: change.options
            });
          } else if (ls.DeleteFile.is(change)) {
            edits.push({
              oldUri: monaco.Uri.parse(change.uri),
              options: change.options
            });
          } else if (ls.TextDocumentEdit.is(change)) {
            var resource = monaco.Uri.parse(change.textDocument.uri);
            var version = typeof change.textDocument.version === 'number' ? change.textDocument.version : undefined;
            edits.push(_this5.asResourceEdits(resource, change.edits, version));
          } else {
            console.error("Unknown workspace edit change received:\n".concat(JSON.stringify(change, undefined, 4)));
          }
        });
      } else if (item.changes) {
        for (var _i = 0, _Object$keys = Object.keys(item.changes); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          var resource = monaco.Uri.parse(key);
          edits.push(this.asResourceEdits(resource, item.changes[key]));
        }
      }

      return {
        edits: edits
      };
    }
  }, {
    key: "asTextEdit",
    value: function asTextEdit(edit) {
      if (!edit) {
        return undefined;
      }

      var range = this.asRange(edit.range);
      return {
        range: range,
        text: edit.newText
      };
    }
  }, {
    key: "asTextEdits",
    value: function asTextEdits(items) {
      var _this6 = this;

      if (!items) {
        return undefined;
      }

      return items.map(function (item) {
        return _this6.asTextEdit(item);
      });
    }
  }, {
    key: "asCodeLens",
    value: function asCodeLens(item) {
      if (!item) {
        return undefined;
      }

      var range = this.asRange(item.range);
      var result = {
        range: range
      };

      if (item.command) {
        result.command = this.asCommand(item.command);
      }

      if (item.data !== void 0 && item.data !== null) {
        result.data = item.data;
      }

      return result;
    }
  }, {
    key: "asCodeLensList",
    value: function asCodeLensList(items) {
      var _this7 = this;

      if (!items) {
        return undefined;
      }

      return {
        lenses: items.map(function (codeLens) {
          return _this7.asCodeLens(codeLens);
        }),
        dispose: function dispose() {}
      };
    }
  }, {
    key: "asCodeActionList",
    value: function asCodeActionList(actions) {
      var _this8 = this;

      return {
        actions: actions.map(function (action) {
          return _this8.asCodeAction(action);
        }),
        dispose: function dispose() {}
      };
    }
  }, {
    key: "asCodeAction",
    value: function asCodeAction(item) {
      if (services_1.CodeAction.is(item)) {
        return {
          title: item.title,
          command: this.asCommand(item.command),
          edit: this.asWorkspaceEdit(item.edit),
          diagnostics: this.asDiagnostics(item.diagnostics),
          kind: item.kind
        };
      }

      return {
        command: {
          id: item.command,
          title: item.title,
          arguments: item.arguments
        },
        title: item.title
      };
    }
  }, {
    key: "asCommand",
    value: function asCommand(command) {
      if (!command) {
        return undefined;
      }

      return {
        id: command.command,
        title: command.title,
        arguments: command.arguments
      };
    }
  }, {
    key: "asDocumentSymbol",
    value: function asDocumentSymbol(value) {
      var _this9 = this;

      var children = value.children && value.children.map(function (c) {
        return _this9.asDocumentSymbol(c);
      });
      return {
        name: value.name,
        detail: value.detail || "",
        kind: this.asSymbolKind(value.kind),
        tags: [],
        range: this.asRange(value.range),
        selectionRange: this.asRange(value.selectionRange),
        children: children
      };
    }
  }, {
    key: "asDocumentSymbols",
    value: function asDocumentSymbols(values) {
      var _this10 = this;

      if (services_1.DocumentSymbol.is(values[0])) {
        return values.map(function (s) {
          return _this10.asDocumentSymbol(s);
        });
      }

      return this.asSymbolInformations(values);
    }
  }, {
    key: "asSymbolInformations",
    value: function asSymbolInformations(values, uri) {
      var _this11 = this;

      if (!values) {
        return undefined;
      }

      return values.map(function (information) {
        return _this11.asSymbolInformation(information, uri);
      });
    }
  }, {
    key: "asSymbolInformation",
    value: function asSymbolInformation(item, uri) {
      var location = this.asLocation(uri ? Object.assign(Object.assign({}, item.location), {
        uri: uri.toString()
      }) : item.location);
      return {
        name: item.name,
        detail: '',
        containerName: item.containerName,
        kind: this.asSymbolKind(item.kind),
        tags: [],
        range: location.range,
        selectionRange: location.range
      };
    }
  }, {
    key: "asSymbolKind",
    value: function asSymbolKind(item) {
      if (item <= services_1.SymbolKind.TypeParameter) {
        // Symbol kind is one based in the protocol and zero based in code.
        return item - 1;
      }

      return monaco.languages.SymbolKind.Property;
    }
  }, {
    key: "asDocumentHighlights",
    value: function asDocumentHighlights(values) {
      var _this12 = this;

      if (!values) {
        return undefined;
      }

      return values.map(function (item) {
        return _this12.asDocumentHighlight(item);
      });
    }
  }, {
    key: "asDocumentHighlight",
    value: function asDocumentHighlight(item) {
      var range = this.asRange(item.range);
      var kind = Is.number(item.kind) ? this.asDocumentHighlightKind(item.kind) : undefined;
      return {
        range: range,
        kind: kind
      };
    }
  }, {
    key: "asDocumentHighlightKind",
    value: function asDocumentHighlightKind(item) {
      switch (item) {
        case services_1.DocumentHighlightKind.Text:
          return monaco.languages.DocumentHighlightKind.Text;

        case services_1.DocumentHighlightKind.Read:
          return monaco.languages.DocumentHighlightKind.Read;

        case services_1.DocumentHighlightKind.Write:
          return monaco.languages.DocumentHighlightKind.Write;
      }

      return monaco.languages.DocumentHighlightKind.Text;
    }
  }, {
    key: "asReferences",
    value: function asReferences(values) {
      var _this13 = this;

      if (!values) {
        return undefined;
      }

      return values.map(function (location) {
        return _this13.asLocation(location);
      });
    }
  }, {
    key: "asDefinitionResult",
    value: function asDefinitionResult(item) {
      var _this14 = this;

      if (!item) {
        return undefined;
      }

      if (Is.array(item)) {
        if (item.length == 0) {
          return undefined;
        } else if (services_1.LocationLink.is(item[0])) {
          var links = item;
          return links.map(function (location) {
            return _this14.asLocationLink(location);
          });
        } else {
          var locations = item;
          return locations.map(function (location) {
            return _this14.asLocation(location);
          });
        }
      } else {
        return this.asLocation(item);
      }
    }
  }, {
    key: "asLocation",
    value: function asLocation(item) {
      if (!item) {
        return undefined;
      }

      var uri = monaco.Uri.parse(item.uri);
      var range = this.asRange(item.range);
      return {
        uri: uri,
        range: range
      };
    }
  }, {
    key: "asLocationLink",
    value: function asLocationLink(item) {
      if (!item) {
        return undefined;
      }

      var result = {
        uri: monaco.Uri.parse(item.targetUri),
        range: this.asRange(item.targetSelectionRange),
        originSelectionRange: this.asRange(item.originSelectionRange),
        targetSelectionRange: this.asRange(item.targetSelectionRange)
      };

      if (!result.targetSelectionRange) {
        throw new Error("targetSelectionRange must not be undefined or null");
      }

      return result;
    }
  }, {
    key: "asSignatureHelpResult",
    value: function asSignatureHelpResult(item) {
      if (!item) {
        return undefined;
      }

      var result = {};

      if (Is.number(item.activeSignature)) {
        result.activeSignature = item.activeSignature;
      } else {
        // activeSignature was optional in the past
        result.activeSignature = 0;
      }

      if (Is.number(item.activeParameter)) {
        result.activeParameter = item.activeParameter;
      } else {
        // activeParameter was optional in the past
        result.activeParameter = 0;
      }

      if (item.signatures) {
        result.signatures = this.asSignatureInformations(item.signatures);
      } else {
        result.signatures = [];
      }

      return {
        value: result,
        dispose: function dispose() {}
      };
    }
  }, {
    key: "asSignatureInformations",
    value: function asSignatureInformations(items) {
      var _this15 = this;

      return items.map(function (item) {
        return _this15.asSignatureInformation(item);
      });
    }
  }, {
    key: "asSignatureInformation",
    value: function asSignatureInformation(item) {
      var result = {
        label: item.label
      };

      if (item.documentation) {
        result.documentation = this.asDocumentation(item.documentation);
      }

      if (item.parameters) {
        result.parameters = this.asParameterInformations(item.parameters);
      } else {
        result.parameters = [];
      }

      return result;
    }
  }, {
    key: "asParameterInformations",
    value: function asParameterInformations(item) {
      var _this16 = this;

      return item.map(function (item) {
        return _this16.asParameterInformation(item);
      });
    }
  }, {
    key: "asParameterInformation",
    value: function asParameterInformation(item) {
      var result = {
        label: item.label
      };

      if (item.documentation) {
        result.documentation = this.asDocumentation(item.documentation);
      }

      ;
      return result;
    }
  }, {
    key: "asHover",
    value: function asHover(hover) {
      if (!hover) {
        return undefined;
      }

      return {
        contents: this.asHoverContent(hover.contents),
        range: this.asRange(hover.range)
      };
    }
  }, {
    key: "asHoverContent",
    value: function asHoverContent(contents) {
      var _this17 = this;

      if (Array.isArray(contents)) {
        return contents.map(function (content) {
          return _this17.asMarkdownString(content);
        });
      }

      return [this.asMarkdownString(contents)];
    }
  }, {
    key: "asDocumentation",
    value: function asDocumentation(value) {
      if (Is.string(value)) {
        return value;
      }

      if (value.kind === services_1.MarkupKind.PlainText) {
        return value.value;
      }

      return this.asMarkdownString(value);
    }
  }, {
    key: "asMarkdownString",
    value: function asMarkdownString(content) {
      if (services_1.MarkupContent.is(content)) {
        return {
          value: content.value
        };
      }

      if (Is.string(content)) {
        return {
          value: content
        };
      }

      var language = content.language,
          value = content.value;
      return {
        value: '```' + language + '\n' + value + '\n```'
      };
    }
  }, {
    key: "asSeverity",
    value: function asSeverity(severity) {
      if (severity === 1) {
        return monaco.MarkerSeverity.Error;
      }

      if (severity === 2) {
        return monaco.MarkerSeverity.Warning;
      }

      if (severity === 3) {
        return monaco.MarkerSeverity.Info;
      }

      return monaco.MarkerSeverity.Hint;
    }
  }, {
    key: "asDiagnostics",
    value: function asDiagnostics(diagnostics) {
      var _this18 = this;

      if (!diagnostics) {
        return undefined;
      }

      return diagnostics.map(function (diagnostic) {
        return _this18.asDiagnostic(diagnostic);
      });
    }
  }, {
    key: "asDiagnostic",
    value: function asDiagnostic(diagnostic) {
      return {
        code: typeof diagnostic.code === "number" ? diagnostic.code.toString() : diagnostic.code,
        severity: this.asSeverity(diagnostic.severity),
        message: diagnostic.message,
        source: diagnostic.source,
        startLineNumber: diagnostic.range.start.line + 1,
        startColumn: diagnostic.range.start.character + 1,
        endLineNumber: diagnostic.range.end.line + 1,
        endColumn: diagnostic.range.end.character + 1,
        relatedInformation: this.asRelatedInformations(diagnostic.relatedInformation)
      };
    }
  }, {
    key: "asRelatedInformations",
    value: function asRelatedInformations(relatedInformation) {
      var _this19 = this;

      if (!relatedInformation) {
        return undefined;
      }

      return relatedInformation.map(function (item) {
        return _this19.asRelatedInformation(item);
      });
    }
  }, {
    key: "asRelatedInformation",
    value: function asRelatedInformation(relatedInformation) {
      return {
        resource: monaco.Uri.parse(relatedInformation.location.uri),
        startLineNumber: relatedInformation.location.range.start.line + 1,
        startColumn: relatedInformation.location.range.start.character + 1,
        endLineNumber: relatedInformation.location.range.end.line + 1,
        endColumn: relatedInformation.location.range.end.character + 1,
        message: relatedInformation.message
      };
    }
  }, {
    key: "asCompletionResult",
    value: function asCompletionResult(result, defaultRange) {
      var _this20 = this;

      if (!result) {
        return {
          incomplete: false,
          suggestions: []
        };
      }

      if (Array.isArray(result)) {
        var suggestions = result.map(function (item) {
          return _this20.asCompletionItem(item, defaultRange);
        });
        return {
          incomplete: false,
          suggestions: suggestions
        };
      }

      return {
        incomplete: result.isIncomplete,
        suggestions: result.items.map(function (item) {
          return _this20.asCompletionItem(item, defaultRange);
        })
      };
    }
  }, {
    key: "asCompletionItem",
    value: function asCompletionItem(item, defaultRange) {
      var result = {
        label: item.label
      };

      if (item.detail) {
        result.detail = item.detail;
      }

      if (item.documentation) {
        result.documentation = this.asDocumentation(item.documentation);
        result.documentationFormat = Is.string(item.documentation) ? undefined : item.documentation.kind;
      }

      ;

      if (item.filterText) {
        result.filterText = item.filterText;
      }

      var insertText = this.asCompletionInsertText(item, defaultRange);
      result.insertText = insertText.insertText;
      result.range = insertText.range;
      result.fromEdit = insertText.fromEdit;

      if (insertText.isSnippet) {
        result.insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
      }

      if (Is.number(item.kind)) {
        var _this$asCompletionIte = this.asCompletionItemKind(item.kind),
            _this$asCompletionIte2 = _slicedToArray(_this$asCompletionIte, 2),
            itemKind = _this$asCompletionIte2[0],
            original = _this$asCompletionIte2[1];

        result.kind = itemKind;

        if (original) {
          result.originalItemKind = original;
        }
      }

      if (item.sortText) {
        result.sortText = item.sortText;
      }

      if (item.additionalTextEdits) {
        result.additionalTextEdits = this.asTextEdits(item.additionalTextEdits);
      }

      if (Is.stringArray(item.commitCharacters)) {
        result.commitCharacters = item.commitCharacters.slice();
      }

      if (item.command) {
        result.command = this.asCommand(item.command);
      }

      if (item.deprecated === true || item.deprecated === false) {
        result.deprecated = item.deprecated;
      }

      if (item.preselect === true || item.preselect === false) {
        result.preselect = item.preselect;
      }

      if (item.data !== undefined) {
        result.data = item.data;
      }

      if (item.deprecated === true || item.deprecated === false) {
        result.deprecated = item.deprecated;
      }

      return result;
    }
  }, {
    key: "asCompletionItemKind",
    value: function asCompletionItemKind(value) {
      if (services_1.CompletionItemKind.Text <= value && value <= services_1.CompletionItemKind.TypeParameter) {
        switch (value) {
          case services_1.CompletionItemKind.Text:
            return [monaco.languages.CompletionItemKind.Text, undefined];

          case services_1.CompletionItemKind.Method:
            return [monaco.languages.CompletionItemKind.Method, undefined];

          case services_1.CompletionItemKind.Function:
            return [monaco.languages.CompletionItemKind.Function, undefined];

          case services_1.CompletionItemKind.Constructor:
            return [monaco.languages.CompletionItemKind.Constructor, undefined];

          case services_1.CompletionItemKind.Field:
            return [monaco.languages.CompletionItemKind.Field, undefined];

          case services_1.CompletionItemKind.Variable:
            return [monaco.languages.CompletionItemKind.Variable, undefined];

          case services_1.CompletionItemKind.Class:
            return [monaco.languages.CompletionItemKind.Class, undefined];

          case services_1.CompletionItemKind.Interface:
            return [monaco.languages.CompletionItemKind.Interface, undefined];

          case services_1.CompletionItemKind.Module:
            return [monaco.languages.CompletionItemKind.Module, undefined];

          case services_1.CompletionItemKind.Property:
            return [monaco.languages.CompletionItemKind.Property, undefined];

          case services_1.CompletionItemKind.Unit:
            return [monaco.languages.CompletionItemKind.Unit, undefined];

          case services_1.CompletionItemKind.Value:
            return [monaco.languages.CompletionItemKind.Value, undefined];

          case services_1.CompletionItemKind.Enum:
            return [monaco.languages.CompletionItemKind.Enum, undefined];

          case services_1.CompletionItemKind.Keyword:
            return [monaco.languages.CompletionItemKind.Keyword, undefined];

          case services_1.CompletionItemKind.Snippet:
            return [monaco.languages.CompletionItemKind.Snippet, undefined];

          case services_1.CompletionItemKind.Color:
            return [monaco.languages.CompletionItemKind.Color, undefined];

          case services_1.CompletionItemKind.File:
            return [monaco.languages.CompletionItemKind.File, undefined];

          case services_1.CompletionItemKind.Reference:
            return [monaco.languages.CompletionItemKind.Reference, undefined];

          case services_1.CompletionItemKind.Folder:
            return [monaco.languages.CompletionItemKind.Folder, undefined];

          case services_1.CompletionItemKind.EnumMember:
            return [monaco.languages.CompletionItemKind.EnumMember, undefined];

          case services_1.CompletionItemKind.Constant:
            return [monaco.languages.CompletionItemKind.Constant, undefined];

          case services_1.CompletionItemKind.Struct:
            return [monaco.languages.CompletionItemKind.Struct, undefined];

          case services_1.CompletionItemKind.Event:
            return [monaco.languages.CompletionItemKind.Event, undefined];

          case services_1.CompletionItemKind.Operator:
            return [monaco.languages.CompletionItemKind.Operator, undefined];

          case services_1.CompletionItemKind.TypeParameter:
            return [monaco.languages.CompletionItemKind.TypeParameter, undefined];

          default:
            return [value - 1, undefined];
        }
      }

      ;
      return [services_1.CompletionItemKind.Text, value];
    }
  }, {
    key: "asCompletionInsertText",
    value: function asCompletionInsertText(item, defaultRange) {
      var isSnippet = item.insertTextFormat === services_1.InsertTextFormat.Snippet;

      if (item.textEdit) {
        var range = this.asRange(item.textEdit.range);
        var value = item.textEdit.newText;
        return {
          isSnippet: isSnippet,
          insertText: value,
          range: range,
          fromEdit: true
        };
      }

      if (item.insertText) {
        return {
          isSnippet: isSnippet,
          insertText: item.insertText,
          fromEdit: false,
          range: defaultRange
        };
      }

      return {
        insertText: item.label,
        range: defaultRange,
        fromEdit: false,
        isSnippet: false
      };
    }
  }, {
    key: "asDocumentLinks",
    value: function asDocumentLinks(documentLinks) {
      var _this21 = this;

      var links = documentLinks.map(function (link) {
        return _this21.asDocumentLink(link);
      });
      return {
        links: links
      };
    }
  }, {
    key: "asDocumentLink",
    value: function asDocumentLink(documentLink) {
      return {
        range: this.asRange(documentLink.range),
        url: documentLink.target,
        data: documentLink.data
      };
    }
  }, {
    key: "asRange",
    value: function asRange(range) {
      if (range === undefined) {
        return undefined;
      }

      if (range === null) {
        return null;
      }

      var start = this.asPosition(range.start);
      var end = this.asPosition(range.end);

      if (start instanceof monaco.Position && end instanceof monaco.Position) {
        return new monaco.Range(start.lineNumber, start.column, end.lineNumber, end.column);
      }

      var startLineNumber = !start || start.lineNumber === undefined ? undefined : start.lineNumber;
      var startColumn = !start || start.column === undefined ? undefined : start.column;
      var endLineNumber = !end || end.lineNumber === undefined ? undefined : end.lineNumber;
      var endColumn = !end || end.column === undefined ? undefined : end.column;
      return {
        startLineNumber: startLineNumber,
        startColumn: startColumn,
        endLineNumber: endLineNumber,
        endColumn: endColumn
      };
    }
  }, {
    key: "asPosition",
    value: function asPosition(position) {
      if (position === undefined) {
        return undefined;
      }

      if (position === null) {
        return null;
      }

      var line = position.line,
          character = position.character;
      var lineNumber = line === undefined ? undefined : line + 1;
      var column = character === undefined ? undefined : character + 1;

      if (lineNumber !== undefined && column !== undefined) {
        return new monaco.Position(lineNumber, column);
      }

      return {
        lineNumber: lineNumber,
        column: column
      };
    }
  }, {
    key: "asColorInformations",
    value: function asColorInformations(items) {
      var _this22 = this;

      return items.map(function (item) {
        return _this22.asColorInformation(item);
      });
    }
  }, {
    key: "asColorInformation",
    value: function asColorInformation(item) {
      return {
        range: this.asRange(item.range),
        color: item.color
      };
    }
  }, {
    key: "asColorPresentations",
    value: function asColorPresentations(items) {
      var _this23 = this;

      return items.map(function (item) {
        return _this23.asColorPresentation(item);
      });
    }
  }, {
    key: "asColorPresentation",
    value: function asColorPresentation(item) {
      return {
        label: item.label,
        textEdit: this.asTextEdit(item.textEdit),
        additionalTextEdits: this.asTextEdits(item.additionalTextEdits)
      };
    }
  }, {
    key: "asFoldingRanges",
    value: function asFoldingRanges(items) {
      var _this24 = this;

      if (!items) {
        return items;
      }

      return items.map(function (item) {
        return _this24.asFoldingRange(item);
      });
    }
  }, {
    key: "asFoldingRange",
    value: function asFoldingRange(item) {
      return {
        start: item.startLine + 1,
        end: item.endLine + 1,
        kind: this.asFoldingRangeKind(item.kind)
      };
    }
  }, {
    key: "asFoldingRangeKind",
    value: function asFoldingRangeKind(kind) {
      if (kind) {
        switch (kind) {
          case services_1.FoldingRangeKind.Comment:
            return monaco.languages.FoldingRangeKind.Comment;

          case services_1.FoldingRangeKind.Imports:
            return monaco.languages.FoldingRangeKind.Imports;

          case services_1.FoldingRangeKind.Region:
            return monaco.languages.FoldingRangeKind.Region;
        }

        ;
      }

      return undefined;
    }
  }]);

  return ProtocolToMonacoConverter;
}();

exports.ProtocolToMonacoConverter = ProtocolToMonacoConverter;

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/monaco-diagnostic-collection.js":
/*!***************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/monaco-diagnostic-collection.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var disposable_1 = __webpack_require__(/*! ./disposable */ "../../node_modules/monaco-languageclient/lib/disposable.js");

var MonacoDiagnosticCollection = /*#__PURE__*/function () {
  function MonacoDiagnosticCollection(name, p2m) {
    _classCallCheck(this, MonacoDiagnosticCollection);

    this.name = name;
    this.p2m = p2m;
    this.diagnostics = new Map();
    this.toDispose = new disposable_1.DisposableCollection();
  }

  _createClass(MonacoDiagnosticCollection, [{
    key: "dispose",
    value: function dispose() {
      this.toDispose.dispose();
    }
  }, {
    key: "get",
    value: function get(uri) {
      var diagnostics = this.diagnostics.get(uri);
      return !!diagnostics ? diagnostics.diagnostics : [];
    }
  }, {
    key: "set",
    value: function set(uri, diagnostics) {
      var _this = this;

      var existing = this.diagnostics.get(uri);

      if (existing) {
        existing.diagnostics = diagnostics;
      } else {
        var modelDiagnostics = new MonacoModelDiagnostics(uri, diagnostics, this.name, this.p2m);
        this.diagnostics.set(uri, modelDiagnostics);
        this.toDispose.push(disposable_1.Disposable.create(function () {
          _this.diagnostics["delete"](uri);

          modelDiagnostics.dispose();
        }));
      }
    }
  }]);

  return MonacoDiagnosticCollection;
}();

exports.MonacoDiagnosticCollection = MonacoDiagnosticCollection;

var MonacoModelDiagnostics = /*#__PURE__*/function () {
  function MonacoModelDiagnostics(uri, diagnostics, owner, p2m) {
    var _this2 = this;

    _classCallCheck(this, MonacoModelDiagnostics);

    this.owner = owner;
    this.p2m = p2m;
    this._markers = [];
    this._diagnostics = [];
    this.uri = monaco.Uri.parse(uri);
    this.diagnostics = diagnostics;
    monaco.editor.onDidCreateModel(function (model) {
      return _this2.doUpdateModelMarkers(model);
    });
  }

  _createClass(MonacoModelDiagnostics, [{
    key: "dispose",
    value: function dispose() {
      this._markers = [];
      this.updateModelMarkers();
    }
  }, {
    key: "updateModelMarkers",
    value: function updateModelMarkers() {
      var model = monaco.editor.getModel(this.uri);
      this.doUpdateModelMarkers(model ? model : undefined);
    }
  }, {
    key: "doUpdateModelMarkers",
    value: function doUpdateModelMarkers(model) {
      if (model && this.uri.toString() === model.uri.toString()) {
        monaco.editor.setModelMarkers(model, this.owner, this._markers);
      }
    }
  }, {
    key: "diagnostics",
    set: function set(diagnostics) {
      this._diagnostics = diagnostics;
      this._markers = this.p2m.asDiagnostics(diagnostics);
      this.updateModelMarkers();
    },
    get: function get() {
      return this._diagnostics;
    }
  }, {
    key: "markers",
    get: function get() {
      return this._markers;
    }
  }]);

  return MonacoModelDiagnostics;
}();

exports.MonacoModelDiagnostics = MonacoModelDiagnostics;

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/monaco-language-client.js":
/*!*********************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/monaco-language-client.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _get = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../node_modules/@babel/runtime/helpers/get.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

var client_1 = __webpack_require__(/*! vscode-languageclient/lib/client */ "../../node_modules/vscode-languageclient/lib/client.js");

var typeDefinition_1 = __webpack_require__(/*! vscode-languageclient/lib/typeDefinition */ "../../node_modules/vscode-languageclient/lib/typeDefinition.js");

var configuration_1 = __webpack_require__(/*! vscode-languageclient/lib/configuration */ "../../node_modules/vscode-languageclient/lib/configuration.js");

var implementation_1 = __webpack_require__(/*! vscode-languageclient/lib/implementation */ "../../node_modules/vscode-languageclient/lib/implementation.js");

var colorProvider_1 = __webpack_require__(/*! vscode-languageclient/lib/colorProvider */ "../../node_modules/vscode-languageclient/lib/colorProvider.js");

var workspaceFolders_1 = __webpack_require__(/*! vscode-languageclient/lib/workspaceFolders */ "../../node_modules/vscode-languageclient/lib/workspaceFolders.js");

var foldingRange_1 = __webpack_require__(/*! vscode-languageclient/lib/foldingRange */ "../../node_modules/vscode-languageclient/lib/foldingRange.js");

var declaration_1 = __webpack_require__(/*! vscode-languageclient/lib/declaration */ "../../node_modules/vscode-languageclient/lib/declaration.js");

__export(__webpack_require__(/*! vscode-languageclient/lib/client */ "../../node_modules/vscode-languageclient/lib/client.js"));

var MonacoLanguageClient = /*#__PURE__*/function (_client_1$BaseLanguag) {
  _inherits(MonacoLanguageClient, _client_1$BaseLanguag);

  var _super = _createSuper(MonacoLanguageClient);

  function MonacoLanguageClient(_ref) {
    var _this;

    var id = _ref.id,
        name = _ref.name,
        clientOptions = _ref.clientOptions,
        connectionProvider = _ref.connectionProvider;

    _classCallCheck(this, MonacoLanguageClient);

    _this = _super.call(this, id || name.toLowerCase(), name, clientOptions);
    _this.connectionProvider = connectionProvider;
    _this.createConnection = _this.doCreateConnection.bind(_assertThisInitialized(_this)); // bypass LSP <=> VS Code conversion

    var self = _assertThisInitialized(_this);

    self._p2c = new Proxy(self._p2c, {
      get: function get(target, prop) {
        if (prop === 'asUri') {
          return target[prop];
        }

        return MonacoLanguageClient.bypassConversion;
      }
    });
    self._c2p = new Proxy(self._c2p, {
      get: function get(target, prop) {
        if (prop === 'asUri') {
          return target[prop];
        }

        if (prop === 'asCompletionParams') {
          return function (textDocument, position, context) {
            return {
              textDocument: target.asTextDocumentIdentifier(textDocument),
              position: position,
              context: context
            };
          };
        }

        if (prop === 'asWillSaveTextDocumentParams') {
          return function (event) {
            return {
              textDocument: target.asTextDocumentIdentifier(event.document),
              reason: event.reason
            };
          };
        }

        if (prop.endsWith('Params')) {
          return target[prop];
        }

        return MonacoLanguageClient.bypassConversion;
      }
    });
    return _this;
  }

  _createClass(MonacoLanguageClient, [{
    key: "doCreateConnection",
    value: function doCreateConnection() {
      var errorHandler = this.handleConnectionError.bind(this);
      var closeHandler = this.handleConnectionClosed.bind(this);
      return this.connectionProvider.get(errorHandler, closeHandler, this.outputChannel);
    }
  }, {
    key: "createMessageTransports",
    value: function createMessageTransports(encoding) {
      throw new Error('Unsupported');
    }
  }, {
    key: "registerBuiltinFeatures",
    value: function registerBuiltinFeatures() {
      _get(_getPrototypeOf(MonacoLanguageClient.prototype), "registerBuiltinFeatures", this).call(this);

      this.registerFeature(new configuration_1.ConfigurationFeature(this));
      this.registerFeature(new typeDefinition_1.TypeDefinitionFeature(this));
      this.registerFeature(new implementation_1.ImplementationFeature(this));
      this.registerFeature(new colorProvider_1.ColorProviderFeature(this));
      this.registerFeature(new workspaceFolders_1.WorkspaceFoldersFeature(this));
      var foldingRangeFeature = new foldingRange_1.FoldingRangeFeature(this);
      foldingRangeFeature['asFoldingRanges'] = MonacoLanguageClient.bypassConversion;
      this.registerFeature(foldingRangeFeature);
      this.registerFeature(new declaration_1.DeclarationFeature(this));
      var features = this['_features'];

      var _iterator = _createForOfIteratorHelper(features),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var feature = _step.value;

          if (feature instanceof colorProvider_1.ColorProviderFeature) {
            feature['asColor'] = MonacoLanguageClient.bypassConversion;
            feature['asColorInformations'] = MonacoLanguageClient.bypassConversion;
            feature['asColorPresentations'] = MonacoLanguageClient.bypassConversion;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return MonacoLanguageClient;
}(client_1.BaseLanguageClient);

exports.MonacoLanguageClient = MonacoLanguageClient;

MonacoLanguageClient.bypassConversion = function (result) {
  return result || undefined;
};

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/monaco-languages.js":
/*!***************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/monaco-languages.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var globToRegExp = __webpack_require__(/*! glob-to-regexp */ "../../node_modules/glob-to-regexp/index.js");

var services_1 = __webpack_require__(/*! ./services */ "../../node_modules/monaco-languageclient/lib/services.js");

var monaco_diagnostic_collection_1 = __webpack_require__(/*! ./monaco-diagnostic-collection */ "../../node_modules/monaco-languageclient/lib/monaco-diagnostic-collection.js");

var disposable_1 = __webpack_require__(/*! ./disposable */ "../../node_modules/monaco-languageclient/lib/disposable.js");

var MonacoModelIdentifier;

(function (MonacoModelIdentifier) {
  function fromDocument(document) {
    return {
      uri: monaco.Uri.parse(document.uri),
      languageId: document.languageId
    };
  }

  MonacoModelIdentifier.fromDocument = fromDocument;

  function fromModel(model) {
    return {
      uri: model.uri,
      languageId: model.getModeId()
    };
  }

  MonacoModelIdentifier.fromModel = fromModel;
})(MonacoModelIdentifier = exports.MonacoModelIdentifier || (exports.MonacoModelIdentifier = {}));

function testGlob(pattern, value) {
  var regExp = globToRegExp(pattern, {
    extended: true,
    globstar: true
  });
  return regExp.test(value);
}

exports.testGlob = testGlob;

var MonacoLanguages = /*#__PURE__*/function () {
  function MonacoLanguages(p2m, m2p) {
    _classCallCheck(this, MonacoLanguages);

    this.p2m = p2m;
    this.m2p = m2p;
  }

  _createClass(MonacoLanguages, [{
    key: "match",
    value: function match(selector, document) {
      return this.matchModel(selector, MonacoModelIdentifier.fromDocument(document));
    }
  }, {
    key: "createDiagnosticCollection",
    value: function createDiagnosticCollection(name) {
      return new monaco_diagnostic_collection_1.MonacoDiagnosticCollection(name || 'default', this.p2m);
    }
  }, {
    key: "registerCompletionItemProvider",
    value: function registerCompletionItemProvider(selector, provider) {
      for (var _len = arguments.length, triggerCharacters = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        triggerCharacters[_key - 2] = arguments[_key];
      }

      var completionProvider = this.createCompletionProvider.apply(this, [selector, provider].concat(triggerCharacters));
      var providers = new disposable_1.DisposableCollection();

      var _iterator = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var language = _step.value;
          providers.push(monaco.languages.registerCompletionItemProvider(language, completionProvider));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ;
      return providers;
    }
  }, {
    key: "createCompletionProvider",
    value: function createCompletionProvider(selector, provider) {
      var _this = this;

      for (var _len2 = arguments.length, triggerCharacters = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        triggerCharacters[_key2 - 2] = arguments[_key2];
      }

      return {
        triggerCharacters: triggerCharacters,
        provideCompletionItems: function provideCompletionItems(model, position, context, token) {
          return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
            var wordUntil, defaultRange, params, result;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", undefined);

                  case 2:
                    wordUntil = model.getWordUntilPosition(position);
                    defaultRange = new monaco.Range(position.lineNumber, wordUntil.startColumn, position.lineNumber, wordUntil.endColumn);
                    params = this.m2p.asCompletionParams(model, position, context);
                    _context.next = 7;
                    return provider.provideCompletionItems(params, token);

                  case 7:
                    result = _context.sent;
                    return _context.abrupt("return", result && this.p2m.asCompletionResult(result, defaultRange));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        },
        resolveCompletionItem: provider.resolveCompletionItem ? function (model, position, item, token) {
          return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
            var protocolItem, resolvedItem, resolvedCompletionItem;
            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    protocolItem = this.m2p.asCompletionItem(item);
                    _context2.next = 3;
                    return provider.resolveCompletionItem(protocolItem, token);

                  case 3:
                    resolvedItem = _context2.sent;

                    if (resolvedItem) {
                      resolvedCompletionItem = this.p2m.asCompletionItem(resolvedItem, item.range);
                      Object.assign(item, resolvedCompletionItem);
                    }

                    return _context2.abrupt("return", item);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } : undefined
      };
    }
  }, {
    key: "registerHoverProvider",
    value: function registerHoverProvider(selector, provider) {
      var hoverProvider = this.createHoverProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator2 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var language = _step2.value;
          providers.push(monaco.languages.registerHoverProvider(language, hoverProvider));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return providers;
    }
  }, {
    key: "createHoverProvider",
    value: function createHoverProvider(selector, provider) {
      var _this2 = this;

      return {
        provideHover: function provideHover(model, position, token) {
          return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
            var params, hover;
            return _regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context3.next = 5;
                    return provider.provideHover(params, token);

                  case 5:
                    hover = _context3.sent;
                    return _context3.abrupt("return", hover && this.p2m.asHover(hover));

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      };
    }
  }, {
    key: "registerSignatureHelpProvider",
    value: function registerSignatureHelpProvider(selector, provider) {
      for (var _len3 = arguments.length, triggerCharacters = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        triggerCharacters[_key3 - 2] = arguments[_key3];
      }

      var signatureHelpProvider = this.createSignatureHelpProvider.apply(this, [selector, provider].concat(triggerCharacters));
      var providers = new disposable_1.DisposableCollection();

      var _iterator3 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var language = _step3.value;
          providers.push(monaco.languages.registerSignatureHelpProvider(language, signatureHelpProvider));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return providers;
    }
  }, {
    key: "createSignatureHelpProvider",
    value: function createSignatureHelpProvider(selector, provider) {
      var _this3 = this;

      for (var _len4 = arguments.length, triggerCharacters = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        triggerCharacters[_key4 - 2] = arguments[_key4];
      }

      var signatureHelpTriggerCharacters = _toConsumableArray(provider.triggerCharacters || triggerCharacters || []);

      return {
        signatureHelpTriggerCharacters: signatureHelpTriggerCharacters,
        signatureHelpRetriggerCharacters: provider.retriggerCharacters,
        provideSignatureHelp: function provideSignatureHelp(model, position, token, context) {
          return __awaiter(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
            var params, signatureHelp;
            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context4.next = 5;
                    return provider.provideSignatureHelp(params, token, this.m2p.asSignatureHelpContext(context));

                  case 5:
                    signatureHelp = _context4.sent;
                    return _context4.abrupt("return", signatureHelp && this.p2m.asSignatureHelpResult(signatureHelp));

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      };
    }
  }, {
    key: "registerDefinitionProvider",
    value: function registerDefinitionProvider(selector, provider) {
      var definitionProvider = this.createDefinitionProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator4 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var language = _step4.value;
          providers.push(monaco.languages.registerDefinitionProvider(language, definitionProvider));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return providers;
    }
  }, {
    key: "createDefinitionProvider",
    value: function createDefinitionProvider(selector, provider) {
      var _this4 = this;

      return {
        provideDefinition: function provideDefinition(model, position, token) {
          return __awaiter(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context5.next = 5;
                    return provider.provideDefinition(params, token);

                  case 5:
                    result = _context5.sent;
                    return _context5.abrupt("return", result && this.p2m.asDefinitionResult(result));

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      };
    }
  }, {
    key: "registerReferenceProvider",
    value: function registerReferenceProvider(selector, provider) {
      var referenceProvider = this.createReferenceProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator5 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var language = _step5.value;
          providers.push(monaco.languages.registerReferenceProvider(language, referenceProvider));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return providers;
    }
  }, {
    key: "createReferenceProvider",
    value: function createReferenceProvider(selector, provider) {
      var _this5 = this;

      return {
        provideReferences: function provideReferences(model, position, context, token) {
          return __awaiter(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context6.next = 2;
                      break;
                    }

                    return _context6.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asReferenceParams(model, position, context);
                    _context6.next = 5;
                    return provider.provideReferences(params, token);

                  case 5:
                    result = _context6.sent;
                    return _context6.abrupt("return", result && this.p2m.asReferences(result));

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      };
    }
  }, {
    key: "registerDocumentHighlightProvider",
    value: function registerDocumentHighlightProvider(selector, provider) {
      var documentHighlightProvider = this.createDocumentHighlightProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator6 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var language = _step6.value;
          providers.push(monaco.languages.registerDocumentHighlightProvider(language, documentHighlightProvider));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return providers;
    }
  }, {
    key: "createDocumentHighlightProvider",
    value: function createDocumentHighlightProvider(selector, provider) {
      var _this6 = this;

      return {
        provideDocumentHighlights: function provideDocumentHighlights(model, position, token) {
          return __awaiter(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context7.next = 2;
                      break;
                    }

                    return _context7.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context7.next = 5;
                    return provider.provideDocumentHighlights(params, token);

                  case 5:
                    result = _context7.sent;
                    return _context7.abrupt("return", result && this.p2m.asDocumentHighlights(result));

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      };
    }
  }, {
    key: "registerDocumentSymbolProvider",
    value: function registerDocumentSymbolProvider(selector, provider) {
      var documentSymbolProvider = this.createDocumentSymbolProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator7 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var language = _step7.value;
          providers.push(monaco.languages.registerDocumentSymbolProvider(language, documentSymbolProvider));
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return providers;
    }
  }, {
    key: "createDocumentSymbolProvider",
    value: function createDocumentSymbolProvider(selector, provider) {
      var _this7 = this;

      return {
        provideDocumentSymbols: function provideDocumentSymbols(model, token) {
          return __awaiter(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context8.next = 2;
                      break;
                    }

                    return _context8.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentSymbolParams(model);
                    _context8.next = 5;
                    return provider.provideDocumentSymbols(params, token);

                  case 5:
                    result = _context8.sent;
                    return _context8.abrupt("return", result && this.p2m.asDocumentSymbols(result));

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      };
    }
  }, {
    key: "registerCodeActionsProvider",
    value: function registerCodeActionsProvider(selector, provider) {
      var codeActionProvider = this.createCodeActionProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator8 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var language = _step8.value;
          providers.push(monaco.languages.registerCodeActionProvider(language, codeActionProvider));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      return providers;
    }
  }, {
    key: "createCodeActionProvider",
    value: function createCodeActionProvider(selector, provider) {
      var _this8 = this;

      return {
        provideCodeActions: function provideCodeActions(model, range, context, token) {
          return __awaiter(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context9.next = 2;
                      break;
                    }

                    return _context9.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asCodeActionParams(model, range, context);
                    _context9.next = 5;
                    return provider.provideCodeActions(params, token);

                  case 5:
                    result = _context9.sent;
                    return _context9.abrupt("return", result && this.p2m.asCodeActionList(result) || undefined);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      };
    }
  }, {
    key: "registerCodeLensProvider",
    value: function registerCodeLensProvider(selector, provider) {
      var codeLensProvider = this.createCodeLensProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator9 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var language = _step9.value;
          providers.push(monaco.languages.registerCodeLensProvider(language, codeLensProvider));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return providers;
    }
  }, {
    key: "createCodeLensProvider",
    value: function createCodeLensProvider(selector, provider) {
      var _this9 = this;

      return {
        provideCodeLenses: function provideCodeLenses(model, token) {
          return __awaiter(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee10() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context10.next = 2;
                      break;
                    }

                    return _context10.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asCodeLensParams(model);
                    _context10.next = 5;
                    return provider.provideCodeLenses(params, token);

                  case 5:
                    result = _context10.sent;
                    return _context10.abrupt("return", result && this.p2m.asCodeLensList(result));

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        },
        resolveCodeLens: provider.resolveCodeLens ? function (model, codeLens, token) {
          return __awaiter(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee11() {
            var protocolCodeLens, result, resolvedCodeLens;
            return _regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context11.next = 2;
                      break;
                    }

                    return _context11.abrupt("return", codeLens);

                  case 2:
                    protocolCodeLens = this.m2p.asCodeLens(codeLens);
                    _context11.next = 5;
                    return provider.resolveCodeLens(protocolCodeLens, token);

                  case 5:
                    result = _context11.sent;

                    if (result) {
                      resolvedCodeLens = this.p2m.asCodeLens(result);
                      Object.assign(codeLens, resolvedCodeLens);
                    }

                    return _context11.abrupt("return", codeLens);

                  case 8:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } : function (_, codeLens) {
          return codeLens;
        }
      };
    }
  }, {
    key: "registerDocumentFormattingEditProvider",
    value: function registerDocumentFormattingEditProvider(selector, provider) {
      var documentFormattingEditProvider = this.createDocumentFormattingEditProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator10 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var language = _step10.value;
          providers.push(monaco.languages.registerDocumentFormattingEditProvider(language, documentFormattingEditProvider));
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return providers;
    }
  }, {
    key: "createDocumentFormattingEditProvider",
    value: function createDocumentFormattingEditProvider(selector, provider) {
      var _this10 = this;

      return {
        provideDocumentFormattingEdits: function provideDocumentFormattingEdits(model, options, token) {
          return __awaiter(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee12() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context12.next = 2;
                      break;
                    }

                    return _context12.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentFormattingParams(model, options);
                    _context12.next = 5;
                    return provider.provideDocumentFormattingEdits(params, token);

                  case 5:
                    result = _context12.sent;
                    return _context12.abrupt("return", result && this.p2m.asTextEdits(result));

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      };
    }
  }, {
    key: "registerDocumentRangeFormattingEditProvider",
    value: function registerDocumentRangeFormattingEditProvider(selector, provider) {
      var documentRangeFormattingEditProvider = this.createDocumentRangeFormattingEditProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator11 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var language = _step11.value;
          providers.push(monaco.languages.registerDocumentRangeFormattingEditProvider(language, documentRangeFormattingEditProvider));
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return providers;
    }
  }, {
    key: "createDocumentRangeFormattingEditProvider",
    value: function createDocumentRangeFormattingEditProvider(selector, provider) {
      var _this11 = this;

      return {
        provideDocumentRangeFormattingEdits: function provideDocumentRangeFormattingEdits(model, range, options, token) {
          return __awaiter(_this11, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee13() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context13.next = 2;
                      break;
                    }

                    return _context13.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentRangeFormattingParams(model, range, options);
                    _context13.next = 5;
                    return provider.provideDocumentRangeFormattingEdits(params, token);

                  case 5:
                    result = _context13.sent;
                    return _context13.abrupt("return", result && this.p2m.asTextEdits(result));

                  case 7:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      };
    }
  }, {
    key: "registerOnTypeFormattingEditProvider",
    value: function registerOnTypeFormattingEditProvider(selector, provider, firstTriggerCharacter) {
      for (var _len5 = arguments.length, moreTriggerCharacter = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
        moreTriggerCharacter[_key5 - 3] = arguments[_key5];
      }

      var onTypeFormattingEditProvider = this.createOnTypeFormattingEditProvider.apply(this, [selector, provider, firstTriggerCharacter].concat(moreTriggerCharacter));
      var providers = new disposable_1.DisposableCollection();

      var _iterator12 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var language = _step12.value;
          providers.push(monaco.languages.registerOnTypeFormattingEditProvider(language, onTypeFormattingEditProvider));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return providers;
    }
  }, {
    key: "createOnTypeFormattingEditProvider",
    value: function createOnTypeFormattingEditProvider(selector, provider, firstTriggerCharacter) {
      var _this12 = this;

      for (var _len6 = arguments.length, moreTriggerCharacter = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
        moreTriggerCharacter[_key6 - 3] = arguments[_key6];
      }

      var autoFormatTriggerCharacters = [firstTriggerCharacter].concat(moreTriggerCharacter);
      return {
        autoFormatTriggerCharacters: autoFormatTriggerCharacters,
        provideOnTypeFormattingEdits: function provideOnTypeFormattingEdits(model, position, ch, options, token) {
          return __awaiter(_this12, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee14() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context14.next = 2;
                      break;
                    }

                    return _context14.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentOnTypeFormattingParams(model, position, ch, options);
                    _context14.next = 5;
                    return provider.provideOnTypeFormattingEdits(params, token);

                  case 5:
                    result = _context14.sent;
                    return _context14.abrupt("return", result && this.p2m.asTextEdits(result));

                  case 7:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      };
    }
  }, {
    key: "registerRenameProvider",
    value: function registerRenameProvider(selector, provider) {
      var renameProvider = this.createRenameProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator13 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var language = _step13.value;
          providers.push(monaco.languages.registerRenameProvider(language, renameProvider));
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      return providers;
    }
  }, {
    key: "createRenameProvider",
    value: function createRenameProvider(selector, provider) {
      var _this13 = this;

      return {
        provideRenameEdits: function provideRenameEdits(model, position, newName, token) {
          return __awaiter(_this13, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee15() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context15.next = 2;
                      break;
                    }

                    return _context15.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asRenameParams(model, position, newName);
                    _context15.next = 5;
                    return provider.provideRenameEdits(params, token);

                  case 5:
                    result = _context15.sent;
                    return _context15.abrupt("return", result && this.p2m.asWorkspaceEdit(result));

                  case 7:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      };
    }
  }, {
    key: "registerDocumentLinkProvider",
    value: function registerDocumentLinkProvider(selector, provider) {
      var linkProvider = this.createDocumentLinkProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator14 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var language = _step14.value;
          providers.push(monaco.languages.registerLinkProvider(language, linkProvider));
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      return providers;
    }
  }, {
    key: "createDocumentLinkProvider",
    value: function createDocumentLinkProvider(selector, provider) {
      var _this14 = this;

      return {
        provideLinks: function provideLinks(model, token) {
          return __awaiter(_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee16() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context16.next = 2;
                      break;
                    }

                    return _context16.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asDocumentLinkParams(model);
                    _context16.next = 5;
                    return provider.provideDocumentLinks(params, token);

                  case 5:
                    result = _context16.sent;
                    return _context16.abrupt("return", result && this.p2m.asDocumentLinks(result));

                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        },
        resolveLink: function resolveLink(link, token) {
          return __awaiter(_this14, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee17() {
            var documentLink, result, resolvedLink;
            return _regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    if (!(provider.resolveDocumentLink && (link.url === null || link.url === undefined))) {
                      _context17.next = 6;
                      break;
                    }

                    documentLink = this.m2p.asDocumentLink(link);
                    _context17.next = 4;
                    return provider.resolveDocumentLink(documentLink, token);

                  case 4:
                    result = _context17.sent;

                    if (result) {
                      resolvedLink = this.p2m.asDocumentLink(result);
                      Object.assign(link, resolvedLink);
                    }

                  case 6:
                    return _context17.abrupt("return", link);

                  case 7:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      };
    }
  }, {
    key: "registerImplementationProvider",
    value: function registerImplementationProvider(selector, provider) {
      var implementationProvider = this.createImplementationProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator15 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var language = _step15.value;
          providers.push(monaco.languages.registerImplementationProvider(language, implementationProvider));
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      return providers;
    }
  }, {
    key: "createImplementationProvider",
    value: function createImplementationProvider(selector, provider) {
      var _this15 = this;

      return {
        provideImplementation: function provideImplementation(model, position, token) {
          return __awaiter(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee18() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context18.next = 2;
                      break;
                    }

                    return _context18.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context18.next = 5;
                    return provider.provideImplementation(params, token);

                  case 5:
                    result = _context18.sent;
                    return _context18.abrupt("return", result && this.p2m.asDefinitionResult(result));

                  case 7:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      };
    }
  }, {
    key: "registerTypeDefinitionProvider",
    value: function registerTypeDefinitionProvider(selector, provider) {
      var typeDefinitionProvider = this.createTypeDefinitionProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator16 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var language = _step16.value;
          providers.push(monaco.languages.registerTypeDefinitionProvider(language, typeDefinitionProvider));
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      return providers;
    }
  }, {
    key: "createTypeDefinitionProvider",
    value: function createTypeDefinitionProvider(selector, provider) {
      var _this16 = this;

      return {
        provideTypeDefinition: function provideTypeDefinition(model, position, token) {
          return __awaiter(_this16, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee19() {
            var params, result;
            return _regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context19.next = 2;
                      break;
                    }

                    return _context19.abrupt("return", undefined);

                  case 2:
                    params = this.m2p.asTextDocumentPositionParams(model, position);
                    _context19.next = 5;
                    return provider.provideTypeDefinition(params, token);

                  case 5:
                    result = _context19.sent;
                    return _context19.abrupt("return", result && this.p2m.asDefinitionResult(result));

                  case 7:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      };
    }
  }, {
    key: "registerColorProvider",
    value: function registerColorProvider(selector, provider) {
      var documentColorProvider = this.createDocumentColorProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator17 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var language = _step17.value;
          providers.push(monaco.languages.registerColorProvider(language, documentColorProvider));
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      return providers;
    }
  }, {
    key: "createDocumentColorProvider",
    value: function createDocumentColorProvider(selector, provider) {
      var _this17 = this;

      return {
        provideDocumentColors: function provideDocumentColors(model, token) {
          return __awaiter(_this17, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee20() {
            var textDocument, result;
            return _regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context20.next = 2;
                      break;
                    }

                    return _context20.abrupt("return", undefined);

                  case 2:
                    textDocument = this.m2p.asTextDocumentIdentifier(model);
                    _context20.next = 5;
                    return provider.provideDocumentColors({
                      textDocument: textDocument
                    }, token);

                  case 5:
                    result = _context20.sent;
                    return _context20.abrupt("return", result && this.p2m.asColorInformations(result));

                  case 7:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        },
        provideColorPresentations: function provideColorPresentations(model, info, token) {
          return __awaiter(_this17, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee21() {
            var textDocument, range, result;
            return _regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context21.next = 2;
                      break;
                    }

                    return _context21.abrupt("return", undefined);

                  case 2:
                    textDocument = this.m2p.asTextDocumentIdentifier(model);
                    range = this.m2p.asRange(info.range);
                    _context21.next = 6;
                    return provider.provideColorPresentations({
                      textDocument: textDocument,
                      color: info.color,
                      range: range
                    }, token);

                  case 6:
                    result = _context21.sent;
                    return _context21.abrupt("return", result && this.p2m.asColorPresentations(result));

                  case 8:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      };
    }
  }, {
    key: "registerFoldingRangeProvider",
    value: function registerFoldingRangeProvider(selector, provider) {
      var foldingRangeProvider = this.createFoldingRangeProvider(selector, provider);
      var providers = new disposable_1.DisposableCollection();

      var _iterator18 = _createForOfIteratorHelper(this.matchLanguage(selector)),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var language = _step18.value;
          providers.push(monaco.languages.registerFoldingRangeProvider(language, foldingRangeProvider));
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      return providers;
    }
  }, {
    key: "createFoldingRangeProvider",
    value: function createFoldingRangeProvider(selector, provider) {
      var _this18 = this;

      return {
        provideFoldingRanges: function provideFoldingRanges(model, context, token) {
          return __awaiter(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee22() {
            var textDocument, result;
            return _regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    if (this.matchModel(selector, MonacoModelIdentifier.fromModel(model))) {
                      _context22.next = 2;
                      break;
                    }

                    return _context22.abrupt("return", undefined);

                  case 2:
                    textDocument = this.m2p.asTextDocumentIdentifier(model);
                    _context22.next = 5;
                    return provider.provideFoldingRanges({
                      textDocument: textDocument
                    }, token);

                  case 5:
                    result = _context22.sent;
                    return _context22.abrupt("return", result && this.p2m.asFoldingRanges(result));

                  case 7:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      };
    }
  }, {
    key: "matchModel",
    value: function matchModel(selector, model) {
      var _this19 = this;

      if (Array.isArray(selector)) {
        return selector.some(function (filter) {
          return _this19.matchModel(filter, model);
        });
      }

      if (services_1.DocumentFilter.is(selector)) {
        if (!!selector.language && selector.language !== model.languageId) {
          return false;
        }

        if (!!selector.scheme && selector.scheme !== model.uri.scheme) {
          return false;
        }

        if (!!selector.pattern && !testGlob(selector.pattern, model.uri.path)) {
          return false;
        }

        return true;
      }

      return selector === model.languageId;
    }
  }, {
    key: "matchLanguage",
    value: function matchLanguage(selector) {
      var languages = new Set();

      if (Array.isArray(selector)) {
        var _iterator19 = _createForOfIteratorHelper(selector),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var filter = _step19.value;
            languages.add(this.matchLanguageByFilter(filter));
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      } else {
        languages.add(this.matchLanguageByFilter(selector));
      }

      return languages;
    }
  }, {
    key: "matchLanguageByFilter",
    value: function matchLanguageByFilter(selector) {
      if (services_1.DocumentFilter.is(selector)) {
        if (!selector.language) {
          return '*';
        }

        return selector.language;
      }

      return selector;
    }
  }]);

  return MonacoLanguages;
}();

exports.MonacoLanguages = MonacoLanguages;

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/monaco-services.js":
/*!**************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/monaco-services.js ***!
  \**************************************************************************************************************************************/
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

var monaco_converter_1 = __webpack_require__(/*! ./monaco-converter */ "../../node_modules/monaco-languageclient/lib/monaco-converter.js");

var monaco_commands_1 = __webpack_require__(/*! ./monaco-commands */ "../../node_modules/monaco-languageclient/lib/monaco-commands.js");

var monaco_languages_1 = __webpack_require__(/*! ./monaco-languages */ "../../node_modules/monaco-languageclient/lib/monaco-languages.js");

var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "../../node_modules/monaco-languageclient/lib/monaco-workspace.js");

var console_window_1 = __webpack_require__(/*! ./console-window */ "../../node_modules/monaco-languageclient/lib/console-window.js");

var services_1 = __webpack_require__(/*! ./services */ "../../node_modules/monaco-languageclient/lib/services.js");

var MonacoServices;

(function (MonacoServices) {
  function create(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var m2p = new monaco_converter_1.MonacoToProtocolConverter();
    var p2m = new monaco_converter_1.ProtocolToMonacoConverter();
    return {
      commands: new monaco_commands_1.MonacoCommands(editor),
      languages: new monaco_languages_1.MonacoLanguages(p2m, m2p),
      workspace: new monaco_workspace_1.MonacoWorkspace(p2m, m2p, options.rootUri),
      window: new console_window_1.ConsoleWindow()
    };
  }

  MonacoServices.create = create;

  function install(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var services = create(editor, options);
    services_1.Services.install(services);
    return services;
  }

  MonacoServices.install = install;

  function get() {
    return services_1.Services.get();
  }

  MonacoServices.get = get;
})(MonacoServices = exports.MonacoServices || (exports.MonacoServices = {}));

/***/ }),

/***/ "../../node_modules/monaco-languageclient/lib/monaco-workspace.js":
/*!***************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/monaco-languageclient/lib/monaco-workspace.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var services_1 = __webpack_require__(/*! ./services */ "../../node_modules/monaco-languageclient/lib/services.js");

var MonacoWorkspace = /*#__PURE__*/function () {
  function MonacoWorkspace(p2m, m2p) {
    var _this = this;

    var _rootUri = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, MonacoWorkspace);

    this.p2m = p2m;
    this.m2p = m2p;
    this._rootUri = _rootUri;
    this.documents = new Map();
    this.onDidOpenTextDocumentEmitter = new services_1.Emitter();
    this.onDidCloseTextDocumentEmitter = new services_1.Emitter();
    this.onDidChangeTextDocumentEmitter = new services_1.Emitter();

    var _iterator = _createForOfIteratorHelper(monaco.editor.getModels()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var model = _step.value;
        this.addModel(model);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    monaco.editor.onDidCreateModel(function (model) {
      return _this.addModel(model);
    });
    monaco.editor.onWillDisposeModel(function (model) {
      return _this.removeModel(model);
    });
  }

  _createClass(MonacoWorkspace, [{
    key: "removeModel",
    value: function removeModel(model) {
      var uri = model.uri.toString();
      var document = this.documents.get(uri);

      if (document) {
        this.documents["delete"](uri);
        this.onDidCloseTextDocumentEmitter.fire(document);
      }
    }
  }, {
    key: "addModel",
    value: function addModel(model) {
      var _this2 = this;

      var uri = model.uri.toString();
      var document = this.setModel(uri, model);
      this.onDidOpenTextDocumentEmitter.fire(document);
      model.onDidChangeContent(function (event) {
        return _this2.onDidChangeContent(uri, model, event);
      });
    }
  }, {
    key: "onDidChangeContent",
    value: function onDidChangeContent(uri, model, event) {
      var textDocument = this.setModel(uri, model);
      var contentChanges = [];

      var _iterator2 = _createForOfIteratorHelper(event.changes),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var change = _step2.value;
          var range = this.m2p.asRange(change.range);
          var rangeLength = change.rangeLength;
          var text = change.text;
          contentChanges.push({
            range: range,
            rangeLength: rangeLength,
            text: text
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.onDidChangeTextDocumentEmitter.fire({
        textDocument: textDocument,
        contentChanges: contentChanges
      });
    }
  }, {
    key: "setModel",
    value: function setModel(uri, model) {
      var document = services_1.TextDocument.create(uri, model.getModeId(), model.getVersionId(), model.getValue());
      this.documents.set(uri, document);
      return document;
    }
  }, {
    key: "applyEdit",
    value: function applyEdit(workspaceEdit) {
      var edit = this.p2m.asWorkspaceEdit(workspaceEdit); // Collect all referenced models

      var models = edit.edits ? edit.edits.reduce(function (acc, currentEdit) {
        var textEdit = currentEdit;
        acc[textEdit.resource.toString()] = monaco.editor.getModel(textEdit.resource);
        return acc;
      }, {}) : {}; // If any of the models do not exist, refuse to apply the edit.

      if (!Object.keys(models).map(function (uri) {
        return models[uri];
      }).every(function (model) {
        return !!model;
      })) {
        return Promise.resolve(false);
      } // Group edits by resource so we can batch them when applying


      var editsByResource = edit.edits ? edit.edits.reduce(function (acc, currentEdit) {
        var _acc$uri;

        var textEdit = currentEdit;
        var uri = textEdit.resource.toString();

        if (!(uri in acc)) {
          acc[uri] = [];
        }

        var operations = textEdit.edits.map(function (edit) {
          return {
            range: monaco.Range.lift(edit.range),
            text: edit.text
          };
        });

        (_acc$uri = acc[uri]).push.apply(_acc$uri, _toConsumableArray(operations));

        return acc;
      }, {}) : {}; // Apply edits for each resource

      Object.keys(editsByResource).forEach(function (uri) {
        models[uri].pushEditOperations([], // Do not try and preserve editor selections.
        editsByResource[uri].map(function (resourceEdit) {
          return {
            identifier: {
              major: 1,
              minor: 0
            },
            range: resourceEdit.range,
            text: resourceEdit.text,
            forceMoveMarkers: true
          };
        }), function () {
          return [];
        });
      });
      return Promise.resolve(true);
    }
  }, {
    key: "rootUri",
    get: function get() {
      return this._rootUri;
    }
  }, {
    key: "textDocuments",
    get: function get() {
      return Array.from(this.documents.values());
    }
  }, {
    key: "onDidOpenTextDocument",
    get: function get() {
      return this.onDidOpenTextDocumentEmitter.event;
    }
  }, {
    key: "onDidCloseTextDocument",
    get: function get() {
      return this.onDidCloseTextDocumentEmitter.event;
    }
  }, {
    key: "onDidChangeTextDocument",
    get: function get() {
      return this.onDidChangeTextDocumentEmitter.event;
    }
  }]);

  return MonacoWorkspace;
}();

exports.MonacoWorkspace = MonacoWorkspace;

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!******************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

/* harmony default export */ __webpack_exports__["default"] = (bytesToUuid);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/index.js":
/*!************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "../../node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "../../node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "../../node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "../../node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/md5.js":
/*!**********************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/md5.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes == 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Array(msg.length);

    for (var i = 0; i < msg.length; i++) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var i;
  var x;
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';
  var hex;

  for (i = 0; i < length32; i += 8) {
    x = input[i >> 5] >>> i % 32 & 0xff;
    hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;
  var i;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (i = 0; i < x.length; i += 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;

  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }

  var length8 = input.length * 8;

  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/rng.js":
/*!**********************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/rng.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/sha1.js":
/*!***********************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/sha1.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes == 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Array(msg.length);

    for (var i = 0; i < msg.length; i++) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var i = 0; i < N; i++) {
    M[i] = new Array(16);

    for (var j = 0; j < 16; j++) {
      M[i][j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var i = 0; i < N; i++) {
    var W = new Array(80);

    for (var t = 0; t < 16; t++) {
      W[t] = M[i][t];
    }

    for (var t = 16; t < 80; t++) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var t = 0; t < 80; t++) {
      var s = Math.floor(t / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v1.js":
/*!*********************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/v1.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../../node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "../../node_modules/uuid/dist/esm-browser/bytesToUuid.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v3.js":
/*!*********************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/v3.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../../node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "../../node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v35.js":
/*!**********************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/v35.js ***!
  \**********************************************************************************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ "../../node_modules/uuid/dist/esm-browser/bytesToUuid.js");


function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = new Array(str.length);

  for (var i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  var generateUUID = function generateUUID(value, namespace, buf, offset) {
    var off = buf && offset || 0;
    if (typeof value == 'string') value = stringToBytes(value);
    if (typeof namespace == 'string') namespace = uuidToBytes(namespace);
    if (!Array.isArray(value)) throw TypeError('value must be an array of bytes');
    if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an Array of 16 byte values'); // Per 4.3

    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      for (var idx = 0; idx < 16; ++idx) {
        buf[off + idx] = bytes[idx];
      }
    }

    return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  }; // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name;
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v4.js":
/*!*********************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/v4.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../../node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "../../node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "../../node_modules/uuid/dist/esm-browser/v5.js":
/*!*********************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/uuid/dist/esm-browser/v5.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../../node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "../../node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/client.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/client.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _get = __webpack_require__(/*! @babel/runtime/helpers/get */ "../../node_modules/@babel/runtime/helpers/get.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var c2p = __webpack_require__(/*! ./codeConverter */ "../../node_modules/vscode-languageclient/lib/codeConverter.js");

var p2c = __webpack_require__(/*! ./protocolConverter */ "../../node_modules/vscode-languageclient/lib/protocolConverter.js");

var Is = __webpack_require__(/*! ./utils/is */ "../../node_modules/vscode-languageclient/lib/utils/is.js");

var async_1 = __webpack_require__(/*! ./utils/async */ "../../node_modules/vscode-languageclient/lib/utils/async.js");

var UUID = __webpack_require__(/*! ./utils/uuid */ "../../node_modules/vscode-languageclient/lib/utils/uuid.js");

var progressPart_1 = __webpack_require__(/*! ./progressPart */ "../../node_modules/vscode-languageclient/lib/progressPart.js");

__export(__webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js"));

var ConsoleLogger = /*#__PURE__*/function () {
  function ConsoleLogger() {
    _classCallCheck(this, ConsoleLogger);
  }

  _createClass(ConsoleLogger, [{
    key: "error",
    value: function error(message) {
      console.error(message);
    }
  }, {
    key: "warn",
    value: function warn(message) {
      console.warn(message);
    }
  }, {
    key: "info",
    value: function info(message) {
      console.info(message);
    }
  }, {
    key: "log",
    value: function log(message) {
      console.log(message);
    }
  }]);

  return ConsoleLogger;
}();

function _createConnection(input, output, errorHandler, closeHandler) {
  var logger = new ConsoleLogger();
  var connection = vscode_languageserver_protocol_1.createProtocolConnection(input, output, logger);
  connection.onError(function (data) {
    errorHandler(data[0], data[1], data[2]);
  });
  connection.onClose(closeHandler);
  var result = {
    listen: function listen() {
      return connection.listen();
    },
    sendRequest: function sendRequest(type) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return connection.sendRequest.apply(connection, [Is.string(type) ? type : type.method].concat(params));
    },
    onRequest: function onRequest(type, handler) {
      return connection.onRequest(Is.string(type) ? type : type.method, handler);
    },
    sendNotification: function sendNotification(type, params) {
      return connection.sendNotification(Is.string(type) ? type : type.method, params);
    },
    onNotification: function onNotification(type, handler) {
      return connection.onNotification(Is.string(type) ? type : type.method, handler);
    },
    onProgress: connection.onProgress,
    sendProgress: connection.sendProgress,
    trace: function trace(value, tracer, sendNotificationOrTraceOptions) {
      var defaultTraceOptions = {
        sendNotification: false,
        traceFormat: vscode_languageserver_protocol_1.TraceFormat.Text
      };

      if (sendNotificationOrTraceOptions === void 0) {
        connection.trace(value, tracer, defaultTraceOptions);
      } else if (Is["boolean"](sendNotificationOrTraceOptions)) {
        connection.trace(value, tracer, sendNotificationOrTraceOptions);
      } else {
        connection.trace(value, tracer, sendNotificationOrTraceOptions);
      }
    },
    initialize: function initialize(params) {
      return connection.sendRequest(vscode_languageserver_protocol_1.InitializeRequest.type, params);
    },
    shutdown: function shutdown() {
      return connection.sendRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, undefined);
    },
    exit: function exit() {
      return connection.sendNotification(vscode_languageserver_protocol_1.ExitNotification.type);
    },
    onLogMessage: function onLogMessage(handler) {
      return connection.onNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, handler);
    },
    onShowMessage: function onShowMessage(handler) {
      return connection.onNotification(vscode_languageserver_protocol_1.ShowMessageNotification.type, handler);
    },
    onTelemetry: function onTelemetry(handler) {
      return connection.onNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, handler);
    },
    didChangeConfiguration: function didChangeConfiguration(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, params);
    },
    didChangeWatchedFiles: function didChangeWatchedFiles(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, params);
    },
    didOpenTextDocument: function didOpenTextDocument(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, params);
    },
    didChangeTextDocument: function didChangeTextDocument(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
    },
    didCloseTextDocument: function didCloseTextDocument(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, params);
    },
    didSaveTextDocument: function didSaveTextDocument(params) {
      return connection.sendNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, params);
    },
    onDiagnostics: function onDiagnostics(handler) {
      return connection.onNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, handler);
    },
    dispose: function dispose() {
      return connection.dispose();
    }
  };
  return result;
}
/**
 * An action to be performed when the connection is producing errors.
 */


var ErrorAction;

(function (ErrorAction) {
  /**
   * Continue running the server.
   */
  ErrorAction[ErrorAction["Continue"] = 1] = "Continue";
  /**
   * Shutdown the server.
   */

  ErrorAction[ErrorAction["Shutdown"] = 2] = "Shutdown";
})(ErrorAction = exports.ErrorAction || (exports.ErrorAction = {}));
/**
 * An action to be performed when the connection to a server got closed.
 */


var CloseAction;

(function (CloseAction) {
  /**
   * Don't restart the server. The connection stays closed.
   */
  CloseAction[CloseAction["DoNotRestart"] = 1] = "DoNotRestart";
  /**
   * Restart the server.
   */

  CloseAction[CloseAction["Restart"] = 2] = "Restart";
})(CloseAction = exports.CloseAction || (exports.CloseAction = {}));

var DefaultErrorHandler = /*#__PURE__*/function () {
  function DefaultErrorHandler(name) {
    _classCallCheck(this, DefaultErrorHandler);

    this.name = name;
    this.restarts = [];
  }

  _createClass(DefaultErrorHandler, [{
    key: "error",
    value: function error(_error, _message, count) {
      if (count && count <= 3) {
        return ErrorAction.Continue;
      }

      return ErrorAction.Shutdown;
    }
  }, {
    key: "closed",
    value: function closed() {
      this.restarts.push(Date.now());

      if (this.restarts.length < 5) {
        return CloseAction.Restart;
      } else {
        var diff = this.restarts[this.restarts.length - 1] - this.restarts[0];

        if (diff <= 3 * 60 * 1000) {
          vscode_1.window.showErrorMessage("The ".concat(this.name, " server crashed 5 times in the last 3 minutes. The server will not be restarted."));
          return CloseAction.DoNotRestart;
        } else {
          this.restarts.shift();
          return CloseAction.Restart;
        }
      }
    }
  }]);

  return DefaultErrorHandler;
}();

var RevealOutputChannelOn;

(function (RevealOutputChannelOn) {
  RevealOutputChannelOn[RevealOutputChannelOn["Info"] = 1] = "Info";
  RevealOutputChannelOn[RevealOutputChannelOn["Warn"] = 2] = "Warn";
  RevealOutputChannelOn[RevealOutputChannelOn["Error"] = 3] = "Error";
  RevealOutputChannelOn[RevealOutputChannelOn["Never"] = 4] = "Never";
})(RevealOutputChannelOn = exports.RevealOutputChannelOn || (exports.RevealOutputChannelOn = {}));

var State;

(function (State) {
  State[State["Stopped"] = 1] = "Stopped";
  State[State["Starting"] = 3] = "Starting";
  State[State["Running"] = 2] = "Running";
})(State = exports.State || (exports.State = {}));

var ClientState;

(function (ClientState) {
  ClientState[ClientState["Initial"] = 0] = "Initial";
  ClientState[ClientState["Starting"] = 1] = "Starting";
  ClientState[ClientState["StartFailed"] = 2] = "StartFailed";
  ClientState[ClientState["Running"] = 3] = "Running";
  ClientState[ClientState["Stopping"] = 4] = "Stopping";
  ClientState[ClientState["Stopped"] = 5] = "Stopped";
})(ClientState || (ClientState = {}));

var SupportedSymbolKinds = [vscode_languageserver_protocol_1.SymbolKind.File, vscode_languageserver_protocol_1.SymbolKind.Module, vscode_languageserver_protocol_1.SymbolKind.Namespace, vscode_languageserver_protocol_1.SymbolKind.Package, vscode_languageserver_protocol_1.SymbolKind.Class, vscode_languageserver_protocol_1.SymbolKind.Method, vscode_languageserver_protocol_1.SymbolKind.Property, vscode_languageserver_protocol_1.SymbolKind.Field, vscode_languageserver_protocol_1.SymbolKind.Constructor, vscode_languageserver_protocol_1.SymbolKind.Enum, vscode_languageserver_protocol_1.SymbolKind.Interface, vscode_languageserver_protocol_1.SymbolKind.Function, vscode_languageserver_protocol_1.SymbolKind.Variable, vscode_languageserver_protocol_1.SymbolKind.Constant, vscode_languageserver_protocol_1.SymbolKind.String, vscode_languageserver_protocol_1.SymbolKind.Number, vscode_languageserver_protocol_1.SymbolKind.Boolean, vscode_languageserver_protocol_1.SymbolKind.Array, vscode_languageserver_protocol_1.SymbolKind.Object, vscode_languageserver_protocol_1.SymbolKind.Key, vscode_languageserver_protocol_1.SymbolKind.Null, vscode_languageserver_protocol_1.SymbolKind.EnumMember, vscode_languageserver_protocol_1.SymbolKind.Struct, vscode_languageserver_protocol_1.SymbolKind.Event, vscode_languageserver_protocol_1.SymbolKind.Operator, vscode_languageserver_protocol_1.SymbolKind.TypeParameter];
var SupportedCompletionItemKinds = [vscode_languageserver_protocol_1.CompletionItemKind.Text, vscode_languageserver_protocol_1.CompletionItemKind.Method, vscode_languageserver_protocol_1.CompletionItemKind.Function, vscode_languageserver_protocol_1.CompletionItemKind.Constructor, vscode_languageserver_protocol_1.CompletionItemKind.Field, vscode_languageserver_protocol_1.CompletionItemKind.Variable, vscode_languageserver_protocol_1.CompletionItemKind.Class, vscode_languageserver_protocol_1.CompletionItemKind.Interface, vscode_languageserver_protocol_1.CompletionItemKind.Module, vscode_languageserver_protocol_1.CompletionItemKind.Property, vscode_languageserver_protocol_1.CompletionItemKind.Unit, vscode_languageserver_protocol_1.CompletionItemKind.Value, vscode_languageserver_protocol_1.CompletionItemKind.Enum, vscode_languageserver_protocol_1.CompletionItemKind.Keyword, vscode_languageserver_protocol_1.CompletionItemKind.Snippet, vscode_languageserver_protocol_1.CompletionItemKind.Color, vscode_languageserver_protocol_1.CompletionItemKind.File, vscode_languageserver_protocol_1.CompletionItemKind.Reference, vscode_languageserver_protocol_1.CompletionItemKind.Folder, vscode_languageserver_protocol_1.CompletionItemKind.EnumMember, vscode_languageserver_protocol_1.CompletionItemKind.Constant, vscode_languageserver_protocol_1.CompletionItemKind.Struct, vscode_languageserver_protocol_1.CompletionItemKind.Event, vscode_languageserver_protocol_1.CompletionItemKind.Operator, vscode_languageserver_protocol_1.CompletionItemKind.TypeParameter];

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var DynamicFeature;

(function (DynamicFeature) {
  function is(value) {
    var candidate = value;
    return candidate && Is.func(candidate.register) && Is.func(candidate.unregister) && Is.func(candidate.dispose) && candidate.messages !== void 0;
  }

  DynamicFeature.is = is;
})(DynamicFeature || (DynamicFeature = {}));

var DocumentNotifiactions = /*#__PURE__*/function () {
  function DocumentNotifiactions(_client, _event, _type, _middleware, _createParams, _selectorFilter) {
    _classCallCheck(this, DocumentNotifiactions);

    this._client = _client;
    this._event = _event;
    this._type = _type;
    this._middleware = _middleware;
    this._createParams = _createParams;
    this._selectorFilter = _selectorFilter;
    this._selectors = new Map();
  }

  _createClass(DocumentNotifiactions, [{
    key: "register",
    value: function register(_message, data) {
      if (!data.registerOptions.documentSelector) {
        return;
      }

      if (!this._listener) {
        this._listener = this._event(this.callback, this);
      }

      this._selectors.set(data.id, data.registerOptions.documentSelector);
    }
  }, {
    key: "callback",
    value: function callback(data) {
      var _this = this;

      if (!this._selectorFilter || this._selectorFilter(this._selectors.values(), data)) {
        if (this._middleware) {
          this._middleware(data, function (data) {
            return _this._client.sendNotification(_this._type, _this._createParams(data));
          });
        } else {
          this._client.sendNotification(this._type, this._createParams(data));
        }

        this.notificationSent(data);
      }
    }
  }, {
    key: "notificationSent",
    value: function notificationSent(_data) {}
  }, {
    key: "unregister",
    value: function unregister(id) {
      this._selectors["delete"](id);

      if (this._selectors.size === 0 && this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._selectors.clear();

      if (this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "getProvider",
    value: function getProvider(document) {
      var _this2 = this;

      var _iterator = _createForOfIteratorHelper(this._selectors.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var selector = _step.value;

          if (vscode_1.languages.match(selector, document)) {
            return {
              send: function send(data) {
                _this2.callback(data);
              }
            };
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      throw new Error("No provider available for the given text document");
    }
  }], [{
    key: "textDocumentFilter",
    value: function textDocumentFilter(selectors, textDocument) {
      var _iterator2 = _createForOfIteratorHelper(selectors),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var selector = _step2.value;

          if (vscode_1.languages.match(selector, textDocument)) {
            return true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    }
  }]);

  return DocumentNotifiactions;
}();

var DidOpenTextDocumentFeature = /*#__PURE__*/function (_DocumentNotifiaction) {
  _inherits(DidOpenTextDocumentFeature, _DocumentNotifiaction);

  var _super = _createSuper(DidOpenTextDocumentFeature);

  function DidOpenTextDocumentFeature(client, _syncedDocuments) {
    var _this3;

    _classCallCheck(this, DidOpenTextDocumentFeature);

    _this3 = _super.call(this, client, vscode_1.workspace.onDidOpenTextDocument, vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, client.clientOptions.middleware.didOpen, function (textDocument) {
      return client.code2ProtocolConverter.asOpenTextDocumentParams(textDocument);
    }, DocumentNotifiactions.textDocumentFilter);
    _this3._syncedDocuments = _syncedDocuments;
    return _this3;
  }

  _createClass(DidOpenTextDocumentFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'textDocument'), 'synchronization').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.openClose) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            documentSelector: documentSelector
          }
        });
      }
    }
  }, {
    key: "register",
    value: function register(message, data) {
      var _this4 = this;

      _get(_getPrototypeOf(DidOpenTextDocumentFeature.prototype), "register", this).call(this, message, data);

      if (!data.registerOptions.documentSelector) {
        return;
      }

      var documentSelector = data.registerOptions.documentSelector;
      vscode_1.workspace.textDocuments.forEach(function (textDocument) {
        var uri = textDocument.uri.toString();

        if (_this4._syncedDocuments.has(uri)) {
          return;
        }

        if (vscode_1.languages.match(documentSelector, textDocument)) {
          var middleware = _this4._client.clientOptions.middleware;

          var didOpen = function didOpen(textDocument) {
            _this4._client.sendNotification(_this4._type, _this4._createParams(textDocument));
          };

          if (middleware.didOpen) {
            middleware.didOpen(textDocument, didOpen);
          } else {
            didOpen(textDocument);
          }

          _this4._syncedDocuments.set(uri, textDocument);
        }
      });
    }
  }, {
    key: "notificationSent",
    value: function notificationSent(textDocument) {
      _get(_getPrototypeOf(DidOpenTextDocumentFeature.prototype), "notificationSent", this).call(this, textDocument);

      this._syncedDocuments.set(textDocument.uri.toString(), textDocument);
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type;
    }
  }]);

  return DidOpenTextDocumentFeature;
}(DocumentNotifiactions);

var DidCloseTextDocumentFeature = /*#__PURE__*/function (_DocumentNotifiaction2) {
  _inherits(DidCloseTextDocumentFeature, _DocumentNotifiaction2);

  var _super2 = _createSuper(DidCloseTextDocumentFeature);

  function DidCloseTextDocumentFeature(client, _syncedDocuments) {
    var _this5;

    _classCallCheck(this, DidCloseTextDocumentFeature);

    _this5 = _super2.call(this, client, vscode_1.workspace.onDidCloseTextDocument, vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, client.clientOptions.middleware.didClose, function (textDocument) {
      return client.code2ProtocolConverter.asCloseTextDocumentParams(textDocument);
    }, DocumentNotifiactions.textDocumentFilter);
    _this5._syncedDocuments = _syncedDocuments;
    return _this5;
  }

  _createClass(DidCloseTextDocumentFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'textDocument'), 'synchronization').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.openClose) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            documentSelector: documentSelector
          }
        });
      }
    }
  }, {
    key: "notificationSent",
    value: function notificationSent(textDocument) {
      _get(_getPrototypeOf(DidCloseTextDocumentFeature.prototype), "notificationSent", this).call(this, textDocument);

      this._syncedDocuments["delete"](textDocument.uri.toString());
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var _this6 = this;

      var selector = this._selectors.get(id); // The super call removed the selector from the map
      // of selectors.


      _get(_getPrototypeOf(DidCloseTextDocumentFeature.prototype), "unregister", this).call(this, id);

      var selectors = this._selectors.values();

      this._syncedDocuments.forEach(function (textDocument) {
        if (vscode_1.languages.match(selector, textDocument) && !_this6._selectorFilter(selectors, textDocument)) {
          var middleware = _this6._client.clientOptions.middleware;

          var didClose = function didClose(textDocument) {
            _this6._client.sendNotification(_this6._type, _this6._createParams(textDocument));
          };

          _this6._syncedDocuments["delete"](textDocument.uri.toString());

          if (middleware.didClose) {
            middleware.didClose(textDocument, didClose);
          } else {
            didClose(textDocument);
          }
        }
      });
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type;
    }
  }]);

  return DidCloseTextDocumentFeature;
}(DocumentNotifiactions);

var DidChangeTextDocumentFeature = /*#__PURE__*/function () {
  function DidChangeTextDocumentFeature(_client) {
    _classCallCheck(this, DidChangeTextDocumentFeature);

    this._client = _client;
    this._changeData = new Map();
    this._forcingDelivery = false;
  }

  _createClass(DidChangeTextDocumentFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'textDocument'), 'synchronization').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.change !== void 0 && textDocumentSyncOptions.change !== vscode_languageserver_protocol_1.TextDocumentSyncKind.None) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: Object.assign({}, {
            documentSelector: documentSelector
          }, {
            syncKind: textDocumentSyncOptions.change
          })
        });
      }
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      if (!data.registerOptions.documentSelector) {
        return;
      }

      if (!this._listener) {
        this._listener = vscode_1.workspace.onDidChangeTextDocument(this.callback, this);
      }

      this._changeData.set(data.id, {
        documentSelector: data.registerOptions.documentSelector,
        syncKind: data.registerOptions.syncKind
      });
    }
  }, {
    key: "callback",
    value: function callback(event) {
      var _this7 = this;

      // Text document changes are send for dirty changes as well. We don't
      // have dirty / undirty events in the LSP so we ignore content changes
      // with length zero.
      if (event.contentChanges.length === 0) {
        return;
      }

      var _iterator3 = _createForOfIteratorHelper(this._changeData.values()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var changeData = _step3.value;

          if (vscode_1.languages.match(changeData.documentSelector, event.document)) {
            var middleware = this._client.clientOptions.middleware;

            if (changeData.syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental) {
              (function () {
                var params = _this7._client.code2ProtocolConverter.asChangeTextDocumentParams(event);

                if (middleware.didChange) {
                  middleware.didChange(event, function () {
                    return _this7._client.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
                  });
                } else {
                  _this7._client.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
                }
              })();
            } else if (changeData.syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Full) {
              var didChange = function didChange(event) {
                if (_this7._changeDelayer) {
                  if (_this7._changeDelayer.uri !== event.document.uri.toString()) {
                    // Use this force delivery to track boolean state. Otherwise we might call two times.
                    _this7.forceDelivery();

                    _this7._changeDelayer.uri = event.document.uri.toString();
                  }

                  _this7._changeDelayer.delayer.trigger(function () {
                    _this7._client.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, _this7._client.code2ProtocolConverter.asChangeTextDocumentParams(event.document));
                  });
                } else {
                  _this7._changeDelayer = {
                    uri: event.document.uri.toString(),
                    delayer: new async_1.Delayer(200)
                  };

                  _this7._changeDelayer.delayer.trigger(function () {
                    _this7._client.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, _this7._client.code2ProtocolConverter.asChangeTextDocumentParams(event.document));
                  }, -1);
                }
              };

              if (middleware.didChange) {
                middleware.didChange(event, didChange);
              } else {
                didChange(event);
              }
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      this._changeData["delete"](id);

      if (this._changeData.size === 0 && this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._changeDelayer = undefined;
      this._forcingDelivery = false;

      this._changeData.clear();

      if (this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "forceDelivery",
    value: function forceDelivery() {
      if (this._forcingDelivery || !this._changeDelayer) {
        return;
      }

      try {
        this._forcingDelivery = true;

        this._changeDelayer.delayer.forceDelivery();
      } finally {
        this._forcingDelivery = false;
      }
    }
  }, {
    key: "getProvider",
    value: function getProvider(document) {
      var _this8 = this;

      var _iterator4 = _createForOfIteratorHelper(this._changeData.values()),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var changeData = _step4.value;

          if (vscode_1.languages.match(changeData.documentSelector, document)) {
            return {
              send: function send(event) {
                _this8.callback(event);
              }
            };
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      throw new Error("No provider available for the given text document");
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type;
    }
  }]);

  return DidChangeTextDocumentFeature;
}();

var WillSaveFeature = /*#__PURE__*/function (_DocumentNotifiaction3) {
  _inherits(WillSaveFeature, _DocumentNotifiaction3);

  var _super3 = _createSuper(WillSaveFeature);

  function WillSaveFeature(client) {
    _classCallCheck(this, WillSaveFeature);

    return _super3.call(this, client, vscode_1.workspace.onWillSaveTextDocument, vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, client.clientOptions.middleware.willSave, function (willSaveEvent) {
      return client.code2ProtocolConverter.asWillSaveTextDocumentParams(willSaveEvent);
    }, function (selectors, willSaveEvent) {
      return DocumentNotifiactions.textDocumentFilter(selectors, willSaveEvent.document);
    });
  }

  _createClass(WillSaveFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      var value = ensure(ensure(capabilities, 'textDocument'), 'synchronization');
      value.willSave = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.willSave) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            documentSelector: documentSelector
          }
        });
      }
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type;
    }
  }]);

  return WillSaveFeature;
}(DocumentNotifiactions);

var WillSaveWaitUntilFeature = /*#__PURE__*/function () {
  function WillSaveWaitUntilFeature(_client) {
    _classCallCheck(this, WillSaveWaitUntilFeature);

    this._client = _client;
    this._selectors = new Map();
  }

  _createClass(WillSaveWaitUntilFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      var value = ensure(ensure(capabilities, 'textDocument'), 'synchronization');
      value.willSaveWaitUntil = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.willSaveWaitUntil) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            documentSelector: documentSelector
          }
        });
      }
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      if (!data.registerOptions.documentSelector) {
        return;
      }

      if (!this._listener) {
        this._listener = vscode_1.workspace.onWillSaveTextDocument(this.callback, this);
      }

      this._selectors.set(data.id, data.registerOptions.documentSelector);
    }
  }, {
    key: "callback",
    value: function callback(event) {
      var _this9 = this;

      if (DocumentNotifiactions.textDocumentFilter(this._selectors.values(), event.document)) {
        var middleware = this._client.clientOptions.middleware;

        var willSaveWaitUntil = function willSaveWaitUntil(event) {
          return _this9._client.sendRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, _this9._client.code2ProtocolConverter.asWillSaveTextDocumentParams(event)).then(function (edits) {
            var vEdits = _this9._client.protocol2CodeConverter.asTextEdits(edits);

            return vEdits === void 0 ? [] : vEdits;
          });
        };

        event.waitUntil(middleware.willSaveWaitUntil ? middleware.willSaveWaitUntil(event, willSaveWaitUntil) : willSaveWaitUntil(event));
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      this._selectors["delete"](id);

      if (this._selectors.size === 0 && this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._selectors.clear();

      if (this._listener) {
        this._listener.dispose();

        this._listener = undefined;
      }
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type;
    }
  }]);

  return WillSaveWaitUntilFeature;
}();

var DidSaveTextDocumentFeature = /*#__PURE__*/function (_DocumentNotifiaction4) {
  _inherits(DidSaveTextDocumentFeature, _DocumentNotifiaction4);

  var _super4 = _createSuper(DidSaveTextDocumentFeature);

  function DidSaveTextDocumentFeature(client) {
    var _this10;

    _classCallCheck(this, DidSaveTextDocumentFeature);

    return _this10 = _super4.call(this, client, vscode_1.workspace.onDidSaveTextDocument, vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, client.clientOptions.middleware.didSave, function (textDocument) {
      return client.code2ProtocolConverter.asSaveTextDocumentParams(textDocument, _this10._includeText);
    }, DocumentNotifiactions.textDocumentFilter);
  }

  _createClass(DidSaveTextDocumentFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'textDocument'), 'synchronization').didSave = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;

      if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.save) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: Object.assign({}, {
            documentSelector: documentSelector
          }, {
            includeText: !!textDocumentSyncOptions.save.includeText
          })
        });
      }
    }
  }, {
    key: "register",
    value: function register(method, data) {
      this._includeText = !!data.registerOptions.includeText;

      _get(_getPrototypeOf(DidSaveTextDocumentFeature.prototype), "register", this).call(this, method, data);
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type;
    }
  }]);

  return DidSaveTextDocumentFeature;
}(DocumentNotifiactions);

var FileSystemWatcherFeature = /*#__PURE__*/function () {
  function FileSystemWatcherFeature(_client, _notifyFileEvent) {
    _classCallCheck(this, FileSystemWatcherFeature);

    this._client = _client;
    this._notifyFileEvent = _notifyFileEvent;
    this._watchers = new Map();
  }

  _createClass(FileSystemWatcherFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'workspace'), 'didChangeWatchedFiles').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(_capabilities, _documentSelector) {}
  }, {
    key: "register",
    value: function register(_method, data) {
      if (!Array.isArray(data.registerOptions.watchers)) {
        return;
      }

      var disposeables = [];

      var _iterator5 = _createForOfIteratorHelper(data.registerOptions.watchers),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var watcher = _step5.value;

          if (!Is.string(watcher.globPattern)) {
            continue;
          }

          var watchCreate = true,
              watchChange = true,
              watchDelete = true;

          if (watcher.kind !== void 0 && watcher.kind !== null) {
            watchCreate = (watcher.kind & vscode_languageserver_protocol_1.WatchKind.Create) !== 0;
            watchChange = (watcher.kind & vscode_languageserver_protocol_1.WatchKind.Change) !== 0;
            watchDelete = (watcher.kind & vscode_languageserver_protocol_1.WatchKind.Delete) !== 0;
          }

          var fileSystemWatcher = vscode_1.workspace.createFileSystemWatcher(watcher.globPattern, !watchCreate, !watchChange, !watchDelete);
          this.hookListeners(fileSystemWatcher, watchCreate, watchChange, watchDelete);
          disposeables.push(fileSystemWatcher);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      this._watchers.set(data.id, disposeables);
    }
  }, {
    key: "registerRaw",
    value: function registerRaw(id, fileSystemWatchers) {
      var disposeables = [];

      var _iterator6 = _createForOfIteratorHelper(fileSystemWatchers),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var fileSystemWatcher = _step6.value;
          this.hookListeners(fileSystemWatcher, true, true, true, disposeables);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      this._watchers.set(id, disposeables);
    }
  }, {
    key: "hookListeners",
    value: function hookListeners(fileSystemWatcher, watchCreate, watchChange, watchDelete, listeners) {
      var _this11 = this;

      if (watchCreate) {
        fileSystemWatcher.onDidCreate(function (resource) {
          return _this11._notifyFileEvent({
            uri: _this11._client.code2ProtocolConverter.asUri(resource),
            type: vscode_languageserver_protocol_1.FileChangeType.Created
          });
        }, null, listeners);
      }

      if (watchChange) {
        fileSystemWatcher.onDidChange(function (resource) {
          return _this11._notifyFileEvent({
            uri: _this11._client.code2ProtocolConverter.asUri(resource),
            type: vscode_languageserver_protocol_1.FileChangeType.Changed
          });
        }, null, listeners);
      }

      if (watchDelete) {
        fileSystemWatcher.onDidDelete(function (resource) {
          return _this11._notifyFileEvent({
            uri: _this11._client.code2ProtocolConverter.asUri(resource),
            type: vscode_languageserver_protocol_1.FileChangeType.Deleted
          });
        }, null, listeners);
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var disposeables = this._watchers.get(id);

      if (disposeables) {
        var _iterator7 = _createForOfIteratorHelper(disposeables),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var disposable = _step7.value;
            disposable.dispose();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._watchers.forEach(function (disposeables) {
        var _iterator8 = _createForOfIteratorHelper(disposeables),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var disposable = _step8.value;
            disposable.dispose();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      });

      this._watchers.clear();
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type;
    }
  }]);

  return FileSystemWatcherFeature;
}();

var TextDocumentFeature = /*#__PURE__*/function () {
  function TextDocumentFeature(_client, _message) {
    _classCallCheck(this, TextDocumentFeature);

    this._client = _client;
    this._message = _message;
    this._registrations = new Map();
  }

  _createClass(TextDocumentFeature, [{
    key: "register",
    value: function register(message, data) {
      if (message.method !== this.messages.method) {
        throw new Error("Register called on wrong feature. Requested ".concat(message.method, " but reached feature ").concat(this.messages.method));
      }

      if (!data.registerOptions.documentSelector) {
        return;
      }

      var registration = this.registerLanguageProvider(data.registerOptions);

      this._registrations.set(data.id, {
        disposable: registration[0],
        data: data,
        provider: registration[1]
      });
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var registration = this._registrations.get(id);

      if (registration !== undefined) {
        registration.disposable.dispose();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._registrations.forEach(function (value) {
        value.disposable.dispose();
      });

      this._registrations.clear();
    }
  }, {
    key: "getRegistration",
    value: function getRegistration(documentSelector, capability) {
      if (!capability) {
        return [undefined, undefined];
      } else if (vscode_languageserver_protocol_1.TextDocumentRegistrationOptions.is(capability)) {
        var id = vscode_languageserver_protocol_1.StaticRegistrationOptions.hasId(capability) ? capability.id : UUID.generateUuid();
        var selector = capability.documentSelector || documentSelector;

        if (selector) {
          return [id, Object.assign({}, capability, {
            documentSelector: selector
          })];
        }
      } else if (Is["boolean"](capability) && capability === true || vscode_languageserver_protocol_1.WorkDoneProgressOptions.is(capability)) {
        if (!documentSelector) {
          return [undefined, undefined];
        }

        var options = Is["boolean"](capability) && capability === true ? {
          documentSelector: documentSelector
        } : Object.assign({}, capability, {
          documentSelector: documentSelector
        });
        return [UUID.generateUuid(), options];
      }

      return [undefined, undefined];
    }
  }, {
    key: "getRegistrationOptions",
    value: function getRegistrationOptions(documentSelector, capability) {
      if (!documentSelector || !capability) {
        return undefined;
      }

      return Is["boolean"](capability) && capability === true ? {
        documentSelector: documentSelector
      } : Object.assign({}, capability, {
        documentSelector: documentSelector
      });
    }
  }, {
    key: "getProvider",
    value: function getProvider(textDocument) {
      var _iterator9 = _createForOfIteratorHelper(this._registrations.values()),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var registration = _step9.value;
          var selector = registration.data.registerOptions.documentSelector;

          if (selector !== null && vscode_1.languages.match(selector, textDocument)) {
            return registration.provider;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      throw new Error("The feature has no registration for the provided text document ".concat(textDocument.uri.toString()));
    }
  }, {
    key: "messages",
    get: function get() {
      return this._message;
    }
  }]);

  return TextDocumentFeature;
}();

exports.TextDocumentFeature = TextDocumentFeature;

var WorkspaceFeature = /*#__PURE__*/function () {
  function WorkspaceFeature(_client, _message) {
    _classCallCheck(this, WorkspaceFeature);

    this._client = _client;
    this._message = _message;
    this._registrations = new Map();
  }

  _createClass(WorkspaceFeature, [{
    key: "register",
    value: function register(message, data) {
      if (message.method !== this.messages.method) {
        throw new Error("Register called on wron feature. Requested ".concat(message.method, " but reached feature ").concat(this.messages.method));
      }

      var registration = this.registerLanguageProvider(data.registerOptions);

      this._registrations.set(data.id, {
        disposable: registration[0],
        provider: registration[1]
      });
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var registration = this._registrations.get(id);

      if (registration !== undefined) {
        registration.disposable.dispose();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._registrations.forEach(function (registration) {
        registration.disposable.dispose();
      });

      this._registrations.clear();
    }
  }, {
    key: "getProviders",
    value: function getProviders() {
      var result = [];

      var _iterator10 = _createForOfIteratorHelper(this._registrations.values()),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var registration = _step10.value;
          result.push(registration.provider);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return result;
    }
  }, {
    key: "messages",
    get: function get() {
      return this._message;
    }
  }]);

  return WorkspaceFeature;
}();

var CompletionItemFeature = /*#__PURE__*/function (_TextDocumentFeature) {
  _inherits(CompletionItemFeature, _TextDocumentFeature);

  var _super5 = _createSuper(CompletionItemFeature);

  function CompletionItemFeature(client) {
    _classCallCheck(this, CompletionItemFeature);

    return _super5.call(this, client, vscode_languageserver_protocol_1.CompletionRequest.type);
  }

  _createClass(CompletionItemFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var completion = ensure(ensure(capabilites, 'textDocument'), 'completion');
      completion.dynamicRegistration = true;
      completion.contextSupport = true;
      completion.completionItem = {
        snippetSupport: true,
        commitCharactersSupport: true,
        documentationFormat: [vscode_languageserver_protocol_1.MarkupKind.Markdown, vscode_languageserver_protocol_1.MarkupKind.PlainText],
        deprecatedSupport: true,
        preselectSupport: true,
        tagSupport: {
          valueSet: [vscode_languageserver_protocol_1.CompletionItemTag.Deprecated]
        }
      };
      completion.completionItemKind = {
        valueSet: SupportedCompletionItemKinds
      };
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.completionProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this12 = this,
          _vscode_1$languages;

      var triggerCharacters = options.triggerCharacters || [];
      var provider = {
        provideCompletionItems: function provideCompletionItems(document, position, token, context) {
          var client = _this12._client;
          var middleware = _this12._client.clientOptions.middleware;

          var provideCompletionItems = function provideCompletionItems(document, position, context, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.CompletionRequest.type, client.code2ProtocolConverter.asCompletionParams(document, position, context), token).then(client.protocol2CodeConverter.asCompletionResult, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.CompletionRequest.type, error);
              return Promise.resolve([]);
            });
          };

          return middleware.provideCompletionItem ? middleware.provideCompletionItem(document, position, context, token, provideCompletionItems) : provideCompletionItems(document, position, context, token);
        },
        resolveCompletionItem: options.resolveProvider ? function (item, token) {
          var client = _this12._client;
          var middleware = _this12._client.clientOptions.middleware;

          var resolveCompletionItem = function resolveCompletionItem(item, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, client.code2ProtocolConverter.asCompletionItem(item), token).then(client.protocol2CodeConverter.asCompletionItem, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, error);
              return Promise.resolve(item);
            });
          };

          return middleware.resolveCompletionItem ? middleware.resolveCompletionItem(item, token, resolveCompletionItem) : resolveCompletionItem(item, token);
        } : undefined
      };
      return [(_vscode_1$languages = vscode_1.languages).registerCompletionItemProvider.apply(_vscode_1$languages, [options.documentSelector, provider].concat(_toConsumableArray(triggerCharacters))), provider];
    }
  }]);

  return CompletionItemFeature;
}(TextDocumentFeature);

var HoverFeature = /*#__PURE__*/function (_TextDocumentFeature2) {
  _inherits(HoverFeature, _TextDocumentFeature2);

  var _super6 = _createSuper(HoverFeature);

  function HoverFeature(client) {
    _classCallCheck(this, HoverFeature);

    return _super6.call(this, client, vscode_languageserver_protocol_1.HoverRequest.type);
  }

  _createClass(HoverFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var hoverCapability = ensure(ensure(capabilites, 'textDocument'), 'hover');
      hoverCapability.dynamicRegistration = true;
      hoverCapability.contentFormat = [vscode_languageserver_protocol_1.MarkupKind.Markdown, vscode_languageserver_protocol_1.MarkupKind.PlainText];
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.hoverProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this13 = this;

      var provider = {
        provideHover: function provideHover(document, position, token) {
          var client = _this13._client;

          var provideHover = function provideHover(document, position, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.HoverRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asHover, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.HoverRequest.type, error);
              return Promise.resolve(null);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideHover ? middleware.provideHover(document, position, token, provideHover) : provideHover(document, position, token);
        }
      };
      return [vscode_1.languages.registerHoverProvider(options.documentSelector, provider), provider];
    }
  }]);

  return HoverFeature;
}(TextDocumentFeature);

var SignatureHelpFeature = /*#__PURE__*/function (_TextDocumentFeature3) {
  _inherits(SignatureHelpFeature, _TextDocumentFeature3);

  var _super7 = _createSuper(SignatureHelpFeature);

  function SignatureHelpFeature(client) {
    _classCallCheck(this, SignatureHelpFeature);

    return _super7.call(this, client, vscode_languageserver_protocol_1.SignatureHelpRequest.type);
  }

  _createClass(SignatureHelpFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var config = ensure(ensure(capabilites, 'textDocument'), 'signatureHelp');
      config.dynamicRegistration = true;
      config.signatureInformation = {
        documentationFormat: [vscode_languageserver_protocol_1.MarkupKind.Markdown, vscode_languageserver_protocol_1.MarkupKind.PlainText]
      };
      config.signatureInformation.parameterInformation = {
        labelOffsetSupport: true
      };
      config.contextSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.signatureHelpProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this14 = this;

      var provider = {
        provideSignatureHelp: function provideSignatureHelp(document, position, token, context) {
          var client = _this14._client;

          var providerSignatureHelp = function providerSignatureHelp(document, position, context, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, client.code2ProtocolConverter.asSignatureHelpParams(document, position, context), token).then(client.protocol2CodeConverter.asSignatureHelp, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, error);
              return Promise.resolve(null);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideSignatureHelp ? middleware.provideSignatureHelp(document, position, context, token, providerSignatureHelp) : providerSignatureHelp(document, position, context, token);
        }
      };
      var disposable;

      if (options.retriggerCharacters === undefined) {
        var _vscode_1$languages2;

        var triggerCharacters = options.triggerCharacters || [];
        disposable = (_vscode_1$languages2 = vscode_1.languages).registerSignatureHelpProvider.apply(_vscode_1$languages2, [options.documentSelector, provider].concat(_toConsumableArray(triggerCharacters)));
      } else {
        var metaData = {
          triggerCharacters: options.triggerCharacters || [],
          retriggerCharacters: options.retriggerCharacters || []
        };
        disposable = vscode_1.languages.registerSignatureHelpProvider(options.documentSelector, provider, metaData);
      }

      return [disposable, provider];
    }
  }]);

  return SignatureHelpFeature;
}(TextDocumentFeature);

var DefinitionFeature = /*#__PURE__*/function (_TextDocumentFeature4) {
  _inherits(DefinitionFeature, _TextDocumentFeature4);

  var _super8 = _createSuper(DefinitionFeature);

  function DefinitionFeature(client) {
    _classCallCheck(this, DefinitionFeature);

    return _super8.call(this, client, vscode_languageserver_protocol_1.DefinitionRequest.type);
  }

  _createClass(DefinitionFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var definitionSupport = ensure(ensure(capabilites, 'textDocument'), 'definition');
      definitionSupport.dynamicRegistration = true;
      definitionSupport.linkSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.definitionProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this15 = this;

      var provider = {
        provideDefinition: function provideDefinition(document, position, token) {
          var client = _this15._client;

          var provideDefinition = function provideDefinition(document, position, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDefinitionResult, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, error);
              return Promise.resolve(null);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideDefinition ? middleware.provideDefinition(document, position, token, provideDefinition) : provideDefinition(document, position, token);
        }
      };
      return [vscode_1.languages.registerDefinitionProvider(options.documentSelector, provider), provider];
    }
  }]);

  return DefinitionFeature;
}(TextDocumentFeature);

var ReferencesFeature = /*#__PURE__*/function (_TextDocumentFeature5) {
  _inherits(ReferencesFeature, _TextDocumentFeature5);

  var _super9 = _createSuper(ReferencesFeature);

  function ReferencesFeature(client) {
    _classCallCheck(this, ReferencesFeature);

    return _super9.call(this, client, vscode_languageserver_protocol_1.ReferencesRequest.type);
  }

  _createClass(ReferencesFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'references').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.referencesProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this16 = this;

      var provider = {
        provideReferences: function provideReferences(document, position, options, token) {
          var client = _this16._client;

          var _providerReferences = function _providerReferences(document, position, options, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, client.code2ProtocolConverter.asReferenceParams(document, position, options), token).then(client.protocol2CodeConverter.asReferences, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideReferences ? middleware.provideReferences(document, position, options, token, _providerReferences) : _providerReferences(document, position, options, token);
        }
      };
      return [vscode_1.languages.registerReferenceProvider(options.documentSelector, provider), provider];
    }
  }]);

  return ReferencesFeature;
}(TextDocumentFeature);

var DocumentHighlightFeature = /*#__PURE__*/function (_TextDocumentFeature6) {
  _inherits(DocumentHighlightFeature, _TextDocumentFeature6);

  var _super10 = _createSuper(DocumentHighlightFeature);

  function DocumentHighlightFeature(client) {
    _classCallCheck(this, DocumentHighlightFeature);

    return _super10.call(this, client, vscode_languageserver_protocol_1.DocumentHighlightRequest.type);
  }

  _createClass(DocumentHighlightFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'documentHighlight').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentHighlightProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this17 = this;

      var provider = {
        provideDocumentHighlights: function provideDocumentHighlights(document, position, token) {
          var client = _this17._client;

          var _provideDocumentHighlights = function _provideDocumentHighlights(document, position, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDocumentHighlights, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideDocumentHighlights ? middleware.provideDocumentHighlights(document, position, token, _provideDocumentHighlights) : _provideDocumentHighlights(document, position, token);
        }
      };
      return [vscode_1.languages.registerDocumentHighlightProvider(options.documentSelector, provider), provider];
    }
  }]);

  return DocumentHighlightFeature;
}(TextDocumentFeature);

var DocumentSymbolFeature = /*#__PURE__*/function (_TextDocumentFeature7) {
  _inherits(DocumentSymbolFeature, _TextDocumentFeature7);

  var _super11 = _createSuper(DocumentSymbolFeature);

  function DocumentSymbolFeature(client) {
    _classCallCheck(this, DocumentSymbolFeature);

    return _super11.call(this, client, vscode_languageserver_protocol_1.DocumentSymbolRequest.type);
  }

  _createClass(DocumentSymbolFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var symbolCapabilities = ensure(ensure(capabilites, 'textDocument'), 'documentSymbol');
      symbolCapabilities.dynamicRegistration = true;
      symbolCapabilities.symbolKind = {
        valueSet: SupportedSymbolKinds
      };
      symbolCapabilities.hierarchicalDocumentSymbolSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentSymbolProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this18 = this;

      var provider = {
        provideDocumentSymbols: function provideDocumentSymbols(document, token) {
          var client = _this18._client;

          var _provideDocumentSymbols = function _provideDocumentSymbols(document, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, client.code2ProtocolConverter.asDocumentSymbolParams(document), token).then(function (data) {
              if (data === null) {
                return undefined;
              }

              if (data.length === 0) {
                return [];
              } else {
                var element = data[0];

                if (vscode_languageserver_protocol_1.DocumentSymbol.is(element)) {
                  return client.protocol2CodeConverter.asDocumentSymbols(data);
                } else {
                  return client.protocol2CodeConverter.asSymbolInformations(data);
                }
              }
            }, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideDocumentSymbols ? middleware.provideDocumentSymbols(document, token, _provideDocumentSymbols) : _provideDocumentSymbols(document, token);
        }
      };
      return [vscode_1.languages.registerDocumentSymbolProvider(options.documentSelector, provider), provider];
    }
  }]);

  return DocumentSymbolFeature;
}(TextDocumentFeature);

var WorkspaceSymbolFeature = /*#__PURE__*/function (_WorkspaceFeature) {
  _inherits(WorkspaceSymbolFeature, _WorkspaceFeature);

  var _super12 = _createSuper(WorkspaceSymbolFeature);

  function WorkspaceSymbolFeature(client) {
    _classCallCheck(this, WorkspaceSymbolFeature);

    return _super12.call(this, client, vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type);
  }

  _createClass(WorkspaceSymbolFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var symbolCapabilities = ensure(ensure(capabilites, 'workspace'), 'symbol');
      symbolCapabilities.dynamicRegistration = true;
      symbolCapabilities.symbolKind = {
        valueSet: SupportedSymbolKinds
      };
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities) {
      if (!capabilities.workspaceSymbolProvider) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: capabilities.workspaceSymbolProvider === true ? {
          workDoneProgress: false
        } : capabilities.workspaceSymbolProvider
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(_options) {
      var _this19 = this;

      var provider = {
        provideWorkspaceSymbols: function provideWorkspaceSymbols(query, token) {
          var client = _this19._client;

          var provideWorkspaceSymbols = function provideWorkspaceSymbols(query, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, {
              query: query
            }, token).then(client.protocol2CodeConverter.asSymbolInformations, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideWorkspaceSymbols ? middleware.provideWorkspaceSymbols(query, token, provideWorkspaceSymbols) : provideWorkspaceSymbols(query, token);
        }
      };
      return [vscode_1.languages.registerWorkspaceSymbolProvider(provider), provider];
    }
  }]);

  return WorkspaceSymbolFeature;
}(WorkspaceFeature);

var CodeActionFeature = /*#__PURE__*/function (_TextDocumentFeature8) {
  _inherits(CodeActionFeature, _TextDocumentFeature8);

  var _super13 = _createSuper(CodeActionFeature);

  function CodeActionFeature(client) {
    _classCallCheck(this, CodeActionFeature);

    return _super13.call(this, client, vscode_languageserver_protocol_1.CodeActionRequest.type);
  }

  _createClass(CodeActionFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var cap = ensure(ensure(capabilites, 'textDocument'), 'codeAction');
      cap.dynamicRegistration = true;
      cap.isPreferredSupport = true;
      cap.codeActionLiteralSupport = {
        codeActionKind: {
          valueSet: [vscode_languageserver_protocol_1.CodeActionKind.Empty, vscode_languageserver_protocol_1.CodeActionKind.QuickFix, vscode_languageserver_protocol_1.CodeActionKind.Refactor, vscode_languageserver_protocol_1.CodeActionKind.RefactorExtract, vscode_languageserver_protocol_1.CodeActionKind.RefactorInline, vscode_languageserver_protocol_1.CodeActionKind.RefactorRewrite, vscode_languageserver_protocol_1.CodeActionKind.Source, vscode_languageserver_protocol_1.CodeActionKind.SourceOrganizeImports]
        }
      };
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.codeActionProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this20 = this;

      var provider = {
        provideCodeActions: function provideCodeActions(document, range, context, token) {
          var client = _this20._client;

          var _provideCodeActions = function _provideCodeActions(document, range, context, token) {
            var params = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
              range: client.code2ProtocolConverter.asRange(range),
              context: client.code2ProtocolConverter.asCodeActionContext(context)
            };
            return client.sendRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, params, token).then(function (values) {
              if (values === null) {
                return undefined;
              }

              var result = [];

              var _iterator11 = _createForOfIteratorHelper(values),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var item = _step11.value;

                  if (vscode_languageserver_protocol_1.Command.is(item)) {
                    result.push(client.protocol2CodeConverter.asCommand(item));
                  } else {
                    result.push(client.protocol2CodeConverter.asCodeAction(item));
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              return result;
            }, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideCodeActions ? middleware.provideCodeActions(document, range, context, token, _provideCodeActions) : _provideCodeActions(document, range, context, token);
        }
      };
      return [vscode_1.languages.registerCodeActionsProvider(options.documentSelector, provider, options.codeActionKinds ? {
        providedCodeActionKinds: this._client.protocol2CodeConverter.asCodeActionKinds(options.codeActionKinds)
      } : undefined), provider];
    }
  }]);

  return CodeActionFeature;
}(TextDocumentFeature);

var CodeLensFeature = /*#__PURE__*/function (_TextDocumentFeature9) {
  _inherits(CodeLensFeature, _TextDocumentFeature9);

  var _super14 = _createSuper(CodeLensFeature);

  function CodeLensFeature(client) {
    _classCallCheck(this, CodeLensFeature);

    return _super14.call(this, client, vscode_languageserver_protocol_1.CodeLensRequest.type);
  }

  _createClass(CodeLensFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'codeLens').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.codeLensProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this21 = this;

      var provider = {
        provideCodeLenses: function provideCodeLenses(document, token) {
          var client = _this21._client;

          var provideCodeLenses = function provideCodeLenses(document, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, client.code2ProtocolConverter.asCodeLensParams(document), token).then(client.protocol2CodeConverter.asCodeLenses, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideCodeLenses ? middleware.provideCodeLenses(document, token, provideCodeLenses) : provideCodeLenses(document, token);
        },
        resolveCodeLens: options.resolveProvider ? function (codeLens, token) {
          var client = _this21._client;

          var resolveCodeLens = function resolveCodeLens(codeLens, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, client.code2ProtocolConverter.asCodeLens(codeLens), token).then(client.protocol2CodeConverter.asCodeLens, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, error);
              return codeLens;
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.resolveCodeLens ? middleware.resolveCodeLens(codeLens, token, resolveCodeLens) : resolveCodeLens(codeLens, token);
        } : undefined
      };
      return [vscode_1.languages.registerCodeLensProvider(options.documentSelector, provider), provider];
    }
  }]);

  return CodeLensFeature;
}(TextDocumentFeature);

var DocumentFormattingFeature = /*#__PURE__*/function (_TextDocumentFeature10) {
  _inherits(DocumentFormattingFeature, _TextDocumentFeature10);

  var _super15 = _createSuper(DocumentFormattingFeature);

  function DocumentFormattingFeature(client) {
    _classCallCheck(this, DocumentFormattingFeature);

    return _super15.call(this, client, vscode_languageserver_protocol_1.DocumentFormattingRequest.type);
  }

  _createClass(DocumentFormattingFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'formatting').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentFormattingProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this22 = this;

      var provider = {
        provideDocumentFormattingEdits: function provideDocumentFormattingEdits(document, options, token) {
          var client = _this22._client;

          var provideDocumentFormattingEdits = function provideDocumentFormattingEdits(document, options, token) {
            var params = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
              options: client.code2ProtocolConverter.asFormattingOptions(options)
            };
            return client.sendRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, params, token).then(client.protocol2CodeConverter.asTextEdits, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideDocumentFormattingEdits ? middleware.provideDocumentFormattingEdits(document, options, token, provideDocumentFormattingEdits) : provideDocumentFormattingEdits(document, options, token);
        }
      };
      return [vscode_1.languages.registerDocumentFormattingEditProvider(options.documentSelector, provider), provider];
    }
  }]);

  return DocumentFormattingFeature;
}(TextDocumentFeature);

var DocumentRangeFormattingFeature = /*#__PURE__*/function (_TextDocumentFeature11) {
  _inherits(DocumentRangeFormattingFeature, _TextDocumentFeature11);

  var _super16 = _createSuper(DocumentRangeFormattingFeature);

  function DocumentRangeFormattingFeature(client) {
    _classCallCheck(this, DocumentRangeFormattingFeature);

    return _super16.call(this, client, vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type);
  }

  _createClass(DocumentRangeFormattingFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'rangeFormatting').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentRangeFormattingProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this23 = this;

      var provider = {
        provideDocumentRangeFormattingEdits: function provideDocumentRangeFormattingEdits(document, range, options, token) {
          var client = _this23._client;

          var provideDocumentRangeFormattingEdits = function provideDocumentRangeFormattingEdits(document, range, options, token) {
            var params = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
              range: client.code2ProtocolConverter.asRange(range),
              options: client.code2ProtocolConverter.asFormattingOptions(options)
            };
            return client.sendRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, params, token).then(client.protocol2CodeConverter.asTextEdits, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideDocumentRangeFormattingEdits ? middleware.provideDocumentRangeFormattingEdits(document, range, options, token, provideDocumentRangeFormattingEdits) : provideDocumentRangeFormattingEdits(document, range, options, token);
        }
      };
      return [vscode_1.languages.registerDocumentRangeFormattingEditProvider(options.documentSelector, provider), provider];
    }
  }]);

  return DocumentRangeFormattingFeature;
}(TextDocumentFeature);

var DocumentOnTypeFormattingFeature = /*#__PURE__*/function (_TextDocumentFeature12) {
  _inherits(DocumentOnTypeFormattingFeature, _TextDocumentFeature12);

  var _super17 = _createSuper(DocumentOnTypeFormattingFeature);

  function DocumentOnTypeFormattingFeature(client) {
    _classCallCheck(this, DocumentOnTypeFormattingFeature);

    return _super17.call(this, client, vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type);
  }

  _createClass(DocumentOnTypeFormattingFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'onTypeFormatting').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentOnTypeFormattingProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this24 = this,
          _vscode_1$languages3;

      var provider = {
        provideOnTypeFormattingEdits: function provideOnTypeFormattingEdits(document, position, ch, options, token) {
          var client = _this24._client;

          var provideOnTypeFormattingEdits = function provideOnTypeFormattingEdits(document, position, ch, options, token) {
            var params = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
              position: client.code2ProtocolConverter.asPosition(position),
              ch: ch,
              options: client.code2ProtocolConverter.asFormattingOptions(options)
            };
            return client.sendRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, params, token).then(client.protocol2CodeConverter.asTextEdits, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideOnTypeFormattingEdits ? middleware.provideOnTypeFormattingEdits(document, position, ch, options, token, provideOnTypeFormattingEdits) : provideOnTypeFormattingEdits(document, position, ch, options, token);
        }
      };
      var moreTriggerCharacter = options.moreTriggerCharacter || [];
      return [(_vscode_1$languages3 = vscode_1.languages).registerOnTypeFormattingEditProvider.apply(_vscode_1$languages3, [options.documentSelector, provider, options.firstTriggerCharacter].concat(_toConsumableArray(moreTriggerCharacter))), provider];
    }
  }]);

  return DocumentOnTypeFormattingFeature;
}(TextDocumentFeature);

var RenameFeature = /*#__PURE__*/function (_TextDocumentFeature13) {
  _inherits(RenameFeature, _TextDocumentFeature13);

  var _super18 = _createSuper(RenameFeature);

  function RenameFeature(client) {
    _classCallCheck(this, RenameFeature);

    return _super18.call(this, client, vscode_languageserver_protocol_1.RenameRequest.type);
  }

  _createClass(RenameFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var rename = ensure(ensure(capabilites, 'textDocument'), 'rename');
      rename.dynamicRegistration = true;
      rename.prepareSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.renameProvider);

      if (!options) {
        return;
      }

      if (Is["boolean"](capabilities.renameProvider)) {
        options.prepareProvider = false;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this25 = this;

      var provider = {
        provideRenameEdits: function provideRenameEdits(document, position, newName, token) {
          var client = _this25._client;

          var provideRenameEdits = function provideRenameEdits(document, position, newName, token) {
            var params = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
              position: client.code2ProtocolConverter.asPosition(position),
              newName: newName
            };
            return client.sendRequest(vscode_languageserver_protocol_1.RenameRequest.type, params, token).then(client.protocol2CodeConverter.asWorkspaceEdit, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.RenameRequest.type, error);
              return Promise.reject(new Error(error.message));
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideRenameEdits ? middleware.provideRenameEdits(document, position, newName, token, provideRenameEdits) : provideRenameEdits(document, position, newName, token);
        },
        prepareRename: options.prepareProvider ? function (document, position, token) {
          var client = _this25._client;

          var prepareRename = function prepareRename(document, position, token) {
            var params = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
              position: client.code2ProtocolConverter.asPosition(position)
            };
            return client.sendRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, params, token).then(function (result) {
              if (vscode_languageserver_protocol_1.Range.is(result)) {
                return client.protocol2CodeConverter.asRange(result);
              } else if (result && vscode_languageserver_protocol_1.Range.is(result.range)) {
                return {
                  range: client.protocol2CodeConverter.asRange(result.range),
                  placeholder: result.placeholder
                };
              } // To cancel the rename vscode API expects a rejected promise.


              return Promise.reject(new Error("The element can't be renamed."));
            }, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, error);
              return Promise.reject(new Error(error.message));
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.prepareRename ? middleware.prepareRename(document, position, token, prepareRename) : prepareRename(document, position, token);
        } : undefined
      };
      return [vscode_1.languages.registerRenameProvider(options.documentSelector, provider), provider];
    }
  }]);

  return RenameFeature;
}(TextDocumentFeature);

var DocumentLinkFeature = /*#__PURE__*/function (_TextDocumentFeature14) {
  _inherits(DocumentLinkFeature, _TextDocumentFeature14);

  var _super19 = _createSuper(DocumentLinkFeature);

  function DocumentLinkFeature(client) {
    _classCallCheck(this, DocumentLinkFeature);

    return _super19.call(this, client, vscode_languageserver_protocol_1.DocumentLinkRequest.type);
  }

  _createClass(DocumentLinkFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var documentLinkCapabilities = ensure(ensure(capabilites, 'textDocument'), 'documentLink');
      documentLinkCapabilities.dynamicRegistration = true;
      documentLinkCapabilities.tooltipSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var options = this.getRegistrationOptions(documentSelector, capabilities.documentLinkProvider);

      if (!options) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this26 = this;

      var provider = {
        provideDocumentLinks: function provideDocumentLinks(document, token) {
          var client = _this26._client;

          var provideDocumentLinks = function provideDocumentLinks(document, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, client.code2ProtocolConverter.asDocumentLinkParams(document), token).then(client.protocol2CodeConverter.asDocumentLinks, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, error);
              return Promise.resolve([]);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideDocumentLinks ? middleware.provideDocumentLinks(document, token, provideDocumentLinks) : provideDocumentLinks(document, token);
        },
        resolveDocumentLink: options.resolveProvider ? function (link, token) {
          var client = _this26._client;

          var resolveDocumentLink = function resolveDocumentLink(link, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, client.code2ProtocolConverter.asDocumentLink(link), token).then(client.protocol2CodeConverter.asDocumentLink, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, error);
              return Promise.resolve(link);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.resolveDocumentLink ? middleware.resolveDocumentLink(link, token, resolveDocumentLink) : resolveDocumentLink(link, token);
        } : undefined
      };
      return [vscode_1.languages.registerDocumentLinkProvider(options.documentSelector, provider), provider];
    }
  }]);

  return DocumentLinkFeature;
}(TextDocumentFeature);

var ConfigurationFeature = /*#__PURE__*/function () {
  function ConfigurationFeature(_client) {
    _classCallCheck(this, ConfigurationFeature);

    this._client = _client;
    this._listeners = new Map();
  }

  _createClass(ConfigurationFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'workspace'), 'didChangeConfiguration').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var section = this._client.clientOptions.synchronize.configurationSection;

      if (section !== void 0) {
        this.register(this.messages, {
          id: UUID.generateUuid(),
          registerOptions: {
            section: section
          }
        });
      }
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      var _this27 = this;

      var disposable = vscode_1.workspace.onDidChangeConfiguration(function (event) {
        _this27.onDidChangeConfiguration(data.registerOptions.section, event);
      });

      this._listeners.set(data.id, disposable);

      if (data.registerOptions.section !== void 0) {
        this.onDidChangeConfiguration(data.registerOptions.section, undefined);
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var disposable = this._listeners.get(id);

      if (disposable) {
        this._listeners["delete"](id);

        disposable.dispose();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _iterator12 = _createForOfIteratorHelper(this._listeners.values()),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var disposable = _step12.value;
          disposable.dispose();
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      this._listeners.clear();
    }
  }, {
    key: "onDidChangeConfiguration",
    value: function onDidChangeConfiguration(configurationSection, event) {
      var _this28 = this;

      var sections;

      if (Is.string(configurationSection)) {
        sections = [configurationSection];
      } else {
        sections = configurationSection;
      }

      if (sections !== void 0 && event !== void 0) {
        var affected = sections.some(function (section) {
          return event.affectsConfiguration(section);
        });

        if (!affected) {
          return;
        }
      }

      var didChangeConfiguration = function didChangeConfiguration(sections) {
        if (sections === void 0) {
          _this28._client.sendNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, {
            settings: null
          });

          return;
        }

        _this28._client.sendNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, {
          settings: _this28.extractSettingsInformation(sections)
        });
      };

      var middleware = this.getMiddleware();
      middleware ? middleware(sections, didChangeConfiguration) : didChangeConfiguration(sections);
    }
  }, {
    key: "extractSettingsInformation",
    value: function extractSettingsInformation(keys) {
      function ensurePath(config, path) {
        var current = config;

        for (var i = 0; i < path.length - 1; i++) {
          var obj = current[path[i]];

          if (!obj) {
            obj = Object.create(null);
            current[path[i]] = obj;
          }

          current = obj;
        }

        return current;
      }

      var resource = this._client.clientOptions.workspaceFolder ? this._client.clientOptions.workspaceFolder.uri : undefined;
      var result = Object.create(null);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var index = key.indexOf('.');
        var config = null;

        if (index >= 0) {
          config = vscode_1.workspace.getConfiguration(key.substr(0, index), resource).get(key.substr(index + 1));
        } else {
          config = vscode_1.workspace.getConfiguration(key, resource);
        }

        if (config) {
          var path = keys[i].split('.');
          ensurePath(result, path)[path[path.length - 1]] = config;
        }
      }

      return result;
    }
  }, {
    key: "getMiddleware",
    value: function getMiddleware() {
      var middleware = this._client.clientOptions.middleware;

      if (middleware.workspace && middleware.workspace.didChangeConfiguration) {
        return middleware.workspace.didChangeConfiguration;
      } else {
        return undefined;
      }
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type;
    }
  }]);

  return ConfigurationFeature;
}();

var ExecuteCommandFeature = /*#__PURE__*/function () {
  function ExecuteCommandFeature(_client) {
    _classCallCheck(this, ExecuteCommandFeature);

    this._client = _client;
    this._commands = new Map();
  }

  _createClass(ExecuteCommandFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      ensure(ensure(capabilities, 'workspace'), 'executeCommand').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities) {
      if (!capabilities.executeCommandProvider) {
        return;
      }

      this.register(this.messages, {
        id: UUID.generateUuid(),
        registerOptions: Object.assign({}, capabilities.executeCommandProvider)
      });
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      var client = this._client;
      var middleware = client.clientOptions.middleware;

      var executeCommand = function executeCommand(command, args) {
        var params = {
          command: command,
          arguments: args
        };
        return client.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params).then(undefined, function (error) {
          client.logFailedRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, error);
        });
      };

      if (data.registerOptions.commands) {
        var disposeables = [];

        var _iterator13 = _createForOfIteratorHelper(data.registerOptions.commands),
            _step13;

        try {
          var _loop = function _loop() {
            var command = _step13.value;
            disposeables.push(vscode_1.commands.registerCommand(command, function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              return middleware.executeCommand ? middleware.executeCommand(command, args, executeCommand) : executeCommand(command, args);
            }));
          };

          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        this._commands.set(data.id, disposeables);
      }
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var disposeables = this._commands.get(id);

      if (disposeables) {
        disposeables.forEach(function (disposable) {
          return disposable.dispose();
        });
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._commands.forEach(function (value) {
        value.forEach(function (disposable) {
          return disposable.dispose();
        });
      });

      this._commands.clear();
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.ExecuteCommandRequest.type;
    }
  }]);

  return ExecuteCommandFeature;
}();

var MessageTransports;

(function (MessageTransports) {
  function is(value) {
    var candidate = value;
    return candidate && vscode_languageserver_protocol_1.MessageReader.is(value.reader) && vscode_languageserver_protocol_1.MessageWriter.is(value.writer);
  }

  MessageTransports.is = is;
})(MessageTransports = exports.MessageTransports || (exports.MessageTransports = {}));

var OnReady = /*#__PURE__*/function () {
  function OnReady(_resolve, _reject) {
    _classCallCheck(this, OnReady);

    this._resolve = _resolve;
    this._reject = _reject;
    this._used = false;
  }

  _createClass(OnReady, [{
    key: "resolve",
    value: function resolve() {
      this._used = true;

      this._resolve();
    }
  }, {
    key: "reject",
    value: function reject(error) {
      this._used = true;

      this._reject(error);
    }
  }, {
    key: "isUsed",
    get: function get() {
      return this._used;
    }
  }]);

  return OnReady;
}();

var BaseLanguageClient = /*#__PURE__*/function () {
  function BaseLanguageClient(id, name, clientOptions) {
    var _this29 = this;

    _classCallCheck(this, BaseLanguageClient);

    this._traceFormat = vscode_languageserver_protocol_1.TraceFormat.Text;
    this._features = [];
    this._method2Message = new Map();
    this._dynamicFeatures = new Map();
    this._id = id;
    this._name = name;
    clientOptions = clientOptions || {};
    this._clientOptions = {
      documentSelector: clientOptions.documentSelector || [],
      synchronize: clientOptions.synchronize || {},
      diagnosticCollectionName: clientOptions.diagnosticCollectionName,
      outputChannelName: clientOptions.outputChannelName || this._name,
      revealOutputChannelOn: clientOptions.revealOutputChannelOn || RevealOutputChannelOn.Error,
      stdioEncoding: clientOptions.stdioEncoding || 'utf8',
      initializationOptions: clientOptions.initializationOptions,
      initializationFailedHandler: clientOptions.initializationFailedHandler,
      progressOnInitialization: !!clientOptions.progressOnInitialization,
      errorHandler: clientOptions.errorHandler || new DefaultErrorHandler(this._name),
      middleware: clientOptions.middleware || {},
      uriConverters: clientOptions.uriConverters,
      workspaceFolder: clientOptions.workspaceFolder
    };
    this._clientOptions.synchronize = this._clientOptions.synchronize || {};
    this.state = ClientState.Initial;
    this._connectionPromise = undefined;
    this._resolvedConnection = undefined;
    this._initializeResult = undefined;

    if (clientOptions.outputChannel) {
      this._outputChannel = clientOptions.outputChannel;
      this._disposeOutputChannel = false;
    } else {
      this._outputChannel = undefined;
      this._disposeOutputChannel = true;
    }

    this._traceOutputChannel = clientOptions.traceOutputChannel;
    this._listeners = undefined;
    this._providers = undefined;
    this._diagnostics = undefined;
    this._fileEvents = [];
    this._fileEventDelayer = new async_1.Delayer(250);
    this._onReady = new Promise(function (resolve, reject) {
      _this29._onReadyCallbacks = new OnReady(resolve, reject);
    });
    this._onStop = undefined;
    this._telemetryEmitter = new vscode_languageserver_protocol_1.Emitter();
    this._stateChangeEmitter = new vscode_languageserver_protocol_1.Emitter();
    this._tracer = {
      log: function log(messageOrDataObject, data) {
        if (Is.string(messageOrDataObject)) {
          _this29.logTrace(messageOrDataObject, data);
        } else {
          _this29.logObjectTrace(messageOrDataObject);
        }
      }
    };
    this._c2p = c2p.createConverter(clientOptions.uriConverters ? clientOptions.uriConverters.code2Protocol : undefined);
    this._p2c = p2c.createConverter(clientOptions.uriConverters ? clientOptions.uriConverters.protocol2Code : undefined);
    this._syncedDocuments = new Map();
    this.registerBuiltinFeatures();
  }

  _createClass(BaseLanguageClient, [{
    key: "getPublicState",
    value: function getPublicState() {
      if (this.state === ClientState.Running) {
        return State.Running;
      } else if (this.state === ClientState.Starting) {
        return State.Starting;
      } else {
        return State.Stopped;
      }
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(type) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      this.forceDocumentSync();

      try {
        var _this$_resolvedConnec;

        for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          params[_key3 - 1] = arguments[_key3];
        }

        return (_this$_resolvedConnec = this._resolvedConnection).sendRequest.apply(_this$_resolvedConnec, [type].concat(params));
      } catch (error) {
        this.error("Sending request ".concat(Is.string(type) ? type : type.method, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "onRequest",
    value: function onRequest(type, handler) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      try {
        this._resolvedConnection.onRequest(type, handler);
      } catch (error) {
        this.error("Registering request handler ".concat(Is.string(type) ? type : type.method, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "sendNotification",
    value: function sendNotification(type, params) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      this.forceDocumentSync();

      try {
        this._resolvedConnection.sendNotification(type, params);
      } catch (error) {
        this.error("Sending notification ".concat(Is.string(type) ? type : type.method, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "onNotification",
    value: function onNotification(type, handler) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      try {
        this._resolvedConnection.onNotification(type, handler);
      } catch (error) {
        this.error("Registering notification handler ".concat(Is.string(type) ? type : type.method, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "onProgress",
    value: function onProgress(type, token, handler) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      try {
        return this._resolvedConnection.onProgress(type, token, handler);
      } catch (error) {
        this.error("Registering progress handler for token ".concat(token, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "sendProgress",
    value: function sendProgress(type, token, value) {
      if (!this.isConnectionActive()) {
        throw new Error('Language client is not ready yet');
      }

      this.forceDocumentSync();

      try {
        this._resolvedConnection.sendProgress(type, token, value);
      } catch (error) {
        this.error("Sending progress for token ".concat(token, " failed."), error);
        throw error;
      }
    }
  }, {
    key: "createDefaultErrorHandler",
    value: function createDefaultErrorHandler() {
      return new DefaultErrorHandler(this._name);
    }
  }, {
    key: "data2String",
    value: function data2String(data) {
      if (data instanceof vscode_languageserver_protocol_1.ResponseError) {
        var responseError = data;
        return "  Message: ".concat(responseError.message, "\n  Code: ").concat(responseError.code, " ").concat(responseError.data ? '\n' + responseError.data.toString() : '');
      }

      if (data instanceof Error) {
        if (Is.string(data.stack)) {
          return data.stack;
        }

        return data.message;
      }

      if (Is.string(data)) {
        return data;
      }

      return data.toString();
    }
  }, {
    key: "info",
    value: function info(message, data) {
      var showNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.outputChannel.appendLine("[Info  - ".concat(new Date().toLocaleTimeString(), "] ").concat(message));

      if (data) {
        this.outputChannel.appendLine(this.data2String(data));
      }

      if (showNotification && this._clientOptions.revealOutputChannelOn <= RevealOutputChannelOn.Info) {
        this.showNotificationMessage();
      }
    }
  }, {
    key: "warn",
    value: function warn(message, data) {
      var showNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.outputChannel.appendLine("[Warn  - ".concat(new Date().toLocaleTimeString(), "] ").concat(message));

      if (data) {
        this.outputChannel.appendLine(this.data2String(data));
      }

      if (showNotification && this._clientOptions.revealOutputChannelOn <= RevealOutputChannelOn.Warn) {
        this.showNotificationMessage();
      }
    }
  }, {
    key: "error",
    value: function error(message, data) {
      var showNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.outputChannel.appendLine("[Error - ".concat(new Date().toLocaleTimeString(), "] ").concat(message));

      if (data) {
        this.outputChannel.appendLine(this.data2String(data));
      }

      if (showNotification && this._clientOptions.revealOutputChannelOn <= RevealOutputChannelOn.Error) {
        this.showNotificationMessage();
      }
    }
  }, {
    key: "showNotificationMessage",
    value: function showNotificationMessage() {
      var _this30 = this;

      vscode_1.window.showInformationMessage('A request has failed. See the output for more information.', 'Go to output').then(function () {
        _this30.outputChannel.show(true);
      });
    }
  }, {
    key: "logTrace",
    value: function logTrace(message, data) {
      this.traceOutputChannel.appendLine("[Trace - ".concat(new Date().toLocaleTimeString(), "] ").concat(message));

      if (data) {
        this.traceOutputChannel.appendLine(this.data2String(data));
      }
    }
  }, {
    key: "logObjectTrace",
    value: function logObjectTrace(data) {
      if (data.isLSPMessage && data.type) {
        this.traceOutputChannel.append("[LSP   - ".concat(new Date().toLocaleTimeString(), "] "));
      } else {
        this.traceOutputChannel.append("[Trace - ".concat(new Date().toLocaleTimeString(), "] "));
      }

      if (data) {
        this.traceOutputChannel.appendLine("".concat(JSON.stringify(data)));
      }
    }
  }, {
    key: "needsStart",
    value: function needsStart() {
      return this.state === ClientState.Initial || this.state === ClientState.Stopping || this.state === ClientState.Stopped;
    }
  }, {
    key: "needsStop",
    value: function needsStop() {
      return this.state === ClientState.Starting || this.state === ClientState.Running;
    }
  }, {
    key: "onReady",
    value: function onReady() {
      return this._onReady;
    }
  }, {
    key: "isConnectionActive",
    value: function isConnectionActive() {
      return this.state === ClientState.Running && !!this._resolvedConnection;
    }
  }, {
    key: "start",
    value: function start() {
      var _this31 = this;

      if (this._onReadyCallbacks.isUsed) {
        this._onReady = new Promise(function (resolve, reject) {
          _this31._onReadyCallbacks = new OnReady(resolve, reject);
        });
      }

      this._listeners = [];
      this._providers = []; // If we restart then the diagnostics collection is reused.

      if (!this._diagnostics) {
        this._diagnostics = this._clientOptions.diagnosticCollectionName ? vscode_1.languages.createDiagnosticCollection(this._clientOptions.diagnosticCollectionName) : vscode_1.languages.createDiagnosticCollection();
      }

      this.state = ClientState.Starting;
      this.resolveConnection().then(function (connection) {
        connection.onLogMessage(function (message) {
          switch (message.type) {
            case vscode_languageserver_protocol_1.MessageType.Error:
              _this31.error(message.message, undefined, false);

              break;

            case vscode_languageserver_protocol_1.MessageType.Warning:
              _this31.warn(message.message, undefined, false);

              break;

            case vscode_languageserver_protocol_1.MessageType.Info:
              _this31.info(message.message, undefined, false);

              break;

            default:
              _this31.outputChannel.appendLine(message.message);

          }
        });
        connection.onShowMessage(function (message) {
          switch (message.type) {
            case vscode_languageserver_protocol_1.MessageType.Error:
              vscode_1.window.showErrorMessage(message.message);
              break;

            case vscode_languageserver_protocol_1.MessageType.Warning:
              vscode_1.window.showWarningMessage(message.message);
              break;

            case vscode_languageserver_protocol_1.MessageType.Info:
              vscode_1.window.showInformationMessage(message.message);
              break;

            default:
              vscode_1.window.showInformationMessage(message.message);
          }
        });
        connection.onRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, function (params) {
          var messageFunc;

          switch (params.type) {
            case vscode_languageserver_protocol_1.MessageType.Error:
              messageFunc = vscode_1.window.showErrorMessage;
              break;

            case vscode_languageserver_protocol_1.MessageType.Warning:
              messageFunc = vscode_1.window.showWarningMessage;
              break;

            case vscode_languageserver_protocol_1.MessageType.Info:
              messageFunc = vscode_1.window.showInformationMessage;
              break;

            default:
              messageFunc = vscode_1.window.showInformationMessage;
          }

          var actions = params.actions || [];
          return messageFunc.apply(void 0, [params.message].concat(_toConsumableArray(actions)));
        });
        connection.onTelemetry(function (data) {
          _this31._telemetryEmitter.fire(data);
        });
        connection.listen(); // Error is handled in the initialize call.

        return _this31.initialize(connection);
      }).then(undefined, function (error) {
        _this31.state = ClientState.StartFailed;

        _this31._onReadyCallbacks.reject(error);

        _this31.error('Starting client failed', error);

        vscode_1.window.showErrorMessage("Couldn't start client ".concat(_this31._name));
      });
      return new vscode_1.Disposable(function () {
        if (_this31.needsStop()) {
          _this31.stop();
        }
      });
    }
  }, {
    key: "resolveConnection",
    value: function resolveConnection() {
      if (!this._connectionPromise) {
        this._connectionPromise = this.createConnection();
      }

      return this._connectionPromise;
    }
  }, {
    key: "initialize",
    value: function initialize(connection) {
      this.refreshTrace(connection, false);
      var initOption = this._clientOptions.initializationOptions;
      var rootPath = this._clientOptions.workspaceFolder ? this._clientOptions.workspaceFolder.uri.fsPath : this._clientGetRootPath();
      var initParams = {
        processId: process.pid,
        clientInfo: {
          name: 'vscode',
          version: vscode_1.version
        },
        rootPath: rootPath ? rootPath : null,
        rootUri: rootPath ? this._c2p.asUri(vscode_1.Uri.file(rootPath)) : null,
        capabilities: this.computeClientCapabilities(),
        initializationOptions: Is.func(initOption) ? initOption() : initOption,
        trace: vscode_languageserver_protocol_1.Trace.toString(this._trace),
        workspaceFolders: null
      };
      this.fillInitializeParams(initParams);

      if (this._clientOptions.progressOnInitialization) {
        var token = UUID.generateUuid();
        var part = new progressPart_1.ProgressPart(connection, token);
        initParams.workDoneToken = token;
        return this.doInitialize(connection, initParams).then(function (result) {
          part.done();
          return result;
        }, function (error) {
          part.cancel();
          throw error;
        });
      } else {
        return this.doInitialize(connection, initParams);
      }
    }
  }, {
    key: "doInitialize",
    value: function doInitialize(connection, initParams) {
      var _this32 = this;

      return connection.initialize(initParams).then(function (result) {
        _this32._resolvedConnection = connection;
        _this32._initializeResult = result;
        _this32.state = ClientState.Running;
        var textDocumentSyncOptions = undefined;

        if (Is.number(result.capabilities.textDocumentSync)) {
          if (result.capabilities.textDocumentSync === vscode_languageserver_protocol_1.TextDocumentSyncKind.None) {
            textDocumentSyncOptions = {
              openClose: false,
              change: vscode_languageserver_protocol_1.TextDocumentSyncKind.None,
              save: undefined
            };
          } else {
            textDocumentSyncOptions = {
              openClose: true,
              change: result.capabilities.textDocumentSync,
              save: {
                includeText: false
              }
            };
          }
        } else if (result.capabilities.textDocumentSync !== void 0 && result.capabilities.textDocumentSync !== null) {
          textDocumentSyncOptions = result.capabilities.textDocumentSync;
        }

        _this32._capabilities = Object.assign({}, result.capabilities, {
          resolvedTextDocumentSync: textDocumentSyncOptions
        });
        connection.onDiagnostics(function (params) {
          return _this32.handleDiagnostics(params);
        });
        connection.onRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, function (params) {
          return _this32.handleRegistrationRequest(params);
        }); // See https://github.com/Microsoft/vscode-languageserver-node/issues/199

        connection.onRequest('client/registerFeature', function (params) {
          return _this32.handleRegistrationRequest(params);
        });
        connection.onRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, function (params) {
          return _this32.handleUnregistrationRequest(params);
        }); // See https://github.com/Microsoft/vscode-languageserver-node/issues/199

        connection.onRequest('client/unregisterFeature', function (params) {
          return _this32.handleUnregistrationRequest(params);
        });
        connection.onRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, function (params) {
          return _this32.handleApplyWorkspaceEdit(params);
        });
        connection.sendNotification(vscode_languageserver_protocol_1.InitializedNotification.type, {});

        _this32.hookFileEvents(connection);

        _this32.hookConfigurationChanged(connection);

        _this32.initializeFeatures(connection);

        _this32._onReadyCallbacks.resolve();

        return result;
      }).then(undefined, function (error) {
        if (_this32._clientOptions.initializationFailedHandler) {
          if (_this32._clientOptions.initializationFailedHandler(error)) {
            _this32.initialize(connection);
          } else {
            _this32.stop();

            _this32._onReadyCallbacks.reject(error);
          }
        } else if (error instanceof vscode_languageserver_protocol_1.ResponseError && error.data && error.data.retry) {
          vscode_1.window.showErrorMessage(error.message, {
            title: 'Retry',
            id: 'retry'
          }).then(function (item) {
            if (item && item.id === 'retry') {
              _this32.initialize(connection);
            } else {
              _this32.stop();

              _this32._onReadyCallbacks.reject(error);
            }
          });
        } else {
          if (error && error.message) {
            vscode_1.window.showErrorMessage(error.message);
          }

          _this32.error('Server initialization failed.', error);

          _this32.stop();

          _this32._onReadyCallbacks.reject(error);
        }

        throw error;
      });
    }
  }, {
    key: "_clientGetRootPath",
    value: function _clientGetRootPath() {
      var folders = vscode_1.workspace.workspaceFolders;

      if (!folders || folders.length === 0) {
        return undefined;
      }

      var folder = folders[0];

      if (folder.uri.scheme === 'file') {
        return folder.uri.fsPath;
      }

      return undefined;
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this33 = this;

      this._initializeResult = undefined;

      if (!this._connectionPromise) {
        this.state = ClientState.Stopped;
        return Promise.resolve();
      }

      if (this.state === ClientState.Stopping && this._onStop) {
        return this._onStop;
      }

      this.state = ClientState.Stopping;
      this.cleanUp(false); // unhook listeners

      return this._onStop = this.resolveConnection().then(function (connection) {
        return connection.shutdown().then(function () {
          connection.exit();
          connection.dispose();
          _this33.state = ClientState.Stopped;

          _this33.cleanUpChannel();

          _this33._onStop = undefined;
          _this33._connectionPromise = undefined;
          _this33._resolvedConnection = undefined;
        });
      });
    }
  }, {
    key: "cleanUp",
    value: function cleanUp() {
      var channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var diagnostics = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this._listeners) {
        this._listeners.forEach(function (listener) {
          return listener.dispose();
        });

        this._listeners = undefined;
      }

      if (this._providers) {
        this._providers.forEach(function (provider) {
          return provider.dispose();
        });

        this._providers = undefined;
      }

      if (this._syncedDocuments) {
        this._syncedDocuments.clear();
      }

      var _iterator14 = _createForOfIteratorHelper(this._dynamicFeatures.values()),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var handler = _step14.value;
          handler.dispose();
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }

      if (channel) {
        this.cleanUpChannel();
      }

      if (diagnostics && this._diagnostics) {
        this._diagnostics.dispose();

        this._diagnostics = undefined;
      }
    }
  }, {
    key: "cleanUpChannel",
    value: function cleanUpChannel() {
      if (this._outputChannel && this._disposeOutputChannel) {
        this._outputChannel.dispose();

        this._outputChannel = undefined;
      }
    }
  }, {
    key: "notifyFileEvent",
    value: function notifyFileEvent(event) {
      var _a, _b;

      var client = this;

      function didChangeWatchedFile(event) {
        client._fileEvents.push(event);

        client._fileEventDelayer.trigger(function () {
          client.onReady().then(function () {
            client.resolveConnection().then(function (connection) {
              if (client.isConnectionActive()) {
                client.forceDocumentSync();
                connection.didChangeWatchedFiles({
                  changes: client._fileEvents
                });
              }

              client._fileEvents = [];
            });
          }, function (error) {
            client.error("Notify file events failed.", error);
          });
        });
      }

      var workSpaceMiddleware = (_a = this.clientOptions.middleware) === null || _a === void 0 ? void 0 : _a.workspace;
      ((_b = workSpaceMiddleware) === null || _b === void 0 ? void 0 : _b.didChangeWatchedFile) ? workSpaceMiddleware.didChangeWatchedFile(event, didChangeWatchedFile) : didChangeWatchedFile(event);
    }
  }, {
    key: "forceDocumentSync",
    value: function forceDocumentSync() {
      this._dynamicFeatures.get(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type.method).forceDelivery();
    }
  }, {
    key: "handleDiagnostics",
    value: function handleDiagnostics(params) {
      var _this34 = this;

      if (!this._diagnostics) {
        return;
      }

      var uri = this._p2c.asUri(params.uri);

      var diagnostics = this._p2c.asDiagnostics(params.diagnostics);

      var middleware = this.clientOptions.middleware;

      if (middleware.handleDiagnostics) {
        middleware.handleDiagnostics(uri, diagnostics, function (uri, diagnostics) {
          return _this34.setDiagnostics(uri, diagnostics);
        });
      } else {
        this.setDiagnostics(uri, diagnostics);
      }
    }
  }, {
    key: "setDiagnostics",
    value: function setDiagnostics(uri, diagnostics) {
      if (!this._diagnostics) {
        return;
      }

      this._diagnostics.set(uri, diagnostics);
    }
  }, {
    key: "createConnection",
    value: function createConnection() {
      var _this35 = this;

      var errorHandler = function errorHandler(error, message, count) {
        _this35.handleConnectionError(error, message, count);
      };

      var closeHandler = function closeHandler() {
        _this35.handleConnectionClosed();
      };

      return this.createMessageTransports(this._clientOptions.stdioEncoding || 'utf8').then(function (transports) {
        return _createConnection(transports.reader, transports.writer, errorHandler, closeHandler);
      });
    }
  }, {
    key: "handleConnectionClosed",
    value: function handleConnectionClosed() {
      // Check whether this is a normal shutdown in progress or the client stopped normally.
      if (this.state === ClientState.Stopping || this.state === ClientState.Stopped) {
        return;
      }

      try {
        if (this._resolvedConnection) {
          this._resolvedConnection.dispose();
        }
      } catch (error) {// Disposing a connection could fail if error cases.
      }

      var action = CloseAction.DoNotRestart;

      try {
        action = this._clientOptions.errorHandler.closed();
      } catch (error) {// Ignore errors coming from the error handler.
      }

      this._connectionPromise = undefined;
      this._resolvedConnection = undefined;

      if (action === CloseAction.DoNotRestart) {
        this.error('Connection to server got closed. Server will not be restarted.');
        this.state = ClientState.Stopped;
        this.cleanUp(false, true);
      } else if (action === CloseAction.Restart) {
        this.info('Connection to server got closed. Server will restart.');
        this.cleanUp(false, false);
        this.state = ClientState.Initial;
        this.start();
      }
    }
  }, {
    key: "handleConnectionError",
    value: function handleConnectionError(error, message, count) {
      var action = this._clientOptions.errorHandler.error(error, message, count);

      if (action === ErrorAction.Shutdown) {
        this.error('Connection to server is erroring. Shutting down server.');
        this.stop();
      }
    }
  }, {
    key: "hookConfigurationChanged",
    value: function hookConfigurationChanged(connection) {
      var _this36 = this;

      vscode_1.workspace.onDidChangeConfiguration(function () {
        _this36.refreshTrace(connection, true);
      });
    }
  }, {
    key: "refreshTrace",
    value: function refreshTrace(connection) {
      var sendNotification = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var config = vscode_1.workspace.getConfiguration(this._id);
      var trace = vscode_languageserver_protocol_1.Trace.Off;
      var traceFormat = vscode_languageserver_protocol_1.TraceFormat.Text;

      if (config) {
        var traceConfig = config.get('trace.server', 'off');

        if (typeof traceConfig === 'string') {
          trace = vscode_languageserver_protocol_1.Trace.fromString(traceConfig);
        } else {
          trace = vscode_languageserver_protocol_1.Trace.fromString(config.get('trace.server.verbosity', 'off'));
          traceFormat = vscode_languageserver_protocol_1.TraceFormat.fromString(config.get('trace.server.format', 'text'));
        }
      }

      this._trace = trace;
      this._traceFormat = traceFormat;
      connection.trace(this._trace, this._tracer, {
        sendNotification: sendNotification,
        traceFormat: this._traceFormat
      });
    }
  }, {
    key: "hookFileEvents",
    value: function hookFileEvents(_connection) {
      var fileEvents = this._clientOptions.synchronize.fileEvents;

      if (!fileEvents) {
        return;
      }

      var watchers;

      if (Is.array(fileEvents)) {
        watchers = fileEvents;
      } else {
        watchers = [fileEvents];
      }

      if (!watchers) {
        return;
      }

      this._dynamicFeatures.get(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type.method).registerRaw(UUID.generateUuid(), watchers);
    }
  }, {
    key: "registerFeatures",
    value: function registerFeatures(features) {
      var _iterator15 = _createForOfIteratorHelper(features),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var feature = _step15.value;
          this.registerFeature(feature);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
  }, {
    key: "registerFeature",
    value: function registerFeature(feature) {
      this._features.push(feature);

      if (DynamicFeature.is(feature)) {
        var messages = feature.messages;

        if (Array.isArray(messages)) {
          var _iterator16 = _createForOfIteratorHelper(messages),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var message = _step16.value;

              this._method2Message.set(message.method, message);

              this._dynamicFeatures.set(message.method, feature);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        } else {
          this._method2Message.set(messages.method, messages);

          this._dynamicFeatures.set(messages.method, feature);
        }
      }
    }
  }, {
    key: "getFeature",
    value: function getFeature(request) {
      return this._dynamicFeatures.get(request);
    }
  }, {
    key: "registerBuiltinFeatures",
    value: function registerBuiltinFeatures() {
      var _this37 = this;

      this.registerFeature(new ConfigurationFeature(this));
      this.registerFeature(new DidOpenTextDocumentFeature(this, this._syncedDocuments));
      this.registerFeature(new DidChangeTextDocumentFeature(this));
      this.registerFeature(new WillSaveFeature(this));
      this.registerFeature(new WillSaveWaitUntilFeature(this));
      this.registerFeature(new DidSaveTextDocumentFeature(this));
      this.registerFeature(new DidCloseTextDocumentFeature(this, this._syncedDocuments));
      this.registerFeature(new FileSystemWatcherFeature(this, function (event) {
        return _this37.notifyFileEvent(event);
      }));
      this.registerFeature(new CompletionItemFeature(this));
      this.registerFeature(new HoverFeature(this));
      this.registerFeature(new SignatureHelpFeature(this));
      this.registerFeature(new DefinitionFeature(this));
      this.registerFeature(new ReferencesFeature(this));
      this.registerFeature(new DocumentHighlightFeature(this));
      this.registerFeature(new DocumentSymbolFeature(this));
      this.registerFeature(new WorkspaceSymbolFeature(this));
      this.registerFeature(new CodeActionFeature(this));
      this.registerFeature(new CodeLensFeature(this));
      this.registerFeature(new DocumentFormattingFeature(this));
      this.registerFeature(new DocumentRangeFormattingFeature(this));
      this.registerFeature(new DocumentOnTypeFormattingFeature(this));
      this.registerFeature(new RenameFeature(this));
      this.registerFeature(new DocumentLinkFeature(this));
      this.registerFeature(new ExecuteCommandFeature(this));
    }
  }, {
    key: "fillInitializeParams",
    value: function fillInitializeParams(params) {
      var _iterator17 = _createForOfIteratorHelper(this._features),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var feature = _step17.value;

          if (Is.func(feature.fillInitializeParams)) {
            feature.fillInitializeParams(params);
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    }
  }, {
    key: "computeClientCapabilities",
    value: function computeClientCapabilities() {
      var result = {};
      ensure(result, 'workspace').applyEdit = true;
      var workspaceEdit = ensure(ensure(result, 'workspace'), 'workspaceEdit');
      workspaceEdit.documentChanges = true;
      workspaceEdit.resourceOperations = [vscode_languageserver_protocol_1.ResourceOperationKind.Create, vscode_languageserver_protocol_1.ResourceOperationKind.Rename, vscode_languageserver_protocol_1.ResourceOperationKind.Delete];
      workspaceEdit.failureHandling = vscode_languageserver_protocol_1.FailureHandlingKind.TextOnlyTransactional;
      var diagnostics = ensure(ensure(result, 'textDocument'), 'publishDiagnostics');
      diagnostics.relatedInformation = true;
      diagnostics.versionSupport = false;
      diagnostics.tagSupport = {
        valueSet: [vscode_languageserver_protocol_1.DiagnosticTag.Unnecessary, vscode_languageserver_protocol_1.DiagnosticTag.Deprecated]
      };

      var _iterator18 = _createForOfIteratorHelper(this._features),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var feature = _step18.value;
          feature.fillClientCapabilities(result);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      return result;
    }
  }, {
    key: "initializeFeatures",
    value: function initializeFeatures(_connection) {
      var documentSelector = this._clientOptions.documentSelector;

      var _iterator19 = _createForOfIteratorHelper(this._features),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var feature = _step19.value;
          feature.initialize(this._capabilities, documentSelector);
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
    }
  }, {
    key: "handleRegistrationRequest",
    value: function handleRegistrationRequest(params) {
      var _this38 = this;

      return new Promise(function (resolve, reject) {
        var _iterator20 = _createForOfIteratorHelper(params.registrations),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var registration = _step20.value;

            var feature = _this38._dynamicFeatures.get(registration.method);

            if (!feature) {
              reject(new Error("No feature implementation for ".concat(registration.method, " found. Registration failed.")));
              return;
            }

            var options = registration.registerOptions || {};
            options.documentSelector = options.documentSelector || _this38._clientOptions.documentSelector;
            var data = {
              id: registration.id,
              registerOptions: options
            };
            feature.register(_this38._method2Message.get(registration.method), data);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        resolve();
      });
    }
  }, {
    key: "handleUnregistrationRequest",
    value: function handleUnregistrationRequest(params) {
      var _this39 = this;

      return new Promise(function (resolve, reject) {
        var _iterator21 = _createForOfIteratorHelper(params.unregisterations),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var unregistration = _step21.value;

            var feature = _this39._dynamicFeatures.get(unregistration.method);

            if (!feature) {
              reject(new Error("No feature implementation for ".concat(unregistration.method, " found. Unregistration failed.")));
              return;
            }

            feature.unregister(unregistration.id);
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }

        resolve();
      });
    }
  }, {
    key: "handleApplyWorkspaceEdit",
    value: function handleApplyWorkspaceEdit(params) {
      // This is some sort of workaround since the version check should be done by VS Code in the Workspace.applyEdit.
      // However doing it here adds some safety since the server can lag more behind then an extension.
      var workspaceEdit = params.edit;
      var openTextDocuments = new Map();
      vscode_1.workspace.textDocuments.forEach(function (document) {
        return openTextDocuments.set(document.uri.toString(), document);
      });
      var versionMismatch = false;

      if (workspaceEdit.documentChanges) {
        var _iterator22 = _createForOfIteratorHelper(workspaceEdit.documentChanges),
            _step22;

        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var change = _step22.value;

            if (vscode_languageserver_protocol_1.TextDocumentEdit.is(change) && change.textDocument.version && change.textDocument.version >= 0) {
              var textDocument = openTextDocuments.get(change.textDocument.uri);

              if (textDocument && textDocument.version !== change.textDocument.version) {
                versionMismatch = true;
                break;
              }
            }
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
      }

      if (versionMismatch) {
        return Promise.resolve({
          applied: false
        });
      }

      return Is.asPromise(vscode_1.workspace.applyEdit(this._p2c.asWorkspaceEdit(params.edit)).then(function (value) {
        return {
          applied: value
        };
      }));
    }
  }, {
    key: "logFailedRequest",
    value: function logFailedRequest(type, error) {
      // If we get a request cancel or a content modified don't log anything.
      if (error instanceof vscode_languageserver_protocol_1.ResponseError && (error.code === vscode_languageserver_protocol_1.ErrorCodes.RequestCancelled || error.code === vscode_languageserver_protocol_1.ErrorCodes.ContentModified)) {
        return;
      }

      this.error("Request ".concat(type.method, " failed."), error);
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(value) {
      var oldState = this.getPublicState();
      this._state = value;
      var newState = this.getPublicState();

      if (newState !== oldState) {
        this._stateChangeEmitter.fire({
          oldState: oldState,
          newState: newState
        });
      }
    }
  }, {
    key: "initializeResult",
    get: function get() {
      return this._initializeResult;
    }
  }, {
    key: "clientOptions",
    get: function get() {
      return this._clientOptions;
    }
  }, {
    key: "protocol2CodeConverter",
    get: function get() {
      return this._p2c;
    }
  }, {
    key: "code2ProtocolConverter",
    get: function get() {
      return this._c2p;
    }
  }, {
    key: "onTelemetry",
    get: function get() {
      return this._telemetryEmitter.event;
    }
  }, {
    key: "onDidChangeState",
    get: function get() {
      return this._stateChangeEmitter.event;
    }
  }, {
    key: "outputChannel",
    get: function get() {
      if (!this._outputChannel) {
        this._outputChannel = vscode_1.window.createOutputChannel(this._clientOptions.outputChannelName ? this._clientOptions.outputChannelName : this._name);
      }

      return this._outputChannel;
    }
  }, {
    key: "traceOutputChannel",
    get: function get() {
      if (this._traceOutputChannel) {
        return this._traceOutputChannel;
      }

      return this.outputChannel;
    }
  }, {
    key: "diagnostics",
    get: function get() {
      return this._diagnostics;
    }
  }, {
    key: "trace",
    set: function set(value) {
      var _this40 = this;

      this._trace = value;
      this.onReady().then(function () {
        _this40.resolveConnection().then(function (connection) {
          connection.trace(_this40._trace, _this40._tracer, {
            sendNotification: false,
            traceFormat: _this40._traceFormat
          });
        });
      }, function () {});
    }
  }]);

  return BaseLanguageClient;
}();

exports.BaseLanguageClient = BaseLanguageClient;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/codeConverter.js":
/*!************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/codeConverter.js ***!
  \************************************************************************************************************************************/
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

var code = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var proto = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! ./utils/is */ "../../node_modules/vscode-languageclient/lib/utils/is.js");

var protocolCompletionItem_1 = __webpack_require__(/*! ./protocolCompletionItem */ "../../node_modules/vscode-languageclient/lib/protocolCompletionItem.js");

var protocolCodeLens_1 = __webpack_require__(/*! ./protocolCodeLens */ "../../node_modules/vscode-languageclient/lib/protocolCodeLens.js");

var protocolDocumentLink_1 = __webpack_require__(/*! ./protocolDocumentLink */ "../../node_modules/vscode-languageclient/lib/protocolDocumentLink.js");

function createConverter(uriConverter) {
  var nullConverter = function nullConverter(value) {
    return value.toString();
  };

  var _uriConverter = uriConverter || nullConverter;

  function asUri(value) {
    return _uriConverter(value);
  }

  function asTextDocumentIdentifier(textDocument) {
    return {
      uri: _uriConverter(textDocument.uri)
    };
  }

  function asVersionedTextDocumentIdentifier(textDocument) {
    return {
      uri: _uriConverter(textDocument.uri),
      version: textDocument.version
    };
  }

  function asOpenTextDocumentParams(textDocument) {
    return {
      textDocument: {
        uri: _uriConverter(textDocument.uri),
        languageId: textDocument.languageId,
        version: textDocument.version,
        text: textDocument.getText()
      }
    };
  }

  function isTextDocumentChangeEvent(value) {
    var candidate = value;
    return !!candidate.document && !!candidate.contentChanges;
  }

  function isTextDocument(value) {
    var candidate = value;
    return !!candidate.uri && !!candidate.version;
  }

  function asChangeTextDocumentParams(arg) {
    if (isTextDocument(arg)) {
      var result = {
        textDocument: {
          uri: _uriConverter(arg.uri),
          version: arg.version
        },
        contentChanges: [{
          text: arg.getText()
        }]
      };
      return result;
    } else if (isTextDocumentChangeEvent(arg)) {
      var document = arg.document;
      var _result = {
        textDocument: {
          uri: _uriConverter(document.uri),
          version: document.version
        },
        contentChanges: arg.contentChanges.map(function (change) {
          var range = change.range;
          return {
            range: {
              start: {
                line: range.start.line,
                character: range.start.character
              },
              end: {
                line: range.end.line,
                character: range.end.character
              }
            },
            rangeLength: change.rangeLength,
            text: change.text
          };
        })
      };
      return _result;
    } else {
      throw Error('Unsupported text document change parameter');
    }
  }

  function asCloseTextDocumentParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }

  function asSaveTextDocumentParams(textDocument) {
    var includeContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var result = {
      textDocument: asVersionedTextDocumentIdentifier(textDocument)
    };

    if (includeContent) {
      result.text = textDocument.getText();
    }

    return result;
  }

  function asTextDocumentSaveReason(reason) {
    switch (reason) {
      case code.TextDocumentSaveReason.Manual:
        return proto.TextDocumentSaveReason.Manual;

      case code.TextDocumentSaveReason.AfterDelay:
        return proto.TextDocumentSaveReason.AfterDelay;

      case code.TextDocumentSaveReason.FocusOut:
        return proto.TextDocumentSaveReason.FocusOut;
    }

    return proto.TextDocumentSaveReason.Manual;
  }

  function asWillSaveTextDocumentParams(event) {
    return {
      textDocument: asTextDocumentIdentifier(event.document),
      reason: asTextDocumentSaveReason(event.reason)
    };
  }

  function asTextDocumentPositionParams(textDocument, position) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position)
    };
  }

  function asCompletionTriggerKind(triggerKind) {
    switch (triggerKind) {
      case code.CompletionTriggerKind.TriggerCharacter:
        return proto.CompletionTriggerKind.TriggerCharacter;

      case code.CompletionTriggerKind.TriggerForIncompleteCompletions:
        return proto.CompletionTriggerKind.TriggerForIncompleteCompletions;

      default:
        return proto.CompletionTriggerKind.Invoked;
    }
  }

  function asCompletionParams(textDocument, position, context) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position),
      context: {
        triggerKind: asCompletionTriggerKind(context.triggerKind),
        triggerCharacter: context.triggerCharacter
      }
    };
  }

  function asSignatureHelpTriggerKind(triggerKind) {
    switch (triggerKind) {
      case code.SignatureHelpTriggerKind.Invoke:
        return proto.SignatureHelpTriggerKind.Invoked;

      case code.SignatureHelpTriggerKind.TriggerCharacter:
        return proto.SignatureHelpTriggerKind.TriggerCharacter;

      case code.SignatureHelpTriggerKind.ContentChange:
        return proto.SignatureHelpTriggerKind.ContentChange;
    }
  }

  function asParameterInformation(value) {
    // We leave the documentation out on purpose since it usually adds no
    // value for the server.
    return {
      label: value.label
    };
  }

  function asParameterInformations(values) {
    return values.map(asParameterInformation);
  }

  function asSignatureInformation(value) {
    // We leave the documentation out on purpose since it usually adds no
    // value for the server.
    return {
      label: value.label,
      parameters: asParameterInformations(value.parameters)
    };
  }

  function asSignatureInformations(values) {
    return values.map(asSignatureInformation);
  }

  function asSignatureHelp(value) {
    if (value === undefined) {
      return value;
    }

    return {
      signatures: asSignatureInformations(value.signatures),
      activeSignature: value.activeSignature,
      activeParameter: value.activeParameter
    };
  }

  function asSignatureHelpParams(textDocument, position, context) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position),
      context: {
        isRetrigger: context.isRetrigger,
        triggerCharacter: context.triggerCharacter,
        triggerKind: asSignatureHelpTriggerKind(context.triggerKind),
        activeSignatureHelp: asSignatureHelp(context.activeSignatureHelp)
      }
    };
  }

  function asWorkerPosition(position) {
    return {
      line: position.line,
      character: position.character
    };
  }

  function asPosition(value) {
    if (value === undefined || value === null) {
      return value;
    }

    return {
      line: value.line,
      character: value.character
    };
  }

  function asPositions(value) {
    var result = [];

    var _iterator = _createForOfIteratorHelper(value),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;
        result.push(asPosition(elem));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return result;
  }

  function isInsertReplace(value) {
    var candidate = value;
    return candidate && !!candidate.inserting && !!candidate.replacing;
  }

  function asRange(value) {
    if (value === undefined || value === null) {
      return value;
    } // The LSP has no support yet for insert replace. So this can never happen.


    if (isInsertReplace(value)) {
      throw new Error("Receving unknown insert replace range.");
    }

    return {
      start: asPosition(value.start),
      end: asPosition(value.end)
    };
  }

  function asLocation(value) {
    if (value === undefined || value === null) {
      return value;
    }

    return proto.Location.create(asUri(value.uri), asRange(value.range));
  }

  function asDiagnosticSeverity(value) {
    switch (value) {
      case code.DiagnosticSeverity.Error:
        return proto.DiagnosticSeverity.Error;

      case code.DiagnosticSeverity.Warning:
        return proto.DiagnosticSeverity.Warning;

      case code.DiagnosticSeverity.Information:
        return proto.DiagnosticSeverity.Information;

      case code.DiagnosticSeverity.Hint:
        return proto.DiagnosticSeverity.Hint;
    }
  }

  function asDiagnosticTags(tags) {
    if (!tags) {
      return undefined;
    }

    var result = [];

    var _iterator2 = _createForOfIteratorHelper(tags),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tag = _step2.value;
        var converted = asDiagnosticTag(tag);

        if (converted !== undefined) {
          result.push(converted);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return result.length > 0 ? result : undefined;
  }

  function asDiagnosticTag(tag) {
    switch (tag) {
      case code.DiagnosticTag.Unnecessary:
        return proto.DiagnosticTag.Unnecessary;

      case code.DiagnosticTag.Deprecated:
        return proto.DiagnosticTag.Deprecated;

      default:
        return undefined;
    }
  }

  function asRelatedInformation(item) {
    return {
      message: item.message,
      location: asLocation(item.location)
    };
  }

  function asRelatedInformations(items) {
    return items.map(asRelatedInformation);
  }

  function asDiagnostic(item) {
    var result = proto.Diagnostic.create(asRange(item.range), item.message);

    if (Is.number(item.severity)) {
      result.severity = asDiagnosticSeverity(item.severity);
    }

    if (Is.number(item.code) || Is.string(item.code)) {
      result.code = item.code;
    }

    if (Array.isArray(item.tags)) {
      result.tags = asDiagnosticTags(item.tags);
    }

    if (item.relatedInformation) {
      result.relatedInformation = asRelatedInformations(item.relatedInformation);
    }

    if (item.source) {
      result.source = item.source;
    }

    return result;
  }

  function asDiagnostics(items) {
    if (items === undefined || items === null) {
      return items;
    }

    return items.map(asDiagnostic);
  }

  function asDocumentation(format, documentation) {
    switch (format) {
      case '$string':
        return documentation;

      case proto.MarkupKind.PlainText:
        return {
          kind: format,
          value: documentation
        };

      case proto.MarkupKind.Markdown:
        return {
          kind: format,
          value: documentation.value
        };

      default:
        return "Unsupported Markup content received. Kind is: ".concat(format);
    }
  }

  function asCompletionItemTag(tag) {
    switch (tag) {
      case code.CompletionItemTag.Deprecated:
        return proto.CompletionItemTag.Deprecated;
    }

    return undefined;
  }

  function asCompletionItemTags(tags) {
    if (tags === undefined) {
      return tags;
    }

    var result = [];

    var _iterator3 = _createForOfIteratorHelper(tags),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var tag = _step3.value;
        var converted = asCompletionItemTag(tag);

        if (converted !== undefined) {
          result.push(converted);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return result;
  }

  function asCompletionItemKind(value, original) {
    if (original !== undefined) {
      return original;
    }

    return value + 1;
  }

  function asCompletionItem(item) {
    var result = {
      label: item.label
    };
    var protocolItem = item instanceof protocolCompletionItem_1["default"] ? item : undefined;

    if (item.detail) {
      result.detail = item.detail;
    } // We only send items back we created. So this can't be something else than
    // a string right now.


    if (item.documentation) {
      if (!protocolItem || protocolItem.documentationFormat === '$string') {
        result.documentation = item.documentation;
      } else {
        result.documentation = asDocumentation(protocolItem.documentationFormat, item.documentation);
      }
    }

    if (item.filterText) {
      result.filterText = item.filterText;
    }

    fillPrimaryInsertText(result, item);

    if (Is.number(item.kind)) {
      result.kind = asCompletionItemKind(item.kind, protocolItem && protocolItem.originalItemKind);
    }

    if (item.sortText) {
      result.sortText = item.sortText;
    }

    if (item.additionalTextEdits) {
      result.additionalTextEdits = asTextEdits(item.additionalTextEdits);
    }

    if (item.commitCharacters) {
      result.commitCharacters = item.commitCharacters.slice();
    }

    if (item.command) {
      result.command = asCommand(item.command);
    }

    if (item.preselect === true || item.preselect === false) {
      result.preselect = item.preselect;
    }

    var tags = asCompletionItemTags(item.tags);

    if (protocolItem) {
      if (protocolItem.data !== undefined) {
        result.data = protocolItem.data;
      }

      if (protocolItem.deprecated === true || protocolItem.deprecated === false) {
        if (protocolItem.deprecated === true && tags !== undefined && tags.length > 0) {
          var index = tags.indexOf(code.CompletionItemTag.Deprecated);

          if (index !== -1) {
            tags.splice(index, 1);
          }
        }

        result.deprecated = protocolItem.deprecated;
      }
    }

    if (tags !== undefined && tags.length > 0) {
      result.tags = tags;
    }

    return result;
  }

  function fillPrimaryInsertText(target, source) {
    var format = proto.InsertTextFormat.PlainText;
    var text = undefined;
    var range = undefined;

    if (source.textEdit) {
      text = source.textEdit.newText;
      range = asRange(source.textEdit.range);
    } else if (source.insertText instanceof code.SnippetString) {
      format = proto.InsertTextFormat.Snippet;
      text = source.insertText.value;
    } else {
      text = source.insertText;
    }

    if (source.range) {
      range = asRange(source.range);
    }

    target.insertTextFormat = format;

    if (source.fromEdit && text !== undefined && range !== undefined) {
      target.textEdit = {
        newText: text,
        range: range
      };
    } else {
      target.insertText = text;
    }
  }

  function asTextEdit(edit) {
    return {
      range: asRange(edit.range),
      newText: edit.newText
    };
  }

  function asTextEdits(edits) {
    if (edits === undefined || edits === null) {
      return edits;
    }

    return edits.map(asTextEdit);
  }

  function asSymbolKind(item) {
    if (item <= code.SymbolKind.TypeParameter) {
      // Symbol kind is one based in the protocol and zero based in code.
      return item + 1;
    }

    return proto.SymbolKind.Property;
  }

  function asSymbolTag(item) {
    return item;
  }

  function asSymbolTags(items) {
    return items.map(asSymbolTag);
  }

  function asReferenceParams(textDocument, position, options) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument),
      position: asWorkerPosition(position),
      context: {
        includeDeclaration: options.includeDeclaration
      }
    };
  }

  function asCodeActionContext(context) {
    if (context === undefined || context === null) {
      return context;
    }

    var only;

    if (context.only && Is.string(context.only.value)) {
      only = [context.only.value];
    }

    return proto.CodeActionContext.create(asDiagnostics(context.diagnostics), only);
  }

  function asCommand(item) {
    var result = proto.Command.create(item.title, item.command);

    if (item.arguments) {
      result.arguments = item.arguments;
    }

    return result;
  }

  function asCodeLens(item) {
    var result = proto.CodeLens.create(asRange(item.range));

    if (item.command) {
      result.command = asCommand(item.command);
    }

    if (item instanceof protocolCodeLens_1["default"]) {
      if (item.data) {
        result.data = item.data;
      }
    }

    return result;
  }

  function asFormattingOptions(item) {
    return {
      tabSize: item.tabSize,
      insertSpaces: item.insertSpaces
    };
  }

  function asDocumentSymbolParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }

  function asCodeLensParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }

  function asDocumentLink(item) {
    var result = proto.DocumentLink.create(asRange(item.range));

    if (item.target) {
      result.target = asUri(item.target);
    }

    if (item.tooltip !== undefined) {
      result.tooltip = item.tooltip;
    }

    var protocolItem = item instanceof protocolDocumentLink_1["default"] ? item : undefined;

    if (protocolItem && protocolItem.data) {
      result.data = protocolItem.data;
    }

    return result;
  }

  function asDocumentLinkParams(textDocument) {
    return {
      textDocument: asTextDocumentIdentifier(textDocument)
    };
  }

  return {
    asUri: asUri,
    asTextDocumentIdentifier: asTextDocumentIdentifier,
    asVersionedTextDocumentIdentifier: asVersionedTextDocumentIdentifier,
    asOpenTextDocumentParams: asOpenTextDocumentParams,
    asChangeTextDocumentParams: asChangeTextDocumentParams,
    asCloseTextDocumentParams: asCloseTextDocumentParams,
    asSaveTextDocumentParams: asSaveTextDocumentParams,
    asWillSaveTextDocumentParams: asWillSaveTextDocumentParams,
    asTextDocumentPositionParams: asTextDocumentPositionParams,
    asCompletionParams: asCompletionParams,
    asSignatureHelpParams: asSignatureHelpParams,
    asWorkerPosition: asWorkerPosition,
    asRange: asRange,
    asPosition: asPosition,
    asPositions: asPositions,
    asLocation: asLocation,
    asDiagnosticSeverity: asDiagnosticSeverity,
    asDiagnosticTag: asDiagnosticTag,
    asDiagnostic: asDiagnostic,
    asDiagnostics: asDiagnostics,
    asCompletionItem: asCompletionItem,
    asTextEdit: asTextEdit,
    asSymbolKind: asSymbolKind,
    asSymbolTag: asSymbolTag,
    asSymbolTags: asSymbolTags,
    asReferenceParams: asReferenceParams,
    asCodeActionContext: asCodeActionContext,
    asCommand: asCommand,
    asCodeLens: asCodeLens,
    asFormattingOptions: asFormattingOptions,
    asDocumentSymbolParams: asDocumentSymbolParams,
    asCodeLensParams: asCodeLensParams,
    asDocumentLink: asDocumentLink,
    asDocumentLinkParams: asDocumentLinkParams
  };
}

exports.createConverter = createConverter;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/colorProvider.js":
/*!************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/colorProvider.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var ColorProviderFeature = /*#__PURE__*/function (_client_1$TextDocumen) {
  _inherits(ColorProviderFeature, _client_1$TextDocumen);

  var _super = _createSuper(ColorProviderFeature);

  function ColorProviderFeature(client) {
    _classCallCheck(this, ColorProviderFeature);

    return _super.call(this, client, vscode_languageserver_protocol_1.DocumentColorRequest.type);
  }

  _createClass(ColorProviderFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'colorProvider').dynamicRegistration = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.colorProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this = this;

      var provider = {
        provideColorPresentations: function provideColorPresentations(color, context, token) {
          var client = _this._client;

          var provideColorPresentations = function provideColorPresentations(color, context, token) {
            var requestParams = {
              color: color,
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(context.document),
              range: client.code2ProtocolConverter.asRange(context.range)
            };
            return client.sendRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, requestParams, token).then(_this.asColorPresentations.bind(_this), function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, error);
              return Promise.resolve(null);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideColorPresentations ? middleware.provideColorPresentations(color, context, token, provideColorPresentations) : provideColorPresentations(color, context, token);
        },
        provideDocumentColors: function provideDocumentColors(document, token) {
          var client = _this._client;

          var provideDocumentColors = function provideDocumentColors(document, token) {
            var requestParams = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document)
            };
            return client.sendRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, requestParams, token).then(_this.asColorInformations.bind(_this), function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, error);
              return Promise.resolve(null);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideDocumentColors ? middleware.provideDocumentColors(document, token, provideDocumentColors) : provideDocumentColors(document, token);
        }
      };
      return [vscode_1.languages.registerColorProvider(options.documentSelector, provider), provider];
    }
  }, {
    key: "asColor",
    value: function asColor(color) {
      return new vscode_1.Color(color.red, color.green, color.blue, color.alpha);
    }
  }, {
    key: "asColorInformations",
    value: function asColorInformations(colorInformation) {
      var _this2 = this;

      if (Array.isArray(colorInformation)) {
        return colorInformation.map(function (ci) {
          return new vscode_1.ColorInformation(_this2._client.protocol2CodeConverter.asRange(ci.range), _this2.asColor(ci.color));
        });
      }

      return [];
    }
  }, {
    key: "asColorPresentations",
    value: function asColorPresentations(colorPresentations) {
      var _this3 = this;

      if (Array.isArray(colorPresentations)) {
        return colorPresentations.map(function (cp) {
          var presentation = new vscode_1.ColorPresentation(cp.label);
          presentation.additionalTextEdits = _this3._client.protocol2CodeConverter.asTextEdits(cp.additionalTextEdits);
          presentation.textEdit = _this3._client.protocol2CodeConverter.asTextEdit(cp.textEdit);
          return presentation;
        });
      }

      return [];
    }
  }]);

  return ColorProviderFeature;
}(client_1.TextDocumentFeature);

exports.ColorProviderFeature = ColorProviderFeature;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/configuration.js":
/*!************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/configuration.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var ConfigurationFeature = /*#__PURE__*/function () {
  function ConfigurationFeature(_client) {
    _classCallCheck(this, ConfigurationFeature);

    this._client = _client;
  }

  _createClass(ConfigurationFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      capabilities.workspace = capabilities.workspace || {};
      capabilities.workspace.configuration = true;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      var client = this._client;
      client.onRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, function (params, token) {
        var configuration = function configuration(params) {
          var result = [];

          var _iterator = _createForOfIteratorHelper(params.items),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              var resource = item.scopeUri !== void 0 && item.scopeUri !== null ? _this._client.protocol2CodeConverter.asUri(item.scopeUri) : undefined;
              result.push(_this.getConfiguration(resource, item.section !== null ? item.section : undefined));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return result;
        };

        var middleware = client.clientOptions.middleware.workspace;
        return middleware && middleware.configuration ? middleware.configuration(params, token, configuration) : configuration(params, token);
      });
    }
  }, {
    key: "getConfiguration",
    value: function getConfiguration(resource, section) {
      var result = null;

      if (section) {
        var index = section.lastIndexOf('.');

        if (index === -1) {
          result = vscode_1.workspace.getConfiguration(undefined, resource).get(section);
        } else {
          var config = vscode_1.workspace.getConfiguration(section.substr(0, index), resource);

          if (config) {
            result = config.get(section.substr(index + 1));
          }
        }
      } else {
        var _config = vscode_1.workspace.getConfiguration(undefined, resource);

        result = {};

        for (var _i = 0, _Object$keys = Object.keys(_config); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (_config.has(key)) {
            result[key] = _config.get(key);
          }
        }
      }

      if (!result) {
        return null;
      }

      return result;
    }
  }]);

  return ConfigurationFeature;
}();

exports.ConfigurationFeature = ConfigurationFeature;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/declaration.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/declaration.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var DeclarationFeature = /*#__PURE__*/function (_client_1$TextDocumen) {
  _inherits(DeclarationFeature, _client_1$TextDocumen);

  var _super = _createSuper(DeclarationFeature);

  function DeclarationFeature(client) {
    _classCallCheck(this, DeclarationFeature);

    return _super.call(this, client, vscode_languageserver_protocol_1.DeclarationRequest.type);
  }

  _createClass(DeclarationFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var declarationSupport = ensure(ensure(capabilites, 'textDocument'), 'declaration');
      declarationSupport.dynamicRegistration = true;
      declarationSupport.linkSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.declarationProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this = this;

      var provider = {
        provideDeclaration: function provideDeclaration(document, position, token) {
          var client = _this._client;

          var provideDeclaration = function provideDeclaration(document, position, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDeclarationResult, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, error);
              return Promise.resolve(null);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideDeclaration ? middleware.provideDeclaration(document, position, token, provideDeclaration) : provideDeclaration(document, position, token);
        }
      };
      return [vscode_1.languages.registerDeclarationProvider(options.documentSelector, provider), provider];
    }
  }]);

  return DeclarationFeature;
}(client_1.TextDocumentFeature);

exports.DeclarationFeature = DeclarationFeature;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/foldingRange.js":
/*!***********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/foldingRange.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var FoldingRangeFeature = /*#__PURE__*/function (_client_1$TextDocumen) {
  _inherits(FoldingRangeFeature, _client_1$TextDocumen);

  var _super = _createSuper(FoldingRangeFeature);

  function FoldingRangeFeature(client) {
    _classCallCheck(this, FoldingRangeFeature);

    return _super.call(this, client, vscode_languageserver_protocol_1.FoldingRangeRequest.type);
  }

  _createClass(FoldingRangeFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var capability = ensure(ensure(capabilites, 'textDocument'), 'foldingRange');
      capability.dynamicRegistration = true;
      capability.rangeLimit = 5000;
      capability.lineFoldingOnly = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.foldingRangeProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this = this;

      var provider = {
        provideFoldingRanges: function provideFoldingRanges(document, context, token) {
          var client = _this._client;

          var provideFoldingRanges = function provideFoldingRanges(document, _, token) {
            var requestParams = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document)
            };
            return client.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, requestParams, token).then(_this.asFoldingRanges.bind(_this), function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, error);
              return Promise.resolve(null);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideFoldingRanges ? middleware.provideFoldingRanges(document, context, token, provideFoldingRanges) : provideFoldingRanges(document, context, token);
        }
      };
      return [vscode_1.languages.registerFoldingRangeProvider(options.documentSelector, provider), provider];
    }
  }, {
    key: "asFoldingRangeKind",
    value: function asFoldingRangeKind(kind) {
      if (kind) {
        switch (kind) {
          case vscode_languageserver_protocol_1.FoldingRangeKind.Comment:
            return vscode_1.FoldingRangeKind.Comment;

          case vscode_languageserver_protocol_1.FoldingRangeKind.Imports:
            return vscode_1.FoldingRangeKind.Imports;

          case vscode_languageserver_protocol_1.FoldingRangeKind.Region:
            return vscode_1.FoldingRangeKind.Region;
        }
      }

      return void 0;
    }
  }, {
    key: "asFoldingRanges",
    value: function asFoldingRanges(foldingRanges) {
      var _this2 = this;

      if (Array.isArray(foldingRanges)) {
        return foldingRanges.map(function (r) {
          return new vscode_1.FoldingRange(r.startLine, r.endLine, _this2.asFoldingRangeKind(r.kind));
        });
      }

      return [];
    }
  }]);

  return FoldingRangeFeature;
}(client_1.TextDocumentFeature);

exports.FoldingRangeFeature = FoldingRangeFeature;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/implementation.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/implementation.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var ImplementationFeature = /*#__PURE__*/function (_client_1$TextDocumen) {
  _inherits(ImplementationFeature, _client_1$TextDocumen);

  var _super = _createSuper(ImplementationFeature);

  function ImplementationFeature(client) {
    _classCallCheck(this, ImplementationFeature);

    return _super.call(this, client, vscode_languageserver_protocol_1.ImplementationRequest.type);
  }

  _createClass(ImplementationFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      var implementationSupport = ensure(ensure(capabilites, 'textDocument'), 'implementation');
      implementationSupport.dynamicRegistration = true;
      implementationSupport.linkSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.implementationProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this = this;

      var provider = {
        provideImplementation: function provideImplementation(document, position, token) {
          var client = _this._client;

          var provideImplementation = function provideImplementation(document, position, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDefinitionResult, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, error);
              return Promise.resolve(null);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideImplementation ? middleware.provideImplementation(document, position, token, provideImplementation) : provideImplementation(document, position, token);
        }
      };
      return [vscode_1.languages.registerImplementationProvider(options.documentSelector, provider), provider];
    }
  }]);

  return ImplementationFeature;
}(client_1.TextDocumentFeature);

exports.ImplementationFeature = ImplementationFeature;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/progressPart.js":
/*!***********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/progressPart.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! ./utils/is */ "../../node_modules/vscode-languageclient/lib/utils/is.js");

var ProgressPart = /*#__PURE__*/function () {
  function ProgressPart(_client, _token) {
    var _this = this;

    _classCallCheck(this, ProgressPart);

    this._client = _client;
    this._token = _token;
    this._reported = 0;
    this._disposable = this._client.onProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, function (value) {
      switch (value.kind) {
        case 'begin':
          _this.begin(value);

          break;

        case 'report':
          _this.report(value);

          break;

        case 'end':
          _this.done();

          break;
      }
    });
  }

  _createClass(ProgressPart, [{
    key: "begin",
    value: function begin(params) {
      var _this2 = this;

      var location = params.cancellable ? vscode_1.ProgressLocation.Notification : vscode_1.ProgressLocation.Window;
      vscode_1.window.withProgress({
        location: location,
        cancellable: params.cancellable,
        title: params.title
      }, /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(progress, cancellationToken) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2._progress = progress;
                  _this2._infinite = params.percentage === undefined;
                  _this2._cancellationToken = cancellationToken;

                  _this2._cancellationToken.onCancellationRequested(function () {
                    _this2._client.sendNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, {
                      token: _this2._token
                    });
                  });

                  _this2.report(params);

                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this2._resolve = resolve;
                    _this2._reject = reject;
                  }));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "report",
    value: function report(params) {
      if (this._infinite && Is.string(params.message)) {
        this._progress.report({
          message: params.message
        });
      } else if (Is.number(params.percentage)) {
        var percentage = Math.max(0, Math.min(params.percentage, 100));
        var delta = Math.max(0, percentage - this._reported);

        this._progress.report({
          message: params.message,
          increment: delta
        });

        this._reported += delta;
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this._disposable) {
        this._disposable.dispose();

        this._disposable = undefined;
      }

      if (this._reject) {
        this._reject();

        this._resolve = undefined;
        this._reject = undefined;
      }
    }
  }, {
    key: "done",
    value: function done() {
      if (this._disposable) {
        this._disposable.dispose();

        this._disposable = undefined;
      }

      if (this._resolve) {
        this._resolve();

        this._resolve = undefined;
        this._reject = undefined;
      }
    }
  }]);

  return ProgressPart;
}();

exports.ProgressPart = ProgressPart;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/protocolCodeLens.js":
/*!***************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/protocolCodeLens.js ***!
  \***************************************************************************************************************************************/
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

var code = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var ProtocolCodeLens = /*#__PURE__*/function (_code$CodeLens) {
  _inherits(ProtocolCodeLens, _code$CodeLens);

  var _super = _createSuper(ProtocolCodeLens);

  function ProtocolCodeLens(range) {
    _classCallCheck(this, ProtocolCodeLens);

    return _super.call(this, range);
  }

  return ProtocolCodeLens;
}(code.CodeLens);

exports["default"] = ProtocolCodeLens;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/protocolCompletionItem.js":
/*!*********************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/protocolCompletionItem.js ***!
  \*********************************************************************************************************************************************/
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

var code = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var ProtocolCompletionItem = /*#__PURE__*/function (_code$CompletionItem) {
  _inherits(ProtocolCompletionItem, _code$CompletionItem);

  var _super = _createSuper(ProtocolCompletionItem);

  function ProtocolCompletionItem(label) {
    _classCallCheck(this, ProtocolCompletionItem);

    return _super.call(this, label);
  }

  return ProtocolCompletionItem;
}(code.CompletionItem);

exports["default"] = ProtocolCompletionItem;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/protocolConverter.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/protocolConverter.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var code = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var ls = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var Is = __webpack_require__(/*! ./utils/is */ "../../node_modules/vscode-languageclient/lib/utils/is.js");

var protocolCompletionItem_1 = __webpack_require__(/*! ./protocolCompletionItem */ "../../node_modules/vscode-languageclient/lib/protocolCompletionItem.js");

var protocolCodeLens_1 = __webpack_require__(/*! ./protocolCodeLens */ "../../node_modules/vscode-languageclient/lib/protocolCodeLens.js");

var protocolDocumentLink_1 = __webpack_require__(/*! ./protocolDocumentLink */ "../../node_modules/vscode-languageclient/lib/protocolDocumentLink.js");

var CodeBlock;

(function (CodeBlock) {
  function is(value) {
    var candidate = value;
    return candidate && Is.string(candidate.language) && Is.string(candidate.value);
  }

  CodeBlock.is = is;
})(CodeBlock || (CodeBlock = {}));

function createConverter(uriConverter) {
  var nullConverter = function nullConverter(value) {
    return code.Uri.parse(value);
  };

  var _uriConverter = uriConverter || nullConverter;

  function asUri(value) {
    return _uriConverter(value);
  }

  function asDiagnostics(diagnostics) {
    return diagnostics.map(asDiagnostic);
  }

  function asDiagnostic(diagnostic) {
    var result = new code.Diagnostic(asRange(diagnostic.range), diagnostic.message, asDiagnosticSeverity(diagnostic.severity));

    if (Is.number(diagnostic.code) || Is.string(diagnostic.code)) {
      result.code = diagnostic.code;
    }

    if (diagnostic.source) {
      result.source = diagnostic.source;
    }

    if (diagnostic.relatedInformation) {
      result.relatedInformation = asRelatedInformation(diagnostic.relatedInformation);
    }

    if (Array.isArray(diagnostic.tags)) {
      result.tags = asDiagnosticTags(diagnostic.tags);
    }

    return result;
  }

  function asRelatedInformation(relatedInformation) {
    return relatedInformation.map(asDiagnosticRelatedInformation);
  }

  function asDiagnosticRelatedInformation(information) {
    return new code.DiagnosticRelatedInformation(asLocation(information.location), information.message);
  }

  function asDiagnosticTags(tags) {
    if (!tags) {
      return undefined;
    }

    var result = [];

    var _iterator = _createForOfIteratorHelper(tags),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tag = _step.value;
        var converted = asDiagnosticTag(tag);

        if (converted !== undefined) {
          result.push(converted);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return result.length > 0 ? result : undefined;
  }

  function asDiagnosticTag(tag) {
    switch (tag) {
      case ls.DiagnosticTag.Unnecessary:
        return code.DiagnosticTag.Unnecessary;

      case ls.DiagnosticTag.Deprecated:
        return code.DiagnosticTag.Deprecated;

      default:
        return undefined;
    }
  }

  function asPosition(value) {
    if (!value) {
      return undefined;
    }

    return new code.Position(value.line, value.character);
  }

  function asRange(value) {
    if (!value) {
      return undefined;
    }

    return new code.Range(asPosition(value.start), asPosition(value.end));
  }

  function asRanges(value) {
    return value.map(function (value) {
      return asRange(value);
    });
  }

  function asDiagnosticSeverity(value) {
    if (value === undefined || value === null) {
      return code.DiagnosticSeverity.Error;
    }

    switch (value) {
      case ls.DiagnosticSeverity.Error:
        return code.DiagnosticSeverity.Error;

      case ls.DiagnosticSeverity.Warning:
        return code.DiagnosticSeverity.Warning;

      case ls.DiagnosticSeverity.Information:
        return code.DiagnosticSeverity.Information;

      case ls.DiagnosticSeverity.Hint:
        return code.DiagnosticSeverity.Hint;
    }

    return code.DiagnosticSeverity.Error;
  }

  function asHoverContent(value) {
    if (Is.string(value)) {
      return new code.MarkdownString(value);
    } else if (CodeBlock.is(value)) {
      var result = new code.MarkdownString();
      return result.appendCodeblock(value.value, value.language);
    } else if (Array.isArray(value)) {
      var _result = [];

      var _iterator2 = _createForOfIteratorHelper(value),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          var item = new code.MarkdownString();

          if (CodeBlock.is(element)) {
            item.appendCodeblock(element.value, element.language);
          } else {
            item.appendMarkdown(element);
          }

          _result.push(item);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return _result;
    } else {
      var _result2;

      switch (value.kind) {
        case ls.MarkupKind.Markdown:
          return new code.MarkdownString(value.value);

        case ls.MarkupKind.PlainText:
          _result2 = new code.MarkdownString();

          _result2.appendText(value.value);

          return _result2;

        default:
          _result2 = new code.MarkdownString();

          _result2.appendText("Unsupported Markup content received. Kind is: ".concat(value.kind));

          return _result2;
      }
    }
  }

  function asDocumentation(value) {
    if (Is.string(value)) {
      return value;
    } else {
      switch (value.kind) {
        case ls.MarkupKind.Markdown:
          return new code.MarkdownString(value.value);

        case ls.MarkupKind.PlainText:
          return value.value;

        default:
          return "Unsupported Markup content received. Kind is: ".concat(value.kind);
      }
    }
  }

  function asHover(hover) {
    if (!hover) {
      return undefined;
    }

    return new code.Hover(asHoverContent(hover.contents), asRange(hover.range));
  }

  function asCompletionResult(result) {
    if (!result) {
      return undefined;
    }

    if (Array.isArray(result)) {
      var items = result;
      return items.map(asCompletionItem);
    }

    var list = result;
    return new code.CompletionList(list.items.map(asCompletionItem), list.isIncomplete);
  }

  function asCompletionItemKind(value) {
    // Protocol item kind is 1 based, codes item kind is zero based.
    if (ls.CompletionItemKind.Text <= value && value <= ls.CompletionItemKind.TypeParameter) {
      return [value - 1, undefined];
    }

    return [code.CompletionItemKind.Text, value];
  }

  function asCompletionItemTag(tag) {
    switch (tag) {
      case ls.CompletionItemTag.Deprecated:
        return code.CompletionItemTag.Deprecated;
    }

    return undefined;
  }

  function asCompletionItemTags(tags) {
    if (tags === undefined || tags === null) {
      return [];
    }

    var result = [];

    var _iterator3 = _createForOfIteratorHelper(tags),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var tag = _step3.value;
        var converted = asCompletionItemTag(tag);

        if (converted !== undefined) {
          result.push(converted);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return result;
  }

  function asCompletionItem(item) {
    var tags = asCompletionItemTags(item.tags);
    var result = new protocolCompletionItem_1["default"](item.label);

    if (item.detail) {
      result.detail = item.detail;
    }

    if (item.documentation) {
      result.documentation = asDocumentation(item.documentation);
      result.documentationFormat = Is.string(item.documentation) ? '$string' : item.documentation.kind;
    }

    if (item.filterText) {
      result.filterText = item.filterText;
    }

    var insertText = asCompletionInsertText(item);

    if (insertText) {
      result.insertText = insertText.text;
      result.range = insertText.range;
      result.fromEdit = insertText.fromEdit;
    }

    if (Is.number(item.kind)) {
      var _asCompletionItemKind = asCompletionItemKind(item.kind),
          _asCompletionItemKind2 = _slicedToArray(_asCompletionItemKind, 2),
          itemKind = _asCompletionItemKind2[0],
          original = _asCompletionItemKind2[1];

      result.kind = itemKind;

      if (original) {
        result.originalItemKind = original;
      }
    }

    if (item.sortText) {
      result.sortText = item.sortText;
    }

    if (item.additionalTextEdits) {
      result.additionalTextEdits = asTextEdits(item.additionalTextEdits);
    }

    if (Is.stringArray(item.commitCharacters)) {
      result.commitCharacters = item.commitCharacters.slice();
    }

    if (item.command) {
      result.command = asCommand(item.command);
    }

    if (item.deprecated === true || item.deprecated === false) {
      result.deprecated = item.deprecated;

      if (item.deprecated === true) {
        tags.push(code.CompletionItemTag.Deprecated);
      }
    }

    if (item.preselect === true || item.preselect === false) {
      result.preselect = item.preselect;
    }

    if (item.data !== undefined) {
      result.data = item.data;
    }

    if (tags.length > 0) {
      result.tags = tags;
    }

    return result;
  }

  function asCompletionInsertText(item) {
    if (item.textEdit) {
      if (item.insertTextFormat === ls.InsertTextFormat.Snippet) {
        return {
          text: new code.SnippetString(item.textEdit.newText),
          range: asRange(item.textEdit.range),
          fromEdit: true
        };
      } else {
        return {
          text: item.textEdit.newText,
          range: asRange(item.textEdit.range),
          fromEdit: true
        };
      }
    } else if (item.insertText) {
      if (item.insertTextFormat === ls.InsertTextFormat.Snippet) {
        return {
          text: new code.SnippetString(item.insertText),
          fromEdit: false
        };
      } else {
        return {
          text: item.insertText,
          fromEdit: false
        };
      }
    } else {
      return undefined;
    }
  }

  function asTextEdit(edit) {
    if (!edit) {
      return undefined;
    }

    return new code.TextEdit(asRange(edit.range), edit.newText);
  }

  function asTextEdits(items) {
    if (!items) {
      return undefined;
    }

    return items.map(asTextEdit);
  }

  function asSignatureHelp(item) {
    if (!item) {
      return undefined;
    }

    var result = new code.SignatureHelp();

    if (Is.number(item.activeSignature)) {
      result.activeSignature = item.activeSignature;
    } else {
      // activeSignature was optional in the past
      result.activeSignature = 0;
    }

    if (Is.number(item.activeParameter)) {
      result.activeParameter = item.activeParameter;
    } else {
      // activeParameter was optional in the past
      result.activeParameter = 0;
    }

    if (item.signatures) {
      result.signatures = asSignatureInformations(item.signatures);
    }

    return result;
  }

  function asSignatureInformations(items) {
    return items.map(asSignatureInformation);
  }

  function asSignatureInformation(item) {
    var result = new code.SignatureInformation(item.label);

    if (item.documentation) {
      result.documentation = asDocumentation(item.documentation);
    }

    if (item.parameters) {
      result.parameters = asParameterInformations(item.parameters);
    }

    return result;
  }

  function asParameterInformations(item) {
    return item.map(asParameterInformation);
  }

  function asParameterInformation(item) {
    var result = new code.ParameterInformation(item.label);

    if (item.documentation) {
      result.documentation = asDocumentation(item.documentation);
    }

    return result;
  }

  function asLocation(item) {
    if (!item) {
      return undefined;
    }

    return new code.Location(_uriConverter(item.uri), asRange(item.range));
  }

  function asDeclarationResult(item) {
    if (!item) {
      return undefined;
    }

    return asLocationResult(item);
  }

  function asDefinitionResult(item) {
    if (!item) {
      return undefined;
    }

    return asLocationResult(item);
  }

  function asLocationLink(item) {
    if (!item) {
      return undefined;
    }

    var result = {
      targetUri: _uriConverter(item.targetUri),
      targetRange: asRange(item.targetSelectionRange),
      originSelectionRange: asRange(item.originSelectionRange),
      targetSelectionRange: asRange(item.targetSelectionRange)
    };

    if (!result.targetSelectionRange) {
      throw new Error("targetSelectionRange must not be undefined or null");
    }

    return result;
  }

  function asLocationResult(item) {
    if (!item) {
      return undefined;
    }

    if (Is.array(item)) {
      if (item.length === 0) {
        return [];
      } else if (ls.LocationLink.is(item[0])) {
        var links = item;
        return links.map(function (link) {
          return asLocationLink(link);
        });
      } else {
        var locations = item;
        return locations.map(function (location) {
          return asLocation(location);
        });
      }
    } else if (ls.LocationLink.is(item)) {
      return [asLocationLink(item)];
    } else {
      return asLocation(item);
    }
  }

  function asReferences(values) {
    if (!values) {
      return undefined;
    }

    return values.map(function (location) {
      return asLocation(location);
    });
  }

  function asDocumentHighlights(values) {
    if (!values) {
      return undefined;
    }

    return values.map(asDocumentHighlight);
  }

  function asDocumentHighlight(item) {
    var result = new code.DocumentHighlight(asRange(item.range));

    if (Is.number(item.kind)) {
      result.kind = asDocumentHighlightKind(item.kind);
    }

    return result;
  }

  function asDocumentHighlightKind(item) {
    switch (item) {
      case ls.DocumentHighlightKind.Text:
        return code.DocumentHighlightKind.Text;

      case ls.DocumentHighlightKind.Read:
        return code.DocumentHighlightKind.Read;

      case ls.DocumentHighlightKind.Write:
        return code.DocumentHighlightKind.Write;
    }

    return code.DocumentHighlightKind.Text;
  }

  function asSymbolInformations(values, uri) {
    if (!values) {
      return undefined;
    }

    return values.map(function (information) {
      return asSymbolInformation(information, uri);
    });
  }

  function asSymbolKind(item) {
    if (item <= ls.SymbolKind.TypeParameter) {
      // Symbol kind is one based in the protocol and zero based in code.
      return item - 1;
    }

    return code.SymbolKind.Property;
  }

  function asSymbolTag(value) {
    return value;
  }

  function asSymbolTags(items) {
    if (items === undefined || items === null) {
      return undefined;
    }

    return items.map(asSymbolTag);
  }

  function asSymbolInformation(item, uri) {
    // Symbol kind is one based in the protocol and zero based in code.
    var result = new code.SymbolInformation(item.name, asSymbolKind(item.kind), asRange(item.location.range), item.location.uri ? _uriConverter(item.location.uri) : uri);

    if (item.containerName) {
      result.containerName = item.containerName;
    }

    return result;
  }

  function asDocumentSymbols(values) {
    if (values === undefined || values === null) {
      return undefined;
    }

    return values.map(asDocumentSymbol);
  }

  function asDocumentSymbol(value) {
    var result = new code.DocumentSymbol(value.name, value.detail || '', asSymbolKind(value.kind), asRange(value.range), asRange(value.selectionRange));

    if (value.children !== undefined && value.children.length > 0) {
      var children = [];

      var _iterator4 = _createForOfIteratorHelper(value.children),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var child = _step4.value;
          children.push(asDocumentSymbol(child));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      result.children = children;
    }

    return result;
  }

  function asCommand(item) {
    var result = {
      title: item.title,
      command: item.command
    };

    if (item.arguments) {
      result.arguments = item.arguments;
    }

    return result;
  }

  function asCommands(items) {
    if (!items) {
      return undefined;
    }

    return items.map(asCommand);
  }

  var kindMapping = new Map();
  kindMapping.set(ls.CodeActionKind.Empty, code.CodeActionKind.Empty);
  kindMapping.set(ls.CodeActionKind.QuickFix, code.CodeActionKind.QuickFix);
  kindMapping.set(ls.CodeActionKind.Refactor, code.CodeActionKind.Refactor);
  kindMapping.set(ls.CodeActionKind.RefactorExtract, code.CodeActionKind.RefactorExtract);
  kindMapping.set(ls.CodeActionKind.RefactorInline, code.CodeActionKind.RefactorInline);
  kindMapping.set(ls.CodeActionKind.RefactorRewrite, code.CodeActionKind.RefactorRewrite);
  kindMapping.set(ls.CodeActionKind.Source, code.CodeActionKind.Source);
  kindMapping.set(ls.CodeActionKind.SourceOrganizeImports, code.CodeActionKind.SourceOrganizeImports);

  function asCodeActionKind(item) {
    if (item === undefined || item === null) {
      return undefined;
    }

    var result = kindMapping.get(item);

    if (result) {
      return result;
    }

    var parts = item.split('.');
    result = code.CodeActionKind.Empty;

    var _iterator5 = _createForOfIteratorHelper(parts),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var part = _step5.value;
        result = result.append(part);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return result;
  }

  function asCodeActionKinds(items) {
    if (items === undefined || items === null) {
      return undefined;
    }

    return items.map(function (kind) {
      return asCodeActionKind(kind);
    });
  }

  function asCodeAction(item) {
    if (item === undefined || item === null) {
      return undefined;
    }

    var result = new code.CodeAction(item.title);

    if (item.kind !== undefined) {
      result.kind = asCodeActionKind(item.kind);
    }

    if (item.diagnostics) {
      result.diagnostics = asDiagnostics(item.diagnostics);
    }

    if (item.edit) {
      result.edit = asWorkspaceEdit(item.edit);
    }

    if (item.command) {
      result.command = asCommand(item.command);
    }

    if (item.isPreferred !== undefined) {
      result.isPreferred = item.isPreferred;
    }

    return result;
  }

  function asCodeLens(item) {
    if (!item) {
      return undefined;
    }

    var result = new protocolCodeLens_1["default"](asRange(item.range));

    if (item.command) {
      result.command = asCommand(item.command);
    }

    if (item.data !== undefined && item.data !== null) {
      result.data = item.data;
    }

    return result;
  }

  function asCodeLenses(items) {
    if (!items) {
      return undefined;
    }

    return items.map(function (codeLens) {
      return asCodeLens(codeLens);
    });
  }

  function asWorkspaceEdit(item) {
    if (!item) {
      return undefined;
    }

    var result = new code.WorkspaceEdit();

    if (item.documentChanges) {
      item.documentChanges.forEach(function (change) {
        if (ls.CreateFile.is(change)) {
          result.createFile(_uriConverter(change.uri), change.options);
        } else if (ls.RenameFile.is(change)) {
          result.renameFile(_uriConverter(change.oldUri), _uriConverter(change.newUri), change.options);
        } else if (ls.DeleteFile.is(change)) {
          result.deleteFile(_uriConverter(change.uri), change.options);
        } else if (ls.TextDocumentEdit.is(change)) {
          result.set(_uriConverter(change.textDocument.uri), asTextEdits(change.edits));
        } else {
          console.error("Unknown workspace edit change received:\n".concat(JSON.stringify(change, undefined, 4)));
        }
      });
    } else if (item.changes) {
      Object.keys(item.changes).forEach(function (key) {
        result.set(_uriConverter(key), asTextEdits(item.changes[key]));
      });
    }

    return result;
  }

  function asDocumentLink(item) {
    var range = asRange(item.range);
    var target = item.target ? asUri(item.target) : undefined; // target must be optional in DocumentLink

    var link = new protocolDocumentLink_1["default"](range, target);

    if (item.tooltip !== undefined) {
      link.tooltip = item.tooltip;
    }

    if (item.data !== undefined && item.data !== null) {
      link.data = item.data;
    }

    return link;
  }

  function asDocumentLinks(items) {
    if (!items) {
      return undefined;
    }

    return items.map(asDocumentLink);
  }

  function asColor(color) {
    return new code.Color(color.red, color.green, color.blue, color.alpha);
  }

  function asColorInformation(ci) {
    return new code.ColorInformation(asRange(ci.range), asColor(ci.color));
  }

  function asColorInformations(colorInformation) {
    if (Array.isArray(colorInformation)) {
      return colorInformation.map(asColorInformation);
    }

    return undefined;
  }

  function asColorPresentation(cp) {
    var presentation = new code.ColorPresentation(cp.label);
    presentation.additionalTextEdits = asTextEdits(cp.additionalTextEdits);

    if (cp.textEdit) {
      presentation.textEdit = asTextEdit(cp.textEdit);
    }

    return presentation;
  }

  function asColorPresentations(colorPresentations) {
    if (Array.isArray(colorPresentations)) {
      return colorPresentations.map(asColorPresentation);
    }

    return undefined;
  }

  function asFoldingRangeKind(kind) {
    if (kind) {
      switch (kind) {
        case ls.FoldingRangeKind.Comment:
          return code.FoldingRangeKind.Comment;

        case ls.FoldingRangeKind.Imports:
          return code.FoldingRangeKind.Imports;

        case ls.FoldingRangeKind.Region:
          return code.FoldingRangeKind.Region;
      }
    }

    return undefined;
  }

  function asFoldingRange(r) {
    return new code.FoldingRange(r.startLine, r.endLine, asFoldingRangeKind(r.kind));
  }

  function asFoldingRanges(foldingRanges) {
    if (Array.isArray(foldingRanges)) {
      return foldingRanges.map(asFoldingRange);
    }

    return undefined;
  }

  function asSelectionRange(selectionRange) {
    return new code.SelectionRange(asRange(selectionRange.range), selectionRange.parent ? asSelectionRange(selectionRange.parent) : undefined);
  }

  function asSelectionRanges(selectionRanges) {
    if (!Array.isArray(selectionRanges)) {
      return [];
    }

    var result = [];

    var _iterator6 = _createForOfIteratorHelper(selectionRanges),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var range = _step6.value;
        result.push(asSelectionRange(range));
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    return result;
  }

  return {
    asUri: asUri,
    asDiagnostics: asDiagnostics,
    asDiagnostic: asDiagnostic,
    asRange: asRange,
    asRanges: asRanges,
    asPosition: asPosition,
    asDiagnosticSeverity: asDiagnosticSeverity,
    asDiagnosticTag: asDiagnosticTag,
    asHover: asHover,
    asCompletionResult: asCompletionResult,
    asCompletionItem: asCompletionItem,
    asTextEdit: asTextEdit,
    asTextEdits: asTextEdits,
    asSignatureHelp: asSignatureHelp,
    asSignatureInformations: asSignatureInformations,
    asSignatureInformation: asSignatureInformation,
    asParameterInformations: asParameterInformations,
    asParameterInformation: asParameterInformation,
    asDeclarationResult: asDeclarationResult,
    asDefinitionResult: asDefinitionResult,
    asLocation: asLocation,
    asReferences: asReferences,
    asDocumentHighlights: asDocumentHighlights,
    asDocumentHighlight: asDocumentHighlight,
    asDocumentHighlightKind: asDocumentHighlightKind,
    asSymbolKind: asSymbolKind,
    asSymbolTag: asSymbolTag,
    asSymbolTags: asSymbolTags,
    asSymbolInformations: asSymbolInformations,
    asSymbolInformation: asSymbolInformation,
    asDocumentSymbols: asDocumentSymbols,
    asDocumentSymbol: asDocumentSymbol,
    asCommand: asCommand,
    asCommands: asCommands,
    asCodeAction: asCodeAction,
    asCodeActionKind: asCodeActionKind,
    asCodeActionKinds: asCodeActionKinds,
    asCodeLens: asCodeLens,
    asCodeLenses: asCodeLenses,
    asWorkspaceEdit: asWorkspaceEdit,
    asDocumentLink: asDocumentLink,
    asDocumentLinks: asDocumentLinks,
    asFoldingRangeKind: asFoldingRangeKind,
    asFoldingRange: asFoldingRange,
    asFoldingRanges: asFoldingRanges,
    asColor: asColor,
    asColorInformation: asColorInformation,
    asColorInformations: asColorInformations,
    asColorPresentation: asColorPresentation,
    asColorPresentations: asColorPresentations,
    asSelectionRange: asSelectionRange,
    asSelectionRanges: asSelectionRanges
  };
}

exports.createConverter = createConverter;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/protocolDocumentLink.js":
/*!*******************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/protocolDocumentLink.js ***!
  \*******************************************************************************************************************************************/
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

var code = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var ProtocolDocumentLink = /*#__PURE__*/function (_code$DocumentLink) {
  _inherits(ProtocolDocumentLink, _code$DocumentLink);

  var _super = _createSuper(ProtocolDocumentLink);

  function ProtocolDocumentLink(range, target) {
    _classCallCheck(this, ProtocolDocumentLink);

    return _super.call(this, range, target);
  }

  return ProtocolDocumentLink;
}(code.DocumentLink);

exports["default"] = ProtocolDocumentLink;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/typeDefinition.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/typeDefinition.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vscode_1 = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

var client_1 = __webpack_require__(/*! ./client */ "../../node_modules/vscode-languageclient/lib/client.js");

function ensure(target, key) {
  if (target[key] === void 0) {
    target[key] = {};
  }

  return target[key];
}

var TypeDefinitionFeature = /*#__PURE__*/function (_client_1$TextDocumen) {
  _inherits(TypeDefinitionFeature, _client_1$TextDocumen);

  var _super = _createSuper(TypeDefinitionFeature);

  function TypeDefinitionFeature(client) {
    _classCallCheck(this, TypeDefinitionFeature);

    return _super.call(this, client, vscode_languageserver_protocol_1.TypeDefinitionRequest.type);
  }

  _createClass(TypeDefinitionFeature, [{
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilites) {
      ensure(ensure(capabilites, 'textDocument'), 'typeDefinition').dynamicRegistration = true;
      var typeDefinitionSupport = ensure(ensure(capabilites, 'textDocument'), 'typeDefinition');
      typeDefinitionSupport.dynamicRegistration = true;
      typeDefinitionSupport.linkSupport = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities, documentSelector) {
      var _this$getRegistration = this.getRegistration(documentSelector, capabilities.typeDefinitionProvider),
          _this$getRegistration2 = _slicedToArray(_this$getRegistration, 2),
          id = _this$getRegistration2[0],
          options = _this$getRegistration2[1];

      if (!id || !options) {
        return;
      }

      this.register(this.messages, {
        id: id,
        registerOptions: options
      });
    }
  }, {
    key: "registerLanguageProvider",
    value: function registerLanguageProvider(options) {
      var _this = this;

      var provider = {
        provideTypeDefinition: function provideTypeDefinition(document, position, token) {
          var client = _this._client;

          var provideTypeDefinition = function provideTypeDefinition(document, position, token) {
            return client.sendRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then(client.protocol2CodeConverter.asDefinitionResult, function (error) {
              client.logFailedRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, error);
              return Promise.resolve(null);
            });
          };

          var middleware = client.clientOptions.middleware;
          return middleware.provideTypeDefinition ? middleware.provideTypeDefinition(document, position, token, provideTypeDefinition) : provideTypeDefinition(document, position, token);
        }
      };
      return [vscode_1.languages.registerTypeDefinitionProvider(options.documentSelector, provider), provider];
    }
  }]);

  return TypeDefinitionFeature;
}(client_1.TextDocumentFeature);

exports.TypeDefinitionFeature = TypeDefinitionFeature;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/utils/async.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/utils/async.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Delayer = /*#__PURE__*/function () {
  function Delayer(defaultDelay) {
    _classCallCheck(this, Delayer);

    this.defaultDelay = defaultDelay;
    this.timeout = undefined;
    this.completionPromise = undefined;
    this.onSuccess = undefined;
    this.task = undefined;
  }

  _createClass(Delayer, [{
    key: "trigger",
    value: function trigger(task) {
      var _this = this;

      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultDelay;
      this.task = task;

      if (delay >= 0) {
        this.cancelTimeout();
      }

      if (!this.completionPromise) {
        this.completionPromise = new Promise(function (resolve) {
          _this.onSuccess = resolve;
        }).then(function () {
          _this.completionPromise = undefined;
          _this.onSuccess = undefined;

          var result = _this.task();

          _this.task = undefined;
          return result;
        });
      }

      if (delay >= 0 || this.timeout === void 0) {
        this.timeout = setTimeout(function () {
          _this.timeout = undefined;

          _this.onSuccess(undefined);
        }, delay >= 0 ? delay : this.defaultDelay);
      }

      return this.completionPromise;
    }
  }, {
    key: "forceDelivery",
    value: function forceDelivery() {
      if (!this.completionPromise) {
        return undefined;
      }

      this.cancelTimeout();
      var result = this.task();
      this.completionPromise = undefined;
      this.onSuccess = undefined;
      this.task = undefined;
      return result;
    }
  }, {
    key: "isTriggered",
    value: function isTriggered() {
      return this.timeout !== void 0;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.cancelTimeout();
      this.completionPromise = undefined;
    }
  }, {
    key: "cancelTimeout",
    value: function cancelTimeout() {
      if (this.timeout !== void 0) {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }
    }
  }]);

  return Delayer;
}();

exports.Delayer = Delayer;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/utils/is.js":
/*!*******************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/utils/is.js ***!
  \*******************************************************************************************************************************/
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

function thenable(value) {
  return value && func(value.then);
}

exports.thenable = thenable;

function asPromise(value) {
  if (value instanceof Promise) {
    return value;
  } else if (thenable(value)) {
    return new Promise(function (resolve, reject) {
      value.then(function (resolved) {
        return resolve(resolved);
      }, function (error) {
        return reject(error);
      });
    });
  } else {
    return Promise.resolve(value);
  }
}

exports.asPromise = asPromise;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/utils/uuid.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/utils/uuid.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ValueUUID = /*#__PURE__*/function () {
  function ValueUUID(_value) {
    _classCallCheck(this, ValueUUID);

    this._value = _value; // empty
  }

  _createClass(ValueUUID, [{
    key: "asHex",
    value: function asHex() {
      return this._value;
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return this.asHex() === other.asHex();
    }
  }]);

  return ValueUUID;
}();

var V4UUID = /*#__PURE__*/function (_ValueUUID) {
  _inherits(V4UUID, _ValueUUID);

  var _super = _createSuper(V4UUID);

  function V4UUID() {
    _classCallCheck(this, V4UUID);

    return _super.call(this, [V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), '-', V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), '-', '4', V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), '-', V4UUID._oneOf(V4UUID._timeHighBits), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), '-', V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex(), V4UUID._randomHex()].join(''));
  }

  _createClass(V4UUID, null, [{
    key: "_oneOf",
    value: function _oneOf(array) {
      return array[Math.floor(array.length * Math.random())];
    }
  }, {
    key: "_randomHex",
    value: function _randomHex() {
      return V4UUID._oneOf(V4UUID._chars);
    }
  }]);

  return V4UUID;
}(ValueUUID);

V4UUID._chars = ['0', '1', '2', '3', '4', '5', '6', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
V4UUID._timeHighBits = ['8', '9', 'a', 'b'];
/**
 * An empty UUID that contains only zeros.
 */

exports.empty = new ValueUUID('00000000-0000-0000-0000-000000000000');

function v4() {
  return new V4UUID();
}

exports.v4 = v4;
var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isUUID(value) {
  return _UUIDPattern.test(value);
}

exports.isUUID = isUUID;
/**
 * Parses a UUID that is of the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
 * @param value A uuid string.
 */

function parse(value) {
  if (!isUUID(value)) {
    throw new Error('invalid uuid');
  }

  return new ValueUUID(value);
}

exports.parse = parse;

function generateUuid() {
  return v4().asHex();
}

exports.generateUuid = generateUuid;

/***/ }),

/***/ "../../node_modules/vscode-languageclient/lib/workspaceFolders.js":
/*!***************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/vscode-languageclient/lib/workspaceFolders.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var UUID = __webpack_require__(/*! ./utils/uuid */ "../../node_modules/vscode-languageclient/lib/utils/uuid.js");

var vscode_1 = __webpack_require__(/*! vscode */ "../../node_modules/monaco-languageclient/lib/vscode-compatibility.js");

var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");

function access(target, key) {
  if (target === void 0) {
    return undefined;
  }

  return target[key];
}

function arrayDiff(left, right) {
  return left.filter(function (element) {
    return right.indexOf(element) < 0;
  });
}

exports.arrayDiff = arrayDiff;

var WorkspaceFoldersFeature = /*#__PURE__*/function () {
  function WorkspaceFoldersFeature(_client) {
    _classCallCheck(this, WorkspaceFoldersFeature);

    this._client = _client;
    this._listeners = new Map();
  }

  _createClass(WorkspaceFoldersFeature, [{
    key: "fillInitializeParams",
    value: function fillInitializeParams(params) {
      var _this = this;

      var folders = vscode_1.workspace.workspaceFolders;
      this.initializeWithFolders(folders);

      if (folders === void 0) {
        params.workspaceFolders = null;
      } else {
        params.workspaceFolders = folders.map(function (folder) {
          return _this.asProtocol(folder);
        });
      }
    }
  }, {
    key: "initializeWithFolders",
    value: function initializeWithFolders(currentWorkspaceFolders) {
      this._initialFolders = currentWorkspaceFolders;
    }
  }, {
    key: "fillClientCapabilities",
    value: function fillClientCapabilities(capabilities) {
      capabilities.workspace = capabilities.workspace || {};
      capabilities.workspace.workspaceFolders = true;
    }
  }, {
    key: "initialize",
    value: function initialize(capabilities) {
      var _this2 = this;

      var client = this._client;
      client.onRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type, function (token) {
        var workspaceFolders = function workspaceFolders() {
          var folders = vscode_1.workspace.workspaceFolders;

          if (folders === void 0) {
            return null;
          }

          var result = folders.map(function (folder) {
            return _this2.asProtocol(folder);
          });
          return result;
        };

        var middleware = client.clientOptions.middleware.workspace;
        return middleware && middleware.workspaceFolders ? middleware.workspaceFolders(token, workspaceFolders) : workspaceFolders(token);
      });
      var value = access(access(access(capabilities, 'workspace'), 'workspaceFolders'), 'changeNotifications');
      var id;

      if (typeof value === 'string') {
        id = value;
      } else if (value === true) {
        id = UUID.generateUuid();
      }

      if (id) {
        this.register(this.messages, {
          id: id,
          registerOptions: undefined
        });
      }
    }
  }, {
    key: "sendInitialEvent",
    value: function sendInitialEvent(currentWorkspaceFolders) {
      if (this._initialFolders && currentWorkspaceFolders) {
        var removed = arrayDiff(this._initialFolders, currentWorkspaceFolders);
        var added = arrayDiff(currentWorkspaceFolders, this._initialFolders);

        if (added.length > 0 || removed.length > 0) {
          this.doSendEvent(added, removed);
        }
      } else if (this._initialFolders) {
        this.doSendEvent([], this._initialFolders);
      } else if (currentWorkspaceFolders) {
        this.doSendEvent(currentWorkspaceFolders, []);
      }
    }
  }, {
    key: "doSendEvent",
    value: function doSendEvent(addedFolders, removedFolders) {
      var _this3 = this;

      var params = {
        event: {
          added: addedFolders.map(function (folder) {
            return _this3.asProtocol(folder);
          }),
          removed: removedFolders.map(function (folder) {
            return _this3.asProtocol(folder);
          })
        }
      };

      this._client.sendNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, params);
    }
  }, {
    key: "register",
    value: function register(_message, data) {
      var _this4 = this;

      var id = data.id;
      var client = this._client;
      var disposable = vscode_1.workspace.onDidChangeWorkspaceFolders(function (event) {
        var didChangeWorkspaceFolders = function didChangeWorkspaceFolders(event) {
          _this4.doSendEvent(event.added, event.removed);
        };

        var middleware = client.clientOptions.middleware.workspace;
        middleware && middleware.didChangeWorkspaceFolders ? middleware.didChangeWorkspaceFolders(event, didChangeWorkspaceFolders) : didChangeWorkspaceFolders(event);
      });

      this._listeners.set(id, disposable);

      this.sendInitialEvent(vscode_1.workspace.workspaceFolders);
    }
  }, {
    key: "unregister",
    value: function unregister(id) {
      var disposable = this._listeners.get(id);

      if (disposable === void 0) {
        return;
      }

      this._listeners["delete"](id);

      disposable.dispose();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _iterator = _createForOfIteratorHelper(this._listeners.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var disposable = _step.value;
          disposable.dispose();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._listeners.clear();
    }
  }, {
    key: "asProtocol",
    value: function asProtocol(workspaceFolder) {
      if (workspaceFolder === void 0) {
        return null;
      }

      return {
        uri: this._client.code2ProtocolConverter.asUri(workspaceFolder.uri),
        name: workspaceFolder.name
      };
    }
  }, {
    key: "messages",
    get: function get() {
      return vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type;
    }
  }]);

  return WorkspaceFoldersFeature;
}();

exports.WorkspaceFoldersFeature = WorkspaceFoldersFeature;

/***/ })

}]);
//# sourceMappingURL=7.bundle.js.map