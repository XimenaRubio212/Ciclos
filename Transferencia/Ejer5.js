//se inicializa la variable total en 0
let total = 0;
//se crea un ciclo while
//se solicita al usuario si desea comprar algo
while (prompt("¿Comprar algo? (si/no)") === "si") {
    //se solicita al usuario el precio del producto
  total += Number(prompt("Ingrese precio del producto:"));
}
//se calcula el descuento si el total es mayor a 100000
if (total > 100000) total *= 0.9;
//se muestra el total
console.log("Total a pagar:", total);