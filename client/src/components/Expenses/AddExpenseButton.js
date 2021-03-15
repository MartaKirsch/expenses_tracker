import styled from 'styled-components';

const AddExpenseButton = styled.div`
  border-radius:20px;
  overflow:hidden;

  a{
    height:100%;
    width:100%;
    background-color:var(--orange);
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:normal;
    border-radius:20px;
    position:relative;
    z-index:1;
  }

  a::before{
    content:'';
    height:100%;
    width:100%;
    position:absolute;
    left:-100%;
    border-radius:20px;
    background-color:var(--darkOrange);
    transition:transform .5s ease-out;
    z-index:-1;
  }

  a:hover::before,a:focus::before{
    transform:translateX(100%);
  }

  @media(min-width: 200px)
  {
    width:60vw;
    height:12vw;
    margin: 0 0 8vw;
    font-size:5vw;
  }

  @media(min-width: 576px)
  {
    width:52vw;
    height:10vw;
    margin: 0 0 7vw;
    font-size:4vw;
  }

  @media(min-width: 768px)
  {
    width:48vw;
    height:8vw;
    margin: 0 0 6vw;
    font-size:3.8vw;
  }

  @media(min-width: 992px)
  {
    width:40vw;
    height:6vw;
    margin: 0 0 4vw;
    font-size:3vw;
  }

  @media(min-width: 1200px)
  {
    width:25vw;
    height:4.5vw;
    margin: 0 0 3vw;
    font-size:2vw;
  }

  @media(min-width: 1600px)
  {
    width:20vw;
    height:3.5vw;
    margin: 0 0 2vw;
    font-size:1.5vw;
  }

`;

export default AddExpenseButton;
