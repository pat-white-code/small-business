import React, { Component } from 'react';
import AddForm from './AddForm';

class Add extends Component {
  state = { 
    name: '',
    address: '',
    hours: '',
    description: '',
    id: this.props.businesses.length + 1
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
        handleClose={this.props.handleClose}
        />
    );
  }
}

export default Add;
