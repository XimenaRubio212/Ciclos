//Se declara la variable saldo
//y donde se solicita el saldo inicial al usuario
let saldo = prompt("Ingrese el saldo inicial:");
//aqui el saldo se convierte a numero entero
saldo = parseInt(saldo);
//Mientras el saldo sea mayor que 0, se puede seguir retirando
while (saldo > 0) {
    //se declara la variable retiro y
    //Se solicita el valor a retirar al usuario
    let retiro = prompt("¿Cuánto desea retirar?");
    //El valor del retiro se convierte a numero entero
    retiro = parseInt(retiro);
    //Se verifica con un if si el retiro es menor o igual al saldo disponible
    if (retiro <= saldo) {
        //Se realiza la operación restando el retiro del saldo
        saldo = saldo - retiro;
        //Se muestra el nuevo saldo
        alert(`Retiro exitoso. Su saldo actual es: ${saldo}`);
    } 
    //Si el retiro es mayor al saldo disponible
    else {
        //Si no hay suficiente saldo, se muestra mensaje correspondiente
        alert("Saldo insuficiente");
        break; //Se termina el ciclo
    }
}
//Cuando el saldo llega a cero o se rompe el ciclo
//se mostrara dicho mensaje
alert("Operación finalizada. Gracias por usar el cajero.");