// https://lenguajejs.com/javascript/dom/insertar-elementos-dom/

/*let $titulo = document.getElementById('titulo');
titulo.textContent = 'Titulo escrito desde el javascript'*/

/*
.clase
#id
*/

let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Titulo escrito desde JS';

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[1].textContent);

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo dentro del JS';
// document.body.append agrega un elemento dentro de body al final.
document.body.append(subtitulo);

$titulo.insertAdjacentElement("afterend", subtitulo);
// $titulo.remove();


let $contenido = document.querySelector('#contenido');
/* console.log($contenido.textContent);
console.log($contenido.innerHTML);
console.log($contenido.outerHTML); */
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);