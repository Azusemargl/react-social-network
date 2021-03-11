import React from 'react';
import { connect } from 'react-redux';

// Component imports
import Dialogs from './Dialogs';

// Container component
const DialogsContainer = ({props}) => {
   return (
      <div className="content">
         <Dialogs />
      </div>
   );
};

// State
const mapStateToProps = (state) => ({

});

// Export Component
export default connect(mapStateToProps, {})(DialogsContainer);
