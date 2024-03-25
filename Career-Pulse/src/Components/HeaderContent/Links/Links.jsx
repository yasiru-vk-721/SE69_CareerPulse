import MenuLink from "../MenuLink/MenuLink"
import './Links.css'
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Dropdown from '../Dropdown';
import { Button } from "./Button";
import axios from "axios";
import toast from "react-hot-toast";


function Links() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = async () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('user');
    if(authStatus === 'true'){
      setAuth(true);
    }
  }, []);

  //if logged email is from the company de=atabase then show the company profile link
  


  const logOutUser =async () =>{
    try{
      await axios.get('/logout');
      toast.success("Logout Successfull")
      localStorage.removeItem('user');
      navigate('/login');
      window.location.reload();
    }catch(error){
      console.log(error);
    }
  }

  return (
    <nav className='navigationbar'>
        {/* <a href=""><img className="logo" src={logo} alt="Logo for career pulse" /></a> */}
        <Link to = '/' 
            className='navbar-logo'>
            Career Pulse <i className="fas fa-briefcase"></i>
            {/* <img src={Logo} alt="Career Pulse" className="logo"/> */}
        </Link>
        <div className='menuIcon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        
        <ul className={click ? 'navMenu active': 'navMenu'}>

          <li className="navigateItem">
            <MenuLink className="navgateLinks" onClick={closeMobileMenu} linkname="Home" url="/"/>
          </li>
          {auth ? (<>
          <li className="navigateItem">
            <MenuLink className="navgateLinks" onClick={closeMobileMenu} linkname="Vacancy" url="/vacancy"/>
          </li>
          </>) : ( <></>)}
          {/* <li className="navigateItem">
            <MenuLink className="navgateLinks" onClick={closeMobileMenu} linkname="About" url="/about"/>
          </li> */}
          <li className="navigateItem">
            <MenuLink className="navgateLinks" onClick={closeMobileMenu} linkname="Contact" url="/contact"/>
          </li>
          <li className="navigateItem">
            <MenuLink className="navgateLinks" onClick={closeMobileMenu} linkname="Profile" url="/profile"/>
          </li>
          {/* <li className="navigateItem">
            <MenuLink className="navgateLinks" onClick={closeMobileMenu} linkname="Company-Profile" url="/company-profile"/>
          </li> */}
          <li className="navigateItem"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link  className="navgateLinks" onClick={closeMobileMenu}>
                        Services <i className='fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown
                    />}   
          </li>
          {auth ? (<>
            <li className="navgateLinks">
            <button onClick={logOutUser}>LogOut</button>
          </li>
          
          </>) : (
            <>
            <Button/>
            </>
          )}
          

          <li>
            <Link className="navigateLinksMobile" onClick={closeMobileMenu} linkname="Sign Up" to="/signup"/>
          </li>
        </ul>
        <div className="hidden lg:block">
          {}
        </div>
        
    </nav>
  )
}

export default Links