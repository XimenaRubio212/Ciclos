//se inicializa la variable saldo en 500.000
const saldoInicial = 500000;
//se inicializa la variable saldo en saldoInicial
let saldo = saldoInicial;
//se crea un ciclo while infinito para permitir múltiples retiros
while (true) {
  //se declara la variable retiro y se solicita al usuario el valor a retirar
  let retiro = Number(prompt("Valor a retirar:"));
  //aqui se verifica si el retiro es menor o igual al saldo
  if (retiro <= saldo) {
    //se resta el retiro del saldo
    saldo -= retiro;
    //se muestra un mensjae del nuevo saldo
    alert("Retiro exitoso. Saldo:", saldo);
    //este código se ejecuta si el retiro es mayor que el saldo
  } else {
    //se muestra un mensaje de fondos insuficientes
    alert("Fondos insuficientes.");
  }
  //aqui se verifica si el saldo es 0 o si el usuario desea otro retiro
  if (saldo === 0 || prompt("¿Otro retiro? (si/no)") !== "si") break;
}