const d = document;
export default function menuResponsive() {
    const $menuResponsive = d.querySelector(".menu-responsive-phone"),
        $btnOpen = d.querySelector(".open-btn"),
        $btnClose = d.querySelector(".close-btn-menu"),
        $btnOpenImg = d.querySelector(".open-btn img"),
        $btnCloseImg = d.querySelector(".close-btn-menu img");

    d.addEventListener("click", (e) => {
        let evento = e.target;
        if (evento == $btnOpen || evento == $btnOpenImg) {
            //e.preventDefault();
            $menuResponsive.removeAttribute("hidden");
            $btnOpen.style.display = 'none';
            $btnClose.removeAttribute("hidden");
        }
        if (evento == $btnClose || evento == $btnCloseImg) {
            //e.preventDefault();
            $menuResponsive.setAttribute("hidden", "true");
            $btnClose.setAttribute("hidden", "true");
            $btnOpen.style.display = 'block';
        }
    })
}