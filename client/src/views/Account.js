import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Wrapper from 'components/Wrapper';
import UserIcon from 'components/Account/UserIcon';
import UserData from 'components/Account/UserData/UserData';
import ReviewBox from 'components/Account/ReviewBox/ReviewBox';
import userImg from 'imgs/user.svg';

const Account = (props) => {

  let history = useHistory();

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
        history.push('/log-in');
      }
    }).catch(err=>{
      history.push('/');
    });

    return () => {
      source.cancel("Cancelling in cleanup");
    }
  },[]);

  return(
    <Wrapper>
      <UserIcon>
        <img src={userImg} alt=""/>
      </UserIcon>
      <UserData/>
      <ReviewBox/>
    </Wrapper>
  )
};

export default Account;
