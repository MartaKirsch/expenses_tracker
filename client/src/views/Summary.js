import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Wrapper from 'components/Wrapper';
import Select from 'components/Summary/Select';
import PieChart from 'components/Summary/PieChart/PieChart';
import BarChart from 'components/Summary/BarChart/BarChart';

const Summary = () => {

  let history = useHistory();

  const [isLogged, setIsLogged] = useState(false);
  const [chart,setChart] = useState("pie");

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
        setIsLogged(false);
        history.push('/log-in');
      }
      setIsLogged(true);
    }).catch(err=>{
      setIsLogged(false);
      history.push('/log-in');
    });

    return () => {
      source.cancel("Cancelling in cleanup");
    }
  },[]);


  return(
    <Wrapper>
      <Select onChange={e=>setChart(e.target.value)}>
        <option value="pie">Percentage of Expenses</option>
        <option value="bar">Expenses by Months</option>
      </Select>
      {chart==="pie" && <PieChart isLogged={isLogged}/>}
      {chart==="bar" && <BarChart isLogged={isLogged}/>}
    </Wrapper>
  );
};

export default Summary;
