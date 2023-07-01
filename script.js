//your JS code here. If required.
// Get references to the HTML elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const btn = document.getElementById('btn');

// Function to display the message after a delay
async function displayMessage() {
  // Get the text and delay values from the inputs
  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  // Clear the output div
  outputDiv.innerHTML = '';

  // Wait for the specified delay using a Promise and setTimeout
  await new Promise(resolve => setTimeout(resolve, delay));

  // Display the message in the output div
  outputDiv.innerHTML = text;
}

// Event listener for the button click
btn.addEventListener('click', displayMessage);
