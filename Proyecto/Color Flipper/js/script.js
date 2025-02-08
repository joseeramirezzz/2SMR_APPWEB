


const clr = ["red", "blue", "green", "yellow", "orange",
    "purple", "pink", "brown", "gray", "black",
    "white", "cyan", "magenta", "lime", "teal",
    "indigo", "violet", "gold", "silver", "beige"]    // Array con diferentes colores posibles



const btn = document.querySelector(".general__main__section2__boton") // Selección del botón

const body = document.querySelector(".general") // Seleccionamos el body para posteriormente cambiarle el backgroundcolor

const texto = document.querySelector(".general__main__section__color")      

btn.addEventListener("click", function(){  // Agregamos un "eventlistener" para escuchar el click del botón, cuando haces click se ejecuta la función


    const colorAleatorio = clr[Math.floor(Math.random() * clr.length)]; // Seleccionamos un color aleatorio del array clr
                                                                        
    body.style.backgroundColor = colorAleatorio;  // Cambia el color de fondo del body a colorAleatorio

    btn.style.backgroundColor = colorAleatorio;  // Cambia el color de fondo del botón al mismo color

    texto.textContent = colorAleatorio; // cambia el contenido de texto y pone el nombre del color Aleatorio

})

