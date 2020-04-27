import React, { Component } from 'react';
import Login from './Login';

class LoginContainer extends Component {
  state = { 
    username: '',
    password: ''
  }
  handleFieldChange = e => {
    console.log('STATE', this.state)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() { 
    return (
    <Login 
      handleFieldChange={this.handleFieldChange}
      userLogin={this.props.userLogin}
      parentState={this.state}
      /> 
  );
  }
}

export default LoginContainer;