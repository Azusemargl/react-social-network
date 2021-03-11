import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const ButtonLink = ({path, children}) => {
   return (
      <Link className="btn" to={path}>{children}</Link>
   );
};

export default ButtonLink;
