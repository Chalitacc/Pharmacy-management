import MainValidation from "./mainValidation";
import ProductManager from "./productManager";
import ValidationFields from "./validationFields";

class UserInterface {
  // RENDER
  static currentEditId = null;
  static viewProductList() {
    const listContainer = document.querySelector(
      ".product-list__list-container"
    );

    listContainer.innerHTML = "";

    const formModal = document.querySelector(".form-modal");

    const productsList = JSON.parse(localStorage.getItem("products")) || [];

    productsList.forEach((product) => {
      // CREATING ELEMENTS
      const productsContainer = document.createElement("li");
      const productsName = document.createElement("span");
      const productsManufacture = document.createElement("span");
      const productsExpirationDate = document.createElement("span");
      const productsCategory = document.createElement("span");
      const productsQuantity = document.createElement("span");
      const productsDosageForm = document.createElement("span");
      const productsPrice = document.createElement("span");
      const productsDateRecieved = document.createElement("span");

      const toolsContainer = document.createElement("span");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      // ADDING CONTENT
      productsName.textContent = product.name;
      productsManufacture.textContent = product.manufacturer;
      productsExpirationDate.textContent = product.expirationDate;
      productsCategory.textContent = product.category;
      productsQuantity.textContent = product.quantity;
      productsDosageForm.textContent = product.dosageForm;
      productsPrice.textContent = product.price;
      productsDateRecieved.textContent = product.dateRecieved;
      editButton.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
      deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

      toolsContainer.append(editButton, deleteButton);
      productsContainer.append(
        productsName,
        productsManufacture,
        productsExpirationDate,
        productsCategory,
        productsQuantity,
        productsDosageForm,
        productsPrice,
        productsDateRecieved,
        toolsContainer
      );
      listContainer.appendChild(productsContainer);

      // ADDING CLASS NAMES
      productsContainer.classList.add("products-container");
      toolsContainer.classList.add("tools-container");
      editButton.classList.add("edit-button");
      deleteButton.classList.add("delete-button");

      // ADDING EVENT LISTENER TO DELETE BUTTON
      deleteButton.addEventListener("click", () => {
        UserInterface.displayDeleteModal(product.id, product.name);
      });

      // EDiT BUTTON

      editButton.addEventListener("click", () => {
        UserInterface.displayEditForm();
        UserInterface.populateEditProduct(product.id);
      });
    });
  }

  // OPEN FORM BUTTON MODAL
  static openAddModal(openAddModalButton, formModal) {
    openAddModalButton.addEventListener("click", () => {
      formModal.classList.add("display-form-modal");
    });
  }

  static closeCancelModal(cancelCloseModalButton, formModal, form) {
    cancelCloseModalButton.addEventListener("click", (e) => {
      e.preventDefault();
      formModal.classList.remove("display-form-modal");
      form.reset();
      MainValidation.resetForm(ValidationFields.fieldsToValidate);
      UserInterface.closeDeleteModal();

      // reset edit state for cancel button
      UserInterface.currentEditId = null;
      const submitButton = document.querySelector(".submit-button");
      submitButton.textContent = "Add";
    });
  }

  //  DELETE
  static displayDeleteModal(productId, productName) {
    const deleteModal = document.querySelector(".delete-modal");
    const deleteMessage = document.querySelector(".delete-modal__text");
    const confirmDeleteButton = document.querySelector(
      ".delete-modal__confirm-button"
    );

    deleteMessage.textContent = `Are you sure you want to delete: ${productName}`;
    deleteModal.classList.add("display-modal");

    confirmDeleteButton.addEventListener("click", () => {
      ProductManager.deleteProduct(productId);
      deleteModal.classList.remove("display-modal");
      UserInterface.viewProductList();
    });
  }

  static closeDeleteModal() {
    const deleteModal = document.querySelector(".delete-modal");
    const cancelDeleteButton = document.querySelector(
      ".delete-modal__cancel-button"
    );

    cancelDeleteButton.addEventListener("click", () => {
      deleteModal.classList.remove("display-modal");
    });
  }

  // Populate edit form

  static displayEditForm() {
    const formModal = document.querySelector(".form-modal");
    const formSubmitButton = document.querySelector(".submit-button");
    formModal.classList.add("display-form-modal");
    formSubmitButton.textContent = "Confirm Editt";
  }

  static populateEditProduct(id) {
    const productList = JSON.parse(localStorage.getItem("products"));

    // selecting the inputs
    const productNameInput = document.querySelector(".form__name-input");
    const productManufacturer = document.querySelector(
      ".form__manufacture-input"
    );
    const productExpirationDateInput = document.querySelector(
      ".form__expiration-date-input"
    );
    const productCategory = document.querySelector(".form__category-selector"); // selector
    const productQuantityInput = document.querySelector(
      ".form__quantity-input"
    );
    const productDosageForm = document.querySelector(
      ".form__dosage-form-selector"
    ); // selector

    const productPrice = document.querySelector(".form__price-input");
    const ProductDateRecieved = document.querySelector(
      ".form__date-recieved-input"
    );

    const productToEdit = ProductManager.productsCollection.find(
      (product) => product.id === id
    );

    productNameInput.value = productToEdit.name;
    productManufacturer.value = productToEdit.manufacturer;
    productExpirationDateInput.value = productToEdit.expirationDate;
    productCategory.value = productToEdit.category;
    productQuantityInput.value = productToEdit.quantity;
    productDosageForm.value = productToEdit.dosageForm;
    productPrice.value = productToEdit.price;
    ProductDateRecieved.value = productToEdit.dateRecieved;

    UserInterface.currentEditId = id;
  }
}

export default UserInterface;
