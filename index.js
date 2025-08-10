// Change the background color when the "Change Background Color" button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "#AA12FF";
}

// Reset the background color when the "Reset Background Color" button is clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "#FFFFFF";
}

// Display the key pressed by the user in the <p id="keyPressDisplay">
function displayKeyPress(event) {
  const keyDisplay = document.getElementById("keyPressDisplay");
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Mirror the text input value into <p id="textInputDisplay"> in real time
function displayUserInput() {
  const textInput = document.getElementById("textInput");
  const liveText = document.getElementById("textInputDisplay");
  if (textInput && liveText) {
    liveText.textContent = textInput.value;
  }
}

// Attach all event listeners after the DOM is ready
function setupEventListeners() {
  const changeBtn = document.getElementById("changeColorButton");
  if (changeBtn) {
    changeBtn.addEventListener("click", changeBackgroundColor);
  }

  const resetBtn = document.getElementById("resetColorButton");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetBackgroundColor);
  }

  document.addEventListener("keydown", displayKeyPress);

  const textInput = document.getElementById("textInput");
  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
}

// Initialize on DOMContentLoaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

// Export for tests (safe to ignore in the browser)
if (typeof module !== "undefined") {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  };
}
