//Peticion/Promesa sincrònica
fetch("https://fakestoreapi.com/docs#tag/Products") //Request
    .then(response => response.json())
    .then(json => console.log(json)); 