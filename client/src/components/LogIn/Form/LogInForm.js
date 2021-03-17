import { useState, useRef } from 'react';
import axios from 'axios';
import Input from 'components/LogIn/Form/Input';
import FormWrapper from 'components/LogIn/Form/FormWrapper';
import Password from 'components/LogIn/Form/Password';
import Submit from 'components/LogIn/Form/Submit';
import ErrorMssg from 'components/LogIn/Form/ErrorMssg';

const LogInForm = ({redirect,redirectWithUrl}) => {

  //input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //error messages flags - are they visible
  const [usernameError, setUsernameError] = useState(0);
  const [passwordError, setPasswordError] = useState(0);
  const [errorWhileLogIn, setErrorWhileLogIn] = useState(0);

  //error messages refs
  const loginErrorRef = useRef(null);


  const handleFocus = (e, valueSetter) => {
    //when input is focused, hide its error message and submit button err mssg
    valueSetter(0);
    setErrorWhileLogIn(0);
  };

  const handleSubmit = e => {
    e.preventDefault();

    //if one of the fields is empty
    if(username==="" || password==="")
    {
      loginErrorRef.current.innerHTML = "Fields cannot be empty!";
      setErrorWhileLogIn(1);
      return;
    }

    //check user log-in data
    axios.post('/users/checkLogInData', {username, password}).then(res=>{
      const { mssg } = res.data;

      if(res.statusText!=="OK" || mssg==="error")
      {
        throw Error("Error");
      }
      if(mssg==="ok")
      {
        console.log(sessionStorage.getItem('redirect'));
        if(sessionStorage.getItem('redirect'))
        {
          redirectWithUrl();
        }
        else {
          redirect();
        }
      }
      else if(mssg==="username")
      {
        setUsernameError(1);
      }
      else {
        setPasswordError(1);
      }
    })
    .catch(err=>{
      loginErrorRef.current.innerHTML = "An error occured!";
      setErrorWhileLogIn(1);
    });

  };

  return(
    <FormWrapper onSubmit={handleSubmit}>
        <Input
        name="username"
        placeholder="username"
        autoComplete="off"
        value={username}
        onChange={e=>setUsername(e.target.value)}
        onFocus={e=>handleFocus(e,setUsernameError)}
        />
        <ErrorMssg visible={usernameError}>This username doesn't exist!</ErrorMssg>

        <Password
        name="password"
        placeholder="password"
        autoComplete="off"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        onFocus={e=>handleFocus(e,setPasswordError)}
        />
        <ErrorMssg visible={passwordError}>The password is wrong!</ErrorMssg>

        <Submit type="submit" value="log in"/>
        <ErrorMssg ref={loginErrorRef} visible={errorWhileLogIn}>.</ErrorMssg>
    </FormWrapper>
  )
};

export default LogInForm;
