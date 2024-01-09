class Product {
  title = "DEFAULT";
  imageUrl;
  price;
  description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

const productList = {
  products: [
    new Product(
      "A Book",
      "https://cdn.pixabay.com/photo/2017/02/26/21/39/rose-2101475_1280.jpg",
      9.99,
      "A Book"
    ),

    new Product(
      "A Cup",
      "https://cdn.pixabay.com/photo/2020/02/15/05/15/cup-of-coffee-4850060_1280.jpg",
      1.99,
      "A Cup"
    ),

    new Product(
      "A Pillow",
      "https://cdn.pixabay.com/photo/2016/10/12/22/07/break-1736072_1280.jpg",
      19.99,
      "A soft pillow"
    ),

    new Product(
      "A Carpet",
      "https://cdn.pixabay.com/photo/2012/11/07/17/03/carpet-65100_1280.jpg",
      119.99,
      "A carpet which you might like - or not"
    ),

    new Product(
      "A Blanket",
      "https://cdn.pixabay.com/photo/2021/04/09/18/01/cat-6165131_1280.jpg",
      29.99,
      "A blanket just for you!"
    ),

    // {
    //   title: "A Pillow",
    //   imageUrl:
    //     "https://cdn.pixabay.com/photo/2016/10/12/22/07/break-1736072_1280.jpg",
    //   price: 19.99,
    //   description: "A soft pillow",
    // },
    // {
    //   title: "A Carpet",
    //   imageUrl:
    //     "https://cdn.pixabay.com/photo/2012/11/07/17/03/carpet-65100_1280.jpg",
    //   price: 119.99,
    //   description: "A carpet which you might like - or not",
    // },
    // {
    //   title: "A Blanket",
    //   imageUrl:
    //     "https://cdn.pixabay.com/photo/2021/04/09/18/01/cat-6165131_1280.jpg",
    //   price: 29.99,
    //   description: "A blanket just for you!",
    // },
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

productList.render();
