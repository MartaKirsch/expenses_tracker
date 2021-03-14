import styled from 'styled-components';

const DatePrice = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  padding: .5vw 0;
  margin:0 2vw 0 auto;

  .date{
    font-size:1vw;
  }

  .price{
    font-size:2vw;
    font-weight:bold;
  }

`;

export default DatePrice;
