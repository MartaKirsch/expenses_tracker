import styled from 'styled-components';

const SearchInput = styled.input`
  background-color:var(--orange);
  width:100%;
  border-radius:20px;

  &:focus{
    background-color:var(--darkOrange);
  }

  &::placeholder{
    color: white;
  }

  @media(min-width: 768px)
  {
    height:7vw;
    font-size:3vw;
    padding: 0 3vw;
  }

  @media(min-width: 992px)
  {
    height:5vw;
    font-size:2vw;
    padding: 0 3vw;
  }

  @media(min-width: 1200px)
  {
    height:4vw;
    font-size:1.7vw;
    padding: 0 3vw;
  }

  @media(min-width: 1600px)
  {
    height:3vw;
    font-size:1.3vw;
    padding: 0 2vw;
  }
`;

export default SearchInput;
