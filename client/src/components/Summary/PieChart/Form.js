import styled from 'styled-components';

const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width: 768px)
  {
    width:70%;
  }

  @media(min-width: 992px)
  {
    width:70%;
  }

  @media(min-width: 1200px)
  {
    width:90%;
  }

  @media(min-width: 1600px)
  {
    width:70%;
  }
`;

export default Form;
