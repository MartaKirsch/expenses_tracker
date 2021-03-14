import styled from 'styled-components';
import Title from 'components/Home/NotSure/Column/Title';
import TextWrapper from 'components/Home/NotSure/Column/TextWrapper';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:40%;
`;

const Column = () => {
  return(
    <Wrapper>
      <Title>Not Sure Yet?</Title>
      <TextWrapper>
        Our service is completely free, so you won’t lose anything if you try! And from your experience we can both grow - you can get to know if apps like ours can actually help you. And if you’d be so kind, you can leave us your feedback on your profile page. If you don’t like something - don’t hesitate to point it out! But be sure to leave some kind words as well, thank you so much!
      </TextWrapper>
    </Wrapper>
  )
};

export default Column;
