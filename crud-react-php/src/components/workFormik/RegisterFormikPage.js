import "./styles/styles.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { MyTextField, MySelect, MyCheckbox } from "./componetsformik";
export const RegisterFormikPage = () => {
  return (
    <div className="name">
      <h1>RegisterFormikPage</h1>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "Too Short!")
            .max(15, "Must be 15 characters or less")
            .required("Requerido"),

          email: Yup.string()
            .email("El correo no tiene un formato válido")
            .required("Requerido"),
          password: Yup.string()
            .min(6, "Minimo 6 letras")
            .required("Please Enter your password"),

          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref("password")],
            "Passwords must match"
          ),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextField name="firstName" type="text" label="First Name" />

            <MyTextField name="email" type="email" label="Correo" />

            <MyTextField name="password" type="password" label="Password" />

            <MyTextField
              name="passwordConfirmation"
              type="password"
              label="Confirm Password"
            />

            <button type="submit">Create</button>

            <button type="button">Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
