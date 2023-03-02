/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/01 */ \"./src/js/01.js\");\n/* harmony import */ var _js_01__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_01__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_02__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/02 */ \"./src/js/02.js\");\n/* harmony import */ var _js_02__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_02__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://webpack5_test/./src/index.js?");

/***/ }),

/***/ "./src/js/01.js":
/*!**********************!*\
  !*** ./src/js/01.js ***!
  \**********************/
/***/ (() => {

eval("{\r\n    let arr=[1,5,6,3,55,22,6,4,3,5,6,3,22,88,3,3]\r\n    let set=new Set(arr)\r\n    let newarr=Array.from(set)//[...set]\r\n    let sortarr=newarr.sort((a, b) => a-b)\r\n    console.log(\"数组去重、排序：\",sortarr)\r\n   //运行结果：(8) [1, 3, 4, 5, 6, 22, 55, 88]\r\n}\r\n{\r\n    let arr=[1,5,6,3,55,22,6,4,3,5,6,3,22,88,3,3]\r\n    let item=arr.find(ele=>ele<99)\r\n    console.log(`item:`, item);\r\n    //item: 1\r\n    let arrfilter=arr.filter(ele=>ele<99)\r\n    console.log(`arrfilter:`, arrfilter);\r\n    //arrfilter: (16) [1, 5, 6, 3, 55, 22, 6, 4, 3, 5, 6, 3, 22, 88, 3, 3]\r\n}\n\n//# sourceURL=webpack://webpack5_test/./src/js/01.js?");

/***/ }),

/***/ "./src/js/02.js":
/*!**********************!*\
  !*** ./src/js/02.js ***!
  \**********************/
/***/ (() => {

eval("{\r\n    let map = new Map([[\"name\", \"vlodya\"], [\"sex\", \"男\"]])\r\n    console.log(\"map:\", map);\r\n    //map: Map(2) {'name' => 'vlodya', 'sex' => '男'}\r\n    let obj = Object.fromEntries([[\"name\", \"vlodya\"], [\"sex\", \"男\"]])\r\n    console.log(\"obj:\", obj);\r\n    //obj: {name: 'vlodya', sex: '男'}\r\n    for (let [k, v] of map.entries()) {\r\n        console.log([k, v]);\r\n    }\r\n    //(2) ['name', 'vlodya']\r\n    // (2) ['sex', '男']\r\n}\r\n{\r\n    let obj = {\r\n        name: \"vlo\",\r\n        age: \"16\",\r\n        sex: \"men\"\r\n    }\r\n    for (let [k, v] of Object.entries(obj)) {\r\n        console.log([k, v]);\r\n    }\r\n    //(2) ['name', 'vlo']\r\n    //(2) ['age', '16']\r\n    //(2) ['sex', 'men']\r\n    console.log(`Reflect.get(obj,\"name\"):`, Reflect.get(obj, \"name\"));\r\n    //Reflect.get(obj,\"name\"): vlo\r\n}\r\n{\r\n    let obj = {\r\n        name: \"vlo\",\r\n        age: \"16\",\r\n        sex: \"men\"\r\n    }\r\n    console.log(`Reflect.set(obj,\"vip\",true):`, Reflect.set(obj, \"vip\", true));\r\n    //Reflect.set(obj,\"vip\",true): true\r\n    console.log(`obj:`, obj);\r\n    //obj: {name: 'vlo', age: '16', sex: 'men', vip: true}\r\n    console.log(`Reflect.has(obj,\"age\")`, Reflect.has(obj, \"age\"));\r\n    // Reflect.has(obj,\"age\") true\r\n    console.log(`Reflect.deleteProperty(obj,\"sex\")`, Reflect.deleteProperty(obj, \"sex\"), obj);\r\n    //Reflect.deleteProperty(obj,\"sex\") true {name: 'vlo', age: '16', vip: true}\r\n}\r\n{\r\n    let URL = \"http://www.baidu.com?name=Jack&age=25&sex=men&wife=Lucy\"\r\n    function getUrlParams2(url) {\r\n        let urlStr = url.split('?')[1]\r\n        const urlSearchParams = new URLSearchParams(urlStr)\r\n        const result = Object.fromEntries(urlSearchParams.entries())\r\n        return result\r\n    }\r\n    console.log(getUrlParams2(URL))\r\n    //{name: 'Jack', age: '25', sex: 'men', wife: 'Lucy'}\r\n}\n\n//# sourceURL=webpack://webpack5_test/./src/js/02.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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