function handleFormSubmission(event) {
  event.preventDefault();
  toggleText();
}

function toggleText() {
  const strongElement = document.querySelector("#text strong");
  const defaultText = "default";
  const newText = "new";

  if (strongElement.innerHTML === defaultText) {
    strongElement.innerHTML = newText;
  } else strongElement.innerHTML = defaultText;
}
