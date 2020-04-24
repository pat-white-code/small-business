import { connect } from 'react-redux';
import Listing from '../components/Listing';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Listing)