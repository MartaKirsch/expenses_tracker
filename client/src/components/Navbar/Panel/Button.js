import styled, {css} from 'styled-components';

const Button = styled.div`

  background-color:#E26630;
  border-radius:20px;
  overflow:hidden;
  height:3vw;
  width:80%;

  a{
    font-size:1.25vw;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    width:100%;
    position:relative;
    z-index:1;
  }

  a::before{
    content:none;
  }

  a::after{
    display:inline-block;
    content:'';
    border-radius:20px;
    width:100%;
    height:100%;
    background-color: #4F5D75;
    position:absolute;
    z-index:-1;
    left:-100%;
    transition: transform .4s ease-out;
  }

  a:hover::after, a:focus::after{
    transform:translateX(100%);
  }

`;

export default Button;
