import { combineReducers } from "redux";

const isLoggedIn = (state = false, action) => {
  switch(action.type){
    case 'LOGS_IN':
      return {isLoggedIn: true}
    case 'LOGS_OUT':
      return {isLoggedIn: false}

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