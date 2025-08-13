const agregarAlCarrito =(item, cant) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const prodEncontrado = carrito.find (p=>p.id==item.id)
    if(!prodEncontrado){
        if(cant>item.stock){
            console.log("mno hay stock")
        }else{
            item.amount = cant
            carrito.push(item)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            console.log("producto agregado al carrito")
        }
    }else{
        console.log("prod agregado al carrito")
    }
    carrito.push(item);
    alert("Item agregado");
}