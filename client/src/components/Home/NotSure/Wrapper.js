import styled from 'styled-components';

const Wrapper = styled.div`
  width:90%;
  display:flex;
  justify-content:space-around;
  align-items:flex-end;
  position:relative;
  margin: 0 0 2vw 0;

  &::before{
    content:'';
    height:1px;
    width:110%;
    position:absolute;
    top:0;
    left:-5%;
    background-color: #4F5D75;
  }

  svg{
    width:20%;
    height:auto;
    overflow:visible;
  }
`;

export default Wrapper;
