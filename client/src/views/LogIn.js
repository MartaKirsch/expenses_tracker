import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Wrapper from 'components/Wrapper';
import LogInForm from 'components/LogIn/Form/LogInForm';
import RegisterForm from 'components/LogIn/Form/RegisterForm';
import ChangeForm from 'components/LogIn/Form/ChangeForm';

const mssg1 = "You don’t have an account yet? Click here to register!";
const mssg2 = "You already have an account? Click here to log in!";


const LogIn = (props)=>{
  const [isRegister, setIsRegister] = useState(false);
  let history = useHistory();

  useEffect(()=>{
    //check if user's logged in
    axios.get('/users/isLoggedIn').then(res=>{
      if(res.statusText!=="OK")
      {
        throw Error('could not fetch data');
      }
      if(res.data.isLogged)
      {
        history.push('/account');
      }
    }).catch(err=>{
      history.push('/');
    });
  },[]);

  const redirect = () => {
    props.history.push("/expenses");
  };

  const redirectWithUrl = () => {
    const url = sessionStorage.getItem('redirect');
    sessionStorage.removeItem('redirect');
    props.history.push(url);
  };

  return(
    <Wrapper>
      {!isRegister && <LogInForm redirect={redirect} redirectWithUrl={redirectWithUrl}/>}
      {isRegister && <RegisterForm redirect={redirect}/>}
      <ChangeForm onClick={()=>setIsRegister(!isRegister)}>{isRegister?(mssg2):(mssg1)}</ChangeForm>
    </Wrapper>
  )
};


export default LogIn;
