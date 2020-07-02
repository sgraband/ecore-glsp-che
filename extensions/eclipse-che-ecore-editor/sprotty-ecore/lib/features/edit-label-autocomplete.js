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
 * Copyright (c) 2019-2020 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
var lib_1 = require("@eclipse-glsp/client/lib");
var inversify_1 = require("inversify");
var lib_2 = require("sprotty/lib");
var keyboard_1 = require("sprotty/lib/utils/keyboard");
var AttributeTypesAction = /** @class */ (function () {
    function AttributeTypesAction(requestId) {
        if (requestId === void 0) { requestId = lib_2.generateRequestId(); }
        this.requestId = requestId;
        this.kind = AttributeTypesAction.KIND;
    }
    AttributeTypesAction.KIND = 'getAttributeTypes';
    return AttributeTypesAction;
}());
exports.AttributeTypesAction = AttributeTypesAction;
var ReturnAttributeTypesAction = /** @class */ (function () {
    function ReturnAttributeTypesAction(actions, responseId) {
        if (responseId === void 0) { responseId = ''; }
        this.actions = actions;
        this.responseId = responseId;
        this.kind = ReturnAttributeTypesAction.KIND;
        this.types = actions;
    }
    ReturnAttributeTypesAction.KIND = 'returnAttributeTypes';
    return ReturnAttributeTypesAction;
}());
exports.ReturnAttributeTypesAction = ReturnAttributeTypesAction;
var EditLabelUIAutocomplete = /** @class */ (function (_super) {
    __extends(EditLabelUIAutocomplete, _super);
    function EditLabelUIAutocomplete(actionDispatcher) {
        var _this = _super.call(this) || this;
        _this.actionDispatcher = actionDispatcher;
        _this.showAutocomplete = false;
        _this.types = [];
        return _this;
    }
    EditLabelUIAutocomplete.prototype.initializeContents = function (containerElement) {
        this.outerDiv = containerElement;
        _super.prototype.initializeContents.call(this, containerElement);
    };
    EditLabelUIAutocomplete.prototype.configureAndAdd = function (element, containerElement) {
        var _this = this;
        _super.prototype.configureAndAdd.call(this, element, containerElement);
        element.addEventListener('keydown', function (event) { return _this.handleKeyDown(event); });
    };
    EditLabelUIAutocomplete.prototype.handleKeyDown = function (event) {
        if (keyboard_1.matchesKeystroke(event, 'Space', 'ctrl')) {
            this.showAutocomplete = true;
            if (this.isAutoCompleteEnabled()) {
                this.createAutocomplete();
            }
        }
        this.updateAutocomplete(event);
    };
    EditLabelUIAutocomplete.prototype.validateLabelIfContentChange = function (event, value) {
        if (this.isAutoCompleteEnabled() && this.previousLabelContent !== value) {
            // recreate autocomplete list if value changed
            this.createAutocomplete();
        }
        _super.prototype.validateLabelIfContentChange.call(this, event, value);
    };
    EditLabelUIAutocomplete.prototype.updateAutocomplete = function (event) {
        if (keyboard_1.matchesKeystroke(event, 'ArrowDown')) {
            this.currentFocus++;
            this.addActive();
        }
        else if (keyboard_1.matchesKeystroke(event, 'ArrowUp')) {
            this.currentFocus--;
            this.addActive();
        }
        else if (keyboard_1.matchesKeystroke(event, 'Enter')) {
            event.preventDefault();
            if (this.currentFocus > -1) {
                if (this.listContainer) {
                    var children = this.listContainer.children;
                    children[this.currentFocus].click();
                }
            }
        }
    };
    EditLabelUIAutocomplete.prototype.createAutocomplete = function () {
        var _this = this;
        var input = this.inputElement.value;
        var val = "";
        if (input.includes(":")) {
            val = input.split(":")[1].trim();
        }
        this.closeAllLists();
        this.currentFocus = -1;
        this.listContainer = document.createElement("div");
        this.listContainer.setAttribute("id", this.inputElement.id + "autocomplete-list");
        this.listContainer.setAttribute("class", "autocomplete-items");
        this.outerDiv.appendChild(this.listContainer);
        var _loop_1 = function (i) {
            if (this_1.types[i].substr(0, val.length).toLowerCase() === val.toLowerCase()) {
                var element_1 = document.createElement("div");
                element_1.innerHTML = "<strong>" + this_1.types[i].substr(0, val.length) + "</strong>";
                element_1.innerHTML += this_1.types[i].substr(val.length);
                element_1.innerHTML += "<input type='hidden' value='" + this_1.types[i] + "'>";
                element_1.addEventListener("click", function (e) {
                    // change the type of the label
                    var name = _this.inputElement.value;
                    if (name.includes(":")) {
                        name = name.split(":")[0];
                    }
                    _this.inputElement.value = name + ": " + element_1.getElementsByTagName("input")[0].value;
                    _this.closeAllLists();
                });
                this_1.listContainer.appendChild(element_1);
            }
        };
        var this_1 = this;
        // create autocomlete items starting with input
        for (var i = 0; i < this.types.length; i++) {
            _loop_1(i);
        }
        // set max height for scrolling
        var parent = this.outerDiv.parentElement;
        if (parent) {
            var parentHeight = parent.offsetHeight;
            var parentPosY = parent.offsetTop;
            var posY = this.outerDiv.offsetTop + this.inputElement.offsetHeight;
            var maxHeight = parentHeight - (posY - parentPosY);
            this.listContainer.style.maxHeight = maxHeight + "px";
        }
    };
    EditLabelUIAutocomplete.prototype.addActive = function () {
        if (!this.listContainer)
            return;
        this.removeActive();
        var children = this.listContainer.children;
        if (children.length > 0) {
            if (this.currentFocus >= children.length)
                this.currentFocus = 0;
            if (this.currentFocus < 0)
                this.currentFocus = (children.length - 1);
            children[this.currentFocus].classList.add("autocomplete-active");
        }
    };
    EditLabelUIAutocomplete.prototype.removeActive = function () {
        var children = this.listContainer.children;
        for (var i = 0; i < children.length; i++) {
            children[i].classList.remove("autocomplete-active");
        }
    };
    EditLabelUIAutocomplete.prototype.closeAllLists = function () {
        var x = this.outerDiv.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            this.outerDiv.removeChild(x[i]);
        }
    };
    EditLabelUIAutocomplete.prototype.onBeforeShow = function (containerElement, root) {
        var _this = this;
        var contextElementIds = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            contextElementIds[_i - 2] = arguments[_i];
        }
        _super.prototype.onBeforeShow.apply(this, __spread([containerElement, root], contextElementIds));
        // request possible element types
        this.actionDispatcher.requestUntil(new AttributeTypesAction()).then(function (response) {
            if (response) {
                var action = response;
                _this.types = action.types;
            }
        });
    };
    EditLabelUIAutocomplete.prototype.isAutoCompleteEnabled = function () {
        if (this.label) {
            return this.label.type === "node:attribute" && this.showAutocomplete;
        }
        return false;
    };
    EditLabelUIAutocomplete.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.showAutocomplete = false;
        this.currentFocus = -1;
        this.closeAllLists();
    };
    EditLabelUIAutocomplete = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(lib_1.TYPES.IActionDispatcher)),
        __metadata("design:paramtypes", [lib_1.GLSPActionDispatcher])
    ], EditLabelUIAutocomplete);
    return EditLabelUIAutocomplete;
}(lib_2.EditLabelUI));
exports.EditLabelUIAutocomplete = EditLabelUIAutocomplete;
//# sourceMappingURL=edit-label-autocomplete.js.map