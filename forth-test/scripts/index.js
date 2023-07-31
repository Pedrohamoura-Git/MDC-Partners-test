function validateForm(e) {
  e.preventDefault();

  let hasErrors = false;
  const nameInput = document.querySelector("#name-input");
  const emailInput = document.querySelector("#email-input");
  const messageInput = document.querySelector("#message-input");

  if (!isTextEmpty(nameInput.value)) {
    notifyError(nameInput, 'Please enter a valid name');
    hasErrors = true;
  }

  if (!isTheEmailValid(emailInput.value)) {
    notifyError(emailInput, 'Please enter a valid email address');
    hasErrors = true;
  }

  if (!isTextEmpty(messageInput.value)) {
    notifyError(messageInput);
    notifyError(nameInput, 'Please enter a valid name');
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

function notifyError(
  element,
  message = "Invalid. Please, check field and try again"
) {
  showErrorMessage(element, message);
  toggleInputOutlineClass(element, "outline-error");
}

function toggleInputOutlineClass(el, className) {
  el.classList.add(className);

  setTimeout(() => {
    el.classList.remove(className);
  }, 2100);
}

function showErrorMessage(element, message) {
  element.nextSibling.nextSibling.innerText = message;
  element.nextSibling.nextSibling.classList.add('show-error-message');

  setTimeout(() => {
    element.nextSibling.nextSibling.classList.remove('show-error-message');
  }, 3500)
}
