import styled from 'styled-components';

const Icon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:var(--lightGrey);

  img{
    width:100%;
    height:auto;
  }

  @media(min-width: 200px)
  {
    border-radius: 10px;
    width:23vw;
    height:23vw;
  }

  @media(min-width: 576px)
  {
    border-radius: 10px;
    width:20vw;
    height:20vw;
  }

  @media(min-width: 768px)
  {
    border-radius: 10px;
    width:12.5vw;
    height:12.5vw;
  }

  @media(min-width: 992px)
  {
    border-radius: 10px;
    width:9.5vw;
    height:9.5vw;
  }

  @media(min-width: 1200px)
  {
    border-radius: 10px;
    width:7.5vw;
    height:7.5vw;
  }

  @media(min-width: 1600px)
  {
    border-radius: 10px;
    width:6vw;
    height:6vw;
  }
`;

export default Icon;
