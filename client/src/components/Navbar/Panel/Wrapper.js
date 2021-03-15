import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  background-color:#EF8354;
  position:absolute;
  top:100%;
  border-radius:15px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
  visibility:hidden;

  ${({isVisible})=> isVisible && (
    css`
      visibility:visible;
    `
  )}

  @media(min-width: 200px)
  {
    right:5vw;
    height:39vw;
    padding:2.25vw 0;
    width:38vw;
  }

  @media(min-width: 576px)
  {
    right:5vw;
    height:35vw;
    padding:2vw 0;
    width:34vw;
  }

  @media(min-width: 768px)
  {
    right:5vw;
    height:29vw;
    padding:2vw 0;
    width:28vw;
  }

  @media(min-width: 992px)
  {
    right:4vw;
    height:24vw;
    padding:1vw 0;
    width:25vw;
  }

  @media(min-width: 1200px)
  {
    right:3vw;
    height:17vw;
    padding:.5vw 0;
    width:18vw;
  }

  @media(min-width: 1600px)
  {
    right:2vw;
    height:12vw;
    padding:.5vw 0;
    width:13vw;
  }
`;

export default Wrapper;
