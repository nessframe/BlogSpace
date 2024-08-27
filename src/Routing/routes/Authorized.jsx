import React, {useContext} from 'react';
import MyButton from "../../components/UI/button/MyButton";
import {AuthContext} from "../../context/context";

const Authorized = () => {

    const {setAuth} = useContext(AuthContext)
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')

    const logout = () => {
        localStorage.clear()
        setAuth(false)
    }

    return (
        <div>
            <h1>hey {name}!</h1>
            <br/> <br/> <br/>
            <h1>you authorized:</h1>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <br/>
            <MyButton onClick={logout}>log out</MyButton>
        </div>
    );
};

export default Authorized;