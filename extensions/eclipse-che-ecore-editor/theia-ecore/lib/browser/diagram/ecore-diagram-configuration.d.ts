import { SelectionService } from "@theia/core";
import { Container } from "inversify";
import { DiagramConfiguration } from "sprotty-theia/lib";
export declare class EcoreDiagramConfiguration implements DiagramConfiguration {
    protected selectionService: SelectionService;
    diagramType: string;
    createContainer(widgetId: string): Container;
}
//# sourceMappingURL=ecore-diagram-configuration.d.ts.map