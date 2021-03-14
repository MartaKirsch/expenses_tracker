import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'components/Summary/PieChart/Form';
import Filters from 'components/Summary/BarChart/Filters/Filters';
import Context from 'components/Summary/BarChart/Context.js';
import ChartBox from 'components/Summary/BarChart/ChartBox.js';
import { typeOpts } from 'utils/consts.js';
import { getTodaysDate } from 'utils/getTodaysDate.js';

const BarChart = ({ isLogged }) => {

  const [from, setFrom] = useState(getTodaysDate(true));
  const [to, setTo] = useState(getTodaysDate());
  const [isOk, setIsOk] = useState(true);

  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const values = {from,setFrom,to,setTo, data, setData, err, setErr, isPending, setIsPending,isOk, setIsOk};

  useEffect(()=>{

    let source = axios.CancelToken.source();

    if(isLogged && isOk)
    {
      setIsPending(true);
      setErr(null);
      setData(null);

      let data = {from,to};

      //check if dates are in the right order
      let f = new Date(from);
      let t = new Date(to);
      if(f>t)
      {
        data.from=to;
        data.to=from;
      }


      axios.post('/expenses/barchart', {...data,cancelToken: source.token})
      .then(res=>{
        if(res.statusText!=="OK")
        {
          throw Error('Could not fetch data');
        }

        let values=[];
        for(let d in res.data)
        {
          let obj = {};
          obj[d] = res.data[d];
          values.push(obj);
        }

        const first_month = f.getMonth();
        const last_month = t.getMonth();
        const fYear = f.getFullYear();
        const tYear = t.getFullYear();
        if(fYear===tYear)
        {
          values=values.slice(first_month,last_month+1).concat(values.slice(last_month,first_month));
        }
        else {
          values=values.slice(first_month).concat(values.slice(0,last_month+1));
        }

        console.log(values);

        setIsPending(false);
        setErr(null);
        setData(values);
      }).catch(err=>{
        if (!axios.isCancel(err))
        {
          setErr(err.message);
          setIsPending(false);
        }
      });

      return () => {
        source.cancel("Cancelling in cleanup");
      }
    }
    return () => {
      source.cancel("Cancelling in cleanup");
    }
  },[isLogged,isOk]);

  return(
    <Form>
      <Context.Provider value={values}>
        <Filters/>
        <ChartBox/>
      </Context.Provider>
    </Form>
  )
};

export default BarChart;
