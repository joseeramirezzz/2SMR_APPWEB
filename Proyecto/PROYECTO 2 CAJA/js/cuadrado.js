
// seleccion de boton
const btn = document.querySelector(".boton");
const caja = document.querySelector(".alineacion__main__cuadrado");





// Llamada al evento ( cuando haga click en el btn, haz esta función)

btn.addEventListener("click", function() {  
    // Cuando se haga click en btn se ejecutará esta función

    if (caja.style.display != "none") {  
        // Si la caja no está oculta 

        caja.style.display = "none";  
        // Oculta la caja 

        btn.textContent = "Mostrar caja";  
        // Cambia el texto del botón a Mostrar caja
    } else {  
        // Si la caja esta oculta

        caja.style.display = "inline-block";  
        // Muestra la caja 

        btn.textContent = "Ocultar caja";  
        // Cambia el texto del botón a Ocultar caja
    }  
});

