import { v4 as uuidv4 } from "uuid";
import ProductCategory from "./productCategory";
class BaseProduct {
  constructor(name, manufacturer, expirationDate, quantity, price) {
    this.id = uuidv4();
    this.name = name;
    this.manufacturer = manufacturer;
    this.expirationDate = expirationDate;
    this.quantity = quantity;
    this.price = price;
  }
}

class Product extends BaseProduct {
  constructor(
    name,
    manufacturer,
    expirationDate,
    quantity,
    price,
    category,
    dosageForm,
    dateRecieved
  ) {
    super(name, manufacturer, expirationDate, quantity, price);
    this.category = category;
    this.dosageForm = dosageForm;
    this.dateRecieved = dateRecieved;
  }
}

export default Product;
