import React from 'react';

const Context = React.createContext({
  isPending:true,
  err:null,
  data:null,
  setIsPending: ()=>{},
  setErr: ()=>{},
  setData: ()=>{},
  from:"",
  to:"",
  setFrom: ()=>{},
  setTo: ()=>{},
  isOk:true,
  setIsOk: ()=>{}
});

export default Context;
