"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*********************************************************************
* Copyright (c) 2018 Red Hat, Inc.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
const fs = require("fs-extra");
const path = require("path");
/**
 * Generates a `cdn.json` file with the prefixes of CDN where Theia and Monaco files
 * should be retrieved from.
 *
 * @author David Festal
 */
class Cdn {
    constructor(assemblyFolder, theiaCDN, monacoCDN) {
        this.assemblyFolder = assemblyFolder;
        this.theiaCDN = theiaCDN;
        this.monacoCDN = monacoCDN;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs.writeFile(path.join(this.assemblyFolder, 'cdn.json'), JSON.stringify({
                theia: this.theiaCDN,
                monaco: this.monacoCDN
            }));
        });
    }
}
Cdn.defaultTheiaCdnPrefix = 'https://cdn.jsdelivr.net/gh/davidfestal/che-theia-cdn@latest/che-theia-editor/';
Cdn.defaultMonacoCdnPrefix = 'https://cdn.jsdelivr.net/npm/';
Cdn.argBuilder = (theYargs) => {
    return theYargs.option('theia', {
        describe: 'Base URL of the CDN that will host Theia files',
        requiresArg: true,
        type: 'string',
        default: Cdn.defaultTheiaCdnPrefix,
        defaultDescription: Cdn.defaultTheiaCdnPrefix
    }).option('monaco', {
        describe: 'Base URL of the CDN that will host Monaco Editor files',
        requiresArg: true,
        type: 'string',
        default: Cdn.defaultMonacoCdnPrefix,
        defaultDescription: Cdn.defaultMonacoCdnPrefix
    });
};
exports.Cdn = Cdn;
//# sourceMappingURL=cdn.js.map