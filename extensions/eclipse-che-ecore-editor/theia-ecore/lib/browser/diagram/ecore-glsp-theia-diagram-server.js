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
var browser_1 = require("@eclipse-glsp/theia-integration/lib/browser");
var inversify_1 = require("inversify");
var edit_label_autocomplete_1 = require("sprotty-ecore/lib/features/edit-label-autocomplete");
var EcoreGLSPTheiaDiagramServer = /** @class */ (function (_super) {
    __extends(EcoreGLSPTheiaDiagramServer, _super);
    function EcoreGLSPTheiaDiagramServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EcoreGLSPTheiaDiagramServer.prototype.initialize = function (registry) {
        _super.prototype.initialize.call(this, registry);
        registry.register(edit_label_autocomplete_1.AttributeTypesAction.KIND, this);
        registry.register(edit_label_autocomplete_1.ReturnAttributeTypesAction.KIND, this);
    };
    EcoreGLSPTheiaDiagramServer = __decorate([
        inversify_1.injectable()
    ], EcoreGLSPTheiaDiagramServer);
    return EcoreGLSPTheiaDiagramServer;
}(browser_1.GLSPTheiaDiagramServer));
exports.EcoreGLSPTheiaDiagramServer = EcoreGLSPTheiaDiagramServer;
//# sourceMappingURL=ecore-glsp-theia-diagram-server.js.map