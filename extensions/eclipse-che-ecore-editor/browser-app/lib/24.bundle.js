(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_defaults.json":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_defaults.json ***!
  \**********************************************************************************/
/*! exports provided: $schema, name, colors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark Default Colors\",\"colors\":{\"editor.background\":\"#1E1E1E\",\"editor.foreground\":\"#D4D4D4\",\"editor.inactiveSelectionBackground\":\"#3A3D41\",\"editorIndentGuide.background\":\"#404040\",\"editorIndentGuide.activeBackground\":\"#707070\",\"editor.selectionHighlightBackground\":\"#ADD6FF26\",\"list.dropBackground\":\"#383B3D\",\"activityBarBadge.background\":\"#007ACC\",\"sideBarTitle.foreground\":\"#BBBBBB\",\"input.placeholderForeground\":\"#A6A6A6\",\"settings.textInputBackground\":\"#292929\",\"settings.numberInputBackground\":\"#292929\",\"menu.background\":\"#252526\",\"menu.foreground\":\"#CCCCCC\",\"statusBarItem.remoteForeground\":\"#FFF\",\"statusBarItem.remoteBackground\":\"#16825D\"}}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_plus.json":
/*!******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_plus.json ***!
  \******************************************************************************/
/*! exports provided: $schema, name, include, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark+ (default dark)\",\"include\":\"./dark_vs.json\",\"tokenColors\":[{\"name\":\"Function declarations\",\"scope\":[\"entity.name.function\",\"support.function\",\"support.constant.handlebars\",\"source.powershell variable.other.member\",\"entity.name.operator.custom-literal\"],\"settings\":{\"foreground\":\"#DCDCAA\"}},{\"name\":\"Types declaration and references\",\"scope\":[\"meta.return-type\",\"support.class\",\"support.type\",\"entity.name.type\",\"entity.name.namespace\",\"entity.other.attribute\",\"entity.name.scope-resolution\",\"entity.name.class\",\"storage.type.numeric.go\",\"storage.type.byte.go\",\"storage.type.boolean.go\",\"storage.type.string.go\",\"storage.type.uintptr.go\",\"storage.type.error.go\",\"storage.type.rune.go\",\"storage.type.cs\",\"storage.type.generic.cs\",\"storage.type.modifier.cs\",\"storage.type.variable.cs\",\"storage.type.annotation.java\",\"storage.type.generic.java\",\"storage.type.java\",\"storage.type.object.array.java\",\"storage.type.primitive.array.java\",\"storage.type.primitive.java\",\"storage.type.token.java\",\"storage.type.groovy\",\"storage.type.annotation.groovy\",\"storage.type.parameters.groovy\",\"storage.type.generic.groovy\",\"storage.type.object.array.groovy\",\"storage.type.primitive.array.groovy\",\"storage.type.primitive.groovy\"],\"settings\":{\"foreground\":\"#4EC9B0\"}},{\"name\":\"Types declaration and references, TS grammar specific\",\"scope\":[\"meta.type.cast.expr\",\"meta.type.new.expr\",\"support.constant.math\",\"support.constant.dom\",\"support.constant.json\",\"entity.other.inherited-class\"],\"settings\":{\"foreground\":\"#4EC9B0\"}},{\"name\":\"Control flow / Special keywords\",\"scope\":[\"keyword.control\",\"source.cpp keyword.operator.new\",\"keyword.operator.delete\",\"keyword.other.using\",\"keyword.other.operator\",\"entity.name.operator\"],\"settings\":{\"foreground\":\"#C586C0\"}},{\"name\":\"Variable and parameter name\",\"scope\":[\"variable\",\"meta.definition.variable.name\",\"support.variable\",\"entity.name.variable\"],\"settings\":{\"foreground\":\"#9CDCFE\"}},{\"name\":\"Object keys, TS grammar specific\",\"scope\":[\"meta.object-literal.key\"],\"settings\":{\"foreground\":\"#9CDCFE\"}},{\"name\":\"CSS property value\",\"scope\":[\"support.constant.property-value\",\"support.constant.font-name\",\"support.constant.media-type\",\"support.constant.media\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#CE9178\"}},{\"name\":\"Regular expression groups\",\"scope\":[\"punctuation.definition.group.regexp\",\"punctuation.definition.group.assertion.regexp\",\"punctuation.definition.character-class.regexp\",\"punctuation.character.set.begin.regexp\",\"punctuation.character.set.end.regexp\",\"keyword.operator.negation.regexp\",\"support.other.parenthesis.regexp\"],\"settings\":{\"foreground\":\"#CE9178\"}},{\"scope\":[\"constant.character.character-class.regexp\",\"constant.other.character-class.set.regexp\",\"constant.other.character-class.regexp\",\"constant.character.set.regexp\"],\"settings\":{\"foreground\":\"#d16969\"}},{\"scope\":[\"keyword.operator.or.regexp\",\"keyword.control.anchor.regexp\"],\"settings\":{\"foreground\":\"#DCDCAA\"}},{\"scope\":\"keyword.operator.quantifier.regexp\",\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"constant.character\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"constant.character.escape\",\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"entity.name.label\",\"settings\":{\"foreground\":\"#C8C8C8\"}}]}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_theia.json":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_theia.json ***!
  \*******************************************************************************/
/*! exports provided: $schema, name, include, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark (Theia)\",\"include\":\"./dark_plus.json\"}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_vs.json":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_vs.json ***!
  \****************************************************************************/
/*! exports provided: $schema, name, include, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark (Visual Studio)\",\"include\":\"./dark_defaults.json\",\"tokenColors\":[{\"scope\":[\"meta.embedded\",\"source.groovy.embedded\"],\"settings\":{\"foreground\":\"#D4D4D4\"}},{\"scope\":\"emphasis\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"strong\",\"settings\":{\"fontStyle\":\"bold\"}},{\"scope\":\"header\",\"settings\":{\"foreground\":\"#000080\"}},{\"scope\":\"comment\",\"settings\":{\"foreground\":\"#6A9955\"}},{\"scope\":\"constant.language\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":[\"constant.numeric\",\"entity.name.operator.custom-literal.number\",\"variable.other.enummember\",\"keyword.operator.plus.exponent\",\"keyword.operator.minus.exponent\"],\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"constant.regexp\",\"settings\":{\"foreground\":\"#646695\"}},{\"scope\":\"entity.name.tag\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"entity.name.tag.css\",\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"entity.other.attribute-name\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":[\"entity.other.attribute-name.class.css\",\"entity.other.attribute-name.class.mixin.css\",\"entity.other.attribute-name.id.css\",\"entity.other.attribute-name.parent-selector.css\",\"entity.other.attribute-name.pseudo-class.css\",\"entity.other.attribute-name.pseudo-element.css\",\"source.css.less entity.other.attribute-name.id\",\"entity.other.attribute-name.attribute.scss\",\"entity.other.attribute-name.scss\"],\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"invalid\",\"settings\":{\"foreground\":\"#f44747\"}},{\"scope\":\"markup.underline\",\"settings\":{\"fontStyle\":\"underline\"}},{\"scope\":\"markup.bold\",\"settings\":{\"fontStyle\":\"bold\",\"foreground\":\"#569cd6\"}},{\"scope\":\"markup.heading\",\"settings\":{\"fontStyle\":\"bold\",\"foreground\":\"#569cd6\"}},{\"scope\":\"markup.italic\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"markup.inserted\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"markup.deleted\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"markup.changed\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"punctuation.definition.quote.begin.markdown\",\"settings\":{\"foreground\":\"#6A9955\"}},{\"scope\":\"punctuation.definition.list.begin.markdown\",\"settings\":{\"foreground\":\"#6796e6\"}},{\"scope\":\"markup.inline.raw\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"name\":\"brackets of XML/HTML tags\",\"scope\":\"punctuation.definition.tag\",\"settings\":{\"foreground\":\"#808080\"}},{\"scope\":[\"meta.preprocessor\",\"entity.name.function.preprocessor\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"meta.preprocessor.string\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"meta.preprocessor.numeric\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"meta.structure.dictionary.key.python\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":\"meta.diff.header\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"storage\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"storage.type\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":[\"storage.modifier\",\"keyword.operator.noexcept\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":[\"string\",\"entity.name.operator.custom-literal.string\",\"meta.embedded.assembly\"],\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.tag\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.value\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.regexp\",\"settings\":{\"foreground\":\"#d16969\"}},{\"name\":\"String interpolation\",\"scope\":[\"punctuation.definition.template-expression.begin\",\"punctuation.definition.template-expression.end\",\"punctuation.section.embedded\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"name\":\"Reset JavaScript string interpolation expression\",\"scope\":[\"meta.template.expression\"],\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":[\"support.type.vendored.property-name\",\"support.type.property-name\",\"variable.css\",\"variable.scss\",\"variable.other.less\",\"source.coffee.embedded\"],\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":\"keyword\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.control\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.operator\",\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":[\"keyword.operator.new\",\"keyword.operator.expression\",\"keyword.operator.cast\",\"keyword.operator.sizeof\",\"keyword.operator.alignof\",\"keyword.operator.typeid\",\"keyword.operator.alignas\",\"keyword.operator.instanceof\",\"keyword.operator.logical.python\",\"keyword.operator.wordlike\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.other.unit\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":[\"punctuation.section.embedded.begin.php\",\"punctuation.section.embedded.end.php\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"support.function.git-rebase\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":\"constant.sha.git-rebase\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"name\":\"coloring of the Java import and package identifiers\",\"scope\":[\"storage.modifier.import.java\",\"variable.language.wildcard.java\",\"storage.modifier.package.java\"],\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"name\":\"this.self\",\"scope\":\"variable.language\",\"settings\":{\"foreground\":\"#569cd6\"}}]}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black.json":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black.json ***!
  \*****************************************************************************/
/*! exports provided: $schema, name, include, colors, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark High Contrast\",\"include\":\"./hc_black_defaults.json\",\"colors\":{\"selection.background\":\"#008000\",\"editor.selectionBackground\":\"#FFFFFF\",\"statusBarItem.remoteBackground\":\"#00000000\"},\"tokenColors\":[{\"name\":\"Function declarations\",\"scope\":[\"entity.name.function\",\"support.function\",\"support.constant.handlebars\",\"source.powershell variable.other.member\"],\"settings\":{\"foreground\":\"#DCDCAA\"}},{\"name\":\"Types declaration and references\",\"scope\":[\"meta.return-type\",\"support.class\",\"support.type\",\"entity.name.type\",\"entity.name.namespace\",\"entity.name.scope-resolution\",\"entity.name.class\",\"storage.type.cs\",\"storage.type.generic.cs\",\"storage.type.modifier.cs\",\"storage.type.variable.cs\",\"storage.type.annotation.java\",\"storage.type.generic.java\",\"storage.type.java\",\"storage.type.object.array.java\",\"storage.type.primitive.array.java\",\"storage.type.primitive.java\",\"storage.type.token.java\",\"storage.type.groovy\",\"storage.type.annotation.groovy\",\"storage.type.parameters.groovy\",\"storage.type.generic.groovy\",\"storage.type.object.array.groovy\",\"storage.type.primitive.array.groovy\",\"storage.type.primitive.groovy\"],\"settings\":{\"foreground\":\"#4EC9B0\"}},{\"name\":\"Types declaration and references, TS grammar specific\",\"scope\":[\"meta.type.cast.expr\",\"meta.type.new.expr\",\"support.constant.math\",\"support.constant.dom\",\"support.constant.json\",\"entity.other.inherited-class\"],\"settings\":{\"foreground\":\"#4EC9B0\"}},{\"name\":\"Control flow / Special keywords\",\"scope\":[\"keyword.control\",\"source.cpp keyword.operator.new\",\"source.cpp keyword.operator.delete\",\"keyword.other.using\",\"keyword.other.operator\"],\"settings\":{\"foreground\":\"#C586C0\"}},{\"name\":\"Variable and parameter name\",\"scope\":[\"variable\",\"meta.definition.variable.name\",\"support.variable\"],\"settings\":{\"foreground\":\"#9CDCFE\"}},{\"name\":\"Object keys, TS grammar specific\",\"scope\":[\"meta.object-literal.key\"],\"settings\":{\"foreground\":\"#9CDCFE\"}},{\"name\":\"CSS property value\",\"scope\":[\"support.constant.property-value\",\"support.constant.font-name\",\"support.constant.media-type\",\"support.constant.media\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#CE9178\"}},{\"name\":\"HC Search Editor context line override\",\"scope\":\"meta.resultLinePrefix.contextLinePrefix.search\",\"settings\":{\"foreground\":\"#CBEDCB\"}}]}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black_defaults.json":
/*!**************************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black_defaults.json ***!
  \**************************************************************************************/
/*! exports provided: $schema, name, colors, settings, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"High Contrast Default Colors\",\"colors\":{\"editor.background\":\"#000000\",\"editor.foreground\":\"#FFFFFF\",\"editorIndentGuide.background\":\"#FFFFFF\",\"editorIndentGuide.activeBackground\":\"#FFFFFF\",\"statusBarItem.remoteBackground\":\"#00000000\",\"sideBarTitle.foreground\":\"#FFFFFF\"},\"settings\":[{\"settings\":{\"foreground\":\"#FFFFFF\",\"background\":\"#000000\"}},{\"scope\":[\"meta.embedded\",\"source.groovy.embedded\"],\"settings\":{\"foreground\":\"#FFFFFF\",\"background\":\"#000000\"}},{\"scope\":\"emphasis\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"strong\",\"settings\":{\"fontStyle\":\"bold\"}},{\"scope\":\"meta.diff.header\",\"settings\":{\"foreground\":\"#000080\"}},{\"scope\":\"comment\",\"settings\":{\"foreground\":\"#7ca668\"}},{\"scope\":\"constant.language\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":[\"constant.numeric\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"constant.regexp\",\"settings\":{\"foreground\":\"#b46695\"}},{\"scope\":\"constant.character\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"entity.name.tag\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"entity.name.tag.css\",\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"entity.other.attribute-name\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":[\"entity.other.attribute-name.class.css\",\"entity.other.attribute-name.class.mixin.css\",\"entity.other.attribute-name.id.css\",\"entity.other.attribute-name.parent-selector.css\",\"entity.other.attribute-name.pseudo-class.css\",\"entity.other.attribute-name.pseudo-element.css\",\"source.css.less entity.other.attribute-name.id\",\"entity.other.attribute-name.attribute.scss\",\"entity.other.attribute-name.scss\"],\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"invalid\",\"settings\":{\"foreground\":\"#f44747\"}},{\"scope\":\"markup.underline\",\"settings\":{\"fontStyle\":\"underline\"}},{\"scope\":\"markup.bold\",\"settings\":{\"fontStyle\":\"bold\"}},{\"scope\":\"markup.heading\",\"settings\":{\"foreground\":\"#6796e6\"}},{\"scope\":\"markup.italic\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"markup.inserted\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"markup.deleted\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"markup.changed\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"name\":\"brackets of XML/HTML tags\",\"scope\":[\"punctuation.definition.tag\"],\"settings\":{\"foreground\":\"#808080\"}},{\"scope\":\"meta.preprocessor\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"meta.preprocessor.string\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"meta.preprocessor.numeric\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"meta.structure.dictionary.key.python\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":\"storage\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"storage.type\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"storage.modifier\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"string\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.tag\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.value\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.regexp\",\"settings\":{\"foreground\":\"#d16969\"}},{\"name\":\"String interpolation\",\"scope\":[\"punctuation.definition.template-expression.begin\",\"punctuation.definition.template-expression.end\",\"punctuation.section.embedded\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"name\":\"Reset JavaScript string interpolation expression\",\"scope\":[\"meta.template.expression\"],\"settings\":{\"foreground\":\"#ffffff\"}},{\"scope\":[\"support.type.vendored.property-name\",\"support.type.property-name\",\"variable.css\",\"variable.scss\",\"variable.other.less\",\"source.coffee.embedded\"],\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":\"keyword\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.control\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.operator\",\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":[\"keyword.operator.new\",\"keyword.operator.expression\",\"keyword.operator.cast\",\"keyword.operator.sizeof\",\"keyword.operator.logical.python\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.other.unit\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"support.function.git-rebase\",\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":\"constant.sha.git-rebase\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"name\":\"coloring of the Java import and package identifiers\",\"scope\":[\"storage.modifier.import.java\",\"variable.language.wildcard.java\",\"storage.modifier.package.java\"],\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"name\":\"coloring of the TS this\",\"scope\":\"variable.language.this\",\"settings\":{\"foreground\":\"#569cd6\"}}]}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/hc_theia.json":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/hc_theia.json ***!
  \*****************************************************************************/
/*! exports provided: $schema, name, include, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark High Contrast (Theia)\",\"include\":\"./hc_black.json\"}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/light_defaults.json":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/light_defaults.json ***!
  \***********************************************************************************/
/*! exports provided: $schema, name, colors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Light Default Colors\",\"colors\":{\"editor.background\":\"#FFFFFF\",\"editor.foreground\":\"#000000\",\"editor.inactiveSelectionBackground\":\"#E5EBF1\",\"editorIndentGuide.background\":\"#D3D3D3\",\"editorIndentGuide.activeBackground\":\"#939393\",\"editor.selectionHighlightBackground\":\"#ADD6FF80\",\"editorSuggestWidget.background\":\"#F3F3F3\",\"activityBarBadge.background\":\"#007ACC\",\"sideBarTitle.foreground\":\"#6F6F6F\",\"list.hoverBackground\":\"#E8E8E8\",\"input.placeholderForeground\":\"#767676\",\"settings.textInputBorder\":\"#CECECE\",\"settings.numberInputBorder\":\"#CECECE\",\"statusBarItem.remoteForeground\":\"#FFF\",\"statusBarItem.remoteBackground\":\"#16825D\"}}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/light_plus.json":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/light_plus.json ***!
  \*******************************************************************************/
/*! exports provided: $schema, name, include, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Light+ (default light)\",\"include\":\"./light_vs.json\",\"tokenColors\":[{\"name\":\"Function declarations\",\"scope\":[\"entity.name.function\",\"support.function\",\"support.constant.handlebars\",\"source.powershell variable.other.member\",\"entity.name.operator.custom-literal\"],\"settings\":{\"foreground\":\"#795E26\"}},{\"name\":\"Types declaration and references\",\"scope\":[\"meta.return-type\",\"support.class\",\"support.type\",\"entity.name.type\",\"entity.name.namespace\",\"entity.other.attribute\",\"entity.name.scope-resolution\",\"entity.name.class\",\"storage.type.numeric.go\",\"storage.type.byte.go\",\"storage.type.boolean.go\",\"storage.type.string.go\",\"storage.type.uintptr.go\",\"storage.type.error.go\",\"storage.type.rune.go\",\"storage.type.cs\",\"storage.type.generic.cs\",\"storage.type.modifier.cs\",\"storage.type.variable.cs\",\"storage.type.annotation.java\",\"storage.type.generic.java\",\"storage.type.java\",\"storage.type.object.array.java\",\"storage.type.primitive.array.java\",\"storage.type.primitive.java\",\"storage.type.token.java\",\"storage.type.groovy\",\"storage.type.annotation.groovy\",\"storage.type.parameters.groovy\",\"storage.type.generic.groovy\",\"storage.type.object.array.groovy\",\"storage.type.primitive.array.groovy\",\"storage.type.primitive.groovy\"],\"settings\":{\"foreground\":\"#267f99\"}},{\"name\":\"Types declaration and references, TS grammar specific\",\"scope\":[\"meta.type.cast.expr\",\"meta.type.new.expr\",\"support.constant.math\",\"support.constant.dom\",\"support.constant.json\",\"entity.other.inherited-class\"],\"settings\":{\"foreground\":\"#267f99\"}},{\"name\":\"Control flow / Special keywords\",\"scope\":[\"keyword.control\",\"source.cpp keyword.operator.new\",\"source.cpp keyword.operator.delete\",\"keyword.other.using\",\"keyword.other.operator\",\"entity.name.operator\"],\"settings\":{\"foreground\":\"#AF00DB\"}},{\"name\":\"Variable and parameter name\",\"scope\":[\"variable\",\"meta.definition.variable.name\",\"support.variable\",\"entity.name.variable\"],\"settings\":{\"foreground\":\"#001080\"}},{\"name\":\"Object keys, TS grammar specific\",\"scope\":[\"meta.object-literal.key\"],\"settings\":{\"foreground\":\"#001080\"}},{\"name\":\"CSS property value\",\"scope\":[\"support.constant.property-value\",\"support.constant.font-name\",\"support.constant.media-type\",\"support.constant.media\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#0451a5\"}},{\"name\":\"Regular expression groups\",\"scope\":[\"punctuation.definition.group.regexp\",\"punctuation.definition.group.assertion.regexp\",\"punctuation.definition.character-class.regexp\",\"punctuation.character.set.begin.regexp\",\"punctuation.character.set.end.regexp\",\"keyword.operator.negation.regexp\",\"support.other.parenthesis.regexp\"],\"settings\":{\"foreground\":\"#d16969\"}},{\"scope\":[\"constant.character.character-class.regexp\",\"constant.other.character-class.set.regexp\",\"constant.other.character-class.regexp\",\"constant.character.set.regexp\"],\"settings\":{\"foreground\":\"#811f3f\"}},{\"scope\":\"keyword.operator.quantifier.regexp\",\"settings\":{\"foreground\":\"#000000\"}},{\"scope\":[\"keyword.operator.or.regexp\",\"keyword.control.anchor.regexp\"],\"settings\":{\"foreground\":\"#ff0000\"}},{\"scope\":\"constant.character\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"constant.character.escape\",\"settings\":{\"foreground\":\"#ff0000\"}},{\"scope\":\"entity.name.label\",\"settings\":{\"foreground\":\"#000000\"}}]}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/light_theia.json":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/light_theia.json ***!
  \********************************************************************************/
/*! exports provided: $schema, name, include, colors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Light (Theia)\",\"include\":\"./light_plus.json\",\"colors\":{\"activityBar.background\":\"#ececec\",\"activityBar.activeBorder\":\"#000000\",\"activityBar.foreground\":\"#000000\"}}");

/***/ }),

/***/ "../node_modules/@theia/monaco/data/monaco-themes/vscode/light_vs.json":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/data/monaco-themes/vscode/light_vs.json ***!
  \*****************************************************************************/
/*! exports provided: $schema, name, include, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Light (Visual Studio)\",\"include\":\"./light_defaults.json\",\"tokenColors\":[{\"scope\":[\"meta.embedded\",\"source.groovy.embedded\"],\"settings\":{\"foreground\":\"#000000ff\"}},{\"scope\":\"emphasis\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"strong\",\"settings\":{\"fontStyle\":\"bold\"}},{\"scope\":\"meta.diff.header\",\"settings\":{\"foreground\":\"#000080\"}},{\"scope\":\"comment\",\"settings\":{\"foreground\":\"#008000\"}},{\"scope\":\"constant.language\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":[\"constant.numeric\",\"entity.name.operator.custom-literal.number\",\"variable.other.enummember\",\"keyword.operator.plus.exponent\",\"keyword.operator.minus.exponent\"],\"settings\":{\"foreground\":\"#09885a\"}},{\"scope\":\"constant.regexp\",\"settings\":{\"foreground\":\"#811f3f\"}},{\"name\":\"css tags in selectors, xml tags\",\"scope\":\"entity.name.tag\",\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":\"entity.name.selector\",\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":\"entity.other.attribute-name\",\"settings\":{\"foreground\":\"#ff0000\"}},{\"scope\":[\"entity.other.attribute-name.class.css\",\"entity.other.attribute-name.class.mixin.css\",\"entity.other.attribute-name.id.css\",\"entity.other.attribute-name.parent-selector.css\",\"entity.other.attribute-name.pseudo-class.css\",\"entity.other.attribute-name.pseudo-element.css\",\"source.css.less entity.other.attribute-name.id\",\"entity.other.attribute-name.attribute.scss\",\"entity.other.attribute-name.scss\"],\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":\"invalid\",\"settings\":{\"foreground\":\"#cd3131\"}},{\"scope\":\"markup.underline\",\"settings\":{\"fontStyle\":\"underline\"}},{\"scope\":\"markup.bold\",\"settings\":{\"fontStyle\":\"bold\",\"foreground\":\"#000080\"}},{\"scope\":\"markup.heading\",\"settings\":{\"fontStyle\":\"bold\",\"foreground\":\"#800000\"}},{\"scope\":\"markup.italic\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"markup.inserted\",\"settings\":{\"foreground\":\"#09885a\"}},{\"scope\":\"markup.deleted\",\"settings\":{\"foreground\":\"#a31515\"}},{\"scope\":\"markup.changed\",\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":[\"punctuation.definition.quote.begin.markdown\",\"punctuation.definition.list.begin.markdown\"],\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":\"markup.inline.raw\",\"settings\":{\"foreground\":\"#800000\"}},{\"name\":\"brackets of XML/HTML tags\",\"scope\":\"punctuation.definition.tag\",\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":[\"meta.preprocessor\",\"entity.name.function.preprocessor\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"meta.preprocessor.string\",\"settings\":{\"foreground\":\"#a31515\"}},{\"scope\":\"meta.preprocessor.numeric\",\"settings\":{\"foreground\":\"#09885a\"}},{\"scope\":\"meta.structure.dictionary.key.python\",\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":\"storage\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"storage.type\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":[\"storage.modifier\",\"keyword.operator.noexcept\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":[\"string\",\"entity.name.operator.custom-literal.string\",\"meta.embedded.assembly\"],\"settings\":{\"foreground\":\"#a31515\"}},{\"scope\":[\"string.comment.buffered.block.pug\",\"string.quoted.pug\",\"string.interpolated.pug\",\"string.unquoted.plain.in.yaml\",\"string.unquoted.plain.out.yaml\",\"string.unquoted.block.yaml\",\"string.quoted.single.yaml\",\"string.quoted.double.xml\",\"string.quoted.single.xml\",\"string.unquoted.cdata.xml\",\"string.quoted.double.html\",\"string.quoted.single.html\",\"string.unquoted.html\",\"string.quoted.single.handlebars\",\"string.quoted.double.handlebars\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"string.regexp\",\"settings\":{\"foreground\":\"#811f3f\"}},{\"name\":\"String interpolation\",\"scope\":[\"punctuation.definition.template-expression.begin\",\"punctuation.definition.template-expression.end\",\"punctuation.section.embedded\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"name\":\"Reset JavaScript string interpolation expression\",\"scope\":[\"meta.template.expression\"],\"settings\":{\"foreground\":\"#000000\"}},{\"scope\":[\"support.constant.property-value\",\"support.constant.font-name\",\"support.constant.media-type\",\"support.constant.media\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":[\"support.type.vendored.property-name\",\"support.type.property-name\",\"variable.css\",\"variable.scss\",\"variable.other.less\",\"source.coffee.embedded\"],\"settings\":{\"foreground\":\"#ff0000\"}},{\"scope\":[\"support.type.property-name.json\"],\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":\"keyword\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"keyword.control\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"keyword.operator\",\"settings\":{\"foreground\":\"#000000\"}},{\"scope\":[\"keyword.operator.new\",\"keyword.operator.expression\",\"keyword.operator.cast\",\"keyword.operator.sizeof\",\"keyword.operator.alignof\",\"keyword.operator.typeid\",\"keyword.operator.alignas\",\"keyword.operator.instanceof\",\"keyword.operator.logical.python\",\"keyword.operator.wordlike\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"keyword.other.unit\",\"settings\":{\"foreground\":\"#09885a\"}},{\"scope\":[\"punctuation.section.embedded.begin.php\",\"punctuation.section.embedded.end.php\"],\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":\"support.function.git-rebase\",\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":\"constant.sha.git-rebase\",\"settings\":{\"foreground\":\"#09885a\"}},{\"name\":\"coloring of the Java import and package identifiers\",\"scope\":[\"storage.modifier.import.java\",\"variable.language.wildcard.java\",\"storage.modifier.package.java\"],\"settings\":{\"foreground\":\"#000000\"}},{\"name\":\"this.self\",\"scope\":\"variable.language\",\"settings\":{\"foreground\":\"#0000ff\"}}]}");

/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-browser-module.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-browser-module.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
exports.ContainerModule = inversify_1.ContainerModule;
var monaco_loader_1 = __webpack_require__(/*! ./monaco-loader */ "../node_modules/@theia/monaco/lib/browser/monaco-loader.js");
exports.default = monaco_loader_1.loadVsRequire(window)
    .then(function (vsRequire) { return monaco_loader_1.loadMonaco(vsRequire); })
    .then(function () {
    return Promise.resolve().then(function () { return __webpack_require__(/*! ./monaco-frontend-module */ "../node_modules/@theia/monaco/lib/browser/monaco-frontend-module.js"); });
}).then(function (module) {
    return module.default;
});


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var MonacoBulkEditService = /** @class */ (function () {
    function MonacoBulkEditService() {
    }
    MonacoBulkEditService.prototype.apply = function (edit) {
        return this.workspace.applyBulkEdit(edit);
    };
    __decorate([
        inversify_1.inject(monaco_workspace_1.MonacoWorkspace),
        __metadata("design:type", monaco_workspace_1.MonacoWorkspace)
    ], MonacoBulkEditService.prototype, "workspace", void 0);
    MonacoBulkEditService = __decorate([
        inversify_1.injectable()
    ], MonacoBulkEditService);
    return MonacoBulkEditService;
}());
exports.MonacoBulkEditService = MonacoBulkEditService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-color-registry.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-color-registry.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../node_modules/@theia/core/lib/browser/color-registry.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var MonacoColorRegistry = /** @class */ (function (_super) {
    __extends(MonacoColorRegistry, _super);
    function MonacoColorRegistry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.monacoThemeService = monaco.services.StaticServices.standaloneThemeService.get();
        _this.monacoColorRegistry = monaco.color.getColorRegistry();
        return _this;
    }
    MonacoColorRegistry.prototype.getColors = function () {
        var _a, _b, id, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(this.monacoColorRegistry.getColors()), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    id = _b.value.id;
                    return [4 /*yield*/, id];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    MonacoColorRegistry.prototype.getCurrentColor = function (id) {
        var color = this.monacoThemeService.getTheme().getColor(id);
        return color && color.toString();
    };
    MonacoColorRegistry.prototype.doRegister = function (definition) {
        var _this = this;
        var defaults;
        if (definition.defaults) {
            defaults = {};
            defaults.dark = this.toColor(definition.defaults.dark);
            defaults.light = this.toColor(definition.defaults.light);
            defaults.hc = this.toColor(definition.defaults.hc);
        }
        var identifier = this.monacoColorRegistry.registerColor(definition.id, defaults, definition.description);
        return disposable_1.Disposable.create(function () { return _this.monacoColorRegistry.deregisterColor(identifier); });
    };
    MonacoColorRegistry.prototype.toColor = function (value) {
        if (!value || typeof value === 'string') {
            return value;
        }
        if ('kind' in value) {
            return monaco.color[value.kind](value.v, value.f);
        }
        else if ('r' in value) {
            var r = value.r, g = value.g, b = value.b, a = value.a;
            return new monaco.color.Color(new monaco.color.RGBA(r, g, b, a));
        }
        else {
            var h = value.h, s = value.s, l = value.l, a = value.a;
            return new monaco.color.Color(new monaco.color.HSLA(h, s, l, a));
        }
    };
    MonacoColorRegistry = __decorate([
        inversify_1.injectable()
    ], MonacoColorRegistry);
    return MonacoColorRegistry;
}(color_registry_1.ColorRegistry));
exports.MonacoColorRegistry = MonacoColorRegistry;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_provider_1 = __webpack_require__(/*! ./monaco-editor-provider */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var MonacoCommandRegistry = /** @class */ (function () {
    function MonacoCommandRegistry() {
    }
    MonacoCommandRegistry.prototype.validate = function (command) {
        return this.commands.commandIds.indexOf(command) !== -1 ? command : undefined;
    };
    MonacoCommandRegistry.prototype.registerCommand = function (command, handler) {
        this.commands.registerCommand(__assign({}, command, { id: command.id }), this.newHandler(handler));
    };
    MonacoCommandRegistry.prototype.registerHandler = function (command, handler) {
        this.commands.registerHandler(command, this.newHandler(handler));
    };
    MonacoCommandRegistry.prototype.newHandler = function (monacoHandler) {
        var _this = this;
        return {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.execute.apply(_this, __spread([monacoHandler], args));
            },
            isEnabled: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.isEnabled.apply(_this, __spread([monacoHandler], args));
            },
            isVisible: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.isVisible.apply(_this, __spread([monacoHandler], args));
            }
        };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandRegistry.prototype.execute = function (monacoHandler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var editor = this.monacoEditors.current;
        if (editor) {
            editor.focus();
            return Promise.resolve(monacoHandler.execute.apply(monacoHandler, __spread([editor], args)));
        }
        return Promise.resolve();
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandRegistry.prototype.isEnabled = function (monacoHandler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var editor = this.monacoEditors.current;
        return !!editor && (!monacoHandler.isEnabled || monacoHandler.isEnabled.apply(monacoHandler, __spread([editor], args)));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandRegistry.prototype.isVisible = function (monacoHandler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return browser_1.TextEditorSelection.is(this.selectionService.selection);
    };
    __decorate([
        inversify_1.inject(monaco_editor_provider_1.MonacoEditorProvider),
        __metadata("design:type", monaco_editor_provider_1.MonacoEditorProvider)
    ], MonacoCommandRegistry.prototype, "monacoEditors", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], MonacoCommandRegistry.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], MonacoCommandRegistry.prototype, "selectionService", void 0);
    MonacoCommandRegistry = __decorate([
        inversify_1.injectable()
    ], MonacoCommandRegistry);
    return MonacoCommandRegistry;
}());
exports.MonacoCommandRegistry = MonacoCommandRegistry;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-command-service.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-command-service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../node_modules/@theia/core/lib/common/command.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
exports.MonacoCommandServiceFactory = Symbol('MonacoCommandServiceFactory');
var MonacoCommandService = /** @class */ (function () {
    function MonacoCommandService(commandRegistry) {
        var _this = this;
        this.commandRegistry = commandRegistry;
        this.onWillExecuteCommandEmitter = new event_1.Emitter();
        this.onDidExecuteCommandEmitter = new event_1.Emitter();
        this.toDispose = new disposable_1.DisposableCollection(this.onWillExecuteCommandEmitter, this.onDidExecuteCommandEmitter);
        this.delegateListeners = new disposable_1.DisposableCollection();
        this.toDispose.push(this.commandRegistry.onWillExecuteCommand(function (e) { return _this.onWillExecuteCommandEmitter.fire(e); }));
        this.toDispose.push(this.commandRegistry.onDidExecuteCommand(function (e) { return _this.onDidExecuteCommandEmitter.fire(e); }));
    }
    MonacoCommandService.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(MonacoCommandService.prototype, "onWillExecuteCommand", {
        get: function () {
            return this.onWillExecuteCommandEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoCommandService.prototype, "onDidExecuteCommand", {
        get: function () {
            return this.onDidExecuteCommandEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MonacoCommandService.prototype.setDelegate = function (delegate) {
        var _this = this;
        if (this.toDispose.disposed) {
            return;
        }
        this.delegateListeners.dispose();
        this.toDispose.push(this.delegateListeners);
        this.delegate = delegate;
        if (this.delegate) {
            this.delegateListeners.push(this.delegate['_onWillExecuteCommand'].event(function (event) {
                return _this.onWillExecuteCommandEmitter.fire(event);
            }));
            this.delegateListeners.push(this.delegate['_onDidExecuteCommand'].event(function (event) {
                return _this.onDidExecuteCommandEmitter.fire(event);
            }));
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandService.prototype.executeCommand = function (commandId) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (_a = this.commandRegistry).executeCommand.apply(_a, __spread([commandId], args))];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        if (e_1.code === 'NO_ACTIVE_HANDLER') {
                            return [2 /*return*/, this.executeMonacoCommand.apply(this, __spread([commandId], args))];
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandService.prototype.executeMonacoCommand = function (commandId) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.delegate) {
                    return [2 /*return*/, (_a = this.delegate).executeCommand.apply(_a, __spread([commandId], args))];
                }
                throw new Error("command '" + commandId + "' not found");
            });
        });
    };
    MonacoCommandService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(command_1.CommandRegistry)),
        __metadata("design:paramtypes", [command_1.CommandRegistry])
    ], MonacoCommandService);
    return MonacoCommandService;
}());
exports.MonacoCommandService = MonacoCommandService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-command.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-command.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var lib_1 = __webpack_require__(/*! monaco-languageclient/lib */ "../node_modules/monaco-languageclient/lib/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var quick_open_service_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-service */ "../node_modules/@theia/core/lib/browser/quick-open/quick-open-service.js");
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-model */ "../node_modules/@theia/core/lib/browser/quick-open/quick-open-model.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var MenuRegistry = monaco.actions.MenuRegistry;
var MonacoCommands;
(function (MonacoCommands) {
    var e_1, _a, e_2, _b, e_3, _c;
    MonacoCommands.UNDO = 'undo';
    MonacoCommands.REDO = 'redo';
    MonacoCommands.COMMON_KEYBOARD_ACTIONS = new Set([MonacoCommands.UNDO, MonacoCommands.REDO]);
    MonacoCommands.COMMON_ACTIONS = {};
    MonacoCommands.COMMON_ACTIONS[MonacoCommands.UNDO] = browser_1.CommonCommands.UNDO.id;
    MonacoCommands.COMMON_ACTIONS[MonacoCommands.REDO] = browser_1.CommonCommands.REDO.id;
    MonacoCommands.COMMON_ACTIONS['actions.find'] = browser_1.CommonCommands.FIND.id;
    MonacoCommands.COMMON_ACTIONS['editor.action.startFindReplaceAction'] = browser_1.CommonCommands.REPLACE.id;
    MonacoCommands.SELECTION_SELECT_ALL = 'editor.action.select.all';
    MonacoCommands.SELECTION_EXPAND_SELECTION = 'editor.action.smartSelect.grow';
    MonacoCommands.SELECTION_SHRINK_SELECTION = 'editor.action.smartSelect.shrink';
    MonacoCommands.SELECTION_COPY_LINE_UP = 'editor.action.copyLinesUpAction';
    MonacoCommands.SELECTION_COPY_LINE_DOWN = 'editor.action.copyLinesDownAction';
    MonacoCommands.SELECTION_MOVE_LINE_UP = 'editor.action.moveLinesUpAction';
    MonacoCommands.SELECTION_MOVE_LINE_DOWN = 'editor.action.moveLinesDownAction';
    MonacoCommands.SELECTION_ADD_CURSOR_ABOVE = 'editor.action.insertCursorAbove';
    MonacoCommands.SELECTION_ADD_CURSOR_BELOW = 'editor.action.insertCursorBelow';
    MonacoCommands.SELECTION_ADD_CURSOR_TO_LINE_END = 'editor.action.insertCursorAtEndOfEachLineSelected';
    MonacoCommands.SELECTION_ADD_NEXT_OCCURRENCE = 'editor.action.addSelectionToNextFindMatch';
    MonacoCommands.SELECTION_ADD_PREVIOUS_OCCURRENCE = 'editor.action.addSelectionToPreviousFindMatch';
    MonacoCommands.SELECTION_SELECT_ALL_OCCURRENCES = 'editor.action.selectHighlights';
    MonacoCommands.GO_TO_DEFINITION = 'editor.action.revealDefinition';
    MonacoCommands.ACTIONS = new Map();
    MonacoCommands.ACTIONS.set(MonacoCommands.SELECTION_SELECT_ALL, { id: MonacoCommands.SELECTION_SELECT_ALL, label: 'Select All', delegate: 'editor.action.selectAll' });
    MonacoCommands.EXCLUDE_ACTIONS = new Set(__spread(Object.keys(MonacoCommands.COMMON_ACTIONS), [
        'editor.action.quickCommand',
        'editor.action.clipboardCutAction',
        'editor.action.clipboardCopyAction',
        'editor.action.clipboardPasteAction'
    ]));
    var iconClasses = new Map();
    try {
        for (var _d = __values(MenuRegistry.getMenuItems(7)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var menuItem = _e.value;
            if (menuItem.command.iconClass) {
                iconClasses.set(menuItem.command.id, menuItem.command.iconClass);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _f = __values(monaco.editorExtensions.EditorExtensionsRegistry.getEditorActions()), _g = _f.next(); !_g.done; _g = _f.next()) {
            var command = _g.value;
            var id = command.id;
            if (!MonacoCommands.EXCLUDE_ACTIONS.has(id)) {
                var label = command.label;
                var iconClass = iconClasses.get(id);
                MonacoCommands.ACTIONS.set(id, { id: id, label: label, iconClass: iconClass });
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        for (var _h = __values(monaco.keybindings.KeybindingsRegistry.getDefaultKeybindings()), _j = _h.next(); !_j.done; _j = _h.next()) {
            var keybinding = _j.value;
            var id = keybinding.command;
            if (!MonacoCommands.ACTIONS.has(id) && !MonacoCommands.EXCLUDE_ACTIONS.has(id)) {
                MonacoCommands.ACTIONS.set(id, { id: id, delegate: id });
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
        }
        finally { if (e_3) throw e_3.error; }
    }
})(MonacoCommands = exports.MonacoCommands || (exports.MonacoCommands = {}));
var MonacoEditorCommandHandlers = /** @class */ (function () {
    function MonacoEditorCommandHandlers() {
    }
    MonacoEditorCommandHandlers.prototype.registerCommands = function () {
        this.registerCommonCommandHandlers();
        this.registerEditorCommandHandlers();
        this.registerMonacoActionCommands();
        this.registerInternalLanguageServiceCommands();
    };
    MonacoEditorCommandHandlers.prototype.registerInternalLanguageServiceCommands = function () {
        var e_4, _a;
        var instantiationService = monaco.services.StaticServices.instantiationService.get();
        var monacoCommands = monaco.commands.CommandsRegistry.getCommands();
        var _loop_1 = function (command) {
            if (command.startsWith('_execute')) {
                this_1.commandRegistry.registerCommand({
                    id: command
                }, {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    execute: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return instantiationService.invokeFunction.apply(instantiationService, __spread([monacoCommands.get(command).handler], args));
                    }
                });
            }
        };
        var this_1 = this;
        try {
            for (var _b = __values(monacoCommands.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var command = _c.value;
                _loop_1(command);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MonacoEditorCommandHandlers.prototype.registerCommonCommandHandlers = function () {
        // eslint-disable-next-line guard-for-in
        for (var action in MonacoCommands.COMMON_ACTIONS) {
            var command = MonacoCommands.COMMON_ACTIONS[action];
            var handler = this.newCommonActionHandler(action);
            this.monacoCommandRegistry.registerHandler(command, handler);
        }
    };
    MonacoEditorCommandHandlers.prototype.newCommonActionHandler = function (action) {
        return this.isCommonKeyboardAction(action) ? this.newKeyboardHandler(action) : this.newActionHandler(action);
    };
    MonacoEditorCommandHandlers.prototype.isCommonKeyboardAction = function (action) {
        return MonacoCommands.COMMON_KEYBOARD_ACTIONS.has(action);
    };
    MonacoEditorCommandHandlers.prototype.registerEditorCommandHandlers = function () {
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.SHOW_REFERENCES.id, this.newShowReferenceHandler());
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.CONFIG_INDENTATION.id, this.newConfigIndentationHandler());
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.CONFIG_EOL.id, this.newConfigEolHandler());
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.INDENT_USING_SPACES.id, this.newConfigTabSizeHandler(true));
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.INDENT_USING_TABS.id, this.newConfigTabSizeHandler(false));
    };
    MonacoEditorCommandHandlers.prototype.newShowReferenceHandler = function () {
        var _this = this;
        return {
            execute: function (editor, uri, position, locations) {
                editor.commandService.executeCommand('editor.action.showReferences', monaco.Uri.parse(uri), _this.p2m.asPosition(position), locations.map(function (l) { return _this.p2m.asLocation(l); }));
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newConfigIndentationHandler = function () {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureIndentation(editor); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureIndentation = function (editor) {
        var _this = this;
        var options = [true, false].map(function (useSpaces) {
            return new quick_open_model_1.QuickOpenItem({
                label: "Indent Using " + (useSpaces ? 'Spaces' : 'Tabs'),
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.configureTabSize(editor, useSpaces);
                    }
                    return false;
                }
            });
        });
        this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(options); } }, {
            placeholder: 'Select Action',
            fuzzyMatchLabel: true
        });
    };
    MonacoEditorCommandHandlers.prototype.newConfigEolHandler = function () {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureEol(editor); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureEol = function (editor) {
        var _this = this;
        var options = ['LF', 'CRLF'].map(function (lineEnding) {
            return new quick_open_model_1.QuickOpenItem({
                label: lineEnding,
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.setEol(editor, lineEnding);
                        return true;
                    }
                    return false;
                }
            });
        });
        this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(options); } }, {
            placeholder: 'Select End of Line Sequence',
            fuzzyMatchLabel: true
        });
    };
    MonacoEditorCommandHandlers.prototype.setEol = function (editor, lineEnding) {
        var model = editor.document && editor.document.textEditorModel;
        if (model) {
            if (lineEnding === 'CRLF' || lineEnding === '\r\n') {
                model.pushEOL(monaco.editor.EndOfLineSequence.CRLF);
            }
            else {
                model.pushEOL(monaco.editor.EndOfLineSequence.LF);
            }
        }
    };
    MonacoEditorCommandHandlers.prototype.newConfigTabSizeHandler = function (useSpaces) {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureTabSize(editor, useSpaces); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureTabSize = function (editor, useSpaces) {
        var model = editor.document && editor.document.textEditorModel;
        if (model) {
            var tabSize_1 = model.getOptions().tabSize;
            var sizes = Array.from(Array(8), function (_, x) { return x + 1; });
            var tabSizeOptions_1 = sizes.map(function (size) {
                return new quick_open_model_1.QuickOpenItem({
                    label: size === tabSize_1 ? size + "   Configured Tab Size" : size.toString(),
                    run: function (mode) {
                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                            return false;
                        }
                        model.updateOptions({
                            tabSize: size || tabSize_1,
                            insertSpaces: useSpaces
                        });
                        return true;
                    }
                });
            });
            this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(tabSizeOptions_1); } }, {
                placeholder: 'Select Tab Size for Current File',
                fuzzyMatchLabel: true,
                selectIndex: function (lookFor) {
                    if (!lookFor || lookFor === '') {
                        return tabSize_1 - 1;
                    }
                    return 0;
                }
            });
        }
    };
    MonacoEditorCommandHandlers.prototype.registerMonacoActionCommands = function () {
        var e_5, _a;
        try {
            for (var _b = __values(MonacoCommands.ACTIONS.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var action = _c.value;
                var handler = this.newMonacoActionHandler(action);
                this.monacoCommandRegistry.registerCommand(action, handler);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    MonacoEditorCommandHandlers.prototype.newMonacoActionHandler = function (action) {
        var delegate = action.delegate;
        return delegate ? this.newDelegateHandler(delegate) : this.newActionHandler(action.id);
    };
    MonacoEditorCommandHandlers.prototype.newKeyboardHandler = function (action) {
        return {
            execute: function (editor) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return editor.getControl()._modelData.cursor.trigger('keyboard', action, args);
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newCommandHandler = function (action) {
        return {
            execute: function (editor) {
                var _a;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return (_a = editor.commandService).executeCommand.apply(_a, __spread([action], args));
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newActionHandler = function (action) {
        return {
            execute: function (editor) { return editor.runAction(action); },
            isEnabled: function (editor) { return editor.isActionSupported(action); }
        };
    };
    MonacoEditorCommandHandlers.prototype.newDelegateHandler = function (action) {
        return {
            execute: function (editor) {
                var _a;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return (_a = editor.commandService).executeMonacoCommand.apply(_a, __spread([action], args));
            }
        };
    };
    __decorate([
        inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry),
        __metadata("design:type", monaco_command_registry_1.MonacoCommandRegistry)
    ], MonacoEditorCommandHandlers.prototype, "monacoCommandRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], MonacoEditorCommandHandlers.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(lib_1.ProtocolToMonacoConverter),
        __metadata("design:type", lib_1.ProtocolToMonacoConverter)
    ], MonacoEditorCommandHandlers.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], MonacoEditorCommandHandlers.prototype, "quickOpenService", void 0);
    MonacoEditorCommandHandlers = __decorate([
        inversify_1.injectable()
    ], MonacoEditorCommandHandlers);
    return MonacoEditorCommandHandlers;
}());
exports.MonacoEditorCommandHandlers = MonacoEditorCommandHandlers;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var MonacoContextKeyService = /** @class */ (function (_super) {
    __extends(MonacoContextKeyService, _super);
    function MonacoContextKeyService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expressions = new Map();
        return _this;
    }
    MonacoContextKeyService.prototype.init = function () {
        var _this = this;
        this.contextKeyService.onDidChangeContext(function (e) {
            return _this.fireDidChange({
                affects: function (keys) { return e.affectsSome(keys); }
            });
        });
    };
    MonacoContextKeyService.prototype.createKey = function (key, defaultValue) {
        return this.contextKeyService.createKey(key, defaultValue);
    };
    MonacoContextKeyService.prototype.match = function (expression, context) {
        var ctx = context || this.activeContext || (window.document.activeElement instanceof HTMLElement ? window.document.activeElement : undefined);
        var parsed = this.parse(expression);
        if (!ctx) {
            return this.contextKeyService.contextMatchesRules(parsed);
        }
        var keyContext = this.contextKeyService.getContext(ctx);
        return monaco.keybindings.KeybindingResolver.contextMatchesRules(keyContext, parsed);
    };
    MonacoContextKeyService.prototype.parse = function (when) {
        var expression = this.expressions.get(when);
        if (!expression) {
            expression = monaco.contextkey.ContextKeyExpr.deserialize(when);
            this.expressions.set(when, expression);
        }
        return expression;
    };
    MonacoContextKeyService.prototype.parseKeys = function (expression) {
        return new Set(monaco.contextkey.ContextKeyExpr.deserialize(expression).keys());
    };
    __decorate([
        inversify_1.inject(monaco.contextKeyService.ContextKeyService),
        __metadata("design:type", monaco.contextKeyService.ContextKeyService)
    ], MonacoContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoContextKeyService.prototype, "init", null);
    MonacoContextKeyService = __decorate([
        inversify_1.injectable()
    ], MonacoContextKeyService);
    return MonacoContextKeyService;
}(context_key_service_1.ContextKeyService));
exports.MonacoContextKeyService = MonacoContextKeyService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-context-menu.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-context-menu.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../node_modules/@phosphor/widgets/lib/index.js");
var commands_1 = __webpack_require__(/*! @phosphor/commands */ "../node_modules/@phosphor/commands/lib/index.js");
var MonacoContextMenuService = /** @class */ (function () {
    function MonacoContextMenuService(contextMenuRenderer) {
        this.contextMenuRenderer = contextMenuRenderer;
    }
    MonacoContextMenuService.prototype.showContextMenu = function (delegate) {
        var e_1, _a;
        var anchor = browser_2.toAnchor(delegate.getAnchor());
        // If it is the general context menu, we want to delegate to our menu registry entirely and ignore the actually passed actions.
        // Unfortunately checking the existence of certain properties seems to be the best way to tell, what kind of context menu is requested.
        if (delegate.hasOwnProperty('getKeyBinding')) {
            this.contextMenuRenderer.render(browser_1.EDITOR_CONTEXT_MENU, anchor, function () { return delegate.onHide(false); });
        }
        else {
            var actions = delegate.getActions();
            var commands = new commands_1.CommandRegistry();
            var menu = new widgets_1.Menu({
                commands: commands
            });
            var _loop_1 = function (action) {
                var commandId = 'quickfix_' + actions.indexOf(action);
                commands.addCommand(commandId, {
                    label: action.label,
                    className: action.class,
                    isToggled: function () { return action.checked; },
                    isEnabled: function () { return action.enabled; },
                    execute: function () { return action.run(); }
                });
                menu.addItem({
                    type: 'command',
                    command: commandId
                });
            };
            try {
                for (var actions_1 = __values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                    var action = actions_1_1.value;
                    _loop_1(action);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            menu.aboutToClose.connect(function () { return delegate.onHide(false); });
            menu.open(anchor.x, anchor.y);
        }
    };
    MonacoContextMenuService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.ContextMenuRenderer)),
        __metadata("design:paramtypes", [Object])
    ], MonacoContextMenuService);
    return MonacoContextMenuService;
}());
exports.MonacoContextMenuService = MonacoContextMenuService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-diff-editor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-diff-editor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "../node_modules/@theia/core/lib/browser/diff-uris.js");
var MonacoDiffEditor = /** @class */ (function (_super) {
    __extends(MonacoDiffEditor, _super);
    function MonacoDiffEditor(uri, node, originalModel, modifiedModel, services, diffNavigatorFactory, options, override) {
        var _this = _super.call(this, uri, modifiedModel, node, services, options, override) || this;
        _this.uri = uri;
        _this.node = node;
        _this.originalModel = originalModel;
        _this.modifiedModel = modifiedModel;
        _this.diffNavigatorFactory = diffNavigatorFactory;
        _this.documents.add(originalModel);
        var original = originalModel.textEditorModel;
        var modified = modifiedModel.textEditorModel;
        _this._diffNavigator = diffNavigatorFactory.createdDiffNavigator(_this._diffEditor, options);
        _this._diffEditor.setModel({ original: original, modified: modified });
        return _this;
    }
    Object.defineProperty(MonacoDiffEditor.prototype, "diffEditor", {
        get: function () {
            return this._diffEditor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoDiffEditor.prototype, "diffNavigator", {
        get: function () {
            return this._diffNavigator;
        },
        enumerable: true,
        configurable: true
    });
    MonacoDiffEditor.prototype.create = function (options, override) {
        this._diffEditor = monaco.editor.createDiffEditor(this.node, __assign({}, options, { fixedOverflowWidgets: true }), override);
        this.editor = this._diffEditor.getModifiedEditor();
        return this._diffEditor;
    };
    MonacoDiffEditor.prototype.resize = function (dimension) {
        if (this.node) {
            var layoutSize = this.computeLayoutSize(this.node, dimension);
            this._diffEditor.layout(layoutSize);
        }
    };
    MonacoDiffEditor.prototype.isActionSupported = function (id) {
        var action = this._diffEditor.getSupportedActions().find(function (a) { return a.id === id; });
        return !!action && action.isSupported() && _super.prototype.isActionSupported.call(this, id);
    };
    MonacoDiffEditor.prototype.deltaDecorations = function (params) {
        console.warn('`deltaDecorations` should be called on either the original, or the modified editor.');
        return [];
    };
    MonacoDiffEditor.prototype.getResourceUri = function () {
        return new uri_1.default(this.originalModel.uri);
    };
    MonacoDiffEditor.prototype.createMoveToUri = function (resourceUri) {
        var _a = __read(diff_uris_1.DiffUris.decode(this.uri), 2), left = _a[0], right = _a[1];
        return diff_uris_1.DiffUris.encode(left.withPath(resourceUri.path), right.withPath(resourceUri.path));
    };
    return MonacoDiffEditor;
}(monaco_editor_1.MonacoEditor));
exports.MonacoDiffEditor = MonacoDiffEditor;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var MonacoDiffNavigatorFactory = /** @class */ (function () {
    function MonacoDiffNavigatorFactory() {
    }
    MonacoDiffNavigatorFactory.prototype.createdDiffNavigator = function (editor, options) {
        var navigator = monaco.editor.createDiffNavigator(editor, options);
        var ensureInitialized = function (fwd) {
            if (navigator.nextIdx < -1) {
                navigator._initIdx(fwd);
            }
        };
        return {
            canNavigate: function () { return navigator.canNavigate(); },
            hasNext: function () {
                ensureInitialized(true);
                return navigator.nextIdx + 1 < navigator.ranges.length;
            },
            hasPrevious: function () {
                ensureInitialized(false);
                return navigator.nextIdx > 0;
            },
            next: function () { return navigator.next(); },
            previous: function () { return navigator.previous(); },
            revealFirst: navigator.revealFirst,
        };
    };
    MonacoDiffNavigatorFactory.nullNavigator = {
        canNavigate: function () { return false; },
        hasNext: function () { return false; },
        hasPrevious: function () { return false; },
        next: function () { },
        previous: function () { },
        revealFirst: false,
    };
    MonacoDiffNavigatorFactory = __decorate([
        inversify_1.injectable()
    ], MonacoDiffNavigatorFactory);
    return MonacoDiffNavigatorFactory;
}());
exports.MonacoDiffNavigatorFactory = MonacoDiffNavigatorFactory;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "../node_modules/@theia/core/lib/browser/diff-uris.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var monaco_command_service_1 = __webpack_require__(/*! ./monaco-command-service */ "../node_modules/@theia/monaco/lib/browser/monaco-command-service.js");
var monaco_context_menu_1 = __webpack_require__(/*! ./monaco-context-menu */ "../node_modules/@theia/monaco/lib/browser/monaco-context-menu.js");
var monaco_diff_editor_1 = __webpack_require__(/*! ./monaco-diff-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-diff-editor.js");
var monaco_diff_navigator_factory_1 = __webpack_require__(/*! ./monaco-diff-navigator-factory */ "../node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var monaco_editor_model_1 = __webpack_require__(/*! ./monaco-editor-model */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-model.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var monaco_quick_open_service_1 = __webpack_require__(/*! ./monaco-quick-open-service */ "../node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js");
var monaco_text_model_service_1 = __webpack_require__(/*! ./monaco-text-model-service */ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var monaco_bulk_edit_service_1 = __webpack_require__(/*! ./monaco-bulk-edit-service */ "../node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js");
var application_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/application-protocol */ "../node_modules/@theia/core/lib/common/application-protocol.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var monaco_resolved_keybinding_1 = __webpack_require__(/*! ./monaco-resolved-keybinding */ "../node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js");
var MonacoEditorProvider = /** @class */ (function () {
    function MonacoEditorProvider(codeEditorService, textModelService, contextMenuService, m2p, p2m, workspace, commandServiceFactory, editorPreferences, quickOpenService, diffNavigatorFactory, applicationServer, contextKeyService) {
        var _this = this;
        this.codeEditorService = codeEditorService;
        this.textModelService = textModelService;
        this.contextMenuService = contextMenuService;
        this.m2p = m2p;
        this.p2m = p2m;
        this.workspace = workspace;
        this.commandServiceFactory = commandServiceFactory;
        this.editorPreferences = editorPreferences;
        this.quickOpenService = quickOpenService;
        this.diffNavigatorFactory = diffNavigatorFactory;
        this.applicationServer = applicationServer;
        this.contextKeyService = contextKeyService;
        this.isWindowsBackend = false;
        var staticServices = monaco.services.StaticServices;
        var init = staticServices.init.bind(monaco.services.StaticServices);
        this.applicationServer.getBackendOS().then(function (os) {
            _this.isWindowsBackend = os === core_1.OS.Type.Windows;
        });
        if (staticServices.resourcePropertiesService) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var original = staticServices.resourcePropertiesService.get();
            original.getEOL = function () {
                var eol = _this.editorPreferences['files.eol'];
                if (eol) {
                    if (eol !== 'auto') {
                        return eol;
                    }
                }
                return _this.isWindowsBackend ? '\r\n' : '\n';
            };
        }
        monaco.services.StaticServices.init = function (o) {
            var result = init(o);
            result[0].set(monaco.services.ICodeEditorService, codeEditorService);
            return result;
        };
    }
    MonacoEditorProvider_1 = MonacoEditorProvider;
    Object.defineProperty(MonacoEditorProvider.prototype, "current", {
        /**
         * Returns the last focused MonacoEditor.
         * It takes into account inline editors as well.
         * If you are interested only in standalone editors then use `MonacoEditor.getCurrent(EditorManager)`
         */
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorProvider.prototype.getModel = function (uri, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var reference;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.textModelService.createModelReference(uri)];
                    case 1:
                        reference = _a.sent();
                        if (!reference.object.valid) {
                            reference.dispose();
                            throw Object.assign(new Error("'" + uri.toString() + "' is invalid"), { code: 'MODEL_IS_INVALID' });
                        }
                        toDispose.push(reference);
                        return [2 /*return*/, reference.object];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.get = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorPreferences.ready];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.doCreateEditor(function (override, toDispose) { return _this.createEditor(uri, override, toDispose); })];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.doCreateEditor = function (factory) {
        return __awaiter(this, void 0, void 0, function () {
            var commandService, contextKeyService, _a, codeEditorService, textModelService, contextMenuService, IWorkspaceEditService, toDispose, editor, standaloneCommandService;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        commandService = this.commandServiceFactory();
                        contextKeyService = this.contextKeyService.createScoped();
                        _a = this, codeEditorService = _a.codeEditorService, textModelService = _a.textModelService, contextMenuService = _a.contextMenuService;
                        IWorkspaceEditService = this.bulkEditService;
                        toDispose = new common_1.DisposableCollection(commandService);
                        return [4 /*yield*/, factory({
                                codeEditorService: codeEditorService,
                                textModelService: textModelService,
                                contextMenuService: contextMenuService,
                                commandService: commandService,
                                IWorkspaceEditService: IWorkspaceEditService,
                                contextKeyService: contextKeyService
                            }, toDispose)];
                    case 1:
                        editor = _b.sent();
                        editor.onDispose(function () { return toDispose.dispose(); });
                        this.suppressMonacoKeybindingListener(editor);
                        this.injectKeybindingResolver(editor);
                        standaloneCommandService = new monaco.services.StandaloneCommandService(editor.instantiationService);
                        commandService.setDelegate(standaloneCommandService);
                        this.installQuickOpenService(editor);
                        this.installReferencesController(editor);
                        toDispose.push(editor.onFocusChanged(function (focused) {
                            if (focused) {
                                _this._current = editor;
                            }
                        }));
                        toDispose.push(common_1.Disposable.create(function () {
                            if (_this._current === editor) {
                                _this._current = undefined;
                            }
                        }));
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    /**
     * Suppresses Monaco keydown listener to avoid triggering default Monaco keybindings
     * if they are overridden by a user. Monaco keybindings should be registered as Theia keybindings
     * to allow a user to customize them.
     */
    MonacoEditorProvider.prototype.suppressMonacoKeybindingListener = function (editor) {
        var e_1, _a;
        var keydownListener;
        try {
            for (var _b = __values(editor.getControl()._standaloneKeybindingService._store._toDispose), _c = _b.next(); !_c.done; _c = _b.next()) {
                var listener = _c.value;
                if ('_type' in listener && listener['_type'] === 'keydown') {
                    keydownListener = listener;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (keydownListener) {
            keydownListener.dispose();
        }
    };
    MonacoEditorProvider.prototype.injectKeybindingResolver = function (editor) {
        var _this = this;
        var keybindingService = editor.getControl()._standaloneKeybindingService;
        keybindingService.resolveKeybinding = function (keybinding) { return [new monaco_resolved_keybinding_1.MonacoResolvedKeybinding(monaco_resolved_keybinding_1.MonacoResolvedKeybinding.keySequence(keybinding), _this.keybindingRegistry)]; };
        keybindingService.resolveKeyboardEvent = function (keyboardEvent) {
            var keybinding = new monaco.keybindings.SimpleKeybinding(keyboardEvent.ctrlKey, keyboardEvent.shiftKey, keyboardEvent.altKey, keyboardEvent.metaKey, keyboardEvent.keyCode).toChord();
            return new monaco_resolved_keybinding_1.MonacoResolvedKeybinding(monaco_resolved_keybinding_1.MonacoResolvedKeybinding.keySequence(keybinding), _this.keybindingRegistry);
        };
    };
    MonacoEditorProvider.prototype.createEditor = function (uri, override, toDispose) {
        if (diff_uris_1.DiffUris.isDiffUri(uri)) {
            return this.createMonacoDiffEditor(uri, override, toDispose);
        }
        return this.createMonacoEditor(uri, override, toDispose);
    };
    Object.defineProperty(MonacoEditorProvider.prototype, "preferencePrefixes", {
        get: function () {
            return ['editor.'];
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorProvider.prototype.createMonacoEditor = function (uri, override, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var model, options, editor;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getModel(uri, toDispose)];
                    case 1:
                        model = _a.sent();
                        options = this.createMonacoEditorOptions(model);
                        editor = new monaco_editor_1.MonacoEditor(uri, model, document.createElement('div'), this.services, options, override);
                        toDispose.push(this.editorPreferences.onPreferenceChanged(function (event) {
                            if (event.affects(uri.toString(), model.languageId)) {
                                _this.updateMonacoEditorOptions(editor, event);
                            }
                        }));
                        toDispose.push(editor.onLanguageChanged(function () { return _this.updateMonacoEditorOptions(editor); }));
                        editor.document.onWillSaveModel(function (event) { return event.waitUntil(_this.formatOnSave(editor, event)); });
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.createMonacoEditorOptions = function (model) {
        var options = this.createOptions(this.preferencePrefixes, model.uri, model.languageId);
        options.model = model.textEditorModel;
        options.readOnly = model.readOnly;
        return options;
    };
    MonacoEditorProvider.prototype.updateMonacoEditorOptions = function (editor, event) {
        if (event) {
            var preferenceName = event.preferenceName;
            var overrideIdentifier = editor.document.languageId;
            var newValue = this.editorPreferences.get({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier }, undefined, editor.uri.toString());
            editor.getControl().updateOptions(this.setOption(preferenceName, newValue, this.preferencePrefixes));
        }
        else {
            var options = this.createMonacoEditorOptions(editor.document);
            delete options.model;
            editor.getControl().updateOptions(options);
        }
    };
    MonacoEditorProvider.prototype.formatOnSave = function (editor, event) {
        return __awaiter(this, void 0, void 0, function () {
            var overrideIdentifier, uri, formatOnSave, formatOnSaveTimeout;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event.reason !== monaco_languageclient_1.TextDocumentSaveReason.Manual) {
                            return [2 /*return*/, []];
                        }
                        overrideIdentifier = editor.document.languageId;
                        uri = editor.uri.toString();
                        formatOnSave = this.editorPreferences.get({ preferenceName: 'editor.formatOnSave', overrideIdentifier: overrideIdentifier }, undefined, uri);
                        if (!formatOnSave) {
                            return [2 /*return*/, []];
                        }
                        formatOnSaveTimeout = this.editorPreferences.get({ preferenceName: 'editor.formatOnSaveTimeout', overrideIdentifier: overrideIdentifier }, undefined, uri);
                        return [4 /*yield*/, Promise.race([
                                new Promise(function (_, reject) { return setTimeout(function () { return reject(new Error("Aborted format on save after " + formatOnSaveTimeout + "ms")); }, formatOnSaveTimeout); }),
                                editor.commandService.executeCommand('editor.action.formatDocument')
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, []];
                }
            });
        });
    };
    Object.defineProperty(MonacoEditorProvider.prototype, "diffPreferencePrefixes", {
        get: function () {
            return __spread(this.preferencePrefixes, ['diffEditor.']);
        },
        enumerable: true,
        configurable: true
    });
    MonacoEditorProvider.prototype.createMonacoDiffEditor = function (uri, override, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, original, modified, _b, originalModel, modifiedModel, options, editor;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = __read(diff_uris_1.DiffUris.decode(uri), 2), original = _a[0], modified = _a[1];
                        return [4 /*yield*/, Promise.all([this.getModel(original, toDispose), this.getModel(modified, toDispose)])];
                    case 1:
                        _b = __read.apply(void 0, [_c.sent(), 2]), originalModel = _b[0], modifiedModel = _b[1];
                        options = this.createMonacoDiffEditorOptions(originalModel, modifiedModel);
                        editor = new monaco_diff_editor_1.MonacoDiffEditor(uri, document.createElement('div'), originalModel, modifiedModel, this.services, this.diffNavigatorFactory, options, override);
                        toDispose.push(this.editorPreferences.onPreferenceChanged(function (event) {
                            var originalFileUri = original.withoutQuery().withScheme('file').toString();
                            if (event.affects(originalFileUri, editor.document.languageId)) {
                                _this.updateMonacoDiffEditorOptions(editor, event, originalFileUri);
                            }
                        }));
                        toDispose.push(editor.onLanguageChanged(function () { return _this.updateMonacoDiffEditorOptions(editor); }));
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.createMonacoDiffEditorOptions = function (original, modified) {
        var options = this.createOptions(this.diffPreferencePrefixes, modified.uri, modified.languageId);
        options.originalEditable = !original.readOnly;
        options.readOnly = modified.readOnly;
        return options;
    };
    MonacoEditorProvider.prototype.updateMonacoDiffEditorOptions = function (editor, event, resourceUri) {
        if (event) {
            var preferenceName = event.preferenceName;
            var overrideIdentifier = editor.document.languageId;
            var newValue = this.editorPreferences.get({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier }, undefined, resourceUri);
            editor.diffEditor.updateOptions(this.setOption(preferenceName, newValue, this.diffPreferencePrefixes));
        }
        else {
            var options = this.createMonacoDiffEditorOptions(editor.originalModel, editor.modifiedModel);
            editor.diffEditor.updateOptions(options);
        }
    };
    MonacoEditorProvider.prototype.createOptions = function (prefixes, uri, overrideIdentifier) {
        var _this = this;
        return Object.keys(this.editorPreferences).reduce(function (options, preferenceName) {
            var value = _this.editorPreferences.get({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier }, undefined, uri);
            return _this.setOption(preferenceName, common_1.deepClone(value), prefixes, options);
        }, {});
    };
    MonacoEditorProvider.prototype.setOption = function (preferenceName, value, prefixes, options) {
        if (options === void 0) { options = {}; }
        var optionName = this.toOptionName(preferenceName, prefixes);
        this.doSetOption(options, value, optionName.split('.'));
        return options;
    };
    MonacoEditorProvider.prototype.toOptionName = function (preferenceName, prefixes) {
        var e_2, _a;
        try {
            for (var prefixes_1 = __values(prefixes), prefixes_1_1 = prefixes_1.next(); !prefixes_1_1.done; prefixes_1_1 = prefixes_1.next()) {
                var prefix = prefixes_1_1.value;
                if (preferenceName.startsWith(prefix)) {
                    return preferenceName.substr(prefix.length);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (prefixes_1_1 && !prefixes_1_1.done && (_a = prefixes_1.return)) _a.call(prefixes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return preferenceName;
    };
    MonacoEditorProvider.prototype.doSetOption = function (obj, value, names, idx) {
        if (idx === void 0) { idx = 0; }
        var name = names[idx];
        if (!obj[name]) {
            if (names.length > (idx + 1)) {
                obj[name] = {};
                this.doSetOption(obj[name], value, names, (idx + 1));
            }
            else {
                obj[name] = value;
            }
        }
    };
    MonacoEditorProvider.prototype.installQuickOpenService = function (editor) {
        var _this = this;
        var control = editor.getControl();
        var quickOpenController = control._contributions['editor.controller.quickOpenController'];
        quickOpenController.run = function (options) {
            var selection = control.getSelection();
            _this.quickOpenService.internalOpen(__assign({}, options, { onClose: function (canceled) {
                    quickOpenController.clearDecorations();
                    if (canceled && selection) {
                        control.setSelection(selection);
                        control.revealRangeInCenterIfOutsideViewport(selection);
                    }
                    editor.focus();
                } }));
        };
    };
    MonacoEditorProvider.prototype.installReferencesController = function (editor) {
        var control = editor.getControl();
        var referencesController = control._contributions['editor.contrib.referencesController'];
        referencesController._gotoReference = function (ref) {
            referencesController._widget.hide();
            referencesController._ignoreModelChangeEvent = true;
            var range = monaco.Range.lift(ref.range).collapseToStart();
            // preserve the model that it does not get disposed if an editor preview replaces an editor
            var model = referencesController._model;
            referencesController._model = undefined;
            referencesController._editorService.openCodeEditor({
                resource: ref.uri,
                options: { selection: range }
            }, control).then(function (openedEditor) {
                referencesController._model = model;
                referencesController._ignoreModelChangeEvent = false;
                if (!openedEditor) {
                    referencesController.closeWidget();
                    return;
                }
                if (openedEditor !== control) {
                    // preserve the model that it does not get disposed in `referencesController.closeWidget`
                    referencesController._model = undefined;
                    // to preserve the active editor
                    var focus_1 = control.focus;
                    control.focus = function () { };
                    referencesController.closeWidget();
                    control.focus = focus_1;
                    var modelPromise = Promise.resolve(model);
                    modelPromise.cancel = function () { };
                    openedEditor._contributions['editor.contrib.referencesController'].toggleWidget(range, modelPromise, {
                        getMetaTitle: function (m) { return m.references.length > 1 ? " \u2013 " + m.references.length + " references" : ''; }
                    });
                    return;
                }
                if (referencesController._widget) {
                    referencesController._widget.show(range);
                    referencesController._widget.focus();
                }
            }, function (e) {
                referencesController._ignoreModelChangeEvent = false;
                monaco.error.onUnexpectedError(e);
            });
        };
    };
    MonacoEditorProvider.prototype.getDiffNavigator = function (editor) {
        if (editor instanceof monaco_diff_editor_1.MonacoDiffEditor) {
            return editor.diffNavigator;
        }
        return monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory.nullNavigator;
    };
    MonacoEditorProvider.prototype.createInline = function (uri, node, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doCreateEditor(function (override, toDispose) { return __awaiter(_this, void 0, void 0, function () {
                        var document, model;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    override.contextMenuService = {
                                        showContextMenu: function () { }
                                    };
                                    document = new monaco_editor_model_1.MonacoEditorModel({
                                        uri: uri,
                                        readContents: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2 /*return*/, ''];
                                        }); }); },
                                        dispose: function () { }
                                    }, this.m2p, this.p2m);
                                    toDispose.push(document);
                                    return [4 /*yield*/, document.load()];
                                case 1:
                                    model = (_a.sent()).textEditorModel;
                                    return [2 /*return*/, new monaco_editor_1.MonacoEditor(uri, document, node, this.services, Object.assign({
                                            model: model,
                                            isSimpleWidget: true,
                                            autoSizing: false,
                                            minHeight: 1,
                                            maxHeight: 1
                                        }, MonacoEditorProvider_1.inlineOptions, options), override)];
                            }
                        });
                    }); })];
            });
        });
    };
    var MonacoEditorProvider_1;
    MonacoEditorProvider.inlineOptions = {
        wordWrap: 'on',
        overviewRulerLanes: 0,
        glyphMargin: false,
        lineNumbers: 'off',
        folding: false,
        selectOnLineNumbers: false,
        hideCursorInOverviewRuler: true,
        selectionHighlight: false,
        scrollbar: {
            horizontal: 'hidden'
        },
        lineDecorationsWidth: 0,
        overviewRulerBorder: false,
        scrollBeyondLastLine: false,
        renderLineHighlight: 'none',
        fixedOverflowWidgets: true,
        acceptSuggestionOnEnter: 'smart',
        minimap: {
            enabled: false
        }
    };
    __decorate([
        inversify_1.inject(monaco_bulk_edit_service_1.MonacoBulkEditService),
        __metadata("design:type", monaco_bulk_edit_service_1.MonacoBulkEditService)
    ], MonacoEditorProvider.prototype, "bulkEditService", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_1.MonacoEditorServices),
        __metadata("design:type", monaco_editor_1.MonacoEditorServices)
    ], MonacoEditorProvider.prototype, "services", void 0);
    __decorate([
        inversify_1.inject(browser_2.KeybindingRegistry),
        __metadata("design:type", browser_2.KeybindingRegistry)
    ], MonacoEditorProvider.prototype, "keybindingRegistry", void 0);
    MonacoEditorProvider = MonacoEditorProvider_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_editor_service_1.MonacoEditorService)),
        __param(1, inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService)),
        __param(2, inversify_1.inject(monaco_context_menu_1.MonacoContextMenuService)),
        __param(3, inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter)),
        __param(4, inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter)),
        __param(5, inversify_1.inject(monaco_workspace_1.MonacoWorkspace)),
        __param(6, inversify_1.inject(monaco_command_service_1.MonacoCommandServiceFactory)),
        __param(7, inversify_1.inject(browser_1.EditorPreferences)),
        __param(8, inversify_1.inject(monaco_quick_open_service_1.MonacoQuickOpenService)),
        __param(9, inversify_1.inject(monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory)),
        __param(10, inversify_1.inject(application_protocol_1.ApplicationServer)),
        __param(11, inversify_1.inject(monaco.contextKeyService.ContextKeyService)),
        __metadata("design:paramtypes", [monaco_editor_service_1.MonacoEditorService,
            monaco_text_model_service_1.MonacoTextModelService,
            monaco_context_menu_1.MonacoContextMenuService,
            monaco_languageclient_1.MonacoToProtocolConverter,
            monaco_languageclient_1.ProtocolToMonacoConverter,
            monaco_workspace_1.MonacoWorkspace, Function, Object, monaco_quick_open_service_1.MonacoQuickOpenService,
            monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory, Object, monaco.contextKeyService.ContextKeyService])
    ], MonacoEditorProvider);
    return MonacoEditorProvider;
}());
exports.MonacoEditorProvider = MonacoEditorProvider;
//# sourceMappingURL=monaco-editor-provider.js.map

/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
inversify_1.decorate(inversify_1.injectable(), monaco.services.CodeEditorServiceImpl);
var MonacoEditorService = /** @class */ (function (_super) {
    __extends(MonacoEditorService, _super);
    function MonacoEditorService() {
        return _super.call(this, monaco.services.StaticServices.standaloneThemeService.get()) || this;
    }
    MonacoEditorService_1 = MonacoEditorService;
    MonacoEditorService.prototype.getActiveCodeEditor = function () {
        var editor = monaco_editor_1.MonacoEditor.getActive(this.editors);
        return editor && editor.getControl();
    };
    MonacoEditorService.prototype.openCodeEditor = function (input, source, sideBySide) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, openerOptions, widget, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new uri_1.default(input.resource.toString());
                        openerOptions = this.createEditorOpenerOptions(input, source, sideBySide);
                        return [4 /*yield*/, browser_1.open(this.openerService, uri, openerOptions)];
                    case 1:
                        widget = _a.sent();
                        return [4 /*yield*/, this.findEditorWidgetByUri(widget, uri.toString())];
                    case 2:
                        editorWidget = _a.sent();
                        if (editorWidget && editorWidget.editor instanceof monaco_editor_1.MonacoEditor) {
                            return [2 /*return*/, editorWidget.editor.getControl()];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    MonacoEditorService.prototype.findEditorWidgetByUri = function (widget, uriAsString) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, childWidget, editorWidget, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (widget instanceof browser_2.EditorWidget) {
                            if (widget.editor.uri.toString() === uriAsString) {
                                return [2 /*return*/, widget];
                            }
                            return [2 /*return*/, undefined];
                        }
                        if (!browser_1.ApplicationShell.TrackableWidgetProvider.is(widget)) return [3 /*break*/, 9];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        return [4 /*yield*/, widget.getTrackableWidgets()];
                    case 2:
                        _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        childWidget = _b.value;
                        return [4 /*yield*/, this.findEditorWidgetByUri(childWidget, uriAsString)];
                    case 4:
                        editorWidget = _d.sent();
                        if (editorWidget) {
                            return [2 /*return*/, editorWidget];
                        }
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, undefined];
                }
            });
        });
    };
    MonacoEditorService.prototype.createEditorOpenerOptions = function (input, source, sideBySide) {
        var mode = this.getEditorOpenMode(input);
        var selection = input.options && this.m2p.asRange(input.options.selection);
        var widgetOptions = this.getWidgetOptions(source, sideBySide);
        var preview = !!this.preferencesService.get(MonacoEditorService_1.ENABLE_PREVIEW_PREFERENCE, false);
        return { mode: mode, selection: selection, widgetOptions: widgetOptions, preview: preview };
    };
    MonacoEditorService.prototype.getEditorOpenMode = function (input) {
        var options = __assign({ preserveFocus: false, revealIfVisible: true }, input.options);
        if (options.preserveFocus) {
            return 'reveal';
        }
        return options.revealIfVisible ? 'activate' : 'open';
    };
    MonacoEditorService.prototype.getWidgetOptions = function (source, sideBySide) {
        var ref = monaco_editor_1.MonacoEditor.getWidgetFor(this.editors, source);
        if (!ref) {
            return undefined;
        }
        var area = (ref && this.shell.getAreaFor(ref)) || 'main';
        var mode = ref && sideBySide ? 'split-right' : undefined;
        return { area: area, mode: mode, ref: ref };
    };
    var MonacoEditorService_1;
    MonacoEditorService.ENABLE_PREVIEW_PREFERENCE = 'editor.enablePreview';
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], MonacoEditorService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], MonacoEditorService.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], MonacoEditorService.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], MonacoEditorService.prototype, "editors", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], MonacoEditorService.prototype, "preferencesService", void 0);
    MonacoEditorService = MonacoEditorService_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonacoEditorService);
    return MonacoEditorService;
}(monaco.services.CodeEditorServiceImpl));
exports.MonacoEditorService = MonacoEditorService;
//# sourceMappingURL=monaco-editor-service.js.map

/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-frontend-application-contribution.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-frontend-application-contribution.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var monaco_snippet_suggest_provider_1 = __webpack_require__(/*! ./monaco-snippet-suggest-provider */ "../node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js");
var MonacoFrontendApplicationContribution = /** @class */ (function () {
    function MonacoFrontendApplicationContribution() {
    }
    MonacoFrontendApplicationContribution.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, language, registerLanguage;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                monaco.suggest.setSnippetSuggestSupport(this.snippetSuggestProvider);
                try {
                    for (_a = __values(monaco.languages.getLanguages()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        language = _b.value;
                        this.preferenceSchema.registerOverrideIdentifier(language.id);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                registerLanguage = monaco.languages.register.bind(monaco.languages);
                monaco.languages.register = function (language) {
                    // first register override identifier, because monaco will immediately update already opened documents and then initialize with bad preferences.
                    _this.preferenceSchema.registerOverrideIdentifier(language.id);
                    registerLanguage(language);
                };
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider),
        __metadata("design:type", monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider)
    ], MonacoFrontendApplicationContribution.prototype, "snippetSuggestProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], MonacoFrontendApplicationContribution.prototype, "preferenceSchema", void 0);
    MonacoFrontendApplicationContribution = __decorate([
        inversify_1.injectable()
    ], MonacoFrontendApplicationContribution);
    return MonacoFrontendApplicationContribution;
}());
exports.MonacoFrontendApplicationContribution = MonacoFrontendApplicationContribution;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-frontend-module.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-frontend-module.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
__webpack_require__(/*! ../../src/browser/style/index.css */ "../node_modules/@theia/monaco/src/browser/style/index.css");
__webpack_require__(/*! ../../src/browser/style/symbol-sprite.svg */ "../node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg");
__webpack_require__(/*! ../../src/browser/style/symbol-icons.css */ "../node_modules/@theia/monaco/src/browser/style/symbol-icons.css");
var debounce = __webpack_require__(/*! lodash.debounce */ "../node_modules/lodash.debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var preference_scope_1 = __webpack_require__(/*! @theia/core/lib/common/preferences/preference-scope */ "../node_modules/@theia/core/lib/common/preferences/preference-scope.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var editor_keybinding_contexts_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-keybinding-contexts */ "../node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var monaco_editor_provider_1 = __webpack_require__(/*! ./monaco-editor-provider */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var monaco_menu_1 = __webpack_require__(/*! ./monaco-menu */ "../node_modules/@theia/monaco/lib/browser/monaco-menu.js");
var monaco_command_1 = __webpack_require__(/*! ./monaco-command */ "../node_modules/@theia/monaco/lib/browser/monaco-command.js");
var monaco_keybinding_1 = __webpack_require__(/*! ./monaco-keybinding */ "../node_modules/@theia/monaco/lib/browser/monaco-keybinding.js");
var monaco_languages_1 = __webpack_require__(/*! ./monaco-languages */ "../node_modules/@theia/monaco/lib/browser/monaco-languages.js");
var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "../node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var monaco_configurations_1 = __webpack_require__(/*! ./monaco-configurations */ "../node_modules/@theia/monaco/lib/browser/monaco-configurations.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var monaco_text_model_service_1 = __webpack_require__(/*! ./monaco-text-model-service */ "../node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_context_menu_1 = __webpack_require__(/*! ./monaco-context-menu */ "../node_modules/@theia/monaco/lib/browser/monaco-context-menu.js");
var monaco_outline_contribution_1 = __webpack_require__(/*! ./monaco-outline-contribution */ "../node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js");
var monaco_status_bar_contribution_1 = __webpack_require__(/*! ./monaco-status-bar-contribution */ "../node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js");
var monaco_command_service_1 = __webpack_require__(/*! ./monaco-command-service */ "../node_modules/@theia/monaco/lib/browser/monaco-command-service.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var monaco_quick_open_service_1 = __webpack_require__(/*! ./monaco-quick-open-service */ "../node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js");
var monaco_diff_navigator_factory_1 = __webpack_require__(/*! ./monaco-diff-navigator-factory */ "../node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js");
var monaco_keybinding_contexts_1 = __webpack_require__(/*! ./monaco-keybinding-contexts */ "../node_modules/@theia/monaco/lib/browser/monaco-keybinding-contexts.js");
var monaco_frontend_application_contribution_1 = __webpack_require__(/*! ./monaco-frontend-application-contribution */ "../node_modules/@theia/monaco/lib/browser/monaco-frontend-application-contribution.js");
var monaco_textmate_frontend_bindings_1 = __webpack_require__(/*! ./textmate/monaco-textmate-frontend-bindings */ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js");
var monaco_semantic_highlighting_service_1 = __webpack_require__(/*! ./monaco-semantic-highlighting-service */ "../node_modules/@theia/monaco/lib/browser/monaco-semantic-highlighting-service.js");
var semantic_highlighting_service_1 = __webpack_require__(/*! @theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service */ "../node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js");
var monaco_bulk_edit_service_1 = __webpack_require__(/*! ./monaco-bulk-edit-service */ "../node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js");
var monaco_outline_decorator_1 = __webpack_require__(/*! ./monaco-outline-decorator */ "../node_modules/@theia/monaco/lib/browser/monaco-outline-decorator.js");
var outline_decorator_service_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-decorator-service */ "../node_modules/@theia/outline-view/lib/browser/outline-decorator-service.js");
var monaco_snippet_suggest_provider_1 = __webpack_require__(/*! ./monaco-snippet-suggest-provider */ "../node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../node_modules/@theia/core/lib/browser/context-key-service.js");
var monaco_context_key_service_1 = __webpack_require__(/*! ./monaco-context-key-service */ "../node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js");
var monaco_mime_service_1 = __webpack_require__(/*! ./monaco-mime-service */ "../node_modules/@theia/monaco/lib/browser/monaco-mime-service.js");
var mime_service_1 = __webpack_require__(/*! @theia/core/lib/browser/mime-service */ "../node_modules/@theia/core/lib/browser/mime-service.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var monaco_color_registry_1 = __webpack_require__(/*! ./monaco-color-registry */ "../node_modules/@theia/monaco/lib/browser/monaco-color-registry.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../node_modules/@theia/core/lib/browser/color-registry.js");
var monaco_theming_service_1 = __webpack_require__(/*! ./monaco-theming-service */ "../node_modules/@theia/monaco/lib/browser/monaco-theming-service.js");
inversify_1.decorate(inversify_1.injectable(), monaco_languageclient_1.MonacoToProtocolConverter);
inversify_1.decorate(inversify_1.injectable(), monaco_languageclient_1.ProtocolToMonacoConverter);
inversify_1.decorate(inversify_1.injectable(), monaco.contextKeyService.ContextKeyService);
monaco_theming_service_1.MonacoThemingService.init();
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(monaco_theming_service_1.MonacoThemingService).toSelf().inSingletonScope();
    bind(monaco_context_key_service_1.MonacoContextKeyService).toSelf().inSingletonScope();
    rebind(context_key_service_1.ContextKeyService).toService(monaco_context_key_service_1.MonacoContextKeyService);
    bind(monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(monaco_frontend_application_contribution_1.MonacoFrontendApplicationContribution).inSingletonScope();
    bind(monaco_languageclient_1.MonacoToProtocolConverter).toSelf().inSingletonScope();
    bind(monaco_languageclient_1.ProtocolToMonacoConverter).toSelf().inSingletonScope();
    bind(monaco_languages_1.MonacoLanguages).toSelf().inSingletonScope();
    bind(browser_2.Languages).toService(monaco_languages_1.MonacoLanguages);
    bind(monaco_configurations_1.MonacoConfigurations).toSelf().inSingletonScope();
    bind(monaco_workspace_1.MonacoWorkspace).toSelf().inSingletonScope();
    bind(browser_2.Workspace).toService(monaco_workspace_1.MonacoWorkspace);
    bind(exports.MonacoConfigurationService).toDynamicValue(function (_a) {
        var container = _a.container;
        return createMonacoConfigurationService(container);
    }).inSingletonScope();
    bind(monaco.contextKeyService.ContextKeyService).toDynamicValue(function (_a) {
        var container = _a.container;
        return new monaco.contextKeyService.ContextKeyService(container.get(exports.MonacoConfigurationService));
    }).inSingletonScope();
    bind(monaco_bulk_edit_service_1.MonacoBulkEditService).toSelf().inSingletonScope();
    bind(monaco_editor_service_1.MonacoEditorService).toSelf().inSingletonScope();
    bind(monaco_text_model_service_1.MonacoTextModelService).toSelf().inSingletonScope();
    bind(monaco_context_menu_1.MonacoContextMenuService).toSelf().inSingletonScope();
    bind(monaco_editor_1.MonacoEditorServices).toSelf().inSingletonScope();
    bind(monaco_editor_provider_1.MonacoEditorProvider).toSelf().inSingletonScope();
    bind(monaco_command_service_1.MonacoCommandService).toSelf().inTransientScope();
    bind(monaco_command_service_1.MonacoCommandServiceFactory).toAutoFactory(monaco_command_service_1.MonacoCommandService);
    bind(browser_3.TextEditorProvider).toProvider(function (context) {
        return function (uri) { return context.container.get(monaco_editor_provider_1.MonacoEditorProvider).get(uri); };
    });
    bind(monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory).toSelf().inSingletonScope();
    bind(browser_3.DiffNavigatorProvider).toFactory(function (context) {
        return function (editor) { return context.container.get(monaco_editor_provider_1.MonacoEditorProvider).getDiffNavigator(editor); };
    });
    bind(monaco_outline_contribution_1.MonacoOutlineContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(monaco_outline_contribution_1.MonacoOutlineContribution);
    bind(monaco_status_bar_contribution_1.MonacoStatusBarContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(monaco_status_bar_contribution_1.MonacoStatusBarContribution);
    bind(monaco_command_registry_1.MonacoCommandRegistry).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).to(monaco_command_1.MonacoEditorCommandHandlers).inSingletonScope();
    bind(common_1.MenuContribution).to(monaco_menu_1.MonacoEditorMenuContribution).inSingletonScope();
    bind(browser_1.KeybindingContribution).to(monaco_keybinding_1.MonacoKeybindingContribution).inSingletonScope();
    rebind(editor_keybinding_contexts_1.StrictEditorTextFocusContext).to(monaco_keybinding_contexts_1.MonacoStrictEditorTextFocusContext).inSingletonScope();
    bind(monaco_quick_open_service_1.MonacoQuickOpenService).toSelf().inSingletonScope();
    rebind(browser_1.QuickOpenService).toService(monaco_quick_open_service_1.MonacoQuickOpenService);
    monaco_textmate_frontend_bindings_1.default(bind, unbind, isBound, rebind);
    bind(monaco_semantic_highlighting_service_1.MonacoSemanticHighlightingService).toSelf().inSingletonScope();
    rebind(semantic_highlighting_service_1.SemanticHighlightingService).to(monaco_semantic_highlighting_service_1.MonacoSemanticHighlightingService).inSingletonScope();
    bind(monaco_outline_decorator_1.MonacoOutlineDecorator).toSelf().inSingletonScope();
    bind(outline_decorator_service_1.OutlineTreeDecorator).toService(monaco_outline_decorator_1.MonacoOutlineDecorator);
    bind(monaco_mime_service_1.MonacoMimeService).toSelf().inSingletonScope();
    rebind(mime_service_1.MimeService).toService(monaco_mime_service_1.MonacoMimeService);
    bind(monaco_color_registry_1.MonacoColorRegistry).toSelf().inSingletonScope();
    rebind(color_registry_1.ColorRegistry).toService(monaco_color_registry_1.MonacoColorRegistry);
});
exports.MonacoConfigurationService = Symbol('MonacoConfigurationService');
function createMonacoConfigurationService(container) {
    var configurations = container.get(monaco_configurations_1.MonacoConfigurations);
    var preferences = container.get(browser_1.PreferenceService);
    var preferenceSchemaProvider = container.get(browser_1.PreferenceSchemaProvider);
    var service = monaco.services.StaticServices.configurationService.get();
    var _configuration = service._configuration;
    _configuration.getValue = function (section, overrides, workspace) {
        var overrideIdentifier = overrides && 'overrideIdentifier' in overrides && overrides['overrideIdentifier'] || undefined;
        var resourceUri = overrides && 'resource' in overrides && overrides['resource'].toString();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var proxy = browser_1.createPreferenceProxy(preferences, preferenceSchemaProvider.getCombinedSchema(), {
            resourceUri: resourceUri, overrideIdentifier: overrideIdentifier, style: 'both'
        });
        if (section) {
            return proxy[section];
        }
        return proxy;
    };
    var initFromConfiguration = debounce(function () {
        var event = new monaco.services.ConfigurationChangeEvent();
        event._source = 6 /* DEFAULT */;
        service._onDidChangeConfiguration.fire(event);
    });
    preferences.onPreferenceChanged(function (e) {
        if (e.scope === preference_scope_1.PreferenceScope.Default) {
            initFromConfiguration();
        }
    });
    configurations.onDidChangeConfiguration(function (e) {
        if (e.affectedSections) {
            var event_1 = new monaco.services.ConfigurationChangeEvent();
            event_1.change(e.affectedSections);
            service._onDidChangeConfiguration.fire(event_1);
        }
    });
    return service;
}
exports.createMonacoConfigurationService = createMonacoConfigurationService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-indexed-db.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-indexed-db.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
var idb = __webpack_require__(/*! idb */ "../node_modules/idb/build/esm/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var _monacoDB;
if ('indexedDB' in window) {
    _monacoDB = idb.openDB('theia-monaco', 1, {
        upgrade: function (db) {
            if (!db.objectStoreNames.contains('themes')) {
                db.createObjectStore('themes', { keyPath: 'id' });
            }
        }
    });
}
exports.monacoDB = _monacoDB;
var MonacoThemeState;
(function (MonacoThemeState) {
    function is(state) {
        return !!state && typeof state === 'object' && 'id' in state && 'label' in state && 'uiTheme' in state && 'data' in state;
    }
    MonacoThemeState.is = is;
})(MonacoThemeState = exports.MonacoThemeState || (exports.MonacoThemeState = {}));
function getThemes() {
    return __awaiter(this, void 0, void 0, function () {
        var db, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!exports.monacoDB) {
                        return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, exports.monacoDB];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.transaction('themes', 'readonly').objectStore('themes').getAll()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.filter(MonacoThemeState.is)];
            }
        });
    });
}
exports.getThemes = getThemes;
function putTheme(state) {
    var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
    doPutTheme(state, toDispose);
    return toDispose;
}
exports.putTheme = putTheme;
function doPutTheme(state, toDispose) {
    return __awaiter(this, void 0, void 0, function () {
        var db, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!exports.monacoDB) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, exports.monacoDB];
                case 1:
                    db = _a.sent();
                    if (toDispose.disposed) {
                        return [2 /*return*/];
                    }
                    id = state.id;
                    return [4 /*yield*/, db.transaction('themes', 'readwrite').objectStore('themes').put(state)];
                case 2:
                    _a.sent();
                    if (!toDispose.disposed) return [3 /*break*/, 4];
                    return [4 /*yield*/, deleteTheme(id)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    toDispose.push(disposable_1.Disposable.create(function () { return deleteTheme(id); }));
                    return [2 /*return*/];
            }
        });
    });
}
function deleteTheme(id) {
    return __awaiter(this, void 0, void 0, function () {
        var db;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!exports.monacoDB) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, exports.monacoDB];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.transaction('themes', 'readwrite').objectStore('themes').delete(id)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteTheme = deleteTheme;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-keybinding-contexts.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-keybinding-contexts.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var editor_keybinding_contexts_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-keybinding-contexts */ "../node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
/**
 * Besides checking whether this editor is the currently active one and has the focus, it also checks the followings:
 *  - the suggest widget is visible
 *  - the find (and replace) widget is visible.
 *  - the rename input widget (which we use for refactoring and not find and replace) is visible.
 *
 * If any of the above-mentioned additional checks evaluates to `true` the `canHandle` will evaluate to `false`.
 *
 * See: https://github.com/eamodio/vscode-gitlens/blob/57226d54d1e929be04b02ee31ca294c50305481b/package.json#L2857
 */
var MonacoStrictEditorTextFocusContext = /** @class */ (function (_super) {
    __extends(MonacoStrictEditorTextFocusContext, _super);
    function MonacoStrictEditorTextFocusContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonacoStrictEditorTextFocusContext.prototype.canHandle = function (widget) {
        var editor = widget.editor;
        if (editor instanceof monaco_editor_1.MonacoEditor) {
            return editor.isFocused({ strict: true });
        }
        return _super.prototype.canHandle.call(this, widget);
    };
    MonacoStrictEditorTextFocusContext = __decorate([
        inversify_1.injectable()
    ], MonacoStrictEditorTextFocusContext);
    return MonacoStrictEditorTextFocusContext;
}(editor_keybinding_contexts_1.StrictEditorTextFocusContext));
exports.MonacoStrictEditorTextFocusContext = MonacoStrictEditorTextFocusContext;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-keybinding.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-keybinding.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_command_1 = __webpack_require__(/*! ./monaco-command */ "../node_modules/@theia/monaco/lib/browser/monaco-command.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var monaco_resolved_keybinding_1 = __webpack_require__(/*! ./monaco-resolved-keybinding */ "../node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js");
var MonacoKeybindingContribution = /** @class */ (function () {
    function MonacoKeybindingContribution() {
    }
    MonacoKeybindingContribution.prototype.registerKeybindings = function (registry) {
        var defaultKeybindings = monaco.keybindings.KeybindingsRegistry.getDefaultKeybindings();
        // register in reverse order to align with Monaco dispatch logic:
        // https://github.com/TypeFox/vscode/blob/70b8db24a37fafc77247de7f7cb5bb0195120ed0/src/vs/platform/keybinding/common/keybindingResolver.ts#L302
        for (var i = defaultKeybindings.length - 1; i >= 0; i--) {
            var item = defaultKeybindings[i];
            var command = this.commands.validate(item.command);
            if (command) {
                var when = item.when && item.when.serialize();
                var keybinding = void 0;
                if (item.command === monaco_command_1.MonacoCommands.GO_TO_DEFINITION && !core_1.environment.electron.is()) {
                    keybinding = 'ctrlcmd+f11';
                }
                else {
                    keybinding = monaco_resolved_keybinding_1.MonacoResolvedKeybinding.toKeybinding(item.keybinding);
                }
                registry.registerKeybinding({ command: command, keybinding: keybinding, when: when });
            }
        }
        // `Select All` is not an editor action just like everything else.
        var selectAllCommand = this.commands.validate(monaco_command_1.MonacoCommands.SELECTION_SELECT_ALL);
        if (selectAllCommand) {
            registry.registerKeybinding({
                command: selectAllCommand,
                keybinding: 'ctrlcmd+a',
                context: browser_1.EditorKeybindingContexts.editorTextFocus
            });
        }
    };
    __decorate([
        inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry),
        __metadata("design:type", monaco_command_registry_1.MonacoCommandRegistry)
    ], MonacoKeybindingContribution.prototype, "commands", void 0);
    MonacoKeybindingContribution = __decorate([
        inversify_1.injectable()
    ], MonacoKeybindingContribution);
    return MonacoKeybindingContribution;
}());
exports.MonacoKeybindingContribution = MonacoKeybindingContribution;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
var browser = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var KeyCode = monaco.KeyCode;
exports.KEY_CODE_MAP = [];
(function () {
    exports.KEY_CODE_MAP[3] = KeyCode.PauseBreak; // VK_CANCEL 0x03 Control-break processing
    exports.KEY_CODE_MAP[8] = KeyCode.Backspace;
    exports.KEY_CODE_MAP[9] = KeyCode.Tab;
    exports.KEY_CODE_MAP[13] = KeyCode.Enter;
    exports.KEY_CODE_MAP[16] = KeyCode.Shift;
    exports.KEY_CODE_MAP[17] = KeyCode.Ctrl;
    exports.KEY_CODE_MAP[18] = KeyCode.Alt;
    exports.KEY_CODE_MAP[19] = KeyCode.PauseBreak;
    exports.KEY_CODE_MAP[20] = KeyCode.CapsLock;
    exports.KEY_CODE_MAP[27] = KeyCode.Escape;
    exports.KEY_CODE_MAP[32] = KeyCode.Space;
    exports.KEY_CODE_MAP[33] = KeyCode.PageUp;
    exports.KEY_CODE_MAP[34] = KeyCode.PageDown;
    exports.KEY_CODE_MAP[35] = KeyCode.End;
    exports.KEY_CODE_MAP[36] = KeyCode.Home;
    exports.KEY_CODE_MAP[37] = KeyCode.LeftArrow;
    exports.KEY_CODE_MAP[38] = KeyCode.UpArrow;
    exports.KEY_CODE_MAP[39] = KeyCode.RightArrow;
    exports.KEY_CODE_MAP[40] = KeyCode.DownArrow;
    exports.KEY_CODE_MAP[45] = KeyCode.Insert;
    exports.KEY_CODE_MAP[46] = KeyCode.Delete;
    exports.KEY_CODE_MAP[48] = KeyCode.KEY_0;
    exports.KEY_CODE_MAP[49] = KeyCode.KEY_1;
    exports.KEY_CODE_MAP[50] = KeyCode.KEY_2;
    exports.KEY_CODE_MAP[51] = KeyCode.KEY_3;
    exports.KEY_CODE_MAP[52] = KeyCode.KEY_4;
    exports.KEY_CODE_MAP[53] = KeyCode.KEY_5;
    exports.KEY_CODE_MAP[54] = KeyCode.KEY_6;
    exports.KEY_CODE_MAP[55] = KeyCode.KEY_7;
    exports.KEY_CODE_MAP[56] = KeyCode.KEY_8;
    exports.KEY_CODE_MAP[57] = KeyCode.KEY_9;
    exports.KEY_CODE_MAP[65] = KeyCode.KEY_A;
    exports.KEY_CODE_MAP[66] = KeyCode.KEY_B;
    exports.KEY_CODE_MAP[67] = KeyCode.KEY_C;
    exports.KEY_CODE_MAP[68] = KeyCode.KEY_D;
    exports.KEY_CODE_MAP[69] = KeyCode.KEY_E;
    exports.KEY_CODE_MAP[70] = KeyCode.KEY_F;
    exports.KEY_CODE_MAP[71] = KeyCode.KEY_G;
    exports.KEY_CODE_MAP[72] = KeyCode.KEY_H;
    exports.KEY_CODE_MAP[73] = KeyCode.KEY_I;
    exports.KEY_CODE_MAP[74] = KeyCode.KEY_J;
    exports.KEY_CODE_MAP[75] = KeyCode.KEY_K;
    exports.KEY_CODE_MAP[76] = KeyCode.KEY_L;
    exports.KEY_CODE_MAP[77] = KeyCode.KEY_M;
    exports.KEY_CODE_MAP[78] = KeyCode.KEY_N;
    exports.KEY_CODE_MAP[79] = KeyCode.KEY_O;
    exports.KEY_CODE_MAP[80] = KeyCode.KEY_P;
    exports.KEY_CODE_MAP[81] = KeyCode.KEY_Q;
    exports.KEY_CODE_MAP[82] = KeyCode.KEY_R;
    exports.KEY_CODE_MAP[83] = KeyCode.KEY_S;
    exports.KEY_CODE_MAP[84] = KeyCode.KEY_T;
    exports.KEY_CODE_MAP[85] = KeyCode.KEY_U;
    exports.KEY_CODE_MAP[86] = KeyCode.KEY_V;
    exports.KEY_CODE_MAP[87] = KeyCode.KEY_W;
    exports.KEY_CODE_MAP[88] = KeyCode.KEY_X;
    exports.KEY_CODE_MAP[89] = KeyCode.KEY_Y;
    exports.KEY_CODE_MAP[90] = KeyCode.KEY_Z;
    exports.KEY_CODE_MAP[93] = KeyCode.ContextMenu;
    exports.KEY_CODE_MAP[96] = KeyCode.NUMPAD_0;
    exports.KEY_CODE_MAP[97] = KeyCode.NUMPAD_1;
    exports.KEY_CODE_MAP[98] = KeyCode.NUMPAD_2;
    exports.KEY_CODE_MAP[99] = KeyCode.NUMPAD_3;
    exports.KEY_CODE_MAP[100] = KeyCode.NUMPAD_4;
    exports.KEY_CODE_MAP[101] = KeyCode.NUMPAD_5;
    exports.KEY_CODE_MAP[102] = KeyCode.NUMPAD_6;
    exports.KEY_CODE_MAP[103] = KeyCode.NUMPAD_7;
    exports.KEY_CODE_MAP[104] = KeyCode.NUMPAD_8;
    exports.KEY_CODE_MAP[105] = KeyCode.NUMPAD_9;
    exports.KEY_CODE_MAP[106] = KeyCode.NUMPAD_MULTIPLY;
    exports.KEY_CODE_MAP[107] = KeyCode.NUMPAD_ADD;
    exports.KEY_CODE_MAP[108] = KeyCode.NUMPAD_SEPARATOR;
    exports.KEY_CODE_MAP[109] = KeyCode.NUMPAD_SUBTRACT;
    exports.KEY_CODE_MAP[110] = KeyCode.NUMPAD_DECIMAL;
    exports.KEY_CODE_MAP[111] = KeyCode.NUMPAD_DIVIDE;
    exports.KEY_CODE_MAP[112] = KeyCode.F1;
    exports.KEY_CODE_MAP[113] = KeyCode.F2;
    exports.KEY_CODE_MAP[114] = KeyCode.F3;
    exports.KEY_CODE_MAP[115] = KeyCode.F4;
    exports.KEY_CODE_MAP[116] = KeyCode.F5;
    exports.KEY_CODE_MAP[117] = KeyCode.F6;
    exports.KEY_CODE_MAP[118] = KeyCode.F7;
    exports.KEY_CODE_MAP[119] = KeyCode.F8;
    exports.KEY_CODE_MAP[120] = KeyCode.F9;
    exports.KEY_CODE_MAP[121] = KeyCode.F10;
    exports.KEY_CODE_MAP[122] = KeyCode.F11;
    exports.KEY_CODE_MAP[123] = KeyCode.F12;
    exports.KEY_CODE_MAP[124] = KeyCode.F13;
    exports.KEY_CODE_MAP[125] = KeyCode.F14;
    exports.KEY_CODE_MAP[126] = KeyCode.F15;
    exports.KEY_CODE_MAP[127] = KeyCode.F16;
    exports.KEY_CODE_MAP[128] = KeyCode.F17;
    exports.KEY_CODE_MAP[129] = KeyCode.F18;
    exports.KEY_CODE_MAP[130] = KeyCode.F19;
    exports.KEY_CODE_MAP[144] = KeyCode.NumLock;
    exports.KEY_CODE_MAP[145] = KeyCode.ScrollLock;
    exports.KEY_CODE_MAP[186] = KeyCode.US_SEMICOLON;
    exports.KEY_CODE_MAP[187] = KeyCode.US_EQUAL;
    exports.KEY_CODE_MAP[188] = KeyCode.US_COMMA;
    exports.KEY_CODE_MAP[189] = KeyCode.US_MINUS;
    exports.KEY_CODE_MAP[190] = KeyCode.US_DOT;
    exports.KEY_CODE_MAP[191] = KeyCode.US_SLASH;
    exports.KEY_CODE_MAP[192] = KeyCode.US_BACKTICK;
    exports.KEY_CODE_MAP[193] = KeyCode.ABNT_C1;
    exports.KEY_CODE_MAP[194] = KeyCode.ABNT_C2;
    exports.KEY_CODE_MAP[219] = KeyCode.US_OPEN_SQUARE_BRACKET;
    exports.KEY_CODE_MAP[220] = KeyCode.US_BACKSLASH;
    exports.KEY_CODE_MAP[221] = KeyCode.US_CLOSE_SQUARE_BRACKET;
    exports.KEY_CODE_MAP[222] = KeyCode.US_QUOTE;
    exports.KEY_CODE_MAP[223] = KeyCode.OEM_8;
    exports.KEY_CODE_MAP[226] = KeyCode.OEM_102;
    /**
     * https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
     * If an Input Method Editor is processing key input and the event is keydown, return 229.
     */
    exports.KEY_CODE_MAP[229] = KeyCode.KEY_IN_COMPOSITION;
    if (browser.isIE) {
        exports.KEY_CODE_MAP[91] = KeyCode.Meta;
    }
    else if (browser.isFirefox) {
        exports.KEY_CODE_MAP[59] = KeyCode.US_SEMICOLON;
        exports.KEY_CODE_MAP[107] = KeyCode.US_EQUAL;
        exports.KEY_CODE_MAP[109] = KeyCode.US_MINUS;
        if (monaco.platform.OS === 2 /* Macintosh */) {
            exports.KEY_CODE_MAP[224] = KeyCode.Meta;
        }
    }
    else if (browser.isWebKit) {
        exports.KEY_CODE_MAP[91] = KeyCode.Meta;
        if (monaco.platform.OS === 2 /* Macintosh */) {
            // the two meta keys in the Mac have different key codes (91 and 93)
            exports.KEY_CODE_MAP[93] = KeyCode.Meta;
        }
        else {
            exports.KEY_CODE_MAP[92] = KeyCode.Meta;
        }
    }
})();


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-languages.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-languages.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "../node_modules/monaco-languageclient/lib/index.js");
var problem_manager_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-manager */ "../node_modules/@theia/markers/lib/browser/problem/problem-manager.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var monaco_diagnostic_collection_1 = __webpack_require__(/*! monaco-languageclient/lib/monaco-diagnostic-collection */ "../node_modules/monaco-languageclient/lib/monaco-diagnostic-collection.js");
inversify_1.decorate(inversify_1.injectable(), monaco_languageclient_1.MonacoLanguages);
inversify_1.decorate(inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter), monaco_languageclient_1.MonacoLanguages, 0);
inversify_1.decorate(inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter), monaco_languageclient_1.MonacoLanguages, 1);
var MonacoLanguages = /** @class */ (function (_super) {
    __extends(MonacoLanguages, _super);
    function MonacoLanguages(// eslint-disable-next-line @typescript-eslint/indent
    p2m, m2p, problemManager) {
        var e_1, _a;
        var _this = _super.call(this, p2m, m2p) || this;
        _this.problemManager = problemManager;
        _this.workspaceSymbolProviders = [];
        _this.makers = new Map();
        try {
            for (var _b = __values(_this.problemManager.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var uri = _c.value;
                _this.updateMarkers(new uri_1.default(uri));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        _this.problemManager.onDidChangeMarkers(function (uri) { return _this.updateMarkers(uri); });
        return _this;
    }
    MonacoLanguages.prototype.updateMarkers = function (uri) {
        var e_2, _a, e_3, _b, e_4, _c;
        var uriString = uri.toString();
        var owners = new Map();
        try {
            for (var _d = __values(this.problemManager.findMarkers({ uri: uri })), _e = _d.next(); !_e.done; _e = _d.next()) {
                var marker = _e.value;
                var diagnostics = owners.get(marker.owner) || [];
                diagnostics.push(marker.data);
                owners.set(marker.owner, diagnostics);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var toClean = new Set(this.makers.keys());
        try {
            for (var owners_1 = __values(owners), owners_1_1 = owners_1.next(); !owners_1_1.done; owners_1_1 = owners_1.next()) {
                var _f = __read(owners_1_1.value, 2), owner = _f[0], diagnostics = _f[1];
                toClean.delete(owner);
                var collection = this.makers.get(owner) || new monaco_diagnostic_collection_1.MonacoDiagnosticCollection(owner, this.p2m);
                collection.set(uriString, diagnostics);
                this.makers.set(owner, collection);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (owners_1_1 && !owners_1_1.done && (_b = owners_1.return)) _b.call(owners_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var toClean_1 = __values(toClean), toClean_1_1 = toClean_1.next(); !toClean_1_1.done; toClean_1_1 = toClean_1.next()) {
                var owner = toClean_1_1.value;
                var collection = this.makers.get(owner);
                if (collection) {
                    collection.set(uriString, []);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (toClean_1_1 && !toClean_1_1.done && (_c = toClean_1.return)) _c.call(toClean_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MonacoLanguages.prototype.createDiagnosticCollection = function (name) {
        var _this = this;
        var owner = name || 'default';
        var uris = [];
        return {
            set: function (uri, diagnostics) {
                _this.problemManager.setMarkers(new uri_1.default(uri), owner, diagnostics);
                uris.push(uri);
            },
            dispose: function () {
                var e_5, _a;
                try {
                    for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                        var uri = uris_1_1.value;
                        _this.problemManager.setMarkers(new uri_1.default(uri), owner, []);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        };
    };
    MonacoLanguages.prototype.registerWorkspaceSymbolProvider = function (provider) {
        var _this = this;
        this.workspaceSymbolProviders.push(provider);
        return disposable_1.Disposable.create(function () {
            var index = _this.workspaceSymbolProviders.indexOf(provider);
            if (index !== -1) {
                _this.workspaceSymbolProviders.splice(index, 1);
            }
        });
    };
    Object.defineProperty(MonacoLanguages.prototype, "languages", {
        get: function () {
            return __spread(this.mergeLanguages(monaco.languages.getLanguages()).values());
        },
        enumerable: true,
        configurable: true
    });
    MonacoLanguages.prototype.getLanguage = function (languageId) {
        return this.mergeLanguages(monaco.languages.getLanguages().filter(function (language) { return language.id === languageId; })).get(languageId);
    };
    MonacoLanguages.prototype.mergeLanguages = function (registered) {
        var e_6, _a, e_7, _b, e_8, _c, e_9, _d;
        var languages = new Map();
        try {
            for (var registered_1 = __values(registered), registered_1_1 = registered_1.next(); !registered_1_1.done; registered_1_1 = registered_1.next()) {
                var _e = registered_1_1.value, id = _e.id, aliases = _e.aliases, extensions = _e.extensions, filenames = _e.filenames;
                var merged = languages.get(id) || {
                    id: id,
                    name: '',
                    extensions: new Set(),
                    filenames: new Set()
                };
                if (!merged.name && aliases && aliases.length) {
                    merged.name = aliases[0];
                }
                if (extensions && extensions.length) {
                    try {
                        for (var extensions_1 = (e_7 = void 0, __values(extensions)), extensions_1_1 = extensions_1.next(); !extensions_1_1.done; extensions_1_1 = extensions_1.next()) {
                            var extension = extensions_1_1.value;
                            merged.extensions.add(extension);
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (extensions_1_1 && !extensions_1_1.done && (_b = extensions_1.return)) _b.call(extensions_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
                if (filenames && filenames.length) {
                    try {
                        for (var filenames_1 = (e_8 = void 0, __values(filenames)), filenames_1_1 = filenames_1.next(); !filenames_1_1.done; filenames_1_1 = filenames_1.next()) {
                            var filename = filenames_1_1.value;
                            merged.filenames.add(filename);
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (filenames_1_1 && !filenames_1_1.done && (_c = filenames_1.return)) _c.call(filenames_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
                languages.set(id, merged);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (registered_1_1 && !registered_1_1.done && (_a = registered_1.return)) _a.call(registered_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        try {
            for (var languages_1 = __values(languages), languages_1_1 = languages_1.next(); !languages_1_1.done; languages_1_1 = languages_1.next()) {
                var _f = __read(languages_1_1.value, 2), id = _f[0], language = _f[1];
                if (!language.name) {
                    language.name = id;
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (languages_1_1 && !languages_1_1.done && (_d = languages_1.return)) _d.call(languages_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return languages;
    };
    MonacoLanguages.prototype.createSignatureHelpProvider = function (selector, provider) {
        var _this = this;
        var triggerCharacters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            triggerCharacters[_i - 2] = arguments[_i];
        }
        var signatureHelpTriggerCharacters = __spread((provider.triggerCharacters || triggerCharacters || []));
        var signatureHelpRetriggerCharacters = __spread((provider.retriggerCharacters || []));
        return {
            signatureHelpTriggerCharacters: signatureHelpTriggerCharacters,
            signatureHelpRetriggerCharacters: signatureHelpRetriggerCharacters,
            provideSignatureHelp: function (model, position, token) { return __awaiter(_this, void 0, void 0, function () {
                var params, help;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, undefined];
                            }
                            params = this.m2p.asTextDocumentPositionParams(model, position);
                            return [4 /*yield*/, provider.provideSignatureHelp(params, token, undefined /* not used by LC */)];
                        case 1:
                            help = _a.sent();
                            if (!help) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, {
                                    value: this.p2m.asSignatureHelp(help),
                                    dispose: function () { }
                                }];
                    }
                });
            }); }
        };
    };
    MonacoLanguages.prototype.createCodeActionProvider = function (selector, provider) {
        var _this = this;
        return {
            provideCodeActions: function (model, range, context, token) { return __awaiter(_this, void 0, void 0, function () {
                var params, actions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, undefined];
                            }
                            params = this.m2p.asCodeActionParams(model, range, context);
                            return [4 /*yield*/, provider.provideCodeActions(params, token)];
                        case 1:
                            actions = _a.sent();
                            if (!actions) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, {
                                    actions: this.p2m.asCodeActions(actions),
                                    dispose: function () { }
                                }];
                    }
                });
            }); }
        };
    };
    MonacoLanguages.prototype.createCodeLensProvider = function (selector, provider) {
        var _this = this;
        return {
            provideCodeLenses: function (model, token) { return __awaiter(_this, void 0, void 0, function () {
                var params, lenses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, undefined];
                            }
                            params = this.m2p.asCodeLensParams(model);
                            return [4 /*yield*/, provider.provideCodeLenses(params, token)];
                        case 1:
                            lenses = _a.sent();
                            if (!lenses) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, {
                                    lenses: this.p2m.asCodeLenses(lenses),
                                    dispose: function () { }
                                }];
                    }
                });
            }); },
            resolveCodeLens: provider.resolveCodeLens ? function (model, codeLens, token) { return __awaiter(_this, void 0, void 0, function () {
                var protocolCodeLens, result, resolvedCodeLens;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, codeLens];
                            }
                            protocolCodeLens = this.m2p.asCodeLens(codeLens);
                            return [4 /*yield*/, provider.resolveCodeLens(protocolCodeLens, token)];
                        case 1:
                            result = _a.sent();
                            if (result) {
                                resolvedCodeLens = this.p2m.asCodeLens(result);
                                Object.assign(codeLens, resolvedCodeLens);
                            }
                            return [2 /*return*/, codeLens];
                    }
                });
            }); } : (function (_, codeLens, __) { return codeLens; })
        };
    };
    MonacoLanguages = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter)),
        __param(1, inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter)),
        __param(2, inversify_1.inject(problem_manager_1.ProblemManager)),
        __metadata("design:paramtypes", [monaco_languageclient_1.ProtocolToMonacoConverter,
            monaco_languageclient_1.MonacoToProtocolConverter,
            problem_manager_1.ProblemManager])
    ], MonacoLanguages);
    return MonacoLanguages;
}(monaco_languageclient_1.MonacoLanguages));
exports.MonacoLanguages = MonacoLanguages;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-loader.js":
/*!******************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-loader.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
/* eslint-disable @typescript-eslint/no-explicit-any */
function loadVsRequire(context) {
    // Monaco uses a custom amd loader that over-rides node's require.
    // Keep a reference to an original require so we can restore it after executing the amd loader file.
    var originalRequire = context.require;
    return new Promise(function (resolve) {
        return window.addEventListener('load', function () {
            var vsLoader = document.createElement('script');
            vsLoader.type = 'text/javascript';
            vsLoader.src = './vs/loader.js';
            vsLoader.charset = 'utf-8';
            vsLoader.addEventListener('load', function () {
                // Save Monaco's amd require and restore the original require
                var amdRequire = context.require;
                if (originalRequire) {
                    context.require = originalRequire;
                }
                resolve(amdRequire);
            });
            document.body.appendChild(vsLoader);
        }, { once: true });
    });
}
exports.loadVsRequire = loadVsRequire;
function loadMonaco(vsRequire) {
    return new Promise(function (resolve) {
        vsRequire(['vs/editor/editor.main'], function () {
            vsRequire([
                'vs/language/css/monaco.contribution',
                'vs/language/html/monaco.contribution',
                'vs/platform/commands/common/commands',
                'vs/platform/actions/common/actions',
                'vs/platform/keybinding/common/keybindingsRegistry',
                'vs/platform/keybinding/common/keybindingResolver',
                'vs/platform/keybinding/common/usLayoutResolvedKeybinding',
                'vs/base/common/keybindingLabels',
                'vs/base/common/keyCodes',
                'vs/base/common/mime',
                'vs/editor/browser/editorExtensions',
                'vs/editor/standalone/browser/simpleServices',
                'vs/editor/standalone/browser/standaloneServices',
                'vs/editor/standalone/browser/standaloneLanguages',
                'vs/base/parts/quickopen/browser/quickOpenWidget',
                'vs/base/parts/quickopen/browser/quickOpenModel',
                'vs/base/common/filters',
                'vs/platform/theme/common/styler',
                'vs/platform/theme/common/colorRegistry',
                'vs/base/common/color',
                'vs/base/common/platform',
                'vs/editor/common/modes',
                'vs/editor/contrib/suggest/suggest',
                'vs/editor/contrib/snippet/snippetParser',
                'vs/platform/configuration/common/configuration',
                'vs/platform/configuration/common/configurationModels',
                'vs/editor/browser/services/codeEditorService',
                'vs/editor/browser/services/codeEditorServiceImpl',
                'vs/platform/markers/common/markerService',
                'vs/platform/contextkey/common/contextkey',
                'vs/platform/contextkey/browser/contextKeyService',
                'vs/base/common/errors'
            ], function (css, html, commands, actions, keybindingsRegistry, keybindingResolver, resolvedKeybinding, keybindingLabels, keyCodes, mime, editorExtensions, simpleServices, standaloneServices, standaloneLanguages, quickOpenWidget, quickOpenModel, filters, styler, colorRegistry, color, platform, modes, suggest, snippetParser, configuration, configurationModels, codeEditorService, codeEditorServiceImpl, markerService, contextKey, contextKeyService, error) {
                var global = self;
                global.monaco.commands = commands;
                global.monaco.actions = actions;
                global.monaco.keybindings = Object.assign({}, keybindingsRegistry, keybindingResolver, resolvedKeybinding, keybindingLabels, keyCodes);
                global.monaco.services = Object.assign({}, simpleServices, standaloneServices, standaloneLanguages, configuration, configurationModels, codeEditorService, codeEditorServiceImpl, markerService);
                global.monaco.quickOpen = Object.assign({}, quickOpenWidget, quickOpenModel);
                global.monaco.filters = filters;
                global.monaco.theme = styler;
                global.monaco.color = Object.assign({}, colorRegistry, color);
                global.monaco.platform = platform;
                global.monaco.editorExtensions = editorExtensions;
                global.monaco.modes = modes;
                global.monaco.suggest = suggest;
                global.monaco.snippetParser = snippetParser;
                global.monaco.contextkey = contextKey;
                global.monaco.contextKeyService = contextKeyService;
                global.monaco.mime = mime;
                global.monaco.error = error;
                resolve();
            });
        });
    });
}
exports.loadMonaco = loadMonaco;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-menu.js":
/*!****************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-menu.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_command_1 = __webpack_require__(/*! ./monaco-command */ "../node_modules/@theia/monaco/lib/browser/monaco-command.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "../node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var MenuRegistry = monaco.actions.MenuRegistry;
var MonacoMenus;
(function (MonacoMenus) {
    MonacoMenus.SELECTION = __spread(common_1.MAIN_MENU_BAR, ['3_selection']);
    MonacoMenus.SELECTION_GROUP = {
        id: '1_selection_group',
        actions: [
            monaco_command_1.MonacoCommands.SELECTION_SELECT_ALL,
            monaco_command_1.MonacoCommands.SELECTION_EXPAND_SELECTION,
            monaco_command_1.MonacoCommands.SELECTION_SHRINK_SELECTION
        ]
    };
    MonacoMenus.SELECTION_MOVE_GROUP = {
        id: '2_copy_move_group',
        actions: [
            monaco_command_1.MonacoCommands.SELECTION_COPY_LINE_UP,
            monaco_command_1.MonacoCommands.SELECTION_COPY_LINE_DOWN,
            monaco_command_1.MonacoCommands.SELECTION_MOVE_LINE_UP,
            monaco_command_1.MonacoCommands.SELECTION_MOVE_LINE_DOWN
        ]
    };
    MonacoMenus.SELECTION_CURSOR_GROUP = {
        id: '3_cursor_group',
        actions: [
            monaco_command_1.MonacoCommands.SELECTION_ADD_CURSOR_ABOVE,
            monaco_command_1.MonacoCommands.SELECTION_ADD_CURSOR_BELOW,
            monaco_command_1.MonacoCommands.SELECTION_ADD_CURSOR_TO_LINE_END,
            monaco_command_1.MonacoCommands.SELECTION_ADD_NEXT_OCCURRENCE,
            monaco_command_1.MonacoCommands.SELECTION_ADD_PREVIOUS_OCCURRENCE,
            monaco_command_1.MonacoCommands.SELECTION_SELECT_ALL_OCCURRENCES
        ]
    };
    MonacoMenus.SELECTION_GROUPS = [
        MonacoMenus.SELECTION_GROUP,
        MonacoMenus.SELECTION_MOVE_GROUP,
        MonacoMenus.SELECTION_CURSOR_GROUP
    ];
})(MonacoMenus = exports.MonacoMenus || (exports.MonacoMenus = {}));
var MonacoEditorMenuContribution = /** @class */ (function () {
    function MonacoEditorMenuContribution(commands) {
        this.commands = commands;
    }
    MonacoEditorMenuContribution.prototype.registerMenus = function (registry) {
        var e_1, _a, e_2, _b;
        var _this = this;
        try {
            for (var _c = __values(MenuRegistry.getMenuItems(7)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var item = _d.value;
                var commandId = this.commands.validate(item.command.id);
                if (commandId) {
                    var menuPath = __spread(browser_1.EDITOR_CONTEXT_MENU, [(item.group || '')]);
                    registry.registerMenuAction(menuPath, { commandId: commandId });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        registry.registerSubmenu(MonacoMenus.SELECTION, 'Selection');
        var _loop_1 = function (group) {
            group.actions.forEach(function (action, index) {
                var commandId = _this.commands.validate(action);
                if (commandId) {
                    var path = __spread(MonacoMenus.SELECTION, [group.id]);
                    var order = index.toString();
                    registry.registerMenuAction(path, { commandId: commandId, order: order });
                }
            });
        };
        try {
            for (var _e = __values(MonacoMenus.SELECTION_GROUPS), _f = _e.next(); !_f.done; _f = _e.next()) {
                var group = _f.value;
                _loop_1(group);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoEditorMenuContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry)),
        __metadata("design:paramtypes", [monaco_command_registry_1.MonacoCommandRegistry])
    ], MonacoEditorMenuContribution);
    return MonacoEditorMenuContribution;
}());
exports.MonacoEditorMenuContribution = MonacoEditorMenuContribution;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-mime-service.js":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-mime-service.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mime_service_1 = __webpack_require__(/*! @theia/core/lib/browser/mime-service */ "../node_modules/@theia/core/lib/browser/mime-service.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var MonacoMimeService = /** @class */ (function (_super) {
    __extends(MonacoMimeService, _super);
    function MonacoMimeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonacoMimeService.prototype.setAssociations = function (associations) {
        var e_1, _a;
        monaco.mime.clearTextMimes(true);
        try {
            for (var associations_1 = __values(associations), associations_1_1 = associations_1.next(); !associations_1_1.done; associations_1_1 = associations_1.next()) {
                var association = associations_1_1.value;
                var mimetype = this.getMimeForMode(association.id) || "text/x-" + association.id;
                monaco.mime.registerTextMime({ id: association.id, mime: mimetype, filepattern: association.filepattern, userConfigured: true }, false);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (associations_1_1 && !associations_1_1.done && (_a = associations_1.return)) _a.call(associations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MonacoMimeService.prototype.getMimeForMode = function (langId) {
        var e_2, _a;
        try {
            for (var _b = __values(monaco.languages.getLanguages()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var language = _c.value;
                if (language.id === langId && language.mimetypes) {
                    return language.mimetypes[0];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return undefined;
    };
    MonacoMimeService = __decorate([
        inversify_1.injectable()
    ], MonacoMimeService);
    return MonacoMimeService;
}(mime_service_1.MimeService));
exports.MonacoMimeService = MonacoMimeService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var SymbolKind = monaco.languages.SymbolKind;
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var DocumentSymbolProviderRegistry = monaco.modes.DocumentSymbolProviderRegistry;
var CancellationTokenSource = monaco.CancellationTokenSource;
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var outline_view_service_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-service */ "../node_modules/@theia/outline-view/lib/browser/outline-view-service.js");
var outline_view_widget_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-widget */ "../node_modules/@theia/outline-view/lib/browser/outline-view-widget.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "../node_modules/lodash.debounce/index.js");
var MonacoOutlineContribution = /** @class */ (function () {
    function MonacoOutlineContribution() {
        this.toDisposeOnClose = new core_1.DisposableCollection();
        this.toDisposeOnEditor = new core_1.DisposableCollection();
        this.canUpdateOutline = true;
        this.tokenSource = new CancellationTokenSource();
    }
    MonacoOutlineContribution.prototype.onStart = function (app) {
        var _this = this;
        this.outlineViewService.onDidChangeOpenState(function (open) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (open) {
                    this.toDisposeOnClose.push(this.toDisposeOnEditor);
                    this.toDisposeOnClose.push(DocumentSymbolProviderRegistry.onDidChange(debounce(function () { return _this.updateOutline(); })));
                    this.toDisposeOnClose.push(this.editorManager.onCurrentEditorChanged(debounce(function () { return _this.handleCurrentEditorChanged(); }, 50)));
                    this.handleCurrentEditorChanged();
                }
                else {
                    this.toDisposeOnClose.dispose();
                }
                return [2 /*return*/];
            });
        }); });
        this.outlineViewService.onDidSelect(function (node) { return __awaiter(_this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(MonacoOutlineSymbolInformationNode.is(node) && node.parent)) return [3 /*break*/, 2];
                        options = {
                            mode: 'reveal',
                            selection: node.range
                        };
                        return [4 /*yield*/, this.selectInEditor(node, options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        this.outlineViewService.onDidOpen(function (node) { return __awaiter(_this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!MonacoOutlineSymbolInformationNode.is(node)) return [3 /*break*/, 2];
                        options = {
                            selection: {
                                start: node.range.start
                            }
                        };
                        return [4 /*yield*/, this.selectInEditor(node, options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    MonacoOutlineContribution.prototype.selectInEditor = function (node, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Avoid cyclic updates: Outline -> Editor -> Outline.
                        this.canUpdateOutline = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.editorManager.open(node.uri, options)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.canUpdateOutline = true;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.handleCurrentEditorChanged = function () {
        var _this = this;
        this.toDisposeOnEditor.dispose();
        if (this.toDisposeOnClose.disposed) {
            return;
        }
        this.toDisposeOnClose.push(this.toDisposeOnEditor);
        this.toDisposeOnEditor.push(core_1.Disposable.create(function () { return _this.roots = undefined; }));
        var editor = this.editorManager.currentEditor;
        if (editor) {
            var model = monaco_editor_1.MonacoEditor.get(editor).getControl().getModel();
            if (model) {
                this.toDisposeOnEditor.push(model.onDidChangeContent(function () {
                    _this.roots = undefined; // Invalidate the previously resolved roots.
                    _this.updateOutline();
                }));
            }
            this.toDisposeOnEditor.push(editor.editor.onSelectionChanged(function (selection) { return _this.updateOutline(selection); }));
        }
        this.updateOutline();
    };
    MonacoOutlineContribution.prototype.updateOutline = function (editorSelection) {
        return __awaiter(this, void 0, void 0, function () {
            var token, editor, model, roots, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.canUpdateOutline) {
                            return [2 /*return*/];
                        }
                        this.tokenSource.cancel();
                        this.tokenSource = new CancellationTokenSource();
                        token = this.tokenSource.token;
                        editor = monaco_editor_1.MonacoEditor.get(this.editorManager.currentEditor);
                        model = editor && editor.getControl().getModel();
                        _a = model;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createRoots(model, token, editorSelection)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        roots = _a;
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.outlineViewService.publish(roots || []);
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.createRoots = function (model, token, editorSelection) {
        return __awaiter(this, void 0, void 0, function () {
            var resetSelection_1, providers, uri, providers_1, providers_1_1, provider, symbols, nodes, _a, e_1_1;
            var e_1, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.roots && this.roots.length > 0)) return [3 /*break*/, 1];
                        resetSelection_1 = function (node) {
                            node.selected = false;
                            node.children.forEach(resetSelection_1);
                        };
                        this.roots.forEach(resetSelection_1);
                        return [3 /*break*/, 12];
                    case 1:
                        this.roots = [];
                        return [4 /*yield*/, DocumentSymbolProviderRegistry.all(model)];
                    case 2:
                        providers = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/, []];
                        }
                        uri = new uri_1.default(model.uri.toString());
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        providers_1 = __values(providers), providers_1_1 = providers_1.next();
                        _d.label = 4;
                    case 4:
                        if (!!providers_1_1.done) return [3 /*break*/, 9];
                        provider = providers_1_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, provider.provideDocumentSymbols(model, token)];
                    case 6:
                        symbols = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/, []];
                        }
                        nodes = this.createNodes(uri, symbols || []);
                        (_c = this.roots).push.apply(_c, __spread(nodes));
                        return [3 /*break*/, 8];
                    case 7:
                        _a = _d.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        providers_1_1 = providers_1.next();
                        return [3 /*break*/, 4];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (providers_1_1 && !providers_1_1.done && (_b = providers_1.return)) _b.call(providers_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        this.applySelection(this.roots, editorSelection);
                        return [2 /*return*/, this.roots];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.createNodes = function (uri, symbols) {
        var e_2, _a, e_3, _b;
        var _this = this;
        var rangeBased = false;
        var ids = new Map();
        var roots = [];
        var nodesByName = symbols.sort(this.orderByPosition).reduce(function (result, symbol) {
            var node = _this.createNode(uri, symbol, ids);
            if (symbol.children) {
                MonacoOutlineSymbolInformationNode.insert(roots, node);
            }
            else {
                rangeBased = rangeBased || symbol.range.startLineNumber !== symbol.range.endLineNumber;
                var values = result.get(symbol.name) || [];
                values.push({ symbol: symbol, node: node });
                result.set(symbol.name, values);
            }
            return result;
        }, new Map());
        try {
            for (var _c = __values(nodesByName.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var nodes = _d.value;
                var _loop_1 = function (node, symbol) {
                    if (!symbol.containerName) {
                        MonacoOutlineSymbolInformationNode.insert(roots, node);
                    }
                    else {
                        var possibleParents = nodesByName.get(symbol.containerName);
                        if (possibleParents) {
                            var parent_1 = possibleParents.find(function (possibleParent) { return _this.parentContains(symbol, possibleParent.symbol, rangeBased); });
                            if (parent_1) {
                                node.parent = parent_1.node;
                                MonacoOutlineSymbolInformationNode.insert(parent_1.node.children, node);
                            }
                        }
                    }
                };
                try {
                    for (var nodes_1 = (e_3 = void 0, __values(nodes)), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                        var _e = nodes_1_1.value, node = _e.node, symbol = _e.symbol;
                        _loop_1(node, symbol);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (nodes_1_1 && !nodes_1_1.done && (_b = nodes_1.return)) _b.call(nodes_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (!roots.length) {
            var nodes = nodesByName.values().next().value;
            if (nodes && !nodes[0].node.parent) {
                return [nodes[0].node];
            }
            return [];
        }
        return roots;
    };
    /**
     * Sets the selection on the sub-trees based on the optional editor selection.
     * Select the narrowest node that is strictly contains the editor selection.
     */
    MonacoOutlineContribution.prototype.applySelection = function (roots, editorSelection) {
        var e_4, _a;
        if (editorSelection) {
            try {
                for (var roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                    var root = roots_1_1.value;
                    if (this.parentContains(editorSelection, root.fullRange, true)) {
                        var children = root.children;
                        root.selected = !root.expanded || !this.applySelection(children, editorSelection);
                        return true;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return false;
    };
    /**
     * Returns `true` if `candidate` is strictly contained inside `parent`
     *
     * If the argument is a `DocumentSymbol`, then `getFullRange` will be used to retrieve the range of the underlying symbol.
     */
    MonacoOutlineContribution.prototype.parentContains = function (candidate, parent, rangeBased) {
        // TODO: move this code to the `monaco-languageclient`: https://github.com/eclipse-theia/theia/pull/2885#discussion_r217800446
        var candidateRange = browser_1.Range.is(candidate) ? candidate : this.getFullRange(candidate);
        var parentRange = browser_1.Range.is(parent) ? parent : this.getFullRange(parent);
        var sameStartLine = candidateRange.start.line === parentRange.start.line;
        var startColGreaterOrEqual = candidateRange.start.character >= parentRange.start.character;
        var startLineGreater = candidateRange.start.line > parentRange.start.line;
        var sameEndLine = candidateRange.end.line === parentRange.end.line;
        var endColSmallerOrEqual = candidateRange.end.character <= parentRange.end.character;
        var endLineSmaller = candidateRange.end.line < parentRange.end.line;
        return (((sameStartLine && startColGreaterOrEqual || startLineGreater) &&
            (sameEndLine && endColSmallerOrEqual || endLineSmaller)) || !rangeBased);
    };
    /**
     * `monaco` to LSP `Range` converter. Converts the `1-based` location indices into `0-based` ones.
     */
    MonacoOutlineContribution.prototype.asRange = function (range) {
        var startLineNumber = range.startLineNumber, startColumn = range.startColumn, endLineNumber = range.endLineNumber, endColumn = range.endColumn;
        return {
            start: {
                line: startLineNumber - 1,
                character: startColumn - 1
            },
            end: {
                line: endLineNumber - 1,
                character: endColumn - 1
            }
        };
    };
    /**
     * Returns with a range enclosing this symbol not including leading/trailing whitespace but everything else like comments.
     * This information is typically used to determine if the clients cursor is inside the symbol to reveal in the symbol in the UI.
     * This allows to obtain the range including the associated comments.
     *
     * See: [`DocumentSymbol#range`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    MonacoOutlineContribution.prototype.getFullRange = function (documentSymbol) {
        return this.asRange(documentSymbol.range);
    };
    /**
     * The range that should be selected and revealed when this symbol is being picked, e.g the name of a function. Must be contained by the `getSelectionRange`.
     *
     * See: [`DocumentSymbol#selectionRange`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    MonacoOutlineContribution.prototype.getNameRange = function (documentSymbol) {
        return this.asRange(documentSymbol.selectionRange);
    };
    MonacoOutlineContribution.prototype.createNode = function (uri, symbol, ids, parent) {
        var e_5, _a;
        var id = this.createId(symbol.name, ids);
        var children = [];
        var node = {
            children: children,
            id: id,
            iconClass: SymbolKind[symbol.kind].toString().toLowerCase(),
            name: this.getName(symbol),
            detail: this.getDetail(symbol),
            parent: parent,
            uri: uri,
            range: this.getNameRange(symbol),
            fullRange: this.getFullRange(symbol),
            selected: false,
            expanded: this.shouldExpand(symbol)
        };
        if (symbol.children) {
            try {
                for (var _b = __values(symbol.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    MonacoOutlineSymbolInformationNode.insert(children, this.createNode(uri, child, ids, node));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        return node;
    };
    MonacoOutlineContribution.prototype.getName = function (symbol) {
        return symbol.name;
    };
    MonacoOutlineContribution.prototype.getDetail = function (symbol) {
        return symbol.detail;
    };
    MonacoOutlineContribution.prototype.createId = function (name, ids) {
        var counter = ids.get(name);
        var index = typeof counter === 'number' ? counter + 1 : 0;
        ids.set(name, index);
        return name + '_' + index;
    };
    MonacoOutlineContribution.prototype.shouldExpand = function (symbol) {
        return [
            SymbolKind.Class,
            SymbolKind.Enum, SymbolKind.File,
            SymbolKind.Interface, SymbolKind.Module,
            SymbolKind.Namespace, SymbolKind.Object,
            SymbolKind.Package, SymbolKind.Struct
        ].indexOf(symbol.kind) !== -1;
    };
    MonacoOutlineContribution.prototype.orderByPosition = function (symbol, symbol2) {
        var startLineComparison = symbol.range.startLineNumber - symbol2.range.startLineNumber;
        if (startLineComparison !== 0) {
            return startLineComparison;
        }
        var startOffsetComparison = symbol.range.startColumn - symbol2.range.startColumn;
        if (startOffsetComparison !== 0) {
            return startOffsetComparison;
        }
        var endLineComparison = symbol.range.endLineNumber - symbol2.range.endLineNumber;
        if (endLineComparison !== 0) {
            return endLineComparison;
        }
        return symbol.range.endColumn - symbol2.range.endColumn;
    };
    __decorate([
        inversify_1.inject(outline_view_service_1.OutlineViewService),
        __metadata("design:type", outline_view_service_1.OutlineViewService)
    ], MonacoOutlineContribution.prototype, "outlineViewService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], MonacoOutlineContribution.prototype, "editorManager", void 0);
    MonacoOutlineContribution = __decorate([
        inversify_1.injectable()
    ], MonacoOutlineContribution);
    return MonacoOutlineContribution;
}());
exports.MonacoOutlineContribution = MonacoOutlineContribution;
var MonacoOutlineSymbolInformationNode;
(function (MonacoOutlineSymbolInformationNode) {
    function is(node) {
        return outline_view_widget_1.OutlineSymbolInformationNode.is(node) && 'uri' in node && 'range' in node;
    }
    MonacoOutlineSymbolInformationNode.is = is;
    function insert(nodes, node) {
        var index = nodes.findIndex(function (current) { return compare(node, current) < 0; });
        if (index === -1) {
            nodes.push(node);
        }
        else {
            nodes.splice(index, 0, node);
        }
    }
    MonacoOutlineSymbolInformationNode.insert = insert;
    function compare(node, node2) {
        var startLineComparison = node.range.start.line - node2.range.start.line;
        if (startLineComparison !== 0) {
            return startLineComparison;
        }
        var startColumnComparison = node.range.start.character - node2.range.start.character;
        if (startColumnComparison !== 0) {
            return startColumnComparison;
        }
        var endLineComparison = node2.range.end.line - node.range.end.line;
        if (endLineComparison !== 0) {
            return endLineComparison;
        }
        return node2.range.end.character - node.range.end.character;
    }
    MonacoOutlineSymbolInformationNode.compare = compare;
})(MonacoOutlineSymbolInformationNode = exports.MonacoOutlineSymbolInformationNode || (exports.MonacoOutlineSymbolInformationNode = {}));


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-outline-decorator.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-outline-decorator.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 RedHat and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../node_modules/@theia/core/lib/common/event.js");
var tree_iterator_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-iterator */ "../node_modules/@theia/core/lib/browser/tree/tree-iterator.js");
var monaco_outline_contribution_1 = __webpack_require__(/*! ./monaco-outline-contribution */ "../node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js");
var MonacoOutlineDecorator = /** @class */ (function () {
    function MonacoOutlineDecorator() {
        this.id = 'theia-monaco-outline-decorator';
        this.emitter = new event_1.Emitter();
    }
    MonacoOutlineDecorator.prototype.decorations = function (tree) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.collectDecorations(tree)];
            });
        });
    };
    Object.defineProperty(MonacoOutlineDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: true,
        configurable: true
    });
    MonacoOutlineDecorator.prototype.collectDecorations = function (tree) {
        var e_1, _a;
        var result = new Map();
        if (tree.root === undefined) {
            return result;
        }
        try {
            for (var _b = __values(new tree_iterator_1.DepthFirstTreeIterator(tree.root)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var treeNode = _c.value;
                if (monaco_outline_contribution_1.MonacoOutlineSymbolInformationNode.is(treeNode) && treeNode.detail) {
                    result.set(treeNode.id, this.toDecoration(treeNode));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    MonacoOutlineDecorator.prototype.toDecoration = function (node) {
        var captionSuffixes = [{
                data: (node.detail || ''),
                fontData: {
                    color: 'var(--theia-descriptionForeground)',
                }
            }];
        return {
            captionSuffixes: captionSuffixes
        };
    };
    MonacoOutlineDecorator = __decorate([
        inversify_1.injectable()
    ], MonacoOutlineDecorator);
    return MonacoOutlineDecorator;
}());
exports.MonacoOutlineDecorator = MonacoOutlineDecorator;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var message_service_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/message-service-protocol */ "../node_modules/@theia/core/lib/common/message-service-protocol.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var monaco_context_key_service_1 = __webpack_require__(/*! ./monaco-context-key-service */ "../node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js");
var quick_open_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-open-service */ "../node_modules/@theia/core/lib/common/quick-open-service.js");
var monaco_resolved_keybinding_1 = __webpack_require__(/*! ./monaco-resolved-keybinding */ "../node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js");
var browser_menu_plugin_1 = __webpack_require__(/*! @theia/core/lib/browser/menu/browser-menu-plugin */ "../node_modules/@theia/core/lib/browser/menu/browser-menu-plugin.js");
var MonacoQuickOpenService = /** @class */ (function (_super) {
    __extends(MonacoQuickOpenService, _super);
    function MonacoQuickOpenService() {
        var _this = _super.call(this) || this;
        var overlayWidgets = document.createElement('div');
        overlayWidgets.classList.add('quick-open-overlay');
        document.body.appendChild(overlayWidgets);
        var container = _this.container = document.createElement('quick-open-container');
        container.style.position = 'absolute';
        container.style.top = '0px';
        container.style.right = '50%';
        container.style.zIndex = '1000000';
        overlayWidgets.appendChild(container);
        return _this;
    }
    MonacoQuickOpenService.prototype.init = function () {
        this.inQuickOpenKey = this.contextKeyService.createKey('inQuickOpen', false);
    };
    MonacoQuickOpenService.prototype.open = function (model, options) {
        this.internalOpen(new MonacoQuickOpenControllerOptsImpl(model, this.keybindingRegistry, options));
    };
    MonacoQuickOpenService.prototype.hide = function (reason) {
        var hideReason;
        switch (reason) {
            case quick_open_service_1.QuickOpenHideReason.ELEMENT_SELECTED:
                hideReason = monaco.quickOpen.HideReason.ELEMENT_SELECTED;
                break;
            case quick_open_service_1.QuickOpenHideReason.FOCUS_LOST:
                hideReason = monaco.quickOpen.HideReason.FOCUS_LOST;
                break;
            case quick_open_service_1.QuickOpenHideReason.CANCELED:
                hideReason = monaco.quickOpen.HideReason.CANCELED;
                break;
        }
        this.widget.hide(hideReason);
    };
    MonacoQuickOpenService.prototype.showDecoration = function (type) {
        var decoration = monaco.MarkerSeverity.Info;
        if (type === message_service_protocol_1.MessageType.Warning) {
            decoration = monaco.MarkerSeverity.Warning;
        }
        else if (type === message_service_protocol_1.MessageType.Error) {
            decoration = monaco.MarkerSeverity.Error;
        }
        this.showInputDecoration(decoration);
    };
    MonacoQuickOpenService.prototype.hideDecoration = function () {
        this.clearInputDecoration();
    };
    MonacoQuickOpenService.prototype.refresh = function () {
        var inputBox = this.widget.inputBox;
        if (inputBox) {
            this.onType(inputBox.inputElement.value);
        }
    };
    MonacoQuickOpenService.prototype.internalOpen = function (opts) {
        var browserMenuBarContribution = this.browserMenuBarContribution;
        if (browserMenuBarContribution) {
            var browserMenuBar = browserMenuBarContribution.menuBar;
            if (browserMenuBar) {
                var activeMenu = browserMenuBar.activeMenu;
                if (activeMenu) {
                    activeMenu.close();
                }
            }
        }
        // eslint-disable-next-line no-null/no-null
        if (this.widgetNode && this.widgetNode.offsetParent !== null) {
            this.hide();
        }
        this.opts = opts;
        var activeContext = window.document.activeElement || undefined;
        if (!activeContext || !this.container.contains(activeContext)) {
            this.previousActiveElement = activeContext;
            this.contextKeyService.activeContext = activeContext instanceof HTMLElement ? activeContext : undefined;
        }
        this.hideDecoration();
        this.widget.show(this.opts.prefix || '');
        this.setPlaceHolder(opts.inputAriaLabel);
        this.setPassword(opts.password ? true : false);
        this.setEnabled(opts.enabled);
        this.setValueSelected(opts.inputAriaLabel, opts.valueSelection);
        this.inQuickOpenKey.set(true);
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.inputElement.tabIndex = 1;
            // Position the cursor at the end of the input unless a user has made a selection.
            if (widget.inputBox.inputElement.selectionStart === widget.inputBox.inputElement.selectionEnd) {
                widget.inputBox.inputElement.selectionStart = widget.inputBox.inputElement.value.length;
            }
        }
    };
    MonacoQuickOpenService.prototype.setValueSelected = function (value, selectLocation) {
        if (!value) {
            return;
        }
        var widget = this.widget;
        if (widget.inputBox) {
            if (!selectLocation) {
                widget.inputBox.inputElement.setSelectionRange(0, value.length);
                return;
            }
            if (selectLocation[0] === selectLocation[1]) {
                widget.inputBox.inputElement.setSelectionRange(selectLocation[0], selectLocation[0]);
                return;
            }
            widget.inputBox.inputElement.setSelectionRange(selectLocation[0], selectLocation[1]);
        }
    };
    MonacoQuickOpenService.prototype.setEnabled = function (isEnabled) {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.inputElement.readOnly = (isEnabled !== undefined) ? !isEnabled : false;
        }
    };
    MonacoQuickOpenService.prototype.setValue = function (value) {
        if (this.widget && this.widget.inputBox) {
            this.widget.inputBox.inputElement.value = (value !== undefined) ? value : '';
        }
    };
    MonacoQuickOpenService.prototype.setPlaceHolder = function (placeHolder) {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.setPlaceHolder(placeHolder);
        }
    };
    MonacoQuickOpenService.prototype.setPassword = function (isPassword) {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.inputElement.type = isPassword ? 'password' : 'text';
        }
    };
    MonacoQuickOpenService.prototype.showInputDecoration = function (decoration) {
        var widget = this.widget;
        if (widget.inputBox) {
            var type = decoration === monaco.MarkerSeverity.Info ? 1 :
                decoration === monaco.MarkerSeverity.Warning ? 2 : 3;
            widget.inputBox.showMessage({ type: type, content: '' });
        }
    };
    MonacoQuickOpenService.prototype.clearInputDecoration = function () {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.hideMessage();
        }
    };
    Object.defineProperty(MonacoQuickOpenService.prototype, "widget", {
        get: function () {
            var _this = this;
            if (this._widget) {
                return this._widget;
            }
            this._widget = new monaco.quickOpen.QuickOpenWidget(this.container, {
                onOk: function () {
                    _this.previousActiveElement = undefined;
                    _this.contextKeyService.activeContext = undefined;
                    _this.onClose(false);
                },
                onCancel: function () {
                    if (_this.previousActiveElement instanceof HTMLElement) {
                        _this.previousActiveElement.focus({ preventScroll: true });
                    }
                    _this.previousActiveElement = undefined;
                    _this.contextKeyService.activeContext = undefined;
                    _this.onClose(true);
                },
                onType: function (lookFor) { return _this.onType(lookFor || ''); },
                onFocusLost: function () {
                    if (_this.opts && _this.opts.ignoreFocusOut !== undefined) {
                        if (_this.opts.ignoreFocusOut === false) {
                            _this.onClose(true);
                        }
                        return _this.opts.ignoreFocusOut;
                    }
                    else {
                        return false;
                    }
                }
            }, {});
            this.attachQuickOpenStyler();
            var newWidget = this._widget.create();
            this._widgetNode = newWidget;
            return this._widget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenService.prototype, "widgetNode", {
        get: function () {
            return this._widgetNode;
        },
        enumerable: true,
        configurable: true
    });
    MonacoQuickOpenService.prototype.attachQuickOpenStyler = function () {
        var _this = this;
        if (!this._widget) {
            return;
        }
        var themeService = monaco.services.StaticServices.standaloneThemeService.get();
        var detach = monaco.theme.attachQuickOpenStyler(this._widget, themeService);
        var dispose = themeService.onThemeChange(function () {
            detach.dispose();
            _this.attachQuickOpenStyler();
            dispose.dispose();
        });
    };
    MonacoQuickOpenService.prototype.onClose = function (cancelled) {
        if (this.opts && this.opts.onClose) {
            this.opts.onClose(cancelled);
        }
        this.inQuickOpenKey.set(false);
    };
    MonacoQuickOpenService.prototype.onType = function (lookFor) {
        return __awaiter(this, void 0, void 0, function () {
            var opts, m;
            var _this = this;
            return __generator(this, function (_a) {
                opts = this.opts;
                if (this.widget && opts) {
                    if (opts.onType) {
                        opts.onType(lookFor, function (model) {
                            return _this.widget.setInput(model, opts.getAutoFocus(lookFor), opts.inputAriaLabel);
                        });
                    }
                    else {
                        m = opts.getModel(lookFor);
                        this.widget.setInput(m, opts.getAutoFocus(lookFor), opts.inputAriaLabel);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(monaco_context_key_service_1.MonacoContextKeyService),
        __metadata("design:type", monaco_context_key_service_1.MonacoContextKeyService)
    ], MonacoQuickOpenService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], MonacoQuickOpenService.prototype, "keybindingRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_menu_plugin_1.BrowserMenuBarContribution), inversify_1.optional(),
        __metadata("design:type", browser_menu_plugin_1.BrowserMenuBarContribution)
    ], MonacoQuickOpenService.prototype, "browserMenuBarContribution", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoQuickOpenService.prototype, "init", null);
    MonacoQuickOpenService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonacoQuickOpenService);
    return MonacoQuickOpenService;
}(browser_1.QuickOpenService));
exports.MonacoQuickOpenService = MonacoQuickOpenService;
var MonacoQuickOpenControllerOptsImpl = /** @class */ (function () {
    function MonacoQuickOpenControllerOptsImpl(model, keybindingService, options) {
        this.model = model;
        this.keybindingService = keybindingService;
        this.model = model;
        this.options = browser_1.QuickOpenOptions.resolve(options);
        this.password = this.options.password;
    }
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "enabled", {
        get: function () {
            return this.options.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "prefix", {
        get: function () {
            return this.options.prefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "ignoreFocusOut", {
        get: function () {
            return this.options.ignoreFocusOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "inputAriaLabel", {
        get: function () {
            return this.options.placeholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "valueSelection", {
        get: function () {
            return this.options.valueSelection || [-1, -1];
        },
        enumerable: true,
        configurable: true
    });
    MonacoQuickOpenControllerOptsImpl.prototype.onClose = function (cancelled) {
        this.options.onClose(cancelled);
    };
    MonacoQuickOpenControllerOptsImpl.prototype.toOpenModel = function (lookFor, items, actionProvider) {
        var e_1, _a;
        var entries = [];
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                var entry = this.createEntry(item, lookFor);
                if (entry) {
                    entries.push(entry);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.options.fuzzySort) {
            entries.sort(function (a, b) { return monaco.quickOpen.compareEntries(a, b, lookFor); });
        }
        return new monaco.quickOpen.QuickOpenModel(entries, actionProvider ? new MonacoQuickOpenActionProvider(actionProvider) : undefined);
    };
    MonacoQuickOpenControllerOptsImpl.prototype.getModel = function (lookFor) {
        throw new Error('getModel not supported!');
    };
    MonacoQuickOpenControllerOptsImpl.prototype.onType = function (lookFor, acceptor) {
        var _this = this;
        this.model.onType(lookFor, function (items, actionProvider) {
            var result = _this.toOpenModel(lookFor, items, actionProvider);
            acceptor(result);
        });
    };
    MonacoQuickOpenControllerOptsImpl.prototype.createEntry = function (item, lookFor) {
        if (this.options.skipPrefix) {
            lookFor = lookFor.substr(this.options.skipPrefix);
        }
        if (this.options.trimInput) {
            lookFor = lookFor.trim();
        }
        var _a = this.options, fuzzyMatchLabel = _a.fuzzyMatchLabel, fuzzyMatchDescription = _a.fuzzyMatchDescription, fuzzyMatchDetail = _a.fuzzyMatchDetail;
        var labelHighlights = fuzzyMatchLabel ? this.matchesFuzzy(lookFor, item.getLabel(), fuzzyMatchLabel) : item.getLabelHighlights();
        var descriptionHighlights = fuzzyMatchDescription ? this.matchesFuzzy(lookFor, item.getDescription(), fuzzyMatchDescription) : item.getDescriptionHighlights();
        var detailHighlights = fuzzyMatchDetail ? this.matchesFuzzy(lookFor, item.getDetail(), fuzzyMatchDetail) : item.getDetailHighlights();
        if ((lookFor && !labelHighlights && !descriptionHighlights && !detailHighlights)
            && !this.options.showItemsWithoutHighlight) {
            return undefined;
        }
        var entry = item instanceof browser_1.QuickOpenGroupItem
            ? new QuickOpenEntryGroup(item, this.keybindingService)
            : new QuickOpenEntry(item, this.keybindingService);
        entry.setHighlights(labelHighlights || [], descriptionHighlights, detailHighlights);
        return entry;
    };
    MonacoQuickOpenControllerOptsImpl.prototype.matchesFuzzy = function (lookFor, value, options) {
        if (!lookFor || !value) {
            return undefined;
        }
        var enableSeparateSubstringMatching = typeof options === 'object' && options.enableSeparateSubstringMatching;
        return monaco.filters.matchesFuzzy(lookFor, value, enableSeparateSubstringMatching);
    };
    MonacoQuickOpenControllerOptsImpl.prototype.getAutoFocus = function (lookFor) {
        if (this.options.selectIndex) {
            var idx = this.options.selectIndex(lookFor);
            if (idx >= 0) {
                return {
                    autoFocusIndex: idx
                };
            }
        }
        return {
            autoFocusFirstEntry: true,
            autoFocusPrefixMatch: lookFor
        };
    };
    return MonacoQuickOpenControllerOptsImpl;
}());
exports.MonacoQuickOpenControllerOptsImpl = MonacoQuickOpenControllerOptsImpl;
var QuickOpenEntry = /** @class */ (function (_super) {
    __extends(QuickOpenEntry, _super);
    function QuickOpenEntry(item, keybindingService) {
        var _this = _super.call(this) || this;
        _this.item = item;
        _this.keybindingService = keybindingService;
        return _this;
    }
    QuickOpenEntry.prototype.getLabel = function () {
        return this.item.getLabel();
    };
    QuickOpenEntry.prototype.getAriaLabel = function () {
        return this.item.getTooltip();
    };
    QuickOpenEntry.prototype.getDetail = function () {
        return this.item.getDetail();
    };
    QuickOpenEntry.prototype.getDescription = function () {
        return this.item.getDescription();
    };
    QuickOpenEntry.prototype.isHidden = function () {
        return _super.prototype.isHidden.call(this) || this.item.isHidden();
    };
    QuickOpenEntry.prototype.getResource = function () {
        var uri = this.item.getUri();
        return uri ? monaco.Uri.parse(uri.toString()) : undefined;
    };
    QuickOpenEntry.prototype.getIcon = function () {
        return this.item.getIconClass();
    };
    QuickOpenEntry.prototype.getKeybinding = function () {
        var keybinding = this.item.getKeybinding();
        if (!keybinding) {
            return undefined;
        }
        var keySequence;
        try {
            keySequence = this.keybindingService.resolveKeybinding(keybinding);
        }
        catch (error) {
            return undefined;
        }
        return new monaco_resolved_keybinding_1.MonacoResolvedKeybinding(keySequence, this.keybindingService);
    };
    QuickOpenEntry.prototype.run = function (mode) {
        if (mode === 1) {
            return this.item.run(browser_1.QuickOpenMode.OPEN);
        }
        if (mode === 2) {
            return this.item.run(browser_1.QuickOpenMode.OPEN_IN_BACKGROUND);
        }
        if (mode === 0) {
            return this.item.run(browser_1.QuickOpenMode.PREVIEW);
        }
        return false;
    };
    return QuickOpenEntry;
}(monaco.quickOpen.QuickOpenEntry));
exports.QuickOpenEntry = QuickOpenEntry;
var QuickOpenEntryGroup = /** @class */ (function (_super) {
    __extends(QuickOpenEntryGroup, _super);
    function QuickOpenEntryGroup(item, keybindingService) {
        var _this = _super.call(this, new QuickOpenEntry(item, keybindingService)) || this;
        _this.item = item;
        _this.keybindingService = keybindingService;
        return _this;
    }
    QuickOpenEntryGroup.prototype.getGroupLabel = function () {
        return this.item.getGroupLabel() || '';
    };
    QuickOpenEntryGroup.prototype.showBorder = function () {
        return this.item.showBorder();
    };
    QuickOpenEntryGroup.prototype.getKeybinding = function () {
        var entry = this.getEntry();
        return entry ? entry.getKeybinding() : _super.prototype.getKeybinding.call(this);
    };
    return QuickOpenEntryGroup;
}(monaco.quickOpen.QuickOpenEntryGroup));
exports.QuickOpenEntryGroup = QuickOpenEntryGroup;
var MonacoQuickOpenAction = /** @class */ (function () {
    function MonacoQuickOpenAction(action) {
        this.action = action;
    }
    Object.defineProperty(MonacoQuickOpenAction.prototype, "id", {
        get: function () {
            return this.action.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "label", {
        get: function () {
            return this.action.label || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "tooltip", {
        get: function () {
            return this.action.tooltip || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "class", {
        get: function () {
            return this.action.class;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "enabled", {
        get: function () {
            return this.action.enabled || true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "checked", {
        get: function () {
            return this.action.checked || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "radio", {
        get: function () {
            return this.action.radio || false;
        },
        enumerable: true,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoQuickOpenAction.prototype.run = function (entry) {
        return this.action.run(entry.item);
    };
    MonacoQuickOpenAction.prototype.dispose = function () {
        this.action.dispose();
    };
    return MonacoQuickOpenAction;
}());
exports.MonacoQuickOpenAction = MonacoQuickOpenAction;
var MonacoQuickOpenActionProvider = /** @class */ (function () {
    function MonacoQuickOpenActionProvider(provider) {
        this.provider = provider;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoQuickOpenActionProvider.prototype.hasActions = function (element, entry) {
        return this.provider.hasActions(entry.item);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoQuickOpenActionProvider.prototype.getActions = function (element, entry) {
        var actions = this.provider.getActions(entry.item);
        return actions.map(function (action) { return new MonacoQuickOpenAction(action); });
    };
    return MonacoQuickOpenActionProvider;
}());
exports.MonacoQuickOpenActionProvider = MonacoQuickOpenActionProvider;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var keys_1 = __webpack_require__(/*! @theia/core/lib/browser/keys */ "../node_modules/@theia/core/lib/browser/keys.js");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "../node_modules/@theia/core/lib/common/os.js");
var monaco_keycode_map_1 = __webpack_require__(/*! ./monaco-keycode-map */ "../node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js");
var MonacoResolvedKeybinding = /** @class */ (function (_super) {
    __extends(MonacoResolvedKeybinding, _super);
    function MonacoResolvedKeybinding(keySequence, keybindingService) {
        var _this = _super.call(this) || this;
        _this.keySequence = keySequence;
        _this.parts = keySequence.map(function (keyCode) {
            // eslint-disable-next-line no-null/no-null
            var keyLabel = keyCode.key ? keybindingService.acceleratorForKey(keyCode.key) : null;
            var keyAriaLabel = keyLabel;
            return new monaco.keybindings.ResolvedKeybindingPart(keyCode.ctrl, keyCode.shift, keyCode.alt, keyCode.meta, keyLabel, keyAriaLabel);
        });
        return _this;
    }
    MonacoResolvedKeybinding.prototype.getLabel = function () {
        return monaco.keybindings.UILabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyLabel; });
    };
    MonacoResolvedKeybinding.prototype.getAriaLabel = function () {
        return monaco.keybindings.UILabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyAriaLabel; });
    };
    MonacoResolvedKeybinding.prototype.getElectronAccelerator = function () {
        if (this.isChord) {
            // Electron cannot handle chords
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        return monaco.keybindings.ElectronAcceleratorLabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyLabel; });
    };
    MonacoResolvedKeybinding.prototype.getUserSettingsLabel = function () {
        return monaco.keybindings.UserSettingsLabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyLabel; });
    };
    MonacoResolvedKeybinding.prototype.isWYSIWYG = function () {
        return true;
    };
    MonacoResolvedKeybinding.prototype.isChord = function () {
        return this.parts.length > 1;
    };
    MonacoResolvedKeybinding.prototype.getDispatchParts = function () {
        var _this = this;
        return this.keySequence.map(function (keyCode) { return monaco.keybindings.USLayoutResolvedKeybinding.getDispatchStr(_this.toKeybinding(keyCode)); });
    };
    MonacoResolvedKeybinding.prototype.toKeybinding = function (keyCode) {
        return new monaco.keybindings.SimpleKeybinding(keyCode.ctrl, keyCode.shift, keyCode.alt, keyCode.meta, monaco_keycode_map_1.KEY_CODE_MAP[keyCode.key.keyCode]);
    };
    MonacoResolvedKeybinding.prototype.getParts = function () {
        return this.parts;
    };
    MonacoResolvedKeybinding.toKeybinding = function (keybinding) {
        return keybinding instanceof monaco.keybindings.SimpleKeybinding
            ? this.keyCode(keybinding).toString()
            : this.keySequence(keybinding).join(' ');
    };
    MonacoResolvedKeybinding.keyCode = function (keybinding) {
        var keyCode = keybinding.keyCode;
        var sequence = {
            first: keys_1.Key.getKey(this.monaco2BrowserKeyCode(keyCode & 0xff)),
            modifiers: []
        };
        if (keybinding.ctrlKey) {
            if (os_1.isOSX) {
                sequence.modifiers.push(keys_1.KeyModifier.MacCtrl);
            }
            else {
                sequence.modifiers.push(keys_1.KeyModifier.CtrlCmd);
            }
        }
        if (keybinding.shiftKey) {
            sequence.modifiers.push(keys_1.KeyModifier.Shift);
        }
        if (keybinding.altKey) {
            sequence.modifiers.push(keys_1.KeyModifier.Alt);
        }
        if (keybinding.metaKey && sequence.modifiers.indexOf(keys_1.KeyModifier.CtrlCmd) === -1) {
            sequence.modifiers.push(keys_1.KeyModifier.CtrlCmd);
        }
        return keys_1.KeyCode.createKeyCode(sequence);
    };
    MonacoResolvedKeybinding.keySequence = function (keybinding) {
        var _this = this;
        return keybinding.parts.map(function (part) { return _this.keyCode(part); });
    };
    MonacoResolvedKeybinding.monaco2BrowserKeyCode = function (keyCode) {
        for (var i = 0; i < monaco_keycode_map_1.KEY_CODE_MAP.length; i++) {
            if (monaco_keycode_map_1.KEY_CODE_MAP[i] === keyCode) {
                return i;
            }
        }
        return -1;
    };
    return MonacoResolvedKeybinding;
}(monaco.keybindings.ResolvedKeybinding));
exports.MonacoResolvedKeybinding = MonacoResolvedKeybinding;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-semantic-highlighting-service.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-semantic-highlighting-service.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "../node_modules/@theia/core/lib/common/logger.js");
var editor_manager_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-manager */ "../node_modules/@theia/editor/lib/browser/editor-manager.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var semantic_highlighting_service_1 = __webpack_require__(/*! @theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service */ "../node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "../node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
/**
 * A helper class for grouping information about a decoration type that has
 * been registered with the editor service.
 */
var DecorationTypeInfo = /** @class */ (function () {
    function DecorationTypeInfo() {
    }
    return DecorationTypeInfo;
}());
var MonacoSemanticHighlightingService = /** @class */ (function (_super) {
    __extends(MonacoSemanticHighlightingService, _super);
    function MonacoSemanticHighlightingService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.decorations = new Map();
        _this.toDisposeOnEditorClose = new Map();
        _this.toDisposeOnUnregister = new Map();
        // language id -> (scope index -> decoration type)
        _this.decorationTypes = new Map();
        _this.lastDecorationTypeId = 0;
        return _this;
    }
    MonacoSemanticHighlightingService.prototype.nextDecorationTypeKey = function () {
        return 'MonacoSemanticHighlighting' + (++this.lastDecorationTypeId);
    };
    MonacoSemanticHighlightingService.prototype.registerDecorationTypesForLanguage = function (languageId) {
        var scopes = this.scopes.get(languageId);
        if (scopes) {
            var decorationTypes = new Map();
            for (var index = 0; index < scopes.length; index++) {
                var modelDecoration = this.toDecorationType(scopes[index]);
                if (modelDecoration) {
                    decorationTypes.set(index, modelDecoration);
                }
            }
            this.decorationTypes.set(languageId, decorationTypes);
        }
    };
    MonacoSemanticHighlightingService.prototype.removeDecorationTypesForLanguage = function (languageId) {
        var e_1, _a;
        var decorationTypes = this.decorationTypes.get(languageId);
        if (!decorationTypes) {
            this.logger.warn("No decoration types are registered for language: " + languageId);
            return;
        }
        try {
            for (var decorationTypes_1 = __values(decorationTypes), decorationTypes_1_1 = decorationTypes_1.next(); !decorationTypes_1_1.done; decorationTypes_1_1 = decorationTypes_1.next()) {
                var _b = __read(decorationTypes_1_1.value, 2), decorationType = _b[1];
                this.monacoEditorService.removeDecorationType(decorationType.key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (decorationTypes_1_1 && !decorationTypes_1_1.done && (_a = decorationTypes_1.return)) _a.call(decorationTypes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MonacoSemanticHighlightingService.prototype.refreshDecorationTypesForLanguage = function (languageId) {
        var e_2, _a;
        var decorationTypes = this.decorationTypes.get(languageId);
        var scopes = this.scopes.get(languageId);
        if (!decorationTypes || !scopes) {
            this.logger.warn("No decoration types are registered for language: " + languageId);
            return;
        }
        try {
            for (var decorationTypes_2 = __values(decorationTypes), decorationTypes_2_1 = decorationTypes_2.next(); !decorationTypes_2_1.done; decorationTypes_2_1 = decorationTypes_2.next()) {
                var _b = __read(decorationTypes_2_1.value, 2), scope = _b[0], decorationType = _b[1];
                // Pass in the existing key to associate the new color with the same
                // decoration type, thereby reusing it.
                var newDecorationType = this.toDecorationType(scopes[scope], decorationType.key);
                if (newDecorationType) {
                    decorationType.options = newDecorationType.options;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (decorationTypes_2_1 && !decorationTypes_2_1.done && (_a = decorationTypes_2.return)) _a.call(decorationTypes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoSemanticHighlightingService.prototype.register = function (languageId, scopes) {
        var _this = this;
        var result = _super.prototype.register.call(this, languageId, scopes);
        this.registerDecorationTypesForLanguage(languageId);
        var disposable = this.themeService().onThemeChange(function () {
            // When the theme changes, refresh the decoration types to reflect
            // the colors for the old theme.
            // Note that we do not remove the old decoration types and add new ones.
            // The new ones would have different class names, and we'd have to
            // update all open editors to use the new class names.
            _this.refreshDecorationTypesForLanguage(languageId);
        });
        this.toDisposeOnUnregister.set(languageId, disposable);
        return result;
    };
    MonacoSemanticHighlightingService.prototype.unregister = function (languageId) {
        _super.prototype.unregister.call(this, languageId);
        this.removeDecorationTypesForLanguage(languageId);
        var disposable = this.toDisposeOnUnregister.get(languageId);
        if (disposable) {
            disposable.dispose();
        }
        this.decorationTypes.delete(languageId);
        this.toDisposeOnUnregister.delete(languageId);
    };
    MonacoSemanticHighlightingService.prototype.toDecorationType = function (scopes, reuseKey) {
        var e_3, _a;
        var key = reuseKey || this.nextDecorationTypeKey();
        try {
            // TODO: why for-of? How to pick the right scope? Is it fine to get the first element (with the narrowest scope)?
            for (var scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
                var scope = scopes_1_1.value;
                var tokenTheme = this.tokenTheme();
                var metadata = tokenTheme.match(undefined, scope);
                // Don't use the inlineClassName from the TokenMetadata, because this
                // will conflict with styles used for TM scopes
                // (https://github.com/Microsoft/monaco-editor/issues/1070).
                // Instead, get the token color, use registerDecorationType() to cause
                // monaco to allocate a new inlineClassName for that color, and use
                // resolveDecorationOptions() to get an IModelDecorationOptions
                // containing that inlineClassName.
                var colorIndex = monaco.modes.TokenMetadata.getForeground(metadata);
                var color = tokenTheme.getColorMap()[colorIndex];
                // If we wanted to support other decoration options such as font style,
                // we could include them here.
                var options = {
                    color: color.toString(),
                };
                this.monacoEditorService.registerDecorationType(key, options);
                return {
                    key: key,
                    options: this.monacoEditorService.resolveDecorationOptions(key, false)
                };
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return undefined;
    };
    MonacoSemanticHighlightingService.prototype.decorate = function (languageId, uri, ranges) {
        return __awaiter(this, void 0, void 0, function () {
            var editor, key, newDecorations, oldDecorations, newState, decorationIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editor(uri)];
                    case 1:
                        editor = _a.sent();
                        if (!editor) {
                            return [2 /*return*/];
                        }
                        key = uri.toString();
                        if (!this.toDisposeOnEditorClose.has(key)) {
                            this.toDisposeOnEditorClose.set(key, new disposable_1.DisposableCollection(editor.onDispose(function () { return _this.deleteDecorations(key, editor); })));
                        }
                        newDecorations = ranges.map(function (range) { return _this.toDecoration(languageId, range); });
                        oldDecorations = this.oldDecorations(key, editor, ranges);
                        newState = editor.deltaDecorations({
                            newDecorations: newDecorations,
                            oldDecorations: oldDecorations
                        });
                        decorationIds = this.decorationIds(key);
                        newState.forEach(function (id) { return decorationIds.add(id); });
                        this.decorations.set(key, decorationIds);
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoSemanticHighlightingService.prototype.dispose = function () {
        Array.from(this.toDisposeOnEditorClose.values()).forEach(function (disposable) { return disposable.dispose(); });
    };
    MonacoSemanticHighlightingService.prototype.decorationIds = function (uri) {
        return this.decorations.get(typeof uri === 'string' ? uri : uri.toString()) || new Set();
    };
    MonacoSemanticHighlightingService.prototype.editor = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorManager.getByUri(typeof uri === 'string' ? new uri_1.default(uri) : uri)];
                    case 1:
                        editorWidget = _a.sent();
                        if (!!editorWidget && editorWidget.editor instanceof monaco_editor_1.MonacoEditor) {
                            return [2 /*return*/, editorWidget.editor];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    MonacoSemanticHighlightingService.prototype.model = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var editor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editor(uri)];
                    case 1:
                        editor = _a.sent();
                        if (editor) {
                            return [2 /*return*/, editor.getControl().getModel() || undefined];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Returns all the semantic highlighting decoration IDs that are affected by any of the range arguments.
     */
    MonacoSemanticHighlightingService.prototype.oldDecorations = function (uri, editor, ranges) {
        var ids = this.decorationIds(uri);
        var affectedLines = Array.from(new Set(ranges.map(function (r) { return [r.start.line, r.end.line]; }).reduce(function (prev, curr) { return prev.concat(curr); }, [])));
        return affectedLines
            .map(function (line) { return editor.getLinesDecorations(line, line); })
            .reduce(function (prev, curr) { return prev.concat(curr); }, [])
            .map(function (decoration) { return decoration.id; })
            .filter(function (id) { return ids.has(id); });
    };
    MonacoSemanticHighlightingService.prototype.deleteDecorations = function (uri, editor) {
        var ids = this.decorations.get(uri);
        if (ids) {
            var oldDecorations = Array.from(ids);
            editor.deltaDecorations({
                newDecorations: [],
                oldDecorations: oldDecorations
            });
            this.decorations.delete(uri);
        }
        var disposable = this.toDisposeOnEditorClose.get(uri);
        if (disposable) {
            disposable.dispose();
        }
        this.toDisposeOnEditorClose.delete(uri);
    };
    MonacoSemanticHighlightingService.prototype.toDecoration = function (languageId, range) {
        var start = range.start, end = range.end;
        var options = this.toOptions(languageId, range.scope);
        return {
            range: semantic_highlighting_service_1.Range.create(start, end),
            options: options
        };
    };
    MonacoSemanticHighlightingService.prototype.toOptions = function (languageId, scope) {
        if (scope !== undefined) {
            var decorationTypes = this.decorationTypes.get(languageId);
            if (decorationTypes) {
                var decoration = decorationTypes.get(scope);
                if (decoration) {
                    return {
                        inlineClassName: decoration.options.inlineClassName || undefined
                    };
                }
            }
        }
        return {};
    };
    MonacoSemanticHighlightingService.prototype.themeService = function () {
        return monaco.services.StaticServices.standaloneThemeService.get();
    };
    MonacoSemanticHighlightingService.prototype.tokenTheme = function () {
        return this.themeService().getTheme().tokenTheme;
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], MonacoSemanticHighlightingService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], MonacoSemanticHighlightingService.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_service_1.MonacoEditorService),
        __metadata("design:type", monaco_editor_service_1.MonacoEditorService)
    ], MonacoSemanticHighlightingService.prototype, "monacoEditorService", void 0);
    MonacoSemanticHighlightingService = __decorate([
        inversify_1.injectable()
    ], MonacoSemanticHighlightingService);
    return MonacoSemanticHighlightingService;
}(semantic_highlighting_service_1.SemanticHighlightingService));
exports.MonacoSemanticHighlightingService = MonacoSemanticHighlightingService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js":
/*!************************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "../node_modules/jsonc-parser/lib/esm/main.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "../node_modules/@theia/filesystem/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "../node_modules/@theia/languages/lib/browser/index.js");
var MonacoSnippetSuggestProvider = /** @class */ (function () {
    function MonacoSnippetSuggestProvider() {
        this.snippets = new Map();
        this.pendingSnippets = new Map();
    }
    MonacoSnippetSuggestProvider_1 = MonacoSnippetSuggestProvider;
    MonacoSnippetSuggestProvider.prototype.provideCompletionItems = function (model, position, context) {
        return __awaiter(this, void 0, void 0, function () {
            var languageId, snippetsForLanguage, pos, lineOffsets, linePrefixLow, endsInWhitespace, word, availableSnippets, suggestions, _loop_1, lineOffsets_1, lineOffsets_1_1, start;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // copied and modified from https://github.com/microsoft/vscode/blob/master/src/vs/workbench/contrib/snippets/browser/snippetCompletionProvider.ts
                        if (position.column >= MonacoSnippetSuggestProvider_1._maxPrefix) {
                            return [2 /*return*/, undefined];
                        }
                        if (context.triggerKind === browser_1.CompletionTriggerKind.TriggerCharacter && context.triggerCharacter === ' ') {
                            // no snippets when suggestions have been triggered by space
                            return [2 /*return*/, undefined];
                        }
                        languageId = model.getModeId();
                        return [4 /*yield*/, this.loadSnippets(languageId)];
                    case 1:
                        _b.sent();
                        snippetsForLanguage = this.snippets.get(languageId) || [];
                        pos = { lineNumber: position.lineNumber, column: 1 };
                        lineOffsets = [];
                        linePrefixLow = model.getLineContent(position.lineNumber).substr(0, position.column - 1).toLowerCase();
                        endsInWhitespace = linePrefixLow.match(/\s$/);
                        while (pos.column < position.column) {
                            word = model.getWordAtPosition(pos);
                            if (word) {
                                // at a word
                                lineOffsets.push(word.startColumn - 1);
                                pos.column = word.endColumn + 1;
                                if (word.endColumn - 1 < linePrefixLow.length && !/\s/.test(linePrefixLow[word.endColumn - 1])) {
                                    lineOffsets.push(word.endColumn - 1);
                                }
                            }
                            else if (!/\s/.test(linePrefixLow[pos.column - 1])) {
                                // at a none-whitespace character
                                lineOffsets.push(pos.column - 1);
                                pos.column += 1;
                            }
                            else {
                                // always advance!
                                pos.column += 1;
                            }
                        }
                        availableSnippets = new Set();
                        snippetsForLanguage.forEach(availableSnippets.add, availableSnippets);
                        suggestions = [];
                        _loop_1 = function (start) {
                            availableSnippets.forEach(function (snippet) {
                                if (_this.isPatternInWord(linePrefixLow, start, linePrefixLow.length, snippet.prefix.toLowerCase(), 0, snippet.prefix.length)) {
                                    suggestions.push(new MonacoSnippetSuggestion(snippet, monaco.Range.fromPositions(position.delta(0, -(linePrefixLow.length - start)), position)));
                                    availableSnippets.delete(snippet);
                                }
                            });
                        };
                        try {
                            for (lineOffsets_1 = __values(lineOffsets), lineOffsets_1_1 = lineOffsets_1.next(); !lineOffsets_1_1.done; lineOffsets_1_1 = lineOffsets_1.next()) {
                                start = lineOffsets_1_1.value;
                                _loop_1(start);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (lineOffsets_1_1 && !lineOffsets_1_1.done && (_a = lineOffsets_1.return)) _a.call(lineOffsets_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (endsInWhitespace || lineOffsets.length === 0) {
                            // add remaining snippets when the current prefix ends in whitespace or when no
                            // interesting positions have been found
                            availableSnippets.forEach(function (snippet) {
                                suggestions.push(new MonacoSnippetSuggestion(snippet, monaco.Range.fromPositions(position)));
                            });
                        }
                        // disambiguate suggestions with same labels
                        suggestions.sort(MonacoSnippetSuggestion.compareByLabel);
                        return [2 /*return*/, { suggestions: suggestions }];
                }
            });
        });
    };
    MonacoSnippetSuggestProvider.prototype.resolveCompletionItem = function (textModel, position, item) {
        return item instanceof MonacoSnippetSuggestion ? item.resolve() : item;
    };
    MonacoSnippetSuggestProvider.prototype.loadSnippets = function (scope) {
        return __awaiter(this, void 0, void 0, function () {
            var pending;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pending = [];
                        pending.push.apply(pending, __spread((this.pendingSnippets.get(scope) || [])));
                        pending.push.apply(pending, __spread((this.pendingSnippets.get('*') || [])));
                        if (!pending.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(pending)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MonacoSnippetSuggestProvider.prototype.fromURI = function (uri, options) {
        var e_2, _a;
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        var pending = this.loadURI(uri, options, toDispose);
        var language = options.language;
        var scopes = Array.isArray(language) ? language : !!language ? [language] : ['*'];
        var _loop_2 = function (scope) {
            var pendingSnippets = this_1.pendingSnippets.get(scope) || [];
            pendingSnippets.push(pending);
            this_1.pendingSnippets.set(scope, pendingSnippets);
            toDispose.push(disposable_1.Disposable.create(function () {
                var index = pendingSnippets.indexOf(pending);
                if (index !== -1) {
                    pendingSnippets.splice(index, 1);
                }
            }));
        };
        var this_1 = this;
        try {
            for (var scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
                var scope = scopes_1_1.value;
                _loop_2(scope);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return toDispose;
    };
    /**
     * should NOT throw to prevent load errors on suggest
     */
    MonacoSnippetSuggestProvider.prototype.loadURI = function (uri, options, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var content, snippets, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.filesystem.resolveContent(uri.toString(), { encoding: 'utf-8' })];
                    case 1:
                        content = (_a.sent()).content;
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        snippets = content && jsoncparser.parse(content, undefined, { disallowComments: false });
                        toDispose.push(this.fromJSON(snippets, options));
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        if (!common_1.FileSystemError.FileNotFound.is(e_3) && !common_1.FileSystemError.FileIsDirectory.is(e_3)) {
                            console.error(e_3);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MonacoSnippetSuggestProvider.prototype.fromJSON = function (snippets, _a) {
        var _this = this;
        var language = _a.language, source = _a.source;
        var toDispose = new disposable_1.DisposableCollection();
        this.parseSnippets(snippets, function (name, snippet) {
            var e_4, _a;
            var prefix = snippet.prefix, body = snippet.body, description = snippet.description;
            var parsedBody = Array.isArray(body) ? body.join('\n') : body;
            var parsedPrefixes = Array.isArray(prefix) ? prefix : [prefix];
            if (typeof parsedBody !== 'string') {
                return;
            }
            var scopes = [];
            if (language) {
                if (Array.isArray(language)) {
                    scopes.push.apply(scopes, __spread(language));
                }
                else {
                    scopes.push(language);
                }
            }
            else if (typeof snippet.scope === 'string') {
                try {
                    for (var _b = __values(snippet.scope.split(',')), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var rawScope = _c.value;
                        var scope = rawScope.trim();
                        if (scope) {
                            scopes.push(scope);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            parsedPrefixes.forEach(function (parsedPrefix) { return toDispose.push(_this.push({
                scopes: scopes,
                name: name,
                prefix: parsedPrefix,
                description: description,
                body: parsedBody,
                source: source
            })); });
        });
        return toDispose;
    };
    MonacoSnippetSuggestProvider.prototype.parseSnippets = function (snippets, accept) {
        if (typeof snippets === 'object') {
            // eslint-disable-next-line guard-for-in
            for (var name_1 in snippets) {
                var scopeOrTemplate = snippets[name_1];
                if (JsonSerializedSnippet.is(scopeOrTemplate)) {
                    accept(name_1, scopeOrTemplate);
                }
                else {
                    this.parseSnippets(scopeOrTemplate, accept);
                }
            }
        }
    };
    MonacoSnippetSuggestProvider.prototype.push = function () {
        var e_5, _a;
        var snippets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            snippets[_i] = arguments[_i];
        }
        var toDispose = new disposable_1.DisposableCollection();
        var _loop_3 = function (snippet) {
            var e_6, _a;
            var _loop_4 = function (scope) {
                var languageSnippets = this_2.snippets.get(scope) || [];
                languageSnippets.push(snippet);
                this_2.snippets.set(scope, languageSnippets);
                toDispose.push(disposable_1.Disposable.create(function () {
                    var index = languageSnippets.indexOf(snippet);
                    if (index !== -1) {
                        languageSnippets.splice(index, 1);
                    }
                }));
            };
            try {
                for (var _b = (e_6 = void 0, __values(snippet.scopes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var scope = _c.value;
                    _loop_4(scope);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        };
        var this_2 = this;
        try {
            for (var snippets_1 = __values(snippets), snippets_1_1 = snippets_1.next(); !snippets_1_1.done; snippets_1_1 = snippets_1.next()) {
                var snippet = snippets_1_1.value;
                _loop_3(snippet);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (snippets_1_1 && !snippets_1_1.done && (_a = snippets_1.return)) _a.call(snippets_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return toDispose;
    };
    MonacoSnippetSuggestProvider.prototype.isPatternInWord = function (patternLow, patternPos, patternLen, wordLow, wordPos, wordLen) {
        while (patternPos < patternLen && wordPos < wordLen) {
            if (patternLow[patternPos] === wordLow[wordPos]) {
                patternPos += 1;
            }
            wordPos += 1;
        }
        return patternPos === patternLen; // pattern must be exhausted
    };
    var MonacoSnippetSuggestProvider_1;
    MonacoSnippetSuggestProvider._maxPrefix = 10000;
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], MonacoSnippetSuggestProvider.prototype, "filesystem", void 0);
    MonacoSnippetSuggestProvider = MonacoSnippetSuggestProvider_1 = __decorate([
        inversify_1.injectable()
    ], MonacoSnippetSuggestProvider);
    return MonacoSnippetSuggestProvider;
}());
exports.MonacoSnippetSuggestProvider = MonacoSnippetSuggestProvider;
var JsonSerializedSnippet;
(function (JsonSerializedSnippet) {
    function is(obj) {
        return typeof obj === 'object' && 'body' in obj && 'prefix' in obj;
    }
    JsonSerializedSnippet.is = is;
})(JsonSerializedSnippet = exports.JsonSerializedSnippet || (exports.JsonSerializedSnippet = {}));
var MonacoSnippetSuggestion = /** @class */ (function () {
    function MonacoSnippetSuggestion(snippet, range) {
        this.snippet = snippet;
        this.range = range;
        this.noAutoAccept = true;
        this.kind = monaco.languages.CompletionItemKind.Snippet;
        this.insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
        this.resolved = false;
        this.label = snippet.prefix;
        this.detail = (snippet.description || snippet.name) + " (" + snippet.source + ")";
        this.insertText = snippet.body;
        this.sortText = "z-" + snippet.prefix;
        this.range = range;
    }
    MonacoSnippetSuggestion.prototype.resolve = function () {
        if (!this.resolved) {
            var codeSnippet = new monaco.snippetParser.SnippetParser().parse(this.snippet.body).toString();
            this.documentation = { value: '```\n' + codeSnippet + '```' };
            this.resolved = true;
        }
        return this;
    };
    MonacoSnippetSuggestion.compareByLabel = function (a, b) {
        return a.label > b.label ? 1 : a.label < b.label ? -1 : 0;
    };
    return MonacoSnippetSuggestion;
}());
exports.MonacoSnippetSuggestion = MonacoSnippetSuggestion;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson
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
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "../node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var MonacoStatusBarContribution = /** @class */ (function () {
    function MonacoStatusBarContribution(editorManager, statusBar) {
        this.editorManager = editorManager;
        this.statusBar = statusBar;
        this.toDispose = new core_1.DisposableCollection();
    }
    MonacoStatusBarContribution.prototype.onStart = function (app) {
        var _this = this;
        this.updateStatusBar();
        this.editorManager.onCurrentEditorChanged(function () { return _this.updateStatusBar(); });
    };
    MonacoStatusBarContribution.prototype.updateStatusBar = function () {
        var _this = this;
        var editor = this.editorManager.currentEditor;
        var editorModel = this.getModel(editor);
        if (editor && editorModel) {
            this.setConfigTabSizeWidget();
            this.setLineEndingWidget();
            this.toDispose.dispose();
            this.toDispose.push(editorModel.onDidChangeOptions(function () {
                _this.setConfigTabSizeWidget();
                _this.setLineEndingWidget();
            }));
            var previous_1 = editorModel.getEOL();
            this.toDispose.push(editorModel.onDidChangeContent(function (e) {
                if (previous_1 !== e.eol) {
                    previous_1 = e.eol;
                    _this.setLineEndingWidget();
                }
            }));
        }
        else {
            this.removeConfigTabSizeWidget();
            this.removeLineEndingWidget();
        }
    };
    MonacoStatusBarContribution.prototype.setConfigTabSizeWidget = function () {
        var editor = this.editorManager.currentEditor;
        var editorModel = this.getModel(editor);
        if (editor && editorModel) {
            var modelOptions = editorModel.getOptions();
            var tabSize = modelOptions.tabSize;
            var useSpaceOrTab = modelOptions.insertSpaces ? 'Spaces' : 'Tab Size';
            this.statusBar.setElement('editor-status-tabbing-config', {
                text: useSpaceOrTab + ": " + tabSize,
                alignment: browser_1.StatusBarAlignment.RIGHT,
                priority: 10,
                command: browser_2.EditorCommands.CONFIG_INDENTATION.id,
                tooltip: 'Select Indentation'
            });
        }
    };
    MonacoStatusBarContribution.prototype.removeConfigTabSizeWidget = function () {
        this.statusBar.removeElement('editor-status-tabbing-config');
    };
    MonacoStatusBarContribution.prototype.setLineEndingWidget = function () {
        var editor = this.editorManager.currentEditor;
        var editorModel = this.getModel(editor);
        if (editor && editorModel) {
            var eol = editorModel.getEOL();
            var text = eol === '\n' ? 'LF' : 'CRLF';
            this.statusBar.setElement('editor-status-eol', {
                text: "" + text,
                alignment: browser_1.StatusBarAlignment.RIGHT,
                priority: 11,
                command: browser_2.EditorCommands.CONFIG_EOL.id,
                tooltip: 'Select End Of Line Sequence'
            });
        }
    };
    MonacoStatusBarContribution.prototype.removeLineEndingWidget = function () {
        this.statusBar.removeElement('editor-status-eol');
    };
    MonacoStatusBarContribution.prototype.getModel = function (editor) {
        var monacoEditor = monaco_editor_1.MonacoEditor.get(editor);
        return monacoEditor && monacoEditor.getControl().getModel() || undefined;
    };
    MonacoStatusBarContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.EditorManager)),
        __param(1, inversify_1.inject(browser_1.StatusBar)),
        __metadata("design:paramtypes", [browser_2.EditorManager, Object])
    ], MonacoStatusBarContribution);
    return MonacoStatusBarContribution;
}());
exports.MonacoStatusBarContribution = MonacoStatusBarContribution;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/monaco-theming-service.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/monaco-theming-service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "../node_modules/jsonc-parser/lib/esm/main.js");
var plistparser = __webpack_require__(/*! fast-plist */ "../node_modules/fast-plist/release/src/main.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "../node_modules/@theia/core/lib/browser/theming.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var filesystem_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem */ "../node_modules/@theia/filesystem/lib/common/filesystem.js");
var monaco_theme_registry_1 = __webpack_require__(/*! ./textmate/monaco-theme-registry */ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js");
var monaco_indexed_db_1 = __webpack_require__(/*! ./monaco-indexed-db */ "../node_modules/@theia/monaco/lib/browser/monaco-indexed-db.js");
var MonacoThemingService = /** @class */ (function () {
    function MonacoThemingService() {
    }
    MonacoThemingService_1 = MonacoThemingService;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoThemingService.prototype.register = function (theme, pending) {
        if (pending === void 0) { pending = {}; }
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        this.doRegister(theme, pending, toDispose);
        return toDispose;
    };
    MonacoThemingService.prototype.doRegister = function (theme, pending, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var includes, json, label, id, description, uiTheme, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        includes = {};
                        return [4 /*yield*/, this.loadTheme(theme.uri, includes, pending, toDispose)];
                    case 1:
                        json = _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        label = theme.label || new uri_1.default(theme.uri).path.base;
                        id = theme.id, description = theme.description, uiTheme = theme.uiTheme;
                        toDispose.push(MonacoThemingService_1.register({ id: id, label: label, description: description, uiTheme: uiTheme, json: json, includes: includes }));
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error('Failed to load theme from ' + theme.uri, e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MonacoThemingService.prototype.loadTheme = function (uri, includes, pending, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var content, themeUri, value, json, value, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.resolveContent(uri)];
                    case 1:
                        content = (_c.sent()).content;
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        themeUri = new uri_1.default(uri);
                        if (themeUri.path.ext !== '.json') {
                            value = plistparser.parse(content);
                            if (value && 'settings' in value && Array.isArray(value.settings)) {
                                return [2 /*return*/, { tokenColors: value.settings }];
                            }
                            throw new Error("Problem parsing tmTheme file: " + uri + ". 'settings' is not array.");
                        }
                        json = jsoncparser.parse(content, undefined, { disallowComments: false });
                        if (!('tokenColors' in json && typeof json.tokenColors === 'string')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.doLoadTheme(themeUri, json.tokenColors, includes, pending, toDispose)];
                    case 2:
                        value = _c.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        json.tokenColors = value.tokenColors;
                        _c.label = 3;
                    case 3:
                        if (!json.include) return [3 /*break*/, 5];
                        _a = includes;
                        _b = json.include;
                        return [4 /*yield*/, this.doLoadTheme(themeUri, json.include, includes, pending, toDispose)];
                    case 4:
                        _a[_b] = _c.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        _c.label = 5;
                    case 5: return [2 /*return*/, json];
                }
            });
        });
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    MonacoThemingService.prototype.doLoadTheme = function (themeUri, referencedPath, includes, pending, toDispose) {
        var referencedUri = themeUri.parent.resolve(referencedPath).toString();
        if (!pending[referencedUri]) {
            pending[referencedUri] = this.loadTheme(referencedUri, includes, pending, toDispose);
        }
        return pending[referencedUri];
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
    MonacoThemingService.init = function () {
        var _this = this;
        this.updateBodyUiTheme();
        theming_1.ThemeService.get().onThemeChange(function () { return _this.updateBodyUiTheme(); });
        this.restore();
    };
    MonacoThemingService.register = function (theme) {
        var uiTheme = theme.uiTheme || 'vs-dark';
        var label = theme.label, description = theme.description, json = theme.json, includes = theme.includes;
        var id = theme.id || label;
        var cssSelector = MonacoThemingService_1.toCssSelector(id);
        var data = monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON.register(json, includes, cssSelector, uiTheme);
        return MonacoThemingService_1.doRegister({ id: id, label: label, description: description, uiTheme: uiTheme, data: data });
    };
    MonacoThemingService.updateBodyUiTheme = function () {
        this.toUpdateUiTheme.dispose();
        var type = theming_1.ThemeService.get().getCurrentTheme().type;
        var uiTheme = type === 'hc' ? 'hc-black' : type === 'light' ? 'vs' : 'vs-dark';
        document.body.classList.add(uiTheme);
        this.toUpdateUiTheme.push(disposable_1.Disposable.create(function () { return document.body.classList.remove(uiTheme); }));
    };
    MonacoThemingService.doRegister = function (state) {
        var id = state.id, label = state.label, description = state.description, uiTheme = state.uiTheme, data = state.data;
        var type = uiTheme === 'vs' ? 'light' : uiTheme === 'vs-dark' ? 'dark' : 'hc';
        var builtInTheme = uiTheme === 'vs' ? theming_1.BuiltinThemeProvider.lightCss : theming_1.BuiltinThemeProvider.darkCss;
        return new disposable_1.DisposableCollection(theming_1.ThemeService.get().register({
            type: type,
            id: id,
            label: label,
            description: description,
            editorTheme: data.name,
            activate: function () {
                builtInTheme.use();
            },
            deactivate: function () {
                builtInTheme.unuse();
            }
        }), monaco_indexed_db_1.putTheme(state));
    };
    MonacoThemingService.restore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var themes, themes_1, themes_1_1, state, e_2;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, monaco_indexed_db_1.getThemes()];
                    case 1:
                        themes = _b.sent();
                        try {
                            for (themes_1 = __values(themes), themes_1_1 = themes_1.next(); !themes_1_1.done; themes_1_1 = themes_1.next()) {
                                state = themes_1_1.value;
                                monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON.setTheme(state.data.name, state.data);
                                MonacoThemingService_1.doRegister(state);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (themes_1_1 && !themes_1_1.done && (_a = themes_1.return)) _a.call(themes_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _b.sent();
                        console.error('Failed to restore monaco themes', e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* remove all characters that are not allowed in css */
    MonacoThemingService.toCssSelector = function (str) {
        str = str.replace(/[^\-a-zA-Z0-9]/g, '-');
        if (str.charAt(0).match(/[0-9\-]/)) {
            str = '-' + str;
        }
        return str;
    };
    var MonacoThemingService_1;
    MonacoThemingService.toUpdateUiTheme = new disposable_1.DisposableCollection();
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], MonacoThemingService.prototype, "fileSystem", void 0);
    MonacoThemingService = MonacoThemingService_1 = __decorate([
        inversify_1.injectable()
    ], MonacoThemingService);
    return MonacoThemingService;
}());
exports.MonacoThemingService = MonacoThemingService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var textmate_registry_1 = __webpack_require__(/*! ./textmate-registry */ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js");
var textmate_contribution_1 = __webpack_require__(/*! ./textmate-contribution */ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js");
var monaco_textmate_service_1 = __webpack_require__(/*! ./monaco-textmate-service */ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js");
var monaco_theme_registry_1 = __webpack_require__(/*! ./monaco-theme-registry */ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js");
var onigasm_1 = __webpack_require__(/*! onigasm */ "../node_modules/onigasm/lib/index.js");
function fetchOnigasm() {
    return new Promise(function (resolve, reject) {
        var onigasmPath = __webpack_require__(/*! onigasm/lib/onigasm.wasm */ "../node_modules/onigasm/lib/onigasm.wasm"); // webpack doing its magic here
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(this.response);
                }
                else {
                    reject(new Error('Could not fetch onigasm'));
                }
            }
        };
        request.open('GET', onigasmPath, true);
        request.responseType = 'arraybuffer';
        request.send();
    });
}
exports.fetchOnigasm = fetchOnigasm;
var OnigasmLib = /** @class */ (function () {
    function OnigasmLib() {
    }
    OnigasmLib.prototype.createOnigScanner = function (sources) {
        return new onigasm_1.OnigScanner(sources);
    };
    OnigasmLib.prototype.createOnigString = function (sources) {
        return new onigasm_1.OnigString(sources);
    };
    return OnigasmLib;
}());
exports.OnigasmLib = OnigasmLib;
exports.default = (function (bind, unbind, isBound, rebind) {
    var onigasmPromise = browser_1.isBasicWasmSupported ? fetchOnigasm().then(function (buffer) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onigasm_1.loadWASM(buffer)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, new OnigasmLib()];
            }
        });
    }); }) : Promise.reject(new Error('wasm not supported'));
    bind(monaco_textmate_service_1.OnigasmPromise).toConstantValue(onigasmPromise);
    bind(monaco_textmate_service_1.MonacoTextmateService).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(monaco_textmate_service_1.MonacoTextmateService);
    core_1.bindContributionProvider(bind, textmate_contribution_1.LanguageGrammarDefinitionContribution);
    bind(textmate_registry_1.TextmateRegistry).toSelf().inSingletonScope();
    bind(monaco_theme_registry_1.MonacoThemeRegistry).toDynamicValue(function () { return monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON; }).inSingletonScope();
});


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Redhat, Ericsson and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var vscode_textmate_1 = __webpack_require__(/*! vscode-textmate */ "../node_modules/vscode-textmate/release/main.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "../node_modules/@theia/core/lib/browser/theming.js");
var textmate_contribution_1 = __webpack_require__(/*! ./textmate-contribution */ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js");
var textmate_tokenizer_1 = __webpack_require__(/*! ./textmate-tokenizer */ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-tokenizer.js");
var textmate_registry_1 = __webpack_require__(/*! ./textmate-registry */ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js");
var monaco_theme_registry_1 = __webpack_require__(/*! ./monaco-theme-registry */ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js");
exports.OnigasmPromise = Symbol('OnigasmPromise');
var MonacoTextmateService = /** @class */ (function () {
    function MonacoTextmateService() {
        this._activatedLanguages = new Set();
        this.toDisposeOnUpdateTheme = new core_1.DisposableCollection();
    }
    MonacoTextmateService.prototype.initialize = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        if (!browser_1.isBasicWasmSupported) {
            console.log('Textmate support deactivated because WebAssembly is not detected.');
            return;
        }
        try {
            for (var _c = __values(this.grammarProviders.getContributions()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var grammarProvider = _d.value;
                try {
                    grammarProvider.registerTextmateLanguage(this.textmateRegistry);
                }
                catch (err) {
                    console.error(err);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.grammarRegistry = new vscode_textmate_1.Registry({
            getOnigLib: function () { return _this.onigasmPromise; },
            theme: this.monacoThemeRegistry.getThemeData(this.currentEditorTheme),
            loadGrammar: function (scopeName) { return __awaiter(_this, void 0, void 0, function () {
                var provider, definition, rawGrammar;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            provider = this.textmateRegistry.getProvider(scopeName);
                            if (!provider) return [3 /*break*/, 2];
                            return [4 /*yield*/, provider.getGrammarDefinition()];
                        case 1:
                            definition = _a.sent();
                            rawGrammar = void 0;
                            if (typeof definition.content === 'string') {
                                rawGrammar = vscode_textmate_1.parseRawGrammar(definition.content, definition.format === 'json' ? 'grammar.json' : 'grammar.plist');
                            }
                            else {
                                rawGrammar = definition.content;
                            }
                            return [2 /*return*/, rawGrammar];
                        case 2: return [2 /*return*/, undefined];
                    }
                });
            }); },
            getInjections: function (scopeName) {
                var provider = _this.textmateRegistry.getProvider(scopeName);
                if (provider && provider.getInjections) {
                    return provider.getInjections(scopeName);
                }
                return [];
            }
        });
        this.updateTheme();
        this.themeService.onThemeChange(function () { return _this.updateTheme(); });
        try {
            for (var _e = __values(this.textmateRegistry.languages), _f = _e.next(); !_f.done; _f = _e.next()) {
                var id = _f.value;
                this.activateLanguage(id);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoTextmateService.prototype.updateTheme = function () {
        this.toDisposeOnUpdateTheme.dispose();
        var currentEditorTheme = this.currentEditorTheme;
        document.body.classList.add(currentEditorTheme);
        this.toDisposeOnUpdateTheme.push(core_1.Disposable.create(function () { return document.body.classList.remove(currentEditorTheme); }));
        // first update registry to run tokenization with the proper theme
        var theme = this.monacoThemeRegistry.getThemeData(currentEditorTheme);
        if (theme) {
            this.grammarRegistry.setTheme(theme);
        }
        // then trigger tokenization by setting monaco theme
        monaco.editor.setTheme(currentEditorTheme);
    };
    Object.defineProperty(MonacoTextmateService.prototype, "currentEditorTheme", {
        get: function () {
            return this.themeService.getCurrentTheme().editorTheme || monaco_theme_registry_1.MonacoThemeRegistry.DARK_DEFAULT_THEME;
        },
        enumerable: true,
        configurable: true
    });
    MonacoTextmateService.prototype.activateLanguage = function (language) {
        var _this = this;
        var toDispose = new core_1.DisposableCollection(core_1.Disposable.create(function () { }));
        toDispose.push(this.waitForLanguage(language, function () {
            return _this.doActivateLanguage(language, toDispose);
        }));
        return toDispose;
    };
    MonacoTextmateService.prototype.doActivateLanguage = function (languageId, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var scopeName, provider, configuration, initialLanguage, grammar, options, tokenizer, support, themeService, languageIdentifier, adapter, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._activatedLanguages.has(languageId)) {
                            return [2 /*return*/];
                        }
                        this._activatedLanguages.add(languageId);
                        toDispose.push(core_1.Disposable.create(function () { return _this._activatedLanguages.delete(languageId); }));
                        scopeName = this.textmateRegistry.getScope(languageId);
                        if (!scopeName) {
                            return [2 /*return*/];
                        }
                        provider = this.textmateRegistry.getProvider(scopeName);
                        if (!provider) {
                            return [2 /*return*/];
                        }
                        configuration = this.textmateRegistry.getGrammarConfiguration(languageId);
                        initialLanguage = textmate_contribution_1.getEncodedLanguageId(languageId);
                        return [4 /*yield*/, this.onigasmPromise];
                    case 1:
                        _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.grammarRegistry.loadGrammarWithConfiguration(scopeName, initialLanguage, configuration)];
                    case 3:
                        grammar = _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        if (!grammar) {
                            throw new Error("no grammar for " + scopeName + ", " + initialLanguage + ", " + JSON.stringify(configuration));
                        }
                        options = configuration.tokenizerOption ? configuration.tokenizerOption : textmate_tokenizer_1.TokenizerOption.DEFAULT;
                        tokenizer = textmate_tokenizer_1.createTextmateTokenizer(grammar, options);
                        toDispose.push(monaco.languages.setTokensProvider(languageId, tokenizer));
                        support = monaco.modes.TokenizationRegistry.get(languageId);
                        themeService = monaco.services.StaticServices.standaloneThemeService.get();
                        languageIdentifier = monaco.services.StaticServices.modeService.get().getLanguageIdentifier(languageId);
                        adapter = new monaco.services.TokenizationSupport2Adapter(themeService, languageIdentifier, tokenizer);
                        support.tokenize = adapter.tokenize.bind(adapter);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.logger.warn('No grammar for this language id', languageId, error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MonacoTextmateService.prototype.waitForLanguage = function (language, cb) {
        var e_3, _a;
        var modeService = monaco.services.StaticServices.modeService.get();
        try {
            for (var _b = __values(Object.keys(modeService['_instantiatedModes'])), _c = _b.next(); !_c.done; _c = _b.next()) {
                var modeId = _c.value;
                var mode = modeService['_instantiatedModes'][modeId];
                if (mode.getId() === language) {
                    cb();
                    return core_1.Disposable.NULL;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return monaco.languages.onLanguage(language, cb);
    };
    __decorate([
        inversify_1.inject(core_1.ContributionProvider), inversify_1.named(textmate_contribution_1.LanguageGrammarDefinitionContribution),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "grammarProviders", void 0);
    __decorate([
        inversify_1.inject(textmate_registry_1.TextmateRegistry),
        __metadata("design:type", textmate_registry_1.TextmateRegistry)
    ], MonacoTextmateService.prototype, "textmateRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(exports.OnigasmPromise),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "onigasmPromise", void 0);
    __decorate([
        inversify_1.inject(theming_1.ThemeService),
        __metadata("design:type", theming_1.ThemeService)
    ], MonacoTextmateService.prototype, "themeService", void 0);
    __decorate([
        inversify_1.inject(monaco_theme_registry_1.MonacoThemeRegistry),
        __metadata("design:type", monaco_theme_registry_1.MonacoThemeRegistry)
    ], MonacoTextmateService.prototype, "monacoThemeRegistry", void 0);
    MonacoTextmateService = __decorate([
        inversify_1.injectable()
    ], MonacoTextmateService);
    return MonacoTextmateService;
}());
exports.MonacoTextmateService = MonacoTextmateService;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var vscode_textmate_1 = __webpack_require__(/*! vscode-textmate */ "../node_modules/vscode-textmate/release/main.js");
var MonacoThemeRegistry = /** @class */ (function () {
    function MonacoThemeRegistry() {
    }
    MonacoThemeRegistry.prototype.getThemeData = function (name) {
        var theme = this.doGetTheme(name);
        return theme && theme.themeData;
    };
    MonacoThemeRegistry.prototype.getTheme = function (name) {
        return this.doGetTheme(name);
    };
    MonacoThemeRegistry.prototype.doGetTheme = function (name) {
        var standaloneThemeService = monaco.services.StaticServices.standaloneThemeService.get();
        var theme = !name ? standaloneThemeService.getTheme() : standaloneThemeService._knownThemes.get(name);
        return theme;
    };
    MonacoThemeRegistry.prototype.setTheme = function (name, data) {
        // monaco auto refreshes a theme with new data
        monaco.editor.defineTheme(name, data);
    };
    /**
     * Register VS Code compatible themes
     */
    MonacoThemeRegistry.prototype.register = function (json, includes, givenName, monacoBase) {
        var _a, _b, e_1, _c, e_2, _d;
        var name = givenName || json.name;
        var result = {
            name: name,
            base: monacoBase || 'vs',
            inherit: true,
            colors: {},
            rules: [],
            settings: []
        };
        if (typeof json.include !== 'undefined') {
            if (!includes || !includes[json.include]) {
                console.error("Couldn't resolve includes theme " + json.include + ".");
            }
            else {
                var parentTheme = this.register(includes[json.include], includes);
                Object.assign(result.colors, parentTheme.colors);
                (_a = result.rules).push.apply(_a, __spread(parentTheme.rules));
                (_b = result.settings).push.apply(_b, __spread(parentTheme.settings));
            }
        }
        var tokenColors = json.tokenColors;
        if (Array.isArray(tokenColors)) {
            try {
                for (var tokenColors_1 = __values(tokenColors), tokenColors_1_1 = tokenColors_1.next(); !tokenColors_1_1.done; tokenColors_1_1 = tokenColors_1.next()) {
                    var tokenColor = tokenColors_1_1.value;
                    if (tokenColor.scope && tokenColor.settings) {
                        result.settings.push({
                            scope: tokenColor.scope,
                            settings: {
                                foreground: this.normalizeColor(tokenColor.settings.foreground),
                                background: this.normalizeColor(tokenColor.settings.background),
                                fontStyle: tokenColor.settings.fontStyle
                            }
                        });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (tokenColors_1_1 && !tokenColors_1_1.done && (_c = tokenColors_1.return)) _c.call(tokenColors_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (json.colors) {
            Object.assign(result.colors, json.colors);
            result.encodedTokensColors = Object.keys(result.colors).map(function (key) { return result.colors[key]; });
        }
        if (monacoBase && givenName) {
            try {
                for (var _e = __values(result.settings), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var setting = _f.value;
                    this.transform(setting, function (rule) { return result.rules.push(rule); });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // the default rule (scope empty) is always the first rule. Ignore all other default rules.
            var defaultTheme = monaco.services.StaticServices.standaloneThemeService.get()._knownThemes.get(result.base);
            var foreground = result.colors['editor.foreground'] || defaultTheme.getColor('editor.foreground');
            var background = result.colors['editor.background'] || defaultTheme.getColor('editor.background');
            result.settings.unshift({
                settings: {
                    foreground: this.normalizeColor(foreground),
                    background: this.normalizeColor(background)
                }
            });
            var reg = new vscode_textmate_1.Registry();
            reg.setTheme(result);
            result.encodedTokensColors = reg.getColorMap();
            // index 0 has to be set to null as it is 'undefined' by default, but monaco code expects it to be null
            // eslint-disable-next-line no-null/no-null
            result.encodedTokensColors[0] = null;
            this.setTheme(givenName, result);
        }
        return result;
    };
    MonacoThemeRegistry.prototype.transform = function (tokenColor, acceptor) {
        var e_3, _a;
        if (typeof tokenColor.scope === 'undefined') {
            tokenColor.scope = [''];
        }
        else if (typeof tokenColor.scope === 'string') {
            tokenColor.scope = tokenColor.scope.split(',').map(function (scope) { return scope.trim(); });
        }
        try {
            for (var _b = __values(tokenColor.scope), _c = _b.next(); !_c.done; _c = _b.next()) {
                var scope = _c.value;
                acceptor(__assign({}, tokenColor.settings, { token: scope }));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    MonacoThemeRegistry.prototype.normalizeColor = function (color) {
        if (!color) {
            return undefined;
        }
        var normalized = String(color).replace(/^\#/, '').slice(0, 6);
        if (normalized.length < 6) {
            // ignoring not normalized colors to avoid breaking token color indexes between monaco and vscode-textmate
            console.error("Color '" + normalized + "' is NOT normalized, it must have 6 positions.");
            return undefined;
        }
        return '#' + normalized;
    };
    MonacoThemeRegistry = __decorate([
        inversify_1.injectable()
    ], MonacoThemeRegistry);
    return MonacoThemeRegistry;
}());
exports.MonacoThemeRegistry = MonacoThemeRegistry;
(function (MonacoThemeRegistry) {
    MonacoThemeRegistry.SINGLETON = new MonacoThemeRegistry();
    MonacoThemeRegistry.DARK_DEFAULT_THEME = MonacoThemeRegistry.SINGLETON.register(__webpack_require__(/*! ../../../data/monaco-themes/vscode/dark_theia.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_theia.json"), {
        './dark_defaults.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/dark_defaults.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_defaults.json"),
        './dark_vs.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/dark_vs.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_vs.json"),
        './dark_plus.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/dark_plus.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/dark_plus.json")
    }, 'dark-theia', 'vs-dark').name;
    MonacoThemeRegistry.LIGHT_DEFAULT_THEME = MonacoThemeRegistry.SINGLETON.register(__webpack_require__(/*! ../../../data/monaco-themes/vscode/light_theia.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/light_theia.json"), {
        './light_defaults.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/light_defaults.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/light_defaults.json"),
        './light_vs.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/light_vs.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/light_vs.json"),
        './light_plus.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/light_plus.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/light_plus.json"),
    }, 'light-theia', 'vs').name;
    MonacoThemeRegistry.HC_DEFAULT_THEME = MonacoThemeRegistry.SINGLETON.register(__webpack_require__(/*! ../../../data/monaco-themes/vscode/hc_theia.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/hc_theia.json"), {
        './hc_black_defaults.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/hc_black_defaults.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black_defaults.json"),
        './hc_black.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/hc_black.json */ "../node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black.json")
    }, 'hc-theia', 'hc-black').name;
})(MonacoThemeRegistry = exports.MonacoThemeRegistry || (exports.MonacoThemeRegistry = {}));
exports.MonacoThemeRegistry = MonacoThemeRegistry;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
/**
 * Callback for extensions to contribute language grammar definitions
 */
exports.LanguageGrammarDefinitionContribution = Symbol('LanguageGrammarDefinitionContribution');
function getEncodedLanguageId(languageId) {
    return monaco.languages.getEncodedLanguageId(languageId);
}
exports.getEncodedLanguageId = getEncodedLanguageId;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../node_modules/@theia/core/lib/common/disposable.js");
var TextmateRegistry = /** @class */ (function () {
    function TextmateRegistry() {
        this.scopeToProvider = new Map();
        this.languageToConfig = new Map();
        this.languageIdToScope = new Map();
    }
    Object.defineProperty(TextmateRegistry.prototype, "languages", {
        get: function () {
            return this.languageIdToScope.keys();
        },
        enumerable: true,
        configurable: true
    });
    TextmateRegistry.prototype.registerTextmateGrammarScope = function (scope, provider) {
        var providers = this.scopeToProvider.get(scope) || [];
        var existingProvider = providers[0];
        if (existingProvider) {
            Promise.all([existingProvider.getGrammarDefinition(), provider.getGrammarDefinition()]).then(function (_a) {
                var _b = __read(_a, 2), a = _b[0], b = _b[1];
                if (a.location !== b.location || !a.location && !b.location) {
                    console.warn(new Error("a registered grammar provider for '" + scope + "' scope is overridden"));
                }
            });
        }
        providers.unshift(provider);
        this.scopeToProvider.set(scope, providers);
        return disposable_1.Disposable.create(function () {
            var index = providers.indexOf(provider);
            if (index !== -1) {
                providers.splice(index, 1);
            }
        });
    };
    TextmateRegistry.prototype.getProvider = function (scope) {
        var providers = this.scopeToProvider.get(scope);
        return providers && providers[0];
    };
    TextmateRegistry.prototype.mapLanguageIdToTextmateGrammar = function (languageId, scope) {
        var scopes = this.languageIdToScope.get(languageId) || [];
        var existingScope = scopes[0];
        if (typeof existingScope === 'string') {
            console.warn(new Error("'" + languageId + "' language is remapped from '" + existingScope + "' to '" + scope + "' scope"));
        }
        scopes.unshift(scope);
        this.languageIdToScope.set(languageId, scopes);
        return disposable_1.Disposable.create(function () {
            var index = scopes.indexOf(scope);
            if (index !== -1) {
                scopes.splice(index, 1);
            }
        });
    };
    TextmateRegistry.prototype.getScope = function (languageId) {
        var scopes = this.languageIdToScope.get(languageId);
        return scopes && scopes[0];
    };
    TextmateRegistry.prototype.getLanguageId = function (scope) {
        var e_1, _a;
        try {
            for (var _b = __values(this.languageIdToScope.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var languageId = _c.value;
                if (this.getScope(languageId) === scope) {
                    return languageId;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return undefined;
    };
    TextmateRegistry.prototype.registerGrammarConfiguration = function (languageId, config) {
        var configs = this.languageToConfig.get(languageId) || [];
        var existingConfig = configs[0];
        if (existingConfig) {
            console.warn(new Error("a registered grammar configuration for '" + languageId + "' language is overridden"));
        }
        configs.unshift(config);
        this.languageToConfig.set(languageId, configs);
        return disposable_1.Disposable.create(function () {
            var index = configs.indexOf(config);
            if (index !== -1) {
                configs.splice(index, 1);
            }
        });
    };
    TextmateRegistry.prototype.getGrammarConfiguration = function (languageId) {
        var configs = this.languageToConfig.get(languageId);
        return configs && configs[0] || {};
    };
    TextmateRegistry = __decorate([
        inversify_1.injectable()
    ], TextmateRegistry);
    return TextmateRegistry;
}());
exports.TextmateRegistry = TextmateRegistry;


/***/ }),

/***/ "../node_modules/@theia/monaco/lib/browser/textmate/textmate-tokenizer.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@theia/monaco/lib/browser/textmate/textmate-tokenizer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
var vscode_textmate_1 = __webpack_require__(/*! vscode-textmate */ "../node_modules/vscode-textmate/release/main.js");
var TokenizerState = /** @class */ (function () {
    function TokenizerState(ruleStack) {
        this.ruleStack = ruleStack;
    }
    TokenizerState.prototype.clone = function () {
        return new TokenizerState(this.ruleStack);
    };
    TokenizerState.prototype.equals = function (other) {
        return other instanceof TokenizerState && (other === this || other.ruleStack === this.ruleStack);
    };
    return TokenizerState;
}());
exports.TokenizerState = TokenizerState;
var TokenizerOption;
(function (TokenizerOption) {
    /**
     * The default TextMate tokenizer option.
     */
    TokenizerOption.DEFAULT = {
        lineLimit: 400
    };
})(TokenizerOption = exports.TokenizerOption || (exports.TokenizerOption = {}));
function createTextmateTokenizer(grammar, options) {
    if (options.lineLimit !== undefined && (options.lineLimit <= 0 || !Number.isInteger(options.lineLimit))) {
        throw new Error("The 'lineLimit' must be a positive integer. It was " + options.lineLimit + ".");
    }
    return {
        getInitialState: function () { return new TokenizerState(vscode_textmate_1.INITIAL); },
        tokenizeEncoded: function (line, state) {
            var processedLine = line;
            if (options.lineLimit !== undefined && line.length > options.lineLimit) {
                // Line is too long to be tokenized
                processedLine = line.substr(0, options.lineLimit);
            }
            var result = grammar.tokenizeLine2(processedLine, state.ruleStack);
            return {
                endState: new TokenizerState(result.ruleStack),
                tokens: result.tokens
            };
        },
        tokenize: function (line, state) {
            var processedLine = line;
            if (options.lineLimit !== undefined && line.length > options.lineLimit) {
                // Line is too long to be tokenized
                processedLine = line.substr(0, options.lineLimit);
            }
            var result = grammar.tokenizeLine(processedLine, state.ruleStack);
            return {
                endState: new TokenizerState(result.ruleStack),
                tokens: result.tokens.map(function (t) { return ({
                    startIndex: t.startIndex,
                    scopes: t.scopes.reverse().join(' ')
                }); })
            };
        }
    };
}
exports.createTextmateTokenizer = createTextmateTokenizer;


/***/ }),

/***/ "../node_modules/@theia/monaco/src/browser/style/index.css":
/*!*****************************************************************!*\
  !*** ../node_modules/@theia/monaco/src/browser/style/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/monaco/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@theia/monaco/src/browser/style/symbol-icons.css":
/*!************************************************************************!*\
  !*** ../node_modules/@theia/monaco/src/browser/style/symbol-icons.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./symbol-icons.css */ "../node_modules/css-loader/index.js!../node_modules/@theia/monaco/src/browser/style/symbol-icons.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg":
/*!*************************************************************************!*\
  !*** ../node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf2aabacdc2b3a5768b03545cb1d8330.svg";

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/monaco/src/browser/style/index.css":
/*!********************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/monaco/src/browser/style/index.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".monaco-editor {\n    padding-bottom: 5.6px;\n    font-family: var(--theia-ui-font-family);\n    font-size: inherit !important;\n}\n\n/*\n * set z-index to 0, so tabs are not above overlay widgets\n */\n.p-TabBar.theia-app-centers {\n    z-index: 0;\n    display: flex;\n}\n\n/*\n * we need to disable the background image when using font awesome icons and file-icons\n */\n.monaco-quick-open-widget .quick-open-tree .quick-open-entry .quick-open-entry-icon.fa,\n.monaco-quick-open-widget .quick-open-tree .quick-open-entry .quick-open-entry-icon.file-icon {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: none;\n    margin-right: 0px;\n}\n\n.monaco-quick-open-widget {\n    background-color: var(--theia-quickInput-background) !important;\n    color: var(--theia-quickInput-foreground) !important;\n}\n\n.quick-open-entry .quick-open-row .monaco-icon-label .monaco-icon-label-description-container .label-description {\n    font-size: calc(var(--theia-ui-font-size0) * 0.95);\n}\n\n.monaco-editor .zone-widget {\n\tposition: absolute;\n\tz-index: 10;\n}\n\n.monaco-editor .zone-widget .zone-widget-container {\n\tborder-top-style: solid;\n\tborder-bottom-style: solid;\n\tborder-top-width: 0;\n\tborder-bottom-width: 0;\n    border-top-color: var(--theia-peekView-border);\n    border-bottom-color: var(--theia-peekView-border);\n\tposition: relative;\n}\n\n.monaco-editor .parameter-hints-widget > .wrapper {\n    overflow: hidden;\n}\n\n/* List highlight, see https://github.com/microsoft/vscode/blob/ff5f581425da6230b6f9216ecf19abf6c9d285a6/src/vs/workbench/browser/style.ts#L50 */\n.monaco-tree .monaco-tree-row .monaco-highlighted-label .highlight,\n.monaco-list .monaco-list-row .monaco-highlighted-label .highlight {\n\tcolor: var(--theia-list-highlightForeground) !important; \n}\n\n/* Scrollbars, see https://github.com/microsoft/vscode/blob/ff5f581425da6230b6f9216ecf19abf6c9d285a6/src/vs/workbench/browser/style.ts#L65 */\n.monaco-scrollable-element > .shadow.top {\n    box-shadow: var(--theia-scrollbar-shadow) 0 6px 6px -6px inset !important;\n}\n\n.monaco-scrollable-element > .shadow.left {\n    box-shadow: var(--theia-scrollbar-shadow) 6px 0 6px -6px inset !important;\n}\n\n.monaco-scrollable-element > .shadow.top.left {\n    box-shadow: var(--theia-scrollbar-shadow) 6px 6px 6px -6px inset !important;\n}\n\n.monaco-scrollable-element > .scrollbar > .slider {\n    background: var(--theia-scrollbarSlider-background) !important;\n}\n\n.monaco-scrollable-element > .scrollbar > .slider:hover {\n    background: var(--theia-scrollbarSlider-hoverBackground) !important;\n}\n\n.monaco-scrollable-element > .scrollbar > .slider.active {\n    background: var(--theia-scrollbarSlider-activeBackground) !important;\n}\n\n.monaco-scrollable-element > .scrollbar.vertical > .slider {\n    width: var(--theia-scrollbar-width) !important;\n}\n\n.monaco-scrollable-element > .scrollbar.horizontal > .slider {\n    height: var(--theia-scrollbar-width) !important;\n}\n\n.monaco-editor .reference-zone-widget .ref-tree .referenceMatch .highlight {\n    color: unset !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/@theia/monaco/src/browser/style/symbol-icons.css":
/*!***************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/@theia/monaco/src/browser/style/symbol-icons.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".symbol-icon {\n    background-image: url(" + escape(__webpack_require__(/*! ./symbol-sprite.svg */ "../node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg")) + ");\n    background-repeat: no-repeat;\n    overflow: hidden;\n    min-width: var(--theia-icon-size);\n    height: var(--theia-icon-size);\n    margin-right: 4px;\n}\n\n.symbol-icon-center {\n    align-self: center;\n}\n\n.symbol-icon.method {\n    background-position: 0 calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.constant,\n.symbol-icon.variable {\n    background-position: -22px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.class {\n    background-position: -42px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.interface {\n    background-position: -62px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.module {\n    background-position: -82px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.property {\n    background-position: -102px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.enum {\n    background-position: -122px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.rule {\n    background-position: -242px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.file {\n    background-position: -262px calc(var(--theia-sprite-y-offset));\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/fast-plist/release/src/main.js":
/*!******************************************************!*\
  !*** ../node_modules/fast-plist/release/src/main.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

function parseWithLocation(content, filename, locationKeyName) {
    return _parse(content, filename, locationKeyName);
}
exports.parseWithLocation = parseWithLocation;
/**
 * A very fast plist parser
 */
function parse(content) {
    return _parse(content, null, null);
}
exports.parse = parse;
function _parse(content, filename, locationKeyName) {
    var len = content.length;
    var pos = 0;
    var line = 1;
    var char = 0;
    // Skip UTF8 BOM
    if (len > 0 && content.charCodeAt(0) === 65279 /* BOM */) {
        pos = 1;
    }
    function advancePosBy(by) {
        if (locationKeyName === null) {
            pos = pos + by;
        }
        else {
            while (by > 0) {
                var chCode = content.charCodeAt(pos);
                if (chCode === 10 /* LINE_FEED */) {
                    pos++;
                    line++;
                    char = 0;
                }
                else {
                    pos++;
                    char++;
                }
                by--;
            }
        }
    }
    function advancePosTo(to) {
        if (locationKeyName === null) {
            pos = to;
        }
        else {
            advancePosBy(to - pos);
        }
    }
    function skipWhitespace() {
        while (pos < len) {
            var chCode = content.charCodeAt(pos);
            if (chCode !== 32 /* SPACE */ && chCode !== 9 /* TAB */ && chCode !== 13 /* CARRIAGE_RETURN */ && chCode !== 10 /* LINE_FEED */) {
                break;
            }
            advancePosBy(1);
        }
    }
    function advanceIfStartsWith(str) {
        if (content.substr(pos, str.length) === str) {
            advancePosBy(str.length);
            return true;
        }
        return false;
    }
    function advanceUntil(str) {
        var nextOccurence = content.indexOf(str, pos);
        if (nextOccurence !== -1) {
            advancePosTo(nextOccurence + str.length);
        }
        else {
            // EOF
            advancePosTo(len);
        }
    }
    function captureUntil(str) {
        var nextOccurence = content.indexOf(str, pos);
        if (nextOccurence !== -1) {
            var r = content.substring(pos, nextOccurence);
            advancePosTo(nextOccurence + str.length);
            return r;
        }
        else {
            // EOF
            var r = content.substr(pos);
            advancePosTo(len);
            return r;
        }
    }
    var state = 0 /* ROOT_STATE */;
    var cur = null;
    var stateStack = [];
    var objStack = [];
    var curKey = null;
    function pushState(newState, newCur) {
        stateStack.push(state);
        objStack.push(cur);
        state = newState;
        cur = newCur;
    }
    function popState() {
        state = stateStack.pop();
        cur = objStack.pop();
    }
    function fail(msg) {
        throw new Error('Near offset ' + pos + ': ' + msg + ' ~~~' + content.substr(pos, 50) + '~~~');
    }
    var dictState = {
        enterDict: function () {
            if (curKey === null) {
                fail('missing <key>');
            }
            var newDict = {};
            if (locationKeyName !== null) {
                newDict[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            cur[curKey] = newDict;
            curKey = null;
            pushState(1 /* DICT_STATE */, newDict);
        },
        enterArray: function () {
            if (curKey === null) {
                fail('missing <key>');
            }
            var newArr = [];
            cur[curKey] = newArr;
            curKey = null;
            pushState(2 /* ARR_STATE */, newArr);
        }
    };
    var arrState = {
        enterDict: function () {
            var newDict = {};
            if (locationKeyName !== null) {
                newDict[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            cur.push(newDict);
            pushState(1 /* DICT_STATE */, newDict);
        },
        enterArray: function () {
            var newArr = [];
            cur.push(newArr);
            pushState(2 /* ARR_STATE */, newArr);
        }
    };
    function enterDict() {
        if (state === 1 /* DICT_STATE */) {
            dictState.enterDict();
        }
        else if (state === 2 /* ARR_STATE */) {
            arrState.enterDict();
        }
        else {
            cur = {};
            if (locationKeyName !== null) {
                cur[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            pushState(1 /* DICT_STATE */, cur);
        }
    }
    function leaveDict() {
        if (state === 1 /* DICT_STATE */) {
            popState();
        }
        else if (state === 2 /* ARR_STATE */) {
            fail('unexpected </dict>');
        }
        else {
            fail('unexpected </dict>');
        }
    }
    function enterArray() {
        if (state === 1 /* DICT_STATE */) {
            dictState.enterArray();
        }
        else if (state === 2 /* ARR_STATE */) {
            arrState.enterArray();
        }
        else {
            cur = [];
            pushState(2 /* ARR_STATE */, cur);
        }
    }
    function leaveArray() {
        if (state === 1 /* DICT_STATE */) {
            fail('unexpected </array>');
        }
        else if (state === 2 /* ARR_STATE */) {
            popState();
        }
        else {
            fail('unexpected </array>');
        }
    }
    function acceptKey(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey !== null) {
                fail('too many <key>');
            }
            curKey = val;
        }
        else if (state === 2 /* ARR_STATE */) {
            fail('unexpected <key>');
        }
        else {
            fail('unexpected <key>');
        }
    }
    function acceptString(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptReal(val) {
        if (isNaN(val)) {
            fail('cannot parse float');
        }
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptInteger(val) {
        if (isNaN(val)) {
            fail('cannot parse integer');
        }
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptDate(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptData(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptBool(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function escapeVal(str) {
        return str.replace(/&#([0-9]+);/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 10));
        }).replace(/&#x([0-9a-f]+);/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 16));
        }).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function (_) {
            switch (_) {
                case '&amp;': return '&';
                case '&lt;': return '<';
                case '&gt;': return '>';
                case '&quot;': return '"';
                case '&apos;': return '\'';
            }
            return _;
        });
    }
    function parseOpenTag() {
        var r = captureUntil('>');
        var isClosed = false;
        if (r.charCodeAt(r.length - 1) === 47 /* SLASH */) {
            isClosed = true;
            r = r.substring(0, r.length - 1);
        }
        return {
            name: r.trim(),
            isClosed: isClosed
        };
    }
    function parseTagValue(tag) {
        if (tag.isClosed) {
            return '';
        }
        var val = captureUntil('</');
        advanceUntil('>');
        return escapeVal(val);
    }
    while (pos < len) {
        skipWhitespace();
        if (pos >= len) {
            break;
        }
        var chCode = content.charCodeAt(pos);
        advancePosBy(1);
        if (chCode !== 60 /* LESS_THAN */) {
            fail('expected <');
        }
        if (pos >= len) {
            fail('unexpected end of input');
        }
        var peekChCode = content.charCodeAt(pos);
        if (peekChCode === 63 /* QUESTION_MARK */) {
            advancePosBy(1);
            advanceUntil('?>');
            continue;
        }
        if (peekChCode === 33 /* EXCLAMATION_MARK */) {
            advancePosBy(1);
            if (advanceIfStartsWith('--')) {
                advanceUntil('-->');
                continue;
            }
            advanceUntil('>');
            continue;
        }
        if (peekChCode === 47 /* SLASH */) {
            advancePosBy(1);
            skipWhitespace();
            if (advanceIfStartsWith('plist')) {
                advanceUntil('>');
                continue;
            }
            if (advanceIfStartsWith('dict')) {
                advanceUntil('>');
                leaveDict();
                continue;
            }
            if (advanceIfStartsWith('array')) {
                advanceUntil('>');
                leaveArray();
                continue;
            }
            fail('unexpected closed tag');
        }
        var tag = parseOpenTag();
        switch (tag.name) {
            case 'dict':
                enterDict();
                if (tag.isClosed) {
                    leaveDict();
                }
                continue;
            case 'array':
                enterArray();
                if (tag.isClosed) {
                    leaveArray();
                }
                continue;
            case 'key':
                acceptKey(parseTagValue(tag));
                continue;
            case 'string':
                acceptString(parseTagValue(tag));
                continue;
            case 'real':
                acceptReal(parseFloat(parseTagValue(tag)));
                continue;
            case 'integer':
                acceptInteger(parseInt(parseTagValue(tag), 10));
                continue;
            case 'date':
                acceptDate(new Date(parseTagValue(tag)));
                continue;
            case 'data':
                acceptData(parseTagValue(tag));
                continue;
            case 'true':
                parseTagValue(tag);
                acceptBool(true);
                continue;
            case 'false':
                parseTagValue(tag);
                acceptBool(false);
                continue;
        }
        if (/^plist/.test(tag.name)) {
            continue;
        }
        fail('unexpected opened tag ' + tag.name);
    }
    return cur;
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../node_modules/idb/build/esm/chunk.js":
/*!**********************************************!*\
  !*** ../node_modules/idb/build/esm/chunk.js ***!
  \**********************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addTraps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return instanceOfAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reverseTransformCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return unwrap; });
const instanceOfAny = (object, constructors) => constructors.some(c => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then(value => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error);
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function addTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ }),

/***/ "../node_modules/idb/build/esm/index.js":
/*!**********************************************!*\
  !*** ../node_modules/idb/build/esm/index.js ***!
  \**********************************************/
/*! exports provided: unwrap, wrap, openDB, deleteDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDB", function() { return openDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDB", function() { return deleteDB; });
/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk.js */ "../node_modules/idb/build/esm/chunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"])(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', event => {
            upgrade(Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"])(request.result), event.oldVersion, event.newVersion, Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"])(request.transaction));
        });
    }
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    if (blocking) {
        openPromise.then(db => db.addEventListener('versionchange', blocking)).catch(() => { });
    }
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    return Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"])(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        const returnVal = target[targetFuncName](...args);
        if (isWrite)
            await tx.done;
        return returnVal;
    };
    cachedMethods.set(prop, method);
    return method;
}
Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["b"])(oldTraps => ({
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "../node_modules/lru-cache/index.js":
/*!******************************************!*\
  !*** ../node_modules/lru-cache/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

module.exports = LRUCache

// This will be a proper iterable 'Map' in engines that support it,
// or a fakey-fake PseudoMap in older versions.
var Map = __webpack_require__(/*! pseudomap */ "../node_modules/pseudomap/map.js")
var util = __webpack_require__(/*! util */ "../node_modules/util/util.js")

// A linked list to keep track of recently-used-ness
var Yallist = __webpack_require__(/*! yallist */ "../node_modules/lru-cache/node_modules/yallist/yallist.js")

// use symbols if possible, otherwise just _props
var hasSymbol = typeof Symbol === 'function' && process.env._nodeLRUCacheForceNoSymbol !== '1'
var makeSymbol
if (hasSymbol) {
  makeSymbol = function (key) {
    return Symbol(key)
  }
} else {
  makeSymbol = function (key) {
    return '_' + key
  }
}

var MAX = makeSymbol('max')
var LENGTH = makeSymbol('length')
var LENGTH_CALCULATOR = makeSymbol('lengthCalculator')
var ALLOW_STALE = makeSymbol('allowStale')
var MAX_AGE = makeSymbol('maxAge')
var DISPOSE = makeSymbol('dispose')
var NO_DISPOSE_ON_SET = makeSymbol('noDisposeOnSet')
var LRU_LIST = makeSymbol('lruList')
var CACHE = makeSymbol('cache')

function naiveLength () { return 1 }

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
function LRUCache (options) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(options)
  }

  if (typeof options === 'number') {
    options = { max: options }
  }

  if (!options) {
    options = {}
  }

  var max = this[MAX] = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!max ||
      !(typeof max === 'number') ||
      max <= 0) {
    this[MAX] = Infinity
  }

  var lc = options.length || naiveLength
  if (typeof lc !== 'function') {
    lc = naiveLength
  }
  this[LENGTH_CALCULATOR] = lc

  this[ALLOW_STALE] = options.stale || false
  this[MAX_AGE] = options.maxAge || 0
  this[DISPOSE] = options.dispose
  this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, 'max', {
  set: function (mL) {
    if (!mL || !(typeof mL === 'number') || mL <= 0) {
      mL = Infinity
    }
    this[MAX] = mL
    trim(this)
  },
  get: function () {
    return this[MAX]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'allowStale', {
  set: function (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  },
  get: function () {
    return this[ALLOW_STALE]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'maxAge', {
  set: function (mA) {
    if (!mA || !(typeof mA === 'number') || mA < 0) {
      mA = 0
    }
    this[MAX_AGE] = mA
    trim(this)
  },
  get: function () {
    return this[MAX_AGE]
  },
  enumerable: true
})

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, 'lengthCalculator', {
  set: function (lC) {
    if (typeof lC !== 'function') {
      lC = naiveLength
    }
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(function (hit) {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      }, this)
    }
    trim(this)
  },
  get: function () { return this[LENGTH_CALCULATOR] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'length', {
  get: function () { return this[LENGTH] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'itemCount', {
  get: function () { return this[LRU_LIST].length },
  enumerable: true
})

LRUCache.prototype.rforEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].tail; walker !== null;) {
    var prev = walker.prev
    forEachStep(this, fn, walker, thisp)
    walker = prev
  }
}

function forEachStep (self, fn, node, thisp) {
  var hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE]) {
      hit = undefined
    }
  }
  if (hit) {
    fn.call(thisp, hit.value, hit.key, self)
  }
}

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].head; walker !== null;) {
    var next = walker.next
    forEachStep(this, fn, walker, thisp)
    walker = next
  }
}

LRUCache.prototype.keys = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.key
  }, this)
}

LRUCache.prototype.values = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.value
  }, this)
}

LRUCache.prototype.reset = function () {
  if (this[DISPOSE] &&
      this[LRU_LIST] &&
      this[LRU_LIST].length) {
    this[LRU_LIST].forEach(function (hit) {
      this[DISPOSE](hit.key, hit.value)
    }, this)
  }

  this[CACHE] = new Map() // hash of items by key
  this[LRU_LIST] = new Yallist() // list of items in order of use recency
  this[LENGTH] = 0 // length of items in the list
}

LRUCache.prototype.dump = function () {
  return this[LRU_LIST].map(function (hit) {
    if (!isStale(this, hit)) {
      return {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }
    }
  }, this).toArray().filter(function (h) {
    return h
  })
}

LRUCache.prototype.dumpLru = function () {
  return this[LRU_LIST]
}

/* istanbul ignore next */
LRUCache.prototype.inspect = function (n, opts) {
  var str = 'LRUCache {'
  var extras = false

  var as = this[ALLOW_STALE]
  if (as) {
    str += '\n  allowStale: true'
    extras = true
  }

  var max = this[MAX]
  if (max && max !== Infinity) {
    if (extras) {
      str += ','
    }
    str += '\n  max: ' + util.inspect(max, opts)
    extras = true
  }

  var maxAge = this[MAX_AGE]
  if (maxAge) {
    if (extras) {
      str += ','
    }
    str += '\n  maxAge: ' + util.inspect(maxAge, opts)
    extras = true
  }

  var lc = this[LENGTH_CALCULATOR]
  if (lc && lc !== naiveLength) {
    if (extras) {
      str += ','
    }
    str += '\n  length: ' + util.inspect(this[LENGTH], opts)
    extras = true
  }

  var didFirst = false
  this[LRU_LIST].forEach(function (item) {
    if (didFirst) {
      str += ',\n  '
    } else {
      if (extras) {
        str += ',\n'
      }
      didFirst = true
      str += '\n  '
    }
    var key = util.inspect(item.key).split('\n').join('\n  ')
    var val = { value: item.value }
    if (item.maxAge !== maxAge) {
      val.maxAge = item.maxAge
    }
    if (lc !== naiveLength) {
      val.length = item.length
    }
    if (isStale(this, item)) {
      val.stale = true
    }

    val = util.inspect(val, opts).split('\n').join('\n  ')
    str += key + ' => ' + val
  })

  if (didFirst || extras) {
    str += '\n'
  }
  str += '}'

  return str
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this[MAX_AGE]

  var now = maxAge ? Date.now() : 0
  var len = this[LENGTH_CALCULATOR](value, key)

  if (this[CACHE].has(key)) {
    if (len > this[MAX]) {
      del(this, this[CACHE].get(key))
      return false
    }

    var node = this[CACHE].get(key)
    var item = node.value

    // dispose of the old one before overwriting
    // split out into 2 ifs for better coverage tracking
    if (this[DISPOSE]) {
      if (!this[NO_DISPOSE_ON_SET]) {
        this[DISPOSE](key, item.value)
      }
    }

    item.now = now
    item.maxAge = maxAge
    item.value = value
    this[LENGTH] += len - item.length
    item.length = len
    this.get(key)
    trim(this)
    return true
  }

  var hit = new Entry(key, value, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this[MAX]) {
    if (this[DISPOSE]) {
      this[DISPOSE](key, value)
    }
    return false
  }

  this[LENGTH] += hit.length
  this[LRU_LIST].unshift(hit)
  this[CACHE].set(key, this[LRU_LIST].head)
  trim(this)
  return true
}

LRUCache.prototype.has = function (key) {
  if (!this[CACHE].has(key)) return false
  var hit = this[CACHE].get(key).value
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var node = this[LRU_LIST].tail
  if (!node) return null
  del(this, node)
  return node.value
}

LRUCache.prototype.del = function (key) {
  del(this, this[CACHE].get(key))
}

LRUCache.prototype.load = function (arr) {
  // reset the cache
  this.reset()

  var now = Date.now()
  // A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l--) {
    var hit = arr[l]
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      // the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      // dont add already expired items
      if (maxAge > 0) {
        this.set(hit.k, hit.v, maxAge)
      }
    }
  }
}

LRUCache.prototype.prune = function () {
  var self = this
  this[CACHE].forEach(function (value, key) {
    get(self, key, false)
  })
}

function get (self, key, doUse) {
  var node = self[CACHE].get(key)
  if (node) {
    var hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE]) hit = undefined
    } else {
      if (doUse) {
        self[LRU_LIST].unshiftNode(node)
      }
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale (self, hit) {
  if (!hit || (!hit.maxAge && !self[MAX_AGE])) {
    return false
  }
  var stale = false
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self[MAX_AGE] && (diff > self[MAX_AGE])
  }
  return stale
}

function trim (self) {
  if (self[LENGTH] > self[MAX]) {
    for (var walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

function del (self, node) {
  if (node) {
    var hit = node.value
    if (self[DISPOSE]) {
      self[DISPOSE](hit.key, hit.value)
    }
    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, length, now, maxAge) {
  this.key = key
  this.value = value
  this.length = length
  this.now = now
  this.maxAge = maxAge || 0
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/lru-cache/node_modules/yallist/yallist.js":
/*!*****************************************************************!*\
  !*** ../node_modules/lru-cache/node_modules/yallist/yallist.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}


/***/ }),

/***/ "../node_modules/onigasm/lib/OnigRegExp.js":
/*!*************************************************!*\
  !*** ../node_modules/onigasm/lib/OnigRegExp.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OnigScanner_1 = __webpack_require__(/*! ./OnigScanner */ "../node_modules/onigasm/lib/OnigScanner.js");
class OnigRegExp {
    /**
     * Create a new regex with the given pattern
     * @param source A string pattern
     */
    constructor(source) {
        this.source = source;
        try {
            this.scanner = new OnigScanner_1.default([this.source]);
        }
        catch (error) {
            // doesn't make much sense, but this to pass atom/node-oniguruam tests
        }
    }
    /**
     * Synchronously search the string for a match starting at the given position
     * @param string The string to search
     * @param startPosition The optional position to start the search at, defaults to `0`
     */
    searchSync(string, startPosition) {
        let match;
        if (startPosition == null) {
            startPosition = 0;
        }
        match = this.scanner.findNextMatchSync(string, startPosition);
        return this.captureIndicesForMatch(string, match);
    }
    /**
     * Search the string for a match starting at the given position
     * @param string The string to search
     * @param startPosition The optional position to start the search at, defaults to `0`
     * @param callback The `(error, match)` function to call when done, match will be null if no matches were found. match will be an array of objects for each matched group on a successful search
     */
    search(string, startPosition, callback) {
        if (startPosition == null) {
            startPosition = 0;
        }
        if (typeof startPosition === 'function') {
            callback = startPosition;
            startPosition = 0;
        }
        try {
            const ret = this.searchSync(string, startPosition);
            callback(null, ret);
        }
        catch (error) {
            callback(error);
        }
    }
    /**
     * Synchronously test if this regular expression matches the given string
     * @param string The string to test against
     */
    testSync(string) {
        if ((typeof this.source === 'boolean' || typeof string === 'boolean')) {
            return this.source === string;
        }
        return this.searchSync(string) != null;
    }
    /**
     * Test if this regular expression matches the given string
     * @param string The string to test against
     * @param callback The (error, matches) function to call when done, matches will be true if at least one match is found, false otherwise
     */
    test(string, callback) {
        if (typeof callback !== 'function') {
            callback = () => { };
        }
        try {
            callback(null, this.testSync(string));
        }
        catch (error) {
            callback(error);
        }
    }
    captureIndicesForMatch(string, match) {
        if (match != null) {
            const { captureIndices } = match;
            let capture;
            string = this.scanner.convertToString(string);
            for (let i = 0; i < captureIndices.length; i++) {
                capture = captureIndices[i];
                capture.match = string.slice(capture.start, capture.end);
            }
            return captureIndices;
        }
        else {
            return null;
        }
    }
}
exports.default = OnigRegExp;
//# sourceMappingURL=OnigRegExp.js.map

/***/ }),

/***/ "../node_modules/onigasm/lib/OnigScanner.js":
/*!**************************************************!*\
  !*** ../node_modules/onigasm/lib/OnigScanner.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LRUCache = __webpack_require__(/*! lru-cache */ "../node_modules/lru-cache/index.js");
// ugly code end
const onigasmH_1 = __webpack_require__(/*! ./onigasmH */ "../node_modules/onigasm/lib/onigasmH.js");
const OnigString_1 = __webpack_require__(/*! ./OnigString */ "../node_modules/onigasm/lib/OnigString.js");
const cache = new LRUCache({
    dispose: (scanner, info) => {
        const status = onigasmH_1.onigasmH.ccall('disposeCompiledPatterns', 'number', ['array', 'number'], [info.regexTPtrs, scanner.patterns.length]);
        if (status !== 0) {
            const errString = onigasmH_1.onigasmH.ccall('getLastError', 'string');
            throw new Error(errString);
        }
    },
    max: 1000,
});
class OnigScanner {
    /**
     * Create a new scanner with the given patterns
     * @param patterns  An array of string patterns
     */
    constructor(patterns) {
        if (onigasmH_1.onigasmH === null) {
            throw new Error(`Onigasm has not been initialized, call loadWASM from 'onigasm' exports before using any other API`);
        }
        for (let i = 0; i < patterns.length; i++) {
            const pattern = patterns[i];
            if (typeof pattern !== 'string') {
                throw new TypeError(`First parameter to OnigScanner constructor must be array of (pattern) strings`);
            }
        }
        this.sources = patterns.slice();
    }
    get patterns() {
        return this.sources.slice();
    }
    /**
     * Find the next match from a given position
     * @param string The string to search
     * @param startPosition The optional position to start at, defaults to 0
     * @param callback The (error, match) function to call when done, match will null when there is no match
     */
    findNextMatch(string, startPosition, callback) {
        if (startPosition == null) {
            startPosition = 0;
        }
        if (typeof startPosition === 'function') {
            callback = startPosition;
            startPosition = 0;
        }
        try {
            const match = this.findNextMatchSync(string, startPosition);
            callback(null, match);
        }
        catch (error) {
            callback(error);
        }
    }
    /**
     * Find the next match from a given position
     * @param string The string to search
     * @param startPosition The optional position to start at, defaults to 0
     */
    findNextMatchSync(string, startPosition) {
        if (startPosition == null) {
            startPosition = 0;
        }
        startPosition = this.convertToNumber(startPosition);
        let onigNativeInfo = cache.get(this);
        let status = 0;
        if (!onigNativeInfo) {
            const regexTAddrRecieverPtr = onigasmH_1.onigasmH._malloc(4);
            const regexTPtrs = [];
            for (let i = 0; i < this.sources.length; i++) {
                const pattern = this.sources[i];
                status = onigasmH_1.onigasmH.ccall('compilePattern', 'number', ['string', 'number'], [pattern, regexTAddrRecieverPtr]);
                if (status !== 0) {
                    const errString = onigasmH_1.onigasmH.ccall('getLastError', 'string');
                    throw new Error(errString);
                }
                const regexTAddress = new Uint32Array(onigasmH_1.onigasmH.buffer, regexTAddrRecieverPtr, 1)[0];
                regexTPtrs.push(regexTAddress);
            }
            onigNativeInfo = {
                regexTPtrs: new Uint8Array(Uint32Array.from(regexTPtrs).buffer),
            };
            onigasmH_1.onigasmH._free(regexTAddrRecieverPtr);
            cache.set(this, onigNativeInfo);
        }
        const resultInfoReceiverPtr = onigasmH_1.onigasmH._malloc(8);
        const onigString = string instanceof OnigString_1.default ? string : new OnigString_1.default(this.convertToString(string));
        const strPtr = onigasmH_1.onigasmH._malloc(onigString.utf8Bytes.length);
        onigasmH_1.onigasmH.HEAPU8.set(onigString.utf8Bytes, strPtr);
        status = onigasmH_1.onigasmH.ccall('findBestMatch', 'number', ['array', 'number', 'number', 'number', 'number', 'number'], [
            // regex_t **patterns
            onigNativeInfo.regexTPtrs,
            // int patternCount
            this.sources.length,
            // UChar *utf8String
            strPtr,
            // int strLen
            onigString.utf8Bytes.length - 1,
            // int startOffset
            onigString.convertUtf16OffsetToUtf8(startPosition),
            // int *resultInfo
            resultInfoReceiverPtr,
        ]);
        if (status !== 0) {
            const errString = onigasmH_1.onigasmH.ccall('getLastError', 'string');
            throw new Error(errString);
        }
        const [
        // The index of pattern which matched the string at least offset from 0 (start)
        bestPatternIdx, 
        // Begin address of capture info encoded as pairs
        // like [start, end, start, end, start, end, ...]
        //  - first start-end pair is entire match (index 0 and 1)
        //  - subsequent pairs are capture groups (2, 3 = first capture group, 4, 5 = second capture group and so on)
        encodedResultBeginAddress, 
        // Length of the [start, end, ...] sequence so we know how much memory to read (will always be 0 or multiple of 2)
        encodedResultLength,] = new Uint32Array(onigasmH_1.onigasmH.buffer, resultInfoReceiverPtr, 3);
        onigasmH_1.onigasmH._free(strPtr);
        onigasmH_1.onigasmH._free(resultInfoReceiverPtr);
        if (encodedResultLength > 0) {
            const encodedResult = new Uint32Array(onigasmH_1.onigasmH.buffer, encodedResultBeginAddress, encodedResultLength);
            const captureIndices = [];
            let i = 0;
            let captureIdx = 0;
            while (i < encodedResultLength) {
                const index = captureIdx++;
                let start = encodedResult[i++];
                let end = encodedResult[i++];
                if (onigString.hasMultiByteCharacters) {
                    start = onigString.convertUtf8OffsetToUtf16(start);
                    end = onigString.convertUtf8OffsetToUtf16(end);
                }
                captureIndices.push({
                    end,
                    index,
                    length: end - start,
                    start,
                });
            }
            onigasmH_1.onigasmH._free(encodedResultBeginAddress);
            return {
                captureIndices,
                index: bestPatternIdx,
                scanner: this,
            };
        }
        return null;
    }
    convertToString(value) {
        if (value === undefined) {
            return 'undefined';
        }
        if (value === null) {
            return 'null';
        }
        if (value instanceof OnigString_1.default) {
            return value.content;
        }
        return value.toString();
    }
    convertToNumber(value) {
        value = parseInt(value, 10);
        if (!isFinite(value)) {
            value = 0;
        }
        value = Math.max(value, 0);
        return value;
    }
}
exports.OnigScanner = OnigScanner;
exports.default = OnigScanner;
//# sourceMappingURL=OnigScanner.js.map

/***/ }),

/***/ "../node_modules/onigasm/lib/OnigString.js":
/*!*************************************************!*\
  !*** ../node_modules/onigasm/lib/OnigString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class OnigString {
    constructor(content) {
        this.substring = (start, end) => {
            return this.source.substring(start, end);
        };
        this.toString = (start, end) => {
            return this.source;
        };
        if (typeof content !== 'string') {
            throw new TypeError('Argument must be a string');
        }
        this.source = content;
        this._utf8Bytes = null;
        this._utf8Indexes = null;
    }
    get utf8Bytes() {
        if (!this._utf8Bytes) {
            this.encode();
        }
        return this._utf8Bytes;
    }
    /**
     * Returns `null` if all utf8 offsets match utf-16 offset (content has no multi byte characters)
     */
    get utf8Indexes() {
        if (!this._utf8Bytes) {
            this.encode();
        }
        return this._utf8Indexes;
    }
    get content() {
        return this.source;
    }
    get length() {
        return this.source.length;
    }
    get hasMultiByteCharacters() {
        return this.utf8Indexes !== null;
    }
    convertUtf8OffsetToUtf16(utf8Offset) {
        if (utf8Offset < 0) {
            return 0;
        }
        const utf8Array = this._utf8Bytes;
        if (utf8Offset >= utf8Array.length - 1) {
            return this.source.length;
        }
        const utf8OffsetMap = this.utf8Indexes;
        if (utf8OffsetMap && utf8Offset >= this._mappingTableStartOffset) {
            return findFirstInSorted(utf8OffsetMap, utf8Offset - this._mappingTableStartOffset) + this._mappingTableStartOffset;
        }
        return utf8Offset;
    }
    convertUtf16OffsetToUtf8(utf16Offset) {
        if (utf16Offset < 0) {
            return 0;
        }
        const utf8Array = this._utf8Bytes;
        if (utf16Offset >= this.source.length) {
            return utf8Array.length - 1;
        }
        const utf8OffsetMap = this.utf8Indexes;
        if (utf8OffsetMap && utf16Offset >= this._mappingTableStartOffset) {
            return utf8OffsetMap[utf16Offset - this._mappingTableStartOffset] + this._mappingTableStartOffset;
        }
        return utf16Offset;
    }
    encode() {
        const str = this.source;
        const n = str.length;
        let utf16OffsetToUtf8;
        let utf8Offset = 0;
        let mappingTableStartOffset = 0;
        function createOffsetTable(startOffset) {
            const maxUtf8Len = (n - startOffset) * 3;
            if (maxUtf8Len <= 0xff) {
                utf16OffsetToUtf8 = new Uint8Array(n - startOffset);
            }
            else if (maxUtf8Len <= 0xffff) {
                utf16OffsetToUtf8 = new Uint16Array(n - startOffset);
            }
            else {
                utf16OffsetToUtf8 = new Uint32Array(n - startOffset);
            }
            mappingTableStartOffset = startOffset;
            utf16OffsetToUtf8[utf8Offset++] = 0;
        }
        const u8view = new Uint8Array((n * 3) /* alloc max now, trim later*/ + 1 /** null termination character */);
        let ptrHead = 0;
        let i = 0;
        // for some reason, v8 is faster with str.length than using a variable (might be illusion)
        while (i < str.length) {
            let codepoint;
            const c = str.charCodeAt(i);
            if (utf16OffsetToUtf8) {
                utf16OffsetToUtf8[utf8Offset++] = ptrHead - mappingTableStartOffset;
            }
            if (c < 0xD800 || c > 0xDFFF) {
                codepoint = c;
            }
            else if (c >= 0xDC00) {
                codepoint = 0xFFFD;
            }
            else {
                if (i === n - 1) {
                    codepoint = 0xFFFD;
                }
                else {
                    const d = str.charCodeAt(i + 1);
                    if (0xDC00 <= d && d <= 0xDFFF) {
                        if (!utf16OffsetToUtf8) {
                            createOffsetTable(i);
                        }
                        const a = c & 0x3FF;
                        const b = d & 0x3FF;
                        codepoint = 0x10000 + (a << 10) + b;
                        i += 1;
                        utf16OffsetToUtf8[utf8Offset++] = ptrHead - mappingTableStartOffset;
                    }
                    else {
                        codepoint = 0xFFFD;
                    }
                }
            }
            let bytesRequiredToEncode;
            let offset;
            if (codepoint <= 0x7F) {
                bytesRequiredToEncode = 1;
                offset = 0;
            }
            else if (codepoint <= 0x07FF) {
                bytesRequiredToEncode = 2;
                offset = 0xC0;
            }
            else if (codepoint <= 0xFFFF) {
                bytesRequiredToEncode = 3;
                offset = 0xE0;
            }
            else {
                bytesRequiredToEncode = 4;
                offset = 0xF0;
            }
            if (bytesRequiredToEncode === 1) {
                u8view[ptrHead++] = codepoint;
            }
            else {
                if (!utf16OffsetToUtf8) {
                    createOffsetTable(ptrHead);
                }
                u8view[ptrHead++] = (codepoint >> (6 * (--bytesRequiredToEncode))) + offset;
                while (bytesRequiredToEncode > 0) {
                    const temp = codepoint >> (6 * (bytesRequiredToEncode - 1));
                    u8view[ptrHead++] = (0x80 | (temp & 0x3F));
                    bytesRequiredToEncode -= 1;
                }
            }
            i += 1;
        }
        const utf8 = u8view.slice(0, ptrHead + 1);
        utf8[ptrHead] = 0x00;
        this._utf8Bytes = utf8;
        if (utf16OffsetToUtf8) { // set if UTF-16 surrogate chars or multi-byte characters found
            this._utf8Indexes = utf16OffsetToUtf8;
            this._mappingTableStartOffset = mappingTableStartOffset;
        }
    }
}
function findFirstInSorted(array, i) {
    let low = 0;
    let high = array.length;
    if (high === 0) {
        return 0; // no children
    }
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] >= i) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    // low is on the index of the first value >= i or array.length. Decrement low until we find array[low] <= i
    while (low > 0 && (low >= array.length || array[low] > i)) {
        low--;
    }
    // check whether we are on the second index of a utf-16 surrogate char. If so, go to the first index.
    if (low > 0 && array[low] === array[low - 1]) {
        low--;
    }
    return low;
}
exports.default = OnigString;
//# sourceMappingURL=OnigString.js.map

/***/ }),

/***/ "../node_modules/onigasm/lib/index.js":
/*!********************************************!*\
  !*** ../node_modules/onigasm/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const onigasmH_1 = __webpack_require__(/*! ./onigasmH */ "../node_modules/onigasm/lib/onigasmH.js");
exports.loadWASM = onigasmH_1.loadWASM;
const OnigRegExp_1 = __webpack_require__(/*! ./OnigRegExp */ "../node_modules/onigasm/lib/OnigRegExp.js");
exports.OnigRegExp = OnigRegExp_1.default;
const OnigScanner_1 = __webpack_require__(/*! ./OnigScanner */ "../node_modules/onigasm/lib/OnigScanner.js");
exports.OnigScanner = OnigScanner_1.default;
const OnigString_1 = __webpack_require__(/*! ./OnigString */ "../node_modules/onigasm/lib/OnigString.js");
exports.OnigString = OnigString_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/onigasm/lib/onigasm.js":
/*!**********************************************!*\
  !*** ../node_modules/onigasm/lib/onigasm.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var Onigasm = function(Onigasm) {
  Onigasm = Onigasm || {};

var Module=typeof Onigasm!=="undefined"?Onigasm:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}Module["arguments"]=[];Module["thisProgram"]="./this.program";Module["quit"]=(function(status,toThrow){throw toThrow});Module["preRun"]=[];Module["postRun"]=[];var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;if(Module["ENVIRONMENT"]){if(Module["ENVIRONMENT"]==="WEB"){ENVIRONMENT_IS_WEB=true}else if(Module["ENVIRONMENT"]==="WORKER"){ENVIRONMENT_IS_WORKER=true}else if(Module["ENVIRONMENT"]==="NODE"){ENVIRONMENT_IS_NODE=true}else if(Module["ENVIRONMENT"]==="SHELL"){ENVIRONMENT_IS_SHELL=true}else{throw new Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.")}}else{ENVIRONMENT_IS_WEB=typeof window==="object";ENVIRONMENT_IS_WORKER=typeof importScripts==="function";ENVIRONMENT_IS_NODE=typeof process==="object"&&"function"==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER}if(ENVIRONMENT_IS_NODE){var nodeFS;var nodePath;Module["read"]=function shell_read(filename,binary){var ret;if(!nodeFS)nodeFS={};if(!nodePath)nodePath={};filename=nodePath["normalize"](filename);ret=nodeFS["readFileSync"](filename);return binary?ret:ret.toString()};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}Module["arguments"]=process["argv"].slice(2);process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));process["on"]("unhandledRejection",(function(reason,p){process["exit"](1)}));Module["inspect"]=(function(){return"[Emscripten Module object]"})}else if(ENVIRONMENT_IS_SHELL){if(typeof read!="undefined"){Module["read"]=function shell_read(f){return read(f)}}Module["readBinary"]=function readBinary(f){var data;if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){Module["arguments"]=scriptArgs}else if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof quit==="function"){Module["quit"]=(function(status,toThrow){quit(status)})}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){Module["read"]=function shell_read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){Module["readBinary"]=function readBinary(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}Module["readAsync"]=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)};if(typeof arguments!="undefined"){Module["arguments"]=arguments}Module["setWindowTitle"]=(function(title){document.title=title})}Module["print"]=typeof console!=="undefined"?console.log:typeof print!=="undefined"?print:null;Module["printErr"]=typeof printErr!=="undefined"?printErr:typeof console!=="undefined"&&console.warn||Module["print"];Module.print=Module["print"];Module.printErr=Module["printErr"];for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=undefined;var STACK_ALIGN=16;function staticAlloc(size){assert(!staticSealed);var ret=STATICTOP;STATICTOP=STATICTOP+size+15&-16;return ret}function dynamicAlloc(size){assert(DYNAMICTOP_PTR);var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=ret+size+15&-16;HEAP32[DYNAMICTOP_PTR>>2]=end;if(end>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){HEAP32[DYNAMICTOP_PTR>>2]=ret;return 0}}return ret}function alignMemory(size,factor){if(!factor)factor=STACK_ALIGN;var ret=size=Math.ceil(size/factor)*factor;return ret}function getNativeTypeSize(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return 4}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0);return bits/8}else{return 0}}}}function warnOnce(text){if(!warnOnce.shown)warnOnce.shown={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;Module.printErr(text)}}var functionPointers=new Array(0);var funcWrappers={};function dynCall(sig,ptr,args){if(args&&args.length){return Module["dynCall_"+sig].apply(null,[ptr].concat(args))}else{return Module["dynCall_"+sig].call(null,ptr)}}var GLOBAL_BASE=1024;var ABORT=0;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];assert(func,"Cannot call unknown function "+ident+", make sure it is exported");return func}var JSfuncs={"stackSave":(function(){stackSave()}),"stackRestore":(function(){stackRestore()}),"arrayToC":(function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}),"stringToC":(function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret})};var toC={"string":JSfuncs["stringToC"],"array":JSfuncs["arrayToC"]};function ccall(ident,returnType,argTypes,args,opts){var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);if(returnType==="string")ret=Pointer_stringify(ret);if(stack!==0){stackRestore(stack)}return ret}function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=1?tempDouble>0?(Math_min(+Math_floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math_ceil((tempDouble- +(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}var ALLOC_STATIC=2;var ALLOC_NONE=4;function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return UTF8ToString(ptr)}var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx){var endPtr=idx;while(u8Array[endPtr])++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}}function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function demangle(func){var __cxa_demangle_func=Module["___cxa_demangle"]||Module["__cxa_demangle"];assert(__cxa_demangle_func);try{var s=func.substr(1);var len=lengthBytesUTF8(s)+1;var buf=_malloc(len);stringToUTF8(s,buf,len);var status=_malloc(4);var ret=__cxa_demangle_func(buf,0,0,status);if(HEAP32[status>>2]===0&&ret){return Pointer_stringify(ret)}}catch(e){}finally{if(buf)_free(buf);if(status)_free(status);if(ret)_free(ret)}return func}function demangleAll(text){var regex=/__Z[\w\d_]+/g;return text.replace(regex,(function(x){var y=demangle(x);return x===y?x:x+" ["+y+"]"}))}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}var WASM_PAGE_SIZE=65536;var ASMJS_PAGE_SIZE=16777216;var MIN_TOTAL_MEMORY=16777216;function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple}return x}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBuffer(buf){Module["buffer"]=buffer=buf}function updateGlobalBufferViews(){Module["HEAP8"]=HEAP8=new Int8Array(buffer);Module["HEAP16"]=HEAP16=new Int16Array(buffer);Module["HEAP32"]=HEAP32=new Int32Array(buffer);Module["HEAPU8"]=HEAPU8=new Uint8Array(buffer);Module["HEAPU16"]=HEAPU16=new Uint16Array(buffer);Module["HEAPU32"]=HEAPU32=new Uint32Array(buffer);Module["HEAPF32"]=HEAPF32=new Float32Array(buffer);Module["HEAPF64"]=HEAPF64=new Float64Array(buffer)}var STATIC_BASE,STATICTOP,staticSealed;var STACK_BASE,STACKTOP,STACK_MAX;var DYNAMIC_BASE,DYNAMICTOP_PTR;STATIC_BASE=STATICTOP=STACK_BASE=STACKTOP=STACK_MAX=DYNAMIC_BASE=DYNAMICTOP_PTR=0;staticSealed=false;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}if(!Module["reallocBuffer"])Module["reallocBuffer"]=(function(size){var ret;try{if(ArrayBuffer.transfer){ret=ArrayBuffer.transfer(buffer,size)}else{var oldHEAP8=HEAP8;ret=new ArrayBuffer(size);var temp=new Int8Array(ret);temp.set(oldHEAP8)}}catch(e){return false}var success=_emscripten_replace_memory(ret);if(!success)return false;return ret});function enlargeMemory(){var PAGE_MULTIPLE=Module["usingWasm"]?WASM_PAGE_SIZE:ASMJS_PAGE_SIZE;var LIMIT=2147483648-PAGE_MULTIPLE;if(HEAP32[DYNAMICTOP_PTR>>2]>LIMIT){return false}var OLD_TOTAL_MEMORY=TOTAL_MEMORY;TOTAL_MEMORY=Math.max(TOTAL_MEMORY,MIN_TOTAL_MEMORY);while(TOTAL_MEMORY<HEAP32[DYNAMICTOP_PTR>>2]){if(TOTAL_MEMORY<=536870912){TOTAL_MEMORY=alignUp(2*TOTAL_MEMORY,PAGE_MULTIPLE)}else{TOTAL_MEMORY=Math.min(alignUp((3*TOTAL_MEMORY+2147483648)/4,PAGE_MULTIPLE),LIMIT)}}var replacement=Module["reallocBuffer"](TOTAL_MEMORY);if(!replacement||replacement.byteLength!=TOTAL_MEMORY){TOTAL_MEMORY=OLD_TOTAL_MEMORY;return false}updateGlobalBuffer(replacement);updateGlobalBufferViews();return true}var byteLength;try{byteLength=Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get);byteLength(new ArrayBuffer(4))}catch(e){byteLength=(function(buffer){return buffer.byteLength})}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||157286400;if(TOTAL_MEMORY<TOTAL_STACK)Module.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+TOTAL_MEMORY+"! (TOTAL_STACK="+TOTAL_STACK+")");if(Module["buffer"]){buffer=Module["buffer"]}else{if(typeof WebAssembly==="object"&&typeof WebAssembly.Memory==="function"){Module["wasmMemory"]=new WebAssembly.Memory({"initial":TOTAL_MEMORY/WASM_PAGE_SIZE});buffer=Module["wasmMemory"].buffer}else{buffer=new ArrayBuffer(TOTAL_MEMORY)}Module["buffer"]=buffer}updateGlobalBufferViews();function getTotalMemory(){return TOTAL_MEMORY}HEAP32[0]=1668509029;HEAP16[1]=25459;if(HEAPU8[2]!==115||HEAPU8[3]!==99)throw"Runtime error: expected the system to be little-endian!";function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var Math_abs=Math.abs;var Math_cos=Math.cos;var Math_sin=Math.sin;var Math_tan=Math.tan;var Math_acos=Math.acos;var Math_asin=Math.asin;var Math_atan=Math.atan;var Math_atan2=Math.atan2;var Math_exp=Math.exp;var Math_log=Math.log;var Math_sqrt=Math.sqrt;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_pow=Math.pow;var Math_imul=Math.imul;var Math_fround=Math.fround;var Math_round=Math.round;var Math_min=Math.min;var Math_max=Math.max;var Math_clz32=Math.clz32;var Math_trunc=Math.trunc;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return String.prototype.startsWith?filename.startsWith(dataURIPrefix):filename.indexOf(dataURIPrefix)===0}function integrateWasmJS(){var wasmTextFile="onigasm.wast";var wasmBinaryFile="onigasm.wasm";var asmjsCodeFile="onigasm.temp.asm.js";if(typeof Module["locateFile"]==="function"){if(!isDataURI(wasmTextFile)){wasmTextFile=Module["locateFile"](wasmTextFile)}if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=Module["locateFile"](wasmBinaryFile)}if(!isDataURI(asmjsCodeFile)){asmjsCodeFile=Module["locateFile"](asmjsCodeFile)}}var wasmPageSize=64*1024;var info={"global":null,"env":null,"asm2wasm":{"f64-rem":(function(x,y){return x%y}),"debugger":(function(){debugger})},"parent":Module};var exports=null;function mergeMemory(newBuffer){var oldBuffer=Module["buffer"];if(newBuffer.byteLength<oldBuffer.byteLength){Module["printErr"]("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here")}var oldView=new Int8Array(oldBuffer);var newView=new Int8Array(newBuffer);newView.set(oldView);updateGlobalBuffer(newBuffer);updateGlobalBufferViews()}function fixImports(imports){return imports}function getBinary(){try{if(Module["wasmBinary"]){return new Uint8Array(Module["wasmBinary"])}if(Module["readBinary"]){return Module["readBinary"](wasmBinaryFile)}else{throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)"}}catch(err){abort(err)}}function getBinaryPromise(){if(!Module["wasmBinary"]&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then((function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()})).catch((function(){return getBinary()}))}return new Promise((function(resolve,reject){resolve(getBinary())}))}function doNativeWasm(global,env,providedBuffer){if(typeof WebAssembly!=="object"){Module["printErr"]("no native wasm support detected");return false}if(!(Module["wasmMemory"]instanceof WebAssembly.Memory)){Module["printErr"]("no native wasm Memory in use");return false}env["memory"]=Module["wasmMemory"];info["global"]={"NaN":NaN,"Infinity":Infinity};info["global.Math"]=Math;info["env"]=env;function receiveInstance(instance,module){exports=instance.exports;if(exports.memory)mergeMemory(exports.memory);Module["asm"]=exports;Module["usingWasm"]=true;removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");if(Module["instantiateWasm"]){try{return Module["instantiateWasm"](info,receiveInstance)}catch(e){Module["printErr"]("Module.instantiateWasm callback failed with error: "+e);return false}}function receiveInstantiatedSource(output){receiveInstance(output["instance"],output["module"])}function instantiateArrayBuffer(receiver){getBinaryPromise().then((function(binary){return WebAssembly.instantiate(binary,info)})).then(receiver).catch((function(reason){Module["printErr"]("failed to asynchronously prepare wasm: "+reason);abort(reason)}))}if(!Module["wasmBinary"]&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch==="function"){WebAssembly.instantiateStreaming(fetch(wasmBinaryFile,{credentials:"same-origin"}),info).then(receiveInstantiatedSource).catch((function(reason){Module["printErr"]("wasm streaming compile failed: "+reason);Module["printErr"]("falling back to ArrayBuffer instantiation");instantiateArrayBuffer(receiveInstantiatedSource)}))}else{instantiateArrayBuffer(receiveInstantiatedSource)}return{}}Module["asmPreload"]=Module["asm"];var asmjsReallocBuffer=Module["reallocBuffer"];var wasmReallocBuffer=(function(size){var PAGE_MULTIPLE=Module["usingWasm"]?WASM_PAGE_SIZE:ASMJS_PAGE_SIZE;size=alignUp(size,PAGE_MULTIPLE);var old=Module["buffer"];var oldSize=old.byteLength;if(Module["usingWasm"]){try{var result=Module["wasmMemory"].grow((size-oldSize)/wasmPageSize);if(result!==(-1|0)){return Module["buffer"]=Module["wasmMemory"].buffer}else{return null}}catch(e){return null}}});Module["reallocBuffer"]=(function(size){if(finalMethod==="asmjs"){return asmjsReallocBuffer(size)}else{return wasmReallocBuffer(size)}});var finalMethod="";Module["asm"]=(function(global,env,providedBuffer){env=fixImports(env);if(!env["table"]){var TABLE_SIZE=Module["wasmTableSize"];if(TABLE_SIZE===undefined)TABLE_SIZE=1024;var MAX_TABLE_SIZE=Module["wasmMaxTableSize"];if(typeof WebAssembly==="object"&&typeof WebAssembly.Table==="function"){if(MAX_TABLE_SIZE!==undefined){env["table"]=new WebAssembly.Table({"initial":TABLE_SIZE,"maximum":MAX_TABLE_SIZE,"element":"anyfunc"})}else{env["table"]=new WebAssembly.Table({"initial":TABLE_SIZE,element:"anyfunc"})}}else{env["table"]=new Array(TABLE_SIZE)}Module["wasmTable"]=env["table"]}if(!env["memoryBase"]){env["memoryBase"]=Module["STATIC_BASE"]}if(!env["tableBase"]){env["tableBase"]=0}var exports;exports=doNativeWasm(global,env,providedBuffer);if(!exports)abort("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return exports});}integrateWasmJS();STATIC_BASE=GLOBAL_BASE;STATICTOP=STATIC_BASE+255296;__ATINIT__.push();var STATIC_BUMP=255296;Module["STATIC_BASE"]=STATIC_BASE;Module["STATIC_BUMP"]=STATIC_BUMP;var tempDoublePtr=STATICTOP;STATICTOP+=16;function __ZSt18uncaught_exceptionv(){return!!__ZSt18uncaught_exceptionv.uncaught_exception}var EXCEPTIONS={last:0,caught:[],infos:{},deAdjust:(function(adjusted){if(!adjusted||EXCEPTIONS.infos[adjusted])return adjusted;for(var ptr in EXCEPTIONS.infos){var info=EXCEPTIONS.infos[ptr];if(info.adjusted===adjusted){return ptr}}return adjusted}),addRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount++}),decRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];assert(info.refcount>0);info.refcount--;if(info.refcount===0&&!info.rethrown){if(info.destructor){Module["dynCall_vi"](info.destructor,ptr)}delete EXCEPTIONS.infos[ptr];___cxa_free_exception(ptr)}}),clearRef:(function(ptr){if(!ptr)return;var info=EXCEPTIONS.infos[ptr];info.refcount=0})};function ___cxa_begin_catch(ptr){var info=EXCEPTIONS.infos[ptr];if(info&&!info.caught){info.caught=true;__ZSt18uncaught_exceptionv.uncaught_exception--}if(info)info.rethrown=false;EXCEPTIONS.caught.push(ptr);EXCEPTIONS.addRef(EXCEPTIONS.deAdjust(ptr));return ptr}function ___resumeException(ptr){if(!EXCEPTIONS.last){EXCEPTIONS.last=ptr}throw ptr+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."}function ___cxa_find_matching_catch(){var thrown=EXCEPTIONS.last;if(!thrown){return(setTempRet0(0),0)|0}var info=EXCEPTIONS.infos[thrown];var throwntype=info.type;if(!throwntype){return(setTempRet0(0),thrown)|0}var typeArray=Array.prototype.slice.call(arguments);var pointer=Module["___cxa_is_pointer_type"](throwntype);if(!___cxa_find_matching_catch.buffer)___cxa_find_matching_catch.buffer=_malloc(4);HEAP32[___cxa_find_matching_catch.buffer>>2]=thrown;thrown=___cxa_find_matching_catch.buffer;for(var i=0;i<typeArray.length;i++){if(typeArray[i]&&Module["___cxa_can_catch"](typeArray[i],throwntype,thrown)){thrown=HEAP32[thrown>>2];info.adjusted=thrown;return(setTempRet0(typeArray[i]),thrown)|0}}thrown=HEAP32[thrown>>2];return(setTempRet0(throwntype),thrown)|0}function ___gxx_personality_v0(){}var SYSCALLS={varargs:0,get:(function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret}),getStr:(function(){var ret=Pointer_stringify(SYSCALLS.get());return ret}),get64:(function(){var low=SYSCALLS.get(),high=SYSCALLS.get();if(low>=0)assert(high===0);else assert(high===-1);return low}),getZero:(function(){assert(SYSCALLS.get()===0)})};function ___syscall140(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),offset_high=SYSCALLS.get(),offset_low=SYSCALLS.get(),result=SYSCALLS.get(),whence=SYSCALLS.get();var offset=offset_low;FS.llseek(stream,offset,whence);HEAP32[result>>2]=stream.position;if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function flush_NO_FILESYSTEM(){var fflush=Module["_fflush"];if(fflush)fflush(0);var printChar=___syscall146.printChar;if(!printChar)return;var buffers=___syscall146.buffers;if(buffers[1].length)printChar(1,10);if(buffers[2].length)printChar(2,10)}function ___syscall146(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.get(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();var ret=0;if(!___syscall146.buffers){___syscall146.buffers=[null,[],[]];___syscall146.printChar=(function(stream,curr){var buffer=___syscall146.buffers[stream];assert(buffer);if(curr===0||curr===10){(stream===1?Module["print"]:Module["printErr"])(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}})}for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){___syscall146.printChar(stream,HEAPU8[ptr+j])}ret+=len}return ret}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall6(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD();FS.close(stream);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function _abort(){Module["abort"]()}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}var PTHREAD_SPECIFIC={};function _pthread_getspecific(key){return PTHREAD_SPECIFIC[key]||0}var PTHREAD_SPECIFIC_NEXT_KEY=1;var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _pthread_key_create(key,destructor){if(key==0){return ERRNO_CODES.EINVAL}HEAP32[key>>2]=PTHREAD_SPECIFIC_NEXT_KEY;PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY]=0;PTHREAD_SPECIFIC_NEXT_KEY++;return 0}function _pthread_once(ptr,func){if(!_pthread_once.seen)_pthread_once.seen={};if(ptr in _pthread_once.seen)return;Module["dynCall_v"](func);_pthread_once.seen[ptr]=1}function _pthread_setspecific(key,value){if(!(key in PTHREAD_SPECIFIC)){return ERRNO_CODES.EINVAL}PTHREAD_SPECIFIC[key]=value;return 0}function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}DYNAMICTOP_PTR=staticAlloc(4);STACK_BASE=STACKTOP=alignMemory(STATICTOP);STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=alignMemory(STACK_MAX);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;staticSealed=true;var ASSERTIONS=false;Module["wasmTableSize"]=90;Module["wasmMaxTableSize"]=90;function invoke_i(index){try{return Module["dynCall_i"](index)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_ii(index,a1){try{return Module["dynCall_ii"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_iii(index,a1,a2){try{return Module["dynCall_iii"](index,a1,a2)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_iiii(index,a1,a2,a3){try{return Module["dynCall_iiii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_iiiii(index,a1,a2,a3,a4){try{return Module["dynCall_iiiii"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_v(index){try{Module["dynCall_v"](index)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_vi(index,a1){try{Module["dynCall_vi"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiii(index,a1,a2,a3,a4){try{Module["dynCall_viiii"](index,a1,a2,a3,a4)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiii(index,a1,a2,a3,a4,a5){try{Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6){try{Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;Module["setThrew"](1,0)}}Module.asmGlobalArg={};Module.asmLibraryArg={"abort":abort,"assert":assert,"enlargeMemory":enlargeMemory,"getTotalMemory":getTotalMemory,"abortOnCannotGrowMemory":abortOnCannotGrowMemory,"invoke_i":invoke_i,"invoke_ii":invoke_ii,"invoke_iii":invoke_iii,"invoke_iiii":invoke_iiii,"invoke_iiiii":invoke_iiiii,"invoke_v":invoke_v,"invoke_vi":invoke_vi,"invoke_viiii":invoke_viiii,"invoke_viiiii":invoke_viiiii,"invoke_viiiiii":invoke_viiiiii,"__ZSt18uncaught_exceptionv":__ZSt18uncaught_exceptionv,"___cxa_begin_catch":___cxa_begin_catch,"___cxa_find_matching_catch":___cxa_find_matching_catch,"___gxx_personality_v0":___gxx_personality_v0,"___resumeException":___resumeException,"___setErrNo":___setErrNo,"___syscall140":___syscall140,"___syscall146":___syscall146,"___syscall6":___syscall6,"_abort":_abort,"_emscripten_memcpy_big":_emscripten_memcpy_big,"_pthread_getspecific":_pthread_getspecific,"_pthread_key_create":_pthread_key_create,"_pthread_once":_pthread_once,"_pthread_setspecific":_pthread_setspecific,"flush_NO_FILESYSTEM":flush_NO_FILESYSTEM,"DYNAMICTOP_PTR":DYNAMICTOP_PTR,"tempDoublePtr":tempDoublePtr,"ABORT":ABORT,"STACKTOP":STACKTOP,"STACK_MAX":STACK_MAX};var asm=Module["asm"](Module.asmGlobalArg,Module.asmLibraryArg,buffer);Module["asm"]=asm;var ___cxa_demangle=Module["___cxa_demangle"]=(function(){return Module["asm"]["___cxa_demangle"].apply(null,arguments)});var _compilePattern=Module["_compilePattern"]=(function(){return Module["asm"]["_compilePattern"].apply(null,arguments)});var _disposeCompiledPatterns=Module["_disposeCompiledPatterns"]=(function(){return Module["asm"]["_disposeCompiledPatterns"].apply(null,arguments)});var _emscripten_replace_memory=Module["_emscripten_replace_memory"]=(function(){return Module["asm"]["_emscripten_replace_memory"].apply(null,arguments)});var _findBestMatch=Module["_findBestMatch"]=(function(){return Module["asm"]["_findBestMatch"].apply(null,arguments)});var _free=Module["_free"]=(function(){return Module["asm"]["_free"].apply(null,arguments)});var _getLastError=Module["_getLastError"]=(function(){return Module["asm"]["_getLastError"].apply(null,arguments)});var _llvm_bswap_i32=Module["_llvm_bswap_i32"]=(function(){return Module["asm"]["_llvm_bswap_i32"].apply(null,arguments)});var _malloc=Module["_malloc"]=(function(){return Module["asm"]["_malloc"].apply(null,arguments)});var _memcpy=Module["_memcpy"]=(function(){return Module["asm"]["_memcpy"].apply(null,arguments)});var _memmove=Module["_memmove"]=(function(){return Module["asm"]["_memmove"].apply(null,arguments)});var _memset=Module["_memset"]=(function(){return Module["asm"]["_memset"].apply(null,arguments)});var _sbrk=Module["_sbrk"]=(function(){return Module["asm"]["_sbrk"].apply(null,arguments)});var establishStackSpace=Module["establishStackSpace"]=(function(){return Module["asm"]["establishStackSpace"].apply(null,arguments)});var getTempRet0=Module["getTempRet0"]=(function(){return Module["asm"]["getTempRet0"].apply(null,arguments)});var runPostSets=Module["runPostSets"]=(function(){return Module["asm"]["runPostSets"].apply(null,arguments)});var setTempRet0=Module["setTempRet0"]=(function(){return Module["asm"]["setTempRet0"].apply(null,arguments)});var setThrew=Module["setThrew"]=(function(){return Module["asm"]["setThrew"].apply(null,arguments)});var stackAlloc=Module["stackAlloc"]=(function(){return Module["asm"]["stackAlloc"].apply(null,arguments)});var stackRestore=Module["stackRestore"]=(function(){return Module["asm"]["stackRestore"].apply(null,arguments)});var stackSave=Module["stackSave"]=(function(){return Module["asm"]["stackSave"].apply(null,arguments)});var dynCall_i=Module["dynCall_i"]=(function(){return Module["asm"]["dynCall_i"].apply(null,arguments)});var dynCall_ii=Module["dynCall_ii"]=(function(){return Module["asm"]["dynCall_ii"].apply(null,arguments)});var dynCall_iii=Module["dynCall_iii"]=(function(){return Module["asm"]["dynCall_iii"].apply(null,arguments)});var dynCall_iiii=Module["dynCall_iiii"]=(function(){return Module["asm"]["dynCall_iiii"].apply(null,arguments)});var dynCall_iiiii=Module["dynCall_iiiii"]=(function(){return Module["asm"]["dynCall_iiiii"].apply(null,arguments)});var dynCall_v=Module["dynCall_v"]=(function(){return Module["asm"]["dynCall_v"].apply(null,arguments)});var dynCall_vi=Module["dynCall_vi"]=(function(){return Module["asm"]["dynCall_vi"].apply(null,arguments)});var dynCall_viiii=Module["dynCall_viiii"]=(function(){return Module["asm"]["dynCall_viiii"].apply(null,arguments)});var dynCall_viiiii=Module["dynCall_viiiii"]=(function(){return Module["asm"]["dynCall_viiiii"].apply(null,arguments)});var dynCall_viiiiii=Module["dynCall_viiiiii"]=(function(){return Module["asm"]["dynCall_viiiiii"].apply(null,arguments)});Module["asm"]=asm;Module["ccall"]=ccall;Module["then"]=(function(func){if(Module["calledRun"]){func(Module)}else{var old=Module["onRuntimeInitialized"];Module["onRuntimeInitialized"]=(function(){if(old)old();func(Module)})}return Module});function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};function run(args){args=args||Module["arguments"];if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]&&status===0){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["exit"](status)}Module["quit"](status,new ExitStatus(status))}Module["exit"]=exit;function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;throw"abort("+what+"). Build with -s ASSERTIONS=1 for more info."}Module["abort"]=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}Module["noExitRuntime"]=true;run()





  return Onigasm;
};
if (true)
  module.exports = Onigasm;
else {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/onigasm/lib/onigasm.wasm":
/*!************************************************!*\
  !*** ../node_modules/onigasm/lib/onigasm.wasm ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f8f821a66b20e5801e35df5ec4565b30.wasm";

/***/ }),

/***/ "../node_modules/onigasm/lib/onigasmH.js":
/*!***********************************************!*\
  !*** ../node_modules/onigasm/lib/onigasmH.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OnigasmModuleFactory = __webpack_require__(/*! ./onigasm.js */ "../node_modules/onigasm/lib/onigasm.js" /** when TS is compiled to JS, this will mean `lib/onigasm.js` (emitted by `emcc`) */);
async function initModule(bytes) {
    return new Promise((resolve, reject) => {
        OnigasmModuleFactory({
            instantiateWasm(imports, successCallback) {
                WebAssembly.instantiate(bytes, imports)
                    .then((output) => {
                    successCallback(output.instance);
                })
                    .catch((e) => {
                    throw e;
                });
                return {};
            },
        })
            .then(moduleH => {
            exports.onigasmH = moduleH;
            resolve();
        });
    });
}
let isInitialized = false;
/**
 * Mount the .wasm file that will act as library's "backend"
 * @param data Path to .wasm file or it's ArrayBuffer
 */
async function loadWASM(data) {
    if (isInitialized) {
        throw new Error(`Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized`);
    }
    if (typeof data === 'string') {
        const arrayBuffer = await (await fetch(data)).arrayBuffer();
        await initModule(arrayBuffer);
    }
    else if (data instanceof ArrayBuffer) {
        await initModule(data);
    }
    else {
        throw new TypeError(`Expected a string (URL of .wasm file) or ArrayBuffer (.wasm file itself) as first parameter`);
    }
    isInitialized = true;
}
exports.loadWASM = loadWASM;
//# sourceMappingURL=onigasmH.js.map

/***/ }),

/***/ "../node_modules/pseudomap/map.js":
/*!****************************************!*\
  !*** ../node_modules/pseudomap/map.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {if (process.env.npm_package_name === 'pseudomap' &&
    process.env.npm_lifecycle_script === 'test')
  process.env.TEST_PSEUDOMAP = 'true'

if (typeof Map === 'function' && !process.env.TEST_PSEUDOMAP) {
  module.exports = Map
} else {
  module.exports = __webpack_require__(/*! ./pseudomap */ "../node_modules/pseudomap/pseudomap.js")
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/pseudomap/pseudomap.js":
/*!**********************************************!*\
  !*** ../node_modules/pseudomap/pseudomap.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = Object.prototype.hasOwnProperty

module.exports = PseudoMap

function PseudoMap (set) {
  if (!(this instanceof PseudoMap)) // whyyyyyyy
    throw new TypeError("Constructor PseudoMap requires 'new'")

  this.clear()

  if (set) {
    if ((set instanceof PseudoMap) ||
        (typeof Map === 'function' && set instanceof Map))
      set.forEach(function (value, key) {
        this.set(key, value)
      }, this)
    else if (Array.isArray(set))
      set.forEach(function (kv) {
        this.set(kv[0], kv[1])
      }, this)
    else
      throw new TypeError('invalid argument')
  }
}

PseudoMap.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  Object.keys(this._data).forEach(function (k) {
    if (k !== 'size')
      fn.call(thisp, this._data[k].value, this._data[k].key)
  }, this)
}

PseudoMap.prototype.has = function (k) {
  return !!find(this._data, k)
}

PseudoMap.prototype.get = function (k) {
  var res = find(this._data, k)
  return res && res.value
}

PseudoMap.prototype.set = function (k, v) {
  set(this._data, k, v)
}

PseudoMap.prototype.delete = function (k) {
  var res = find(this._data, k)
  if (res) {
    delete this._data[res._index]
    this._data.size--
  }
}

PseudoMap.prototype.clear = function () {
  var data = Object.create(null)
  data.size = 0

  Object.defineProperty(this, '_data', {
    value: data,
    enumerable: false,
    configurable: true,
    writable: false
  })
}

Object.defineProperty(PseudoMap.prototype, 'size', {
  get: function () {
    return this._data.size
  },
  set: function (n) {},
  enumerable: true,
  configurable: true
})

PseudoMap.prototype.values =
PseudoMap.prototype.keys =
PseudoMap.prototype.entries = function () {
  throw new Error('iterators are not implemented in this version')
}

// Either identical, or both NaN
function same (a, b) {
  return a === b || a !== a && b !== b
}

function Entry (k, v, i) {
  this.key = k
  this.value = v
  this._index = i
}

function find (data, k) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k))
      return data[key]
  }
}

function set (data, k, v) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k)) {
      data[key].value = v
      return
    }
  }
  data.size++
  data[key] = new Entry(k, v, key)
}


/***/ }),

/***/ "../node_modules/util/node_modules/inherits/inherits_browser.js":
/*!**********************************************************************!*\
  !*** ../node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../node_modules/util/support/isBufferBrowser.js":
/*!*******************************************************!*\
  !*** ../node_modules/util/support/isBufferBrowser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../node_modules/util/util.js":
/*!************************************!*\
  !*** ../node_modules/util/util.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/vscode-textmate/release/main.js":
/*!*******************************************************!*\
  !*** ../node_modules/vscode-textmate/release/main.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname, process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
(function (factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function () {

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
var $map = {};
function $load(name, factory) {
    var mod = {
        exports: {}
    };
    var requireFunc = function (mod) {
        if ($map[mod]) {
            return $map[mod].exports;
        }
        return __webpack_require__("../node_modules/vscode-textmate/release sync recursive")(mod);
    };
    factory.call(this, requireFunc, mod, mod.exports);
    $map[name] = mod;
}
//# sourceMappingURL=_prefix.js.map
$load('./onigLibs', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var onigasmLib = null;
var onigurumaLib = null;
function getOnigasm() {
    if (!onigasmLib) {
        var onigasmModule_1 = require('onigasm');
        var fs = require('fs');
        var path = require('path');
        var wasmBin = fs.readFileSync(path.join(__dirname, '../node_modules/onigasm/lib/onigasm.wasm')).buffer;
        onigasmLib = onigasmModule_1.loadWASM(wasmBin).then(function (_) {
            return {
                createOnigScanner: function (patterns) { return new onigasmModule_1.OnigScanner(patterns); },
                createOnigString: function (s) { return new onigasmModule_1.OnigString(s); }
            };
        });
    }
    return onigasmLib;
}
exports.getOnigasm = getOnigasm;
function getOniguruma() {
    if (!onigurumaLib) {
        var getOnigModule_1 = (function () {
            var onigurumaModule = null;
            return function () {
                if (!onigurumaModule) {
                    onigurumaModule = require('oniguruma');
                }
                return onigurumaModule;
            };
        })();
        onigurumaLib = Promise.resolve({
            createOnigScanner: function (patterns) {
                var onigurumaModule = getOnigModule_1();
                return new onigurumaModule.OnigScanner(patterns);
            },
            createOnigString: function (s) {
                var onigurumaModule = getOnigModule_1();
                var string = new onigurumaModule.OnigString(s);
                string.content = s;
                return string;
            }
        });
    }
    return onigurumaLib;
}
exports.getOniguruma = getOniguruma;
//# sourceMappingURL=onigLibs.js.map
});
$load('./utils', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function clone(something) {
    return doClone(something);
}
exports.clone = clone;
function doClone(something) {
    if (Array.isArray(something)) {
        return cloneArray(something);
    }
    if (typeof something === 'object') {
        return cloneObj(something);
    }
    return something;
}
function cloneArray(arr) {
    var r = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        r[i] = doClone(arr[i]);
    }
    return r;
}
function cloneObj(obj) {
    var r = {};
    for (var key in obj) {
        r[key] = doClone(obj[key]);
    }
    return r;
}
function mergeObjects(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        for (var key in source) {
            target[key] = source[key];
        }
    });
    return target;
}
exports.mergeObjects = mergeObjects;
function basename(path) {
    var idx = ~path.lastIndexOf('/') || ~path.lastIndexOf('\\');
    if (idx === 0) {
        return path;
    }
    else if (~idx === path.length - 1) {
        return basename(path.substring(0, path.length - 1));
    }
    else {
        return path.substr(~idx + 1);
    }
}
exports.basename = basename;
var CAPTURING_REGEX_SOURCE = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/;
var RegexSource = /** @class */ (function () {
    function RegexSource() {
    }
    RegexSource.hasCaptures = function (regexSource) {
        if (regexSource === null) {
            return false;
        }
        return CAPTURING_REGEX_SOURCE.test(regexSource);
    };
    RegexSource.replaceCaptures = function (regexSource, captureSource, captureIndices) {
        return regexSource.replace(CAPTURING_REGEX_SOURCE, function (match, index, commandIndex, command) {
            var capture = captureIndices[parseInt(index || commandIndex, 10)];
            if (capture) {
                var result = captureSource.substring(capture.start, capture.end);
                // Remove leading dots that would make the selector invalid
                while (result[0] === '.') {
                    result = result.substring(1);
                }
                switch (command) {
                    case 'downcase':
                        return result.toLowerCase();
                    case 'upcase':
                        return result.toUpperCase();
                    default:
                        return result;
                }
            }
            else {
                return match;
            }
        });
    };
    return RegexSource;
}());
exports.RegexSource = RegexSource;
//# sourceMappingURL=utils.js.map
});
$load('./theme', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var ParsedThemeRule = /** @class */ (function () {
    function ParsedThemeRule(scope, parentScopes, index, fontStyle, foreground, background) {
        this.scope = scope;
        this.parentScopes = parentScopes;
        this.index = index;
        this.fontStyle = fontStyle;
        this.foreground = foreground;
        this.background = background;
    }
    return ParsedThemeRule;
}());
exports.ParsedThemeRule = ParsedThemeRule;
function isValidHexColor(hex) {
    if (/^#[0-9a-f]{6}$/i.test(hex)) {
        // #rrggbb
        return true;
    }
    if (/^#[0-9a-f]{8}$/i.test(hex)) {
        // #rrggbbaa
        return true;
    }
    if (/^#[0-9a-f]{3}$/i.test(hex)) {
        // #rgb
        return true;
    }
    if (/^#[0-9a-f]{4}$/i.test(hex)) {
        // #rgba
        return true;
    }
    return false;
}
/**
 * Parse a raw theme into rules.
 */
function parseTheme(source) {
    if (!source) {
        return [];
    }
    if (!source.settings || !Array.isArray(source.settings)) {
        return [];
    }
    var settings = source.settings;
    var result = [], resultLen = 0;
    for (var i = 0, len = settings.length; i < len; i++) {
        var entry = settings[i];
        if (!entry.settings) {
            continue;
        }
        var scopes = void 0;
        if (typeof entry.scope === 'string') {
            var _scope = entry.scope;
            // remove leading commas
            _scope = _scope.replace(/^[,]+/, '');
            // remove trailing commans
            _scope = _scope.replace(/[,]+$/, '');
            scopes = _scope.split(',');
        }
        else if (Array.isArray(entry.scope)) {
            scopes = entry.scope;
        }
        else {
            scopes = [''];
        }
        var fontStyle = -1 /* NotSet */;
        if (typeof entry.settings.fontStyle === 'string') {
            fontStyle = 0 /* None */;
            var segments = entry.settings.fontStyle.split(' ');
            for (var j = 0, lenJ = segments.length; j < lenJ; j++) {
                var segment = segments[j];
                switch (segment) {
                    case 'italic':
                        fontStyle = fontStyle | 1 /* Italic */;
                        break;
                    case 'bold':
                        fontStyle = fontStyle | 2 /* Bold */;
                        break;
                    case 'underline':
                        fontStyle = fontStyle | 4 /* Underline */;
                        break;
                }
            }
        }
        var foreground = null;
        if (typeof entry.settings.foreground === 'string' && isValidHexColor(entry.settings.foreground)) {
            foreground = entry.settings.foreground;
        }
        var background = null;
        if (typeof entry.settings.background === 'string' && isValidHexColor(entry.settings.background)) {
            background = entry.settings.background;
        }
        for (var j = 0, lenJ = scopes.length; j < lenJ; j++) {
            var _scope = scopes[j].trim();
            var segments = _scope.split(' ');
            var scope = segments[segments.length - 1];
            var parentScopes = null;
            if (segments.length > 1) {
                parentScopes = segments.slice(0, segments.length - 1);
                parentScopes.reverse();
            }
            result[resultLen++] = new ParsedThemeRule(scope, parentScopes, i, fontStyle, foreground, background);
        }
    }
    return result;
}
exports.parseTheme = parseTheme;
/**
 * Resolve rules (i.e. inheritance).
 */
function resolveParsedThemeRules(parsedThemeRules, _colorMap) {
    // Sort rules lexicographically, and then by index if necessary
    parsedThemeRules.sort(function (a, b) {
        var r = strcmp(a.scope, b.scope);
        if (r !== 0) {
            return r;
        }
        r = strArrCmp(a.parentScopes, b.parentScopes);
        if (r !== 0) {
            return r;
        }
        return a.index - b.index;
    });
    // Determine defaults
    var defaultFontStyle = 0 /* None */;
    var defaultForeground = '#000000';
    var defaultBackground = '#ffffff';
    while (parsedThemeRules.length >= 1 && parsedThemeRules[0].scope === '') {
        var incomingDefaults = parsedThemeRules.shift();
        if (incomingDefaults.fontStyle !== -1 /* NotSet */) {
            defaultFontStyle = incomingDefaults.fontStyle;
        }
        if (incomingDefaults.foreground !== null) {
            defaultForeground = incomingDefaults.foreground;
        }
        if (incomingDefaults.background !== null) {
            defaultBackground = incomingDefaults.background;
        }
    }
    var colorMap = new ColorMap(_colorMap);
    var defaults = new ThemeTrieElementRule(0, null, defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground));
    var root = new ThemeTrieElement(new ThemeTrieElementRule(0, null, -1 /* NotSet */, 0, 0), []);
    for (var i = 0, len = parsedThemeRules.length; i < len; i++) {
        var rule = parsedThemeRules[i];
        root.insert(0, rule.scope, rule.parentScopes, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
    }
    return new Theme(colorMap, defaults, root);
}
var ColorMap = /** @class */ (function () {
    function ColorMap(_colorMap) {
        this._lastColorId = 0;
        this._id2color = [];
        this._color2id = Object.create(null);
        if (Array.isArray(_colorMap)) {
            this._isFrozen = true;
            for (var i = 0, len = _colorMap.length; i < len; i++) {
                this._color2id[_colorMap[i]] = i;
                this._id2color[i] = _colorMap[i];
            }
        }
        else {
            this._isFrozen = false;
        }
    }
    ColorMap.prototype.getId = function (color) {
        if (color === null) {
            return 0;
        }
        color = color.toUpperCase();
        var value = this._color2id[color];
        if (value) {
            return value;
        }
        if (this._isFrozen) {
            throw new Error("Missing color in color map - " + color);
        }
        value = ++this._lastColorId;
        this._color2id[color] = value;
        this._id2color[value] = color;
        return value;
    };
    ColorMap.prototype.getColorMap = function () {
        return this._id2color.slice(0);
    };
    return ColorMap;
}());
exports.ColorMap = ColorMap;
var Theme = /** @class */ (function () {
    function Theme(colorMap, defaults, root) {
        this._colorMap = colorMap;
        this._root = root;
        this._defaults = defaults;
        this._cache = {};
    }
    Theme.createFromRawTheme = function (source, colorMap) {
        return this.createFromParsedTheme(parseTheme(source), colorMap);
    };
    Theme.createFromParsedTheme = function (source, colorMap) {
        return resolveParsedThemeRules(source, colorMap);
    };
    Theme.prototype.getColorMap = function () {
        return this._colorMap.getColorMap();
    };
    Theme.prototype.getDefaults = function () {
        return this._defaults;
    };
    Theme.prototype.match = function (scopeName) {
        if (!this._cache.hasOwnProperty(scopeName)) {
            this._cache[scopeName] = this._root.match(scopeName);
        }
        return this._cache[scopeName];
    };
    return Theme;
}());
exports.Theme = Theme;
function strcmp(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
exports.strcmp = strcmp;
function strArrCmp(a, b) {
    if (a === null && b === null) {
        return 0;
    }
    if (!a) {
        return -1;
    }
    if (!b) {
        return 1;
    }
    var len1 = a.length;
    var len2 = b.length;
    if (len1 === len2) {
        for (var i = 0; i < len1; i++) {
            var res = strcmp(a[i], b[i]);
            if (res !== 0) {
                return res;
            }
        }
        return 0;
    }
    return len1 - len2;
}
exports.strArrCmp = strArrCmp;
var ThemeTrieElementRule = /** @class */ (function () {
    function ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background) {
        this.scopeDepth = scopeDepth;
        this.parentScopes = parentScopes;
        this.fontStyle = fontStyle;
        this.foreground = foreground;
        this.background = background;
    }
    ThemeTrieElementRule.prototype.clone = function () {
        return new ThemeTrieElementRule(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    };
    ThemeTrieElementRule.cloneArr = function (arr) {
        var r = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            r[i] = arr[i].clone();
        }
        return r;
    };
    ThemeTrieElementRule.prototype.acceptOverwrite = function (scopeDepth, fontStyle, foreground, background) {
        if (this.scopeDepth > scopeDepth) {
            console.log('how did this happen?');
        }
        else {
            this.scopeDepth = scopeDepth;
        }
        // console.log('TODO -> my depth: ' + this.scopeDepth + ', overwriting depth: ' + scopeDepth);
        if (fontStyle !== -1 /* NotSet */) {
            this.fontStyle = fontStyle;
        }
        if (foreground !== 0) {
            this.foreground = foreground;
        }
        if (background !== 0) {
            this.background = background;
        }
    };
    return ThemeTrieElementRule;
}());
exports.ThemeTrieElementRule = ThemeTrieElementRule;
var ThemeTrieElement = /** @class */ (function () {
    function ThemeTrieElement(mainRule, rulesWithParentScopes, children) {
        if (rulesWithParentScopes === void 0) { rulesWithParentScopes = []; }
        if (children === void 0) { children = {}; }
        this._mainRule = mainRule;
        this._rulesWithParentScopes = rulesWithParentScopes;
        this._children = children;
    }
    ThemeTrieElement._sortBySpecificity = function (arr) {
        if (arr.length === 1) {
            return arr;
        }
        arr.sort(this._cmpBySpecificity);
        return arr;
    };
    ThemeTrieElement._cmpBySpecificity = function (a, b) {
        if (a.scopeDepth === b.scopeDepth) {
            var aParentScopes = a.parentScopes;
            var bParentScopes = b.parentScopes;
            var aParentScopesLen = aParentScopes === null ? 0 : aParentScopes.length;
            var bParentScopesLen = bParentScopes === null ? 0 : bParentScopes.length;
            if (aParentScopesLen === bParentScopesLen) {
                for (var i = 0; i < aParentScopesLen; i++) {
                    var aLen = aParentScopes[i].length;
                    var bLen = bParentScopes[i].length;
                    if (aLen !== bLen) {
                        return bLen - aLen;
                    }
                }
            }
            return bParentScopesLen - aParentScopesLen;
        }
        return b.scopeDepth - a.scopeDepth;
    };
    ThemeTrieElement.prototype.match = function (scope) {
        if (scope === '') {
            return ThemeTrieElement._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
        }
        var dotIndex = scope.indexOf('.');
        var head;
        var tail;
        if (dotIndex === -1) {
            head = scope;
            tail = '';
        }
        else {
            head = scope.substring(0, dotIndex);
            tail = scope.substring(dotIndex + 1);
        }
        if (this._children.hasOwnProperty(head)) {
            return this._children[head].match(tail);
        }
        return ThemeTrieElement._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
    };
    ThemeTrieElement.prototype.insert = function (scopeDepth, scope, parentScopes, fontStyle, foreground, background) {
        if (scope === '') {
            this._doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background);
            return;
        }
        var dotIndex = scope.indexOf('.');
        var head;
        var tail;
        if (dotIndex === -1) {
            head = scope;
            tail = '';
        }
        else {
            head = scope.substring(0, dotIndex);
            tail = scope.substring(dotIndex + 1);
        }
        var child;
        if (this._children.hasOwnProperty(head)) {
            child = this._children[head];
        }
        else {
            child = new ThemeTrieElement(this._mainRule.clone(), ThemeTrieElementRule.cloneArr(this._rulesWithParentScopes));
            this._children[head] = child;
        }
        child.insert(scopeDepth + 1, tail, parentScopes, fontStyle, foreground, background);
    };
    ThemeTrieElement.prototype._doInsertHere = function (scopeDepth, parentScopes, fontStyle, foreground, background) {
        if (parentScopes === null) {
            // Merge into the main rule
            this._mainRule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
            return;
        }
        // Try to merge into existing rule
        for (var i = 0, len = this._rulesWithParentScopes.length; i < len; i++) {
            var rule = this._rulesWithParentScopes[i];
            if (strArrCmp(rule.parentScopes, parentScopes) === 0) {
                // bingo! => we get to merge this into an existing one
                rule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
                return;
            }
        }
        // Must add a new rule
        // Inherit from main rule
        if (fontStyle === -1 /* NotSet */) {
            fontStyle = this._mainRule.fontStyle;
        }
        if (foreground === 0) {
            foreground = this._mainRule.foreground;
        }
        if (background === 0) {
            background = this._mainRule.background;
        }
        this._rulesWithParentScopes.push(new ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background));
    };
    return ThemeTrieElement;
}());
exports.ThemeTrieElement = ThemeTrieElement;
//# sourceMappingURL=theme.js.map
});
$load('./matcher', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function createMatchers(selector, matchesName) {
    var results = [];
    var tokenizer = newTokenizer(selector);
    var token = tokenizer.next();
    while (token !== null) {
        var priority = 0;
        if (token.length === 2 && token.charAt(1) === ':') {
            switch (token.charAt(0)) {
                case 'R':
                    priority = 1;
                    break;
                case 'L':
                    priority = -1;
                    break;
                default:
                    console.log("Unknown priority " + token + " in scope selector");
            }
            token = tokenizer.next();
        }
        var matcher = parseConjunction();
        if (matcher) {
            results.push({ matcher: matcher, priority: priority });
        }
        if (token !== ',') {
            break;
        }
        token = tokenizer.next();
    }
    return results;
    function parseOperand() {
        if (token === '-') {
            token = tokenizer.next();
            var expressionToNegate_1 = parseOperand();
            return function (matcherInput) { return !!expressionToNegate_1 && !expressionToNegate_1(matcherInput); };
        }
        if (token === '(') {
            token = tokenizer.next();
            var expressionInParents = parseInnerExpression();
            if (token === ')') {
                token = tokenizer.next();
            }
            return expressionInParents;
        }
        if (isIdentifier(token)) {
            var identifiers_1 = [];
            do {
                identifiers_1.push(token);
                token = tokenizer.next();
            } while (isIdentifier(token));
            return function (matcherInput) { return matchesName(identifiers_1, matcherInput); };
        }
        return null;
    }
    function parseConjunction() {
        var matchers = [];
        var matcher = parseOperand();
        while (matcher) {
            matchers.push(matcher);
            matcher = parseOperand();
        }
        return function (matcherInput) { return matchers.every(function (matcher) { return matcher(matcherInput); }); }; // and
    }
    function parseInnerExpression() {
        var matchers = [];
        var matcher = parseConjunction();
        while (matcher) {
            matchers.push(matcher);
            if (token === '|' || token === ',') {
                do {
                    token = tokenizer.next();
                } while (token === '|' || token === ','); // ignore subsequent commas
            }
            else {
                break;
            }
            matcher = parseConjunction();
        }
        return function (matcherInput) { return matchers.some(function (matcher) { return matcher(matcherInput); }); }; // or
    }
}
exports.createMatchers = createMatchers;
function isIdentifier(token) {
    return !!token && !!token.match(/[\w\.:]+/);
}
function newTokenizer(input) {
    var regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
    var match = regex.exec(input);
    return {
        next: function () {
            if (!match) {
                return null;
            }
            var res = match[0];
            match = regex.exec(input);
            return res;
        }
    };
}
//# sourceMappingURL=matcher.js.map
});
$load('./debug', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugFlags = {
    InDebugMode: (typeof process !== 'undefined' && !!process.env['VSCODE_TEXTMATE_DEBUG'])
};
//# sourceMappingURL=debug.js.map
});
$load('./json', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function doFail(streamState, msg) {
    // console.log('Near offset ' + streamState.pos + ': ' + msg + ' ~~~' + streamState.source.substr(streamState.pos, 50) + '~~~');
    throw new Error('Near offset ' + streamState.pos + ': ' + msg + ' ~~~' + streamState.source.substr(streamState.pos, 50) + '~~~');
}
function parse(source, filename, withMetadata) {
    var streamState = new JSONStreamState(source);
    var token = new JSONToken();
    var state = 0 /* ROOT_STATE */;
    var cur = null;
    var stateStack = [];
    var objStack = [];
    function pushState() {
        stateStack.push(state);
        objStack.push(cur);
    }
    function popState() {
        state = stateStack.pop();
        cur = objStack.pop();
    }
    function fail(msg) {
        doFail(streamState, msg);
    }
    while (nextJSONToken(streamState, token)) {
        if (state === 0 /* ROOT_STATE */) {
            if (cur !== null) {
                fail('too many constructs in root');
            }
            if (token.type === 3 /* LEFT_CURLY_BRACKET */) {
                cur = {};
                if (withMetadata) {
                    cur.$vscodeTextmateLocation = token.toLocation(filename);
                }
                pushState();
                state = 1 /* DICT_STATE */;
                continue;
            }
            if (token.type === 2 /* LEFT_SQUARE_BRACKET */) {
                cur = [];
                pushState();
                state = 4 /* ARR_STATE */;
                continue;
            }
            fail('unexpected token in root');
        }
        if (state === 2 /* DICT_STATE_COMMA */) {
            if (token.type === 5 /* RIGHT_CURLY_BRACKET */) {
                popState();
                continue;
            }
            if (token.type === 7 /* COMMA */) {
                state = 3 /* DICT_STATE_NO_CLOSE */;
                continue;
            }
            fail('expected , or }');
        }
        if (state === 1 /* DICT_STATE */ || state === 3 /* DICT_STATE_NO_CLOSE */) {
            if (state === 1 /* DICT_STATE */ && token.type === 5 /* RIGHT_CURLY_BRACKET */) {
                popState();
                continue;
            }
            if (token.type === 1 /* STRING */) {
                var keyValue = token.value;
                if (!nextJSONToken(streamState, token) || token.type !== 6 /* COLON */) {
                    fail('expected colon');
                }
                if (!nextJSONToken(streamState, token)) {
                    fail('expected value');
                }
                state = 2 /* DICT_STATE_COMMA */;
                if (token.type === 1 /* STRING */) {
                    cur[keyValue] = token.value;
                    continue;
                }
                if (token.type === 8 /* NULL */) {
                    cur[keyValue] = null;
                    continue;
                }
                if (token.type === 9 /* TRUE */) {
                    cur[keyValue] = true;
                    continue;
                }
                if (token.type === 10 /* FALSE */) {
                    cur[keyValue] = false;
                    continue;
                }
                if (token.type === 11 /* NUMBER */) {
                    cur[keyValue] = parseFloat(token.value);
                    continue;
                }
                if (token.type === 2 /* LEFT_SQUARE_BRACKET */) {
                    var newArr = [];
                    cur[keyValue] = newArr;
                    pushState();
                    state = 4 /* ARR_STATE */;
                    cur = newArr;
                    continue;
                }
                if (token.type === 3 /* LEFT_CURLY_BRACKET */) {
                    var newDict = {};
                    if (withMetadata) {
                        newDict.$vscodeTextmateLocation = token.toLocation(filename);
                    }
                    cur[keyValue] = newDict;
                    pushState();
                    state = 1 /* DICT_STATE */;
                    cur = newDict;
                    continue;
                }
            }
            fail('unexpected token in dict');
        }
        if (state === 5 /* ARR_STATE_COMMA */) {
            if (token.type === 4 /* RIGHT_SQUARE_BRACKET */) {
                popState();
                continue;
            }
            if (token.type === 7 /* COMMA */) {
                state = 6 /* ARR_STATE_NO_CLOSE */;
                continue;
            }
            fail('expected , or ]');
        }
        if (state === 4 /* ARR_STATE */ || state === 6 /* ARR_STATE_NO_CLOSE */) {
            if (state === 4 /* ARR_STATE */ && token.type === 4 /* RIGHT_SQUARE_BRACKET */) {
                popState();
                continue;
            }
            state = 5 /* ARR_STATE_COMMA */;
            if (token.type === 1 /* STRING */) {
                cur.push(token.value);
                continue;
            }
            if (token.type === 8 /* NULL */) {
                cur.push(null);
                continue;
            }
            if (token.type === 9 /* TRUE */) {
                cur.push(true);
                continue;
            }
            if (token.type === 10 /* FALSE */) {
                cur.push(false);
                continue;
            }
            if (token.type === 11 /* NUMBER */) {
                cur.push(parseFloat(token.value));
                continue;
            }
            if (token.type === 2 /* LEFT_SQUARE_BRACKET */) {
                var newArr = [];
                cur.push(newArr);
                pushState();
                state = 4 /* ARR_STATE */;
                cur = newArr;
                continue;
            }
            if (token.type === 3 /* LEFT_CURLY_BRACKET */) {
                var newDict = {};
                if (withMetadata) {
                    newDict.$vscodeTextmateLocation = token.toLocation(filename);
                }
                cur.push(newDict);
                pushState();
                state = 1 /* DICT_STATE */;
                cur = newDict;
                continue;
            }
            fail('unexpected token in array');
        }
        fail('unknown state');
    }
    if (objStack.length !== 0) {
        fail('unclosed constructs');
    }
    return cur;
}
exports.parse = parse;
var JSONStreamState = /** @class */ (function () {
    function JSONStreamState(source) {
        this.source = source;
        this.pos = 0;
        this.len = source.length;
        this.line = 1;
        this.char = 0;
    }
    return JSONStreamState;
}());
var JSONToken = /** @class */ (function () {
    function JSONToken() {
        this.value = null;
        this.type = 0 /* UNKNOWN */;
        this.offset = -1;
        this.len = -1;
        this.line = -1;
        this.char = -1;
    }
    JSONToken.prototype.toLocation = function (filename) {
        return {
            filename: filename,
            line: this.line,
            char: this.char
        };
    };
    return JSONToken;
}());
/**
 * precondition: the string is known to be valid JSON (https://www.ietf.org/rfc/rfc4627.txt)
 */
function nextJSONToken(_state, _out) {
    _out.value = null;
    _out.type = 0 /* UNKNOWN */;
    _out.offset = -1;
    _out.len = -1;
    _out.line = -1;
    _out.char = -1;
    var source = _state.source;
    var pos = _state.pos;
    var len = _state.len;
    var line = _state.line;
    var char = _state.char;
    //------------------------ skip whitespace
    var chCode;
    do {
        if (pos >= len) {
            return false; /*EOS*/
        }
        chCode = source.charCodeAt(pos);
        if (chCode === 32 /* SPACE */ || chCode === 9 /* HORIZONTAL_TAB */ || chCode === 13 /* CARRIAGE_RETURN */) {
            // regular whitespace
            pos++;
            char++;
            continue;
        }
        if (chCode === 10 /* LINE_FEED */) {
            // newline
            pos++;
            line++;
            char = 0;
            continue;
        }
        // not whitespace
        break;
    } while (true);
    _out.offset = pos;
    _out.line = line;
    _out.char = char;
    if (chCode === 34 /* QUOTATION_MARK */) {
        //------------------------ strings
        _out.type = 1 /* STRING */;
        pos++;
        char++;
        do {
            if (pos >= len) {
                return false; /*EOS*/
            }
            chCode = source.charCodeAt(pos);
            pos++;
            char++;
            if (chCode === 92 /* BACKSLASH */) {
                // skip next char
                pos++;
                char++;
                continue;
            }
            if (chCode === 34 /* QUOTATION_MARK */) {
                // end of the string
                break;
            }
        } while (true);
        _out.value = source.substring(_out.offset + 1, pos - 1).replace(/\\u([0-9A-Fa-f]{4})/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 16));
        }).replace(/\\(.)/g, function (_, m0) {
            switch (m0) {
                case '"': return '"';
                case '\\': return '\\';
                case '/': return '/';
                case 'b': return '\b';
                case 'f': return '\f';
                case 'n': return '\n';
                case 'r': return '\r';
                case 't': return '\t';
                default: doFail(_state, 'invalid escape sequence');
            }
            throw new Error('unreachable');
        });
    }
    else if (chCode === 91 /* LEFT_SQUARE_BRACKET */) {
        _out.type = 2 /* LEFT_SQUARE_BRACKET */;
        pos++;
        char++;
    }
    else if (chCode === 123 /* LEFT_CURLY_BRACKET */) {
        _out.type = 3 /* LEFT_CURLY_BRACKET */;
        pos++;
        char++;
    }
    else if (chCode === 93 /* RIGHT_SQUARE_BRACKET */) {
        _out.type = 4 /* RIGHT_SQUARE_BRACKET */;
        pos++;
        char++;
    }
    else if (chCode === 125 /* RIGHT_CURLY_BRACKET */) {
        _out.type = 5 /* RIGHT_CURLY_BRACKET */;
        pos++;
        char++;
    }
    else if (chCode === 58 /* COLON */) {
        _out.type = 6 /* COLON */;
        pos++;
        char++;
    }
    else if (chCode === 44 /* COMMA */) {
        _out.type = 7 /* COMMA */;
        pos++;
        char++;
    }
    else if (chCode === 110 /* n */) {
        //------------------------ null
        _out.type = 8 /* NULL */;
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 117 /* u */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 108 /* l */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 108 /* l */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
    }
    else if (chCode === 116 /* t */) {
        //------------------------ true
        _out.type = 9 /* TRUE */;
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 114 /* r */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 117 /* u */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 101 /* e */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
    }
    else if (chCode === 102 /* f */) {
        //------------------------ false
        _out.type = 10 /* FALSE */;
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 97 /* a */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 108 /* l */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 115 /* s */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 101 /* e */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
    }
    else {
        //------------------------ numbers
        _out.type = 11 /* NUMBER */;
        do {
            if (pos >= len) {
                return false; /*EOS*/
            }
            chCode = source.charCodeAt(pos);
            if (chCode === 46 /* DOT */
                || (chCode >= 48 /* D0 */ && chCode <= 57 /* D9 */)
                || (chCode === 101 /* e */ || chCode === 69 /* E */)
                || (chCode === 45 /* MINUS */ || chCode === 43 /* PLUS */)) {
                // looks like a piece of a number
                pos++;
                char++;
                continue;
            }
            // pos--; char--;
            break;
        } while (true);
    }
    _out.len = pos - _out.offset;
    if (_out.value === null) {
        _out.value = source.substr(_out.offset, _out.len);
    }
    _state.pos = pos;
    _state.line = line;
    _state.char = char;
    // console.log('PRODUCING TOKEN: ', _out.value, JSONTokenType[_out.type]);
    return true;
}
//# sourceMappingURL=json.js.map
});
$load('./plist', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function parseWithLocation(content, filename, locationKeyName) {
    return _parse(content, filename, locationKeyName);
}
exports.parseWithLocation = parseWithLocation;
/**
 * A very fast plist parser
 */
function parse(content) {
    return _parse(content, null, null);
}
exports.parse = parse;
function _parse(content, filename, locationKeyName) {
    var len = content.length;
    var pos = 0;
    var line = 1;
    var char = 0;
    // Skip UTF8 BOM
    if (len > 0 && content.charCodeAt(0) === 65279 /* BOM */) {
        pos = 1;
    }
    function advancePosBy(by) {
        if (locationKeyName === null) {
            pos = pos + by;
        }
        else {
            while (by > 0) {
                var chCode = content.charCodeAt(pos);
                if (chCode === 10 /* LINE_FEED */) {
                    pos++;
                    line++;
                    char = 0;
                }
                else {
                    pos++;
                    char++;
                }
                by--;
            }
        }
    }
    function advancePosTo(to) {
        if (locationKeyName === null) {
            pos = to;
        }
        else {
            advancePosBy(to - pos);
        }
    }
    function skipWhitespace() {
        while (pos < len) {
            var chCode = content.charCodeAt(pos);
            if (chCode !== 32 /* SPACE */ && chCode !== 9 /* TAB */ && chCode !== 13 /* CARRIAGE_RETURN */ && chCode !== 10 /* LINE_FEED */) {
                break;
            }
            advancePosBy(1);
        }
    }
    function advanceIfStartsWith(str) {
        if (content.substr(pos, str.length) === str) {
            advancePosBy(str.length);
            return true;
        }
        return false;
    }
    function advanceUntil(str) {
        var nextOccurence = content.indexOf(str, pos);
        if (nextOccurence !== -1) {
            advancePosTo(nextOccurence + str.length);
        }
        else {
            // EOF
            advancePosTo(len);
        }
    }
    function captureUntil(str) {
        var nextOccurence = content.indexOf(str, pos);
        if (nextOccurence !== -1) {
            var r = content.substring(pos, nextOccurence);
            advancePosTo(nextOccurence + str.length);
            return r;
        }
        else {
            // EOF
            var r = content.substr(pos);
            advancePosTo(len);
            return r;
        }
    }
    var state = 0 /* ROOT_STATE */;
    var cur = null;
    var stateStack = [];
    var objStack = [];
    var curKey = null;
    function pushState(newState, newCur) {
        stateStack.push(state);
        objStack.push(cur);
        state = newState;
        cur = newCur;
    }
    function popState() {
        if (stateStack.length === 0) {
            return fail('illegal state stack');
        }
        state = stateStack.pop();
        cur = objStack.pop();
    }
    function fail(msg) {
        throw new Error('Near offset ' + pos + ': ' + msg + ' ~~~' + content.substr(pos, 50) + '~~~');
    }
    var dictState = {
        enterDict: function () {
            if (curKey === null) {
                return fail('missing <key>');
            }
            var newDict = {};
            if (locationKeyName !== null) {
                newDict[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            cur[curKey] = newDict;
            curKey = null;
            pushState(1 /* DICT_STATE */, newDict);
        },
        enterArray: function () {
            if (curKey === null) {
                return fail('missing <key>');
            }
            var newArr = [];
            cur[curKey] = newArr;
            curKey = null;
            pushState(2 /* ARR_STATE */, newArr);
        }
    };
    var arrState = {
        enterDict: function () {
            var newDict = {};
            if (locationKeyName !== null) {
                newDict[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            cur.push(newDict);
            pushState(1 /* DICT_STATE */, newDict);
        },
        enterArray: function () {
            var newArr = [];
            cur.push(newArr);
            pushState(2 /* ARR_STATE */, newArr);
        }
    };
    function enterDict() {
        if (state === 1 /* DICT_STATE */) {
            dictState.enterDict();
        }
        else if (state === 2 /* ARR_STATE */) {
            arrState.enterDict();
        }
        else { // ROOT_STATE
            cur = {};
            if (locationKeyName !== null) {
                cur[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            pushState(1 /* DICT_STATE */, cur);
        }
    }
    function leaveDict() {
        if (state === 1 /* DICT_STATE */) {
            popState();
        }
        else if (state === 2 /* ARR_STATE */) {
            return fail('unexpected </dict>');
        }
        else { // ROOT_STATE
            return fail('unexpected </dict>');
        }
    }
    function enterArray() {
        if (state === 1 /* DICT_STATE */) {
            dictState.enterArray();
        }
        else if (state === 2 /* ARR_STATE */) {
            arrState.enterArray();
        }
        else { // ROOT_STATE
            cur = [];
            pushState(2 /* ARR_STATE */, cur);
        }
    }
    function leaveArray() {
        if (state === 1 /* DICT_STATE */) {
            return fail('unexpected </array>');
        }
        else if (state === 2 /* ARR_STATE */) {
            popState();
        }
        else { // ROOT_STATE
            return fail('unexpected </array>');
        }
    }
    function acceptKey(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey !== null) {
                return fail('too many <key>');
            }
            curKey = val;
        }
        else if (state === 2 /* ARR_STATE */) {
            return fail('unexpected <key>');
        }
        else { // ROOT_STATE
            return fail('unexpected <key>');
        }
    }
    function acceptString(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptReal(val) {
        if (isNaN(val)) {
            return fail('cannot parse float');
        }
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptInteger(val) {
        if (isNaN(val)) {
            return fail('cannot parse integer');
        }
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptDate(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptData(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptBool(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function escapeVal(str) {
        return str.replace(/&#([0-9]+);/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 10));
        }).replace(/&#x([0-9a-f]+);/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 16));
        }).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function (_) {
            switch (_) {
                case '&amp;': return '&';
                case '&lt;': return '<';
                case '&gt;': return '>';
                case '&quot;': return '"';
                case '&apos;': return '\'';
            }
            return _;
        });
    }
    function parseOpenTag() {
        var r = captureUntil('>');
        var isClosed = false;
        if (r.charCodeAt(r.length - 1) === 47 /* SLASH */) {
            isClosed = true;
            r = r.substring(0, r.length - 1);
        }
        return {
            name: r.trim(),
            isClosed: isClosed
        };
    }
    function parseTagValue(tag) {
        if (tag.isClosed) {
            return '';
        }
        var val = captureUntil('</');
        advanceUntil('>');
        return escapeVal(val);
    }
    while (pos < len) {
        skipWhitespace();
        if (pos >= len) {
            break;
        }
        var chCode = content.charCodeAt(pos);
        advancePosBy(1);
        if (chCode !== 60 /* LESS_THAN */) {
            return fail('expected <');
        }
        if (pos >= len) {
            return fail('unexpected end of input');
        }
        var peekChCode = content.charCodeAt(pos);
        if (peekChCode === 63 /* QUESTION_MARK */) {
            advancePosBy(1);
            advanceUntil('?>');
            continue;
        }
        if (peekChCode === 33 /* EXCLAMATION_MARK */) {
            advancePosBy(1);
            if (advanceIfStartsWith('--')) {
                advanceUntil('-->');
                continue;
            }
            advanceUntil('>');
            continue;
        }
        if (peekChCode === 47 /* SLASH */) {
            advancePosBy(1);
            skipWhitespace();
            if (advanceIfStartsWith('plist')) {
                advanceUntil('>');
                continue;
            }
            if (advanceIfStartsWith('dict')) {
                advanceUntil('>');
                leaveDict();
                continue;
            }
            if (advanceIfStartsWith('array')) {
                advanceUntil('>');
                leaveArray();
                continue;
            }
            return fail('unexpected closed tag');
        }
        var tag = parseOpenTag();
        switch (tag.name) {
            case 'dict':
                enterDict();
                if (tag.isClosed) {
                    leaveDict();
                }
                continue;
            case 'array':
                enterArray();
                if (tag.isClosed) {
                    leaveArray();
                }
                continue;
            case 'key':
                acceptKey(parseTagValue(tag));
                continue;
            case 'string':
                acceptString(parseTagValue(tag));
                continue;
            case 'real':
                acceptReal(parseFloat(parseTagValue(tag)));
                continue;
            case 'integer':
                acceptInteger(parseInt(parseTagValue(tag), 10));
                continue;
            case 'date':
                acceptDate(new Date(parseTagValue(tag)));
                continue;
            case 'data':
                acceptData(parseTagValue(tag));
                continue;
            case 'true':
                parseTagValue(tag);
                acceptBool(true);
                continue;
            case 'false':
                parseTagValue(tag);
                acceptBool(false);
                continue;
        }
        if (/^plist/.test(tag.name)) {
            continue;
        }
        return fail('unexpected opened tag ' + tag.name);
    }
    return cur;
}
//# sourceMappingURL=plist.js.map
});
$load('./grammarReader', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var plist = require("./plist");
var debug_1 = require("./debug");
var json_1 = require("./json");
function parseRawGrammar(content, filePath) {
    if (filePath === void 0) { filePath = null; }
    if (filePath !== null && /\.json$/.test(filePath)) {
        return parseJSONGrammar(content, filePath);
    }
    return parsePLISTGrammar(content, filePath);
}
exports.parseRawGrammar = parseRawGrammar;
function parseJSONGrammar(contents, filename) {
    if (debug_1.DebugFlags.InDebugMode) {
        return json_1.parse(contents, filename, true);
    }
    return JSON.parse(contents);
}
function parsePLISTGrammar(contents, filename) {
    if (debug_1.DebugFlags.InDebugMode) {
        return plist.parseWithLocation(contents, filename, '$vscodeTextmateLocation');
    }
    return plist.parse(contents);
}
//# sourceMappingURL=grammarReader.js.map
});
$load('./rule', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
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
var utils_1 = require("./utils");
var HAS_BACK_REFERENCES = /\\(\d+)/;
var BACK_REFERENCING_END = /\\(\d+)/g;
var Rule = /** @class */ (function () {
    function Rule($location, id, name, contentName) {
        this.$location = $location;
        this.id = id;
        this._name = name || null;
        this._nameIsCapturing = utils_1.RegexSource.hasCaptures(this._name);
        this._contentName = contentName || null;
        this._contentNameIsCapturing = utils_1.RegexSource.hasCaptures(this._contentName);
    }
    Object.defineProperty(Rule.prototype, "debugName", {
        get: function () {
            var location = this.$location ? utils_1.basename(this.$location.filename) + ":" + this.$location.line : 'unknown';
            return this.constructor.name + "#" + this.id + " @ " + location;
        },
        enumerable: true,
        configurable: true
    });
    Rule.prototype.getName = function (lineText, captureIndices) {
        if (!this._nameIsCapturing || this._name === null || lineText === null || captureIndices === null) {
            return this._name;
        }
        return utils_1.RegexSource.replaceCaptures(this._name, lineText, captureIndices);
    };
    Rule.prototype.getContentName = function (lineText, captureIndices) {
        if (!this._contentNameIsCapturing || this._contentName === null) {
            return this._contentName;
        }
        return utils_1.RegexSource.replaceCaptures(this._contentName, lineText, captureIndices);
    };
    return Rule;
}());
exports.Rule = Rule;
var CaptureRule = /** @class */ (function (_super) {
    __extends(CaptureRule, _super);
    function CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId) {
        var _this = _super.call(this, $location, id, name, contentName) || this;
        _this.retokenizeCapturedWithRuleId = retokenizeCapturedWithRuleId;
        return _this;
    }
    CaptureRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        throw new Error('Not supported!');
    };
    CaptureRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        throw new Error('Not supported!');
    };
    return CaptureRule;
}(Rule));
exports.CaptureRule = CaptureRule;
var RegExpSource = /** @class */ (function () {
    function RegExpSource(regExpSource, ruleId, handleAnchors) {
        if (handleAnchors === void 0) { handleAnchors = true; }
        if (handleAnchors) {
            if (regExpSource) {
                var len = regExpSource.length;
                var lastPushedPos = 0;
                var output = [];
                var hasAnchor = false;
                for (var pos = 0; pos < len; pos++) {
                    var ch = regExpSource.charAt(pos);
                    if (ch === '\\') {
                        if (pos + 1 < len) {
                            var nextCh = regExpSource.charAt(pos + 1);
                            if (nextCh === 'z') {
                                output.push(regExpSource.substring(lastPushedPos, pos));
                                output.push('$(?!\\n)(?<!\\n)');
                                lastPushedPos = pos + 2;
                            }
                            else if (nextCh === 'A' || nextCh === 'G') {
                                hasAnchor = true;
                            }
                            pos++;
                        }
                    }
                }
                this.hasAnchor = hasAnchor;
                if (lastPushedPos === 0) {
                    // No \z hit
                    this.source = regExpSource;
                }
                else {
                    output.push(regExpSource.substring(lastPushedPos, len));
                    this.source = output.join('');
                }
            }
            else {
                this.hasAnchor = false;
                this.source = regExpSource;
            }
        }
        else {
            this.hasAnchor = false;
            this.source = regExpSource;
        }
        if (this.hasAnchor) {
            this._anchorCache = this._buildAnchorCache();
        }
        else {
            this._anchorCache = null;
        }
        this.ruleId = ruleId;
        this.hasBackReferences = HAS_BACK_REFERENCES.test(this.source);
        // console.log('input: ' + regExpSource + ' => ' + this.source + ', ' + this.hasAnchor);
    }
    RegExpSource.prototype.clone = function () {
        return new RegExpSource(this.source, this.ruleId, true);
    };
    RegExpSource.prototype.setSource = function (newSource) {
        if (this.source === newSource) {
            return;
        }
        this.source = newSource;
        if (this.hasAnchor) {
            this._anchorCache = this._buildAnchorCache();
        }
    };
    RegExpSource.prototype.resolveBackReferences = function (lineText, captureIndices) {
        var capturedValues = captureIndices.map(function (capture) {
            return lineText.substring(capture.start, capture.end);
        });
        BACK_REFERENCING_END.lastIndex = 0;
        return this.source.replace(BACK_REFERENCING_END, function (match, g1) {
            return escapeRegExpCharacters(capturedValues[parseInt(g1, 10)] || '');
        });
    };
    RegExpSource.prototype._buildAnchorCache = function () {
        var A0_G0_result = [];
        var A0_G1_result = [];
        var A1_G0_result = [];
        var A1_G1_result = [];
        var pos, len, ch, nextCh;
        for (pos = 0, len = this.source.length; pos < len; pos++) {
            ch = this.source.charAt(pos);
            A0_G0_result[pos] = ch;
            A0_G1_result[pos] = ch;
            A1_G0_result[pos] = ch;
            A1_G1_result[pos] = ch;
            if (ch === '\\') {
                if (pos + 1 < len) {
                    nextCh = this.source.charAt(pos + 1);
                    if (nextCh === 'A') {
                        A0_G0_result[pos + 1] = '\uFFFF';
                        A0_G1_result[pos + 1] = '\uFFFF';
                        A1_G0_result[pos + 1] = 'A';
                        A1_G1_result[pos + 1] = 'A';
                    }
                    else if (nextCh === 'G') {
                        A0_G0_result[pos + 1] = '\uFFFF';
                        A0_G1_result[pos + 1] = 'G';
                        A1_G0_result[pos + 1] = '\uFFFF';
                        A1_G1_result[pos + 1] = 'G';
                    }
                    else {
                        A0_G0_result[pos + 1] = nextCh;
                        A0_G1_result[pos + 1] = nextCh;
                        A1_G0_result[pos + 1] = nextCh;
                        A1_G1_result[pos + 1] = nextCh;
                    }
                    pos++;
                }
            }
        }
        return {
            A0_G0: A0_G0_result.join(''),
            A0_G1: A0_G1_result.join(''),
            A1_G0: A1_G0_result.join(''),
            A1_G1: A1_G1_result.join('')
        };
    };
    RegExpSource.prototype.resolveAnchors = function (allowA, allowG) {
        if (!this.hasAnchor || !this._anchorCache) {
            return this.source;
        }
        if (allowA) {
            if (allowG) {
                return this._anchorCache.A1_G1;
            }
            else {
                return this._anchorCache.A1_G0;
            }
        }
        else {
            if (allowG) {
                return this._anchorCache.A0_G1;
            }
            else {
                return this._anchorCache.A0_G0;
            }
        }
    };
    return RegExpSource;
}());
exports.RegExpSource = RegExpSource;
var RegExpSourceList = /** @class */ (function () {
    function RegExpSourceList() {
        this._items = [];
        this._hasAnchors = false;
        this._cached = null;
        this._anchorCache = {
            A0_G0: null,
            A0_G1: null,
            A1_G0: null,
            A1_G1: null
        };
    }
    RegExpSourceList.prototype.push = function (item) {
        this._items.push(item);
        this._hasAnchors = this._hasAnchors || item.hasAnchor;
    };
    RegExpSourceList.prototype.unshift = function (item) {
        this._items.unshift(item);
        this._hasAnchors = this._hasAnchors || item.hasAnchor;
    };
    RegExpSourceList.prototype.length = function () {
        return this._items.length;
    };
    RegExpSourceList.prototype.setSource = function (index, newSource) {
        if (this._items[index].source !== newSource) {
            // bust the cache
            this._cached = null;
            this._anchorCache.A0_G0 = null;
            this._anchorCache.A0_G1 = null;
            this._anchorCache.A1_G0 = null;
            this._anchorCache.A1_G1 = null;
            this._items[index].setSource(newSource);
        }
    };
    RegExpSourceList.prototype.compile = function (onigLib, allowA, allowG) {
        if (!this._hasAnchors) {
            if (!this._cached) {
                var regExps = this._items.map(function (e) { return e.source; });
                this._cached = {
                    scanner: onigLib.createOnigScanner(regExps),
                    rules: this._items.map(function (e) { return e.ruleId; }),
                    debugRegExps: regExps
                };
            }
            return this._cached;
        }
        else {
            if (allowA) {
                if (allowG) {
                    if (!this._anchorCache.A1_G1) {
                        this._anchorCache.A1_G1 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A1_G1;
                }
                else {
                    if (!this._anchorCache.A1_G0) {
                        this._anchorCache.A1_G0 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A1_G0;
                }
            }
            else {
                if (allowG) {
                    if (!this._anchorCache.A0_G1) {
                        this._anchorCache.A0_G1 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A0_G1;
                }
                else {
                    if (!this._anchorCache.A0_G0) {
                        this._anchorCache.A0_G0 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A0_G0;
                }
            }
        }
    };
    RegExpSourceList.prototype._resolveAnchors = function (onigLib, allowA, allowG) {
        var regExps = this._items.map(function (e) { return e.resolveAnchors(allowA, allowG); });
        return {
            scanner: onigLib.createOnigScanner(regExps),
            rules: this._items.map(function (e) { return e.ruleId; }),
            debugRegExps: regExps
        };
    };
    return RegExpSourceList;
}());
exports.RegExpSourceList = RegExpSourceList;
var MatchRule = /** @class */ (function (_super) {
    __extends(MatchRule, _super);
    function MatchRule($location, id, name, match, captures) {
        var _this = _super.call(this, $location, id, name, null) || this;
        _this._match = new RegExpSource(match, _this.id);
        _this.captures = captures;
        _this._cachedCompiledPatterns = null;
        return _this;
    }
    Object.defineProperty(MatchRule.prototype, "debugMatchRegExp", {
        get: function () {
            return "" + this._match.source;
        },
        enumerable: true,
        configurable: true
    });
    MatchRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        out.push(this._match);
    };
    MatchRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatternsRecursive(grammar, this._cachedCompiledPatterns, true);
        }
        return this._cachedCompiledPatterns.compile(grammar, allowA, allowG);
    };
    return MatchRule;
}(Rule));
exports.MatchRule = MatchRule;
var IncludeOnlyRule = /** @class */ (function (_super) {
    __extends(IncludeOnlyRule, _super);
    function IncludeOnlyRule($location, id, name, contentName, patterns) {
        var _this = _super.call(this, $location, id, name, contentName) || this;
        _this.patterns = patterns.patterns;
        _this.hasMissingPatterns = patterns.hasMissingPatterns;
        _this._cachedCompiledPatterns = null;
        return _this;
    }
    IncludeOnlyRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        var i, len, rule;
        for (i = 0, len = this.patterns.length; i < len; i++) {
            rule = grammar.getRule(this.patterns[i]);
            rule.collectPatternsRecursive(grammar, out, false);
        }
    };
    IncludeOnlyRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatternsRecursive(grammar, this._cachedCompiledPatterns, true);
        }
        return this._cachedCompiledPatterns.compile(grammar, allowA, allowG);
    };
    return IncludeOnlyRule;
}(Rule));
exports.IncludeOnlyRule = IncludeOnlyRule;
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&');
}
var BeginEndRule = /** @class */ (function (_super) {
    __extends(BeginEndRule, _super);
    function BeginEndRule($location, id, name, contentName, begin, beginCaptures, end, endCaptures, applyEndPatternLast, patterns) {
        var _this = _super.call(this, $location, id, name, contentName) || this;
        _this._begin = new RegExpSource(begin, _this.id);
        _this.beginCaptures = beginCaptures;
        _this._end = new RegExpSource(end ? end : '\uFFFF', -1);
        _this.endHasBackReferences = _this._end.hasBackReferences;
        _this.endCaptures = endCaptures;
        _this.applyEndPatternLast = applyEndPatternLast || false;
        _this.patterns = patterns.patterns;
        _this.hasMissingPatterns = patterns.hasMissingPatterns;
        _this._cachedCompiledPatterns = null;
        return _this;
    }
    Object.defineProperty(BeginEndRule.prototype, "debugBeginRegExp", {
        get: function () {
            return "" + this._begin.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BeginEndRule.prototype, "debugEndRegExp", {
        get: function () {
            return "" + this._end.source;
        },
        enumerable: true,
        configurable: true
    });
    BeginEndRule.prototype.getEndWithResolvedBackReferences = function (lineText, captureIndices) {
        return this._end.resolveBackReferences(lineText, captureIndices);
    };
    BeginEndRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        if (isFirst) {
            var i = void 0, len = void 0, rule = void 0;
            for (i = 0, len = this.patterns.length; i < len; i++) {
                rule = grammar.getRule(this.patterns[i]);
                rule.collectPatternsRecursive(grammar, out, false);
            }
        }
        else {
            out.push(this._begin);
        }
    };
    BeginEndRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatternsRecursive(grammar, this._cachedCompiledPatterns, true);
            if (this.applyEndPatternLast) {
                this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end);
            }
            else {
                this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
            }
        }
        if (this._end.hasBackReferences) {
            if (this.applyEndPatternLast) {
                this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, endRegexSource);
            }
            else {
                this._cachedCompiledPatterns.setSource(0, endRegexSource);
            }
        }
        return this._cachedCompiledPatterns.compile(grammar, allowA, allowG);
    };
    return BeginEndRule;
}(Rule));
exports.BeginEndRule = BeginEndRule;
var BeginWhileRule = /** @class */ (function (_super) {
    __extends(BeginWhileRule, _super);
    function BeginWhileRule($location, id, name, contentName, begin, beginCaptures, _while, whileCaptures, patterns) {
        var _this = _super.call(this, $location, id, name, contentName) || this;
        _this._begin = new RegExpSource(begin, _this.id);
        _this.beginCaptures = beginCaptures;
        _this.whileCaptures = whileCaptures;
        _this._while = new RegExpSource(_while, -2);
        _this.whileHasBackReferences = _this._while.hasBackReferences;
        _this.patterns = patterns.patterns;
        _this.hasMissingPatterns = patterns.hasMissingPatterns;
        _this._cachedCompiledPatterns = null;
        _this._cachedCompiledWhilePatterns = null;
        return _this;
    }
    Object.defineProperty(BeginWhileRule.prototype, "debugBeginRegExp", {
        get: function () {
            return "" + this._begin.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BeginWhileRule.prototype, "debugWhileRegExp", {
        get: function () {
            return "" + this._while.source;
        },
        enumerable: true,
        configurable: true
    });
    BeginWhileRule.prototype.getWhileWithResolvedBackReferences = function (lineText, captureIndices) {
        return this._while.resolveBackReferences(lineText, captureIndices);
    };
    BeginWhileRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        if (isFirst) {
            var i = void 0, len = void 0, rule = void 0;
            for (i = 0, len = this.patterns.length; i < len; i++) {
                rule = grammar.getRule(this.patterns[i]);
                rule.collectPatternsRecursive(grammar, out, false);
            }
        }
        else {
            out.push(this._begin);
        }
    };
    BeginWhileRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatternsRecursive(grammar, this._cachedCompiledPatterns, true);
        }
        return this._cachedCompiledPatterns.compile(grammar, allowA, allowG);
    };
    BeginWhileRule.prototype.compileWhile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledWhilePatterns) {
            this._cachedCompiledWhilePatterns = new RegExpSourceList();
            this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while);
        }
        if (this._while.hasBackReferences) {
            this._cachedCompiledWhilePatterns.setSource(0, endRegexSource ? endRegexSource : '\uFFFF');
        }
        return this._cachedCompiledWhilePatterns.compile(grammar, allowA, allowG);
    };
    return BeginWhileRule;
}(Rule));
exports.BeginWhileRule = BeginWhileRule;
var RuleFactory = /** @class */ (function () {
    function RuleFactory() {
    }
    RuleFactory.createCaptureRule = function (helper, $location, name, contentName, retokenizeCapturedWithRuleId) {
        return helper.registerRule(function (id) {
            return new CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId);
        });
    };
    RuleFactory.getCompiledRuleId = function (desc, helper, repository) {
        if (!desc.id) {
            helper.registerRule(function (id) {
                desc.id = id;
                if (desc.match) {
                    return new MatchRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.match, RuleFactory._compileCaptures(desc.captures, helper, repository));
                }
                if (typeof desc.begin === 'undefined') {
                    if (desc.repository) {
                        repository = utils_1.mergeObjects({}, repository, desc.repository);
                    }
                    var patterns = desc.patterns;
                    if (typeof patterns === 'undefined' && desc.include) {
                        patterns = [{ include: desc.include }];
                    }
                    return new IncludeOnlyRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, RuleFactory._compilePatterns(patterns, helper, repository));
                }
                if (desc.while) {
                    return new BeginWhileRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.while, RuleFactory._compileCaptures(desc.whileCaptures || desc.captures, helper, repository), RuleFactory._compilePatterns(desc.patterns, helper, repository));
                }
                return new BeginEndRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.end, RuleFactory._compileCaptures(desc.endCaptures || desc.captures, helper, repository), desc.applyEndPatternLast, RuleFactory._compilePatterns(desc.patterns, helper, repository));
            });
        }
        return desc.id;
    };
    RuleFactory._compileCaptures = function (captures, helper, repository) {
        var r = [];
        if (captures) {
            // Find the maximum capture id
            var maximumCaptureId = 0;
            for (var captureId in captures) {
                if (captureId === '$vscodeTextmateLocation') {
                    continue;
                }
                var numericCaptureId = parseInt(captureId, 10);
                if (numericCaptureId > maximumCaptureId) {
                    maximumCaptureId = numericCaptureId;
                }
            }
            // Initialize result
            for (var i = 0; i <= maximumCaptureId; i++) {
                r[i] = null;
            }
            // Fill out result
            for (var captureId in captures) {
                if (captureId === '$vscodeTextmateLocation') {
                    continue;
                }
                var numericCaptureId = parseInt(captureId, 10);
                var retokenizeCapturedWithRuleId = 0;
                if (captures[captureId].patterns) {
                    retokenizeCapturedWithRuleId = RuleFactory.getCompiledRuleId(captures[captureId], helper, repository);
                }
                r[numericCaptureId] = RuleFactory.createCaptureRule(helper, captures[captureId].$vscodeTextmateLocation, captures[captureId].name, captures[captureId].contentName, retokenizeCapturedWithRuleId);
            }
        }
        return r;
    };
    RuleFactory._compilePatterns = function (patterns, helper, repository) {
        var r = [];
        if (patterns) {
            for (var i = 0, len = patterns.length; i < len; i++) {
                var pattern = patterns[i];
                var patternId = -1;
                if (pattern.include) {
                    if (pattern.include.charAt(0) === '#') {
                        // Local include found in `repository`
                        var localIncludedRule = repository[pattern.include.substr(1)];
                        if (localIncludedRule) {
                            patternId = RuleFactory.getCompiledRuleId(localIncludedRule, helper, repository);
                        }
                        else {
                            // console.warn('CANNOT find rule for scopeName: ' + pattern.include + ', I am: ', repository['$base'].name);
                        }
                    }
                    else if (pattern.include === '$base' || pattern.include === '$self') {
                        // Special include also found in `repository`
                        patternId = RuleFactory.getCompiledRuleId(repository[pattern.include], helper, repository);
                    }
                    else {
                        var externalGrammarName = null;
                        var externalGrammarInclude = null;
                        var sharpIndex = pattern.include.indexOf('#');
                        if (sharpIndex >= 0) {
                            externalGrammarName = pattern.include.substring(0, sharpIndex);
                            externalGrammarInclude = pattern.include.substring(sharpIndex + 1);
                        }
                        else {
                            externalGrammarName = pattern.include;
                        }
                        // External include
                        var externalGrammar = helper.getExternalGrammar(externalGrammarName, repository);
                        if (externalGrammar) {
                            if (externalGrammarInclude) {
                                var externalIncludedRule = externalGrammar.repository[externalGrammarInclude];
                                if (externalIncludedRule) {
                                    patternId = RuleFactory.getCompiledRuleId(externalIncludedRule, helper, externalGrammar.repository);
                                }
                                else {
                                    // console.warn('CANNOT find rule for scopeName: ' + pattern.include + ', I am: ', repository['$base'].name);
                                }
                            }
                            else {
                                patternId = RuleFactory.getCompiledRuleId(externalGrammar.repository.$self, helper, externalGrammar.repository);
                            }
                        }
                        else {
                            // console.warn('CANNOT find grammar for scopeName: ' + pattern.include + ', I am: ', repository['$base'].name);
                        }
                    }
                }
                else {
                    patternId = RuleFactory.getCompiledRuleId(pattern, helper, repository);
                }
                if (patternId !== -1) {
                    var rule = helper.getRule(patternId);
                    var skipRule = false;
                    if (rule instanceof IncludeOnlyRule || rule instanceof BeginEndRule || rule instanceof BeginWhileRule) {
                        if (rule.hasMissingPatterns && rule.patterns.length === 0) {
                            skipRule = true;
                        }
                    }
                    if (skipRule) {
                        // console.log('REMOVING RULE ENTIRELY DUE TO EMPTY PATTERNS THAT ARE MISSING');
                        continue;
                    }
                    r.push(patternId);
                }
            }
        }
        return {
            patterns: r,
            hasMissingPatterns: ((patterns ? patterns.length : 0) !== r.length)
        };
    };
    return RuleFactory;
}());
exports.RuleFactory = RuleFactory;
//# sourceMappingURL=rule.js.map
});
$load('./grammar', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var rule_1 = require("./rule");
var matcher_1 = require("./matcher");
var debug_1 = require("./debug");
function createGrammar(grammar, initialLanguage, embeddedLanguages, tokenTypes, grammarRepository, onigLib) {
    return new Grammar(grammar, initialLanguage, embeddedLanguages, tokenTypes, grammarRepository, onigLib);
}
exports.createGrammar = createGrammar;
var FullScopeDependency = /** @class */ (function () {
    function FullScopeDependency(scopeName) {
        this.scopeName = scopeName;
    }
    return FullScopeDependency;
}());
exports.FullScopeDependency = FullScopeDependency;
var PartialScopeDependency = /** @class */ (function () {
    function PartialScopeDependency(scopeName, include) {
        this.scopeName = scopeName;
        this.include = include;
    }
    PartialScopeDependency.prototype.toKey = function () {
        return this.scopeName + "#" + this.include;
    };
    return PartialScopeDependency;
}());
exports.PartialScopeDependency = PartialScopeDependency;
var ScopeDependencyCollector = /** @class */ (function () {
    function ScopeDependencyCollector() {
        this.full = [];
        this.partial = [];
        this.visitedRule = new Set();
        this._seenFull = new Set();
        this._seenPartial = new Set();
    }
    ScopeDependencyCollector.prototype.add = function (dep) {
        if (dep instanceof FullScopeDependency) {
            if (!this._seenFull.has(dep.scopeName)) {
                this._seenFull.add(dep.scopeName);
                this.full.push(dep);
            }
        }
        else {
            if (!this._seenPartial.has(dep.toKey())) {
                this._seenPartial.add(dep.toKey());
                this.partial.push(dep);
            }
        }
    };
    return ScopeDependencyCollector;
}());
exports.ScopeDependencyCollector = ScopeDependencyCollector;
/**
 * Fill in `result` all external included scopes in `patterns`
 */
function _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, patterns, repository) {
    for (var _i = 0, patterns_1 = patterns; _i < patterns_1.length; _i++) {
        var pattern = patterns_1[_i];
        if (result.visitedRule.has(pattern)) {
            continue;
        }
        result.visitedRule.add(pattern);
        var patternRepository = (pattern.repository ? utils_1.mergeObjects({}, repository, pattern.repository) : repository);
        if (Array.isArray(pattern.patterns)) {
            _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, pattern.patterns, patternRepository);
        }
        var include = pattern.include;
        if (!include) {
            continue;
        }
        if (include === '$base' || include === baseGrammar.scopeName) {
            collectDependencies(result, baseGrammar, baseGrammar);
        }
        else if (include === '$self' || include === selfGrammar.scopeName) {
            collectDependencies(result, baseGrammar, selfGrammar);
        }
        else if (include.charAt(0) === '#') {
            collectSpecificDependencies(result, baseGrammar, selfGrammar, include.substring(1), patternRepository);
        }
        else {
            var sharpIndex = include.indexOf('#');
            if (sharpIndex >= 0) {
                var scopeName = include.substring(0, sharpIndex);
                var includedName = include.substring(sharpIndex + 1);
                if (scopeName === baseGrammar.scopeName) {
                    collectSpecificDependencies(result, baseGrammar, baseGrammar, includedName, patternRepository);
                }
                else if (scopeName === selfGrammar.scopeName) {
                    collectSpecificDependencies(result, baseGrammar, selfGrammar, includedName, patternRepository);
                }
                else {
                    result.add(new PartialScopeDependency(scopeName, include.substring(sharpIndex + 1)));
                }
            }
            else {
                result.add(new FullScopeDependency(include));
            }
        }
    }
}
/**
 * Collect a specific dependency from the grammar's repository
 */
function collectSpecificDependencies(result, baseGrammar, selfGrammar, include, repository) {
    if (repository === void 0) { repository = selfGrammar.repository; }
    if (repository && repository[include]) {
        var rule = repository[include];
        _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, [rule], repository);
    }
}
exports.collectSpecificDependencies = collectSpecificDependencies;
/**
 * Collects the list of all external included scopes in `grammar`.
 */
function collectDependencies(result, baseGrammar, selfGrammar) {
    if (selfGrammar.patterns && Array.isArray(selfGrammar.patterns)) {
        _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, selfGrammar.patterns, selfGrammar.repository);
    }
    if (selfGrammar.injections) {
        var injections = [];
        for (var injection in selfGrammar.injections) {
            injections.push(selfGrammar.injections[injection]);
        }
        _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, injections, selfGrammar.repository);
    }
}
exports.collectDependencies = collectDependencies;
function scopesAreMatching(thisScopeName, scopeName) {
    if (!thisScopeName) {
        return false;
    }
    if (thisScopeName === scopeName) {
        return true;
    }
    var len = scopeName.length;
    return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === '.';
}
function nameMatcher(identifers, scopes) {
    if (scopes.length < identifers.length) {
        return false;
    }
    var lastIndex = 0;
    return identifers.every(function (identifier) {
        for (var i = lastIndex; i < scopes.length; i++) {
            if (scopesAreMatching(scopes[i], identifier)) {
                lastIndex = i + 1;
                return true;
            }
        }
        return false;
    });
}
function collectInjections(result, selector, rule, ruleFactoryHelper, grammar) {
    var matchers = matcher_1.createMatchers(selector, nameMatcher);
    var ruleId = rule_1.RuleFactory.getCompiledRuleId(rule, ruleFactoryHelper, grammar.repository);
    for (var _i = 0, matchers_1 = matchers; _i < matchers_1.length; _i++) {
        var matcher = matchers_1[_i];
        result.push({
            matcher: matcher.matcher,
            ruleId: ruleId,
            grammar: grammar,
            priority: matcher.priority
        });
    }
}
var ScopeMetadata = /** @class */ (function () {
    function ScopeMetadata(scopeName, languageId, tokenType, themeData) {
        this.scopeName = scopeName;
        this.languageId = languageId;
        this.tokenType = tokenType;
        this.themeData = themeData;
    }
    return ScopeMetadata;
}());
exports.ScopeMetadata = ScopeMetadata;
var ScopeMetadataProvider = /** @class */ (function () {
    function ScopeMetadataProvider(initialLanguage, themeProvider, embeddedLanguages) {
        this._initialLanguage = initialLanguage;
        this._themeProvider = themeProvider;
        this._cache = new Map();
        this._defaultMetaData = new ScopeMetadata('', this._initialLanguage, 0 /* Other */, [this._themeProvider.getDefaults()]);
        // embeddedLanguages handling
        this._embeddedLanguages = Object.create(null);
        if (embeddedLanguages) {
            // If embeddedLanguages are configured, fill in `this._embeddedLanguages`
            var scopes = Object.keys(embeddedLanguages);
            for (var i = 0, len = scopes.length; i < len; i++) {
                var scope = scopes[i];
                var language = embeddedLanguages[scope];
                if (typeof language !== 'number' || language === 0) {
                    console.warn('Invalid embedded language found at scope ' + scope + ': <<' + language + '>>');
                    // never hurts to be too careful
                    continue;
                }
                this._embeddedLanguages[scope] = language;
            }
        }
        // create the regex
        var escapedScopes = Object.keys(this._embeddedLanguages).map(function (scopeName) { return ScopeMetadataProvider._escapeRegExpCharacters(scopeName); });
        if (escapedScopes.length === 0) {
            // no scopes registered
            this._embeddedLanguagesRegex = null;
        }
        else {
            escapedScopes.sort();
            escapedScopes.reverse();
            this._embeddedLanguagesRegex = new RegExp("^((" + escapedScopes.join(')|(') + "))($|\\.)", '');
        }
    }
    ScopeMetadataProvider.prototype.onDidChangeTheme = function () {
        this._cache = new Map();
        this._defaultMetaData = new ScopeMetadata('', this._initialLanguage, 0 /* Other */, [this._themeProvider.getDefaults()]);
    };
    ScopeMetadataProvider.prototype.getDefaultMetadata = function () {
        return this._defaultMetaData;
    };
    /**
     * Escapes regular expression characters in a given string
     */
    ScopeMetadataProvider._escapeRegExpCharacters = function (value) {
        return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&');
    };
    ScopeMetadataProvider.prototype.getMetadataForScope = function (scopeName) {
        if (scopeName === null) {
            return ScopeMetadataProvider._NULL_SCOPE_METADATA;
        }
        var value = this._cache.get(scopeName);
        if (value) {
            return value;
        }
        value = this._doGetMetadataForScope(scopeName);
        this._cache.set(scopeName, value);
        return value;
    };
    ScopeMetadataProvider.prototype._doGetMetadataForScope = function (scopeName) {
        var languageId = this._scopeToLanguage(scopeName);
        var standardTokenType = this._toStandardTokenType(scopeName);
        var themeData = this._themeProvider.themeMatch(scopeName);
        return new ScopeMetadata(scopeName, languageId, standardTokenType, themeData);
    };
    /**
     * Given a produced TM scope, return the language that token describes or null if unknown.
     * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
     */
    ScopeMetadataProvider.prototype._scopeToLanguage = function (scope) {
        if (!scope) {
            return 0;
        }
        if (!this._embeddedLanguagesRegex) {
            // no scopes registered
            return 0;
        }
        var m = scope.match(this._embeddedLanguagesRegex);
        if (!m) {
            // no scopes matched
            return 0;
        }
        var language = this._embeddedLanguages[m[1]] || 0;
        if (!language) {
            return 0;
        }
        return language;
    };
    ScopeMetadataProvider.prototype._toStandardTokenType = function (tokenType) {
        var m = tokenType.match(ScopeMetadataProvider.STANDARD_TOKEN_TYPE_REGEXP);
        if (!m) {
            return 0 /* Other */;
        }
        switch (m[1]) {
            case 'comment':
                return 1 /* Comment */;
            case 'string':
                return 2 /* String */;
            case 'regex':
                return 4 /* RegEx */;
            case 'meta.embedded':
                return 8 /* MetaEmbedded */;
        }
        throw new Error('Unexpected match for standard token type!');
    };
    ScopeMetadataProvider._NULL_SCOPE_METADATA = new ScopeMetadata('', 0, 0, null);
    ScopeMetadataProvider.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
    return ScopeMetadataProvider;
}());
var Grammar = /** @class */ (function () {
    function Grammar(grammar, initialLanguage, embeddedLanguages, tokenTypes, grammarRepository, onigLib) {
        this._scopeMetadataProvider = new ScopeMetadataProvider(initialLanguage, grammarRepository, embeddedLanguages);
        this._onigLib = onigLib;
        this._rootId = -1;
        this._lastRuleId = 0;
        this._ruleId2desc = [];
        this._includedGrammars = {};
        this._grammarRepository = grammarRepository;
        this._grammar = initGrammar(grammar, null);
        this._injections = null;
        this._tokenTypeMatchers = [];
        if (tokenTypes) {
            for (var _i = 0, _a = Object.keys(tokenTypes); _i < _a.length; _i++) {
                var selector = _a[_i];
                var matchers = matcher_1.createMatchers(selector, nameMatcher);
                for (var _b = 0, matchers_2 = matchers; _b < matchers_2.length; _b++) {
                    var matcher = matchers_2[_b];
                    this._tokenTypeMatchers.push({
                        matcher: matcher.matcher,
                        type: tokenTypes[selector]
                    });
                }
            }
        }
    }
    Grammar.prototype.createOnigScanner = function (sources) {
        return this._onigLib.createOnigScanner(sources);
    };
    Grammar.prototype.createOnigString = function (sources) {
        return this._onigLib.createOnigString(sources);
    };
    Grammar.prototype.onDidChangeTheme = function () {
        this._scopeMetadataProvider.onDidChangeTheme();
    };
    Grammar.prototype.getMetadataForScope = function (scope) {
        return this._scopeMetadataProvider.getMetadataForScope(scope);
    };
    Grammar.prototype.getInjections = function () {
        var _this = this;
        if (this._injections === null) {
            this._injections = [];
            // add injections from the current grammar
            var rawInjections = this._grammar.injections;
            if (rawInjections) {
                for (var expression in rawInjections) {
                    collectInjections(this._injections, expression, rawInjections[expression], this, this._grammar);
                }
            }
            // add injection grammars contributed for the current scope
            if (this._grammarRepository) {
                var injectionScopeNames = this._grammarRepository.injections(this._grammar.scopeName);
                if (injectionScopeNames) {
                    injectionScopeNames.forEach(function (injectionScopeName) {
                        var injectionGrammar = _this.getExternalGrammar(injectionScopeName);
                        if (injectionGrammar) {
                            var selector = injectionGrammar.injectionSelector;
                            if (selector) {
                                collectInjections(_this._injections, selector, injectionGrammar, _this, injectionGrammar);
                            }
                        }
                    });
                }
            }
            this._injections.sort(function (i1, i2) { return i1.priority - i2.priority; }); // sort by priority
        }
        return this._injections;
    };
    Grammar.prototype.registerRule = function (factory) {
        var id = (++this._lastRuleId);
        var result = factory(id);
        this._ruleId2desc[id] = result;
        return result;
    };
    Grammar.prototype.getRule = function (patternId) {
        return this._ruleId2desc[patternId];
    };
    Grammar.prototype.getExternalGrammar = function (scopeName, repository) {
        if (this._includedGrammars[scopeName]) {
            return this._includedGrammars[scopeName];
        }
        else if (this._grammarRepository) {
            var rawIncludedGrammar = this._grammarRepository.lookup(scopeName);
            if (rawIncludedGrammar) {
                // console.log('LOADED GRAMMAR ' + pattern.include);
                this._includedGrammars[scopeName] = initGrammar(rawIncludedGrammar, repository && repository.$base);
                return this._includedGrammars[scopeName];
            }
        }
        return null;
    };
    Grammar.prototype.tokenizeLine = function (lineText, prevState) {
        var r = this._tokenize(lineText, prevState, false);
        return {
            tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack
        };
    };
    Grammar.prototype.tokenizeLine2 = function (lineText, prevState) {
        var r = this._tokenize(lineText, prevState, true);
        return {
            tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack
        };
    };
    Grammar.prototype._tokenize = function (lineText, prevState, emitBinaryTokens) {
        if (this._rootId === -1) {
            this._rootId = rule_1.RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository);
        }
        var isFirstLine;
        if (!prevState || prevState === StackElement.NULL) {
            isFirstLine = true;
            var rawDefaultMetadata = this._scopeMetadataProvider.getDefaultMetadata();
            var defaultTheme = rawDefaultMetadata.themeData[0];
            var defaultMetadata = StackElementMetadata.set(0, rawDefaultMetadata.languageId, rawDefaultMetadata.tokenType, defaultTheme.fontStyle, defaultTheme.foreground, defaultTheme.background);
            var rootScopeName = this.getRule(this._rootId).getName(null, null);
            var rawRootMetadata = this._scopeMetadataProvider.getMetadataForScope(rootScopeName);
            var rootMetadata = ScopeListElement.mergeMetadata(defaultMetadata, null, rawRootMetadata);
            var scopeList = new ScopeListElement(null, rootScopeName === null ? 'unknown' : rootScopeName, rootMetadata);
            prevState = new StackElement(null, this._rootId, -1, -1, false, null, scopeList, scopeList);
        }
        else {
            isFirstLine = false;
            prevState.reset();
        }
        lineText = lineText + '\n';
        var onigLineText = this.createOnigString(lineText);
        var lineLength = onigLineText.content.length;
        var lineTokens = new LineTokens(emitBinaryTokens, lineText, this._tokenTypeMatchers);
        var nextState = _tokenizeString(this, onigLineText, isFirstLine, 0, prevState, lineTokens, true);
        disposeOnigString(onigLineText);
        return {
            lineLength: lineLength,
            lineTokens: lineTokens,
            ruleStack: nextState
        };
    };
    return Grammar;
}());
exports.Grammar = Grammar;
function disposeOnigString(str) {
    if (typeof str.dispose === 'function') {
        str.dispose();
    }
}
function initGrammar(grammar, base) {
    grammar = utils_1.clone(grammar);
    grammar.repository = grammar.repository || {};
    grammar.repository.$self = {
        $vscodeTextmateLocation: grammar.$vscodeTextmateLocation,
        patterns: grammar.patterns,
        name: grammar.scopeName
    };
    grammar.repository.$base = base || grammar.repository.$self;
    return grammar;
}
function handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, captures, captureIndices) {
    if (captures.length === 0) {
        return;
    }
    var lineTextContent = lineText.content;
    var len = Math.min(captures.length, captureIndices.length);
    var localStack = [];
    var maxEnd = captureIndices[0].end;
    for (var i = 0; i < len; i++) {
        var captureRule = captures[i];
        if (captureRule === null) {
            // Not interested
            continue;
        }
        var captureIndex = captureIndices[i];
        if (captureIndex.length === 0) {
            // Nothing really captured
            continue;
        }
        if (captureIndex.start > maxEnd) {
            // Capture going beyond consumed string
            break;
        }
        // pop captures while needed
        while (localStack.length > 0 && localStack[localStack.length - 1].endPos <= captureIndex.start) {
            // pop!
            lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
            localStack.pop();
        }
        if (localStack.length > 0) {
            lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, captureIndex.start);
        }
        else {
            lineTokens.produce(stack, captureIndex.start);
        }
        if (captureRule.retokenizeCapturedWithRuleId) {
            // the capture requires additional matching
            var scopeName = captureRule.getName(lineTextContent, captureIndices);
            var nameScopesList = stack.contentNameScopesList.push(grammar, scopeName);
            var contentName = captureRule.getContentName(lineTextContent, captureIndices);
            var contentNameScopesList = nameScopesList.push(grammar, contentName);
            var stackClone = stack.push(captureRule.retokenizeCapturedWithRuleId, captureIndex.start, -1, false, null, nameScopesList, contentNameScopesList);
            var onigSubStr = grammar.createOnigString(lineTextContent.substring(0, captureIndex.end));
            _tokenizeString(grammar, onigSubStr, (isFirstLine && captureIndex.start === 0), captureIndex.start, stackClone, lineTokens, false);
            disposeOnigString(onigSubStr);
            continue;
        }
        var captureRuleScopeName = captureRule.getName(lineTextContent, captureIndices);
        if (captureRuleScopeName !== null) {
            // push
            var base = localStack.length > 0 ? localStack[localStack.length - 1].scopes : stack.contentNameScopesList;
            var captureRuleScopesList = base.push(grammar, captureRuleScopeName);
            localStack.push(new LocalStackElement(captureRuleScopesList, captureIndex.end));
        }
    }
    while (localStack.length > 0) {
        // pop!
        lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
        localStack.pop();
    }
}
function debugCompiledRuleToString(ruleScanner) {
    var r = [];
    for (var i = 0, len = ruleScanner.rules.length; i < len; i++) {
        r.push('   - ' + ruleScanner.rules[i] + ': ' + ruleScanner.debugRegExps[i]);
    }
    return r.join('\n');
}
function matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    // The lower the better
    var bestMatchRating = Number.MAX_VALUE;
    var bestMatchCaptureIndices = null;
    var bestMatchRuleId;
    var bestMatchResultPriority = 0;
    var scopes = stack.contentNameScopesList.generateScopes();
    for (var i = 0, len = injections.length; i < len; i++) {
        var injection = injections[i];
        if (!injection.matcher(scopes)) {
            // injection selector doesn't match stack
            continue;
        }
        var ruleScanner = grammar.getRule(injection.ruleId).compile(grammar, null, isFirstLine, linePos === anchorPosition);
        var matchResult = ruleScanner.scanner.findNextMatchSync(lineText, linePos);
        if (debug_1.DebugFlags.InDebugMode) {
            console.log('  scanning for injections');
            console.log(debugCompiledRuleToString(ruleScanner));
        }
        if (!matchResult) {
            continue;
        }
        var matchRating = matchResult.captureIndices[0].start;
        if (matchRating >= bestMatchRating) {
            // Injections are sorted by priority, so the previous injection had a better or equal priority
            continue;
        }
        bestMatchRating = matchRating;
        bestMatchCaptureIndices = matchResult.captureIndices;
        bestMatchRuleId = ruleScanner.rules[matchResult.index];
        bestMatchResultPriority = injection.priority;
        if (bestMatchRating === linePos) {
            // No more need to look at the rest of the injections.
            break;
        }
    }
    if (bestMatchCaptureIndices) {
        return {
            priorityMatch: bestMatchResultPriority === -1,
            captureIndices: bestMatchCaptureIndices,
            matchedRuleId: bestMatchRuleId
        };
    }
    return null;
}
function matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    var rule = stack.getRule(grammar);
    var ruleScanner = rule.compile(grammar, stack.endRule, isFirstLine, linePos === anchorPosition);
    var r = ruleScanner.scanner.findNextMatchSync(lineText, linePos);
    if (debug_1.DebugFlags.InDebugMode) {
        // console.log(`  scanning for (linePos: ${linePos}, anchorPosition: ${anchorPosition})`);
        // console.log(debugCompiledRuleToString(ruleScanner));
        if (r) {
            console.log("matched rule id: " + ruleScanner.rules[r.index] + " from " + r.captureIndices[0].start + " to " + r.captureIndices[0].end);
        }
    }
    if (r) {
        return {
            captureIndices: r.captureIndices,
            matchedRuleId: ruleScanner.rules[r.index]
        };
    }
    return null;
}
function matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    // Look for normal grammar rule
    var matchResult = matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    // Look for injected rules
    var injections = grammar.getInjections();
    if (injections.length === 0) {
        // No injections whatsoever => early return
        return matchResult;
    }
    var injectionResult = matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    if (!injectionResult) {
        // No injections matched => early return
        return matchResult;
    }
    if (!matchResult) {
        // Only injections matched => early return
        return injectionResult;
    }
    // Decide if `matchResult` or `injectionResult` should win
    var matchResultScore = matchResult.captureIndices[0].start;
    var injectionResultScore = injectionResult.captureIndices[0].start;
    if (injectionResultScore < matchResultScore || (injectionResult.priorityMatch && injectionResultScore === matchResultScore)) {
        // injection won!
        return injectionResult;
    }
    return matchResult;
}
/**
 * Walk the stack from bottom to top, and check each while condition in this order.
 * If any fails, cut off the entire stack above the failed while condition. While conditions
 * may also advance the linePosition.
 */
function _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens) {
    var anchorPosition = (stack.beginRuleCapturedEOL ? 0 : -1);
    var whileRules = [];
    for (var node = stack; node; node = node.pop()) {
        var nodeRule = node.getRule(grammar);
        if (nodeRule instanceof rule_1.BeginWhileRule) {
            whileRules.push({
                rule: nodeRule,
                stack: node
            });
        }
    }
    for (var whileRule = whileRules.pop(); whileRule; whileRule = whileRules.pop()) {
        var ruleScanner = whileRule.rule.compileWhile(grammar, whileRule.stack.endRule, isFirstLine, anchorPosition === linePos);
        var r = ruleScanner.scanner.findNextMatchSync(lineText, linePos);
        if (debug_1.DebugFlags.InDebugMode) {
            console.log('  scanning for while rule');
            console.log(debugCompiledRuleToString(ruleScanner));
        }
        if (r) {
            var matchedRuleId = ruleScanner.rules[r.index];
            if (matchedRuleId !== -2) {
                // we shouldn't end up here
                stack = whileRule.stack.pop();
                break;
            }
            if (r.captureIndices && r.captureIndices.length) {
                lineTokens.produce(whileRule.stack, r.captureIndices[0].start);
                handleCaptures(grammar, lineText, isFirstLine, whileRule.stack, lineTokens, whileRule.rule.whileCaptures, r.captureIndices);
                lineTokens.produce(whileRule.stack, r.captureIndices[0].end);
                anchorPosition = r.captureIndices[0].end;
                if (r.captureIndices[0].end > linePos) {
                    linePos = r.captureIndices[0].end;
                    isFirstLine = false;
                }
            }
        }
        else {
            if (debug_1.DebugFlags.InDebugMode) {
                console.log('  popping ' + whileRule.rule.debugName + ' - ' + whileRule.rule.debugWhileRegExp);
            }
            stack = whileRule.stack.pop();
            break;
        }
    }
    return { stack: stack, linePos: linePos, anchorPosition: anchorPosition, isFirstLine: isFirstLine };
}
function _tokenizeString(grammar, lineText, isFirstLine, linePos, stack, lineTokens, checkWhileConditions) {
    var lineLength = lineText.content.length;
    var STOP = false;
    var anchorPosition = -1;
    if (checkWhileConditions) {
        var whileCheckResult = _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens);
        stack = whileCheckResult.stack;
        linePos = whileCheckResult.linePos;
        isFirstLine = whileCheckResult.isFirstLine;
        anchorPosition = whileCheckResult.anchorPosition;
    }
    while (!STOP) {
        scanNext(); // potentially modifies linePos && anchorPosition
    }
    function scanNext() {
        if (debug_1.DebugFlags.InDebugMode) {
            console.log('');
            console.log("@@scanNext " + linePos + ": |" + lineText.content.substr(linePos).replace(/\n$/, '\\n') + "|");
        }
        var r = matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
        if (!r) {
            if (debug_1.DebugFlags.InDebugMode) {
                console.log('  no more matches.');
            }
            // No match
            lineTokens.produce(stack, lineLength);
            STOP = true;
            return;
        }
        var captureIndices = r.captureIndices;
        var matchedRuleId = r.matchedRuleId;
        var hasAdvanced = (captureIndices && captureIndices.length > 0) ? (captureIndices[0].end > linePos) : false;
        if (matchedRuleId === -1) {
            // We matched the `end` for this rule => pop it
            var poppedRule = stack.getRule(grammar);
            if (debug_1.DebugFlags.InDebugMode) {
                console.log('  popping ' + poppedRule.debugName + ' - ' + poppedRule.debugEndRegExp);
            }
            lineTokens.produce(stack, captureIndices[0].start);
            stack = stack.setContentNameScopesList(stack.nameScopesList);
            handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, poppedRule.endCaptures, captureIndices);
            lineTokens.produce(stack, captureIndices[0].end);
            // pop
            var popped = stack;
            stack = stack.pop();
            anchorPosition = popped.getAnchorPos();
            if (!hasAdvanced && popped.getEnterPos() === linePos) {
                // Grammar pushed & popped a rule without advancing
                if (debug_1.DebugFlags.InDebugMode) {
                    console.error('[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing');
                }
                // See https://github.com/Microsoft/vscode-textmate/issues/12
                // Let's assume this was a mistake by the grammar author and the intent was to continue in this state
                stack = popped;
                lineTokens.produce(stack, lineLength);
                STOP = true;
                return;
            }
        }
        else {
            // We matched a rule!
            var _rule = grammar.getRule(matchedRuleId);
            lineTokens.produce(stack, captureIndices[0].start);
            var beforePush = stack;
            // push it on the stack rule
            var scopeName = _rule.getName(lineText.content, captureIndices);
            var nameScopesList = stack.contentNameScopesList.push(grammar, scopeName);
            stack = stack.push(matchedRuleId, linePos, anchorPosition, captureIndices[0].end === lineLength, null, nameScopesList, nameScopesList);
            if (_rule instanceof rule_1.BeginEndRule) {
                var pushedRule = _rule;
                if (debug_1.DebugFlags.InDebugMode) {
                    console.log('  pushing ' + pushedRule.debugName + ' - ' + pushedRule.debugBeginRegExp);
                }
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                anchorPosition = captureIndices[0].end;
                var contentName = pushedRule.getContentName(lineText.content, captureIndices);
                var contentNameScopesList = nameScopesList.push(grammar, contentName);
                stack = stack.setContentNameScopesList(contentNameScopesList);
                if (pushedRule.endHasBackReferences) {
                    stack = stack.setEndRule(pushedRule.getEndWithResolvedBackReferences(lineText.content, captureIndices));
                }
                if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
                    // Grammar pushed the same rule without advancing
                    if (debug_1.DebugFlags.InDebugMode) {
                        console.error('[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing');
                    }
                    stack = stack.pop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
            else if (_rule instanceof rule_1.BeginWhileRule) {
                var pushedRule = _rule;
                if (debug_1.DebugFlags.InDebugMode) {
                    console.log('  pushing ' + pushedRule.debugName);
                }
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                anchorPosition = captureIndices[0].end;
                var contentName = pushedRule.getContentName(lineText.content, captureIndices);
                var contentNameScopesList = nameScopesList.push(grammar, contentName);
                stack = stack.setContentNameScopesList(contentNameScopesList);
                if (pushedRule.whileHasBackReferences) {
                    stack = stack.setEndRule(pushedRule.getWhileWithResolvedBackReferences(lineText.content, captureIndices));
                }
                if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
                    // Grammar pushed the same rule without advancing
                    if (debug_1.DebugFlags.InDebugMode) {
                        console.error('[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing');
                    }
                    stack = stack.pop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
            else {
                var matchingRule = _rule;
                if (debug_1.DebugFlags.InDebugMode) {
                    console.log('  matched ' + matchingRule.debugName + ' - ' + matchingRule.debugMatchRegExp);
                }
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, matchingRule.captures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                // pop rule immediately since it is a MatchRule
                stack = stack.pop();
                if (!hasAdvanced) {
                    // Grammar is not advancing, nor is it pushing/popping
                    if (debug_1.DebugFlags.InDebugMode) {
                        console.error('[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping');
                    }
                    stack = stack.safePop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
        }
        if (captureIndices[0].end > linePos) {
            // Advance stream
            linePos = captureIndices[0].end;
            isFirstLine = false;
        }
    }
    return stack;
}
var StackElementMetadata = /** @class */ (function () {
    function StackElementMetadata() {
    }
    StackElementMetadata.toBinaryStr = function (metadata) {
        var r = metadata.toString(2);
        while (r.length < 32) {
            r = '0' + r;
        }
        return r;
    };
    StackElementMetadata.printMetadata = function (metadata) {
        var languageId = StackElementMetadata.getLanguageId(metadata);
        var tokenType = StackElementMetadata.getTokenType(metadata);
        var fontStyle = StackElementMetadata.getFontStyle(metadata);
        var foreground = StackElementMetadata.getForeground(metadata);
        var background = StackElementMetadata.getBackground(metadata);
        console.log({
            languageId: languageId,
            tokenType: tokenType,
            fontStyle: fontStyle,
            foreground: foreground,
            background: background,
        });
    };
    StackElementMetadata.getLanguageId = function (metadata) {
        return (metadata & 255 /* LANGUAGEID_MASK */) >>> 0 /* LANGUAGEID_OFFSET */;
    };
    StackElementMetadata.getTokenType = function (metadata) {
        return (metadata & 1792 /* TOKEN_TYPE_MASK */) >>> 8 /* TOKEN_TYPE_OFFSET */;
    };
    StackElementMetadata.getFontStyle = function (metadata) {
        return (metadata & 14336 /* FONT_STYLE_MASK */) >>> 11 /* FONT_STYLE_OFFSET */;
    };
    StackElementMetadata.getForeground = function (metadata) {
        return (metadata & 8372224 /* FOREGROUND_MASK */) >>> 14 /* FOREGROUND_OFFSET */;
    };
    StackElementMetadata.getBackground = function (metadata) {
        return (metadata & 4286578688 /* BACKGROUND_MASK */) >>> 23 /* BACKGROUND_OFFSET */;
    };
    StackElementMetadata.set = function (metadata, languageId, tokenType, fontStyle, foreground, background) {
        var _languageId = StackElementMetadata.getLanguageId(metadata);
        var _tokenType = StackElementMetadata.getTokenType(metadata);
        var _fontStyle = StackElementMetadata.getFontStyle(metadata);
        var _foreground = StackElementMetadata.getForeground(metadata);
        var _background = StackElementMetadata.getBackground(metadata);
        if (languageId !== 0) {
            _languageId = languageId;
        }
        if (tokenType !== 0 /* Other */) {
            _tokenType = tokenType === 8 /* MetaEmbedded */ ? 0 /* Other */ : tokenType;
        }
        if (fontStyle !== -1 /* NotSet */) {
            _fontStyle = fontStyle;
        }
        if (foreground !== 0) {
            _foreground = foreground;
        }
        if (background !== 0) {
            _background = background;
        }
        return ((_languageId << 0 /* LANGUAGEID_OFFSET */)
            | (_tokenType << 8 /* TOKEN_TYPE_OFFSET */)
            | (_fontStyle << 11 /* FONT_STYLE_OFFSET */)
            | (_foreground << 14 /* FOREGROUND_OFFSET */)
            | (_background << 23 /* BACKGROUND_OFFSET */)) >>> 0;
    };
    return StackElementMetadata;
}());
exports.StackElementMetadata = StackElementMetadata;
var ScopeListElement = /** @class */ (function () {
    function ScopeListElement(parent, scope, metadata) {
        this.parent = parent;
        this.scope = scope;
        this.metadata = metadata;
    }
    ScopeListElement._equals = function (a, b) {
        do {
            if (a === b) {
                return true;
            }
            if (!a && !b) {
                // End of list reached for both
                return true;
            }
            if (!a || !b) {
                // End of list reached only for one
                return false;
            }
            if (a.scope !== b.scope || a.metadata !== b.metadata) {
                return false;
            }
            // Go to previous pair
            a = a.parent;
            b = b.parent;
        } while (true);
    };
    ScopeListElement.prototype.equals = function (other) {
        return ScopeListElement._equals(this, other);
    };
    ScopeListElement._matchesScope = function (scope, selector, selectorWithDot) {
        return (selector === scope || scope.substring(0, selectorWithDot.length) === selectorWithDot);
    };
    ScopeListElement._matches = function (target, parentScopes) {
        if (parentScopes === null) {
            return true;
        }
        var len = parentScopes.length;
        var index = 0;
        var selector = parentScopes[index];
        var selectorWithDot = selector + '.';
        while (target) {
            if (this._matchesScope(target.scope, selector, selectorWithDot)) {
                index++;
                if (index === len) {
                    return true;
                }
                selector = parentScopes[index];
                selectorWithDot = selector + '.';
            }
            target = target.parent;
        }
        return false;
    };
    ScopeListElement.mergeMetadata = function (metadata, scopesList, source) {
        if (source === null) {
            return metadata;
        }
        var fontStyle = -1 /* NotSet */;
        var foreground = 0;
        var background = 0;
        if (source.themeData !== null) {
            // Find the first themeData that matches
            for (var i = 0, len = source.themeData.length; i < len; i++) {
                var themeData = source.themeData[i];
                if (this._matches(scopesList, themeData.parentScopes)) {
                    fontStyle = themeData.fontStyle;
                    foreground = themeData.foreground;
                    background = themeData.background;
                    break;
                }
            }
        }
        return StackElementMetadata.set(metadata, source.languageId, source.tokenType, fontStyle, foreground, background);
    };
    ScopeListElement._push = function (target, grammar, scopes) {
        for (var i = 0, len = scopes.length; i < len; i++) {
            var scope = scopes[i];
            var rawMetadata = grammar.getMetadataForScope(scope);
            var metadata = ScopeListElement.mergeMetadata(target.metadata, target, rawMetadata);
            target = new ScopeListElement(target, scope, metadata);
        }
        return target;
    };
    ScopeListElement.prototype.push = function (grammar, scope) {
        if (scope === null) {
            return this;
        }
        if (scope.indexOf(' ') >= 0) {
            // there are multiple scopes to push
            return ScopeListElement._push(this, grammar, scope.split(/ /g));
        }
        // there is a single scope to push
        return ScopeListElement._push(this, grammar, [scope]);
    };
    ScopeListElement._generateScopes = function (scopesList) {
        var result = [];
        var resultLen = 0;
        while (scopesList) {
            result[resultLen++] = scopesList.scope;
            scopesList = scopesList.parent;
        }
        result.reverse();
        return result;
    };
    ScopeListElement.prototype.generateScopes = function () {
        return ScopeListElement._generateScopes(this);
    };
    return ScopeListElement;
}());
exports.ScopeListElement = ScopeListElement;
/**
 * Represents a "pushed" state on the stack (as a linked list element).
 */
var StackElement = /** @class */ (function () {
    function StackElement(parent, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
        this.parent = parent;
        this.depth = (this.parent ? this.parent.depth + 1 : 1);
        this.ruleId = ruleId;
        this._enterPos = enterPos;
        this._anchorPos = anchorPos;
        this.beginRuleCapturedEOL = beginRuleCapturedEOL;
        this.endRule = endRule;
        this.nameScopesList = nameScopesList;
        this.contentNameScopesList = contentNameScopesList;
    }
    /**
     * A structural equals check. Does not take into account `scopes`.
     */
    StackElement._structuralEquals = function (a, b) {
        do {
            if (a === b) {
                return true;
            }
            if (!a && !b) {
                // End of list reached for both
                return true;
            }
            if (!a || !b) {
                // End of list reached only for one
                return false;
            }
            if (a.depth !== b.depth || a.ruleId !== b.ruleId || a.endRule !== b.endRule) {
                return false;
            }
            // Go to previous pair
            a = a.parent;
            b = b.parent;
        } while (true);
    };
    StackElement._equals = function (a, b) {
        if (a === b) {
            return true;
        }
        if (!this._structuralEquals(a, b)) {
            return false;
        }
        return a.contentNameScopesList.equals(b.contentNameScopesList);
    };
    StackElement.prototype.clone = function () {
        return this;
    };
    StackElement.prototype.equals = function (other) {
        if (other === null) {
            return false;
        }
        return StackElement._equals(this, other);
    };
    StackElement._reset = function (el) {
        while (el) {
            el._enterPos = -1;
            el._anchorPos = -1;
            el = el.parent;
        }
    };
    StackElement.prototype.reset = function () {
        StackElement._reset(this);
    };
    StackElement.prototype.pop = function () {
        return this.parent;
    };
    StackElement.prototype.safePop = function () {
        if (this.parent) {
            return this.parent;
        }
        return this;
    };
    StackElement.prototype.push = function (ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
        return new StackElement(this, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList);
    };
    StackElement.prototype.getEnterPos = function () {
        return this._enterPos;
    };
    StackElement.prototype.getAnchorPos = function () {
        return this._anchorPos;
    };
    StackElement.prototype.getRule = function (grammar) {
        return grammar.getRule(this.ruleId);
    };
    StackElement.prototype._writeString = function (res, outIndex) {
        if (this.parent) {
            outIndex = this.parent._writeString(res, outIndex);
        }
        res[outIndex++] = "(" + this.ruleId + ", TODO-" + this.nameScopesList + ", TODO-" + this.contentNameScopesList + ")";
        return outIndex;
    };
    StackElement.prototype.toString = function () {
        var r = [];
        this._writeString(r, 0);
        return '[' + r.join(',') + ']';
    };
    StackElement.prototype.setContentNameScopesList = function (contentNameScopesList) {
        if (this.contentNameScopesList === contentNameScopesList) {
            return this;
        }
        return this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, contentNameScopesList);
    };
    StackElement.prototype.setEndRule = function (endRule) {
        if (this.endRule === endRule) {
            return this;
        }
        return new StackElement(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, endRule, this.nameScopesList, this.contentNameScopesList);
    };
    StackElement.prototype.hasSameRuleAs = function (other) {
        return this.ruleId === other.ruleId;
    };
    StackElement.NULL = new StackElement(null, 0, 0, 0, false, null, null, null);
    return StackElement;
}());
exports.StackElement = StackElement;
var LocalStackElement = /** @class */ (function () {
    function LocalStackElement(scopes, endPos) {
        this.scopes = scopes;
        this.endPos = endPos;
    }
    return LocalStackElement;
}());
exports.LocalStackElement = LocalStackElement;
var LineTokens = /** @class */ (function () {
    function LineTokens(emitBinaryTokens, lineText, tokenTypeOverrides) {
        this._emitBinaryTokens = emitBinaryTokens;
        this._tokenTypeOverrides = tokenTypeOverrides;
        if (debug_1.DebugFlags.InDebugMode) {
            this._lineText = lineText;
        }
        else {
            this._lineText = null;
        }
        this._tokens = [];
        this._binaryTokens = [];
        this._lastTokenEndIndex = 0;
    }
    LineTokens.prototype.produce = function (stack, endIndex) {
        this.produceFromScopes(stack.contentNameScopesList, endIndex);
    };
    LineTokens.prototype.produceFromScopes = function (scopesList, endIndex) {
        if (this._lastTokenEndIndex >= endIndex) {
            return;
        }
        if (this._emitBinaryTokens) {
            var metadata = scopesList.metadata;
            for (var _i = 0, _a = this._tokenTypeOverrides; _i < _a.length; _i++) {
                var tokenType = _a[_i];
                if (tokenType.matcher(scopesList.generateScopes())) {
                    metadata = StackElementMetadata.set(metadata, 0, toTemporaryType(tokenType.type), -1 /* NotSet */, 0, 0);
                }
            }
            if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === metadata) {
                // no need to push a token with the same metadata
                this._lastTokenEndIndex = endIndex;
                return;
            }
            this._binaryTokens.push(this._lastTokenEndIndex);
            this._binaryTokens.push(metadata);
            this._lastTokenEndIndex = endIndex;
            return;
        }
        var scopes = scopesList.generateScopes();
        if (debug_1.DebugFlags.InDebugMode) {
            console.log('  token: |' + this._lineText.substring(this._lastTokenEndIndex, endIndex).replace(/\n$/, '\\n') + '|');
            for (var k = 0; k < scopes.length; k++) {
                console.log('      * ' + scopes[k]);
            }
        }
        this._tokens.push({
            startIndex: this._lastTokenEndIndex,
            endIndex: endIndex,
            // value: lineText.substring(lastTokenEndIndex, endIndex),
            scopes: scopes
        });
        this._lastTokenEndIndex = endIndex;
    };
    LineTokens.prototype.getResult = function (stack, lineLength) {
        if (this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === lineLength - 1) {
            // pop produced token for newline
            this._tokens.pop();
        }
        if (this._tokens.length === 0) {
            this._lastTokenEndIndex = -1;
            this.produce(stack, lineLength);
            this._tokens[this._tokens.length - 1].startIndex = 0;
        }
        return this._tokens;
    };
    LineTokens.prototype.getBinaryResult = function (stack, lineLength) {
        if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === lineLength - 1) {
            // pop produced token for newline
            this._binaryTokens.pop();
            this._binaryTokens.pop();
        }
        if (this._binaryTokens.length === 0) {
            this._lastTokenEndIndex = -1;
            this.produce(stack, lineLength);
            this._binaryTokens[this._binaryTokens.length - 2] = 0;
        }
        var result = new Uint32Array(this._binaryTokens.length);
        for (var i = 0, len = this._binaryTokens.length; i < len; i++) {
            result[i] = this._binaryTokens[i];
        }
        return result;
    };
    return LineTokens;
}());
function toTemporaryType(standardType) {
    switch (standardType) {
        case 4 /* RegEx */:
            return 4 /* RegEx */;
        case 2 /* String */:
            return 2 /* String */;
        case 1 /* Comment */:
            return 1 /* Comment */;
        case 0 /* Other */:
        default:
            // `MetaEmbedded` is the same scope as `Other`
            // but it overwrites existing token types in the stack.
            return 8 /* MetaEmbedded */;
    }
}
//# sourceMappingURL=grammar.js.map
});
$load('./registry', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
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
var grammar_1 = require("./grammar");
var onigLibs_1 = require("./onigLibs");
var SyncRegistry = /** @class */ (function () {
    function SyncRegistry(theme, onigLibPromise) {
        this._theme = theme;
        this._grammars = {};
        this._rawGrammars = {};
        this._injectionGrammars = {};
        this._onigLibPromise = onigLibPromise || onigLibs_1.getOniguruma();
    }
    SyncRegistry.prototype.setTheme = function (theme) {
        var _this = this;
        this._theme = theme;
        Object.keys(this._grammars).forEach(function (scopeName) {
            var grammar = _this._grammars[scopeName];
            grammar.onDidChangeTheme();
        });
    };
    SyncRegistry.prototype.getColorMap = function () {
        return this._theme.getColorMap();
    };
    /**
     * Add `grammar` to registry and return a list of referenced scope names
     */
    SyncRegistry.prototype.addGrammar = function (grammar, injectionScopeNames) {
        this._rawGrammars[grammar.scopeName] = grammar;
        if (injectionScopeNames) {
            this._injectionGrammars[grammar.scopeName] = injectionScopeNames;
        }
    };
    /**
     * Lookup a raw grammar.
     */
    SyncRegistry.prototype.lookup = function (scopeName) {
        return this._rawGrammars[scopeName];
    };
    /**
     * Returns the injections for the given grammar
     */
    SyncRegistry.prototype.injections = function (targetScope) {
        return this._injectionGrammars[targetScope];
    };
    /**
     * Get the default theme settings
     */
    SyncRegistry.prototype.getDefaults = function () {
        return this._theme.getDefaults();
    };
    /**
     * Match a scope in the theme.
     */
    SyncRegistry.prototype.themeMatch = function (scopeName) {
        return this._theme.match(scopeName);
    };
    /**
     * Lookup a grammar.
     */
    SyncRegistry.prototype.grammarForScopeName = function (scopeName, initialLanguage, embeddedLanguages, tokenTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var rawGrammar, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!this._grammars[scopeName]) return [3 /*break*/, 2];
                        rawGrammar = this._rawGrammars[scopeName];
                        if (!rawGrammar) {
                            return [2 /*return*/, null];
                        }
                        _a = this._grammars;
                        _b = scopeName;
                        _c = grammar_1.createGrammar;
                        _d = [rawGrammar, initialLanguage, embeddedLanguages, tokenTypes, this];
                        return [4 /*yield*/, this._onigLibPromise];
                    case 1:
                        _a[_b] = _c.apply(void 0, _d.concat([_e.sent()]));
                        _e.label = 2;
                    case 2: return [2 /*return*/, this._grammars[scopeName]];
                }
            });
        });
    };
    return SyncRegistry;
}());
exports.SyncRegistry = SyncRegistry;
//# sourceMappingURL=registry.js.map
});
$load('./main', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
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
var registry_1 = require("./registry");
var grammarReader = require("./grammarReader");
var theme_1 = require("./theme");
var grammar_1 = require("./grammar");
/**
 * The registry that will hold all grammars.
 */
var Registry = /** @class */ (function () {
    function Registry(locator) {
        var _this = this;
        if (locator === void 0) { locator = { loadGrammar: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, null];
            }); }); } }; }
        this._locator = locator;
        this._syncRegistry = new registry_1.SyncRegistry(theme_1.Theme.createFromRawTheme(locator.theme, locator.colorMap), locator.getOnigLib && locator.getOnigLib());
        this._ensureGrammarCache = new Map();
    }
    /**
     * Change the theme. Once called, no previous `ruleStack` should be used anymore.
     */
    Registry.prototype.setTheme = function (theme, colorMap) {
        this._syncRegistry.setTheme(theme_1.Theme.createFromRawTheme(theme, colorMap));
    };
    /**
     * Returns a lookup array for color ids.
     */
    Registry.prototype.getColorMap = function () {
        return this._syncRegistry.getColorMap();
    };
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    Registry.prototype.loadGrammarWithEmbeddedLanguages = function (initialScopeName, initialLanguage, embeddedLanguages) {
        return this.loadGrammarWithConfiguration(initialScopeName, initialLanguage, { embeddedLanguages: embeddedLanguages });
    };
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    Registry.prototype.loadGrammarWithConfiguration = function (initialScopeName, initialLanguage, configuration) {
        return this._loadGrammar(initialScopeName, initialLanguage, configuration.embeddedLanguages, configuration.tokenTypes);
    };
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     */
    Registry.prototype.loadGrammar = function (initialScopeName) {
        return this._loadGrammar(initialScopeName, 0, null, null);
    };
    Registry.prototype._doLoadSingleGrammar = function (scopeName) {
        return __awaiter(this, void 0, void 0, function () {
            var grammar, injections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._locator.loadGrammar(scopeName)];
                    case 1:
                        grammar = _a.sent();
                        if (grammar) {
                            injections = (typeof this._locator.getInjections === 'function' ? this._locator.getInjections(scopeName) : undefined);
                            this._syncRegistry.addGrammar(grammar, injections);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Registry.prototype._loadSingleGrammar = function (scopeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._ensureGrammarCache.has(scopeName)) {
                    this._ensureGrammarCache.set(scopeName, this._doLoadSingleGrammar(scopeName));
                }
                return [2 /*return*/, this._ensureGrammarCache.get(scopeName)];
            });
        });
    };
    Registry.prototype._collectDependenciesForDep = function (initialScopeName, result, dep) {
        var grammar = this._syncRegistry.lookup(dep.scopeName);
        if (!grammar) {
            if (dep.scopeName === initialScopeName) {
                throw new Error("No grammar provided for <" + initialScopeName + ">");
            }
            return;
        }
        if (dep instanceof grammar_1.FullScopeDependency) {
            grammar_1.collectDependencies(result, this._syncRegistry.lookup(initialScopeName), grammar);
        }
        else {
            grammar_1.collectSpecificDependencies(result, this._syncRegistry.lookup(initialScopeName), grammar, dep.include);
        }
        var injections = this._syncRegistry.injections(dep.scopeName);
        if (injections) {
            for (var _i = 0, injections_1 = injections; _i < injections_1.length; _i++) {
                var injection = injections_1[_i];
                result.add(new grammar_1.FullScopeDependency(injection));
            }
        }
    };
    Registry.prototype._loadGrammar = function (initialScopeName, initialLanguage, embeddedLanguages, tokenTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var seenFullScopeRequests, seenPartialScopeRequests, Q, q, deps, _i, q_1, dep, _a, _b, dep, _c, _d, dep;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        seenFullScopeRequests = new Set();
                        seenPartialScopeRequests = new Set();
                        seenFullScopeRequests.add(initialScopeName);
                        Q = [new grammar_1.FullScopeDependency(initialScopeName)];
                        _e.label = 1;
                    case 1:
                        if (!(Q.length > 0)) return [3 /*break*/, 3];
                        q = Q;
                        Q = [];
                        return [4 /*yield*/, Promise.all(q.map(function (request) { return _this._loadSingleGrammar(request.scopeName); }))];
                    case 2:
                        _e.sent();
                        deps = new grammar_1.ScopeDependencyCollector();
                        for (_i = 0, q_1 = q; _i < q_1.length; _i++) {
                            dep = q_1[_i];
                            this._collectDependenciesForDep(initialScopeName, deps, dep);
                        }
                        for (_a = 0, _b = deps.full; _a < _b.length; _a++) {
                            dep = _b[_a];
                            if (seenFullScopeRequests.has(dep.scopeName)) {
                                // already processed
                                continue;
                            }
                            seenFullScopeRequests.add(dep.scopeName);
                            Q.push(dep);
                        }
                        for (_c = 0, _d = deps.partial; _c < _d.length; _c++) {
                            dep = _d[_c];
                            if (seenFullScopeRequests.has(dep.scopeName)) {
                                // already processed in full
                                continue;
                            }
                            if (seenPartialScopeRequests.has(dep.toKey())) {
                                // already processed
                                continue;
                            }
                            seenPartialScopeRequests.add(dep.toKey());
                            Q.push(dep);
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, this.grammarForScopeName(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes)];
                }
            });
        });
    };
    /**
     * Adds a rawGrammar.
     */
    Registry.prototype.addGrammar = function (rawGrammar, injections, initialLanguage, embeddedLanguages) {
        if (injections === void 0) { injections = []; }
        if (initialLanguage === void 0) { initialLanguage = 0; }
        if (embeddedLanguages === void 0) { embeddedLanguages = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._syncRegistry.addGrammar(rawGrammar, injections);
                        return [4 /*yield*/, this.grammarForScopeName(rawGrammar.scopeName, initialLanguage, embeddedLanguages)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    /**
     * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
     */
    Registry.prototype.grammarForScopeName = function (scopeName, initialLanguage, embeddedLanguages, tokenTypes) {
        if (initialLanguage === void 0) { initialLanguage = 0; }
        if (embeddedLanguages === void 0) { embeddedLanguages = null; }
        if (tokenTypes === void 0) { tokenTypes = null; }
        return this._syncRegistry.grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes);
    };
    return Registry;
}());
exports.Registry = Registry;
exports.INITIAL = grammar_1.StackElement.NULL;
exports.parseRawGrammar = grammarReader.parseRawGrammar;
//# sourceMappingURL=main.js.map
});

return $map['./main'].exports;;
});
/* WEBPACK VAR INJECTION */}.call(this, "/", __webpack_require__(/*! ./../../process/browser.js */ "../node_modules/process/browser.js")))

/***/ })

}]);
//# sourceMappingURL=24.bundle.js.map