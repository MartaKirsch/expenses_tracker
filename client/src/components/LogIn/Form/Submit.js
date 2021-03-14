import styled from 'styled-components';

const Submit = styled.input.attrs({
  type: 'submit'
})`
  background-color: var(--orange);
  width:40%;
  text-transform:uppercase;
  font-size:1.2vw;
  height:3vw;
  border-radius:20px;
  cursor:pointer;
  margin: 1vw 0 0 0;

  &:hover, &:focus{
    background-color: var(--darkOrange);
  }
`;

export default Submit;
