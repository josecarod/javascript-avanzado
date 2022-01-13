/* Funcion
   Es un bloque de codigo reutilizable
   Puede tener o no parametros de entrada
   Puede devolver o no un valor
*/

function suma(numero1, numero2){
    //Operaciones o codigo a ejecutar

    return numero1 + numero2;
    console.log('Hola desde la función');
}


let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let sumaNumeros = suma(numero1, numero2);

// template string representa la cadena
// `` backstick o comilla invertida te permite combinar texto con codigo de javascript

document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros}`); 
document.write('La suma de ' + numero1 + 'y' + numero2 + 'es' + sumaNumeros);