import React, { useRef, useState, useContext } from "react";
import registerStyles from "../styles/Register.module.css";
import AuthContext from "../services/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isloggedin, setisloggedin] = useContext(AuthContext);
  const unameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const pwordRef = useRef();
  const pwordagainRef = useRef();

  const navigate = useNavigate();
  const [unameErr, setunameErr] = useState("");
  const [pwordErr, setpwordErr] = useState("");
  const [pwordagainErr, setpwordagainErr] = useState("");
  const [ageErr, setageErr] = useState("");
  const [emailErr, setemailErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isformvalid = validateForm();
    if (isformvalid) {
      login();
    }
  };

  const validateForm = () => {
    let isvalid = false;
    let uname = unameRef.current.value;
    let pwd = pwordRef.current.value;
    let pwdagain = pwordagainRef.current.value;
    let email = emailRef.current.value;
    let age = ageRef.current.value;
    var check =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (uname.trim() === "") {
      setunameErr("Username is required");
    } else if (email.trim() === "") {
      setunameErr("");
      setemailErr("Email is required");
    } else if (!check.test(email)) {
      console.log(check.test(email));
      setunameErr("");
      setemailErr("Email is not in the good format");
    } else if (age.trim() < 18) {
      setunameErr("");
      setemailErr("");
      setageErr("age is required to be above 18");
    } else if (pwd.trim() === "") {
      setunameErr("");
      setemailErr("");
      setageErr("");
      setpwordErr("Password is required");
    } else if (pwdagain.trim() === "") {
      setunameErr("");
      setageErr("");
      setpwordErr("");
      setemailErr("");
      setpwordagainErr("Password again is required");
    }
    else if (pwdagain.trim() !== pwd.trim()) {
        setunameErr("");
        setageErr("");
        setpwordErr("");
        setemailErr("");
        setpwordagainErr("Passwords are not the same");
      }
     else {
      isvalid = true;
      setunameErr("");
      setageErr("");
      setpwordErr("");
      setpwordagainErr("");
      setemailErr("");
    }
    return isvalid;
  };

  return (
    <div className={registerStyles.loginContainer}>
      <div className={registerStyles.heading}>Register</div>
      <div className={registerStyles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={registerStyles.formGroup}>
            <label htmlFor="uname">Username</label>
            <input type="text" ref={unameRef} name="uname" />
            {unameErr.length > 0 ? (
              <span className={registerStyles.error}>{unameErr}</span>
            ) : null}
          </div>
          <div className={registerStyles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="text" ref={emailRef} name="email" />
            {emailErr.length > 0 ? (
              <span className={registerStyles.error}>{emailErr}</span>
            ) : null}
          </div>
          <div className={registerStyles.formGroup}>
            <label htmlFor="age">Age</label>
            <input type="number" ref={ageRef} name="age" />
            {ageErr.length > 0 ? (
              <span className={registerStyles.error}>{ageErr}</span>
            ) : null}
          </div>
          <div className={registerStyles.formGroup}>
            <label htmlFor="pword">Password</label>
            <input type="password" ref={pwordRef} name="pword" />
            {pwordErr.length > 0 ? (
              <span className={registerStyles.error}>{pwordErr}</span>
            ) : null}
          </div>
          <div className={registerStyles.formGroup}>
            <label htmlFor="pwordagain">Password again</label>
            <input type="password" ref={pwordagainRef} name="pwordagain" />
            {pwordagainErr.length > 0 ? (
              <span className={registerStyles.error}>{pwordagainErr}</span>
            ) : null}
          </div>
          <button className={registerStyles.RegisterBtn} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
