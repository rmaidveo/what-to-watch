import "./toast";

const SHOW_TIME = 55000;
const DIV_ELEMENT = `div`;
const CLASS_TOAST_CONTAINER = `toast-container`;

const toastContainer = document.createElement(DIV_ELEMENT);
document.body.append(toastContainer);

export const toast = (message) => {
  toastContainer.textContent = message;
  toastContainer.classList.add(CLASS_TOAST_CONTAINER);

  setTimeout(() => {
    toastContainer.textContent = ``;
  }, SHOW_TIME);

};
