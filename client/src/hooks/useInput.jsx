import { useState, useEffect } from "react";

export default function useInput(initialValue, hasError){
    const [inputValue, setInputValue] = useState(initialValue);
    const [error, setError] = useState({valid: false, message: ""});

    const validateError = (prevState)=>{
        if(inputValue){
            return hasError(inputValue)
        }
        return prevState
    }

    useEffect(()=>{
        let timer 
        if(inputValue){
            timer = setTimeout(()=>{
                setError(validateError)
            }, 2000);
        }

        return ()=>{
            clearInterval(timer);
        }
    }, [inputValue]);

    const reset = ()=>setInputValue(initialValue)

    return {
        inputValue,
        setInputValue,
        error,
        setError,
        reset,
        validateError
    }
}