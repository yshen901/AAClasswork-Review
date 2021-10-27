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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Asteroid)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nclass Asteroid extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({pos}) {\n    super({\n      pos: pos,\n      vel: _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].randomVec(50),\n      color: \"white\",\n      radius: 5,\n    });\n  };\n}\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONSTANTS\": () => (/* binding */ CONSTANTS),\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nconst CONSTANTS = {\n  DIM_X: 640,\n  DIM_Y: 640,\n  NUM_ASTEROIDS: 4\n};\n\nclass Game {\n  constructor() {\n    this.asteroids = [];\n    this.addAsteroids();\n  }\n\n  addAsteroids() {\n    for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++) {\n      this.asteroids.push( new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        pos: this.randomPosition()\n      }));\n    }\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n\n    for (let i = 0; i < this.asteroids.length; i++)\n      this.asteroids[i].draw(ctx);\n  }\n\n  randomPosition() {\n    return [\n      CONSTANTS.DIM_X * Math.random(),\n      CONSTANTS.DIM_Y * Math.random()\n    ];\n  }\n\n  moveObjects() {\n    for (let i = 0; i < this.asteroids.length; i++) \n      this.asteroids[i].move();\n  }\n\n  checkCollisions() {\n    for (let i = 0; i < this.asteroids.length; i++) {\n      for (let j = i+1; j < this.asteroids.length; j++) {\n        if (this.asteroids[i].collidesWith(this.asteroids[j])) {\n          debugger;\n          this.remove(j);\n          this.remove(i);\n          i--;\n          break;\n        }\n      }\n    }\n  }\n\n  remove(idx) {\n    this.asteroids.splice(idx, 1);\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameView)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  start() {\n    setInterval(() => {\n      this.game.moveObjects();\n      this.game.checkCollisions(); \n      this.game.draw(this.ctx);\n    }, 20);\n  }\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvas = document.getElementById(\"game-canvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let circle = new _moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    pos: [50,50],\n    vel: 0,\n    radius: 10,\n    color: \"red\"\n  });\n\n  circle.draw(ctx);\n\n  let asteroid = new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    pos: [20,20]\n  });\n  asteroid.draw(ctx);\n\n  let gameView = new _game_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx);\n  gameView.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovingObject)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nclass MovingObject {\n  constructor({pos, vel, radius, color}) {\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n      this.pos[0],\n      this.pos[1],\n      this.radius,\n      0,\n      2 * Math.PI,\n      false\n    )\n\n    ctx.fill();\n  }\n\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    this.pos[0] += _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DIM_X;\n    this.pos[0] %= _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DIM_X;\n\n    this.pos[1] += _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DIM_Y;\n    this.pos[1] %= _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DIM_Y;\n  }\n\n  collidesWith(otherObject) {\n    return _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].distanceBetween(this.pos, otherObject.pos) < this.radius + otherObject.radius\n  }\n}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return [Math.sin(deg) * length, Math.cos(deg) * length];\n  },\n  distanceBetween(pos1, pos2) {\n    return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));\n  }\n});\n\n//# sourceURL=webpack:///./src/util.js?");

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