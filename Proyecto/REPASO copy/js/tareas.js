const btn = document.querySelector(".general__main__section__form__boton");

let input = document.querySelector(".general__main__section__form__input");

const padre = document.querySelector(".general__main__section__form__ul")

const btn2 = document.querySelector(".general__main__section__form__boton2")


function agregartarea(){

    let nueva_tarea = input.value

    if (nueva_tarea != ""){
    
    input.value = ""

    let lista = document.createElement("li")
    
    let button = document.createElement("button")

    button.textContent = "X"

    let parrafo = document.createElement("p")
    
    padre.appendChild(lista)
    lista.appendChild(parrafo)
    lista.appendChild(button)

    parrafo.textContent = nueva_tarea
    
    lista.classList.add("lista")
    button.classList.add ("button")
    parrafo.classList.add("parrafo")
    padre.classList.add("padre")


    button.addEventListener("click",function(){
        lista.remove()
    });


    }
    
}

function aleatorio(){

    let array_lista = document.querySelectorAll(".lista");

    array_lista.forEach(tarea => {
        
        if (tarea.classList.contains("resaltar")){

            tarea.classList.remove("resaltar")
        }

        
    });

    let num_aleatorio = Math.floor(Math.random ()* array_lista.length)

    let tarea_aleatoria = array_lista[num_aleatorio]
    console.log(tarea_aleatoria)
    tarea_aleatoria.classList.add("resaltar")
   
   
   
   
   
    /*if (array_lista.length > 0){
        console.log(array_lista)
        let posicion_aleatoria = Math.floor(Math.random () * array_lista.length)

        let tarea_aleatoria = array_lista[posicion_aleatoria]

        tarea_aleatoria.classList.add("resaltar")


    }*/


}


btn.addEventListener("click", agregartarea)

btn2.addEventListener("click", aleatorio)