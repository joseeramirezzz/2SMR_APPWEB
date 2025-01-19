document.addEventListener("DOMContentLoaded",function(){

    function contrasenaValida (cadenaTexto){

        if (cadenaTexto == "2Fj(jjbFsuj" || cadenaTexto =="eoZiugBf&g9"){
            return true;
        }

        return false;

    }

//Parte principal
// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false



});