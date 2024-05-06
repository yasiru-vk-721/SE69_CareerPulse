import  { useState} from 'react';
import './Signup_Login.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import {toast} from 'react-hot-toast';
import userImage from '../images/userLogin.jpg';

function Login() {
  const navigate = useNavigate();
  const  [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    companyEmail: "",
    companyPassword: "",
  });

  const companyLogin = async (e) => {
    e.preventDefault();
    const { companyEmail, companyPassword } = data;
    try{
      const {data} = await axios.post('/company-login',{
        companyEmail,
        companyPassword
      });
      if(data.error){
        toast.error(data.error);
      }else{
        setData({})
        toast.success("Login Successfull")
        localStorage.setItem('company', true);
        navigate('/');
        window.location.reload();
      }
    }catch(error){
      console.log(error)
    }};


  return (
    <div>
      <div className="signup-container min-h-screen flex justify-center items-center bg-gradient-to-l from-black to-slate-600">
        <div className='max-w-screen-xl w-full flex'>
        <div className="w-1/2 bg-gradient-to-l from-black to-slate-600 p-8">
            <img src={userImage} alt="Login Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-1/2 bg-gradient-to-l from-black to-slate-600 p-5">
              <form onSubmit={companyLogin} className='border-zinc-400 border-2 p-3'>
                <h2 className='text-3xl font-semibold text-center text-white mb-6'>Company Login</h2>

                <label htmlFor="email" className='block  text-white'>Email:</label>
                <input
                  type="companyEmail"
                  name="emaicompanyEmaill"
                  placeholder='Enter email'
                  value={data.companyEmail}
                  onChange={(e) => setData({ ...data, companyEmail: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />

                <label htmlFor="password" className='text-white'>Password:</label>
                <div className='flex relative'>
                <input
                  type={showPassword ? "text":"password"}
                  placeholder='Enter password'
                  value={data.companyPassword}
                  onChange={(e) => setData({ ...data, companyPassword: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 "
                />
                {showPassword ? (
                      <FaEye 
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 cursor-pointer' 
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <FaEyeSlash 
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 cursor-pointer'
                        onClick={() => setShowPassword(!showPassword)} 
                      />
                      
                    )}
                </div>

                <button className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>

                <div className="mt-6 text-center">
                <hr className="border-gray-300" />
                <p className="inline-block mx-3 text-gray-500">OR</p>
                <hr className="border-gray-300" />
              </div>
                <p className="mt-6 text-center text-white">
                  If you are a new to Career Pulse, please 
                </p>
                <button className='mt-6 w-full bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                  <Link to="/company-register">Sign Up</Link>
                </button>
              </form>
              
              </div>
          </div>
          <Link to="/login" className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              User Login
          </Link>
      </div>
    </div>
  )
}

export default Login;
