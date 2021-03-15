import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *,*::after,*::before{
    box-sizing:border-box;
  }

  /* variables */
  :root
  {
    --orange:#EF8354;
    --darkOrange:#E26630;
    --darkBlue:#2D3142;
    --blue:#4F5D75;
    --lighter-blue:#5F6E86;
    --lightGrey:#BFC0C0;
    --grey:#969696;
    --red:#c4320e;
  }

  body{
    background-color: #2D3142;
    color:white;
    font-family: 'Montserrat', sans-serif;
  }

  a{
    color:inherit;
    text-decoration:none;
  }

  button{
    cursor:pointer;
    color:white;
    outline:none;
    border:none;
    font-family:inherit;
    padding:0;
    background-color:inherit;
  }

  input{
    border:none;
    outline:none;
    color:white;
    font-family:inherit;
  }

  input[type="date"]{
    color:white;
  }

  select{
    outline:none;
    border:none;
    color:white;
    font-family:inherit;
  }
`;

export default GlobalStyle;
