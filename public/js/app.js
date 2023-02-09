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

eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n{\n  // ==================== //\n  /* タイピングゲーム。 */\n  // ==================== //\n  // home.blade.phpから$textsを受け取っている。Laravelをtextsの前につけること。スプレッド構文で展開し，新しい配列を作成している。\n  // try {\n  //     let texts = [...Laravel.texts];\n  // } catch (e) {\n  //     problems = [\n  //         {\n  //             title: \"文書がありません\",\n  //             body: \"bunnsyogaarimasenn\",\n  //         },\n  //     ];\n  // }\n  // // let texts = [...Laravel.texts];\n  // // // 配列の初期化。\n  // let problems = [];\n  // // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。\n  // for (let i = 0; i < texts.length; i++) {\n  //     const title = texts[i].title;\n  //     const body = texts[i].body;\n  //     problems[i] = { title, body };\n  // }\n  // let problemBodys = [];\n  // setProblemメソッドの定義。tryとcatchで例外処理を行っている。もし受け取ったtextsが空（文書がない）だった場合はデフォルトの文書を代わりにタイプする仕様にした。\n  var setProblem = function setProblem() {\n    try {\n      // home.blade.phpから$textsを受け取っている。Laravelをtextsの前につけること。スプレッド構文で展開し，新しい配列を作成している。\n      var texts = _toConsumableArray(Laravel.texts);\n      // // 配列の初期化。\n      // let problems = [];\n      // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。\n      for (var i = 0; i < texts.length; i++) {\n        var title = texts[i].title;\n        var body = texts[i].body;\n        problems[i] = {\n          title: title,\n          body: body\n        };\n      }\n      var problemBodys = [];\n      // let count = problems.length;\n\n      for (var _i = 0; _i < problems.length; _i++) {\n        problemBodys[_i] = problems[_i].body;\n      }\n      problem = problemBodys.splice(num, 1)[0];\n      target.textContent = problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */\n      targetTitle.textContent = problems[num].title;\n      loc = 0;\n      num++;\n    } catch (e) {\n      // 文書が1つもないときは以下の処理が実行される。\n      // 代替文書を作成し，セット。\n      problems = [{\n        title: \"文書がありません\",\n        body: \"bunnsyogaarimasenn\"\n      }];\n      var _problemBodys = [];\n      // let count = problems.length;\n      for (var _i2 = 0; _i2 < problems.length; _i2++) {\n        _problemBodys[_i2] = problems[_i2].body;\n      }\n      problem = _problemBodys.splice(num, 1)[0];\n      target.textContent = problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */\n      targetTitle.textContent = problems[num].title;\n      loc = 0;\n      num++;\n    }\n    // let texts = [...Laravel.texts];\n    // // 配列の初期化。\n    // let problems = [];\n    // // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。\n    // for (let i = 0; i < texts.length; i++) {\n    //     const title = texts[i].title;\n    //     const body = texts[i].body;\n    //     problems[i] = { title, body };\n    // }\n    // let problemBodys = [];\n\n    // for (let i = 0; i < problems.length; i++) {\n    //     problemBodys[i] = problems[i].body;\n    // }\n    // problem = problemBodys.splice(num, 1)[0];\n    // target.textContent =\n    //     problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */\n    // targetTitle.textContent = problems[num].title;\n    // loc = 0;\n    // num++;\n  }; // 初期化。以下はグローバル定義にする必要がある。\n  // ==================== //\n  /* モーダルウィンドウ（タイピングゲーム内に仕込んだ）。 */\n  // ==================== //\n\n  /* DOM操作。 */\n  var typingModalWindow = document.getElementById(\"typingModalWindow\");\n  var mask = document.getElementById(\"mask\");\n  var problem;\n  var loc = 0;\n  var num = 0;\n  var playing = false;\n  var problems = [];\n\n  // // /* DOM操作。 */\n  var target = document.getElementById(\"target\");\n  var targetTitle = document.getElementById(\"targetTitle\");\n  var startButtonParent = document.getElementById(\"startButtonParent\");\n  var finishedMsg = document.createElement(\"p\");\n  finishedMsg.textContent = \"finished!!\";\n  finishedMsg.style.paddingTop = \"20px\";\n  startButtonParent.addEventListener(\"click\", function () {\n    if (playing) {\n      return;\n    }\n    startButtonParent.classList.add(\"none\");\n    // モーダルウィンドウの実装。\n    typingModalWindow.classList.remove(\"hidden\");\n    mask.classList.remove(\"hidden\");\n    playing = true;\n    setProblem();\n    console.log(\"hoge1\");\n  });\n  document.addEventListener(\"keydown\", function (e) {\n    // startボタンが押下されていない場合には，以下の処理を実行するわけにはいかないので，早期リターンする必要がある。\n    if (!playing) {\n      return;\n    }\n    if (e.key !== problem[loc]) {\n      return;\n    }\n    loc++;\n    target.textContent = \"\".repeat(loc) + problem.substring(loc);\n    if (loc === problem.length) {\n      console.log(num);\n      // numはsetProblem()が呼び出されるたびに1増える。そのnumが文書数と一致するまでカウントされたとき，タイピングを終了させればよい。\n      if (num === problems.length) {\n        // 2秒後に再リロード。\n        setTimeout(function () {\n          startButtonParent.classList.remove(\"none\");\n          window.location.reload();\n        }, 2000);\n        target.textContent = \"\";\n        targetTitle.textContent = \"\";\n        target.previousElementSibling.appendChild(finishedMsg);\n        return;\n      }\n      console.log(\"hoge3\");\n      setProblem();\n    }\n  });\n\n  // ==================== //\n  /* アコーディオン。 */\n  // ==================== //\n\n  /* DOM操作。 */\n  var trs = document.querySelectorAll(\".tr\");\n  trs.forEach(function (tr) {\n    var children = tr.children;\n    console.log(children);\n    children[3].addEventListener(\"click\", function () {\n      console.log(tr.nextElementSibling);\n      tr.nextElementSibling.classList.toggle(\"open\");\n      tr.children[3].classList.toggle(\"open\");\n    });\n  });\n\n  /* =================================================== */\n  // 「GoodJob」通知のアニメーション。\n  /* =================================================== */\n\n  var fadeOut1 = function fadeOut1() {\n    if (!successMsg) {\n      return;\n    }\n    successMsg.classList.add(\"fadeOut\");\n  };\n  var fadeOut2 = function fadeOut2() {\n    if (!errorMsg) {\n      return;\n    }\n    errorMsg.classList.add(\"fadeOut\");\n  };\n  var fadeOut3 = function fadeOut3() {\n    if (!ngMsg) {\n      return;\n    }\n    ngMsg.classList.add(\"fadeOut\");\n  };\n  var successMsg = document.getElementById(\"successMsg\");\n  var errorMsg = document.getElementById(\"errorMsg\");\n  var ngMsg = document.getElementById(\"ngMsg\");\n  setTimeout(fadeOut1, 2500);\n  setTimeout(fadeOut2, 2500);\n  setTimeout(fadeOut3, 2500);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQztBQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanM/Y2VkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxue1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09IC8vXG4gICAgLyog44Oi44O844OA44Or44Km44Kj44Oz44OJ44Km77yI44K/44Kk44OU44Oz44Kw44Ky44O844Og5YaF44Gr5LuV6L6844KT44Gg77yJ44CCICovXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gLy9cblxuICAgIC8qIERPTeaTjeS9nOOAgiAqL1xuICAgIGNvbnN0IHR5cGluZ01vZGFsV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eXBpbmdNb2RhbFdpbmRvd1wiKTtcbiAgICBjb25zdCBtYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXNrXCIpO1xuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gLy9cbiAgICAvKiDjgr/jgqTjg5Tjg7PjgrDjgrLjg7zjg6DjgIIgKi9cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSAvL1xuXG4gICAgLy8gaG9tZS5ibGFkZS5waHDjgYvjgokkdGV4dHPjgpLlj5fjgZHlj5bjgaPjgabjgYTjgovjgIJMYXJhdmVs44KSdGV4dHPjga7liY3jgavjgaTjgZHjgovjgZPjgajjgILjgrnjg5fjg6zjg4Pjg4nmp4vmlofjgaflsZXplovjgZfvvIzmlrDjgZfjgYTphY3liJfjgpLkvZzmiJDjgZfjgabjgYTjgovjgIJcbiAgICAvLyB0cnkge1xuICAgIC8vICAgICBsZXQgdGV4dHMgPSBbLi4uTGFyYXZlbC50ZXh0c107XG4gICAgLy8gfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICBwcm9ibGVtcyA9IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogXCLmlofmm7jjgYzjgYLjgorjgb7jgZvjgpNcIixcbiAgICAvLyAgICAgICAgICAgICBib2R5OiBcImJ1bm5zeW9nYWFyaW1hc2VublwiLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXTtcbiAgICAvLyB9XG4gICAgLy8gLy8gbGV0IHRleHRzID0gWy4uLkxhcmF2ZWwudGV4dHNdO1xuICAgIC8vIC8vIC8vIOmFjeWIl+OBruWIneacn+WMluOAglxuICAgIC8vIGxldCBwcm9ibGVtcyA9IFtdO1xuICAgIC8vIC8vIHRleHRz44Gu5YCL5pWw5YiG44Or44O844OX44CC44Kq44OW44K444Kn44Kv44OI44Oq44OG44Op44Or44KS5Yip55So44GX44Gm44K/44Kk44OI44Or44Go5pys5paH44Gu44G/5oq95Ye644GX44Gm44GE44KL44CCXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0cy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICBjb25zdCB0aXRsZSA9IHRleHRzW2ldLnRpdGxlO1xuICAgIC8vICAgICBjb25zdCBib2R5ID0gdGV4dHNbaV0uYm9keTtcbiAgICAvLyAgICAgcHJvYmxlbXNbaV0gPSB7IHRpdGxlLCBib2R5IH07XG4gICAgLy8gfVxuICAgIC8vIGxldCBwcm9ibGVtQm9keXMgPSBbXTtcblxuICAgIC8vIHNldFByb2JsZW3jg6Hjgr3jg4Pjg4njga7lrprnvqnjgIJ0cnnjgahjYXRjaOOBp+S+i+WkluWHpueQhuOCkuihjOOBo+OBpuOBhOOCi+OAguOCguOBl+WPl+OBkeWPluOBo+OBn3RleHRz44GM56m677yI5paH5pu444GM44Gq44GE77yJ44Gg44Gj44Gf5aC05ZCI44Gv44OH44OV44Kp44Or44OI44Gu5paH5pu444KS5Luj44KP44KK44Gr44K/44Kk44OX44GZ44KL5LuV5qeY44Gr44GX44Gf44CCXG4gICAgZnVuY3Rpb24gc2V0UHJvYmxlbSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGhvbWUuYmxhZGUucGhw44GL44KJJHRleHRz44KS5Y+X44GR5Y+W44Gj44Gm44GE44KL44CCTGFyYXZlbOOCknRleHRz44Gu5YmN44Gr44Gk44GR44KL44GT44Go44CC44K544OX44Os44OD44OJ5qeL5paH44Gn5bGV6ZaL44GX77yM5paw44GX44GE6YWN5YiX44KS5L2c5oiQ44GX44Gm44GE44KL44CCXG4gICAgICAgICAgICBsZXQgdGV4dHMgPSBbLi4uTGFyYXZlbC50ZXh0c107XG4gICAgICAgICAgICAvLyAvLyDphY3liJfjga7liJ3mnJ/ljJbjgIJcbiAgICAgICAgICAgIC8vIGxldCBwcm9ibGVtcyA9IFtdO1xuICAgICAgICAgICAgLy8gdGV4dHPjga7lgIvmlbDliIbjg6vjg7zjg5fjgILjgqrjg5bjgrjjgqfjgq/jg4jjg6rjg4bjg6njg6vjgpLliKnnlKjjgZfjgabjgr/jgqTjg4jjg6vjgajmnKzmlofjga7jgb/mir3lh7rjgZfjgabjgYTjgovjgIJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRleHRzW2ldLnRpdGxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB0ZXh0c1tpXS5ib2R5O1xuICAgICAgICAgICAgICAgIHByb2JsZW1zW2ldID0geyB0aXRsZSwgYm9keSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHByb2JsZW1Cb2R5cyA9IFtdO1xuICAgICAgICAgICAgLy8gbGV0IGNvdW50ID0gcHJvYmxlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2JsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJvYmxlbUJvZHlzW2ldID0gcHJvYmxlbXNbaV0uYm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2JsZW0gPSBwcm9ibGVtQm9keXMuc3BsaWNlKG51bSwgMSlbMF07XG4gICAgICAgICAgICB0YXJnZXQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgIHByb2JsZW07IC8qIHRleHRDb250ZW5044OX44Ot44OR44OG44Kj44GvaW5uZXJUZXh044OX44Ot44OR44OG44Kj44Gn44KCT0vjgaDjgYzvvIzlvozogIXjga9DU1Pjga7jgrnjgr/jgqTjg6vjgoLliqDlkbPjgZfjgablh6bnkIbjgZXjgozjgovplqLkv4LvvIjlho3jg5Xjg63jg7zvvInjgafoqIjnrpfjgYzph43jgY/jgarjgovjga7jgafpgb/jgZHjgovjgbnjgY3jgIIgKi9cbiAgICAgICAgICAgIHRhcmdldFRpdGxlLnRleHRDb250ZW50ID0gcHJvYmxlbXNbbnVtXS50aXRsZTtcbiAgICAgICAgICAgIGxvYyA9IDA7XG4gICAgICAgICAgICBudW0rKztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8g5paH5pu444GMMeOBpOOCguOBquOBhOOBqOOBjeOBr+S7peS4i+OBruWHpueQhuOBjOWun+ihjOOBleOCjOOCi+OAglxuICAgICAgICAgICAgLy8g5Luj5pu/5paH5pu444KS5L2c5oiQ44GX77yM44K744OD44OI44CCXG4gICAgICAgICAgICBwcm9ibGVtcyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaWh+abuOOBjOOBguOCiuOBvuOBm+OCk1wiLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBcImJ1bm5zeW9nYWFyaW1hc2VublwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgbGV0IHByb2JsZW1Cb2R5cyA9IFtdO1xuICAgICAgICAgICAgLy8gbGV0IGNvdW50ID0gcHJvYmxlbXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9ibGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHByb2JsZW1Cb2R5c1tpXSA9IHByb2JsZW1zW2ldLmJvZHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9ibGVtID0gcHJvYmxlbUJvZHlzLnNwbGljZShudW0sIDEpWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICBwcm9ibGVtOyAvKiB0ZXh0Q29udGVudOODl+ODreODkeODhuOCo+OBr2lubmVyVGV4dOODl+ODreODkeODhuOCo+OBp+OCgk9L44Gg44GM77yM5b6M6ICF44GvQ1NT44Gu44K544K/44Kk44Or44KC5Yqg5ZGz44GX44Gm5Yem55CG44GV44KM44KL6Zai5L+C77yI5YaN44OV44Ot44O877yJ44Gn6KiI566X44GM6YeN44GP44Gq44KL44Gu44Gn6YG/44GR44KL44G544GN44CCICovXG4gICAgICAgICAgICB0YXJnZXRUaXRsZS50ZXh0Q29udGVudCA9IHByb2JsZW1zW251bV0udGl0bGU7XG4gICAgICAgICAgICBsb2MgPSAwO1xuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGV0IHRleHRzID0gWy4uLkxhcmF2ZWwudGV4dHNdO1xuICAgICAgICAvLyAvLyDphY3liJfjga7liJ3mnJ/ljJbjgIJcbiAgICAgICAgLy8gbGV0IHByb2JsZW1zID0gW107XG4gICAgICAgIC8vIC8vIHRleHRz44Gu5YCL5pWw5YiG44Or44O844OX44CC44Kq44OW44K444Kn44Kv44OI44Oq44OG44Op44Or44KS5Yip55So44GX44Gm44K/44Kk44OI44Or44Go5pys5paH44Gu44G/5oq95Ye644GX44Gm44GE44KL44CCXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IHRpdGxlID0gdGV4dHNbaV0udGl0bGU7XG4gICAgICAgIC8vICAgICBjb25zdCBib2R5ID0gdGV4dHNbaV0uYm9keTtcbiAgICAgICAgLy8gICAgIHByb2JsZW1zW2ldID0geyB0aXRsZSwgYm9keSB9O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGxldCBwcm9ibGVtQm9keXMgPSBbXTtcblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2JsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBwcm9ibGVtQm9keXNbaV0gPSBwcm9ibGVtc1tpXS5ib2R5O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHByb2JsZW0gPSBwcm9ibGVtQm9keXMuc3BsaWNlKG51bSwgMSlbMF07XG4gICAgICAgIC8vIHRhcmdldC50ZXh0Q29udGVudCA9XG4gICAgICAgIC8vICAgICBwcm9ibGVtOyAvKiB0ZXh0Q29udGVudOODl+ODreODkeODhuOCo+OBr2lubmVyVGV4dOODl+ODreODkeODhuOCo+OBp+OCgk9L44Gg44GM77yM5b6M6ICF44GvQ1NT44Gu44K544K/44Kk44Or44KC5Yqg5ZGz44GX44Gm5Yem55CG44GV44KM44KL6Zai5L+C77yI5YaN44OV44Ot44O877yJ44Gn6KiI566X44GM6YeN44GP44Gq44KL44Gu44Gn6YG/44GR44KL44G544GN44CCICovXG4gICAgICAgIC8vIHRhcmdldFRpdGxlLnRleHRDb250ZW50ID0gcHJvYmxlbXNbbnVtXS50aXRsZTtcbiAgICAgICAgLy8gbG9jID0gMDtcbiAgICAgICAgLy8gbnVtKys7XG4gICAgfVxuXG4gICAgLy8g5Yid5pyf5YyW44CC5Lul5LiL44Gv44Kw44Ot44O844OQ44Or5a6a576p44Gr44GZ44KL5b+F6KaB44GM44GC44KL44CCXG4gICAgbGV0IHByb2JsZW07XG4gICAgbGV0IGxvYyA9IDA7XG4gICAgbGV0IG51bSA9IDA7XG4gICAgbGV0IHBsYXlpbmcgPSBmYWxzZTtcbiAgICBsZXQgcHJvYmxlbXMgPSBbXTtcblxuICAgIC8vIC8vIC8qIERPTeaTjeS9nOOAgiAqL1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpO1xuICAgIGNvbnN0IHRhcmdldFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUaXRsZVwiKTtcbiAgICBjb25zdCBzdGFydEJ1dHRvblBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRCdXR0b25QYXJlbnRcIik7XG4gICAgY29uc3QgZmluaXNoZWRNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmaW5pc2hlZE1zZy50ZXh0Q29udGVudCA9IFwiZmluaXNoZWQhIVwiO1xuICAgIGZpbmlzaGVkTXNnLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjIwcHhcIjtcblxuICAgIHN0YXJ0QnV0dG9uUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRCdXR0b25QYXJlbnQuY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgICAgIC8vIOODouODvOODgOODq+OCpuOCo+ODs+ODieOCpuOBruWun+ijheOAglxuICAgICAgICB0eXBpbmdNb2RhbFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBtYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgcGxheWluZyA9IHRydWU7XG4gICAgICAgIHNldFByb2JsZW0oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJob2dlMVwiKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgIC8vIHN0YXJ044Oc44K/44Oz44GM5oq85LiL44GV44KM44Gm44GE44Gq44GE5aC05ZCI44Gr44Gv77yM5Lul5LiL44Gu5Yem55CG44KS5a6f6KGM44GZ44KL44KP44GR44Gr44Gv44GE44GL44Gq44GE44Gu44Gn77yM5pep5pyf44Oq44K/44O844Oz44GZ44KL5b+F6KaB44GM44GC44KL44CCXG4gICAgICAgIGlmICghcGxheWluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ICE9PSBwcm9ibGVtW2xvY10pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvYysrO1xuXG4gICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiXCIucmVwZWF0KGxvYykgKyBwcm9ibGVtLnN1YnN0cmluZyhsb2MpO1xuXG4gICAgICAgIGlmIChsb2MgPT09IHByb2JsZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhudW0pO1xuICAgICAgICAgICAgLy8gbnVt44Gvc2V0UHJvYmxlbSgp44GM5ZG844Gz5Ye644GV44KM44KL44Gf44Gz44GrMeWil+OBiOOCi+OAguOBneOBrm51beOBjOaWh+abuOaVsOOBqOS4gOiHtOOBmeOCi+OBvuOBp+OCq+OCpuODs+ODiOOBleOCjOOBn+OBqOOBje+8jOOCv+OCpOODlOODs+OCsOOCkue1guS6huOBleOBm+OCjOOBsOOCiOOBhOOAglxuICAgICAgICAgICAgaWYgKG51bSA9PT0gcHJvYmxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gMuenkuW+jOOBq+WGjeODquODreODvOODieOAglxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydEJ1dHRvblBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmFwcGVuZENoaWxkKGZpbmlzaGVkTXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG9nZTNcIik7XG4gICAgICAgICAgICBzZXRQcm9ibGVtKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IC8vXG4gICAgLyog44Ki44Kz44O844OH44Kj44Kq44Oz44CCICovXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gLy9cblxuICAgIC8qIERPTeaTjeS9nOOAgiAqL1xuICAgIGNvbnN0IHRycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJcIik7XG4gICAgdHJzLmZvckVhY2goKHRyKSA9PiB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRyLmNoaWxkcmVuO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuWzNdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ci5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgdHIubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgdHIuY2hpbGRyZW5bM10uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgLy8g44CMR29vZEpvYuOAjemAmuefpeOBruOCouODi+ODoeODvOOCt+ODp+ODs+OAglxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4gICAgY29uc3QgZmFkZU91dDEgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc3VjY2Vzc01zZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1Y2Nlc3NNc2cuY2xhc3NMaXN0LmFkZChcImZhZGVPdXRcIik7XG4gICAgfTtcbiAgICBjb25zdCBmYWRlT3V0MiA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFlcnJvck1zZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoXCJmYWRlT3V0XCIpO1xuICAgIH07XG4gICAgY29uc3QgZmFkZU91dDMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghbmdNc2cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuZ01zZy5jbGFzc0xpc3QuYWRkKFwiZmFkZU91dFwiKTtcbiAgICB9O1xuICAgIGNvbnN0IHN1Y2Nlc3NNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3NNc2dcIik7XG4gICAgY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yTXNnXCIpO1xuICAgIGNvbnN0IG5nTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZ01zZ1wiKTtcbiAgICBzZXRUaW1lb3V0KGZhZGVPdXQxLCAyNTAwKTtcbiAgICBzZXRUaW1lb3V0KGZhZGVPdXQyLCAyNTAwKTtcbiAgICBzZXRUaW1lb3V0KGZhZGVPdXQzLCAyNTAwKTtcbn1cbiJdLCJuYW1lcyI6WyJzZXRQcm9ibGVtIiwidGV4dHMiLCJMYXJhdmVsIiwiaSIsImxlbmd0aCIsInRpdGxlIiwiYm9keSIsInByb2JsZW1zIiwicHJvYmxlbUJvZHlzIiwicHJvYmxlbSIsInNwbGljZSIsIm51bSIsInRhcmdldCIsInRleHRDb250ZW50IiwidGFyZ2V0VGl0bGUiLCJsb2MiLCJlIiwidHlwaW5nTW9kYWxXaW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWFzayIsInBsYXlpbmciLCJzdGFydEJ1dHRvblBhcmVudCIsImZpbmlzaGVkTXNnIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicGFkZGluZ1RvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwia2V5IiwicmVwZWF0Iiwic3Vic3RyaW5nIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImFwcGVuZENoaWxkIiwidHJzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0ciIsImNoaWxkcmVuIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidG9nZ2xlIiwiZmFkZU91dDEiLCJzdWNjZXNzTXNnIiwiZmFkZU91dDIiLCJlcnJvck1zZyIsImZhZGVPdXQzIiwibmdNc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

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