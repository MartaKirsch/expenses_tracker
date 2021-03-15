import styled from 'styled-components';

const Filter = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-grow:0;

  &:last-child{
    margin:0;
  }

  input, select{
    background-color:var(--blue);
    border-bottom:1px var(--orange) solid;
  }

  input:focus, select:focus, button:focus{
    background-color:var(--lighter-blue);
  }

  label{
    text-transform:uppercase;
  }

  @media(min-width: 768px)
  {
    width:55%;
    margin: 0 0 6vw;

    input, select{
      padding:1.25vw;
      border-radius:20px;
      font-size:2.7vw;
      width:60%;
    }

    label{
      font-size:2.6vw;
      margin:0;
    }

    div{
      width:60%;
    }
  }

  @media(min-width: 992px)
  {
    width:42%;
    margin: ${ (props) => props.bar ? ('0') : ('0 0 4vw') };

    input, select{
      padding:1.25vw;
      border-radius:20px;
      font-size:2vw;
      width:60%;
    }

    label{
      font-size:2vw;
      margin:0;
    }

    div{
      width:60%;
    }
  }

  @media(min-width: 1200px)
  {
    width:42%;
    margin: ${ (props) => props.bar ? ('0') : ('0 0 3vw') };

    input, select{
      padding:1vw;
      border-radius:15px;
      font-size:1.5vw;
      width:60%;
    }

    label{
      font-size:1.6vw;
      margin:0;
    }

    div{
      width:60%;
    }
  }

  @media(min-width: 1600px)
  {
    width:42%;
    margin: ${ (props) => props.bar ? ('0') : ('0 0 2vw') };

    input, select{
      font-size:1vw;
      padding:.5vw;
      border-radius:10px;
      font-size:1vw;
      width:60%;
    }

    label{
      font-size:1.2vw;
      margin:0 1vw 0 0;
    }

    div{
      width:60%;
    }
  }
`;

export default Filter;
