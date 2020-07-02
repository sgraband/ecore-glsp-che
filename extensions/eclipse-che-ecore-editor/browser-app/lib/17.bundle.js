(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "../node_modules/@eclipse-glsp/client/css/command-palette.css":
/*!********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/css/command-palette.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader!./command-palette.css */ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/client/css/command-palette.css");

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

/***/ "../node_modules/@eclipse-glsp/client/css/glsp-sprotty.css":
/*!*****************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/css/glsp-sprotty.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader!./glsp-sprotty.css */ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/client/css/glsp-sprotty.css");

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

/***/ "../node_modules/@eclipse-glsp/client/css/tool-palette.css":
/*!*****************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/css/tool-palette.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader!./tool-palette.css */ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/client/css/tool-palette.css");

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

/***/ "../node_modules/@eclipse-glsp/client/lib/base/actions/context-actions.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/actions/context-actions.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var RequestContextActions = /** @class */ (function () {
    function RequestContextActions(contextId, editorContext, requestId) {
        if (requestId === void 0) { requestId = sprotty_1.generateRequestId(); }
        this.contextId = contextId;
        this.editorContext = editorContext;
        this.requestId = requestId;
        this.kind = RequestContextActions.KIND;
    }
    RequestContextActions.KIND = "requestContextActions";
    return RequestContextActions;
}());
exports.RequestContextActions = RequestContextActions;
var SetContextActions = /** @class */ (function () {
    function SetContextActions(actions, responseId, args) {
        if (responseId === void 0) { responseId = ''; }
        this.actions = actions;
        this.responseId = responseId;
        this.args = args;
        this.kind = SetContextActions.KIND;
    }
    SetContextActions.KIND = "setContextActions";
    return SetContextActions;
}());
exports.SetContextActions = SetContextActions;
function isSetContextActionsAction(action) {
    return action !== undefined && (action.kind === SetContextActions.KIND)
        && action.actions !== undefined;
}
exports.isSetContextActionsAction = isSetContextActionsAction;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/actions/edit-validation-actions.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/actions/edit-validation-actions.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2020 EclipseSource and others.
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var RequestEditValidationAction = /** @class */ (function () {
    function RequestEditValidationAction(contextId, modelElementId, text, requestId) {
        if (requestId === void 0) { requestId = sprotty_1.generateRequestId(); }
        this.contextId = contextId;
        this.modelElementId = modelElementId;
        this.text = text;
        this.requestId = requestId;
        this.kind = RequestEditValidationAction.KIND;
    }
    RequestEditValidationAction.KIND = "requestEditValidation";
    return RequestEditValidationAction;
}());
exports.RequestEditValidationAction = RequestEditValidationAction;
var SetEditValidationResultAction = /** @class */ (function () {
    function SetEditValidationResultAction(status, responseId, args) {
        if (responseId === void 0) { responseId = ''; }
        this.status = status;
        this.responseId = responseId;
        this.args = args;
        this.kind = SetEditValidationResultAction.KIND;
    }
    SetEditValidationResultAction.KIND = "setEditValidationResult";
    return SetEditValidationResultAction;
}());
exports.SetEditValidationResultAction = SetEditValidationResultAction;
function isSetEditValidationResultAction(action) {
    return action !== undefined && (action.kind === SetEditValidationResultAction.KIND)
        && action.status !== undefined;
}
exports.isSetEditValidationResultAction = isSetEditValidationResultAction;
var ValidationStatus;
(function (ValidationStatus) {
    var Severity;
    (function (Severity) {
        Severity[Severity["FATAL"] = 0] = "FATAL";
        Severity[Severity["ERROR"] = 1] = "ERROR";
        Severity[Severity["WARNING"] = 2] = "WARNING";
        Severity[Severity["INFO"] = 3] = "INFO";
        Severity[Severity["OK"] = 4] = "OK";
        Severity[Severity["NONE"] = 5] = "NONE";
    })(Severity = ValidationStatus.Severity || (ValidationStatus.Severity = {}));
    ValidationStatus.NONE = {
        severity: Severity.NONE, message: '', error: { code: -1, message: '', data: {} }
    };
    function isOk(validationStatus) {
        return validationStatus.severity === Severity.OK
            || validationStatus.severity === Severity.INFO
            || validationStatus.severity === Severity.NONE;
    }
    ValidationStatus.isOk = isOk;
    function isWarning(validationStatus) {
        return validationStatus.severity === Severity.WARNING;
    }
    ValidationStatus.isWarning = isWarning;
    function isError(validationStatus) {
        return validationStatus.severity === Severity.ERROR
            || validationStatus.severity === Severity.FATAL;
    }
    ValidationStatus.isError = isError;
})(ValidationStatus = exports.ValidationStatus || (exports.ValidationStatus = {}));


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/auto-complete/auto-complete-actions.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/auto-complete/auto-complete-actions.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isSetAutoCompleteValueAction(action) {
    return action !== undefined && action.text !== undefined;
}
exports.isSetAutoCompleteValueAction = isSetAutoCompleteValueAction;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/auto-complete/auto-complete-widget.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/auto-complete/auto-complete-widget.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var lib_1 = __webpack_require__(/*! sprotty/lib */ "../node_modules/sprotty/lib/index.js");
var iterable_1 = __webpack_require__(/*! sprotty/lib/utils/iterable */ "../node_modules/sprotty/lib/utils/iterable.js");
var keyboard_1 = __webpack_require__(/*! sprotty/lib/utils/keyboard */ "../node_modules/sprotty/lib/utils/keyboard.js");
var auto_complete_actions_1 = __webpack_require__(/*! ./auto-complete-actions */ "../node_modules/@eclipse-glsp/client/lib/base/auto-complete/auto-complete-actions.js");
var validation_decorator_1 = __webpack_require__(/*! ./validation-decorator */ "../node_modules/@eclipse-glsp/client/lib/base/auto-complete/validation-decorator.js");
var configureAutocomplete = __webpack_require__(/*! autocompleter */ "../node_modules/autocompleter/autocomplete.js");
var AutoCompleteWidget = /** @class */ (function () {
    function AutoCompleteWidget(autoSuggestionSettings, suggestionProvider, suggestionSubmitHandler, notifyClose, logger) {
        if (notifyClose === void 0) { notifyClose = function () { }; }
        this.autoSuggestionSettings = autoSuggestionSettings;
        this.suggestionProvider = suggestionProvider;
        this.suggestionSubmitHandler = suggestionSubmitHandler;
        this.notifyClose = notifyClose;
        this.logger = logger;
        this.loadingIndicatorClasses = ['loading', 'fa', 'fa-spinner', 'fa-pulse', 'fa-3x', 'fa-fw'];
        this.validationDecorator = validation_decorator_1.IValidationDecorator.NO_DECORATION;
    }
    AutoCompleteWidget.prototype.configureValidation = function (inputValidator, validationDecorator) {
        if (validationDecorator === void 0) { validationDecorator = validation_decorator_1.IValidationDecorator.NO_DECORATION; }
        this.inputValidator = inputValidator;
        this.validationDecorator = validationDecorator;
    };
    AutoCompleteWidget.prototype.configureTextSubmitHandler = function (textSubmitHandler) {
        this.textSubmitHandler = textSubmitHandler;
    };
    AutoCompleteWidget.prototype.initialize = function (containerElement) {
        var _this = this;
        this.containerElement = containerElement;
        this.inputElement = document.createElement('input');
        this.inputElement.style.position = 'absolute';
        this.inputElement.spellcheck = false;
        this.inputElement.autocapitalize = 'false';
        this.inputElement.autocomplete = 'false';
        this.inputElement.style.width = '100%';
        this.inputElement.addEventListener('keydown', function (event) { return _this.handleKeyDown(event); });
        this.inputElement.addEventListener('blur', function () { return window.setTimeout(function () { return _this.notifyClose(); }, 200); });
        this.containerElement.appendChild(this.inputElement);
        this.containerElement.style.position = 'absolute';
    };
    AutoCompleteWidget.prototype.handleKeyDown = function (event) {
        if (keyboard_1.matchesKeystroke(event, 'Escape')) {
            this.notifyClose();
            return;
        }
        if (keyboard_1.matchesKeystroke(event, 'Enter') && !this.isInputElementChanged() && this.isSuggestionAvailable()) {
            return;
        }
        if (this.isInputElementChanged()) {
            this.invalidateValidationResultAndContextActions();
        }
        if (!keyboard_1.matchesKeystroke(event, 'Enter') || this.isSuggestionAvailable()) {
            return;
        }
        if (!this.validationDecorator.isValidatedOk()) {
            event.stopImmediatePropagation();
            return;
        }
        if (this.textSubmitHandler) {
            this.executeFromTextOnlyInput();
            this.notifyClose();
        }
    };
    AutoCompleteWidget.prototype.isInputElementChanged = function () {
        return this.inputElement.value !== this.previousContent;
    };
    AutoCompleteWidget.prototype.invalidateValidationResultAndContextActions = function () {
        this.contextActions = undefined;
        this.validationDecorator.invalidate();
    };
    AutoCompleteWidget.prototype.open = function (root) {
        var contextElementIds = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            contextElementIds[_i - 1] = arguments[_i];
        }
        this.contextActions = undefined;
        this.autoCompleteResult = configureAutocomplete(this.autocompleteSettings(root));
        this.previousContent = this.inputElement.value;
        this.inputElement.setSelectionRange(0, this.inputElement.value.length);
        this.inputElement.focus();
    };
    AutoCompleteWidget.prototype.autocompleteSettings = function (root) {
        var _this = this;
        return {
            input: this.inputElement,
            emptyMsg: this.autoSuggestionSettings.noSuggestionsMessage,
            className: this.autoSuggestionSettings.suggestionsClass,
            showOnFocus: this.autoSuggestionSettings.showOnFocus,
            debounceWaitMs: this.autoSuggestionSettings.debounceWaitMs,
            minLength: -1,
            fetch: function (text, update) {
                return _this.updateSuggestions(update, text, root);
            },
            onSelect: function (item) { return _this.onSelect(item); },
            render: function (item, currentValue) {
                return _this.renderSuggestions(item, currentValue);
            },
            customize: function (input, inputRect, container, maxHeight) {
                _this.customizeInputElement(input, inputRect, container, maxHeight);
            }
        };
    };
    AutoCompleteWidget.prototype.customizeInputElement = function (input, inputRect, container, maxHeight) {
        // move container into our UIExtension container as this is already positioned correctly
        if (this.containerElement) {
            this.containerElement.appendChild(container);
        }
    };
    AutoCompleteWidget.prototype.updateSuggestions = function (update, text, root) {
        var _this = this;
        var contextElementIds = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            contextElementIds[_i - 3] = arguments[_i];
        }
        this.onLoading();
        this.doUpdateSuggestions(text, root)
            .then(function (actions) {
            _this.contextActions = _this.filterActions(text, actions);
            update(_this.contextActions);
            _this.onLoaded('success');
        })
            .catch(function (reason) {
            if (_this.logger) {
                _this.logger.error(_this, 'Failed to obtain suggestions', reason);
            }
            _this.onLoaded('error');
        });
    };
    AutoCompleteWidget.prototype.onLoading = function () {
        var _a;
        if (this.loadingIndicator && this.containerElement.contains(this.loadingIndicator)) {
            return;
        }
        this.loadingIndicator = document.createElement('span');
        (_a = this.loadingIndicator.classList).add.apply(_a, __spread(this.loadingIndicatorClasses));
        this.containerElement.appendChild(this.loadingIndicator);
    };
    AutoCompleteWidget.prototype.doUpdateSuggestions = function (text, root) {
        var contextElementIds = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            contextElementIds[_i - 2] = arguments[_i];
        }
        return this.suggestionProvider.provideSuggestions(text);
    };
    AutoCompleteWidget.prototype.onLoaded = function (success) {
        if (this.containerElement.contains(this.loadingIndicator)) {
            this.containerElement.removeChild(this.loadingIndicator);
        }
        this.validationDecorator.invalidate();
        this.validateInputIfNoContextActions();
        this.previousContent = this.inputElement.value;
    };
    AutoCompleteWidget.prototype.renderSuggestions = function (item, value) {
        var itemElement = document.createElement('div');
        var wordMatcher = this.espaceForRegExp(value).split(' ').join('|');
        var regex = new RegExp(wordMatcher, 'gi');
        if (item.icon) {
            this.renderIcon(itemElement, item.icon);
        }
        itemElement.innerHTML += item.label.replace(regex, function (match) { return '<em>' + match + '</em>'; });
        return itemElement;
    };
    AutoCompleteWidget.prototype.espaceForRegExp = function (value) {
        return value.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    AutoCompleteWidget.prototype.renderIcon = function (itemElement, icon) {
        itemElement.innerHTML += "<span class=\"icon " + icon + "\"></span>";
    };
    AutoCompleteWidget.prototype.filterActions = function (filterText, actions) {
        return iterable_1.toArray(actions.filter(function (action) {
            var label = action.label.toLowerCase();
            var searchWords = filterText.split(' ');
            return searchWords.every(function (word) { return label.indexOf(word.toLowerCase()) !== -1; });
        }));
    };
    AutoCompleteWidget.prototype.onSelect = function (item) {
        var _this = this;
        if (auto_complete_actions_1.isSetAutoCompleteValueAction(item)) {
            this.inputElement.value = item.text;
            // trigger update of suggestions with an keyup event
            window.setTimeout(function () { return _this.inputElement.dispatchEvent(new Event('keyup')); });
        }
        else {
            this.executeFromSuggestion(item);
            this.notifyClose();
        }
    };
    AutoCompleteWidget.prototype.validateInputIfNoContextActions = function () {
        if (this.isNoOrExactlyOneMatchingContextAction()) {
            this.validateInput();
        }
        else {
            this.validationDecorator.dispose();
        }
    };
    AutoCompleteWidget.prototype.isNoOrExactlyOneMatchingContextAction = function () {
        return !this.isSuggestionAvailable()
            || (this.contextActions
                && this.contextActions.length === 1
                && this.inputElement.value.endsWith(this.contextActions[0].label));
    };
    AutoCompleteWidget.prototype.isSuggestionAvailable = function () {
        return this.contextActions && this.contextActions.length > 0;
    };
    AutoCompleteWidget.prototype.validateInput = function () {
        var _this = this;
        if (this.inputValidator) {
            this.inputValidator.validate(this.inputElement.value)
                .then(function (result) { return _this.validationDecorator.decorateValidationResult(result); })
                .catch(function (error) { return _this.handleErrorDuringValidation(error); });
        }
    };
    AutoCompleteWidget.prototype.handleErrorDuringValidation = function (error) {
        if (this.logger) {
            this.logger.error(this, 'Failed to validate input', error);
        }
        this.validationDecorator.dispose();
    };
    AutoCompleteWidget.prototype.executeFromSuggestion = function (input) {
        this.suggestionSubmitHandler.executeFromSuggestion(input);
    };
    AutoCompleteWidget.prototype.executeFromTextOnlyInput = function () {
        if (this.textSubmitHandler) {
            this.textSubmitHandler.executeFromTextOnlyInput(this.inputElement.value);
        }
    };
    Object.defineProperty(AutoCompleteWidget.prototype, "inputField", {
        get: function () {
            return this.inputElement;
        },
        enumerable: true,
        configurable: true
    });
    AutoCompleteWidget.prototype.dispose = function () {
        this.validationDecorator.dispose();
        if (this.autoCompleteResult) {
            this.autoCompleteResult.destroy();
        }
    };
    return AutoCompleteWidget;
}());
exports.AutoCompleteWidget = AutoCompleteWidget;
function toActionArray(input) {
    if (lib_1.isLabeledAction(input)) {
        return input.actions;
    }
    else if (lib_1.isAction(input)) {
        return [input];
    }
    return [];
}
exports.toActionArray = toActionArray;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/auto-complete/validation-decorator.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/auto-complete/validation-decorator.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
 * Copyright (c) 2020 EclipseSource and others.
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
var edit_validation_actions_1 = __webpack_require__(/*! ../actions/edit-validation-actions */ "../node_modules/@eclipse-glsp/client/lib/base/actions/edit-validation-actions.js");
var IValidationDecorator;
(function (IValidationDecorator) {
    IValidationDecorator.NO_DECORATION = {
        decorateValidationResult: function (status) { },
        isValidatedOk: function () { return false; },
        invalidate: function () { },
        dispose: function () { }
    };
})(IValidationDecorator = exports.IValidationDecorator || (exports.IValidationDecorator = {}));
var ValidationDecorator = /** @class */ (function () {
    function ValidationDecorator(containerElement) {
        this.containerElement = containerElement;
        this.warningClasses = ['warning'];
        this.warningIconClasses = ['fa', 'fa-question-circle'];
        this.errorClasses = ['error'];
        this.errorIconClasses = ['fa', 'fa-exclamation-circle'];
        this.isValidated = false;
        this.hasValidationError = false;
    }
    ValidationDecorator.prototype.decorateValidationResult = function (status) {
        if (edit_validation_actions_1.ValidationStatus.isError(status)) {
            this.hasValidationError = true;
            this.decorateError(status.message ? status.message : 'Error');
        }
        else if (edit_validation_actions_1.ValidationStatus.isWarning(status)) {
            this.hasValidationError = false;
            this.decorateWarning(status.message ? status.message : 'Warning');
        }
        else {
            this.hasValidationError = false;
            this.dispose();
        }
        this.isValidated = true;
    };
    ValidationDecorator.prototype.decorateError = function (message) {
        this.switchCssClasses(this.containerElement, this.errorClasses);
        var div = this.createDecorationDiv();
        this.switchCssClasses(div, this.errorClasses);
        div.innerHTML = "<span class=\"" + this.errorIconClasses.join(' ') + "\"></span> " + message;
        this.adjustPosition();
    };
    ValidationDecorator.prototype.decorateWarning = function (message) {
        this.switchCssClasses(this.containerElement, this.warningClasses);
        var div = this.createDecorationDiv();
        this.switchCssClasses(div, this.warningClasses);
        div.innerHTML = "<span class=\"" + this.warningIconClasses.join(' ') + "\"></span> " + message;
        this.adjustPosition();
    };
    ValidationDecorator.prototype.switchCssClasses = function (element, cssClasses) {
        var _a, _b;
        (_a = element.classList).remove.apply(_a, __spread(this.errorClasses, this.warningClasses));
        (_b = element.classList).add.apply(_b, __spread(cssClasses));
    };
    ValidationDecorator.prototype.createDecorationDiv = function () {
        if (!this.decorationDiv) {
            this.containerElement.classList.add('validation');
            this.decorationDiv = document.createElement('div');
            this.decorationDiv.style.width = this.decorationContainerWidth() + "px";
            this.decorationDiv.classList.add('validation-decorator');
            this.containerElement.appendChild(this.decorationDiv);
        }
        return this.decorationDiv;
    };
    ValidationDecorator.prototype.decorationContainerWidth = function () {
        return this.containerElement.clientWidth - 22;
    };
    ValidationDecorator.prototype.adjustPosition = function () {
        if (this.decorationDiv) {
            var height = this.decorationDiv.clientHeight + 2;
            this.decorationDiv.style.top = "-" + height + "px";
        }
    };
    ValidationDecorator.prototype.isValidatedOk = function () {
        return this.isValidated && !this.hasValidationError;
    };
    ValidationDecorator.prototype.invalidate = function () {
        this.isValidated = false;
    };
    ValidationDecorator.prototype.dispose = function () {
        this.hasValidationError = false;
        this.isValidated = false;
        if (this.decorationDiv && this.containerElement && this.containerElement.contains(this.decorationDiv)) {
            this.containerElement.removeChild(this.decorationDiv);
            this.switchCssClasses(this.containerElement, []);
            this.decorationDiv = undefined;
        }
    };
    return ValidationDecorator;
}());
exports.ValidationDecorator = ValidationDecorator;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/command-stack.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/command-stack.js ***!
  \**********************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var model_1 = __webpack_require__(/*! ../features/undo-redo/model */ "../node_modules/@eclipse-glsp/client/lib/features/undo-redo/model.js");
var GLSPCommandStack = /** @class */ (function (_super) {
    __extends(GLSPCommandStack, _super);
    function GLSPCommandStack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GLSPCommandStack.prototype.undo = function () {
        this.actionDispatcher().then(function (dispatcher) { return dispatcher.dispatch(new model_1.GlspUndoAction()); });
        return this.thenUpdate();
    };
    GLSPCommandStack.prototype.redo = function () {
        this.actionDispatcher().then(function (dispatcher) { return dispatcher.dispatch(new model_1.GlspRedoAction()); });
        return this.thenUpdate();
    };
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IActionDispatcherProvider),
        __metadata("design:type", Function)
    ], GLSPCommandStack.prototype, "actionDispatcher", void 0);
    GLSPCommandStack = __decorate([
        inversify_1.injectable()
    ], GLSPCommandStack);
    return GLSPCommandStack;
}(sprotty_1.CommandStack));
exports.GLSPCommandStack = GLSPCommandStack;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/di.config.js":
/*!******************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/di.config.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
__webpack_require__(/*! ../../css/glsp-sprotty.css */ "../node_modules/@eclipse-glsp/client/css/glsp-sprotty.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var command_stack_1 = __webpack_require__(/*! ./command-stack */ "../node_modules/@eclipse-glsp/client/lib/base/command-stack.js");
var editor_context_1 = __webpack_require__(/*! ./editor-context */ "../node_modules/@eclipse-glsp/client/lib/base/editor-context.js");
var update_model_command_1 = __webpack_require__(/*! ./model/update-model-command */ "../node_modules/@eclipse-glsp/client/lib/base/model/update-model-command.js");
var selection_clearing_mouse_listener_1 = __webpack_require__(/*! ./selection-clearing-mouse-listener */ "../node_modules/@eclipse-glsp/client/lib/base/selection-clearing-mouse-listener.js");
var glsp_tool_manager_1 = __webpack_require__(/*! ./tool-manager/glsp-tool-manager */ "../node_modules/@eclipse-glsp/client/lib/base/tool-manager/glsp-tool-manager.js");
var defaultGLSPModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound, rebind) {
    var context = { bind: bind, _unbind: _unbind, isBound: isBound, rebind: rebind };
    bind(editor_context_1.EditorContextService).toSelf().inSingletonScope();
    // Model update initialization ------------------------------------
    sprotty_1.configureCommand(context, update_model_command_1.FeedbackAwareUpdateModelCommand);
    sprotty_1.configureActionHandler(context, sprotty_1.SetModelCommand.KIND, update_model_command_1.SetModelActionHandler);
    bind(sprotty_1.TYPES.MouseListener).to(selection_clearing_mouse_listener_1.SelectionClearingMouseListener);
    rebind(sprotty_1.TYPES.ICommandStack).to(command_stack_1.GLSPCommandStack);
    rebind(sprotty_1.TYPES.IToolManager).to(glsp_tool_manager_1.GLSPToolManager).inSingletonScope();
});
exports.default = defaultGLSPModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/editor-context.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/editor-context.js ***!
  \***********************************************************************/
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
 * Copyright (c) 2020 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var selection_service_1 = __webpack_require__(/*! ../features/select/selection-service */ "../node_modules/@eclipse-glsp/client/lib/features/select/selection-service.js");
var types_1 = __webpack_require__(/*! ./types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var EditorContextService = /** @class */ (function () {
    function EditorContextService() {
    }
    EditorContextService.prototype.get = function (args) {
        return {
            selectedElementIds: Array.from(this.selectionService.getSelectedElementIDs()),
            lastMousePosition: this.mousePositionTracker.lastPositionOnDiagram,
            args: args
        };
    };
    EditorContextService.prototype.getWithSelection = function (selectedElementIds, args) {
        return {
            selectedElementIds: selectedElementIds,
            lastMousePosition: this.mousePositionTracker.lastPositionOnDiagram,
            args: args
        };
    };
    __decorate([
        inversify_1.inject(types_1.GLSP_TYPES.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], EditorContextService.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(sprotty_1.MousePositionTracker),
        __metadata("design:type", sprotty_1.MousePositionTracker)
    ], EditorContextService.prototype, "mousePositionTracker", void 0);
    EditorContextService = __decorate([
        inversify_1.injectable()
    ], EditorContextService);
    return EditorContextService;
}());
exports.EditorContextService = EditorContextService;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/model/update-model-command.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/model/update-model-command.js ***!
  \***********************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var update_model_1 = __webpack_require__(/*! sprotty/lib/features/update/update-model */ "../node_modules/sprotty/lib/features/update/update-model.js");
var model_1 = __webpack_require__(/*! ../../features/tool-feedback/model */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js");
var types_1 = __webpack_require__(/*! ../types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
/* ActionHandler that transforms a SetModelAction into an (feedback-aware) UpdateModelAction. This can be done because in sprotty
*  UpdateModel behaves the same as SetModel if no model is present yet.*/
var SetModelActionHandler = /** @class */ (function () {
    function SetModelActionHandler() {
    }
    SetModelActionHandler.prototype.handle = function (action) {
        if (isSetModelAction(action)) {
            return new update_model_1.UpdateModelAction(action.newRoot, false);
        }
    };
    SetModelActionHandler = __decorate([
        inversify_1.injectable()
    ], SetModelActionHandler);
    return SetModelActionHandler;
}());
exports.SetModelActionHandler = SetModelActionHandler;
function isSetModelAction(action) {
    return action !== undefined && (action.kind === sprotty_1.SetModelCommand.KIND)
        && action.newRoot !== undefined;
}
exports.isSetModelAction = isSetModelAction;
/**
 * A special`UpdateModelCommand` that retrieves all registered `actions` from the `IFeedbackActionDispatcher` (if present) and applies their feedback
 * to the `newRoot` before performing the update
 */
var FeedbackAwareUpdateModelCommand = /** @class */ (function (_super) {
    __extends(FeedbackAwareUpdateModelCommand, _super);
    function FeedbackAwareUpdateModelCommand(action, logger, feedbackActionDispatcher, actionHandlerRegistryProvider, modelRootListeners) {
        if (modelRootListeners === void 0) { modelRootListeners = []; }
        var _this = _super.call(this, action) || this;
        _this.logger = logger;
        _this.feedbackActionDispatcher = feedbackActionDispatcher;
        _this.modelRootListeners = modelRootListeners;
        actionHandlerRegistryProvider().then(function (registry) { return _this.actionHandlerRegistry = registry; });
        return _this;
    }
    FeedbackAwareUpdateModelCommand.prototype.performUpdate = function (oldRoot, newRoot, context) {
        if (this.feedbackActionDispatcher && this.actionHandlerRegistry) {
            // Create a temporary context wich defines the `newRoot` as `root`
            // This way we do not corrupt the redo/undo behavior of the super class
            var tempContext_1 = {
                root: newRoot,
                duration: context.duration,
                logger: context.logger,
                modelChanged: context.modelChanged,
                modelFactory: context.modelFactory,
                syncer: context.syncer
            };
            var feedbackCommands = this.getFeedbackCommands(this.actionHandlerRegistry);
            feedbackCommands.forEach(function (command) { return command.execute(tempContext_1); });
        }
        this.modelRootListeners.forEach(function (listener) { return listener.modelRootChanged(newRoot); });
        return _super.prototype.performUpdate.call(this, oldRoot, newRoot, context);
    };
    FeedbackAwareUpdateModelCommand.prototype.getFeedbackCommands = function (registry) {
        var result = [];
        this.feedbackActionDispatcher.getRegisteredFeedback().forEach(function (action) {
            var handler = registry.get(action.kind).find(function (h) { return h instanceof sprotty_1.CommandActionHandler; });
            if (handler instanceof sprotty_1.CommandActionHandler) {
                result.push(handler.handle(action));
            }
        });
        // sort commands descanding by priority
        return result.sort(function (a, b) { return getPriority(b) - getPriority(a); });
    };
    FeedbackAwareUpdateModelCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __param(1, inversify_1.inject(sprotty_1.TYPES.ILogger)),
        __param(2, inversify_1.inject(types_1.GLSP_TYPES.IFeedbackActionDispatcher)), __param(2, inversify_1.optional()),
        __param(3, inversify_1.inject(sprotty_1.TYPES.ActionHandlerRegistryProvider)),
        __param(4, inversify_1.multiInject(types_1.GLSP_TYPES.SModelRootListener)), __param(4, inversify_1.optional()),
        __metadata("design:paramtypes", [update_model_1.UpdateModelAction, Object, Object, Function, Array])
    ], FeedbackAwareUpdateModelCommand);
    return FeedbackAwareUpdateModelCommand;
}(update_model_1.UpdateModelCommand));
exports.FeedbackAwareUpdateModelCommand = FeedbackAwareUpdateModelCommand;
function getPriority(command) {
    if (command instanceof model_1.FeedbackCommand) {
        return command.priority;
    }
    return 0;
}


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js ***!
  \*****************************************************************************/
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
 * Copyright (c) 2020 EclipseSource and others.
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
function isCreateOperation(object) {
    return sprotty_1.isAction(object) && "elementTypeId" in object;
}
exports.isCreateOperation = isCreateOperation;
var CreateNodeOperation = /** @class */ (function () {
    function CreateNodeOperation(elementTypeId, location, containerId, args) {
        this.elementTypeId = elementTypeId;
        this.location = location;
        this.containerId = containerId;
        this.args = args;
        this.kind = CreateNodeOperation.KIND;
    }
    CreateNodeOperation.KIND = "createNode";
    return CreateNodeOperation;
}());
exports.CreateNodeOperation = CreateNodeOperation;
function isCreateNodeOperation(object) {
    return isCreateOperation() && object.kind === CreateNodeOperation.KIND;
}
exports.isCreateNodeOperation = isCreateNodeOperation;
var CreateEdgeOperation = /** @class */ (function () {
    function CreateEdgeOperation(elementTypeId, sourceElementId, targetElementId, args) {
        this.elementTypeId = elementTypeId;
        this.sourceElementId = sourceElementId;
        this.targetElementId = targetElementId;
        this.args = args;
        this.kind = CreateEdgeOperation.KIND;
    }
    CreateEdgeOperation.KIND = "createEdge";
    return CreateEdgeOperation;
}());
exports.CreateEdgeOperation = CreateEdgeOperation;
function isCreateConnectionOperation(object) {
    return isCreateOperation() && object.kind === CreateEdgeOperation.KIND;
}
exports.isCreateConnectionOperation = isCreateConnectionOperation;
var DeleteElementOperation = /** @class */ (function () {
    function DeleteElementOperation(elementIds) {
        this.elementIds = elementIds;
        this.kind = DeleteElementOperation.KIND;
    }
    DeleteElementOperation.KIND = "deleteElement";
    return DeleteElementOperation;
}());
exports.DeleteElementOperation = DeleteElementOperation;
var ChangeBoundsOperation = /** @class */ (function () {
    function ChangeBoundsOperation(newBounds) {
        this.newBounds = newBounds;
        this.kind = ChangeBoundsOperation.KIND;
    }
    ChangeBoundsOperation.KIND = "changeBounds";
    return ChangeBoundsOperation;
}());
exports.ChangeBoundsOperation = ChangeBoundsOperation;
var ChangeContainerOperation = /** @class */ (function () {
    function ChangeContainerOperation(elementId, targetContainerId, location) {
        this.elementId = elementId;
        this.targetContainerId = targetContainerId;
        this.location = location;
        this.kind = ChangeContainerOperation.KIND;
    }
    ChangeContainerOperation.KIND = "changeContainer";
    return ChangeContainerOperation;
}());
exports.ChangeContainerOperation = ChangeContainerOperation;
var ReconnectEdgeOperation = /** @class */ (function () {
    function ReconnectEdgeOperation(connectionElementId, sourceElementId, targetElementId) {
        this.connectionElementId = connectionElementId;
        this.sourceElementId = sourceElementId;
        this.targetElementId = targetElementId;
        this.kind = ReconnectEdgeOperation.KIND;
    }
    ReconnectEdgeOperation.KIND = "reconnectEdge";
    return ReconnectEdgeOperation;
}());
exports.ReconnectEdgeOperation = ReconnectEdgeOperation;
var ChangeRoutingPointsOperation = /** @class */ (function () {
    function ChangeRoutingPointsOperation(newRoutingPoints) {
        this.newRoutingPoints = newRoutingPoints;
        this.kind = ChangeRoutingPointsOperation.KIND;
    }
    ChangeRoutingPointsOperation.KIND = "changeRoutingPoints";
    return ChangeRoutingPointsOperation;
}());
exports.ChangeRoutingPointsOperation = ChangeRoutingPointsOperation;
var TriggerElementCreationAction = /** @class */ (function () {
    function TriggerElementCreationAction(elementTypeId, args) {
        this.elementTypeId = elementTypeId;
        this.args = args;
    }
    return TriggerElementCreationAction;
}());
exports.TriggerElementCreationAction = TriggerElementCreationAction;
var TriggerNodeCreationAction = /** @class */ (function (_super) {
    __extends(TriggerNodeCreationAction, _super);
    function TriggerNodeCreationAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = TriggerNodeCreationAction.KIND;
        return _this;
    }
    TriggerNodeCreationAction.KIND = "triggerNodeCreation";
    return TriggerNodeCreationAction;
}(TriggerElementCreationAction));
exports.TriggerNodeCreationAction = TriggerNodeCreationAction;
var TriggerEdgeCreationAction = /** @class */ (function (_super) {
    __extends(TriggerEdgeCreationAction, _super);
    function TriggerEdgeCreationAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = TriggerEdgeCreationAction.KIND;
        return _this;
    }
    TriggerEdgeCreationAction.KIND = "triggerEdgeCreation";
    return TriggerEdgeCreationAction;
}(TriggerElementCreationAction));
exports.TriggerEdgeCreationAction = TriggerEdgeCreationAction;
function isTriggerElementTypeCreationAction(object) {
    return sprotty_1.isAction(object) && "elementTypeId" in object;
}
exports.isTriggerElementTypeCreationAction = isTriggerElementTypeCreationAction;
function isTriggerNodeCreationAction(object) {
    return isTriggerElementTypeCreationAction(object) && object.kind === TriggerNodeCreationAction.KIND;
}
exports.isTriggerNodeCreationAction = isTriggerNodeCreationAction;
function isTriggerEdgeCreationAction(object) {
    return isTriggerElementTypeCreationAction(object) && object.kind === TriggerEdgeCreationAction.KIND;
}
exports.isTriggerEdgeCreationAction = isTriggerEdgeCreationAction;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/selection-clearing-mouse-listener.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/selection-clearing-mouse-listener.js ***!
  \******************************************************************************************/
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
 * Copyright (c) 2020 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
/**
 * A mouse listener that clears the document selection on click
 *
 * Clicking on SVG elements doesn't update the document selection. In the context of diagramming
 * with GLSP, this is unnatural, as the user would expect that clicking in the diagram (e.g. to
 * select a diagram element) would clear any other selection state in the DOM. From a technical
 * point of view, an active selection in the document after clicking into the diagram may also
 * lead to bogus target elements in certain browser events, such as clipboard events, etc.
 *
 * This listener helps to overcome this problem by actively clearing any existing selection in
 * the document, if the user clicks into the diagram.
 */
var SelectionClearingMouseListener = /** @class */ (function (_super) {
    __extends(SelectionClearingMouseListener, _super);
    function SelectionClearingMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionClearingMouseListener.prototype.mouseDown = function (target, event) {
        var selection = document.getSelection();
        if (selection === null) {
            return [];
        }
        selection.removeAllRanges();
        selection.empty();
        return [];
    };
    SelectionClearingMouseListener = __decorate([
        inversify_1.injectable()
    ], SelectionClearingMouseListener);
    return SelectionClearingMouseListener;
}(sprotty_1.MouseListener));
exports.SelectionClearingMouseListener = SelectionClearingMouseListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/tool-manager/glsp-tool-manager.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/tool-manager/glsp-tool-manager.js ***!
  \***************************************************************************************/
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
/********************************************************************************
 * Copyright (c) 2020 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var array_utils_1 = __webpack_require__(/*! ../../utils/array-utils */ "../node_modules/@eclipse-glsp/client/lib/utils/array-utils.js");
var GLSPToolManager = /** @class */ (function (_super) {
    __extends(GLSPToolManager, _super);
    function GLSPToolManager(tools, defaultTools) {
        var _this = _super.call(this) || this;
        _this.registerTools.apply(_this, __spread(tools));
        _this.registerDefaultTools.apply(_this, __spread(defaultTools));
        _this.enableDefaultTools();
        return _this;
    }
    GLSPToolManager.prototype.registerDefaultTools = function () {
        var e_1, _a;
        var tools = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tools[_i] = arguments[_i];
        }
        try {
            for (var tools_1 = __values(tools), tools_1_1 = tools_1.next(); !tools_1_1.done; tools_1_1 = tools_1.next()) {
                var tool = tools_1_1.value;
                array_utils_1.distinctAdd(this.defaultTools, tool);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tools_1_1 && !tools_1_1.done && (_a = tools_1.return)) _a.call(tools_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    GLSPToolManager.prototype.registerTools = function () {
        var e_2, _a;
        var tools = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tools[_i] = arguments[_i];
        }
        try {
            for (var tools_2 = __values(tools), tools_2_1 = tools_2.next(); !tools_2_1.done; tools_2_1 = tools_2.next()) {
                var tool = tools_2_1.value;
                array_utils_1.distinctAdd(this.tools, tool);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (tools_2_1 && !tools_2_1.done && (_a = tools_2.return)) _a.call(tools_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    GLSPToolManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.multiInject(types_1.GLSP_TYPES.ITool)), __param(0, inversify_1.optional()),
        __param(1, inversify_1.multiInject(types_1.GLSP_TYPES.IDefaultTool)), __param(1, inversify_1.optional()),
        __metadata("design:paramtypes", [Array, Array])
    ], GLSPToolManager);
    return GLSPToolManager;
}(sprotty_1.ToolManager));
exports.GLSPToolManager = GLSPToolManager;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/base/types.js":
/*!**************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/base/types.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.GLSP_TYPES = {
    IAsyncClipboardService: Symbol.for("IAsyncClipboardService"),
    ICommandPaletteActionProviderRegistry: Symbol.for("ICommandPaletteActionProviderRegistry"),
    IFeedbackActionDispatcher: Symbol.for("IFeedbackActionDispatcher"),
    IToolFactory: Symbol.for("Factory<Tool>"),
    ITypeHintProvider: Symbol.for("ITypeHintProvider"),
    IMovementRestrictor: Symbol.for("IMovmementRestrictor"),
    SelectionService: Symbol.for("SelectionService"),
    SelectionListener: Symbol.for("SelectionListener"),
    SModelRootListener: Symbol.for("SModelRootListener"),
    MouseTool: Symbol.for("MouseTool"),
    IContextMenuService: Symbol.for("IContextMenuService"),
    IContextMenuServiceProvider: Symbol.for("IContextMenuServiceProvider"),
    IContextMenuProviderRegistry: Symbol.for("IContextMenuProviderRegistry"),
    IContextMenuProvider: Symbol.for("IContextMenuProvider"),
    ICopyPasteHandler: Symbol.for("ICopyPasteHandler"),
    ITool: Symbol.for("ITool"),
    IDefaultTool: Symbol.for("IDefaultTool")
};


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js ***!
  \********************************************************************************/
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
exports.resizeFeature = Symbol("resizeFeature");
function isResizable(element) {
    return sprotty_1.isBoundsAware(element) && sprotty_1.isSelectable(element) && element instanceof sprotty_1.SParentElement && element.hasFeature(exports.resizeFeature);
}
exports.isResizable = isResizable;
var ResizeHandleLocation;
(function (ResizeHandleLocation) {
    ResizeHandleLocation["TopLeft"] = "top-left";
    ResizeHandleLocation["TopRight"] = "top-right";
    ResizeHandleLocation["BottomLeft"] = "bottom-left";
    ResizeHandleLocation["BottomRight"] = "bottom-right";
})(ResizeHandleLocation = exports.ResizeHandleLocation || (exports.ResizeHandleLocation = {}));
function isBoundsAwareMoveable(element) {
    return sprotty_1.isMoveable(element) && sprotty_1.isBoundsAware(element);
}
exports.isBoundsAwareMoveable = isBoundsAwareMoveable;
var SResizeHandle = /** @class */ (function (_super) {
    __extends(SResizeHandle, _super);
    function SResizeHandle(location) {
        var _this = _super.call(this) || this;
        _this.type = SResizeHandle.TYPE;
        _this.hoverFeedback = false;
        _this.location = location;
        return _this;
    }
    SResizeHandle.prototype.hasFeature = function (feature) {
        return feature === sprotty_1.hoverFeedbackFeature;
    };
    SResizeHandle.TYPE = 'resize-handle';
    return SResizeHandle;
}(sprotty_1.SChildElement));
exports.SResizeHandle = SResizeHandle;
function addResizeHandles(element) {
    removeResizeHandles(element);
    element.add(new SResizeHandle(ResizeHandleLocation.TopLeft));
    element.add(new SResizeHandle(ResizeHandleLocation.TopRight));
    element.add(new SResizeHandle(ResizeHandleLocation.BottomLeft));
    element.add(new SResizeHandle(ResizeHandleLocation.BottomRight));
}
exports.addResizeHandles = addResizeHandles;
function removeResizeHandles(element) {
    element.removeAll(function (child) { return child instanceof SResizeHandle; });
}
exports.removeResizeHandles = removeResizeHandles;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/movement-restrictor.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/change-bounds/movement-restrictor.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var viewpoint_util_1 = __webpack_require__(/*! ../../utils/viewpoint-util */ "../node_modules/@eclipse-glsp/client/lib/utils/viewpoint-util.js");
var css_feedback_1 = __webpack_require__(/*! ../tool-feedback/css-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/css-feedback.js");
var model_1 = __webpack_require__(/*! ./model */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js");
function createMovementRestrictionFeedback(element, movementRestrictor) {
    var elements = [element];
    if (element instanceof sprotty_1.SParentElement) {
        element.children.filter(function (child) { return child instanceof model_1.SResizeHandle; }).forEach(function (e) { return elements.push(e); });
    }
    return new css_feedback_1.ModifyCSSFeedbackAction(elements, movementRestrictor.cssClasses);
}
exports.createMovementRestrictionFeedback = createMovementRestrictionFeedback;
function removeMovementRestrictionFeedback(element, movementRestrictor) {
    var elements = [element];
    if (element instanceof sprotty_1.SParentElement) {
        element.children.filter(function (child) { return child instanceof model_1.SResizeHandle; }).forEach(function (e) { return elements.push(e); });
    }
    return new css_feedback_1.ModifyCSSFeedbackAction(elements, undefined, movementRestrictor.cssClasses);
}
exports.removeMovementRestrictionFeedback = removeMovementRestrictionFeedback;
var NoOverlapMovmentRestrictor = /** @class */ (function () {
    function NoOverlapMovmentRestrictor() {
        this.cssClasses = ["movement-not-allowed"];
    }
    NoOverlapMovmentRestrictor.prototype.validate = function (newLocation, element) {
        if (!model_1.isBoundsAwareMoveable(element)) {
            return false;
        }
        // Create ghost element at the newLocation
        var ghostElement = Object.create(element);
        ghostElement.bounds = {
            x: newLocation.x,
            y: newLocation.y,
            width: element.bounds.width,
            height: element.bounds.height
        };
        ghostElement.type = "Ghost";
        ghostElement.id = element.id;
        return !Array.from(element.root.index.all().filter(function (e) { return e.id !== ghostElement.id && e !== ghostElement.root && (e instanceof sprotty_1.SNode); })
            .map(function (e) { return e; })).some(function (e) { return areOverlapping(e, ghostElement); });
    };
    NoOverlapMovmentRestrictor = __decorate([
        inversify_1.injectable()
    ], NoOverlapMovmentRestrictor);
    return NoOverlapMovmentRestrictor;
}());
exports.NoOverlapMovmentRestrictor = NoOverlapMovmentRestrictor;
function areOverlapping(element1, element2) {
    var b1 = viewpoint_util_1.toAbsoluteBounds(element1);
    var b2 = viewpoint_util_1.toAbsoluteBounds(element2);
    var r1TopLeft = b1;
    var r1BottomRight = { x: b1.x + b1.width, y: b1.y + b1.height };
    var r2TopLeft = b2;
    var r2BottomRight = { x: b2.x + b2.width, y: b2.y + b2.height };
    // If one rectangle is on left side of other
    if (r1TopLeft.x > r2BottomRight.x || r2TopLeft.x > r1BottomRight.x)
        return false;
    // If one rectangle is above other
    if (r1BottomRight.y < r2TopLeft.y || r2BottomRight.y < r1TopLeft.y)
        return false;
    return true;
}
exports.areOverlapping = areOverlapping;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/snap.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/change-bounds/snap.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2020 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var GridSnapper = /** @class */ (function () {
    function GridSnapper() {
    }
    Object.defineProperty(GridSnapper.prototype, "gridX", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridSnapper.prototype, "gridY", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    GridSnapper.prototype.snap = function (position, element) {
        return {
            x: Math.round(position.x / this.gridX) * this.gridX,
            y: Math.round(position.y / this.gridY) * this.gridY
        };
    };
    GridSnapper = __decorate([
        inversify_1.injectable()
    ], GridSnapper);
    return GridSnapper;
}());
exports.GridSnapper = GridSnapper;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/command-palette/di.config.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/command-palette/di.config.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
__webpack_require__(/*! ../../../css/command-palette.css */ "../node_modules/@eclipse-glsp/client/css/command-palette.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var server_command_palette_provider_1 = __webpack_require__(/*! ./server-command-palette-provider */ "../node_modules/@eclipse-glsp/client/lib/features/command-palette/server-command-palette-provider.js");
var glspCommandPaletteModule = new inversify_1.ContainerModule(function (bind) {
    bind(sprotty_1.TYPES.ICommandPaletteActionProvider).to(server_command_palette_provider_1.ServerCommandPaletteActionProvider);
});
exports.default = glspCommandPaletteModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/command-palette/server-command-palette-provider.js":
/*!************************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/command-palette/server-command-palette-provider.js ***!
  \************************************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var context_actions_1 = __webpack_require__(/*! ../../base/actions/context-actions */ "../node_modules/@eclipse-glsp/client/lib/base/actions/context-actions.js");
var editor_context_1 = __webpack_require__(/*! ../../base/editor-context */ "../node_modules/@eclipse-glsp/client/lib/base/editor-context.js");
var glsp_action_dispatcher_1 = __webpack_require__(/*! ../request-response/glsp-action-dispatcher */ "../node_modules/@eclipse-glsp/client/lib/features/request-response/glsp-action-dispatcher.js");
var ServerCommandPalette;
(function (ServerCommandPalette) {
    ServerCommandPalette.CONTEXT_ID = "command-palette";
    ServerCommandPalette.TEXT = "text";
    ServerCommandPalette.INDEX = "index";
})(ServerCommandPalette = exports.ServerCommandPalette || (exports.ServerCommandPalette = {}));
var ServerCommandPaletteActionProvider = /** @class */ (function () {
    function ServerCommandPaletteActionProvider() {
    }
    ServerCommandPaletteActionProvider.prototype.getActions = function (root, text, lastMousePosition, index) {
        var _a;
        var _this = this;
        var requestAction = new context_actions_1.RequestContextActions(ServerCommandPalette.CONTEXT_ID, this.editorContext.get((_a = {},
            _a[ServerCommandPalette.TEXT] = text,
            _a[ServerCommandPalette.INDEX] = index ? index : 0,
            _a)));
        return this.actionDispatcher.requestUntil(requestAction).then(function (response) { return _this.getPaletteActionsFromResponse(response); });
    };
    ServerCommandPaletteActionProvider.prototype.getPaletteActionsFromResponse = function (action) {
        if (context_actions_1.isSetContextActionsAction(action)) {
            return action.actions;
        }
        return [];
    };
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IActionDispatcher),
        __metadata("design:type", glsp_action_dispatcher_1.GLSPActionDispatcher)
    ], ServerCommandPaletteActionProvider.prototype, "actionDispatcher", void 0);
    __decorate([
        inversify_1.inject(editor_context_1.EditorContextService),
        __metadata("design:type", editor_context_1.EditorContextService)
    ], ServerCommandPaletteActionProvider.prototype, "editorContext", void 0);
    ServerCommandPaletteActionProvider = __decorate([
        inversify_1.injectable()
    ], ServerCommandPaletteActionProvider);
    return ServerCommandPaletteActionProvider;
}());
exports.ServerCommandPaletteActionProvider = ServerCommandPaletteActionProvider;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/context-menu/delete-element-context-menu.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/context-menu/delete-element-context-menu.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2020 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var operation_1 = __webpack_require__(/*! ../../base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js");
var DeleteElementContextMenuItemProvider = /** @class */ (function () {
    function DeleteElementContextMenuItemProvider() {
    }
    DeleteElementContextMenuItemProvider.prototype.getItems = function (root, lastMousePosition) {
        var selectedElements = Array.from(root.index.all().filter(sprotty_1.isSelected).filter(sprotty_1.isDeletable));
        return Promise.resolve([
            {
                id: "delete",
                label: "Delete",
                sortString: "d",
                group: "edit",
                actions: [new operation_1.DeleteElementOperation(selectedElements.map(function (e) { return e.id; }))],
                isEnabled: function () { return selectedElements.length > 0; }
            }
        ]);
    };
    DeleteElementContextMenuItemProvider = __decorate([
        inversify_1.injectable()
    ], DeleteElementContextMenuItemProvider);
    return DeleteElementContextMenuItemProvider;
}());
exports.DeleteElementContextMenuItemProvider = DeleteElementContextMenuItemProvider;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/context-menu/di.config.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/context-menu/di.config.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var server_context_menu_provider_1 = __webpack_require__(/*! ./server-context-menu-provider */ "../node_modules/@eclipse-glsp/client/lib/features/context-menu/server-context-menu-provider.js");
var glspContextMenuModule = new inversify_1.ContainerModule(function (bind) {
    bind(sprotty_1.TYPES.IContextMenuItemProvider).to(server_context_menu_provider_1.ServerContextMenuItemProvider);
});
exports.default = glspContextMenuModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/context-menu/server-context-menu-provider.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/context-menu/server-context-menu-provider.js ***!
  \******************************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var context_actions_1 = __webpack_require__(/*! ../../base/actions/context-actions */ "../node_modules/@eclipse-glsp/client/lib/base/actions/context-actions.js");
var editor_context_1 = __webpack_require__(/*! ../../base/editor-context */ "../node_modules/@eclipse-glsp/client/lib/base/editor-context.js");
var glsp_action_dispatcher_1 = __webpack_require__(/*! ../request-response/glsp-action-dispatcher */ "../node_modules/@eclipse-glsp/client/lib/features/request-response/glsp-action-dispatcher.js");
var ServerContextMenu;
(function (ServerContextMenu) {
    ServerContextMenu.CONTEXT_ID = "context-menu";
})(ServerContextMenu = exports.ServerContextMenu || (exports.ServerContextMenu = {}));
var ServerContextMenuItemProvider = /** @class */ (function () {
    function ServerContextMenuItemProvider() {
    }
    ServerContextMenuItemProvider.prototype.getItems = function (root, lastMousePosition) {
        var _this = this;
        var selectedElementIds = Array.from(root.index.all().filter(sprotty_1.isSelected).map(function (e) { return e.id; }));
        var context = this.editorContext.getWithSelection(selectedElementIds);
        var requestAction = new context_actions_1.RequestContextActions(ServerContextMenu.CONTEXT_ID, context);
        return this.actionDispatcher.requestUntil(requestAction).then(function (response) { return _this.getContextActionsFromResponse(response); });
    };
    ServerContextMenuItemProvider.prototype.getContextActionsFromResponse = function (action) {
        if (context_actions_1.isSetContextActionsAction(action)) {
            return action.actions;
        }
        return [];
    };
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IActionDispatcher),
        __metadata("design:type", glsp_action_dispatcher_1.GLSPActionDispatcher)
    ], ServerContextMenuItemProvider.prototype, "actionDispatcher", void 0);
    __decorate([
        inversify_1.inject(editor_context_1.EditorContextService),
        __metadata("design:type", editor_context_1.EditorContextService)
    ], ServerContextMenuItemProvider.prototype, "editorContext", void 0);
    ServerContextMenuItemProvider = __decorate([
        inversify_1.injectable()
    ], ServerContextMenuItemProvider);
    return ServerContextMenuItemProvider;
}());
exports.ServerContextMenuItemProvider = ServerContextMenuItemProvider;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-actions.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-actions.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var CutOperationAction = /** @class */ (function () {
    function CutOperationAction(editorContext) {
        this.editorContext = editorContext;
        this.kind = CutOperationAction.KIND;
    }
    CutOperationAction.KIND = "cut";
    return CutOperationAction;
}());
exports.CutOperationAction = CutOperationAction;
var PasteOperationAction = /** @class */ (function () {
    function PasteOperationAction(clipboardData, editorContext) {
        this.clipboardData = clipboardData;
        this.editorContext = editorContext;
        this.kind = PasteOperationAction.KIND;
    }
    PasteOperationAction.KIND = "paste";
    return PasteOperationAction;
}());
exports.PasteOperationAction = PasteOperationAction;
var RequestClipboardDataAction = /** @class */ (function () {
    function RequestClipboardDataAction(editorContext, requestId) {
        if (requestId === void 0) { requestId = sprotty_1.generateRequestId(); }
        this.editorContext = editorContext;
        this.requestId = requestId;
        this.kind = RequestClipboardDataAction.KIND;
    }
    RequestClipboardDataAction.create = function (editorContext) {
        return new RequestClipboardDataAction(editorContext);
    };
    RequestClipboardDataAction.KIND = "requestClipboardData";
    return RequestClipboardDataAction;
}());
exports.RequestClipboardDataAction = RequestClipboardDataAction;
var SetClipboardDataAction = /** @class */ (function () {
    function SetClipboardDataAction(clipboardData, responseId) {
        if (responseId === void 0) { responseId = ''; }
        this.clipboardData = clipboardData;
        this.responseId = responseId;
        this.kind = SetClipboardDataAction.KIND;
    }
    SetClipboardDataAction.KIND = "setClipboardData";
    return SetClipboardDataAction;
}());
exports.SetClipboardDataAction = SetClipboardDataAction;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-context-menu.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-context-menu.js ***!
  \***********************************************************************************************/
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
 * Copyright (c) 2020 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var lib_1 = __webpack_require__(/*! sprotty/lib */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var glsp_server_status_1 = __webpack_require__(/*! ../../model-source/glsp-server-status */ "../node_modules/@eclipse-glsp/client/lib/model-source/glsp-server-status.js");
var selection_service_1 = __webpack_require__(/*! ../select/selection-service */ "../node_modules/@eclipse-glsp/client/lib/features/select/selection-service.js");
var InvokeCopyAction = /** @class */ (function () {
    function InvokeCopyAction() {
        this.kind = InvokeCopyAction.KIND;
    }
    InvokeCopyAction.KIND = "invoke-copy";
    return InvokeCopyAction;
}());
exports.InvokeCopyAction = InvokeCopyAction;
var InvokePasteAction = /** @class */ (function () {
    function InvokePasteAction() {
        this.kind = InvokePasteAction.KIND;
    }
    InvokePasteAction.KIND = "invoke-paste";
    return InvokePasteAction;
}());
exports.InvokePasteAction = InvokePasteAction;
var InvokeCutAction = /** @class */ (function () {
    function InvokeCutAction() {
        this.kind = InvokeCutAction.KIND;
    }
    InvokeCutAction.KIND = "invoke-cut";
    return InvokeCutAction;
}());
exports.InvokeCutAction = InvokeCutAction;
var InvokeCopyPasteActionHandler = /** @class */ (function () {
    function InvokeCopyPasteActionHandler() {
    }
    InvokeCopyPasteActionHandler.prototype.handle = function (action) {
        switch (action.kind) {
            case InvokeCopyAction.KIND:
                document.execCommand('copy');
                break;
            case InvokePasteAction.KIND:
                // in a browser without additional permission we can't invoke the paste command
                // the user needs to invoke it from the browser, so notify the user about it
                this.notifyUserToUseShortcut();
                break;
            case InvokeCutAction.KIND:
                document.execCommand('cut');
                break;
        }
    };
    InvokeCopyPasteActionHandler.prototype.notifyUserToUseShortcut = function () {
        var message = 'Please use the browser\'s paste command or shortcut.';
        var timeout = 10000;
        var severity = 'WARNING';
        this.dispatcher.dispatchAll([
            { kind: glsp_server_status_1.GLSPServerStatusAction.KIND, severity: severity, timeout: timeout, message: message },
            { kind: glsp_server_status_1.ServerMessageAction.KIND, severity: severity, timeout: timeout, message: message }
        ]);
    };
    __decorate([
        inversify_1.inject(lib_1.TYPES.IActionDispatcher),
        __metadata("design:type", Object)
    ], InvokeCopyPasteActionHandler.prototype, "dispatcher", void 0);
    InvokeCopyPasteActionHandler = __decorate([
        inversify_1.injectable()
    ], InvokeCopyPasteActionHandler);
    return InvokeCopyPasteActionHandler;
}());
exports.InvokeCopyPasteActionHandler = InvokeCopyPasteActionHandler;
var CopyPasteContextMenuItemProvider = /** @class */ (function () {
    function CopyPasteContextMenuItemProvider() {
    }
    CopyPasteContextMenuItemProvider.prototype.getItems = function (root, lastMousePosition) {
        var selectedElements = Array.from(root.index.all().filter(lib_1.isSelected).filter(lib_1.isDeletable));
        this.selectionService.updateSelection(root, selectedElements.map(function (element) { return element.id; }), []);
        return Promise.resolve([
            {
                id: "copy",
                label: "Copy",
                group: "copy-paste",
                actions: [new InvokeCopyAction()],
                isEnabled: function () { return selectedElements.length > 0; }
            },
            {
                id: "cut",
                label: "Cut",
                group: "copy-paste",
                actions: [new InvokeCutAction()],
                isEnabled: function () { return selectedElements.length > 0; }
            },
            {
                id: "paste",
                label: "Paste",
                group: "copy-paste",
                actions: [new InvokePasteAction()],
                isEnabled: function () { return true; }
            }
        ]);
    };
    __decorate([
        inversify_1.inject(types_1.GLSP_TYPES.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], CopyPasteContextMenuItemProvider.prototype, "selectionService", void 0);
    CopyPasteContextMenuItemProvider = __decorate([
        inversify_1.injectable()
    ], CopyPasteContextMenuItemProvider);
    return CopyPasteContextMenuItemProvider;
}());
exports.CopyPasteContextMenuItemProvider = CopyPasteContextMenuItemProvider;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-handler.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-handler.js ***!
  \******************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var uuid_1 = __webpack_require__(/*! uuid */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/index.js");
var editor_context_1 = __webpack_require__(/*! ../../base/editor-context */ "../node_modules/@eclipse-glsp/client/lib/base/editor-context.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var glsp_action_dispatcher_1 = __webpack_require__(/*! ../request-response/glsp-action-dispatcher */ "../node_modules/@eclipse-glsp/client/lib/features/request-response/glsp-action-dispatcher.js");
var copy_paste_actions_1 = __webpack_require__(/*! ./copy-paste-actions */ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-actions.js");
/**
 * A local implementation of the async clipboard interface.
 *
 * This implementation just stores the clipboard data in memory, but not in the clipboard.
 * This implementation can be used if you don't need to support cross-widget/browser/application
 * data transfer and you would like to avoid to require the permission of the user for accessing the
 * system clipboard asynchronously.
 *
 * In order to detect whether the user copied something else since we recorded the clipboard data
 * we put a uuid into the system clipboard synchronously. If on paste this ID has changed or is not
 * available anymore, we know that the user copied in another application or context, so we shouldn't
 * paste what we have stored locally and just return undefined.
 *
 * Real async clipboard service implementations can just ignore the ID that is passed and rely on the
 * system clipboard's content instead.
 */
var LocalClipboardService = /** @class */ (function () {
    function LocalClipboardService() {
    }
    LocalClipboardService.prototype.clear = function () {
        this.currentId = undefined;
        this.data = undefined;
    };
    LocalClipboardService.prototype.put = function (data, id) {
        this.currentId = id;
        this.data = data;
    };
    LocalClipboardService.prototype.get = function (id) {
        if (id !== this.currentId) {
            return undefined;
        }
        return this.data;
    };
    LocalClipboardService = __decorate([
        inversify_1.injectable()
    ], LocalClipboardService);
    return LocalClipboardService;
}());
exports.LocalClipboardService = LocalClipboardService;
function toClipboardId(clipboardId) {
    return JSON.stringify({ clipboardId: clipboardId });
}
function isClipboardId(jsonData) {
    return 'clipboardId' in jsonData;
}
function getClipboardIdFromDataTransfer(dataTransfer) {
    var jsonString = dataTransfer.getData(CLIPBOARD_DATA_FORMAT);
    var jsonObject = jsonString ? JSON.parse(jsonString) : undefined;
    return isClipboardId(jsonObject) ? jsonObject.clipboardId : undefined;
}
var CLIPBOARD_DATA_FORMAT = "application/json";
var ServerCopyPasteHandler = /** @class */ (function () {
    function ServerCopyPasteHandler() {
    }
    ServerCopyPasteHandler.prototype.handleCopy = function (e) {
        var _this = this;
        if (e.clipboardData && this.shouldCopy(e)) {
            var clipboardId_1 = uuid_1.v4();
            e.clipboardData.setData(CLIPBOARD_DATA_FORMAT, toClipboardId(clipboardId_1));
            this.actionDispatcher
                .request(copy_paste_actions_1.RequestClipboardDataAction.create(this.editorContext.get()))
                .then(function (action) { return _this.clipboadService.put(action.clipboardData, clipboardId_1); });
            e.preventDefault();
        }
        else {
            if (e.clipboardData) {
                e.clipboardData.clearData();
            }
            this.clipboadService.clear();
        }
    };
    ServerCopyPasteHandler.prototype.handleCut = function (e) {
        if (e.clipboardData && this.shouldCopy(e)) {
            this.handleCopy(e);
            this.actionDispatcher.dispatch(new copy_paste_actions_1.CutOperationAction(this.editorContext.get()));
            e.preventDefault();
        }
    };
    ServerCopyPasteHandler.prototype.handlePaste = function (e) {
        if (e.clipboardData) {
            var clipboardId = getClipboardIdFromDataTransfer(e.clipboardData);
            var clipboardData = this.clipboadService.get(clipboardId);
            if (clipboardData) {
                this.actionDispatcher
                    .dispatch(new copy_paste_actions_1.PasteOperationAction(clipboardData, this.editorContext.get()));
            }
            e.preventDefault();
        }
    };
    ServerCopyPasteHandler.prototype.shouldCopy = function (e) {
        return this.editorContext.get().selectedElementIds.length > 0
            && (e.srcElement instanceof HTMLBodyElement || e.srcElement instanceof SVGElement);
    };
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IActionDispatcher),
        __metadata("design:type", glsp_action_dispatcher_1.GLSPActionDispatcher)
    ], ServerCopyPasteHandler.prototype, "actionDispatcher", void 0);
    __decorate([
        inversify_1.inject(types_1.GLSP_TYPES.IAsyncClipboardService),
        __metadata("design:type", Object)
    ], ServerCopyPasteHandler.prototype, "clipboadService", void 0);
    __decorate([
        inversify_1.inject(editor_context_1.EditorContextService),
        __metadata("design:type", editor_context_1.EditorContextService)
    ], ServerCopyPasteHandler.prototype, "editorContext", void 0);
    ServerCopyPasteHandler = __decorate([
        inversify_1.injectable()
    ], ServerCopyPasteHandler);
    return ServerCopyPasteHandler;
}());
exports.ServerCopyPasteHandler = ServerCopyPasteHandler;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/di.config.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/copy-paste/di.config.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var lib_1 = __webpack_require__(/*! sprotty/lib */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var copy_paste_context_menu_1 = __webpack_require__(/*! ./copy-paste-context-menu */ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-context-menu.js");
var copy_paste_handler_1 = __webpack_require__(/*! ./copy-paste-handler */ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-handler.js");
exports.glspServerCopyPasteModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    bind(types_1.GLSP_TYPES.ICopyPasteHandler).to(copy_paste_handler_1.ServerCopyPasteHandler);
    bind(types_1.GLSP_TYPES.IAsyncClipboardService).to(copy_paste_handler_1.LocalClipboardService).inSingletonScope();
});
exports.copyPasteContextMenuModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    bind(types_1.GLSP_TYPES.IContextMenuProvider).to(copy_paste_context_menu_1.CopyPasteContextMenuItemProvider).inSingletonScope();
    bind(copy_paste_context_menu_1.InvokeCopyPasteActionHandler).toSelf().inSingletonScope();
    lib_1.configureActionHandler({ bind: bind, isBound: isBound }, copy_paste_context_menu_1.InvokeCopyAction.KIND, copy_paste_context_menu_1.InvokeCopyPasteActionHandler);
    lib_1.configureActionHandler({ bind: bind, isBound: isBound }, copy_paste_context_menu_1.InvokeCutAction.KIND, copy_paste_context_menu_1.InvokeCopyPasteActionHandler);
    lib_1.configureActionHandler({ bind: bind, isBound: isBound }, copy_paste_context_menu_1.InvokePasteAction.KIND, copy_paste_context_menu_1.InvokeCopyPasteActionHandler);
});


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/edit-label-validation/di.config.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/edit-label-validation/di.config.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var edit_label_validator_1 = __webpack_require__(/*! ./edit-label-validator */ "../node_modules/@eclipse-glsp/client/lib/features/edit-label-validation/edit-label-validator.js");
var glspEditLabelValidationModule = new inversify_1.ContainerModule(function (bind) {
    bind(sprotty_1.TYPES.IEditLabelValidator).to(edit_label_validator_1.ServerEditLabelValidator);
    bind(sprotty_1.TYPES.IEditLabelValidationDecorator).to(edit_label_validator_1.BalloonLabelValidationDecorator);
});
exports.default = glspEditLabelValidationModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/edit-label-validation/edit-label-validator.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/edit-label-validation/edit-label-validator.js ***!
  \*******************************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var edit_validation_actions_1 = __webpack_require__(/*! ../../base/actions/edit-validation-actions */ "../node_modules/@eclipse-glsp/client/lib/base/actions/edit-validation-actions.js");
var glsp_action_dispatcher_1 = __webpack_require__(/*! ../request-response/glsp-action-dispatcher */ "../node_modules/@eclipse-glsp/client/lib/features/request-response/glsp-action-dispatcher.js");
var LabelEditValidation;
(function (LabelEditValidation) {
    LabelEditValidation.CONTEXT_ID = 'label-edit';
    function toEditLabelValidationResult(status) {
        var message = status.message;
        var severity = 'ok';
        if (edit_validation_actions_1.ValidationStatus.isError(status)) {
            severity = 'error';
        }
        else if (edit_validation_actions_1.ValidationStatus.isWarning(status)) {
            severity = 'warning';
        }
        return { message: message, severity: severity };
    }
    LabelEditValidation.toEditLabelValidationResult = toEditLabelValidationResult;
})(LabelEditValidation = exports.LabelEditValidation || (exports.LabelEditValidation = {}));
var ValidateLabelEditAction = /** @class */ (function (_super) {
    __extends(ValidateLabelEditAction, _super);
    function ValidateLabelEditAction(value, labelId) {
        return _super.call(this, LabelEditValidation.CONTEXT_ID, labelId, value) || this;
    }
    return ValidateLabelEditAction;
}(edit_validation_actions_1.RequestEditValidationAction));
exports.ValidateLabelEditAction = ValidateLabelEditAction;
var ServerEditLabelValidator = /** @class */ (function () {
    function ServerEditLabelValidator() {
    }
    ServerEditLabelValidator.prototype.validate = function (value, label) {
        var _this = this;
        var action = new ValidateLabelEditAction(value, label.id);
        return this.actionDispatcher.requestUntil(action).then(function (response) { return _this.getValidationResultFromResponse(response); });
    };
    ServerEditLabelValidator.prototype.getValidationResultFromResponse = function (action) {
        if (edit_validation_actions_1.isSetEditValidationResultAction(action)) {
            return LabelEditValidation.toEditLabelValidationResult(action.status);
        }
        return { severity: 'ok' };
    };
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IActionDispatcher),
        __metadata("design:type", glsp_action_dispatcher_1.GLSPActionDispatcher)
    ], ServerEditLabelValidator.prototype, "actionDispatcher", void 0);
    ServerEditLabelValidator = __decorate([
        inversify_1.injectable()
    ], ServerEditLabelValidator);
    return ServerEditLabelValidator;
}());
exports.ServerEditLabelValidator = ServerEditLabelValidator;
var BalloonLabelValidationDecorator = /** @class */ (function () {
    function BalloonLabelValidationDecorator() {
    }
    BalloonLabelValidationDecorator.prototype.decorate = function (input, result) {
        var containerElement = input.parentElement;
        if (!containerElement) {
            return;
        }
        if (result.message) {
            containerElement.setAttribute('data-balloon', result.message);
            containerElement.setAttribute('data-balloon-pos', 'up-left');
            containerElement.setAttribute('data-balloon-visible', 'true');
        }
        switch (result.severity) {
            case 'ok':
                containerElement.classList.add('validation-ok');
                break;
            case 'warning':
                containerElement.classList.add('validation-warning');
                break;
            case 'error':
                containerElement.classList.add('validation-error');
                break;
        }
    };
    BalloonLabelValidationDecorator.prototype.dispose = function (input) {
        var containerElement = input.parentElement;
        if (containerElement) {
            containerElement.removeAttribute('data-balloon');
            containerElement.removeAttribute('data-balloon-pos');
            containerElement.removeAttribute('data-balloon-visible');
            containerElement.classList.remove('validation-ok', 'validation-warning', 'validation-error');
        }
    };
    BalloonLabelValidationDecorator = __decorate([
        inversify_1.injectable()
    ], BalloonLabelValidationDecorator);
    return BalloonLabelValidationDecorator;
}());
exports.BalloonLabelValidationDecorator = BalloonLabelValidationDecorator;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/execute/di.config.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/execute/di.config.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var execute_command_1 = __webpack_require__(/*! ./execute-command */ "../node_modules/@eclipse-glsp/client/lib/features/execute/execute-command.js");
var executeCommandModule = new inversify_1.ContainerModule(function (bind) {
    bind(sprotty_1.TYPES.MouseListener).to(execute_command_1.ExecuteCommandMouseListener);
});
exports.default = executeCommandModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/execute/execute-command.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/execute/execute-command.js ***!
  \************************************************************************************/
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var model_1 = __webpack_require__(/*! ./model */ "../node_modules/@eclipse-glsp/client/lib/features/execute/model.js");
var ExecuteServerCommandAction = /** @class */ (function () {
    function ExecuteServerCommandAction(commandId, options) {
        this.commandId = commandId;
        this.options = options;
        this.kind = ExecuteServerCommandAction.KIND;
    }
    ExecuteServerCommandAction.KIND = "executeServerCommand";
    return ExecuteServerCommandAction;
}());
exports.ExecuteServerCommandAction = ExecuteServerCommandAction;
var ExecuteCommandMouseListener = /** @class */ (function (_super) {
    __extends(ExecuteCommandMouseListener, _super);
    function ExecuteCommandMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExecuteCommandMouseListener.prototype.doubleClick = function (target, event) {
        var result = [];
        var commandExecutorTarget = sprotty_1.findParentByFeature(target, model_1.isCommandExecutor);
        if (commandExecutorTarget) {
            result.push(new ExecuteServerCommandAction(commandExecutorTarget.commandId, { invokerId: commandExecutorTarget.id }));
        }
        return result;
    };
    return ExecuteCommandMouseListener;
}(sprotty_1.MouseListener));
exports.ExecuteCommandMouseListener = ExecuteCommandMouseListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/execute/model.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/execute/model.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommandFeature = Symbol('executeFeature');
function isCommandExecutor(element) {
    return element.hasFeature(exports.executeCommandFeature);
}
exports.isCommandExecutor = isCommandExecutor;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/hints/di.config.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/hints/di.config.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var request_type_hints_action_1 = __webpack_require__(/*! ./request-type-hints-action */ "../node_modules/@eclipse-glsp/client/lib/features/hints/request-type-hints-action.js");
var type_hints_1 = __webpack_require__(/*! ./type-hints */ "../node_modules/@eclipse-glsp/client/lib/features/hints/type-hints.js");
var modelHintsModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    bind(type_hints_1.TypeHintProvider).toSelf().inSingletonScope();
    bind(types_1.GLSP_TYPES.ITypeHintProvider).toService(type_hints_1.TypeHintProvider);
    sprotty_1.configureActionHandler({ bind: bind, isBound: isBound }, request_type_hints_action_1.SetTypeHintsAction.KIND, type_hints_1.TypeHintProvider);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, type_hints_1.ApplyTypeHintsCommand);
});
exports.default = modelHintsModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/hints/model.js":
/*!************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/hints/model.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.containerFeature = Symbol("containable");
function isContainable(element) {
    return element.hasFeature(exports.containerFeature);
}
exports.isContainable = isContainable;
exports.reparentFeature = Symbol("reparentFeature");
function isReparentable(element) {
    return element.hasFeature(exports.reparentFeature);
}
exports.isReparentable = isReparentable;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/hints/request-type-hints-action.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/hints/request-type-hints-action.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RequestTypeHintsAction = /** @class */ (function () {
    function RequestTypeHintsAction(diagramType) {
        this.diagramType = diagramType;
        this.kind = RequestTypeHintsAction.KIND;
    }
    RequestTypeHintsAction.KIND = "requestTypeHints";
    return RequestTypeHintsAction;
}());
exports.RequestTypeHintsAction = RequestTypeHintsAction;
var SetTypeHintsAction = /** @class */ (function () {
    function SetTypeHintsAction(shapeHints, edgeHints) {
        this.shapeHints = shapeHints;
        this.edgeHints = edgeHints;
        this.kind = SetTypeHintsAction.KIND;
    }
    SetTypeHintsAction.KIND = "setTypeHints";
    return SetTypeHintsAction;
}());
exports.SetTypeHintsAction = SetTypeHintsAction;
function isSetTypeHintsAction(action) {
    return action !== undefined && (action.kind === SetTypeHintsAction.KIND)
        && action.shapeHints !== undefined && action.edgeHints !== undefined;
}
exports.isSetTypeHintsAction = isSetTypeHintsAction;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/hints/type-hints.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/hints/type-hints.js ***!
  \*****************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var model_1 = __webpack_require__(/*! ../change-bounds/model */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js");
var model_2 = __webpack_require__(/*! ../reconnect/model */ "../node_modules/@eclipse-glsp/client/lib/features/reconnect/model.js");
var model_3 = __webpack_require__(/*! ../tool-feedback/model */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js");
var model_4 = __webpack_require__(/*! ./model */ "../node_modules/@eclipse-glsp/client/lib/features/hints/model.js");
var request_type_hints_action_1 = __webpack_require__(/*! ./request-type-hints-action */ "../node_modules/@eclipse-glsp/client/lib/features/hints/request-type-hints-action.js");
var TypeHint = /** @class */ (function () {
    function TypeHint() {
    }
    return TypeHint;
}());
exports.TypeHint = TypeHint;
var ShapeTypeHint = /** @class */ (function (_super) {
    __extends(ShapeTypeHint, _super);
    function ShapeTypeHint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShapeTypeHint;
}(TypeHint));
exports.ShapeTypeHint = ShapeTypeHint;
var EdgeTypeHint = /** @class */ (function (_super) {
    __extends(EdgeTypeHint, _super);
    function EdgeTypeHint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EdgeTypeHint.prototype.isAllowedSource = function (input) {
        var type = getElementTypeId(input);
        return this.sourceElementTypeIds.includes(type);
    };
    EdgeTypeHint.prototype.isAllowedTarget = function (input) {
        var type = getElementTypeId(input);
        return this.targetElementTypeIds.includes(type);
    };
    return EdgeTypeHint;
}(TypeHint));
exports.EdgeTypeHint = EdgeTypeHint;
var ApplyTypeHintsAction = /** @class */ (function () {
    function ApplyTypeHintsAction() {
        this.kind = ApplyTypeHintsCommand.KIND;
    }
    ApplyTypeHintsAction = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ApplyTypeHintsAction);
    return ApplyTypeHintsAction;
}());
exports.ApplyTypeHintsAction = ApplyTypeHintsAction;
var ApplyTypeHintsCommand = /** @class */ (function (_super) {
    __extends(ApplyTypeHintsCommand, _super);
    function ApplyTypeHintsCommand(action, typeHintProvider) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.typeHintProvider = typeHintProvider;
        _this.priority = 10;
        return _this;
    }
    ApplyTypeHintsCommand.prototype.execute = function (context) {
        var _this = this;
        context.root.index.all()
            .forEach(function (element) {
            if (element instanceof sprotty_1.SShapeElement || element instanceof sprotty_1.SModelRoot) {
                _this.applyShapeTypeHint(element);
            }
            else if (element instanceof sprotty_1.SEdge) {
                return _this.applyEdgeTypeHint(element);
            }
        });
        return context.root;
    };
    ApplyTypeHintsCommand.prototype.applyEdgeTypeHint = function (element) {
        var hint = this.typeHintProvider.getEdgeTypeHint(element);
        if (hint && isModifiableFetureSet(element.features)) {
            addOrRemove(element.features, sprotty_1.deletableFeature, hint.deletable);
            addOrRemove(element.features, sprotty_1.editFeature, hint.routable);
            addOrRemove(element.features, model_2.reconnectFeature, hint.repositionable);
        }
    };
    ApplyTypeHintsCommand.prototype.applyShapeTypeHint = function (element) {
        var hint = this.typeHintProvider.getShapeTypeHint(element);
        if (hint && isModifiableFetureSet(element.features)) {
            addOrRemove(element.features, sprotty_1.deletableFeature, hint.deletable);
            addOrRemove(element.features, sprotty_1.moveFeature, hint.repositionable);
            addOrRemove(element.features, model_1.resizeFeature, hint.resizable);
            addOrRemove(element.features, model_4.reparentFeature, hint.reparentable);
            addOrRemove(element.features, model_4.containerFeature, true);
            var containable = createContainable(hint);
            Object.assign(element, containable);
            addOrRemove(element.features, sprotty_1.connectableFeature, true);
            var validSourceEdges = this.typeHintProvider.getValidEdgeElementTypes(element, "source");
            var validTargetEdges = this.typeHintProvider.getValidEdgeElementTypes(element, "target");
            var connectable = createConnectable(validSourceEdges, validTargetEdges);
            Object.assign(element, connectable);
        }
    };
    ApplyTypeHintsCommand.KIND = "applyTypeHints";
    ApplyTypeHintsCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __param(1, inversify_1.inject(types_1.GLSP_TYPES.ITypeHintProvider)),
        __metadata("design:paramtypes", [ApplyTypeHintsAction, Object])
    ], ApplyTypeHintsCommand);
    return ApplyTypeHintsCommand;
}(model_3.FeedbackCommand));
exports.ApplyTypeHintsCommand = ApplyTypeHintsCommand;
function createConnectable(validSourceEdges, validTargetEdges) {
    return {
        canConnect: function (routable, role) {
            return role === "source" ?
                validSourceEdges.includes(routable.type) :
                validTargetEdges.includes(routable.type);
        }
    };
}
function createContainable(hint) {
    return {
        isContainableElement: function (element) {
            return hint.containableElementTypeIds ?
                hint.containableElementTypeIds.includes(getElementTypeId(element)) :
                false;
        }
    };
}
function addOrRemove(features, feature, add) {
    if (add && !features.has(feature)) {
        features.add(feature);
    }
    else if (!add && features.has(feature)) {
        features.delete(feature);
    }
}
function isModifiableFetureSet(featureSet) {
    return featureSet !== undefined && featureSet instanceof Set;
}
var TypeHintProvider = /** @class */ (function () {
    function TypeHintProvider() {
        this.shapeHints = new Map;
        this.edgeHints = new Map;
    }
    TypeHintProvider.prototype.handle = function (action) {
        var _this = this;
        if (request_type_hints_action_1.isSetTypeHintsAction(action)) {
            action.shapeHints.forEach(function (hint) { return _this.shapeHints.set(hint.elementTypeId, hint); });
            action.edgeHints.forEach(function (hint) { return _this.edgeHints.set(hint.elementTypeId, hint); });
            this.feedbackActionDispatcher.registerFeedback(this, [new ApplyTypeHintsAction()]);
        }
    };
    TypeHintProvider.prototype.getValidEdgeElementTypes = function (input, role) {
        var elementTypeId = getElementTypeId(input);
        if (role === "source") {
            return Array.from(Array.from(this.edgeHints.values())
                .filter(function (hint) { return hint.sourceElementTypeIds.includes(elementTypeId); })
                .map(function (hint) { return hint.elementTypeId; }));
        }
        else {
            return Array.from(Array.from(this.edgeHints.values())
                .filter(function (hint) { return hint.targetElementTypeIds.includes(elementTypeId); })
                .map(function (hint) { return hint.elementTypeId; }));
        }
    };
    TypeHintProvider.prototype.getShapeTypeHint = function (input) {
        var type = getElementTypeId(input);
        return this.shapeHints.get(type);
    };
    TypeHintProvider.prototype.getEdgeTypeHint = function (input) {
        var type = getElementTypeId(input);
        return this.edgeHints.get(type);
    };
    __decorate([
        inversify_1.inject(types_1.GLSP_TYPES.IFeedbackActionDispatcher),
        __metadata("design:type", Object)
    ], TypeHintProvider.prototype, "feedbackActionDispatcher", void 0);
    TypeHintProvider = __decorate([
        inversify_1.injectable()
    ], TypeHintProvider);
    return TypeHintProvider;
}());
exports.TypeHintProvider = TypeHintProvider;
function getElementTypeId(input) {
    if (typeof input === 'string') {
        return input;
    }
    else {
        return input["type"];
    }
}
exports.getElementTypeId = getElementTypeId;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/hover/di.config.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/hover/di.config.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2020 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var popup_position_updater_1 = __webpack_require__(/*! sprotty/lib/features/hover/popup-position-updater */ "../node_modules/sprotty/lib/features/hover/popup-position-updater.js");
var hover_1 = __webpack_require__(/*! ./hover */ "../node_modules/@eclipse-glsp/client/lib/features/hover/hover.js");
var glspHoverModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    bind(sprotty_1.TYPES.PopupVNodePostprocessor).to(popup_position_updater_1.PopupPositionUpdater).inSingletonScope();
    bind(sprotty_1.TYPES.MouseListener).to(hover_1.GlspHoverMouseListener);
    bind(sprotty_1.TYPES.PopupMouseListener).to(sprotty_1.PopupHoverMouseListener);
    bind(sprotty_1.TYPES.KeyListener).to(sprotty_1.HoverKeyListener);
    bind(sprotty_1.TYPES.HoverState).toConstantValue({
        mouseOverTimer: undefined,
        mouseOutTimer: undefined,
        popupOpen: false,
        previousPopupElement: undefined
    });
    bind(sprotty_1.ClosePopupActionHandler).toSelf().inSingletonScope();
    var context = { bind: bind, isBound: isBound };
    sprotty_1.configureCommand(context, sprotty_1.HoverFeedbackCommand);
    sprotty_1.configureCommand(context, sprotty_1.SetPopupModelCommand);
    sprotty_1.configureActionHandler(context, sprotty_1.SetPopupModelCommand.KIND, sprotty_1.ClosePopupActionHandler);
    sprotty_1.configureActionHandler(context, sprotty_1.FitToScreenCommand.KIND, sprotty_1.ClosePopupActionHandler);
    sprotty_1.configureActionHandler(context, sprotty_1.CenterCommand.KIND, sprotty_1.ClosePopupActionHandler);
    sprotty_1.configureActionHandler(context, sprotty_1.SetViewportCommand.KIND, sprotty_1.ClosePopupActionHandler);
    sprotty_1.configureActionHandler(context, sprotty_1.MoveCommand.KIND, sprotty_1.ClosePopupActionHandler);
});
exports.default = glspHoverModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/hover/hover.js":
/*!************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/hover/hover.js ***!
  \************************************************************************/
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
/********************************************************************************
 * Copyright (c) 2020 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var validate_1 = __webpack_require__(/*! ../validation/validate */ "../node_modules/@eclipse-glsp/client/lib/features/validation/validate.js");
var GlspHoverMouseListener = /** @class */ (function (_super) {
    __extends(GlspHoverMouseListener, _super);
    function GlspHoverMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlspHoverMouseListener.prototype.startMouseOverTimer = function (target, event) {
        var _this = this;
        this.stopMouseOverTimer();
        return new Promise(function (resolve) {
            _this.state.mouseOverTimer = window.setTimeout(function () {
                var popupBounds = _this.computePopupBounds(target, { x: event.pageX, y: event.pageY });
                if (target instanceof validate_1.GIssueMarker) {
                    resolve(new sprotty_1.SetPopupModelAction(_this.createPopupModel(target, popupBounds)));
                }
                else {
                    resolve(new sprotty_1.RequestPopupModelAction(target.id, popupBounds));
                }
                _this.state.popupOpen = true;
                _this.state.previousPopupElement = target;
            }, _this.options.popupOpenDelay);
        });
    };
    GlspHoverMouseListener.prototype.createPopupModel = function (marker, bounds) {
        if (marker.issues !== undefined && marker.issues.length > 0) {
            var message = marker.issues
                .map(function (i) { return i.message; })
                .join("\n");
            return {
                type: 'html',
                id: 'sprotty-popup',
                children: [
                    {
                        type: 'pre-rendered',
                        id: 'popup-title',
                        code: "<div class=\"" + getSeverity(marker) + "\"><div class=\"sprotty-popup-title\">" + message + "</div></div>"
                    }
                ],
                canvasBounds: this.modifyBounds(bounds)
            };
        }
        return { type: sprotty_1.EMPTY_ROOT.type, id: sprotty_1.EMPTY_ROOT.id };
    };
    GlspHoverMouseListener.prototype.modifyBounds = function (bounds) {
        return bounds;
    };
    GlspHoverMouseListener = __decorate([
        inversify_1.injectable()
    ], GlspHoverMouseListener);
    return GlspHoverMouseListener;
}(sprotty_1.HoverMouseListener));
exports.GlspHoverMouseListener = GlspHoverMouseListener;
function getSeverity(marker) {
    var e_1, _a;
    var currentSeverity = 'info';
    try {
        for (var _b = __values(marker.issues.map(function (s) { return s.severity; })), _c = _b.next(); !_c.done; _c = _b.next()) {
            var severity = _c.value;
            if (severity === 'error')
                return severity;
            if (severity === 'warning' && currentSeverity === 'info')
                currentSeverity = severity;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return currentSeverity;
}
exports.getSeverity = getSeverity;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/layout/di.config.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/layout/di.config.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var layout_commands_1 = __webpack_require__(/*! ./layout-commands */ "../node_modules/@eclipse-glsp/client/lib/features/layout/layout-commands.js");
var layoutCommandsModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, layout_commands_1.ResizeElementsCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, layout_commands_1.AlignElementsCommand);
    bind(sprotty_1.TYPES.KeyListener).to(layout_commands_1.LayoutKeyboardListener);
});
exports.default = layoutCommandsModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/layout/layout-commands.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/layout/layout-commands.js ***!
  \***********************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var keyboard_1 = __webpack_require__(/*! sprotty/lib/utils/keyboard */ "../node_modules/sprotty/lib/utils/keyboard.js");
var operation_1 = __webpack_require__(/*! ../../base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var layout_utils_1 = __webpack_require__(/*! ../../utils/layout-utils */ "../node_modules/@eclipse-glsp/client/lib/utils/layout-utils.js");
var model_1 = __webpack_require__(/*! ../change-bounds/model */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js");
var selection_service_1 = __webpack_require__(/*! ../select/selection-service */ "../node_modules/@eclipse-glsp/client/lib/features/select/selection-service.js");
var ResizeDimension;
(function (ResizeDimension) {
    ResizeDimension[ResizeDimension["Width"] = 0] = "Width";
    ResizeDimension[ResizeDimension["Height"] = 1] = "Height";
    ResizeDimension[ResizeDimension["Width_And_Height"] = 2] = "Width_And_Height";
})(ResizeDimension = exports.ResizeDimension || (exports.ResizeDimension = {}));
var Reduce;
(function (Reduce) {
    function min() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return Math.min.apply(Math, __spread(values));
    }
    Reduce.min = min;
    function max() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return Math.max.apply(Math, __spread(values));
    }
    Reduce.max = max;
    function avg() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values.reduce(function (a, b) { return a + b; }, 0) / values.length;
    }
    Reduce.avg = avg;
    function first() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values[0];
    }
    Reduce.first = first;
    function last() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return values[values.length - 1];
    }
    Reduce.last = last;
})(Reduce = exports.Reduce || (exports.Reduce = {}));
var ResizeElementsAction = /** @class */ (function () {
    function ResizeElementsAction(
    /**
     * IDs of the elements that should be resized. If no IDs are given, the selected elements will be resized.
     */
    elementIds, 
    /**
     * Resize dimension.
     */
    dimension, 
    /**
     * Function to reduce the dimension to a target dimension value, see Reduce.* for potential functions.
     */
    reductionFunction) {
        if (elementIds === void 0) { elementIds = []; }
        if (dimension === void 0) { dimension = ResizeDimension.Width; }
        this.elementIds = elementIds;
        this.dimension = dimension;
        this.reductionFunction = reductionFunction;
        this.kind = ResizeElementsCommand.KIND;
    }
    return ResizeElementsAction;
}());
exports.ResizeElementsAction = ResizeElementsAction;
var Alignment;
(function (Alignment) {
    Alignment[Alignment["Left"] = 0] = "Left";
    Alignment[Alignment["Center"] = 1] = "Center";
    Alignment[Alignment["Right"] = 2] = "Right";
    Alignment[Alignment["Top"] = 3] = "Top";
    Alignment[Alignment["Middle"] = 4] = "Middle";
    Alignment[Alignment["Bottom"] = 5] = "Bottom";
})(Alignment = exports.Alignment || (exports.Alignment = {}));
var Select;
(function (Select) {
    function all(elements) {
        return elements;
    }
    Select.all = all;
    function first(elements) {
        return [elements[0]];
    }
    Select.first = first;
    function last(elements) {
        return [elements[elements.length - 1]];
    }
    Select.last = last;
})(Select = exports.Select || (exports.Select = {}));
var AlignElementsAction = /** @class */ (function () {
    function AlignElementsAction(
    /**
     * IDs of the elements that should be aligned. If no IDs are given, the selected elements will be aligned.
     */
    elementIds, 
    /**
     * Alignment direction.
     */
    alignment, 
    /**
     * Function to selected elements that are considered during alignment calculation, see Select.* for potential functions.
     */
    selectionFunction) {
        if (elementIds === void 0) { elementIds = []; }
        if (alignment === void 0) { alignment = Alignment.Left; }
        if (selectionFunction === void 0) { selectionFunction = Select.all; }
        this.elementIds = elementIds;
        this.alignment = alignment;
        this.selectionFunction = selectionFunction;
        this.kind = AlignElementsCommand.KIND;
    }
    return AlignElementsAction;
}());
exports.AlignElementsAction = AlignElementsAction;
var LayoutElementsCommand = /** @class */ (function (_super) {
    __extends(LayoutElementsCommand, _super);
    function LayoutElementsCommand(action, actionDispatcher, selectionService, movementRestrictor) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.actionDispatcher = actionDispatcher;
        _this.selectionService = selectionService;
        _this.movementRestrictor = movementRestrictor;
        return _this;
    }
    LayoutElementsCommand.prototype.getActionElements = function (context) {
        var _this = this;
        var model = context.root;
        var elementIDs = this.action.elementIds;
        if (elementIDs.length === 0) {
            // collect the selected elements from the selection service (selection order is kept by service)
            this.selectionService.getSelectedElementIDs().forEach(function (elementID) { return elementIDs.push(elementID); });
        }
        var boundsAwareElements = [];
        elementIDs.forEach(function (id) {
            var element = model.index.getById(id);
            if (element && _this.isActionElement(element)) {
                boundsAwareElements.push(element);
            }
        });
        return boundsAwareElements;
    };
    LayoutElementsCommand.prototype.dispatchAction = function (action) {
        this.actionDispatcher.dispatch(action);
    };
    LayoutElementsCommand.prototype.dispatchActions = function (actions) {
        this.actionDispatcher.dispatchAll(actions);
    };
    LayoutElementsCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __param(1, inversify_1.inject(sprotty_1.TYPES.IActionDispatcher)),
        __param(2, inversify_1.inject(types_1.GLSP_TYPES.SelectionService)),
        __param(3, inversify_1.inject(types_1.GLSP_TYPES.IMovementRestrictor)), __param(3, inversify_1.optional()),
        __metadata("design:paramtypes", [Object, Object, selection_service_1.SelectionService, Object])
    ], LayoutElementsCommand);
    return LayoutElementsCommand;
}(sprotty_1.Command));
var ResizeElementsCommand = /** @class */ (function (_super) {
    __extends(ResizeElementsCommand, _super);
    function ResizeElementsCommand(action, actionDispatcher, selectionService, movementRestrictor) {
        var _this = _super.call(this, action, actionDispatcher, selectionService, movementRestrictor) || this;
        _this.action = action;
        _this.actionDispatcher = actionDispatcher;
        _this.selectionService = selectionService;
        _this.movementRestrictor = movementRestrictor;
        return _this;
    }
    ResizeElementsCommand.prototype.isActionElement = function (element) {
        return model_1.isResizable(element);
    };
    ResizeElementsCommand.prototype.execute = function (context) {
        var elements = this.getActionElements(context);
        if (elements.length > 1) {
            switch (this.action.dimension) {
                case ResizeDimension.Width:
                    this.resizeWidth(elements);
                    break;
                case ResizeDimension.Height:
                    this.resizeHeight(elements);
                    break;
                case ResizeDimension.Width_And_Height:
                    this.resizeWidthAndHeight(elements);
                    break;
            }
        }
        return context.root;
    };
    ResizeElementsCommand.prototype.resizeWidth = function (elements) {
        var _a;
        var targetWidth = (_a = this.action).reductionFunction.apply(_a, __spread(elements.map(function (element) { return element.bounds.width; })));
        this.dispatchResizeActions(elements, function (element, bounds) {
            // resize around center
            var halfDiffWidth = 0.5 * (targetWidth - element.bounds.width);
            bounds.newPosition.x = element.bounds.x - halfDiffWidth;
            bounds.newSize.width = targetWidth;
        });
    };
    ResizeElementsCommand.prototype.resizeHeight = function (elements) {
        var _a;
        var targetHeight = (_a = this.action).reductionFunction.apply(_a, __spread(elements.map(function (element) { return element.bounds.height; })));
        this.dispatchResizeActions(elements, function (element, bounds) {
            // resize around middle
            var halfDiffHeight = 0.5 * (targetHeight - element.bounds.height);
            bounds.newPosition.y = element.bounds.y - halfDiffHeight;
            bounds.newSize.height = targetHeight;
        });
    };
    ResizeElementsCommand.prototype.resizeWidthAndHeight = function (elements) {
        var _a, _b;
        var targetWidth = (_a = this.action).reductionFunction.apply(_a, __spread(elements.map(function (element) { return element.bounds.width; })));
        var targetHeight = (_b = this.action).reductionFunction.apply(_b, __spread(elements.map(function (element) { return element.bounds.height; })));
        this.dispatchResizeActions(elements, function (element, bounds) {
            // resize around center and middle
            var halfDiffWidth = 0.5 * (targetWidth - element.bounds.width);
            var halfDiffHeight = 0.5 * (targetHeight - element.bounds.height);
            bounds.newPosition.x = element.bounds.x - halfDiffWidth;
            bounds.newPosition.y = element.bounds.y - halfDiffHeight;
            bounds.newSize.width = targetWidth;
            bounds.newSize.height = targetHeight;
        });
    };
    ResizeElementsCommand.prototype.dispatchResizeActions = function (elements, change) {
        var _this = this;
        var elementAndBounds = []; // client- and server-side resize
        elements.forEach(function (element) {
            var elementChange = _this.createElementAndBounds(element, change);
            if (elementChange) {
                // simply skip invalid changes
                elementAndBounds.push(elementChange);
            }
        });
        this.dispatchActions([new sprotty_1.SetBoundsAction(elementAndBounds), new operation_1.ChangeBoundsOperation(elementAndBounds)]);
    };
    ResizeElementsCommand.prototype.createElementAndBounds = function (element, change) {
        var bounds = {
            elementId: element.id,
            newPosition: {
                x: element.bounds.x,
                y: element.bounds.y
            },
            newSize: {
                width: element.bounds.width,
                height: element.bounds.height
            }
        };
        change(element, bounds);
        return layout_utils_1.toValidElementAndBounds(element, bounds, this.movementRestrictor);
    };
    ResizeElementsCommand.prototype.undo = function (context) {
        // we dispatch another action which can be undone, so no explicit implementation necessary
        return context.root;
    };
    ResizeElementsCommand.prototype.redo = function (context) {
        // we dispatch another action which can be redone, so no explicit implementation necessary
        return context.root;
    };
    ResizeElementsCommand.KIND = 'layout:resize';
    ResizeElementsCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __param(1, inversify_1.inject(sprotty_1.TYPES.IActionDispatcher)),
        __param(2, inversify_1.inject(types_1.GLSP_TYPES.SelectionService)),
        __param(3, inversify_1.inject(types_1.GLSP_TYPES.IMovementRestrictor)), __param(3, inversify_1.optional()),
        __metadata("design:paramtypes", [ResizeElementsAction, Object, selection_service_1.SelectionService, Object])
    ], ResizeElementsCommand);
    return ResizeElementsCommand;
}(LayoutElementsCommand));
exports.ResizeElementsCommand = ResizeElementsCommand;
var AlignElementsCommand = /** @class */ (function (_super) {
    __extends(AlignElementsCommand, _super);
    function AlignElementsCommand(action, actionDispatcher, selectionService, movementRestrictor) {
        var _this = _super.call(this, action, actionDispatcher, selectionService, movementRestrictor) || this;
        _this.action = action;
        _this.actionDispatcher = actionDispatcher;
        _this.selectionService = selectionService;
        _this.movementRestrictor = movementRestrictor;
        return _this;
    }
    AlignElementsCommand.prototype.isActionElement = function (element) {
        return model_1.isBoundsAwareMoveable(element);
    };
    AlignElementsCommand.prototype.execute = function (context) {
        var elements = this.getActionElements(context);
        if (elements.length > 1) {
            switch (this.action.alignment) {
                case Alignment.Left:
                    this.alignLeft(elements);
                    break;
                case Alignment.Center:
                    this.alignCenter(elements);
                    break;
                case Alignment.Right:
                    this.alignRight(elements);
                    break;
                case Alignment.Top:
                    this.alignTop(elements);
                    break;
                case Alignment.Middle:
                    this.alignMiddle(elements);
                    break;
                case Alignment.Bottom:
                    this.alignBottom(elements);
                    break;
            }
        }
        return context.root;
    };
    AlignElementsCommand.prototype.alignLeft = function (elements) {
        var calculationElements = this.action.selectionFunction(elements);
        var minX = calculationElements.map(function (element) { return element.bounds.x; }).reduce(function (a, b) { return Math.min(a, b); });
        this.dispatchAlignActions(elements, function (_, move) { return move.toPosition.x = minX; });
    };
    AlignElementsCommand.prototype.alignCenter = function (elements) {
        var calculationElements = this.action.selectionFunction(elements);
        var minX = calculationElements.map(function (element) { return element.bounds.x; }).reduce(function (a, b) { return Math.min(a, b); });
        var maxX = calculationElements.map(function (element) { return element.bounds.x + element.bounds.width; }).reduce(function (a, b) { return Math.max(a, b); });
        var diffX = maxX - minX;
        var centerX = minX + 0.5 * diffX;
        this.dispatchAlignActions(elements, function (element, move) { return move.toPosition.x = centerX - 0.5 * element.bounds.width; });
    };
    AlignElementsCommand.prototype.alignRight = function (elements) {
        var calculationElements = this.action.selectionFunction(elements);
        var maxX = calculationElements.map(function (element) { return element.bounds.x + element.bounds.width; }).reduce(function (a, b) { return Math.max(a, b); });
        this.dispatchAlignActions(elements, function (element, move) { return move.toPosition.x = maxX - element.bounds.width; });
    };
    AlignElementsCommand.prototype.alignTop = function (elements) {
        var calculationElements = this.action.selectionFunction(elements);
        var minY = calculationElements.map(function (element) { return element.bounds.y; }).reduce(function (a, b) { return Math.min(a, b); });
        this.dispatchAlignActions(elements, function (_, move) { return move.toPosition.y = minY; });
    };
    AlignElementsCommand.prototype.alignMiddle = function (elements) {
        var calculationElements = this.action.selectionFunction(elements);
        var minY = calculationElements.map(function (element) { return element.bounds.y; }).reduce(function (a, b) { return Math.min(a, b); });
        var maxY = calculationElements.map(function (element) { return element.bounds.y + element.bounds.height; }).reduce(function (a, b) { return Math.max(a, b); });
        var diffY = maxY - minY;
        var middleY = minY + 0.5 * diffY;
        this.dispatchAlignActions(elements, function (element, move) { return move.toPosition.y = middleY - 0.5 * element.bounds.height; });
    };
    AlignElementsCommand.prototype.alignBottom = function (elements) {
        var calculationElements = this.action.selectionFunction(elements);
        var maxY = calculationElements.map(function (element) { return element.bounds.y + element.bounds.height; }).reduce(function (a, b) { return Math.max(a, b); });
        this.dispatchAlignActions(elements, function (element, move) { return move.toPosition.y = maxY - element.bounds.height; });
    };
    AlignElementsCommand.prototype.dispatchAlignActions = function (elements, change) {
        var _this = this;
        var moves = []; // client-side move
        var elementAndBounds = []; // server-side move
        elements.forEach(function (element) {
            var move = _this.createElementMove(element, change);
            if (move) {
                // simply skip invalid changes
                moves.push(move);
                var elementAndBound = _this.createElementAndBounds(element, move);
                elementAndBounds.push(elementAndBound);
            }
        });
        this.dispatchActions([new sprotty_1.MoveAction(moves), new operation_1.ChangeBoundsOperation(elementAndBounds)]);
    };
    AlignElementsCommand.prototype.createElementMove = function (element, change) {
        var move = {
            elementId: element.id,
            fromPosition: {
                x: element.bounds.x,
                y: element.bounds.y
            },
            toPosition: {
                x: element.bounds.x,
                y: element.bounds.y
            }
        };
        change(element, move);
        return layout_utils_1.toValidElementMove(element, move, this.movementRestrictor);
    };
    AlignElementsCommand.prototype.createElementAndBounds = function (element, move) {
        return {
            elementId: element.id,
            newPosition: {
                x: move.toPosition.x,
                y: move.toPosition.y
            },
            newSize: {
                width: element.bounds.width,
                height: element.bounds.height
            }
        };
    };
    AlignElementsCommand.prototype.undo = function (context) {
        // we dispatch another action which can be undone, so no explicit implementation necessary
        return context.root;
    };
    AlignElementsCommand.prototype.redo = function (context) {
        // we dispatch another action which can be redone, so no explicit implementation necessary
        return context.root;
    };
    AlignElementsCommand.KIND = 'layout:align';
    AlignElementsCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __param(1, inversify_1.inject(sprotty_1.TYPES.IActionDispatcher)),
        __param(2, inversify_1.inject(types_1.GLSP_TYPES.SelectionService)),
        __param(3, inversify_1.inject(types_1.GLSP_TYPES.IMovementRestrictor)), __param(3, inversify_1.optional()),
        __metadata("design:paramtypes", [AlignElementsAction, Object, selection_service_1.SelectionService, Object])
    ], AlignElementsCommand);
    return AlignElementsCommand;
}(LayoutElementsCommand));
exports.AlignElementsCommand = AlignElementsCommand;
var LayoutKeyboardListener = /** @class */ (function (_super) {
    __extends(LayoutKeyboardListener, _super);
    function LayoutKeyboardListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayoutKeyboardListener.prototype.keyDown = function (element, event) {
        if (keyboard_1.matchesKeystroke(event, 'KeyW', 'shift')) {
            return [new ResizeElementsAction([], ResizeDimension.Width, Reduce.max)];
        }
        if (keyboard_1.matchesKeystroke(event, 'KeyH', 'shift')) {
            return [new ResizeElementsAction([], ResizeDimension.Height, Reduce.max)];
        }
        return [];
    };
    return LayoutKeyboardListener;
}(sprotty_1.KeyListener));
exports.LayoutKeyboardListener = LayoutKeyboardListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/mouse-tool/di.config.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/mouse-tool/di.config.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var mouse_tool_1 = __webpack_require__(/*! ./mouse-tool */ "../node_modules/@eclipse-glsp/client/lib/features/mouse-tool/mouse-tool.js");
var glspMouseToolModule = new inversify_1.ContainerModule(function (bind, _unbind, _isBound, rebind) {
    bind(mouse_tool_1.RankingMouseTool).toSelf().inSingletonScope();
    bind(types_1.GLSP_TYPES.MouseTool).toService(mouse_tool_1.RankingMouseTool);
    rebind(sprotty_1.MouseTool).toService(mouse_tool_1.RankingMouseTool);
});
exports.default = glspMouseToolModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/mouse-tool/mouse-tool.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/mouse-tool/mouse-tool.js ***!
  \**********************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var model_1 = __webpack_require__(/*! ../rank/model */ "../node_modules/@eclipse-glsp/client/lib/features/rank/model.js");
var RankingMouseTool = /** @class */ (function (_super) {
    __extends(RankingMouseTool, _super);
    function RankingMouseTool(mouseListeners) {
        if (mouseListeners === void 0) { mouseListeners = []; }
        var _this = _super.call(this, mouseListeners) || this;
        _this.mouseListeners = mouseListeners;
        _this.rankedMouseListeners = groupBy(mouseListeners, function (listener) { return model_1.getRank(listener); });
        return _this;
    }
    RankingMouseTool.prototype.register = function (mouseListener) {
        _super.prototype.register.call(this, mouseListener);
        this.rankedMouseListeners = groupBy(this.mouseListeners, function (listener) { return model_1.getRank(listener); });
    };
    RankingMouseTool.prototype.deregister = function (mouseListener) {
        _super.prototype.deregister.call(this, mouseListener);
        this.rankedMouseListeners = groupBy(this.mouseListeners, function (listener) { return model_1.getRank(listener); });
    };
    RankingMouseTool.prototype.decorate = function (vnode, element) {
        // we need to overwrite the existing event handlers registered by the original mouse tool
        if (element instanceof sprotty_1.SModelRoot) {
            overwriteOn(vnode, 'mouseover', this.mouseOver.bind(this), element);
            overwriteOn(vnode, 'mouseout', this.mouseOut.bind(this), element);
            overwriteOn(vnode, 'mouseenter', this.mouseEnter.bind(this), element);
            overwriteOn(vnode, 'mouseleave', this.mouseLeave.bind(this), element);
            overwriteOn(vnode, 'mousedown', this.mouseDown.bind(this), element);
            overwriteOn(vnode, 'mouseup', this.mouseUp.bind(this), element);
            overwriteOn(vnode, 'mousemove', this.mouseMove.bind(this), element);
            overwriteOn(vnode, 'wheel', this.wheel.bind(this), element);
            overwriteOn(vnode, 'contextmenu', function (target, event) {
                event.preventDefault();
            }, element);
            overwriteOn(vnode, 'dblclick', this.doubleClick.bind(this), element);
        }
        vnode = this.mouseListeners.reduce(function (n, listener) { return listener.decorate(n, element); }, vnode);
        return vnode;
    };
    RankingMouseTool.prototype.handleEvent = function (methodName, model, event) {
        this.focusOnMouseEvent(methodName, model);
        var element = this.getTargetElement(model, event);
        if (!element) {
            return;
        }
        this.notifyListenersByRank(element, methodName, model, event);
    };
    RankingMouseTool.prototype.notifyListenersByRank = function (element, methodName, model, event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, rank, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.rankedMouseListeners), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        rank = _b.value;
                        return [4 /*yield*/, this.dispatchActions(rank[1], methodName, element, event)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    RankingMouseTool.prototype.dispatchActions = function (mouseListeners, methodName, element, event) {
        return __awaiter(this, void 0, void 0, function () {
            var actions, actions_1, actions_1_1, actionOrPromise, e_2_1;
            var e_2, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        actions = mouseListeners
                            .map(function (listener) { return listener[methodName].apply(listener, [element, event]); })
                            .reduce(function (a, b) { return a.concat(b); });
                        if (!(actions.length > 0)) return [3 /*break*/, 9];
                        event.preventDefault();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, 8, 9]);
                        actions_1 = __values(actions), actions_1_1 = actions_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!actions_1_1.done) return [3 /*break*/, 6];
                        actionOrPromise = actions_1_1.value;
                        if (!sprotty_1.isAction(actionOrPromise)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.actionDispatcher.dispatch(actionOrPromise)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        actionOrPromise.then(function (action) {
                            _this.actionDispatcher.dispatch(action);
                        });
                        _b.label = 5;
                    case 5:
                        actions_1_1 = actions_1.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    RankingMouseTool = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.multiInject(sprotty_1.TYPES.MouseListener)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [Array])
    ], RankingMouseTool);
    return RankingMouseTool;
}(sprotty_1.MouseTool));
exports.RankingMouseTool = RankingMouseTool;
function groupBy(array, keyFunction) {
    var unsortedMap = array.reduce(function (result, item) {
        var key = keyFunction(item);
        if (!result.has(key)) {
            result.set(key, [item]);
        }
        else {
            var entries = result.get(key);
            if (entries) {
                entries.push(item);
            }
        }
        return result;
    }, new Map());
    return new Map(__spread(unsortedMap.entries()).sort());
}
function overwriteOn(vnode, event, listener, element) {
    var val = getOn(vnode);
    // ignore any previous val[event] registrations
    val[event] = [listener, element];
}
function getOn(vnode) {
    var data = getData(vnode);
    if (!data.on)
        data.on = {};
    return data.on;
}
function getData(vnode) {
    if (!vnode.data)
        vnode.data = {};
    return vnode.data;
}


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/rank/model.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/rank/model.js ***!
  \***********************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_RANK = 0;
function isRanked(arg) {
    return arg !== undefined && arg.rank !== undefined && typeof (arg.rank) === 'number';
}
exports.isRanked = isRanked;
function getRank(arg) {
    return isRanked(arg) ? arg.rank : exports.DEFAULT_RANK;
}
exports.getRank = getRank;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/reconnect/model.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/reconnect/model.js ***!
  \****************************************************************************/
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
exports.reconnectFeature = Symbol("reconnectFeature");
function isReconnectable(element) {
    return element instanceof sprotty_1.SRoutableElement && element.hasFeature(exports.reconnectFeature);
}
exports.isReconnectable = isReconnectable;
var ROUTING_HANDLE_SOURCE_INDEX = -2;
function isReconnectHandle(element) {
    return element !== undefined && element instanceof SReconnectHandle;
}
exports.isReconnectHandle = isReconnectHandle;
function addReconnectHandles(element) {
    removeReconnectHandles(element);
    createReconnectHandle(element, 'source', ROUTING_HANDLE_SOURCE_INDEX);
    createReconnectHandle(element, 'target', element.routingPoints.length);
}
exports.addReconnectHandles = addReconnectHandles;
function removeReconnectHandles(element) {
    element.removeAll(function (child) { return child instanceof SReconnectHandle; });
}
exports.removeReconnectHandles = removeReconnectHandles;
function isSourceRoutingHandle(edge, routingHandle) {
    return routingHandle.pointIndex === ROUTING_HANDLE_SOURCE_INDEX;
}
exports.isSourceRoutingHandle = isSourceRoutingHandle;
function isTargetRoutingHandle(edge, routingHandle) {
    return routingHandle.pointIndex === edge.routingPoints.length;
}
exports.isTargetRoutingHandle = isTargetRoutingHandle;
function createReconnectHandle(edge, kind, routingPointIndex) {
    var handle = new SReconnectHandle();
    handle.kind = kind;
    handle.pointIndex = routingPointIndex;
    handle.type = 'routing-point';
    if (kind === 'target' && edge.id === sprotty_1.edgeInProgressID) {
        handle.id = sprotty_1.edgeInProgressTargetHandleID;
    }
    edge.add(handle);
    return handle;
}
exports.createReconnectHandle = createReconnectHandle;
var SReconnectHandle = /** @class */ (function (_super) {
    __extends(SReconnectHandle, _super);
    function SReconnectHandle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SReconnectHandle.prototype.hasFeature = function (feature) {
        return feature !== sprotty_1.selectFeature && _super.prototype.hasFeature.call(this, feature);
    };
    return SReconnectHandle;
}(sprotty_1.SRoutingHandle));
exports.SReconnectHandle = SReconnectHandle;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/request-response/di.config.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/request-response/di.config.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var glsp_action_dispatcher_1 = __webpack_require__(/*! ./glsp-action-dispatcher */ "../node_modules/@eclipse-glsp/client/lib/features/request-response/glsp-action-dispatcher.js");
var requestResponseModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    rebind(sprotty_1.TYPES.IActionDispatcher).to(glsp_action_dispatcher_1.GLSPActionDispatcher).inSingletonScope();
});
exports.default = requestResponseModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/request-response/glsp-action-dispatcher.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/request-response/glsp-action-dispatcher.js ***!
  \****************************************************************************************************/
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var GLSPActionDispatcher = /** @class */ (function (_super) {
    __extends(GLSPActionDispatcher, _super);
    function GLSPActionDispatcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeouts = new Map();
        return _this;
    }
    GLSPActionDispatcher.prototype.handleAction = function (action) {
        if (sprotty_1.isResponseAction(action)) {
            // clear timeout
            var timeout = this.timeouts.get(action.responseId);
            if (timeout !== undefined) {
                clearTimeout(timeout);
                this.timeouts.delete(action.responseId);
            }
            // we might have reached a timeout, so we simply drop the response
            var deferred = this.requests.get(action.responseId);
            if (deferred === undefined) {
                this.logger.log(this, 'No matching request for response', action);
                return Promise.resolve();
            }
        }
        return _super.prototype.handleAction.call(this, action);
    };
    /**
     * Dispatch a request and waits for a response until the timeout given in `timeoutMs` has
     * been reached. The returned promise is resolved when a response with matching identifier
     * is dispatched or when the timeout has been reached. That response is _not_ passed to the
     * registered action handlers. Instead, it is the responsibility of the caller of this method
     * to handle the response properly. For example, it can be sent to the registered handlers by
     * passing it again to the `dispatch` method.
     * If `rejectOnTimeout` is set to false (default) the returned promise will be resolved with
     * no value, otherwise it will be rejected.
     */
    GLSPActionDispatcher.prototype.requestUntil = function (action, timeoutMs, rejectOnTimeout) {
        var _this = this;
        if (timeoutMs === void 0) { timeoutMs = 2000; }
        if (rejectOnTimeout === void 0) { rejectOnTimeout = false; }
        if (!action.requestId) {
            return Promise.reject(new Error('Request without requestId'));
        }
        var requestId = action.requestId;
        var timeout = setTimeout(function () {
            var deferred = _this.requests.get(requestId);
            if (deferred !== undefined) {
                // cleanup
                clearTimeout(timeout);
                _this.requests.delete(requestId);
                var notification = 'Request ' + requestId + ' (' + action + ') time out after ' + timeoutMs + 'ms.';
                if (rejectOnTimeout) {
                    deferred.reject(notification);
                }
                else {
                    _this.logger.info(_this, notification);
                    deferred.resolve();
                }
            }
        }, timeoutMs);
        this.timeouts.set(requestId, timeout);
        return _super.prototype.request.call(this, action);
    };
    return GLSPActionDispatcher;
}(sprotty_1.ActionDispatcher));
exports.GLSPActionDispatcher = GLSPActionDispatcher;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/save/di.config.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/save/di.config.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var save_1 = __webpack_require__(/*! ./save */ "../node_modules/@eclipse-glsp/client/lib/features/save/save.js");
var saveModule = new inversify_1.ContainerModule(function (bind) {
    bind(sprotty_1.TYPES.KeyListener).to(save_1.SaveModelKeyboardListener);
});
exports.default = saveModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/save/model.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/save/model.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFeature = Symbol.for('saveFeature');
function isSaveable(element) {
    return element.hasFeature(exports.saveFeature);
}
exports.isSaveable = isSaveable;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/save/save.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/save/save.js ***!
  \**********************************************************************/
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var keyboard_1 = __webpack_require__(/*! sprotty/lib/utils/keyboard */ "../node_modules/sprotty/lib/utils/keyboard.js");
var SaveModelAction = /** @class */ (function () {
    function SaveModelAction() {
        this.kind = SaveModelAction.KIND;
    }
    SaveModelAction.KIND = "saveModel";
    return SaveModelAction;
}());
exports.SaveModelAction = SaveModelAction;
var SaveModelKeyboardListener = /** @class */ (function (_super) {
    __extends(SaveModelKeyboardListener, _super);
    function SaveModelKeyboardListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveModelKeyboardListener.prototype.keyDown = function (element, event) {
        if (keyboard_1.matchesKeystroke(event, 'KeyS', 'ctrlCmd')) {
            return [new SaveModelAction()];
        }
        return [];
    };
    return SaveModelKeyboardListener;
}(sprotty_1.KeyListener));
exports.SaveModelKeyboardListener = SaveModelKeyboardListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/select/action-definitions.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/select/action-definitions.js ***!
  \**************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var selection_service_1 = __webpack_require__(/*! ./selection-service */ "../node_modules/@eclipse-glsp/client/lib/features/select/selection-service.js");
var SelectFeedbackAction = /** @class */ (function () {
    function SelectFeedbackAction(selectedElementsIDs, deselectedElementsIDs) {
        if (selectedElementsIDs === void 0) { selectedElementsIDs = []; }
        if (deselectedElementsIDs === void 0) { deselectedElementsIDs = []; }
        this.selectedElementsIDs = selectedElementsIDs;
        this.deselectedElementsIDs = deselectedElementsIDs;
        this.kind = SelectFeedbackCommand.KIND;
    }
    return SelectFeedbackAction;
}());
exports.SelectFeedbackAction = SelectFeedbackAction;
var SelectAllFeedbackAction = /** @class */ (function () {
    /**
     * If `select` is true, all elements are selected, othewise they are deselected.
     */
    function SelectAllFeedbackAction(select) {
        if (select === void 0) { select = true; }
        this.select = select;
        this.kind = SelectAllFeedbackCommand.KIND;
    }
    return SelectAllFeedbackAction;
}());
exports.SelectAllFeedbackAction = SelectAllFeedbackAction;
var SelectFeedbackCommand = /** @class */ (function (_super) {
    __extends(SelectFeedbackCommand, _super);
    function SelectFeedbackCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.sprottySelectCommand = new sprotty_1.SelectCommand(action);
        return _this;
    }
    SelectFeedbackCommand.prototype.execute = function (context) {
        return this.sprottySelectCommand.execute(context);
    };
    SelectFeedbackCommand.prototype.undo = function (context) {
        return this.sprottySelectCommand.undo(context);
    };
    SelectFeedbackCommand.prototype.redo = function (context) {
        return this.sprottySelectCommand.redo(context);
    };
    SelectFeedbackCommand.KIND = 'elementSelectedFeedback';
    SelectFeedbackCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [SelectFeedbackAction])
    ], SelectFeedbackCommand);
    return SelectFeedbackCommand;
}(sprotty_1.Command));
exports.SelectFeedbackCommand = SelectFeedbackCommand;
var SelectAllFeedbackCommand = /** @class */ (function (_super) {
    __extends(SelectAllFeedbackCommand, _super);
    function SelectAllFeedbackCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.sprottySelectAllCommand = new sprotty_1.SelectAllCommand(action);
        return _this;
    }
    SelectAllFeedbackCommand.prototype.execute = function (context) {
        return this.sprottySelectAllCommand.execute(context);
    };
    SelectAllFeedbackCommand.prototype.undo = function (context) {
        return this.sprottySelectAllCommand.undo(context);
    };
    SelectAllFeedbackCommand.prototype.redo = function (context) {
        return this.sprottySelectAllCommand.redo(context);
    };
    SelectAllFeedbackCommand.KIND = 'allSelectedFeedback';
    SelectAllFeedbackCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [SelectAllFeedbackAction])
    ], SelectAllFeedbackCommand);
    return SelectAllFeedbackCommand;
}(sprotty_1.Command));
exports.SelectAllFeedbackCommand = SelectAllFeedbackCommand;
var SelectCommand = /** @class */ (function (_super) {
    __extends(SelectCommand, _super);
    function SelectCommand(action, selectionService) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.selectionService = selectionService;
        _this.selected = [];
        _this.deselected = [];
        return _this;
    }
    SelectCommand.prototype.execute = function (context) {
        var _this = this;
        var model = context.root;
        this.action.selectedElementsIDs.forEach(function (id) {
            var element = model.index.getById(id);
            if (element instanceof sprotty_1.SChildElement && sprotty_1.isSelectable(element)) {
                _this.selected.push(element);
            }
        });
        this.action.deselectedElementsIDs.forEach(function (id) {
            var element = model.index.getById(id);
            if (element instanceof sprotty_1.SChildElement && sprotty_1.isSelectable(element)) {
                _this.deselected.push(element);
            }
        });
        return this.redo(context);
    };
    SelectCommand.prototype.undo = function (context) {
        var select = this.deselected.map(function (element) { return element.id; });
        var deselect = this.selected.map(function (element) { return element.id; });
        this.selectionService.updateSelection(context.root, select, deselect);
        return context.root;
    };
    SelectCommand.prototype.redo = function (context) {
        var select = this.selected.map(function (element) { return element.id; });
        var deselect = this.deselected.map(function (element) { return element.id; });
        this.selectionService.updateSelection(context.root, select, deselect);
        return context.root;
    };
    SelectCommand.KIND = sprotty_1.SelectCommand.KIND;
    SelectCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)), __param(1, inversify_1.inject(types_1.GLSP_TYPES.SelectionService)),
        __metadata("design:paramtypes", [sprotty_1.SelectAction, selection_service_1.SelectionService])
    ], SelectCommand);
    return SelectCommand;
}(sprotty_1.Command));
exports.SelectCommand = SelectCommand;
var SelectAllCommand = /** @class */ (function (_super) {
    __extends(SelectAllCommand, _super);
    function SelectAllCommand(action, selectionService) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.selectionService = selectionService;
        _this.previousSelection = new Map();
        return _this;
    }
    SelectAllCommand.prototype.execute = function (context) {
        return this.redo(context);
    };
    SelectAllCommand.prototype.undo = function (context) {
        var e_1, _a;
        var index = context.root.index;
        try {
            for (var _b = __values(this.previousSelection), _c = _b.next(); !_c.done; _c = _b.next()) {
                var previousState = _c.value;
                var element = index.getById(previousState[0]);
                if (element !== undefined && sprotty_1.isSelectable(element)) {
                    element.selected = previousState[1];
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
        return context.root;
    };
    SelectAllCommand.prototype.redo = function (context) {
        var selectables = [];
        this.selectAll(context.root, this.action.select, selectables);
        if (this.action.select) {
            this.selectionService.updateSelection(context.root, selectables, []);
        }
        else {
            this.selectionService.updateSelection(context.root, [], selectables);
        }
        return context.root;
    };
    SelectAllCommand.prototype.selectAll = function (element, newState, selected) {
        var e_2, _a;
        if (sprotty_1.isSelectable(element)) {
            this.previousSelection.set(element.id, element.selected);
            selected.push(element.id);
        }
        try {
            for (var _b = __values(element.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.selectAll(child, newState, selected);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    SelectAllCommand.KIND = sprotty_1.SelectAllCommand.KIND;
    SelectAllCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)), __param(1, inversify_1.inject(types_1.GLSP_TYPES.SelectionService)),
        __metadata("design:paramtypes", [sprotty_1.SelectAllAction, selection_service_1.SelectionService])
    ], SelectAllCommand);
    return SelectAllCommand;
}(sprotty_1.Command));
exports.SelectAllCommand = SelectAllCommand;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/select/di.config.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/select/di.config.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var action_definitions_1 = __webpack_require__(/*! ./action-definitions */ "../node_modules/@eclipse-glsp/client/lib/features/select/action-definitions.js");
var select_mouse_listener_1 = __webpack_require__(/*! ./select-mouse-listener */ "../node_modules/@eclipse-glsp/client/lib/features/select/select-mouse-listener.js");
var selection_service_1 = __webpack_require__(/*! ./selection-service */ "../node_modules/@eclipse-glsp/client/lib/features/select/selection-service.js");
var glspSelectModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    bind(selection_service_1.SelectionService).toSelf().inSingletonScope();
    bind(types_1.GLSP_TYPES.SelectionService).toService(selection_service_1.SelectionService);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, action_definitions_1.SelectCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, action_definitions_1.SelectAllCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, action_definitions_1.SelectFeedbackCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, action_definitions_1.SelectAllFeedbackCommand);
    bind(sprotty_1.TYPES.KeyListener).to(sprotty_1.SelectKeyboardListener);
    bind(sprotty_1.TYPES.MouseListener).to(select_mouse_listener_1.RankedSelectMouseListener);
    bind(types_1.GLSP_TYPES.SModelRootListener).toService(selection_service_1.SelectionService);
});
exports.default = glspSelectModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/select/select-mouse-listener.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/select/select-mouse-listener.js ***!
  \*****************************************************************************************/
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var model_1 = __webpack_require__(/*! ../rank/model */ "../node_modules/@eclipse-glsp/client/lib/features/rank/model.js");
/**
 * Ranked select mouse listener that is executed before default mouse listeners when using the RankedMouseTool.
 * This ensures that default mouse listeners are working on a model that has selection changes already applied.
 */
var RankedSelectMouseListener = /** @class */ (function (_super) {
    __extends(RankedSelectMouseListener, _super);
    function RankedSelectMouseListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rank = model_1.DEFAULT_RANK - 1; /* we want to be executed before all default mouse listeners */
        return _this;
    }
    return RankedSelectMouseListener;
}(sprotty_1.SelectMouseListener));
exports.RankedSelectMouseListener = RankedSelectMouseListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/select/selection-service.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/select/selection-service.js ***!
  \*************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var array_utils_1 = __webpack_require__(/*! ../../utils/array-utils */ "../node_modules/@eclipse-glsp/client/lib/utils/array-utils.js");
var action_definitions_1 = __webpack_require__(/*! ./action-definitions */ "../node_modules/@eclipse-glsp/client/lib/features/select/action-definitions.js");
var SelectionService = /** @class */ (function () {
    function SelectionService(selectionListeners) {
        if (selectionListeners === void 0) { selectionListeners = []; }
        this.selectionListeners = selectionListeners;
        this.selectedElementIDs = new Set();
    }
    SelectionService.prototype.register = function (selectionListener) {
        array_utils_1.distinctAdd(this.selectionListeners, selectionListener);
    };
    SelectionService.prototype.deregister = function (selectionListener) {
        array_utils_1.remove(this.selectionListeners, selectionListener);
    };
    SelectionService.prototype.modelRootChanged = function (root) {
        this.updateSelection(root, [], []);
    };
    SelectionService.prototype.updateSelection = function (root, select, deselect) {
        var e_1, _a, e_2, _b, e_3, _c;
        var _this = this;
        if (root === undefined && select.length === 0 && deselect.length === 0) {
            return;
        }
        var prevRoot = this.root;
        var prevSelectedElementIDs = new Set(this.selectedElementIDs);
        // update root
        this.root = root;
        // update selected element IDs and collect deselected elements
        // - select all elements that are not deselected at the same time (no-op)
        // - deselect all elements that are not selected at the same time (no-op) but was selected
        var toSelect = __spread(select).filter(function (selectId) { return deselect.indexOf(selectId) === -1; });
        var toDeselect = __spread(deselect).filter(function (deselectId) { return select.indexOf(deselectId) === -1 && _this.selectedElementIDs.has(deselectId); });
        try {
            for (var toDeselect_1 = __values(toDeselect), toDeselect_1_1 = toDeselect_1.next(); !toDeselect_1_1.done; toDeselect_1_1 = toDeselect_1.next()) {
                var id = toDeselect_1_1.value;
                this.selectedElementIDs.delete(id);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (toDeselect_1_1 && !toDeselect_1_1.done && (_a = toDeselect_1.return)) _a.call(toDeselect_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var toSelect_1 = __values(toSelect), toSelect_1_1 = toSelect_1.next(); !toSelect_1_1.done; toSelect_1_1 = toSelect_1.next()) {
                var id = toSelect_1_1.value;
                this.selectedElementIDs.add(id);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (toSelect_1_1 && !toSelect_1_1.done && (_b = toSelect_1.return)) _b.call(toSelect_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var deselectedElementIDs = new Set(toDeselect);
        try {
            // see if selected elements still exist in the updated root
            for (var _d = __values(this.selectedElementIDs), _e = _d.next(); !_e.done; _e = _d.next()) {
                var id = _e.value;
                var element = root.index.getById(id);
                if (element === undefined) {
                    this.selectedElementIDs.delete(id);
                    if (prevRoot !== undefined && prevRoot.index.getById(id)) {
                        deselectedElementIDs.add(id);
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // only send out changes if there actually are changes, i.e., the root or the selected elements changed
        var selectionChanged = prevSelectedElementIDs.size !== this.selectedElementIDs.size || !__spread(prevSelectedElementIDs).every(function (value) { return _this.selectedElementIDs.has(value); });
        if (selectionChanged) {
            // aggregate to feedback action handling all elements as only the last feedback is restored
            this.dispatchFeedback([new action_definitions_1.SelectFeedbackAction(__spread(this.selectedElementIDs), __spread(deselectedElementIDs))]);
        }
        var rootChanged = prevRoot !== root;
        if (rootChanged || selectionChanged) {
            // notify listeners after the feedback action
            this.notifyListeners(this.root, this.selectedElementIDs);
        }
    };
    SelectionService.prototype.dispatchFeedback = function (actions) {
        this.feedbackDispatcher.registerFeedback(this, actions);
    };
    SelectionService.prototype.notifyListeners = function (root, selectedElementIDs) {
        this.selectionListeners.forEach(function (listener) { return listener.selectionChanged(root, Array.from(selectedElementIDs)); });
    };
    /**
     * QUERY METHODS
     */
    SelectionService.prototype.getSelectedElementIDs = function () {
        return this.selectedElementIDs;
    };
    SelectionService.prototype.hasSelectedElements = function () {
        return this.selectedElementIDs.size > 0;
    };
    SelectionService.prototype.isSingleSelection = function () {
        return this.selectedElementIDs.size === 1;
    };
    SelectionService.prototype.isMultiSelection = function () {
        return this.selectedElementIDs.size > 1;
    };
    __decorate([
        inversify_1.inject(types_1.GLSP_TYPES.IFeedbackActionDispatcher),
        __metadata("design:type", Object)
    ], SelectionService.prototype, "feedbackDispatcher", void 0);
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.ILogger),
        __metadata("design:type", Object)
    ], SelectionService.prototype, "logger", void 0);
    SelectionService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.multiInject(types_1.GLSP_TYPES.SelectionListener)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [Array])
    ], SelectionService);
    return SelectionService;
}());
exports.SelectionService = SelectionService;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/change-bounds-tool-feedback.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/change-bounds-tool-feedback.js ***!
  \******************************************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var smodel_util_1 = __webpack_require__(/*! ../../utils/smodel-util */ "../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js");
var model_1 = __webpack_require__(/*! ../change-bounds/model */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js");
var movement_restrictor_1 = __webpack_require__(/*! ../change-bounds/movement-restrictor */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/movement-restrictor.js");
var model_2 = __webpack_require__(/*! ./model */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js");
var ShowChangeBoundsToolResizeFeedbackAction = /** @class */ (function () {
    function ShowChangeBoundsToolResizeFeedbackAction(elementId) {
        this.elementId = elementId;
        this.kind = ShowChangeBoundsToolResizeFeedbackCommand.KIND;
    }
    return ShowChangeBoundsToolResizeFeedbackAction;
}());
exports.ShowChangeBoundsToolResizeFeedbackAction = ShowChangeBoundsToolResizeFeedbackAction;
var HideChangeBoundsToolResizeFeedbackAction = /** @class */ (function () {
    function HideChangeBoundsToolResizeFeedbackAction() {
        this.kind = HideChangeBoundsToolResizeFeedbackCommand.KIND;
    }
    return HideChangeBoundsToolResizeFeedbackAction;
}());
exports.HideChangeBoundsToolResizeFeedbackAction = HideChangeBoundsToolResizeFeedbackAction;
var ShowChangeBoundsToolResizeFeedbackCommand = /** @class */ (function (_super) {
    __extends(ShowChangeBoundsToolResizeFeedbackCommand, _super);
    function ShowChangeBoundsToolResizeFeedbackCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    ShowChangeBoundsToolResizeFeedbackCommand.prototype.execute = function (context) {
        var index = context.root.index;
        index
            .all()
            .filter(model_1.isResizable)
            .forEach(model_1.removeResizeHandles);
        if (smodel_util_1.isNotUndefined(this.action.elementId)) {
            var resizeElement = index.getById(this.action.elementId);
            if (smodel_util_1.isNotUndefined(resizeElement) && model_1.isResizable(resizeElement)) {
                model_1.addResizeHandles(resizeElement);
            }
        }
        return context.root;
    };
    ShowChangeBoundsToolResizeFeedbackCommand.KIND = "showChangeBoundsToolResizeFeedback";
    ShowChangeBoundsToolResizeFeedbackCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [ShowChangeBoundsToolResizeFeedbackAction])
    ], ShowChangeBoundsToolResizeFeedbackCommand);
    return ShowChangeBoundsToolResizeFeedbackCommand;
}(model_2.FeedbackCommand));
exports.ShowChangeBoundsToolResizeFeedbackCommand = ShowChangeBoundsToolResizeFeedbackCommand;
var HideChangeBoundsToolResizeFeedbackCommand = /** @class */ (function (_super) {
    __extends(HideChangeBoundsToolResizeFeedbackCommand, _super);
    function HideChangeBoundsToolResizeFeedbackCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    HideChangeBoundsToolResizeFeedbackCommand.prototype.execute = function (context) {
        var index = context.root.index;
        index
            .all()
            .filter(model_1.isResizable)
            .forEach(model_1.removeResizeHandles);
        return context.root;
    };
    HideChangeBoundsToolResizeFeedbackCommand.KIND = "hideChangeBoundsToolResizeFeedback";
    HideChangeBoundsToolResizeFeedbackCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [HideChangeBoundsToolResizeFeedbackAction])
    ], HideChangeBoundsToolResizeFeedbackCommand);
    return HideChangeBoundsToolResizeFeedbackCommand;
}(model_2.FeedbackCommand));
exports.HideChangeBoundsToolResizeFeedbackCommand = HideChangeBoundsToolResizeFeedbackCommand;
/**
 * This mouse listener provides visual feedback for moving by sending client-side
 * `MoveAction`s while elements are selected and dragged. This will also update
 * their bounds, which is important, as it is not only required for rendering
 * the visual feedback but also the basis for sending the change to the server
 * (see also `tools/MoveTool`).
 */
var FeedbackMoveMouseListener = /** @class */ (function (_super) {
    __extends(FeedbackMoveMouseListener, _super);
    function FeedbackMoveMouseListener(tool) {
        var _this = _super.call(this) || this;
        _this.tool = tool;
        _this.hasDragged = false;
        _this.elementId2startPos = new Map();
        return _this;
    }
    FeedbackMoveMouseListener.prototype.mouseDown = function (target, event) {
        if (event.button === 0 && !(target instanceof model_1.SResizeHandle)) {
            var moveable = sprotty_1.findParentByFeature(target, sprotty_1.isMoveable);
            if (moveable !== undefined) {
                this.startDragPosition = { x: event.pageX, y: event.pageY };
            }
            else {
                this.startDragPosition = undefined;
            }
            this.hasDragged = false;
        }
        return [];
    };
    FeedbackMoveMouseListener.prototype.mouseMove = function (target, event) {
        var result = [];
        if (event.buttons === 0)
            this.mouseUp(target, event);
        else if (this.startDragPosition) {
            if (this.elementId2startPos.size === 0) {
                this.collectStartPositions(target.root);
            }
            this.hasDragged = true;
            var moveAction = this.getElementMoves(target, event, false);
            if (moveAction)
                result.push(moveAction);
        }
        return result;
    };
    FeedbackMoveMouseListener.prototype.collectStartPositions = function (root) {
        var _this = this;
        root.index
            .all()
            .filter(function (element) { return sprotty_1.isSelectable(element) && element.selected; })
            .forEach(function (element) {
            if (sprotty_1.isMoveable(element)) {
                _this.elementId2startPos.set(element.id, element.position);
            }
        });
    };
    FeedbackMoveMouseListener.prototype.getElementMoves = function (target, event, isFinished) {
        var _this = this;
        if (!this.startDragPosition)
            return undefined;
        var elementMoves = [];
        var viewport = sprotty_1.findParentByFeature(target, sprotty_1.isViewport);
        var zoom = viewport ? viewport.zoom : 1;
        var delta = {
            x: (event.pageX - this.startDragPosition.x) / zoom,
            y: (event.pageY - this.startDragPosition.y) / zoom
        };
        this.elementId2startPos.forEach(function (startPosition, elementId) {
            var element = target.root.index.getById(elementId);
            if (element) {
                var toPosition = _this.snap({
                    x: startPosition.x + delta.x,
                    y: startPosition.y + delta.y
                }, element, !event.shiftKey);
                if (sprotty_1.isMoveable(element)) {
                    toPosition = _this.validateMove(startPosition, toPosition, element, isFinished);
                    elementMoves.push({
                        elementId: element.id,
                        fromPosition: {
                            x: element.position.x,
                            y: element.position.y
                        },
                        toPosition: toPosition
                    });
                }
            }
        });
        if (elementMoves.length > 0)
            return new sprotty_1.MoveAction(elementMoves, false, isFinished);
        else
            return undefined;
    };
    FeedbackMoveMouseListener.prototype.validateMove = function (startPostion, toPosition, element, isFinished) {
        var newPosition = toPosition;
        if (this.tool.movementRestrictor) {
            var valid = this.tool.movementRestrictor.validate(toPosition, element);
            var action = void 0;
            if (!valid) {
                action = movement_restrictor_1.createMovementRestrictionFeedback(element, this.tool.movementRestrictor);
                if (isFinished) {
                    newPosition = startPostion;
                }
            }
            else {
                action = movement_restrictor_1.removeMovementRestrictionFeedback(element, this.tool.movementRestrictor);
            }
            this.tool.dispatchFeedback(this, [action]);
        }
        return newPosition;
    };
    FeedbackMoveMouseListener.prototype.snap = function (position, element, isSnap) {
        if (isSnap && this.tool.snapper)
            return this.tool.snapper.snap(position, element);
        else
            return position;
    };
    FeedbackMoveMouseListener.prototype.mouseEnter = function (target, event) {
        if (target instanceof sprotty_1.SModelRoot && event.buttons === 0)
            this.mouseUp(target, event);
        return [];
    };
    FeedbackMoveMouseListener.prototype.mouseUp = function (target, event) {
        var result = [];
        if (this.startDragPosition) {
            var moveAction = this.getElementMoves(target, event, true);
            if (moveAction) {
                result.push(moveAction);
            }
            if (this.tool.movementRestrictor) {
                result.push(movement_restrictor_1.removeMovementRestrictionFeedback(target, this.tool.movementRestrictor));
            }
        }
        this.hasDragged = false;
        this.startDragPosition = undefined;
        this.elementId2startPos.clear();
        return result;
    };
    FeedbackMoveMouseListener.prototype.decorate = function (vnode, element) {
        return vnode;
    };
    return FeedbackMoveMouseListener;
}(sprotty_1.MouseListener));
exports.FeedbackMoveMouseListener = FeedbackMoveMouseListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/creation-tool-feedback.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/creation-tool-feedback.js ***!
  \*************************************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var smodel_util_1 = __webpack_require__(/*! ../../utils/smodel-util */ "../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js");
var viewpoint_util_1 = __webpack_require__(/*! ../../utils/viewpoint-util */ "../node_modules/@eclipse-glsp/client/lib/utils/viewpoint-util.js");
var model_1 = __webpack_require__(/*! ./model */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js");
var DrawFeedbackEdgeAction = /** @class */ (function () {
    function DrawFeedbackEdgeAction(elementTypeId, sourceId, edgeSchema) {
        this.elementTypeId = elementTypeId;
        this.sourceId = sourceId;
        this.edgeSchema = edgeSchema;
        this.kind = DrawFeedbackEdgeCommand.KIND;
    }
    return DrawFeedbackEdgeAction;
}());
exports.DrawFeedbackEdgeAction = DrawFeedbackEdgeAction;
var DrawFeedbackEdgeCommand = /** @class */ (function (_super) {
    __extends(DrawFeedbackEdgeCommand, _super);
    function DrawFeedbackEdgeCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    DrawFeedbackEdgeCommand.prototype.execute = function (context) {
        var feedbackEdgeSchema = this.action.edgeSchema ? this.action.edgeSchema : exports.defaultFeedbackEdgeSchema;
        drawFeedbackEdge(context, this.action.sourceId, this.action.elementTypeId, feedbackEdgeSchema);
        return context.root;
    };
    DrawFeedbackEdgeCommand.KIND = 'drawFeedbackEdge';
    DrawFeedbackEdgeCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [DrawFeedbackEdgeAction])
    ], DrawFeedbackEdgeCommand);
    return DrawFeedbackEdgeCommand;
}(model_1.FeedbackCommand));
exports.DrawFeedbackEdgeCommand = DrawFeedbackEdgeCommand;
var RemoveFeedbackEdgeAction = /** @class */ (function () {
    function RemoveFeedbackEdgeAction() {
        this.kind = RemoveFeedbackEdgeCommand.KIND;
    }
    return RemoveFeedbackEdgeAction;
}());
exports.RemoveFeedbackEdgeAction = RemoveFeedbackEdgeAction;
var RemoveFeedbackEdgeCommand = /** @class */ (function (_super) {
    __extends(RemoveFeedbackEdgeCommand, _super);
    function RemoveFeedbackEdgeCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveFeedbackEdgeCommand.prototype.execute = function (context) {
        removeFeedbackEdge(context.root);
        return context.root;
    };
    RemoveFeedbackEdgeCommand.KIND = 'removeFeedbackEdgeCommand';
    RemoveFeedbackEdgeCommand = __decorate([
        inversify_1.injectable()
    ], RemoveFeedbackEdgeCommand);
    return RemoveFeedbackEdgeCommand;
}(model_1.FeedbackCommand));
exports.RemoveFeedbackEdgeCommand = RemoveFeedbackEdgeCommand;
var FeedbackEdgeEnd = /** @class */ (function (_super) {
    __extends(FeedbackEdgeEnd, _super);
    function FeedbackEdgeEnd(sourceId, elementTypeId, feedbackEdge) {
        if (feedbackEdge === void 0) { feedbackEdge = undefined; }
        var _this = _super.call(this) || this;
        _this.sourceId = sourceId;
        _this.elementTypeId = elementTypeId;
        _this.feedbackEdge = feedbackEdge;
        _this.type = FeedbackEdgeEnd.TYPE;
        return _this;
    }
    FeedbackEdgeEnd.TYPE = 'feedback-edge-end';
    return FeedbackEdgeEnd;
}(sprotty_1.SDanglingAnchor));
exports.FeedbackEdgeEnd = FeedbackEdgeEnd;
var FeedbackEdgeEndMovingMouseListener = /** @class */ (function (_super) {
    __extends(FeedbackEdgeEndMovingMouseListener, _super);
    function FeedbackEdgeEndMovingMouseListener(anchorRegistry) {
        var _this = _super.call(this) || this;
        _this.anchorRegistry = anchorRegistry;
        return _this;
    }
    FeedbackEdgeEndMovingMouseListener.prototype.mouseMove = function (target, event) {
        var root = target.root;
        var edgeEnd = root.index.getById(feedbackEdgeEndId(root));
        if (!(edgeEnd instanceof FeedbackEdgeEnd) || !edgeEnd.feedbackEdge) {
            return [];
        }
        var edge = edgeEnd.feedbackEdge;
        var position = viewpoint_util_1.getAbsolutePosition(edgeEnd, event);
        var endAtMousePosition = sprotty_1.findChildrenAtPosition(target.root, position)
            .find(function (e) { return sprotty_1.isConnectable(e) && e.canConnect(edge, 'target'); });
        if (endAtMousePosition instanceof sprotty_1.SConnectableElement && edge.source && sprotty_1.isBoundsAware(edge.source)) {
            var anchorComputer = this.anchorRegistry.get(sprotty_1.PolylineEdgeRouter.KIND, endAtMousePosition.anchorKind);
            var anchor = anchorComputer.getAnchor(endAtMousePosition, sprotty_1.center(edge.source.bounds));
            if (sprotty_1.euclideanDistance(anchor, edgeEnd.position) > 1) {
                return [new sprotty_1.MoveAction([{ elementId: edgeEnd.id, toPosition: anchor }], false)];
            }
        }
        else {
            return [new sprotty_1.MoveAction([{ elementId: edgeEnd.id, toPosition: position }], false)];
        }
        return [];
    };
    return FeedbackEdgeEndMovingMouseListener;
}(sprotty_1.MouseListener));
exports.FeedbackEdgeEndMovingMouseListener = FeedbackEdgeEndMovingMouseListener;
function feedbackEdgeId(root) {
    return root.id + '_feedback_edge';
}
exports.feedbackEdgeId = feedbackEdgeId;
function feedbackEdgeEndId(root) {
    return root.id + '_feedback_anchor';
}
exports.feedbackEdgeEndId = feedbackEdgeEndId;
exports.defaultFeedbackEdgeSchema = {
    cssClasses: ["feedback-edge"],
    opacity: 0.3
};
function drawFeedbackEdge(context, sourceId, elementTypeId, feedbackEdgeSchema) {
    var root = context.root;
    var sourceChild = root.index.getById(sourceId);
    if (!sourceChild) {
        return;
    }
    var source = sprotty_1.findParentByFeature(sourceChild, sprotty_1.isConnectable);
    if (!source || !sprotty_1.isBoundsAware(source)) {
        return;
    }
    var edgeEnd = new FeedbackEdgeEnd(source.id, elementTypeId);
    edgeEnd.id = feedbackEdgeEndId(root);
    edgeEnd.position = viewpoint_util_1.toAbsolutePosition(source);
    feedbackEdgeSchema.id = feedbackEdgeId(root);
    feedbackEdgeSchema.type = elementTypeId;
    feedbackEdgeSchema.sourceId = source.id;
    feedbackEdgeSchema.targetId = edgeEnd.id;
    var feedbackEdge = context.modelFactory.createElement(feedbackEdgeSchema);
    if (smodel_util_1.isRoutable(feedbackEdge)) {
        edgeEnd.feedbackEdge = feedbackEdge;
        root.add(edgeEnd);
        root.add(feedbackEdge);
    }
}
exports.drawFeedbackEdge = drawFeedbackEdge;
function removeFeedbackEdge(root) {
    var feedbackEdge = root.index.getById(feedbackEdgeId(root));
    var feedbackEdgeEnd = root.index.getById(feedbackEdgeEndId(root));
    if (feedbackEdge instanceof sprotty_1.SChildElement)
        root.remove(feedbackEdge);
    if (feedbackEdgeEnd instanceof sprotty_1.SChildElement)
        root.remove(feedbackEdgeEnd);
}
exports.removeFeedbackEdge = removeFeedbackEdge;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/css-feedback.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/css-feedback.js ***!
  \***************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var smodel_util_1 = __webpack_require__(/*! ../../utils/smodel-util */ "../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js");
var model_1 = __webpack_require__(/*! ./model */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js");
var ModifyCSSFeedbackAction = /** @class */ (function () {
    function ModifyCSSFeedbackAction(elements, addClasses, removeClasses) {
        this.elements = elements;
        this.addClasses = addClasses;
        this.removeClasses = removeClasses;
        this.kind = ModifyCssFeedbackCommand.KIND;
    }
    return ModifyCSSFeedbackAction;
}());
exports.ModifyCSSFeedbackAction = ModifyCSSFeedbackAction;
var ModifyCssFeedbackCommand = /** @class */ (function (_super) {
    __extends(ModifyCssFeedbackCommand, _super);
    function ModifyCssFeedbackCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    ModifyCssFeedbackCommand.prototype.execute = function (context) {
        var _this = this;
        var elements = [];
        if (this.action.elements) {
            elements.push.apply(elements, __spread(this.action.elements));
        }
        else {
            elements.push(context.root);
        }
        elements.forEach(function (e) {
            if (_this.action.removeClasses) {
                smodel_util_1.removeCssClasses(e, _this.action.removeClasses);
            }
            if (_this.action.addClasses) {
                smodel_util_1.addCssClasses(e, _this.action.addClasses);
            }
        });
        return context.root;
    };
    ModifyCssFeedbackCommand.KIND = 'modifyCSSFeedback';
    ModifyCssFeedbackCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [ModifyCSSFeedbackAction])
    ], ModifyCssFeedbackCommand);
    return ModifyCssFeedbackCommand;
}(model_1.FeedbackCommand));
exports.ModifyCssFeedbackCommand = ModifyCssFeedbackCommand;
var CursorCSS;
(function (CursorCSS) {
    CursorCSS["DEFAULT"] = "default-mode";
    CursorCSS["OVERLAP_FORBIDDEN"] = "overlap-forbidden-mode";
    CursorCSS["NODE_CREATION"] = "node-creation-mode";
    CursorCSS["EDGE_CREATION_SOURCE"] = "edge-creation-select-source-mode";
    CursorCSS["EDGE_CREATION_TARGET"] = "edge-creation-select-target-mode";
    CursorCSS["EDGE_RECONNECT"] = "edge-reconnect-select-target-mode";
    CursorCSS["OPERATION_NOT_ALLOWED"] = "edge-modification-not-allowed-mode";
    CursorCSS["ELEMENT_DELETION"] = "element-deletion-mode";
})(CursorCSS = exports.CursorCSS || (exports.CursorCSS = {}));
function cursorFeedbackAction(cursorCss) {
    var addCss = [];
    if (cursorCss) {
        addCss.push(cursorCss);
    }
    return new ModifyCSSFeedbackAction(undefined, addCss, Object.values(CursorCSS));
}
exports.cursorFeedbackAction = cursorFeedbackAction;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/di.config.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/di.config.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var model_1 = __webpack_require__(/*! ../change-bounds/model */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js");
var change_bounds_tool_feedback_1 = __webpack_require__(/*! ./change-bounds-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/change-bounds-tool-feedback.js");
var creation_tool_feedback_1 = __webpack_require__(/*! ./creation-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/creation-tool-feedback.js");
var css_feedback_1 = __webpack_require__(/*! ./css-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/css-feedback.js");
var edge_edit_tool_feedback_1 = __webpack_require__(/*! ./edge-edit-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/edge-edit-tool-feedback.js");
var feedback_action_dispatcher_1 = __webpack_require__(/*! ./feedback-action-dispatcher */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/feedback-action-dispatcher.js");
var view_1 = __webpack_require__(/*! ./view */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/view.js");
var toolFeedbackModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    bind(types_1.GLSP_TYPES.IFeedbackActionDispatcher).to(feedback_action_dispatcher_1.FeedbackActionDispatcher).inSingletonScope();
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, css_feedback_1.ModifyCssFeedbackCommand);
    // create node and edge tool feedback
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, creation_tool_feedback_1.DrawFeedbackEdgeCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, creation_tool_feedback_1.RemoveFeedbackEdgeCommand);
    sprotty_1.configureView({ bind: bind, isBound: isBound }, creation_tool_feedback_1.FeedbackEdgeEnd.TYPE, view_1.FeedbackEdgeEndView);
    // move tool feedback: we use sprotties MoveCommand as client-side visual feedback
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, sprotty_1.MoveCommand);
    // resize tool feedback
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, change_bounds_tool_feedback_1.ShowChangeBoundsToolResizeFeedbackCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, change_bounds_tool_feedback_1.HideChangeBoundsToolResizeFeedbackCommand);
    sprotty_1.configureView({ bind: bind, isBound: isBound }, model_1.SResizeHandle.TYPE, view_1.SResizeHandleView);
    // reconnect edge tool feedback
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, edge_edit_tool_feedback_1.ShowEdgeReconnectHandlesFeedbackCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, edge_edit_tool_feedback_1.HideEdgeReconnectHandlesFeedbackCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, edge_edit_tool_feedback_1.DrawFeedbackEdgeSourceCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, edge_edit_tool_feedback_1.SwitchRoutingModeCommand);
    bind(sprotty_1.TYPES.IVNodePostprocessor).to(sprotty_1.LocationPostprocessor);
    bind(sprotty_1.TYPES.HiddenVNodePostprocessor).to(sprotty_1.LocationPostprocessor);
});
exports.default = toolFeedbackModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/edge-edit-tool-feedback.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/edge-edit-tool-feedback.js ***!
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var smodel_util_1 = __webpack_require__(/*! ../../utils/smodel-util */ "../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js");
var viewpoint_util_1 = __webpack_require__(/*! ../../utils/viewpoint-util */ "../node_modules/@eclipse-glsp/client/lib/utils/viewpoint-util.js");
var model_1 = __webpack_require__(/*! ../reconnect/model */ "../node_modules/@eclipse-glsp/client/lib/features/reconnect/model.js");
var creation_tool_feedback_1 = __webpack_require__(/*! ./creation-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/creation-tool-feedback.js");
var model_2 = __webpack_require__(/*! ./model */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js");
/**
 * RECONNECT HANDLES FEEDBACK
 */
var ShowEdgeReconnectHandlesFeedbackAction = /** @class */ (function () {
    function ShowEdgeReconnectHandlesFeedbackAction(elementId) {
        this.elementId = elementId;
        this.kind = ShowEdgeReconnectHandlesFeedbackCommand.KIND;
    }
    return ShowEdgeReconnectHandlesFeedbackAction;
}());
exports.ShowEdgeReconnectHandlesFeedbackAction = ShowEdgeReconnectHandlesFeedbackAction;
var HideEdgeReconnectHandlesFeedbackAction = /** @class */ (function () {
    function HideEdgeReconnectHandlesFeedbackAction() {
        this.kind = HideEdgeReconnectHandlesFeedbackCommand.KIND;
    }
    return HideEdgeReconnectHandlesFeedbackAction;
}());
exports.HideEdgeReconnectHandlesFeedbackAction = HideEdgeReconnectHandlesFeedbackAction;
var ShowEdgeReconnectHandlesFeedbackCommand = /** @class */ (function (_super) {
    __extends(ShowEdgeReconnectHandlesFeedbackCommand, _super);
    function ShowEdgeReconnectHandlesFeedbackCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    ShowEdgeReconnectHandlesFeedbackCommand.prototype.execute = function (context) {
        var index = context.root.index;
        index.all().filter(smodel_util_1.isRoutable).forEach(model_1.removeReconnectHandles);
        if (smodel_util_1.isNotUndefined(this.action.elementId)) {
            var routableElement = index.getById(this.action.elementId);
            if (smodel_util_1.isNotUndefined(routableElement) && smodel_util_1.isRoutable(routableElement)) {
                model_1.addReconnectHandles(routableElement);
            }
        }
        return context.root;
    };
    ShowEdgeReconnectHandlesFeedbackCommand.KIND = 'showReconnectHandlesFeedback';
    ShowEdgeReconnectHandlesFeedbackCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [ShowEdgeReconnectHandlesFeedbackAction])
    ], ShowEdgeReconnectHandlesFeedbackCommand);
    return ShowEdgeReconnectHandlesFeedbackCommand;
}(model_2.FeedbackCommand));
exports.ShowEdgeReconnectHandlesFeedbackCommand = ShowEdgeReconnectHandlesFeedbackCommand;
var HideEdgeReconnectHandlesFeedbackCommand = /** @class */ (function (_super) {
    __extends(HideEdgeReconnectHandlesFeedbackCommand, _super);
    function HideEdgeReconnectHandlesFeedbackCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    HideEdgeReconnectHandlesFeedbackCommand.prototype.execute = function (context) {
        var index = context.root.index;
        index.all().filter(smodel_util_1.isRoutable).forEach(model_1.removeReconnectHandles);
        return context.root;
    };
    HideEdgeReconnectHandlesFeedbackCommand.KIND = 'hideReconnectHandlesFeedback';
    HideEdgeReconnectHandlesFeedbackCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [HideEdgeReconnectHandlesFeedbackAction])
    ], HideEdgeReconnectHandlesFeedbackCommand);
    return HideEdgeReconnectHandlesFeedbackCommand;
}(model_2.FeedbackCommand));
exports.HideEdgeReconnectHandlesFeedbackCommand = HideEdgeReconnectHandlesFeedbackCommand;
/**
 * ROUTING FEEDBACK
 */
var SwitchRoutingModeAction = /** @class */ (function (_super) {
    __extends(SwitchRoutingModeAction, _super);
    function SwitchRoutingModeAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = SwitchRoutingModeCommand.KIND;
        return _this;
    }
    return SwitchRoutingModeAction;
}(sprotty_1.SwitchEditModeAction));
exports.SwitchRoutingModeAction = SwitchRoutingModeAction;
var SwitchRoutingModeCommand = /** @class */ (function (_super) {
    __extends(SwitchRoutingModeCommand, _super);
    function SwitchRoutingModeCommand(action) {
        return _super.call(this, action) || this;
    }
    SwitchRoutingModeCommand.KIND = "switchRoutingMode";
    SwitchRoutingModeCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [SwitchRoutingModeAction])
    ], SwitchRoutingModeCommand);
    return SwitchRoutingModeCommand;
}(sprotty_1.SwitchEditModeCommand));
exports.SwitchRoutingModeCommand = SwitchRoutingModeCommand;
/**
 * SOURCE AND TARGET EDGE FEEDBACK
 */
var DrawFeedbackEdgeSourceAction = /** @class */ (function () {
    function DrawFeedbackEdgeSourceAction(elementTypeId, targetId) {
        this.elementTypeId = elementTypeId;
        this.targetId = targetId;
        this.kind = DrawFeedbackEdgeSourceCommand.KIND;
    }
    return DrawFeedbackEdgeSourceAction;
}());
exports.DrawFeedbackEdgeSourceAction = DrawFeedbackEdgeSourceAction;
var DrawFeedbackEdgeSourceCommand = /** @class */ (function (_super) {
    __extends(DrawFeedbackEdgeSourceCommand, _super);
    function DrawFeedbackEdgeSourceCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    DrawFeedbackEdgeSourceCommand.prototype.execute = function (context) {
        drawFeedbackEdgeSource(context, this.action.targetId, this.action.elementTypeId);
        return context.root;
    };
    DrawFeedbackEdgeSourceCommand.KIND = 'drawFeedbackEdgeSource';
    DrawFeedbackEdgeSourceCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [DrawFeedbackEdgeSourceAction])
    ], DrawFeedbackEdgeSourceCommand);
    return DrawFeedbackEdgeSourceCommand;
}(model_2.FeedbackCommand));
exports.DrawFeedbackEdgeSourceCommand = DrawFeedbackEdgeSourceCommand;
/**
 * SOURCE AND TARGET MOUSE MOVE LISTENER
 */
var FeedbackEdgeTargetMovingMouseListener = /** @class */ (function (_super) {
    __extends(FeedbackEdgeTargetMovingMouseListener, _super);
    function FeedbackEdgeTargetMovingMouseListener(anchorRegistry) {
        var _this = _super.call(this, anchorRegistry) || this;
        _this.anchorRegistry = anchorRegistry;
        return _this;
    }
    return FeedbackEdgeTargetMovingMouseListener;
}(creation_tool_feedback_1.FeedbackEdgeEndMovingMouseListener));
exports.FeedbackEdgeTargetMovingMouseListener = FeedbackEdgeTargetMovingMouseListener;
var FeedbackEdgeSourceMovingMouseListener = /** @class */ (function (_super) {
    __extends(FeedbackEdgeSourceMovingMouseListener, _super);
    function FeedbackEdgeSourceMovingMouseListener(anchorRegistry) {
        var _this = _super.call(this) || this;
        _this.anchorRegistry = anchorRegistry;
        return _this;
    }
    FeedbackEdgeSourceMovingMouseListener.prototype.mouseMove = function (target, event) {
        var root = target.root;
        var edgeEnd = root.index.getById(creation_tool_feedback_1.feedbackEdgeEndId(root));
        if (!(edgeEnd instanceof creation_tool_feedback_1.FeedbackEdgeEnd) || !edgeEnd.feedbackEdge) {
            return [];
        }
        var edge = edgeEnd.feedbackEdge;
        var position = viewpoint_util_1.getAbsolutePosition(edgeEnd, event);
        var endAtMousePosition = sprotty_1.findChildrenAtPosition(target.root, position)
            .find(function (e) { return sprotty_1.isConnectable(e) && e.canConnect(edge, 'source'); });
        if (endAtMousePosition instanceof sprotty_1.SConnectableElement && edge.target && sprotty_1.isBoundsAware(edge.target)) {
            var anchorComputer = this.anchorRegistry.get(sprotty_1.PolylineEdgeRouter.KIND, endAtMousePosition.anchorKind);
            var anchor = anchorComputer.getAnchor(endAtMousePosition, sprotty_1.center(edge.target.bounds));
            if (sprotty_1.euclideanDistance(anchor, edgeEnd.position) > 1) {
                return [new sprotty_1.MoveAction([{ elementId: edgeEnd.id, toPosition: anchor }], false)];
            }
        }
        else {
            return [new sprotty_1.MoveAction([{ elementId: edgeEnd.id, toPosition: position }], false)];
        }
        return [];
    };
    return FeedbackEdgeSourceMovingMouseListener;
}(sprotty_1.MouseListener));
exports.FeedbackEdgeSourceMovingMouseListener = FeedbackEdgeSourceMovingMouseListener;
var FeedbackEdgeRouteMovingMouseListener = /** @class */ (function (_super) {
    __extends(FeedbackEdgeRouteMovingMouseListener, _super);
    function FeedbackEdgeRouteMovingMouseListener(edgeRouterRegistry) {
        var _this = _super.call(this) || this;
        _this.edgeRouterRegistry = edgeRouterRegistry;
        _this.hasDragged = false;
        return _this;
    }
    FeedbackEdgeRouteMovingMouseListener.prototype.mouseDown = function (target, event) {
        var result = [];
        if (event.button === 0) {
            var routingHandle = sprotty_1.findParentByFeature(target, smodel_util_1.isRoutingHandle);
            if (routingHandle !== undefined) {
                result.push(new SwitchRoutingModeAction([target.id], []));
                this.lastDragPosition = { x: event.pageX, y: event.pageY };
            }
            else {
                this.lastDragPosition = undefined;
            }
            this.hasDragged = false;
        }
        return result;
    };
    FeedbackEdgeRouteMovingMouseListener.prototype.mouseMove = function (target, event) {
        var _this = this;
        var result = [];
        if (event.buttons === 0)
            this.mouseUp(target, event);
        else if (this.lastDragPosition) {
            var viewport = sprotty_1.findParentByFeature(target, sprotty_1.isViewport);
            this.hasDragged = true;
            var zoom = viewport ? viewport.zoom : 1;
            var dx_1 = (event.pageX - this.lastDragPosition.x) / zoom;
            var dy_1 = (event.pageY - this.lastDragPosition.y) / zoom;
            var handleMoves_1 = [];
            target.root.index.all()
                .filter(function (element) { return sprotty_1.isSelected(element); })
                .forEach(function (element) {
                if (smodel_util_1.isRoutingHandle(element)) {
                    var point = _this.getHandlePosition(element);
                    if (point !== undefined) {
                        handleMoves_1.push({
                            elementId: element.id,
                            fromPosition: point,
                            toPosition: {
                                x: point.x + dx_1,
                                y: point.y + dy_1
                            }
                        });
                    }
                }
            });
            this.lastDragPosition = { x: event.pageX, y: event.pageY };
            if (handleMoves_1.length > 0)
                result.push(new sprotty_1.MoveAction(handleMoves_1, false));
        }
        return result;
    };
    FeedbackEdgeRouteMovingMouseListener.prototype.getHandlePosition = function (handle) {
        if (this.edgeRouterRegistry) {
            var parent_1 = handle.parent;
            if (!smodel_util_1.isRoutable(parent_1))
                return undefined;
            var router = this.edgeRouterRegistry.get(parent_1.routerKind);
            var route = router.route(parent_1);
            return router.getHandlePosition(parent_1, route, handle);
        }
        return undefined;
    };
    FeedbackEdgeRouteMovingMouseListener.prototype.mouseEnter = function (target, event) {
        if (target instanceof sprotty_1.SModelRoot && event.buttons === 0)
            this.mouseUp(target, event);
        return [];
    };
    FeedbackEdgeRouteMovingMouseListener.prototype.mouseUp = function (target, event) {
        this.hasDragged = false;
        this.lastDragPosition = undefined;
        return [];
    };
    FeedbackEdgeRouteMovingMouseListener.prototype.decorate = function (vnode, element) {
        return vnode;
    };
    return FeedbackEdgeRouteMovingMouseListener;
}(sprotty_1.MouseListener));
exports.FeedbackEdgeRouteMovingMouseListener = FeedbackEdgeRouteMovingMouseListener;
/**
 * UTILITY FUNCTIONS
 */
function drawFeedbackEdgeSource(context, targetId, elementTypeId) {
    var root = context.root;
    var targetChild = root.index.getById(targetId);
    if (!targetChild) {
        return;
    }
    var target = sprotty_1.findParentByFeature(targetChild, sprotty_1.isConnectable);
    if (!target || !sprotty_1.isBoundsAware(target)) {
        return;
    }
    var edgeEnd = new creation_tool_feedback_1.FeedbackEdgeEnd(target.id, elementTypeId);
    edgeEnd.id = creation_tool_feedback_1.feedbackEdgeEndId(root);
    edgeEnd.position = { x: target.bounds.x, y: target.bounds.y };
    var feedbackEdgeSchema = {
        type: 'edge',
        id: creation_tool_feedback_1.feedbackEdgeId(root),
        sourceId: edgeEnd.id,
        targetId: target.id,
        opacity: 0.3
    };
    var feedbackEdge = context.modelFactory.createElement(feedbackEdgeSchema);
    if (smodel_util_1.isRoutable(feedbackEdge)) {
        edgeEnd.feedbackEdge = feedbackEdge;
        root.add(edgeEnd);
        root.add(feedbackEdge);
    }
}


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/feedback-action-dispatcher.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/feedback-action-dispatcher.js ***!
  \*****************************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var FeedbackActionDispatcher = /** @class */ (function () {
    function FeedbackActionDispatcher(actionDispatcher, logger) {
        this.actionDispatcher = actionDispatcher;
        this.logger = logger;
        this.feedbackEmitters = new Map;
    }
    FeedbackActionDispatcher.prototype.registerFeedback = function (feedbackEmitter, actions) {
        this.feedbackEmitters.set(feedbackEmitter, actions);
        this.dispatch(actions, feedbackEmitter);
    };
    FeedbackActionDispatcher.prototype.deregisterFeedback = function (feedbackEmitter, actions) {
        this.feedbackEmitters.delete(feedbackEmitter);
        this.dispatch(actions, feedbackEmitter);
    };
    FeedbackActionDispatcher.prototype.dispatch = function (actions, feedbackEmitter) {
        var _this = this;
        this.actionDispatcher()
            .then(function (dispatcher) { return dispatcher.dispatchAll(actions); })
            .then(function () { return _this.logger.info(_this, "Dispatched feedback actions for " + feedbackEmitter); })
            .catch(function (reason) { return _this.logger.error(_this, 'Failed to dispatch feedback actions', reason); });
    };
    FeedbackActionDispatcher.prototype.getRegisteredFeedback = function () {
        var result = [];
        this.feedbackEmitters.forEach(function (value, key) { return result.push.apply(result, __spread(value)); });
        return result;
    };
    FeedbackActionDispatcher.prototype.getRegisteredFeedbackEmitters = function (action) {
        var result = [];
        this.feedbackEmitters.forEach(function (value, key) {
            if (value.find(function (a) { return a === action; })) {
                result.push(key);
            }
        });
        return result;
    };
    FeedbackActionDispatcher = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.IActionDispatcherProvider)),
        __param(1, inversify_1.inject(sprotty_1.TYPES.ILogger)),
        __metadata("design:paramtypes", [Function, Object])
    ], FeedbackActionDispatcher);
    return FeedbackActionDispatcher;
}());
exports.FeedbackActionDispatcher = FeedbackActionDispatcher;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js ***!
  \********************************************************************************/
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var FeedbackCommand = /** @class */ (function (_super) {
    __extends(FeedbackCommand, _super);
    function FeedbackCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // used by the `FeedbackAwareUpdateModelCommand`
        _this.priority = 0;
        return _this;
    }
    FeedbackCommand.prototype.undo = function (context) {
        return context.root;
    };
    FeedbackCommand.prototype.redo = function (context) {
        return context.root;
    };
    return FeedbackCommand;
}(sprotty_1.Command));
exports.FeedbackCommand = FeedbackCommand;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/view.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/view.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var snabbdom = __webpack_require__(/*! snabbdom-jsx */ "../node_modules/snabbdom-jsx/snabbdom-jsx.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var model_1 = __webpack_require__(/*! ../change-bounds/model */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js");
var JSX = { createElement: snabbdom.svg };
/**
* This view is used for the invisible end of the feedback edge.
* A feedback edge is shown as a visual feedback when creating edges.
*/
var FeedbackEdgeEndView = /** @class */ (function () {
    function FeedbackEdgeEndView() {
    }
    FeedbackEdgeEndView.prototype.render = function (model, context) {
        var position = model.position || sprotty_1.ORIGIN_POINT;
        return JSX.createElement("g", { x: position.x, y: position.y });
    };
    FeedbackEdgeEndView = __decorate([
        inversify_1.injectable()
    ], FeedbackEdgeEndView);
    return FeedbackEdgeEndView;
}());
exports.FeedbackEdgeEndView = FeedbackEdgeEndView;
var SResizeHandleView = /** @class */ (function () {
    function SResizeHandleView() {
    }
    SResizeHandleView.prototype.render = function (handle, context) {
        var position = this.getPosition(handle);
        if (position !== undefined) {
            var node = JSX.createElement("circle", { "class-sprotty-resize-handle": true, "class-mouseover": handle.hoverFeedback, cx: position.x, cy: position.y, r: this.getRadius() });
            sprotty_1.setAttr(node, 'data-kind', handle.location);
            return node;
        }
        // Fallback: Create an empty group
        return JSX.createElement("g", null);
    };
    SResizeHandleView.prototype.getPosition = function (handle) {
        var parent = handle.parent;
        if (model_1.isResizable(parent)) {
            if (handle.location === model_1.ResizeHandleLocation.TopLeft) {
                return { x: 0, y: 0 };
            }
            else if (handle.location === model_1.ResizeHandleLocation.TopRight) {
                return { x: parent.bounds.width, y: 0 };
            }
            else if (handle.location === model_1.ResizeHandleLocation.BottomLeft) {
                return { x: 0, y: parent.bounds.height };
            }
            else if (handle.location === model_1.ResizeHandleLocation.BottomRight) {
                return { x: parent.bounds.width, y: parent.bounds.height };
            }
        }
        return undefined;
    };
    SResizeHandleView.prototype.getRadius = function () {
        return 7;
    };
    SResizeHandleView = __decorate([
        inversify_1.injectable()
    ], SResizeHandleView);
    return SResizeHandleView;
}());
exports.SResizeHandleView = SResizeHandleView;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-palette/di.config.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-palette/di.config.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
__webpack_require__(/*! ../../../css/tool-palette.css */ "../node_modules/@eclipse-glsp/client/css/tool-palette.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var tool_palette_1 = __webpack_require__(/*! ./tool-palette */ "../node_modules/@eclipse-glsp/client/lib/features/tool-palette/tool-palette.js");
var toolPaletteModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    bind(tool_palette_1.ToolPalette).toSelf().inSingletonScope();
    bind(sprotty_1.TYPES.IUIExtension).toService(tool_palette_1.ToolPalette);
    sprotty_1.configureActionHandler({ bind: bind, isBound: isBound }, tool_palette_1.EnableToolPaletteAction.KIND, tool_palette_1.ToolPalette);
    sprotty_1.configureActionHandler({ bind: bind, isBound: isBound }, sprotty_1.EnableDefaultToolsAction.KIND, tool_palette_1.ToolPalette);
});
exports.default = toolPaletteModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-palette/palette-item.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-palette/palette-item.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2020 EclipseSource and others.
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var operation_1 = __webpack_require__(/*! ../../base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js");
function isPaletteItem(object) {
    return sprotty_1.isLabeledAction(object) && "id" in object && "sortString" in object;
}
exports.isPaletteItem = isPaletteItem;
var PaletteItem;
(function (PaletteItem) {
    function getTriggerAction(item) {
        if (item) {
            var initiAction = item.actions.filter(function (a) { return operation_1.isTriggerElementTypeCreationAction(a); })
                .map(function (a) { return a; });
            return initiAction.length > 0 ? initiAction[0] : undefined;
        }
        return undefined;
    }
    PaletteItem.getTriggerAction = getTriggerAction;
})(PaletteItem = exports.PaletteItem || (exports.PaletteItem = {}));


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tool-palette/tool-palette.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tool-palette/tool-palette.js ***!
  \**************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var context_actions_1 = __webpack_require__(/*! ../../base/actions/context-actions */ "../node_modules/@eclipse-glsp/client/lib/base/actions/context-actions.js");
var glsp_action_dispatcher_1 = __webpack_require__(/*! ../request-response/glsp-action-dispatcher */ "../node_modules/@eclipse-glsp/client/lib/features/request-response/glsp-action-dispatcher.js");
var delete_tool_1 = __webpack_require__(/*! ../tools/delete-tool */ "../node_modules/@eclipse-glsp/client/lib/features/tools/delete-tool.js");
var validate_1 = __webpack_require__(/*! ../validation/validate */ "../node_modules/@eclipse-glsp/client/lib/features/validation/validate.js");
var CLICKED_CSS_CLASS = "clicked";
var EnableToolPaletteAction = /** @class */ (function () {
    function EnableToolPaletteAction() {
        this.kind = EnableToolPaletteAction_1.KIND;
    }
    EnableToolPaletteAction_1 = EnableToolPaletteAction;
    var EnableToolPaletteAction_1;
    EnableToolPaletteAction.KIND = "enableToolPalette";
    EnableToolPaletteAction = EnableToolPaletteAction_1 = __decorate([
        inversify_1.injectable()
    ], EnableToolPaletteAction);
    return EnableToolPaletteAction;
}());
exports.EnableToolPaletteAction = EnableToolPaletteAction;
var ToolPalette = /** @class */ (function (_super) {
    __extends(ToolPalette, _super);
    function ToolPalette() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolPalette_1 = ToolPalette;
    ToolPalette.prototype.id = function () { return ToolPalette_1.ID; };
    ToolPalette.prototype.containerClass = function () { return ToolPalette_1.ID; };
    ToolPalette.prototype.initialize = function () {
        if (!this.paletteItems) {
            return false;
        }
        return _super.prototype.initialize.call(this);
    };
    ToolPalette.prototype.initializeContents = function (containerElement) {
        this.createHeader();
        this.createBody();
    };
    ToolPalette.prototype.onBeforeShow = function (containerElement, root) {
        this.modelRootId = root.id;
    };
    ToolPalette.prototype.createBody = function () {
        var _this = this;
        var bodyDiv = document.createElement("div");
        bodyDiv.classList.add("palette-body");
        this.paletteItems.sort(compare)
            .forEach(function (item) {
            if (item.children) {
                var group_1 = createToolGroup(item);
                item.children.sort(compare).forEach(function (child) { return group_1.appendChild(_this.createToolButton(child)); });
                bodyDiv.appendChild(group_1);
            }
            else {
                bodyDiv.appendChild(_this.createToolButton(item));
            }
        });
        this.containerElement.appendChild(bodyDiv);
    };
    ToolPalette.prototype.createHeader = function () {
        var _this = this;
        var headerCompartment = document.createElement("div");
        headerCompartment.classList.add("palette-header");
        // Title header
        var header = document.createElement("div");
        header.classList.add("header-icon");
        header.appendChild(createIcon(["fa", "fa-palette"]));
        header.insertAdjacentText("beforeend", "Palette");
        headerCompartment.append(header);
        // Header Tools Compartment
        var headerTools = document.createElement("div");
        headerTools.classList.add("header-tools");
        // Create button for DefaultTools
        this.defaultToolsButton = createIcon(["fas", "fa-mouse-pointer", "fa-xs", "clicked"]);
        this.defaultToolsButton.id = "btn_default_tools";
        this.defaultToolsButton.onclick = this.onClickStaticToolButton(this.defaultToolsButton);
        headerTools.appendChild(this.defaultToolsButton);
        this.lastActivebutton = this.defaultToolsButton;
        // Create button for MouseDeleteTool
        var deleteToolButton = createIcon(["fas", "fa-eraser", "fa-xs"]);
        deleteToolButton.onclick = this.onClickStaticToolButton(deleteToolButton, delete_tool_1.MouseDeleteTool.ID);
        headerTools.appendChild(deleteToolButton);
        // Create button for ValidationTool
        var validateActionButton = createIcon(["fas", "fa-check-square", "fa-xs"]);
        validateActionButton.onclick = function (ev) {
            var modelIds = [_this.modelRootId];
            _this.actionDispatcher.dispatch(new validate_1.RequestMarkersAction(modelIds));
        };
        headerTools.appendChild(validateActionButton);
        headerCompartment.appendChild(headerTools);
        this.containerElement.appendChild(headerCompartment);
    };
    ToolPalette.prototype.createToolButton = function (item) {
        var button = document.createElement("div");
        button.classList.add("tool-button");
        button.innerHTML = item.label;
        button.onclick = this.onClickCreateToolButton(button, item);
        return button;
    };
    ToolPalette.prototype.onClickCreateToolButton = function (button, item) {
        var _this = this;
        return function (ev) {
            _this.actionDispatcher.dispatchAll(item.actions);
            _this.changeActiveButton(button);
            _this.restoreFocus();
        };
    };
    ToolPalette.prototype.onClickStaticToolButton = function (button, toolId) {
        var _this = this;
        return function (ev) {
            var action = toolId ? new sprotty_1.EnableToolsAction([toolId]) : new sprotty_1.EnableDefaultToolsAction();
            _this.actionDispatcher.dispatch(action);
            _this.changeActiveButton(button);
            _this.restoreFocus();
        };
    };
    ToolPalette.prototype.changeActiveButton = function (button) {
        if (this.lastActivebutton) {
            this.lastActivebutton.classList.remove(CLICKED_CSS_CLASS);
        }
        if (button) {
            button.classList.add(CLICKED_CSS_CLASS);
            this.lastActivebutton = button;
        }
        else {
            this.defaultToolsButton.classList.add(CLICKED_CSS_CLASS);
            this.lastActivebutton = this.defaultToolsButton;
        }
    };
    ToolPalette.prototype.handle = function (action) {
        var _this = this;
        if (action.kind === EnableToolPaletteAction.KIND) {
            var requestAction = new context_actions_1.RequestContextActions(ToolPalette_1.ID, {
                selectedElementIds: []
            });
            this.actionDispatcher.requestUntil(requestAction).then(function (response) {
                if (context_actions_1.isSetContextActionsAction(response)) {
                    _this.paletteItems = response.actions.map(function (e) { return e; });
                    _this.actionDispatcher.dispatch(new sprotty_1.SetUIExtensionVisibilityAction(ToolPalette_1.ID, true));
                }
            });
        }
        else if (action instanceof sprotty_1.EnableToolsAction && action.toolIds.includes(ToolPalette_1.ID)) {
            this.changeActiveButton();
        }
    };
    var ToolPalette_1;
    ToolPalette.ID = "tool-palette";
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IActionDispatcher),
        __metadata("design:type", glsp_action_dispatcher_1.GLSPActionDispatcher)
    ], ToolPalette.prototype, "actionDispatcher", void 0);
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IToolManager),
        __metadata("design:type", Object)
    ], ToolPalette.prototype, "toolManager", void 0);
    ToolPalette = ToolPalette_1 = __decorate([
        inversify_1.injectable()
    ], ToolPalette);
    return ToolPalette;
}(sprotty_1.AbstractUIExtension));
exports.ToolPalette = ToolPalette;
function compare(a, b) {
    var sortStringBased = a.sortString.localeCompare(b.sortString);
    if (sortStringBased !== 0) {
        return sortStringBased;
    }
    return a.label.localeCompare(b.label);
}
exports.compare = compare;
function createIcon(cssClasses) {
    var _a;
    var icon = document.createElement("i");
    (_a = icon.classList).add.apply(_a, __spread(cssClasses));
    return icon;
}
exports.createIcon = createIcon;
function createToolGroup(item) {
    var group = document.createElement("div");
    group.classList.add("tool-group");
    group.id = item.id;
    var header = document.createElement("div");
    header.classList.add("group-header");
    if (item.icon) {
        header.appendChild(createIcon(["fas", item.icon]));
    }
    header.insertAdjacentText('beforeend', item.label);
    header.ondblclick = function (ev) {
        var css = "collapsed";
        changeCSSClass(group, css);
        Array.from(group.children).forEach(function (child) { return changeCSSClass(child, css); });
        window.getSelection().removeAllRanges();
    };
    group.appendChild(header);
    return group;
}
exports.createToolGroup = createToolGroup;
function changeCSSClass(element, css) {
    element.classList.contains(css) ? element.classList.remove(css) :
        element.classList.add(css);
}
exports.changeCSSClass = changeCSSClass;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tools/change-bounds-tool.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tools/change-bounds-tool.js ***!
  \*************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var operation_1 = __webpack_require__(/*! ../../base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var layout_utils_1 = __webpack_require__(/*! ../../utils/layout-utils */ "../node_modules/@eclipse-glsp/client/lib/utils/layout-utils.js");
var smodel_util_1 = __webpack_require__(/*! ../../utils/smodel-util */ "../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js");
var model_1 = __webpack_require__(/*! ../change-bounds/model */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js");
var movement_restrictor_1 = __webpack_require__(/*! ../change-bounds/movement-restrictor */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/movement-restrictor.js");
var selection_service_1 = __webpack_require__(/*! ../select/selection-service */ "../node_modules/@eclipse-glsp/client/lib/features/select/selection-service.js");
var change_bounds_tool_feedback_1 = __webpack_require__(/*! ../tool-feedback/change-bounds-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/change-bounds-tool-feedback.js");
var drag_aware_mouse_listener_1 = __webpack_require__(/*! ./drag-aware-mouse-listener */ "../node_modules/@eclipse-glsp/client/lib/features/tools/drag-aware-mouse-listener.js");
/**
 * The change bounds tool has the license to move multiple elements or resize a single element by implementing the ChangeBounds operation.
 * In contrast to Sprotty's implementation this tool only sends a `ChangeBoundsOperationAction` when an operation has finished and does not
 * provide client-side live updates to improve performance.
 *
 * | Operation | Client Update    | Server Update
 * +-----------+------------------+----------------------------
 * | Move      | MoveAction       | ChangeBoundsOperationAction
 * | Resize    | SetBoundsAction  | ChangeBoundsOperationAction
 *
 * To provide a visual client updates during move we install the `FeedbackMoveMouseListener` and to provide visual client updates during resize
 * and send the server updates we install the `ChangeBoundsListener`.
 */
var ChangeBoundsTool = /** @class */ (function () {
    function ChangeBoundsTool(selectionService, mouseTool, keyTool, feedbackDispatcher, edgeRouterRegistry, snapper, movementRestrictor) {
        this.selectionService = selectionService;
        this.mouseTool = mouseTool;
        this.keyTool = keyTool;
        this.feedbackDispatcher = feedbackDispatcher;
        this.edgeRouterRegistry = edgeRouterRegistry;
        this.snapper = snapper;
        this.movementRestrictor = movementRestrictor;
        this.id = ChangeBoundsTool_1.ID;
    }
    ChangeBoundsTool_1 = ChangeBoundsTool;
    ChangeBoundsTool.prototype.enable = function () {
        // install feedback move mouse listener for client-side move updates
        this.feedbackMoveMouseListener = this.createMoveMouseListener();
        this.mouseTool.register(this.feedbackMoveMouseListener);
        // install change bounds listener for client-side resize updates and server-side updates
        this.changeBoundsListener = this.createChangeBoundsListener();
        this.mouseTool.register(this.changeBoundsListener);
        this.selectionService.register(this.changeBoundsListener);
        // register feedback
        this.feedbackDispatcher.registerFeedback(this, [new change_bounds_tool_feedback_1.ShowChangeBoundsToolResizeFeedbackAction]);
    };
    ChangeBoundsTool.prototype.createMoveMouseListener = function () {
        return new change_bounds_tool_feedback_1.FeedbackMoveMouseListener(this);
    };
    ChangeBoundsTool.prototype.createChangeBoundsListener = function () {
        return new ChangeBoundsListener(this);
    };
    ChangeBoundsTool.prototype.disable = function () {
        this.mouseTool.deregister(this.changeBoundsListener);
        this.selectionService.deregister(this.changeBoundsListener);
        this.mouseTool.deregister(this.feedbackMoveMouseListener);
        this.feedbackDispatcher.deregisterFeedback(this.feedbackMoveMouseListener, []);
        this.feedbackDispatcher.deregisterFeedback(this.changeBoundsListener, [new change_bounds_tool_feedback_1.HideChangeBoundsToolResizeFeedbackAction]);
    };
    ChangeBoundsTool.prototype.dispatchFeedback = function (feedbackEmmmiter, actions) {
        this.feedbackDispatcher.registerFeedback(feedbackEmmmiter, actions);
    };
    var ChangeBoundsTool_1;
    ChangeBoundsTool.ID = "glsp.change-bounds-tool";
    ChangeBoundsTool = ChangeBoundsTool_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.GLSP_TYPES.SelectionService)),
        __param(1, inversify_1.inject(types_1.GLSP_TYPES.MouseTool)),
        __param(2, inversify_1.inject(sprotty_1.KeyTool)),
        __param(3, inversify_1.inject(types_1.GLSP_TYPES.IFeedbackActionDispatcher)),
        __param(4, inversify_1.inject(sprotty_1.EdgeRouterRegistry)), __param(4, inversify_1.optional()),
        __param(5, inversify_1.inject(sprotty_1.TYPES.ISnapper)), __param(5, inversify_1.optional()),
        __param(6, inversify_1.inject(types_1.GLSP_TYPES.IMovementRestrictor)), __param(6, inversify_1.optional()),
        __metadata("design:paramtypes", [selection_service_1.SelectionService, Object, sprotty_1.KeyTool, Object, sprotty_1.EdgeRouterRegistry, Object, Object])
    ], ChangeBoundsTool);
    return ChangeBoundsTool;
}());
exports.ChangeBoundsTool = ChangeBoundsTool;
var ChangeBoundsListener = /** @class */ (function (_super) {
    __extends(ChangeBoundsListener, _super);
    function ChangeBoundsListener(tool) {
        var _this = _super.call(this) || this;
        _this.tool = tool;
        _this.positionDelta = { x: 0, y: 0 };
        _this.initialPositon = undefined;
        return _this;
    }
    ChangeBoundsListener.prototype.mouseDown = function (target, event) {
        _super.prototype.mouseDown.call(this, target, event);
        if (event.button !== 0) {
            return [];
        }
        // check if we have a resize handle (only single-selection)
        if (this.activeResizeElementId && target instanceof model_1.SResizeHandle) {
            this.activeResizeHandle = target;
        }
        else {
            this.setActiveResizeElement(target);
        }
        if (this.activeResizeElementId) {
            this.initPosition(event);
        }
        else {
            this.reset();
        }
        return [];
    };
    ChangeBoundsListener.prototype.mouseMove = function (target, event) {
        _super.prototype.mouseMove.call(this, target, event);
        if (this.updatePosition(target, event) && this.activeResizeHandle) {
            // rely on the FeedbackMoveMouseListener to update the element bounds of selected elements
            // consider resize handles ourselves
            return this.handleElementResize();
        }
        return [];
    };
    ChangeBoundsListener.prototype.draggingMouseUp = function (target, event) {
        var _this = this;
        if (this.lastDragPosition === undefined) {
            this.resetPosition();
            return [];
        }
        var actions = [];
        if (this.activeResizeHandle) {
            // Resize, not move
            var resizeElement = sprotty_1.findParentByFeature(this.activeResizeHandle, model_1.isResizable);
            if (this.isActiveResizeElement(resizeElement)) {
                this.createChangeBoundsAction(resizeElement).forEach(function (action) { return actions.push(action); });
            }
        }
        else {
            // Move
            var newBounds_1 = [];
            var newRoutingPoints_1 = [];
            smodel_util_1.forEachElement(target, smodel_util_1.isNonRoutableSelectedMovableBoundsAware, function (element) {
                _this.createElementAndBounds(element).forEach(function (bounds) { return newBounds_1.push(bounds); });
                //  If client routing is enabled -> delegate routingpoints of connected edges to server
                if (_this.tool.edgeRouterRegistry && element instanceof sprotty_1.SConnectableElement) {
                    element.incomingEdges.map(smodel_util_1.toElementAndRoutingPoints).forEach(function (ear) { return newRoutingPoints_1.push(ear); });
                    element.outgoingEdges.map(smodel_util_1.toElementAndRoutingPoints).forEach(function (ear) { return newRoutingPoints_1.push(ear); });
                }
            });
            if (newBounds_1.length > 0) {
                actions.push(new operation_1.ChangeBoundsOperation(newBounds_1));
            }
            if (newRoutingPoints_1.length > 0) {
                actions.push(new operation_1.ChangeRoutingPointsOperation(newRoutingPoints_1));
            }
        }
        this.resetPosition();
        return actions;
    };
    ChangeBoundsListener.prototype.selectionChanged = function (root, selectedElements) {
        var e_1, _a;
        if (this.activeResizeElementId) {
            if (selectedElements.includes(this.activeResizeElementId)) {
                // our active element is still selected, nothing to do
                return;
            }
            try {
                // try to find some other selected element and mark that active
                for (var _b = __values(selectedElements.reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var elementId = _c.value;
                    var element = root.index.getById(elementId);
                    if (element && this.setActiveResizeElement(element)) {
                        return;
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
            this.reset();
        }
    };
    ChangeBoundsListener.prototype.setActiveResizeElement = function (target) {
        // check if we have a selected, moveable element (multi-selection allowed)
        var moveableElement = sprotty_1.findParentByFeature(target, model_1.isBoundsAwareMoveable);
        if (sprotty_1.isSelected(moveableElement)) {
            // only allow one element to have the element resize handles
            this.activeResizeElementId = moveableElement.id;
            this.tool.dispatchFeedback(this, [new change_bounds_tool_feedback_1.ShowChangeBoundsToolResizeFeedbackAction(this.activeResizeElementId)]);
            return true;
        }
        return false;
    };
    ChangeBoundsListener.prototype.isActiveResizeElement = function (element) {
        return element !== undefined && element.id === this.activeResizeElementId;
    };
    ChangeBoundsListener.prototype.initPosition = function (event) {
        this.initialPositon = { x: event.pageX, y: event.pageY };
        this.lastDragPosition = { x: event.pageX, y: event.pageY };
        if (this.activeResizeHandle) {
            var resizeElement = sprotty_1.findParentByFeature(this.activeResizeHandle, model_1.isResizable);
            this.initialBounds = { x: resizeElement.bounds.x, y: resizeElement.bounds.y, width: resizeElement.bounds.width, height: resizeElement.bounds.height };
        }
    };
    ChangeBoundsListener.prototype.updatePosition = function (target, event) {
        if (this.lastDragPosition) {
            var viewport = sprotty_1.findParentByFeature(target, sprotty_1.isViewport);
            var zoom = viewport ? viewport.zoom : 1;
            var dx = (event.pageX - this.lastDragPosition.x) / zoom;
            var dy = (event.pageY - this.lastDragPosition.y) / zoom;
            this.positionDelta = { x: dx, y: dy };
            this.lastDragPosition = { x: event.pageX, y: event.pageY };
            return true;
        }
        return false;
    };
    ChangeBoundsListener.prototype.reset = function () {
        this.tool.dispatchFeedback(this, [new change_bounds_tool_feedback_1.HideChangeBoundsToolResizeFeedbackAction()]);
        this.resetPosition();
    };
    ChangeBoundsListener.prototype.resetPosition = function () {
        this.activeResizeHandle = undefined;
        this.lastDragPosition = undefined;
        this.initialPositon = undefined;
        this.positionDelta = { x: 0, y: 0 };
    };
    ChangeBoundsListener.prototype.handleElementResize = function () {
        if (!this.activeResizeHandle) {
            return [];
        }
        var resizeElement = sprotty_1.findParentByFeature(this.activeResizeHandle, model_1.isResizable);
        if (this.isActiveResizeElement(resizeElement)) {
            switch (this.activeResizeHandle.location) {
                case model_1.ResizeHandleLocation.TopLeft:
                    return this.handleTopLeftResize(resizeElement);
                case model_1.ResizeHandleLocation.TopRight:
                    return this.handleTopRightResize(resizeElement);
                case model_1.ResizeHandleLocation.BottomLeft:
                    return this.handleBottomLeftResize(resizeElement);
                case model_1.ResizeHandleLocation.BottomRight:
                    return this.handleBottomRightResize(resizeElement);
            }
        }
        return [];
    };
    ChangeBoundsListener.prototype.handleTopLeftResize = function (resizeElement) {
        return this.createSetBoundsAction(resizeElement, resizeElement.bounds.x + this.positionDelta.x, resizeElement.bounds.y + this.positionDelta.y, resizeElement.bounds.width - this.positionDelta.x, resizeElement.bounds.height - this.positionDelta.y);
    };
    ChangeBoundsListener.prototype.handleTopRightResize = function (resizeElement) {
        return this.createSetBoundsAction(resizeElement, resizeElement.bounds.x, resizeElement.bounds.y + this.positionDelta.y, resizeElement.bounds.width + this.positionDelta.x, resizeElement.bounds.height - this.positionDelta.y);
    };
    ChangeBoundsListener.prototype.handleBottomLeftResize = function (resizeElement) {
        return this.createSetBoundsAction(resizeElement, resizeElement.bounds.x + this.positionDelta.x, resizeElement.bounds.y, resizeElement.bounds.width - this.positionDelta.x, resizeElement.bounds.height + this.positionDelta.y);
    };
    ChangeBoundsListener.prototype.handleBottomRightResize = function (resizeElement) {
        return this.createSetBoundsAction(resizeElement, resizeElement.bounds.x, resizeElement.bounds.y, resizeElement.bounds.width + this.positionDelta.x, resizeElement.bounds.height + this.positionDelta.y);
    };
    ChangeBoundsListener.prototype.createChangeBoundsAction = function (element) {
        if (this.isValidBoundChange(element, element.bounds, element.bounds)) {
            return [new operation_1.ChangeBoundsOperation([smodel_util_1.toElementAndBounds(element)])];
        }
        else if (this.initialBounds) {
            var actions = [];
            if (this.tool.movementRestrictor) {
                actions.push(movement_restrictor_1.removeMovementRestrictionFeedback(element, this.tool.movementRestrictor));
            }
            actions.push(new sprotty_1.SetBoundsAction([{ elementId: element.id, newPosition: this.initialBounds, newSize: this.initialBounds }]));
            return actions;
        }
        return [];
    };
    ChangeBoundsListener.prototype.createElementAndBounds = function (element) {
        if (this.isValidBoundChange(element, element.bounds, element.bounds)) {
            return [smodel_util_1.toElementAndBounds(element)];
        }
        return [];
    };
    ChangeBoundsListener.prototype.createSetBoundsAction = function (element, x, y, width, height) {
        var newPosition = { x: x, y: y };
        var newSize = { width: width, height: height };
        var result = [];
        if (this.isValidBoundChange(element, newPosition, newSize)) {
            if (this.tool.movementRestrictor) {
                result.push(movement_restrictor_1.removeMovementRestrictionFeedback(element, this.tool.movementRestrictor));
            }
            result.push(new sprotty_1.SetBoundsAction([{ elementId: element.id, newPosition: newPosition, newSize: newSize }]));
        }
        else if (this.isValidSize(element, newSize)) {
            if (this.tool.movementRestrictor) {
                result.push(movement_restrictor_1.createMovementRestrictionFeedback(element, this.tool.movementRestrictor));
            }
            result.push(new sprotty_1.SetBoundsAction([{ elementId: element.id, newPosition: newPosition, newSize: newSize }]));
        }
        return result;
    };
    ChangeBoundsListener.prototype.isValidBoundChange = function (element, newPosition, newSize) {
        return this.isValidSize(element, newSize) && this.isValidMove(element, newPosition);
    };
    ChangeBoundsListener.prototype.isValidSize = function (element, size) {
        return layout_utils_1.isValidSize(element, size);
    };
    ChangeBoundsListener.prototype.isValidMove = function (element, newPosition) {
        return layout_utils_1.isValidMove(element, newPosition, this.tool.movementRestrictor);
    };
    return ChangeBoundsListener;
}(drag_aware_mouse_listener_1.DragAwareMouseListener));
exports.ChangeBoundsListener = ChangeBoundsListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tools/creation-tool.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tools/creation-tool.js ***!
  \********************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var operation_1 = __webpack_require__(/*! ../../base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var viewpoint_util_1 = __webpack_require__(/*! ../../utils/viewpoint-util */ "../node_modules/@eclipse-glsp/client/lib/utils/viewpoint-util.js");
var model_1 = __webpack_require__(/*! ../hints/model */ "../node_modules/@eclipse-glsp/client/lib/features/hints/model.js");
var creation_tool_feedback_1 = __webpack_require__(/*! ../tool-feedback/creation-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/creation-tool-feedback.js");
var css_feedback_1 = __webpack_require__(/*! ../tool-feedback/css-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/css-feedback.js");
var drag_aware_mouse_listener_1 = __webpack_require__(/*! ./drag-aware-mouse-listener */ "../node_modules/@eclipse-glsp/client/lib/features/tools/drag-aware-mouse-listener.js");
var NodeCreationTool = /** @class */ (function () {
    function NodeCreationTool(mouseTool, feedbackDispatcher) {
        this.mouseTool = mouseTool;
        this.feedbackDispatcher = feedbackDispatcher;
        this.id = NodeCreationTool_1.ID = "unknown";
    }
    NodeCreationTool_1 = NodeCreationTool;
    NodeCreationTool.prototype.enable = function () {
        if (this.triggerAction === undefined) {
            throw new TypeError("Could not enable tool " + this.id + ".The triggerAction cannot be undefined.");
        }
        this.creationToolMouseListener = new NodeCreationToolMouseListener(this.triggerAction, this);
        this.mouseTool.register(this.creationToolMouseListener);
        this.feedbackDispatcher.registerFeedback(this, [css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.NODE_CREATION)]);
    };
    NodeCreationTool.prototype.disable = function () {
        this.mouseTool.deregister(this.creationToolMouseListener);
        this.feedbackDispatcher.deregisterFeedback(this, [css_feedback_1.cursorFeedbackAction()]);
    };
    NodeCreationTool.prototype.dispatchFeedback = function (actions) {
        this.feedbackDispatcher.registerFeedback(this, actions);
    };
    NodeCreationTool.prototype.handle = function (action) {
        if (operation_1.isTriggerNodeCreationAction(action)) {
            this.triggerAction = action;
            return new sprotty_1.EnableToolsAction([this.id]);
        }
    };
    var NodeCreationTool_1;
    NodeCreationTool.ID = "tool_create_node";
    NodeCreationTool = NodeCreationTool_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.GLSP_TYPES.MouseTool)),
        __param(1, inversify_1.inject(types_1.GLSP_TYPES.IFeedbackActionDispatcher)),
        __metadata("design:paramtypes", [Object, Object])
    ], NodeCreationTool);
    return NodeCreationTool;
}());
exports.NodeCreationTool = NodeCreationTool;
var NodeCreationToolMouseListener = /** @class */ (function (_super) {
    __extends(NodeCreationToolMouseListener, _super);
    function NodeCreationToolMouseListener(triggerAction, tool) {
        var _this = _super.call(this) || this;
        _this.triggerAction = triggerAction;
        _this.tool = tool;
        return _this;
    }
    NodeCreationToolMouseListener.prototype.creationAllowed = function (elementTypeId) {
        return this.container && this.container.isContainableElement(this.elementTypeId);
    };
    Object.defineProperty(NodeCreationToolMouseListener.prototype, "elementTypeId", {
        get: function () {
            return this.triggerAction.elementTypeId;
        },
        enumerable: true,
        configurable: true
    });
    NodeCreationToolMouseListener.prototype.nonDraggingMouseUp = function (target, event) {
        var result = [];
        if (this.creationAllowed(this.elementTypeId)) {
            var containerId = this.container ? this.container.id : undefined;
            var location_1 = viewpoint_util_1.getAbsolutePosition(target, event);
            result.push(new operation_1.CreateNodeOperation(this.elementTypeId, location_1, containerId, this.triggerAction.args));
            if (!sprotty_1.isCtrlOrCmd(event)) {
                result.push(new sprotty_1.EnableDefaultToolsAction());
            }
        }
        return result;
    };
    NodeCreationToolMouseListener.prototype.mouseOver = function (target, event) {
        var currentContainer = sprotty_1.findParentByFeature(target, model_1.isContainable);
        if (!this.container || currentContainer !== this.container) {
            this.container = currentContainer;
            var feedback = this.creationAllowed(this.elementTypeId)
                ? css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.NODE_CREATION) :
                css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.OPERATION_NOT_ALLOWED);
            this.tool.dispatchFeedback([feedback]);
        }
        return [];
    };
    NodeCreationToolMouseListener = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [operation_1.TriggerNodeCreationAction, NodeCreationTool])
    ], NodeCreationToolMouseListener);
    return NodeCreationToolMouseListener;
}(drag_aware_mouse_listener_1.DragAwareMouseListener));
exports.NodeCreationToolMouseListener = NodeCreationToolMouseListener;
/**
 * Tool to create connections in a Diagram, by selecting a source and target node.
 */
var EdgeCreationTool = /** @class */ (function () {
    function EdgeCreationTool(mouseTool, feedbackDispatcher, anchorRegistry) {
        this.mouseTool = mouseTool;
        this.feedbackDispatcher = feedbackDispatcher;
        this.anchorRegistry = anchorRegistry;
        this.id = EdgeCreationTool_1.ID;
    }
    EdgeCreationTool_1 = EdgeCreationTool;
    EdgeCreationTool.prototype.enable = function () {
        if (this.triggerAction === undefined) {
            throw new TypeError("Could not enable tool " + this.id + ".The triggerAction cannot be undefined.");
        }
        this.creationToolMouseListener = new EdgeCreationToolMouseListener(this.triggerAction, this);
        this.mouseTool.register(this.creationToolMouseListener);
        this.feedbackEndMovingMouseListener = new creation_tool_feedback_1.FeedbackEdgeEndMovingMouseListener(this.anchorRegistry);
        this.mouseTool.register(this.feedbackEndMovingMouseListener);
        this.dispatchFeedback([css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.OPERATION_NOT_ALLOWED)]);
    };
    EdgeCreationTool.prototype.disable = function () {
        this.mouseTool.deregister(this.creationToolMouseListener);
        this.mouseTool.deregister(this.feedbackEndMovingMouseListener);
        this.feedbackDispatcher.deregisterFeedback(this, [new creation_tool_feedback_1.RemoveFeedbackEdgeAction(), css_feedback_1.cursorFeedbackAction()]);
    };
    EdgeCreationTool.prototype.dispatchFeedback = function (actions) {
        this.feedbackDispatcher.registerFeedback(this, actions);
    };
    EdgeCreationTool.prototype.handle = function (action) {
        if (operation_1.isTriggerElementTypeCreationAction(action)) {
            this.triggerAction = action;
            return new sprotty_1.EnableToolsAction([this.id]);
        }
    };
    var EdgeCreationTool_1;
    EdgeCreationTool.ID = "tool_create_edge";
    EdgeCreationTool = EdgeCreationTool_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.GLSP_TYPES.MouseTool)),
        __param(1, inversify_1.inject(types_1.GLSP_TYPES.IFeedbackActionDispatcher)),
        __param(2, inversify_1.inject(sprotty_1.AnchorComputerRegistry)),
        __metadata("design:paramtypes", [Object, Object, sprotty_1.AnchorComputerRegistry])
    ], EdgeCreationTool);
    return EdgeCreationTool;
}());
exports.EdgeCreationTool = EdgeCreationTool;
var EdgeCreationToolMouseListener = /** @class */ (function (_super) {
    __extends(EdgeCreationToolMouseListener, _super);
    function EdgeCreationToolMouseListener(triggerAction, tool) {
        var _this = _super.call(this) || this;
        _this.triggerAction = triggerAction;
        _this.tool = tool;
        _this.allowedTarget = false;
        _this.proxyEdge = new sprotty_1.SEdge();
        _this.proxyEdge.type = triggerAction.elementTypeId;
        return _this;
    }
    EdgeCreationToolMouseListener.prototype.reinitialize = function () {
        this.source = undefined;
        this.target = undefined;
        this.currentTarget = undefined;
        this.allowedTarget = false;
        this.tool.dispatchFeedback([new creation_tool_feedback_1.RemoveFeedbackEdgeAction()]);
    };
    EdgeCreationToolMouseListener.prototype.nonDraggingMouseUp = function (element, event) {
        var result = [];
        if (event.button === 0) {
            if (!this.isSourceSelected()) {
                if (this.currentTarget && this.allowedTarget) {
                    this.source = this.currentTarget.id;
                    this.tool.dispatchFeedback([new creation_tool_feedback_1.DrawFeedbackEdgeAction(this.triggerAction.elementTypeId, this.source)]);
                }
            }
            else {
                if (this.currentTarget && this.allowedTarget) {
                    this.target = this.currentTarget.id;
                }
            }
            if (this.isSourceSelected() && this.isTargetSelected()) {
                result.push(new operation_1.CreateEdgeOperation(this.triggerAction.elementTypeId, this.source, this.target, this.triggerAction.args));
                if (!sprotty_1.isCtrlOrCmd(event)) {
                    result.push(new sprotty_1.EnableDefaultToolsAction());
                }
                else {
                    this.reinitialize();
                }
            }
        }
        else if (event.button === 2) {
            result.push(new sprotty_1.EnableDefaultToolsAction());
        }
        return result;
    };
    EdgeCreationToolMouseListener.prototype.isSourceSelected = function () {
        return this.source !== undefined;
    };
    EdgeCreationToolMouseListener.prototype.isTargetSelected = function () {
        return this.target !== undefined;
    };
    EdgeCreationToolMouseListener.prototype.mouseOver = function (target, event) {
        var newCurrentTarget = sprotty_1.findParentByFeature(target, sprotty_1.isConnectable);
        if (newCurrentTarget !== this.currentTarget) {
            this.currentTarget = newCurrentTarget;
            if (this.currentTarget) {
                if (!this.isSourceSelected()) {
                    this.allowedTarget = this.isAllowedSource(newCurrentTarget);
                }
                else if (!this.isTargetSelected()) {
                    this.allowedTarget = this.isAllowedTarget(newCurrentTarget);
                }
                if (this.allowedTarget) {
                    var action = !this.isSourceSelected() ? css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.EDGE_CREATION_SOURCE) :
                        css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.EDGE_CREATION_TARGET);
                    return [action];
                }
            }
            return [css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.OPERATION_NOT_ALLOWED)];
        }
        return [];
    };
    EdgeCreationToolMouseListener.prototype.isAllowedSource = function (element) {
        return element !== undefined && sprotty_1.isConnectable(element) && element.canConnect(this.proxyEdge, "source");
    };
    EdgeCreationToolMouseListener.prototype.isAllowedTarget = function (element) {
        return element !== undefined && sprotty_1.isConnectable(element) && element.canConnect(this.proxyEdge, "target");
    };
    EdgeCreationToolMouseListener = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [operation_1.TriggerEdgeCreationAction, EdgeCreationTool])
    ], EdgeCreationToolMouseListener);
    return EdgeCreationToolMouseListener;
}(drag_aware_mouse_listener_1.DragAwareMouseListener));
exports.EdgeCreationToolMouseListener = EdgeCreationToolMouseListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tools/delete-tool.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tools/delete-tool.js ***!
  \******************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var keyboard_1 = __webpack_require__(/*! sprotty/lib/utils/keyboard */ "../node_modules/sprotty/lib/utils/keyboard.js");
var operation_1 = __webpack_require__(/*! ../../base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var css_feedback_1 = __webpack_require__(/*! ../tool-feedback/css-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/css-feedback.js");
/**
 * Deletes selected elements when hitting the `Del` key.
 */
var DelKeyDeleteTool = /** @class */ (function () {
    function DelKeyDeleteTool(keytool) {
        this.keytool = keytool;
        this.id = DelKeyDeleteTool_1.ID;
        this.deleteKeyListener = new DeleteKeyListener();
    }
    DelKeyDeleteTool_1 = DelKeyDeleteTool;
    DelKeyDeleteTool.prototype.enable = function () {
        this.keytool.register(this.deleteKeyListener);
    };
    DelKeyDeleteTool.prototype.disable = function () {
        this.keytool.deregister(this.deleteKeyListener);
    };
    var DelKeyDeleteTool_1;
    DelKeyDeleteTool.ID = "glsp.delete-keyboard";
    DelKeyDeleteTool = DelKeyDeleteTool_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.KeyTool)),
        __metadata("design:paramtypes", [sprotty_1.KeyTool])
    ], DelKeyDeleteTool);
    return DelKeyDeleteTool;
}());
exports.DelKeyDeleteTool = DelKeyDeleteTool;
var DeleteKeyListener = /** @class */ (function (_super) {
    __extends(DeleteKeyListener, _super);
    function DeleteKeyListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteKeyListener.prototype.keyDown = function (element, event) {
        if (keyboard_1.matchesKeystroke(event, 'Delete')) {
            var deleteElementIds = Array.from(element.root.index.all().filter(function (e) { return sprotty_1.isDeletable(e) && sprotty_1.isSelectable(e) && e.selected; })
                .filter(function (e) { return e.id !== e.root.id; }).map(function (e) { return e.id; }));
            return [new operation_1.DeleteElementOperation(deleteElementIds)];
        }
        return [];
    };
    DeleteKeyListener = __decorate([
        inversify_1.injectable()
    ], DeleteKeyListener);
    return DeleteKeyListener;
}(sprotty_1.KeyListener));
exports.DeleteKeyListener = DeleteKeyListener;
/**
 * Deletes selected elements when clicking on them.
 */
var MouseDeleteTool = /** @class */ (function () {
    function MouseDeleteTool(mouseTool, feedbackDispatcher) {
        this.mouseTool = mouseTool;
        this.feedbackDispatcher = feedbackDispatcher;
        this.id = MouseDeleteTool_1.ID;
        this.deleteToolMouseListener = new DeleteToolMouseListener();
    }
    MouseDeleteTool_1 = MouseDeleteTool;
    MouseDeleteTool.prototype.enable = function () {
        this.mouseTool.register(this.deleteToolMouseListener);
        this.feedbackDispatcher.registerFeedback(this, [css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.ELEMENT_DELETION)]);
    };
    MouseDeleteTool.prototype.disable = function () {
        this.mouseTool.deregister(this.deleteToolMouseListener);
        this.feedbackDispatcher.registerFeedback(this, [css_feedback_1.cursorFeedbackAction()]);
    };
    var MouseDeleteTool_1;
    MouseDeleteTool.ID = "glsp.delete-mouse";
    MouseDeleteTool = MouseDeleteTool_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.GLSP_TYPES.MouseTool)),
        __param(1, inversify_1.inject(types_1.GLSP_TYPES.IFeedbackActionDispatcher)),
        __metadata("design:paramtypes", [Object, Object])
    ], MouseDeleteTool);
    return MouseDeleteTool;
}());
exports.MouseDeleteTool = MouseDeleteTool;
var DeleteToolMouseListener = /** @class */ (function (_super) {
    __extends(DeleteToolMouseListener, _super);
    function DeleteToolMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteToolMouseListener.prototype.mouseUp = function (target, event) {
        if (!sprotty_1.isDeletable(target)) {
            return [];
        }
        var result = [];
        result.push(new operation_1.DeleteElementOperation([target.id]));
        if (!sprotty_1.isCtrlOrCmd(event)) {
            result.push(new sprotty_1.EnableDefaultToolsAction());
        }
        return result;
    };
    DeleteToolMouseListener = __decorate([
        inversify_1.injectable()
    ], DeleteToolMouseListener);
    return DeleteToolMouseListener;
}(sprotty_1.MouseListener));
exports.DeleteToolMouseListener = DeleteToolMouseListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tools/di.config.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tools/di.config.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var operation_1 = __webpack_require__(/*! ../../base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var change_bounds_tool_1 = __webpack_require__(/*! ./change-bounds-tool */ "../node_modules/@eclipse-glsp/client/lib/features/tools/change-bounds-tool.js");
var creation_tool_1 = __webpack_require__(/*! ./creation-tool */ "../node_modules/@eclipse-glsp/client/lib/features/tools/creation-tool.js");
var delete_tool_1 = __webpack_require__(/*! ./delete-tool */ "../node_modules/@eclipse-glsp/client/lib/features/tools/delete-tool.js");
var edge_edit_tool_1 = __webpack_require__(/*! ./edge-edit-tool */ "../node_modules/@eclipse-glsp/client/lib/features/tools/edge-edit-tool.js");
var toolsModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    // Register default tools
    bind(types_1.GLSP_TYPES.IDefaultTool).to(change_bounds_tool_1.ChangeBoundsTool);
    bind(types_1.GLSP_TYPES.IDefaultTool).to(edge_edit_tool_1.EdgeEditTool);
    bind(types_1.GLSP_TYPES.IDefaultTool).to(delete_tool_1.DelKeyDeleteTool);
    // Register  tools
    bind(types_1.GLSP_TYPES.ITool).to(delete_tool_1.MouseDeleteTool);
    bind(creation_tool_1.NodeCreationTool).toSelf().inSingletonScope();
    bind(creation_tool_1.EdgeCreationTool).toSelf().inSingletonScope();
    bind(types_1.GLSP_TYPES.ITool).toService(creation_tool_1.EdgeCreationTool);
    bind(types_1.GLSP_TYPES.ITool).toService(creation_tool_1.NodeCreationTool);
    sprotty_1.configureActionHandler({ bind: bind, isBound: isBound }, operation_1.TriggerNodeCreationAction.KIND, creation_tool_1.NodeCreationTool);
    sprotty_1.configureActionHandler({ bind: bind, isBound: isBound }, operation_1.TriggerEdgeCreationAction.KIND, creation_tool_1.EdgeCreationTool);
});
exports.default = toolsModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tools/drag-aware-mouse-listener.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tools/drag-aware-mouse-listener.js ***!
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
/**
 * A mouse listener that is aware of prior mouse dragging.
 *
 * Therefore, this listener distinguishes between mouse up events after dragging and
 * mouse up events without prior dragging. Subclasses may override the methods
 * `draggingMouseUp` and/or `nonDraggingMouseUp` to react to only these specific kinds
 * of mouse up events.
 */
var DragAwareMouseListener = /** @class */ (function (_super) {
    __extends(DragAwareMouseListener, _super);
    function DragAwareMouseListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMouseDown = false;
        _this._isMouseDrag = false;
        return _this;
    }
    DragAwareMouseListener.prototype.mouseDown = function (target, event) {
        this._isMouseDown = true;
        return [];
    };
    DragAwareMouseListener.prototype.mouseMove = function (target, event) {
        if (this._isMouseDown) {
            this._isMouseDrag = true;
        }
        return [];
    };
    DragAwareMouseListener.prototype.mouseUp = function (element, event) {
        this._isMouseDown = false;
        if (this._isMouseDrag) {
            this._isMouseDrag = false;
            return this.draggingMouseUp(element, event);
        }
        return this.nonDraggingMouseUp(element, event);
    };
    DragAwareMouseListener.prototype.nonDraggingMouseUp = function (element, event) {
        return [];
    };
    DragAwareMouseListener.prototype.draggingMouseUp = function (element, event) {
        return [];
    };
    Object.defineProperty(DragAwareMouseListener.prototype, "isMouseDrag", {
        get: function () {
            return this._isMouseDrag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragAwareMouseListener.prototype, "isMouseDown", {
        get: function () {
            return this._isMouseDown;
        },
        enumerable: true,
        configurable: true
    });
    return DragAwareMouseListener;
}(sprotty_1.MouseListener));
exports.DragAwareMouseListener = DragAwareMouseListener;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/tools/edge-edit-tool.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/tools/edge-edit-tool.js ***!
  \*********************************************************************************/
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var operation_1 = __webpack_require__(/*! ../../base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var smodel_util_1 = __webpack_require__(/*! ../../utils/smodel-util */ "../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js");
var model_1 = __webpack_require__(/*! ../reconnect/model */ "../node_modules/@eclipse-glsp/client/lib/features/reconnect/model.js");
var selection_service_1 = __webpack_require__(/*! ../select/selection-service */ "../node_modules/@eclipse-glsp/client/lib/features/select/selection-service.js");
var creation_tool_feedback_1 = __webpack_require__(/*! ../tool-feedback/creation-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/creation-tool-feedback.js");
var css_feedback_1 = __webpack_require__(/*! ../tool-feedback/css-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/css-feedback.js");
var edge_edit_tool_feedback_1 = __webpack_require__(/*! ../tool-feedback/edge-edit-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/edge-edit-tool-feedback.js");
var drag_aware_mouse_listener_1 = __webpack_require__(/*! ./drag-aware-mouse-listener */ "../node_modules/@eclipse-glsp/client/lib/features/tools/drag-aware-mouse-listener.js");
var EdgeEditTool = /** @class */ (function () {
    function EdgeEditTool(selectionService, mouseTool, feedbackDispatcher, anchorRegistry, edgeRouterRegistry) {
        this.selectionService = selectionService;
        this.mouseTool = mouseTool;
        this.feedbackDispatcher = feedbackDispatcher;
        this.anchorRegistry = anchorRegistry;
        this.edgeRouterRegistry = edgeRouterRegistry;
        this.id = EdgeEditTool_1.ID;
    }
    EdgeEditTool_1 = EdgeEditTool;
    EdgeEditTool.prototype.enable = function () {
        this.edgeEditListener = new EdgeEditListener(this);
        this.mouseTool.register(this.edgeEditListener);
        this.selectionService.register(this.edgeEditListener);
        // install feedback move mouse listener for client-side move updates
        this.feedbackEdgeSourceMovingListener = new edge_edit_tool_feedback_1.FeedbackEdgeSourceMovingMouseListener(this.anchorRegistry);
        this.feedbackEdgeTargetMovingListener = new edge_edit_tool_feedback_1.FeedbackEdgeTargetMovingMouseListener(this.anchorRegistry);
        this.feedbackMovingListener = new edge_edit_tool_feedback_1.FeedbackEdgeRouteMovingMouseListener(this.edgeRouterRegistry);
    };
    EdgeEditTool.prototype.registerFeedbackListeners = function () {
        this.mouseTool.register(this.feedbackMovingListener);
        this.mouseTool.register(this.feedbackEdgeSourceMovingListener);
        this.mouseTool.register(this.feedbackEdgeTargetMovingListener);
    };
    EdgeEditTool.prototype.deregisterFeedbackListeners = function () {
        this.mouseTool.deregister(this.feedbackEdgeSourceMovingListener);
        this.mouseTool.deregister(this.feedbackEdgeTargetMovingListener);
        this.mouseTool.deregister(this.feedbackMovingListener);
    };
    EdgeEditTool.prototype.disable = function () {
        this.edgeEditListener.reset();
        this.selectionService.deregister(this.edgeEditListener);
        this.deregisterFeedbackListeners();
        this.mouseTool.deregister(this.edgeEditListener);
    };
    EdgeEditTool.prototype.dispatchFeedback = function (actions) {
        this.feedbackDispatcher.registerFeedback(this, actions);
    };
    var EdgeEditTool_1;
    EdgeEditTool.ID = "glsp.edge-edit-tool";
    EdgeEditTool = EdgeEditTool_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.GLSP_TYPES.SelectionService)),
        __param(1, inversify_1.inject(types_1.GLSP_TYPES.MouseTool)),
        __param(2, inversify_1.inject(types_1.GLSP_TYPES.IFeedbackActionDispatcher)),
        __param(3, inversify_1.inject(sprotty_1.AnchorComputerRegistry)),
        __param(4, inversify_1.inject(sprotty_1.EdgeRouterRegistry)), __param(4, inversify_1.optional()),
        __metadata("design:paramtypes", [selection_service_1.SelectionService, Object, Object, sprotty_1.AnchorComputerRegistry,
            sprotty_1.EdgeRouterRegistry])
    ], EdgeEditTool);
    return EdgeEditTool;
}());
exports.EdgeEditTool = EdgeEditTool;
var EdgeEditListener = /** @class */ (function (_super) {
    __extends(EdgeEditListener, _super);
    function EdgeEditListener(tool) {
        var _this = _super.call(this) || this;
        _this.tool = tool;
        return _this;
    }
    EdgeEditListener.prototype.isValidEdge = function (edge) {
        return edge !== undefined && edge.id !== creation_tool_feedback_1.feedbackEdgeId(edge.root) && sprotty_1.isSelected(edge);
    };
    EdgeEditListener.prototype.setEdgeSelected = function (edge) {
        if (this.edge && this.edge.id !== edge.id) {
            // reset from a previously selected edge
            this.reset();
        }
        this.edge = edge;
        // note: order is important here as we want the reconnect handles to cover the routing handles
        var feedbackActions = [];
        if (sprotty_1.canEditRouting(edge)) {
            feedbackActions.push(new edge_edit_tool_feedback_1.SwitchRoutingModeAction([this.edge.id], []));
        }
        if (model_1.isReconnectable(edge)) {
            feedbackActions.push(new edge_edit_tool_feedback_1.ShowEdgeReconnectHandlesFeedbackAction(this.edge.id));
        }
        this.tool.dispatchFeedback(feedbackActions);
    };
    EdgeEditListener.prototype.isEdgeSelected = function () {
        return this.edge !== undefined && sprotty_1.isSelected(this.edge);
    };
    EdgeEditListener.prototype.setReconnectHandleSelected = function (edge, reconnectHandle) {
        if (this.edge && this.edge.target && this.edge.source) {
            if (model_1.isSourceRoutingHandle(edge, reconnectHandle)) {
                this.tool.dispatchFeedback([new edge_edit_tool_feedback_1.HideEdgeReconnectHandlesFeedbackAction(),
                    css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.EDGE_RECONNECT),
                    new edge_edit_tool_feedback_1.DrawFeedbackEdgeSourceAction(this.edge.type, this.edge.targetId)]);
                this.reconnectMode = "NEW_SOURCE";
            }
            else if (model_1.isTargetRoutingHandle(edge, reconnectHandle)) {
                this.tool.dispatchFeedback([new edge_edit_tool_feedback_1.HideEdgeReconnectHandlesFeedbackAction(),
                    css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.EDGE_CREATION_TARGET),
                    new creation_tool_feedback_1.DrawFeedbackEdgeAction(this.edge.type, this.edge.sourceId)]);
                this.reconnectMode = "NEW_TARGET";
            }
        }
    };
    EdgeEditListener.prototype.isReconnecting = function () {
        return this.reconnectMode !== undefined;
    };
    EdgeEditListener.prototype.isReconnectingNewSource = function () {
        return this.reconnectMode === "NEW_SOURCE";
    };
    EdgeEditListener.prototype.setRoutingHandleSelected = function (edge, routingHandle) {
        if (this.edge && this.edge.target && this.edge.source) {
            this.routingHandle = routingHandle;
        }
    };
    EdgeEditListener.prototype.requiresReconnect = function (sourceId, targetId) {
        return this.edge !== undefined && (this.edge.sourceId !== sourceId || this.edge.targetId !== targetId);
    };
    EdgeEditListener.prototype.setNewConnectable = function (connectable) {
        this.newConnectable = connectable;
    };
    EdgeEditListener.prototype.isReadyToReconnect = function () {
        return this.edge && this.isReconnecting() && this.newConnectable !== undefined;
    };
    EdgeEditListener.prototype.isReadyToReroute = function () {
        return this.routingHandle !== undefined;
    };
    EdgeEditListener.prototype.mouseDown = function (target, event) {
        var result = _super.prototype.mouseDown.call(this, target, event);
        if (event.button === 0) {
            var reconnectHandle = sprotty_1.findParentByFeature(target, model_1.isReconnectHandle);
            var routingHandle = !reconnectHandle ? sprotty_1.findParentByFeature(target, smodel_util_1.isRoutingHandle) : undefined;
            var edge = sprotty_1.findParentByFeature(target, smodel_util_1.isRoutable);
            if (this.isEdgeSelected() && edge && reconnectHandle) {
                // PHASE 2 Reconnect: Select reconnect handle on selected edge
                this.setReconnectHandleSelected(edge, reconnectHandle);
            }
            else if (this.isEdgeSelected() && edge && routingHandle) {
                // PHASE 2 Reroute: Select routing handle on selected edge
                this.setRoutingHandleSelected(edge, routingHandle);
            }
            else if (this.isValidEdge(edge)) {
                // PHASE 1: Select edge
                this.tool.registerFeedbackListeners();
                this.setEdgeSelected(edge);
            }
        }
        else if (event.button === 2) {
            this.reset();
        }
        return result;
    };
    EdgeEditListener.prototype.mouseMove = function (target, event) {
        var result = _super.prototype.mouseMove.call(this, target, event);
        if (this.isMouseDrag) {
            // reset any selected connectables when we are dragging, maybe the user is just panning
            this.setNewConnectable(undefined);
        }
        return result;
    };
    EdgeEditListener.prototype.mouseUp = function (target, event) {
        var result = _super.prototype.mouseUp.call(this, target, event);
        if (!this.isReadyToReconnect() && !this.isReadyToReroute()) {
            return result;
        }
        if (this.edge && this.newConnectable) {
            var sourceId = this.isReconnectingNewSource() ? this.newConnectable.id : this.edge.sourceId;
            var targetId = this.isReconnectingNewSource() ? this.edge.targetId : this.newConnectable.id;
            if (this.requiresReconnect(sourceId, targetId)) {
                result.push(new operation_1.ReconnectEdgeOperation(this.edge.id, sourceId, targetId));
            }
            this.reset();
        }
        else if (this.edge && this.routingHandle) {
            // we need to re-retrieve the edge as it might have changed due to a server udpate since we do not reset the state between reroute actions
            var latestEdge = target.index.getById(this.edge.id);
            if (latestEdge && smodel_util_1.isRoutable(latestEdge)) {
                result.push(new operation_1.ChangeRoutingPointsOperation([{ elementId: latestEdge.id, newRoutingPoints: latestEdge.routingPoints }]));
                this.routingHandle = undefined;
            }
        }
        return result;
    };
    EdgeEditListener.prototype.mouseOver = function (target, event) {
        if (this.edge && this.isReconnecting()) {
            var currentTarget = sprotty_1.findParentByFeature(target, sprotty_1.isConnectable);
            if (!this.newConnectable || currentTarget !== this.newConnectable) {
                this.setNewConnectable(currentTarget);
                if (currentTarget) {
                    if ((this.reconnectMode === 'NEW_SOURCE' && currentTarget.canConnect(this.edge, "source")) ||
                        (this.reconnectMode === 'NEW_TARGET' && currentTarget.canConnect(this.edge, "target"))) {
                        this.tool.dispatchFeedback([css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.EDGE_RECONNECT)]);
                        return [];
                    }
                }
                this.tool.dispatchFeedback([css_feedback_1.cursorFeedbackAction(css_feedback_1.CursorCSS.OPERATION_NOT_ALLOWED)]);
            }
        }
        return [];
    };
    EdgeEditListener.prototype.selectionChanged = function (root, selectedElements) {
        var e_1, _a;
        if (this.edge) {
            if (selectedElements.indexOf(this.edge.id) > -1) {
                // our active edge is still selected, nothing to do
                return;
            }
            if (this.isReconnecting()) {
                // we are reconnecting, so we may have clicked on a potential target
                return;
            }
            try {
                // try to find some other selected element and mark that active
                for (var _b = __values(selectedElements.reverse()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var elementId = _c.value;
                    var element = root.index.getById(elementId);
                    if (element) {
                        var edge = sprotty_1.findParentByFeature(element, smodel_util_1.isRoutable);
                        if (this.isValidEdge(edge)) {
                            // PHASE 1: Select edge
                            this.setEdgeSelected(edge);
                            return;
                        }
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
            this.reset();
        }
    };
    EdgeEditListener.prototype.reset = function () {
        this.resetFeedback();
        this.resetData();
    };
    EdgeEditListener.prototype.resetData = function () {
        this.edge = undefined;
        this.reconnectMode = undefined;
        this.newConnectable = undefined;
        this.routingHandle = undefined;
    };
    EdgeEditListener.prototype.resetFeedback = function () {
        var result = [];
        if (this.edge) {
            result.push(new edge_edit_tool_feedback_1.SwitchRoutingModeAction([], [this.edge.id]));
        }
        result.push.apply(result, __spread([new edge_edit_tool_feedback_1.HideEdgeReconnectHandlesFeedbackAction(),
            css_feedback_1.cursorFeedbackAction(), new creation_tool_feedback_1.RemoveFeedbackEdgeAction()]));
        this.tool.dispatchFeedback(result);
        this.tool.deregisterFeedbackListeners();
    };
    return EdgeEditListener;
}(drag_aware_mouse_listener_1.DragAwareMouseListener));


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/undo-redo/model.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/undo-redo/model.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlspUndoAction = /** @class */ (function () {
    function GlspUndoAction() {
        this.kind = GlspUndoAction.KIND;
    }
    GlspUndoAction.KIND = 'glspUndo';
    return GlspUndoAction;
}());
exports.GlspUndoAction = GlspUndoAction;
var GlspRedoAction = /** @class */ (function () {
    function GlspRedoAction() {
        this.kind = GlspRedoAction.KIND;
    }
    GlspRedoAction.KIND = 'glspRedo';
    return GlspRedoAction;
}());
exports.GlspRedoAction = GlspRedoAction;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/validation/di.config.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/validation/di.config.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var validate_1 = __webpack_require__(/*! ./validate */ "../node_modules/@eclipse-glsp/client/lib/features/validation/validate.js");
var validationModule = new inversify_1.ContainerModule(function (bind, _unbind, isBound) {
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, validate_1.SetMarkersCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, validate_1.ApplyMarkersCommand);
    sprotty_1.configureCommand({ bind: bind, isBound: isBound }, validate_1.ClearMarkersCommand);
    bind(validate_1.ValidationFeedbackEmitter).toSelf().inSingletonScope();
});
exports.default = validationModule;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/features/validation/validate.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/features/validation/validate.js ***!
  \********************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var types_1 = __webpack_require__(/*! ../../base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js");
var marker_1 = __webpack_require__(/*! ../../utils/marker */ "../node_modules/@eclipse-glsp/client/lib/utils/marker.js");
var smodel_util_1 = __webpack_require__(/*! ../../utils/smodel-util */ "../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js");
var hover_1 = __webpack_require__(/*! ../hover/hover */ "../node_modules/@eclipse-glsp/client/lib/features/hover/hover.js");
var model_1 = __webpack_require__(/*! ../tool-feedback/model */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js");
/**
* Action to retrieve markers for a model
*/
var RequestMarkersAction = /** @class */ (function () {
    function RequestMarkersAction(elementsIDs) {
        if (elementsIDs === void 0) { elementsIDs = []; }
        this.elementsIDs = elementsIDs;
        this.kind = RequestMarkersAction.KIND;
    }
    RequestMarkersAction.KIND = 'requestMarkers';
    return RequestMarkersAction;
}());
exports.RequestMarkersAction = RequestMarkersAction;
/**
 * Feedback emitter sending actions for visualizing model validation feedback and
 * re-establishing this feedback visualization after the model has been updated.
 */
var ValidationFeedbackEmitter = /** @class */ (function () {
    function ValidationFeedbackEmitter() {
    }
    /**
     * Register the action that should be emitted for visualizing validation feedback.
     * @param action the action that should be emitted when the model is updated and that will visualize the model validation feedback.
     */
    ValidationFeedbackEmitter.prototype.registerValidationFeedbackAction = function (action) {
        // De-register old action responsible for applying markers and re-applying them when the model is updated
        this.feedbackActionDispatcher.deregisterFeedback(this, []);
        // Clear existing markers
        if (this.registeredAction !== undefined) {
            var clearMarkersAction_1 = new ClearMarkersAction(this.registeredAction.markers);
            this.actionDispatcher().then(function (dispatcher) { return dispatcher.dispatch(clearMarkersAction_1); });
        }
        // Register new action responsible for applying markers and re-applying them when the model is updated
        this.feedbackActionDispatcher.registerFeedback(this, [action]);
        this.registeredAction = action;
    };
    __decorate([
        inversify_1.inject(types_1.GLSP_TYPES.IFeedbackActionDispatcher),
        __metadata("design:type", Object)
    ], ValidationFeedbackEmitter.prototype, "feedbackActionDispatcher", void 0);
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.IActionDispatcherProvider),
        __metadata("design:type", Function)
    ], ValidationFeedbackEmitter.prototype, "actionDispatcher", void 0);
    ValidationFeedbackEmitter = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ValidationFeedbackEmitter);
    return ValidationFeedbackEmitter;
}());
exports.ValidationFeedbackEmitter = ValidationFeedbackEmitter;
/**
 * Action to set markers for a model
 */
var SetMarkersAction = /** @class */ (function () {
    function SetMarkersAction(markers) {
        this.markers = markers;
        this.kind = SetMarkersCommand.KIND;
    }
    return SetMarkersAction;
}());
exports.SetMarkersAction = SetMarkersAction;
/**
 * Command for handling `SetMarkersAction`
 */
var SetMarkersCommand = /** @class */ (function (_super) {
    __extends(SetMarkersCommand, _super);
    function SetMarkersCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    SetMarkersCommand.prototype.execute = function (context) {
        var markers = this.action.markers;
        var applyMarkersAction = new ApplyMarkersAction(markers);
        this.validationFeedbackEmitter.registerValidationFeedbackAction(applyMarkersAction);
        return context.root;
    };
    SetMarkersCommand.prototype.undo = function (context) {
        return context.root;
    };
    SetMarkersCommand.prototype.redo = function (context) {
        return this.execute(context);
    };
    SetMarkersCommand.KIND = 'setMarkers';
    __decorate([
        inversify_1.inject(ValidationFeedbackEmitter),
        __metadata("design:type", ValidationFeedbackEmitter)
    ], SetMarkersCommand.prototype, "validationFeedbackEmitter", void 0);
    SetMarkersCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [SetMarkersAction])
    ], SetMarkersCommand);
    return SetMarkersCommand;
}(sprotty_1.Command));
exports.SetMarkersCommand = SetMarkersCommand;
/**
 * Action for applying makers to a model
 */
var ApplyMarkersAction = /** @class */ (function () {
    function ApplyMarkersAction(markers) {
        this.markers = markers;
        this.kind = ApplyMarkersCommand.KIND;
    }
    ApplyMarkersAction = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Array])
    ], ApplyMarkersAction);
    return ApplyMarkersAction;
}());
exports.ApplyMarkersAction = ApplyMarkersAction;
/**
 * Command for handling `ApplyMarkersAction`
 */
var ApplyMarkersCommand = /** @class */ (function (_super) {
    __extends(ApplyMarkersCommand, _super);
    function ApplyMarkersCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.priority = 0;
        return _this;
    }
    ApplyMarkersCommand.prototype.execute = function (context) {
        var e_1, _a;
        var markers = this.action.markers;
        try {
            for (var markers_1 = __values(markers), markers_1_1 = markers_1.next(); !markers_1_1.done; markers_1_1 = markers_1.next()) {
                var marker = markers_1_1.value;
                var modelElement = context.root.index.getById(marker.elementId);
                if (modelElement instanceof sprotty_1.SParentElement) {
                    var issueMarker = getOrCreateSIssueMarker(modelElement);
                    var issue = createSIssue(marker);
                    issueMarker.issues.push(issue);
                    addCSSClassToIssueParent(modelElement, issueMarker);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (markers_1_1 && !markers_1_1.done && (_a = markers_1.return)) _a.call(markers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return context.root;
    };
    ApplyMarkersCommand.prototype.undo = function (context) {
        return context.root;
    };
    ApplyMarkersCommand.prototype.redo = function (context) {
        return this.execute(context);
    };
    ApplyMarkersCommand.KIND = "applyMarkers";
    ApplyMarkersCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [ApplyMarkersAction])
    ], ApplyMarkersCommand);
    return ApplyMarkersCommand;
}(model_1.FeedbackCommand));
exports.ApplyMarkersCommand = ApplyMarkersCommand;
function addCSSClassToIssueParent(modelElement, issueMarker) {
    smodel_util_1.addCssClasses(modelElement, [hover_1.getSeverity(issueMarker)]);
}
function removeCSSClassFromIssueParent(modelElement, issueMarker) {
    smodel_util_1.removeCssClasses(modelElement, [hover_1.getSeverity(issueMarker)]);
}
/**
 * Retrieves the `SIssueMarker` contained by the provided model element as
 * direct child or a newly instantiated `SIssueMarker` if no child
 * `SIssueMarker` exists.
 * @param modelElement for which the `SIssueMarker` should be retrieved or created.
 * @returns the child `SIssueMarker` or a new `SIssueMarker` if no such child exists.
 */
function getOrCreateSIssueMarker(modelElement) {
    var issueMarker;
    issueMarker = getSIssueMarker(modelElement);
    if (issueMarker === undefined) {
        issueMarker = new GIssueMarker();
        issueMarker.type = "marker";
        issueMarker.issues = new Array();
        modelElement.add(issueMarker);
    }
    return issueMarker;
}
/**
 * Retrieves the `SIssueMarker` contained by the provided model element as
 * direct child or `undefined` if such an `SIssueMarker` does not exist.
 * @param modelElement for which the `SIssueMarker` should be retrieved.
 * @returns the child `SIssueMarker` or `undefined` if no such child exists.
 */
function getSIssueMarker(modelElement) {
    var e_2, _a;
    var issueMarker;
    try {
        for (var _b = __values(modelElement.children), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            if (child instanceof sprotty_1.SIssueMarker) {
                issueMarker = child;
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
    return issueMarker;
}
/**
 * Creates an `SIssue` with `severity` and `message` set according to
 * the `kind` and `description` of the provided `Marker`.
 * @param marker `Marker` for that an `SIssue` should be created.
 * @returns the created `SIssue`.
 */
function createSIssue(marker) {
    var issue = new sprotty_1.SIssue();
    issue.message = marker.description;
    switch (marker.kind) {
        case marker_1.MarkerKind.ERROR: {
            issue.severity = 'error';
            break;
        }
        case marker_1.MarkerKind.INFO: {
            issue.severity = 'info';
            break;
        }
        case marker_1.MarkerKind.WARNING: {
            issue.severity = 'warning';
            break;
        }
    }
    return issue;
}
/**
 * Action for clearing makers of a model
 */
var ClearMarkersAction = /** @class */ (function () {
    function ClearMarkersAction(markers) {
        this.markers = markers;
        this.kind = ClearMarkersCommand.KIND;
    }
    ClearMarkersAction = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Array])
    ], ClearMarkersAction);
    return ClearMarkersAction;
}());
exports.ClearMarkersAction = ClearMarkersAction;
/**
 * Command for handling `ClearMarkersAction`
 */
var ClearMarkersCommand = /** @class */ (function (_super) {
    __extends(ClearMarkersCommand, _super);
    function ClearMarkersCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    ClearMarkersCommand.prototype.execute = function (context) {
        var e_3, _a;
        var markers = this.action.markers;
        try {
            for (var markers_2 = __values(markers), markers_2_1 = markers_2.next(); !markers_2_1.done; markers_2_1 = markers_2.next()) {
                var marker = markers_2_1.value;
                var modelElement = context.root.index.getById(marker.elementId);
                if (modelElement instanceof sprotty_1.SParentElement) {
                    var issueMarker = getSIssueMarker(modelElement);
                    if (issueMarker !== undefined) {
                        removeCSSClassFromIssueParent(modelElement, issueMarker);
                        for (var index = 0; index < issueMarker.issues.length; ++index) {
                            var issue = issueMarker.issues[index];
                            if (issue.message === marker.description) {
                                issueMarker.issues.splice(index--, 1);
                            }
                        }
                        if (issueMarker.issues.length === 0) {
                            modelElement.remove(issueMarker);
                        }
                        else {
                            addCSSClassToIssueParent(modelElement, issueMarker);
                        }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (markers_2_1 && !markers_2_1.done && (_a = markers_2.return)) _a.call(markers_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return context.root;
    };
    ClearMarkersCommand.prototype.undo = function (context) {
        return context.root;
    };
    ClearMarkersCommand.prototype.redo = function (context) {
        return this.execute(context);
    };
    ClearMarkersCommand.KIND = "clearMarkers";
    ClearMarkersCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [ClearMarkersAction])
    ], ClearMarkersCommand);
    return ClearMarkersCommand;
}(sprotty_1.Command));
exports.ClearMarkersCommand = ClearMarkersCommand;
var GIssueMarker = /** @class */ (function (_super) {
    __extends(GIssueMarker, _super);
    function GIssueMarker() {
        var _this = _super.call(this) || this;
        _this.features = new Set(sprotty_1.SDecoration.DEFAULT_FEATURES);
        return _this;
    }
    return GIssueMarker;
}(sprotty_1.SIssueMarker));
exports.GIssueMarker = GIssueMarker;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
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
var di_config_1 = __webpack_require__(/*! ./base/di.config */ "../node_modules/@eclipse-glsp/client/lib/base/di.config.js");
exports.defaultGLSPModule = di_config_1.default;
var di_config_2 = __webpack_require__(/*! ./features/command-palette/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/command-palette/di.config.js");
exports.glspCommandPaletteModule = di_config_2.default;
var di_config_3 = __webpack_require__(/*! ./features/context-menu/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/context-menu/di.config.js");
exports.glspContextMenuModule = di_config_3.default;
var di_config_4 = __webpack_require__(/*! ./features/copy-paste/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/di.config.js");
exports.copyPasteContextMenuModule = di_config_4.copyPasteContextMenuModule;
exports.glspServerCopyPasteModule = di_config_4.glspServerCopyPasteModule;
var di_config_5 = __webpack_require__(/*! ./features/edit-label-validation/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/edit-label-validation/di.config.js");
exports.glspEditLabelValidationModule = di_config_5.default;
var di_config_6 = __webpack_require__(/*! ./features/execute/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/execute/di.config.js");
exports.executeCommandModule = di_config_6.default;
var di_config_7 = __webpack_require__(/*! ./features/hints/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/hints/di.config.js");
exports.modelHintsModule = di_config_7.default;
var di_config_8 = __webpack_require__(/*! ./features/hover/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/hover/di.config.js");
exports.glspHoverModule = di_config_8.default;
var di_config_9 = __webpack_require__(/*! ./features/layout/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/layout/di.config.js");
exports.layoutCommandsModule = di_config_9.default;
var di_config_10 = __webpack_require__(/*! ./features/mouse-tool/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/mouse-tool/di.config.js");
exports.glspMouseToolModule = di_config_10.default;
var di_config_11 = __webpack_require__(/*! ./features/request-response/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/request-response/di.config.js");
exports.requestResponseModule = di_config_11.default;
var di_config_12 = __webpack_require__(/*! ./features/save/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/save/di.config.js");
exports.saveModule = di_config_12.default;
var di_config_13 = __webpack_require__(/*! ./features/select/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/select/di.config.js");
exports.glspSelectModule = di_config_13.default;
var di_config_14 = __webpack_require__(/*! ./features/tool-feedback/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/di.config.js");
exports.toolFeedbackModule = di_config_14.default;
var di_config_15 = __webpack_require__(/*! ./features/tool-palette/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/tool-palette/di.config.js");
exports.paletteModule = di_config_15.default;
var di_config_16 = __webpack_require__(/*! ./features/tools/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/tools/di.config.js");
exports.toolsModule = di_config_16.default;
var di_config_17 = __webpack_require__(/*! ./features/validation/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/validation/di.config.js");
exports.validationModule = di_config_17.default;
__export(__webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js"));
__export(__webpack_require__(/*! ./base/model/update-model-command */ "../node_modules/@eclipse-glsp/client/lib/base/model/update-model-command.js"));
__export(__webpack_require__(/*! ./base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js"));
__export(__webpack_require__(/*! ./base/command-stack */ "../node_modules/@eclipse-glsp/client/lib/base/command-stack.js"));
__export(__webpack_require__(/*! ./base/editor-context */ "../node_modules/@eclipse-glsp/client/lib/base/editor-context.js"));
__export(__webpack_require__(/*! ./base/selection-clearing-mouse-listener */ "../node_modules/@eclipse-glsp/client/lib/base/selection-clearing-mouse-listener.js"));
__export(__webpack_require__(/*! ./features/change-bounds/model */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/model.js"));
__export(__webpack_require__(/*! ./features/change-bounds/movement-restrictor */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/movement-restrictor.js"));
__export(__webpack_require__(/*! ./features/change-bounds/snap */ "../node_modules/@eclipse-glsp/client/lib/features/change-bounds/snap.js"));
__export(__webpack_require__(/*! ./features/tool-palette/palette-item */ "../node_modules/@eclipse-glsp/client/lib/features/tool-palette/palette-item.js"));
__export(__webpack_require__(/*! ./base/actions/context-actions */ "../node_modules/@eclipse-glsp/client/lib/base/actions/context-actions.js"));
__export(__webpack_require__(/*! ./features/context-menu/delete-element-context-menu */ "../node_modules/@eclipse-glsp/client/lib/features/context-menu/delete-element-context-menu.js"));
__export(__webpack_require__(/*! ./features/command-palette/server-command-palette-provider */ "../node_modules/@eclipse-glsp/client/lib/features/command-palette/server-command-palette-provider.js"));
__export(__webpack_require__(/*! ./features/copy-paste/copy-paste-handler */ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-handler.js"));
__export(__webpack_require__(/*! ./features/edit-label-validation/edit-label-validator */ "../node_modules/@eclipse-glsp/client/lib/features/edit-label-validation/edit-label-validator.js"));
__export(__webpack_require__(/*! ./features/execute/execute-command */ "../node_modules/@eclipse-glsp/client/lib/features/execute/execute-command.js"));
__export(__webpack_require__(/*! ./features/execute/model */ "../node_modules/@eclipse-glsp/client/lib/features/execute/model.js"));
__export(__webpack_require__(/*! ./features/hints/request-type-hints-action */ "../node_modules/@eclipse-glsp/client/lib/features/hints/request-type-hints-action.js"));
__export(__webpack_require__(/*! ./features/hints/type-hints */ "../node_modules/@eclipse-glsp/client/lib/features/hints/type-hints.js"));
__export(__webpack_require__(/*! ./features/hints/model */ "../node_modules/@eclipse-glsp/client/lib/features/hints/model.js"));
__export(__webpack_require__(/*! ./features/hover/hover */ "../node_modules/@eclipse-glsp/client/lib/features/hover/hover.js"));
__export(__webpack_require__(/*! ./features/layout/layout-commands */ "../node_modules/@eclipse-glsp/client/lib/features/layout/layout-commands.js"));
__export(__webpack_require__(/*! ./features/mouse-tool/mouse-tool */ "../node_modules/@eclipse-glsp/client/lib/features/mouse-tool/mouse-tool.js"));
__export(__webpack_require__(/*! ./features/rank/model */ "../node_modules/@eclipse-glsp/client/lib/features/rank/model.js"));
__export(__webpack_require__(/*! ./features/reconnect/model */ "../node_modules/@eclipse-glsp/client/lib/features/reconnect/model.js"));
__export(__webpack_require__(/*! ./features/request-response/glsp-action-dispatcher */ "../node_modules/@eclipse-glsp/client/lib/features/request-response/glsp-action-dispatcher.js"));
__export(__webpack_require__(/*! ./features/save/model */ "../node_modules/@eclipse-glsp/client/lib/features/save/model.js"));
__export(__webpack_require__(/*! ./features/save/save */ "../node_modules/@eclipse-glsp/client/lib/features/save/save.js"));
__export(__webpack_require__(/*! ./features/tool-feedback/change-bounds-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/change-bounds-tool-feedback.js"));
__export(__webpack_require__(/*! ./features/tool-feedback/creation-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/creation-tool-feedback.js"));
__export(__webpack_require__(/*! ./features/tool-feedback/css-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/css-feedback.js"));
__export(__webpack_require__(/*! ./features/tool-feedback/edge-edit-tool-feedback */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/edge-edit-tool-feedback.js"));
__export(__webpack_require__(/*! ./features/tool-feedback/feedback-action-dispatcher */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/feedback-action-dispatcher.js"));
__export(__webpack_require__(/*! ./features/tool-feedback/model */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js"));
__export(__webpack_require__(/*! ./features/tool-feedback/model */ "../node_modules/@eclipse-glsp/client/lib/features/tool-feedback/model.js"));
__export(__webpack_require__(/*! ./features/tool-palette/tool-palette */ "../node_modules/@eclipse-glsp/client/lib/features/tool-palette/tool-palette.js"));
__export(__webpack_require__(/*! ./features/tools/change-bounds-tool */ "../node_modules/@eclipse-glsp/client/lib/features/tools/change-bounds-tool.js"));
__export(__webpack_require__(/*! ./features/tools/creation-tool */ "../node_modules/@eclipse-glsp/client/lib/features/tools/creation-tool.js"));
__export(__webpack_require__(/*! ./features/tools/delete-tool */ "../node_modules/@eclipse-glsp/client/lib/features/tools/delete-tool.js"));
__export(__webpack_require__(/*! ./features/tools/drag-aware-mouse-listener */ "../node_modules/@eclipse-glsp/client/lib/features/tools/drag-aware-mouse-listener.js"));
__export(__webpack_require__(/*! ./features/tools/edge-edit-tool */ "../node_modules/@eclipse-glsp/client/lib/features/tools/edge-edit-tool.js"));
__export(__webpack_require__(/*! ./features/undo-redo/model */ "../node_modules/@eclipse-glsp/client/lib/features/undo-redo/model.js"));
__export(__webpack_require__(/*! ./features/validation/validate */ "../node_modules/@eclipse-glsp/client/lib/features/validation/validate.js"));
__export(__webpack_require__(/*! ./lib/model */ "../node_modules/@eclipse-glsp/client/lib/lib/model.js"));
__export(__webpack_require__(/*! ./base/auto-complete/auto-complete-actions */ "../node_modules/@eclipse-glsp/client/lib/base/auto-complete/auto-complete-actions.js"));
__export(__webpack_require__(/*! ./base/auto-complete/auto-complete-widget */ "../node_modules/@eclipse-glsp/client/lib/base/auto-complete/auto-complete-widget.js"));
__export(__webpack_require__(/*! ./base/auto-complete/validation-decorator */ "../node_modules/@eclipse-glsp/client/lib/base/auto-complete/validation-decorator.js"));
__export(__webpack_require__(/*! ./base/actions/edit-validation-actions */ "../node_modules/@eclipse-glsp/client/lib/base/actions/edit-validation-actions.js"));
__export(__webpack_require__(/*! ./base/types */ "../node_modules/@eclipse-glsp/client/lib/base/types.js"));
__export(__webpack_require__(/*! ./utils/array-utils */ "../node_modules/@eclipse-glsp/client/lib/utils/array-utils.js"));
__export(__webpack_require__(/*! ./utils/marker */ "../node_modules/@eclipse-glsp/client/lib/utils/marker.js"));
__export(__webpack_require__(/*! ./utils/smodel-util */ "../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js"));
__export(__webpack_require__(/*! ./utils/viewpoint-util */ "../node_modules/@eclipse-glsp/client/lib/utils/viewpoint-util.js"));
__export(__webpack_require__(/*! ./model-source/websocket-diagram-server */ "../node_modules/@eclipse-glsp/client/lib/model-source/websocket-diagram-server.js"));
__export(__webpack_require__(/*! ./model-source/glsp-server-status */ "../node_modules/@eclipse-glsp/client/lib/model-source/glsp-server-status.js"));


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/lib/model.js":
/*!*************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/lib/model.js ***!
  \*************************************************************/
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
var lib_1 = __webpack_require__(/*! sprotty/lib */ "../node_modules/sprotty/lib/index.js");
var model_1 = __webpack_require__(/*! ../features/hints/model */ "../node_modules/@eclipse-glsp/client/lib/features/hints/model.js");
var model_2 = __webpack_require__(/*! ../features/save/model */ "../node_modules/@eclipse-glsp/client/lib/features/save/model.js");
var GLSPGraph = /** @class */ (function (_super) {
    __extends(GLSPGraph, _super);
    function GLSPGraph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dirty = false;
        return _this;
    }
    GLSPGraph.prototype.isContainableElement = function (input) {
        return true;
    };
    GLSPGraph.DEFAULT_FEATURES = [lib_1.viewportFeature, lib_1.exportFeature, model_2.saveFeature, model_1.containerFeature];
    return GLSPGraph;
}(lib_1.SGraph));
exports.GLSPGraph = GLSPGraph;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/model-source/glsp-server-status.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/model-source/glsp-server-status.js ***!
  \***********************************************************************************/
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
 * Copyright (c) 2020 EclipseSource and others.
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var GLSPServerStatusAction = /** @class */ (function (_super) {
    __extends(GLSPServerStatusAction, _super);
    function GLSPServerStatusAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timeout = -1;
        return _this;
    }
    return GLSPServerStatusAction;
}(sprotty_1.ServerStatusAction));
exports.GLSPServerStatusAction = GLSPServerStatusAction;
function isGLSPServerStatusAction(serverStatusAction) {
    return serverStatusAction.timeout !== undefined;
}
exports.isGLSPServerStatusAction = isGLSPServerStatusAction;
var ServerMessageAction = /** @class */ (function () {
    function ServerMessageAction() {
        this.kind = ServerMessageAction.KIND;
        this.details = '';
        this.timeout = -1;
    }
    ServerMessageAction.KIND = 'serverMessage';
    return ServerMessageAction;
}());
exports.ServerMessageAction = ServerMessageAction;
function isServerMessageAction(action) {
    return ServerMessageAction.KIND === action.kind && 'severity' in action && 'message' in action;
}
exports.isServerMessageAction = isServerMessageAction;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/model-source/websocket-diagram-server.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/model-source/websocket-diagram-server.js ***!
  \*****************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var rpc = __webpack_require__(/*! vscode-ws-jsonrpc */ "../node_modules/vscode-ws-jsonrpc/lib/index.js");
var vscode_ws_jsonrpc_1 = __webpack_require__(/*! vscode-ws-jsonrpc */ "../node_modules/vscode-ws-jsonrpc/lib/index.js");
var context_actions_1 = __webpack_require__(/*! ../base/actions/context-actions */ "../node_modules/@eclipse-glsp/client/lib/base/actions/context-actions.js");
var execute_command_1 = __webpack_require__(/*! ../features/execute/execute-command */ "../node_modules/@eclipse-glsp/client/lib/features/execute/execute-command.js");
var request_type_hints_action_1 = __webpack_require__(/*! ../features/hints/request-type-hints-action */ "../node_modules/@eclipse-glsp/client/lib/features/hints/request-type-hints-action.js");
var operation_1 = __webpack_require__(/*! ../base/operations/operation */ "../node_modules/@eclipse-glsp/client/lib/base/operations/operation.js");
var save_1 = __webpack_require__(/*! ../features/save/save */ "../node_modules/@eclipse-glsp/client/lib/features/save/save.js");
var model_1 = __webpack_require__(/*! ../features/undo-redo/model */ "../node_modules/@eclipse-glsp/client/lib/features/undo-redo/model.js");
var validate_1 = __webpack_require__(/*! ../features/validation/validate */ "../node_modules/@eclipse-glsp/client/lib/features/validation/validate.js");
var edit_label_validator_1 = __webpack_require__(/*! ../features/edit-label-validation/edit-label-validator */ "../node_modules/@eclipse-glsp/client/lib/features/edit-label-validation/edit-label-validator.js");
var copy_paste_actions_1 = __webpack_require__(/*! ../features/copy-paste/copy-paste-actions */ "../node_modules/@eclipse-glsp/client/lib/features/copy-paste/copy-paste-actions.js");
var edit_validation_actions_1 = __webpack_require__(/*! ../base/actions/edit-validation-actions */ "../node_modules/@eclipse-glsp/client/lib/base/actions/edit-validation-actions.js");
var GLSPWebsocketDiagramServer = /** @class */ (function (_super) {
    __extends(GLSPWebsocketDiagramServer, _super);
    function GLSPWebsocketDiagramServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GLSPWebsocketDiagramServer.prototype.listen = function (webSocket) {
        var _this = this;
        rpc.listen({
            webSocket: webSocket,
            onConnection: function (connection) {
                connection.listen();
                connection.onNotification(ActionMessageNotification.type, function (message) { return _this.messageReceived(message); });
                _this.connection = connection;
            }
        });
    };
    GLSPWebsocketDiagramServer.prototype.sendMessage = function (message) {
        if (this.connection) {
            this.connection.sendNotification(ActionMessageNotification.type, message);
        }
        else {
            throw new Error('WebSocket is not connected');
        }
    };
    GLSPWebsocketDiagramServer.prototype.initialize = function (registry) {
        registerDefaultGLSPServerActions(registry, this);
        this.clientId = this.viewerOptions.baseDiv;
    };
    GLSPWebsocketDiagramServer.prototype.handle = function (action) {
        if (action instanceof sprotty_1.RequestModelAction && action.options !== undefined)
            this._sourceUri = action.options.sourceUri;
        return _super.prototype.handle.call(this, action);
    };
    GLSPWebsocketDiagramServer.prototype.getSourceURI = function () {
        return this._sourceUri;
    };
    GLSPWebsocketDiagramServer.prototype.handleComputedBounds = function (action) {
        return true;
    };
    GLSPWebsocketDiagramServer = __decorate([
        inversify_1.injectable()
    ], GLSPWebsocketDiagramServer);
    return GLSPWebsocketDiagramServer;
}(sprotty_1.DiagramServer));
exports.GLSPWebsocketDiagramServer = GLSPWebsocketDiagramServer;
function registerDefaultGLSPServerActions(registry, diagramServer) {
    registry.register(save_1.SaveModelAction.KIND, diagramServer);
    registry.register(model_1.GlspUndoAction.KIND, diagramServer);
    registry.register(model_1.GlspRedoAction.KIND, diagramServer);
    registry.register(operation_1.CreateEdgeOperation.KIND, diagramServer);
    registry.register(operation_1.ReconnectEdgeOperation.KIND, diagramServer);
    registry.register(operation_1.ChangeRoutingPointsOperation.KIND, diagramServer);
    registry.register(operation_1.CreateNodeOperation.KIND, diagramServer);
    registry.register(operation_1.ChangeBoundsOperation.KIND, diagramServer);
    registry.register(operation_1.DeleteElementOperation.KIND, diagramServer);
    registry.register(execute_command_1.ExecuteServerCommandAction.KIND, diagramServer);
    registry.register(request_type_hints_action_1.RequestTypeHintsAction.KIND, diagramServer);
    registry.register(sprotty_1.ComputedBoundsAction.KIND, diagramServer);
    registry.register(sprotty_1.RequestBoundsCommand.KIND, diagramServer);
    registry.register(sprotty_1.RequestPopupModelAction.KIND, diagramServer);
    registry.register(sprotty_1.CollapseExpandAction.KIND, diagramServer);
    registry.register(sprotty_1.CollapseExpandAllAction.KIND, diagramServer);
    registry.register(sprotty_1.OpenAction.KIND, diagramServer);
    registry.register(sprotty_1.ServerStatusAction.KIND, diagramServer);
    registry.register(sprotty_1.RequestModelAction.KIND, diagramServer);
    registry.register(sprotty_1.ExportSvgAction.KIND, diagramServer);
    registry.register(context_actions_1.RequestContextActions.KIND, diagramServer);
    registry.register(edit_label_validator_1.ValidateLabelEditAction.KIND, diagramServer);
    registry.register(validate_1.RequestMarkersAction.KIND, diagramServer);
    registry.register(sprotty_1.LayoutAction.KIND, diagramServer);
    registry.register(sprotty_1.ApplyLabelEditAction.KIND, diagramServer);
    registry.register(copy_paste_actions_1.RequestClipboardDataAction.KIND, diagramServer);
    registry.register(copy_paste_actions_1.PasteOperationAction.KIND, diagramServer);
    registry.register(copy_paste_actions_1.CutOperationAction.KIND, diagramServer);
    registry.register(edit_validation_actions_1.RequestEditValidationAction.KIND, diagramServer);
    // Register an empty handler for SwitchEditMode, to avoid runtime exceptions.
    // We don't want to support SwitchEditMode, but sprotty still sends some corresponding
    // actions.
    registry.register(sprotty_1.SwitchEditModeCommand.KIND, { handle: function (action) { return undefined; } });
}
exports.registerDefaultGLSPServerActions = registerDefaultGLSPServerActions;
var ActionMessageNotification;
(function (ActionMessageNotification) {
    ActionMessageNotification.type = new vscode_ws_jsonrpc_1.NotificationType('process');
})(ActionMessageNotification || (ActionMessageNotification = {}));


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/utils/array-utils.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/utils/array-utils.js ***!
  \*********************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
function remove(array, value) {
    var index = array.indexOf(value);
    if (index >= 0) {
        array.splice(index, 1);
        return true;
    }
    return false;
}
exports.remove = remove;
function distinctAdd(array, value) {
    if (!array.includes(value)) {
        array.push(value);
        return true;
    }
    return false;
}
exports.distinctAdd = distinctAdd;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/utils/layout-utils.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/utils/layout-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function minWidth(element) {
    var layoutOptions = getLayoutOptions(element);
    if (layoutOptions !== undefined && typeof layoutOptions.minWidth === 'number') {
        return layoutOptions.minWidth;
    }
    return 1;
}
exports.minWidth = minWidth;
function minHeight(element) {
    var layoutOptions = getLayoutOptions(element);
    if (layoutOptions !== undefined && typeof layoutOptions.minHeight === 'number') {
        return layoutOptions.minHeight;
    }
    return 1;
}
exports.minHeight = minHeight;
function getLayoutOptions(element) {
    var layoutOptions = element.layoutOptions;
    if (layoutOptions !== undefined) {
        return layoutOptions;
    }
    return undefined;
}
exports.getLayoutOptions = getLayoutOptions;
function isValidSize(element, size) {
    return size.width >= minWidth(element) && size.height >= minHeight(element);
}
exports.isValidSize = isValidSize;
function isValidMove(element, newPosition, movementRestrictor) {
    if (movementRestrictor) {
        return movementRestrictor.validate(newPosition, element);
    }
    return true;
}
exports.isValidMove = isValidMove;
function toValidElementMove(element, move, movementRestrictor) {
    if (!isValidMove(element, move.toPosition, movementRestrictor)) {
        return;
    }
    return move;
}
exports.toValidElementMove = toValidElementMove;
function toValidElementAndBounds(element, bounds, movementRestrictor) {
    if (!isValidMove(element, bounds.newPosition, movementRestrictor)) {
        return;
    }
    var elementMinWidth = minWidth(element);
    if (bounds.newSize.width < elementMinWidth) {
        bounds.newSize.width = elementMinWidth;
    }
    var elementMinHeight = minHeight(element);
    if (bounds.newSize.height < elementMinHeight) {
        bounds.newSize.height = elementMinHeight;
    }
    return bounds;
}
exports.toValidElementAndBounds = toValidElementAndBounds;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/utils/marker.js":
/*!****************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/utils/marker.js ***!
  \****************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var MarkerKind;
(function (MarkerKind) {
    MarkerKind.INFO = "info";
    MarkerKind.WARNING = "warning";
    MarkerKind.ERROR = "error";
})(MarkerKind = exports.MarkerKind || (exports.MarkerKind = {}));


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/utils/smodel-util.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
function getIndex(element) {
    return element.root.index;
}
exports.getIndex = getIndex;
function forEachElement(element, predicate, runnable) {
    getIndex(element).all()
        .filter(predicate)
        .forEach(runnable);
}
exports.forEachElement = forEachElement;
function getMatchingElements(element, predicate) {
    var matching = [];
    forEachElement(element, predicate, function (item) { return matching.push(item); });
    return matching;
}
exports.getMatchingElements = getMatchingElements;
function hasSelectedElements(element) {
    return getSelectedElementCount(element) > 0;
}
exports.hasSelectedElements = hasSelectedElements;
function getSelectedElementCount(element) {
    var selected = 0;
    getIndex(element).all()
        .filter(sprotty_1.isSelected)
        .forEach(function (e) { return selected = selected + 1; });
    return selected;
}
exports.getSelectedElementCount = getSelectedElementCount;
function isNotUndefined(element) {
    return element !== undefined;
}
exports.isNotUndefined = isNotUndefined;
function addCssClasses(root, cssClasses) {
    var e_1, _a;
    if (root.cssClasses === undefined) {
        root.cssClasses = [];
    }
    try {
        for (var cssClasses_1 = __values(cssClasses), cssClasses_1_1 = cssClasses_1.next(); !cssClasses_1_1.done; cssClasses_1_1 = cssClasses_1.next()) {
            var cssClass = cssClasses_1_1.value;
            if (root.cssClasses.indexOf(cssClass) < 0) {
                root.cssClasses.push(cssClass);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (cssClasses_1_1 && !cssClasses_1_1.done && (_a = cssClasses_1.return)) _a.call(cssClasses_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
exports.addCssClasses = addCssClasses;
function removeCssClasses(root, cssClasses) {
    var e_2, _a;
    if (root.cssClasses === undefined || root.cssClasses.length === 0) {
        return;
    }
    try {
        for (var cssClasses_2 = __values(cssClasses), cssClasses_2_1 = cssClasses_2.next(); !cssClasses_2_1.done; cssClasses_2_1 = cssClasses_2.next()) {
            var cssClass = cssClasses_2_1.value;
            var index = root.cssClasses.indexOf(cssClass);
            if (index !== -1) {
                root.cssClasses.splice(root.cssClasses.indexOf(cssClass), 1);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (cssClasses_2_1 && !cssClasses_2_1.done && (_a = cssClasses_2.return)) _a.call(cssClasses_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
exports.removeCssClasses = removeCssClasses;
function isNonRoutableSelectedMovableBoundsAware(element) {
    return isNonRoutableSelectedBoundsAware(element) && sprotty_1.isMoveable(element);
}
exports.isNonRoutableSelectedMovableBoundsAware = isNonRoutableSelectedMovableBoundsAware;
function isNonRoutableSelectedBoundsAware(element) {
    return sprotty_1.isBoundsAware(element) && sprotty_1.isSelected(element) && !isRoutable(element);
}
exports.isNonRoutableSelectedBoundsAware = isNonRoutableSelectedBoundsAware;
function isRoutable(element) {
    return element instanceof sprotty_1.SRoutableElement && element.routingPoints !== undefined;
}
exports.isRoutable = isRoutable;
function isRoutingHandle(element) {
    return element !== undefined && element instanceof sprotty_1.SRoutingHandle;
}
exports.isRoutingHandle = isRoutingHandle;
function toElementAndBounds(element) {
    return {
        elementId: element.id,
        newPosition: {
            x: element.bounds.x,
            y: element.bounds.y
        },
        newSize: {
            width: element.bounds.width,
            height: element.bounds.height
        }
    };
}
exports.toElementAndBounds = toElementAndBounds;
function toElementAndRoutingPoints(element) {
    return {
        elementId: element.id,
        newRoutingPoints: element.routingPoints
    };
}
exports.toElementAndRoutingPoints = toElementAndRoutingPoints;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/lib/utils/viewpoint-util.js":
/*!************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/lib/utils/viewpoint-util.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
/**
 * Return the position corresponding to this mouse event (Browser coordinates)
 * in the diagram coordinates system (i.e. relative to the Diagram's 0;0 point)
 *
 * This functions takes into account the following transformations:
 * - Location of the Diagram Canvas inside of the browser's page
 * - Current viewport Scroll and Zoom
 *
 * @param target
 *  An element from the diagram
 * @param mouseEvent
 *  A mouseEvent
 */
function getAbsolutePosition(target, mouseEvent) {
    var xPos = mouseEvent.pageX, yPos = mouseEvent.pageY;
    var canvasBounds = target.root.canvasBounds;
    xPos -= canvasBounds.x;
    yPos -= canvasBounds.y;
    var viewport = sprotty_1.findParentByFeature(target, sprotty_1.isViewport);
    var zoom = viewport ? viewport.zoom : 1;
    if (viewport) {
        var scroll_1 = { x: viewport.scroll.x, y: viewport.scroll.y };
        xPos += scroll_1.x * zoom;
        yPos += scroll_1.y * zoom;
        xPos /= zoom;
        yPos /= zoom;
    }
    xPos;
    return {
        x: xPos,
        y: yPos
    };
}
exports.getAbsolutePosition = getAbsolutePosition;
/**
 * Translates the bounds of the diagram element (local coordinates) into the diagram coordinates system
 * (i.e. relative to the Diagram's 0;0 point)
 *
 * @param target  A bounds-aware element from the diagram
 */
function toAbsoluteBounds(element) {
    var location = sprotty_1.isAlignable(element) ? element.alignment : sprotty_1.ORIGIN_POINT;
    var x = location.x;
    var y = location.y;
    var width = element.bounds.width;
    var height = element.bounds.height;
    return sprotty_1.translateBounds({ x: x, y: y, width: width, height: height }, element, element.root);
}
exports.toAbsoluteBounds = toAbsoluteBounds;
/**
 * Translates the position of the diagram element (local coordinates) into the diagram coordinates system
 * (i.e. relative to the Diagram's 0;0 point)
 *
 * @param target  A bounds-aware element from the diagram
 */
function toAbsolutePosition(target) {
    return toAbsoluteBounds(target);
}
exports.toAbsolutePosition = toAbsolutePosition;
/**
 * Translates the size of the diagram element (local coordinates) into the diagram coordinates system
 * (i.e. relative to the Diagram's 0;0 point)
 *
 * @param target  A bounds-aware element from the diagram
 */
function toAbsoluteSize(target) {
    return toAbsoluteBounds(target);
}
exports.toAbsoluteSize = toAbsoluteSize;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \**********************************************************************************************/
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

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/index.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/index.js ***!
  \****************************************************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/md5.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/md5.js ***!
  \**************************************************************************************/
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

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/rng.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/rng.js ***!
  \**************************************************************************************/
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

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/sha1.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/sha1.js ***!
  \***************************************************************************************/
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

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v1.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v1.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/bytesToUuid.js");

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

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v3.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v3.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v35.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v35.js ***!
  \**************************************************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/bytesToUuid.js");


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

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v4.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v4.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/bytesToUuid.js");



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

/***/ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v5.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v5.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "../node_modules/@eclipse-glsp/client/node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/css/diagram.css":
/*!***********************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/css/diagram.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader!./diagram.css */ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/theia-integration/css/diagram.css");

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

/***/ "../node_modules/@eclipse-glsp/theia-integration/css/tool-palette.css":
/*!****************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/css/tool-palette.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader!./tool-palette.css */ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/theia-integration/css/tool-palette.css");

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

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-notification-manager.js":
/*!********************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-notification-manager.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var notifications_manager_1 = __webpack_require__(/*! @theia/messages/lib/browser/notifications-manager */ "../node_modules/@theia/messages/lib/browser/notifications-manager.js");
var ts_md5_1 = __webpack_require__(/*! ts-md5 */ "../node_modules/ts-md5/dist/md5.js");
var GLSPNotificationManager = /** @class */ (function (_super) {
    __extends(GLSPNotificationManager, _super);
    function GLSPNotificationManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GLSPNotificationManager.prototype.getMessageId = function (message) {
        var options = message.options;
        if (isGLSPMessageOptions(options)) {
            return String(ts_md5_1.Md5.hashStr("[" + message.type + " @ " + options.uri + "] " + message.text + " : " + (message.actions || []).join(' | ') + ";"));
        }
        return _super.prototype.getMessageId.call(this, message);
    };
    return GLSPNotificationManager;
}(notifications_manager_1.NotificationManager));
exports.GLSPNotificationManager = GLSPNotificationManager;
function isGLSPMessageOptions(options) {
    return options !== undefined && 'uri' in options;
}


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-context-menu-service.js":
/*!**************************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-context-menu-service.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************
 * Copyright (c) 2020 EclipseSource and others.
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
var theia_sprotty_context_menu_service_1 = __webpack_require__(/*! sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service */ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service.js");
exports.TheiaContextMenuServiceFactory = Symbol('TheiaContextMenuServiceFactory');
function connectTheiaDiagramService(container, contextMenuServiceFactory) {
    var contextMenuService = contextMenuServiceFactory();
    container.bind(client_1.GLSP_TYPES.IContextMenuService).toConstantValue(contextMenuService);
    if (contextMenuService instanceof theia_sprotty_context_menu_service_1.TheiaContextMenuService) {
        contextMenuService.connect(container.get(client_1.TYPES.IActionDispatcher));
    }
}
exports.connectTheiaDiagramService = connectTheiaDiagramService;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-sprotty-connector.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-sprotty-connector.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var SHOW_DETAILS_LABEL = 'Show details';
var GLSPTheiaSprottyConnector = /** @class */ (function () {
    function GLSPTheiaSprottyConnector(services) {
        this.servers = new Map;
        this.widgetMessages = new Map;
        this.widgetStatusTimeouts = new Map;
        Object.assign(this, services);
        this.diagramClient.connect(this);
    }
    GLSPTheiaSprottyConnector.prototype.connect = function (diagramServer) {
        this.servers.set(diagramServer.clientId, diagramServer);
        diagramServer.connect(this);
    };
    GLSPTheiaSprottyConnector.prototype.disconnect = function (diagramServer) {
        this.servers.delete(diagramServer.clientId);
        diagramServer.disconnect();
        this.diagramClient.didClose(diagramServer.clientId);
    };
    GLSPTheiaSprottyConnector.prototype.save = function (uri, action) {
        this.fileSaver.save(uri, action);
    };
    // Status
    GLSPTheiaSprottyConnector.prototype.showStatus = function (widgetId, action) {
        if (this.isClear(action.severity)) {
            this.clearWidgetStatus(widgetId);
        }
        else {
            this.showWidgetStatus(widgetId, action);
        }
    };
    GLSPTheiaSprottyConnector.prototype.clearWidgetStatus = function (widgetId) {
        // any status but FATAL, ERROR, WARNING or INFO will lead to a clear of the status
        this.showWidgetStatus(widgetId, { kind: client_1.ServerStatusAction.KIND, message: '', severity: 'CLEAR' });
    };
    GLSPTheiaSprottyConnector.prototype.showWidgetStatus = function (widgetId, status) {
        var _this = this;
        // remove any pending timeout
        var pendingTimeout = this.widgetStatusTimeouts.get(widgetId);
        if (pendingTimeout) {
            window.clearTimeout(pendingTimeout);
            this.widgetStatusTimeouts.delete(widgetId);
        }
        // update status
        var widget = this.widgetManager.getWidgets(this.diagramManager.id).find(function (w) { return w.id === widgetId; });
        if (widget instanceof sprotty_theia_1.DiagramWidget) {
            widget.setStatus(status);
        }
        // check for any timeouts
        var statusTimeout = client_1.isGLSPServerStatusAction(status) ? status.timeout : -1;
        if (statusTimeout > 0) {
            var newTimeout = window.setTimeout(function () { return _this.clearWidgetStatus(widgetId); }, statusTimeout);
            this.widgetStatusTimeouts.set(widgetId, newTimeout);
        }
    };
    // Message
    GLSPTheiaSprottyConnector.prototype.showMessage = function (widgetId, action) {
        if (this.isClear(action.severity)) {
            this.clearServerMessages(widgetId);
        }
        else {
            this.showServerMessage(widgetId, action);
        }
    };
    GLSPTheiaSprottyConnector.prototype.clearServerMessages = function (widgetId) {
        var _this = this;
        var widgetMessages = Array.from(this.widgetMessages.get(widgetId) || []);
        widgetMessages.forEach(function (messageId) { return _this.clearServerMessage(widgetId, messageId); });
    };
    GLSPTheiaSprottyConnector.prototype.clearServerMessage = function (widgetId, messageId) {
        client_1.remove(this.widgetMessages.get(widgetId) || [], messageId);
        this.notificationManager.clear(messageId);
    };
    GLSPTheiaSprottyConnector.prototype.showServerMessage = function (widgetId, action) {
        var _a, _b, _c;
        var _this = this;
        var widget = this.widgetManager.getWidgets(this.diagramManager.id).find(function (w) { return w.id === widgetId; });
        var uri = widget instanceof sprotty_theia_1.DiagramWidget ? widget.uri.toString() : '';
        var type = this.toMessageType(action.severity);
        var text = action.message;
        var details = action.details;
        var timeout = action.timeout;
        var options = { timeout: timeout, uri: uri };
        var actions = details ? [SHOW_DETAILS_LABEL] : [];
        var message = { type: type, text: text, actions: actions, options: options };
        var messageId = this.createMessageId(message);
        var clearMessageOnClose = function (result) { return _this.clearServerMessage(widgetId, messageId); };
        var onClose = details
            ? function (result) { return _this.showDetailsOrClearMessage(result, text, details, clearMessageOnClose); }
            : clearMessageOnClose;
        switch (message.type) {
            case common_1.MessageType.Error:
                this.addServerMessage(widgetId, messageId);
                (_a = this.messageService).error.apply(_a, __spread([message.text, message.options], message.actions)).then(onClose);
                break;
            case common_1.MessageType.Warning:
                this.addServerMessage(widgetId, messageId);
                (_b = this.messageService).warn.apply(_b, __spread([message.text, message.options], message.actions)).then(onClose);
                break;
            case common_1.MessageType.Info:
                this.addServerMessage(widgetId, messageId);
                (_c = this.messageService).info.apply(_c, __spread([message.text, message.options], message.actions)).then(onClose);
                break;
        }
    };
    GLSPTheiaSprottyConnector.prototype.addServerMessage = function (widgetId, messageId) {
        var widgetMessages = this.widgetMessages.get(widgetId) || [];
        widgetMessages.push(messageId);
        this.widgetMessages.set(widgetId, widgetMessages);
    };
    GLSPTheiaSprottyConnector.prototype.showDetailsOrClearMessage = function (result, text, details, onClose) {
        if (result === SHOW_DETAILS_LABEL) {
            showDialog(text, details).then(function () { return onClose(); });
        }
        else {
            onClose();
        }
    };
    GLSPTheiaSprottyConnector.prototype.toMessageType = function (severity) {
        switch (severity) {
            case 'ERROR':
                return common_1.MessageType.Error;
            case 'WARNING':
                return common_1.MessageType.Warning;
            case 'INFO':
                return common_1.MessageType.Info;
        }
        return common_1.MessageType.Log;
    };
    GLSPTheiaSprottyConnector.prototype.isClear = function (severity) {
        return severity === 'NONE';
    };
    GLSPTheiaSprottyConnector.prototype.createMessageId = function (message) {
        return this.notificationManager.getMessageId(message);
    };
    GLSPTheiaSprottyConnector.prototype.sendMessage = function (message) {
        this.diagramClient.sendThroughLsp(message);
    };
    GLSPTheiaSprottyConnector.prototype.getGLSPClient = function () {
        return this.diagramClient.glspClient;
    };
    GLSPTheiaSprottyConnector.prototype.onMessageReceived = function (message) {
        var diagramServer = this.servers.get(message.clientId);
        if (diagramServer) {
            diagramServer.messageReceived(message);
        }
    };
    return GLSPTheiaSprottyConnector;
}());
exports.GLSPTheiaSprottyConnector = GLSPTheiaSprottyConnector;
function showDialog(title, msg) {
    return new browser_1.ConfirmDialog({ title: title, msg: msg }).open();
}
exports.showDialog = showDialog;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-contribution.js":
/*!********************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-contribution.js ***!
  \********************************************************************************************************/
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
__webpack_require__(/*! ../../../css/diagram.css */ "../node_modules/@eclipse-glsp/theia-integration/css/diagram.css");
__webpack_require__(/*! ../../../css/tool-palette.css */ "../node_modules/@eclipse-glsp/theia-integration/css/tool-palette.css");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../node_modules/@theia/core/lib/common/promise-util.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/languages/lib/common */ "../node_modules/@theia/languages/lib/common/index.js");
var browser_4 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var glsp_client_1 = __webpack_require__(/*! ./glsp-client */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client.js");
exports.GLSPClientContribution = Symbol.for('GLSPClientContribution');
var BaseGLSPClientContribution = /** @class */ (function () {
    function BaseGLSPClientContribution() {
        this.toDeactivate = new core_1.DisposableCollection();
        this.toRestart = new core_1.DisposableCollection();
        this.deferredConnection = new promise_util_1.Deferred();
        this.stop = Promise.resolve();
        this.waitForReady();
    }
    Object.defineProperty(BaseGLSPClientContribution.prototype, "glspClient", {
        get: function () {
            return this._glspClient ? Promise.resolve(this._glspClient) : this.ready;
        },
        enumerable: true,
        configurable: true
    });
    BaseGLSPClientContribution.prototype.waitForActivation = function (app) {
        var _this = this;
        var activationPromises = [];
        var workspaceContains = this.workspaceContains;
        if (workspaceContains.length !== 0) {
            activationPromises.push(this.waitForItemInWorkspace());
        }
        var fileExtensions = this.fileExtensions;
        if (fileExtensions) {
            activationPromises.push(this.waitForOpenDocument(fileExtensions));
        }
        activationPromises.push(this.waitForOpenDiagrams());
        if (activationPromises.length !== 0) {
            return Promise.all([
                this.ready,
                Promise.race(activationPromises.map(function (p) { return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, p];
                            case 1:
                                _a.sent();
                                resolve();
                                return [3 /*break*/, 3];
                            case 2:
                                e_1 = _a.sent();
                                console.error(e_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); }); }))
            ]);
        }
        return this.ready;
    };
    BaseGLSPClientContribution.prototype.waitForOpenDiagrams = function () {
        return Promise.race(this.diagramManagerProviders.map(function (diagramManagerProvider) {
            return diagramManagerProvider().then(function (diagramManager) {
                return new Promise(function (resolve) {
                    var disposable = diagramManager.onCreated(function (widget) {
                        disposable.dispose();
                        resolve();
                    });
                });
            });
        }));
    };
    BaseGLSPClientContribution.prototype.activate = function () {
        var _this = this;
        if (this.toDeactivate.disposed) {
            this.doActivate(this.toDeactivate)
                .then(function () { return _this.initialize(); });
        }
        return this.toDeactivate;
    };
    BaseGLSPClientContribution.prototype.deactivate = function () {
        this.toDeactivate.dispose();
    };
    BaseGLSPClientContribution.prototype.createInitializeParameters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createInitializeOptions()];
                    case 1:
                        options = _a.sent();
                        return [2 /*return*/, { options: options }];
                }
            });
        });
    };
    BaseGLSPClientContribution.prototype.createInitializeOptions = function () {
        return undefined;
    };
    BaseGLSPClientContribution.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parameters;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createInitializeParameters()];
                    case 1:
                        parameters = _a.sent();
                        this.glspClient.then(function (client) { return client.initialize(parameters)
                            .then(function (success) {
                            if (!success) {
                                _this.messageService.error("Failed to initialize " + _this.name + " glsp server with " + JSON.stringify(parameters), 'Retry')
                                    .then(function (retry) {
                                    if (retry) {
                                        _this.initialize();
                                    }
                                });
                            }
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseGLSPClientContribution.prototype.doActivate = function (toDeactivate) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = {};
                toDeactivate.push(browser_3.Disposable.create(function () { return options.reconnecting = false; }));
                this.connectionProvider.listen({
                    path: common_1.LanguageContribution.getPath(this),
                    onConnection: function (messageConnection) {
                        if (toDeactivate.disposed) {
                            messageConnection.dispose();
                            return;
                        }
                        var languageClient = _this.createLanguageClient(messageConnection);
                        _this.onWillStart(languageClient);
                        toDeactivate.pushAll([
                            messageConnection,
                            _this.toRestart.push(browser_3.Disposable.create(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, languageClient.onReady()];
                                        case 1:
                                            _a.sent();
                                            languageClient.stop();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })),
                            languageClient.start()
                        ]);
                    }
                }, options);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(BaseGLSPClientContribution.prototype, "running", {
        get: function () {
            return !this.toDeactivate.disposed && this.state === browser_3.State.Running;
        },
        enumerable: true,
        configurable: true
    });
    BaseGLSPClientContribution.prototype.restart = function () {
        this.deactivate();
        this.activate();
    };
    BaseGLSPClientContribution.prototype.onWillStart = function (languageClient) {
        var _this = this;
        languageClient.onReady().then(function () { return _this.onReady(languageClient); });
    };
    BaseGLSPClientContribution.prototype.onReady = function (languageClient) {
        this._glspClient = languageClient;
        this.resolveReady(this._glspClient);
        this.waitForReady();
    };
    BaseGLSPClientContribution.prototype.waitForReady = function () {
        var _this = this;
        this.ready = new Promise(function (resolve) {
            return _this.resolveReady = resolve;
        });
    };
    BaseGLSPClientContribution.prototype.createLanguageClient = function (connection) {
        var clientOptions = this.createOptions();
        return this.languageClientFactory.get(this, clientOptions, connection);
    };
    BaseGLSPClientContribution.prototype.createOptions = function () {
        var _this = this;
        return {
            initializationFailedHandler: function (err) { return _this.handleInitializationFailed(err); },
        };
    };
    BaseGLSPClientContribution.prototype.handleInitializationFailed = function (err) {
        var _this = this;
        this.deactivate();
        var detail = err instanceof Error ? ": " + err.message : '.';
        this.messageService.error("Failed to start " + this.name + " glsp server" + detail, 'Retry').then(function (result) {
            if (result) {
                _this.activate();
            }
        });
        return false;
    };
    Object.defineProperty(BaseGLSPClientContribution.prototype, "workspaceContains", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    BaseGLSPClientContribution.prototype.waitForOpenDocument = function (fileExtensions) {
        return __awaiter(this, void 0, void 0, function () {
            var currentEditor, uri, fileExtensions_1, fileExtensions_1_1, extension;
            var e_2, _a;
            return __generator(this, function (_b) {
                currentEditor = this.editorManager.currentEditor;
                if (currentEditor) {
                    uri = currentEditor.editor.uri.toString();
                    try {
                        for (fileExtensions_1 = __values(fileExtensions), fileExtensions_1_1 = fileExtensions_1.next(); !fileExtensions_1_1.done; fileExtensions_1_1 = fileExtensions_1.next()) {
                            extension = fileExtensions_1_1.value;
                            if (uri.endsWith(extension)) {
                                return [2 /*return*/, Promise.resolve()];
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (fileExtensions_1_1 && !fileExtensions_1_1.done && (_a = fileExtensions_1.return)) _a.call(fileExtensions_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    BaseGLSPClientContribution.prototype.waitForItemInWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var doesContain;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.containsSome(this.workspaceContains)];
                    case 1:
                        doesContain = _a.sent();
                        if (!doesContain) {
                            return [2 /*return*/, new Promise(function (resolve) { })];
                        }
                        return [2 /*return*/, doesContain];
                }
            });
        });
    };
    BaseGLSPClientContribution.prototype.registerCommand = function (id, callback, thisArg) {
        var execute = callback.bind(thisArg);
        return this.registry.registerCommand({ id: id }, { execute: execute });
    };
    __decorate([
        inversify_1.inject(browser_4.WorkspaceService),
        __metadata("design:type", browser_4.WorkspaceService)
    ], BaseGLSPClientContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], BaseGLSPClientContribution.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WebSocketConnectionProvider),
        __metadata("design:type", browser_1.WebSocketConnectionProvider)
    ], BaseGLSPClientContribution.prototype, "connectionProvider", void 0);
    __decorate([
        inversify_1.inject(glsp_client_1.GLSPClientFactory),
        __metadata("design:type", glsp_client_1.GLSPClientFactory)
    ], BaseGLSPClientContribution.prototype, "languageClientFactory", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], BaseGLSPClientContribution.prototype, "registry", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], BaseGLSPClientContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.multiInject(sprotty_theia_1.DiagramManagerProvider),
        __metadata("design:type", Array)
    ], BaseGLSPClientContribution.prototype, "diagramManagerProviders", void 0);
    BaseGLSPClientContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], BaseGLSPClientContribution);
    return BaseGLSPClientContribution;
}());
exports.BaseGLSPClientContribution = BaseGLSPClientContribution;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-provider.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-provider.js ***!
  \****************************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var glsp_client_contribution_1 = __webpack_require__(/*! ./glsp-client-contribution */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-contribution.js");
exports.GLSPClientProvider = Symbol.for('GLSPClientProvider');
var GLSPClientProviderImpl = /** @class */ (function () {
    function GLSPClientProviderImpl() {
    }
    GLSPClientProviderImpl.prototype.getLanguageClient = function (languageId) {
        return __awaiter(this, void 0, void 0, function () {
            var contribution;
            return __generator(this, function (_a) {
                contribution = this.getLanguageContribution(languageId);
                if (contribution) {
                    return [2 /*return*/, contribution.glspClient];
                }
                return [2 /*return*/, undefined];
            });
        });
    };
    GLSPClientProviderImpl.prototype.getLanguageContribution = function (languageId) {
        var e_1, _a;
        var contributions = this.contributions.getContributions();
        if (contributions) {
            try {
                for (var contributions_1 = __values(contributions), contributions_1_1 = contributions_1.next(); !contributions_1_1.done; contributions_1_1 = contributions_1.next()) {
                    var contribution = contributions_1_1.value;
                    if (contribution.id === languageId) {
                        return contribution;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (contributions_1_1 && !contributions_1_1.done && (_a = contributions_1.return)) _a.call(contributions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(core_1.ContributionProvider), inversify_1.named(glsp_client_contribution_1.GLSPClientContribution),
        __metadata("design:type", Object)
    ], GLSPClientProviderImpl.prototype, "contributions", void 0);
    GLSPClientProviderImpl = __decorate([
        inversify_1.injectable()
    ], GLSPClientProviderImpl);
    return GLSPClientProviderImpl;
}());
exports.GLSPClientProviderImpl = GLSPClientProviderImpl;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-services.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-services.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ../../common */ "../node_modules/@eclipse-glsp/theia-integration/lib/common/index.js");
exports.GLSPClient = Symbol.for('GLSPClient');
exports.Connection = Symbol.for('Connection');
exports.ConnectionProvider = Symbol.for("ConnectionProvider");
function createConnection(connection, errorHandler, closeHandler) {
    connection.onError(function (data) { errorHandler(data[0], data[1], data[2]); });
    connection.onClose(closeHandler);
    connection.onNotification;
    var result = {
        listen: function () { return connection.listen(); },
        sendNotification: function (type, params) { return connection.sendNotification(type, params); },
        onNotification: function (type, handler) { return connection.onNotification(type, handler); },
        initialize: function (params) { return connection.sendRequest(common_1.InitializeRequest.type, params); },
        shutdown: function () { return connection.sendRequest(common_1.ShutdownRequest.type, undefined); },
        exit: function () { return connection.sendNotification(common_1.ExitNotification.type); },
        dispose: function () { return connection.dispose(); }
    };
    return result;
}
exports.createConnection = createConnection;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client.js ***!
  \*******************************************************************************************/
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var glsp_client_services_1 = __webpack_require__(/*! ./glsp-client-services */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-services.js");
var ClientState;
(function (ClientState) {
    ClientState[ClientState["Initial"] = 0] = "Initial";
    ClientState[ClientState["Starting"] = 1] = "Starting";
    ClientState[ClientState["StartFailed"] = 2] = "StartFailed";
    ClientState[ClientState["Running"] = 3] = "Running";
    ClientState[ClientState["Stopping"] = 4] = "Stopping";
    ClientState[ClientState["Stopped"] = 5] = "Stopped";
})(ClientState || (ClientState = {}));
var BaseGLSPClient = /** @class */ (function () {
    function BaseGLSPClient(_a) {
        var id = _a.id, name = _a.name, clientOptions = _a.clientOptions, connectionProvider = _a.connectionProvider;
        this.connectionProvider = connectionProvider;
        this.id = id;
        this.name = name;
        this.clientOptions = clientOptions;
        this.onStop = undefined;
        this._onReady = Promise.resolve();
        this.state = ClientState.Initial;
    }
    BaseGLSPClient.prototype.start = function () {
        var _this = this;
        this.state = ClientState.Starting;
        this.resolveConnection().then(function (connection) {
            connection.listen();
            _this.resolvedConnection = connection;
            _this.state = ClientState.Running;
        }).then(undefined, function (error) {
            _this.state = ClientState.StartFailed;
        });
        return {
            dispose: function () { return _this.stop(); }
        };
    };
    BaseGLSPClient.prototype.initialize = function (params) {
        if (this.connectionPromise && this.resolvedConnection) {
            return this.resolvedConnection.initialize(params);
        }
        return Promise.resolve(false);
    };
    BaseGLSPClient.prototype.stop = function () {
        var _this = this;
        if (!this.connectionPromise) {
            this.state = ClientState.Stopped;
            return Promise.resolve();
        }
        if (this.state === ClientState.Stopping && this.onStop) {
            return this.onStop;
        }
        this.state = ClientState.Stopping;
        return this.onStop = this.resolveConnection().then(function (connection) {
            return connection.shutdown().then(function () {
                connection.exit();
                connection.dispose();
                _this.state = ClientState.Stopped;
                _this.onStop = undefined;
                _this.connectionPromise = undefined;
                _this.resolvedConnection = undefined;
            });
        });
    };
    BaseGLSPClient.prototype.onReady = function () {
        return this._onReady;
    };
    BaseGLSPClient.prototype.resolveConnection = function () {
        if (!this.connectionPromise) {
            this.connectionPromise = this.doCreateConnection();
        }
        return this.connectionPromise;
    };
    BaseGLSPClient.prototype.doCreateConnection = function () {
        var errorHandler = this.handleConnectionError.bind(this);
        var closeHandler = this.handleConnectionClosed.bind(this);
        return this.connectionProvider.get(errorHandler, closeHandler, undefined);
    };
    BaseGLSPClient.prototype.handleConnectionError = function (error, message, count) {
        var action = this.clientOptions.errorHandler.error(error, message, count);
        if (action === browser_2.ErrorAction.Shutdown) {
            console.error('Connection to server is erroring. Shutting down server.');
            this.stop();
        }
    };
    BaseGLSPClient.prototype.handleConnectionClosed = function () {
        if (this.state === ClientState.Stopping || this.state === ClientState.Stopped) {
            return;
        }
    };
    BaseGLSPClient.prototype.onNotification = function (type, handler) {
        if (!this.isConnectionActive()) {
            throw new Error('GLSP client is not ready yet');
        }
        this.resolvedConnection.onNotification(type, handler);
    };
    BaseGLSPClient.prototype.sendNotification = function (type, params) {
        if (!this.isConnectionActive()) {
            throw new Error('GLSP client is not ready yet');
        }
        this.resolvedConnection.sendNotification(type, params);
    };
    BaseGLSPClient.prototype.isConnectionActive = function () {
        return this.state === ClientState.Running && !!this.resolvedConnection;
    };
    return BaseGLSPClient;
}());
exports.BaseGLSPClient = BaseGLSPClient;
var GLSPClientFactory = /** @class */ (function () {
    function GLSPClientFactory(connectionProvider) {
        this.connectionProvider = connectionProvider;
    }
    GLSPClientFactory.prototype.get = function (contribution, clientOptions, connectionProvider) {
        var _this = this;
        if (!clientOptions.errorHandler) {
            clientOptions.errorHandler = {
                error: function () { return browser_2.ErrorAction.Continue; },
                closed: function () { return browser_2.CloseAction.DoNotRestart; }
            };
        }
        return new BaseGLSPClient({
            name: contribution.name,
            id: contribution.id,
            clientOptions: clientOptions,
            connectionProvider: {
                get: function (errorHandler, closeHandler) { return __awaiter(_this, void 0, void 0, function () {
                    var connection, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(typeof connectionProvider === 'function')) return [3 /*break*/, 2];
                                return [4 /*yield*/, connectionProvider()];
                            case 1:
                                _a = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                _a = connectionProvider;
                                _b.label = 3;
                            case 3:
                                connection = _a;
                                return [2 /*return*/, glsp_client_services_1.createConnection(connection, errorHandler, closeHandler)];
                        }
                    });
                }); }
            }
        });
    };
    GLSPClientFactory = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.WebSocketConnectionProvider)),
        __metadata("design:paramtypes", [browser_1.WebSocketConnectionProvider])
    ], GLSPClientFactory);
    return GLSPClientFactory;
}());
exports.GLSPClientFactory = GLSPClientFactory;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-frontend-contribution.js":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-frontend-contribution.js ***!
  \**********************************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var glsp_client_contribution_1 = __webpack_require__(/*! ./glsp-client-contribution */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-contribution.js");
var GLSPFrontendContribution = /** @class */ (function () {
    function GLSPFrontendContribution(contributions) {
        this.contributions = contributions;
    }
    GLSPFrontendContribution.prototype.onStart = function (app) {
        var e_1, _a;
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                contribution.activate(app);
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
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], GLSPFrontendContribution.prototype, "app", void 0);
    GLSPFrontendContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(core_1.ContributionProvider)), __param(0, inversify_1.named(glsp_client_contribution_1.GLSPClientContribution)),
        __metadata("design:paramtypes", [Object])
    ], GLSPFrontendContribution);
    return GLSPFrontendContribution;
}());
exports.GLSPFrontendContribution = GLSPFrontendContribution;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/common/index.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/common/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
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
__export(__webpack_require__(/*! ./protocol */ "../node_modules/@eclipse-glsp/theia-integration/lib/common/protocol.js"));


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/common/protocol.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/common/protocol.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "../node_modules/vscode-jsonrpc/lib/main.js");
var ActionMessageNotification;
(function (ActionMessageNotification) {
    ActionMessageNotification.type = new vscode_jsonrpc_1.NotificationType('process');
})(ActionMessageNotification = exports.ActionMessageNotification || (exports.ActionMessageNotification = {}));
var InitializeRequest;
(function (InitializeRequest) {
    InitializeRequest.type = new vscode_jsonrpc_1.RequestType('initialize');
})(InitializeRequest = exports.InitializeRequest || (exports.InitializeRequest = {}));
var ShutdownRequest;
(function (ShutdownRequest) {
    ShutdownRequest.type = new vscode_jsonrpc_1.RequestType0('shutdown');
})(ShutdownRequest = exports.ShutdownRequest || (exports.ShutdownRequest = {}));
var ExitNotification;
(function (ExitNotification) {
    ExitNotification.type = new vscode_jsonrpc_1.NotificationType0('exit');
})(ExitNotification = exports.ExitNotification || (exports.ExitNotification = {}));


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/client/css/command-palette.css":
/*!***********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@eclipse-glsp/client/css/command-palette.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (c) 2019 EclipseSource and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.command-palette {\n    transition: opacity 0.3s linear;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.command-palette-suggestions {\n    background: white;\n    z-index: 1000;\n    overflow: auto;\n    box-sizing: border-box;\n    border: 1px solid rgba(60, 60, 60, 0.6);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.command-palette-suggestions .icon {\n    padding-right: 0.3em;\n}\n\n.command-palette-suggestions em {\n    font-weight: bold;\n    font-style: normal;\n}\n\n.command-palette-suggestions>div {\n    padding: 0 4px;\n}\n\n.command-palette-suggestions .group {\n    background: #eee;\n}\n\n.command-palette-suggestions>div:hover:not(.group), .command-palette-suggestions>div.selected {\n    cursor: pointer;\n}\n\n.command-palette-suggestions>div:hover:not(.group) {\n    background: #e0e0e0;\n}\n\n.command-palette-suggestions>div.selected {\n    background: #bbdefb;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/client/css/glsp-sprotty.css":
/*!********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@eclipse-glsp/client/css/glsp-sprotty.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (c) 2019 EclipseSource and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.sprotty {\n    padding: 0px;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.sprotty svg text::selection {\n    background: none;\n}\n\n.sprotty-hidden {\n    display: block;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n}\n\n.sprotty-popup {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    position: absolute;\n    background: white;\n    border-radius: 5px;\n    border: 1px solid;\n    max-width: 400px;\n    min-width: 100px;\n}\n\n.sprotty-popup>div {\n    margin: 10px;\n}\n\n.sprotty-popup-closed {\n    display: none;\n}\n\n.sprotty-resize-handle {\n    /* radius does not work in Firefox */\n    r: 7px;\n    fill: #884;\n    stroke: none;\n    z-index: 1000;\n}\n\n.sprotty-resize-handle.selected {\n    fill: #66a;\n}\n\n.sprotty-resize-handle.mouseover {\n    stroke: #112;\n    stroke-width: 1;\n}\n\n.node-creation-mode {\n    cursor: copy;\n}\n\n.overlap-forbidden-mode {\n    cursor: not-allowed;\n}\n\n.default-mode {\n    cursor: default;\n}\n\n.edge-modification-not-allowed-mode {\n    cursor: no-drop;\n}\n\n.edge-creation-select-source-mode {\n    cursor: pointer;\n}\n\n.edge-creation-select-target-mode, .edge-reconnect-select-target-mode {\n    cursor: crosshair;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/client/css/tool-palette.css":
/*!********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@eclipse-glsp/client/css/tool-palette.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.6.3/css/all.css);", ""]);

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (c) 2019 EclipseSource and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n/* Css for main container */\n\n.tool-palette {\n    position: absolute;\n    right: 25px;\n    top: 25px;\n    text-align: center;\n    width: 150px;\n    display: block;\n    z-index: 1000;\n    border-style: solid;\n    border-width: 0px;\n    border-color: #bbb;\n    border-radius: 5px;\n    color: black;\n}\n\n/* Css for header compartment */\n\n.palette-header {\n    padding: 0.4em;\n    text-align: left;\n    font-size: 1.15em;\n    font-weight: bold;\n    background: #CCCCCC;\n    border: 1px solid rgba(60, 60, 60, 0.6);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.header-icon i {\n    margin-right: 0.2em\n}\n\n.header-tools i {\n    border: 1px solid #CCCCCC;\n    padding: 0.2em;\n    margin-right: 0.2em;\n}\n\n.header-tools i:hover {\n    background: #DFDFDF;\n}\n\n.header-tools .clicked {\n    background: #BDDAEF;\n    border: 1px solid rgba(60, 60, 60, 0.6);\n}\n\n/*Css for palette body compartment */\n\n.palette-body {\n    background: rgba(100, 100, 100, 0.2);\n    border: 1px solid rgba(60, 60, 60, 0.6);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.tool-group {\n    text-align: left;\n    background: #EDEDEE;\n}\n\n.group-header {\n    font-weight: bold;\n    background: #CCCCCC;\n}\n\n.group-header:hover {\n    background: #AAAAAA;\n}\n\n.group-header i {\n    padding: 0.4em;\n}\n\n.tool-button {\n    background: #EDEDEE;\n    padding: 0.4em;\n}\n\n.tool-button:hover {\n    background: #DFDFDF;\n}\n\n.tool-button.clicked {\n    background: #BDDAEF;\n}\n\n.tool-button.collapsed {\n    display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/theia-integration/css/diagram.css":
/*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@eclipse-glsp/theia-integration/css/diagram.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (c) 2020 EclipseSource and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.sprotty-graph {\n    background: var(--theia-editor-background);\n}\n\n.sprotty-node {\n    stroke: var(--theia-editor-foreground);\n    fill: var(--theia-editor-foreground);\n}\n\n.sprotty-edge {\n    fill: none;\n    stroke: var(--theia-editor-foreground);\n}\n\n.sprotty-edge.arrow {\n    fill: var(--theia-editor-foreground);\n}\n\n.sprotty-node.selected {\n    stroke: var(--theia-menu-selectionBackground);\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@eclipse-glsp/theia-integration/css/tool-palette.css":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@eclipse-glsp/theia-integration/css/tool-palette.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (c) 2020 EclipseSource and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.tool-palette {\n    box-shadow: 0px 1px 6px var(--theia-widget-shadow);\n}\n\n.tool-palette .palette-header {\n    background: var(--theia-titleBar-activeBackground);\n    color: var(--theia-titleBar-activeForeground);\n    border: 0;\n    font-weight: normal;\n    overflow: hidden;\n    padding: 0.2em;\n    line-height: 1.5em;\n    box-shadow: none;\n    border-top: 2px solid var(--theia-focusBorder);\n}\n\n.tool-palette .palette-header .header-icon {\n    font-size: var(--theia-ui-font-size1);\n    float: left;\n    padding: 0.2em;\n}\n\n.tool-palette .palette-header .header-tools {\n    font-size: var(--theia-ui-font-size3);\n    float: right;\n}\n\n.tool-palette .palette-header .header-tools i {\n    border: none;\n    width: 1em;\n    text-align: center;\n}\n\n.tool-palette .palette-header .header-tools i:hover:not(.clicked) {\n    background: var(--theia-menubar-selectionBackground);\n}\n\n.tool-palette .palette-header .header-tools .clicked {\n    background: var(--theia-inputOption-activeBackground);\n}\n\n.tool-palette .palette-body {\n    border: 0;\n    box-shadow: none;\n}\n\n.tool-palette .palette-body .group-header {\n    font-size: var(--theia-ui-font-size1);\n    font-weight: normal;\n    background: var(--theia-activityBar-background);\n    color: var(--theia-titleBar-activeForeground);\n    border: 0;\n}\n\n.tool-palette .palette-body .tool-button {\n    background: var(--theia-menu-background);\n    color: var(--theia-titleBar-activeForeground);\n}\n\n.tool-palette .palette-body .tool-button:hover:not(.clicked) {\n    background: var(--theia-list-hoverBackground);\n}\n\n.tool-palette .tool-button.clicked {\n    background: var(--theia-menu-selectionBackground);\n    color: var(--theia-menu-selectionForeground);\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/index.js":
/*!**************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2017-2018 TypeFox and others.
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
__export(__webpack_require__(/*! ./sprotty/theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/theia-diagram-server.js"));
__export(__webpack_require__(/*! ./sprotty/theia-file-saver */ "../node_modules/sprotty-theia/lib/sprotty/theia-file-saver.js"));
__export(__webpack_require__(/*! ./sprotty/theia-key-tool */ "../node_modules/sprotty-theia/lib/sprotty/theia-key-tool.js"));
__export(__webpack_require__(/*! ./sprotty/theia-sprotty-selection-forwarder */ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-selection-forwarder.js"));
__export(__webpack_require__(/*! ./sprotty/theia-sprotty-context-menu-service */ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service.js"));
__export(__webpack_require__(/*! ./sprotty/languageserver/index */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/index.js"));
__export(__webpack_require__(/*! ./theia/diagram-commands */ "../node_modules/sprotty-theia/lib/theia/diagram-commands.js"));
__export(__webpack_require__(/*! ./theia/diagram-configuration */ "../node_modules/sprotty-theia/lib/theia/diagram-configuration.js"));
__export(__webpack_require__(/*! ./theia/diagram-keybinding */ "../node_modules/sprotty-theia/lib/theia/diagram-keybinding.js"));
__export(__webpack_require__(/*! ./theia/diagram-manager */ "../node_modules/sprotty-theia/lib/theia/diagram-manager.js"));
__export(__webpack_require__(/*! ./theia/diagram-module */ "../node_modules/sprotty-theia/lib/theia/diagram-module.js"));
__export(__webpack_require__(/*! ./theia/diagram-widget */ "../node_modules/sprotty-theia/lib/theia/diagram-widget.js"));
__export(__webpack_require__(/*! ./theia/languageserver/index */ "../node_modules/sprotty-theia/lib/theia/languageserver/index.js"));


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/code-action-palette.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/code-action-palette.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var ls_theia_diagram_server_1 = __webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js");
var traceable_1 = __webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js");
var workspace_edit_command_1 = __webpack_require__(/*! ./workspace-edit-command */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js");
var edit_diagram_locker_1 = __webpack_require__(/*! ./edit-diagram-locker */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js");
var CodeActionProvider = /** @class */ (function () {
    function CodeActionProvider() {
    }
    CodeActionProvider.prototype.getCodeActions = function (range, codeActionKind) {
        return __awaiter(this, void 0, void 0, function () {
            var diagramServer, connector, languageClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagramServerProvider()];
                    case 1:
                        diagramServer = _a.sent();
                        connector = diagramServer.connector;
                        return [4 /*yield*/, connector.getLanguageClient()];
                    case 2:
                        languageClient = _a.sent();
                        return [2 /*return*/, languageClient.sendRequest(browser_1.CodeActionRequest.type, {
                                textDocument: {
                                    uri: diagramServer.sourceUri
                                },
                                range: range,
                                context: {
                                    diagnostics: [],
                                    only: [codeActionKind]
                                }
                            })];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServerProvider),
        __metadata("design:type", Function)
    ], CodeActionProvider.prototype, "diagramServerProvider", void 0);
    CodeActionProvider = __decorate([
        inversify_1.injectable()
    ], CodeActionProvider);
    return CodeActionProvider;
}());
exports.CodeActionProvider = CodeActionProvider;
/**
 * A popup-palette based on code actions.
 */
var CodeActionPalettePopupProvider = /** @class */ (function () {
    function CodeActionPalettePopupProvider() {
    }
    CodeActionPalettePopupProvider.prototype.getPopupModel = function (action, rootElement) {
        return __awaiter(this, void 0, void 0, function () {
            var range, codeActions, buttons_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        range = traceable_1.getRange(rootElement);
                        if (!(this.editDiagramLocker.allowEdit && range !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.codeActionProvider.getCodeActions(range, 'sprotty.create')];
                    case 1:
                        codeActions = _a.sent();
                        if (codeActions) {
                            buttons_1 = [];
                            codeActions.forEach(function (codeAction) {
                                if (browser_1.CodeAction.is(codeAction)) {
                                    buttons_1.push({
                                        id: codeAction.title,
                                        type: 'button:create',
                                        codeActionKind: codeAction.kind,
                                        range: range
                                    });
                                }
                            });
                            return [2 /*return*/, {
                                    id: "palette",
                                    type: "palette",
                                    classes: ['sprotty-palette'],
                                    children: buttons_1,
                                    canvasBounds: action.bounds
                                }];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, undefined];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(CodeActionProvider),
        __metadata("design:type", CodeActionProvider)
    ], CodeActionPalettePopupProvider.prototype, "codeActionProvider", void 0);
    __decorate([
        inversify_1.inject(edit_diagram_locker_1.EditDiagramLocker),
        __metadata("design:type", edit_diagram_locker_1.EditDiagramLocker)
    ], CodeActionPalettePopupProvider.prototype, "editDiagramLocker", void 0);
    CodeActionPalettePopupProvider = __decorate([
        inversify_1.injectable()
    ], CodeActionPalettePopupProvider);
    return CodeActionPalettePopupProvider;
}());
exports.CodeActionPalettePopupProvider = CodeActionPalettePopupProvider;
var PaletteButton = /** @class */ (function (_super) {
    __extends(PaletteButton, _super);
    function PaletteButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PaletteButton;
}(sprotty_1.SButton));
exports.PaletteButton = PaletteButton;
var PaletteMouseListener = /** @class */ (function (_super) {
    __extends(PaletteMouseListener, _super);
    function PaletteMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaletteMouseListener.prototype.mouseDown = function (target, event) {
        if (target instanceof PaletteButton) {
            return [this.getWorkspaceEditAction(target)];
        }
        return [];
    };
    PaletteMouseListener.prototype.getWorkspaceEditAction = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var diagramServer, workspace, codeActions, _i, codeActions_1, codeAction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagramServerProvider()];
                    case 1:
                        diagramServer = _a.sent();
                        workspace = diagramServer.connector.workspace;
                        if (!workspace) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.codeActionProvider.getCodeActions(target.range, target.codeActionKind)];
                    case 2:
                        codeActions = _a.sent();
                        if (codeActions) {
                            for (_i = 0, codeActions_1 = codeActions; _i < codeActions_1.length; _i++) {
                                codeAction = codeActions_1[_i];
                                if (browser_1.CodeAction.is(codeAction) && codeAction.edit)
                                    return [2 /*return*/, new workspace_edit_command_1.WorkspaceEditAction(codeAction.edit)];
                            }
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, new sprotty_1.SetPopupModelAction(sprotty_1.EMPTY_ROOT)];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(CodeActionProvider),
        __metadata("design:type", CodeActionProvider)
    ], PaletteMouseListener.prototype, "codeActionProvider", void 0);
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServerProvider),
        __metadata("design:type", Function)
    ], PaletteMouseListener.prototype, "diagramServerProvider", void 0);
    PaletteMouseListener = __decorate([
        inversify_1.injectable()
    ], PaletteMouseListener);
    return PaletteMouseListener;
}(sprotty_1.PopupHoverMouseListener));
exports.PaletteMouseListener = PaletteMouseListener;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/completion-label-edit.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/completion-label-edit.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ls_theia_diagram_server_1 = __webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var traceable_1 = __webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js");
var CompletionLabelEditor = /** @class */ (function () {
    function CompletionLabelEditor() {
    }
    CompletionLabelEditor.prototype.edit = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var range, diagramServer, connector, languageClient, uri, completions, completionItems, quickPickItems, pick, changes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        range = traceable_1.getRange(element);
                        return [4 /*yield*/, this.diagramServerProvider()];
                    case 1:
                        diagramServer = _a.sent();
                        connector = diagramServer.connector;
                        if (!(connector.quickPickService && connector.workspace)) return [3 /*break*/, 6];
                        return [4 /*yield*/, connector.getLanguageClient()];
                    case 2:
                        languageClient = _a.sent();
                        uri = diagramServer.sourceUri;
                        return [4 /*yield*/, languageClient.sendRequest(browser_1.CompletionRequest.type, {
                                textDocument: { uri: uri },
                                position: range.start
                            })];
                    case 3:
                        completions = _a.sent();
                        if (!completions) return [3 /*break*/, 6];
                        completionItems = (completions["items"])
                            ? completions.items
                            : completions;
                        quickPickItems = this.filterCompletionItems(completionItems)
                            .map(function (i) {
                            return {
                                label: i.textEdit.newText,
                                value: i
                            };
                        });
                        return [4 /*yield*/, connector.quickPickService.show(quickPickItems)];
                    case 4:
                        pick = _a.sent();
                        if (!(pick && pick.textEdit)) return [3 /*break*/, 6];
                        changes = {};
                        changes[uri] = [__assign(__assign({}, pick.textEdit), { range: range })];
                        return [4 /*yield*/, connector.workspace.applyEdit({
                                changes: changes
                            })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CompletionLabelEditor.prototype.filterCompletionItems = function (items) {
        return items.filter(function (item) { return item.kind === browser_1.CompletionItemKind.Reference; });
    };
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServerProvider),
        __metadata("design:type", Function)
    ], CompletionLabelEditor.prototype, "diagramServerProvider", void 0);
    CompletionLabelEditor = __decorate([
        inversify_1.injectable()
    ], CompletionLabelEditor);
    return CompletionLabelEditor;
}());
exports.CompletionLabelEditor = CompletionLabelEditor;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/delete.js":
/*!**************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/delete.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var workspace_edit_command_1 = __webpack_require__(/*! ./workspace-edit-command */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js");
var traceable_1 = __webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var DeleteWithWorkspaceEditAction = /** @class */ (function () {
    // TODO: consider URIs from individual element traces
    function DeleteWithWorkspaceEditAction(workspace, sourceUri) {
        this.workspace = workspace;
        this.sourceUri = sourceUri;
        this.kind = DeleteWithWorkspaceEditAction.KIND;
    }
    DeleteWithWorkspaceEditAction.KIND = 'deleteWithWorkspaceEdit';
    return DeleteWithWorkspaceEditAction;
}());
exports.DeleteWithWorkspaceEditAction = DeleteWithWorkspaceEditAction;
var DeleteWithWorkspaceEditCommand = /** @class */ (function (_super) {
    __extends(DeleteWithWorkspaceEditCommand, _super);
    function DeleteWithWorkspaceEditCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    DeleteWithWorkspaceEditCommand.prototype.createWorkspaceEdit = function (context) {
        var _this = this;
        var elements = new Set();
        var index = context.root.index;
        index.all().forEach(function (e) {
            if (e && _this.shouldDelete(e))
                elements.add(e);
            else if (e instanceof sprotty_1.SEdge && traceable_1.isTraceable(e)) {
                var source = index.getById(e.sourceId);
                var target = index.getById(e.targetId);
                if (_this.shouldDeleteParent(source)
                    || _this.shouldDeleteParent(target))
                    elements.add(e);
            }
        });
        var uri2ranges = new Map();
        elements.forEach(function (element) {
            var uri = traceable_1.getURI(element).withoutFragment().toString(true);
            var range = traceable_1.getRange(element);
            var ranges = uri2ranges.get(uri);
            if (!ranges) {
                ranges = [];
                uri2ranges.set(uri, ranges);
            }
            var mustAdd = true;
            for (var i = 0; i < ranges.length; ++i) {
                var r = ranges[i];
                if (_this.containsRange(r, range)) {
                    mustAdd = false;
                    break;
                }
                else if (_this.containsRange(range, r)) {
                    mustAdd = false;
                    ranges[i] = range;
                    break;
                }
            }
            if (mustAdd)
                ranges.push(range);
        });
        var changes = {};
        uri2ranges.forEach(function (ranges, uri) {
            changes[uri] = ranges.map(function (range) {
                return {
                    range: range,
                    newText: ''
                };
            });
        });
        var workspaceEdit = {
            changes: changes
        };
        return workspaceEdit;
    };
    DeleteWithWorkspaceEditCommand.prototype.containsRange = function (range, otherRange) {
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
    };
    DeleteWithWorkspaceEditCommand.prototype.shouldDelete = function (e) {
        return sprotty_1.isSelectable(e) && e.selected && traceable_1.isTraceable(e);
    };
    DeleteWithWorkspaceEditCommand.prototype.shouldDeleteParent = function (source) {
        while (source) {
            if (this.shouldDelete(source)) {
                return true;
            }
            source = (source instanceof sprotty_1.SChildElement) ? source.parent : undefined;
        }
        return false;
    };
    DeleteWithWorkspaceEditCommand.KIND = DeleteWithWorkspaceEditAction.KIND;
    DeleteWithWorkspaceEditCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [DeleteWithWorkspaceEditAction])
    ], DeleteWithWorkspaceEditCommand);
    return DeleteWithWorkspaceEditCommand;
}(workspace_edit_command_1.AbstractWorkspaceEditCommand));
exports.DeleteWithWorkspaceEditCommand = DeleteWithWorkspaceEditCommand;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2019 TypeFox and others.
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
/**
 * An `IDiagramLocker` for language-server based editable diagrams.
 *
 * Prevents displatching of edit actions when editing is disallowed, e.g.
 * because the LS's status is fatal.
 */
var EditDiagramLocker = /** @class */ (function () {
    function EditDiagramLocker() {
        this.nonEditActions = [
            sprotty_1.SetModelAction.KIND, sprotty_1.UpdateModelAction.KIND,
            sprotty_1.CenterAction.KIND, sprotty_1.FitToScreenAction.KIND, sprotty_1.SetViewportAction.KIND,
            sprotty_1.SelectAction.KIND, sprotty_1.SelectAllAction.KIND,
            sprotty_1.HoverFeedbackAction.KIND, sprotty_1.RequestPopupModelAction.KIND, sprotty_1.SetPopupModelAction.KIND,
            sprotty_1.ServerStatusAction.KIND
        ];
        this.allowEdit = true;
    }
    EditDiagramLocker.prototype.isAllowed = function (action) {
        return this.allowEdit || this.nonEditActions.indexOf(action.kind) >= 0;
    };
    EditDiagramLocker = __decorate([
        inversify_1.injectable()
    ], EditDiagramLocker);
    return EditDiagramLocker;
}());
exports.EditDiagramLocker = EditDiagramLocker;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/index.js":
/*!*************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
__export(__webpack_require__(/*! ./code-action-palette */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/code-action-palette.js"));
__export(__webpack_require__(/*! ./completion-label-edit */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/completion-label-edit.js"));
__export(__webpack_require__(/*! ./delete */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/delete.js"));
__export(__webpack_require__(/*! ./edit-diagram-locker */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js"));
__export(__webpack_require__(/*! ./ls-theia-sprotty-connector */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-sprotty-connector.js"));
__export(__webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js"));
__export(__webpack_require__(/*! ./rename-label-edit */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/rename-label-edit.js"));
__export(__webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js"));
__export(__webpack_require__(/*! ./workspace-edit-command */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js"));


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2019 TypeFox and others.
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
var theia_diagram_server_1 = __webpack_require__(/*! ../theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/theia-diagram-server.js");
var edit_diagram_locker_1 = __webpack_require__(/*! ./edit-diagram-locker */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/edit-diagram-locker.js");
exports.LSTheiaDiagramServerProvider = Symbol('LSTheiaDiagramServerProvider');
var LSTheiaDiagramServer = /** @class */ (function (_super) {
    __extends(LSTheiaDiagramServer, _super);
    function LSTheiaDiagramServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LSTheiaDiagramServer.prototype.connect = function (connector) {
        _super.prototype.connect.call(this, connector);
    };
    Object.defineProperty(LSTheiaDiagramServer.prototype, "workspace", {
        get: function () {
            if (this.connector)
                return this.connector.workspace;
            else
                return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LSTheiaDiagramServer.prototype, "connector", {
        get: function () {
            return this._connector;
        },
        enumerable: true,
        configurable: true
    });
    LSTheiaDiagramServer.prototype.handleServerStateAction = function (action) {
        this.diagramLocker.allowEdit = action.severity !== 'FATAL';
        return _super.prototype.handleServerStateAction.call(this, action);
    };
    __decorate([
        inversify_1.inject(edit_diagram_locker_1.EditDiagramLocker),
        __metadata("design:type", edit_diagram_locker_1.EditDiagramLocker)
    ], LSTheiaDiagramServer.prototype, "diagramLocker", void 0);
    LSTheiaDiagramServer = __decorate([
        inversify_1.injectable()
    ], LSTheiaDiagramServer);
    return LSTheiaDiagramServer;
}(theia_diagram_server_1.TheiaDiagramServer));
exports.LSTheiaDiagramServer = LSTheiaDiagramServer;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-sprotty-connector.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-sprotty-connector.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2019 TypeFox and others.
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
var diagram_widget_1 = __webpack_require__(/*! ../../theia/diagram-widget */ "../node_modules/sprotty-theia/lib/theia/diagram-widget.js");
/**
 * Connects sprotty DiagramServers to a Theia LanguageClientContribution.
 *
 * Used to tunnel sprotty actions to and from the sprotty server through
 * the LSP.
 *
 * Instances bridge the gap between the sprotty DI containers (one per
 * diagram) and a specific language client from the Theia DI container
 * (one per application).
 */
var LSTheiaSprottyConnector = /** @class */ (function () {
    function LSTheiaSprottyConnector(services) {
        this.servers = [];
        Object.assign(this, services);
        this.diagramLanguageClient.connect(this);
    }
    LSTheiaSprottyConnector.prototype.connect = function (diagramServer) {
        this.servers.push(diagramServer);
        diagramServer.connect(this);
    };
    LSTheiaSprottyConnector.prototype.disconnect = function (diagramServer) {
        var index = this.servers.indexOf(diagramServer);
        if (index >= 0)
            this.servers.splice(index, 1);
        diagramServer.disconnect();
        this.diagramLanguageClient.didClose(diagramServer.clientId);
    };
    LSTheiaSprottyConnector.prototype.save = function (uri, action) {
        this.fileSaver.save(uri, action);
    };
    LSTheiaSprottyConnector.prototype.showStatus = function (clientId, status) {
        var widget = this.widgetManager
            .getWidgets(this.diagramManager.id)
            .find(function (w) { return w instanceof diagram_widget_1.DiagramWidget && w.clientId === clientId; });
        if (widget instanceof diagram_widget_1.DiagramWidget)
            widget.setStatus(status);
    };
    LSTheiaSprottyConnector.prototype.sendMessage = function (message) {
        this.diagramLanguageClient.sendThroughLsp(message);
    };
    LSTheiaSprottyConnector.prototype.getLanguageClient = function () {
        return this.diagramLanguageClient.languageClient;
    };
    LSTheiaSprottyConnector.prototype.onMessageReceived = function (message) {
        this.servers.forEach(function (element) {
            element.messageReceived(message);
        });
    };
    return LSTheiaSprottyConnector;
}());
exports.LSTheiaSprottyConnector = LSTheiaSprottyConnector;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/rename-label-edit.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/rename-label-edit.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ls_theia_diagram_server_1 = __webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js");
var traceable_1 = __webpack_require__(/*! ./traceable */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js");
var RenameLabelEditor = /** @class */ (function () {
    function RenameLabelEditor() {
    }
    RenameLabelEditor.prototype.edit = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var range, diagramServer, connector, initialValue_1, dialog, newName, languageClient, workspaceEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        range = traceable_1.getRange(element);
                        return [4 /*yield*/, this.diagramServerProvider()];
                    case 1:
                        diagramServer = _a.sent();
                        connector = diagramServer.connector;
                        if (!connector.workspace) return [3 /*break*/, 6];
                        initialValue_1 = element.text;
                        dialog = new browser_2.SingleTextInputDialog({
                            title: 'Rename Element',
                            initialValue: initialValue_1,
                            initialSelectionRange: {
                                start: 0,
                                end: element.text.length
                            },
                            validate: function (name, mode) {
                                if (initialValue_1 === name && mode === 'preview') {
                                    return false;
                                }
                                return true;
                            }
                        });
                        return [4 /*yield*/, dialog.open()];
                    case 2:
                        newName = _a.sent();
                        if (!newName) return [3 /*break*/, 6];
                        return [4 /*yield*/, connector.getLanguageClient()];
                    case 3:
                        languageClient = _a.sent();
                        return [4 /*yield*/, languageClient.sendRequest(browser_1.RenameRequest.type, {
                                textDocument: { uri: diagramServer.sourceUri },
                                position: range.start,
                                newName: newName
                            })];
                    case 4:
                        workspaceEdit = _a.sent();
                        if (!workspaceEdit) return [3 /*break*/, 6];
                        return [4 /*yield*/, connector.workspace.applyEdit(workspaceEdit)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServerProvider),
        __metadata("design:type", Function)
    ], RenameLabelEditor.prototype, "diagramServerProvider", void 0);
    RenameLabelEditor = __decorate([
        inversify_1.injectable()
    ], RenameLabelEditor);
    return RenameLabelEditor;
}());
exports.RenameLabelEditor = RenameLabelEditor;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/traceable.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
function isTraceable(element) {
    return !!element.trace && !!getRange(element.trace);
}
exports.isTraceable = isTraceable;
function getRange(thing) {
    var trace = typeof thing === 'string'
        ? thing
        : thing.trace;
    if (!trace)
        return undefined;
    var query = new uri_1.default(trace).query;
    var numbers = query.split(/[:-]/).map(function (s) { return parseInt(s, 10); });
    if (numbers.length !== 4 || numbers.find(isNaN) !== undefined)
        return undefined;
    return {
        start: {
            line: numbers[0],
            character: numbers[1]
        },
        end: {
            line: numbers[2],
            character: numbers[3]
        }
    };
}
exports.getRange = getRange;
function getURI(traceable) {
    return new uri_1.default(traceable.trace).withoutQuery();
}
exports.getURI = getURI;
var TraceableMouseListener = /** @class */ (function (_super) {
    __extends(TraceableMouseListener, _super);
    function TraceableMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TraceableMouseListener.prototype.doubleClick = function (target, event) {
        var traceable = sprotty_1.findParent(target, function (element) { return isTraceable(element); });
        if (traceable)
            return [new sprotty_1.OpenAction(traceable.id)];
        else
            return [];
    };
    return TraceableMouseListener;
}(sprotty_1.MouseListener));
exports.TraceableMouseListener = TraceableMouseListener;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/languageserver/workspace-edit-command.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var ls_theia_diagram_server_1 = __webpack_require__(/*! ./ls-theia-diagram-server */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-diagram-server.js");
var AbstractWorkspaceEditCommand = /** @class */ (function (_super) {
    __extends(AbstractWorkspaceEditCommand, _super);
    function AbstractWorkspaceEditCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AbstractWorkspaceEditCommand.prototype, "workspace", {
        get: function () {
            return this.diagramServer.connector.workspace;
        },
        enumerable: true,
        configurable: true
    });
    AbstractWorkspaceEditCommand.prototype.execute = function (context) {
        this.workspaceEdit = this.createWorkspaceEdit(context);
        this.workspace.applyEdit(this.workspaceEdit, { mode: 'open' });
        return context.root;
    };
    AbstractWorkspaceEditCommand.prototype.undo = function (context) {
        // TODO implement revert workspace edit
        return context.root;
    };
    AbstractWorkspaceEditCommand.prototype.redo = function (context) {
        // TODO implement revert workspace edit
        return context.root;
    };
    __decorate([
        inversify_1.inject(ls_theia_diagram_server_1.LSTheiaDiagramServer),
        __metadata("design:type", ls_theia_diagram_server_1.LSTheiaDiagramServer)
    ], AbstractWorkspaceEditCommand.prototype, "diagramServer", void 0);
    AbstractWorkspaceEditCommand = __decorate([
        inversify_1.injectable()
    ], AbstractWorkspaceEditCommand);
    return AbstractWorkspaceEditCommand;
}(sprotty_1.Command));
exports.AbstractWorkspaceEditCommand = AbstractWorkspaceEditCommand;
/**
 * This is a client only action, so it does not have to be serializable
 */
var WorkspaceEditAction = /** @class */ (function () {
    function WorkspaceEditAction(workspaceEdit) {
        this.workspaceEdit = workspaceEdit;
        this.kind = WorkspaceEditAction.KIND;
    }
    WorkspaceEditAction.KIND = 'workspaceEdit';
    return WorkspaceEditAction;
}());
exports.WorkspaceEditAction = WorkspaceEditAction;
var WorkspaceEditCommand = /** @class */ (function (_super) {
    __extends(WorkspaceEditCommand, _super);
    function WorkspaceEditCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    WorkspaceEditCommand.prototype.createWorkspaceEdit = function (context) {
        return this.action.workspaceEdit;
    };
    WorkspaceEditCommand.KIND = WorkspaceEditAction.KIND;
    WorkspaceEditCommand = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_1.TYPES.Action)),
        __metadata("design:paramtypes", [WorkspaceEditAction])
    ], WorkspaceEditCommand);
    return WorkspaceEditCommand;
}(AbstractWorkspaceEditCommand));
exports.WorkspaceEditCommand = WorkspaceEditCommand;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/theia-key-tool.js":
/*!*******************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/theia-key-tool.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2017-2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var TheiaKeyTool = /** @class */ (function (_super) {
    __extends(TheiaKeyTool, _super);
    function TheiaKeyTool(keyListeners) {
        if (keyListeners === void 0) { keyListeners = []; }
        var _this = _super.call(this, []) || this;
        _this.keyListeners = keyListeners;
        return _this;
    }
    TheiaKeyTool.prototype.decorate = function (vnode, element) {
        return vnode;
    };
    TheiaKeyTool = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.multiInject(sprotty_1.TYPES.KeyListener)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [Array])
    ], TheiaKeyTool);
    return TheiaKeyTool;
}(sprotty_1.KeyTool));
exports.TheiaKeyTool = TheiaKeyTool;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service.js ***!
  \***************************************************************************************/
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var TheiaSprottyContextMenu;
(function (TheiaSprottyContextMenu) {
    TheiaSprottyContextMenu.CONTEXT_MENU = ['theia-sprotty-context-menu'];
})(TheiaSprottyContextMenu = exports.TheiaSprottyContextMenu || (exports.TheiaSprottyContextMenu = {}));
var TheiaContextMenuService = /** @class */ (function () {
    function TheiaContextMenuService() {
    }
    TheiaContextMenuService.prototype.connect = function (actionDispatcher) {
        this.actionDispatcher = actionDispatcher;
    };
    TheiaContextMenuService.prototype.show = function (items, anchor, onHide) {
        var _this = this;
        this.cleanUpNow();
        this.disposables = this.register(TheiaSprottyContextMenu.CONTEXT_MENU, items);
        var renderOptions = {
            menuPath: TheiaSprottyContextMenu.CONTEXT_MENU, anchor: anchor,
            onHide: function () { if (onHide)
                onHide(); _this.scheduleCleanup(); }
        };
        this.contextMenuRenderer.render(renderOptions);
    };
    TheiaContextMenuService.prototype.register = function (menuPath, items) {
        var disposables = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.children && item.children.length > 0) {
                var menuPathOfItem = item.group ? __spreadArrays(menuPath, [item.group]) : menuPath;
                disposables.push(this.registerSubmenu(menuPathOfItem, item));
                disposables.push.apply(disposables, this.register(__spreadArrays(menuPathOfItem, [item.id]), item.children));
            }
            else {
                disposables.push(this.registerCommand(menuPath, item));
                disposables.push(this.registerMenuAction(menuPath, item));
            }
        }
        return disposables;
    };
    TheiaContextMenuService.prototype.registerSubmenu = function (menuPath, item) {
        return this.menuProvider.registerSubmenu(__spreadArrays(menuPath, [item.id]), item.label);
    };
    TheiaContextMenuService.prototype.registerCommand = function (menuPath, item) {
        var command = { id: commandId(menuPath, item), label: item.label, iconClass: item.icon };
        var disposable = this.commandRegistry.registerCommand(command, new SprottyCommandHandler(item, this.actionDispatcher));
        return new DisposableCommand(command, disposable);
    };
    TheiaContextMenuService.prototype.registerMenuAction = function (menuPath, item) {
        var menuAction = { label: item.label, order: item.sortString, commandId: commandId(menuPath, item) };
        var menuPathOfItem = item.group ? __spreadArrays(menuPath, [item.group]) : menuPath;
        var disposable = this.menuProvider.registerMenuAction(menuPathOfItem, menuAction);
        return new DisposableMenuAction(menuAction, disposable);
    };
    TheiaContextMenuService.prototype.cleanUpNow = function () {
        window.clearTimeout(this.timeout);
        this.cleanUp();
    };
    TheiaContextMenuService.prototype.scheduleCleanup = function () {
        var _this = this;
        this.timeout = window.setTimeout(function () {
            _this.cleanUp();
        }, 200);
    };
    TheiaContextMenuService.prototype.cleanUp = function () {
        var _this = this;
        if (this.disposables) {
            this.disposables.forEach(function (disposable) { return disposable.dispose(_this.menuProvider, _this.commandRegistry); });
            this.disposables = undefined;
        }
    };
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", Object)
    ], TheiaContextMenuService.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.inject(core_1.MenuModelRegistry),
        __metadata("design:type", core_1.MenuModelRegistry)
    ], TheiaContextMenuService.prototype, "menuProvider", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], TheiaContextMenuService.prototype, "commandRegistry", void 0);
    TheiaContextMenuService = __decorate([
        inversify_1.injectable()
    ], TheiaContextMenuService);
    return TheiaContextMenuService;
}());
exports.TheiaContextMenuService = TheiaContextMenuService;
var SprottyCommandHandler = /** @class */ (function () {
    function SprottyCommandHandler(menuItem, actionDispatcher) {
        this.menuItem = menuItem;
        this.actionDispatcher = actionDispatcher;
    }
    SprottyCommandHandler.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.actionDispatcher && this.menuItem.actions) {
            this.actionDispatcher.dispatchAll(this.menuItem.actions);
        }
    };
    SprottyCommandHandler.prototype.isEnabled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return getBooleanValue(this.menuItem.isEnabled, true);
    };
    SprottyCommandHandler.prototype.isVisible = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return getBooleanValue(this.menuItem.isVisible, true);
    };
    SprottyCommandHandler.prototype.isToggled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return getBooleanValue(this.menuItem.isToggled, false);
    };
    return SprottyCommandHandler;
}());
var DisposableMenuAction = /** @class */ (function () {
    function DisposableMenuAction(menuAction, disposable) {
        this.menuAction = menuAction;
        this.disposable = disposable;
    }
    DisposableMenuAction.prototype.dispose = function (menuProvider, commandRegistry) {
        menuProvider.unregisterMenuAction(this.menuAction);
        this.disposable.dispose();
    };
    return DisposableMenuAction;
}());
var DisposableCommand = /** @class */ (function () {
    function DisposableCommand(command, disposable) {
        this.command = command;
        this.disposable = disposable;
    }
    DisposableCommand.prototype.dispose = function (menuProvider, commandRegistry) {
        commandRegistry.unregisterCommand(this.command);
        this.disposable.dispose();
    };
    return DisposableCommand;
}());
function commandId(menuPath, item) {
    return menuPath.join(".") + "." + item.id;
}
function getBooleanValue(value, defaultValue) {
    var returnVal = defaultValue;
    if (isFunction(value)) {
        returnVal = value();
    }
    else if (isBoolean(value)) {
        returnVal = value;
    }
    return returnVal;
}
function isFunction(value) {
    return !!(value && value.constructor && value.call && value.apply);
}
function isBoolean(value) {
    return typeof value === "boolean";
}


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-selection-forwarder.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-selection-forwarder.js ***!
  \**************************************************************************************/
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
 * Copyright (c) 2018 EclipseSource and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
function isSprottySelection(object) {
    return object !== undefined && object.selectedElementsIDs !== undefined
        && object.widgetId !== undefined;
}
exports.isSprottySelection = isSprottySelection;
var TheiaSprottySelectionForwarder = /** @class */ (function () {
    function TheiaSprottySelectionForwarder() {
    }
    TheiaSprottySelectionForwarder.prototype.initialize = function (registry) {
        registry.register(sprotty_1.RequestModelAction.KIND, this);
        registry.register(sprotty_1.SelectAction.KIND, this);
    };
    TheiaSprottySelectionForwarder.prototype.handle = function (action) {
        if (action instanceof sprotty_1.SelectAction) {
            this.selectionService.selection = {
                selectedElementsIDs: action.selectedElementsIDs,
                widgetId: this.viewerOptions.baseDiv,
                sourceUri: this.sourceUri
            };
        }
        else if (action instanceof sprotty_1.RequestModelAction && action.options !== undefined) {
            this.sourceUri = action.options.sourceUri;
        }
    };
    __decorate([
        inversify_1.inject(sprotty_1.TYPES.ViewerOptions),
        __metadata("design:type", Object)
    ], TheiaSprottySelectionForwarder.prototype, "viewerOptions", void 0);
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], TheiaSprottySelectionForwarder.prototype, "selectionService", void 0);
    TheiaSprottySelectionForwarder = __decorate([
        inversify_1.injectable()
    ], TheiaSprottySelectionForwarder);
    return TheiaSprottySelectionForwarder;
}());
exports.TheiaSprottySelectionForwarder = TheiaSprottySelectionForwarder;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client-contribution.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client-contribution.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var diagram_manager_1 = __webpack_require__(/*! ../diagram-manager */ "../node_modules/sprotty-theia/lib/theia/diagram-manager.js");
var DiagramLanguageClientContribution = /** @class */ (function (_super) {
    __extends(DiagramLanguageClientContribution, _super);
    function DiagramLanguageClientContribution(workspace, languages, languageClientFactory, diagramManagerProviders) {
        var _this = _super.call(this, workspace, languages, languageClientFactory) || this;
        _this.diagramManagerProviders = diagramManagerProviders;
        return _this;
    }
    DiagramLanguageClientContribution.prototype.waitForActivation = function (app) {
        return Promise.race([
            _super.prototype.waitForActivation.call(this, app),
            this.waitForOpenDiagrams()
        ]);
    };
    DiagramLanguageClientContribution.prototype.waitForOpenDiagrams = function () {
        return Promise.race(this.diagramManagerProviders.map(function (diagramManagerProvider) {
            return diagramManagerProvider().then(function (diagramManager) {
                return new Promise(function (resolve) {
                    var disposable = diagramManager.onCreated(function (widget) {
                        disposable.dispose();
                        resolve();
                    });
                });
            });
        }));
    };
    DiagramLanguageClientContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.Workspace)),
        __param(1, inversify_1.inject(browser_1.Languages)),
        __param(2, inversify_1.inject(browser_1.LanguageClientFactory)),
        __param(3, inversify_1.multiInject(diagram_manager_1.DiagramManagerProvider)),
        __metadata("design:paramtypes", [Object, Object, browser_1.LanguageClientFactory, Array])
    ], DiagramLanguageClientContribution);
    return DiagramLanguageClientContribution;
}(browser_1.BaseLanguageClientContribution));
exports.DiagramLanguageClientContribution = DiagramLanguageClientContribution;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var diagram_widget_1 = __webpack_require__(/*! ../diagram-widget */ "../node_modules/sprotty-theia/lib/theia/diagram-widget.js");
var acceptMessageType = new browser_3.NotificationType('diagram/accept');
var didCloseMessageType = new browser_3.NotificationType('diagram/didClose');
var openInTextEditorMessageType = new browser_3.NotificationType('diagram/openInTextEditor');
var DiagramLanguageClient = /** @class */ (function () {
    function DiagramLanguageClient(languageClientContribution, editorManager) {
        var _this = this;
        this.languageClientContribution = languageClientContribution;
        this.editorManager = editorManager;
        this.actionMessageReceivers = [];
        this.languageClientContribution.languageClient.then(function (lc) {
            lc.onNotification(acceptMessageType, _this.onMessageReceived.bind(_this));
            lc.onNotification(openInTextEditorMessageType, _this.openInTextEditor.bind(_this));
        }).catch(function (err) { return console.error(err); });
    }
    DiagramLanguageClient.prototype.openInTextEditor = function (message) {
        var uri = new uri_1.default(message.location.uri);
        if (!message.forceOpen) {
            this.editorManager.all.forEach(function (editorWidget) {
                var currentTextEditor = editorWidget.editor;
                if (editorWidget.isVisible && uri.toString(true) === currentTextEditor.uri.toString(true)) {
                    currentTextEditor.cursor = message.location.range.start;
                    currentTextEditor.revealRange(message.location.range);
                    currentTextEditor.selection = message.location.range;
                }
            });
        }
        else {
            var widgetOptions = {
                area: 'main'
            };
            var activeWidget = this.shell.activeWidget;
            if (activeWidget instanceof diagram_widget_1.DiagramWidget) {
                widgetOptions.ref = activeWidget;
                widgetOptions.mode = 'open-to-left';
            }
            this.editorManager.open(uri, { widgetOptions: widgetOptions }).then(function (editorWidget) {
                var editor = editorWidget.editor;
                editor.cursor = message.location.range.start;
                editor.revealRange(message.location.range);
                editor.selection = message.location.range;
            });
        }
    };
    DiagramLanguageClient.prototype.sendThroughLsp = function (message) {
        this.languageClientContribution.languageClient.then(function (lc) {
            return lc.onReady().then(function () {
                return lc.sendNotification(acceptMessageType, message);
            });
        });
    };
    DiagramLanguageClient.prototype.onMessageReceived = function (message) {
        this.actionMessageReceivers.forEach(function (client) {
            client.onMessageReceived(message);
        });
    };
    Object.defineProperty(DiagramLanguageClient.prototype, "languageClient", {
        get: function () {
            return this.languageClientContribution.languageClient;
        },
        enumerable: true,
        configurable: true
    });
    DiagramLanguageClient.prototype.didClose = function (clientId) {
        this.languageClientContribution.languageClient.then(function (lc) { return lc.sendNotification(didCloseMessageType, clientId); });
    };
    DiagramLanguageClient.prototype.connect = function (client) {
        this.actionMessageReceivers.push(client);
    };
    DiagramLanguageClient.prototype.disconnect = function (client) {
        var index = this.actionMessageReceivers.indexOf(client);
        if (index >= 0) {
            this.actionMessageReceivers.splice(index);
        }
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], DiagramLanguageClient.prototype, "shell", void 0);
    DiagramLanguageClient = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [Object, browser_2.EditorManager])
    ], DiagramLanguageClient);
    return DiagramLanguageClient;
}());
exports.DiagramLanguageClient = DiagramLanguageClient;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
__export(__webpack_require__(/*! ./diagram-language-client */ "../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client.js"));
__export(__webpack_require__(/*! ./diagram-language-client-contribution */ "../node_modules/sprotty-theia/lib/theia/languageserver/diagram-language-client-contribution.js"));
__export(__webpack_require__(/*! ./ls-diagram-contributions */ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-contributions.js"));
__export(__webpack_require__(/*! ./ls-diagram-module */ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-module.js"));


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-contributions.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-contributions.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var delete_1 = __webpack_require__(/*! ../../sprotty/languageserver/delete */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/delete.js");
var diagram_commands_1 = __webpack_require__(/*! ../diagram-commands */ "../node_modules/sprotty-theia/lib/theia/diagram-commands.js");
var diagram_keybinding_1 = __webpack_require__(/*! ../diagram-keybinding */ "../node_modules/sprotty-theia/lib/theia/diagram-keybinding.js");
var diagram_widget_1 = __webpack_require__(/*! ../diagram-widget */ "../node_modules/sprotty-theia/lib/theia/diagram-widget.js");
var ls_theia_sprotty_connector_1 = __webpack_require__(/*! ../../sprotty/languageserver/ls-theia-sprotty-connector */ "../node_modules/sprotty-theia/lib/sprotty/languageserver/ls-theia-sprotty-connector.js");
var LSDiagramCommandContribution = /** @class */ (function () {
    function LSDiagramCommandContribution() {
    }
    LSDiagramCommandContribution.prototype.registerCommands = function (registry) {
        registry.registerCommand({
            id: diagram_commands_1.DiagramCommands.DELETE,
            label: 'Delete selected'
        });
        registry.registerHandler(diagram_commands_1.DiagramCommands.DELETE, new diagram_commands_1.DiagramCommandHandler(this.shell, function (widget) {
            if (widget instanceof diagram_widget_1.DiagramWidget) {
                var workspace = widget.connector instanceof ls_theia_sprotty_connector_1.LSTheiaSprottyConnector ? widget.connector.workspace : undefined;
                if (workspace) {
                    var action = new delete_1.DeleteWithWorkspaceEditAction(workspace, widget.uri.toString(true));
                    widget.actionDispatcher.dispatch(action);
                }
            }
        }));
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], LSDiagramCommandContribution.prototype, "shell", void 0);
    LSDiagramCommandContribution = __decorate([
        inversify_1.injectable()
    ], LSDiagramCommandContribution);
    return LSDiagramCommandContribution;
}());
exports.LSDiagramCommandContribution = LSDiagramCommandContribution;
var LSDiagramKeybindingContribution = /** @class */ (function () {
    function LSDiagramKeybindingContribution() {
    }
    LSDiagramKeybindingContribution.prototype.registerKeybindings = function (registry) {
        registry.registerKeybinding({
            command: diagram_commands_1.DiagramCommands.DELETE,
            context: this.diagramKeybindingContext.id,
            keybinding: 'del'
        });
        registry.registerKeybinding({
            command: diagram_commands_1.DiagramCommands.DELETE,
            context: this.diagramKeybindingContext.id,
            keybinding: 'backspace'
        });
    };
    __decorate([
        inversify_1.inject(diagram_keybinding_1.DiagramKeybindingContext),
        __metadata("design:type", diagram_keybinding_1.DiagramKeybindingContext)
    ], LSDiagramKeybindingContribution.prototype, "diagramKeybindingContext", void 0);
    LSDiagramKeybindingContribution = __decorate([
        inversify_1.injectable()
    ], LSDiagramKeybindingContribution);
    return LSDiagramKeybindingContribution;
}());
exports.LSDiagramKeybindingContribution = LSDiagramKeybindingContribution;


/***/ }),

/***/ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-module.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-module.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2018 TypeFox and others.
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
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ls_diagram_contributions_1 = __webpack_require__(/*! ./ls-diagram-contributions */ "../node_modules/sprotty-theia/lib/theia/languageserver/ls-diagram-contributions.js");
/**
 * Standard DI config for languageserver aware diagrams.
 */
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(common_1.CommandContribution).to(ls_diagram_contributions_1.LSDiagramCommandContribution).inSingletonScope();
    bind(browser_1.KeybindingContribution).to(ls_diagram_contributions_1.LSDiagramKeybindingContribution).inSingletonScope();
});


/***/ })

}]);
//# sourceMappingURL=17.bundle.js.map