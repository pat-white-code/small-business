import React, { Component } from 'react';
import AddForm from './AddForm';

class Add extends Component {
  state = { 
    name: '',
    address: '',
    hours: '',
    description: ''
  }
  onFormChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() { 
    return ( 
      <AddForm 
        onFormChange={this.onFormChange}
        addBusiness={this.props.addBusiness}
        parentState={this.state}
        />
    );
  }
}

export default Add;
