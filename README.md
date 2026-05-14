# 🌸 Sakura AI Companion

An interactive AI girlfriend web app featuring a charming anime character with mood systems, affection tracking, and persistent chat history. Built with vanilla JavaScript and styled with a modern gradient UI.

## ✨ Features

- **AI-Powered Conversations** - Uses OpenRouter API to deliver intelligent, emotionally-aware responses
- **Mood System** - Sakura's mood changes based on conversation context (Shy, Blushing, Jealous, Caring)
- **Affection Tracking** - Build affection through compliments and kind words
- **Persistent Memory** - Chat history and user data saved to browser localStorage
- **Dark Mode** - Toggle between light and dark themes
- **Typing Effect** - Sakura's responses appear with an elegant typing animation
- **Avatar Animation** - Sakura's avatar glows during thinking
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Reset Function** - Clear chat history and start fresh anytime

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: OpenRouter (for LLM access)
- **Storage**: Browser LocalStorage
- **Styling**: CSS Gradients and Animations

## 📋 Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/sakura-ai-companion.git
   cd sakura-ai-companion
   ```

2. **Get an API Key**
   - Visit [OpenRouter.ai](https://openrouter.ai)
   - Sign up and create an API key

3. **Configure the API Key**
   - Open `index.html`
   - Replace `PASTE_YOUR_API_KEY_HERE` with your actual OpenRouter API key:
   ```javascript
   const API_KEY = "your-api-key-here";
   ```

4. **Run the App**
   - Open `index.html` in your web browser
   - Enter your name when prompted
   - Start chatting with Sakura!

## 💬 Usage Guide

### Chat Interface
- Type your message in the input field
- Press **Send** or hit **Enter** to send
- Watch Sakura's mood and affection bar update in real-time

### Interaction Examples
- Say "I love you" → Sakura blushes and gains affection
- Mention "another girl" → Sakura gets jealous and loses affection
- Say "I'm sad" → Sakura enters caring mode
- Click **Reset** → Clear all chat history and start fresh
- Click **🌙** → Toggle dark mode

### Mood States
- **Shy 🌸** - Default, neutral responses
- **Blushing 💕** - When you express affection
- **Jealous 😠** - When you mention other girls
- **Caring 💖** - When you express sadness

### Data Persistence
- Your name is saved
- Chat history is preserved
- Affection level persists across sessions
- All data stored locally in browser (no server uploads)

## 🛠️ Development

### Project Structure
```
sakura-ai-companion/
├── index.html          # Main app (HTML, CSS, JavaScript combined)
├── README.md           # This file
├── LICENSE             # MIT License
├── .gitignore          # Git ignore rules
├── CONTRIBUTING.md     # Contribution guidelines
├── .github/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
│       └── ci.yml      # CI workflow
```

### Customization
- **Change Sakura's Avatar**: Update the image URL in `<img id="avatar" src="...">`
- **Modify Mood Triggers**: Edit the `adjustMood()` function
- **Adjust Affection Bar**: Modify the affection increment/decrement values
- **Customize Styling**: Update CSS variables and color schemes

### Browser Requirements
- Modern browser with ES6+ support
- LocalStorage enabled
- CORS enabled for OpenRouter API

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Ways to Contribute
- Report bugs and suggest features via GitHub Issues
- Improve documentation
- Add new mood states or interaction patterns
- Enhance UI/UX design
- Optimize performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Future Enhancements

- [ ] Multiple character options
- [ ] Memory learning system
- [ ] Custom personality profiles
- [ ] Conversation history export
- [ ] Multi-language support
- [ ] Sound effects and background music
- [ ] Offline mode with fallback responses
- [ ] Integration with multiple AI providers

## 💡 Tips

- Be creative with conversation - Sakura responds well to emotional engagement
- Experiment with different message types to discover mood changes
- The typing effect adds immersion - don't rush the responses!
- Keep an eye on the affection bar - it affects AI personality

## 🐛 Known Issues & Limitations

- Requires active internet connection for AI responses
- OpenRouter free tier may have rate limits
- LocalStorage capacity is browser-dependent (usually 5-10MB)
- Large chat histories may impact performance

## 📞 Support

For issues or questions:
1. Check [GitHub Issues](https://github.com/yourusername/sakura-ai-companion/issues)
2. Review existing documentation
3. Create a new issue with detailed information

---

**Made with 💖 for anime enthusiasts and AI fans**