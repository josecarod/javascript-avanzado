/* const numeros = [5]; */

let numeros = new Array();

numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812];

document.write(numeros[5]);

for(let i = 0; i < numeros.length ; i++ ) {
     document.write(`${numeros[i]}<br/>`);
}

// i++ operador unario

// la letra i es una variable que se usa como contador en el for, cada vez que se realiza una ejecución, i va cambiando de valor, (de uno en uno por la expresión i++)

