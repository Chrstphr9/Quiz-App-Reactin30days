import React, { useState } from 'react'
import MainMenu from './Components/MainMenu';

const App = () => {

  const [gameState, setGameState] = useState("menu");

  return (
    <div className='App'>
      <h1>Quiz App</h1>

      {gameState === "menu" && <MainMenu/>}
    </div>
  )
}

export default App