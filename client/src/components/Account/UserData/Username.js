import styled from 'styled-components';

const Username = styled.div`
  text-transform:uppercase;

  @media(min-width: 768px)
  {
    font-size:4.25vw;
    margin: 4vw 0 0;
  }

  @media(min-width: 992px)
  {
    font-size:3.5vw;
    margin: 3vw 0 0;
  }

  @media(min-width: 1200px)
  {
    font-size:2.5vw;
    margin: 2.2vw 0 0;
  }

  @media(min-width: 1600px)
  {
    font-size:1.8vw;
    margin: 2vw 0 0;
  }
`;

export default Username;
