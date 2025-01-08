const precio_original = prompt (" Inserta el precio original del producto: ")

const descuento = prompt("Inserta el porcentaje de descuento a aplicar: ")

const cuenta_descuento = (precio_original*descuento)/100;

const precio_final = cuenta_descuento - precio_original

alert ("El precio final del producto después de aplicar un descuento del" + descuento + "% es:" + precio_final + " euros.")

