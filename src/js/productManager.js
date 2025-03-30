import UserInterface from "./ui";
import Product from "./productClass";

class ProductManager {
  static productsCollection =
    JSON.parse(localStorage.getItem(`products`)) || [];

  // adding new products
  static addProduct(
    name,
    manufacturer,
    expirationDate,
    quantity,
    price,
    category,
    dosageForm,
    dateRecieved
  ) {
    const product = new Product(
      name,
      manufacturer,
      expirationDate,
      quantity,
      price,
      category,
      dosageForm,
      dateRecieved
    );

    this.productsCollection.push(product);
    this.storeProducts();
    console.log(this.productsCollection);
  }
  static storeProducts() {
    localStorage.setItem(`products`, JSON.stringify(this.productsCollection));
  }
  static getProduct() {
    return this.productsCollection;
  }
}

export default ProductManager;
