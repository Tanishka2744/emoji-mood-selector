import { useState } from "react";
import "./App.css";

function App() {
  const moods = [
    {
      emoji: "😊",
      name: "Happy",
      message: "You're feeling Happy! ✨",
    },
    {
      emoji: "😌",
      name: "Calm",
      message: "You're feeling Calm! 🌿",
    },
    {
      emoji: "😐",
      name: "Neutral",
      message: "You're feeling Neutral! 💫",
    },
    {
      emoji: "😢",
      name: "Sad",
      message: "You're feeling Sad. 💙",
    },
    {
      emoji: "😡",
      name: "Angry",
      message: "You're feeling Angry! 🔥",
    },
  ];

  const [selectedMood, setSelectedMood] = useState(moods[0]);

  return (
    <div className="app">
      <div className="mood-container">
        <h1>How are you feeling?</h1>

        <div className="mood-list">
          {moods.map((mood) => (
            <button
              key={mood.name}
              className={`mood-btn ${
                selectedMood.name === mood.name ? "active" : ""
              }`}
              onClick={() => setSelectedMood(mood)}
            >
              {mood.emoji}
            </button>
          ))}
        </div>

        <p className="mood-message">{selectedMood.message}</p>
      </div>
    </div>
  );
}

export default App;