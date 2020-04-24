import { connect } from 'react-redux';
import Listing from '../components/Listing';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    businesses: state.businesses
  }
}

export default connect(mapStateToProps)(Listing)