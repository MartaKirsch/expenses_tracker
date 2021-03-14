import styled from 'styled-components';

const Switch = styled.div`
  display:flex;
  text-transform:uppercase;
  align-items:center;
  font-size:1.2vw;

  button{
    background-color:var(--blue);
    font-size:2vw;
    border-radius:15px;
    margin: 0 1vw 0 0;
    height:3vw;
    width:3vw;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:1;
  }

  button::after{
    content:'';
    border-radius:15px;
    height:100%;
    width:100%;
    position:absolute;
    background-color: #5F6e86;
    transform:scale(0);
    transition:transform .3s ease-out;
    z-index:-1;
  }

  button:hover::after, button:focus::after{
    transform:scale(1);
  }
`;

export default Switch;
