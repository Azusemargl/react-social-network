import React from 'react';
import { Link } from 'react-router-dom'
import './sidebar.scss'

// Component
const Sidebar = () => {
   return (
      <div className="content">
         <nav className="navigation">
            <ul className="menu">
               <li className="menu__item">
                  <Link to="/profile" className="menu__link">Профиль</Link>
               </li>
               <li className="menu__item">
                  <Link to="/dialogs" className="menu__link">Сообщения</Link>
               </li>
               <li className="menu__item">
                  <Link to="/users" className="menu__link">Друзья</Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Sidebar
