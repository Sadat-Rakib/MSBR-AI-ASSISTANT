const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const soundToggle = document.querySelector('.sound-toggle');
const resultContainer = document.getElementById('result-container');
let isSoundOn = true;

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = isSoundOn ? 1 : 0;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hour = day.getHours();
    let greeting;

    if (hour >= 0 && hour < 12) {
        greeting = "Good Morning, Commander...";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon, Commander...";
    } else {
        greeting = "Good Evening, Commander...";
    }
    speak(greeting);
}

window.addEventListener('load', () => {
    speak("Initializing MSBR... Systems online.");
    wishMe();
    particlesJS.load('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ['#00f6ff', '#ff00ff', '#b0bec5'] },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#00f6ff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

soundToggle.addEventListener('click', () => {
    isSoundOn = !isSoundOn;
    soundToggle.innerHTML = isSoundOn ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
    speak(isSoundOn ? "Sound enabled" : "Sound disabled");
});

function updateTimerDisplay(seconds) {
    resultContainer.textContent = `Timer: ${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
    resultContainer.classList.add('active');
}

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Greetings, музыка How may I assist you?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Accessing Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Launching YouTube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Accessing Instagram...");
    } else if (message.includes("open twitter")) {
        window.open("https://twitter.com", "_blank");
        speak("Launching Twitter...");
    } else if (message.includes("open linkedin")) {
        window.open("https://linkedin.com", "_blank");
        speak("Opening LinkedIn...");
    } else if (message.includes("open github")) {
        window.open("https://github.com", "_blank");
        speak("Accessing GitHub...");
    } else if (message.includes("open stackoverflow")) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Opening StackOverflow...");
    } else if (message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Launching WhatsApp...");
    } else if (message.includes("open netflix")) {
        window.open("https://www.netflix.com", "_blank");
        speak("Opening Netflix...");
    } else if (message.includes("open amazon")) {
        window.open("https://www.amazon.com", "_blank");
        speak("Accessing Amazon...");
    } else if (message.includes("open gmail") || message.includes("open my email")) {
        window.open("https://mail.google.com", "_blank");
        speak("Opening your email...");
    } else if (message.includes("open spotify")) {
        window.open("https://open.spotify.com", "_blank");
        speak("Launching Spotify...");
    } else if (message.includes("open reddit")) {
        window.open("https://www.reddit.com", "_blank");
        speak("Opening Reddit...");
    } else if (message.includes("open wikipedia")) {
        window.open("https://www.wikipedia.org", "_blank");
        speak("Accessing Wikipedia...");
    } else if (message.includes("open maps") || message.includes("open google maps")) {
        window.open("https://maps.google.com", "_blank");
        speak("Opening Google Maps...");
    } else if (message.includes("search")) {
        const query = message.replace("search", "").trim();
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
        speak(`Searching for ${query}...`);
    } else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`, "_blank");
        speak(`This is what I found regarding ${message}...`);
    } else if (message.includes("wikipedia")) {
        const query = message.replace("wikipedia", "").trim();
        window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`, "_blank");
        speak(`Accessing Wikipedia for ${query}...`);
    } else if (message.includes("time")) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric", hour12: true });
        speak(`The current time is ${time}`);
    } else if (message.includes("date")) {
        const date = new Date().toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" });
        speak(`Today's date is ${date}`);
    } else if (message.includes("calculator")) {
        window.open("https://www.google.com/search?q=calculator", "_blank");
        speak("Opening Calculator...");
    } else if (message.includes("weather")) {
        const city = message.replace("weather", "").trim() || "current location";
        window.open(`https://www.google.com/search?q=weather+${encodeURIComponent(city)}`, "_blank");
        speak(`Checking the weather for ${city}...`);
    } else if (message.includes("set timer")) {
        const duration = message.match(/\d+/);
        if (duration) {
            let seconds = parseInt(duration[0]) * 60;
            resultContainer.classList.add('active');
            speak(`Setting a timer for ${duration[0]} minutes...`);
            const timer = setInterval(() => {
                if (seconds <= 0) {
                    clearInterval(timer);
                    speak("Timer finished!");
                    alert("Timer finished!");
                    resultContainer.classList.remove('active');
                } else {
                    updateTimerDisplay(seconds);
                    seconds--;
                }
            }, 1000);
        } else {
            speak("Please specify a duration for the timer, like 'set timer for 5 minutes'.");
        }
    } else if (message.includes("calculate")) {
        const expression = message.replace("calculate", "").trim();
        try {
            const result = eval(expression); 
            if (result !== undefined) {
                speak(`The result of ${expression} is ${result}.`);
                resultContainer.textContent = `Result: ${result}`;
                resultContainer.classList.add('active');
            } else {
                speak("Sorry, I couldn't calculate that. Please try a valid mathematical expression.");
            }
        } catch (e) {
            speak("Sorry, I couldn't calculate that. Please try a valid mathematical expression.");
        }
    } else if (message.includes("play music")) {
        window.open("https://open.spotify.com/search", "_blank");
        speak("Opening Spotify to play music...");
    } else if (message.includes("tell me a joke")) {
        const jokes = [
            "Why did the scarecrow become a motivational speaker? Because he was outstanding in his field!",
            "Why can't programmers prefer dark mode? Because the light attracts bugs.",
            "What do you call a dinosaur that takes care of its teeth? A Flossiraptor!"
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
        resultContainer.textContent = joke;
        resultContainer.classList.add('active');
    } else if (message.includes("open calendar")) {
        window.open("https://calendar.google.com", "_blank");
        speak("Opening Google Calendar...");
    } else if (message.includes("set reminder")) {
        speak("Sorry, I can't set reminders directly. Would you like me to open your calendar?");
        window.open("https://calendar.google.com", "_blank");
    } else if (message.includes("who are you") || message.includes("what are you")) {
        speak("I am MSBR, your voice-activated assistant, here to help you navigate the digital universe!");
    } else {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`, "_blank");
        speak(`Searching for ${message} on Google...`);
    }
}