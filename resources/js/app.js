"use strict";

{
    // ==================== //
    /* モーダルウィンドウ。 */
    // ==================== //

    /* DOM操作。 */
    const typingModalWindow = document.getElementById("typingModalWindow");
    const mask = document.getElementById("mask");

    // ==================== //
    /* タイピングゲーム。 */
    // ==================== //

    // home.blade.phpから$textsを受け取っている。Laravelをtextsの前につけること。スプレッド構文で展開し，新しい配列を作成している。
    const texts = [...Laravel.texts];
    // 配列の初期化。
    let problems = [];
    // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。
    for (let i = 0; i < texts.length; i++) {
        const title = texts[i].title;
        const body = texts[i].body;
        problems[i] = { title, body };
    }
    let problemBodys = [];

    // setProblemメソッドの定義。
    function setProblem() {
        for (let i = 0; i < problems.length; i++) {
            problemBodys[i] = problems[i].body;
        }
        problem = problemBodys.splice(num, 1)[0];
        target.textContent =
            problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */
        targetTitle.textContent = problems[num].title;
        loc = 0;
        num++;
    }

    // 初期化。
    let problem;
    let loc = 0;
    let num = 0;
    let playing = false;

    // // /* DOM操作。 */
    const target = document.getElementById("target");
    const targetTitle = document.getElementById("targetTitle");
    const startButtonParent = document.getElementById("startButtonParent");
    const finishedMsg = document.createElement("p");
    finishedMsg.textContent = "finished!!";
    finishedMsg.style.paddingTop = "20px";

    startButtonParent.addEventListener("click", () => {
        if (playing) {
            return;
        }
        startButtonParent.classList.add("none");
        // モーダルウィンドウの実装。
        typingModalWindow.classList.remove("hidden");
        mask.classList.remove("hidden");

        playing = true;
        setProblem();
        console.log("hoge1");
    });

    document.addEventListener("keydown", (e) => {
        if (e.key !== problem[loc]) {
            return;
        }

        loc++;

        target.textContent = "-".repeat(loc) + problem.substring(loc);

        if (loc === problem.length) {
            console.log(num);
            // numはsetProblem()が呼び出されるたびに1増える。そのnumが文書数と一致するまでカウントされたとき，タイピングを終了させればよい。
            if (num === problems.length) {
                // 2秒後に再リロード。
                setTimeout(() => {
                    startButtonParent.classList.remove("none");
                    window.location.reload();
                }, 2000);
                target.textContent = "";
                targetTitle.textContent = "";
                target.previousElementSibling.appendChild(finishedMsg);
                return;
            }

            console.log("hoge3");
            setProblem();
        }
    });
}
