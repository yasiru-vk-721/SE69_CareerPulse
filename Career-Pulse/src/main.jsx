import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Vacancy from './pages/Vacancy.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Profile from './pages/Profile.jsx'
import CVStatus from './pages/CVStatus.jsx'
import Login from './pages/Login.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupForm from './Components/Team_files/Chathuvi-fe/SignupForm.jsx'

const router = createBrowserRouter([
  { path: "/", 
  element: <App /> 
  },
  {
    path: "/vacancy",
    element: <Vacancy />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/cvstatus",
    element: <CVStatus />,
  },

{
  path: '/login',
  element: <Login/>,
},
{
  path: '/companysignup',
  element: <SignupForm/>
},
{
  path: '/signup',
  element: <SignupForm/>
},
  
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
