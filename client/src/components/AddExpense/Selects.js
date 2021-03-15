import styled from 'styled-components';

const Selects = styled.div`
  display:flex;
  justify-content:space-around;

  select,input{
    background-color:var(--blue);
    font-family:inherit;
    border: ${({typeErr}) => typeErr ? ("2px solid var(--orange)") : ("none")};
  }

  input:invalid{
    border:2px solid var(--orange);
    outline: none;
  }

  @media(min-width: 200px)
  {
    width:90%;
    margin:0 0 12vw;
    select,input{
      font-size:4vw;
      padding:2vw;
      border-radius:15px;
    }
  }

  @media(min-width: 576px)
  {
    width:90%;
    margin:0 0 12vw;
    select,input{
      font-size:3.6vw;
      padding:1.5vw;
      border-radius:15px;
    }
  }

  @media(min-width: 768px)
  {
    width:80%;
    margin:0 0 8vw;
    select,input{
      font-size:2.6vw;
      padding:1.5vw;
      border-radius:15px;
    }
  }

  @media(min-width: 992px)
  {
    width:70%;
    margin:0 0 5vw;
    select,input{
      font-size:2.25vw;
      padding:1.25vw;
      border-radius:15px;
    }
  }

  @media(min-width: 1200px)
  {
    width:100%;
    margin:0 0 5vw;
    select,input{
      font-size:1.75vw;
      padding:1vw;
      border-radius:15px;
    }
  }

  @media(min-width: 1600px)
  {
    width:50%;

    select,input{
      font-size:1.25vw;
      padding:.5vw;
      border-radius:15px;
    }
  }

`;

export default Selects;
