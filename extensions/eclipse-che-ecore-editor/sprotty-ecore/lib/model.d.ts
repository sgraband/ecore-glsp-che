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
import { EditableLabel, Nameable, RectangularNode, SLabel, SShapeElement, WithEditableLabel, SEdge } from "sprotty/lib";
export declare class LabeledNode extends RectangularNode implements WithEditableLabel, Nameable {
    readonly editableLabel: (import("sprotty").SChildElement & EditableLabel) | undefined;
    readonly name: string;
    hasFeature(feature: symbol): boolean;
}
export declare class SEditableLabel extends SLabel implements EditableLabel {
    hasFeature(feature: symbol): boolean;
}
export declare class Icon extends SShapeElement {
    iconImageName: string;
    hasFeature(feature: symbol): boolean;
}
export declare class IconClass extends Icon {
    iconImageName: string;
}
export declare class IconAbstract extends Icon {
    iconImageName: string;
}
export declare class IconInterface extends Icon {
    iconImageName: string;
}
export declare class IconEnum extends Icon {
    iconImageName: string;
}
export declare class IconDataType extends Icon {
    iconImageName: string;
}
export declare class SLabelNode extends SLabel implements EditableLabel {
    hoverFeedback: boolean;
    imageName: string;
    hasFeature(feature: symbol): boolean;
}
export declare class SLabelNodeAttribute extends SLabelNode {
    imageName: string;
}
export declare class SLabelNodeLiteral extends SLabelNode {
    imageName: string;
}
export declare class ArrowEdge extends SEdge {
    readonly targetAnchorCorrection = 3.3;
}
export declare class BidirectionalArrowEdge extends ArrowEdge {
    readonly sourceAnchorCorrection = 3.3;
}
export declare class CompositionEdge extends SEdge {
    readonly sourceAnchorCorrection = 3;
}
export declare class InheritanceEdge extends SEdge {
    readonly targetAnchorCorrection = 2.3;
}
//# sourceMappingURL=model.d.ts.map