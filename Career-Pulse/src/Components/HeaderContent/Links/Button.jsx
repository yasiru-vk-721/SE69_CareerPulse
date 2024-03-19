import './Button.css';
import { Link } from 'react-router-dom';    
 
export function Button(){
    return(
        <Link to ='signup'>
            <button className='signUpBtn '>Sign Up</button>
        </Link>

    )
}

export default Button;