import styled from 'styled-components';

const Button = styled.button`
  width:100%;
  font-size:inherit;
  background-color:var(--blue);
  text-transform:uppercase;
  border-bottom:1px var(--orange) solid;

  @media(min-width: 200px)
  {
    border-radius:20px;
    font-size:4.3vw;
    padding:2vw;
  }

  @media(min-width: 576px)
  {
    border-radius:20px;
    font-size:4vw;
    padding:1.7vw;
  }

  @media(min-width: 768px)
  {
    border-radius:20px;
    font-size:2.7vw;
    padding:1.2vw;
  }

  @media(min-width: 992px)
  {
    border-radius:20px;
    font-size:2vw;
    padding:1.2vw;
  }

  @media(min-width: 1200px)
  {
    border-radius:15px;
    font-size:1.5vw;
    padding:1vw;
  }

  @media(min-width: 1600px)
  {
    font-size:1.6vw;
    padding:.5vw;
  }
`;

export default Button;
