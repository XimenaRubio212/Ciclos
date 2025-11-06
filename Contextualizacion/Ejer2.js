let multi = 0; //variable para la multiplicacion
let bandera = false //bandera para salir del ciclo
//ciclo para la tabla de multiplicar del 5
for (let i = 0; i <= 5; i++) {
    //ciclo para pedir los resultados de la tabla de multiplicar
    for (let j = 1; j <= 10; j++) {
        //calculo de la multiplicacion
        multi = (5 * j);
        //pedir el valor de la multiplicacion
        let valor = prompt(`Ingrese el valor de 5 * ${j}:`)
        //comparacion del valor ingresado con el resultado de la multiplicacion
        if (valor == multi) {
            //imprimir el resultado correcto
            alert(`Imprima el resultado de la ${multi}`);
        }
        //si el valor es incorrecto
        else {
            //imprimir mensaje de error
            bandera = true;
            //salir del ciclo
            break;
        }
    }
    //si la bandera es verdadera salir del ciclo
        if (bandera) {
            //imprimir mensaje de fin de ciclo
        break;
    }
}