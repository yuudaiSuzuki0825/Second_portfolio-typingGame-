"use strict";

{
    // ==================== //
    /* モーダルウィンドウ（タイピングゲーム内に仕込んだ）。 */
    // ==================== //

    /* DOM操作。 */
    const typingModalWindow = document.getElementById("typingModalWindow");
    const mask = document.getElementById("mask");

    // ==================== //
    /* タイピングゲーム。 */
    // ==================== //

    // home.blade.phpから$textsを受け取っている。Laravelをtextsの前につけること。スプレッド構文で展開し，新しい配列を作成している。
    // try {
    //     let texts = [...Laravel.texts];
    // } catch (e) {
    //     problems = [
    //         {
    //             title: "文書がありません",
    //             body: "bunnsyogaarimasenn",
    //         },
    //     ];
    // }
    // // let texts = [...Laravel.texts];
    // // // 配列の初期化。
    // let problems = [];
    // // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。
    // for (let i = 0; i < texts.length; i++) {
    //     const title = texts[i].title;
    //     const body = texts[i].body;
    //     problems[i] = { title, body };
    // }
    // let problemBodys = [];

    // setProblemメソッドの定義。tryとcatchで例外処理を行っている。もし受け取ったtextsが空（文書がない）だった場合はデフォルトの文書を代わりにタイプする仕様にした。
    function setProblem() {
        try {
            // home.blade.phpから$textsを受け取っている。Laravelをtextsの前につけること。スプレッド構文で展開し，新しい配列を作成している。
            let texts = [...Laravel.texts];
            // // 配列の初期化。
            // let problems = [];
            // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。
            for (let i = 0; i < texts.length; i++) {
                const title = texts[i].title;
                const body = texts[i].body;
                problems[i] = { title, body };
            }
            let problemBodys = [];
            // let count = problems.length;

            for (let i = 0; i < problems.length; i++) {
                problemBodys[i] = problems[i].body;
            }
            problem = problemBodys.splice(num, 1)[0];
            target.textContent =
                problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */
            targetTitle.textContent = problems[num].title;
            loc = 0;
            num++;
        } catch (e) {
            // 文書が1つもないときは以下の処理が実行される。
            // 代替文書を作成し，セット。
            problems = [
                {
                    title: "文書がありません",
                    body: "bunnsyogaarimasenn",
                },
            ];
            let problemBodys = [];
            // let count = problems.length;
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
        // let texts = [...Laravel.texts];
        // // 配列の初期化。
        // let problems = [];
        // // textsの個数分ループ。オブジェクトリテラルを利用してタイトルと本文のみ抽出している。
        // for (let i = 0; i < texts.length; i++) {
        //     const title = texts[i].title;
        //     const body = texts[i].body;
        //     problems[i] = { title, body };
        // }
        // let problemBodys = [];

        // for (let i = 0; i < problems.length; i++) {
        //     problemBodys[i] = problems[i].body;
        // }
        // problem = problemBodys.splice(num, 1)[0];
        // target.textContent =
        //     problem; /* textContentプロパティはinnerTextプロパティでもOKだが，後者はCSSのスタイルも加味して処理される関係（再フロー）で計算が重くなるので避けるべき。 */
        // targetTitle.textContent = problems[num].title;
        // loc = 0;
        // num++;
    }

    // 初期化。以下はグローバル定義にする必要がある。
    let problem;
    let loc = 0;
    let num = 0;
    let playing = false;
    let problems = [];

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
        // startボタンが押下されていない場合には，以下の処理を実行するわけにはいかないので，早期リターンする必要がある。
        if (!playing) {
            return;
        }

        if (e.key !== problem[loc]) {
            return;
        }

        loc++;

        target.textContent = "".repeat(loc) + problem.substring(loc);

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

    // ==================== //
    /* アコーディオン。 */
    // ==================== //

    /* DOM操作。 */
    const trs = document.querySelectorAll(".tr");
    trs.forEach((tr) => {
        let children = tr.children;
        console.log(children);
        children[3].addEventListener("click", () => {
            console.log(tr.nextElementSibling);
            tr.nextElementSibling.classList.toggle("open");
            tr.children[3].classList.toggle("open");
        });
    });

    /* =================================================== */
    // 「GoodJob」通知のアニメーション。
    /* =================================================== */
}
