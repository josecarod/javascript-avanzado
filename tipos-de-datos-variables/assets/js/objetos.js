/* let miObjeto = {
    // pares de clave valor
    nombre: 
}
*/





let nombre = 'Jose Manuel';
let edad = 31;
let direccion = 'Villahermosa, Tabasco';
let numero = 293839181;

console.log(nombre);

let persona = {
    nombre: {
        apellidoPaterno: 'Jesus',
        apellidoMaterno: 'Leon',
        nombre: 'Jose Manuel'
    },
    edad: 31,
    direccion: {
        ciudad: 'Villahermosa',
        estado: 'Tabasco'
    },

    numero: [
        2324211113,
        2423980183
    ]
};

console.log(persona.nombre);

let camiseta = {
    talla: ['chica', 'mediana', 'grande'],
    color: ['blanca', 'negra', 'roja'],
    marca: 'hym',
    modelo: ['hombre', 'mujer', 'unisex']
}
