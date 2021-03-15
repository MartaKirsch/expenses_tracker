import styled from 'styled-components';

const Wrapper = styled.div`
  background-color:#4F5D75;
  display:flex;
  flex-direction:column;
  border-radius:15px;
  position:relative;
  z-index:1;
  cursor:default;

  &::before{
    content:'';
    border-radius:15px;
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
    width:90%;
    padding:4.25vw;
    margin: 0 0 12vw;
  }

  @media(min-width: 576px)
  {
    width:80%;
    padding:4vw;
    margin: 0 0 10vw;
  }

  @media(min-width: 768px)
  {
    width:60%;
    padding:2.5vw;
    margin: 0 0 7vw;
  }

  @media(min-width: 992px)
  {
    width:45%;
    padding:2vw;
    margin: 0 0 4vw;
  }

  @media(min-width: 1200px)
  {
    margin:0;
    width:45%;
    padding:1.5vw;
  }

  @media(min-width: 1600px)
  {
    width:45%;
    padding:1.25vw;
  }
`;

export default Wrapper;
