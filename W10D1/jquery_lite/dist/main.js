/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOMNodeCollection)\n/* harmony export */ });\nclass DOMNodeCollection {\n  constructor(elements) {\n    this.htmlElements = elements;\n  }\n\n  // Returns innerHTML for no-arg, or sets innerHTML for str-arg\n  html(str) {\n    if (this.htmlElements.length == 0)\n      return null;\n    \n    if (str === undefined) {\n      return this.htmlElements[0].innerHTML;\n    }\n    else {\n      for (let i = 0; i < this.htmlElements.length; i++)\n        this.htmlElements[i].innerHTML = str;\n    }\n  }\n\n  // Sets all nodes' html to nothing\n  empty() {\n    for (let i = 0; i < this.htmlElements.length; i++) \n      this.htmlElements[i].innerHTML = \"\";\n  }\n\n  // Appends a string, HTMLELement.outerHTML, or array of HTMLElements'\n  // outerHTMLs to each node. \n  append(arg) {\n    if (arg instanceof String || typeof arg === 'string') {\n      for (let i = 0; i < this.htmlElements.length; i++)\n        this.htmlElements[i].innerHTML += arg;\n    }\n    else if (arg instanceof HTMLElement) {\n      for (let i = 0; i < this.htmlElements.length; i++) \n        this.htmlElements[i].innerHTML += arg.outerHTML;\n    }\n    else if (arg instanceof DOMNodeCollection) {\n      for (let i = 0; i < this.htmlElements.length; i++) \n        this.htmlElements[i].innerHTML += arg.outerHTML();\n    }\n  }\n\n  attr() {\n\n  }\n\n  addClass() {\n\n  }\n\n  removeCLass() {\n\n  }\n\n  // HELPER FUNCTIONS\n  // Outputs a string of all of the outerHTML of all elements\n  outerHTML() {\n    let str = \"\";\n    for (let i = 0; i < this.htmlElements.length; i++)\n      str += this.htmlElements[i].outerHTML;\n\n    return str;\n  }\n}\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n\n/*\n  Core function.\n    1. String indicates a CSS selector to identify nodes in the page\n    2. Uses Document.querySelectorAll() to make a NodeList\n    3. Convert to array then pass it on\n*/\nwindow.$l = (arg) => {\n  if (typeof arg === \"string\" || arg instanceof String) {\n    let elements = document.querySelectorAll(arg);\n    let elementArray = Array.from(elements);\n    return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"](elementArray);\n  }\n  else if (arg instanceof HTMLElement) {\n    return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([arg]);\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;