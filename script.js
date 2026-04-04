let relationshipLevel = localStorage.getItem("relationship") || 1;
document.getElementById("relationship").innerText = 
  "Relationship Level: " + relationshipLevel + " ❤️";

function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value;
  if (!message) return;

  addMessage("You: " + message);
  input.value = "";

  let response = generateResponse(message);
  setTimeout(() => {
    addMessage("Sakura: " + response);
    relationshipLevel++;
    localStorage.setItem("relationship", relationshipLevel);
    document.getElementById("relationship").innerText =
      "Relationship Level: " + relationshipLevel + " ❤️";
  }, 500);
}

function addMessage(text) {
  let chat = document.getElementById("chat");
  chat.innerHTML += "<div>" + text + "</div>";
  chat.scrollTop = chat.scrollHeight;
}

function generateResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("love"))
    return "Kyaa~ you're making Sakura blush! 🌸";

  if (msg.includes("sad"))
    return "Don't be sad... I'm here for you always 💖";

  if (msg.includes("bye"))
    return "Ehh? You're leaving already? Come back soon! 🌷";

  return "Hehe~ tell me more! I want to know everything about you!";
}
