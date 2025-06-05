import React, { useState } from "react";
import questions from "./assets/questions";
import "./App.css";

const App = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      {showResult ? (
        <div className="result-section">
          <h2>Quiz Completed</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {current + 1} / {questions.length}</h2>
          <p>{questions[current].question}</p>
          <div className="answer-section">
            {questions[current].answers.map((ans, i) => (
              <button key={i} onClick={() => handleAnswer(ans.isCorrect)}>
                {ans.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
