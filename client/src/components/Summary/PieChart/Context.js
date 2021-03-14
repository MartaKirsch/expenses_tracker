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
  types:"",
  setFrom: ()=>{},
  setTo: ()=>{},
  setTypes: ()=>{}
});

export default Context;
