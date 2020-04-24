export const login = (e) => {
  e.preventDefault()
  return {
    type: 'LOGS_IN'
  }
}