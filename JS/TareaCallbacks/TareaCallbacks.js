/*
  EJERCICIOS

  1) Crea un programa para jugar piedra papel o tijera, que me permita jugar contra la computadora 
  debe tener un contador de victorias para cada jugar, ademas debe de mostrar un historial de las ultimas 5 partidas.
  2) Crea un programa que me permita ingresar un string y me devuelva la cantidad de
  vocales que tiene el string, la cantidad de palabras que tiene, y la cantidad de caracteres que tiene.
  3) Crea un programa que me permita ingresar un string y me indique cuantas veces se repite cada palabra.
  4) Crea un programa que el cual me permita ingresar una palabra y me devuelva la palabra
  invertida
  5) Crea un programa que me permita verifica si dos palabras son palindromo, es decir, 
  que se leen de igual forma de izquierda a derecha o de derecha a izquierda.
  fecha de entrega: 14/08/26
*/


let victoriasUsuario = 0;
let victoriasComputadora = 0;
let historial = [];

const opciones = ["piedra", "papel", "tijeras"];

function jugar(jugadaUsuario) {
  let numeroAleatorio = Math.floor(Math.random() * 3);
  let jugadaComputadora = opciones[numeroAleatorio];

  /* Determinar ganador */
  let resultado = "";

  if (jugadaUsuario === jugadaComputadora) {
    resultado = "Empate";
  } else if (
    (jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") ||
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
    (jugadaUsuario === "tijeras" && jugadaComputadora === "papel")
  ) {
    resultado = "¡GANASTE!";
    victoriasUsuario++;
  } else {
    resultado = "¡PERDISTE!";
    victoriasComputadora++;
  }

  /* historial */
  let resumenPartida = `${jugadaUsuario.toUpperCase()} vs ${jugadaComputadora.toUpperCase()} -> ${resultado}`;
  historial.push(resumenPartida);

  if (historial.length > 5) {
    historial.shift();
  }

  alert(
    `Tú elegiste: ${jugadaUsuario.toUpperCase()}\n` +
    `Computadora eligió: ${jugadaComputadora.toUpperCase()}\n` +
    `Resultado: ${resultado}\n\n` +
    `--- MARCADOR ---\n` +
    `Tú: ${victoriasUsuario} | Computadora: ${victoriasComputadora}\n\n` +
    `--- HISTORIAL (Últimas 5) ---\n` +
    historial.join("\n")
  );
}

/* 2) --------------------------------------------------------------------- */

function analizarTexto() {
  let texto = document.getElementById("textoInput").value;

  if (texto === null || texto === "") {
    alert("No ingresaste ningún texto.");
    return;
  }

  /* CONTEO 1: Cantidad de caracteres */
  let totalCaracteres = texto.length;

  /* CONTEO 2: Cantidad de vocales */
  let contadorVocales = 0;
  let textoMinusculas = texto.toLowerCase();

  /* Recorremos el texto letra por letra */
  for (let i = 0; i < textoMinusculas.length; i++) {
    let letra = textoMinusculas[i];

    /* Verificar si es una vocal */
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      contadorVocales++; 
    }
  }

  /* CONTEO 3: Cantidad de palabras */
  let palabras = texto.trim().split(" ");
  let totalPalabras = palabras.length;

  alert(
    `Frase: "${texto}"\n\n` +
    `• Caracteres (incluyendo espacios): ${totalCaracteres}\n` +
    `• Total de vocales: ${contadorVocales}\n` +
    `• Total de palabras: ${totalPalabras}\n`
  );
}

/* 3) --------------------------------------------------------------------- */

let historialTextos = [];

function palabraRepetida() {
  let texto = document.getElementById("textoInput").value;

  if (texto === null || texto === "") {
    alert("No ingresaste ningún texto.");
    return;
  }

  /* REGISTRO Y CONTEO DE REPETICIÓN DEL STRING */
  // Agregamos el texto actual al historial
  historialTextos.push(texto);

  // Contamos cuántas veces aparece exactamente este texto en el historial
  let vecesRepetido = 0;
  for (let i = 0; i < historialTextos.length; i++) {
    if (historialTextos[i] === texto) {
      vecesRepetido++;
    }
  }

  alert(
    `Frase: "${texto}"\n\n` +
    `• Veces que has ingresado esta frase: ${vecesRepetido}`
  );
}





