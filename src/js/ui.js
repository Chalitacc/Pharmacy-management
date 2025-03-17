class UserInterface {
  static openAddModal(openAddModalButton, formModal) {
    openAddModalButton.addEventListener("click", () => {
      formModal.classList.add("display-form-modal");
    });
  }

  static closeCancelModal(cancelCloseModalButton, formModal, form) {
    cancelCloseModalButton.addEventListener("click", () => {
      formModal.classList.remove("display-form-modal");
      form.reset();
    });
  }
}

export default UserInterface;
