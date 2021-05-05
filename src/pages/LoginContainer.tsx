import React from 'react'
import { authRequest } from '../redux/reducers/authReducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { FormProps } from '../types/login-type'

// Components import
import Login from './Login'
import { AppState } from '../redux/store'

// Container component
const LoginContainer: React.FC<Props> = ({isAuth, authRequest}) => {

   // Callback
   const onLoginAction = (value: FormProps) => {
      authRequest(value.email, value.password, value.remember);
   }

   // Redirect
   if (isAuth) {
      return <Redirect to="/profile" />
   }

   // Component
   return <Login onLoginAction={onLoginAction} />
}

// State
const mapStateToProps = (state: AppState) => ({
   isAuth: state.auth.isAuth
})

// HOC
const RegistrationContainer = connect(mapStateToProps, {authRequest})(LoginContainer)

export default RegistrationContainer

// Type
type Props = {
   isAuth:      boolean
   authRequest: (email: string, password: string, rememberMe: boolean) => void
}
