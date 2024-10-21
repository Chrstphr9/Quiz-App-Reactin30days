import React, { useContext, useState } from "react";
import { Questions } from "../Helpers/Questionbank";
import { QuizContext } from "../Helpers/Context";

const Quiz = () => {
  // Correctly destructure score and setScore from the context
  const { score, setScore } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    // Update score if the chosen option is correct
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(prevScore => prevScore + 1); // Using prevScore to ensure state updates properly
    }
    setCurrQuestion(currQuestion + 1); // Move to the next question
    setOptionChosen(""); // Reset option for the next question
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion == Questions.length -1}
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default Quiz;
