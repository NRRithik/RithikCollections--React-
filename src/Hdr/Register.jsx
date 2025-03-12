import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setUsername('');
    setPassword('');
  };

  const handleForm = (event) => {
    event.preventDefault();
    if (isLoginForm) {
      login(username, password);
    } else {
      register(username, password);
    }
  };

  const register = (username, password) => {
    if (localStorage.getItem('user')) {
      alert('A user is already registered. Please use another username.');
      toggleForm();
      return;
    }
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registration successful! Please login.');
    toggleForm();
  };

  const login = (username, password) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
      alert('Login successful!');
      navigate('/'); // Redirect to home page
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="container">
      <form id="form" onSubmit={handleForm}>
        <h1 id="form-title">{isLoginForm ? 'Login' : 'Register'}</h1>

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <button type="submit" id="submit-btn">
            {isLoginForm ? 'Login' : 'Register'}
          </button>
        </div>

        <p id="toggle-form">
          {isLoginForm ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={toggleForm}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgb(243, 2, 243)',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}>
            {isLoginForm ? 'Register here' : 'Login here'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
