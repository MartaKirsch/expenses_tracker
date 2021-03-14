import Title from 'components/Home/InfoRow/Title';
import Icons from 'components/Home/InfoRow/Icons';
import ContentText from 'components/Home/InfoRow/ContentText';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color:#4F5D75;
  width:45%;
  display:flex;
  flex-direction:column;
  border-radius:15px;
  padding:1.25vw;
  position:relative;
  z-index:1;
  cursor:default;

  &::before{
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

  &:hover::before{
    opacity:1;
  }
`;


const InfoPanel = ({showIcons,text,title}) => {
  return(
    <Wrapper>
      <Title>{title}</Title>
      {showIcons && <Icons/>}
      <ContentText>{text}</ContentText>
    </Wrapper>
  )
};

InfoPanel.defaultProps = {
  showIcons:false,
};

export default InfoPanel;
