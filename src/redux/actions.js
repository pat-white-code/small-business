import axios from 'axios';

export const userLogin = (user) => {
  return (dispatch) => {
    console.log('USER', user);
      // dispatch(beginFetch())
      axios.post('/users/login', user)
          .then(json => {
            console.log(json)
            document.cookie = "loggedIn=true;max-age=60*1000"
            dispatch({type: 'LOGS_IN'})
            dispatch({type: 'GETS_USER_ID', payload: json.data})})
          // .then(() => dispatch(fetchSuccess()))
  }
}

// export const login = (e) => {
//   e.preventDefault()
//   document.cookie = "loggedIn=true;max-age=60*1000";
//   return {
//     type: 'LOGS_IN'
//   }
// }

export const logout = () => {
  return {
    type: 'LOGS_OUT'
  }
}

export const addBusiness = business => {
  return {
    type: 'ADDS_BUSINESS',
    payload: business
  }
}

export const deleteBusiness = business => {
  return {
    type: 'DELETES_BUSINESS',
    payload: business
  }
}