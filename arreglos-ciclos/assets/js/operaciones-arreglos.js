let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812];

// for.Each recorre todos los elementos del arreglo

numeros.forEach(function (numero){
    document.write(numero + ', ');
}); 


let numeros2 = numeros.map(function(elemento){
    return elemento * 2;
    // return elemento
})

document.write('<br>' + numeros2 + '<br>');


/* numeros.forEach(numero => {
    document.write(numero + ', ');
}); */ 


/* Includes */


document.write('<br>' + numeros.includes(328) + '<br>');

// 

let numerosPares = numeros.filter((elemento) => {
    if ( elemento % 2 == 0) {
        return true;
    } else {
        return false;
    }

});


document.write('<br>' + numerosPares + '<br>');

// 

let frutas = ['uva', 'mango', 'sandia', 'piña', 'manzana'];

let frutasFiltro = frutas.filter((fruta) => {
    /* if (fruta.includes('m') == true) {
        return true;
    } */

    return frutas.includes('m');
});

document.write('<br>' + frutasFiltro + '<br>');

// 

/* Sort */

let otrosNumeros = [9, 2, 3, 4, 5, 2, 3, 3, 6];

document.write('<br>' + numeros.sort() + '<br>');

// 

/* Reverse invierte el orden de los elementos de un arreglo */ 


document.write('<br>' + numeros.reverse() + '<br>');

// 

/* find obtiene el primer elemento que cumpla con una condición */

let frutaEncontrada = frutas.find(( elemento) => {
    return elemento.toLowerCase().includes('manzana');
});

document.write('<br>' + frutaEncontrada + '<br>');




