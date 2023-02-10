"use strict";

{
    // ==================== //
    /* アコーディオン。 */
    // ==================== //

    /* DOM操作。 */
    const trs = document.querySelectorAll(".tr");
    trs.forEach((tr) => {
        let children = tr.children;
        // console.log(children);
        children[3].addEventListener("click", () => {
            // console.log(tr.nextElementSibling);
            tr.nextElementSibling.classList.toggle("open");
            tr.children[3].classList.toggle("open");
        });
        children[1].addEventListener("click", (e) => {
            e.preventDefault();
            if (!confirm("復元ができなくなりますが、本当に削除しますか。")) {
                return;
            }
            children[1].children[0].submit();
        });
    });

    /* =================================================== */
    // 「GoodJob」通知のアニメーションなど…。
    /* =================================================== */

    // 関数の定義。
    const fadeOut = () => {
        // 早期リターン。念のため。
        if (!successMsg && !errorMsg && !ngMsg) {
            return;
        }
        // GoodJobメッセージの場合。
        if (successMsg && !errorMsg && !ngMsg) {
            successMsg.classList.add("fadeOut");
            // エラーメッセージの場合。
        } else if (!successMsg && errorMsg && !ngMsg) {
            errorMsg.classList.add("fadeOut");
            // NGメッセージ（上限数を超えて保存）の場合。
        } else if (!successMsg && !errorMsg && ngMsg) {
            ngMsg.classList.add("fadeOut");
        }
    };

    /* DOM操作。*/
    const successMsg = document.getElementById("successMsg");
    const errorMsg = document.getElementById("errorMsg");
    const ngMsg = document.getElementById("ngMsg");

    // 2.5秒後にfadeOut()が実行される。
    setTimeout(fadeOut, 2500);
}
