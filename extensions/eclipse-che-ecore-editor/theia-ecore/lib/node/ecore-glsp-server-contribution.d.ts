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
import { BaseGLSPServerContribution } from "@eclipse-glsp/theia-integration/lib/node";
import { IConnection } from "@theia/languages/lib/node";
import { GLSPLaunchOptions } from "./glsp-server-launcher";
export declare class EcoreGLServerContribution extends BaseGLSPServerContribution {
    readonly id: string;
    readonly name: string;
    serverStarted: boolean;
    readonly description: {
        id: string;
        name: string;
        documentSelector: string[];
        fileEvents: string[];
    };
    protected readonly launchOptions: GLSPLaunchOptions;
    start(clientConnection: IConnection): void;
}
//# sourceMappingURL=ecore-glsp-server-contribution.d.ts.map