import { useContext, useState, useRef, useEffect } from 'react';
import Context from 'components/Summary/BarChart/Context.js';
import Wrapper from 'components/Summary/BarChart/Filters/Wrapper';
import Filter from 'components/Summary/PieChart/Filters/Filter';
import { typeOpts } from 'utils/consts.js';
import { getTodaysDate, dateToStr, getMin, changeYear, getMax } from 'utils/getTodaysDate.js';

const Filters = () => {

  const { from, to, setFrom, setTo, setIsOk } = useContext(Context);

  const [min, setMin] = useState(getMin(new Date(getTodaysDate())));
  const [max, setMax] = useState(getTodaysDate());

  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(()=>{
    //from<to?
    let f = new Date(from);
    let t = new Date(to);

    //max 12 months apart
    if(f < new Date(changeYear(to,-1,2)) )
    {
      setTo(changeYear(from,1,0));
      let d = new Date(f.getFullYear(),f.getMonth(),f.getDate());
      setMin(dateToStr(d));
    }

    if(fromRef.current.validity.valid && toRef.current.validity.valid && f<t)
    {
      setIsOk(true);
    }
  },[from, to])

  const handleChange = (e,setter) => {
    setter(e.target.value);
    setIsOk(false);
  };

  return(
    <Wrapper>
      <Filter bar>
        <label htmlFor="from">From</label>
        <input
        type="date"
        name="from"
        value={from}
        max={max}
        onChange={e=>handleChange(e,setFrom)}
        required
        ref={fromRef}
        />
      </Filter>

      <Filter bar>
        <label htmlFor="to">To</label>
        <input
        type="date"
        name="to"
        value={to}
        max={max}
        min={min}
        onChange={e=>handleChange(e,setTo)}
        required
        ref={toRef}
        />
      </Filter>

    </Wrapper>
  );
}

export default Filters;
