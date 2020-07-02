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
import { FrontendApplication, OpenerService, QuickOpenService } from "@theia/core/lib/browser";
import { Command, CommandContribution, CommandRegistry } from "@theia/core/lib/common/command";
import { MessageService } from "@theia/core/lib/common/message-service";
import { ProgressService } from "@theia/core/lib/common/progress-service";
import { SelectionService } from "@theia/core/lib/common/selection-service";
import URI from "@theia/core/lib/common/uri";
import { UriAwareCommandHandler, UriCommandHandler } from "@theia/core/lib/common/uri-command-handler";
import { FileDialogService } from "@theia/filesystem/lib/browser";
import { FileStat, FileSystem } from "@theia/filesystem/lib/common/filesystem";
import { WorkspaceService } from "@theia/workspace/lib/browser";
export declare const EXAMPLE_NAVIGATOR: string[];
export declare const EXAMPLE_EDITOR: string[];
export declare const NEW_ECORE_FILE: Command;
export declare class EcoreCommandContribution implements CommandContribution {
    protected readonly fileSystem: FileSystem;
    protected readonly selectionService: SelectionService;
    protected readonly openerService: OpenerService;
    protected readonly app: FrontendApplication;
    protected readonly messageService: MessageService;
    protected readonly fileDialogService: FileDialogService;
    protected readonly workspaceService: WorkspaceService;
    protected readonly progressService: ProgressService;
    protected readonly quickOpenService: QuickOpenService;
    private readonly fileGenServer;
    registerCommands(registry: CommandRegistry): void;
    protected withProgress<T>(task: () => Promise<T>): Promise<T>;
    protected newUriAwareCommandHandler(handler: UriCommandHandler<URI>): UriAwareCommandHandler<URI>;
    protected newMultiUriAwareCommandHandler(handler: UriCommandHandler<URI[]>): UriAwareCommandHandler<URI[]>;
    protected newWorkspaceRootUriAwareCommandHandler(handler: UriCommandHandler<URI>): WorkspaceRootUriAwareCommandHandler;
    protected getDirectory(candidate: URI): Promise<FileStat | undefined>;
    protected getParent(candidate: URI): Promise<FileStat | undefined>;
    private getOptions;
}
export declare class WorkspaceRootUriAwareCommandHandler extends UriAwareCommandHandler<URI> {
    protected readonly workspaceService: WorkspaceService;
    protected readonly selectionService: SelectionService;
    protected readonly handler: UriCommandHandler<URI>;
    constructor(workspaceService: WorkspaceService, selectionService: SelectionService, handler: UriCommandHandler<URI>);
    isEnabled(...args: any[]): boolean;
    isVisible(...args: any[]): boolean;
    protected getUri(...args: any[]): URI | undefined;
}
//# sourceMappingURL=EcoreCommandContribution.d.ts.map