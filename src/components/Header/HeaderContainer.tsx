import React from 'react'
import { connect } from 'react-redux'
import { logoutRequest } from '../../redux/reducers/authReducer'
import { AppState } from '../../redux/store'

// Component imports
import Header from './Header'

// Container component
const HeaderContainer: React.FC<Props> = ({ isAuth, login, logoutRequest }) => {
   return (
      <Header isAuth={isAuth} login={login} logout={logoutRequest} />
   )
}

// State
const mapStateToProps = (state: AppState) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login
})

// Export Component
export default connect<MapStateToProps, MapDispatchToProps, {}, AppState>(
   mapStateToProps,
   {logoutRequest}
)(HeaderContainer)

// Types
type MapStateToProps = {
   isAuth: boolean
   login: string | null
 }
 type MapDispatchToProps = {
   logoutRequest: () => void
 }
 type OwnProps = {}
 type Props = MapStateToProps & MapDispatchToProps & OwnProps
