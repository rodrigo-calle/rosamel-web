const d = document;

export default function previewPdf() {
    const $politicsBtn = d.querySelector(".politcs-btn"),
        $documentPolitics = d.querySelector(".document-one"),
        $backDark = d.querySelector(".background-dark"),
        $code = d.querySelector(".document-two"),
        $codeBtn = d.querySelector(".code-btn"),
        $closePdf = d.querySelector(".close-pdf");

    d.addEventListener("click", (e) => {

        let evento = e.target;

        if (evento == $politicsBtn) {
            e.preventDefault();
            $documentPolitics.classList.remove("visibility-hidden");
            $backDark.classList.remove("visibility-hidden");
        }
        if (evento == $closePdf) {
            e.preventDefault();
            $documentPolitics.classList.add("visibility-hidden");
            $backDark.classList.add("visibility-hidden");
            $code.classList.add("visibility-hidden");
        }
        if (evento == $codeBtn) {
            e.preventDefault();
            $code.classList.remove("visibility-hidden");
            $backDark.classList.remove("visibility-hidden");
        }




    })
}