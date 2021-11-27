import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import * as Yup from "yup";
import { useFormik, Field, Formik, Form, ErrorMessage } from "formik";

export const FormikComponents = () => {
  return (
    <div className="global-container">
      <div className="card login-form" id="page-login">
        <div className="card-body">
          <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479730796/olxyxybqaomlnbcqmqy8.png" />
          <div className="card-text">
            {/*
  <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}

            <h1> FormikComponents</h1>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                term: "false",
                jobType: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .max(8, "Debe de tener 8 caracteres o menos")
                  .required("Requerido"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Requerido"),
                password: Yup.string()
                  .required("Please Enter your password")
                  .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                  ),
              })}
            >
              {(formik) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="span" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <Field name="email" type="" text />
                    <ErrorMessage name="email" component="span" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword">password</label>
                    <Field name="password" type="" text />
                    <ErrorMessage name="password" component="span" />
                  </div>

                  <label htmlFor="exampleInputPassword">password</label>
                  <Field name="password" type="" text />
                  <ErrorMessage name="password" component="span" />

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword">password</label>
                    <Field name="password" type="" text />
                    <ErrorMessage name="password" component="span" />
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
