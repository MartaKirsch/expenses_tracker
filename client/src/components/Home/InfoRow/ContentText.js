import styled from 'styled-components';

const ContentText = styled.div`
  text-align:justify;

  @media(min-width: 200px)
  {
    font-size:3.8vw;
    ${props=>props.last ? ('padding:3.3vw 0 0;') : ('')}
  }

  @media(min-width: 576px)
  {
    font-size:3.5vw;
    ${props=>props.last ? ('padding:3vw 0 0;') : ('')}
  }

  @media(min-width: 768px)
  {
    font-size:2.3vw;
    ${props=>props.last ? ('padding:2vw 0 0;') : ('')}
  }

  @media(min-width: 992px)
  {
    font-size:1.8vw;
    ${props=>props.last ? ('padding:1.25vw 0 0;') : ('')}
  }

  @media(min-width: 1200px)
  {
    font-size:1.4vw;
    ${({showIcons})=> !showIcons && ('padding: .75vw 0 0 0;')}
  }

  @media(min-width: 1600px)
  {
    font-size:1vw;
  }
`;

export default ContentText;
