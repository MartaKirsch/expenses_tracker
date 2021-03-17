import transport from 'imgs/car.svg';
import food from 'imgs/food.svg';
import gift from 'imgs/gift.svg';
import restaurants from 'imgs/pizza.svg';
import clothes from 'imgs/tshirt.svg';
import bill from 'imgs/bill.svg';
import home from 'imgs/home.svg';
import other from 'imgs/other.svg'

const resolveStringToImg = (name) => {
  const imgs = {transport,food,gift,restaurants,clothes,bill,home,other};

  return imgs[name];
};

export default resolveStringToImg;
