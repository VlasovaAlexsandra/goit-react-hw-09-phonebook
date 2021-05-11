import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/Auth/index'
import Button from '@material-ui/core/Button';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',

    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    }
}

const UserMenu = ({ avatar, name, onLogout }) => (
    <div style={styles.container}>
        <img src={avatar} alt="" width="32" style={styles.avatar} />
        <span style={styles.name}> Welcome, {name}</span>
        <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={onLogout}>
            Logout
        </Button>
    </div>

)

const mapStateToProps = (state) => ({
    name: authSelectors.getUsername(state)
})

const mapDispatchToProps = {
    onLogout: authOperations.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)