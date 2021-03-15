import styled from 'styled-components';

const Nav = styled.nav`
  /* border-bottom:1px solid white; */
  display:flex;
  justify-content:flex-end;
  position: sticky;
  position: -webkit-sticky;
  top:0;
  z-index: 1000;
  background-color: #2D3142;

  @media(min-width: 200px)
  {
    height:17vw;
    margin:0 0 9vw 0;
  }


  @media(min-width: 576px)
  {
    height:16vw;
    margin:0 0 8vw 0;
  }

  @media(min-width: 768px)
  {
    height:10vw;
    margin:0 0 8vw 0;
  }

  @media(min-width: 992px)
  {
    height:7vw;
    margin:0 0 5vw 0;
  }

  @media(min-width: 1200px)
  {
    height:5vw;
    margin:0 0 3vw 0;
  }

  @media(min-width: 1600px)
  {
    height:4vw;
    margin:0 0 2vw 0;
  }
`;

export default Nav;
