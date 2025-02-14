const btn = document.querySelector(".general__main__boton")

const caja = document.querySelector(".general__main__caja")



function cajaocultar (){

    if( caja.style.display != "none"){

        caja.style.display = "none";

        btn.textContent = "Mostrar caja";

    }else{

        caja.style.display = "block";

        btn.textContent = "Ocultar caja";
    }

}

btn.addEventListener("click", cajaocultar)