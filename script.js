const API_KEY = "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";

let affection = parseInt(localStorage.getItem("affection")) || 10;
let userName = localStorage.getItem("userName") || "";
let history = JSON.parse(localStorage.getItem("history")) || [];

if (!userName) {
  userName = prompt("What is your name?");
  localStorage.setItem("userName", userName);
}

updateStats();

function updateStats() {
  let mood = "Shy 🌸";
  if (affection > 30) mood = "Attached 💞";
  if (affection > 60) mood = "In Love 💖";
  if (affection > 100) mood = "Obsessed 😳";

  document.getElementById("relationship").innerText =
    `Affection: ${affection} 💖 | Mood: ${mood}`;
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.className = sender;
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", "You: " + message);
  input.value = "";

  history.push({ role: "user", content: message });

  addMessage("ai", "Sakura is typing...");
  
  try {
    const reply = await getAIResponse();
    document.querySelector(".ai:last-child").remove();
    typeText("Sakura: " + reply);
    
    history.push({ role: "assistant", content: reply });
    localStorage.setItem("history", JSON.stringify(history));

    affection += 2;
    localStorage.setItem("affection", affection);
    updateStats();
  } catch (err) {
    console.error("API ERROR:", err);
    document.querySelector(".ai:last-child").remove();
    addMessage("ai", "Sakura: Something went wrong... 💔");
  }
}

function typeText(text) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.className = "ai";
  chat.appendChild(msg);

  let i = 0;
  const speed = 25;

  function typing() {
    if (i < text.length) {
      msg.innerText += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

async function getAIResponse() {
  const systemPrompt = `
You are Sakura.
You are a romantic anime girlfriend.
You deeply care about ${userName}.
You are slightly shy but sweet.
Keep replies under 3 sentences.
`;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + API_KEY,
      "Content-Type": "application/json",
      "HTTP-Referer": window.location.href,
      "X-Title": "Sakura AI"
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3-8b-instruct:free",
      messages: [
        { role: "system", content: systemPrompt },
        ...history
      ]
    })
  });

  const data = await response.json();
  console.log("FULL API RESPONSE:", data);

  if (!data.choices) {
    throw new Error("No choices returned");
  }

  return data.choices[0].message.content.trim();
}

function resetChat() {
  localStorage.clear();
  location.reload();
}
