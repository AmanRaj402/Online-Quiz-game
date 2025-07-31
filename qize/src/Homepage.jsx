import React from "react";
import { motion } from "framer-motion";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage({ onStart }) {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, duration: 0.6 }}
      >
        🧠 Welcome to the Ultimate Quiz Game!
      </motion.h1>

      <motion.p
        className="home-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Test your knowledge in General Awareness, Science, History and more.
      </motion.p>

      <Link to='/level' id="start">
      <motion.button
        className="start-btn"
        onClick={onStart}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0,0,0,0.4)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        
     🚀 Start Quiz
      </motion.button>
      </Link>
    </motion.div>
  );
}

export default Homepage;
