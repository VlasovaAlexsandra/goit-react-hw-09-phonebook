import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/Auth/index';

const PublicRoute = ({

    isAuthenticated,
    redirectTo,
    children,
    ...routeProps
}) => {
    const isLoggeIn = useSelector(authSelectors.getIsAuthenticated)
    return <Route {...routeProps}>
        {isLoggeIn && routeProps.restricted ? (
            <Redirect to={redirectTo} />
        ) : (children)}
    </Route>
};

export default PublicRoute;
