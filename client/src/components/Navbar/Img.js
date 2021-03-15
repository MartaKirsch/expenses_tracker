import styled from 'styled-components';
import logo from '../../imgs/circle.png';

const Img = styled.img.attrs({
    src: logo
  })`
  height:auto;
  cursor:pointer;
  transition:transform .5s ease-out;

  &:hover{
    transform-origin:50% 50%;
    transform:scale(1.2);
  }

  @media(min-width: 768px)
  {
    width:69%;
  }

  @media(min-width: 992px)
  {
    width:69%;
  }

  @media(min-width: 1200px)
  {
    width:69%;
  }

  @media(min-width: 1600px)
  {
    width:79%;
  }
`;
export default Img;
