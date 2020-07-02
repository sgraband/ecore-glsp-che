import { VNode } from "snabbdom/vnode";
import { IView, Point, PolylineEdgeView, RectangularNodeView, RenderingContext, SEdge, SLabelView } from "sprotty/lib";
import { Icon, LabeledNode, SLabelNode } from "./model";
export declare class ClassNodeView extends RectangularNodeView {
    render(node: LabeledNode, context: RenderingContext): VNode;
}
export declare class IconView implements IView {
    render(element: Icon, context: RenderingContext): VNode;
}
export declare class ArrowEdgeView extends PolylineEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
}
export declare class BidirectionalEdgeView extends ArrowEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
}
export declare class InheritanceEdgeView extends ArrowEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
}
declare abstract class DiamondEdgeView extends PolylineEdgeView {
    protected renderAdditionals(edge: SEdge, segments: Point[], context: RenderingContext): VNode[];
    protected isComposition(): boolean;
    protected isAggregation(): boolean;
}
export declare class CompositionEdgeView extends DiamondEdgeView {
    protected isComposition(): boolean;
}
export declare class AggregationEdgeView extends DiamondEdgeView {
    protected isAggregation(): boolean;
}
export declare class LabelNodeView extends SLabelView {
    render(labelNode: Readonly<SLabelNode>, context: RenderingContext): VNode;
}
export declare function angle(x0: Point, x1: Point): number;
export {};
//# sourceMappingURL=views.d.ts.map