document.addEventListener("DOMContentLoaded", function(){


    function findLargestNumber (numeros) {
        let mayor = numeros[0];
        for (let n = 1; n < numeros.length; n++) {
            if (numeros[n] > mayor) {
                mayor = numeros[n];
            }
        }
        return mayor;
    }
    
    
    
    let Cantidad_N = parseInt(prompt("Ingresa la cantidad de números: "));
    
    
    
    let lista = [];
    
    
    for (n = 1; n <= Cantidad_N; n++) {
        numero = prompt("Ingresa el número " + (n));
        lista.push(numero);
    }
    
    alert("El numero mas grande es " + findLargestNumber(lista));
    
    })