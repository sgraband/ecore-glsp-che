(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-commands.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-commands.js ***!
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
var client_1 = __webpack_require__(/*! @eclipse-glsp/client */ "../node_modules/@eclipse-glsp/client/lib/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var GLSPDiagramCommands;
(function (GLSPDiagramCommands) {
    GLSPDiagramCommands.RESIZE_WIDTH_MIN = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width:min";
    GLSPDiagramCommands.RESIZE_WIDTH_MAX = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width:max";
    GLSPDiagramCommands.RESIZE_WIDTH_AVG = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width:avg";
    GLSPDiagramCommands.RESIZE_WIDTH_FIRST = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width:first";
    GLSPDiagramCommands.RESIZE_WIDTH_LAST = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width:last";
    GLSPDiagramCommands.RESIZE_HEIGHT_MIN = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":height:min";
    GLSPDiagramCommands.RESIZE_HEIGHT_MAX = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":height:max";
    GLSPDiagramCommands.RESIZE_HEIGHT_AVG = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":height:avg";
    GLSPDiagramCommands.RESIZE_HEIGHT_FIRST = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":height:first";
    GLSPDiagramCommands.RESIZE_HEIGHT_LAST = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":height:last";
    GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_MIN = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width_and_height:min";
    GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_MAX = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width_and_height:max";
    GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_AVG = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width_and_height:avg";
    GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_FIRST = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width_and_height:first";
    GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_LAST = 'glsp:' + client_1.ResizeElementsCommand.KIND + ":width_and_height:last";
    GLSPDiagramCommands.ALIGN_LEFT = 'glsp:' + client_1.AlignElementsCommand.KIND + ":left";
    GLSPDiagramCommands.ALIGN_CENTER = 'glsp:' + client_1.AlignElementsCommand.KIND + ":center";
    GLSPDiagramCommands.ALIGN_RIGHT = 'glsp:' + client_1.AlignElementsCommand.KIND + ":right";
    GLSPDiagramCommands.ALIGN_TOP = 'glsp:' + client_1.AlignElementsCommand.KIND + ":top";
    GLSPDiagramCommands.ALIGN_MIDDLE = 'glsp:' + client_1.AlignElementsCommand.KIND + ":middle";
    GLSPDiagramCommands.ALIGN_BOTTOM = 'glsp:' + client_1.AlignElementsCommand.KIND + ":bottom";
    GLSPDiagramCommands.ALIGN_LEFT_FIRST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":left:first";
    GLSPDiagramCommands.ALIGN_CENTER_FIRST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":center:first";
    GLSPDiagramCommands.ALIGN_RIGHT_FIRST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":right:first";
    GLSPDiagramCommands.ALIGN_TOP_FIRST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":top:first";
    GLSPDiagramCommands.ALIGN_MIDDLE_FIRST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":middle:first";
    GLSPDiagramCommands.ALIGN_BOTTOM_FIRST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":bottom:first";
    GLSPDiagramCommands.ALIGN_LEFT_LAST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":left:last";
    GLSPDiagramCommands.ALIGN_CENTER_LAST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":center:last";
    GLSPDiagramCommands.ALIGN_RIGHT_LAST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":right:last";
    GLSPDiagramCommands.ALIGN_TOP_LAST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":top:last";
    GLSPDiagramCommands.ALIGN_MIDDLE_LAST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":middle:last";
    GLSPDiagramCommands.ALIGN_BOTTOM_LAST = 'glsp:' + client_1.AlignElementsCommand.KIND + ":bottom:last";
})(GLSPDiagramCommands = exports.GLSPDiagramCommands || (exports.GLSPDiagramCommands = {}));
var GLSPDiagramMenus;
(function (GLSPDiagramMenus) {
    GLSPDiagramMenus.ALIGN_MENU = sprotty_theia_1.DiagramMenus.DIAGRAM.concat("align");
    GLSPDiagramMenus.ALIGN_HORIZONTAL_GROUP = GLSPDiagramMenus.ALIGN_MENU.concat("1_horizontal");
    GLSPDiagramMenus.ALIGN_VERTICAL_GROUP = GLSPDiagramMenus.ALIGN_MENU.concat("2_vertical");
    GLSPDiagramMenus.ALIGN_HORIZONTAL_FIRST_GROUP = GLSPDiagramMenus.ALIGN_MENU.concat("3_horizontal_first");
    GLSPDiagramMenus.ALIGN_VERTICAL_FIRST_GROUP = GLSPDiagramMenus.ALIGN_MENU.concat("4_vertical_first");
    GLSPDiagramMenus.ALIGN_HORIZONTAL_LAST_GROUP = GLSPDiagramMenus.ALIGN_MENU.concat("5_horizontal_last");
    GLSPDiagramMenus.ALIGN_VERTICAL_LAST_GROUP = GLSPDiagramMenus.ALIGN_MENU.concat("6_vertical_last");
    GLSPDiagramMenus.RESIZE_MENU = sprotty_theia_1.DiagramMenus.DIAGRAM.concat("resize");
    GLSPDiagramMenus.RESIZE_WIDTH_GROUP = GLSPDiagramMenus.RESIZE_MENU.concat("1_width");
    GLSPDiagramMenus.RESIZE_HEIGHT_GROUP = GLSPDiagramMenus.RESIZE_MENU.concat("2_height");
    GLSPDiagramMenus.RESIZE_WIDTH_AND_HEIGHT_GROUP = GLSPDiagramMenus.RESIZE_MENU.concat("3_width_and_height");
})(GLSPDiagramMenus = exports.GLSPDiagramMenus || (exports.GLSPDiagramMenus = {}));
var GLSPDiagramMenuContribution = /** @class */ (function () {
    function GLSPDiagramMenuContribution() {
    }
    GLSPDiagramMenuContribution.prototype.registerMenus = function (registry) {
        registry.registerSubmenu(GLSPDiagramMenus.RESIZE_MENU, "Resize");
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_MIN,
            order: '1'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_MAX,
            order: '2'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_AVG,
            order: '3'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_FIRST,
            order: '4'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_LAST,
            order: '5'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_HEIGHT_MIN,
            order: '1'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_HEIGHT_MAX,
            order: '2'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_HEIGHT_AVG,
            order: '3'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_HEIGHT_FIRST,
            order: '5'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_HEIGHT_LAST,
            order: '4'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_AND_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_MIN,
            order: '1'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_AND_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_MAX,
            order: '2'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_AND_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_AVG,
            order: '3'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_AND_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_FIRST,
            order: '4'
        });
        registry.registerMenuAction(GLSPDiagramMenus.RESIZE_WIDTH_AND_HEIGHT_GROUP, {
            commandId: GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_LAST,
            order: '5'
        });
        registry.registerSubmenu(GLSPDiagramMenus.ALIGN_MENU, "Align");
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_HORIZONTAL_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_LEFT,
            order: '1'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_HORIZONTAL_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_CENTER,
            order: '2'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_HORIZONTAL_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_RIGHT,
            order: '3'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_VERTICAL_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_TOP,
            order: '4'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_VERTICAL_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_MIDDLE,
            order: '5'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_VERTICAL_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_BOTTOM,
            order: '6'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_HORIZONTAL_FIRST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_LEFT_FIRST,
            order: '1'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_HORIZONTAL_FIRST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_CENTER_FIRST,
            order: '2'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_HORIZONTAL_FIRST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_RIGHT_FIRST,
            order: '3'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_VERTICAL_FIRST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_TOP_FIRST,
            order: '4'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_VERTICAL_FIRST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_MIDDLE_FIRST,
            order: '5'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_VERTICAL_FIRST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_BOTTOM_FIRST,
            order: '6'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_HORIZONTAL_LAST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_LEFT_LAST,
            order: '1'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_HORIZONTAL_LAST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_CENTER_LAST,
            order: '2'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_HORIZONTAL_LAST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_RIGHT_LAST,
            order: '3'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_VERTICAL_LAST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_TOP_LAST,
            order: '4'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_VERTICAL_LAST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_MIDDLE_LAST,
            order: '5'
        });
        registry.registerMenuAction(GLSPDiagramMenus.ALIGN_VERTICAL_LAST_GROUP, {
            commandId: GLSPDiagramCommands.ALIGN_BOTTOM_LAST,
            order: '6'
        });
    };
    GLSPDiagramMenuContribution = __decorate([
        inversify_1.injectable()
    ], GLSPDiagramMenuContribution);
    return GLSPDiagramMenuContribution;
}());
exports.GLSPDiagramMenuContribution = GLSPDiagramMenuContribution;
var GLSPDiagramCommandContribution = /** @class */ (function () {
    function GLSPDiagramCommandContribution(shell) {
        this.shell = shell;
    }
    GLSPDiagramCommandContribution.prototype.registerResize = function (registry, id, label, dimension, f) {
        registry.registerCommand({
            id: id,
            label: label,
        });
        registry.registerHandler(id, new sprotty_theia_1.DiagramCommandHandler(this.shell, function (widget) {
            return widget.actionDispatcher.dispatch(new client_1.ResizeElementsAction([], dimension, f));
        }));
    };
    GLSPDiagramCommandContribution.prototype.registerAlign = function (registry, id, label, alignment, f) {
        registry.registerCommand({
            id: id,
            label: label
        });
        registry.registerHandler(id, new sprotty_theia_1.DiagramCommandHandler(this.shell, function (widget) {
            return widget.actionDispatcher.dispatch(new client_1.AlignElementsAction([], alignment, f));
        }));
    };
    GLSPDiagramCommandContribution.prototype.registerCommands = function (reg) {
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_MIN, 'Minimal Width', client_1.ResizeDimension.Width, client_1.Reduce.min);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_MAX, 'Maximal Width', client_1.ResizeDimension.Width, client_1.Reduce.max);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_AVG, 'Average Width', client_1.ResizeDimension.Width, client_1.Reduce.avg);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_FIRST, 'Width of First Selected Element', client_1.ResizeDimension.Width, client_1.Reduce.first);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_LAST, 'Width of Last Selected Element', client_1.ResizeDimension.Width, client_1.Reduce.last);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_HEIGHT_MIN, 'Minimal Height', client_1.ResizeDimension.Height, client_1.Reduce.min);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_HEIGHT_MAX, 'Maximal Height', client_1.ResizeDimension.Height, client_1.Reduce.max);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_HEIGHT_AVG, 'Average Height', client_1.ResizeDimension.Height, client_1.Reduce.avg);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_HEIGHT_FIRST, 'Height of First Selected Element', client_1.ResizeDimension.Height, client_1.Reduce.first);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_HEIGHT_LAST, 'Height of Last Selected Element', client_1.ResizeDimension.Height, client_1.Reduce.last);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_MIN, 'Minimal Width and Height', client_1.ResizeDimension.Width_And_Height, client_1.Reduce.min);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_MAX, 'Maximal Width and Height', client_1.ResizeDimension.Width_And_Height, client_1.Reduce.max);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_AVG, 'Average Width and Height', client_1.ResizeDimension.Width_And_Height, client_1.Reduce.avg);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_FIRST, 'Width and Height of First Selected Element', client_1.ResizeDimension.Width_And_Height, client_1.Reduce.first);
        this.registerResize(reg, GLSPDiagramCommands.RESIZE_WIDTH_AND_HEIGHT_LAST, 'Width and Height of Last Selected Element', client_1.ResizeDimension.Width_And_Height, client_1.Reduce.last);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_LEFT, 'Left', client_1.Alignment.Left, client_1.Select.all);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_CENTER, 'Center', client_1.Alignment.Center, client_1.Select.all);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_RIGHT, 'Right', client_1.Alignment.Right, client_1.Select.all);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_TOP, 'Top', client_1.Alignment.Top, client_1.Select.all);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_MIDDLE, 'Middle', client_1.Alignment.Middle, client_1.Select.all);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_BOTTOM, 'Bottom', client_1.Alignment.Bottom, client_1.Select.all);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_LEFT_FIRST, 'Left of First Selected Element', client_1.Alignment.Left, client_1.Select.first);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_CENTER_FIRST, 'Center of First Selected Element', client_1.Alignment.Center, client_1.Select.first);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_RIGHT_FIRST, 'Right of First Selected Element', client_1.Alignment.Right, client_1.Select.first);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_TOP_FIRST, 'Top of First Selected Element', client_1.Alignment.Top, client_1.Select.first);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_MIDDLE_FIRST, 'Middle of First Selected Element', client_1.Alignment.Middle, client_1.Select.first);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_BOTTOM_FIRST, 'Bottom of First Selected Element', client_1.Alignment.Bottom, client_1.Select.first);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_LEFT_LAST, 'Left of Last Selected Element', client_1.Alignment.Left, client_1.Select.last);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_CENTER_LAST, 'Center of Last Selected Element', client_1.Alignment.Center, client_1.Select.last);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_RIGHT_LAST, 'Right of Last Selected Element', client_1.Alignment.Right, client_1.Select.last);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_TOP_LAST, 'Top of Last Selected Element', client_1.Alignment.Top, client_1.Select.last);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_MIDDLE_LAST, 'Middle of Last Selected Element', client_1.Alignment.Middle, client_1.Select.last);
        this.registerAlign(reg, GLSPDiagramCommands.ALIGN_BOTTOM_LAST, 'Bottom of Last Selected Element', client_1.Alignment.Bottom, client_1.Select.last);
    };
    GLSPDiagramCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.ApplicationShell)),
        __metadata("design:paramtypes", [browser_1.ApplicationShell])
    ], GLSPDiagramCommandContribution);
    return GLSPDiagramCommandContribution;
}());
exports.GLSPDiagramCommandContribution = GLSPDiagramCommandContribution;
var GLSPDiagramKeybindingContribution = /** @class */ (function () {
    function GLSPDiagramKeybindingContribution(diagramKeybindingContext) {
        this.diagramKeybindingContext = diagramKeybindingContext;
    }
    GLSPDiagramKeybindingContribution.prototype.registerKeybindings = function (registry) {
        registry.registerKeybinding({
            command: GLSPDiagramCommands.ALIGN_LEFT,
            context: this.diagramKeybindingContext.id,
            keybinding: 'alt+shift+left'
        });
        registry.registerKeybinding({
            command: GLSPDiagramCommands.ALIGN_RIGHT,
            context: this.diagramKeybindingContext.id,
            keybinding: 'alt+shift+right'
        });
        registry.registerKeybinding({
            command: GLSPDiagramCommands.ALIGN_TOP,
            context: this.diagramKeybindingContext.id,
            keybinding: 'alt+shift+up'
        });
        registry.registerKeybinding({
            command: GLSPDiagramCommands.ALIGN_BOTTOM,
            context: this.diagramKeybindingContext.id,
            keybinding: 'alt+shift+down'
        });
    };
    GLSPDiagramKeybindingContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(sprotty_theia_1.DiagramKeybindingContext)),
        __metadata("design:paramtypes", [sprotty_theia_1.DiagramKeybindingContext])
    ], GLSPDiagramKeybindingContribution);
    return GLSPDiagramKeybindingContribution;
}());
exports.GLSPDiagramKeybindingContribution = GLSPDiagramKeybindingContribution;


