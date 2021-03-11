import React from 'react';
import './formCreator.scss';

export const FiledCreator = Element => ({ input, meta: {touched, error}, placeholder, ...props }) => {
  const hasError = touched && error;

  return (
    <div>
      <div className="form__control">
        <Element className={"field textarea" + "" + (hasError ? " error" : "")} {...input} {...props} placeholder={placeholder} />
        {hasError && <span className="error-text">{error}</span>}
      </div>
    </div>
  );
};
