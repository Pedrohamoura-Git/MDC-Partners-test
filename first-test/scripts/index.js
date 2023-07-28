const formElement = document.getElementById("form");

formElement.addEventListener("submit", (e) => handleFormSubmission(e));

function handleFormSubmission(e) {
  e.preventDefault();
  toggleText();
}

function toggleText() {
  const textElement = document.getElementById("text");
  const defaultText = "This is the <strong>default</strong> text"
  const newText = "This is the <strong>new</strong> text"

  if (textElement.innerHTML === defaultText) {
    textElement.innerHTML = newText;
  } else textElement.innerHTML = defaultText;
}
