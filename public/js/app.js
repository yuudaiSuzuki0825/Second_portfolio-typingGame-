/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n{\n  // setProblemメソッドの定義。\n  var setProblem = function setProblem() {\n    for (var _i = 0; _i < problems.length; _i++) {\n      problemBodys[_i] = problems[_i].body;\n    }\n    problem = problemBodys.splice(num, 1)[0];\n    target.textContent = problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */\n    targetTitle.textContent = problems[num].title;\n    loc = 0;\n    num++;\n  }; // 初期化。\n  // home.blade.phpから$textsを受け取っている。Laravelをtextsの前につけること。スプレッド構文で展開し，新しい配列を作成している。\n  var texts = _toConsumableArray(Laravel.texts);\n  // 配列の初期化。\n  var problems = [];\n  // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。\n  for (var i = 0; i < texts.length; i++) {\n    var title = texts[i].title;\n    var body = texts[i].body;\n    problems[i] = {\n      title: title,\n      body: body\n    };\n  }\n  var problemBodys = [];\n  var problem;\n  var loc = 0;\n  var num = 0;\n  var playing = false;\n\n  // // /* DOM操作。 */\n  var target = document.getElementById(\"target\");\n  var targetTitle = document.getElementById(\"targetTitle\");\n  var startButtonParent = document.getElementById(\"startButtonParent\");\n  startButtonParent.addEventListener(\"click\", function () {\n    if (playing) {\n      return;\n    }\n    startButtonParent.classList.add(\"none\");\n    playing = true;\n    setProblem();\n    console.log(\"hoge1\");\n  });\n  document.addEventListener(\"keydown\", function (e) {\n    if (e.key !== problem[loc]) {\n      return;\n    }\n    loc++;\n    target.textContent = \"-\".repeat(loc) + problem.substring(loc);\n    if (loc === problem.length) {\n      console.log(num);\n      // numはsetProblem()が呼び出されるたびに1増える。そのnumが文書数と一致するまでカウントされたとき，タイピングを終了させればよい。\n      if (num === problems.length) {\n        // 2秒後に再リロード。\n        setTimeout(function () {\n          startButtonParent.classList.remove(\"none\");\n          window.location.reload();\n        }, 2000);\n        target.textContent = \"クリア\";\n        targetTitle.textContent = \"\";\n        return;\n      }\n      console.log(\"hoge3\");\n      setProblem();\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ0EwQixVQUFVLENBQUMsWUFBTTtVQUNiVixpQkFBaUIsQ0FBQ0UsU0FBUyxDQUFDUyxNQUFNLENBQUMsTUFBTSxDQUFDO1VBQzFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO1FBQzVCLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDUnhCLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEtBQUs7UUFDMUJDLFdBQVcsQ0FBQ0QsV0FBVyxHQUFHLEVBQUU7UUFDNUI7TUFDSjtNQUVBYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDcEJ4QixVQUFVLEVBQUU7SUFDaEI7RUFDSixDQUFDLENBQUM7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanM/Y2VkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxue1xuICAgIC8vIGhvbWUuYmxhZGUucGhw44GL44KJJHRleHRz44KS5Y+X44GR5Y+W44Gj44Gm44GE44KL44CCTGFyYXZlbOOCknRleHRz44Gu5YmN44Gr44Gk44GR44KL44GT44Go44CC44K544OX44Os44OD44OJ5qeL5paH44Gn5bGV6ZaL44GX77yM5paw44GX44GE6YWN5YiX44KS5L2c5oiQ44GX44Gm44GE44KL44CCXG4gICAgY29uc3QgdGV4dHMgPSBbLi4uTGFyYXZlbC50ZXh0c107XG4gICAgLy8g6YWN5YiX44Gu5Yid5pyf5YyW44CCXG4gICAgbGV0IHByb2JsZW1zID0gW107XG4gICAgLy8gdGV4dHPjga7lgIvmlbDliIbjg6vjg7zjg5fjgILjgqrjg5bjgrjjgqfjgq/jg4jjg6rjg4bjg6njg6vjgpLliKnnlKjjgZfjgabjgr/jgqTjg4jjg6vjgajmnKzmlofjga7jgb/mir3lh7rjgZfjgabjgYTjgovjgIJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGV4dHNbaV0udGl0bGU7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB0ZXh0c1tpXS5ib2R5O1xuICAgICAgICBwcm9ibGVtc1tpXSA9IHsgdGl0bGUsIGJvZHkgfTtcbiAgICB9XG4gICAgbGV0IHByb2JsZW1Cb2R5cyA9IFtdO1xuXG4gICAgLy8gc2V0UHJvYmxlbeODoeOCveODg+ODieOBruWumue+qeOAglxuICAgIGZ1bmN0aW9uIHNldFByb2JsZW0oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb2JsZW1Cb2R5c1tpXSA9IHByb2JsZW1zW2ldLmJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvYmxlbSA9IHByb2JsZW1Cb2R5cy5zcGxpY2UobnVtLCAxKVswXTtcbiAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHByb2JsZW07IC8qIHRleHRDb250ZW5044OX44Ot44OR44OG44Kj44GvaW5uZXJUZXh044OX44Ot44OR44OG44Kj44Gn44KCT0vjgaDjgYzvvIzlvozogIXjga9DU1Pjga7jgrnjgr/jgqTjg6vjgoLliqDlkbPjgZfjgablh6bnkIbjgZXjgozjgovplqLkv4LvvIjlho3jg5Xjg63jg7zvvInjgafoqIjnrpfjgYzph43jgY/jgarjgovjga7jgafpgb/jgZHjgovjgbnjgY3jgIIgKi9cbiAgICAgICAgdGFyZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9ibGVtc1tudW1dLnRpdGxlO1xuICAgICAgICBsb2MgPSAwO1xuICAgICAgICBudW0rKztcbiAgICB9XG5cbiAgICAvLyDliJ3mnJ/ljJbjgIJcbiAgICBsZXQgcHJvYmxlbTtcbiAgICBsZXQgbG9jID0gMDtcbiAgICBsZXQgbnVtID0gMDtcbiAgICBsZXQgcGxheWluZyA9IGZhbHNlO1xuXG4gICAgLy8gLy8gLyogRE9N5pON5L2c44CCICovXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XG4gICAgY29uc3QgdGFyZ2V0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRpdGxlXCIpO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEJ1dHRvblBhcmVudFwiKTtcblxuICAgIHN0YXJ0QnV0dG9uUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRCdXR0b25QYXJlbnQuY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgICAgIHBsYXlpbmcgPSB0cnVlO1xuICAgICAgICBzZXRQcm9ibGVtKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG9nZTFcIik7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgIT09IHByb2JsZW1bbG9jXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jKys7XG5cbiAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gXCItXCIucmVwZWF0KGxvYykgKyBwcm9ibGVtLnN1YnN0cmluZyhsb2MpO1xuXG4gICAgICAgIGlmIChsb2MgPT09IHByb2JsZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhudW0pO1xuICAgICAgICAgICAgLy8gbnVt44Gvc2V0UHJvYmxlbSgp44GM5ZG844Gz5Ye644GV44KM44KL44Gf44Gz44GrMeWil+OBiOOCi+OAguOBneOBrm51beOBjOaWh+abuOaVsOOBqOS4gOiHtOOBmeOCi+OBvuOBp+OCq+OCpuODs+ODiOOBleOCjOOBn+OBqOOBje+8jOOCv+OCpOODlOODs+OCsOOCkue1guS6huOBleOBm+OCjOOBsOOCiOOBhOOAglxuICAgICAgICAgICAgaWYgKG51bSA9PT0gcHJvYmxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gMuenkuW+jOOBq+WGjeODquODreODvOODieOAglxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEJ1dHRvblBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwi44Kv44Oq44KiXCI7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJob2dlM1wiKTtcbiAgICAgICAgICAgIHNldFByb2JsZW0oKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbInNldFByb2JsZW0iLCJpIiwicHJvYmxlbXMiLCJsZW5ndGgiLCJwcm9ibGVtQm9keXMiLCJib2R5IiwicHJvYmxlbSIsInNwbGljZSIsIm51bSIsInRhcmdldCIsInRleHRDb250ZW50IiwidGFyZ2V0VGl0bGUiLCJ0aXRsZSIsImxvYyIsInRleHRzIiwiTGFyYXZlbCIsInBsYXlpbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhcnRCdXR0b25QYXJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsImUiLCJrZXkiLCJyZXBlYXQiLCJzdWJzdHJpbmciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz9hODBiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;