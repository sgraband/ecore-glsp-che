(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "../node_modules/css-loader/index.js!../sprotty-ecore/css/diagram.css":
/*!*******************************************************************!*\
  !*** ../node_modules/css-loader!../sprotty-ecore/css/diagram.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n    --sprotty-background: var(--theia-layout-color3);\n    --sprotty-edge: var(--theia-editor-foreground);\n    --sprotty-border: var(--theia-editor-foreground);\n}\n\nsvg {\n    width: 100%;\n    height: 500px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: var(--sprotty-border);\n}\n\n.label-edit input {\n    background: rgba(255, 255, 255, 0.5);\n    color: black;\n}\n\n.sprotty {\n    height: 100%;\n}\n\n.sprotty-graph {\n    font-size: 15pt;\n    height: 100%;\n    background: var(--sprotty-background);\n}\n\n.sprotty-graph .sprotty-node {\n    fill: inherit;\n}\n\n.ecore-node {\n    fill: #fffcdf;\n    stroke: var(--sprotty-border);\n    stroke-width: 1;\n    font-weight: bold;\n    filter: url(#dropShadow);\n}\n\n.sprotty-node.selected {\n    stroke-width: 5;\n}\n\n.sprotty-node.mouseover:not(.selected) {\n    stroke-width: 3;\n}\n\n.sprotty-label-node.selected {\n    fill: #000;\n    font-weight: normal;\n    stroke-width: 0;\n    width: inherit;\n}\n\n.sprotty-label-node>.sprotty-label {\n    dominant-baseline: middle;\n}\n\n.sprotty-label-node>.selection-feedback {\n    fill: transparent;\n    stroke: transparent;\n}\n\n.sprotty-label-node.selected>.selection-feedback {\n    stroke: black;\n    stroke-width: 1px;\n}\n\n.sprotty-label-node.mouseover:not(.selected) {\n    fill: #595959;\n    text-decoration: underline;\n}\n\n.sprotty-comp {\n    line-height: 3px;\n    font-weight: normal;\n    text-align: left;\n    stroke: var(--sprotty-border);\n    stroke-width: 2px;\n}\n\n.sprotty-label {\n    stroke-width: 0;\n    width: inherit;\n    fill: #000;\n    font-weight: inherit;\n    font-size: 100%;\n}\n\n.sprotty-label.heading {\n    font-weight: bold;\n}\n\n.sprotty-icon {\n    stroke-width: 0;\n}\n\n.sprotty-label.icon {\n    fill: black;\n}\n\n.sprotty-button {\n    fill: #152;\n    stroke-width: 0;\n}\n\n.ecore-edge {\n    fill: none;\n    stroke: var(--sprotty-edge);\n    stroke-width: 2px;\n}\n\n.ecore-edge>.sprotty-label {\n    stroke-width: 0;\n    width: inherit;\n    fill: var(--sprotty-edge);\n    font-weight: inherit;\n    font-size: 100%;\n}\n\n.feedback-edge {\n    stroke-width: 2px;\n    stroke: black;\n    fill: none;\n}\n\n.ecore-edge.mouseover:not(.selected) {\n    stroke-width: 3px;\n}\n\n.ecore-edge>.sprotty-routing-handle {\n    r: 7px;\n    fill: #884;\n    stroke: none;\n    z-index: 1000;\n}\n\n.ecore-edge>.sprotty-routing-handle[data-kind='line'] {\n    opacity: 0.35;\n}\n\n.ecore-edge>.sprotty-routing-handle.selected {\n    fill: #66a;\n}\n\n.ecore-edge>.sprotty-routing-handle.mouseover {\n    stroke: #112;\n    stroke-width: 1;\n}\n\n.sprotty-missing {\n    stroke-width: 1;\n    stroke: #f00;\n    fill: #f00;\n    font-size: 14pt;\n    text-anchor: middle;\n}\n\n.sprotty-popup-title {\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n.sprotty-popup-body>p {\n    margin-bottom: 2px;\n}\n\n.ecore-edge>.triangle.inheritance {\n    fill: white;\n}\n\n.ecore-edge.aggregation .ecore-edge.composition {\n    stroke: var(--sprotty-edge);\n}\n\n.ecore-edge>.diamond.aggregation {\n    fill: var(--sprotty-background);\n}\n\n.ecore-edge>.diamond.composition {\n    fill: var(--sprotty-edge);\n}\n\n.ecore-edge.selected {\n    stroke: #844;\n    stroke-width: 4px;\n}\n\n.ecore-node.abstract {\n    fill: #ededed;\n}\n\n.ecore-node.enum {\n    fill: #fffcdf;\n}\n\n.italic {\n    font-style: italic;\n}\n\n.autocomplete {\n    position: relative;\n    display: inline-block;\n  }\n.autocomplete-items {\n    position: absolute;\n    border: 1px solid #d4d4d4;\n    color: black;\n    border-bottom: none;\n    border-top: none;\n    z-index: 99;\n    top: 100%;\n    left: 0;\n    right: 0;\n    overflow-y: scroll;\n  }\n  .autocomplete-items div {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff;\n    border-bottom: 1px solid #d4d4d4;\n  }\n  .autocomplete-items div:hover {\n    background-color: #e9e9e9;\n  }\n  .autocomplete-active {\n    background-color: DodgerBlue !important;\n    color: #ffffff;\n  }\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../node_modules/moment/locale/af.js",
	"./af.js": "../node_modules/moment/locale/af.js",
	"./ar": "../node_modules/moment/locale/ar.js",
	"./ar-dz": "../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../node_modules/moment/locale/ar.js",
	"./az": "../node_modules/moment/locale/az.js",
	"./az.js": "../node_modules/moment/locale/az.js",
	"./be": "../node_modules/moment/locale/be.js",
	"./be.js": "../node_modules/moment/locale/be.js",
	"./bg": "../node_modules/moment/locale/bg.js",
	"./bg.js": "../node_modules/moment/locale/bg.js",
	"./bm": "../node_modules/moment/locale/bm.js",
	"./bm.js": "../node_modules/moment/locale/bm.js",
	"./bn": "../node_modules/moment/locale/bn.js",
	"./bn.js": "../node_modules/moment/locale/bn.js",
	"./bo": "../node_modules/moment/locale/bo.js",
	"./bo.js": "../node_modules/moment/locale/bo.js",
	"./br": "../node_modules/moment/locale/br.js",
	"./br.js": "../node_modules/moment/locale/br.js",
	"./bs": "../node_modules/moment/locale/bs.js",
	"./bs.js": "../node_modules/moment/locale/bs.js",
	"./ca": "../node_modules/moment/locale/ca.js",
	"./ca.js": "../node_modules/moment/locale/ca.js",
	"./cs": "../node_modules/moment/locale/cs.js",
	"./cs.js": "../node_modules/moment/locale/cs.js",
	"./cv": "../node_modules/moment/locale/cv.js",
	"./cv.js": "../node_modules/moment/locale/cv.js",
	"./cy": "../node_modules/moment/locale/cy.js",
	"./cy.js": "../node_modules/moment/locale/cy.js",
	"./da": "../node_modules/moment/locale/da.js",
	"./da.js": "../node_modules/moment/locale/da.js",
	"./de": "../node_modules/moment/locale/de.js",
	"./de-at": "../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../node_modules/moment/locale/de-at.js",
	"./de-ch": "../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../node_modules/moment/locale/de-ch.js",
	"./de.js": "../node_modules/moment/locale/de.js",
	"./dv": "../node_modules/moment/locale/dv.js",
	"./dv.js": "../node_modules/moment/locale/dv.js",
	"./el": "../node_modules/moment/locale/el.js",
	"./el.js": "../node_modules/moment/locale/el.js",
	"./en-SG": "../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../node_modules/moment/locale/en-SG.js",
	"./en-au": "../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../node_modules/moment/locale/en-au.js",
	"./en-ca": "../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../node_modules/moment/locale/en-ie.js",
	"./en-il": "../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../node_modules/moment/locale/en-il.js",
	"./en-nz": "../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../node_modules/moment/locale/en-nz.js",
	"./eo": "../node_modules/moment/locale/eo.js",
	"./eo.js": "../node_modules/moment/locale/eo.js",
	"./es": "../node_modules/moment/locale/es.js",
	"./es-do": "../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../node_modules/moment/locale/es-do.js",
	"./es-us": "../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../node_modules/moment/locale/es-us.js",
	"./es.js": "../node_modules/moment/locale/es.js",
	"./et": "../node_modules/moment/locale/et.js",
	"./et.js": "../node_modules/moment/locale/et.js",
	"./eu": "../node_modules/moment/locale/eu.js",
	"./eu.js": "../node_modules/moment/locale/eu.js",
	"./fa": "../node_modules/moment/locale/fa.js",
	"./fa.js": "../node_modules/moment/locale/fa.js",
	"./fi": "../node_modules/moment/locale/fi.js",
	"./fi.js": "../node_modules/moment/locale/fi.js",
	"./fo": "../node_modules/moment/locale/fo.js",
	"./fo.js": "../node_modules/moment/locale/fo.js",
	"./fr": "../node_modules/moment/locale/fr.js",
	"./fr-ca": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../node_modules/moment/locale/fr.js",
	"./fy": "../node_modules/moment/locale/fy.js",
	"./fy.js": "../node_modules/moment/locale/fy.js",
	"./ga": "../node_modules/moment/locale/ga.js",
	"./ga.js": "../node_modules/moment/locale/ga.js",
	"./gd": "../node_modules/moment/locale/gd.js",
	"./gd.js": "../node_modules/moment/locale/gd.js",
	"./gl": "../node_modules/moment/locale/gl.js",
	"./gl.js": "../node_modules/moment/locale/gl.js",
	"./gom-latn": "../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../node_modules/moment/locale/gom-latn.js",
	"./gu": "../node_modules/moment/locale/gu.js",
	"./gu.js": "../node_modules/moment/locale/gu.js",
	"./he": "../node_modules/moment/locale/he.js",
	"./he.js": "../node_modules/moment/locale/he.js",
	"./hi": "../node_modules/moment/locale/hi.js",
	"./hi.js": "../node_modules/moment/locale/hi.js",
	"./hr": "../node_modules/moment/locale/hr.js",
	"./hr.js": "../node_modules/moment/locale/hr.js",
	"./hu": "../node_modules/moment/locale/hu.js",
	"./hu.js": "../node_modules/moment/locale/hu.js",
	"./hy-am": "../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../node_modules/moment/locale/hy-am.js",
	"./id": "../node_modules/moment/locale/id.js",
	"./id.js": "../node_modules/moment/locale/id.js",
	"./is": "../node_modules/moment/locale/is.js",
	"./is.js": "../node_modules/moment/locale/is.js",
	"./it": "../node_modules/moment/locale/it.js",
	"./it-ch": "../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../node_modules/moment/locale/it-ch.js",
	"./it.js": "../node_modules/moment/locale/it.js",
	"./ja": "../node_modules/moment/locale/ja.js",
	"./ja.js": "../node_modules/moment/locale/ja.js",
	"./jv": "../node_modules/moment/locale/jv.js",
	"./jv.js": "../node_modules/moment/locale/jv.js",
	"./ka": "../node_modules/moment/locale/ka.js",
	"./ka.js": "../node_modules/moment/locale/ka.js",
	"./kk": "../node_modules/moment/locale/kk.js",
	"./kk.js": "../node_modules/moment/locale/kk.js",
	"./km": "../node_modules/moment/locale/km.js",
	"./km.js": "../node_modules/moment/locale/km.js",
	"./kn": "../node_modules/moment/locale/kn.js",
	"./kn.js": "../node_modules/moment/locale/kn.js",
	"./ko": "../node_modules/moment/locale/ko.js",
	"./ko.js": "../node_modules/moment/locale/ko.js",
	"./ku": "../node_modules/moment/locale/ku.js",
	"./ku.js": "../node_modules/moment/locale/ku.js",
	"./ky": "../node_modules/moment/locale/ky.js",
	"./ky.js": "../node_modules/moment/locale/ky.js",
	"./lb": "../node_modules/moment/locale/lb.js",
	"./lb.js": "../node_modules/moment/locale/lb.js",
	"./lo": "../node_modules/moment/locale/lo.js",
	"./lo.js": "../node_modules/moment/locale/lo.js",
	"./lt": "../node_modules/moment/locale/lt.js",
	"./lt.js": "../node_modules/moment/locale/lt.js",
	"./lv": "../node_modules/moment/locale/lv.js",
	"./lv.js": "../node_modules/moment/locale/lv.js",
	"./me": "../node_modules/moment/locale/me.js",
	"./me.js": "../node_modules/moment/locale/me.js",
	"./mi": "../node_modules/moment/locale/mi.js",
	"./mi.js": "../node_modules/moment/locale/mi.js",
	"./mk": "../node_modules/moment/locale/mk.js",
	"./mk.js": "../node_modules/moment/locale/mk.js",
	"./ml": "../node_modules/moment/locale/ml.js",
	"./ml.js": "../node_modules/moment/locale/ml.js",
	"./mn": "../node_modules/moment/locale/mn.js",
	"./mn.js": "../node_modules/moment/locale/mn.js",
	"./mr": "../node_modules/moment/locale/mr.js",
	"./mr.js": "../node_modules/moment/locale/mr.js",
	"./ms": "../node_modules/moment/locale/ms.js",
	"./ms-my": "../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../node_modules/moment/locale/ms.js",
	"./mt": "../node_modules/moment/locale/mt.js",
	"./mt.js": "../node_modules/moment/locale/mt.js",
	"./my": "../node_modules/moment/locale/my.js",
	"./my.js": "../node_modules/moment/locale/my.js",
	"./nb": "../node_modules/moment/locale/nb.js",
	"./nb.js": "../node_modules/moment/locale/nb.js",
	"./ne": "../node_modules/moment/locale/ne.js",
	"./ne.js": "../node_modules/moment/locale/ne.js",
	"./nl": "../node_modules/moment/locale/nl.js",
	"./nl-be": "../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../node_modules/moment/locale/nl.js",
	"./nn": "../node_modules/moment/locale/nn.js",
	"./nn.js": "../node_modules/moment/locale/nn.js",
	"./pa-in": "../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../node_modules/moment/locale/pa-in.js",
	"./pl": "../node_modules/moment/locale/pl.js",
	"./pl.js": "../node_modules/moment/locale/pl.js",
	"./pt": "../node_modules/moment/locale/pt.js",
	"./pt-br": "../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../node_modules/moment/locale/pt.js",
	"./ro": "../node_modules/moment/locale/ro.js",
	"./ro.js": "../node_modules/moment/locale/ro.js",
	"./ru": "../node_modules/moment/locale/ru.js",
	"./ru.js": "../node_modules/moment/locale/ru.js",
	"./sd": "../node_modules/moment/locale/sd.js",
	"./sd.js": "../node_modules/moment/locale/sd.js",
	"./se": "../node_modules/moment/locale/se.js",
	"./se.js": "../node_modules/moment/locale/se.js",
	"./si": "../node_modules/moment/locale/si.js",
	"./si.js": "../node_modules/moment/locale/si.js",
	"./sk": "../node_modules/moment/locale/sk.js",
	"./sk.js": "../node_modules/moment/locale/sk.js",
	"./sl": "../node_modules/moment/locale/sl.js",
	"./sl.js": "../node_modules/moment/locale/sl.js",
	"./sq": "../node_modules/moment/locale/sq.js",
	"./sq.js": "../node_modules/moment/locale/sq.js",
	"./sr": "../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../node_modules/moment/locale/sr.js",
	"./ss": "../node_modules/moment/locale/ss.js",
	"./ss.js": "../node_modules/moment/locale/ss.js",
	"./sv": "../node_modules/moment/locale/sv.js",
	"./sv.js": "../node_modules/moment/locale/sv.js",
	"./sw": "../node_modules/moment/locale/sw.js",
	"./sw.js": "../node_modules/moment/locale/sw.js",
	"./ta": "../node_modules/moment/locale/ta.js",
	"./ta.js": "../node_modules/moment/locale/ta.js",
	"./te": "../node_modules/moment/locale/te.js",
	"./te.js": "../node_modules/moment/locale/te.js",
	"./tet": "../node_modules/moment/locale/tet.js",
	"./tet.js": "../node_modules/moment/locale/tet.js",
	"./tg": "../node_modules/moment/locale/tg.js",
	"./tg.js": "../node_modules/moment/locale/tg.js",
	"./th": "../node_modules/moment/locale/th.js",
	"./th.js": "../node_modules/moment/locale/th.js",
	"./tl-ph": "../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../node_modules/moment/locale/tlh.js",
	"./tr": "../node_modules/moment/locale/tr.js",
	"./tr.js": "../node_modules/moment/locale/tr.js",
	"./tzl": "../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../node_modules/moment/locale/tzl.js",
	"./tzm": "../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../node_modules/moment/locale/ug-cn.js",
	"./uk": "../node_modules/moment/locale/uk.js",
	"./uk.js": "../node_modules/moment/locale/uk.js",
	"./ur": "../node_modules/moment/locale/ur.js",
	"./ur.js": "../node_modules/moment/locale/ur.js",
	"./uz": "../node_modules/moment/locale/uz.js",
	"./uz-latn": "../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../node_modules/moment/locale/uz.js",
	"./vi": "../node_modules/moment/locale/vi.js",
	"./vi.js": "../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../node_modules/moment/locale/yo.js",
	"./yo.js": "../node_modules/moment/locale/yo.js",
	"./zh-cn": "../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../sprotty-ecore/css/diagram.css":
/*!****************************************!*\
  !*** ../sprotty-ecore/css/diagram.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./diagram.css */ "../node_modules/css-loader/index.js!../sprotty-ecore/css/diagram.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../sprotty-ecore/images sync recursive ^\\.\\/.*$":
/*!*********************************************!*\
  !*** ../sprotty-ecore/images sync ^\.\/.*$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./EAttribute.svg": "../sprotty-ecore/images/EAttribute.svg",
	"./EClass.svg": "../sprotty-ecore/images/EClass.svg",
	"./EClass_abstract.svg": "../sprotty-ecore/images/EClass_abstract.svg",
	"./EClass_interface.svg": "../sprotty-ecore/images/EClass_interface.svg",
	"./EDataType.svg": "../sprotty-ecore/images/EDataType.svg",
	"./EEnum.svg": "../sprotty-ecore/images/EEnum.svg",
	"./EEnumLiteral.svg": "../sprotty-ecore/images/EEnumLiteral.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../sprotty-ecore/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../sprotty-ecore/images/EAttribute.svg":
/*!**********************************************!*\
  !*** ../sprotty-ecore/images/EAttribute.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjExLjc2NW1tIgogICBoZWlnaHQ9IjYuNTJtbSIKICAgdmlld0JveD0iMCAwIDExLjc2NTAwMSA2LjUyMDAwMDUiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkVBdHRyaWJ1dGUuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiI+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQ2ODciPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojOWQ3YzJmO3N0b3Atb3BhY2l0eToxOyIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBpZD0ic3RvcDQ2ODMiIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIGlkPSJzdG9wNDY5NyIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojNmE2MjNmO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMDA3YzJmO3N0b3Atb3BhY2l0eTowIgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIGlkPSJzdG9wNDY4NSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDQ2ODciCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0Njk1IgogICAgICAgeDE9IjY2LjM1ODUyMSIKICAgICAgIHkxPSIxMjguMzA0NDMiCiAgICAgICB4Mj0iNjYuMzU4NTIxIgogICAgICAgeTI9IjEzNC45ODk4NyIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtNjEuNDIxMjA0LDE2Mi4xNTE5MSkiIC8+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI1LjYiCiAgICAgaW5rc2NhcGU6Y3g9IjI0LjU4MzUwNiIKICAgICBpbmtzY2FwZTpjeT0iNi41NjcyNzQ3IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIHVuaXRzPSJtbSIKICAgICBzaG93Z3VpZGVzPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMTkxMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yOTAuNDgpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NDY5NSk7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjAuMjk0MzMwNDUiCiAgICAgICBkPSJNIDAsMjkwLjQ3OTk5IFYgMjk3IGggMTEuNzY0NjU4IHYgLTYuNTIwMDEgeiBtIDEuMzIyOTE3LDEuMjUyMTIgaCA5LjE0MjA3OSB2IDMuOTY4NzUgSCAxLjMyMjkxNyBaIgogICAgICAgaWQ9InJlY3QzNzI0IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "../sprotty-ecore/images/EClass.svg":
/*!******************************************!*\
  !*** ../sprotty-ecore/images/EClass.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjExLjc2NW1tIgogICBoZWlnaHQ9IjE3LjAyNW1tIgogICB2aWV3Qm94PSIwIDAgMTEuNzY1MDAxIDE3LjAyNTAwMSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnOCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iRUNsYXNzLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0Njg3Ij4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzlkN2MyZjtzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3A0NjgzIiAvPgogICAgICA8c3RvcAogICAgICAgICBpZD0ic3RvcDQ2OTciCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzZhNjIzZjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwN2MyZjtzdG9wLW9wYWNpdHk6MCIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBpZD0ic3RvcDQ2ODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0Njg3IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDY5NSIKICAgICAgIHgxPSI2Ni4zNTg1MjEiCiAgICAgICB5MT0iMTI4LjMwNDQzIgogICAgICAgeDI9IjY2LjM1ODUyMSIKICAgICAgIHkyPSIxMzQuOTg5ODciCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYxLjQyMTIwNCwxNjIuMTUxOTEpIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNS42NTY4NTQzIgogICAgIGlua3NjYXBlOmN4PSItMTMuODI4OTE1IgogICAgIGlua3NjYXBlOmN5PSIxNi40NDAxNTMiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgdW5pdHM9Im1tIgogICAgIHNob3dndWlkZXM9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDA0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItMTYiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii0xNiIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI3OS45NzUpIj4KICAgIDxnCiAgICAgICBpZD0iZzE0NDQiPgogICAgICA8cmVjdAogICAgICAgICB5PSItNS4yNzg3NjI4IgogICAgICAgICB4PSIxLjE5ODg5MzMiCiAgICAgICAgIGhlaWdodD0iMS4yODgzNjI5IgogICAgICAgICB3aWR0aD0iOS4zOTAxMjYyIgogICAgICAgICBpZD0icmVjdDQ2MDUiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNhMDk4NmM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjAuMTE5ODYwNDkiCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMjkwLjQ4KSIgLz4KICAgICAgPHJlY3QKICAgICAgICAgeT0iLTAuMDIxNjUiCiAgICAgICAgIHg9IjEuMjA3MTYxNyIKICAgICAgICAgaGVpZ2h0PSIxLjI4ODM2MjkiCiAgICAgICAgIHdpZHRoPSI5LjM5MDEyNjIiCiAgICAgICAgIGlkPSJyZWN0NDYwNS00IgogICAgICAgICBzdHlsZT0iZmlsbDojODI4NTgxO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZS13aWR0aDowLjExOTg2MDQ5IgogICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI5MC40OCkiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjYyIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InJlY3QzNzI0IgogICAgICAgICBkPSJNIDAsMjc5Ljk3NTIgViAyOTcgaCAxMS43NjQ2NTggdiAtMTcuMDI0OCB6IG0gMS4zMjI5MTcsMS4yNTIxMiBoIDkuMTQyMDc5IHYgMTQuNDczNTQgSCAxLjMyMjkxNyBaIgogICAgICAgICBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NDY5NSk7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjAuMjk0MzMwNDUiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "../sprotty-ecore/images/EClass_abstract.svg":
/*!***************************************************!*\
  !*** ../sprotty-ecore/images/EClass_abstract.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjE3LjExMzAwMW1tIgogICBoZWlnaHQ9IjE4LjM1N21tIgogICB2aWV3Qm94PSIwIDAgMTcuMTEzMDAyIDE4LjM1NzAwMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnOCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iRUNsYXNzX2Fic3RyYWN0LnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0Njg3Ij4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzlkN2MyZjtzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3A0NjgzIiAvPgogICAgICA8c3RvcAogICAgICAgICBpZD0ic3RvcDQ2OTciCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzZhNjIzZjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwN2MyZjtzdG9wLW9wYWNpdHk6MCIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBpZD0ic3RvcDQ2ODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0Njg3IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDY5NSIKICAgICAgIHgxPSI2Ni4zNTg1MjEiCiAgICAgICB5MT0iMTI4LjMwNDQzIgogICAgICAgeDI9IjY2LjM1ODUyMSIKICAgICAgIHkyPSIxMzQuOTg5ODciCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYxLjQyMTIwNCwxNjIuMTUxOTEpIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMTEuMzEzNzA5IgogICAgIGlua3NjYXBlOmN4PSIxNS41NjM0ODQiCiAgICAgaW5rc2NhcGU6Y3k9Ii0xLjE3NDQ3ODkiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImcxNjI4IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICB1bml0cz0ibW0iCiAgICAgc2hvd2d1aWRlcz0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwMDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii0xNiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTE2IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMjc4LjY0MykiCiAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lIj4KICAgIDxnCiAgICAgICBpZD0iZzE2MjgiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjM0ODUxMDYsMi40MDMwMTM2ZS00KSI+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnOTMyIj4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJnMTQ0NCI+CiAgICAgICAgICA8cmVjdAogICAgICAgICAgICAgeT0iLTUuMjc4NzYyOCIKICAgICAgICAgICAgIHg9IjEuMTk4ODkzMyIKICAgICAgICAgICAgIGhlaWdodD0iMS4yODgzNjI5IgogICAgICAgICAgICAgd2lkdGg9IjkuMzkwMTI2MiIKICAgICAgICAgICAgIGlkPSJyZWN0NDYwNSIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNhMDk4NmM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjAuMTE5ODYwNDkiCiAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI5MC40OCkiIC8+CiAgICAgICAgICA8cmVjdAogICAgICAgICAgICAgeT0iLTAuMDIxNjUiCiAgICAgICAgICAgICB4PSIxLjIwNzE2MTciCiAgICAgICAgICAgICBoZWlnaHQ9IjEuMjg4MzYyOSIKICAgICAgICAgICAgIHdpZHRoPSI5LjM5MDEyNjIiCiAgICAgICAgICAgICBpZD0icmVjdDQ2MDUtNCIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiM4Mjg1ODE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjAuMTE5ODYwNDkiCiAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI5MC40OCkiIC8+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2NjIgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJyZWN0MzcyNCIKICAgICAgICAgICAgIGQ9Ik0gMCwyNzkuOTc1MiBWIDI5NyBoIDExLjc2NDY1OCB2IC0xNy4wMjQ4IHogbSAxLjMyMjkxNywxLjI1MjEyIGggOS4xNDIwNzkgdiAxNC40NzM1NCBIIDEuMzIyOTE3IFoiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NDY5NSk7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjAuMjk0MzMwNDUiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnCiAgICAgICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lIgogICAgICAgICAgIGlkPSJnMTYxNiIKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wMTY1MzYzNiwyOTAuNTE0MzEpIj4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMywwLC0xMC41MDUpIgogICAgICAgICAgICAgaWQ9InJlY3QxNDc4IgogICAgICAgICAgICAgZD0iTSAtMTUuMjE4NzUsLTAuMjA4OTg0MzggViA0LjU0MTAxNTYgaCAtMC4wMDIgdiA1LjE2NjAxNTYgNC45NjA5Mzc4IDQuOTUzMTI1IGggNC45NjA5MzcgdiAtNC45NTMxMjUgaCA5Ljg5MjU3ODUgdiA0Ljk1NTA3OCBIIDQuNTkzNzUgViAxNC42Njc5NjkgSCA0LjU5NTcgViA5LjcwNzAzMTIgSCA0LjU5Mzc1IFYgNC43NTE5NTMxIGggMC4wMDM5MSB2IC00Ljk2MDkzNzQ4IHogbSA0Ljk1ODk4NCw0Ljk2MDkzNzQ4IGggOS44OTI1Nzg1IHYgNC45NTUwNzgxIGggLTkuODkyNTc4NSB6IgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6Mi45NzgyNjc2NztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgICAgICAgPHBhdGgKICAgICAgICAgICAgIGlkPSJyZWN0MTUyNSIKICAgICAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsMCwtMTAuNTA1KSIKICAgICAgICAgICAgIGQ9Im0gLTE1LjIxODc1LC01LjE2NDA2MjUgdiA0Ljk1NTA3ODEyIEggNC41NzQyMTg4IFYgLTUuMTY0MDYyNSBaIG0gLTQuOTMzNTk0LDQuOTYwOTM3NSB2IDI0LjczNjMyOCAwLjA0Mjk3IGggOS44OTI1NzggdiAtNC45NTMxMjUgaCA5Ljg5MjU3ODUgViAxNC42Njc5NyBoIC05Ljg5MjU3ODUgdiA0Ljk1MzEyNSBoIC00LjkzNzUgdiAtMTkuODI0MjIgeiBtIDE5Ljc4NTE1NjUsMTkuODI2MTcyIHYgNC45NTUwNzggSCA5LjUyNTM5MDYgViAxOS42MjMwNDcgLTAuMjAzMTI1IEggNC41NzAzMTI1IFYgMTkuNjIzMDQ3IFogTSAtMTAuMjU5NzY2LDQuNzUxOTUzMSB2IDQuOTU1MDc4MSBoIDkuODkyNTc4NSBWIDQuNzUxOTUzMSBaIgogICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6My44MjQ4MzQxMTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIgogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "../sprotty-ecore/images/EClass_interface.svg":
/*!****************************************************!*\
  !*** ../sprotty-ecore/images/EClass_interface.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjE2Ljk3Njk5OW1tIgogICBoZWlnaHQ9IjE4LjM5M21tIgogICB2aWV3Qm94PSIwIDAgMTYuOTc3MDAxIDE4LjM5MzAwMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnOCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iRUNsYXNzX2ludGVyZmFjZS5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NDY4NyIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQ2OTUiCiAgICAgICB4MT0iNjYuMzU4NTIxIgogICAgICAgeTE9IjEyOC4zMDQ0MyIKICAgICAgIHgyPSI2Ni4zNTg1MjEiCiAgICAgICB5Mj0iMTM0Ljk4OTg3IgogICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC02MS40MjEyMDQsMTYyLjE1MTkxKSIgLz4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDY4NyI+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiM5ZDdjMmY7c3RvcC1vcGFjaXR5OjE7IgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIGlkPSJzdG9wNDY4MyIgLz4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3A0Njk3IgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiM2YTYyM2Y7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDdjMmY7c3RvcC1vcGFjaXR5OjAiCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgaWQ9InN0b3A0Njg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjUuNjU2ODU0MyIKICAgICBpbmtzY2FwZTpjeD0iMTUwLjg5MzY5IgogICAgIGlua3NjYXBlOmN5PSI4MC4zMDQ5MDIiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgdW5pdHM9Im1tIgogICAgIHNob3dndWlkZXM9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDA0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItMTYiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii0xNiIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI3OC42MDcpIgogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZSI+CiAgICA8ZwogICAgICAgaWQ9Imc1Mzk3IgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4xMjc2ODA2LDAuMDI3NjUzNzMpIj4KICAgICAgPGcKICAgICAgICAgaWQ9ImcxNDQ0IgogICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjA4NDQwMzksLTAuMDI3NjUzNykiPgogICAgICAgIDxyZWN0CiAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyOTAuNDgpIgogICAgICAgICAgIHN0eWxlPSJmaWxsOiNhMDk4NmM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlLXdpZHRoOjAuMTE5ODYwNDkiCiAgICAgICAgICAgaWQ9InJlY3Q0NjA1IgogICAgICAgICAgIHdpZHRoPSI5LjM5MDEyNjIiCiAgICAgICAgICAgaGVpZ2h0PSIxLjI4ODM2MjkiCiAgICAgICAgICAgeD0iMS4xOTg4OTMzIgogICAgICAgICAgIHk9Ii01LjI3ODc2MjgiIC8+CiAgICAgICAgPHJlY3QKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI5MC40OCkiCiAgICAgICAgICAgc3R5bGU9ImZpbGw6IzgyODU4MTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2Utd2lkdGg6MC4xMTk4NjA0OSIKICAgICAgICAgICBpZD0icmVjdDQ2MDUtNCIKICAgICAgICAgICB3aWR0aD0iOS4zOTAxMjYyIgogICAgICAgICAgIGhlaWdodD0iMS4yODgzNjI5IgogICAgICAgICAgIHg9IjEuMjA3MTYxNyIKICAgICAgICAgICB5PSItMC4wMjE2NSIgLz4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQ0Njk1KTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2Utd2lkdGg6MC4yOTQzMzA0NSIKICAgICAgICAgICBkPSJNIDAsMjc5Ljk3NTIgViAyOTcgaCAxMS43NjQ2NTggdiAtMTcuMDI0OCB6IG0gMS4zMjI5MTcsMS4yNTIxMiBoIDkuMTQyMDc5IHYgMTQuNDczNTQgSCAxLjMyMjkxNyBaIgogICAgICAgICAgIGlkPSJyZWN0MzcyNCIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjYyIgLz4KICAgICAgPC9nPgogICAgICA8YQogICAgICAgICBpZD0iYTE2NzIiCiAgICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZSIKICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMDEyNjY4LDAsMCwxLC0wLjAwNTU4MzE3LDApIj4KICAgICAgICA8ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwNTg0NjUyLDI5MC40NTY2MSkiCiAgICAgICAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lIgogICAgICAgICAgIGlkPSJnMTAyMiI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgaWQ9InJlY3Q4OTgiCiAgICAgICAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjI2NDU4MzMzLDAsMCwwLjI2NDU4MzMzLDAsLTExLjg0OCkiCiAgICAgICAgICAgICBkPSJtIC0zLjAzNTE1NjIsNC44NDM3NSB2IDQuOTUzMTI1IGggNC44ODY3MTg3IHYgOS45MDIzNDQgaCAtNC44ODY3MTg3IHYgNC45NTMxMjUgSCAxMS43MjY1NjIgViAxOS42OTkyMTkgSCA2LjgwNDY4NzUgViA5Ljc5Njg3NSBIIDExLjcyNjU2MiBWIDQuODQzNzUgWiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjUuMzEyNTkzNDY7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjE7cGFpbnQtb3JkZXI6bWFya2VycyBzdHJva2UgZmlsbCIKICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgaWQ9InJlY3Q4OTgtOCIKICAgICAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsMCwtMTEuODQ4KSIKICAgICAgICAgICAgIGQ9Ik0gLTMuMDM1MTU2MiwtMC4xMDkzNzUgViA0Ljg0Mzc1IEggMTEuNzI2NTYyIHYgNC45NDkyMTg4IGggNC45NTMxMjYgViA0LjgzOTg0MzggSCAxMS43MjY1NjIgViAtMC4xMDkzNzUgWiBNIDExLjcyNjU2Miw5Ljc5Mjk2ODggSCA2Ljc3MzQzNzUgdiA5LjkwNjI1MDIgaCA0Ljk1MzEyNDUgeiBtIDAsOS45MDYyNTAyIHYgNC45NTMxMjUgSCAtMy4wMzUxNTYyIHYgLTQuOTUzMTI1IGggLTQuOTUzMTI1IHYgOS45MDYyNSBoIDQuNjg3NSAwLjI2NTYyNSAxNC44OTQ1MzEyIDQuODIwMzEzIHYgLTkuOTA2MjUgeiBtIC0xNC43NjE3MTgyLDAgaCA0Ljk1MzEyNSBWIDkuNzkyOTY4OCBoIC00Ljk1MzEyNSBWIDQuODQzNzUgaCAtNC45NTMxMjUgdiA0Ljk1MzEyNSBoIDQuOTUzMTI1IHoiCiAgICAgICAgICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmU7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo1LjMxMjU5MzQ2O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOm1hcmtlcnMgc3Ryb2tlIGZpbGwiCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICAgIDwvZz4KICAgICAgPC9hPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "../sprotty-ecore/images/EDataType.svg":
/*!*********************************************!*\
  !*** ../sprotty-ecore/images/EDataType.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjEzLjQ2NW1tIgogICBoZWlnaHQ9IjE0LjQyNm1tIgogICB2aWV3Qm94PSIwIDAgMTMuNDY1MDAxIDE0LjQyNjAwMSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnOCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iRURhdGFUeXBlLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQxNjIxIgogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIj4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3AxNjE3IgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiM4MzZmMzc7c3RvcC1vcGFjaXR5OjE7IiAvPgogICAgICA8c3RvcAogICAgICAgICBpZD0ic3RvcDE2MTkiCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzZhNjIzZjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDE2MjEiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQxNjEwIgogICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICB4MT0iLTMuNTk0NjE2NCIKICAgICAgIHkxPSI2LjY0MTQ5MDUiCiAgICAgICB4Mj0iLTMuNTk0NjE2NCIKICAgICAgIHkyPSIxNC4zNTU3NDgiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjU4MzMzNCkiIC8+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIyMi42Mjc0MTciCiAgICAgaW5rc2NhcGU6Y3g9IjEyLjg0NDQwMiIKICAgICBpbmtzY2FwZTpjeT0iMjMuOTI4MjIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIHVuaXRzPSJtbSIKICAgICBzaG93Z3VpZGVzPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjAwNCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTE2IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItMTYiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yODIuNTc0KSIKICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUiPgogICAgPGcKICAgICAgIGlkPSJnMzAwMCIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTEuMTQ4MjUzNikiPgogICAgICA8ZwogICAgICAgICBpZD0iZzI5ODkiPgogICAgICAgIDxyZWN0CiAgICAgICAgICAgc3R5bGU9ImZpbGw6IzgyODU4MTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2Utd2lkdGg6MC4xMTk4NjA0OSIKICAgICAgICAgICBpZD0icmVjdDQ2MDUtNCIKICAgICAgICAgICB3aWR0aD0iOS4zOTAxMjYyIgogICAgICAgICAgIGhlaWdodD0iMS4yODgzNjI5IgogICAgICAgICAgIHg9IjIuMDY2ODk0MSIKICAgICAgICAgICB5PSIyOTEuNjA2NDUiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDI4My43MjMpIgogICAgICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOnVybCgjbGluZWFyR3JhZGllbnQxNjEwKTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MS4yMDAwMDAwNTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICAgIGQ9Ik0gMC44NTQ3MjgxMyw2LjU4MDI1MTggViAxNC40MjUyNTQgSCAxMi42MTkzODMgViA2LjU4MDI1MTggSCAxMS4zMTk3MjEgViAxMy4xMjYxMDkgSCAyLjE3NzY0NSBWIDYuNTgwMjUxOCBaIgogICAgICAgICAgIGlkPSJyZWN0MTQ5OCIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogICAgICA8L2c+CiAgICAgIDxnCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTEuODU4Njk1MmUtNSkiCiAgICAgICAgIGlkPSJnMjIyMyI+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMmEzNzY3O3N0cm9rZS13aWR0aDoxLjI2NDk5OTk5O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgICAgZD0ibSAzLjQ2ODU5MTIsMjg0LjE0NTg4IC0yLjYxOTI0MTQ3LDIuOTIyNSAyLjYxOTI0MTI3LDIuOTIyNSIKICAgICAgICAgICBpZD0icGF0aDE1MTktOCIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjIiAvPgogICAgICAgIDxnCiAgICAgICAgICAgaWQ9ImcyMjE2Ij4KICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgICAgaWQ9InBhdGgxNTM2LTgiCiAgICAgICAgICAgICBkPSJtIDYuNzM5NzE5NCwyODUuMTE1IHYgMy45MDIiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMmEzNzY3O3N0cm9rZS13aWR0aDoxLjI2NDk5OTk5O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMTUzOC00IgogICAgICAgICAgICAgZD0iTSA0LjU3NCwyODcuMDY5ODYgSCA4LjkwMSIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMyYTM3Njc7c3Ryb2tlLXdpZHRoOjEuMjY0OTk5OTk7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmU7ZmlsbDpub25lO3N0cm9rZTojMmEzNzY3O3N0cm9rZS13aWR0aDoxLjI2NDk5OTk5O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgICAgZD0ibSA5Ljk5NjI4NzcsMjg0LjE0NDc0IDIuNjE5MjQyMywyLjkyMjUgLTIuNjE5MjQxMywyLjkyMjUiCiAgICAgICAgICAgaWQ9InBhdGgxNTE5LTQtNSIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjIiAvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "../sprotty-ecore/images/EEnum.svg":
/*!*****************************************!*\
  !*** ../sprotty-ecore/images/EEnum.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjEzLjQ2NW1tIgogICBoZWlnaHQ9IjEzLjI3N21tIgogICB2aWV3Qm94PSIwIDAgMTMuNDY1MDAxIDEzLjI3NzAwMiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnOCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iRUVudW0uc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXGxka3ByXERlc2t0b3BcRUVudW1fMTI4LnBuZyIKICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjI0MS4wNDg0MiIKICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjI0MS4wNDg0MiI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0Njg3Ij4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzlkN2MyZjtzdG9wLW9wYWNpdHk6MTsiCiAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgaWQ9InN0b3A0NjgzIiAvPgogICAgICA8c3RvcAogICAgICAgICBpZD0ic3RvcDQ2OTciCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzZhNjIzZjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwN2MyZjtzdG9wLW9wYWNpdHk6MCIKICAgICAgICAgb2Zmc2V0PSIxIgogICAgICAgICBpZD0ic3RvcDQ2ODUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0Njg3IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDY5NS03IgogICAgICAgeDE9IjczLjQ4MzQ4MiIKICAgICAgIHkxPSIxMzQuMjgyODQiCiAgICAgICB4Mj0iNjAuOTEyOTAzIgogICAgICAgeTI9IjEzNC4yODI4NCIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjc3NzE5Mjg1LDAsMCwwLjg5NjYyNjQ4LC00NS41ODM4NTIsMTc2LjA4ODQ4KSIgLz4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NDY4NyIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQ2OTUtNy0yIgogICAgICAgeDE9IjczLjQ4MzQ4MiIKICAgICAgIHkxPSIxMzQuMjgyODQiCiAgICAgICB4Mj0iNjAuOTEyOTAzIgogICAgICAgeTI9IjEzNC4yODI4NCIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjc3NzE5Mjg0LDAsMCwwLjg5NjYyNjQ3LC00NS41ODM4NSwxNzMuNzQ5ODEpIiAvPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICB4bGluazpocmVmPSIjbGluZWFyR3JhZGllbnQ0Njg3IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDY5NS03LTItNCIKICAgICAgIHgxPSI3My40ODM0ODIiCiAgICAgICB5MT0iMTM0LjI4Mjg0IgogICAgICAgeDI9IjYwLjkxMjkwMyIKICAgICAgIHkyPSIxMzQuMjgyODQiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC43NzcxOTI4NCwwLDAsMC44OTY2MjY0NywtNDUuNTgzODUxLDE3MS40MTAzNykiIC8+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIxNiIKICAgICBpbmtzY2FwZTpjeD0iLTYuOTgzNzI3NiIKICAgICBpbmtzY2FwZTpjeT0iMzAuMDM5NzMxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIHVuaXRzPSJtbSIKICAgICBzaG93Z3VpZGVzPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMjAwNCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTE2IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItMTYiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yODMuNzIzKSIKICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmUiPgogICAgPGcKICAgICAgIGlkPSJnMjIzNCI+CiAgICAgIDxwYXRoCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjYyIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGg0NzIwIgogICAgICAgICBkPSJNIDIuMTUyMjczLDI5NS44MzIwNCBWIDI5NyBoIDkuMTY3MTc0IHYgLTEuMTY3OTYgSCAxMC4yODU1ODYgMy4xODA0MzQ1IFoiCiAgICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOnVybCgjbGluZWFyR3JhZGllbnQ0Njk1LTcpO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZS13aWR0aDowLjI0NTcwMDE0IiAvPgogICAgICA8cGF0aAogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2MiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNDcyMC01IgogICAgICAgICBkPSJtIDIuMTUyMjczLDI5My40OTMzNiB2IDEuMTY3OTYgaCA5LjE2NzE3NSB2IC0xLjE2Nzk2IEggMTAuMjg1NTg3IDMuMTgwNDM0NiBaIgogICAgICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50NDY5NS03LTIpO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZS13aWR0aDowLjI0NTcwMDE1IiAvPgogICAgICA8cGF0aAogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2MiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNDcyMC01LTMiCiAgICAgICAgIGQ9Im0gMi4xNTIyNzMsMjkxLjE1MzkyIHYgMS4xNjc5NiBoIDkuMTY3MTc1IHYgLTEuMTY3OTYgSCAxMC4yODU1ODcgMy4xODA0MzQ2IFoiCiAgICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOnVybCgjbGluZWFyR3JhZGllbnQ0Njk1LTctMi00KTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2Utd2lkdGg6MC4yNDU3MDAxNSIgLz4KICAgICAgPGcKICAgICAgICAgaWQ9ImcyMjIzIj4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMyYTM3Njc7c3Ryb2tlLXdpZHRoOjEuMjY1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgICAgZD0ibSAzLjQ2ODU5MTIsMjg0LjE0NTg4IC0yLjYxOTI0MTQ3LDIuOTIyNSAyLjYxOTI0MTI3LDIuOTIyNSIKICAgICAgICAgICBpZD0icGF0aDE1MTkiCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjYyIgLz4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJnMjIxNiI+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMTUzNiIKICAgICAgICAgICAgIGQ9Im0gNi43Mzk3MTk0LDI4NS4xMTUgdiAzLjkwMiIKICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMyYTM3Njc7c3Ryb2tlLXdpZHRoOjEuMjY1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICAgIGlkPSJwYXRoMTUzOCIKICAgICAgICAgICAgIGQ9Ik0gNC41NzQsMjg3LjA2OTg2IEggOC45MDEiCiAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMmEzNzY3O3N0cm9rZS13aWR0aDoxLjI2NTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiMyYTM3Njc7c3Ryb2tlLXdpZHRoOjEuMjY0OTk5OTk7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgICBkPSJtIDkuOTk2Mjg3NywyODQuMTQ0NzQgMi42MTkyNDIzLDIuOTIyNSAtMi42MTkyNDEzLDIuOTIyNSIKICAgICAgICAgICBpZD0icGF0aDE1MTktNCIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjIiAvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "../sprotty-ecore/images/EEnumLiteral.svg":
/*!************************************************!*\
  !*** ../sprotty-ecore/images/EEnumLiteral.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjExLjc2NW1tIgogICBoZWlnaHQ9IjYuNTJtbSIKICAgdmlld0JveD0iMCAwIDExLjc2NTAwMSA2LjUyMDAwMDUiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuNCAoNWRhNjg5YzMxMywgMjAxOS0wMS0xNCkiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkVFbnVtTGl0ZXJhbC5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIj4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50NDY4NyI+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiM5ZDdjMmY7c3RvcC1vcGFjaXR5OjE7IgogICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgIGlkPSJzdG9wNDY4MyIgLz4KICAgICAgPHN0b3AKICAgICAgICAgaWQ9InN0b3A0Njk3IgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiM2YTYyM2Y7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDdjMmY7c3RvcC1vcGFjaXR5OjAiCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgaWQ9InN0b3A0Njg1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NDY4NyIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQ2OTUiCiAgICAgICB4MT0iNzMuNDgzNDgyIgogICAgICAgeTE9IjEzNC4yODI4NCIKICAgICAgIHgyPSI2MC45MTI5MDMiCiAgICAgICB5Mj0iMTM0LjI4Mjg0IgogICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDIuNzAwMTg3MSwtNjEuNDIxMjAyLC02OC42MjExMzIpIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNy45MTk1OTU5IgogICAgIGlua3NjYXBlOmN4PSI4LjMyNzA5ODYiCiAgICAgaW5rc2NhcGU6Y3k9IjI5LjkwMDMwNiIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICB1bml0cz0ibW0iCiAgICAgc2hvd2d1aWRlcz0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIzODQwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjIwMDQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii0xNiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTE2IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMjkwLjQ4KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDQ2OTUpO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZS13aWR0aDowLjQ4MzY1MTA0IgogICAgICAgZD0ibSAwLDI5MS45ODYwNSB2IDMuNTA3OTUgaCAxMS43NjQ2NTcgdiAtMy41MDc5NSBIIDEwLjQ2NDk5NSAxLjMyMjkxNyBaIgogICAgICAgaWQ9InBhdGg0NzIwIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "../sprotty-ecore/lib/di.config.js":
/*!*****************************************!*\
  !*** ../sprotty-ecore/lib/di.config.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
__webpack_require__(/*! @eclipse-glsp/client/css/glsp-sprotty.css */ "../node_modules/@eclipse-glsp/client/css/glsp-sprotty.css");
__webpack_require__(/*! sprotty/css/edit-label.css */ "../node_modules/sprotty/css/edit-label.css");
var lib_1 = __webpack_require__(/*! @eclipse-glsp/client/lib */ "../node_modules/@eclipse-glsp/client/lib/index.js");
var di_config_1 = __webpack_require__(/*! @eclipse-glsp/client/lib/features/execute/di.config */ "../node_modules/@eclipse-glsp/client/lib/features/execute/di.config.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var lib_2 = __webpack_require__(/*! sprotty/lib */ "../node_modules/sprotty/lib/index.js");
var edit_label_autocomplete_1 = __webpack_require__(/*! ./features/edit-label-autocomplete */ "../sprotty-ecore/lib/features/edit-label-autocomplete.js");
var feedback_1 = __webpack_require__(/*! ./feedback */ "../sprotty-ecore/lib/feedback.js");
var model_1 = __webpack_require__(/*! ./model */ "../sprotty-ecore/lib/model.js");
var views_1 = __webpack_require__(/*! ./views */ "../sprotty-ecore/lib/views.js");
exports.default = (function (containerId) {
    var classDiagramModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
        rebind(lib_1.TYPES.ILogger).to(lib_1.ConsoleLogger).inSingletonScope();
        rebind(lib_1.TYPES.LogLevel).toConstantValue(lib_1.LogLevel.info);
        rebind(lib_2.EditLabelUI).to(edit_label_autocomplete_1.EditLabelUIAutocomplete);
        var context = { bind: bind, unbind: unbind, isBound: isBound, rebind: rebind };
        bind(lib_1.TYPES.IVNodePostprocessor).to(feedback_1.LabelSelectionFeedback);
        lib_1.configureModelElement(context, 'graph', lib_1.GLSPGraph, lib_1.SGraphView);
        lib_1.configureModelElement(context, 'node:class', model_1.LabeledNode, views_1.ClassNodeView);
        lib_1.configureModelElement(context, 'node:enum', model_1.LabeledNode, views_1.ClassNodeView);
        lib_1.configureModelElement(context, 'node:datatype', model_1.LabeledNode, views_1.ClassNodeView);
        lib_1.configureModelElement(context, 'label:name', model_1.SEditableLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'label:edge-name', model_1.SEditableLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'label:edge-multiplicity', model_1.SEditableLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'label:instancename', model_1.SLabelNode, views_1.LabelNodeView);
        lib_1.configureModelElement(context, 'node:attribute', model_1.SLabelNodeAttribute, views_1.LabelNodeView);
        lib_1.configureModelElement(context, 'node:enumliteral', model_1.SLabelNodeLiteral, views_1.LabelNodeView);
        lib_1.configureModelElement(context, 'node:operation', lib_1.SNode, lib_1.RectangularNodeView);
        lib_1.configureModelElement(context, 'label:text', lib_1.SLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'comp:comp', lib_1.SCompartment, lib_1.SCompartmentView);
        lib_1.configureModelElement(context, 'comp:header', lib_1.SCompartment, lib_1.SCompartmentView);
        lib_1.configureModelElement(context, 'icon:class', model_1.IconClass, views_1.IconView);
        lib_1.configureModelElement(context, 'icon:abstract', model_1.IconAbstract, views_1.IconView);
        lib_1.configureModelElement(context, 'icon:interface', model_1.IconInterface, views_1.IconView);
        lib_1.configureModelElement(context, 'icon:enum', model_1.IconEnum, views_1.IconView);
        lib_1.configureModelElement(context, 'icon:datatype', model_1.IconDataType, views_1.IconView);
        lib_1.configureModelElement(context, 'label:icon', lib_1.SLabel, lib_1.SLabelView);
        lib_1.configureModelElement(context, 'html', lib_1.HtmlRoot, lib_1.HtmlRootView);
        lib_1.configureModelElement(context, 'routing-point', lib_1.SRoutingHandle, lib_1.SRoutingHandleView);
        lib_1.configureModelElement(context, 'volatile-routing-point', lib_1.SRoutingHandle, lib_1.SRoutingHandleView);
        lib_1.configureModelElement(context, 'edge:reference', model_1.ArrowEdge, views_1.ArrowEdgeView);
        lib_1.configureModelElement(context, 'edge:bidirectional_reference', model_1.BidirectionalArrowEdge, views_1.BidirectionalEdgeView);
        lib_1.configureModelElement(context, 'edge:bidirectional_composition', model_1.CompositionEdge, views_1.CompositionEdgeView);
        lib_1.configureModelElement(context, 'edge:inheritance', model_1.InheritanceEdge, views_1.InheritanceEdgeView);
        lib_1.configureModelElement(context, 'edge:composition', model_1.CompositionEdge, views_1.CompositionEdgeView);
        lib_1.configureModelElement(context, 'edge', lib_1.SEdge, lib_1.PolylineEdgeView);
        lib_1.configureViewerOptions(context, {
            needsClientLayout: true,
            baseDiv: containerId
        });
    });
    var container = new inversify_1.Container();
    container.load(lib_1.decorationModule, lib_1.validationModule, lib_1.defaultModule, lib_1.glspMouseToolModule, lib_1.defaultGLSPModule, lib_1.glspSelectModule, lib_1.boundsModule, lib_1.viewportModule, lib_1.toolsModule, lib_1.glspHoverModule, lib_1.fadeModule, lib_1.exportModule, lib_1.expandModule, lib_1.openModule, lib_1.buttonModule, lib_1.modelSourceModule, lib_1.labelEditModule, lib_1.labelEditUiModule, lib_1.glspEditLabelValidationModule, classDiagramModule, lib_1.saveModule, di_config_1.default, lib_1.toolFeedbackModule, lib_1.modelHintsModule, lib_2.contextMenuModule, lib_1.glspContextMenuModule, lib_1.glspServerCopyPasteModule, lib_1.copyPasteContextMenuModule, lib_1.commandPaletteModule, lib_1.glspCommandPaletteModule, lib_1.paletteModule, lib_1.requestResponseModule, lib_1.routingModule, lib_1.edgeLayoutModule, lib_1.zorderModule, lib_1.layoutCommandsModule);
    return container;
});


