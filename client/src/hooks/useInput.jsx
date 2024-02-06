

export default function useInput(initialValue, hasError){
    const [inputValue, setInputValue] = useState(initialValue);
    const [errorMessage, setErrorMessage] = useState("");

    const validateError = (prevState)=>{
        return hasError(inputValue)
    }

    useEffect(()=>{
        if(inputValue){
            const timer = setTimeout(()=>{
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
        setDidEdit,
        reset
    }
}