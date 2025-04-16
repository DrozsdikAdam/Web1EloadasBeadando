import React, { useRef, useState, useContext } from 'react';
import loginStyles from '../styles/Login.module.css';
import AuthContext from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [isloggedin, setisloggedin] = useContext(AuthContext);
    const unameRef = useRef();
    const pwordRef = useRef();
    const logs = [
        { uname: "asd", pword: "asd", age: 18, email: "example@gmail.com" },
        { uname: "person", pword: "passwd", age: 18, email: "example@gmail.com" },
        { uname: "username", pword: "password", age: 18, email: "example@gmail.com" }

    ];
    const navigate = useNavigate();
    const [unameErr, setunameErr] = useState("");
    const [pwordErr, setpwordErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let isformvalid = validateForm();
        if (isformvalid) {
            login();
        }
    }

    const login = () => {
        

        let uname = unameRef.current.value;
        let pwd = pwordRef.current.value;
        let isValidUser = false;

        for (const user of logs) {
            if (user.uname === uname && user.pword === pwd) {
                isValidUser = true;
                break; 
            }
        }

        if (isValidUser) {
            setisloggedin(true);
            navigate('/home');
            alert("Login Successful");
        }
        else {
            alert("Login Failed");
        }
    }

    const validateForm = () => {
        let isvalid = false;
        let uname = unameRef.current.value;
        let pwd = pwordRef.current.value;
        if (uname.trim() === "") {
            setunameErr("Username is required");
        }
        else if (pwd.trim() === "") {
            setunameErr("");
            setpwordErr("Password is required");
        }
        else {
            isvalid = true;
            setunameErr("");
            setpwordErr("");
        }
        return isvalid;
    }

    return (
        <>
            <div className={loginStyles.loginContainer}>
                <div className={loginStyles.heading}>Login</div>
                <div className={loginStyles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={loginStyles.formGroup}>
                            <label htmlFor="unname">Username</label>
                            <input type="text" ref={unameRef} name='uname' />
                            {unameErr.length > 0 ? <span className={loginStyles.error}>{unameErr}</span> : null}
                        </div>
                        <div className={loginStyles.formGroup}>
                            <label htmlFor="pword">Password</label>
                            <input type="password" ref={pwordRef} name='pword' />
                            {pwordErr.length > 0 ? <span className={loginStyles.error}>{pwordErr}</span> : null}
                        </div>
                        <button className={loginStyles.loginBtn} type="submit">Login</button>
                        <div className={loginStyles.registerLink} onClick={() => {navigate('/register');}}>Register</div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;