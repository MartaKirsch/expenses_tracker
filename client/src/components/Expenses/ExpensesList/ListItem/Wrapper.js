import styled from 'styled-components';

const Wrapper = styled.div`

  a{
    display:flex;
    background-color:var(--blue);
    height:100%;
    width:100%;
    position:relative;
    z-index:1;
  }

  a::before{
    content:'';
    top:0;
    left:0;
    position:absolute;
    height:100%;
    width:100%;
    -webkit-box-shadow: 10px 10px 27px 0px rgba(28,32,49,1);
    -moz-box-shadow: 10px 10px 27px 0px rgba(28,32,49,1);
    box-shadow: 10px 10px 27px 0px rgba(28,32,49,1);
    opacity:0;
    background-color:#5F6e86;
    transition:opacity .25s ease-out;
    z-index:-1;
  }

  a:hover::before,a:focus::before{
    opacity:1;
  }

  @media(min-width: 200px)
  {
    width:100%;
    margin: 0 0 10vw;

    a{
      border-radius: 20px;
      padding: 5vw 3vw;
      flex-direction:column;
      align-items:center;
    }

    a::before
    {
      border-radius: 20px;
    }
  }

  @media(min-width: 576px)
  {
    width:85%;
    margin: 0 0 7vw;

    a{
      border-radius: 20px;
      padding: 3.5vw 2.5vw;
      flex-direction:column;
      align-items:center;
    }

    a::before
    {
      border-radius: 20px;
    }
  }

  @media(min-width: 768px)
  {
    width:100%;
    margin: 0 0 7vw;

    a{
      border-radius: 20px;
      padding: 1.75vw;
      flex-direction:row;
      align-items:unset;
    }

    a::before
    {
      border-radius: 20px;
    }
  }

  @media(min-width: 992px)
  {
    width:100%;
    margin: 0 0 6vw;

    a{
      border-radius: 20px;
      padding: 1.75vw
    }

    a::before
    {
      border-radius: 20px;
    }
  }

  @media(min-width: 1200px)
  {
    margin: 0 0 4vw;
    width:100%;

    a{
      border-radius: 20px;
      padding: 1.25vw
    }

    a::before
    {
      border-radius: 20px;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 0 0 3vw;
    width:100%;

    a{
      border-radius: 20px;
      padding: 1vw
    }

    a::before
    {
      border-radius: 20px;
    }
  }
`;

export default Wrapper;
