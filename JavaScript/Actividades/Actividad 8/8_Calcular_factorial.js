document.addEventListener("DOMContentLoaded",function(){

   // Declaración de funciones
    

    function CalculateFactorial(number){
        let result = 1
        for( let i = 1; i <= number; i++ ){
            result = i * result
        }
        return result;
    }



    //Parte principal


    const numero = prompt("Ingresa un número entero no negativo: " );
    const numero_entero = parseInt(numero);
    

    if (numero_entero < 0 ){

        alert ("¿ Sabes leer ? .. ¡ Número NO negativo !");

    }
 
    else {
        const Factorial = CalculateFactorial(numero_entero);

        alert ("Has ingresado el numero " + numero_entero + " y su factorial es " + Factorial);

    }
});