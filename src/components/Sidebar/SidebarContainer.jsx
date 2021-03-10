import React from 'react';
import { connect } from 'react-redux';

// Component imports
import Sidebar from './Sidebar';

// Container component
const SidebarContainer = ({links}) => <Sidebar links={links} />

// State
const mapStateToProps = (state) => ({
   links: state.sidebar.links
});

// Export Component
export default connect(mapStateToProps, {})(SidebarContainer);
