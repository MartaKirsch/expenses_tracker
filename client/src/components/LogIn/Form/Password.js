import styled from 'styled-components';

const Password = styled.input.attrs({
  type: 'password'
})`
  background-color: var(--blue);
  height:4vw;
  border-radius:15px;
  padding:1vw;
  font-size:1.5vw;
  width:90%;
  position:relative;
  z-index:1;
  border-bottom: 2px solid var(--orange);

  &:focus{
    background-color: var(--lighter-blue);
  }

  &::placeholder {
    color: #C4C4C4;
  }
`;

export default Password;
