import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Button from '../common/Button/Button';

// Component
const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__inner">
               <Link className='logo' to='/'>Logo</Link>
               <div className="auth">
                  <Button>
                     <Link className='login' to='/login'>Войти</Link>
                  </Button>
                  <Link className='registration' to='/registration'>Регистрация</Link>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
