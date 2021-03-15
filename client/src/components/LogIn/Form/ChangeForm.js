import styled from 'styled-components';

const ChangeForm = styled.div`
  cursor:pointer;

  &:hover{
    text-decoration:underline;
  }


  @media(min-width: 768px)
  {
    font-size:2.3vw;
    margin: 2vw 0 6vw;
  }

  @media(min-width: 992px)
  {
    font-size:2vw;
    margin: 2vw 0 6vw;
  }

  @media(min-width: 1200px)
  {
    font-size:1.6vw;
    margin: 2vw 0 6vw;
  }

  @media(min-width: 1600px)
  {
    font-size:1vw;
    margin: 2vw 0 0 0;
  }

`;

export default ChangeForm;
