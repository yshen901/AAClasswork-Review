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

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Compose)\n/* harmony export */ });\n/* harmony import */ var _render_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_util */ \"./src/render_util.js\");\n\n\nclass Compose {\n  constructor(messageStore) {\n    this.messageStore = messageStore;\n  }\n\n  renderForm() {\n    let draft = this.messageStore.getMessageDraft();\n    return `\n      ${_render_util__WEBPACK_IMPORTED_MODULE_0__.RenderUtil.generateHTML('p', 'new-message-header', 'New Message')}\n      ${_render_util__WEBPACK_IMPORTED_MODULE_0__.RenderUtil.generateHTML('form', 'compose-form', `\n        <input placeholder=\"Recipient\" name=\"to\" type=\"text\" value=\"${draft.to}\"></input>\n        <input placeholder=\"Subject\" name=\"subject\" type=\"text\" value=\"${draft.subject}\"></input>  \n        <textarea name=\"body\" rows=20>${draft.body}</textarea>\n        <button type=\"submit\" class=\"btn btn-primary submit-message\">Send</button>\n      `)}\n    `;\n  }\n\n  render() {\n    let page = document.createElement(\"div\");\n    page.className = \"new-message\";\n    page.innerHTML = this.renderForm();\n\n    page.addEventListener(\"change\", e => {\n      let name = e.target.name;\n      let value = e.target.value;\n\n      this.messageStore.updateDraftField(name, value);\n    });\n\n    page.addEventListener(\"submit\", e => {\n      e.preventDefault();\n      this.messageStore.sendDraft();\n      window.location.hash = \"#inbox\";\n    });\n\n    return page;\n  }\n}\n\n//# sourceURL=webpack://mail/./src/compose.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Inbox)\n/* harmony export */ });\nclass Inbox {\n  constructor(messageStore) {\n    this.messageStore = messageStore;\n    this.messages = this.messageStore.getInboxMessages()\n    this.render();\n  }\n\n  render() {\n    let messagesList = document.createElement(\"ul\");\n    messagesList.className = \"messages\";\n\n    let message;\n    for (let i = 0; i < this.messages.length; i++) {\n      message = this.messageStore.renderMessage(this.messages[i], \"from\");\n      messagesList.appendChild(message);\n    }\n\n    return messagesList;\n  }\n}\n\n//# sourceURL=webpack://mail/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n/* harmony import */ var _sent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sent */ \"./src/sent.js\");\n/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compose */ \"./src/compose.js\");\n\n\n\n\n\nlet routes = {\n  inbox: _inbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  sent: _sent__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  compose: _compose__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Add event listener to detect clicks in the NAV panel\n  const sidebarNavs = document.querySelectorAll(\".sidebar-nav\");\n  const sidebarCB = (e) => {\n    if (e.target.tagName === \"A\" || e.target.tagName === \"BUTTON\") {\n      e.stopPropagation();\n      e.preventDefault();\n\n      let innerText = e.target.innerText.toLowerCase();\n      window.location.hash = innerText;\n    }\n  }\n  for (let i = 0; i < sidebarNavs.length; i++) {\n    sidebarNavs[i].addEventListener(\"click\", sidebarCB);\n  }\n\n  // Add router to the content page to tie it to the hash\n  const content = document.querySelector('.content');\n  const router = new _router__WEBPACK_IMPORTED_MODULE_0__[\"default\"](content, routes);\n});\n\n//# sourceURL=webpack://mail/./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MessageStore)\n/* harmony export */ });\n/* harmony import */ var _render_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_util */ \"./src/render_util.js\");\n\n\nlet messagesSeed = {\n  sent: [\n    {\n      to: \"friend@mail.com\",\n      subject: \"Check this out\",\n      body: \"It's so cool\"\n    },\n    { to: \"person@mail.com\", subject: \"zzz\", body: \"so booring\" }\n  ],\n  inbox: [\n    {\n      from: \"grandma@mail.com\",\n      subject: \"Fwd: Fwd: Fwd: Check this out\",\n      body:\n        \"Stay at home mom discovers cure for leg cramps. Doctors hate her\"\n    },\n    {\n      from: \"person@mail.com\",\n      subject: \"Questionnaire\",\n      body: \"Take this free quiz win $1000 dollars\"\n    }\n  ]\n};\n\nclass MessageStore {\n  constructor() {\n    this.messages = messagesSeed;\n    this.messageDraft = new Message();\n  }\n\n  getInboxMessages() {\n    return this.messages.inbox;\n  }\n\n  getSentMessages() {\n    return this.messages.sent;\n  }\n\n  renderMessage(message, source) {\n    let li = document.createElement(\"li\");\n    li.className = \"message\";\n    li.innerHTML = `\n      ${_render_util__WEBPACK_IMPORTED_MODULE_0__.RenderUtil.generateHTML(\"span\", source, message[source])}\n      ${_render_util__WEBPACK_IMPORTED_MODULE_0__.RenderUtil.generateHTML(\"span\", \"subject\", message.subject)}\n      ${_render_util__WEBPACK_IMPORTED_MODULE_0__.RenderUtil.generateHTML(\"span\", \"body\", message.body)}\n    `\n\n    return li;\n  }\n\n  getMessageDraft() {\n    return this.messageDraft;\n  }\n\n  updateDraftField(field, value) {\n    this.messageDraft[field] = value;\n  }\n\n  sendDraft() {\n    this.messages.sent.push({\n      to: this.messageDraft.to,\n      subject: this.messageDraft.subject,\n      body: this.messageDraft.body\n    });\n    debugger;\n    this.messageDraft = new Message();\n  }\n}\n\nclass Message {\n  constructor(to, subject, body) {\n    this.to = to || \"\";\n    this.subject = subject || \"\";\n    this.body = body || \"\";\n  }\n}\n\n//# sourceURL=webpack://mail/./src/message_store.js?");

