import styled from 'styled-components';

const Column = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  @media(min-width: 768px)
  {
    width:50%;
  }

  @media(min-width: 992px)
  {
    width:50%;
  }

  @media(min-width: 1200px)
  {
    width:50%;
  }

  @media(min-width: 1600px)
  {
    width:40%;
  }
`;

export default Column;
