import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { authRequest } from '../redux/reducers/authReducer';
import { FiledCreator } from '../components/common/Forms/FormCreator';
import Button from '../components/common/Buttons/Button';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Input = FiledCreator("input");

const LoginForm = ({handleSubmit}) => {
   return (
      <form onSubmit={handleSubmit}>
         <Field component={Input} name="email" placeholder="E-mail" />
         <Field component={Input} name="password" type="password" placeholder="Пароль" />
         <Field component={Input} name="password" type="checkbox" />
         <Button>Войти</Button>
      </form>
   )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm);

const Login = ({isAuth, authRequest}) => {
   const onLoginAction = (value) => {
      return authRequest(value);
   };

   if (isAuth) {
      return <Redirect to="/profile" />
   }

   return (
      <div className="login">
         <LoginReduxForm onSubmit={onLoginAction} />
      </div>
   )
}

const mapStateToProps = state => ({
   isAuth: state.auth.isAuth
});

const RegistrationContainer = connect(mapStateToProps, {authRequest})(Login)

export default RegistrationContainer;
