import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

// Component
const Sidebar = ({links}) => {
   const navigation = links.map(l => (
      <li key={l.id} className="menu__item">
         <Link to={l.path} className="menu__link">{l.title}</Link>
      </li>
   ));

   return (
      <div className="content">
         <nav className="navigation">
            <ul className="menu">
               {navigation}
            </ul>
         </nav>
      </div>
   );
};

export default Sidebar;
