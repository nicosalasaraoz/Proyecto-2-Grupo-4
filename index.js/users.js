const init = () => {
  const categories = JSON.parse(localStorage.getItem("categories") || "[]");
  const products = JSON.parse(localStorage.getItem("products") || "[]");

  if (categories.length === 0) {
    for(category of PRODUCTS) {
      let categoryId = categories.length + 1;
      categories.push({
        id: categoryId, 
        name: category.category
      });
    }
    localStorage.setItem("categories", JSON.stringify(categories))  
  }

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

const renderGames = () => {
  const busqueda = document.getElementById('busqueda');
  const games = document.getElementById('games');
  games.innerHTML = '';
  const q = busqueda.value.toLowerCase();

  const categories = JSON.parse(localStorage.getItem("categories") || "[]");
  const products = JSON.parse(localStorage.getItem("products") || "[]");

  for (category of categories) {
    let exists = false;
    let filteredProducts = products.filter(product => product.categoryId === category.id);
    
    if (category.name.toLowerCase().includes(q)) {
      exists = true;
    } else {
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(q));
      exists = filteredProducts.length > 0;
    }

    if (exists) {
      const title = document.createElement('div');
      title.className = 'col-12';
      title.innerHTML = `<p class="display-6 text-light mt-3"> ${category.name}</p>`;
      games.appendChild(title);
    
      for(product of filteredProducts) {
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
                <a href="games.html?productId=${product.id}" class="btn btn-danger ms-auto m-2"> Ver mas
                </a>
              </div>
            </div>
          </div>`;
        games.appendChild(card);
      }
    }
  }
}

init();
renderGames();
