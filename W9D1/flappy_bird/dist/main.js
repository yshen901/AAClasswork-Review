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

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bird)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass Bird {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n\n    this.positionX = this.dimensions.width / 3;\n    this.positionY = this.dimensions.height / 2;\n\n    this.velocity = 0;\n  }\n\n  drawBird(ctx) {\n    ctx.fillStyle = 'yellow';\n    ctx.fillRect(this.positionX-20, this.positionY-15, 40, 30);\n  }\n\n  animate(ctx) {\n    this.move();\n    this.drawBird(ctx);\n  }\n\n  move() {\n    this.positionY += this.velocity;\n    this.velocity += _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.gravity;\n  }\n\n  flap() {\n    this.velocity = -8;\n  }\n\n  getBounds() {\n    return {\n      topLeft: [this.positionX - 15 - _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.hitBoxAdjustment, this.positionY - 20 - _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.hitBoxAdjustment],\n      bottomRight: [this.positionX + 15 + _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.hitBoxAdjustment, this.positionY + 20 + _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.hitBoxAdjustment]\n    };\n  }\n}\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONSTANTS\": () => (/* binding */ CONSTANTS),\n/* harmony export */   \"default\": () => (/* binding */ FlappyBird)\n/* harmony export */ });\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\n\nconst CONSTANTS = {\n  gravity: 0.5,\n  pipeGap: 150,\n  pipeInterval: 220,\n  pipeSpeed: -5,\n  pipeWidth: 20,\n  hitBoxAdjustment: -3\n}\n\nclass FlappyBird {\n  constructor(canvas){\n    this.canvas = canvas;\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n\n    this.animate = this.animate.bind(this);\n    this.click = this.click.bind(this);\n\n    this.dead = false;\n  }\n\n  click() {\n    if (this.dead) \n      this.restart();\n    else if (!this.running)\n      this.play();\n    this.bird.flap();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.bird.animate(this.ctx);\n\n    if (this.level.collidesWith(this.bird.getBounds()))\n      this.gameOver();\n    \n    if (this.running)\n      requestAnimationFrame(this.animate);\n  }\n\n  restart() {\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.running = false;\n    this.dead = false;\n\n    this.animate();\n  }\n\n  gameOver() {\n    this.dead = true;\n    this.running = false;\n\n    this.level.printFinalScore(this.ctx);\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('bird-game');\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ncanvas.addEventListener(\"mousedown\", () => game.click());\ngame.restart();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.pipes = [];\n\n    this.resetLevel();\n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n\n    this.movePipes();\n    this.drawPipes(ctx);\n    \n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n\n    ctx.fillStyle = \"black\";\n    ctx.font = \"24px Arial\";\n    ctx.fillText(this.score, 12, 30);\n  }\n\n  drawPipes(ctx) {\n    let pipe;\n\n    ctx.fillStyle = 'red';\n    for (let i = 0; i < 3; i++) {\n      pipe = this.pipes[i];\n      \n      ctx.fillRect(pipe[\"pos\"], 0, _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeWidth, pipe[\"gapTop\"]);\n      ctx.fillRect(pipe[\"pos\"], pipe[\"gapTop\"] + _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeGap, _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeWidth, this.dimensions.height - pipe[\"gapTop\"] - _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeGap);\n    }\n  }\n\n  initializePipes() {\n    this.score = 0;\n    for (let i = 0; i < 3; i++) {\n      this.pipes.push({\n        \"pos\": this.dimensions.width + i*(_game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeInterval + _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeWidth),\n        \"gapTop\": Math.random() * (this.dimensions.height - _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeGap),\n        \"passed\": false\n      });\n    }\n  }\n\n  movePipes() {\n    for (let i = 0; i < 3; i++) \n      this.pipes[i][\"pos\"] += _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeSpeed;\n\n    if (!this.pipes[0][\"passed\"] && this.pipes[0][\"pos\"] + 20 <= this.dimensions.width / 3) {\n      this.score += 1;\n      this.pipes[0][\"passed\"] = true;\n    }\n\n    if (this.pipes[0][\"pos\"] <= -_game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeWidth) {\n      this.pipes.shift();\n      this.pipes.push({\n        \"pos\": this.pipes[1][\"pos\"] + (_game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeInterval + _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeWidth),\n        \"gapTop\": Math.random() * (this.dimensions.height - _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeGap)\n      });\n    }\n  }\n\n  collidesWith(objectBounds) {\n    let [x1, y1] = objectBounds[\"topLeft\"];\n    let [x2, y2] = objectBounds[\"bottomRight\"];\n\n    let pipePos, pipeGap;\n    for (let i = 0; i < 3; i++) {\n      pipePos = this.pipes[i][\"pos\"];\n      pipeGap = this.pipes[i][\"gapTop\"];\n\n      // Check if it is in between two pipes\n      if ((x2 >= pipePos && x1 < pipePos) || (x2 > pipePos + _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeWidth && x1 <= pipePos + _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeWidth))\n        if (y2 >= pipeGap + _game__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.pipeGap || y1 <= pipeGap)\n          return true;\n      \n      if (y1 <= 0 || y2 >= this.dimensions.height)\n        return true;\n\n      return false;\n    }\n  }\n\n  resetLevel() {\n    this.initializePipes();\n    this.score = 0;\n  }\n\n  printFinalScore(ctx) {\n    ctx.fillStyle = \"black\";\n    ctx.font = \"36px Arial\";\n    ctx.textAlign = \"center\";\n    ctx.fillText(\"You've Died!\", 320, 200);\n    ctx.fillText(`Score: ${this.score}`, 320, 236)\n  }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

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