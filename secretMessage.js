// PROJECT: Secret Message

// As a note, this project originally came from Codecademy.

// Using array methods, you will transform an array of strings into a secret message!

// You should consult the Mozilla Developer Network (MDN) for reference on any method with which you are not familiar.

// You will start with the following code:

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Step 1.
// Use an array method to remove the last string of the array secretMessage.

secretMessage.pop();

// Step 2.
// You can check your work by logging the .length of the array.
// At this point, the length should be 1 less than the original length.

// console.log(secretMessage.length);

// Step 3.
// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push("to", "Program");

// Step 4.
// Change the word easily to the word right by accessing the index and replacing it.
secretMessage[7] = "right";

// Step 5.
// Use an array method to remove the first string of the array.
secretMessage.shift();

// Step 6.
// Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift("Programming");

// Step 7.
// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
secretMessage.splice(6, 5, "know,");

// Step 8.
// On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "));

// Step 9.
// Turn in your project
