import styled, { css } from 'styled-components';

const Button = styled.button`
  text-transform:uppercase;
  background-color: ${props => props.delete ? ('var(--red)') : ('var(--orange)')};
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


    @media(min-width: 200px)
    {
      padding: 2.75vw 3.25vw;
      font-size:4.5vw;
      ${props => props.delete ? (css`
          margin-bottom:10vw;
        `) : (``)}
    }

    @media(min-width: 576px)
    {
      padding: 2.5vw 3vw;
      font-size:4vw;
      ${props => props.delete ? (css`
          margin-bottom:10vw;
        `) : (``)}
    }

    @media(min-width: 768px)
    {
      padding: 2vw 2.5vw;
      font-size:3vw;
      ${props => props.delete ? (css`
          margin-bottom:6vw;
        `) : (``)}
    }

    @media(min-width: 992px)
    {
      padding: 1.5vw 2vw;
      font-size:2.2vw;
      ${props => props.delete ? (css`
          margin-bottom:4vw;
        `) : (``)}
    }

    @media(min-width: 1200px)
    {
      padding: 1vw 1.8vw;
      font-size:1.7vw;
      ${props => props.delete ? (css`
          margin-bottom:4vw;
        `) : (``)}
    }

    @media(min-width: 1600px)
    {
      padding: 0.8vw 1.5vw;
      font-size:1.5vw;
      ${props => props.delete ? (css`
          margin-bottom:2vw;
        `) : (``)}
    }
`;

export default Button;
