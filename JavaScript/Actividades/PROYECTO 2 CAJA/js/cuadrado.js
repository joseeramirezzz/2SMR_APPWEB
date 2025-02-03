
// seleccion de boton
const btn = document.querySelector(".boton");
const caja = document.querySelector(".cuadrado");





// Llamada al evento ( cuando haga click en el btn, haz esta función)

btn.addEventListener("Click", function(){


    if(caja.style.display != "none") {

        caja.style.display = "none";

        btn.textContent = "Mostrar caja";

    } else {

        caja.style.display = "inline-block";

        btn.textContent = "Ocultar caja";
    }  


})

