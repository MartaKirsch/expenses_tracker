import { useContext } from 'react';
import Wrapper from 'components/Expenses/ExpensesList/Wrapper';
import ListItem from 'components/Expenses/ExpensesList/ListItem/ListItem';
import Context from 'components/Expenses/Main/Context.js';
import food from 'imgs/food.svg';
import car from 'imgs/car.svg';
import gift from 'imgs/gift.svg';

const ExpensesList = () => {

  const {expenses, err, isPending} = useContext(Context);

  const noExpensesMssg = expenses && !expenses.length ? (<h1>No expenses yet!</h1>) : ("");

  return(
    <Wrapper>
      {isPending && <h1>Loading expenses...</h1>}
      {err && <h1>Cannot load expenses!</h1>}
      {expenses && expenses.map(expense=>(
        <ListItem key={expense._id} {...expense}/>
      ))}
      {noExpensesMssg}
    </Wrapper>
  )
};

export default ExpensesList;
