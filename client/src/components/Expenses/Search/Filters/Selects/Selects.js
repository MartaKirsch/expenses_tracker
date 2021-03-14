import SelectRow from 'components/Expenses/Search/Filters/Selects/SelectRow';
import SelectsWrapper from 'components/Expenses/Search/Filters/Selects/SelectsWrapper';
import { typeOpts } from 'utils/consts';

const dateOpts=["Newest","Oldest"];

const Selects = ({visibility}) => {
  return(
    <SelectsWrapper visible={visibility}>
      <SelectRow data="Date" key="date" options={dateOpts}/>
      <SelectRow data="Type" key="type" options={typeOpts}/>
    </SelectsWrapper>
  )
};

export default Selects;