/***/ }),

/***/ "../sprotty-ecore/lib/features/edit-label-autocomplete.js":
/*!****************************************************************!*\
  !*** ../sprotty-ecore/lib/features/edit-label-autocomplete.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
var lib_1 = __webpack_require__(/*! @eclipse-glsp/client/lib */ "../node_modules/@eclipse-glsp/client/lib/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var lib_2 = __webpack_require__(/*! sprotty/lib */ "../node_modules/sprotty/lib/index.js");
var keyboard_1 = __webpack_require__(/*! sprotty/lib/utils/keyboard */ "../node_modules/sprotty/lib/utils/keyboard.js");
var AttributeTypesAction = /** @class */ (function () {
    function AttributeTypesAction(requestId) {
        if (requestId === void 0) { requestId = lib_2.generateRequestId(); }
        this.requestId = requestId;
        this.kind = AttributeTypesAction.KIND;
    }
    AttributeTypesAction.KIND = 'getAttributeTypes';
    return AttributeTypesAction;
}());
exports.AttributeTypesAction = AttributeTypesAction;
var ReturnAttributeTypesAction = /** @class */ (function () {
    function ReturnAttributeTypesAction(actions, responseId) {
        if (responseId === void 0) { responseId = ''; }
        this.actions = actions;
        this.responseId = responseId;
        this.kind = ReturnAttributeTypesAction.KIND;
        this.types = actions;
    }
    ReturnAttributeTypesAction.KIND = 'returnAttributeTypes';
    return ReturnAttributeTypesAction;
}());
exports.ReturnAttributeTypesAction = ReturnAttributeTypesAction;
var EditLabelUIAutocomplete = /** @class */ (function (_super) {
    __extends(EditLabelUIAutocomplete, _super);
    function EditLabelUIAutocomplete(actionDispatcher) {
        var _this = _super.call(this) || this;
        _this.actionDispatcher = actionDispatcher;
        _this.showAutocomplete = false;
        _this.types = [];
        return _this;
    }
    EditLabelUIAutocomplete.prototype.initializeContents = function (containerElement) {
        this.outerDiv = containerElement;
        _super.prototype.initializeContents.call(this, containerElement);
    };
    EditLabelUIAutocomplete.prototype.configureAndAdd = function (element, containerElement) {
        var _this = this;
        _super.prototype.configureAndAdd.call(this, element, containerElement);
        element.addEventListener('keydown', function (event) { return _this.handleKeyDown(event); });
    };
    EditLabelUIAutocomplete.prototype.handleKeyDown = function (event) {
        if (keyboard_1.matchesKeystroke(event, 'Space', 'ctrl')) {
            this.showAutocomplete = true;
            if (this.isAutoCompleteEnabled()) {
                this.createAutocomplete();
            }
        }
        this.updateAutocomplete(event);
    };
    EditLabelUIAutocomplete.prototype.validateLabelIfContentChange = function (event, value) {
        if (this.isAutoCompleteEnabled() && this.previousLabelContent !== value) {
            // recreate autocomplete list if value changed
            this.createAutocomplete();
        }
        _super.prototype.validateLabelIfContentChange.call(this, event, value);
    };
    EditLabelUIAutocomplete.prototype.updateAutocomplete = function (event) {
        if (keyboard_1.matchesKeystroke(event, 'ArrowDown')) {
            this.currentFocus++;
            this.addActive();
        }
        else if (keyboard_1.matchesKeystroke(event, 'ArrowUp')) {
            this.currentFocus--;
            this.addActive();
        }
        else if (keyboard_1.matchesKeystroke(event, 'Enter')) {
            event.preventDefault();
            if (this.currentFocus > -1) {
                if (this.listContainer) {
                    var children = this.listContainer.children;
                    children[this.currentFocus].click();
                }
            }
        }
    };
    EditLabelUIAutocomplete.prototype.createAutocomplete = function () {
        var _this = this;
        var input = this.inputElement.value;
        var val = "";
        if (input.includes(":")) {
            val = input.split(":")[1].trim();
        }
        this.closeAllLists();
        this.currentFocus = -1;
        this.listContainer = document.createElement("div");
        this.listContainer.setAttribute("id", this.inputElement.id + "autocomplete-list");
        this.listContainer.setAttribute("class", "autocomplete-items");
        this.outerDiv.appendChild(this.listContainer);
        var _loop_1 = function (i) {
            if (this_1.types[i].substr(0, val.length).toLowerCase() === val.toLowerCase()) {
                var element_1 = document.createElement("div");
                element_1.innerHTML = "<strong>" + this_1.types[i].substr(0, val.length) + "</strong>";
                element_1.innerHTML += this_1.types[i].substr(val.length);
                element_1.innerHTML += "<input type='hidden' value='" + this_1.types[i] + "'>";
                element_1.addEventListener("click", function (e) {
                    // change the type of the label
                    var name = _this.inputElement.value;
                    if (name.includes(":")) {
                        name = name.split(":")[0];
                    }
                    _this.inputElement.value = name + ": " + element_1.getElementsByTagName("input")[0].value;
                    _this.closeAllLists();
                });
                this_1.listContainer.appendChild(element_1);
            }
        };
        var this_1 = this;
        // create autocomlete items starting with input
        for (var i = 0; i < this.types.length; i++) {
            _loop_1(i);
        }
        // set max height for scrolling
        var parent = this.outerDiv.parentElement;
        if (parent) {
            var parentHeight = parent.offsetHeight;
            var parentPosY = parent.offsetTop;
            var posY = this.outerDiv.offsetTop + this.inputElement.offsetHeight;
            var maxHeight = parentHeight - (posY - parentPosY);
            this.listContainer.style.maxHeight = maxHeight + "px";
        }
    };
    EditLabelUIAutocomplete.prototype.addActive = function () {
        if (!this.listContainer)
            return;
        this.removeActive();
        var children = this.listContainer.children;
        if (children.length > 0) {
            if (this.currentFocus >= children.length)
                this.currentFocus = 0;
            if (this.currentFocus < 0)
                this.currentFocus = (children.length - 1);
            children[this.currentFocus].classList.add("autocomplete-active");
        }
    };
    EditLabelUIAutocomplete.prototype.removeActive = function () {
        var children = this.listContainer.children;
        for (var i = 0; i < children.length; i++) {
            children[i].classList.remove("autocomplete-active");
        }
    };
    EditLabelUIAutocomplete.prototype.closeAllLists = function () {
        var x = this.outerDiv.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            this.outerDiv.removeChild(x[i]);
        }
    };
    EditLabelUIAutocomplete.prototype.onBeforeShow = function (containerElement, root) {
        var _this = this;
        var contextElementIds = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            contextElementIds[_i - 2] = arguments[_i];
        }
        _super.prototype.onBeforeShow.apply(this, __spread([containerElement, root], contextElementIds));
        // request possible element types
        this.actionDispatcher.requestUntil(new AttributeTypesAction()).then(function (response) {
            if (response) {
                var action = response;
                _this.types = action.types;
            }
        });
    };
    EditLabelUIAutocomplete.prototype.isAutoCompleteEnabled = function () {
        if (this.label) {
            return this.label.type === "node:attribute" && this.showAutocomplete;
        }
        return false;
    };
    EditLabelUIAutocomplete.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.showAutocomplete = false;
        this.currentFocus = -1;
        this.closeAllLists();
    };
    EditLabelUIAutocomplete = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(lib_1.TYPES.IActionDispatcher)),
        __metadata("design:paramtypes", [lib_1.GLSPActionDispatcher])
    ], EditLabelUIAutocomplete);
    return EditLabelUIAutocomplete;
}(lib_2.EditLabelUI));
exports.EditLabelUIAutocomplete = EditLabelUIAutocomplete;


