function validateForm(e) {
  e.preventDefault();

  let hasErrors = false;
  const nameInput = document.querySelector("#name-input");
  const emailInput = document.querySelector("#email-input");
  const messageInput = document.querySelector("#message-input");

  if (!isTheNameValid(nameInput.value)) {
    notifyError(nameInput);
    hasErrors = true;
    return false;

  }
}

function isTheNameValid(name) {
  return name.length;
}

function notifyError(el) {
  addInputErrorOutline(el);
  // showErrorMessage(el, "Please enter a valid name");
}

function addInputErrorOutline(el) {
  el.classList.add("outline-error");

  setTimeout(() => {
    el.classList.remove("outline-error");
  }, 3000);
}

function showErrorMessage(el, message) {}
