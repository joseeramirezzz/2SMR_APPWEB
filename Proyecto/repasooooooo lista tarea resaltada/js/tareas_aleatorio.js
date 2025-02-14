const btn = document.querySelector(".general__main__section__form__boton")

let input = document.querySelector(".general__main__section__form__input")

const padre = document.querySelector(".general__main__section__form__ul")

const btn2 = document.querySelector(".general__main__section__form__boton2")


function agregartarea (){

    const nueva_tarea = input.value

    if (nueva_tarea != ""){

        input.value = ""

        let lista = document.createElement("li")
        let parrafo = document.createElement("p")
        const botonx = document.createElement("button")

        parrafo.textContent = nueva_tarea

        padre.appendChild(lista)
        lista.appendChild(parrafo)
        lista.appendChild(botonx)


        botonx.textContent = "X"

        padre.classList.add("padre")
        lista.classList.add("lista")
        botonx.classList.add("button")

        botonx.addEventListener("click", function(){
            lista.remove()

        })


    }


}


function aleatorio(){

    let lista = document.querySelectorAll(".lista");
    console.log(lista)

    lista.forEach(tarea => {

        if (tarea.classList.contains("resaltar")){

            tarea.classList.remove ("resaltar")

        }
    });

    let numero_aleatorio = Math.floor(Math.random () * lista.length)
    console.log(numero_aleatorio)
    let tarea_aleatoria = lista[numero_aleatorio]
    
    tarea_aleatoria.classList.add("resaltar")

}

btn.addEventListener("click", agregartarea)

btn2.addEventListener("click", aleatorio)