/***/ }),

/***/ "../sprotty-ecore/lib/feedback.js":
/*!****************************************!*\
  !*** ../sprotty-ecore/lib/feedback.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var snabbdom = __webpack_require__(/*! snabbdom-jsx */ "../node_modules/snabbdom-jsx/snabbdom-jsx.js");
var model_1 = __webpack_require__(/*! ./model */ "../sprotty-ecore/lib/model.js");
var JSX = { createElement: snabbdom.svg };
/**
 * A NodeDecorator to install visual feedback on selected NodeLabels
 */
var LabelSelectionFeedback = /** @class */ (function () {
    function LabelSelectionFeedback() {
    }
    LabelSelectionFeedback.prototype.decorate = function (vnode, element) {
        if (element instanceof model_1.SLabelNode && element.selected) {
            var vPadding = 1;
            var hPadding = 5;
            var feedback = (JSX.createElement("rect", { x: -hPadding, y: -element.bounds.height / 2 - vPadding, width: element.bounds.width + 2 * hPadding, height: element.bounds.height + 2 * vPadding, "class-selection-feedback": true }));
            if (!vnode.children) {
                vnode.children = [];
            }
            vnode.children.push(feedback);
        }
        return vnode;
    };
    LabelSelectionFeedback.prototype.postUpdate = function () { };
    LabelSelectionFeedback = __decorate([
        inversify_1.injectable()
    ], LabelSelectionFeedback);
    return LabelSelectionFeedback;
}());
exports.LabelSelectionFeedback = LabelSelectionFeedback;


