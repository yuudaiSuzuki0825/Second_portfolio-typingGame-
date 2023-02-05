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

eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n{\n  // setProblemメソッドの定義。\n  var setProblem = function setProblem() {\n    for (var _i = 0; _i < problems.length; _i++) {\n      problemBodys[_i] = problems[_i].body;\n    }\n    problem = problemBodys.splice(num, 1)[0];\n    target.textContent = problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */\n    targetTitle.textContent = problems[num].title;\n    loc = 0;\n    num++;\n  }; // 初期化。\n  // ==================== //\n  /* モーダルウィンドウ（タイピングゲーム内に仕込んだ）。 */\n  // ==================== //\n\n  /* DOM操作。 */\n  var typingModalWindow = document.getElementById(\"typingModalWindow\");\n  var mask = document.getElementById(\"mask\");\n\n  // ==================== //\n  /* タイピングゲーム。 */\n  // ==================== //\n\n  // home.blade.phpから$texts2を受け取っている。Laravelをtextsの前につけること。スプレッド構文で展開し，新しい配列を作成している。\n  var texts2 = _toConsumableArray(Laravel.texts2);\n  // 配列の初期化。\n  var problems = [];\n  // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。\n  for (var i = 0; i < texts2.length; i++) {\n    var title = texts2[i].title;\n    var body = texts2[i].body;\n    problems[i] = {\n      title: title,\n      body: body\n    };\n  }\n  // console.log(problems);\n  var problemBodys = [];\n  var problem;\n  var loc = 0;\n  var num = 0;\n  var playing = false;\n\n  // // /* DOM操作。 */\n  var target = document.getElementById(\"target\");\n  var targetTitle = document.getElementById(\"targetTitle\");\n  var startButtonParent = document.getElementById(\"startButtonParent\");\n  var finishedMsg = document.createElement(\"p\");\n  finishedMsg.textContent = \"finished!!\";\n  finishedMsg.style.paddingTop = \"20px\";\n  startButtonParent.addEventListener(\"click\", function () {\n    if (playing) {\n      return;\n    }\n    startButtonParent.classList.add(\"none\");\n    // モーダルウィンドウの実装。\n    typingModalWindow.classList.remove(\"hidden\");\n    mask.classList.remove(\"hidden\");\n    playing = true;\n    setProblem();\n    console.log(\"hoge1\");\n  });\n  document.addEventListener(\"keydown\", function (e) {\n    // startボタンが押下されていない場合には，以下の処理を実行するわけにはいかないので，早期リターンする必要がある。\n    if (!playing) {\n      return;\n    }\n    if (e.key !== problem[loc]) {\n      return;\n    }\n    loc++;\n    target.textContent = \"-\".repeat(loc) + problem.substring(loc);\n    if (loc === problem.length) {\n      console.log(num);\n      // numはsetProblem()が呼び出されるたびに1増える。そのnumが文書数と一致するまでカウントされたとき，タイピングを終了させればよい。\n      if (num === problems.length) {\n        // 2秒後に再リロード。\n        setTimeout(function () {\n          startButtonParent.classList.remove(\"none\");\n          window.location.reload();\n        }, 2000);\n        target.textContent = \"\";\n        targetTitle.textContent = \"\";\n        target.previousElementSibling.appendChild(finishedMsg);\n        return;\n      }\n      console.log(\"hoge3\");\n      setProblem();\n    }\n  });\n\n  // ==================== //\n  /* アコーディオン。 */\n  // ==================== //\n\n  /* DOM操作。 */\n  var trs = document.querySelectorAll(\".tr\");\n  trs.forEach(function (tr) {\n    var children = tr.children;\n    console.log(children);\n    children[3].addEventListener(\"click\", function () {\n      console.log(tr.nextElementSibling);\n      tr.nextElementSibling.classList.toggle(\"open\");\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUs7SUFDaEIsSUFBSUMsUUFBUSxHQUFHRCxFQUFFLENBQUNDLFFBQVE7SUFDMUJoQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2UsUUFBUSxDQUFDO0lBQ3JCQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNwQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUN4Q0ksT0FBTyxDQUFDQyxHQUFHLENBQUNjLEVBQUUsQ0FBQ0Usa0JBQWtCLENBQUM7TUFDbENGLEVBQUUsQ0FBQ0Usa0JBQWtCLENBQUNwQixTQUFTLENBQUNxQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcz9jZWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG57XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gLy9cbiAgICAvKiDjg6Ljg7zjg4Djg6vjgqbjgqPjg7Pjg4njgqbvvIjjgr/jgqTjg5Tjg7PjgrDjgrLjg7zjg6DlhoXjgavku5XovrzjgpPjgaDvvInjgIIgKi9cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSAvL1xuXG4gICAgLyogRE9N5pON5L2c44CCICovXG4gICAgY29uc3QgdHlwaW5nTW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGluZ01vZGFsV2luZG93XCIpO1xuICAgIGNvbnN0IG1hc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hc2tcIik7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSAvL1xuICAgIC8qIOOCv+OCpOODlOODs+OCsOOCsuODvOODoOOAgiAqL1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09IC8vXG5cbiAgICAvLyBob21lLmJsYWRlLnBocOOBi+OCiSR0ZXh0czLjgpLlj5fjgZHlj5bjgaPjgabjgYTjgovjgIJMYXJhdmVs44KSdGV4dHPjga7liY3jgavjgaTjgZHjgovjgZPjgajjgILjgrnjg5fjg6zjg4Pjg4nmp4vmlofjgaflsZXplovjgZfvvIzmlrDjgZfjgYTphY3liJfjgpLkvZzmiJDjgZfjgabjgYTjgovjgIJcbiAgICBsZXQgdGV4dHMyID0gWy4uLkxhcmF2ZWwudGV4dHMyXTtcbiAgICAvLyDphY3liJfjga7liJ3mnJ/ljJbjgIJcbiAgICBsZXQgcHJvYmxlbXMgPSBbXTtcbiAgICAvLyB0ZXh0c+OBruWAi+aVsOWIhuODq+ODvOODl+OAguOCquODluOCuOOCp+OCr+ODiOODquODhuODqeODq+OCkuWIqeeUqOOBl+OBpuOCv+OCpOODiOODq+OBqOacrOaWh+OBruOBv+aKveWHuuOBl+OBpuOBhOOCi+OAglxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dHMyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGV4dHMyW2ldLnRpdGxlO1xuICAgICAgICBjb25zdCBib2R5ID0gdGV4dHMyW2ldLmJvZHk7XG4gICAgICAgIHByb2JsZW1zW2ldID0geyB0aXRsZSwgYm9keSB9O1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9ibGVtcyk7XG4gICAgbGV0IHByb2JsZW1Cb2R5cyA9IFtdO1xuXG4gICAgLy8gc2V0UHJvYmxlbeODoeOCveODg+ODieOBruWumue+qeOAglxuICAgIGZ1bmN0aW9uIHNldFByb2JsZW0oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb2JsZW1Cb2R5c1tpXSA9IHByb2JsZW1zW2ldLmJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvYmxlbSA9IHByb2JsZW1Cb2R5cy5zcGxpY2UobnVtLCAxKVswXTtcbiAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHByb2JsZW07IC8qIHRleHRDb250ZW5044OX44Ot44OR44OG44Kj44GvaW5uZXJUZXh044OX44Ot44OR44OG44Kj44Gn44KCT0vjgaDjgYzvvIzlvozogIXjga9DU1Pjga7jgrnjgr/jgqTjg6vjgoLliqDlkbPjgZfjgablh6bnkIbjgZXjgozjgovplqLkv4LvvIjlho3jg5Xjg63jg7zvvInjgafoqIjnrpfjgYzph43jgY/jgarjgovjga7jgafpgb/jgZHjgovjgbnjgY3jgIIgKi9cbiAgICAgICAgdGFyZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9ibGVtc1tudW1dLnRpdGxlO1xuICAgICAgICBsb2MgPSAwO1xuICAgICAgICBudW0rKztcbiAgICB9XG5cbiAgICAvLyDliJ3mnJ/ljJbjgIJcbiAgICBsZXQgcHJvYmxlbTtcbiAgICBsZXQgbG9jID0gMDtcbiAgICBsZXQgbnVtID0gMDtcbiAgICBsZXQgcGxheWluZyA9IGZhbHNlO1xuXG4gICAgLy8gLy8gLyogRE9N5pON5L2c44CCICovXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XG4gICAgY29uc3QgdGFyZ2V0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRpdGxlXCIpO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEJ1dHRvblBhcmVudFwiKTtcbiAgICBjb25zdCBmaW5pc2hlZE1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZpbmlzaGVkTXNnLnRleHRDb250ZW50ID0gXCJmaW5pc2hlZCEhXCI7XG4gICAgZmluaXNoZWRNc2cuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xuXG4gICAgc3RhcnRCdXR0b25QYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGFydEJ1dHRvblBhcmVudC5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICAgICAgLy8g44Oi44O844OA44Or44Km44Kj44Oz44OJ44Km44Gu5a6f6KOF44CCXG4gICAgICAgIHR5cGluZ01vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIG1hc2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgICAgICBwbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0UHJvYmxlbSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhvZ2UxXCIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgLy8gc3RhcnTjg5zjgr/jg7PjgYzmirzkuIvjgZXjgozjgabjgYTjgarjgYTloLTlkIjjgavjga/vvIzku6XkuIvjga7lh6bnkIbjgpLlrp/ooYzjgZnjgovjgo/jgZHjgavjga/jgYTjgYvjgarjgYTjga7jgafvvIzml6nmnJ/jg6rjgr/jg7zjg7PjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcbiAgICAgICAgaWYgKCFwbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgIT09IHByb2JsZW1bbG9jXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jKys7XG5cbiAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gXCItXCIucmVwZWF0KGxvYykgKyBwcm9ibGVtLnN1YnN0cmluZyhsb2MpO1xuXG4gICAgICAgIGlmIChsb2MgPT09IHByb2JsZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhudW0pO1xuICAgICAgICAgICAgLy8gbnVt44Gvc2V0UHJvYmxlbSgp44GM5ZG844Gz5Ye644GV44KM44KL44Gf44Gz44GrMeWil+OBiOOCi+OAguOBneOBrm51beOBjOaWh+abuOaVsOOBqOS4gOiHtOOBmeOCi+OBvuOBp+OCq+OCpuODs+ODiOOBleOCjOOBn+OBqOOBje+8jOOCv+OCpOODlOODs+OCsOOCkue1guS6huOBleOBm+OCjOOBsOOCiOOBhOOAglxuICAgICAgICAgICAgaWYgKG51bSA9PT0gcHJvYmxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gMuenkuW+jOOBq+WGjeODquODreODvOODieOAglxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEJ1dHRvblBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmFwcGVuZENoaWxkKGZpbmlzaGVkTXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG9nZTNcIik7XG4gICAgICAgICAgICBzZXRQcm9ibGVtKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IC8vXG4gICAgLyog44Ki44Kz44O844OH44Kj44Kq44Oz44CCICovXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gLy9cblxuICAgIC8qIERPTeaTjeS9nOOAgiAqL1xuICAgIGNvbnN0IHRycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJcIik7XG4gICAgdHJzLmZvckVhY2goKHRyKSA9PiB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRyLmNoaWxkcmVuO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuWzNdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ci5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgdHIubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJzZXRQcm9ibGVtIiwiaSIsInByb2JsZW1zIiwibGVuZ3RoIiwicHJvYmxlbUJvZHlzIiwiYm9keSIsInByb2JsZW0iLCJzcGxpY2UiLCJudW0iLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsInRhcmdldFRpdGxlIiwidGl0bGUiLCJsb2MiLCJ0eXBpbmdNb2RhbFdpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXNrIiwidGV4dHMyIiwiTGFyYXZlbCIsInBsYXlpbmciLCJzdGFydEJ1dHRvblBhcmVudCIsImZpbmlzaGVkTXNnIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicGFkZGluZ1RvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiZSIsImtleSIsInJlcGVhdCIsInN1YnN0cmluZyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJhcHBlbmRDaGlsZCIsInRycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidHIiLCJjaGlsZHJlbiIsIm5leHRFbGVtZW50U2libGluZyIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

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