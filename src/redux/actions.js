export const login = (e) => {
  e.preventDefault()
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
  // e.preventDefault();
  console.log('BUSINESS', business)
  return {
    type: 'ADDS_BUSINESS',
    payload: business
  }
}