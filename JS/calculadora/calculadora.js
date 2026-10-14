let operacion
let val1;
let val2;
let resultado;

val1 = parseFloat(Number(prompt("Ingrese el primer valor:")));
operacion = prompt("Ingrese la operación que desea realizar: suma, resta, multiplicación o división");
val2 = parseFloat(Number(prompt("Ingrese el segundo valor:")));

switch (operacion) {
  case "suma":
    resultado = val1 + val2;
    alert("El resultado de la suma es: " + resultado);
    break;
  case "resta":
    resultado = val1 - val2;
    alert("El resultado de la resta es: " + resultado);
    break;
  case "multiplicación":
    resultado = val1 * val2;
    alert("El resultado de la multiplicación es: " + resultado);
    break;
  case "división":
    resultado = val1 / val2;
    alert("El resultado de la división es: " + resultado);
    break;
  default:
    alert("Operación no válida");
    break;
}