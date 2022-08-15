import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://1000marcas.net/wp-content/uploads/2020/01/Linkedin-logo.jpg"
        alt=""
      />

      <form>
        <input type="text" placeholder="Full name (required)" />
        <input type="text" placeholder="Email (required)" />
      </form>
    </div>
  );
};

export default Login;
