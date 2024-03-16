import  { useState } from 'react';
import './Signup_Login.css'
import { Link } from 'react-router-dom';
import image from '../images/Google_Icon1.png'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CompanySignup() {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setComfirmPassword] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setErrors({ ...errors, [name]: '' }); // Clear validation errors on change

        if (name === 'email' && value.trim() !== '') {
            const emailError = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
            setErrors({ ...errors, [name]: emailError });
        }

        if (name === 'password') {
            const passwordError = value.length < 8 ? 'Password needs at least 8 characters' : '';
            setErrors({ ...errors, [name]: passwordError });
        }
        if (name === 'confirmpassword') {
            const confirmpasswordError = value.length < 8 ? 'Password needs at least 8 characters' : '';
            setErrors({ ...errors, [name]: confirmpasswordError });
        }

        if (name === 'companyName' && value.trim() === '') {
            setErrors({ ...errors, [name]: 'Company name is required' });
        }
        if (name === 'location' && value.trim() === '') {
            setErrors({ ...errors, [name]: 'Company Location is required' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitting form...");
        const newErrors = {};
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8) {
            newErrors.password = 'Password needs at least 8 characters';
        }
        if (!confirmpassword.trim()) {
            newErrors.confirmpassword = 'Confirm Password is required';
        } else if (confirmpassword.length < 8) {
            newErrors.confirmpassword = 'Password needs at least 8 characters';
        }
        if (!companyName.trim()) {
            newErrors.companyName = 'Company name is required';
        }
        if (!location.trim()) {
            newErrors.location = 'location is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        axios.post('http://localhost:3000/company-register', { companyName, email, password, confirmpassword, location })
            .then(result => {
                console.log(result)
                navigate("/")
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Company Sign Up</h2>
                <div className="switch-buttons">
                <Link to="/signup">
                        <button type="button">User</button>
                    </Link>
                    <button type="button" className="active">
                        Company
                    </button>

                </div>

                <label htmlFor="companyName">Company Name:</label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder='Enter first name'
                    onChange={(e) => setCompanyName(e.target.value)}
                    onBlur={handleChange}
                />
                {errors.companyName && <p className="error">{errors.companyName}</p>}

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Enter email'
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Enter password'
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}

                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder='Enter confirm password'
                    onChange={(e) => setComfirmPassword(e.target.value)}
                    onBlur={handleChange}
                />
                {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}

                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder='Enter location'
                    onChange={(e) => setLocation(e.target.value)}
                    onBlur={handleChange}
                />
                {errors.location && <p className="error">{errors.location}</p>}

                <button className="submitbutton" type="submit">Sign Up</button>

                <div className="google-signin-container">
                    <button type="button" className="google-signin-button">
                        <img className="google-signin-icon" src={image} alt="Google Icon" />
                        Sign Up with Google
                    </button>
                </div>

                <p>Already have an account?<Link to="/">Login</Link></p>
            </form>
        </div>
    );
}

export default CompanySignup;
