import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/Auth/index'
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

export default function RegisterView() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

     const handleChangeName = evt => {
        setName(evt.target.value)
    }

     const handleChangeEmail = evt => {
        setEmail(evt.target.value)
    }

    const handleChangePassword = evt => {
        setPassword(evt.target.value)
    }
    
      const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({name, email, password}))
        setName('')
        setEmail('')
        setPassword('')
    };

        return (
            <div>
                <CardActionArea>
                    <h1>Страница регистрации</h1>

                    <form
                        onSubmit={handleSubmit}
                        style={styles.form}
                        autoComplete="off"
                    >
                        <label style={styles.label}>
                            Имя
            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChangeName}
                            />
                        </label>

                        <label style={styles.label}>
                            Почта
            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChangeEmail}
                            />
                        </label>

                        <label style={styles.label}>
                            Пароль
            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChangePassword}
                            />
                        </label>

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit">
                            Зарегистрироваться
                        </Button>
                    </form>
                </CardActionArea>
            </div>
        );
    }



