// Toast notification utility for Completionist Tracker
// Creates a temporary message box with optional type and auto-dismiss timeout

(function () {
    // Ensure a root container for all toast messages
    function ensureRoot() {
        let root = document.getElementById("toasts");
        if (!root) {
            root = document.createElement("div");
            root.id = "toasts";
            document.body.appendChild(root);
        }
        return root;
    }

    // Global toast function
    window.toast = function (msg, type = "success", ms = 3500) {
        const root = ensureRoot();
        const el = document.createElement("div");
        el.className = `toast ${type}`;
        el.innerHTML = `
            <span>${msg}</span>
            <span class="close" aria-label="Close">×</span>
        `;

        // Close button handler
        el.querySelector(".close").onclick = () => {
            if (el.isConnected) root.removeChild(el);
        };

        root.appendChild(el);

        // Auto-dismiss after given time
        if (ms > 0) {
            setTimeout(() => {
                if (el.isConnected) root.removeChild(el);
            }, ms);
        }
    };
})();
