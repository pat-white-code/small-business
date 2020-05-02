import { connect } from 'react-redux';
import { editUserBusiness } from '../redux/actions';
import Edit from '../components/classes/Edit';

const mapDispatchToProps = dispatch => {
  return {
    editUserBusiness: (business) => dispatch(editUserBusiness(business))
  }
}

export default connect(null, mapDispatchToProps)(Edit)