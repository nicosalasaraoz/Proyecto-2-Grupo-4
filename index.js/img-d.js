const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');
const imgd = () => {
let products = JSON.parse(localStorage.getItem('products') || '[]');
    if (products.length === 0) {
        for(category of PRODUCTS) {
        const cat = categories.find(el => el.name === category.category);

        for(product of category.products) {
            let productId = products.length + 1;
            products.push({
            id: productId,
            categoryId: cat.id, 
            name: product.name,
            img: product.img, 
            descripcion: product.descripcion,
            video: product.video,
            });
        }
        }
        localStorage.setItem("products", JSON.stringify(products));  
    }
}
imgd();

let products = JSON.parse(localStorage.getItem('products') || '[]');
let imgdestacada = document.getElementById('img-des')
imgdestacada.innerHTML = products.map(producto =>
    `<div class="card-body">
        <h5 class="card-title">${producto.name}</h5>
        <p class="card-text ">${producto.descripcion}</p>
        <a href="games.html?productId=${producto.id}" class="btn mt-2 btn-secondary">Ver mas</a>
    </div>
    <img src="${producto.img}" class="img-top m-0 px-3 pb-3" alt="...">`)