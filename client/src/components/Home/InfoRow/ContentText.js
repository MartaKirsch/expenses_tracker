import styled from 'styled-components';

const ContentText = styled.div`
  font-size:1vw;
  text-align:justify;
  ${({showIcons})=> !showIcons && ('padding: .75vw 0 0 0;')}
`;

export default ContentText;
