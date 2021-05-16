import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom'
import AppBar from './components/AppBar'
import Container from './components/Container/index'
import { authOperations } from './redux/Auth/index'
import { useDispatch } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import './App.css'

const HomeView = lazy(() => import('./Views/HomeView'))
const RegisterView = lazy(() => import('./Views/RegisterView'))
const LoginView = lazy(() => import('./Views/LoginView'))
const ContactsView = lazy(() => import('./Views/ContactsView'))

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch])

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>

        <Switch>

          <PublicRoute exact path="/" >
            <HomeView />
          </PublicRoute>

          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts" >
            < RegisterView />
          </PublicRoute>

          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
          ><LoginView />

          </PublicRoute>

          <PrivateRoute
            path="/contacts"
            redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

        </Switch>
      </Suspense>

    </Container>
  )

}

