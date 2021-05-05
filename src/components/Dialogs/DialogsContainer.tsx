import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../redux/store'

// Component imports
import Dialogs from './Dialogs';

// Container component
const DialogsContainer = () => {
   return (
      <div className="content">
         <Dialogs />
      </div>
   )
}

// State
const mapStateToProps = (state: AppState) => ({

})

// Export Component
export default connect(mapStateToProps, {})(DialogsContainer)
