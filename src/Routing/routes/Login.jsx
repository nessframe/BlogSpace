import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import { AuthContext } from "../../context/context";

const Login = () => {
    const { setAuth } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setInputEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (name.length < 4) {
            errors.name = 'Username must be at least 4 characters long.';
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.email = 'Please enter a valid email address. example: user@gmail.com';
            valid = false;
        }

        if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long.';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const login = event => {
        event.preventDefault();
        if (validateForm()) {
            setAuth(true);

            localStorage.setItem('auth', 'true');
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
        }
    };
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setAuth(true);
        }
    }, []);

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={login}>
                <MyInput
                    type="text"
                    placeholder="Username"
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
                {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

                <MyInput
                    type="text"
                    placeholder="Email"
                    onChange={event => setInputEmail(event.target.value)}
                    value={email}
                />
                {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}

                <MyInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;