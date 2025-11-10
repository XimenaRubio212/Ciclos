//se inicializa la variable par en 0 y la variable impar en 0
let par = 0, impar = 0;
//se utiliza un ciclo for
//se solicitan 10 números y se verifica si son pares o impares
for (let i = 1; i <= 10; i++) {
  //se solicita al usuario un número
  Number(prompt("Número:")) % 2 === 0 ? par++ : impar++;
}
//se muestran un mensaje con la cantidad de números pares e impares ingresados
alert("Pares:", par, "Impares:", impar);