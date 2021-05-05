import React from 'react'
import { Field, WrappedFieldProps } from 'redux-form'
import { FiledValidate } from '../../../utils/validator/validator'
import { LoginFormProps } from '../../../types/login-type'
import './formCreator.scss'

const FormControl: React.FC<LoginFormProps> = ({meta: {touched, error}, children}) => {
  const hasError = touched && error

  return (
    <div>
      <div className={"form__control" + "" + (hasError ? " error" : "")}>
        {children}
        {hasError && <span className="error-text">{error}</span>}
      </div>
    </div>
  )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props
  return <FormControl {...props}><input  {...input} {...restProps} /></FormControl>
}

export const createField = (
  className: string,
  placeholder: string | undefined,
  name: string,
  validators: Array<FiledValidate>,
  component: React.FC<WrappedFieldProps>,
  type?: string,
  id?: string,
  props = {}
) => {
  return (
    <Field
      className={className}
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      type={type}
      id={id}
      {...props}
    />
  )
}
