import { connect } from 'react-redux';
// import Login from '../components/Login';
import LoginContainer from '../components/LoginContainer';
// import { login } from '../redux/actions';
import { userLogin } from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (user)=> dispatch(userLogin(user))
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     login: (e)=> dispatch(login(e))
//   }
// }

export default connect(null, mapDispatchToProps)(LoginContainer)
// export default connect(null, mapDispatchToProps)(Login)