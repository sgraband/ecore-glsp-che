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
import { GLSPActionDispatcher } from "@eclipse-glsp/client/lib";
import { EditLabelUI, RequestAction, ResponseAction, SModelRoot } from "sprotty/lib";
export declare class AttributeTypesAction implements RequestAction<ReturnAttributeTypesAction> {
    readonly requestId: string;
    static readonly KIND = "getAttributeTypes";
    kind: string;
    constructor(requestId?: string);
}
export declare class ReturnAttributeTypesAction implements ResponseAction {
    readonly actions: string[];
    readonly responseId: string;
    static readonly KIND = "returnAttributeTypes";
    kind: string;
    types: string[];
    constructor(actions: string[], responseId?: string);
}
export declare class EditLabelUIAutocomplete extends EditLabelUI {
    protected actionDispatcher: GLSPActionDispatcher;
    protected showAutocomplete: boolean;
    protected outerDiv: HTMLElement;
    protected listContainer: HTMLElement;
    protected currentFocus: number;
    protected types: string[];
    constructor(actionDispatcher: GLSPActionDispatcher);
    protected initializeContents(containerElement: HTMLElement): void;
    protected configureAndAdd(element: HTMLElement, containerElement: HTMLElement): void;
    protected handleKeyDown(event: KeyboardEvent): void;
    protected validateLabelIfContentChange(event: KeyboardEvent, value: string): void;
    protected updateAutocomplete(event: KeyboardEvent): void;
    protected createAutocomplete(): void;
    protected addActive(): void;
    protected removeActive(): void;
    protected closeAllLists(): void;
    protected onBeforeShow(containerElement: HTMLElement, root: Readonly<SModelRoot>, ...contextElementIds: string[]): void;
    protected isAutoCompleteEnabled(): boolean;
    hide(): void;
}
//# sourceMappingURL=edit-label-autocomplete.d.ts.map