/***/ }),

/***/ "../sprotty-ecore/lib/index.js":
/*!*************************************!*\
  !*** ../sprotty-ecore/lib/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
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
__webpack_require__(/*! ../css/diagram.css */ "../sprotty-ecore/css/diagram.css");
__webpack_require__(/*! reflect-metadata */ "../node_modules/reflect-metadata/Reflect.js");
var di_config_1 = __webpack_require__(/*! ./di.config */ "../sprotty-ecore/lib/di.config.js");
exports.createEcoreDiagramContainer = di_config_1.default;
__export(__webpack_require__(/*! ./model */ "../sprotty-ecore/lib/model.js"));
__export(__webpack_require__(/*! ./views */ "../sprotty-ecore/lib/views.js"));


/***/ }),

/***/ "../sprotty-ecore/lib/model.js":
/*!*************************************!*\
  !*** ../sprotty-ecore/lib/model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var lib_1 = __webpack_require__(/*! sprotty/lib */ "../node_modules/sprotty/lib/index.js");
var LabeledNode = /** @class */ (function (_super) {
    __extends(LabeledNode, _super);
    function LabeledNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LabeledNode.prototype, "editableLabel", {
        get: function () {
            var headerComp = this.children.find(function (element) { return element.type === 'comp:header'; });
            if (headerComp) {
                var label = headerComp.children.find(function (element) { return element.type === 'label:heading'; });
                if (label && lib_1.isEditableLabel(label)) {
                    return label;
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabeledNode.prototype, "name", {
        get: function () {
            if (this.editableLabel) {
                return this.editableLabel.text;
            }
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    LabeledNode.prototype.hasFeature = function (feature) {
        return _super.prototype.hasFeature.call(this, feature) || feature === lib_1.nameFeature || feature === lib_1.withEditLabelFeature;
    };
    return LabeledNode;
}(lib_1.RectangularNode));
exports.LabeledNode = LabeledNode;
var SEditableLabel = /** @class */ (function (_super) {
    __extends(SEditableLabel, _super);
    function SEditableLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SEditableLabel.prototype.hasFeature = function (feature) {
        return feature === lib_1.editLabelFeature || _super.prototype.hasFeature.call(this, feature);
    };
    return SEditableLabel;
}(lib_1.SLabel));
exports.SEditableLabel = SEditableLabel;
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.hasFeature = function (feature) {
        return feature === lib_1.boundsFeature || feature === lib_1.layoutContainerFeature || feature === lib_1.layoutableChildFeature || feature === lib_1.fadeFeature;
    };
    return Icon;
}(lib_1.SShapeElement));
exports.Icon = Icon;
var IconClass = /** @class */ (function (_super) {
    __extends(IconClass, _super);
    function IconClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EClass.svg";
        return _this;
    }
    return IconClass;
}(Icon));
exports.IconClass = IconClass;
var IconAbstract = /** @class */ (function (_super) {
    __extends(IconAbstract, _super);
    function IconAbstract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EClass_abstract.svg";
        return _this;
    }
    return IconAbstract;
}(Icon));
exports.IconAbstract = IconAbstract;
var IconInterface = /** @class */ (function (_super) {
    __extends(IconInterface, _super);
    function IconInterface() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EClass_interface.svg";
        return _this;
    }
    return IconInterface;
}(Icon));
exports.IconInterface = IconInterface;
var IconEnum = /** @class */ (function (_super) {
    __extends(IconEnum, _super);
    function IconEnum() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EEnum.svg";
        return _this;
    }
    return IconEnum;
}(Icon));
exports.IconEnum = IconEnum;
var IconDataType = /** @class */ (function (_super) {
    __extends(IconDataType, _super);
    function IconDataType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconImageName = "EDataType.svg";
        return _this;
    }
    return IconDataType;
}(Icon));
exports.IconDataType = IconDataType;
var SLabelNode = /** @class */ (function (_super) {
    __extends(SLabelNode, _super);
    function SLabelNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hoverFeedback = false;
        return _this;
    }
    SLabelNode.prototype.hasFeature = function (feature) {
        return (feature === lib_1.selectFeature || feature === lib_1.editLabelFeature || feature === lib_1.popupFeature || feature === lib_1.deletableFeature ||
            feature === lib_1.hoverFeedbackFeature || _super.prototype.hasFeature.call(this, feature));
    };
    return SLabelNode;
}(lib_1.SLabel));
exports.SLabelNode = SLabelNode;
var SLabelNodeAttribute = /** @class */ (function (_super) {
    __extends(SLabelNodeAttribute, _super);
    function SLabelNodeAttribute() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imageName = "EAttribute.svg";
        return _this;
    }
    return SLabelNodeAttribute;
}(SLabelNode));
exports.SLabelNodeAttribute = SLabelNodeAttribute;
var SLabelNodeLiteral = /** @class */ (function (_super) {
    __extends(SLabelNodeLiteral, _super);
    function SLabelNodeLiteral() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imageName = "EEnumLiteral.svg";
        return _this;
    }
    return SLabelNodeLiteral;
}(SLabelNode));
exports.SLabelNodeLiteral = SLabelNodeLiteral;
var ArrowEdge = /** @class */ (function (_super) {
    __extends(ArrowEdge, _super);
    function ArrowEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetAnchorCorrection = 3.3;
        return _this;
    }
    return ArrowEdge;
}(lib_1.SEdge));
exports.ArrowEdge = ArrowEdge;
var BidirectionalArrowEdge = /** @class */ (function (_super) {
    __extends(BidirectionalArrowEdge, _super);
    function BidirectionalArrowEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sourceAnchorCorrection = _this.targetAnchorCorrection;
        return _this;
    }
    return BidirectionalArrowEdge;
}(ArrowEdge));
exports.BidirectionalArrowEdge = BidirectionalArrowEdge;
var CompositionEdge = /** @class */ (function (_super) {
    __extends(CompositionEdge, _super);
    function CompositionEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sourceAnchorCorrection = 3.0;
        return _this;
    }
    return CompositionEdge;
}(lib_1.SEdge));
exports.CompositionEdge = CompositionEdge;
var InheritanceEdge = /** @class */ (function (_super) {
    __extends(InheritanceEdge, _super);
    function InheritanceEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetAnchorCorrection = 2.3;
        return _this;
    }
    return InheritanceEdge;
}(lib_1.SEdge));
exports.InheritanceEdge = InheritanceEdge;


