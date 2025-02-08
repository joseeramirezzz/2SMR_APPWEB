
const btn = document.querySelector(".HEX__general__main__section2__boton"); // Selección del botón

const clr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; // Array con letras y numeros para crear color hexadecimal

const texto = document.querySelector(".HEX__general__main__section__color"); // Seleccionamos el texto para posteriormente cambiarle el contenido del propio

const body = document.querySelector(".HEX__general"); // Seleccionamos el body para posteriormente cambiarle el backgroundcolor


function colorHEX () { // Funcion que genera color hexadecimal aleatorio

    let color = '#'; // variable color con el símbolo # que es necesario para definir colores en formato hexadecimal

    for (let i = 0; i < 6; i++) {  // Bucle que se repite 6 veces (porque un color hexadecimal tiene 6 dígitos)
        const aleatorio = clr[Math.floor(Math.random() * clr.length)]; 
        color += aleatorio;
        
    }

    texto.textContent = color;

    btn.style.backgroundColor = color;

    body.style.backgroundColor = color;

}


btn.addEventListener("click", colorHEX);


   

