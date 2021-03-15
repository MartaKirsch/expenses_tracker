import styled, {css} from 'styled-components';

const LogOutButton = styled.button`

  background-color:inherit;
  border-radius:20px;
  text-transform:uppercase;
  border-radius:0;
  padding:0;

  &:hover, &:focus{
    text-decoration:underline;
  }

  @media(min-width: 200px)
  {
    font-size:2.5vw;
  }

  @media(min-width: 576px)
  {
    font-size:2.5vw;
  }

  @media(min-width: 768px)
  {
    font-size:2vw;
  }

  @media(min-width: 992px)
  {
    font-size:1.5vw;
  }

  @media(min-width: 1200px)
  {
    font-size:1.25vw;
  }

  @media(min-width: 1600px)
  {
    font-size:1vw;
  }

`;

export default LogOutButton;
