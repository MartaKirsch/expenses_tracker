import styled from 'styled-components';

const SelectsWrapper = styled.div`
  margin: 2vw 0 0;
  display:${({visible})=>visible ? ("block") : ("none")};
`;

export default SelectsWrapper;
