import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import LogOutButton from 'components/Navbar/Panel/LogOutButton';
import Wrapper from 'components/Navbar/Panel/Wrapper';
import Button from 'components/Navbar/Panel/Button';

const Panel = ({ isVisible })=>{

  let history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    let source = axios.CancelToken.source();
    //check if user's logged in
    axios.get('/users/isLoggedIn', {cancelToken: source.token})
    .then(res=>{
      if(res.statusText!=="OK")
      {
        throw Error('could not fetch data');
      }
      if(!res.data.isLogged)
      {
        setIsLoggedIn(false);
      }
      else
      {
        setIsLoggedIn(true);
      }
    }).catch(err=>{
      console.log(err.message);
    });
  });

  const handleLogOut = () => {
    axios.get('/users/logOut').then(res=>{
      if(res.statusText==="OK")
      {
        history.push('/');
      }
      else
      {
        throw Error('could not log out');
      }
    }).catch(err=>console.log(err))
  };

  return(
    <Wrapper isVisible={isVisible}>
      <Button><Link to="/account">Your Account</Link></Button>
      {isLoggedIn && <LogOutButton onClick={handleLogOut}>Log out</LogOutButton>}
      {!isLoggedIn && <LogOutButton
        onClick={e=>history.push('/log-in')}>
        Log in</LogOutButton>}
    </Wrapper>
  )
};

export default Panel;
