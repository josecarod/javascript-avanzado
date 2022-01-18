// https://lenguajejs.com/javascript/caracteristicas/eventos/
// https://www.arkaitzgarro.com/javascript/capitulo-15.html

let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span');

/* addEventListener */
$btnMensaje.addEventListener('click', () => {
    console.log('No me presiones');
});

$mensaje.addEventListener('keydown', (e) => {
       console.log(e.target.value);

       if(e.target.value.length < 3){
           $spanError.classList.remove('hide');
           $spanError.classList.add('error');
       } else {
           $spanError.classList.add('hide');
           $spanError.classList.remove('error');
       }

    /* console.log('escribiste algo'); */
})