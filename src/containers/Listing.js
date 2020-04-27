import { connect } from 'react-redux';
import Listing from '../components/Listing';
import { deleteBusiness, getUserBusinesses } from '../redux/actions';

const mapStateToProps = state => {
  return {
    userBusinesses: state.userBusinesses,
    isLoggedIn: state.isLoggedIn,
    businesses: state.businesses,
    userId: state.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBusiness: (business)=> dispatch(deleteBusiness(business)),
    getUserBusinesses: (userId)=> dispatch(getUserBusinesses(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)