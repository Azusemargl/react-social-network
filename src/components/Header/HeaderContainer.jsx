import React from 'react';
import { connect } from 'react-redux';
import { authMe } from '../../redux/reducers/authReducer';

// Component imports
import Header from './Header';

// Container component
const HeaderContainer = ({isAuth, login, authMe}) => {
   React.useEffect(() => {
      authMe();
   }, []);

   return (
      <Header isAuth={isAuth} login={login} />
   )
};

// State
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login
});

// Export Component
export default connect(mapStateToProps, {authMe})(HeaderContainer);
