import callInformation from "./call_number.js";
import menuResponsive from "./menu_responsive.js";
import previewPdf from "./nosotros.js";
import projects from "./proyectos.js";


document.addEventListener("DOMContentLoaded", (e) => {
    callInformation();
    previewPdf();
    menuResponsive();
    projects()
})

console.log("hoas")