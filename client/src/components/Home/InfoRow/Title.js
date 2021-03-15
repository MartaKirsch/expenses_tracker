import styled from 'styled-components';

const Title = styled.h1`
  text-transform:uppercase;
  font-weight:300;
  margin:0;
  padding:0;
  border-bottom: 3px solid #EF8354;

  @media(min-width: 200px)
  {
    font-size:4.7vw;
    padding: 0 0 2vw 0;
  }

  @media(min-width: 576px)
  {
    font-size:4.7vw;
    padding: 0 0 2vw 0;
  }

  @media(min-width: 768px)
  {
    font-size:3.7vw;
    padding: 0 0 2vw 0;
  }

  @media(min-width: 992px)
  {
    font-size:2.7vw;
    padding: 0 0 1.5vw 0;
  }

  @media(min-width: 1200px)
  {
    font-size:2.1vw;
    padding: 0 0 1vw 0;
  }

  @media(min-width: 1600px)
  {
    font-size:1.7vw;
    padding: 0 0 .7vw 0;
  }
`;

export default Title;
