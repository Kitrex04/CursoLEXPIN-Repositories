/*
  Ejercicios de recursion
  1) Crea una funcion que cuente todos los numeros pares entre un numero de inicio y un limite
  2) Crea una funcion que cuente todos los numeros de dos en dos en reversa en una serie de numeros, ejemplo.
  Ej: Desde el 100 a 0... 100, 98, 96, 94, 92, 90....
  3) Crea una funcion que recree la sucesion de Fibonacci hasta el numero deseado mas cercano.
*/



//1
function contarPares(inicio, limite) {
  let contador = 0;

  for (let numero = inicio; numero <= limite; numero++) {
    if (numero % 2 === 0) {
      contador++;
    }
  }

  return contador;
}
console.log(contarPares(1, 100)); 

//2
function contarDeDosEnDosReversa(inicio, limite) {
  let numeros = [];
  for (let numero = inicio; numero >= limite; numero -= 2) {
    numeros.push(numero);
  }
  return numeros;
}
console.log(contarDeDosEnDosReversa(100, 0));

//3
function fibonacciHasta(limite) {
  if (limite < 0) return [];
  if (limite === 0) return [0];

  const secuencia = [0, 1];

  for (let numero = 2; ; numero++) {
    const siguiente = secuencia[numero - 1] + secuencia[numero - 2];
    if (siguiente > limite) break; 

    secuencia.push(siguiente);
  }
  return secuencia;
}

console.log(fibonacciHasta(144)); 
