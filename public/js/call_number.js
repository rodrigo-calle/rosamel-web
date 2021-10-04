const d = document
export default function callInformation(){
    const  $btnCall = d.querySelector('.call-button'),
            $quit = d.querySelector('.quit'),
            $btnCallImg = d.querySelector('.call-button-image'),
            $message = d.querySelector('.call-message');

    d.addEventListener("click", (event)=>{
        let evento = event.target;

        if(evento === $btnCall || evento === $btnCallImg){
            $message.classList.remove('not-visible');
            console.log(1)
        }

        if(evento === $quit){
            $message.classList.add('not-visible');
            console.log(0)
        }
    })

}