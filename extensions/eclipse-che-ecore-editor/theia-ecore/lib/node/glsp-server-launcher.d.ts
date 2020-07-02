/// <reference types="node" />
import { BackendApplicationContribution } from '@theia/core/lib/node';
import { ProcessErrorEvent } from '@theia/process/lib/node/process';
import { ProcessManager } from '@theia/process/lib/node/process-manager';
import { RawProcess, RawProcessFactory } from '@theia/process/lib/node/raw-process';
import * as cp from 'child_process';
export declare const GLSPLaunchOptionsSymb: unique symbol;
export interface GLSPLaunchOptions {
    isRunning: boolean;
    serverPort: number;
    hostname: string;
    jarPath?: string;
    additionalArgs?: string[];
}
export declare class GLSPServerLauncher implements BackendApplicationContribution {
    protected readonly launchOptions: GLSPLaunchOptions;
    protected readonly processFactory: RawProcessFactory;
    protected readonly processManager: ProcessManager;
    private readonly logger;
    initialize(): void;
    start(): boolean;
    protected startServer(): boolean;
    protected spawnProcessAsync(command: string, args?: string[], options?: cp.SpawnOptions): Promise<RawProcess>;
    protected onDidFailSpawnProcess(error: Error | ProcessErrorEvent): void;
    protected logError(data: string | Buffer): void;
    protected logInfo(data: string | Buffer): void;
}
//# sourceMappingURL=glsp-server-launcher.d.ts.map