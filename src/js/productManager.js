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

  // DELETE
  static deleteProduct(id) {
    ProductManager.productsCollection =
      ProductManager.productsCollection.filter((product) => {
        return product.id !== id;
      });
    ProductManager.storeProducts(ProductManager.productsCollection);
  }

  // EDIT PRODUCT
  static editProduct(
    id,
    name,
    manufacturer,
    expirationDate,
    quantity,
    price,
    category,
    dosageForm,
    dateRecieved
  ) {
    const productsCollection = JSON.parse(localStorage.getItem("products"));

    const productIndex = productsCollection.findIndex(
      (product) => product.id === id
    );

    if (productIndex !== -1) {
      ProductManager.productsCollection[productIndex] = {
        id,
        name,
        manufacturer,
        expirationDate,
        quantity,
        price,
        category,
        dosageForm,
        dateRecieved,
      };
      ProductManager.storeProducts(ProductManager.productsCollection);
    }
  }
}

export default ProductManager;
