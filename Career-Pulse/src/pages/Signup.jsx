import  { useState } from 'react';
import './Signup_Login.css'
import { Link } from 'react-router-dom';
import image from '../images/Google_Icon1.png'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function Signup() {
    const navigate = useNavigate();
    // const [firstName, setFName] = useState('');
    // const [lastName, setLName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmpassword, setComfirmPassword] = useState('');
    // const [jobStatus, setJobStatus] = useState('');
    // const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: "",
        jobStatus: ""
    });

    // const [errors, setErrors] = useState({});

    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     setErrors({ ...errors, [name]: '' }); // Clear validation errors on change

    //     if (name === 'email' && value.trim() !== '') {
    //         const emailError = !/\S+@\S+\.\S+/.test(value) ? '*Invalid email address' : '';
    //         setErrors({ ...errors, [name]: emailError });
    //     }

    //     if (name === 'password') {
    //         const passwordError = value.length < 8 ? '*Password needs at least 8 characters' : '';
    //         setErrors({ ...errors, [name]: passwordError });
    //     }
    //     if (name === 'confirmpassword') {
    //         const confirmpasswordError = value.length < 8 ? '*Password needs at least 8 characters' : '';
    //         setErrors({ ...errors, [name]: confirmpasswordError });
    //     }

    //     if (name === 'firstName' && value.trim() === '') {
    //         setErrors({ ...errors, [name]: '*First name is required' });
    //     }

    //     if (name === 'lastName' && value.trim() === '') {
    //         setErrors({ ...errors, [name]: '*Last name is required' });
    //     }

    //     if (name === 'jobStatus' && value.trim() === '') {
    //         setErrors({ ...errors, [name]: '*Job status is required' });
    //     }
    // };

    const registerUser = async (e) => {
        e.preventDefault();
        const {firstName, lastName, email, password, confirmpassword, jobStatus} = data;
        try{
            const {data} = await axios.post('/register',{
                firstName, lastName, email, password, confirmpassword, jobStatus
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success("Login Successfull")
                navigate('/login')
            }
        }catch(error){
            console.log(error)
        }

        // const newErrors = {};
        // if (!data.firstName.trim()) {
        //     newErrors.firstName = '*First name is required';
        // }
        // if (!data.lastName.trim()) {
        //     newErrors.lastName = '*Last name is required';
        // }
        // if (!data.email.trim()) {
        //     newErrors.email = '*Email is required';
        // } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        //     newErrors.email = '*Invalid email address';
        // }
        // if (!data.password.trim()) {
        //     newErrors.password = '*Password is required';
        // } else if (data.password.length < 8) {
        //     newErrors.password = '*Password needs at least 8 characters';
        // }
        // if (!data.confirmpassword.trim()) {
        //     newErrors.confirmpassword = '*Confirm Password is required';
        // } else if (data.confirmpassword.length < 8) {
        //     newErrors.confirmpassword = '*Password needs at least 8 characters';
        // }
        // if (!data.jobStatus.trim()) {
        //     newErrors.jobStatus = '*Job status is required';
        // }

        // if (Object.keys(newErrors).length > 0) {
        //     setErrors(newErrors);
        //     return;
        // }

        // axios.post('http://localhost:3000/register', { firstName, lastName, email, password, confirmpassword, jobStatus })
        //     .then(result => {
        //         console.log(result)
        //         navigate("/")
        //     })
        //     .catch(err => console.log(err))
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={registerUser}>
                <h2>Sign Up</h2>
                <div className="switch-buttons">
                    <button type="button" className="active">
                        User
                    </button>
                    <Link to="/company-register">
                        <button type="button">Company</button>
                    </Link>
                </div>

                {/* <label htmlFor="firstName">First Name:</label> */}
                <input
                    type="text"
                    // id="firstName"
                    name="firstName"
                    placeholder='Enter first name'
                    value={data.firstName}
                    onChange={(e) => setData({ ...data, firstName: e.target.value })}
                    // onBlur={handleChange}
                />
                {/* {errors.firstName && <p className="error">{errors.firstName}</p>} */}

                {/* <label htmlFor="lastName">Last Name:</label> */}
                <input
                    type="text"
                    // id="lastName"
                    name="lastName"
                    placeholder='Enter last name'
                    value={data.lastName}
                    onChange={(e) => setData({ ...data, lastName: e.target.value })}
                    // onBlur={handleChange}
                />
                {/* {errors.lastName && <p className="error">{errors.lastName}</p>} */}

                {/* <label htmlFor="email">Email:</label> */}
                <input
                    type="email"
                    // id="email"
                    name="email"
                    placeholder='Enter email'
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    // onBlur={handleChange}
                />
                {/* {errors.email && <p className="error">{errors.email}</p>} */}

                {/* <label htmlFor="password">Password:</label> */}
                <input
                    type="password"
                    // id="password"
                    name="password"
                    placeholder='Enter password'
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    // onBlur={handleChange}
                />
                {/* {errors.password && <p className="error">{errors.password}</p>} */}

                {/* <label htmlFor="confirmpassword">Confirm Password:</label> */}
                <input
                    type="password"
                    // id="confirmpassword"
                    name="confirmpassword"
                    placeholder='Enter confirm password'
                    value={data.confirmpassword}
                    onChange={(e) => setData({ ...data, confirmpassword: e.target.value })}
                    // onBlur={handleChange}
                />
                {/* {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>} */}

                {/* <label htmlFor="jobStatus">Job Status:</label> */}
                <input
                    type="text"
                    // id="jobStatus"
                    name="jobStatus"
                    placeholder='Enter job status'
                    value={data.jobStatus}
                    onChange={(e) => setData({ ...data, jobStatus: e.target.value })}
                    // onBlur={handleChange}
                />
                {/* {errors.jobStatus && <p className="error">{errors.jobStatus}</p>} */}

                <button className="submitbutton" type="submit">Sign Up</button>

                <div className="google-signin-container">
                    <button type="button" className="google-signin-button">
                        <img className="google-signin-icon" src={image} alt="Google Icon" />
                        Sign Up with Google
                    </button>
                </div>

                <p>Already have an account?<Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;
