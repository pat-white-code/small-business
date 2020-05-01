import React, { Component } from 'react';
import SignupForm from '../SignupForm';
import axios from 'axios';

export default class Signup extends Component {
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

  createUser = e => {
    console.log(this.state);
    axios.post('/users', this.state)
      .then(res => {
        console.log(res)
        this.props.initialLogin(res.data.id)
      })
  }

  render() { 
    return (
    <SignupForm 
      handleFieldChange={this.handleFieldChange}
      createUser={this.createUser}
      parentState={this.state}
      /> 
  );
  }
}