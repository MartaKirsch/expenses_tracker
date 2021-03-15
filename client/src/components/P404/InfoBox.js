import styled from 'styled-components';

const InfoBox = styled.div`
  background-color:var(--blue);
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:20px;
  position:relative;
  z-index:1;
  cursor:default;

  &::before{
    content:'';
    border-radius:20px;
    top:0;
    left:0;
    position:absolute;
    height:100%;
    width:100%;
    -webkit-box-shadow: 10px 10px 27px 0px rgba(28,32,49,1);
    -moz-box-shadow: 10px 10px 27px 0px rgba(28,32,49,1);
    box-shadow: 10px 10px 27px 0px rgba(28,32,49,1);
    opacity:0;
    background-color:#5F6e86;
    transition:opacity .25s ease-out;
    z-index:-1;
  }

  &:hover::before{
    opacity:1;
  }

  @media(min-width: 200px)
  {
    padding:4.5vw;
    font-size:4vw;
    width:100%;
    margin: 0 0 10vw;
  }

  @media(min-width: 576px)
  {
    padding:4vw;
    font-size:3.5vw;
    width:100%;
    margin: 0 0 6vw;
  }

  @media(min-width: 768px)
  {
    margin:0;
    padding:2.5vw;
    font-size:2.5vw;
    width:80%;
  }

  @media(min-width: 992px)
  {
    padding:2.5vw;
    font-size:1.8vw;
    width:80%;
  }

  @media(min-width: 1200px)
  {
    padding:2.5vw;
    font-size:1.8vw;
    width:80%;
  }

  @media(min-width: 1600px)
  {
    padding:2vw;
    font-size:1.3vw;
    width:80%;
  }
`;

export default InfoBox;
