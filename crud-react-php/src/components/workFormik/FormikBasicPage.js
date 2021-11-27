import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { FormikErrors, useFormik } from 'formik'
export const FormikBasicPage = () => {

  const validate =(values)=>{
    const errors={};
    if (!values.name) {  errors.name = 'Required';
    } else if ( values.name.length >= 7) {
      errors.name = 'Must be 7 characters or less';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if  ( values.password.length >= 7){
      errors.password = 'Required';
    }
    
    return errors;
  }


const {handleChange, values,handleSubmit, errors, touched,handleBlur} =useFormik({
 
  
  
  initialValues:{
    name:'',
    email:'',
    password:'',
  },
 
  onSubmit:(values)=>{
    console.log(values)
  },
  validate
})

  return (
    <div className="global-container">
    <div className="card login-form" id="page-login">
      <div className="card-body">
       <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479730796/olxyxybqaomlnbcqmqy8.png"/>
        <div className="card-text">
          {/*
  <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
     
           
          <form onSubmit={handleSubmit} noValidate>
          

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" 
              className="form-control form-control-sm"
               id="exampleInputEmail1" aria-describedby="emailHelp" 
              name="name"  onChange={handleChange}
              onBlur={handleBlur}
               value={values.name}
             
             />
              { touched.name && errors.name && <span>{errors.name}</span>}
            </div>
          
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control form-control-sm"
               id="exampleInputEmail1" aria-describedby="emailHelp"   
               name="email" onChange={handleChange}   onBlur={handleBlur} value={values.email}
              
               />
                { touched.email &&  errors.email && <span>{errors.email}</span>}
            </div>
            <div className="form-group">
            
              <label htmlFor="exampleInputPassword1">Password</label>
              <a href="#">Forgot password?</a>
              <input type="password" className="form-control form-control-sm"  
              id="exampleInputPassword1"   name="password" 
              onChange={handleChange}  onBlur={handleBlur}  value={values.password}
               />
             { touched.password && errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit" className="btn btn-primary btn-block" id="signin">Sign in</button>
            <div className="sign-up">
               Don't have an account? <Link to="/">Create One  </Link> 
            </div>
          </form>
     
        </div>
      </div>
    </div>
  </div>
  )
}
