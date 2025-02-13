// Seleccionamos los elementos necesarios
const btn = document.querySelector(".general__main__section__form__boton");
let input = document.querySelector(".general__main__section__form__input");
const padre = document.querySelector(".general__main__section__form__ul");

// Función que se ejecuta cuando el usuario hace click en el boton
function agregartarea() {
    
    // Obtiene el texto escrito en el form
    let nueva_tarea = input.value;

    // Verifica que el campo de entrada no esta vacio
    if (nueva_tarea != "") {
        
        // Limpia el campo de entrada
        input.value = "";

        // Crea un nuevo elemento <li> 
        let lista = document.createElement("li");

        // Crea un botón para eliminar la tarea
        let button = document.createElement("button");
        button.textContent = "X"; 

        // Crea un elemento <p> 
        let parrafo = document.createElement("p");
        parrafo.textContent = nueva_tarea; // Asigna el texto escrito al parrafo

        // Agrega la nueva tarea al hijo de padre
        padre.appendChild(lista);

        // mete el párrafo y el botón dentro del <li>.
        lista.appendChild(parrafo);
        lista.appendChild(button);

        // Agregamos clases CSS a los nuevos elementos 
        lista.classList.add("lista");
        button.classList.add("button");
        parrafo.classList.add("parrafo");
        padre.classList.add("padre");

        // Agrega un evento al botón para eliminar la tarea cuando se haga click
        button.addEventListener("click", function() {
            lista.remove(); // Elimina el <li> de la lista
        });
    }
}

// Agrega un evento al boton para ejecutar la funcion
btn.addEventListener("click", agregartarea);