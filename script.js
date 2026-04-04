let affection = localStorage.getItem("affection") || 10;
let mood = localStorage.getItem("mood") || "shy";
let userName = localStorage.getItem("userName") || "";

if (!userName) {
  userName = prompt("What is your name?");
  localStorage.setItem("userName", userName);
}

updateStats();

function updateStats() {
  document.getElementById("relationship").innerText =
    "Affection: " + affection + " 💖 | Mood: " + mood;
}

function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value;
  if (!message) return;

  addMessage("You: " + message);
  input.value = "";

  setTimeout(() => {
    let response = generateResponse(message);
    addMessage("Sakura: " + response);
    localStorage.setItem("affection", affection);
    localStorage.setItem("mood", mood);
    updateStats();
  }, 800);
}

function addMessage(text) {
  let chat = document.getElementById("chat");
  chat.innerHTML += "<div>" + text + "</div>";
  chat.scrollTop = chat.scrollHeight;
}

function generateResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("love")) {
    affection += 5;
    mood = "blushing";
    return "W-What?! " + userName + " I... I love you too 💕";
  }

  if (msg.includes("another girl")) {
    affection -= 5;
    mood = "jealous";
    return "Eh?! Who is she?! Am I not enough for you?! 😠";
  }

  if (msg.includes("good morning")) {
    affection += 2;
    mood = "happy";
    return "Good morning, " + userName + " ☀️ Did you dream about me?";
  }

  if (msg.includes("good night")) {
    affection += 2;
    mood = "soft";
    return "Sleep well... I will be waiting in your dreams 🌙";
  }

  if (msg.includes("sad")) {
    mood = "caring";
    affection += 3;
    return "Come here... I’ll stay with you until you smile again 💞";
  }

  if (affection > 50) {
    return "You belong to me now, " + userName + " 💗";
  }

  return randomCute();
}

function randomCute() {
  let lines = [
    "Hehe~ you make my heart race 💓",
    "Tell me more about your day~",
    "You're kind of special to me...",
    "Why are you so adorable?",
    "I feel happy when you talk to me 🌸"
  ];
  return lines[Math.floor(Math.random() * lines.length)];
}
