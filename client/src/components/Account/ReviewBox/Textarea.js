import styled from 'styled-components';

const Textarea = styled.textarea`
  font-size:1vw;
  border-radius:20px;
  width:100%;
  max-width:100%;
  min-height:10vw;
  max-height:20vw;
  text-align:justify;
  padding:1vw;
  background-color:var(--blue);
  margin: 1vw 0 0;
  border:none;
  outline:none;
  color:white;
  font-family:inherit;

  &::placeholder{
    color:var(--lightGrey);
  }
`;

export default Textarea;
