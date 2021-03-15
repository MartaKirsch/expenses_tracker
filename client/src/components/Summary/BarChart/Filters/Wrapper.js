import styled from 'styled-components';

const Wrapper = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;

  @media(min-width: 200px)
  {
    margin:10vw 0 12vw;
    flex-wrap:wrap;
  }

  @media(min-width: 576px)
  {
    margin:8vw 0 10vw;
  }

  @media(min-width: 768px)
  {
    margin:6vw 0 8vw;
  }

  @media(min-width: 992px)
  {
    margin:6vw 0;
    flex-wrap:no-wrap;
  }

  @media(min-width: 1200px)
  {
    margin:4vw 0;
  }

  @media(min-width: 1600px)
  {
    margin:3vw 0;
  }
`;

export default Wrapper;
