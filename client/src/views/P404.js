import Wrapper from 'components/Wrapper';
import MainWrapper from 'components/P404/MainWrapper';
import Column from 'components/P404/Column';
import Header from 'components/P404/Header';
import InfoBox from 'components/P404/InfoBox';
import {ReactComponent as Box} from 'imgs/box.svg';

const P404 = () => {
  return(
    <Wrapper>
      <MainWrapper>
        <Column>
          <Header>404</Header>
          <InfoBox>Oops, it seems that you’ve lost your way!</InfoBox>
        </Column>
        <Box/>
      </MainWrapper>
    </Wrapper>
  )
}

export default P404;
