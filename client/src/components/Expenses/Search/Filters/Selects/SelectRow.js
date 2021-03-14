import Wrapper from 'components/Expenses/Search/Filters/Selects/Wrapper';
import FetchContext from 'components/Expenses/Search/FetchContext.js';
import { useContext } from 'react';


const SelectRow = ({data,options}) => {

  const { fetchData } = useContext(FetchContext);

  return(
    <Wrapper>
      <div>{data}</div>
      <select name={data.toLowerCase()} onChange={fetchData}>
        {options.map(opt=>(
          <option value={opt.toLowerCase()} key={opt}>{opt}</option>
        ))}
      </select>
    </Wrapper>
  )
};

export default SelectRow;
