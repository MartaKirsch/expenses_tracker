import styled from 'styled-components';

const FormWrapper = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width: 200px)
  {
    margin:0;
    width:80%;
  }

  @media(min-width: 576px)
  {
    width:70%;
  }

  @media(min-width: 768px)
  {
    width:60%;
  }

  @media(min-width: 922px)
  {
    margin: 4vw 0 0 0;
  }

  @media(min-width: 1200px)
  {
    margin: 3vw 0 0 0;
    width:80%;
  }

  @media(min-width: 1600px)
  {
    width:70%;
    margin: 2vw 0 0 0;
  }
`;

export default FormWrapper;
