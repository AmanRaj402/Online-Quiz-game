import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Resultpage.css";

function Resultpage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || {};

  if (score === undefined || total === undefined) {
    return <p>❌ Invalid access. Please complete the quiz first.</p>;
  }

  const getMessage = () => {
    const percent = (score / total) * 100;
    if (percent >= 80) return "🔥 Excellent!";
    if (percent >= 50) return "👍 Good job!";
    return "😅 Try Again!";
  };

  return (
    <div className="result-background">
      <motion.div
        className="result-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="result-title">🎉 Your Result</h2>
        <motion.h3
          className="result-message"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          {getMessage()}
        </motion.h3>
        <p className="result-score">
          You scored <strong>{score}</strong> out of <strong>{total}</strong>
        </p>
        <button className="restart-btn" onClick={() => navigate("/")}>
          🔄 Try Again
        </button>
      </motion.div>
    </div>
  );
}

export default Resultpage;
