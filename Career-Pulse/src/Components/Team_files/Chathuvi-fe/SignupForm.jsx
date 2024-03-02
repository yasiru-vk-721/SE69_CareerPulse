import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../../../pages/Signup';
import CompanySignup from '../../../pages/CompanySignup';


function SignupForm() {

  const [currentForm, setCurrentForm] = useState('user');
  const navigate = useNavigate();

  const switchForm = (formType) => {
    setCurrentForm(formType);
    // Update the URL path based on the form type
    navigate(`/${formType === 'user' ? 'signup' : 'companysignup'}`);
  };

  return (
    <div>
      {currentForm === 'user' ? (
        <Signup switchForm={() => switchForm('company')} />
      ) : (
        <CompanySignup switchForm={() => switchForm('user')} />
      )}
    </div>
  )
}

export default SignupForm
