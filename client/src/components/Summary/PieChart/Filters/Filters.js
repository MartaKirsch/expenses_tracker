import { useContext } from 'react';
import Context from 'components/Summary/PieChart/Context.js';
import Wrapper from 'components/Summary/PieChart/Filters/Wrapper';
import Filter from 'components/Summary/PieChart/Filters/Filter';
import Checkboxes from 'components/Summary/PieChart/Filters/Checkboxes/Checkboxes';
import { typeOpts } from 'utils/consts.js';
import { getTodaysDate } from 'utils/getTodaysDate.js';

const Filters = () => {

  const { from, to, setFrom, setTo } = useContext(Context);

  return(
    <Wrapper>
      <Filter>
        <label htmlFor="from">From</label>
        <input
        type="date"
        name="from"
        value={from}
        max={getTodaysDate()}
        onChange={e=>setFrom(e.target.value)}
        />
      </Filter>

      <Filter>
        <label htmlFor="to">To</label>
        <input
        type="date"
        name="to"
        value={to}
        max={getTodaysDate()}
        onChange={e=>setTo(e.target.value)}
        />
      </Filter>

      <Filter>
        <label htmlFor="type">Type</label>
        <Checkboxes/>
      </Filter>
    </Wrapper>
  );
}

export default Filters;
