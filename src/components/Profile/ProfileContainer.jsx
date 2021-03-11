import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../redux/reducers/profileReducer';

// Component imports
import Profile from './Profile';

// Container component
const ProfileContainer = (props) => {
   return <Profile addPost={props.addPost} posts={props.posts} />
};

// State
const mapStateToProps = (state) => ({
   posts: state.profilePage.posts
});

// Export Component
export default connect(mapStateToProps, {addPost})(ProfileContainer);
