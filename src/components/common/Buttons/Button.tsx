import React from 'react'
import './button.scss'

const Button: React.FC<Props> = ({ children }) => {
   return (
      <button className="btn btn-submit">{children}</button>
   )
}

export default Button

// Type
type Props = {
   children: React.ReactNode
}
