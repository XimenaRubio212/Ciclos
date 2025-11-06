// Inicialización de la variable para almacenar la suma
let suma = 0;
// Ciclo FOR que itera desde 1 hasta 100
for (let i = 1; i <= 100; i++) {
    // Condición de interrupción: si el número es mayor a 90 Y es par
    if (i > 90 && i % 2 == 0) {
        
        // El ciclo se interrumpe
        alert("Interrupción: Se encontró el número " + i + ", que es mayor a 90 y es par.");
        break; 
    } 
    else {
        // Si no cumple la condición de interrupción, se suma el número
        suma = suma + i;
    }
}
// Cuando el ciclo se interrumpe (o termina si no se cumplió la condición)
alert("Operación finalizada. La suma total es: " + suma);