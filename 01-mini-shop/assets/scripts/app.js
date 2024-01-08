const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/10/12/22/07/break-1736072_1280.jpg",
      price: 19.99,
      description: "A soft pillow",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2012/11/07/17/03/carpet-65100_1280.jpg",
      price: 119.99,
      description: "A carpet which you might like - or not",
    },
    {
      title: "A Blanket",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/04/09/18/01/cat-6165131_1280.jpg",
      price: 29.99,
      description: "A blanket just for you!",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    productList.className = "product-list";

    for (const product of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
        <img src='${product.imageUrl}' alt="${product.title}">
        <div class="product-item__content">
        <h2>${product.title}</h2>
        <h3>\$${product.price}</h3>
        <p>${product.description}</p>
        <button>Add to Cart</button>
        </div>
        </div>
        `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render()
