import Wrapper from 'components/Expenses/Search/Filters/Wrapper';
import Switch from 'components/Expenses/Search/Filters/Switch';
import Selects from 'components/Expenses/Search/Filters/Selects/Selects';
import { useState } from 'react';

const Filters = () => {

  const [selectsAreVisible, setSelectsAreVisible] = useState(false);

  return(
    <Wrapper>
      <Switch>
        <button type="button" onClick={()=>setSelectsAreVisible(!selectsAreVisible)}>
        {selectsAreVisible ? ("-") : ("+")}
        </button>
        <div>Filters</div>
      </Switch>
      <Selects visibility={selectsAreVisible}/>
    </Wrapper>
  )
};

export default Filters;
