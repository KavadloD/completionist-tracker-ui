(function () {
    function ensureRoot() {
        let root = document.getElementById("toasts");
        if (!root) {
            root = document.createElement("div");
            root.id = "toasts";
            document.body.appendChild(root);
        }
        return root;
    }

    window.toast = function (msg, type = "success", ms = 3500) {
        const root = ensureRoot();
        const el = document.createElement("div");
        el.className = `toast ${type}`;
        el.innerHTML = `<span>${msg}</span><span class="close" aria-label="Close">×</span>`;
        el.querySelector(".close").onclick = () => root.removeChild(el);
        root.appendChild(el);
        if (ms > 0) setTimeout(() => el.isConnected && root.removeChild(el), ms);
    };
})();
