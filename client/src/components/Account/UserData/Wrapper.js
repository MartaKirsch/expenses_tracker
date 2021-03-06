import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width: 200px)
  {
    width:50%;
  }

  @media(min-width: 768px)
  {
    width:50%;
  }

  @media(min-width: 992px)
  {
    width:50%;
  }

`;

export default Wrapper;
