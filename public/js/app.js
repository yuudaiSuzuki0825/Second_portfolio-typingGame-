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

eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n{\n  // ==================== //\n  /* タイピングゲーム。 */\n  // ==================== //\n  // home.blade.phpから$textsを受け取っている。Laravelをtextsの前につけること。スプレッド構文で展開し，新しい配列を作成している。\n  // try {\n  //     let texts = [...Laravel.texts];\n  // } catch (e) {\n  //     problems = [\n  //         {\n  //             title: \"文書がありません\",\n  //             body: \"bunnsyogaarimasenn\",\n  //         },\n  //     ];\n  // }\n  // // let texts = [...Laravel.texts];\n  // // // 配列の初期化。\n  // let problems = [];\n  // // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。\n  // for (let i = 0; i < texts.length; i++) {\n  //     const title = texts[i].title;\n  //     const body = texts[i].body;\n  //     problems[i] = { title, body };\n  // }\n  // let problemBodys = [];\n  // setProblemメソッドの定義。\n  var setProblem = function setProblem() {\n    try {\n      var texts = _toConsumableArray(Laravel.texts);\n      // // 配列の初期化。\n      // let problems = [];\n      // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。\n      for (var i = 0; i < texts.length; i++) {\n        var title = texts[i].title;\n        var body = texts[i].body;\n        problems[i] = {\n          title: title,\n          body: body\n        };\n      }\n      var problemBodys = [];\n      // let count = problems.length;\n\n      for (var _i = 0; _i < problems.length; _i++) {\n        problemBodys[_i] = problems[_i].body;\n      }\n      problem = problemBodys.splice(num, 1)[0];\n      target.textContent = problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */\n      targetTitle.textContent = problems[num].title;\n      loc = 0;\n      num++;\n    } catch (e) {\n      problems = [{\n        title: \"文書がありません\",\n        body: \"bunnsyogaarimasenn\"\n      }];\n      var _problemBodys = [];\n      // let count = problems.length;\n      for (var _i2 = 0; _i2 < problems.length; _i2++) {\n        _problemBodys[_i2] = problems[_i2].body;\n      }\n      problem = _problemBodys.splice(num, 1)[0];\n      target.textContent = problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */\n      targetTitle.textContent = problems[num].title;\n      loc = 0;\n      num++;\n    }\n    // let texts = [...Laravel.texts];\n    // // 配列の初期化。\n    // let problems = [];\n    // // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。\n    // for (let i = 0; i < texts.length; i++) {\n    //     const title = texts[i].title;\n    //     const body = texts[i].body;\n    //     problems[i] = { title, body };\n    // }\n    // let problemBodys = [];\n\n    // for (let i = 0; i < problems.length; i++) {\n    //     problemBodys[i] = problems[i].body;\n    // }\n    // problem = problemBodys.splice(num, 1)[0];\n    // target.textContent =\n    //     problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */\n    // targetTitle.textContent = problems[num].title;\n    // loc = 0;\n    // num++;\n  }; // 初期化。\n  // ==================== //\n  /* モーダルウィンドウ（タイピングゲーム内に仕込んだ）。 */\n  // ==================== //\n\n  /* DOM操作。 */\n  var typingModalWindow = document.getElementById(\"typingModalWindow\");\n  var mask = document.getElementById(\"mask\");\n  var problem;\n  var loc = 0;\n  var num = 0;\n  var playing = false;\n  var count;\n  var problems = [];\n\n  // // /* DOM操作。 */\n  var target = document.getElementById(\"target\");\n  var targetTitle = document.getElementById(\"targetTitle\");\n  var startButtonParent = document.getElementById(\"startButtonParent\");\n  var finishedMsg = document.createElement(\"p\");\n  finishedMsg.textContent = \"finished!!\";\n  finishedMsg.style.paddingTop = \"20px\";\n  startButtonParent.addEventListener(\"click\", function () {\n    if (playing) {\n      return;\n    }\n    startButtonParent.classList.add(\"none\");\n    // モーダルウィンドウの実装。\n    typingModalWindow.classList.remove(\"hidden\");\n    mask.classList.remove(\"hidden\");\n    playing = true;\n    setProblem();\n    console.log(\"hoge1\");\n  });\n  document.addEventListener(\"keydown\", function (e) {\n    // startボタンが押下されていない場合には，以下の処理を実行するわけにはいかないので，早期リターンする必要がある。\n    if (!playing) {\n      return;\n    }\n    if (e.key !== problem[loc]) {\n      return;\n    }\n    loc++;\n    target.textContent = \"-\".repeat(loc) + problem.substring(loc);\n    if (loc === problem.length) {\n      console.log(num);\n      // numはsetProblem()が呼び出されるたびに1増える。そのnumが文書数と一致するまでカウントされたとき，タイピングを終了させればよい。\n      if (num === problems.length) {\n        // 2秒後に再リロード。\n        setTimeout(function () {\n          startButtonParent.classList.remove(\"none\");\n          window.location.reload();\n        }, 2000);\n        target.textContent = \"\";\n        targetTitle.textContent = \"\";\n        target.previousElementSibling.appendChild(finishedMsg);\n        return;\n      }\n      console.log(\"hoge3\");\n      setProblem();\n    }\n  });\n\n  // ==================== //\n  /* アコーディオン。 */\n  // ==================== //\n\n  /* DOM操作。 */\n  var trs = document.querySelectorAll(\".tr\");\n  trs.forEach(function (tr) {\n    var children = tr.children;\n    console.log(children);\n    children[3].addEventListener(\"click\", function () {\n      console.log(tr.nextElementSibling);\n      tr.nextElementSibling.classList.toggle(\"open\");\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUViO0VBU0k7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFBQSxJQUNTQSxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsR0FBRztJQUNsQixJQUFJO01BQ0EsSUFBSUMsS0FBSyxzQkFBT0MsT0FBTyxDQUFDRCxLQUFLLENBQUM7TUFDOUI7TUFDQTtNQUNBO01BQ0EsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLEtBQUssQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUNuQyxJQUFNRSxLQUFLLEdBQUdKLEtBQUssQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLEtBQUs7UUFDNUIsSUFBTUMsSUFBSSxHQUFHTCxLQUFLLENBQUNFLENBQUMsQ0FBQyxDQUFDRyxJQUFJO1FBQzFCQyxRQUFRLENBQUNKLENBQUMsQ0FBQyxHQUFHO1VBQUVFLEtBQUssRUFBTEEsS0FBSztVQUFFQyxJQUFJLEVBQUpBO1FBQUssQ0FBQztNQUNqQztNQUNBLElBQUlFLFlBQVksR0FBRyxFQUFFO01BQ3JCOztNQUVBLEtBQUssSUFBSUwsRUFBQyxHQUFHLENBQUMsRUFBRUEsRUFBQyxHQUFHSSxRQUFRLENBQUNILE1BQU0sRUFBRUQsRUFBQyxFQUFFLEVBQUU7UUFDdENLLFlBQVksQ0FBQ0wsRUFBQyxDQUFDLEdBQUdJLFFBQVEsQ0FBQ0osRUFBQyxDQUFDLENBQUNHLElBQUk7TUFDdEM7TUFDQUcsT0FBTyxHQUFHRCxZQUFZLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN4Q0MsTUFBTSxDQUFDQyxXQUFXLEdBQ2RKLE9BQU8sQ0FBQyxDQUFDO01BQ2JLLFdBQVcsQ0FBQ0QsV0FBVyxHQUFHTixRQUFRLENBQUNJLEdBQUcsQ0FBQyxDQUFDTixLQUFLO01BQzdDVSxHQUFHLEdBQUcsQ0FBQztNQUNQSixHQUFHLEVBQUU7SUFDVCxDQUFDLENBQUMsT0FBT0ssQ0FBQyxFQUFFO01BQ1JULFFBQVEsR0FBRyxDQUNQO1FBQ0lGLEtBQUssRUFBRSxVQUFVO1FBQ2pCQyxJQUFJLEVBQUU7TUFDVixDQUFDLENBQ0o7TUFDRCxJQUFJRSxhQUFZLEdBQUcsRUFBRTtNQUNyQjtNQUNBLEtBQUssSUFBSUwsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxHQUFHSSxRQUFRLENBQUNILE1BQU0sRUFBRUQsR0FBQyxFQUFFLEVBQUU7UUFDdENLLGFBQVksQ0FBQ0wsR0FBQyxDQUFDLEdBQUdJLFFBQVEsQ0FBQ0osR0FBQyxDQUFDLENBQUNHLElBQUk7TUFDdEM7TUFDQUcsT0FBTyxHQUFHRCxhQUFZLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN4Q0MsTUFBTSxDQUFDQyxXQUFXLEdBQ2RKLE9BQU8sQ0FBQyxDQUFDO01BQ2JLLFdBQVcsQ0FBQ0QsV0FBVyxHQUFHTixRQUFRLENBQUNJLEdBQUcsQ0FBQyxDQUFDTixLQUFLO01BQzdDVSxHQUFHLEdBQUcsQ0FBQztNQUNQSixHQUFHLEVBQUU7SUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNKLENBQUMsRUFFRDtFQW5HQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQSxJQUFNTSxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7RUFDdEUsSUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUE4RjVDLElBQUlWLE9BQU87RUFDWCxJQUFJTSxHQUFHLEdBQUcsQ0FBQztFQUNYLElBQUlKLEdBQUcsR0FBRyxDQUFDO0VBQ1gsSUFBSVUsT0FBTyxHQUFHLEtBQUs7RUFDbkIsSUFBSUMsS0FBSztFQUNULElBQUlmLFFBQVEsR0FBRyxFQUFFOztFQUVqQjtFQUNBLElBQU1LLE1BQU0sR0FBR00sUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQ2hELElBQU1MLFdBQVcsR0FBR0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQzFELElBQU1JLGlCQUFpQixHQUFHTCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztFQUN0RSxJQUFNSyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMvQ0QsV0FBVyxDQUFDWCxXQUFXLEdBQUcsWUFBWTtFQUN0Q1csV0FBVyxDQUFDRSxLQUFLLENBQUNDLFVBQVUsR0FBRyxNQUFNO0VBRXJDSixpQkFBaUIsQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDOUMsSUFBSVAsT0FBTyxFQUFFO01BQ1Q7SUFDSjtJQUNBRSxpQkFBaUIsQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3ZDO0lBQ0FiLGlCQUFpQixDQUFDWSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDNUNYLElBQUksQ0FBQ1MsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0lBRS9CVixPQUFPLEdBQUcsSUFBSTtJQUNkckIsVUFBVSxFQUFFO0lBQ1pnQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDeEIsQ0FBQyxDQUFDO0VBRUZmLFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUNaLENBQUMsRUFBSztJQUN4QztJQUNBLElBQUksQ0FBQ0ssT0FBTyxFQUFFO01BQ1Y7SUFDSjtJQUVBLElBQUlMLENBQUMsQ0FBQ2tCLEdBQUcsS0FBS3pCLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLEVBQUU7TUFDeEI7SUFDSjtJQUVBQSxHQUFHLEVBQUU7SUFFTEgsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxDQUFDc0IsTUFBTSxDQUFDcEIsR0FBRyxDQUFDLEdBQUdOLE9BQU8sQ0FBQzJCLFNBQVMsQ0FBQ3JCLEdBQUcsQ0FBQztJQUU3RCxJQUFJQSxHQUFHLEtBQUtOLE9BQU8sQ0FBQ0wsTUFBTSxFQUFFO01BQ3hCNEIsT0FBTyxDQUFDQyxHQUFHLENBQUN0QixHQUFHLENBQUM7TUFDaEI7TUFDQSxJQUFJQSxHQUFHLEtBQUtKLFFBQVEsQ0FBQ0gsTUFBTSxFQUFFO1FBQ3pCO1FBQ0FpQyxVQUFVLENBQUMsWUFBTTtVQUNiZCxpQkFBaUIsQ0FBQ00sU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1VBQzFDTyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO1FBQzVCLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDUjVCLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEVBQUU7UUFDdkJDLFdBQVcsQ0FBQ0QsV0FBVyxHQUFHLEVBQUU7UUFDNUJELE1BQU0sQ0FBQzZCLHNCQUFzQixDQUFDQyxXQUFXLENBQUNsQixXQUFXLENBQUM7UUFDdEQ7TUFDSjtNQUVBUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDcEJqQyxVQUFVLEVBQUU7SUFDaEI7RUFDSixDQUFDLENBQUM7O0VBRUY7RUFDQTtFQUNBOztFQUVBO0VBQ0EsSUFBTTJDLEdBQUcsR0FBR3pCLFFBQVEsQ0FBQzBCLGdCQUFnQixDQUFDLEtBQUssQ0FBQztFQUM1Q0QsR0FBRyxDQUFDRSxPQUFPLENBQUMsVUFBQ0MsRUFBRSxFQUFLO0lBQ2hCLElBQUlDLFFBQVEsR0FBR0QsRUFBRSxDQUFDQyxRQUFRO0lBQzFCZixPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsUUFBUSxDQUFDO0lBQ3JCQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUN4Q0ksT0FBTyxDQUFDQyxHQUFHLENBQUNhLEVBQUUsQ0FBQ0Usa0JBQWtCLENBQUM7TUFDbENGLEVBQUUsQ0FBQ0Usa0JBQWtCLENBQUNuQixTQUFTLENBQUNvQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcz9jZWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG57XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gLy9cbiAgICAvKiDjg6Ljg7zjg4Djg6vjgqbjgqPjg7Pjg4njgqbvvIjjgr/jgqTjg5Tjg7PjgrDjgrLjg7zjg6DlhoXjgavku5XovrzjgpPjgaDvvInjgIIgKi9cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSAvL1xuXG4gICAgLyogRE9N5pON5L2c44CCICovXG4gICAgY29uc3QgdHlwaW5nTW9kYWxXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGluZ01vZGFsV2luZG93XCIpO1xuICAgIGNvbnN0IG1hc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hc2tcIik7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSAvL1xuICAgIC8qIOOCv+OCpOODlOODs+OCsOOCsuODvOODoOOAgiAqL1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09IC8vXG5cbiAgICAvLyBob21lLmJsYWRlLnBocOOBi+OCiSR0ZXh0c+OCkuWPl+OBkeWPluOBo+OBpuOBhOOCi+OAgkxhcmF2ZWzjgpJ0ZXh0c+OBruWJjeOBq+OBpOOBkeOCi+OBk+OBqOOAguOCueODl+ODrOODg+ODieani+aWh+OBp+WxlemWi+OBl++8jOaWsOOBl+OBhOmFjeWIl+OCkuS9nOaIkOOBl+OBpuOBhOOCi+OAglxuICAgIC8vIHRyeSB7XG4gICAgLy8gICAgIGxldCB0ZXh0cyA9IFsuLi5MYXJhdmVsLnRleHRzXTtcbiAgICAvLyB9IGNhdGNoIChlKSB7XG4gICAgLy8gICAgIHByb2JsZW1zID0gW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiBcIuaWh+abuOOBjOOBguOCiuOBvuOBm+OCk1wiLFxuICAgIC8vICAgICAgICAgICAgIGJvZHk6IFwiYnVubnN5b2dhYXJpbWFzZW5uXCIsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICBdO1xuICAgIC8vIH1cbiAgICAvLyAvLyBsZXQgdGV4dHMgPSBbLi4uTGFyYXZlbC50ZXh0c107XG4gICAgLy8gLy8gLy8g6YWN5YiX44Gu5Yid5pyf5YyW44CCXG4gICAgLy8gbGV0IHByb2JsZW1zID0gW107XG4gICAgLy8gLy8gdGV4dHPjga7lgIvmlbDliIbjg6vjg7zjg5fjgILjgqrjg5bjgrjjgqfjgq/jg4jjg6rjg4bjg6njg6vjgpLliKnnlKjjgZfjgabjgr/jgqTjg4jjg6vjgajmnKzmlofjga7jgb/mir3lh7rjgZfjgabjgYTjgovjgIJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIGNvbnN0IHRpdGxlID0gdGV4dHNbaV0udGl0bGU7XG4gICAgLy8gICAgIGNvbnN0IGJvZHkgPSB0ZXh0c1tpXS5ib2R5O1xuICAgIC8vICAgICBwcm9ibGVtc1tpXSA9IHsgdGl0bGUsIGJvZHkgfTtcbiAgICAvLyB9XG4gICAgLy8gbGV0IHByb2JsZW1Cb2R5cyA9IFtdO1xuXG4gICAgLy8gc2V0UHJvYmxlbeODoeOCveODg+ODieOBruWumue+qeOAglxuICAgIGZ1bmN0aW9uIHNldFByb2JsZW0oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdGV4dHMgPSBbLi4uTGFyYXZlbC50ZXh0c107XG4gICAgICAgICAgICAvLyAvLyDphY3liJfjga7liJ3mnJ/ljJbjgIJcbiAgICAgICAgICAgIC8vIGxldCBwcm9ibGVtcyA9IFtdO1xuICAgICAgICAgICAgLy8gdGV4dHPjga7lgIvmlbDliIbjg6vjg7zjg5fjgILjgqrjg5bjgrjjgqfjgq/jg4jjg6rjg4bjg6njg6vjgpLliKnnlKjjgZfjgabjgr/jgqTjg4jjg6vjgajmnKzmlofjga7jgb/mir3lh7rjgZfjgabjgYTjgovjgIJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRleHRzW2ldLnRpdGxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB0ZXh0c1tpXS5ib2R5O1xuICAgICAgICAgICAgICAgIHByb2JsZW1zW2ldID0geyB0aXRsZSwgYm9keSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHByb2JsZW1Cb2R5cyA9IFtdO1xuICAgICAgICAgICAgLy8gbGV0IGNvdW50ID0gcHJvYmxlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2JsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJvYmxlbUJvZHlzW2ldID0gcHJvYmxlbXNbaV0uYm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2JsZW0gPSBwcm9ibGVtQm9keXMuc3BsaWNlKG51bSwgMSlbMF07XG4gICAgICAgICAgICB0YXJnZXQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgIHByb2JsZW07IC8qIHRleHRDb250ZW5044OX44Ot44OR44OG44Kj44GvaW5uZXJUZXh044OX44Ot44OR44OG44Kj44Gn44KCT0vjgaDjgYzvvIzlvozogIXjga9DU1Pjga7jgrnjgr/jgqTjg6vjgoLliqDlkbPjgZfjgablh6bnkIbjgZXjgozjgovplqLkv4LvvIjlho3jg5Xjg63jg7zvvInjgafoqIjnrpfjgYzph43jgY/jgarjgovjga7jgafpgb/jgZHjgovjgbnjgY3jgIIgKi9cbiAgICAgICAgICAgIHRhcmdldFRpdGxlLnRleHRDb250ZW50ID0gcHJvYmxlbXNbbnVtXS50aXRsZTtcbiAgICAgICAgICAgIGxvYyA9IDA7XG4gICAgICAgICAgICBudW0rKztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcHJvYmxlbXMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmlofmm7jjgYzjgYLjgorjgb7jgZvjgpNcIixcbiAgICAgICAgICAgICAgICAgICAgYm9keTogXCJidW5uc3lvZ2FhcmltYXNlbm5cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGxldCBwcm9ibGVtQm9keXMgPSBbXTtcbiAgICAgICAgICAgIC8vIGxldCBjb3VudCA9IHByb2JsZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcm9ibGVtQm9keXNbaV0gPSBwcm9ibGVtc1tpXS5ib2R5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvYmxlbSA9IHByb2JsZW1Cb2R5cy5zcGxpY2UobnVtLCAxKVswXTtcbiAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgcHJvYmxlbTsgLyogdGV4dENvbnRlbnTjg5fjg63jg5Hjg4bjgqPjga9pbm5lclRleHTjg5fjg63jg5Hjg4bjgqPjgafjgoJPS+OBoOOBjO+8jOW+jOiAheOBr0NTU+OBruOCueOCv+OCpOODq+OCguWKoOWRs+OBl+OBpuWHpueQhuOBleOCjOOCi+mWouS/gu+8iOWGjeODleODreODvO+8ieOBp+ioiOeul+OBjOmHjeOBj+OBquOCi+OBruOBp+mBv+OBkeOCi+OBueOBjeOAgiAqL1xuICAgICAgICAgICAgdGFyZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9ibGVtc1tudW1dLnRpdGxlO1xuICAgICAgICAgICAgbG9jID0gMDtcbiAgICAgICAgICAgIG51bSsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxldCB0ZXh0cyA9IFsuLi5MYXJhdmVsLnRleHRzXTtcbiAgICAgICAgLy8gLy8g6YWN5YiX44Gu5Yid5pyf5YyW44CCXG4gICAgICAgIC8vIGxldCBwcm9ibGVtcyA9IFtdO1xuICAgICAgICAvLyAvLyB0ZXh0c+OBruWAi+aVsOWIhuODq+ODvOODl+OAguOCquODluOCuOOCp+OCr+ODiOODquODhuODqeODq+OCkuWIqeeUqOOBl+OBpuOCv+OCpOODiOODq+OBqOacrOaWh+OBruOBv+aKveWHuuOBl+OBpuOBhOOCi+OAglxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBjb25zdCB0aXRsZSA9IHRleHRzW2ldLnRpdGxlO1xuICAgICAgICAvLyAgICAgY29uc3QgYm9keSA9IHRleHRzW2ldLmJvZHk7XG4gICAgICAgIC8vICAgICBwcm9ibGVtc1tpXSA9IHsgdGl0bGUsIGJvZHkgfTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBsZXQgcHJvYmxlbUJvZHlzID0gW107XG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9ibGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgcHJvYmxlbUJvZHlzW2ldID0gcHJvYmxlbXNbaV0uYm9keTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBwcm9ibGVtID0gcHJvYmxlbUJvZHlzLnNwbGljZShudW0sIDEpWzBdO1xuICAgICAgICAvLyB0YXJnZXQudGV4dENvbnRlbnQgPVxuICAgICAgICAvLyAgICAgcHJvYmxlbTsgLyogdGV4dENvbnRlbnTjg5fjg63jg5Hjg4bjgqPjga9pbm5lclRleHTjg5fjg63jg5Hjg4bjgqPjgafjgoJPS+OBoOOBjO+8jOW+jOiAheOBr0NTU+OBruOCueOCv+OCpOODq+OCguWKoOWRs+OBl+OBpuWHpueQhuOBleOCjOOCi+mWouS/gu+8iOWGjeODleODreODvO+8ieOBp+ioiOeul+OBjOmHjeOBj+OBquOCi+OBruOBp+mBv+OBkeOCi+OBueOBjeOAgiAqL1xuICAgICAgICAvLyB0YXJnZXRUaXRsZS50ZXh0Q29udGVudCA9IHByb2JsZW1zW251bV0udGl0bGU7XG4gICAgICAgIC8vIGxvYyA9IDA7XG4gICAgICAgIC8vIG51bSsrO1xuICAgIH1cblxuICAgIC8vIOWIneacn+WMluOAglxuICAgIGxldCBwcm9ibGVtO1xuICAgIGxldCBsb2MgPSAwO1xuICAgIGxldCBudW0gPSAwO1xuICAgIGxldCBwbGF5aW5nID0gZmFsc2U7XG4gICAgbGV0IGNvdW50O1xuICAgIGxldCBwcm9ibGVtcyA9IFtdO1xuXG4gICAgLy8gLy8gLyogRE9N5pON5L2c44CCICovXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIik7XG4gICAgY29uc3QgdGFyZ2V0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRpdGxlXCIpO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uUGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEJ1dHRvblBhcmVudFwiKTtcbiAgICBjb25zdCBmaW5pc2hlZE1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZpbmlzaGVkTXNnLnRleHRDb250ZW50ID0gXCJmaW5pc2hlZCEhXCI7XG4gICAgZmluaXNoZWRNc2cuc3R5bGUucGFkZGluZ1RvcCA9IFwiMjBweFwiO1xuXG4gICAgc3RhcnRCdXR0b25QYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGFydEJ1dHRvblBhcmVudC5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICAgICAgLy8g44Oi44O844OA44Or44Km44Kj44Oz44OJ44Km44Gu5a6f6KOF44CCXG4gICAgICAgIHR5cGluZ01vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIG1hc2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgICAgICBwbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0UHJvYmxlbSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhvZ2UxXCIpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgLy8gc3RhcnTjg5zjgr/jg7PjgYzmirzkuIvjgZXjgozjgabjgYTjgarjgYTloLTlkIjjgavjga/vvIzku6XkuIvjga7lh6bnkIbjgpLlrp/ooYzjgZnjgovjgo/jgZHjgavjga/jgYTjgYvjgarjgYTjga7jgafvvIzml6nmnJ/jg6rjgr/jg7zjg7PjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcbiAgICAgICAgaWYgKCFwbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgIT09IHByb2JsZW1bbG9jXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jKys7XG5cbiAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gXCItXCIucmVwZWF0KGxvYykgKyBwcm9ibGVtLnN1YnN0cmluZyhsb2MpO1xuXG4gICAgICAgIGlmIChsb2MgPT09IHByb2JsZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhudW0pO1xuICAgICAgICAgICAgLy8gbnVt44Gvc2V0UHJvYmxlbSgp44GM5ZG844Gz5Ye644GV44KM44KL44Gf44Gz44GrMeWil+OBiOOCi+OAguOBneOBrm51beOBjOaWh+abuOaVsOOBqOS4gOiHtOOBmeOCi+OBvuOBp+OCq+OCpuODs+ODiOOBleOCjOOBn+OBqOOBje+8jOOCv+OCpOODlOODs+OCsOOCkue1guS6huOBleOBm+OCjOOBsOOCiOOBhOOAglxuICAgICAgICAgICAgaWYgKG51bSA9PT0gcHJvYmxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gMuenkuW+jOOBq+WGjeODquODreODvOODieOAglxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEJ1dHRvblBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmFwcGVuZENoaWxkKGZpbmlzaGVkTXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG9nZTNcIik7XG4gICAgICAgICAgICBzZXRQcm9ibGVtKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IC8vXG4gICAgLyog44Ki44Kz44O844OH44Kj44Kq44Oz44CCICovXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gLy9cblxuICAgIC8qIERPTeaTjeS9nOOAgiAqL1xuICAgIGNvbnN0IHRycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJcIik7XG4gICAgdHJzLmZvckVhY2goKHRyKSA9PiB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRyLmNoaWxkcmVuO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuWzNdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ci5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgdHIubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJzZXRQcm9ibGVtIiwidGV4dHMiLCJMYXJhdmVsIiwiaSIsImxlbmd0aCIsInRpdGxlIiwiYm9keSIsInByb2JsZW1zIiwicHJvYmxlbUJvZHlzIiwicHJvYmxlbSIsInNwbGljZSIsIm51bSIsInRhcmdldCIsInRleHRDb250ZW50IiwidGFyZ2V0VGl0bGUiLCJsb2MiLCJlIiwidHlwaW5nTW9kYWxXaW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWFzayIsInBsYXlpbmciLCJjb3VudCIsInN0YXJ0QnV0dG9uUGFyZW50IiwiZmluaXNoZWRNc2ciLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwYWRkaW5nVG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJyZXBlYXQiLCJzdWJzdHJpbmciLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiYXBwZW5kQ2hpbGQiLCJ0cnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRyIiwiY2hpbGRyZW4iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

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