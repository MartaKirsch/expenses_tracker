import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  margin: 0 0 1.5vw;
  font-size:1.3vw;
  width:15vw;
  justify-content:space-between;
  align-items:center;

  &:last-child{
    margin:0;
  }

  select{
    background-color:var(--blue);
    border-bottom: 2px solid var(--orange);
    width:10vw;
    font-size:1vw;
    padding:.5vw;
    border-radius:15px;
  }
`;

export default Wrapper;
