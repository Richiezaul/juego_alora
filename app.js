
let limite = 10
let numeroSecreto = 0;
let intentos = 0;
let generados = [];

console.log(numeroSecreto);
function verificarintentoDeUsuario() {

    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

    console.log(numeroSecreto);

    if (numeroDeUsuario == numeroSecreto) {

        asignarTextoElemento('p', `Correcto Acertaste  en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}`);

        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {

        limpiarCaja()
        if (numeroSecreto > numeroDeUsuario) {

            asignarTextoElemento('p', 'incorrecto, la respuesta es un numero mayor ');

        } else {

            asignarTextoElemento('p', 'incorrecto, la respuesta es un numero menor ');

        }

        intentos++;

    }


}

function limpiarCaja() {

    document.querySelector('#numeroUsuario').value = '';
}

function asignarTextoElemento(elemento, texto) {

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;


}

function generarnumeroSecreto() {

    let random = Math.floor(Math.random() * limite) + 1;
    console.log(random);
    console.log(generados);

    if (generados.length >= limite) {

        asignarTextoElemento('p','ya se sortiaron todos los numeros ');
        document.getElementById('reiniciar').setAttribute('disabled', true);

    } else{

        if (generados.includes(random)) {

            return generarnumeroSecreto();
        } else {
    
            generados.push(random);
            return random;
        }

    }


}


function estructuraInicial() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limpiarCaja();
    asignarTextoElemento('h1', 'Juego numero secreto');
    asignarTextoElemento('p', `indica un numero del 1 al ${limite}`);
    numeroSecreto = generarnumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    estructuraInicial();


}

estructuraInicial();