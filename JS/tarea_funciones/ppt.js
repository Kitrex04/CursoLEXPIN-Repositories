function jugar() {
    let jugador1 = prompt("Jugador 1: piedra, papel o tijera");
    let jugador2 = prompt("Jugador 2: piedra, papel o tijera");
    let resultado = determinarGanador(jugador1, jugador2);

    alert("Jugador 1 eligió: " + jugador1 + 
          "\nJugador 2 eligió: " + jugador2 + 
          "\n\nResultado: " + resultado);
}

function determinarGanador(jugador1, jugador2) {
    if (jugador1 === jugador2) {
        alert("¡Es un empate!");
    } else if (jugador1 === "Piedra" && jugador2 === "Tijera") {
        alert("¡Gana el Jugador 1!");
    } else if (jugador1 === "Papel" && jugador2 === "Piedra") {
        alert("¡Gana el Jugador 1!");
    } else if (jugador1 === "Tijera" && jugador2 === "Papel") {
        alert("¡Gana el Jugador 1!");
    } else {
        alert("¡Gana el Jugador 2!");
    }
}

jugar();
