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
    height:32vw;
    padding:2.25vw 0;
    width:38vw;
  }

  @media(min-width: 576px)
  {
    right:5vw;
    height:28vw;
    padding:2vw 0;
    width:34vw;
  }

  @media(min-width: 768px)
  {
    right:5vw;
    height:22vw;
    padding:2vw 0;
    width:28vw;
  }

  @media(min-width: 992px)
  {
    right:4vw;
    height:16vw;
    padding:1vw 0;
    width:25vw;
  }

  @media(min-width: 1200px)
  {
    right:3vw;
    height:11vw;
    padding:.5vw 0;
    width:18vw;
  }

  @media(min-width: 1600px)
  {
    right:2vw;
    height:9vw;
    padding:.5vw 0;
    width:13vw;
  }
`;

export default Wrapper;
