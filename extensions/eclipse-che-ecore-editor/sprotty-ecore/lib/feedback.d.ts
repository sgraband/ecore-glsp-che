import { VNode } from "snabbdom/vnode";
import { IVNodePostprocessor, SModelElement } from "sprotty";
/**
 * A NodeDecorator to install visual feedback on selected NodeLabels
 */
export declare class LabelSelectionFeedback implements IVNodePostprocessor {
    decorate(vnode: VNode, element: SModelElement): VNode;
    postUpdate(): void;
}
//# sourceMappingURL=feedback.d.ts.map