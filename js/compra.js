function cargarProductos(){
    let productos = cargarProductosLS();
    let contenido ="";

    for (let producto of productos){
        contenido += `<div class="col-md-3">
        <div class="card">
        <img src="Imagenes/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
        <h4 class="card-title">${producto.nombre}</h4>
        <p class="card-text">$${producto.precio}</p>
        <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${producto.id});">Agregar (+)</a>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

guardarProductosLS(productos);
cargarProductos();
actualizarBotonCarrito();
