import styled from 'styled-components';

const DatePrice = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;

  .price{
    font-weight:bold;
  }


  @media(min-width: 768px)
  {
    padding: .5vw 0;
    margin:0 2vw 0 auto;

    .date{
      font-size:2vw;
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
