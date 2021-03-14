import styled from 'styled-components';

const DeleteOpts = styled.div`
  display:none;
  width:30%;
  justify-content:space-between;
  margin: 0 0 3vw;

  button:first-child{
    background-color:var(--orange);
    color:white;
  }

  button:first-child::after{
    background-color:var(--darkOrange);
  }

  button::after{
    content:'';
    background-color:#eee;
    position:absolute;
    height:100%;
    width:100%;
    border-radius:20px;
    top:0;
    left:-100%;
    z-index:-1;
    transition:transform .2s ease-out;
  }

  button{
    background-color:white;
    color:var(--orange);
    font-size:1.2vw;
    padding:1vw;
    border-radius:20px;
    overflow:hidden;
    position:relative;
    z-index:1;
  }

  button:hover::after,button:focus::after{
    transform:translateX(100%);
  }

  &.visible{
    display:flex;
  }

`;

export default DeleteOpts;
