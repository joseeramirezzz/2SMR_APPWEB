let tarea = document.querySelector(".general__main__form__cuadrotext");
const btn = document.querySelector(".general__main__form__boton");
let lista = document.querySelector(".general__main__lista");
const form = document.querySelector(".general__main__form");
const btn_aleatorio = document.querySelector(".general__main__boton");

 
function addtask(){
    
 
    const monkiki = tarea.value;

    if (monkiki != "") {

        let caja_lista = document.createElement("li");

        let nueva_tarea = document.createElement("p");

        nueva_tarea.textContent = monkiki

        lista.appendChild(caja_lista);

        caja_lista.appendChild(nueva_tarea);

        tarea.value = "";

        const boton = document.createElement("button");

        boton.classList.add("botonX")

        nueva_tarea.classList.add("textoX")

        caja_lista.classList.add("cajaX")

        boton.textContent = "X";

        caja_lista.appendChild(boton);

        boton.addEventListener("click", function(){
            caja_lista.remove()
        });



    }


}

function aleatorio(){

    let array_lista = document.querySelectorAll(".cajaX");


    if (array_lista.length > 0 ) {
        let aleat = Math.floor(Math.random() * array_lista.length);
        let jojo = array_lista[aleat];
        jojo.classList.add("resaltar");
    }else{
        array_lista.classList.remove
    }

}
btn.addEventListener("click",addtask);

btn_aleatorio.addEventListener("click",aleatorio);