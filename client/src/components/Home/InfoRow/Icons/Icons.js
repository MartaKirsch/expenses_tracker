import Wrapper from 'components/Home/InfoRow/Icons/Wrapper';
import car from 'imgs/car.png';
import pizza from 'imgs/pizza.png';
import tshirt from 'imgs/tshirt.png';
import food from 'imgs/food.png';
import gift from 'imgs/gift.png';


const Icons = () => {
  return(
    <Wrapper>
      <img src={food} alt=""/>
      <img src={car} alt=""/>
      <img src={tshirt} alt=""/>
      <img src={pizza} alt=""/>
      <img src={gift} alt=""/>
    </Wrapper>
  )
};

export default Icons;
