//Se inicializa la variable num en 1
let num = 1;

//Se crea un ciclo que se ejecuta mientras num sea menor o igual a 20
while (num <= 20) {

    //Se verifica si el número es múltiplo de 3 usando el operador %
    if (num % 3 == 0) {
        //Si es múltiplo de 3, se imprime
        alert(`Número múltiplo de 3: ${num}`);
    }

    //Se incrementa la variable num en 1 para continuar con el siguiente número
    num = num + 1;
}
