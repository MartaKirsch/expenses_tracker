import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
  width:100%;

  @media(min-width: 768px)
  {
    margin:6vw 0 8vw;
  }

  @media(min-width: 992px)
  {
    margin:6vw 0;
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
