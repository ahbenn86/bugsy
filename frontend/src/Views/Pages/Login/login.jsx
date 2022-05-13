import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../../Controllers/Redux/authSlice";

import "./login.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();

  const [formInput, setForminput] = useState({
    name: "",
    password: "",
  });

  function inputChanged(e) {
    setForminput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    dispatch(signIn(formInput));
    e.preventDefault();
  }

  return (
    <div className="login-container">
      <div className="form">
      <form action="#" className="login-panel">
      <img className="login__logo" src='https://i.ibb.co/TL23pTK/bugsy-logo.png' alt=''/>
        <h1><strong>
        LOGIN
          </strong></h1>
        <input
          name="name"
          placeholder="Name"
          onChange={inputChanged}
          value={formInput.name}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={inputChanged}
          value={formInput.password}
        ></input>
        <button className="login_button" type="submit" onClick={submit}>
          Login
        </button>
      </form>
      </div>
    </div>
  );
};
