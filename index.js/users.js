const busqueda = document.getElementById('busqueda');
const renderGames = () => {
  games.innerHTML = '';
  const q = document.getElementById("busqueda").value.toLowerCase();

  PRODUCTS.forEach(category => {
    const title = document.createElement('div');
    title.className = 'col-12';
    title.innerHTML = `<p class="display-6 text-light mt-3"> ${category.category} </p>`;
    games.appendChild(title);

    category.products.forEach (product => {
      if (product.name.toLocaleLowerCase().includes(q) || category.category.toLocaleLowerCase().includes(q) ){
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 my-4 justify-content-center';

        card.innerHTML = `
          <div class="card h-100">
            <img src="${product.img}" alt="" />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.descripcion}</p>
            </div>
            <div class="card-footer border-0">
              <div class="bg-white d-flex">
                <a href="games.html" id= ${product.id}" class="btn btn-danger ms-auto m-2"> Ver mas
                </a>
              </div>
            </div>
          </div>`;
        games.appendChild(card);
      }
      
    });

  });
};

renderGames();
