import React from 'react';
import { connect } from 'react-redux';
import { usersRequest, requestAction } from '../../redux/reducers/usersReducer';
import Spiner from '../common/Loading/Spiner';

// Component imports
import Users from './Users';

// Container component
const UsersContainer = ({init, users, usersRequest, requestAction}) => {
   React.useEffect(() => {
      return usersRequest(1, 50);
   }, []);

   if (!init) {
      return (
         <div className="content">
            <Spiner />
         </div>
      );
   }

   return (
      <div className="content">
         <Users users={users} requestAction={requestAction} />
      </div>
   );
};

// State
const mapStateToProps = (state) => ({
   init: state.usersPage.init,
   users: state.usersPage.users
});

// Export Component
export default connect(mapStateToProps, {usersRequest, requestAction})(UsersContainer);