/***/ }),

/***/ "../sprotty-ecore/lib/views.js":
/*!*************************************!*\
  !*** ../sprotty-ecore/lib/views.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var snabbdom = __webpack_require__(/*! snabbdom-jsx */ "../node_modules/snabbdom-jsx/snabbdom-jsx.js");
var lib_1 = __webpack_require__(/*! sprotty/lib */ "../node_modules/sprotty/lib/index.js");
/** @jsx svg */
var JSX = { createElement: snabbdom.svg };
var ClassNodeView = /** @class */ (function (_super) {
    __extends(ClassNodeView, _super);
    function ClassNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassNodeView.prototype.render = function (node, context) {
        var rhombStr = "M 0,38  L " + node.bounds.width + ",38";
        return JSX.createElement("g", { "class-node": true },
            JSX.createElement("defs", null,
                JSX.createElement("filter", { id: "dropShadow" },
                    JSX.createElement("feDropShadow", { dx: "0.5", dy: "0.5", stdDeviation: "0.4" }))),
            JSX.createElement("rect", { "class-sprotty-node": true, "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, rx: 6, ry: 6, width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height) }),
            context.renderChildren(node),
            (node.children[1] && node.children[1].children.length > 0) ?
                JSX.createElement("path", { "class-sprotty-edge": true, d: rhombStr }) : '',
            "}");
    };
    ClassNodeView = __decorate([
        inversify_1.injectable()
    ], ClassNodeView);
    return ClassNodeView;
}(lib_1.RectangularNodeView));
exports.ClassNodeView = ClassNodeView;
var IconView = /** @class */ (function () {
    function IconView() {
    }
    IconView.prototype.render = function (element, context) {
        var image = __webpack_require__("../sprotty-ecore/images sync recursive ^\\.\\/.*$")("./" + element.iconImageName);
        return JSX.createElement("g", null,
            JSX.createElement("image", { "class-sprotty-icon": true, href: image, x: -2, y: -1, width: 20, height: 20 }),
            context.renderChildren(element));
    };
    IconView = __decorate([
        inversify_1.injectable()
    ], IconView);
    return IconView;
}());
exports.IconView = IconView;
var ArrowEdgeView = /** @class */ (function (_super) {
    __extends(ArrowEdgeView, _super);
    function ArrowEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrowEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            JSX.createElement("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(p2, p1) + " " + p2.x + " " + p2.y + ") translate(" + p2.x + " " + p2.y + ")" }),
        ];
    };
    ArrowEdgeView = __decorate([
        inversify_1.injectable()
    ], ArrowEdgeView);
    return ArrowEdgeView;
}(lib_1.PolylineEdgeView));
exports.ArrowEdgeView = ArrowEdgeView;
var BidirectionalEdgeView = /** @class */ (function (_super) {
    __extends(BidirectionalEdgeView, _super);
    function BidirectionalEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BidirectionalEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var source1 = segments[0];
        var source2 = segments[1];
        var target1 = segments[segments.length - 2];
        var target2 = segments[segments.length - 1];
        return [
            JSX.createElement("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(target2, target1) + " " + target2.x + " " + target2.y + ") translate(" + target2.x + " " + target2.y + ")" }),
            JSX.createElement("path", { "class-sprotty-edge": true, d: "M 10,-4 L 0,0 L 10,4", transform: "rotate(" + angle(source1, source2) + " " + source1.x + " " + source1.y + ") translate(" + source1.x + " " + source1.y + ")" }),
        ];
    };
    BidirectionalEdgeView = __decorate([
        inversify_1.injectable()
    ], BidirectionalEdgeView);
    return BidirectionalEdgeView;
}(ArrowEdgeView));
exports.BidirectionalEdgeView = BidirectionalEdgeView;
var InheritanceEdgeView = /** @class */ (function (_super) {
    __extends(InheritanceEdgeView, _super);
    function InheritanceEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InheritanceEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            JSX.createElement("path", { "class-sprotty-edge": true, "class-triangle": true, d: "M 10,-8 L 0,0 L 10,8 Z", "class-inheritance": true, transform: "rotate(" + angle(p2, p1) + " " + p2.x + " " + p2.y + ") translate(" + p2.x + " " + p2.y + ")" }),
        ];
    };
    InheritanceEdgeView = __decorate([
        inversify_1.injectable()
    ], InheritanceEdgeView);
    return InheritanceEdgeView;
}(ArrowEdgeView));
exports.InheritanceEdgeView = InheritanceEdgeView;
var DiamondEdgeView = /** @class */ (function (_super) {
    __extends(DiamondEdgeView, _super);
    function DiamondEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiamondEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var p1 = segments[0];
        var p2 = segments[1];
        var r = 6;
        var rhombStr = "M 0,0 l" + r + "," + (r / 2) + " l" + r + ",-" + (r / 2) + " l-" + r + ",-" + (r / 2) + " l-" + r + "," + (r / 2) + " Z";
        var firstEdgeAngle = angle(p1, p2);
        return [
            JSX.createElement("path", { "class-sprotty-edge": true, "class-diamond": true, "class-composition": this.isComposition(), d: rhombStr, transform: "rotate(" + firstEdgeAngle + " " + p1.x + " " + p1.y + ") translate(" + p1.x + " " + p1.y + ")" })
        ];
    };
    DiamondEdgeView.prototype.isComposition = function () {
        return false;
    };
    DiamondEdgeView.prototype.isAggregation = function () {
        return false;
    };
    DiamondEdgeView = __decorate([
        inversify_1.injectable()
    ], DiamondEdgeView);
    return DiamondEdgeView;
}(lib_1.PolylineEdgeView));
var CompositionEdgeView = /** @class */ (function (_super) {
    __extends(CompositionEdgeView, _super);
    function CompositionEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompositionEdgeView.prototype.isComposition = function () {
        return true;
    };
    CompositionEdgeView = __decorate([
        inversify_1.injectable()
    ], CompositionEdgeView);
    return CompositionEdgeView;
}(DiamondEdgeView));
exports.CompositionEdgeView = CompositionEdgeView;
var AggregationEdgeView = /** @class */ (function (_super) {
    __extends(AggregationEdgeView, _super);
    function AggregationEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AggregationEdgeView.prototype.isAggregation = function () {
        return true;
    };
    AggregationEdgeView = __decorate([
        inversify_1.injectable()
    ], AggregationEdgeView);
    return AggregationEdgeView;
}(DiamondEdgeView));
exports.AggregationEdgeView = AggregationEdgeView;
var LabelNodeView = /** @class */ (function (_super) {
    __extends(LabelNodeView, _super);
    function LabelNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelNodeView.prototype.render = function (labelNode, context) {
        var image;
        if (labelNode.imageName) {
            image = __webpack_require__("../sprotty-ecore/images sync recursive ^\\.\\/.*$")("./" + labelNode.imageName);
        }
        var vnode = (JSX.createElement("g", { "class-selected": labelNode.selected, "class-mouseover": labelNode.hoverFeedback, "class-sprotty-label-node": true },
            !!image && JSX.createElement("image", { "class-sprotty-icon": true, href: image, y: -5, width: 13, height: 8 }),
            JSX.createElement("text", { "class-sprotty-label": true, x: !!image ? 20 : 0 }, labelNode.text)));
        var subType = lib_1.getSubType(labelNode);
        if (subType)
            lib_1.setAttr(vnode, "class", subType);
        return vnode;
    };
    LabelNodeView = __decorate([
        inversify_1.injectable()
    ], LabelNodeView);
    return LabelNodeView;
}(lib_1.SLabelView));
exports.LabelNodeView = LabelNodeView;
function angle(x0, x1) {
    return lib_1.toDegrees(Math.atan2(x1.y - x0.y, x1.x - x0.x));
}
exports.angle = angle;


