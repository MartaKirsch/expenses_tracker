import styled from 'styled-components';

const DatePrice = styled.div`
  display:flex;

  @media(min-width: 200px)
  {
    width:100%;
    justify-content:space-around;
    align-items:center;
    margin:0 2vw 0 0;

    .date{
      font-size:4.3vw;
      font-weight:bold;
    }

    .price{
      font-size:4.3vw;
      font-weight:bold;
    }
  }

  @media(min-width: 576px)
  {
    margin:0 2vw 0 0;

    .date{
      font-size:3.8vw;
    }

    .price{
      font-size:3.8vw;
    }
  }

  @media(min-width: 768px)
  {
    width:auto;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    padding: .5vw 0;
    margin:0 2vw 0 auto;

    .date{
      font-size:2vw;
      font-weight:normal;
    }

    .price{
      font-size:3.3vw;
    }
  }

  @media(min-width: 992px)
  {
    padding: .5vw 0;
    margin:0 2vw 0 auto;

    .date{
      font-size:1.7vw;
    }

    .price{
      font-size:2.8vw;
    }
  }

  @media(min-width: 1200px)
  {
    padding: .5vw 0;
    margin:0 2vw 0 auto;

    .date{
      font-size:1.2vw;
    }

    .price{
      font-size:2.3vw;
    }
  }

  @media(min-width: 1600px)
  {
    padding: .5vw 0;
    margin:0 2vw 0 auto;

    .date{
      font-size:1vw;
    }

    .price{
      font-size:2vw;
      font-weight:bold;
    }
  }

`;

export default DatePrice;
