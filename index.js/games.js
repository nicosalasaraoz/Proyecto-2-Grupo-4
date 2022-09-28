const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

const products = JSON.parse(localStorage.getItem('products') || '[]');
const product = products.find(product => product.id === Number(productId));

if (product) { console.log (product)
  document.getElementById('productName').innerHTML = product.name;
  document.getElementById('productImg').src = product.img;
  document.getElementById('productDescripcion').innerHTML = product.descripcion;
  document.getElementById('productVideo').innerHTML = `<video src="${product.video}" autoplay loop muted ></video>`;
} else {
  window.location.href = 'error_404.html';
}