// Selectlevel.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Selectlevel.css";

const Selectlevel = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleLevelClick = (level) => {
    navigate("/game", { state: { level } });
  };

  return (
    <div className="level-container">
      <h1 className="level-title">🎮 Choose Your Difficulty</h1>
      <div className={`level-buttons ${animate ? "show" : ""}`}>
        <button onClick={() => handleLevelClick("easy")} className="level-btn easy">
          🟢 Easy
        </button>
        <button onClick={() => handleLevelClick("medium")} className="level-btn medium">
          🟡 Medium
        </button>
        <button onClick={() => handleLevelClick("hard")} className="level-btn hard">
          🔴 Hard
        </button>
      </div>
      <div className="bottom-glass">
        <p>🌟 Tip: Choose wisely. Difficulty affects score bonuses!</p>
      </div>
    </div>
  );
};

export default Selectlevel;
