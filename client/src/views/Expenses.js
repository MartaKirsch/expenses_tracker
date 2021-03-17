import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import Wrapper from 'components/Expenses/Wrapper';
import AddExpenseButton from 'components/Expenses/AddExpenseButton';
import Main from 'components/Expenses/Main/Main';

const Expenses = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);

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
        setLoggedIn(false);
        sessionStorage.setItem('redirect', '/expenses');
        history.push('/log-in');
      }
      setLoggedIn(true);
    }).catch(err=>{
      history.push('/');
    });

    return () => {
      source.cancel("Cancelling in cleanup");
    }
  },[]);

  return(
    <Wrapper>
      <AddExpenseButton>
        <Link to='/add-expense'>
          Add new expense
        </Link>
      </AddExpenseButton>

      <Main loggedIn={loggedIn}/>
    </Wrapper>
  )
};

export default Expenses;
