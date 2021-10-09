const d = document;
export default function projects() {
    const $allBtn = d.querySelector(".projects--all"),
        $titleAllBtn = d.querySelector(".projects--all-title"),
        $edificationBtn = d.querySelector(".projects--edifications"),
        $titleEdificationBtn = d.querySelector(".projects--edifications-title"),
        $infraestructureBtn = d.querySelector(".projects--infraestructure"),
        $titleInfraestructure = d.querySelector(".projects--infraestructure-title"),
        $saneamientoBtn = d.querySelector(".projects--saneamiento"),
        $titleSaneamiento = d.querySelector(".projects--saneamiento-title"),
        $otrosBtn = d.querySelector(".projects--otros"),
        $titleOtros = d.querySelector(".projects--otros-title"),
        $titleProjectsToChange = d.querySelector(".projects--title");

    d.addEventListener("click", (e) => {
        let evento = e.target;
        if (evento == $allBtn || evento == $titleAllBtn) {
            $titleProjectsToChange.innerHTML = ">Todos";
            $allBtn.classList.add("btn-active");

            $edificationBtn.classList.remove("btn-active");
            $infraestructureBtn.classList.remove("btn-active");
            $saneamientoBtn.classList.remove("btn-active");
            $otrosBtn.classList.remove("btn-active");

        }
        if (evento == $edificationBtn || evento == $titleEdificationBtn) {
            $titleProjectsToChange.innerHTML = ">Edificaciones Públicas y Privadas";
            $edificationBtn.classList.add("btn-active");

            $allBtn.classList.remove("btn-active");
            $infraestructureBtn.classList.remove("btn-active");
            $saneamientoBtn.classList.remove("btn-active");
            $otrosBtn.classList.remove("btn-active");
        }

        if (evento == $infraestructureBtn || evento == $titleInfraestructure) {
            $titleProjectsToChange.innerHTML = ">Ifraestructura Vial";
            $infraestructureBtn.classList.add("btn-active");

            $allBtn.classList.remove("btn-active");
            $edificationBtn.classList.remove("btn-active");
            $saneamientoBtn.classList.remove("btn-active");
            $otrosBtn.classList.remove("btn-active");
        }


        if (evento == $saneamientoBtn || evento == $titleSaneamiento) {
            $titleProjectsToChange.innerHTML = ">Saneamiento e Ifraestructura de Riego";
            $saneamientoBtn.classList.add("btn-active");

            $allBtn.classList.remove("btn-active");
            $edificationBtn.classList.remove("btn-active");
            $infraestructureBtn.classList.remove("btn-active");
            $otrosBtn.classList.remove("btn-active");
        }



        if (evento == $otrosBtn || evento == $titleOtros) {
            $titleProjectsToChange.innerHTML = ">Otros Proyectos";
            $otrosBtn.classList.add("btn-active");

            $allBtn.classList.remove("btn-active");
            $edificationBtn.classList.remove("btn-active");
            $infraestructureBtn.classList.remove("btn-active");
            $saneamientoBtn.classList.remove("btn-active");
        }





    })
}