/***/ }),

/***/ "../theia-ecore/lib/browser/EcoreCommandContribution.js":
/*!**************************************************************!*\
  !*** ../theia-ecore/lib/browser/EcoreCommandContribution.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "../node_modules/@theia/core/lib/common/message-service.js");
var progress_service_1 = __webpack_require__(/*! @theia/core/lib/common/progress-service */ "../node_modules/@theia/core/lib/common/progress-service.js");
var selection_service_1 = __webpack_require__(/*! @theia/core/lib/common/selection-service */ "../node_modules/@theia/core/lib/common/selection-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "../node_modules/@theia/core/lib/common/uri-command-handler.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../node_modules/@theia/filesystem/lib/browser/index.js");
var filesystem_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem */ "../node_modules/@theia/filesystem/lib/common/filesystem.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "../node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var browser_4 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../node_modules/@theia/workspace/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var generate_protocol_1 = __webpack_require__(/*! ../common/generate-protocol */ "../theia-ecore/lib/common/generate-protocol.js");
exports.EXAMPLE_NAVIGATOR = __spread(navigator_contribution_1.NAVIGATOR_CONTEXT_MENU, ['example']);
exports.EXAMPLE_EDITOR = __spread(browser_2.EDITOR_CONTEXT_MENU, ['example']);
exports.NEW_ECORE_FILE = {
    id: 'file.newEcoreFile',
    category: 'File',
    label: 'New Ecore-File',
};
var EcoreCommandContribution = /** @class */ (function () {
    function EcoreCommandContribution() {
    }
    EcoreCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.NEW_ECORE_FILE, this.newWorkspaceRootUriAwareCommandHandler({
            execute: function (uri) { return _this.getDirectory(uri).then(function (parent) {
                if (parent) {
                    var parentUri_1 = new uri_1.default(parent.uri);
                    var createEcore_1 = function (name, nsPrefix, nsURI) {
                        if (name) {
                            _this.fileGenServer.generateEcore(name, nsPrefix, nsURI, parentUri_1.path.toString()).then(function () {
                                var ecorePath = parentUri_1.toString() + '/' + name + '.ecore';
                                var fileUriEcore = new uri_1.default(ecorePath);
                                browser_1.open(_this.openerService, fileUriEcore);
                            });
                        }
                    };
                    var showInput_1 = function (hint, prefix, onEnter) {
                        var quickOpenModel = {
                            onType: function (lookFor, acceptor) {
                                var dynamicItems = [];
                                var suffix = "Press 'Enter' to confirm or 'Escape' to cancel.";
                                dynamicItems.push(new SingleStringInputOpenItem(prefix + ": " + lookFor + ". " + suffix, function () { return onEnter(lookFor); }, function (mode) { return mode === browser_1.QuickOpenMode.OPEN; }, function () { return false; }));
                                acceptor(dynamicItems);
                            }
                        };
                        _this.quickOpenService.open(quickOpenModel, _this.getOptions(hint, false));
                    };
                    showInput_1("Name", "Name of Ecore", function (nameOfEcore) {
                        showInput_1("Prefix", "Prefix", function (prefix) {
                            showInput_1("URI", "URI", function (ecore_uri) {
                                createEcore_1(nameOfEcore, prefix, ecore_uri);
                            });
                        });
                    });
                }
            }); }
        }));
    };
    EcoreCommandContribution.prototype.withProgress = function (task) {
        return this.progressService.withProgress('', 'scm', task);
    };
    EcoreCommandContribution.prototype.newUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler);
    };
    EcoreCommandContribution.prototype.newMultiUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler, { multi: true });
    };
    EcoreCommandContribution.prototype.newWorkspaceRootUriAwareCommandHandler = function (handler) {
        return new WorkspaceRootUriAwareCommandHandler(this.workspaceService, this.selectionService, handler);
    };
    EcoreCommandContribution.prototype.getDirectory = function (candidate) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.getFileStat(candidate.toString())];
                    case 1:
                        stat = _a.sent();
                        if (stat && stat.isDirectory) {
                            return [2 /*return*/, stat];
                        }
                        return [2 /*return*/, this.getParent(candidate)];
                }
            });
        });
    };
    EcoreCommandContribution.prototype.getParent = function (candidate) {
        return this.fileSystem.getFileStat(candidate.parent.toString());
    };
    EcoreCommandContribution.prototype.getOptions = function (placeholder, fuzzyMatchLabel, onClose) {
        if (fuzzyMatchLabel === void 0) { fuzzyMatchLabel = true; }
        if (onClose === void 0) { onClose = function () { }; }
        return browser_1.QuickOpenOptions.resolve({
            placeholder: placeholder,
            fuzzyMatchLabel: fuzzyMatchLabel,
            fuzzySort: false,
            onClose: onClose
        });
    };
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], EcoreCommandContribution.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(selection_service_1.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], EcoreCommandContribution.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], EcoreCommandContribution.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], EcoreCommandContribution.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], EcoreCommandContribution.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_3.FileDialogService),
        __metadata("design:type", Object)
    ], EcoreCommandContribution.prototype, "fileDialogService", void 0);
    __decorate([
        inversify_1.inject(browser_4.WorkspaceService),
        __metadata("design:type", browser_4.WorkspaceService)
    ], EcoreCommandContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], EcoreCommandContribution.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], EcoreCommandContribution.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(generate_protocol_1.FileGenServer),
        __metadata("design:type", Object)
    ], EcoreCommandContribution.prototype, "fileGenServer", void 0);
    EcoreCommandContribution = __decorate([
        inversify_1.injectable()
    ], EcoreCommandContribution);
    return EcoreCommandContribution;
}());
exports.EcoreCommandContribution = EcoreCommandContribution;
var WorkspaceRootUriAwareCommandHandler = /** @class */ (function (_super) {
    __extends(WorkspaceRootUriAwareCommandHandler, _super);
    function WorkspaceRootUriAwareCommandHandler(workspaceService, selectionService, handler) {
        var _this = _super.call(this, selectionService, handler) || this;
        _this.workspaceService = workspaceService;
        _this.selectionService = selectionService;
        _this.handler = handler;
        return _this;
    }
    WorkspaceRootUriAwareCommandHandler.prototype.isEnabled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.prototype.isEnabled.apply(this, __spread(args)) && !!this.workspaceService.tryGetRoots().length;
    };
    WorkspaceRootUriAwareCommandHandler.prototype.isVisible = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.prototype.isVisible.apply(this, __spread(args)) && !!this.workspaceService.tryGetRoots().length;
    };
    WorkspaceRootUriAwareCommandHandler.prototype.getUri = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var uri = _super.prototype.getUri.apply(this, __spread(args));
        // If the URI is available, return it immediately.
        if (uri) {
            return uri;
        }
        // Return the first root if available.
        if (!!this.workspaceService.tryGetRoots().length) {
            return new uri_1.default(this.workspaceService.tryGetRoots()[0].uri);
        }
        return undefined;
    };
    return WorkspaceRootUriAwareCommandHandler;
}(uri_command_handler_1.UriAwareCommandHandler));
exports.WorkspaceRootUriAwareCommandHandler = WorkspaceRootUriAwareCommandHandler;
var SingleStringInputOpenItem = /** @class */ (function (_super) {
    __extends(SingleStringInputOpenItem, _super);
    function SingleStringInputOpenItem(label, execute, canRun, canClose) {
        if (execute === void 0) { execute = function () { }; }
        if (canRun === void 0) { canRun = function (mode) { return mode === browser_1.QuickOpenMode.OPEN; }; }
        if (canClose === void 0) { canClose = function (mode) { return true; }; }
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.execute = execute;
        _this.canRun = canRun;
        _this.canClose = canClose;
        return _this;
    }
    SingleStringInputOpenItem.prototype.getLabel = function () {
        return this.label;
    };
    SingleStringInputOpenItem.prototype.run = function (mode) {
        if (!this.canRun(mode)) {
            return false;
        }
        this.execute(this);
        return this.canClose(mode);
    };
    return SingleStringInputOpenItem;
}(browser_1.QuickOpenItem));


