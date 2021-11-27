import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import * as Yup from "yup";
import { useFormik } from "formik";
export const FormikYupPage = () => {
  const {
    handleSubmit,
    errors,
    touched,

    getFieldProps,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Debe de tener 8 caracteres o menos")
        .required("Requerido"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    }),
  });

  return (
    <div className="global-container">
      <div className="card login-form" id="page-login">
        <div className="card-body">
          <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479730796/olxyxybqaomlnbcqmqy8.png" />
          <div className="card-text">
            {/*
  <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="name"
                  {...getFieldProps("name")}
                />
                {touched.name && errors.name && <span>{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  {...getFieldProps("email")}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <a href="#">Forgot password?</a>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="exampleInputPassword1"
                  name="password"
                  {...getFieldProps("password")}
                />
                {touched.password && errors.password && (
                  <span>{errors.password}</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="signin"
              >
                Sign in
              </button>
              <div className="sign-up">
                Don't have an account? <Link to="/">Create One </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
