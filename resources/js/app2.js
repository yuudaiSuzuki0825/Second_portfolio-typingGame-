"use strict";

{
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
        });
    });
}
