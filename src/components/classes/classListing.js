import Listing from '../Listing'
import React, { Component } from 'react'
// TODO: Create a class component container for Listing component for ComponentDidMount and componentDidUpdate.

// userBusinesses: state.userBusinesses,
//     isLoggedIn: state.isLoggedIn,
//     businesses: state.businesses,
//     userId: state.userId
class classListing extends Component {
  state = {}
  componentDidMount(){
    this.props.getUserBusinesses(this.props.userId)
  }

  componentDidUpdate(prevProps){
    console.log('PREVPROPS', prevProps.userBusinesses.length)
    console.log('PROPS', this.props.userBusinesses.length)
    if(prevProps.userBusinesses.length !== this.props.userBusinesses.length) {
      this.props.getUserBusinesses(this.props.userId)
    }
  }

  render() { 
    return ( 
      <Listing 
        isLoggedIn={this.props.isLoggedIn}
        businesses={this.props.businesses}
        userBusinesses={this.props.userBusinesses}
        userId={this.props.userId}
        deleteBusiness={this.props.deleteBusiness}
        getUserBusinesses={this.props.getUserBusinesses}
        deleteUserBusiness={this.props.deleteUserBusiness}
      />
    );
  }
}

export default classListing;