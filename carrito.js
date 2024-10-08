let carrito = [];
let total = 0;

function agregarAlCarrito() {
    const productoSeleccionado = document.getElementById('producto');
    const precioProducto = parseFloat(productoSeleccionado.value);
    
    carrito.push(precioProducto);

    calcularTotal();
}

function calcularTotal() {
    total = carrito.reduce((acc, precio) => acc + precio, 0);

    if (total > 100) {
        total = total * 0.9; 
    }

    document.getElementById('total').innerText = total.toFixed(2);
}
