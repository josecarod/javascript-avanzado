const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

const restar = (numero1, numero2) => {
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}

const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}


const mostrarResultado = (operacion, numero1, numero2, respuesta) => {
    const resultado = document.createElement('h3');
    resultado.textContent = `La ${operacion} del ${numero1} y ${numero2} es ${respuesta}`;
    document.body.appendChild(resultado);
}

module.exports = {
    sumar, restar, multiplicar, dividir
}

 /* export {
    sumar,
    restar,
    multiplicar,
    dividir,
    mostrarResultado
} */