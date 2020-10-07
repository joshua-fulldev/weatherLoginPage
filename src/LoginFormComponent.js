import React from 'react';
import './App.css';

function LoginForm() {
  return (
    <div className="LoginForm">
      <form>
        <h1 className="FormHeader">Sign In</h1>
        <label>
          Username :
            <br />
            <input type="text" name="username" />
        </label>
        <label>
          Password :
          <br />
          <input type="Password" name="password" />
        </label>
        <div className="CenterForm">
          <label>
            <input type="checkbox" value="remember" className="CheckBox"/>
            Remember Me
          </label>
            <input type="submit" value="Log In" className="SubmitButton" />

            <p>Don't have an Account ?
              <a href="https://www.github/sign-up"> Sign Up</a>
            </p>
            <p>
              <a href="https://www.google.com">Forgot Your Password?</a>
            </p>
        </div>
      </form>
    </div>
  )
}


export default LoginForm;
