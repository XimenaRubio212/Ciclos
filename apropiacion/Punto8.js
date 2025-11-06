let totalPersonas = 5;
let i;
alert("Iniciando registro de " + totalPersonas + " personas.");
alert("Solo se mostrarán las personas con 18 años o más.");
// Ciclo FOR para iterar sobre las 5 personas
for (i = 1; i <= totalPersonas; i++) {
    //Lectura del Nombre
    let nombre = prompt("Persona " + i + ": Ingrese el nombre:");
    //Lectura de la Edad
    let edad = prompt("Persona " + i + ": Ingrese la edad:");
    edad = parseInt(edad); // Convierte la edad a número
    //Decisión: ¿Es mayor de edad (18 o más)?
    if (edad >= 18) {
        
        // Muestra en pantalla si es mayor de edad
        alert("Registrado (Mayor de Edad): " + nombre + ", " + edad + " años.");
    } 
    else {
        // Rechazo (No se muestra en la salida final, solo se informa)
        alert("Descartado: " + nombre + " tiene menos de 18 años.");
    }
    alert("--- Proceso de Persona " + i + " finalizado ---");
}
alert("Fin del registro de las " + totalPersonas + " personas.");