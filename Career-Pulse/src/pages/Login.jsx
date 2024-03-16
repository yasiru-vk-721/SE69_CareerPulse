import  { useState } from 'react';
import './Signup_Login.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedWithoutCredentials, setSubmittedWithoutCredentials] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const  [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: '' }); // Clear validation errors on change

    if (name === 'email' && value.trim() !== '') {
      const emailError = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
      setErrors({ ...errors, [name]: emailError });
    }

    if (name === 'password') {
      const passwordError = value.length < 8 ? '*Password needs at least 8 characters' : '';
      setErrors({ ...errors, [name]: passwordError });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check before submitting
    if (!email || !password || errors.email || errors.password) {
      setSubmittedWithoutCredentials(true);
      return;
    }

    axios.post('http://localhost:3000/login', { email, password })
      .then(result => {
        console.log(result)
        if (result.data === "Success") {
          navigate("/home");
        } else {
          // Handle invalid credentials
          setErrors({ ...errors, credentials: '*Invalid email or password' });
        }
      })
      .catch(err => console.log(err))
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <div className='flex relative'>
        <input
          id="password"
          type={showPassword ? "text":"password"}
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handleChange}
        />
        {showPassword ? (
              <FaEye 
                className='absolute top-1/2 right-2 transform -translate-y-1/2' 
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash 
                className='absolute top-1/2 right-2 transform -translate-y-1/2'
                onClick={() => setShowPassword(!showPassword)} 
              />
              
            )}
        </div>
        <div>
        {errors.password && <p className="error">{errors.password}</p>}
        {errors.credentials && <p className="error">{errors.credentials}</p>}
        {submittedWithoutCredentials && !email && !password && (
          <p className="error">*Please enter your email and password</p>
        )}
        </div>

          

        <button className="submitbutton" type="submit">Login</button>

        <div className="grid items-center grid-cols-3 mt-6 text-red-800">
            <hr className="border-black" />
            <p className="text-sm text-center">OR</p>
            <hr className="border-black" />
        </div>
        <p>
          If you are a new to Career Pulse, please 
        </p>
        <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <Link to="/signup">Sign Up</Link>
        </button>
      </form>
    </div>
  )
}

export default Login;
