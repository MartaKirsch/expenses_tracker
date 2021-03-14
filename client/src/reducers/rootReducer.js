const initState={
  isLoggedIn:false
};

const rootReducer = (state = initState, action)=>{

  if(action.type==="CHANGE_ISLOGGED")
  {
    return {
      ...state,
      isLoggedIn: action.isLoggedIn
    };
  }

  else {
    return {...state}
  }

};

export default rootReducer;
