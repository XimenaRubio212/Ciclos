//Se inicializa la variable suma en 0
let suma = 0;
//se crea un ciclo FOR que itera desde 1 hasta 100
for (let i = 1; i <= 100; i++) {
    //aqui se verifica si el número es mayor a 90 Y si es par
    if (i > 90 && i % 2 == 0) {
        //se muestra una alerta indicando la interrupción y el número que causó la interrupción
        alert("Interrupción: Se encontró el número " + i + ", que es mayor a 90 y es par.");
        //se utiliza la instrucción break para salir del ciclo
        break; 
    } 
    //si no se cumple la condición anterior, se verifica si el número es impar
    else {
        //si no cumple la condición de interrupción, se suma el número
        suma = suma + i;
    }
}
//y se mostra una alerta con la suma total de los números impares sumados antes de la interrupción
alert("Operación finalizada. La suma total es: " + suma);