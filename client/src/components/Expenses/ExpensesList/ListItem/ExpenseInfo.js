import styled from 'styled-components';

const ExpenseInfo = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;

  .title{
    border-bottom: 2px solid var(--orange);
  }

  .shop{
    text-transform:uppercase;
  }


  @media(min-width: 768px)
  {
    margin: 0 0 0 2vw;
    padding: .5vw 0;

    .title{
      font-size:2.6vw;
    }

    .shop{
      font-size:2vw;
    }
  }

  @media(min-width: 992px)
  {
    margin: 0 0 0 2vw;
    padding: .5vw 0;

    .title{
      font-size:2.2vw;
    }

    .shop{
      font-size:1.7vw;
    }
  }

  @media(min-width: 1200px)
  {
    margin: 0 0 0 2vw;
    padding: .5vw 0;

    .title{
      font-size:1.7vw;
    }

    .shop{
      font-size:1.2vw;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 0 0 0 2vw;
    padding: .5vw 0;

    .title{
      font-size:1.2vw;
    }

    .shop{
      font-size:.8vw;
    }
  }

`;

export default ExpenseInfo;
