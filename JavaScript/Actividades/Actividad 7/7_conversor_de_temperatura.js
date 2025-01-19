document.addEventListener("DOMContentLoaded",function(){

   // Declaración de funciones
    
    function Celsius_farenheit(temp){

        let Farenheit = (temp*9/5) + 32
        return Farenheit;
    }

    function Farenheit_Celsius(temp){

        let Celsius = (temp-32) * 5/9
        return Celsius;
    }



    //Parte principal


    const tipo_conversion = prompt("¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius):" );

    

    

    if (tipo_conversion == 1){

        const temperatura = parseInt(prompt("Ingrese la temperatura: "));

        let Farenheit_result = Celsius_farenheit(temperatura);
        
        alert (temperatura + " grados celsius equivalen a " + Farenheit_result.toFixed(2) + " grados Farenheit.")

    }

    else if (tipo_conversion == 2){

        const temperatura = parseInt(prompt("Ingrese la temperatura: "));

        let Celsius_result = Farenheit_Celsius(temperatura);
        
        alert (temperatura + " grados Farenheit equivalen a " + Celsius_result.toFixed(2) + " grados Celsius.")

    }
 
    else{
    alert ( "Es fácil pishita, escribe 1 o 2 !!" )
    }
});