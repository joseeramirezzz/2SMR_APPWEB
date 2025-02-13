const btn = document.querySelector(".general__main__section__form__boton");

let input = document.querySelector(".general__main__section__form__input");

const padre = document.querySelector(".general__main__section__form__ul")


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


btn.addEventListener("click", agregartarea)