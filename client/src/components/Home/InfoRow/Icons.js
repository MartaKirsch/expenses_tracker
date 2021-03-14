import styled from 'styled-components';
import car from 'imgs/car.png';
import pizza from 'imgs/pizza.png';
import tshirt from 'imgs/tshirt.png';
import food from 'imgs/food.png';
import gift from 'imgs/gift.png';

const Wrapper = styled.div`
  img{
    width:3vw;
    height:auto;
  }

  padding:.75vw 0;
  display:flex;
  justify-content:space-around;
`;

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
