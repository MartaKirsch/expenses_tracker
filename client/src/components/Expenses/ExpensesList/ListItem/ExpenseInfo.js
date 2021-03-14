import styled from 'styled-components';

const ExpenseInfo = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  margin: 0 0 0 2vw;
  padding: .5vw 0;

  .title{
    font-size:1.2vw;
    border-bottom: 2px solid var(--orange);
  }

  .shop{
    text-transform:uppercase;
    font-size:.8vw;
  }

`;

export default ExpenseInfo;
