import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;

  @media(min-width: 768px)
  {
    margin: 7vw 0 10vw;
  }

  @media(min-width: 992px)
  {
    margin: 3vw 0 5vw;
  }

  @media(min-width: 1200px)
  {
    margin: 3vw 0 4vw;
  }

  @media(min-width: 1600px)
  {
    margin: 2vw 0 3vw;
  }
`;

export default Wrapper;
