import React from 'react'
import { Link } from 'react-router-dom'
import './form.css'


export const ExampleForm = () => {



  return (
    <div className="global-container">
    <div className="card login-form">
      <div className="card-body">
        <h3 className="card-title text-center">Log in to Codepen</h3>
        <div className="card-text">
          {/*
  <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
     
           
          <form >
          

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" 
              className="form-control form-control-sm"
               id="exampleInputEmail1" aria-describedby="emailHelp" 
              name="name"   
             
             />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control form-control-sm"
               id="exampleInputEmail1" aria-describedby="emailHelp"   name="email" 
              
               />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <a href="#">Forgot password?</a>
              <input type="password" className="form-control form-control-sm"  
              id="exampleInputPassword1"   name="password" 
               />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
            <div className="sign-up">
               Don't have an account? <Link  to="/">Create One  </Link> 
            </div>
          </form>
     
        </div>
      </div>
    </div>
  </div>
  )
}
