// Load TensorFlow.js
const tf = require('@tensorflow/tfjs');
// Load the GPT-2 model
const gpt2 = require('@tensorflow-models/gpt2');

// Function to load the model (for Node.js or browser)
async function loadModel() {
  console.log("Loading GPT-2 model...");
  const model = await gpt2.load();
  console.log("Model loaded!");
  return model;
}

// Function to generate text based on user input
async function generateText(model, inputText) {
  console.log("Generating text...");
  const input = inputText || "Hello, AI!";
  const output = await model.generate(input);
  console.log("Generated text: " + output);
  return output;
}

// Example of how you would run it
async function run() {
  // Load the model
  const model = await loadModel();

  // Test input (you can replace this with any text)
  const inputText = "Once upon a time";

  // Generate AI output
  const output = await generateText(model, inputText);
  console.log(output); // Print the output from the AI model
}

// Call run() to start the process
run();
