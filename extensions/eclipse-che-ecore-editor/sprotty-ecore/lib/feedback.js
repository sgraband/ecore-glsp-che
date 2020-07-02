"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var inversify_1 = require("inversify");
var snabbdom = require("snabbdom-jsx");
var model_1 = require("./model");
var JSX = { createElement: snabbdom.svg };
/**
 * A NodeDecorator to install visual feedback on selected NodeLabels
 */
var LabelSelectionFeedback = /** @class */ (function () {
    function LabelSelectionFeedback() {
    }
    LabelSelectionFeedback.prototype.decorate = function (vnode, element) {
        if (element instanceof model_1.SLabelNode && element.selected) {
            var vPadding = 1;
            var hPadding = 5;
            var feedback = (JSX.createElement("rect", { x: -hPadding, y: -element.bounds.height / 2 - vPadding, width: element.bounds.width + 2 * hPadding, height: element.bounds.height + 2 * vPadding, "class-selection-feedback": true }));
            if (!vnode.children) {
                vnode.children = [];
            }
            vnode.children.push(feedback);
        }
        return vnode;
    };
    LabelSelectionFeedback.prototype.postUpdate = function () { };
    LabelSelectionFeedback = __decorate([
        inversify_1.injectable()
    ], LabelSelectionFeedback);
    return LabelSelectionFeedback;
}());
exports.LabelSelectionFeedback = LabelSelectionFeedback;
//# sourceMappingURL=feedback.js.map