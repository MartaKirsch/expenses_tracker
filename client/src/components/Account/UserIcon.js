import styled from 'styled-components';

const UserIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:var(--blue);
  width:40%;
  padding:1vw;
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

  img {
    width:8vw;
    height:auto;
  }
`;

export default UserIcon;
