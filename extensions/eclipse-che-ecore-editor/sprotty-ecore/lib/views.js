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
var lib_1 = require("sprotty/lib");
/** @jsx svg */
var JSX = { createElement: snabbdom.svg };
var ClassNodeView = /** @class */ (function (_super) {
    __extends(ClassNodeView, _super);
    function ClassNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassNodeView.prototype.render = function (node, context) {
        var rhombStr = "M 0,38  L " + node.bounds.width + ",38";
        return JSX.createElement("g", { "class-node": true },
            JSX.createElement("defs", null,
                JSX.createElement("filter", { id: "dropShadow" },
                    JSX.createElement("feDropShadow", { dx: "0.5", dy: "0.5", stdDeviation: "0.4" }))),
            JSX.createElement("rect", { "class-sprotty-node": true, "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, rx: 6, ry: 6, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height) }),
            context.renderChildren(node),
            (node.children[1] && node.children[1].children.length > 0) ?
                JSX.createElement("path", { "class-sprotty-edge": true, d: rhombStr }) : '',
            "}");
    };
    ClassNodeView = __decorate([
        inversify_1.injectable()
    ], ClassNodeView);
    return ClassNodeView;
}(lib_1.RectangularNodeView));
exports.ClassNodeView = ClassNodeView;
var IconView = /** @class */ (function () {
    function IconView() {
    }
    IconView.prototype.render = function (element, context) {
        var image = require("../images/" + element.iconImageName);
        return JSX.createElement("g", null,
            JSX.createElement("image", { "class-sprotty-icon": true, href: image, x: -2, y: -1, width: 20, height: 20 }),
            context.renderChildren(element));
    };
    IconView = __decorate([
        inversify_1.injectable()
    ], IconView);
    return IconView;
}());
exports.IconView = IconView;
var ArrowEdgeView = /** @class */ (function (_super) {
    __extends(ArrowEdgeView, _super);
    function ArrowEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrowEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            JSX.createElement("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(p2, p1) + " " + p2.x + " " + p2.y + ") translate(" + p2.x + " " + p2.y + ")" }),
        ];
    };
    ArrowEdgeView = __decorate([
        inversify_1.injectable()
    ], ArrowEdgeView);
    return ArrowEdgeView;
}(lib_1.PolylineEdgeView));
exports.ArrowEdgeView = ArrowEdgeView;
var BidirectionalEdgeView = /** @class */ (function (_super) {
    __extends(BidirectionalEdgeView, _super);
    function BidirectionalEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BidirectionalEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var source1 = segments[0];
        var source2 = segments[1];
        var target1 = segments[segments.length - 2];
        var target2 = segments[segments.length - 1];
        return [
            JSX.createElement("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(target2, target1) + " " + target2.x + " " + target2.y + ") translate(" + target2.x + " " + target2.y + ")" }),
            JSX.createElement("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(source1, source2) + " " + source1.x + " " + source1.y + ") translate(" + source1.x + " " + source1.y + ")" }),
        ];
    };
    BidirectionalEdgeView = __decorate([
        inversify_1.injectable()
    ], BidirectionalEdgeView);
    return BidirectionalEdgeView;
}(ArrowEdgeView));
exports.BidirectionalEdgeView = BidirectionalEdgeView;
var InheritanceEdgeView = /** @class */ (function (_super) {
    __extends(InheritanceEdgeView, _super);
    function InheritanceEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InheritanceEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            JSX.createElement("path", { "class-sprotty-edge": true, "class-triangle": true, d: "M 10,-8 L 0,0 L 10,8 Z", "class-inheritance": true, transform: "rotate(" + angle(p2, p1) + " " + p2.x + " " + p2.y + ") translate(" + p2.x + " " + p2.y + ")" }),
        ];
    };
    InheritanceEdgeView = __decorate([
        inversify_1.injectable()
    ], InheritanceEdgeView);
    return InheritanceEdgeView;
}(ArrowEdgeView));
exports.InheritanceEdgeView = InheritanceEdgeView;
var DiamondEdgeView = /** @class */ (function (_super) {
    __extends(DiamondEdgeView, _super);
    function DiamondEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiamondEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[0];
        var p2 = segments[1];
        var r = 6;
        var rhombStr = "M 0,0 l" + r + "," + (r / 2) + " l" + r + ",-" + (r / 2) + " l-" + r + ",-" + (r / 2) + " l-" + r + "," + (r / 2) + " Z";
        var firstEdgeAngle = angle(p1, p2);
        return [
            JSX.createElement("path", { "class-sprotty-edge": true, "class-diamond": true, "class-composition": this.isComposition(), d: rhombStr, transform: "rotate(" + firstEdgeAngle + " " + p1.x + " " + p1.y + ") translate(" + p1.x + " " + p1.y + ")" })
        ];
    };
    DiamondEdgeView.prototype.isComposition = function () {
        return false;
    };
    DiamondEdgeView.prototype.isAggregation = function () {
        return false;
    };
    DiamondEdgeView = __decorate([
        inversify_1.injectable()
    ], DiamondEdgeView);
    return DiamondEdgeView;
}(lib_1.PolylineEdgeView));
var CompositionEdgeView = /** @class */ (function (_super) {
    __extends(CompositionEdgeView, _super);
    function CompositionEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompositionEdgeView.prototype.isComposition = function () {
        return true;
    };
    CompositionEdgeView = __decorate([
        inversify_1.injectable()
    ], CompositionEdgeView);
    return CompositionEdgeView;
}(DiamondEdgeView));
exports.CompositionEdgeView = CompositionEdgeView;
var AggregationEdgeView = /** @class */ (function (_super) {
    __extends(AggregationEdgeView, _super);
    function AggregationEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AggregationEdgeView.prototype.isAggregation = function () {
        return true;
    };
    AggregationEdgeView = __decorate([
        inversify_1.injectable()
    ], AggregationEdgeView);
    return AggregationEdgeView;
}(DiamondEdgeView));
exports.AggregationEdgeView = AggregationEdgeView;
var LabelNodeView = /** @class */ (function (_super) {
    __extends(LabelNodeView, _super);
    function LabelNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelNodeView.prototype.render = function (labelNode, context) {
        var image;
        if (labelNode.imageName) {
            image = require("../images/" + labelNode.imageName);
        }
        var vnode = (JSX.createElement("g", { "class-selected": labelNode.selected, "class-mouseover": labelNode.hoverFeedback, "class-sprotty-label-node": true },
            !!image && JSX.createElement("image", { "class-sprotty-icon": true, href: image, y: -5, width: 13, height: 8 }),
            JSX.createElement("text", { "class-sprotty-label": true, x: !!image ? 20 : 0 }, labelNode.text)));
        var subType = lib_1.getSubType(labelNode);
        if (subType)
            lib_1.setAttr(vnode, "class", subType);
        return vnode;
    };
    LabelNodeView = __decorate([
        inversify_1.injectable()
    ], LabelNodeView);
    return LabelNodeView;
}(lib_1.SLabelView));
exports.LabelNodeView = LabelNodeView;
function angle(x0, x1) {
    return lib_1.toDegrees(Math.atan2(x1.y - x0.y, x1.x - x0.x));
}
exports.angle = angle;
//# sourceMappingURL=views.js.map