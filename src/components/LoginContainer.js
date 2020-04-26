import React, { Component } from 'react';
import Login from './Login';

class LoginContainer extends Component {
  state = { 
    username: '',
    password: ''
  }
  handleFieldChange = e => {
    this.setState({
      [e.id]: e.target.value
    })
  }
  render() { 
    return (
    <Login 
      handleFieldChange={this.handleFieldChange}
      /> 
  );
  }
}

export default LoginContainer;