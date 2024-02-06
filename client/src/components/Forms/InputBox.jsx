import {forwardRef} from 'react'

const InputBox = forwardRef(function({labelText, errorMessage, ...props}, ref){
    return (
        <div className="">
            <label className="" htmlFor={props.name}>{labelText}</label>
            <input {...props}/>
            {errorMessage && errorMessage.length > 0 && <div>{errorMessage}</div>}
        </div>
    )
}) 

export default InputBox;