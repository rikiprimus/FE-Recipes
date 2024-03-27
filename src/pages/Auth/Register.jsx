import React, { useState } from 'react'
import './index.css'
import { CardInput, Button, Checkbox } from '../../components'
import { Link } from 'react-router-dom'

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='container-fluid custom-container'>
      <div className='d-flex flex-column justify-content-center align-items-center '>
        <h1 className='title-register mb-5'>Recipe...</h1>
        <div className="d-flex flex-column gap-3 mb-5 align-items-center">
          <h1 className="title-register">Let's Get Started !</h1>
          <p className="description-register" >Create new account to access all features</p>
        </div>
      </div>
      <form className='container-fluid container-form'>
        <div className='d-flex flex-column justify-content-center gap-2 mb-5'>
          <CardInput 
            id='Name'
            name='Name' 
            placeholder='Name'
          />
          <CardInput 
            id='Email'
            name='Email' 
            placeholder='Email'
          />
          <CardInput
            id='Password'
            name='Password' 
            placeholder='Password'
          />
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} className='mb-5'/>
        </div>
        <Button text='Register Account'/>
        <h6 className='text-alternative'>Already have account ? 
          <Link to='/login' className='link'> Log in Here</Link>
          </h6>
      </form>
    </div>
  )
}

export default Register