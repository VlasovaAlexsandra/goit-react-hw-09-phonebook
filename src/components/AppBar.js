import { useSelector } from 'react-redux';
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

export default function AppBar() {
    const isLoggenIn = useSelector(authSelectors.getIsAuthenticated)
    return (
        <header style={styles.header}>
            <Navigation />
            {isLoggenIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}




