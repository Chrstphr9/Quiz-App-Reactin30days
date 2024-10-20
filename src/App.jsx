import React, { useContext, useState } from 'react'
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Context';
import './index.css'



const App = () => {

  const [gameState, setGameState] = useState("menu");

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  )
}

export default App