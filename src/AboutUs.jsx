import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>SmartQuiz</strong> – your ultimate destination for testing and expanding your knowledge!
      </p>
      <p>
        Our mission is to make learning fun, interactive, and accessible for everyone. Whether you’re a student, a teacher,
        or just a curious mind, SmartQuiz helps you stay sharp and informed.
      </p>
      <p>
        🚀 Features include:
        <ul>
          <li>Timed quizzes</li>
          <li>Auto-grading and instant score</li>
          <li>Leaderboard for top performers</li>
          <li>Admin panel to manage questions</li>
        </ul>
      </p>
      <p>
        Built with ❤️ using React.js and powered by modern web technologies.
      </p>
      <p className="contact-line">
        📩 Contact us: <a href="mailto:smartquiz@example.com">smartquiz@example.com</a>
      </p>
    </div>
  );
}

export default AboutUs;
