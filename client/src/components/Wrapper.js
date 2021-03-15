import styled from 'styled-components';

const Wrapper = styled.div`
  margin:auto;
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width: 200px)
  {
    width:100%;
  }

  @media(min-width: 992px)
  {
    width:100%;
  }

  @media(min-width: 1200px)
  {
    width:60%;
  }

  @media(min-width: 1600px)
  {
    width:50%;
  }
`;

export default Wrapper;
