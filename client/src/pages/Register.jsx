import { useEffect, useRef, useState } from "react";

import Form from "../components/Forms/Form";
import InputBox from "../components/Forms/InputBox";
import useInput from "../hooks/useInput";


function isUpperCase(string) {
    return string.toUpperCase() === string;
  }


export default function Register(){
    const apiPath = new URL("http://127.0.0.1:8080/api/users")
    
    const [isSignUp, setIsSignUp] = useState(false)

    //email useInput
    const {
        inputValue: email, 
        setInputValue: setEmail, 
        error: {valid: validEmail, message:emailErrorMessage}, 
        setError: setEmailErrorMessage,
        validateError: validateEmail} = useInput("", (email)=>{
            let error = {valid: true, message: ""}
            if(!email.includes("@")){
                error.valid = false
                error.message = error.message + "| el correo debe tener '@' |"
            }

            return error;
        });

    //name useInput
    const {
        inputValue: password, 
        setInputValue: setPassword, 
        error: {valid: validPassword, message: passwordErrorMessage}, 
        setError: setPasswordErrorMessage,
        validateError: validatePassword} = useInput("", (password)=>{
            let error = {valid: true, message: ""};
            if(!(password.length > 8)){
                error.valid = false
                error.message = error.message + " | la contraseña debe tener 8 o mas caracteres | ";
            }
            if(!isUpperCase(password[0])){
                error.valid = false
                error.message = error.message + " | el primer caracter debe ser mayus | "   
            }
            return error;
        });


    //confirmationPassword useInput
    const {
        inputValue: confirmationPassword, 
        setInputValue: setConfirmationPassword, 
        error: {valid: validConfirmationPassword, message: confirmationPasswordErrorMessage}, 
        setError: setConfirmationPasswordErrorMessage,
        validateError: validateConfirmationPassword} = useInput("", (confirmationPassword)=>{
            let error = {valid: true, message: ""};
            if(password != confirmationPassword){
                error.valid = false
                error.message = error.message + "la contraseña no es la misma"
            }
            return error;
        });


    
    function onChangeForm(event){
        event.preventDefault()
        setIsSignUp((prevState)=>{
            return !prevState
        })
    }

    async function onSubmit(event){
        event.preventDefault()
        
        try{
            if(isSignUp){
                const formData = new FormData(event.target);
                const {email, name, password}= Object.fromEntries(formData.entries());
                const newUser = {email, name, password}
                console.log(newUser)
                // const usersRequest = new Request(apiPath, {
                //     headers: {'Access-Control-Allow-Origin': '*'},
                //     method: 'POST',
                //     cache: 'no-cache',
                //     body: JSON.stringify(newUser)
                // })
                // const url = new URL('http://127.0.0.1:8080/api/users')
                // const postRequest = new Request(url, {
                //     method: 'POST',
                //     body: 'hola'
                // })
                //how can I avoid CORS exception?
                // const res = await fetch(postRequest)
                //second version
                // const jsonStringUser = JSON.stringify(newUser);
                // const res = await fetch(url, {
                //     headers: {'content-type': 'application/json'},
                //     method: 'POST',
                //     body: jsonStringUser
                // })
                //third version and simplified
                const postRequest = new Request(apiPath, {
                    headers: {'content-type': 'application/json'},
                    method: 'POST',
                    body: JSON.stringify(newUser)
                })
                console.log(postRequest.headers.get("content-type"))
                const res = await fetch(postRequest)
                if(!res.ok){
                    console.log('there was a problem')
                }
                console.log(res)
            }else{
                //id has to be within the cookies or something like that
                const signInPath = new URL(apiPath.toString + `${id}`)
                
                const loginRequest = new Request(signInPath, {
                    headers: {'x-steve': 'hello'},
                    method: 'GET',
                    cache: 'no-store'
                })
                
                
            }
        }catch(err){
            console.log(err)
        }
        
    }
    

    return (
        <Form title={`${isSignUp ? "Crear Cuenta" : "Iniciar Sesion"}`} onSubmit={onSubmit} action="" method="">
            {isSignUp && <InputBox 
                name="name"  
                id="name" 
                type="text" 
                placeholder="Ingrese su nombre" 
                labelText="Nombre" 
                required
                />}
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
            
            <button className="py-1 px-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl disabled:bg-slate-400 disabled:text-gray-300"
                disabled={
                    isSignUp ? !(validEmail && validPassword && validConfirmationPassword) : !(validEmail && validPassword)
                }>{isSignUp ? "Crear Cuenta" : "Iniciar Sesion"}</button>
        </Form>
    )
}