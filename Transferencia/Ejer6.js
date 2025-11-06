//se solicita al usuario que adivine un número
let numero = Math.floor(Math.random()*20)+1;
//se inicializa la variable intento
let intento;
//se crea un ciclo do-while
do {
    //se solicita al usuario que adivine el número
  intento = Number(prompt("Adivina el número (1-20):"));
  //se muestra si el intento es mayor, menor o correcto
  console.log(intento < numero ? "Mayor" : intento > numero ? "Menor" : "¡Correcto!");
  //se convierte la respuesta a minúsculas
} while (intento !== numero);