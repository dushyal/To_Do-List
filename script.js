// Select the input field where the result will be displayed
let display = document.querySelector(".display");

// Select all the buttons (numbers and operators)
let buttons = document.querySelectorAll("button");

// Define the special characters (operators and equal sign)
let specialChars = ["%", "*", "/", "-", "+", "="];

// Create an empty string to store user input
let output = "";

// Function to handle calculator operations when a button is clicked
let calculate = (btnValue) => {
  // Focus the display (useful for keyboard input, but not necessary here)
  display.focus();

  // If "=" is clicked and output is not empty, calculate the result
  if (btnValue === "=" && output !== "") {
    // Convert "%" to "/100" before evaluating the expression
    output = eval(output.replace("%", "/100"));
  }
  // If "AC" (All Clear) is clicked, reset the output to an empty string
  else if (btnValue === "AC") {
    output = "";
  }
  // If "DEL" (Delete) is clicked, remove the last character from the output
  else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  }
  // If the first button clicked is an operator, do nothing (to prevent errors)
  else {
    if (output === "" && specialChars.includes(btnValue)) return;
    // Append the clicked button's value to the output
    output += btnValue;
  }

  // Update the display with the new output value
  display.value = output;
};

// Loop through all buttons and add a click event listener to each
buttons.forEach((button) => {
  // When a button is clicked, call the `calculate` function with its value
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
