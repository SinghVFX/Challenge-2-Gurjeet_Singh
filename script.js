
//The JavaScript code that listens for the form submission in an HTML document. 
// It selects the input box and the chat window using querySelector and sets an event listener to listen for the form submission. When the form is submitted, 
// it prevents the default behavior, gets the value of the input, creates a new chat message element, adds the chat message to the chat window, and clears the input value

//Chat-System
const inputBox = document.querySelector("#input-box");
const chatWindow = document.querySelector("#chat-window");


inputBox.addEventListener("submit", function(event) {
event.preventDefault();


const inputValue = inputBox.querySelector("input").value;
const chatMessage = document.createElement("div");
const chatMessageText = document.createTextNode(inputValue);

chatMessage.appendChild(chatMessageText);
chatMessage.classList.add("chat-message");
chatWindow.appendChild(chatMessage);

inputBox.querySelector("input").value = "";
});

//Button-Refresh
//The JavaScript code that selects a refresh button in an HTML document using querySelector and sets an event listener to listen for clicks on the button. When the button is clicked, the code reloads the current page using the location.reload() method.
const refreshButton = document.querySelector("#refresh-button");

refreshButton.addEventListener("click", function() {
  location.reload();
});
