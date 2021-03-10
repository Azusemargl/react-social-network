import React from 'react';
import { connect } from 'react-redux';

// Component imports
import Header from './Header';

// Container component
const HeaderContainer = ({props}) => <Header />

// State
const mapStateToProps = (state) => ({

});

// Export Component
export default connect(mapStateToProps, {})(HeaderContainer);
