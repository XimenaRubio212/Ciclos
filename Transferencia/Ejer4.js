//se solicitan las notas de los estudiantes
//se utiliza un ciclo for para solicitar las notas de cada estudiante
for (let i = 1; i <= 5; i++) {
    //se inicializa la variable suma en 0
  let suma = 0;
  //se utiliza un ciclo for para solicitar las notas de cada estudiante
  for (let j = 1; j <= 3; j++) suma += Number(prompt(`Nota ${j} del estudiante ${i}:`));
  //se calcula el promedio
  let prom = suma / 3;
  //se muestra el resultado
  console.log(`Estudiante ${i} → Promedio: ${prom} → ${prom >= 3 ? "Aprueba" : "Reprueba"}`);
}