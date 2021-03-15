import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;

  @media(min-width: 200px)
  {
    width:55%;
  }

  @media(min-width: 576px)
  {
    width:55%;
  }

  @media(min-width: 768px)
  {
    width:50%;
  }

  @media(min-width: 992px)
  {
    width:40%;
  }

  @media(min-width: 1200px)
  {
    width:45%;
  }

  @media(min-width: 1600px)
  {
    width:40%;
  }
`;

export default Wrapper;
