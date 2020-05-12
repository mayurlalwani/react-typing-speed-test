import React, {useState, useEffect, useRef} from 'react';

import {quotesArray, random} from './randomQuotes'

function App() {
  const [text, setText] = useState("")
  const [gameStatus, setGameStatus] = useState(false)
  const [quotes, setQuotes] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(10)
  const textAreaRef = useRef(null)
  const [inputQuote, setInputQuote] = useState("")
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    const newQuote = random(quotesArray)
    setQuotes(newQuote)
    console.log(newQuote.quote)
    setInputQuote(newQuote.quote)

  },[])

  useEffect(() => {
        
    if(gameStatus && timeRemaining > 0){
        setTimeout(() => {
        setTimeRemaining(time => time - 1)
        
        }, 1000)

    }
    else if(timeRemaining === 0){
        setGameStatus(false)
        const numOfWords = countWord(text)
        setWordCount(numOfWords)
        textAreaRef.current.disabled=true
    }
    }, [timeRemaining, gameStatus])
  

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  function handleStart(){
    setGameStatus(true)
    setTimeRemaining(10)
    setText("")
    textAreaRef.current.disabled=false
    textAreaRef.current.focus()
  }

  function countWord(text){
    const words = text.trim().split(" ")
    return words.filter(word=>word !== "").length
}


  return (
    <div className="App">
      <h1>Typing Speed Test</h1>
      <div className="quoteInput">
        {inputQuote}
      </div>
      
      <textarea 
              ref={textAreaRef} 
              onChange={handleChange} 
              value={text}>
              disabled={gameStatus ? false : true}>
      </textarea>
      
      <button 
          onClick={handleStart}
          disabled={gameStatus ? true : false}>Start</button>
      <h3>Time Remaining: {timeRemaining} Seconds</h3>
      <h3>Word Count: {wordCount}</h3>
    </div>
  
  )
  }

export default App;
