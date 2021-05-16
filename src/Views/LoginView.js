import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/Auth/index';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

const styles = {
    form: {
        width: 320,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
};

// const mapDispatchToProps = {
//     onLogin: authOperations.logIn,
// };

export default function LoginView() {
    // state = {
    //     email: '',
    //     password: '',
    // };
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin(this.state);

        this.setState({ name: '', email: '', password: '' });
    };


    // const { email, password } = this.state;

    return (



        <div>
            <CardActionArea>
                <h1>Страница логина</h1>

                <form
                    onSubmit={this.handleSubmit}
                    style={styles.form}
                    autoComplete="off"
                >
                    <label style={styles.label}>
                        Почта
            <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label style={styles.label}>
                        Пароль
            <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit">
                        Войти
                        </Button>

                </form>
            </CardActionArea>
        </div >
    )

}






//  connect(null, mapDispatchToProps)(LoginView)