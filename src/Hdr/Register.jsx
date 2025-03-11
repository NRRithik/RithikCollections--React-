import React, { Component } from 'react';
import './Register.css'; // Import the CSS file for styling

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginForm: false, // Tracks whether the form is in login mode
      username: '', // Stores the username input
      password: '', // Stores the password input
      usernameError: '', // Stores username validation error
      passwordError: '', // Stores password validation error
    };
  }

  // Toggle between Register and Login forms
  toggleForm = () => {
    this.setState(
      (prevState) => ({ isLoginForm: !prevState.isLoginForm }),
      this.clearInputs
    );
  };

  // Handle form submission
  handleForm = (event) => {
    event.preventDefault();
    const { username, password, isLoginForm } = this.state;

    if (isLoginForm) {
      this.login(username, password);
    } else {
      this.register(username, password);
    }
  };

  // Register a new user
  register = (username, password) => {
    const existingUser = localStorage.getItem('user');
    if (existingUser) {
      alert('A user is already registered. Please try using another username.');
      this.toggleForm(); // Switch to login form
      return;
    }

    // Save new user
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful! Please login.');
    this.toggleForm(); // Switch to login form
  };

  // Login an existing user
  login = (username, password) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
      // Redirect to another page (replace with your desired route)
      window.location.href = '/home'; // Example: Redirect to a home page
    } else {
      alert('Invalid username or password.');
    }
  };

  // Clear input fields
  clearInputs = () => {
    this.setState({ username: '', password: '' });
  };

  // Handle input changes
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isLoginForm, username, password } = this.state;

    return (
      <div className="container">
        <form id="form" onSubmit={this.handleForm}>
          <h1 id="form-title">{isLoginForm ? 'Login' : 'Register'}</h1>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
            <div className="error" id="username-error"></div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
            <div className="error" id="password-error"></div>
          </div>

          <div className="input-group">
            <button type="submit" id="submit-btn">
              {isLoginForm ? 'Login' : 'Register'}
            </button>
          </div>

            <p id="toggle-form">{isLoginForm ? "Don't have an account? " : 'Already have an account? '} 
                <button type="button" onClick={this.toggleForm} style={{ background: 'none', border: 'none', color: 'rgb(243, 2, 243)', cursor: 'pointer', textDecoration: 'underline' }}> 
                    {isLoginForm ? 'Register here' : 'Login here'}
                </button>
            </p>
        </form>
      </div>
    );
  }
}

export default Register;