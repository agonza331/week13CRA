import React from "react";
import '../login.css';
/*import from react
using a function to create a form asking users to type in a username & password */

function LoginForm() {
    return (
        <div className="login-form">
      <h3 className="login-title">Log In</h3>
      <div className="input-container">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </div>
    </div>
    );
}
export default LoginForm;