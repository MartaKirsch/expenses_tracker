import styled, {css} from 'styled-components';

const LogOutButton = styled.button`

  background-color:inherit;
  border-radius:20px;
  font-size:1vw;
  text-transform:uppercase;
  border-radius:0;
  padding:0;

  &:hover, &:focus{
    text-decoration:underline;
  }

`;

export default LogOutButton;
