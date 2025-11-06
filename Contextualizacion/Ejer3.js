// Ejercicio 3: Un grupo de 10 niños van a recibir un dulce,
// pero antes se les pregunta si ya tienen dulce.
// Si ya tienen dulce no se les da otro dulce,
// pero si no tienen dulce se les da uno. Hacer un algoritmo que permita resolver este problema.
for (let i = 0; i < 10; i++)
{
    // 1 significa que el niño ya tiene dulce, 0 que no tiene dulce
    let niño = prompt("¿El niño ya tiene dulce?");
    // Convertir la respuesta a número entero
    niño = parseInt(niño);
    // Verificar si el niño ya tiene dulce
    if (niño == 1){
        // El niño ya tiene dulce
        alert("El niño ya tiene dulce, no se le da otro dulce");
    }
    // El niño no tiene dulce
    else{
        // Darle un dulce al niño
        alert("Al niño se le da un dulce");
    }
}