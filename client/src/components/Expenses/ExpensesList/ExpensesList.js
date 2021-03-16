import { useContext, useEffect, useRef } from 'react';
import Wrapper from 'components/Expenses/ExpensesList/Wrapper';
import ListItem from 'components/Expenses/ExpensesList/ListItem/ListItem';
import Context from 'components/Expenses/Main/Context.js';
import food from 'imgs/food.svg';
import car from 'imgs/car.svg';
import gift from 'imgs/gift.svg';

const ExpensesList = () => {

  const {expenses, err, isPending, setHowManyExpenses, setIsUpdate} = useContext(Context);

  const noExpensesMssg = expenses && !expenses.length ? (<h1>No expenses yet!</h1>) : ("");

  const listRef = useRef(null);

  const handleScroll = e => {
    //get the document height
    var docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;

    //check if it's already bottom
    if(window.innerHeight + window.pageYOffset == docHeight)
    {
      //load
      setIsUpdate(true);
      setHowManyExpenses(listRef.current.childNodes.length);
    }
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return ()=>window.removeEventListener('scroll', handleScroll)
  },[]);

  return(
    <Wrapper>

      <div className="list" ref={listRef}>
        {expenses && expenses.map(expense=>(
          <ListItem key={expense._id} {...expense}/>
        ))}
      </div>
      {isPending && <h1>Loading expenses...</h1>}
      {err && <h1>Cannot load expenses!</h1>}
      {noExpensesMssg}
    </Wrapper>
  )
};

export default ExpensesList;
