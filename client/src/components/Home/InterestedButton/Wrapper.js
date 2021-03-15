import styled from 'styled-components';

// #4F5D75;
// #EF8354;
// #3e4c64;
const Wrapper = styled.div`
  background-color: #EF8354;
  text-transform:uppercase;
  border-radius:20px;
  border: 3px solid #4F5D75;
  position:relative;
  overflow:hidden;
  text-align:center;

  a{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    width:100%;
    position:absolute;
    z-index:1;
  }

  a::before{
    content:'';
    border-radius:15px;
    height:100%;
    width:100%;
    background-color: #de7243;
    position:absolute;
    z-index:-1;
    left:-100%;
    transition: transform .5s ease-out;
  }

  a:hover::before, a:focus::before {
    transform:translateX(100%);
  }

  @media(min-width: 768px)
  {
    margin: 3vw 0 7vw;
    height:11vw;
    width:58%;
    font-size:3.4vw;
  }

  @media(min-width: 992px)
  {
    margin: 3vw 0 3.5vw;
    height:8vw;
    width:58%;
    font-size:3vw;
  }

  @media(min-width: 1200px)
  {
    margin: 3vw 0 3.5vw;
    height:6vw;
    width:70%;
    font-size:2vw;
  }

  @media(min-width: 1600px)
  {
    margin: 2.5vw 0 3vw;
    height:5vw;
    width:60%;
    font-size:1.5vw;
  }
`;

export default Wrapper;
