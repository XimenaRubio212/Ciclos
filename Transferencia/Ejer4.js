//se solicitan las notas de los estudiantes
//se crea un ciclo for para los 5 estudiantes
for (let i = 1; i <= 5; i++) {
  //se inicializa la variable suma en 0
  let suma = 0;
  //se crea un ciclo for para solicitar las notas de las 3 notas
  for (let j = 1; j <= 3; j++) suma += Number(prompt(`Nota ${j} del estudiante ${i}:`));
  //se declara la variable promedio y se calcula el promedio de las 3 notas
  let promedio = suma / 3;
  //se muestra un mensaje indicando el promedio y si aprueba o reprueba
  console.log(`Estudiante ${i} → Promedio: ${promedio} → ${promedio >= 3 ? "Aprueba" : "Reprueba"}`);
}