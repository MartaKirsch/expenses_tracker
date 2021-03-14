import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  height:12vw;
  padding:.5vw 0;
  width:13vw;
  background-color:#EF8354;
  position:absolute;
  top:100%;
  right:2vw;
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
`;

export default Wrapper;
