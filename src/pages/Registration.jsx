import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { authRequest } from '../redux/reducers/authReducer';
import { FiledCreator } from '../components/common/Forms/FormCreator';
import Button from '../components/common/Buttons/Button';
import { connect } from 'react-redux';

const Input = FiledCreator("input");

const RegistrationForm = ({handleSubmit}) => {
   return (
      <form onSubmit={handleSubmit}>
         <Field component={Input} name="email" placeholder="E-mail" />
         <Field component={Input} name="password" type="password" placeholder="Пароль" />
         <Button>Зарегистрироваться</Button>
      </form>
   )
}

const LoginReduxForm = reduxForm({form: 'registrationForm'})(RegistrationForm);

const Registration = ({authRequest}) => {
   const onLoginAction = (value) => {
      return authRequest(value);
   };

   return (
      <div className="login">
         <LoginReduxForm onSubmit={onLoginAction} />
      </div>
   )
}

const RegistrationContainer = connect(null, {authRequest})(Registration)

export default RegistrationContainer;
