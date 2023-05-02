import React, { useState } from 'react';

function Signup(props) {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    props.setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    props.setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    props.setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await props.handleSignup({ username, email: props.email, password: props.password });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={props.email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={props.password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
