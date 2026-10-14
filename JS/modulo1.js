/*
OPERADORES DE COMPARACION
== Igualdad (compara solo el valor)
=== Igualdad estricta (compara valor y tipo de dato)
!= Diferente (compara solo el valor)
!== Diferente estricta (compara valor y tipo de dato)
> Mayor que
< Menor que
>= Mayor o igual que
<= Menor o igual que
*/

2 == "2"; // true
2 === "2"; // false
2 != "2"; // false
2 !== 5; // true
2 < 1; // false
5 > 5; // false
5 >= 5; // true
5 <= 3; // false

/*
  Operadores Lógicos
  && AND (y)
  || OR (o)
  ! NOT (no)
*/

2 > 5 && 3 === 3; // false

let uno = !true || false; // false
let dos =false && !false; // false
let tres = true && !false; // true

//(Medio)
let cuatro = 5 === 5 || !true; // true
let cinco = !0 || 5 < 0; // true
let seis = 3 > 4 && !0; // false

//Avanzado
let siete = ((false || true) && (!false && true)) || (true && false);//true
let ocho = 6 === 3 + 3 && 9 / 3 >= 3; //true
let nueve = !!false || ("1" == 1 && !false === true);//false

//Hardcore
let diez = !!true === !!(5 >= 5);//true
let once = !(true && !true === !!(8 === 4 * 2));//true

//Ultra-Hardcore
let doce = !(true && !true === !!(16 === 4 * 2 + 8)) !== false;//true

//Leyenda
let trece = !((!(!(10 / 5 == "2") === false) != false) === 5 * 5 <= 100 / 4 &&
  !(1+1 !== 10/5) !== true);//false

//Inmortal
let catorce = !!(
  (10 % 3 != 1 || typeof ("10" - 5) !== "number" || !!([] && {})) 
  (12 * 4 === "48" || (7 <= "7" && "7" <= 7 ) || Boolean(0) === boolean("0")));



  /*
  Funciones
  Las funciones son bloques de código que se pueden reutilizar y ejecutar en cualquier momento. 
  Se definen con la palabra clave "function" seguida del nombre de la función y paréntesis 
  que pueden contener parámetros. 
  
  El código dentro de la función se ejecuta cuando se llama a la función por su nombre.
*/

//Funcion sin parametros
function saludar() {
  console.log("Hola, bienvenido a la programación web");
}

saludar(); // Llamada a la función
saludar(); // Llamada a la función
saludar(); // Llamada a la función

//Funcion con parametros
function saludarPersona(nombre) {
  console.log("Hola " + nombre + ", bienvenido a la programación web");
}

saludarPersona("Juan"); // Llamada a la función con argumento
saludarPersona("Maria"); // Llamada a la función con argumento
saludarPersona("Pedro"); // Llamada a la función con argumento

function calculadora(operacion, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("los valores no son validos");
  } else {
    let resultado;
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "dividir":
        if (num2 === 0) {
          console.log("La operacion no es valida");
        } else {
          resultado = num1 / num2;
        }
        break;
      case "multiplicar":
        resultado = num1 * num2;
        break;
      default:
        console.log("operacion no valida");
    }
    if (resultado || resultado === 0) {
      console.log("El resultado es " + resultado);
    }
  }
}

calculadora("resta", 5, 5);

/*
  Ejercicio
  Crea un programa que funcione como un piedra papel o tijera.
  Debes pedirle a los dos jugadores que ingresen su jugada y 
  luego mostrar el resultado de quien gano.

  (Debes de utilzar funciones y condicionales)
*/


/*
  FUNCIONES CON RETORNO
*/
function sinRetorno() {
  console.log("Esta funcion no tiene retorno");
}

let variable1 = sinRetorno(); // Llamada a la función
console.log(variable1); // undefined

function conRetorno() {
  return "Esta funcion tiene retorno";
}

let variable2 = conRetorno(); // Llamada a la función
console.log(variable2); // Esta funcion tiene retorno

function ejemplo(num1, num2) {
  if(num1 > num2) {
    return num1;
  }
  else if(num1 < num2) {
    return num2;
  }
  console.log("Los numeros son iguales");
}

let ejemplo1 = ejemplo("b", "a"); // Llamada a la función
console.log(ejemplo1)

