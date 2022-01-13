
let hora = parseInt(prompt('Introducir hora'));


if (hora >= 6 && hora <= 11) {
    document.write('Buenos días');
} if (hora >= 12 && hora <= 18) {
    document.write('Buenas tardes');
} if (hora >= 19 && hora <= 23) {
    document.write('Buenas noches');
} if (hora >= 0 && hora <= 5) {
    document.write('Dejame dormir'); 
}


/*
Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
*/