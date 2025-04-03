class UserInterface {
  // RENDER
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
      productsCategory.textContent = product.catetogyr;
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
      toolsContainer.classList.add("tools-conainer");
    });
  }

  // OPEN FORM BUTTON MODAL
  static openAddModal(openAddModalButton, formModal) {
    openAddModalButton.addEventListener("click", () => {
      formModal.classList.add("display-form-modal");
    });
  }

  // CLOSE/CANCEL BUTTON MODAL
  static closeCancelModal(cancelCloseModalButton, formModal, form) {
    cancelCloseModalButton.addEventListener("click", (e) => {
      e.preventDefault();
      formModal.classList.remove("display-form-modal");
      form.reset();
    });
  }
}

export default UserInterface;
