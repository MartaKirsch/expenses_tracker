import styled from 'styled-components';

const AddExpenseButton = styled.div`
  width:20vw;
  height:3.5vw;
  border-radius:20px;
  overflow:hidden;
  margin: 0 0 2vw;

  a{
    height:100%;
    width:100%;
    background-color:var(--orange);
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.5vw;
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

`;

export default AddExpenseButton;
