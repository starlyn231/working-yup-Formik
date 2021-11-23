import React from 'react'
import loginImg from '../assets/log.svg'
import { useForm } from './hook/useForm';
import './style.css'

export const Login = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name,  password } = formValues;
  const handletSubmit =(e)=>{
    e.preventDefault();
    console.log(formValues);
  }


  return (
    <div className="base-container" >
    <div className="header">Login</div>
    <div className="content">
      <div className="image">
        <img src={loginImg}  alt=""logimg/>
      </div>
      <form onSubmit={handletSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          autoComplete="off"
          aria-describedby="helpId"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          aria-describedby="helpId"
        
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*******"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-secondary btn-lg btn-block">
        Guardar
      </button>
    </form>
    </div>
  </div>
  )
}
