document.addEventListener("DOMContentLoaded", function(){

    //Funcion
    function findLargestNumber (numeros) {
        let mayor = numeros[0];
        for (let n = 1; i < numeros.length; i++) {
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
        }
        return mayor;
    }
    
    
    

    // Parte principal
    const Cantidad_I = parseInt(prompt("Ingresa la cantidad de números: "));
    let lista = [];
    
    
    for (n = 1; n <= Cantidad_I; n++) {
        numero = prompt("Ingresa el número " + (n));
        lista.push(numero);
    }
    
    alert("El numero mas grande es " + findLargestNumber(lista));
    
    })