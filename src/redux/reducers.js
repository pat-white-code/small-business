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

const userId = (state = null, action) => {
  let newState = {...state}
  switch(action.type) {
    case 'GETS_USER_ID':
      return newState.userId = action.payload.id
    default: return state
  }
}

const businesses = (state = null, action) => {
  switch(action.type) {
    case 'ADDS_BUSINESS':
      return [...state, action.payload]
    case 'DELETES_BUSINESS':
      return state.filter(business => business.id !== action.payload.id)
    default: 
      return state
  }
}

const userBusinesses = (state=null, action) => {
  switch(action.type) {
    case 'GETS_USER_BUSINESSES':
      return action.payload
    default: return state
  }
}

export default combineReducers({ 
  isLoggedIn, 
  businesses, 
  userId, 
  userBusinesses 
});