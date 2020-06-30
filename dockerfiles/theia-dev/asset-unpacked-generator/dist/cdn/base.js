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
class CheCdnSupport {
    constructor(info) {
        this.info = info;
        this.noCDN = false;
        CheCdnSupport.instance = this;
    }
    static register(context) {
        context[CheCdnSupport.className] = CheCdnSupport;
    }
    static webpackLoader(source) {
        if (source.match(/^module\.exports ?\= ?"data:/)) {
            return source;
        }
        const urlContent = source.replace(/^module\.exports ?\= ?([^;]+);$/, '$1');
        return `module.exports = window.${CheCdnSupport.className}.instance.resourceUrl(${urlContent});`;
    }
    buildScripts() {
        this.info.chunks.map((entry) => this.url(entry.cdn, entry.chunk))
            .forEach((url) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            script.defer = true;
            script.crossOrigin = 'anonymous';
            script.charset = 'utf-8';
            document.head.append(script);
        });
    }
    buildScriptsWithoutCdn() {
        this.noCDN = true;
        this.buildScripts();
    }
    url(withCDN, fallback) {
        let result = fallback;
        if (!this.noCDN && withCDN) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status >= 200 && this.status < 300 || this.status === 304) {
                    result = withCDN;
                }
            };
            try {
                request.open('HEAD', withCDN, false);
                request.send();
            }
            catch (err) {
                console.log(`Error trying to access the CDN artifact '${withCDN}' : ${err}`);
                this.noCDN = true;
            }
        }
        return result;
    }
    resourceUrl(path) {
        const cached = this.info.resources.find((entry) => entry.resource === path);
        if (cached) {
            return this.url(cached.cdn, cached.resource);
        }
        return path;
    }
    vsLoader(context) {
        const loaderURL = this.url(this.info.monaco.vsLoader.cdn, this.info.monaco.vsLoader.external);
        const request = new XMLHttpRequest();
        request.open('GET', loaderURL, false);
        request.send();
        new Function(request.responseText).call(context);
        if (this.info.monaco.vsLoader.cdn && loaderURL === this.info.monaco.vsLoader.cdn) {
            const pathsWithCdns = {};
            this.info.monaco.requirePaths
                .forEach((path) => {
                const jsFile = path.external + '.js';
                const jsCdnFile = path.cdn ? path.cdn + '.js' : undefined;
                if (this.url(jsCdnFile, jsFile) === jsCdnFile) {
                    pathsWithCdns[path.external] = path.cdn;
                }
            });
            context.require.config({
                paths: pathsWithCdns
            });
        }
    }
}
CheCdnSupport.className = 'CheCdnSupport';
exports.CheCdnSupport = CheCdnSupport;
//# sourceMappingURL=base.js.map