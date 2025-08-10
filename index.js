// This runs when I click the "Change Background Color" button
// Just sets the page background to a purple hex code
function changeBackgroundColor() {
  document.body.style.backgroundColor = "#AA12FF"; 
}

// This resets the background color back to default (empty string)
// The tests expect "" here instead of "white"
function resetBackgroundColor() {
  document.body.style.backgroundColor = ""; 
}

// Shows which key I pressed in the #keyPressDisplay element
function displayKeyPress(event) {
  const keyDisplay = document.getElementById("keyPressDisplay");
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Takes whatever I type into #textInput and shows it in #textInputDisplay
// Tests want it to say "You typed: ..." before the actual text
function displayUserInput() {
  const textInput = document.getElementById("textInput");
  const liveText = document.getElementById("textInputDisplay");
  if (textInput && liveText) {
    liveText.textContent = `You typed: ${textInput.value}`;
  }
}

// Hook up all the event listeners so stuff actually works
function setupEventListeners() {
  // Button to change background
  const changeBtn = document.getElementById("changeColorButton");
  if (changeBtn) {
    changeBtn.addEventListener("click", changeBackgroundColor);
  }

  // Double-click the reset button to clear background
  const resetBtn = document.getElementById("resetColorButton");
  if (resetBtn) {
    resetBtn.addEventListener("dblclick", resetBackgroundColor);
  }

  // Listen for any key press and update key display
  document.addEventListener("keydown", displayKeyPress);

  // Listen for typing in the text input and update live display
  const textInput = document.getElementById("textInput");
  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
  }
}

// Run setup after the page finishes loading
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

// Exports for the test file (doesn't matter in browser)
if (typeof module !== "undefined") {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  };
}
