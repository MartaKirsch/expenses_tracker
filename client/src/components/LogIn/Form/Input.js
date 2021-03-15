import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text'
})`
  background-color: var(--blue);
  border-bottom: 2px solid var(--orange);

  &:focus{
    background-color: var(--lighter-blue);
  }

  &::placeholder {
    color: #C4C4C4;
  }


  @media(min-width: 768px)
  {
    height:9vw;
    padding:2.5vw;
    font-size:3vw;
    width: ${props=> props.widthS ? (`${ props.widthS * 110 }%`) : ('100%')};
    border-radius:20px;
  }

  @media(min-width: 992px)
  {
    height:7vw;
    padding:2vw;
    font-size:2.5vw;
    width: ${props=> props.widthS ? (`${ props.widthS * 100 }%`) : ('90%')};
    border-radius:20px;
  }

  @media(min-width: 1200px)
  {
    height:5vw;
    padding:1.5vw;
    font-size:2vw;
    width:90%;
    border-radius:20px;
  }

  @media(min-width: 1600px)
  {
    height:4vw;
    padding:1vw;
    font-size:1.5vw;
    width:90%;
    border-radius:15px;
  }
`;

export default Input;
