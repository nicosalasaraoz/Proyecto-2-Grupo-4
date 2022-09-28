let products = JSON.parse(localStorage.getItem('products') || '[]');
let imgdestacada = document.getElementById('img-des')
imgdestacada.innerHTML = productos.map(producto =>
    `<div class="card-body">
        <h5 class="card-title">${producto.name}</h5>
        <p class="card-text ">${producto.descripcion}</p>
        <a href="games.html?productId=${producto.id}" class="btn mt-2 btn-secondary">Ver mas</a>
    </div>
    <img src="${producto.img}" class="img-top m-0 px-3 pb-3" alt="...">`)