import React, { useState } from 'react';
import './Signup_Login.css'
import { Link } from 'react-router-dom';
import image from '../images/Google_Icon1.png'

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        if (!formData.firstName.trim() ) {
          newErrors.firstName = '*First Name is required';
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = '*Last Name is required';
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
        <button type="button" className="active">
            User
          </button>
          <Link to = "/companysignup">
          <button type="button">Company</button>
          </Link>
        </div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder='Enter first name'
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder='Enter last name'
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter email'
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
          placeholder='Enter password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label htmlFor="jobStatus">Job Status:</label>
        <input
          type="text"
          id="jobStatus"
          name="jobStatus"
          placeholder='Enter job status'
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