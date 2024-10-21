import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("menu");

  return (
    <QuizContext.Provider value={{ score, setScore, gameState, setGameState }}>
      {children}
    </QuizContext.Provider>
  );
};
