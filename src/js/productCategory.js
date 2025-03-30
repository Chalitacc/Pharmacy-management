class ProductCategory {
  constructor(categoryname, dosageName) {
    this.categoryname = categoryname;
    this.dosageName = dosageName;
    this.product = [];
  }
  addProduct(product) {
    this.product.push(product);
  }

  getProducts() {
    return this.product;
  }
}

export default ProductCategory;
