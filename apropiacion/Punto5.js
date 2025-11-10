//Se declara la variable corredor
//se inicializa la variable corredor en 1
let corredor = 1; 
//se declara la variable Vueltas requeridas y se inicializa la variable vueltasReq en 4
let vueltasReq = 4; 
// Corredor que se cansa y se inicializa la variable corredorSim en 3
let corredorSim = 3; 
//se crea el ciclo FOR para los 8 corredores
//tambien de esta manera se inicializa la variable corredor en 1
// y se incrementa en 1 hasta llegar a 8
for (corredor = 1; corredor <= 8; corredor++) {
    let vueltas = 0; // Vueltas dadas
    alert("Corredor " + corredor + ". Debe dar " + vueltasReq + " vueltas.");
    //Se crea el ciclo WHILE para las vueltas de cada corredor
    //mientras las vueltas sean menores a las vueltas requeridas
    //
    while (vueltas < vueltasReq) {
        //si el corredor se cansa después de 2 vueltas
        if (corredor == corredorSim && vueltas == 2) { 
            alert("El Corredor" + corredor +
                "se detuvo por el cansancio (después de" + vueltas + "vueltas).");
            break; 
        } 
        //Aqui cuando se completa la vuelta
        vueltas++;
        // Muestra el progreso del corredor con las vueltas completadas
        alert("Corredor " + corredor + ": Vuelta " + vueltas + " completada.");
    }
    // Aquí se verifica si el corredor completó las vueltas requeridas
    if (vueltas == vueltasReq) {
        //se mostrara este mensaje de exito si completo las vueltas
        alert("¡Éxito! Corredor " + corredor + " terminó sus " + vueltasReq + " vueltas.");
    }
}
//se mostrara este mensaje al finalizar la competencia
alert("Competencia finalizada.");