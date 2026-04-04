const API_KEY = "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";

let affection = localStorage.getItem("affection") || 10;
let userName = localStorage.getItem("userName") || "";

if (!userName) {
  userName = prompt("What is your name?");
  localStorage.setItem("userName", userName);
}

let history = JSON.parse(localStorage.getItem("history")) || [];

updateStats();

function updateStats() {
  document.getElementById("relationship").innerText =
    "Affection: " + affection + " 💖";
}

async function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value;
  if (!message) return;

  addMessage("You: " + message);
  input.value = "";

  history.push({ role: "user", content: message });

  let reply = await getAIResponse();

  addMessage("Sakura: " + reply);

  history.push({ role: "assistant", content: reply });
  localStorage.setItem("history", JSON.stringify(history));

  affection++;
  localStorage.setItem("affection", affection);
  updateStats();
}

function addMessage(text) {
  let chat = document.getElementById("chat");
  chat.innerHTML += "<div>" + text + "</div>";
  chat.scrollTop = chat.scrollHeight;
}

async function getAIResponse() {
  const systemPrompt = `
You are Sakura.
You are a romantic, slightly shy anime girlfriend.
You deeply care about ${userName}.
You get jealous easily.
You slowly grow emotionally attached.
You speak sweetly and affectionately.
`;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        ...history
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
