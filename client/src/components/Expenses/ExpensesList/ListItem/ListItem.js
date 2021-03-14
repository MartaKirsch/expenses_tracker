import Wrapper from 'components/Expenses/ExpensesList/ListItem/Wrapper';
import Icon from 'components/Expenses/ExpensesList/ListItem/Icon';
import ExpenseInfo from 'components/Expenses/ExpensesList/ListItem/ExpenseInfo';
import DatePrice from 'components/Expenses/ExpensesList/ListItem/DatePrice';
import resolveStringToImg from 'utils/resolveStringToImg';
import { Link } from 'react-router-dom';

const ListItem = ({_id,type, title, shop, date, price}) => {
  const dateReg = /\d{4}-\d{2}-\d{2}/;
  return(
    <Wrapper type="button">
      <Link to={`/update-expense/${_id}`}>
        <Icon>
          <img src={resolveStringToImg(type)} alt=""/>
        </Icon>
        <ExpenseInfo>
          <div className="title">{title}</div>
          <div className="shop">{shop}</div>
        </ExpenseInfo>
        <DatePrice>
          <div className="date">{date.match(dateReg)}</div>
          <div className="price">{price}</div>
        </DatePrice>
      </Link>
    </Wrapper>
  )
};

export default ListItem;
