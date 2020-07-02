/// <reference types="node" />
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
import { ILogger } from "@theia/core";
import { BackendApplicationContribution } from "@theia/core/lib/node/backend-application";
import { RawProcessFactory } from "@theia/process/lib/node/raw-process";
import { Application } from "express";
import { FileGenServer } from "../common/generate-protocol";
export declare class EcoreFileGenServer implements FileGenServer, BackendApplicationContribution {
    protected readonly processFactory: RawProcessFactory;
    private readonly logger;
    constructor(processFactory: RawProcessFactory, logger: ILogger);
    generateEcore(name: string, prefix: string, uri: string, workspacePath: string): Promise<string>;
    onStop(app?: Application): void;
    dispose(): void;
    setClient(): void;
    private spawnProcess;
    protected onDidFailSpawnProcess(error: Error): void;
    protected logError(data: string | Buffer): void;
}
//# sourceMappingURL=ecore-file-generation.d.ts.map