import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/Auth/index';

const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: '#2A363B',
    },
    activeLink: {
        color: '#E84A5F',
    },
};

export default function Navigation() {
    const isLoggeIn = useSelector(authSelectors.getIsAuthenticated)

    return (
        <nav>
            <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
                Main
            </NavLink>
            {isLoggeIn && (
                <NavLink
                    to="/contacts"
                    exact
                    style={styles.link}
                    activeStyle={styles.activeLink}
                >
                    Contacts
                </NavLink>

            )}
        </nav>
    )
}





