document.addEventListener("DOMContentLoaded",function(){

   // Declaración de funciones
    
    function Area(radio){

        let Area = (3.14 * radio ** 2)
        return Area;
    }

    function Perimetro(radio){

        let Perimetro = (2 * 3.14 * radio)
        return Perimetro;
    }



    //Parte principal


    const radio = parseInt(prompt("Ingresa el radio del círculo: " ));

    

    

    alert ("El área del circulo con radio " + radio + " es " + Area(radio) + " y su perímetro es " + Perimetro(radio).toFixed(2))
});