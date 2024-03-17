import  { useState } from 'react';
import './Signup_Login.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import {toast} from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const  [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try{
      const {data} = await axios.post('/login',{
        email,
        password
      });
      if(data.error){
        toast.error(data.error);
      }else{
        setData({})
        toast.success("Login Successfull")
        navigate('/');
        window.location.reload();
      }
    }catch(error){
      console.log(error)
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={loginUser}>
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder='Enter email'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label htmlFor="password">Password:</label>
        <div className='flex relative'>
        <input
          type={showPassword ? "text":"password"}
          placeholder='Enter password'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
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
