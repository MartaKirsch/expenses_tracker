import styled from 'styled-components';

const InfoBox = styled.div`
  background-color:var(--blue);
  width:80%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:2vw;
  font-size:1.3vw;
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
`;

export default InfoBox;
