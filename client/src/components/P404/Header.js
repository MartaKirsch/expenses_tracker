import styled from 'styled-components';

const Header = styled.h1`
  border-bottom:2px solid var(--orange);

  @media(min-width: 200px)
  {
    font-size:23vw;
    margin: 0 0 7vw;
  }

  @media(min-width: 576px)
  {
    font-size:18vw;
    margin: 0 0 6vw;
  }

  @media(min-width: 768px)
  {
    font-size:10vw;
    margin: 0 0 4vw;
  }

  @media(min-width: 992px)
  {
    font-size:8vw;
    margin: 0 0 3vw;
  }

  @media(min-width: 1200px)
  {
    font-size:8vw;
    margin: 0 0 3vw;
  }

  @media(min-width: 1600px)
  {
    font-size:7vw;
    margin: 0 0 2vw;
  }
`;

export default Header;
