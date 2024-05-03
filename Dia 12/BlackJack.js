// Canvas con alta resolución
var canvas = document.getElementById("canvas");
canvas.width = 1220 * 2;
canvas.height = 400 * 2;
canvas.style.width = 1220 + "px";
canvas.style.height = 400 + "px";
var ctx = canvas.getContext("2d");

// Clase carta
class carta {
    static x = 50;
    static y = 50;
    constructor(valor, palo) {
        this.img = new Image();
        this.valor = valor;
        this.palo = palo;
    }
}

// Variables que se usarán
var cartas = [];
var cartasJugador = [];
var cartas_casa = [];
var IndiceCarta = 0;
var palos = ["S", "H", "D", "C"];

// Se generan las cartas con atributo, valor y palo
for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 11; j++) {
        cartas.push(new carta(j, palos[i]));
    }
}

// Barajar las cartas
for (let i = 0; i < 100; i++) {
    cartas.splice(Math.floor(Math.random() * 52), 0, cartas[0]);
    cartas.shift();
}

function drawCart(CJ) {
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, carta.x, carta.y, 239, 335);
        carta.x += 300;
    };
    img.src = "Imagenes/Cartas/" + CJ.valor.toString() + CJ.palo + ".svg";
}

function pedirCarta() {
    if (IndiceCarta < cartas.length) {
        let CJ = cartas[IndiceCarta];
        cartasJugador.push(CJ);
        IndiceCarta++;
        drawCart(CJ);
    }
}


function plantarme() {
    document.getElementById("pedir").disabled = true;
    document.getElementById("plantar").disabled = true;
    document.getElementById("reset").disabled = false;
    let pointsUser = 0;
    let pointsCrupier = 0;
    let info = document.getElementById("info");

    // Contar y mostrar los puntos del jugador
    for (let i = 0; i < cartasJugador.length; i++) {
        pointsUser += cartasJugador[i].valor;
    }

    // Contar y mostrar los puntos de la casa
    while (pointsCrupier < 17) {
        cartas_casa.push(cartas[IndiceCarta]);
        pointsCrupier += cartas[IndiceCarta].valor;
        IndiceCarta++;
    }

    // Poner los puntos de la partida en el Info
    info.innerHTML = "Puntuación de Jugador: " + pointsUser + "<br>Puntuación De la Casa: " + pointsCrupier;

    // Mostrar las cartas de la Casa
    carta.x = 50;
    carta.y = 400;
    for (let i = 0; i < cartas_casa.length; i++) {
        drawCart(cartas_casa[i]);
    }

    // Verificar el ganador
    if (pointsUser == 21) {
        info.innerHTML += "<br><b>Black Jack! Has Ganado!!!</b>";
    } else if (pointsUser > 21) {
        info.innerHTML += "<br><b>Lo siento, has perdido... Te has pasado de puntos</b>";
    } else if (pointsCrupier > 21) {
        info.innerHTML += "<br><b>Has ganado! La casa se ha pasado de puntos!</b>";
    } else if (pointsCrupier >= pointsUser) {
        info.innerHTML += "<br><b>Ha ganado la Casa...</b>";
    } else {
        info.innerHTML += "<br><b>Has Ganado!!!</b>";
    }
}

// Recargar la pagina para volver a jugar
function playagain() {
    location.reload(true);
} 
