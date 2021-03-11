import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/store';

// Component imports
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Registration from './pages/Registration';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="page">
          <HeaderContainer />
          <div className="wrapper">
            <div className="container">
              <div className="wrapper__inner">
                <SidebarContainer />
                <div className="wrapper__content">
                  <Route path='/profile' exact render={() => <ProfileContainer />} />
                  <Route path='/dialogs' exact render={() => <DialogsContainer />} />
                  <Route path='/users' exact render={() => <UsersContainer />} />
                  <Route path='/registration' exact render={() => <Registration />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
