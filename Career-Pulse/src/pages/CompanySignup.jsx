import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/Google_Icon1.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CompanySignup() {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
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
        } else if (password !== confirmpassword) {
            newErrors.confirmpassword = 'Passwords do not match';
        }
        if (!companyName.trim()) {
            newErrors.companyName = 'Company name is required';
        }
        if (!location.trim()) {
            newErrors.location = 'Location is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        axios.post('http://localhost:3000/company-register', { companyName, email, password, confirmpassword, location })
            .then(result => {
                console.log(result);
                navigate("/");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4 font-bold text-center">Company Sign Up</h2>
                <div className="flex justify-center mb-4">
                    <Link to="/signup">
                        <button type="button" className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                            User
                        </button>
                    </Link>
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                        Company
                    </button>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            placeholder='Enter company name'
                            onChange={(e) => setCompanyName(e.target.value)}
                            onBlur={handleChange}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />
                        {errors.companyName && <p className="text-red-500 mb-2">{errors.companyName}</p>}

                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter email'
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleChange}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />
                        {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}

                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter password'
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={handleChange}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />
                        {errors.password && <p className="text-red-500 mb-2">{errors.password}</p>}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="confirmpassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmpassword"
                            name="confirmpassword"
                            placeholder='Enter confirm password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={handleChange}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />
                        {errors.confirmpassword && <p className="text-red-500 mb-2">{errors.confirmpassword}</p>}

                        <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder='Enter location'
                            onChange={(e) => setLocation(e.target.value)}
                            onBlur={handleChange}
                            className="w-full border rounded-md py-2 px-3 mt-1 mb-3"
                        />
                        {errors.location && <p className="text-red-500 mb-2">{errors.location}</p>}
                    </div>
                </div>

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-4" type="submit">
                    Sign Up
                </button>

                <div className="mt-6 text-center">
                    <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        <img className="h-6 w-6 inline-block mr-2" src={image} alt="Google Icon" />
                        Sign Up with Google
                    </button>
                </div>

                <p className="text-center mt-4">Already have an account?<Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link></p>
            </form>
        </div>
    );
}

export default CompanySignup;
