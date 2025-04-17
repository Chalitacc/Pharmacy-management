import MainValidation from "./mainValidation";

class ValidationFields extends MainValidation {
  static fieldsToValidate = [
    { name: "product-name", message: "Please enter name of product!" },
    { name: "manufacture", message: "Please enter name of manufacturer!" },
    { name: "expiration-date", message: "Please state expiration date!" },
    { name: "category", message: "Please choose category!" },
    { name: "quantity", message: "Please enter quantity!" },
    { name: "dosage-form", message: "Please choose dosage form!" },
    { name: "price", message: "Please enter price per unit!" },
    { name: "date-recieved", message: "Please choose date recieved!" },
  ];

  static validation() {
    return ValidationFields.validateForm(this.fieldsToValidate);
  }
}

export default ValidationFields;
