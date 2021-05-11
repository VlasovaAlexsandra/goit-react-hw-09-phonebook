import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom'
import AppBar from './components/AppBar'
import Container from './components/Container/index'
import { authOperations } from './redux/Auth/index'
import { connect } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import './App.css'

const HomeView = lazy(() => import('./Views/HomeView'))
const RegisterView = lazy(() => import('./Views/RegisterView'))
const LoginView = lazy(() => import('./Views/LoginView'))
const ContactsView = lazy(() => import('./Views/ContactsView'))

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser()
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView} />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView} />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>

      </Container>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);