/***/ }),

/***/ "../theia-ecore/lib/browser/diagram/ecore-diagram-configuration.js":
/*!*************************************************************************!*\
  !*** ../theia-ecore/lib/browser/diagram/ecore-diagram-configuration.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var lib_1 = __webpack_require__(/*! @eclipse-glsp/client/lib */ "../node_modules/@eclipse-glsp/client/lib/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var lib_2 = __webpack_require__(/*! sprotty-ecore/lib */ "../sprotty-ecore/lib/index.js");
var lib_3 = __webpack_require__(/*! sprotty-theia/lib */ "../node_modules/sprotty-theia/lib/index.js");
var ecore_language_1 = __webpack_require__(/*! ../../common/ecore-language */ "../theia-ecore/lib/common/ecore-language.js");
var ecore_glsp_theia_diagram_server_1 = __webpack_require__(/*! ./ecore-glsp-theia-diagram-server */ "../theia-ecore/lib/browser/diagram/ecore-glsp-theia-diagram-server.js");
var EcoreDiagramConfiguration = /** @class */ (function () {
    function EcoreDiagramConfiguration() {
        this.diagramType = ecore_language_1.EcoreLanguage.DiagramType;
    }
    EcoreDiagramConfiguration.prototype.createContainer = function (widgetId) {
        var container = lib_2.createEcoreDiagramContainer(widgetId);
        container.bind(lib_1.TYPES.ModelSource).to(ecore_glsp_theia_diagram_server_1.EcoreGLSPTheiaDiagramServer).inSingletonScope();
        container.bind(lib_3.TheiaDiagramServer).toService(ecore_glsp_theia_diagram_server_1.EcoreGLSPTheiaDiagramServer);
        // container.rebind(KeyTool).to(TheiaKeyTool).inSingletonScope()
        container.bind(lib_1.TYPES.IActionHandlerInitializer).to(lib_3.TheiaSprottySelectionForwarder);
        container.bind(core_1.SelectionService).toConstantValue(this.selectionService);
        return container;
    };
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], EcoreDiagramConfiguration.prototype, "selectionService", void 0);
    EcoreDiagramConfiguration = __decorate([
        inversify_1.injectable()
    ], EcoreDiagramConfiguration);
    return EcoreDiagramConfiguration;
}());
exports.EcoreDiagramConfiguration = EcoreDiagramConfiguration;


