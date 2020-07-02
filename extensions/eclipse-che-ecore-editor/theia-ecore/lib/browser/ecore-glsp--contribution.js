"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var browser_1 = require("@eclipse-glsp/theia-integration/lib/browser");
var inversify_1 = require("inversify");
var ecore_language_1 = require("../common/ecore-language");
var EcoreGLSPClientContribution = /** @class */ (function (_super) {
    __extends(EcoreGLSPClientContribution, _super);
    function EcoreGLSPClientContribution() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fileExtensions = [ecore_language_1.EcoreLanguage.FileExtension];
        _this.id = ecore_language_1.EcoreLanguage.Id;
        _this.name = ecore_language_1.EcoreLanguage.Name;
        return _this;
    }
    EcoreGLSPClientContribution = __decorate([
        inversify_1.injectable()
    ], EcoreGLSPClientContribution);
    return EcoreGLSPClientContribution;
}(browser_1.BaseGLSPClientContribution));
exports.EcoreGLSPClientContribution = EcoreGLSPClientContribution;
//# sourceMappingURL=ecore-glsp--contribution.js.map