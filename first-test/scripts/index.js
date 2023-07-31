function handleFormSubmission(event) {
  event.preventDefault();
  toggleText();
}

/**
function toggleText() {
  const textElement = document.getElementById("text");
  const defaultText = "This is the <strong>default</strong> text"
  const newText = "This is the <strong>new</strong> text"

  if (textElement.innerHTML === defaultText) {
    textElement.innerHTML = newText;
  } else textElement.innerHTML = defaultText;
}
