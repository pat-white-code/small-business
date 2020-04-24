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