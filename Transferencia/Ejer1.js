// Ciclo for
for (let n = 1; n <= 50; n++) {
    // Verificar si el número es primo
  let primo = true;
  // Verificar si el número es primo
  if (n < 2) primo = false;
  // Verificar si el número es primo
  for (let i = 2; i < n; i++) {
    // Verificar si el número es primo
    if (n % i === 0) primo = false;
  }
  // Imprimir el número
  if (primo) console.log(n);
}