import { connect } from 'react-redux';
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import AuthNav from './AuthNav'
import { authSelectors } from '../redux/Auth/index'

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2A363B',
    },
}

const AppBar = ({ isAuthenticated }) => (
    <header style={styles.header}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(AppBar)