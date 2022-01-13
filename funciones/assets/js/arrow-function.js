// arrow function o función de flecha

/* function sumar(numero1, numero2){
    // Operaciones o codgio a ejecutar
    return numero1 + numero2;
}
*/

/* Funcion de flecha
Es un bloque de codigo reutilizable
Puede tener o no tener parametros de entrada
Puede devolver o no un valor
*/

// El único detalle con esta función es que no se puede llamar antes de ser declarada


const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let sumaNumeros = suma(numero1, numero2);


document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros}`); 