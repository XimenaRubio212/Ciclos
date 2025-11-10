//se inicializa el total de personas a registrar
let totalPersonas = 5;
//se declara la variable i para el ciclo
let i;
//se muestra un mensaje inicial de la cantidad de personas a registrar
alert("Iniciando registro de " + totalPersonas + " personas.");
//se muestra un mensaje indicando que solo se mostrarán las personas mayores de edad
alert("Solo se mostrarán las personas con 18 años o más.");
//se crea un ciclo FOR para iterar sobre las 5 personas
for (i = 1; i <= totalPersonas; i++) {
    //se declara la variable nombre donde se almacenará el nombre de la persona
    let nombre = prompt("Persona " + i + ": Ingrese el nombre:");
    //se declara la variable edad donde se almacenará la edad de la persona
    let edad = prompt("Persona " + i + ": Ingrese la edad:");
    //la variable edad se convierte a número entero
    edad = parseInt(edad);
    //aqui se verifica si la sentencia if cumple la condición de ser mayor o igual a 18
    if (edad >= 18) {
        //si es asi muestra en pantalla un mensaje indicando que si es mayor de edad
        alert("Registrado (Mayor de Edad): " + nombre + ", " + edad + " años.");
    } 
    //aqui verifica si la sentencia else se cumple si no es mayor o igual a 18
    else {
        // Rechazo (No se muestra en la salida final, solo se informa)
        alert("Descartado: " + nombre + " tiene menos de 18 años.");
    }
    //se muestra un mensaje indicando que el proceso de la persona actual ha finalizado
    alert("--- Proceso de Persona " + i + " finalizado ---");
}
//se muestra un mensaje final indicando que el registro ha finalizado
alert("Fin del registro de las " + totalPersonas + " personas.");