/***/ }),

/***/ "../theia-ecore/lib/browser/diagram/ecore-diagram-manager..js":
/*!********************************************************************!*\
  !*** ../theia-ecore/lib/browser/diagram/ecore-diagram-manager..js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var client_1 = __webpack_require__(/*! @eclipse-glsp/client */ "../node_modules/@eclipse-glsp/client/lib/index.js");
var browser_1 = __webpack_require__(/*! @eclipse-glsp/theia-integration/lib/browser */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var sprotty_1 = __webpack_require__(/*! sprotty */ "../node_modules/sprotty/lib/index.js");
var sprotty_theia_1 = __webpack_require__(/*! sprotty-theia */ "../node_modules/sprotty-theia/lib/index.js");
var ecore_language_1 = __webpack_require__(/*! ../../common/ecore-language */ "../theia-ecore/lib/common/ecore-language.js");
var ecore_glsp_diagram_client_1 = __webpack_require__(/*! ./ecore-glsp-diagram-client */ "../theia-ecore/lib/browser/diagram/ecore-glsp-diagram-client.js");
var EcoreDiagramManager = /** @class */ (function (_super) {
    __extends(EcoreDiagramManager, _super);
    function EcoreDiagramManager(diagramClient, fileSaver, widgetManager, editorManager, messageService, notificationManager) {
        var _this = _super.call(this) || this;
        _this.diagramType = ecore_language_1.EcoreLanguage.DiagramType;
        _this.iconClass = "fa fa-project-diagram";
        _this.label = ecore_language_1.EcoreLanguage.Label + " Editor";
        _this._diagramConnector = new browser_1.GLSPTheiaSprottyConnector({ diagramClient: diagramClient,
            fileSaver: fileSaver, editorManager: editorManager, widgetManager: widgetManager, diagramManager: _this, messageService: messageService, notificationManager: notificationManager });
        return _this;
    }
    EcoreDiagramManager.prototype.createWidget = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var clientId, config, diContainer, diagramWidget;
            return __generator(this, function (_a) {
                if (sprotty_theia_1.DiagramWidgetOptions.is(options)) {
                    clientId = this.createClientId();
                    config = this.diagramConfigurationRegistry.get(options.diagramType);
                    diContainer = config.createContainer(clientId);
                    diagramWidget = new EcoreDiagramWidget(options, clientId + '_widget', diContainer, this.editorPreferences, this.diagramConnector);
                    return [2 /*return*/, diagramWidget];
                }
                throw Error('DiagramWidgetFactory needs DiagramWidgetOptions but got ' + JSON.stringify(options));
            });
        });
    };
    Object.defineProperty(EcoreDiagramManager.prototype, "fileExtensions", {
        get: function () {
            return [ecore_language_1.EcoreLanguage.FileExtension];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EcoreDiagramManager.prototype, "diagramConnector", {
        get: function () {
            return this._diagramConnector;
        },
        enumerable: true,
        configurable: true
    });
    EcoreDiagramManager = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(ecore_glsp_diagram_client_1.EcoreGLSPDiagramClient)),
        __param(1, inversify_1.inject(sprotty_theia_1.TheiaFileSaver)),
        __param(2, inversify_1.inject(browser_2.WidgetManager)),
        __param(3, inversify_1.inject(browser_3.EditorManager)),
        __param(4, inversify_1.inject(core_1.MessageService)),
        __param(5, inversify_1.inject(browser_1.GLSPNotificationManager)),
        __metadata("design:paramtypes", [ecore_glsp_diagram_client_1.EcoreGLSPDiagramClient,
            sprotty_theia_1.TheiaFileSaver,
            browser_2.WidgetManager,
            browser_3.EditorManager,
            core_1.MessageService,
            browser_1.GLSPNotificationManager])
    ], EcoreDiagramManager);
    return EcoreDiagramManager;
}(browser_1.GLSPDiagramManager));
exports.EcoreDiagramManager = EcoreDiagramManager;
var EcoreDiagramWidget = /** @class */ (function (_super) {
    __extends(EcoreDiagramWidget, _super);
    function EcoreDiagramWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EcoreDiagramWidget.prototype.initializeSprotty = function () {
        var _this = this;
        var modelSource = this.diContainer.get(sprotty_1.TYPES.ModelSource);
        if (modelSource instanceof sprotty_1.DiagramServer)
            modelSource.clientId = this.id;
        if (modelSource instanceof browser_1.GLSPTheiaDiagramServer && this.connector)
            this.connector.connect(modelSource);
        this.disposed.connect(function () {
            if (modelSource instanceof browser_1.GLSPTheiaDiagramServer && _this.connector)
                _this.connector.disconnect(modelSource);
        });
        this.actionDispatcher.dispatch(new sprotty_1.RequestModelAction(__assign({ sourceUri: this.options.uri.replace("file://", ""), needsClientLayout: "" + this.viewerOptions.needsClientLayout }, this.options)));
        this.actionDispatcher.dispatch(new client_1.RequestTypeHintsAction(this.options.diagramType));
        this.actionDispatcher.dispatch(new client_1.EnableToolPaletteAction());
    };
    return EcoreDiagramWidget;
}(browser_1.GLSPDiagramWidget));
exports.EcoreDiagramWidget = EcoreDiagramWidget;


/***/ }),

/***/ "../theia-ecore/lib/browser/diagram/ecore-glsp-diagram-client.js":
/*!***********************************************************************!*\
  !*** ../theia-ecore/lib/browser/diagram/ecore-glsp-diagram-client.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var browser_1 = __webpack_require__(/*! @eclipse-glsp/theia-integration/lib/browser */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ecore_glsp__contribution_1 = __webpack_require__(/*! ../ecore-glsp--contribution */ "../theia-ecore/lib/browser/ecore-glsp--contribution.js");
var EcoreGLSPDiagramClient = /** @class */ (function (_super) {
    __extends(EcoreGLSPDiagramClient, _super);
    function EcoreGLSPDiagramClient(ecoreClientContribution, editorManager) {
        return _super.call(this, ecoreClientContribution, editorManager) || this;
    }
    EcoreGLSPDiagramClient = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(ecore_glsp__contribution_1.EcoreGLSPClientContribution)),
        __param(1, inversify_1.inject(browser_2.EditorManager)),
        __metadata("design:paramtypes", [ecore_glsp__contribution_1.EcoreGLSPClientContribution,
            browser_2.EditorManager])
    ], EcoreGLSPDiagramClient);
    return EcoreGLSPDiagramClient;
}(browser_1.GLSPDiagramClient));
exports.EcoreGLSPDiagramClient = EcoreGLSPDiagramClient;


/***/ }),

/***/ "../theia-ecore/lib/browser/diagram/ecore-glsp-theia-diagram-server.js":
/*!*****************************************************************************!*\
  !*** ../theia-ecore/lib/browser/diagram/ecore-glsp-theia-diagram-server.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var browser_1 = __webpack_require__(/*! @eclipse-glsp/theia-integration/lib/browser */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var edit_label_autocomplete_1 = __webpack_require__(/*! sprotty-ecore/lib/features/edit-label-autocomplete */ "../sprotty-ecore/lib/features/edit-label-autocomplete.js");
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


/***/ }),

/***/ "../theia-ecore/lib/browser/ecore-glsp--contribution.js":
/*!**************************************************************!*\
  !*** ../theia-ecore/lib/browser/ecore-glsp--contribution.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var browser_1 = __webpack_require__(/*! @eclipse-glsp/theia-integration/lib/browser */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var ecore_language_1 = __webpack_require__(/*! ../common/ecore-language */ "../theia-ecore/lib/common/ecore-language.js");
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


/***/ }),

/***/ "../theia-ecore/lib/browser/frontend-extension.js":
/*!********************************************************!*\
  !*** ../theia-ecore/lib/browser/frontend-extension.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var browser_1 = __webpack_require__(/*! @eclipse-glsp/theia-integration/lib/browser */ "../node_modules/@eclipse-glsp/theia-integration/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var lib_1 = __webpack_require__(/*! sprotty-theia/lib */ "../node_modules/sprotty-theia/lib/index.js");
var generate_protocol_1 = __webpack_require__(/*! ../common/generate-protocol */ "../theia-ecore/lib/common/generate-protocol.js");
var ecore_diagram_configuration_1 = __webpack_require__(/*! ./diagram/ecore-diagram-configuration */ "../theia-ecore/lib/browser/diagram/ecore-diagram-configuration.js");
var ecore_diagram_manager_1 = __webpack_require__(/*! ./diagram/ecore-diagram-manager. */ "../theia-ecore/lib/browser/diagram/ecore-diagram-manager..js");
var ecore_glsp_diagram_client_1 = __webpack_require__(/*! ./diagram/ecore-glsp-diagram-client */ "../theia-ecore/lib/browser/diagram/ecore-glsp-diagram-client.js");
var ecore_glsp__contribution_1 = __webpack_require__(/*! ./ecore-glsp--contribution */ "../theia-ecore/lib/browser/ecore-glsp--contribution.js");
var EcoreCommandContribution_1 = __webpack_require__(/*! ./EcoreCommandContribution */ "../theia-ecore/lib/browser/EcoreCommandContribution.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(ecore_glsp__contribution_1.EcoreGLSPClientContribution).toSelf().inSingletonScope();
    bind(browser_1.GLSPClientContribution).toService(ecore_glsp__contribution_1.EcoreGLSPClientContribution);
    bind(ecore_glsp_diagram_client_1.EcoreGLSPDiagramClient).toSelf().inSingletonScope();
    bind(lib_1.DiagramConfiguration).to(ecore_diagram_configuration_1.EcoreDiagramConfiguration).inSingletonScope();
    bind(ecore_diagram_manager_1.EcoreDiagramManager).toSelf().inSingletonScope();
    bind(browser_2.FrontendApplicationContribution).toService(ecore_diagram_manager_1.EcoreDiagramManager);
    bind(browser_2.OpenHandler).toService(ecore_diagram_manager_1.EcoreDiagramManager);
    bind(browser_2.WidgetFactory).toService(ecore_diagram_manager_1.EcoreDiagramManager);
    bind(lib_1.DiagramManagerProvider).toProvider(function (context) {
        return function () {
            return new Promise(function (resolve) {
                var diagramManager = context.container.get(ecore_diagram_manager_1.EcoreDiagramManager);
                resolve(diagramManager);
            });
        };
    });
    bind(core_1.CommandContribution).to(EcoreCommandContribution_1.EcoreCommandContribution);
    bind(generate_protocol_1.FileGenServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_2.WebSocketConnectionProvider);
        return connection.createProxy(generate_protocol_1.FILEGEN_SERVICE_PATH);
    }).inSingletonScope();
});


/***/ }),

/***/ "../theia-ecore/lib/common/ecore-language.js":
/*!***************************************************!*\
  !*** ../theia-ecore/lib/common/ecore-language.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var EcoreLanguage;
(function (EcoreLanguage) {
    EcoreLanguage.Id = "ecore";
    EcoreLanguage.Name = "Ecore";
    EcoreLanguage.Label = "Ecore diagram";
    EcoreLanguage.DiagramType = "ecorediagram";
    EcoreLanguage.FileExtension = ".ecore";
})(EcoreLanguage = exports.EcoreLanguage || (exports.EcoreLanguage = {}));


/***/ }),

/***/ "../theia-ecore/lib/common/generate-protocol.js":
/*!******************************************************!*\
  !*** ../theia-ecore/lib/common/generate-protocol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FileGenServer = Symbol('FileGenServer');
exports.FILEGEN_SERVICE_PATH = '/services/codegen';


/***/ })

}]);
//# sourceMappingURL=26.bundle.js.map