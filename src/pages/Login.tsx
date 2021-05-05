import React from 'react'
import { FormProps } from '../types/login-type'
import LoginReduxForm from './LoginForm'

const Login: React.FC<Props> = ({ onLoginAction }) => {
   return (
      <div className="content">
         <h1>Войти</h1>
         <LoginReduxForm onSubmit={onLoginAction} />
      </div>
   )
}

export default Login

// Type
type Props = {
   onLoginAction: (value: FormProps) => void
}
