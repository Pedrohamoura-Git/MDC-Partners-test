const formElement = document.getElementById("form");

formElement.addEventListener("submit", (e) => handleFormSubmission(e));

function handleFormSubmission(e) {
  e.preventDefault();
}

