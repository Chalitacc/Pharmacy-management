import UserInterface from "./ui";
import ProductManager from "./productManager";
import ValidationFields from "./validationFields";
import MainValidation from "./mainValidation";
// SELECTING ELEMENTS
const formModal = document.querySelector(".form-modal");
const openAddModalButton = document.querySelector(".add-button");
const cancelCloseModalButton = document.querySelector(".cancel-button");

const form = document.querySelector(".form");

// SELECTING FORM ELEMENTS
const name = document.querySelector(".form__name-input");
const manufacturer = document.querySelector(".form__manufacture-input");
const expriationDate = document.querySelector(".form__expiration-date-input");
const categoryDropDown = document.querySelector(".form__category-selector");
const quantity = document.querySelector(".form__quantity-input");
const price = document.querySelector(".form__price-input");
const dateRecieved = document.querySelector(".form__date-recieved-input");
const dosageForm = document.querySelector(".form__dosage-form-selector");
const submitButton = document.querySelector(".submit-button");

document.addEventListener("DOMContentLoaded", () => {
  UserInterface.openAddModal(openAddModalButton, formModal);
  UserInterface.closeCancelModal(cancelCloseModalButton, formModal, form);
  UserInterface.viewProductList();
  UserInterface.closeDeleteModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // VALIDATION

  if (!ValidationFields.validation()) {
    return;
  }

  if (!UserInterface.currentEditId) {
    ProductManager.addProduct(
      name.value.trim(),
      manufacturer.value.trim(),
      expriationDate.value,
      quantity.value.trim(),
      price.value.trim(),
      categoryDropDown.value,
      dosageForm.value,
      dateRecieved.value
    );
  } else {
    ProductManager.editProduct(
      UserInterface.currentEditId,
      name.value.trim(),
      manufacturer.value.trim(),
      expriationDate.value,
      quantity.value.trim(),
      price.value.trim(),
      categoryDropDown.value,
      dosageForm.value,
      dateRecieved.value
    );
    UserInterface.currentEditId = null;
    submitButton.textContent = "Add";
    formModal.classList.remove("display-form-modal");
  }

  console.log("Product added");
  console.log(ProductManager.getProduct());

  UserInterface.viewProductList();
  form.reset();
  formModal.classList.remove("display-form-modal");
  MainValidation.resetForm(ValidationFields.fieldsToValidate);
});
