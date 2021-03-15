import InfoPanel from 'components/Home/InfoRow/InfoPanel/InfoPanel';
import styled from 'styled-components';
import {text1, text2, title1, title2} from 'components/Home/InfoRow/textData';

const Wrapper = styled.div`
  width:100%;
  display:flex;

  @media(min-width: 200px)
  {
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  @media(min-width: 1200px)
  {
    align-items:unset;
    flex-direction:row;
    justify-content:space-between;
  }
`;

const InfoRow = () => {
  return(
    <Wrapper>
      <InfoPanel text={text1} title={title1} showIcons/>
      <InfoPanel last text={text2} title={title2}/>
    </Wrapper>
  )
};

export default InfoRow;
