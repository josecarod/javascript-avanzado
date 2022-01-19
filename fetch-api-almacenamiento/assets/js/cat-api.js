let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () =>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(Response => Response.json()).then(data =>{
        console.log(data);  


    let imageGatito = document.createElement('img');
    imageGatito.src = data[0].url;
    document.body.appendChild(imageGatito);
    }); 

}); 


$btnGato.addEventListener('click', () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(Response => Response.json()).then(data =>{
        console.log(data);  


    let imageGatito = document.createElement('img');
    imageGatito.src = data.message;
    document.body.appendChild(imageGatito);
    }); 

});