//se declara la variable max para el número máximo de transacciones
let max = 15; // Máximo de transacciones
// Se declara la variable i para el ciclo
let i;
//se crea un ciclo FOR para maximo de 15 transacciones
for (i = 1; i <= max; i++) {
    //se declara la variable pelicula y se pide 1 para adulto, 0 para general
    let pelicula = parseInt(prompt("Comprador " + i + ": 1 para Adultos, 0 para General:"));
    //Se verifica con la setencia if si la película es para adultos
    if (pelicula == 1) {    
        //se declara la variable edad y se pide la edad del comprador
        //donde la variable edad se convierte el valor ingresado a numero entero
        let edad = parseInt(prompt("Ingrese edad del comprador:"));
        //aqui se verifica con al setencia if si edad es menor de 18
        if (edad < 18) {
            //si es menor de 18 se muestra la alerta de venta rechazada
            alert("Venta Rechazada: Menor de 18.");
        } 
        // Si es mayor de 18
        else {
            //se muestra la alerta de venta exitosa
            alert("Venta Exitosa: Comprador mayor de edad.");
        }
    } 
    //Si la pelicula no es para adultos
    else {
        //se muestra la alerta de venta exitosa para película general
        alert("Venta Exitosa: Película general.");
    }
    //se muestra la alerta de transacción finalizada
    alert("--- Transacción " + i + " de " + max + " finalizada ---");
}
//se muestra la alerta de proceso de venta finalizado
alert("Proceso de venta finalizado.");