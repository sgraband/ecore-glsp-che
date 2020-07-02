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
import { RawProcess, RawProcessFactory } from "@theia/process/lib/node/raw-process";
import { Application } from "express";
import { inject, injectable } from "inversify";
import * as path from "path";

import { FileGenServer } from "../common/generate-protocol";

const os = require('os');

@injectable()
export class EcoreFileGenServer implements FileGenServer, BackendApplicationContribution {

    constructor(
        @inject(RawProcessFactory) protected readonly processFactory: RawProcessFactory,
        @inject(ILogger) private readonly logger: ILogger) { }

    generateEcore(name: string, prefix: string, uri: string, workspacePath: string): Promise<string> {
        const jarPath = path.resolve(__dirname, '..', '..',
            'server', 'ecore-backend-server-1.0-SNAPSHOT-jar-with-dependencies.jar');
        if (jarPath.length === 0) {
            throw new Error('The EcoreGeneration.jar is not found. ');
        }

        const command = 'java';
        const args: string[] = [];
        let platformWorkspacePath = workspacePath;
        if (os.platform() === 'win32') {
            platformWorkspacePath = workspacePath.substr(1);
        }

        args.push(
            '-jar', jarPath,
            '-name', name,
            '-prefix', prefix,
            '-uri', uri,
            '-workspacePath', platformWorkspacePath
        );

        return new Promise(resolve => {
            const process = this.spawnProcess(command, args);
            if (process === undefined || process.process === undefined || process === null || process.process === null) {
                resolve('Process not spawned');
                return;
            }

            process.process.on('exit', (code: any) => {
                switch (code) {
                    case 0: resolve('OK'); break;
                    case -10: resolve('Name Parameter missing'); break;
                    case -11: resolve('NsPrefix Parameter missing'); break;
                    case -12: resolve('NsURI Parameter missing'); break;
                    case -13: resolve('Workspace Path Parameter missing'); break;
                    case -20: resolve('Encoding not found, check Server Log!'); break;
                    case -30: resolve('IO Exception occurred, check Server Log!'); break;
                    default: resolve('UNKNOWN ERROR'); break;
                }
            });
        });
    }

    onStop(app?: Application): void {
        this.dispose();
    }

    dispose(): void {
        // do nothing
    }

    setClient(): void {
        // do nothing
    }

    private spawnProcess(command: string, args?: string[]): RawProcess | undefined {
        const rawProcess = this.processFactory({ command, args });
        if (rawProcess.process === undefined) {
            return undefined;
        }
        rawProcess.process.on('error', this.onDidFailSpawnProcess.bind(this));
        const stderr = rawProcess.process.stderr;
        if (stderr) {
            stderr.on('data', this.logError.bind(this));
        }
        return rawProcess;
    }

    protected onDidFailSpawnProcess(error: Error): void {
        this.logger.error(error);
    }

    protected logError(data: string | Buffer) {
        if (data) {
            this.logger.error(`Ecore Gen: ${data}`);
        }
    }

}
