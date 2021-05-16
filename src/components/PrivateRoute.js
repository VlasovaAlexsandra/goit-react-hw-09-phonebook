import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/Auth/index';

export default function PrivateRoute({
    isAuthenticated,
    redirectTo,
    children,
    ...routeProps
}) {

    const isLoggeIn = useSelector(authSelectors.getIsAuthenticated)

    return (
        <Route {...routeProps}>
            {isLoggeIn ? (children) : <Redirect to={redirectTo} />}
        </Route>
    );
}
