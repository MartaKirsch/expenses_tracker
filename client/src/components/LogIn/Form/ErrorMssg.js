import styled from 'styled-components';

const ErrorMssg = styled.div`
  margin: ${({underButton})=>underButton ? ('0') : ('0 0 2vw 0')};
  padding:.5vw 0;
  color:var(--lightGrey);
  font-size:1vw;
  width:90%;
  text-align:center;
  visibility:${({visible})=>visible ? ("visible") : ("hidden")};
`;

export default ErrorMssg;
