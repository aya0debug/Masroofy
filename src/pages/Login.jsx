import React from 'react'
import image from "../assets/site.png"
import lock from "../assets/Lock.svg"
import email from "../assets/Email.svg"
import { useState } from 'react';
import "./Login.css"

function Login() {
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
        <LoginForm/>
      </div>
    </div>
    <div className='image'>
        <p className='textlogo'> Masroofy</p>
        <img src={image}></img>
    </div>
    </div>
  )
}

export default Login



const LoginForm = () => {
  // State to store the input values for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameclass, setUsernameclass] = useState('inputgroup');
  const [passwordclass, setPasswordclass] = useState('inputgroup');

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernameclass("inputgroup");
    setPasswordclass("inputgroup");
    // You can add validation here, or send the data to your backend
    console.log('Username:', username);
    console.log('Password:', password);
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
      <p className='textlogin'>Login</p>
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
