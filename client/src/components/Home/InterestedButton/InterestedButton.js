import Wrapper from 'components/Home/InterestedButton/Wrapper';
import {Link} from 'react-router-dom';

const InterestedButton = () => {
  return(
    <Wrapper>
      <Link to='/log-in'>Interested? Let's get started</Link>
    </Wrapper>
  )
};

export default InterestedButton;
