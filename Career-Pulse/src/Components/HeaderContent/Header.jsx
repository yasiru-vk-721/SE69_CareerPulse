
import '../HeaderContent/Header.css'

import Links from '../HeaderContent/Links/Links';

function Header() {
  return (
    <>
    <div id="header">
      <div>
        {/* <a href=""><img className="logo" src={logo} alt="Logo for career pulse" /></a> */}
        <Links />
      </div>
    </div>
    </>
  )
}

export default Header