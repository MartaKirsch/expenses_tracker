import { useState, useContext } from 'react';
import Wrapper from 'components/Summary/PieChart/Filters/Checkboxes/Wrapper';
import Button from 'components/Summary/PieChart/Filters/Checkboxes/Button';
import Options from 'components/Summary/PieChart/Filters/Checkboxes/Options';
import Context from 'components/Summary/PieChart/Context.js';
import { typeOpts } from 'utils/consts.js';

const Checkboxes = () => {

  const { types, setTypes } = useContext(Context);

  const [showCheckboxes, setShowCheckboxes] = useState(false);

  return(
    <Wrapper>
      <Button
      name="type"
      type="button"
      onClick={()=>setShowCheckboxes(!showCheckboxes)}
      >select</Button>
      <Options visible={showCheckboxes}>
        {
          typeOpts.slice(1).map((opt,i)=>(
            <label key={opt.toLowerCase()} htmlFor={opt.toLowerCase()}>
              {opt}
              <input
              name={opt.toLowerCase()}
              type="checkbox"
              checked={types[i]}
              onChange={e=>{
                let sum=0;
                types.forEach(t => {
                  t && sum++;
                });
                //check if there's only one checkbox left
                if(!(sum===1 && types[i]))
                {
                  let arr = [...types];
                  arr[i]=!types[i];
                  setTypes(arr);
                }
              }}
              />
              <span></span>
            </label>
          ))
        }
      </Options>
    </Wrapper>
  );
};

export default Checkboxes
