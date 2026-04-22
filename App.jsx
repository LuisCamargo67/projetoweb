import { useState } from "react";
import "./App.css";

const buttons = [
  "🔊", "🎤", "🌙", "☀️",
  "🔦", "📺", "📶", "📱",
  "📞", "🚗", "📷", "📹"
];

const schedules = [
  { time: "7:00pm, Daily", desc: "3 scenes, 5 accessories" },
  { time: "10:00pm, Daily", desc: "1 scene, 2 accessories" },
  { time: "11:00pm, Daily", desc: "2 scenes, 6 accessories" }
];

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="container">
      <header className="header">
        <span className="back">←</span>
        <h2>Home</h2>
        <div className="profile"></div>
      </header>

      <div className="grid">
        {buttons.map((icon, i) => (
          <button
            key={i}
            className={`circle ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {icon}
          </button>
        ))}
      </div>

      <div className="card">
        {schedules.map((item, i) => (
          <div key={i} className="schedule">
            <div>
              <strong>{item.time}</strong>
              <p>{item.desc}</p>
            </div>
            <input type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
}