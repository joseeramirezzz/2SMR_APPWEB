
const btn = document.querySelector(".HEX__general__main__section2__boton"); // Selección del botón

const clr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; // Array con letras y numeros para crear color hexadecimal

const texto = document.querySelector(".HEX__general__main__section__color"); // Seleccionamos el texto para posteriormente cambiarle el contenido del propio

const body = document.querySelector(".HEX__general"); // Seleccionamos el body para posteriormente cambiarle el backgroundcolor


function colorHEX () { // Funcion que genera color hexadecimal aleatorio

    let color = '#'; // variable color con el símbolo # que es necesario para definir colores en formato hexadecimal

    for (let i = 0; i < 6; i++) {  // Bucle que se repite 6 veces (porque un color hexadecimal tiene 6 dígitos)
        const aleatorio = clr[Math.floor(Math.random() * clr.length)];  // Generamos un valor hexadecimal 
        color += aleatorio; // Añadimos el valor hexadecimal a la cadena color
        
    }

    texto.textContent = color; // cambia el contenido de texto y pone el valor hexadecimal creado

    btn.style.backgroundColor = color; // Cambia el color de fondo del botón al color hexadecimal creado

    body.style.backgroundColor = color; // Cambia el color del body al color hexadecimal creado

}


btn.addEventListener("click", colorHEX); // Añadimos un event listener al botón para que ejecute la función`colorHEX cuando se haga click


   

