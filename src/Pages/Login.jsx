import React from "react";
import "./Login.css";
import earth from "../assets/3892168217.gif";

const Login = () => {
  return (
    <div className="main-login">
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <h1>
              <z>EchoPlex!</z>
            </h1>
          </div>
        </div>
        <div className="login-card">
          <div className="left">
            <div className="login-form">
              <div className="header">
                <h1>SignIn</h1>
              </div>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <div className="button">
                <button>Enter</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img">
              <img height={300} src={earth} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
