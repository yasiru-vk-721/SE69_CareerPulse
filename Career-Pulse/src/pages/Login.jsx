import React, { useState } from 'react';
import './Signup_Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear validation errors on change
    
        if (name === 'email' && e.type === 'blur' && value.trim() !== '') {
          const emailError = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
          setErrors({ ...errors, [name]: emailError });
        }
    
        // Real-time validation for password
        if (name === 'password') {
          const passwordError = value.length < 8 ? 'Password needs at least 8 characters' : '';
          setErrors({ ...errors, [name]: passwordError });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate the form
        const newErrors = {};
        
        if (!formData.email.trim()) {
          newErrors.email = '*Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Invalid email address';
        }
    
        if (!formData.password.trim()) {
          newErrors.password = '*Password is required';
        } else if (formData.password.length < 8) {
          newErrors.password = 'Invalid password (at least 8 characters required)';
        }
    
        // If there are validation errors, set the errors state and return
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
    
        // Continue with signup logic (add your logic here)
    
        console.log('User Form submitted:', formData);
      };
  return (
    <div className="signup-container">
      
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter email'
          value={formData.email}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Enter password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button className="submitbutton" type="submit">Login</button>
        <p>
           Don't have an account yet? 
            <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login