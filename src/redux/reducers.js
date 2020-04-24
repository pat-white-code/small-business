import { combineReducers } from "redux";

const isLoggedInReducer = (state = [], action) => {
  switch(action.type){
    case 'LOGS_IN':
      return {...state, isLoggedIn: true}
    case 'LOGS_OUT':
      return {...state, isLoggedIn: false}

    default: return state;
  }
};

export default combineReducers({ isLoggedIn: isLoggedInReducer });