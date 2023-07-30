function validateForm(e) {
  e.preventDefault();

  const nameInput = document.querySelector("#name-input");
  const emailInput = document.querySelector("#email-input");
  const messageInput = document.querySelector("#message-input");

  if (!isTheNameValid(nameInput.value)) {
    // showErrorMessage('Please enter a valid name');
    return false;
  }
}

function isTheNameValid(name) {
  console.log("name: ", name);
  if (!name) return false;
}
