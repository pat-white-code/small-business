import React, { Component } from 'react';
import EditForm from '../EditForm';

class Edit extends Component {
  state = { 
    name: this.props.name,
    address: this.props.address,
    description: this.props.description,
    hours: this.props.hours,
    id: this.props.id
  }

  onFormChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() { 
    return (
      <EditForm
        editUserBusiness={this.props.editUserBusiness}
        onFormChange={this.onFormChange}
        handleClose={this.props.handleClose}
        parentState={this.state} />
    );
  }
}

export default Edit;