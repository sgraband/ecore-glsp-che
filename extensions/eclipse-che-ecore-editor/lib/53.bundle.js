(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "../../node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!**************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ "../../node_modules/glsp-theia-extension/lib/browser/frontend-extension.js":
/*!************************************************************************************************************************************************!*\
  !*** /home/simon/Documents/Workspaces/EclipseSource/ecore-glsp-che/client/node_modules/glsp-theia-extension/lib/browser/frontend-extension.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (c) 2019 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @theia/core */ "../../node_modules/glsp-theia-extension/node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../node_modules/glsp-theia-extension/node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var glsp_theia_sprotty_connector_1 = __webpack_require__(/*! ./diagram/glsp-theia-sprotty-connector */ "../../node_modules/glsp-theia-extension/lib/browser/diagram/glsp-theia-sprotty-connector.js");
var glsp_client_1 = __webpack_require__(/*! ./language/glsp-client */ "../../node_modules/glsp-theia-extension/lib/browser/language/glsp-client.js");
var glsp_client_contribution_1 = __webpack_require__(/*! ./language/glsp-client-contribution */ "../../node_modules/glsp-theia-extension/lib/browser/language/glsp-client-contribution.js");
var glsp_client_provider_1 = __webpack_require__(/*! ./language/glsp-client-provider */ "../../node_modules/glsp-theia-extension/lib/browser/language/glsp-client-provider.js");
var glsp_frontend_contribution_1 = __webpack_require__(/*! ./language/glsp-frontend-contribution */ "../../node_modules/glsp-theia-extension/lib/browser/language/glsp-frontend-contribution.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(glsp_client_1.GLSPClientFactory).toSelf().inSingletonScope();
    core_1.bindContributionProvider(bind, glsp_client_contribution_1.GLSPClientContribution);
    bind(browser_1.FrontendApplicationContribution).to(glsp_frontend_contribution_1.GLSPFrontendContribution);
    bind(glsp_client_provider_1.GLSPClientProviderImpl).toSelf().inSingletonScope();
    bind(glsp_client_provider_1.GLSPClientProvider).toService(glsp_client_provider_1.GLSPClientProviderImpl);
    bind(glsp_theia_sprotty_connector_1.GLSPTheiaSprottyConnector).toSelf().inSingletonScope();
});


/***/ })

}]);
//# sourceMappingURL=53.bundle.js.map