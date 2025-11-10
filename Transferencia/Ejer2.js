//se inicializa la variable otra en "si"
let otra;
//se crea un ciclo do-while que se repetirá mientras la variable otra sea igual a "si"
do {
  //se inicializa la variable n y se solicita al usuario que ingrese un número
  let n = Number(prompt("Ingrese un número:"));
  //se crea un ciclo for y se muestra la tabla de multiplicar del número ingresado
  for (let i = 1; i <= 12; i++)
    alert(`${n} x ${i} = ${n*i}`);
  //se solicita al usuario si desea otra tabla
    otra = prompt("¿Otra tabla? (si/no)");
  //se convierte la respuesta a minúsculas
} while (otra === "si");