let max = 15; // Máximo de transacciones
let i;
// Ciclo FOR para 15 transacciones
for (i = 1; i <= max; i++) {
    // Pide 1 para adulto, 0 para general
    let p = parseInt(prompt("Comprador " + i + ": 1 para Adultos, 0 para General:"));
    // Verifica si la película es para adultos (p == 1)
    if (p == 1) {    
        let e = parseInt(prompt("Ingrese edad del comprador:"));
        // Si es menor de 18
        if (e < 18) {
            alert("Venta Rechazada: Menor de 18.");
        } 
        // Si es mayor de 18
        else {
            alert("Venta Exitosa: Comprador mayor de edad.");
        }
    } 
    // Si no es para adultos (p != 1)
    else {
        alert("Venta Exitosa: Película general.");
    }
    alert("--- Transacción " + i + " de " + max + " finalizada ---");
}
alert("Proceso de venta finalizado.");