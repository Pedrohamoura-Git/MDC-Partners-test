const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", () => {
  resetForm();
});

function validateForm(e) {
  e.preventDefault();

  let hasErrors = false;
  const nameInput = document.querySelector("#name-input");
  const emailInput = document.querySelector("#email-input");
  const messageInput = document.querySelector("#message-input");

  if (!isTextEmpty(nameInput.value)) {
    notifyError(nameInput);
    hasErrors = true;
  }

  if (!isTheEmailValid(emailInput.value)) {
    notifyError(emailInput);
    hasErrors = true;
  }

  if (!isTextEmpty(messageInput.value)) {
    notifyError(messageInput);
    hasErrors = true;
  }

  if (hasErrors) return false;

  toggleInputOutlineClass(nameInput, "outline-success");
  toggleInputOutlineClass(emailInput, "outline-success");
  toggleInputOutlineClass(messageInput, "outline-success");
}

function isTextEmpty(text) {
  return text.length;
}

function isTheEmailValid(email) {
  /**
   *  Check if the email is valid based on some parameters.
   *  See 'email-validation' document for more details.
   */
  const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return validRegex.test(email);
}

function notifyError(el) {
  toggleInputOutlineClass(el, "outline-error");
  // showMessage(el, "Please enter a valid name");
}

function toggleInputOutlineClass(el, className) {
  el.classList.add(className);

  setTimeout(() => {
    el.classList.remove(className);
  }, 2100);
}

function showMessage(el, message) {}

function resetForm() {
  const form = document.querySelector("#form");
  form.reset();
}
