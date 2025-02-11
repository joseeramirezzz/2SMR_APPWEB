let tarea = document.querySelector(".general__main__form__cuadrotext");
const btn = document.querySelector(".general__main__form__boton");
let lista = document.querySelector(".general__main__lista");


function addtask(event){
    
    event.preventDefault();
    const monkiki = tarea.value;

    if (monkiki != "") {

        let nueva_tarea = document.createElement("li");

        nueva_tarea.textContent = monkiki

        lista.appendChild(nueva_tarea);

        tarea.value = "";

        const boton = document.createElement("button");

        boton.classList.add("botonX")

        nueva_tarea.classList.add("tareaX")

        boton.textContent = "X";

        nueva_tarea.appendChild(boton);

        boton.addEventListener("click", function(){
            nueva_tarea.remove()

        });

        
    }


}

btn.addEventListener("click",addtask);
