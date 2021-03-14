import InfoRow from 'components/Home/InfoRow/InfoRow';
import Wrapper from 'components/Wrapper';
import InterestedButton from 'components/Home/InterestedButton/InterestedButton';
import NotSureRow from 'components/Home/NotSure/NotSureRow';

const Home = () => {

  return(
    <Wrapper>
      <InfoRow/>
      <InterestedButton/>
      <NotSureRow/>
    </Wrapper>
  )
}

export default Home;
