import styled from 'styled-components';

// #4F5D75;
// #EF8354;
// #3e4c64;
const Wrapper = styled.div`
  margin: 2.5vw 0 3vw;
  height:5vw;
  width:60%;
  background-color: #EF8354;
  font-size:1.5vw;
  text-transform:uppercase;
  border-radius:20px;
  border: 3px solid #4F5D75;
  position:relative;
  overflow:hidden;

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
`;

export default Wrapper;
