import styled from 'styled-components';

const Title = styled.h1`
  border-bottom: 3px solid #EF8354;
  font-weight:normal;

  @media(min-width: 200px)
  {
    width:75%;
    margin:9vw 0 4vw;
    padding: 0 0 .5vw;
    font-size: 4.9vw;
  }

  @media(min-width: 576px)
  {
    width:75%;
    margin:9vw 0 4vw;
    padding: 0 0 .5vw;
    font-size: 4.5vw;
  }

  @media(min-width: 768px)
  {
    width:75%;
    margin:7vw 0 3vw;
    padding: 0 0 .5vw;
    font-size: 4vw;
  }

  @media(min-width: 992px)
  {
    width:75%;
    margin:5vw 0 2vw;
    padding: 0 0 .5vw;
    font-size: 3.1vw;
  }

  @media(min-width: 1200px)
  {
    width:75%;
    margin:3.5vw 0 2vw;
    padding: 0 0 .5vw;
    font-size: 2.1vw;
  }

  @media(min-width: 1600px)
  {
    width:85%;
    margin:2.5vw 0 2vw;
    padding: 0 0 .5vw;
    font-size: 2vw;
  }
`;

export default Title;
