import styled from 'styled-components';

const Select = styled.select`
  text-transform:uppercase;
  background-color:var(--blue);
  border-bottom:1px var(--orange) solid;

  @media(min-width: 200px)
  {
    padding:3vw;
    border-radius:20px;
    font-size:4.2vw;
    width:90%;
  }

  @media(min-width: 576px)
  {
    padding:2.75vw;
    border-radius:20px;
    font-size:3.8vw;
    width:80%;
  }

  @media(min-width: 768px)
  {
    padding:1.75vw;
    border-radius:20px;
    font-size:2.8vw;
    width:70%;
  }

  @media(min-width: 992px)
  {
    padding:1.5vw;
    border-radius:20px;
    font-size:2.2vw;
    width:60%;
  }

  @media(min-width: 1200px)
  {
    padding:1vw;
    border-radius:20px;
    font-size:1.7vw;
    width:80%;
  }

  @media(min-width: 1600px)
  {
    padding:.5vw;
    border-radius:15px;
    font-size:1.2vw;
    width:70%;
  }
`;

export default Select;
