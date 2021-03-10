import React from 'react';
import { connect } from 'react-redux';

// Component imports
import Profile from './Profile';

// Container component
const ProfileContainer = ({props}) => {
   return (
      <div>
         <Profile />
      </div>
   );
};

// State
const mapStateToProps = (state) => ({

});

// Export Component
export default connect(mapStateToProps, {})(ProfileContainer);
