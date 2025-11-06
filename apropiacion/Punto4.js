//Se solicita el saldo inicial al usuario
let saldo = prompt("Ingrese el saldo inicial:");
saldo = parseInt(saldo);

//Mientras el saldo sea mayor que 0, se puede seguir retirando
while (saldo > 0) {

    //Se solicita el valor a retirar
    let retiro = prompt("¿Cuánto desea retirar?");
    retiro = parseInt(retiro);

    //Se verifica si el retiro es menor o igual al saldo disponible
    if (retiro <= saldo) {
        //Se realiza la operación restando el retiro del saldo
        saldo = saldo - retiro;

        //Se muestra el nuevo saldo
        alert(`Retiro exitoso. Su saldo actual es: ${saldo}`);
    } 
    else {
        //Si no hay suficiente saldo, se muestra mensaje correspondiente
        alert("Saldo insuficiente");
        break; //Se termina el ciclo
    }
}

//Cuando el saldo llega a 0 o se rompe el ciclo
alert("Operación finalizada. Gracias por usar el cajero.");