/***/ }),

/***/ "./src/render_util.js":
/*!****************************!*\
  !*** ./src/render_util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderUtil\": () => (/* binding */ RenderUtil)\n/* harmony export */ });\nconst RenderUtil = {\n  generateHTML: (tag, className, text) => {\n    return `<${tag} class=\"${className}\">${text}</${tag}>`\n  }\n}\n\n//# sourceURL=webpack://mail/./src/render_util.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _message_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\n\nclass Router {\n  constructor(node, routes) {\n    this.node = node; //node is a DOMNode that we will edit\n    this.routes = routes;\n\n    this.messageStore = new _message_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    this.start();\n  }\n\n  start() {\n    this.render();\n    window.addEventListener(\"hashchange\", () => {\n      this.render();\n    });\n  }\n\n  activeRoute() {\n    let currentRoute = window.location.hash.slice(1); //remove # from hash\n\n    // Return null if no valid component for hash, otherwise return component instance\n    if (!this.routes[currentRoute])\n      return null;\n    return new this.routes[currentRoute](this.messageStore)\n  }\n\n  render() {\n    //clear node and get current route\n    let component = this.activeRoute();\n    this.node.innerHTML = \"\"; \n\n    if (component)\n      this.node.appendChild(component.render());\n  }\n}\n\n//# sourceURL=webpack://mail/./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sent)\n/* harmony export */ });\nclass Sent {\n  constructor(messageStore) {\n    this.messageStore = messageStore;\n    this.messages = this.messageStore.getSentMessages();\n    this.render();\n  }\n\n  render() {\n    let messagesList = document.createElement(\"ul\");\n    messagesList.className = \"messages\";\n\n    let message;\n    for (let i = 0; i < this.messages.length; i++) {\n      message = this.messageStore.renderMessage(this.messages[i], \"to\");\n      messagesList.appendChild(message);\n    }\n\n    return messagesList;\n  }\n}\n\n//# sourceURL=webpack://mail/./src/sent.js?");

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