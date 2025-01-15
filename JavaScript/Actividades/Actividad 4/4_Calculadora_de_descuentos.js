document.addEventListener("DOMContentLoaded", function(){


const precio_original = parseFloat(prompt (" Inserta el precio original del producto: "));

const descuento = parseFloat(prompt("Inserta el porcentaje de descuento a aplicar: "));

const cuenta_descuento = (precio_original*descuento)/100;

const precio_final = precio_original - cuenta_descuento;

alert ("El precio final del producto después de aplicar un descuento del " + descuento + " % es: " + precio_final + " euros.")


});