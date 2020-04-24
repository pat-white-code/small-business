import { combineReducers } from "redux";

const isLoggedIn = (state = null, action) => {
  let newState = {...state}
  switch(action.type){
    case 'LOGS_IN':
      return newState.isLoggedIn = true;
    case 'LOGS_OUT':
      return newState.isLoggedIn = false;
    default: return state;
  }
};

const businesses = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BUSINESS':
      return [...state, action.payload]
    default: 
      return state
  }
}

export default combineReducers({ isLoggedIn, businesses });