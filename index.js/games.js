let main = document.getElementById('main')
let PRODUCTS = JSON.parse(localStorage.getItem('products'))
let id = window.location.search.split('=').pop()
console.log('id', id)
let product = products.filter(product => product.id === Number(id))
console.log('producto', product)
main.innerHTML =
  
