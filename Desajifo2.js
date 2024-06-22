
function holaMundo(params) {


    console.log('Hola mundo');
    
}

function saludo(nombre) {

    console.log(`Hola ${nombre}`);
    
}


function dobleValue(number) {

    let resp = number * 2;
    console.log(resp);

    return resp;
    
}


function promedio(numero1, numero2, numero3){

let resp = (numero1 + numero2 + numero3) / 2;

console.log(`promedio es: ${resp}`);
return resp;
}

function maxNumber(numero1, numero2){

    let resp = numero1 > numero2? numero1 : numero2;

    console.log(resp);

    return resp;
    
}


function multiplicar(numero){

    let resp = numero * numero;

    console.log(resp);

    return resp;
}
holaMundo();
saludo('manuel');
dobleValue(5);
promedio(89,88,70);
maxNumber(44,55);
multiplicar(5)