import styled from 'styled-components';

const DeleteOpts = styled.div`
  display:none;
  justify-content:space-between;

  button:first-child{
    background-color:var(--orange);
    color:white;
  }

  button:first-child::after{
    background-color:var(--darkOrange);
  }

  button::after{
    content:'';
    background-color:#eee;
    position:absolute;
    height:100%;
    width:100%;
    border-radius:20px;
    top:0;
    left:-100%;
    z-index:-1;
    transition:transform .2s ease-out;
  }

  button{
    background-color:white;
    color:var(--orange);
    overflow:hidden;
    position:relative;
    z-index:1;
  }

  button:hover::after,button:focus::after{
    transform:translateX(100%);
  }

  &.visible{
    display:flex;
  }

  @media(min-width: 768px)
  {
    margin: 0 0 6vw;
    width:50%;
    button
    {
      font-size:3vw;
      padding:2vw;
      border-radius:25px;
    }
  }

  @media(min-width: 992px)
  {
    margin: 0 0 4vw;
    width:40%;
    button
    {
      font-size:2.5vw;
      padding:1.5vw;
      border-radius:25px;
    }
  }

  @media(min-width: 1200px)
  {
    margin: 0 0 4vw;
    width:40%;
    button
    {
      font-size:1.7vw;
      padding:1vw;
      border-radius:20px;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 0 0 3vw;
    width:30%;

    button
    {
      font-size:1.2vw;
    }
  }

`;

export default DeleteOpts;
