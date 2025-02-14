const btn = document.querySelector(".general__main__section__form__boton")

const input = document.querySelector(".general__main__section__form__input")

const padre = document.querySelector(".general__main__section__form__ul")


function agregartarea(){

    let nueva_tarea = input.value

    if (nueva_tarea != ""){

        input.value = ""

        const lista = document.createElement("li")

        const parrafo = document.createElement("p")

        const botonx = document.createElement("button")

        padre.appendChild(lista)
        lista.appendChild(parrafo)
        lista.appendChild(botonx)

        parrafo.textContent = nueva_tarea

        botonx.textContent = "X"

        padre.classList.add("padre")
        lista.classList.add("lista")
        botonx.classList.add("button")

        botonx.addEventListener("click", function(){

            lista.remove()

        })

    }


}

btn.addEventListener("click", agregartarea)