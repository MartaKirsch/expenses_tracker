import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size:1.5vw;
  text-transform:uppercase;
  background-color: ${props => props.delete ? ('var(--red)') : ('var(--orange)')};
  padding: 0.8vw 1.5vw;
  border-radius:20px;
  z-index:1;
  position:relative;
  overflow:hidden;

  ${props => props.disabled ? (css`
      background-color:var(--lightGrey);
    `) : (`
      &::before{
        content:'';
        background-color:var(--darkOrange);
        border-radius:20px;
        height:100%;
        width:100%;
        left:0;
        top:0;
        position:absolute;
        left:-100%;
        z-index:-1;
        transition:transform .5s ease-out;
      }

      &:hover::before, &:focus::before{
        transform:translateX(100%);
      }
    `)}

  ${props => props.delete ? (css`
      margin-bottom:2vw;
    `) : (``)}


`;

export default Button;
