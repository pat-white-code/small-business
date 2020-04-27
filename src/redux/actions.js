import axios from 'axios';
// export const signup = async (user) => {
//   () => {
//     fetch('/users', {
//       method: 'POST',
//       body: user
//     })
//     .then(res=> res.text())
//     .then(string => dispatch({type: 'USER_CREATED', payload: string}))
//   }
// }

export const userLogin = (user) => {
  return (dispatch) => {
    console.log('USER', user);
      // dispatch(beginFetch())
      axios.post('/users/login', user)
          .then(json => {
            console.log(json)
            dispatch({type: 'USER_LOGS_IN', value: json})})
          // .then(() => dispatch(fetchSuccess()))
  }
}

// export const login = (e) => {
//   e.preventDefault()
//   // window.history.push('/');
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