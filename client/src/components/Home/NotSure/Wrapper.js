import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:flex-end;
  position:relative;
  margin: 0 0 2vw 0;

  &::before{
    content:'';
    height:1px;
    position:absolute;
    top:0;
    background-color: #4F5D75;
  }

  svg{
    height:auto;
    overflow:visible;
  }

  @media(min-width: 200px)
  {
    width:90%;

    &::before
    {
      width:100%;
    }

    svg{
      width:30%;
    }
  }

  @media(min-width: 576px)
  {
    width:90%;

    &::before
    {
      width:100%;
    }

    svg{
      width:30%;
    }
  }


  @media(min-width: 768px)
  {
    width:80%;

    &::before
    {
      left:5%;
      width:90%;
    }

    svg{
      width:25%;
    }
  }

  @media(min-width: 992px)
  {
    width:80%;

    &::before
    {
      left:5%;
      width:90%;
    }

    svg{
      width:22%;
    }
  }

  @media(min-width: 1200px)
  {
    width:90%;

    &::before
    {
      left:-5%;
      width:110%;
    }

    svg{
      width:27%;
    }
  }

  @media(min-width: 1600px)
  {
    svg{
      width:20%;
    }
  }
`;

export default Wrapper;
