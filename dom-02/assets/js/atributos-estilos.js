// https://lenguajejs.com/javascript/dom/crear-elementos-dom/#atributos-html-de-un-elemento

let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');

$texto.id = 'texto';
// $texto.style = 'color: yellow; font-size: 24px';

$texto.className = 'bg-purple h3';
// $texto.className = 'h3';

$texto.classList.add('text-center');
$texto.classList.remove('bg-purple');
