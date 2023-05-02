import React, { useState } from 'react';
import axios from 'axios';
import Signup from './SignUp';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/api/sign-in", {
        email,
        password,
      });
      const data = response.data;
      console.log(data);
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
    }
  };

  const handleSignup = async ({ username, email, password }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/sign-up", {
        username,
        email,
        password,
      });
      const data = response.data;
      console.log(data);
      handleLogin(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleLogin(email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      {loggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <button type="submit">Login</button>
          </form>
          <Signup
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSignup={handleSignup}
          />
        </div>
      )}
    </div>
  );
}

export default Login;
