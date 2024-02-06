import { useState, useEffect } from "react";

export default function useInput(initialValue, hasError){
    const [inputValue, setInputValue] = useState(initialValue);
    const [errorMessage, setErrorMessage] = useState("");

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
                setErrorMessage(validateError)
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
        errorMessage,
        setErrorMessage,
        reset,
        validateError
    }
}