import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Wrapper from 'components/Account/UserData/Wrapper';
import Username from 'components/Account/UserData/Username';
import Date from 'components/Account/UserData/Date';
import Button from 'components/AddExpense/Button';

const UserData = () => {
  let history = useHistory();

  const [username,setUsername] = useState("user");
  const [date,setDate] = useState("dd-mm-yyyy");

  useEffect(()=>{
    let source = axios.CancelToken.source();
    //check if user's logged in
    axios.get('/users/userData', {cancelToken: source.token})
    .then(res=>{
      if(res.statusText!=="OK")
      {
        throw Error('could not fetch data');
      }

      setUsername(res.data.username);
      setDate(res.data.date);
    }).catch(err=>{
      history.push('/log-in');
    });

    return () => {
      source.cancel("Cancelling in cleanup");
    }
  },[]);

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
    <Wrapper>
      <Username>
        {username}
      </Username>
      <Date>
        Since {date}
      </Date>
      <Button onClick={handleLogOut}>Log out</Button>
    </Wrapper>
  )
};

export default UserData
