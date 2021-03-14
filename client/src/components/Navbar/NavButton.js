import styled from 'styled-components';

const NavButton = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:0 2vw;
  font-size:1.5vw;
  position:relative;

  a{
   position:relative;
  }

  a::before{
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    height: 3px;
    width: 100%;
    background-color: #EF8354;
    opacity:0;
    transform: scaleX(0);
    /* transition: transform .3s ease-in-out,opacity .3s ease-in-out; */
    transition: transform .3s ease-in-out;
  }

  a:hover::before, a:focus::before{
    opacity:1;
    transform:scaleX(1);
  }

`;

export default NavButton;
