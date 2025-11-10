//Se crea un ciclo for que controlará el ingreso de 5 estudiantes
//Se utiliza i como contador que va desde 1 hasta 5
//se inicializa en 1 y se incrementa de 1 en 1 hasta 5
for (let i = 1; i <= 5; i++) {
    //se declara la variable carnet para almacenar la respuesta de estdudiante
    //Se pregunta si el estudiante trae el carné
    let carnet = prompt(`¿El estudiante ${i} trae el carné? (1 = Sí, 0 = No):`);
    //La variable carnet se convierte a la respuesta a número
    carnet = parseInt(carnet);
    //Se verifica si el estudiante trae el carné
    if (carnet == 1) {
        //Si trae el carné, se le permite el ingreso
        alert(`El estudiante ${i} ingresó al salón.`);
    } 
    else {
        //Si no lo trae, se le niega el ingreso
        alert(`El estudiante ${i} NO ingresó al salón.`);
    }
}