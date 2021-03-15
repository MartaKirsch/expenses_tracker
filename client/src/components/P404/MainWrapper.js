import styled from 'styled-components';

const MainWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;

  svg{
    height:auto;
  }

  @media(min-width: 768px)
  {
    width:80%;
    margin: 4vw 0 0;

    svg
    {
      width:36%;
    }
  }

  @media(min-width: 992px)
  {
    width:70%;
    margin: 4vw 0 0;

    svg
    {
      width:35%;
    }
  }

  @media(min-width: 1200px)
  {
    width:100%;
    margin: 4vw 0 0;

    svg
    {
      width:35%;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 4vw 0 0;

    svg
    {
      width:30%;
    }
  }
`;

export default MainWrapper;
