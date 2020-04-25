export const login = (e) => {
  e.preventDefault()
  document.cookie = "loggedIn=true;max-age=60*1000";
  return {
    type: 'LOGS_IN'
  }
}

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