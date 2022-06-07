//Funcion que busca los producto en el localstorage y retorna un funcion tipo flecha cuando coinciden los id
function buscarProducto(id){
    let productos = cargarProductosLS();
    return productos.find(x => x.id == id);
}

//funcion que verifica si el carrito está vacio devuelve un Json vacio en caso contrario carga los productos seleccionados 
function cargarProductosCarrito(){
    if (localStorage.getItem("carrito")){
        return JSON.parse(localStorage.getItem("carrito"));
    }
    
    return [];   
}

//Funicion que añade productos al carrito a medida que se van seleccionado en la página de compra.html
function agregarAlCarrito(id){
    let producto = buscarProducto(id);
    let productos_carrito = cargarProductosCarrito();
    productos_carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(productos_carrito));
    actualizarBotonCarrito();
}

//Funicion que borra completamente los productos comprados del carrito
function eliminarCarrito(){
    localStorage.removeItem("carrito");
    mensajeError();
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}

//Función que permite tener actualizado el carrito de compra 
function actualizarBotonCarrito(){
    let productos_carrito = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn btn-warning position-relative"><img src="Imagenes/cart4.svg" alt="Carrito-Compras" title="Carrito de Compras" width="40"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${productos_carrito.length}</span></button>`
    document.getElementById("boton_carrito").innerHTML = contenido;
}

//Funicion que lleva a cabo la eliminación de los productos comprados en forma indivudual
function eliminarProducto(id) {
    mensajeAlerta();
    let productos_carrito = cargarProductosCarrito();
    let productos_carrito_actualizado = productos_carrito.filter(x => x.id != id);
    localStorage.setItem("carrito", JSON.stringify(productos_carrito_actualizado));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}

function mensajeError(){        //funcion que ejecuta mensaje de error cuando el carrito está vacio 
    Swal.fire({
        title: '¡¡¡Oops!!!',
        text: 'Se borraron todos los productos del carrito',
        icon: 'error',
        confirmButtonText: 'Reinicie Compra!!!'
    })
}

function mensajeAlerta(){       //funcion que ejecuta mensaje de advertencia cuando se borran elementos comprados o si hay productos iguales
    Swal.fire({
        title: '¡¡¡ADVERTENCIA!!!',
        text: 'El producto seleccionado SE BORRARÁ y SI hay otro igual se borrarán los dos',
        icon: 'error',
        confirmButtonText: 'Reinicie Compra!!!'
    })
}

// Función que carga los productos que fueron seleccionados en la página compra
function cargarProductosSeleccionados(){
    if(document.getElementById("productos_seleccionados")){
        let productos = cargarProductosCarrito();
        let productos_seleccionados = document.getElementById("productos_seleccionados") ;
        
        if(productos.length == 0){
            contenido = "<p class = 'text-center' bg-light p-5'>No se encontraron productos seleccionados!!!</p>";
            productos_seleccionados.innerHTML = contenido;
        }else{
            total = 0;
            let contenido =`<table class="table table-hover">
            <tr>
            <th>Nombre</th>
            <th class='text-end'>Precio</th>
            <th>&nbsp;</th>
            </tr>`
            for (let producto of productos){
                contenido +=`<tr>
                <td>${producto.nombre}</td>
                <td class='text-end'><b>${producto.precio}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${producto.id});'>[ X ]</button></td>
                </tr>`;
                total += producto.precio;
            }
            contenido += `<tr>
            <td>Total a pagar</td>
            <td class='text-end'><b>$${total}</b></td>
            <td>&nbsp</td>
            </tr>
            </table>`;
            productos_seleccionados.innerHTML = contenido;
        }   
    }
    
}

//Borra el carrito cuando se pulsa en el icono de cesto de basura
document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);
