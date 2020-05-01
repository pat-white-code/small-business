import axios from 'axios';

export const userLogin = (user) => {
  return (dispatch) => {
    console.log('USER', user);
      axios.post('/users/login', user)
          .then(json => {
            console.log(json)
            document.cookie = "loggedIn=true;max-age=60*1000"
            dispatch({type: 'LOGS_IN'})
            dispatch({type: 'GETS_USER_ID', payload: json.data})
            dispatch(getUserBusinesses(json.data.id))})
  }
}

export const getUserBusinesses = userId => {
  return (dispatch) => {
    axios.get(`/businesses/${userId}`)
      .then(res => {
        console.log(res)
        dispatch({type: 'GETS_USER_BUSINESSES', payload:res.data})
      })
  }
}

export const addUserBusiness = (business, userId) => {
  return (dispatch) => {
    console.log(business);
    console.log(userId);
    axios.post(`/businesses/post/${userId}`, business)
      .then(res => {
        console.log(res)
        dispatch({type: 'ADDS_USER_BUSINESS'})
      })
  }
}

export const deleteUserBusiness = businessId => {
  return (dispatch) => {
    axios.delete(`/businesses/delete/${businessId}`)
      .then(res => {
        console.log(res)
        dispatch({type: 'DELETES_USER_BUSINESS'})
      })
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