import UserInterface from "./ui";
// SELECTING ELEMENTS
const formModal = document.querySelector(".form-modal");
const openAddModalButton = document.querySelector(".add-button");
const cancelCloseModalButton = document.querySelector(".cancel-button");

const form = document.querySelector(".form");

document.addEventListener("DOMContentLoaded", () => {
  UserInterface.openAddModal(openAddModalButton, formModal);
  UserInterface.closeCancelModal(cancelCloseModalButton, formModal, form);
});
