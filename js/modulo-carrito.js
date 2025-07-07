const agregarAlCarrito =(item) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(item);
    //JSON.stringify convierte los datos a formato JSON
    localStorage.setItem("carrito", JSON.stringify(item));
    alert("Item agregado");
}