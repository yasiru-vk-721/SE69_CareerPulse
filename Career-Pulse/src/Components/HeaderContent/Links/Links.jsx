import MenuLink from "../MenuLink/MenuLink"
// import logo from '../../assets/react.svg'
import './Links.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import Dropdown from '../Dropdown';
import { Button } from "./Button";
// import Logo from "../Links/logo2.png"


function Links() {
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

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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
          <li className="navigateItem">
            <MenuLink className="navgateLinks" onClick={closeMobileMenu} linkname="Vacancy" url="/vacancy"/>
          </li>
          <li className="navigateItem">
            <MenuLink className="navgateLinks" onClick={closeMobileMenu} linkname="About" url="/about"/>
          </li>
          <li className="navigateItem">
            <MenuLink className="navgateLinks" onClick={closeMobileMenu} linkname="Contact" url="/contact"/>
          </li>
          <li className="navigateItem"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to = '/services' className="navgateLinks" onClick={closeMobileMenu}>
                        Services <i className='fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown
                    />}   
                </li>

          <li>
            <Link className="navigateLinksMobile" onClick={closeMobileMenu} linkname="Sign Up" to="/sign-up"/>
          </li>
        </ul>
        <div className="hidden lg:block">
          {}
        </div>
        <Button/>
    </nav>
  )
}

export default Links