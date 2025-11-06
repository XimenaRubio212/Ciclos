//Se inicializa la variable i en 1 (representa al niño 1)
for (let i = 1; i <= 10; i++) {
    
    //Se pide la información si el niño ya tiene dulce
    let tieneDulce = prompt(`¿El niño ${i} ya tiene dulce? (1 = Sí, 0 = No):`);
    
    //Se convierte el valor ingresado a número
    tieneDulce = parseInt(tieneDulce);

    //Se verifica si el niño ya tiene dulce
    if (tieneDulce == 1) {
        //Si tiene dulce, se muestra el mensaje y se continúa con el siguiente niño
        alert(`El niño ${i} ya tiene dulce, se pasa al siguiente.`);
    }
    //Si el niño no tiene dulce
    else {
        //Se le da un dulce
        alert(`Se le entrega un dulce al niño ${i}.`);
    }
}