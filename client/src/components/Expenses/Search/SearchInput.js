import styled from 'styled-components';

const SearchInput = styled.input`
  background-color:var(--orange);
  width:100%;
  height:3vw;
  font-size:1.3vw;
  padding: 0 2vw;
  border-radius:20px;

  &:focus{
    background-color:var(--darkOrange);
  }
  
  &::placeholder{
    color: white;
  }
`;

export default SearchInput;
