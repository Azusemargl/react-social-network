import React from 'react';

const Button = (props) => {
   return (
      <button className="btn">{props.child}</button>
   );
};

export default Button;
