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
const webpack_customizer_1 = require("./webpack-customizer");
const yargs = require('yargs');
const { env: { cdn, monacopkg, monacohtmlcontribpkg, monacocsscontribpkg } } = yargs.option('env.cdn', {
    description: `The path of a JSON file that contains CDN settings.
    The file syntax is the following:
    {
      theia: 'Base URL of the CDN that will host Theia files',
      monaco: 'Base URL of the CDN that will host Monaco Editor files'
    }`,
    type: 'string',
    default: ''
}).option('env.monacopkg', {
    description: 'The NPM identifier (with version) of Monaco editor core package',
    type: 'string',
    default: ''
}).option('env.monacohtmlcontribpkg', {
    description: 'The NPM identifier (with version) of Monaco editor Html contribution package',
    type: 'string',
    default: ''
}).option('env.monacocsscontribpkg', {
    description: 'The NPM identifier (with version) of Monaco editor Css contribution package',
    type: 'string',
    default: ''
}).argv;
// Retrieve the default, generated, Theia Webpack configuration
const baseConfig = require('../webpack.config');
webpack_customizer_1.customizeWebpackConfig(cdn, monacopkg, monacohtmlcontribpkg, monacocsscontribpkg, baseConfig);
// Export the customized webpack configuration object
module.exports = baseConfig;
//# sourceMappingURL=webpack.config.js.map