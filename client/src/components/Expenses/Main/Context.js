import React from 'react';

const Context = React.createContext({
  isPending:true,
  err:null,
  expenses:null,
  setIsPending: ()=>{},
  setErr: ()=>{},
  setExpenses: ()=>{}
});

export default Context;
