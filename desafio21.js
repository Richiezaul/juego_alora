let valorDollar = 4.80;

function calculoImc(altura , pesoKilos) {
    

    return pesoKilos / (altura * altura);

}

function factorial(numero) {

    let resp = numero;

    for (let index = numero-1 ; index > 0; index--) {
        
        resp = resp *index;
        console.log(resp);

    }

    return resp;
    
}


function pesosToDollar(pesos){


    return pesos * valorDollar;

}


function areaAndPerimetroRectangulo(altura, ancho){

    console.log(`El perimetro es: ${(altura + ancho) * 2} cm `);
    console.log(`El Area es  es: ${(altura * ancho)} cm_2`);


}


function areaAndPerimetroRectangulo(altura, ancho){

    console.log(`El perimetro es: ${(altura + ancho) * 2} cm `);
    console.log(`El Area es  es: ${(altura * ancho)} cm_2`);


}

function perimetroAndArecirculo(radio) {

    console.log(`el perimetro es: ${Math.PI * (radio*2)} cm`);
    console.log(`el area es: ${Math.PI * (radio*radio)} cm_2`);

    
}

function tablaDeMultiplicar(numero){

    for (let index = 1; index < 13; index++) {
        
        console.log(`${index} X ${numero} = ${index * numero}`);
        
    }
  



}


console.log(calculoImc(165,90));
factorial(6);
console.log(pesosToDollar(50));
areaAndPerimetroRectangulo(12,18);
perimetroAndArecirculo(3);
tablaDeMultiplicar(4);