import styled from 'styled-components';

const Wrapper = styled.form`
  margin:auto;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  border-top: 1px solid var(--blue);

  @media(min-width: 200px)
  {
    width:90%;
    padding: 8vw 0 0;
  }

  @media(min-width: 576px)
  {
    width:85%;
    padding: 7vw 0 0;
  }

  @media(min-width: 768px)
  {
    width:90%;
    padding: 6vw 0 0;
  }

  @media(min-width: 992px)
  {
    width:80%;
    padding: 4vw 0 0;
  }

  @media(min-width: 1200px)
  {
    padding: 3vw 0 0;
  }

  @media(min-width: 1600px)
  {
    width:70%;
    padding: 2vw 0 0;
  }
`;

export default Wrapper;
