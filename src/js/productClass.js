import { v4 as uuidv4 } from "uuid";
class Product {
  constructor(
    name,
    manufacturer,
    expirationDate,
    category,
    quantity,
    dosageForm,
    price,
    dateRecieved
  ) {
    this.id = uuidv4();
    this.name = name;
    this.manufacturer = manufacturer;
    this.expirationDate = expirationDate;
    this.category = category;
    this.quantity = quantity;
    this.dosageForm = dosageForm;
    this.price = price;
    this.dateRecieved = dateRecieved;
  }
}

export default Product;
