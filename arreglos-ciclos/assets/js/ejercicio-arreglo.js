const numeros = [2, 4, 5, 6, 2, 7, 3, 4, 6, 8, 2, 4, 12, 4, 6, 3, 9, 8, 5, 7];
let suma = 0;

for (let i = 0 ; i < numeros.length; i++){
    console.log(i);
    suma += numeros[i];
}

document.write('<br> La suma es ' + suma);

// 

let promedio = suma % numeros.length;

document.write('<br> El promedio es ' + promedio + '<br>');