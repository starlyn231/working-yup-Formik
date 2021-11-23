import React from 'react'
import loginImg from "../assets/login.svg";
import { useForm } from './hook/useForm';
import './style.css';
export const Signup = () => {

  const [formValues, handleInputChange] =useForm({
    username:'',
    email:'',
    password:''
  })
const handleSubmit =()=>{
  console.log('starly')
}
  const {username, email, password} =formValues;


  return (
    <div className="base-container" >
    <div className="header">Register</div>
    <div className="content">
      <div className="image">
        <img src={loginImg}  alt="logout"/>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username" 
           value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="email" value={email} onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" value={password} onChange={handleInputChange}
           placeholder="password" />
        </div>
       
      </div>
    </div>
    <div className="footer">
    <button type="button" className="btn btn-secondary  btn-lg btn-block" onClick={handleSubmit}>
        Register
      </button>
    </div>
  </div>
  )
}
