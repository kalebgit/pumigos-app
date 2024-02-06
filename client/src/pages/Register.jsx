import { useEffect, useRef, useState } from "react";
import Form from "../components/Forms/Form";
import InputBox from "../components/Forms/InputBox";
import useInput from "../hooks/useInput";


function isUpperCase(string) {
    return string.toUpperCase() === string;
  }


export default function Register(){
    const [isSignUp, setIsSignUp] = useState(false)
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

    const {
        inputValue: confirmationPassword, 
        setInputValue: setConfirmationPassword, 
        errorMessage: confirmationPasswordErrorMessage, 
        setErrorMessage: setConfirmationPasswordErrorMessage,
        validateError: validateConfirmationPassword} = useInput("", (confirmationPassword)=>{
            let message = "";
            if(password != confirmationPassword){
                message = message + "la contraseña no es la misma"
            }
            return message;
        });


    
    function onChangeForm(event){
        event.preventDefault()
        setIsSignUp((prevState)=>{
            return !prevState
        })
    }
    

    return (
        <Form title={`${isSignUp ? "Crear Cuenta" : "Iniciar Sesion"}`} onSubmit="" action="" method="">
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
                placeholder="ingresa contraseña" 
                labelText="Contraseña (minimo 8 caracteres y debe empezar con mayus)"
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

            
            {isSignUp ? 
                <>
                    <InputBox 
                    name="confirm-password" 
                    id="confirm-password" 
                    type="password" 
                    placeholder="confirma contraseña " 
                    labelText="Confirmacion Contraseña"
                    onChange={({target:{value}})=>{
                        setConfirmationPasswordErrorMessage("")
                        setConfirmationPassword(value);
                        
                    }}
                    value={confirmationPassword}
                    errorMessage={confirmationPasswordErrorMessage}
                    onBlur={()=>{
                        setConfirmationPasswordErrorMessage(validateConfirmationPassword)
                    }}
                    required/>
                    <p>Ya tienes una cuenta? 
                        <button onClick={onChangeForm}className="hover:underline text-blue-400 hover:cursor-pointer">
                            Inicia Sesion
                        </button>
                    </p>
                </>
                
            : <p>No tienes una cuenta? <button onClick={onChangeForm}className="hover:underline text-blue-400 hover:cursor-pointer">Registrate</button></p>}
            
        </Form>
    )
}