import styled from 'styled-components';

const Options = styled.div`
  width:130% !important;
  position:absolute;
  display: ${({visible})=>visible ? ('flex') : ('none')};
  flex-direction:column;
  align-items:center;
  justify-content:center;
  top:3vw;
  background-color:var(--blue);
  border-radius:15px;

  label{
    width:100%;
    margin:0 !important;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    font-size:1vw;
    padding:.5vw;
  }

  input{
    width:1.5vw;
    height:1.5vw;
    margin:0;
    position:relative;
    z-index:2;
    opacity:0.01;
  }

  input[type="checkbox"]:checked + span {
    background-color:var(--orange);
  }

  input[type="checkbox"]:checked + span::after {
    content:"✓";
  }


  span{
    width:1.5vw;
    height:1.5vw;
    border-radius:5px;
    background-color:var(--lightGrey);
    position:absolute;
    right:.5vw;
  }

  span::after{
    width:100%;
    height:100%;
    position:absolute;
    content:'';
    display:flex;
    justify-content:center;
    align-items:center;
  }

`;

export default Options;
