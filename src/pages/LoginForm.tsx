import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { Input, createField } from '../components/common/Forms/FormCreator';
import Button from '../components/common/Buttons/Button';
import { required } from '../utils/validator/validator';
import { FormProps } from '../types/login-type';

// Form Components
const LoginForm: React.FC<InjectedFormProps<FormProps>> = ({handleSubmit, error}) => {
   const hasError = error;

   return (
      <form className={hasError ? 'form-error' : 'form'} onSubmit={handleSubmit}>
         {createField('field textarea', 'E-mail', 'email', [required], Input, 'text' )}
         {createField('field textarea', 'Пароль', 'password', [required], Input, 'password' )}
         <div className={'checkbox'}>
            {createField('filed', '', 'remember', [], Input, 'checkbox', 'rememberMe' )}
            <label htmlFor={'rememberMe'}>Запомнить меня</label>
         </div>
         {hasError &&
            <div className={'error-area'}>
               <span className={'error-text'}>{error}</span>
            </div>
         }
         <Button>Войти</Button>
      </form>
   )
}

// Redux Form HOC
const LoginReduxForm = reduxForm<FormProps>({form: 'loginForm'})(LoginForm)

export default LoginReduxForm
