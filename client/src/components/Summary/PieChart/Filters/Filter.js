import styled from 'styled-components';

const Filter = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-grow:0;
  width:42%;
  margin: ${ (props) => props.bar ? ('0') : ('0 0 2vw') };


  &:last-child{
    margin:0;
  }


  input, select{
    background-color:var(--blue);
    font-size:1vw;
    padding:.5vw;
    border-bottom:1px var(--orange) solid;
    border-radius:10px;
    font-size:1vw;
    width:60%;
  }
  input:focus, select:focus, button:focus{
    background-color:var(--lighter-blue);
  }

  label{
    text-transform:uppercase;
    font-size:1.2vw;
    margin:0 1vw 0 0;
  }
  div{
    width:60%;
  }
`;

export default Filter;
