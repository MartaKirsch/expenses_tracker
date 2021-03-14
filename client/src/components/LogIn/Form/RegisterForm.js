import { useState, useRef } from 'react';
import axios from 'axios';
import Input from 'components/LogIn/Form/Input';
import FormWrapper from 'components/LogIn/Form/FormWrapper';
import Password from 'components/LogIn/Form/Password';
import Submit from 'components/LogIn/Form/Submit';
import ErrorMssg from 'components/LogIn/Form/ErrorMssg';

const RegisterForm = ({logIn,redirect}) => {

  //input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //error messages flags - are they visible
  const [errorWhileRegister, setErrorWhileRegister] = useState(0);
  const [usernameError, setUsernameError] = useState(0);
  const [passwordError, setPasswordError] = useState(0);
  const [emailError, setEmailError] = useState(0);

  //error messages refs
  const usernameErrorRef = useRef(null);
  const passwordErrorRef = useRef(null);
  const emailErrorRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    //run check again if form was submitted by clicking 'enter' or with empty inputs
    handleBlur({target:{name:"username"}},usernameErrorRef,setUsernameError);
    handleBlur({target:{name:"password"}},passwordErrorRef,setPasswordError);
    handleBlur({target:{name:"email"}},emailErrorRef,setEmailError);

    if(!usernameError && !passwordError && !emailError)
    {
      //create new account - send data to the db
      axios.post('/users/register', {username, password, email}).then(res=>{

        if(res.statusText!=="OK")
        {
          throw new Error("Error");
        }
        //redirect
        redirect();
      })
      .catch(err=>{
        setErrorWhileRegister(1);
      });
    }
  };

  const handleFocus = (e, valueSetter) => {
    //when input is focused, hide its error message and submit button err mssg
    valueSetter(0);
    setErrorWhileRegister(0);
  };

  const handleBlur = ({target}, ref, valueSetter) => {

    const values = {
      username,
      password,
      email
    };

    const input = target.name;
    const regs = {
      username: /^[\w-]{3,50}$/,
      password:/^[\w-]{3,50}$/,
      email:/^[A-Z0-9._%+-]{1,64}@[A-Z0-9._%+-]+\.[a-z]{2,}$/i
    };

    //test the input value with regex
    if(!regs[input].test(values[input]) || values[input]==="")
    {
      valueSetter(1);
      ref.current.innerHTML = input!=="email" ? ("Invalid value! It needs to be at least 3 characters long!") : ("Invalid value!");
    }

    //check if username doesn't exist yet
    else if(input==="username")
    {
      axios.post('/users/checkIfUsernameExists',{username}).then(res=>{
        if(res.data.exists)
        {
          valueSetter(1);
          ref.current.innerHTML = "This username already exists!";
        }
      }).catch(err=>{
        valueSetter(1);
        ref.current.innerHTML = "Error occured";
      });
    }

    //check if email isn't used yet
    else if(input==="email")
    {
      axios.post('/users/checkIfEmailIsUsed',{email}).then(res=>{
        if(res.data.exists)
        {
          valueSetter(1);
          ref.current.innerHTML = "This email is already used!";
        }
      }).catch(err=>{
        valueSetter(1);
        ref.current.innerHTML = "Error occured";
      });
    }
  }

  return(
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
        <Input
        value={username}
        name="username"
        placeholder="username"
        onChange={e=>setUsername(e.target.value)}
        onFocus={e=>handleFocus(e,setUsernameError)}
        onBlur={e=>handleBlur(e,usernameErrorRef,setUsernameError)}/>
        <ErrorMssg ref={usernameErrorRef} visible={usernameError}>.</ErrorMssg>

        <Password
        name="password"
        placeholder="password"
        onChange={e=>setPassword(e.target.value)}
        onFocus={e=>handleFocus(e,setPasswordError)}
        onBlur={e=>handleBlur(e,passwordErrorRef,setPasswordError)}/>
        <ErrorMssg ref={passwordErrorRef} visible={passwordError}>.</ErrorMssg>

        <Input
        name="email"
        placeholder="email"
        onChange={e=>setEmail(e.target.value)}
        onFocus={e=>handleFocus(e,setEmailError)}
        onBlur={e=>handleBlur(e,emailErrorRef,setEmailError)}/>
        <ErrorMssg ref={emailErrorRef} visible={emailError}>.</ErrorMssg>

        <Submit type="submit" value="register" />
        <ErrorMssg visible={errorWhileRegister} underButton>An error occured while registering your account!</ErrorMssg>
    </FormWrapper>
  )
};

export default RegisterForm;
