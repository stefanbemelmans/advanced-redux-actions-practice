import { connect } from 'react-redux';
import Users from "../components/Users";

//map a prop called users to state.users
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

export default connect(mapStateToProps)(Users);
