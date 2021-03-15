import styled from 'styled-components';

const Header = styled.h1`
  text-transform:uppercase;
  align-self:flex-start;
  font-weight:normal;
  margin:0;

  @media(min-width: 200px)
  {
    font-size:5vw;
  }

  @media(min-width: 576px)
  {
    font-size:4vw;
  }

  @media(min-width: 768px)
  {
    font-size:3.5vw;
  }

  @media(min-width: 992px)
  {
    font-size:3vw;
  }

  @media(min-width: 1200px)
  {
    font-size:2vw;
  }

  @media(min-width: 1600px)
  {
    font-size:1.5vw;
  }
`;

export default Header;
