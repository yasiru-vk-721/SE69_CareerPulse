import './Button.css';
import { Link } from 'react-router-dom';    
 
export function Button(){
    return(
        <Link to ='login'>
            <button className='signUpBtn '>Log In</button>
        </Link>
    )
}

export default Button;