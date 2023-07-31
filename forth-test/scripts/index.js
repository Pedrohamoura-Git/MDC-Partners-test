function validateForm(e) {
  e.preventDefault();

  let hasErrors = false;
  const nameInput = document.querySelector("#name-input");
  const emailInput = document.querySelector("#email-input");
  const messageInput = document.querySelector("#message-input");

  if (!isTheNameValid(nameInput.value)) {
    notifyError(nameInput);
    hasErrors = true;
  }

  if (!isTheEmailValid(emailInput.value)) {
    notifyError(emailInput);
    hasErrors = true;
  }

  }
}

function isTheNameValid(name) {
  return name.length;
}

function isTheEmailValid(email) {
  /**
   *  Check if the email is valid based on some parameters.
   *  See 'email-validation' document for more details.
   */
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return validRegex.test(email);
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
