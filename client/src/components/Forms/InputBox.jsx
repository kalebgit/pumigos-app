import {forwardRef} from 'react'

const InputBox = forwardRef(function({labelText, errorMessage, ...props}, ref){
    return (
        <div className="flex flex-col flex-nowrap justify-start items-start ">
            <label className="" htmlFor={props.name}>{labelText}: </label>
            <input {...props}/>
            <p className="text-red-500">{errorMessage}</p>
        </div>
    )
}) 

export default InputBox;