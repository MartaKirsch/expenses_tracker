import styled from 'styled-components';

const Date = styled.div`
  text-transform:uppercase;

  @media(min-width: 768px)
  {
    margin:1vw 0 5vw;
    font-size:2.5vw;
  }

  @media(min-width: 992px)
  {
    margin:1vw 0 3.5vw;
    font-size:2.2vw;
  }

  @media(min-width: 1200px)
  {
    margin:1vw 0 2.5vw;
    font-size:1.8vw;
  }

  @media(min-width: 1600px)
  {
    margin:.5vw 0 2vw;
    font-size:1.4vw;
  }
`;

export default Date;
