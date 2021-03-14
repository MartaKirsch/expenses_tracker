import styled from 'styled-components';

const Wrapper = styled.div`
  width:100%;
  margin: 0 0 3vw;

  a{
    display:flex;
    background-color:var(--blue);
    height:100%;
    width:100%;
    border-radius: 20px;
    padding: 1vw;

    position:relative;
    z-index:1;
  }

  a::before{
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

  a:hover::before,a:focus::before{
    opacity:1;
  }
`;

export default Wrapper;
