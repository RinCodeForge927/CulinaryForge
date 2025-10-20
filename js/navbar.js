document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarCollapse");
    const navbarToggler = document.querySelector(".navbar-toggler");

    if (!navbarCollapse || !navbarToggler) return;

    // Khởi tạo Bootstrap Collapse instance (đừng toggle() ở đây)
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    });

    // 1️⃣ Click vào link trong menu → tự đóng
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                bsCollapse.hide();
            }
        });
    });

    // 2️⃣ Click ra ngoài vùng menu → tự đóng
    document.addEventListener("click", (e) => {
        const isClickInside =
            navbarCollapse.contains(e.target) || navbarToggler.contains(e.target);

        if (!isClickInside && navbarCollapse.classList.contains("show")) {
            bsCollapse.hide();
        }
    });
});
