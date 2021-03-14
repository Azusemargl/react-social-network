import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { Redirect } from 'react-router';
import { userProfileRequeire, addPost } from '../../redux/reducers/profileReducer';

// Component imports
import Profile from './Profile';

// Container component
const ProfileContainer = (props) => {
   if (!props.isAuth) {
      return <Redirect to="/login" />
   }

   // User profile
   const userId = props.match.params.userId;
   
   if (!userId) {
      props.userProfileRequeire(props.id);
   } else {
      props.userProfileRequeire(userId); // Home profile
   }
   
   return <Profile login={props.login} posts={props.posts} addPost={props.addPost}  />
};

// State
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   id: state.auth.id,
   login: state.profilePage.fullName,
   posts: state.profilePage.posts
});

// Export Component
export default compose(
   connect(mapStateToProps, {userProfileRequeire, addPost}),
   withRouter
)(ProfileContainer);
