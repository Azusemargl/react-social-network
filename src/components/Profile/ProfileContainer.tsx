import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect, RouteComponentProps } from 'react-router'
import { userProfileRequeire, setPost } from '../../redux/reducers/profileReducer'
import { Profile as ProfileType } from '../../types/profile-type'
import { AppState } from '../../redux/store'
import Profile from './Profile';

// Container component
const ProfileContainer: React.FC<Props> = (props) => {
   if (!props.isAuth) {
      return <Redirect to="/login" />
   }

   const userId = props.match.params.userId
   
   if (!userId) {
      props.userProfileRequeire(props.id)
   } else {
      props.userProfileRequeire(userId)
   }
   
   return <Profile profile={props.profile} posts={props.posts} addPost={props.setPost}  />
}

// State
const mapStateToProps = (state: AppState) => ({
   isAuth: state.auth.isAuth,
   id: state.auth.id as number,
   profile: state.profilePage.profile as ProfileType,
   posts: state.profilePage.posts
})

// Export Component
export default compose<React.ComponentType>(
   connect(mapStateToProps, { userProfileRequeire, setPost }),
   withRouter
)(ProfileContainer)

type MapStateToProps = ReturnType<typeof mapStateToProps>
type MapDispatchToProps = {
   userProfileRequeire: (id: number | string) => void
   setPost: () => void
}
type MatchParams = {
   userId: string
}
type Props = MapStateToProps & MapDispatchToProps & RouteComponentProps<MatchParams>
