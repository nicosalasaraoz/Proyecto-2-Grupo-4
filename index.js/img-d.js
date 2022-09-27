let productos = JSON.parse(localStorage.getItem('productos'))
let divRow = document.getElementById('rowCard')
divRow.innerHTML = productos.map(producto =>
    ` 
    <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"${producto.marca}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">${producto.precio}</p>
                <button type="button" class="btn btn-success my-3">Ver Mas...</button>
                <button type="button" class='btn btn-dark'>Añadir al Carrito</button>

            </div>
    </div>`
)
