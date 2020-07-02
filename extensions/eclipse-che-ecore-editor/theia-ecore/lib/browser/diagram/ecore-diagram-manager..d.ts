import { GLSPDiagramManager, GLSPDiagramWidget, GLSPTheiaSprottyConnector, GLSPNotificationManager } from "@eclipse-glsp/theia-integration/lib/browser";
import { MessageService } from "@theia/core";
import { WidgetManager } from "@theia/core/lib/browser";
import { EditorManager } from "@theia/editor/lib/browser";
import { DiagramWidget, TheiaFileSaver } from "sprotty-theia";
import { EcoreGLSPDiagramClient } from "./ecore-glsp-diagram-client";
export declare class EcoreDiagramManager extends GLSPDiagramManager {
    readonly diagramType: string;
    readonly iconClass = "fa fa-project-diagram";
    readonly label: string;
    private _diagramConnector;
    createWidget(options?: any): Promise<DiagramWidget>;
    constructor(diagramClient: EcoreGLSPDiagramClient, fileSaver: TheiaFileSaver, widgetManager: WidgetManager, editorManager: EditorManager, messageService: MessageService, notificationManager: GLSPNotificationManager);
    readonly fileExtensions: string[];
    readonly diagramConnector: GLSPTheiaSprottyConnector;
}
export declare class EcoreDiagramWidget extends GLSPDiagramWidget {
    protected initializeSprotty(): void;
}
//# sourceMappingURL=ecore-diagram-manager..d.ts.map