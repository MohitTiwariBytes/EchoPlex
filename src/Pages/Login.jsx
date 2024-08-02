import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Login.css";
import earth from "../assets/3892168217.gif";

const Login = () => {
  useEffect(() => {
    gsap.fromTo(
      ".login-card",
      { y: 50, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".login-form",
      { x: -50, opacity: 0 },
      { duration: 1, delay: 0.5, x: 0, opacity: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".img img",
      { x: 50, opacity: 0 },
      { duration: 1, delay: 0.5, x: 0, opacity: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".wrapper h1",
      {
        y: 1700,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );
  }, []);

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
                <h1>Sign In</h1>
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
