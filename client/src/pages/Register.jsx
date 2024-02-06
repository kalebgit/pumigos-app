import { useEffect, useRef, useState } from "react";
import Form from "../components/Forms/Form";
import InputBox from "../components/Forms/InputBox";
import useInput from "../hooks/useInput";


function isUpperCase(string) {
    return string.toUpperCase() === string;
  }


export default function Register(){
    const [isSignUp, setIsLSignUp] = useState(false)
    //email useInput
    const {
        inputValue: email, 
        setInputValue: setEmail, 
        errorMessage: emailErrorMessage, 
        setErrorMessage: setEmailErrorMessage,
        validateError: validateEmail} = useInput("", (email)=>{
            let message = ""
            if(!email.includes("@")){
                message = message + "| el correo debe tener '@' |"
            }

            return message;
        });

    //name useInput
    const {
        inputValue: password, 
        setInputValue: setPassword, 
        errorMessage: passwordErrorMessage, 
        setErrorMessage: setPasswordErrorMessage,
        validateError: validatePassword} = useInput("", (password)=>{
            let message = "";
            if(!(password.length > 8)){
                message = message + " | la contraseña debe tener 8 o mas caracteres | ";
            }
            if(!isUpperCase(password[0])){
                message = message + " | el primer caracter debe ser mayus | "   
            }
            return message;
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
                    setEmailErrorMessage("")
                    setEmail(value)
                }}
                value={email}
                errorMessage={emailErrorMessage}
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
                    setPasswordErrorMessage("")
                    setPassword(value);
                    
                }}
                value={password}
                errorMessage={passwordErrorMessage}
                onBlur={()=>{
                    setPasswordErrorMessage(validatePassword)
                }}
                required/>
            {/* {isSignUp &&} */}
        </Form>
    )
}