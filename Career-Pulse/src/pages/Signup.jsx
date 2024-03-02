import React, { useState } from 'react';
import './Signup_Login.css'
import { Link } from 'react-router-dom';
import image from '../images/Google_Icon1.png'

function Signup({ switchForm }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        jobStatus: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        // Real-time validation for email
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
    
      const handleSubmit = (e) =>{
        e.preventDefault();
    
        // Validate the form
        const newErrors = {};
        if (!formData.fullName.trim() && switchForm !== 'user') {
          newErrors.fullName = '*Full Name is required';
        }
    
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
        if (!formData.jobStatus.trim()) {
          newErrors.jobStatus = '*Job Status is required';
        }
        // If there are validation errors, set the errors state and return
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
        
        
        console.log('User Form submitted:', formData);
      };
      
  return (
    <div className="signup-container">
      
        <form className="signup-form" onSubmit={handleSubmit}>
        
        <h2>Sign Up</h2>
        <div className="switch-buttons">
          <button type="button" onClick={() => switchForm('user')} className="active">
            User
          </button>
          <button type="button" onClick={() => switchForm('company')}>Company</button>
        </div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleChange} // Add onBlur event for email field
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label htmlFor="jobStatus">Job Status:</label>
        <input
          type="text"
          id="jobStatus"
          name="jobStatus"
          value={formData.jobStatus}
          onChange={handleChange}
        />
        {errors.jobStatus && <p className="error">{errors.jobStatus}</p>}

        <button className="submitbutton" type="submit">Sign Up</button>
        <div className="google-signin-container">
          <button type="button" className="google-signin-button">
          <img className="google-signin-icon" src={image} alt="Google Icon" />
            Sign Up with Google
          </button>
        </div>
        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
        
        
      
        
        
        </form>
      
    </div>
  )
}

export default Signup