import React from 'react';
import { connect } from 'react-redux';
import { usersRequest } from '../../redux/reducers/usersReducer';

// Component imports
import Users from './Users';

// Container component
const UsersContainer = ({users, usersRequest,}) => {
   React.useEffect(() => {
      return usersRequest(1, 10);
   }, []);

   return (
      <div>
         <Users users={users} />
      </div>
   );
};

// State
const mapStateToProps = (state) => ({
   users: state.usersPage.users
});

// Export Component
export default connect(mapStateToProps, {usersRequest})(UsersContainer);
