let productsFiltered = PRODUCTS;
const busqueda = document.getElementById('busqueda');
const renderGames = () => 
{
  games.innerHTML = '';

  productsFiltered.forEach(product => 
  {
    const card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = 
    `<div class="card h-100">
    <img src="${product.img}" alt="">
			<div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.descripcion}</p>
      </div>
      <div class="card-footer border-0">
      </div>
      <div class="bg-white d-flex">
        <a href="games.html" id= ${product.id}" class="btn btn-danger ms-auto m-2"> Ver mas
        </a>
      </div>
		 </div>`;
    games.appendChild(card);
  });
};

const searchFilter = () => {
  productsFiltered = PRODUCTS.filter(p =>
    p.name
      .toUpperCase()
      .includes(busqueda.value.toUpperCase())
  );
  renderGames();
};
renderGames()

