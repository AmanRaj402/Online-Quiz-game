// Qa.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Qa.css";

const easyQuestions = [
  {
    "question": "What is the capital of India?",
    "options": ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    "answer": "New Delhi"
  },
  {
    "question": "Which color is the sky usually?",
    "options": ["Green", "Blue", "Red", "Yellow"],
    "answer": "Blue"
  },
  {
    "question": "How many days are there in a week?",
    "options": ["5", "6", "7", "8"],
    "answer": "7"
  },
  {
    "question": "What comes after A?",
    "options": ["B", "C", "D", "Z"],
    "answer": "B"
  },
  {
    "question": "Which animal is known as the 'King of the Jungle'?",
    "options": ["Tiger", "Lion", "Elephant", "Monkey"],
    "answer": "Lion"
  },
  {
    "question": "Which fruit is yellow and curved?",
    "options": ["Apple", "Mango", "Banana", "Grapes"],
    "answer": "Banana"
  },
  {
    "question": "How many legs does a spider have?",
    "options": ["6", "8", "4", "10"],
    "answer": "8"
  },
  {
    "question": "What is 2 + 2?",
    "options": ["3", "4", "5", "6"],
    "answer": "4"
  },
  {
    "question": "Which shape has three sides?",
    "options": ["Square", "Circle", "Triangle", "Rectangle"],
    "answer": "Triangle"
  },
  {
    "question": "How many hours are in a day?",
    "options": ["12", "24", "30", "48"],
    "answer": "24"
  },
  {
    "question": "What do we drink that comes from cows?",
    "options": ["Juice", "Milk", "Water", "Tea"],
    "answer": "Milk"
  },
  {
    "question": "Which is the smallest prime number?",
    "options": ["1", "2", "3", "5"],
    "answer": "2"
  },
  {
    "question": "Which bird can mimic human speech?",
    "options": ["Parrot", "Crow", "Sparrow", "Pigeon"],
    "answer": "Parrot"
  },
  {
    "question": "What is H2O commonly known as?",
    "options": ["Salt", "Sugar", "Water", "Oxygen"],
    "answer": "Water"
  },
  {
    "question": "Which day comes after Friday?",
    "options": ["Thursday", "Sunday", "Saturday", "Monday"],
    "answer": "Saturday"
  }
];


const mediumQuestions = [
  {
    "question": "Which organ purifies our blood?",
    "options": ["Heart", "Liver", "Kidney", "Lungs"],
    "answer": "Kidney"
  },
  {
    "question": "Who invented the light bulb?",
    "options": ["Einstein", "Newton", "Edison", "Tesla"],
    "answer": "Edison"
  },
  {
    "question": "What gas do plants absorb?",
    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "answer": "Carbon Dioxide"
  },
  {
    "question": "Which is the largest ocean on Earth?",
    "options": ["Indian", "Atlantic", "Pacific", "Arctic"],
    "answer": "Pacific"
  },
  {
    "question": "Which planet has rings?",
    "options": ["Earth", "Mars", "Saturn", "Venus"],
    "answer": "Saturn"
  },
  {
    "question": "What is the boiling point of water in Celsius?",
    "options": ["50°C", "100°C", "200°C", "0°C"],
    "answer": "100°C"
  },
  {
    "question": "Which vitamin is produced when the skin is exposed to sunlight?",
    "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "answer": "Vitamin D"
  },
  {
    "question": "Which language has the most native speakers?",
    "options": ["English", "Hindi", "Mandarin", "Spanish"],
    "answer": "Mandarin"
  },
  {
    "question": "What is the square root of 144?",
    "options": ["10", "11", "12", "13"],
    "answer": "12"
  },
  {
    "question": "Who painted the Mona Lisa?",
    "options": ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
    "answer": "Leonardo da Vinci"
  },
  {
    "question": "Which metal is liquid at room temperature?",
    "options": ["Iron", "Copper", "Mercury", "Aluminum"],
    "answer": "Mercury"
  },
  {
    "question": "What part of the plant conducts photosynthesis?",
    "options": ["Root", "Stem", "Leaf", "Flower"],
    "answer": "Leaf"
  },
  {
    "question": "Which Indian festival is known as the Festival of Colors?",
    "options": ["Diwali", "Holi", "Eid", "Navratri"],
    "answer": "Holi"
  },
  {
    "question": "Which continent is the Sahara Desert located in?",
    "options": ["Asia", "Africa", "Australia", "Europe"],
    "answer": "Africa"
  },
  {
    "question": "Which is the largest internal organ in the human body?",
    "options": ["Heart", "Lungs", "Liver", "Kidneys"],
    "answer": "Liver"
  }
];

