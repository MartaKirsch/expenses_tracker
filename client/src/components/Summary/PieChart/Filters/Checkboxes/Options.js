import styled from 'styled-components';

const Options = styled.div`
  position:absolute;
  display: ${({visible})=>visible ? ('flex') : ('none')};
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:var(--blue);

  label{
    width:100%;
    margin:0 !important;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
  }

  input{
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
    background-color:var(--lightGrey);
    position:absolute;
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

  @media(min-width: 200px)
  {
    width:150% !important;
    top:11vw;
    border-radius:20px;

    label{
      font-size:3.8vw;
      padding:3vw 4vw;
    }

    input{
      width:6.5vw;
      height:6.5vw;
      margin:0;
    }

    span{
      width:6.5vw;
      height:6.5vw;
      border-radius:10px;
      right:4vw;
    }
  }

  @media(min-width: 576px)
  {
    width:150% !important;
    top:11vw;
    border-radius:20px;

    label{
      font-size:3.5vw;
      padding:3vw;
    }

    input{
      width:5.5vw;
      height:5.5vw;
      margin:0;
    }

    span{
      width:5.5vw;
      height:5.5vw;
      border-radius:10px;
      right:3vw;
    }
  }

  @media(min-width: 768px)
  {
    width:150% !important;
    top:8vw;
    border-radius:20px;

    label{
      font-size:2.5vw;
      padding:2vw;
    }

    input{
      width:4.5vw;
      height:4.5vw;
      margin:0;
    }

    span{
      width:4.5vw;
      height:4.5vw;
      border-radius:10px;
      right:2vw;
    }
  }

  @media(min-width: 992px)
  {
    width:150% !important;
    top:7vw;
    border-radius:20px;

    label{
      font-size:2vw;
      padding:1.5vw;
    }

    input{
      width:4vw;
      height:4vw;
      margin:0;
    }

    span{
      width:4vw;
      height:4vw;
      border-radius:10px;
      right:1.5vw;
    }
  }

  @media(min-width: 1200px)
  {
    width:150% !important;
    top:5vw;
    border-radius:15px;

    label{
      font-size:1.3vw;
      padding:1.2vw;
    }

    input{
      width:3vw;
      height:3vw;
      margin:0;
    }

    span{
      width:2.5vw;
      height:2.5vw;
      border-radius:10px;
      right:1.2vw;
    }
  }

  @media(min-width: 1600px)
  {
    width:130% !important;
    top:3vw;
    border-radius:15px;

    label{
      font-size:1vw;
      padding:.5vw;
    }

    input{
      width:1.5vw;
      height:1.5vw;
      margin:0;
    }

    span{
      width:1.5vw;
      height:1.5vw;
      border-radius:5px;
      right:.5vw;
    }
  }

`;

export default Options;
