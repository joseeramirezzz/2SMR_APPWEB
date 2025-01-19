// Objetivo: apartir de los datos introducidos por el usuario


// Datos entrada del usuario

const gastos_alojamiento = parseFloat(prompt("Introduce los gastos de alojamiento de tu viaje:"));

const gastos_alimentacion = parseFloat(prompt("Introduce los gastos de alimentacion de tu viaje:"));

const gastos_entretenimiento = parseFloat(prompt("Introduce los gastos de entretenimiento de tu viaje:"));

// calcular suma de los gastos

const suma = gastos_alimentacion + gastos_alojamiento + gastos_entretenimiento;

//  mostramos info al usuario

alert (" El coste total del viaje es " + suma);
