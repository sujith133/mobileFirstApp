import React, { useState } from 'react';

import Cookies from "js-cookie";
import { useNavigate  } from "react-router-dom";
import './index.css';

const Login = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [warning, setWarning] = useState("");
    const history = useNavigate();
    const creds = { user: "mobileFirst", password: "1234" };

    const onUserChange = (event) => {
        setUser(event.target.value);
    };

    const onPassChange = (event) => {
        setPass(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (user === creds.user && pass === creds.password) {
            Cookies.set('jwt_token', "jwtToken", { expires: 1 });
            console.log("success");
            setWarning("")
            history('/'); // Navigate to the home page using history prop
            setPass("");
            setUser("");
        } else {
            setWarning("*Invalid credentials");
        }
    };

    return (
        <div className='p-5 m-5'>
            <form className='form p-3 d-flex flex-column column' onSubmit={onSubmit}>
                <h4 className='text-light'>Login</h4>
                <label>UserName</label>
                <input type='text' value={user} className='inputText' onChange={onUserChange} />
                <label>Password</label>
                <input type='password' value={pass} className='inputText' onChange={onPassChange} />
                <input type="submit" className='btn btn-success button' />
                <p className='text-danger'>{warning}</p>
            </form>
            <p className='text-light'>UserName: mobileFirst</p>
            <p className='text-light'>Password: 1234</p>
        </div>
    );
};



export default Login;
