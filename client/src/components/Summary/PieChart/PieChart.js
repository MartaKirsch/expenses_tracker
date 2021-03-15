import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'components/Summary/PieChart/Form';
import Filters from 'components/Summary/PieChart/Filters/Filters';
import ChartBox from 'components/Summary/PieChart/ChartBox';
import Context from 'components/Summary/PieChart/Context.js';
import { typeOpts } from 'utils/consts.js';

const PieChart = ({ isLogged }) => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [types, setTypes] = useState([1,1,1,1,1,1,1]);

  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const values = {from,setFrom,to,setTo,types,setTypes, data, setData, err, setErr, isPending, setIsPending};

  useEffect(()=>{

    let source = axios.CancelToken.source();

    if(isLogged)
    {
      setIsPending(true);
      setErr(null);
      setData(null)

      let data = {from,to,types};

      //check if dates are in the right order
      let f = new Date(from);
      let t = new Date(to);
      if(f>t)
      {
        data.from=to;
        data.to=from;
      }

      data.types=typeOpts.slice(1).filter((opt,i)=>types[i] && typeOpts[i+1]);
      data.types = data.types.map(t=>t.toLowerCase());

      let source = axios.CancelToken.source();

      axios.post('/expenses/piechart', {...data,cancelToken: source.token})
      .then(res=>{
        if(res.statusText!=="OK")
        {
          throw Error('Could not fetch data');
        }
        setIsPending(false);
        setErr(null);
        setData(res.data);
      }).catch(err=>{
        if (!axios.isCancel(err))
        {
          setErr(err.message);
          setIsPending(false);
        }
      });
    }
    return () => {
      source.cancel("Cancelling in cleanup");
    }
  },[from,to,types,isLogged]);

  return(
    <Form>
      <Context.Provider value={values}>
        <Filters/>
        <ChartBox/>
      </Context.Provider>
    </Form>
  )
};

export default PieChart;
