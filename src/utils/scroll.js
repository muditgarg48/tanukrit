export const scrollToHash = (hash) => {
    if (!hash || hash === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    const el = document.querySelector(hash);
    if (!el) return;
    let top = 0, node = el;
    while (node) { top += node.offsetTop; node = node.offsetParent; }
    window.scrollTo({ top, behavior: "smooth" });
};