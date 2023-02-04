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

eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n{\n  // setProblemメソッドの定義。\n  var setProblem = function setProblem() {\n    for (var _i = 0; _i < problems.length; _i++) {\n      problemBodys[_i] = problems[_i].body;\n    }\n    problem = problemBodys.splice(num, 1)[0];\n    target.textContent = problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */\n    targetTitle.textContent = problems[num].title;\n    loc = 0;\n    num++;\n  }; // 初期化。\n  // ==================== //\n  /* モーダルウィンドウ。 */\n  // ==================== //\n\n  /* DOM操作。 */\n  var typingModalWindow = document.getElementById(\"typingModalWindow\");\n  var mask = document.getElementById(\"mask\");\n\n  // ==================== //\n  /* タイピングゲーム。 */\n  // ==================== //\n\n  // home.blade.phpから$textsを受け取っている。Laravelをtextsの前につけること。スプレッド構文で展開し，新しい配列を作成している。\n  var texts = _toConsumableArray(Laravel.texts);\n  // 配列の初期化。\n  var problems = [];\n  // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。\n  for (var i = 0; i < texts.length; i++) {\n    var title = texts[i].title;\n    var body = texts[i].body;\n    problems[i] = {\n      title: title,\n      body: body\n    };\n  }\n  var problemBodys = [];\n  var problem;\n  var loc = 0;\n  var num = 0;\n  var playing = false;\n\n  // // /* DOM操作。 */\n  var target = document.getElementById(\"target\");\n  var targetTitle = document.getElementById(\"targetTitle\");\n  var startButtonParent = document.getElementById(\"startButtonParent\");\n  var finishedMsg = document.createElement(\"p\");\n  finishedMsg.textContent = \"finished!!\";\n  finishedMsg.style.paddingTop = \"20px\";\n  startButtonParent.addEventListener(\"click\", function () {\n    if (playing) {\n      return;\n    }\n    startButtonParent.classList.add(\"none\");\n    // モーダルウィンドウの実装。\n    typingModalWindow.classList.remove(\"hidden\");\n    mask.classList.remove(\"hidden\");\n    playing = true;\n    setProblem();\n    console.log(\"hoge1\");\n  });\n  document.addEventListener(\"keydown\", function (e) {\n    if (e.key !== problem[loc]) {\n      return;\n    }\n    loc++;\n    target.textContent = \"-\".repeat(loc) + problem.substring(loc);\n    if (loc === problem.length) {\n      console.log(num);\n      // numはsetProblem()が呼び出されるたびに1増える。そのnumが文書数と一致するまでカウントされたとき，タイピングを終了させればよい。\n      if (num === problems.length) {\n        // 2秒後に再リロード。\n        setTimeout(function () {\n          startButtonParent.classList.remove(\"none\");\n          window.location.reload();\n        }, 2000);\n        target.textContent = \"\";\n        targetTitle.textContent = \"\";\n        target.previousElementSibling.appendChild(finishedMsg);\n        return;\n      }\n      console.log(\"hoge3\");\n      setProblem();\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO0VBRUZoQixRQUFRLENBQUNXLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDTSxDQUFDLEVBQUs7SUFDeEMsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUszQixPQUFPLENBQUNPLEdBQUcsQ0FBQyxFQUFFO01BQ3hCO0lBQ0o7SUFFQUEsR0FBRyxFQUFFO0lBRUxKLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQ3dCLE1BQU0sQ0FBQ3JCLEdBQUcsQ0FBQyxHQUFHUCxPQUFPLENBQUM2QixTQUFTLENBQUN0QixHQUFHLENBQUM7SUFFN0QsSUFBSUEsR0FBRyxLQUFLUCxPQUFPLENBQUNILE1BQU0sRUFBRTtNQUN4QjJCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdkIsR0FBRyxDQUFDO01BQ2hCO01BQ0EsSUFBSUEsR0FBRyxLQUFLTixRQUFRLENBQUNDLE1BQU0sRUFBRTtRQUN6QjtRQUNBaUMsVUFBVSxDQUFDLFlBQU07VUFDYmYsaUJBQWlCLENBQUNNLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztVQUMxQ1EsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sRUFBRTtRQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ1I5QixNQUFNLENBQUNDLFdBQVcsR0FBRyxFQUFFO1FBQ3ZCQyxXQUFXLENBQUNELFdBQVcsR0FBRyxFQUFFO1FBQzVCRCxNQUFNLENBQUMrQixzQkFBc0IsQ0FBQ0MsV0FBVyxDQUFDbkIsV0FBVyxDQUFDO1FBQ3REO01BQ0o7TUFFQVEsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO01BQ3BCL0IsVUFBVSxFQUFFO0lBQ2hCO0VBQ0osQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzP2NlZDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbntcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSAvL1xuICAgIC8qIOODouODvOODgOODq+OCpuOCo+ODs+ODieOCpuOAgiAqL1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09IC8vXG5cbiAgICAvKiBET03mk43kvZzjgIIgKi9cbiAgICBjb25zdCB0eXBpbmdNb2RhbFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwaW5nTW9kYWxXaW5kb3dcIik7XG4gICAgY29uc3QgbWFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFza1wiKTtcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IC8vXG4gICAgLyog44K/44Kk44OU44Oz44Kw44Ky44O844Og44CCICovXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gLy9cblxuICAgIC8vIGhvbWUuYmxhZGUucGhw44GL44KJJHRleHRz44KS5Y+X44GR5Y+W44Gj44Gm44GE44KL44CCTGFyYXZlbOOCknRleHRz44Gu5YmN44Gr44Gk44GR44KL44GT44Go44CC44K544OX44Os44OD44OJ5qeL5paH44Gn5bGV6ZaL44GX77yM5paw44GX44GE6YWN5YiX44KS5L2c5oiQ44GX44Gm44GE44KL44CCXG4gICAgY29uc3QgdGV4dHMgPSBbLi4uTGFyYXZlbC50ZXh0c107XG4gICAgLy8g6YWN5YiX44Gu5Yid5pyf5YyW44CCXG4gICAgbGV0IHByb2JsZW1zID0gW107XG4gICAgLy8gdGV4dHPjga7lgIvmlbDliIbjg6vjg7zjg5fjgILjgqrjg5bjgrjjgqfjgq/jg4jjg6rjg4bjg6njg6vjgpLliKnnlKjjgZfjgabjgr/jgqTjg4jjg6vjgajmnKzmlofjga7jgb/mir3lh7rjgZfjgabjgYTjgovjgIJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGV4dHNbaV0udGl0bGU7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB0ZXh0c1tpXS5ib2R5O1xuICAgICAgICBwcm9ibGVtc1tpXSA9IHsgdGl0bGUsIGJvZHkgfTtcbiAgICB9XG4gICAgbGV0IHByb2JsZW1Cb2R5cyA9IFtdO1xuXG4gICAgLy8gc2V0UHJvYmxlbeODoeOCveODg+ODieOBruWumue+qeOAglxuICAgIGZ1bmN0aW9uIHNldFByb2JsZW0oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb2JsZW1Cb2R5c1tpXSA9IHByb2JsZW1zW2ldLmJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvYmxlbSA9IHByb2JsZW1Cb2R5cy5zcGxpY2UobnVtLCAxKVswXTtcbiAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHByb2JsZW07IC8qIHRleHRDb250ZW5044OX44Ot44OR44OG44Kj44GvaW5uZXJUZXh044OX44Ot44OR44OG44Kj44Gn44KCT0vjgaDjgYzvvIzlvozogIXjga9DU1Pjga7jgrnjgr/jgqTjg6vjgoLliqDlkbPjgZfjgablh6bnkIbjgZXjgozjgovplqLkv4LvvIjlho3jg5Xjg63jg7zvvInjgafoqIjnrpfjgYzph43jgY/jgarjgovjga7jgafpgb/jgZHjgovjgbnjgY3jgIIgKi9cbiAgICAgICAgdGFyZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9ibGVtc1tudW1dLnRpdGxlO1xuICAgICAgICBsb2MgPSAwO1xuICAgICAgICBudW0rKztcbiAgICB9XG5cbiAgICAvLyDliJ3mnJ/ljJbjgIJcbiAgICBsZXQgcHJvYmxlbTtcbiAgICBsZXQgbG9jID0gMDtcbiAgICBsZXQgbnVtID0gMDtcbiAgICBsZXQgcGxheWluZyA9IGZhbHNlO1xuXG4gICAgLy8gLy8gLyogRE9N5pON5L2c44CCICovXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XG4gICAgY29uc3QgdGFyZ2V0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRpdGxlXCIpO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEJ1dHRvblBhcmVudFwiKTtcbiAgICBjb25zdCBmaW5pc2hlZE1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZpbmlzaGVkTXNnLnRleHRDb250ZW50ID0gXCJmaW5pc2hlZCEhXCI7XG4gICAgZmluaXNoZWRNc2cuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xuXG4gICAgc3RhcnRCdXR0b25QYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGFydEJ1dHRvblBhcmVudC5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICAgICAgLy8g44Oi44O844OA44Or44Km44Kj44Oz44OJ44Km44Gu5a6f6KOF44CCXG4gICAgICAgIHR5cGluZ01vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIG1hc2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgICAgICBwbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0UHJvYmxlbSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhvZ2UxXCIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ICE9PSBwcm9ibGVtW2xvY10pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvYysrO1xuXG4gICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiLVwiLnJlcGVhdChsb2MpICsgcHJvYmxlbS5zdWJzdHJpbmcobG9jKTtcblxuICAgICAgICBpZiAobG9jID09PSBwcm9ibGVtLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobnVtKTtcbiAgICAgICAgICAgIC8vIG51beOBr3NldFByb2JsZW0oKeOBjOWRvOOBs+WHuuOBleOCjOOCi+OBn+OBs+OBqzHlopfjgYjjgovjgILjgZ3jga5udW3jgYzmlofmm7jmlbDjgajkuIDoh7TjgZnjgovjgb7jgafjgqvjgqbjg7Pjg4jjgZXjgozjgZ/jgajjgY3vvIzjgr/jgqTjg5Tjg7PjgrDjgpLntYLkuobjgZXjgZvjgozjgbDjgojjgYTjgIJcbiAgICAgICAgICAgIGlmIChudW0gPT09IHByb2JsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIDLnp5Llvozjgavlho3jg6rjg63jg7zjg4njgIJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRCdXR0b25QYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRhcmdldFRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5hcHBlbmRDaGlsZChmaW5pc2hlZE1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhvZ2UzXCIpO1xuICAgICAgICAgICAgc2V0UHJvYmxlbSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsic2V0UHJvYmxlbSIsImkiLCJwcm9ibGVtcyIsImxlbmd0aCIsInByb2JsZW1Cb2R5cyIsImJvZHkiLCJwcm9ibGVtIiwic3BsaWNlIiwibnVtIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ0YXJnZXRUaXRsZSIsInRpdGxlIiwibG9jIiwidHlwaW5nTW9kYWxXaW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWFzayIsInRleHRzIiwiTGFyYXZlbCIsInBsYXlpbmciLCJzdGFydEJ1dHRvblBhcmVudCIsImZpbmlzaGVkTXNnIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicGFkZGluZ1RvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiZSIsImtleSIsInJlcGVhdCIsInN1YnN0cmluZyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

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