/***/ }),

/***/ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/frontend-module.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@eclipse-glsp/theia-integration/lib/browser/frontend-module.js ***!
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
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var notifications_manager_1 = __webpack_require__(/*! @theia/messages/lib/browser/notifications-manager */ "../node_modules/@theia/messages/lib/browser/notifications-manager.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var theia_sprotty_context_menu_service_1 = __webpack_require__(/*! sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service */ "../node_modules/sprotty-theia/lib/sprotty/theia-sprotty-context-menu-service.js");
var glsp_diagram_commands_1 = __webpack_require__(/*! ./diagram/glsp-diagram-commands */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-diagram-commands.js");
var glsp_notification_manager_1 = __webpack_require__(/*! ./diagram/glsp-notification-manager */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-notification-manager.js");
var glsp_theia_context_menu_service_1 = __webpack_require__(/*! ./diagram/glsp-theia-context-menu-service */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-context-menu-service.js");
var glsp_theia_sprotty_connector_1 = __webpack_require__(/*! ./diagram/glsp-theia-sprotty-connector */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/diagram/glsp-theia-sprotty-connector.js");
var glsp_client_1 = __webpack_require__(/*! ./language/glsp-client */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client.js");
var glsp_client_contribution_1 = __webpack_require__(/*! ./language/glsp-client-contribution */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-contribution.js");
var glsp_client_provider_1 = __webpack_require__(/*! ./language/glsp-client-provider */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-client-provider.js");
var glsp_frontend_contribution_1 = __webpack_require__(/*! ./language/glsp-frontend-contribution */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/language/glsp-frontend-contribution.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(glsp_client_1.GLSPClientFactory).toSelf().inSingletonScope();
    core_1.bindContributionProvider(bind, glsp_client_contribution_1.GLSPClientContribution);
    bind(browser_1.FrontendApplicationContribution).to(glsp_frontend_contribution_1.GLSPFrontendContribution);
    bind(glsp_client_provider_1.GLSPClientProviderImpl).toSelf().inSingletonScope();
    bind(glsp_client_provider_1.GLSPClientProvider).toService(glsp_client_provider_1.GLSPClientProviderImpl);
    bind(glsp_theia_sprotty_connector_1.GLSPTheiaSprottyConnector).toSelf().inSingletonScope();
    bind(core_1.CommandContribution).to(glsp_diagram_commands_1.GLSPDiagramCommandContribution).inSingletonScope();
    bind(core_1.MenuContribution).to(glsp_diagram_commands_1.GLSPDiagramMenuContribution).inSingletonScope();
    bind(browser_1.KeybindingContribution).to(glsp_diagram_commands_1.GLSPDiagramKeybindingContribution).inSingletonScope();
    bind(glsp_theia_context_menu_service_1.TheiaContextMenuServiceFactory).toFactory(function (context) { return function () {
        var container = context.container.createChild();
        container.bind(theia_sprotty_context_menu_service_1.TheiaContextMenuService).toSelf().inSingletonScope();
        return container.get(theia_sprotty_context_menu_service_1.TheiaContextMenuService);
    }; });
    bind(glsp_notification_manager_1.GLSPNotificationManager).toSelf().inSingletonScope();
    if (isBound(notifications_manager_1.NotificationManager)) {
        rebind(notifications_manager_1.NotificationManager).toService(glsp_notification_manager_1.GLSPNotificationManager);
    }
    else {
        bind(notifications_manager_1.NotificationManager).toService(glsp_notification_manager_1.GLSPNotificationManager);
    }
});


/***/ })

}]);
//# sourceMappingURL=63.bundle.js.map