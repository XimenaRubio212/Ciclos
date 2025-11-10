//se inicializa la variable ok en false
let ok = false;
//se utiliza un ciclo for
for (let i = 1; i <= 3; i++) {
    //se solicita al usuario el usuario y la contraseña
  let u = prompt("Usuario:");
  //se solicita al usuario el usuario y la contraseña
  let c = prompt("Contraseña:");
  //se verifica si el usuario y la contraseña son correctos
  if (u === "admin" && c === "123") { ok = true; break; }
}
//se muestra un mensaje de bienvenida o de acceso denegado
alert(ok ? "Bienvenido" : "Acceso denegado");