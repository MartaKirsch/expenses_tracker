import styled from 'styled-components';

const Submit = styled.input.attrs({
  type: 'submit'
})`
  background-color: var(--orange);
  text-transform:uppercase;
  border-radius:20px;
  cursor:pointer;

  &:hover, &:focus{
    background-color: var(--darkOrange);
  }


  @media(min-width: 200px)
  {
    font-size:3.8vw;
    height:8vw;
    width:40%;
    margin: 1vw 0 0 0;
  }

  @media(min-width: 576px)
  {
    font-size:3.5vw;
    height:7.5vw;
    width:40%;
    margin: 1vw 0 0 0;
  }

  @media(min-width: 768px)
  {
    font-size:2.7vw;
    height:6.25vw;
    width:40%;
    margin: 1vw 0 0 0;
  }

  @media(min-width: 992px)
  {
    font-size:2.3vw;
    height:5vw;
    width:40%;
    margin: 1vw 0 0 0;
  }

  @media(min-width: 1200px)
  {
    font-size:1.7vw;
    height:4vw;
    width:40%;
    margin: 1vw 0 0 0;
  }

  @media(min-width: 1600px)
  {
    font-size:1.2vw;
    height:3vw;
  }
`;

export default Submit;
