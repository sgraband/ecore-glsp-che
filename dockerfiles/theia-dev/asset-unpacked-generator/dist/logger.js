"use strict";
/*********************************************************************
* Copyright (c) 2018 Red Hat, Inc.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Logger
 * @author Florent Benoit
 */
class Logger {
    /* tslint:disable:no-console */
    static debug(...args) {
        console.log.apply(console, args);
    }
    static info(...args) {
        console.info.apply(console, args);
    }
    static error(...args) {
        console.error.apply(console, args);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map