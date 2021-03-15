import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;

  &:last-child{
    margin:0;
  }

  select{
    background-color:var(--blue);
    border-bottom: 2px solid var(--orange);
  }

  @media(min-width: 200px)
  {
    margin: 0 0 6vw;
    font-size:4.3vw;
    width:50vw;

    select{
      width:32vw;
      font-size:4vw;
      padding:2vw;
      border-radius:20px;
    }
  }

  @media(min-width: 576px)
  {
    margin: 0 0 6vw;
    font-size:3.3vw;
    width:42vw;

    select{
      width:27vw;
      font-size:3vw;
      padding:1.5vw;
      border-radius:20px;
    }
  }

  @media(min-width: 768px)
  {
    margin: 0 0 5vw;
    font-size:2.9vw;
    width:40vw;

    select{
      width:25vw;
      font-size:2.6vw;
      padding:1.25vw;
      border-radius:20px;
    }
  }

  @media(min-width: 992px)
  {
    margin: 0 0 1.5vw;
    font-size:2vw;
    width:26vw;

    select{
      width:18vw;
      font-size:1.8vw;
      padding:1vw;
      border-radius:20px;
    }
  }

  @media(min-width: 1200px)
  {
    margin: 0 0 1.5vw;
    font-size:1.8vw;
    width:22vw;

    select{
      width:15vw;
      font-size:1.5vw;
      padding:1vw;
      border-radius:20px;
    }
  }

  @media(min-width: 1600px)
  {
    margin: 0 0 1.5vw;
    font-size:1.3vw;
    width:15vw;

    select{
      width:10vw;
      font-size:1vw;
      padding:.5vw;
      border-radius:15px;
    }
  }
`;

export default Wrapper;
