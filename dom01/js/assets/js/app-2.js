let nombre = document.getElementById("nombre");

function changename( cambiodenombre){
    cambiodenombre = prompt("Escriba su nombre");
    nombre.textContent = cambiodenombre;
}