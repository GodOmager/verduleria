document.addEventListener("DOMContentLoaded",()=>{
    const endpoint = './data/datos.json';
    const getProductos = async () =>{
        try{response = await fetch(endpoint)
            datos = await response.json()
            console.log(datos)

           mostrarProductos(datos)

        }catch(error){
            console.error("Error")
        }
}

    getProductos()

    const contenedorProd = document.querySelector('section.productos')
    const mostrarProductos = (datos) => {
    
        datos.forEach(item => {
            const card = document.createElement('div')
            card.className = 'card'
            card.innerHTML = `
                <div class="top">
                    <img src="${item.image}" alt="${item.title}">
                    <p class="titProd">${item.title}</p>
                    <p class="descrpcion">${item.description}</p>
                    <a href="opiniones.html" class="resenias">ver reseñas</a>
                </div>
                <div class="bottom">
                    <div class="precio">
                        <span>$${item.price}</span> 
                        <button class="favorito"><i class="fa-solid fa-heart-circle-check"></i></button>
                    </div>
                    <div class="agregar">
                        <div class="amount">
                            <span class="descrpcion"> Cant </span>
                            <input type="number" name="cant" id="cant-${item.id}" min="0" max="${item.stock}">
                        </div>
                        <button class="addcarrito" id ="addCarrito"><i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>`
            contenedorProd.appendChild(card)
            //Evento boton agregar
            card.querySelector("#addCarrito").onclick = () => {
                item.cant = Number(card.querySelector("#cant-"+item.id).value);
                console.log(item);
                agregarAlCarrito(item)
            }
            
        })
        
    }
})