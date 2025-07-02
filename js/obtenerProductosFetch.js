//Peticion/Promesa sincrònica
fetch("https://fakestoreapi.com/docs#tag/Products") //Request
    .then(response => response.json())
    .then(json => console.log(json)); 

// Promesa Sincronica "async | await"

const endpoint = "";

async function obtenerProd() {

    try {

        let response = await fetch(endpoint);
        response = await response.json();

        console.log(response);

    }

    catch (error) {

        console.log("Error al leer datos");

    }

}