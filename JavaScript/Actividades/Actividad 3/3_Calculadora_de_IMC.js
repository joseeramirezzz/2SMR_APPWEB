const peso = prompt(" Inserte su peso: ");

const altura = prompt (" Inserte su altura en metros: ");

let IMC = peso/(altura^2);


if (IMC < 18.5) {

    alert ("IMC: " + IMC + ", Clasificación: Bajo peso");
}
else if (IMC >= 18.5 && IMC < 25) {

    alert ("IMC: " + IMC + ", Clasificación: Peso normal");
}

else if (IMC >= 25 && IMC < 30) {

    alert ("IMC: " + IMC + ", Clasificación: sobre peso");
}

else{

    alert ("IMC: " + IMC + ", Clasificación: Obesidad");

}


