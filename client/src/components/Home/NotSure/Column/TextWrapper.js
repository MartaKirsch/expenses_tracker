import styled from 'styled-components';

const TextWrapper = styled.div`
  background-color: #4F5D75;
  text-align:justify;
  border-radius:20px;
  position:relative;
  z-index:1;
  cursor:default;

  &::before{
    content:'';
    border-radius:20px;
    top:0;
    left:0;
    position:absolute;
    height:100%;
    width:100%;
    -webkit-box-shadow: 10px 10px 27px 0px rgba(28,32,49,1);
    -moz-box-shadow: 10px 10px 27px 0px rgba(28,32,49,1);
    box-shadow: 10px 10px 27px 0px rgba(28,32,49,1);
    opacity:0;
    background-color:#5F6e86;
    transition:opacity .25s ease-out;
    z-index:-1;
  }

  &:hover::before{
    opacity:1;
  }

  @media(min-width: 200px)
  {
    padding:3vw;
    font-size:3vw;
  }

  @media(min-width: 576px)
  {
    padding:3vw;
    font-size:3vw;
  }

  @media(min-width: 768px)
  {
    padding:2.25vw;
    font-size:2.3vw;
  }

  @media(min-width: 992px)
  {
    padding:1.9vw;
    font-size:1.8vw;
  }

  @media(min-width: 1200px)
  {
    padding:1.4vw;
    font-size:1.5vw;
  }

  @media(min-width: 1600px)
  {
    padding:1vw;
    font-size:1vw;
  }

`;

export default TextWrapper;
