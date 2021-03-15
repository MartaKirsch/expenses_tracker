import styled from 'styled-components';

const SelectsWrapper = styled.div`
  display:${({visible})=>visible ? ("block") : ("none")};

  @media(min-width: 768px)
  {
    margin: 3vw 0 0;
  }

  @media(min-width: 992px)
  {
    margin: 3vw 0 0;
  }

  @media(min-width: 1600px)
  {
    margin: 2vw 0 0;
  }
`;

export default SelectsWrapper;
