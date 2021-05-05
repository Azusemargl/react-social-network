import React from 'react'
import { connect, Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { AppState, store } from './redux/store'
import { requestApp } from './redux/reducers/appReducer'

// Component imports
import HeaderContainer from './components/Header/HeaderContainer'
import Sidebar from './components/Sidebar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import LoginContainer from './pages/LoginContainer'
import Spiner from './components/common/Loading/Spiner'

class Wrapper extends React.Component<Props> {
  componentDidMount() {
    this.props.requestApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Spiner />
    }

    return (
      <div className="page">
        <HeaderContainer />
        <div className="wrapper">
          <div className="container">
            <div className="wrapper__inner">
              <Sidebar />
              <div className="wrapper__content">
                <Route exact path='/profile/:userId?' component={ProfileContainer} />
                <Route exact path='/dialogs' component={DialogsContainer}  />
                <Route exact path='/users' component={UsersContainer} />
                <Route exact path='/login' component={LoginContainer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  initialized: state.app.initialized
})

const MainWrapper = connect(mapStateToProps, { requestApp })(Wrapper)

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <MainWrapper />
        </Provider>
    </BrowserRouter>
  )
}

export default App

// Types
type MapStateToProps = {
  initialized: boolean
}
type MapDispatchToProps = {
  requestApp: () => void
}
type Props = MapStateToProps & MapDispatchToProps
