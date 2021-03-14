import styled from 'styled-components';
import logo from '../../imgs/circle.png';

const Img = styled.img.attrs({
    src: logo
  })`
  height:auto;
  width:79%;
  cursor:pointer;
  transition:transform .5s ease-out;

  &:hover{
    transform-origin:50% 50%;
    transform:scale(1.2);
  }
`;
export default Img;
