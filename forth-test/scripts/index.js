function validateForm(e) {
  e.preventDefault();

  const nameInput = document.querySelector("#name-input");
  const emailInput = document.querySelector("#email-input");
  const messageInput = document.querySelector("#message-input");

  if (!isTheNameValid(nameInput.value)) {
    notifyError(nameInput);
    return false;
  }
}

function isTheNameValid(name) {
  console.log("name: ", name);
  if (!name) return false;
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
