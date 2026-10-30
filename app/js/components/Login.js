import React, { useRef } from 'react'
import { useNavigate } from 'react-router'

import fetch from 'isomorphic-fetch';

/**
 * The login component handles login and logout of a donor.
 *
 * @author Jeff Risberg, Brandon Risberg
 * @since March 2016
 */
function Login(props) {
    const navigate = useNavigate();
    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    const logout = () => {
        if (props.donor != undefined && props.donor != null) {
            props.logout(props.donor.token);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const login = loginRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        // send login request to back end
        return fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            contentType: "application/json",
            dataType: 'json',
            body: JSON.stringify({login: login, password: password})
        }).then(() => {
            navigate('/');
        })
    };

    if (props.donor != undefined && props.donor != null)
        return (
            <div>
                <p>
                    You are logged in as {props.donor.firstName} {props.donor.lastName}
                </p>
                <button onClick={logout}>Logout</button>
            </div>
        );
    else
        return (
            <div style={{width: '500px'}}>
                <form onSubmit={handleSubmit}>
                    <h2>Please Login</h2>
                    Login: <input type="text" ref={loginRef}/>
                    <br/>
                    Password: <input type="password" ref={passwordRef}/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
}

export default Login;
