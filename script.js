const API_KEY = "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";

let affection = parseInt(localStorage.getItem("affection")) || 10;
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
  let message = input.value.trim();
  if (!message) return;

  addMessage("You: " + message);
  input.value = "";

  history.push({ role: "user", content: message });

  let reply = await getAIResponse();

  if (!reply) {
    reply = "I tried to respond… but something blocked my thoughts 💭";
  }

  addMessage("Sakura: " + reply);

  history.push({ role: "assistant", content: reply });
  localStorage.setItem("history", JSON.stringify(history));

  affection++;
  localStorage.setItem("affection", affection);
  updateStats();
}

function addMessage(text) {
  let chat = document.getElementById("chat");
  let div = document.createElement("div");
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function getAIResponse() {
  try {
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
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "Sakura AI"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "system", content: systemPrompt },
          ...history
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", errorText);
      return "My heart glitched… check console 💔";
    }

    const data = await response.json();

    if (!data.choices || !data.choices.length) {
      console.error("Invalid response:", data);
      return "I tried to speak… but nothing came out 🥺";
    }

    return data.choices[0].message.content;

  } catch (error) {
    console.error("Fetch failed:", error);
    return "Something stopped me from replying… maybe destiny 🌀";
  }
}
