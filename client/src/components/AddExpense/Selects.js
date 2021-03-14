import styled from 'styled-components';

const Selects = styled.div`
  width:100%;
  display:flex;
  justify-content:space-around;
  margin:0 0 4vw;

  select,input{
    background-color:var(--blue);
    font-family:inherit;
    font-size:1.25vw;
    padding:.5vw;
    border-radius:15px;
    border: ${({typeErr}) => typeErr ? ("2px solid var(--orange)") : ("none")};
  }

  input:invalid{
    border:2px solid var(--orange);
    outline: none;
  }

`;

export default Selects;
