import styled from 'styled-components';

const Switch = styled.div`
  display:flex;
  text-transform:uppercase;
  align-items:center;

  button{
    background-color:var(--blue);
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:1;
  }

  button::after{
    content:'';
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


  @media(min-width: 768px)
  {
    font-size:3vw;
    button{
      font-size:5vw;
      border-radius:20px;
      margin: 0 3vw 0 0;
      height:7vw;
      width:7vw;
    }
    button::after
    {
      border-radius:20px;
    }
  }

  @media(min-width: 992px)
  {
    font-size:2vw;
    button{
      font-size:4vw;
      border-radius:20px;
      margin: 0 2vw 0 0;
      height:5vw;
      width:5vw;
    }
    button::after
    {
      border-radius:20px;
    }
  }

  @media(min-width: 1200px)
  {
    font-size:1.7vw;
    button{
      font-size:3vw;
      border-radius:20px;
      margin: 0 1vw 0 0;
      height:4vw;
      width:4vw;
    }
    button::after
    {
      border-radius:20px;
    }
  }

  @media(min-width: 1600px)
  {
    font-size:1.2vw;
    button{
      font-size:2vw;
      border-radius:15px;
      margin: 0 1vw 0 0;
      height:3vw;
      width:3vw;
    }

    button::after
    {
      border-radius:15px;
    }
  }
`;

export default Switch;
