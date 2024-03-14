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
import CompanyProfile from './Components/Team_files/Yasiru-FE/CompanyProfileContent/CompanyProfile.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CompanySignup from './pages/CompanySignup.jsx'
import Signup from './pages/Signup.jsx'
import PageNotFound from './pages/PageNotFound.jsx'


const router = createBrowserRouter([
  { path: "*", 
  element: <PageNotFound/> 
  },
  { path: "/home", 
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
    path: "/company-profile",
    element: <CompanyProfile/>
  },

{
  path: '/',
  element: <Login/>,
},
{
  path: '/company-register',
  element: <CompanySignup/>
},
{
  path: '/signup',
  element: <Signup/>
},
  
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
