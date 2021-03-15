import styled from 'styled-components';

const Textarea = styled.textarea`
  border-radius:20px;
  width:100%;
  max-width:100%;
  text-align:justify;
  background-color:var(--blue);
  border:none;
  outline:none;
  color:white;
  font-family:inherit;

  &::placeholder{
    color:var(--lightGrey);
  }


  @media(min-width: 768px)
  {
    margin: 3vw 0 0;
    padding:3vw;
    min-height:30vw;
    max-height:50vw;
    font-size:2.3vw;
  }

  @media(min-width: 992px)
  {
    margin: 2vw 0 0;
    padding:3vw;
    min-height:25vw;
    max-height:45vw;
    font-size:2vw;
  }

  @media(min-width: 1200px)
  {
    margin: 2vw 0 0;
    padding:2vw;
    min-height:20vw;
    max-height:40vw;
    font-size:1.5vw;
  }

  @media(min-width: 1600px)
  {
    margin: 1vw 0 0;
    padding:1vw;
    min-height:10vw;
    max-height:20vw;
    font-size:1vw;
  }
`;

export default Textarea;
