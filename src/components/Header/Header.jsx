import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import ButtonLink from '../common/Buttons/ButtonLink';

// Component
const Header = ({isAuth, login}) => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__inner">
               <Link className='logo' to='/'>Logo</Link>
               <div className="auth_block">
               {isAuth
                  ? <p className="login">{login}</p>
                  : 
                  <ul className="auth">
                     <li className="auth__item">
                        <ButtonLink path='/login'>Войти</ButtonLink>
                     </li>
                     <li className="auth__item">
                        <Link to='/registration'>Регистрация</Link>
                     </li>
                  </ul>
                  }
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
