let corredor = 1; // Contador de corredor
let vueltasReq = 4; // Vueltas requeridas
let corredorSim = 3; // Corredor que se cansa

// Ciclo FOR para los 8 corredores
for (corredor = 1; corredor <= 8; corredor++) {
    
    let vueltas = 0; // Vueltas dadas
    alert("Corredor " + corredor + ". Debe dar " + vueltasReq + " vueltas.");

    // Ciclo WHILE para las vueltas
    while (vueltas < vueltasReq) {
        
        // Simulación: Corredor se cansa después de 2 vueltas
        if (corredor == corredorSim && vueltas == 2) { 
            alert("El Corredor " + c + " se detuvo por cansancio (después de " + vueltas + " vueltas).");
            break; 
        } 
        
        // Completa la vuelta
        vueltas++;
        alert("Corredor " + corredor + ": Vuelta " + vueltas + " completada.");
    }

    // Muestra el resultado final
    if (vueltas == vueltasReq) {
        alert("¡Éxito! Corredor " + corredor + " terminó sus " + vueltasReq + " vueltas.");
    }
    alert("------------------------------------------------");
}

alert("Competencia finalizada.");