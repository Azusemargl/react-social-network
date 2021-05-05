import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../common/Buttons/ButtonLink'
import logoutImg from '../../static/images/logout.png'
import './header.scss'

// Component
const Header: React.FC<Props> = ({isAuth, login, logout}) => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__inner">
               <Link className='logo' to='/'>Logo</Link>
               <div className="auth_block">
               {isAuth ? (
                  <div className="auth">
                     <p className="login">{login}</p>
                     <button className={'logout-btn'} onClick={() => logout()}>
                        <img className={'logout-img'} src={logoutImg} alt="Выйти"/>
                     </button>
                  </div>
                  ) : (
                  <ul className="auth">
                     <li className="auth__item">
                        <ButtonLink path='/login'>Войти</ButtonLink>
                     </li>
                     <li className="auth__item">
                        <Link to='/registration'>Регистрация</Link>
                     </li>
                  </ul>
                  )}
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header

// Types
type MapStateToProps = {
   isAuth: boolean
   login: string | null
 }
 type MapDispatchToProps = {
   logout: () => void
 }
 type Props = MapStateToProps & MapDispatchToProps
