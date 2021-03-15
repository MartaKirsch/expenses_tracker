import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width: 200px)
  {
    margin: 13vw 0 0;
    width:85%;
  }

  @media(min-width: 576px)
  {
    margin: 12vw 0 0;
    width:80%;
  }

  @media(min-width: 768px)
  {
    margin: 10vw 0 0;
    width:65%;
  }

  @media(min-width: 992px)
  {
    margin: 8vw 0 0;
    width:60%;
  }

  @media(min-width: 1200px)
  {
    margin: 6vw 0 0;
    width:80%;
  }

  @media(min-width: 1600px)
  {
    margin: 6vw 0 0;
    width:70%;
  }
`;

export default Wrapper;
