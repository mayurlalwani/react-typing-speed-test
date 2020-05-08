import React from 'react';
import './App.css';
import useCustomHook from './useCustomHook'

function App() {

  const { textAreaRef, handleChange, text, gameStatus, timeRemaining, startTimer, wordCount } = useCustomHook()

  return (
    <div className="App">
      <h1> Typing Speed Test </h1>

      <textarea 
            ref={textAreaRef}
            onChange={handleChange}
            value={text} 
            disabled={gameStatus ? false : true}/>

      <h4>Time Remaining: {timeRemaining} </h4>
      <button 
            onClick={startTimer} 
            disabled={gameStatus ? true : false}>Start</button>
      
      <h1>Word Count : {wordCount} </h1>
      
    </div>
  );
}

export default App;
