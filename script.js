function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userMessage = inputField.value.trim();
  if (userMessage === "") return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;

  const botReply = getBotResponse(userMessage.toLowerCase());
  chatBox.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;

  inputField.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
  if (message.includes("hello")) return "Hi there!";
  if (message.includes("how are you")) return "I'm just code, but I'm doing fine!";
  if (message.includes("bye")) return "Goodbye! 👋";
  return "Sorry, I didn't understand that.";
}
