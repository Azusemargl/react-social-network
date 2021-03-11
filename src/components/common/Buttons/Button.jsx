import React from 'react';
import './button.scss';

const Button = ({children}) => {
   return (
      <button className="btn btn-submit">{children}</button>
   );
};

export default Button;
