document.addEventListener("DOMContentLoaded",function(){

// Declaracion de funciones

    function esPrimo(num){

        for (let i =2; i < num; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }


    // Parte principal

    const num_1 = parseInt(prompt("Introduce un número entero"));
    const num_2 = parseInt(prompt("Introduce otro número entero"));
    let lst_num = [];


        let max, min;

        if (num_1 >= num_2){

            max = num_1
            min = num_2
        }
        else {
            max = num_2
            min = num_1
        }

        for (let i = min; i <= max; i++){
            if(esPrimo(i)){
                lst_num.push(i);
    

            }

        }
 console.log(lst_num)

});