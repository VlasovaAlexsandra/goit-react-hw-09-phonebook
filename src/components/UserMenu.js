import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function UserMenu() {

    const dispatch = useDispatch()

    const name = useSelector(authSelectors.getUsername)

    const onLogOut = useCallback(() => {
        dispatch(authOperations.logOut())
    }, [dispatch])

    return (
        <div style={styles.container}>
            <img src="#" alt="" width="32" style={styles.avatar} />
            <span style={styles.name}> Welcome, {name}</span>
            <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={onLogOut}>
                Logout
        </Button>
        </div>

    )
}





