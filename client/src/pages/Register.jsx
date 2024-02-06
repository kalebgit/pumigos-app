import { useEffect, useRef, useState } from "react";
import Form from "../components/Forms/Form";
import InputBox from "../components/Forms/InputBox";
import useInput from "../hooks/useInput";
import {isUpperCase} from '../util/functions'


export default function Register(){
    const [isSignUp, setIsLSignUp] = useState(false)
    //email useInput
    const {
        inputValue: email, 
        setInputValue: setEmail, 
        errorMessage: emailErrorMessage, 
        setErrorMessage: setEmailErrorMessage,
        setDidEdit: setEmailEdited,
        validate: validateEmail} = useInput("", (email)=>{
            let errorMessage = ""
            if(!email.includes("@")){
                errorMessage = errorMessage + "| el correo debe tener '@' |"
            }

            return errorMessage;
        });

    //name useInput
    const {
        inputValue: password, 
        setInputValue: setPassword, 
        errorMessage: passwordErrorMessage, 
        setErrorMessage: setPasswordErrorMessage,
        setDidEdit: setPasswordEdited,
        validate: validatePassword} = useInput("", (password)=>{
            let errorMessage = "";
            if(!(password.length > 8)){
                errorMessage = errorMessage + " | la contraseña debe tener 8 o mas caracteres | ";
            }
            if(!isUpperCase(password[0])){
                errorMessage = errorMessage + " | el primer caracter debe ser mayus | "   
            }
            return errorMessage;
        });

    

    return (
        <Form title="" onSubmit="" action="" method="">
            <InputBox 
                name="name"  
                id="name" 
                type="text" 
                placeholder="Ingrese su nombre" 
                labelText="Nombre" 
                required
                />
            <InputBox 
                name="email" 
                id="email" 
                type="email" 
                placeholder="Ingrese su email" 
                labelText="Email" 
                onChange={({target: {value}})=>{
                    setEmail(value)
                }}
                value={email}
                errorMessage={errorMessage}
                onBlur={()=>{
                    setEmailErrorMessage(validateEmail)
                }}
                required/>
            <InputBox 
                name="password" 
                id="password" 
                type="password" 
                placeholder="contraseña: (minimo 8 caracteres y debe empezar con mayus)" 
                labelText="Contraseña"
                onChange={({target:{value}})=>{
                    setPassword(value);
                    
                }}
                value={password}
                onBlur={()=>{
                    setPasswordErrorMessage(validatePassword)
                }}
                required/>
            {/* {isSignUp &&} */}
        </Form>
    )
}