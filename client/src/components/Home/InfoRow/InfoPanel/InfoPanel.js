import Title from 'components/Home/InfoRow/Title';
import Icons from 'components/Home/InfoRow/Icons/Icons';
import ContentText from 'components/Home/InfoRow/ContentText';
import Wrapper from 'components/Home/InfoRow/InfoPanel/Wrapper';



const InfoPanel = ({showIcons,text,title,last}) => {
  return(
    <Wrapper>
      <Title>{title}</Title>
      {showIcons && <Icons/>}
      <ContentText last={last}>{text}</ContentText>
    </Wrapper>
  )
};

InfoPanel.defaultProps = {
  showIcons:false,
  last:false
};

export default InfoPanel;
