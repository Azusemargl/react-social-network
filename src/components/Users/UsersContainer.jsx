import React from 'react';
import { connect } from 'react-redux';
import { usersRequest, followAction, unfollowAction } from '../../redux/reducers/usersReducer';
import Spiner from '../common/Loading/Spiner';

// Component imports
import Users from './Users';

// Container component
const UsersContainer = (props) => {

   // Set users after init
   React.useEffect(() => {
      return props.usersRequest(1, 50);
   }, []);

   // Loading before users init
   if (!props.init) {
      return (
         <div className="content">
            <Spiner />
         </div>
      );
   }

   return (
      <div className="content">
         <Users users={props.users} followAction={props.followAction} />
      </div>
   );
};

// State
const mapStateToProps = (state) => ({
   init: state.usersPage.init,
   users: state.usersPage.users
});

// Export Component
export default connect(mapStateToProps, {usersRequest, followAction, unfollowAction})(UsersContainer);
