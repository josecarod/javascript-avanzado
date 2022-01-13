/* Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado
*/



let precio = parseInt(prompt('Instroducir precio'));
let cuponDescuento = prompt('Introduce tu cupón');
let descuento;

const precioConDescuento = (precio, descuento) => {
    precio * (1 - descuento/100);
}


switch (cuponDescuento) {
    case 'Bronce':
        descuento = 5;
        document.write('El precio original es ' + precio);
        document.write('El precio con descuento es ' + precioConDescuento);
    break;
    case 'Plata':
        descuento = 10;
        document.write('El precio original es ' + precio);
        document.write('El precio con descuento es ' + precioConDescuento);
    break;
    case 'Oro':
        descuento = 20;
        document.write('El precio original es ' + precio);
        document.write('El precio con descuento es ' + precioConDescuento);
    break;
    case 'Platino':
        descuento = 25;
        document.write('El precio original es ' + precio);
        document.write('El precio con descuento es ' + precioConDescuento);
    break;
    default:
        console.log('El cupón no es valido');
        break;
}