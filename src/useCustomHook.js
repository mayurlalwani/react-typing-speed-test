import {useState, useRef, useEffect} from "react";

function useCustomHook(){

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [gameStatus, setGameStatus] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textAreaRef = useRef(null)

    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }

    function countWord(text){
        const words = text.trim().split(" ")
        return words.filter(word=>word !== "").length
    }

    function startTimer() {
        setGameStatus(true)
        setTimeRemaining(5)
        setText("")
        textAreaRef.current.disabled = false
        textAreaRef.current.focus()
    }

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
        }
        }, [timeRemaining, gameStatus])

    return { textAreaRef, handleChange, text, gameStatus, timeRemaining, startTimer, wordCount }
}
export default useCustomHook

