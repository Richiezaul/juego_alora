let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

lenguagesDeProgramacion.push('Java', 'Ruby','GoLang');

function showLenguagesDeProgramacion(){

console.log(lenguagesDeProgramacion);

}


function showLenguagesDeProgramacioninverso(){

    console.log(lenguagesDeProgramacion.reverse());
    
    }

    function calcularPromedio(numeros){

        resp = 0
     for (let index = 0 ; index < numeros.length; index++){
        
        resp = resp + numeros[index];
       
     }

     return resp / numeros.length;

    }

    function showMaxAndMinAlgoritmom(numeros){

        console.log(`mayor ${Math.max(...numeros)}`);
        console.log(`menor ${Math.min(...numeros)}`);


    }


    
    function sumarElementos(numeros){

        resp = 0
     for (let index = 0 ; index < numeros.length; index++){
        
        resp = resp + numeros[index];
       
     }

     return resp

    }

    function buscarElemento(elemento,array){


      if(array.includes(elemento)){

         return array.indexOf(elemento);

      }else{

        return -1;
      }


    }


    function sumarListas(lista1, lista2){
      
        let resp= [];

       for (let index = 0; index < lista1.length; index++) {
           
        resp.push(lista1[index] + lista2[index]);

       }

       return resp;


    }


    function cuadradoListas(lista1){
      
        let resp= [];

       for (let index = 0; index < lista1.length; index++) {
           
        resp.push(lista1[index]*lista1[index]);

       }

       return resp;


    }



showLenguagesDeProgramacion();

console.log(calcularPromedio([89,67,89,65]));

showMaxAndMinAlgoritmom([3,4,6,8,34]);

console.log(sumarElementos([89,67,89,65]));

console.log(buscarElemento(30,[89,67,89,65]));
console.log(buscarElemento(65,[89,67,89,65]));

console.log(sumarListas([89,67,89,65],[89,67,89,65]));
console.log(cuadradoListas([5,67,89,65]));
