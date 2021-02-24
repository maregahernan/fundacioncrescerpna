
let animado = document.getElementById("section-nosotros");


function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    let alturaAnimado=animado.offsetTop;

        if (alturaAnimado<scrollTop){
            animado.style.opacity = 1;
        }

}

windows.addEventListener('click',mostrarScroll);