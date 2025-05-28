# MSBR-AI-ASSISTANT

# 🚀 MSBR AI Assistant 🤖

- MSBR (My Smart Bot Responder) is a futuristic, voice-activated AI assistant built with HTML, CSS, and JavaScript. Inspired by sci-fi legends like JARVIS, MSBR uses the Web Speech API to listen to your commands and respond with a sleek, neon-lit interface powered by particle animations. Open websites, set timers, perform calculations, or enjoy a joke—all with your voice! 🌌
  
# ✨ Features:- 

- 🎙️ Voice Interaction: Speak commands and hear responses using SpeechRecognition and SpeechSynthesis.
- 🛠️ Commands:
- 🌐 Open websites: Google, YouTube, Spotify, Reddit, Wikipedia, and more!
- 🔍 Search the web or Wikipedia with custom queries.
- ⏰ Check time, date, or set timers with live countdowns.
- ➕ Perform calculations (e.g., "calculate 5 plus 3").
- 😄 Tell jokes for a quick laugh.
- 🔇 Toggle sound with a cool icon switch.

🎨 Futuristic UI: Neon cyan and magenta vibes, particle animations, and responsive design.
♿ Accessibility: ARIA attributes for screen reader support.
📱 Responsive: Looks great on desktops, tablets, and phones!

# 🛠️ Installation

## Prerequisites:-

- 🌍 A modern browser (Chrome, Edge, or Firefox for best Web Speech API support).
- 📶 Internet connection for CDN dependencies.
- 📂 Local files: avatar.png (favicon) and giphy.gif (avatar animation).

# Setup

- Clone the Repository:
- git clone https://github.com/Sadat-Rakib/MSBR-AI-ASSISTANT.git
- cd MSBR-AI-ASSISTANT

# Project Structure:
MSBR-AI-ASSISTANT/
├── index.html
├── style.css
├── app.js
├── avatar.png
├── giphy.gif
└── README.md


# Serve the Project:

- Use a local server (e.g., Live Server in VS Code or Python's HTTP server):python -m http.server 8000


- Open http://localhost:8000 in your browser.
⚠️ Note: SpeechRecognition requires a secure context (HTTPS or localhost). A local server is essential!


# Dependencies:

No manual installs needed! 🚀 The project uses CDNs:
Font Awesome 6.5.2 for icons.
particles.js 2.0.0 for particle effects.
Google Fonts (Orbitron, Roboto Mono) for typography.





# 🎤 Usage

- Launch MSBR:

Open the website, and MSBR will greet you with "Initializing MSBR... Systems online" and a time-based welcome (e.g., "Good Morning, Commander..."). 🌅


# Voice Commands:

Click the 🎙️ microphone button to start listening ("Listening..." appears).
Try commands like:
"Open YouTube" to launch YouTube. 📺
"Set timer for 5 minutes" for a live countdown. ⏱️
"Calculate 10 times 5" to see the result. ➗
"Tell me a joke" for a chuckle. 😜
"What is artificial intelligence" for a Google or Wikipedia search. 🔎


Results appear in the .content or .result-container elements.


# Sound Toggle:

Click the 🔊 sound toggle to mute/unmute MSBR’s voice (icon switches between volume-up and volume-mute).


# Supported Commands:

🌐 Websites: "open google", "open spotify", "open maps", etc.
🔍 Search: "search [query]", "wikipedia [topic]", "what is [topic]".
⏰ Utilities: "time", "date", "weather [city]", "set timer [minutes]", "calculate [expression]".
😄 Fun: "tell me a joke", "who are you".
🔗 Fallback: Unrecognized commands trigger a Google search.

# 🤝 Contributing
We love contributions! 💡 To get started:

- Fork the repo: https://github.com/Sadat-Rakib/MSBR-AI-ASSISTANT.
- Create a branch: git checkout -b feature/your-cool-feature.
- Commit changes: git commit -m "Add your cool feature".
- Push: git push origin feature/your-cool-feature.
- Open a pull request with a clear description. 📜

# Ideas for Improvement

- ⏱️ Add a "cancel timer" command.
- 🔒 Replace eval in calculate with a safer parser (e.g., math.js).
- 🌦️ Integrate real-time weather APIs.
- ⌨️ Add keyboard navigation for accessibility.

# 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

# 🙌 Acknowledgments

particles.js for epic particle animations. ✨
Font Awesome for sleek icons. 🖼️
Google Fonts for futuristic fonts. 🅰️
Inspired by sci-fi assistants like JARVIS from Iron Man. 🦸

# 📬 Contact
Got questions or ideas? Open an issue or ping Sadat-Rakib on GitHub! 📩

# Built with 💻 and 🚀 by Sadat Rakib
