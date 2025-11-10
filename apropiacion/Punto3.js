//Se crea un ciclo donde se inicializa la variable i
//donde se pedirá 10 números al usuario
for (let i = 1; i <= 10; i++) {
    //Se declara la variable num y se solicita al usuario que ingrese un número
    let num = prompt(`Ingrese el número ${i}:`);
    //aqui la variable num se convierte la entrada a número entero
    num = parseInt(num);
    //Se verifica con la sentencia if
    //si el número ingresado es mayor que 50
    if (num > 50) {
        //Si es mayor, se muestra el número
        alert(`El número ${num} es mayor que 50`);
    }
}