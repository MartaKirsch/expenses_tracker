import { useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from "react-router-dom";
import Wrapper from 'components/Wrapper';
import Form from 'components/AddExpense/Form';
import UpdateForm from 'components/UpdateExpense/UpdateForm';


const AddExpense = ({isUpdate}) => {

  let history = useHistory();

  let { id } = useParams();

  useEffect(()=>{
    let source = axios.CancelToken.source();
    let source2 = axios.CancelToken.source();
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

      if(isUpdate)
      {
        axios.get(`/expenses/checkExpense/${id}`, {cancelToken: source2.token}).then(res=>{
          if(res.statusText!=="OK")
          {
            throw Error('could not fetch data');
          }
          if(!res.data.isOk)
          {
            history.push('/expenses');
          }
        }).catch(err=>{
          history.push('/expenses');
        });
      }
    }).catch(err=>{
      history.push('/');
    });

    return () => {
      source.cancel("Cancelling in cleanup")
      source2.cancel("Cancelling in cleanup");;
    }
  },[]);

  return(
    <Wrapper>
      {!isUpdate && <Form redirect={e=>history.push('/expenses')}/>}
      {isUpdate && <UpdateForm id={id} redirect={e=>history.push('/expenses')}/>}
    </Wrapper>
  )
};

AddExpense.defaultProps = {
  isUpdate: false
};

export default AddExpense;
