//Se crea un ciclo que pedirá 10 números al usuario
for (let i = 1; i <= 10; i++) {
    
    //Se solicita al usuario que ingrese un número
    let num = prompt(`Ingrese el número ${i}:`);
    
    //Se convierte la entrada a número entero
    num = parseInt(num);

    //Se verifica si el número ingresado es mayor que 50
    if (num > 50) {
        //Si es mayor, se muestra el número
        alert(`El número ${num} es mayor que 50`);
    }
}
