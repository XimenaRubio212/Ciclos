let multi = 0; //se inicializa la variable multi en 0
let bandera = false //se inicializa la variable bandera en false
//se crea un ciclo for que inicia en 0, se ejecuta mientras
// i sea menor o igual a 5 y se incrementa en 1
for (let i = 0; i <= 5; i++) {
    //se crea un ciclo for que inicia en 1,
    // se ejecuta mientras j sea menor o igual a 10 y se incrementa en 1
    for (let j = 1; j <= 10; j++) {
        //se calcula la multiplicacion
        multi = (5 * j);
        //se pide el valor de la multiplicacion
        let valor = prompt(`Ingrese el valor de 5 * ${j}:`)
        //se compara el valor ingresado con el resultado de la multiplicacion
        if (valor == multi) {
            //se imprime el resultado correcto
            alert(`Imprima el resultado de la ${multi}`);
        }
        //si el valor es incorrecto
        else {
            //se imprime el mensaje de error
            bandera = true;
            //se sale del ciclo
            break;
        }
    }
    //si la bandera es verdadera
        if (bandera) {
        //se imprime el mensaje de fin de ciclo
        break;
    }
}