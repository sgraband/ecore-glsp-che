/*********************************************************************
* Copyright (c) 2018 Red Hat, Inc.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mock of the Yarn class.
 */
class Yarn {
    constructor() {
    }
    // mock any exec command by providing the output
    static __setDependencies(rootModule, dependencies) {
        Yarn.dependenciesMap.set(rootModule, dependencies);
    }
    getDependencies(rootModule) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = Yarn.dependenciesMap.get(rootModule);
            if (result) {
                return Promise.resolve(result);
            }
            else {
                return Promise.resolve([]);
            }
        });
    }
}
/**
 * Map between the name of the root Moduleand the output.
 */
Yarn.dependenciesMap = new Map();
exports.Yarn = Yarn;
//# sourceMappingURL=yarn.js.map