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
 * Copyright (c) 2019-2020 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * https://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
var lib_1 = require("sprotty/lib");
var LabeledNode = /** @class */ (function (_super) {
    __extends(LabeledNode, _super);
    function LabeledNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LabeledNode.prototype, "editableLabel", {
        get: function () {
            var headerComp = this.children.find(function (element) { return element.type === 'comp:header'; });
            if (headerComp) {
                var label = headerComp.children.find(function (element) { return element.type === 'label:heading'; });
                if (label && lib_1.isEditableLabel(label)) {
                    return label;
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabeledNode.prototype, "name", {
        get: function () {
            if (this.editableLabel) {
                return this.editableLabel.text;
            }
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    LabeledNode.prototype.hasFeature = function (feature) {
        return _super.prototype.hasFeature.call(this, feature) || feature === lib_1.nameFeature || feature === lib_1.withEditLabelFeature;
    };
    return LabeledNode;
}(lib_1.RectangularNode));
exports.LabeledNode = LabeledNode;
var SEditableLabel = /** @class */ (function (_super) {
    __extends(SEditableLabel, _super);
    function SEditableLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SEditableLabel.prototype.hasFeature = function (feature) {
        return feature === lib_1.editLabelFeature || _super.prototype.hasFeature.call(this, feature);
    };
    return SEditableLabel;
}(lib_1.SLabel));
exports.SEditableLabel = SEditableLabel;
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.hasFeature = function (feature) {
        return feature === lib_1.boundsFeature || feature === lib_1.layoutContainerFeature || feature === lib_1.layoutableChildFeature || feature === lib_1.fadeFeature;
    };
    return Icon;
}(lib_1.SShapeElement));
exports.Icon = Icon;
var IconClass = /** @class */ (function (_super) {
    __extends(IconClass, _super);
    function IconClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EClass.svg";
        return _this;
    }
    return IconClass;
}(Icon));
exports.IconClass = IconClass;
var IconAbstract = /** @class */ (function (_super) {
    __extends(IconAbstract, _super);
    function IconAbstract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EClass_abstract.svg";
        return _this;
    }
    return IconAbstract;
}(Icon));
exports.IconAbstract = IconAbstract;
var IconInterface = /** @class */ (function (_super) {
    __extends(IconInterface, _super);
    function IconInterface() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EClass_interface.svg";
        return _this;
    }
    return IconInterface;
}(Icon));
exports.IconInterface = IconInterface;
var IconEnum = /** @class */ (function (_super) {
    __extends(IconEnum, _super);
    function IconEnum() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EEnum.svg";
        return _this;
    }
    return IconEnum;
}(Icon));
exports.IconEnum = IconEnum;
var IconDataType = /** @class */ (function (_super) {
    __extends(IconDataType, _super);
    function IconDataType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EDataType.svg";
        return _this;
    }
    return IconDataType;
}(Icon));
exports.IconDataType = IconDataType;
var SLabelNode = /** @class */ (function (_super) {
    __extends(SLabelNode, _super);
    function SLabelNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hoverFeedback = false;
        return _this;
    }
    SLabelNode.prototype.hasFeature = function (feature) {
        return (feature === lib_1.selectFeature || feature === lib_1.editLabelFeature || feature === lib_1.popupFeature || feature === lib_1.deletableFeature ||
            feature === lib_1.hoverFeedbackFeature || _super.prototype.hasFeature.call(this, feature));
    };
    return SLabelNode;
}(lib_1.SLabel));
exports.SLabelNode = SLabelNode;
var SLabelNodeAttribute = /** @class */ (function (_super) {
    __extends(SLabelNodeAttribute, _super);
    function SLabelNodeAttribute() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imageName = "EAttribute.svg";
        return _this;
    }
    return SLabelNodeAttribute;
}(SLabelNode));
exports.SLabelNodeAttribute = SLabelNodeAttribute;
var SLabelNodeLiteral = /** @class */ (function (_super) {
    __extends(SLabelNodeLiteral, _super);
    function SLabelNodeLiteral() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imageName = "EEnumLiteral.svg";
        return _this;
    }
    return SLabelNodeLiteral;
}(SLabelNode));
exports.SLabelNodeLiteral = SLabelNodeLiteral;
var ArrowEdge = /** @class */ (function (_super) {
    __extends(ArrowEdge, _super);
    function ArrowEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetAnchorCorrection = 3.3;
        return _this;
    }
    return ArrowEdge;
}(lib_1.SEdge));
exports.ArrowEdge = ArrowEdge;
var BidirectionalArrowEdge = /** @class */ (function (_super) {
    __extends(BidirectionalArrowEdge, _super);
    function BidirectionalArrowEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sourceAnchorCorrection = _this.targetAnchorCorrection;
        return _this;
    }
    return BidirectionalArrowEdge;
}(ArrowEdge));
exports.BidirectionalArrowEdge = BidirectionalArrowEdge;
var CompositionEdge = /** @class */ (function (_super) {
    __extends(CompositionEdge, _super);
    function CompositionEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sourceAnchorCorrection = 3.0;
        return _this;
    }
    return CompositionEdge;
}(lib_1.SEdge));
exports.CompositionEdge = CompositionEdge;
var InheritanceEdge = /** @class */ (function (_super) {
    __extends(InheritanceEdge, _super);
    function InheritanceEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetAnchorCorrection = 2.3;
        return _this;
    }
    return InheritanceEdge;
}(lib_1.SEdge));
exports.InheritanceEdge = InheritanceEdge;
//# sourceMappingURL=model.js.map