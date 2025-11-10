//se inicializa la variable total en 0
let total = 0;
//se crea un ciclo while que se repite mientras el usuario quiera comprar algo
//se solicita al usuario si desea comprar algo si la respuesta es "si" se ejecuta el ciclo
while (prompt("¿Comprar algo? (si/no)") === "si") {
  //se solicita al usuario el precio del producto y se suma al total
  total += Number(prompt("Ingrese precio del producto:"));
}
//aqui se verifica si el total es mayor a 100000
//y se calcula el descuento si el total es mayor a 100000
if (total > 100000) total *= 0.9;
//se muestra un mensaje con el total a pagar
console.log("Total a pagar:", total);