const hardQuestions =[
  {
    "question": "Which element has the atomic number 92?",
    "options": ["Uranium", "Plutonium", "Gold", "Lead"],
    "answer": "Uranium"
  },
  {
    "question": "Who developed the general theory of relativity?",
    "options": ["Newton", "Bohr", "Einstein", "Maxwell"],
    "answer": "Einstein"
  },
  {
    "question": "What is the unit of electrical resistance?",
    "options": ["Ampere", "Ohm", "Volt", "Watt"],
    "answer": "Ohm"
  },
  {
    "question": "What year did World War II end?",
    "options": ["1945", "1940", "1939", "1950"],
    "answer": "1945"
  },
  {
    "question": "Which Indian mathematician invented zero?",
    "options": ["Ramanujan", "Aryabhata", "Bhaskaracharya", "Panini"],
    "answer": "Aryabhata"
  },
  {
    "question": "What is the currency of Japan?",
    "options": ["Yuan", "Won", "Yen", "Ringgit"],
    "answer": "Yen"
  },
  {
    "question": "What is the longest river in the world?",
    "options": ["Amazon", "Ganga", "Nile", "Yangtze"],
    "answer": "Nile"
  },
  {
    "question": "Which country was formerly known as Persia?",
    "options": ["Iran", "Iraq", "Turkey", "Egypt"],
    "answer": "Iran"
  },
  {
    "question": "What is the capital of Iceland?",
    "options": ["Helsinki", "Reykjavik", "Oslo", "Stockholm"],
    "answer": "Reykjavik"
  },
  {
    "question": "What is the speed of light in vacuum (in km/s)?",
    "options": ["300,000", "150,000", "3,000", "30,000"],
    "answer": "300,000"
  },
  {
    "question": "Which gas is most abundant in the Earth’s atmosphere?",
    "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "answer": "Nitrogen"
  },
  {
    "question": "Which programming language is known as the 'mother of all languages'?",
    "options": ["Python", "C", "Java", "COBOL"],
    "answer": "C"
  },
  {
    "question": "Who is the author of 'The Origin of Species'?",
    "options": ["Charles Darwin", "Galileo", "Newton", "Pasteur"],
    "answer": "Charles Darwin"
  },
  {
    "question": "Which Indian missile is named after a Hindu deity?",
    "options": ["Agni", "Trishul", "Akash", "Prithvi"],
    "answer": "Agni"
  },
  {
    "question": "What is the hardest natural substance on Earth?",
    "options": ["Diamond", "Iron", "Gold", "Graphite"],
    "answer": "Diamond"
  }
]


function Qa() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedLevel = location.state?.level;

  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (selectedLevel === "easy") setQuestions(easyQuestions);
    else if (selectedLevel === "medium") setQuestions(mediumQuestions);
    else if (selectedLevel === "hard") setQuestions(hardQuestions);
  }, [selectedLevel]);

  const handleOptionSelect = (option) => {
    const updated = [...answers];
    updated[currentQ] = option;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const handleSubmit = () => {
    let score = 0;
    answers.forEach((ans, i) => {
      if (ans === questions[i].answer) score++;
    });

    navigate("/result", {
      state: { score, total: questions.length },
    });
  };

  if (!questions.length) return <div>Loading...</div>;

  return (
    <div className="quiz-container">
      <motion.div
        className="quiz-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="title">📚 {selectedLevel.toUpperCase()} Quiz</h2>
        <p className="question-text">
          Q{currentQ + 1}: {questions[currentQ].question}
        </p>
        <div>
          {questions[currentQ].options.map((opt, i) => (
            <motion.label
              key={i}
              whileHover={{ scale: 1.03 }}
              className={`option ${answers[currentQ] === opt ? "selected" : ""}`}
            >
              <input
                type="radio"
                name={`q-${currentQ}`}
                value={opt}
                checked={answers[currentQ] === opt}
                onChange={() => handleOptionSelect(opt)}
              />
              {opt}
            </motion.label>
          ))}
        </div>

        <div className="navigation">
          <button onClick={prevQuestion} disabled={currentQ === 0}>
            ⬅ Prev
          </button>
          {currentQ < questions.length - 1 ? (
            <button onClick={nextQuestion}>Next ➡</button>
          ) : (
            <button className="submit-btn" onClick={handleSubmit}>
              ✅ Submit
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Qa;
