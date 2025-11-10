//se crea un ciclo for para recorrer los números del 1 al 50
for (let n = 1; n <= 50; n++) {
    //se declara la variable primo y se verificar si el número es primo
  let primo = true;
  //aqui se verificar si el número es primo y si n es menor que 2
  if (n < 2) primo = false;
  //se crea un ciclo for para recorrer los números desde 2 hasta n-1
  for (let i = 2; i < n; i++) {
    //aqui se verifica si n es divisible por i
    if (n % i === 0) primo = false;
  }
  //aqui se imprime el número primo
  if (primo) alert(n);
}