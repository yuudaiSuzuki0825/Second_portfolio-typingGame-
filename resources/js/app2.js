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
}
