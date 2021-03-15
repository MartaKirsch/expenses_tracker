import styled from 'styled-components';

const UserIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:var(--blue);
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
    height:auto;
  }

  @media(min-width: 200px)
  {
    width:60%;
    padding:4vw;

    img {
      width:25vw;
    }
  }


  @media(min-width: 576px)
  {
    img {
      width:23vw;
    }
  }

  @media(min-width: 768px)
  {
    img {
      width:17vw;
    }
  }

  @media(min-width: 992px)
  {
    width:50%;

    img {
      width:14vw;
    }
  }

  @media(min-width: 1200px)
  {
    padding:2vw;

    img {
      width:10vw;
    }
  }

  @media(min-width: 1600px)
  {
    width:40%;
    padding:1vw;

    img {
      width:8vw;
    }
  }
`;

export default UserIcon;
