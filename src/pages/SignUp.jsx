import React from 'react'
import image from "../assets/site.png"
import lock from "../assets/Lock.svg"
import email from "../assets/Email.svg"
import { useState } from 'react';
import "./Login.css"
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../state/actions/authActions';
import { Navigate, useNavigate } from 'react-router-dom';

function SignUp() {
  return (
    <div className='login'>
    <div className='background'>
      <div className='pink'>
        <div></div>
      </div>
      <div className='blue'>
        <div></div>
      </div>
      <div className='purple'>
        <SignUpForm/>
      </div>
    </div>
    <div className='image'>
        <p className='textlogo'> Masroofy</p>
        <img src={image}></img>
    </div>
    </div>
  )
}

export default SignUp



const SignUpForm = () => {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameclass, setUsernameclass] = useState('inputgroup');
  const [passwordclass, setPasswordclass] = useState('inputgroup');
  const dispatch = useDispatch(); 
  const error = useSelector((state) => state.auth.error);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernameclass("inputgroup");
    setPasswordclass("inputgroup");
    dispatch(signup({ email, password }));
    Navigate('/login');
  };
  const handleClick = (event) => {
    if(usernameclass=="inputgroup" && passwordclass=="inputgroup selected"){
       setUsernameclass("inputgroup selected");
       setPasswordclass("inputgroup");
    }else{
       setUsernameclass("inputgroup");
       setPasswordclass("inputgroup selected");
    }
  };

  return (
    <div >
      <p className='textlogin'>Sign Up</p>
      <form onSubmit={handleSubmit}>
        <div className={usernameclass}>
          <input
            type="text"
            id="username"
            value={username}
            onClick={(e)=>handleClick(e)}
            placeholder='email'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <img className='icon' src={email}/>
        </div>
        
        <div className={passwordclass}>
          <input
            type="password"
            id="password"
            placeholder='password'
            onClick={(e)=>handleClick(e)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <img className='icon' src={lock}/>
        </div>
        
        <div className="buttongroup">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
