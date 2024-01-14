class Product {
  // title = "DEFAULT";
  // imageUrl;
  // price;
  // description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  // render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = ` <h2>Total: \$${this.totalAmount.toFixed(
      2
    )} </h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, currentItem) => prevValue + currentItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId, false);
    this.orderProducts = () =>{
      console.log("order");
      console.log(this.items);
    }
    this.render()
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  // orderProducts() {
  //   console.log("order");
  //   console.log(this.items);
  // }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
    <h2>Total: \$${0} </h2>
    <button>Order Now!</button>
    `;
    const orderButton = cartEl.querySelector("button");

    // orderButton.addEventListener("click", () => this.orderProducts());
    // orderButton.addEventListener("click",  this.orderProducts.bind(this));
    orderButton.addEventListener("click",  this.orderProducts);
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }
  addToCart() {
    // console.log(this.product);
    App.addProductToCart(this.product);
  }
  render() {
    const prodEl = this.createRootElement("li", "product-item");

    prodEl.innerHTML = `
      <div>
      <img src='${this.product.imageUrl}' alt="${this.product.title}">
      <div class="product-item__content">
      <h2>${this.product.title}</h2>
      <h3>\$${this.product.price}</h3>
      <p>${this.product.description}</p>
      <button>Add to Cart</button>
      </div>
      </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  products = [];
  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
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
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, "prod-list");
    }
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop {
  constructor() {
    this.render();
  }

  render() {
    this.cart = new ShoppingCart("app");
    new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
