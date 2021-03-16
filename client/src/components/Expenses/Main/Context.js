import React from 'react';

const Context = React.createContext({
  isPending:true,
  err:null,
  expenses:null,
  setIsPending: ()=>{},
  setErr: ()=>{},
  setExpenses: ()=>{},
  howManyExpenses:null,
  setHowManyExpenses:()=>{},
  isUpdate:null,
  setIsUpdate:()=>{}
});

export default Context;
