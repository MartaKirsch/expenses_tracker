import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text'
})`
  background-color: var(--blue);
  height:4vw;
  border-radius:15px;
  padding:1vw;
  font-size:1.5vw;
  width:90%;
  border-bottom: 2px solid var(--orange);

  &:focus{
    background-color: var(--lighter-blue);
  }

  &::placeholder {
    color: #C4C4C4;
  }
`;

export default Input;
