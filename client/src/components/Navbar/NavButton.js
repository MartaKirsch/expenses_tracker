import styled from 'styled-components';

const NavButton = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
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
    transition: transform .3s ease-in-out;
  }

  a:hover::before, a:focus::before{
    opacity:1;
    transform:scaleX(1);
  }


  @media(min-width: 768px)
  {
    padding:0 3.25vw;
    font-size:3.2vw;
  }

  @media(min-width: 992px)
  {
    padding:0 3vw;
    font-size:2.8vw;
  }

  @media(min-width: 1200px)
  {
    padding:0 2vw;
    font-size:2vw;
  }

  @media(min-width: 1600px)
  {
    padding:0 2vw;
    font-size:1.5vw;
  }
`;

export default NavButton;
