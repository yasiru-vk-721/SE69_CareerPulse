import './App.css'
import Footer from './Components/FooterContent/Footer'
import Header from './Components/HeaderContent/Header'
import {Toaster} from 'react-hot-toast'
import axios from 'axios';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Vacancy from './pages/Vacancy'
import Profile from './pages/Profile'
import CVStatus from './pages/CVStatus'
import CompanyProfile from './Components/Team_files/Yasiru-FE/CompanyProfileContent/CompanyProfile'
import Login from './pages/Login'
import CompanySignup from './pages/CompanySignup'
import Signup from './pages/Signup'
import PageNotFound from './pages/PageNotFound'
import { UserContextProvider } from '../context/userContext';
import { CompanyContextProvider } from '../context/companyContext';
import JobPosting from './pages/JobPosting';
import CompanyLogin from './pages/CompanyLogin'
import Notification from './pages/MailNotification';
import UserApplication from './pages/UserApplication';

axios.defaults.baseURL = 'https://se-69-career-pulse-v4i2.vercel.app/';
axios.defaults.withCredentials = true; 

function App() {


  return (
    <UserContextProvider>
      <CompanyContextProvider>
      <Header />
      <Toaster  position='bottom-right' toastOptions={{duration : 2000}}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cvstatus" element={<CVStatus />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/company-register" element={<CompanySignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobposting" element={<JobPosting />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='/companyLogin' element={<CompanyLogin/>}/>
        <Route path="/Notification" element={<Notification />} />
        <Route path="/UserApplication" element={<UserApplication />} />
        </Routes>
        <Footer />
      </CompanyContextProvider>
    </UserContextProvider>
  )
}

export default App
