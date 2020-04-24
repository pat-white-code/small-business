import { connect } from 'react-redux';
import Add from '../components/Add';
import { addBusiness } from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    addBusiness: (business)=> dispatch(addBusiness(business))
  }
}

export default connect(null, mapDispatchToProps)(Add)