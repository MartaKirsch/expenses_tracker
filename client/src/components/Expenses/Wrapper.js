import styled from 'styled-components';

const Wrapper = styled.div`
  margin:auto;
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width: 768px)
  {
    width:85%;
  }

  @media(min-width: 992px)
  {
    width:70%;
  }

  @media(min-width: 1200px)
  {
    width:55%;
  }

  @media(min-width: 1600px)
  {
    width:50%;
  }
`;

export default Wrapper;
