import styled from 'styled-components';

const ExpenseInfo = styled.div`
  display:flex;
  flex-direction:column;

  .title{
    border-bottom: 2px solid var(--orange);
  }

  .shop{
    text-transform:uppercase;
  }

  @media(min-width: 200px)
  {
    align-items:center;
    margin: 0;
    padding: .5vw 0;

    .title{
      font-size:4.7vw;
      margin: 6vw 0 2vw;
      text-align:center;
    }

    .shop{
      font-size:3.7vw;
      margin: 2vw 0 7vw;
    }
  }

  @media(min-width: 576px)
  {
    align-items:center;
    margin: 0;
    padding: .5vw 0;

    .title{
      font-size:4.2vw;
      margin: 4vw 0 2vw;
      text-align:center;
    }

    .shop{
      font-size:3.2vw;
      margin: 2vw 0 4vw;
    }
  }

  @media(min-width: 768px)
  {
    justify-content:space-between;
    align-items:flex-start;
    margin: 0 0 0 2vw;
    padding: .5vw 0;

    .title{
      font-size:2.6vw;
      margin: 0;
      text-align:left;
    }

    .shop{
      font-size:2vw;
      margin: 0;
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
