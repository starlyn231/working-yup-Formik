import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { MyTextField, MySelect, MyCheckbox } from "./componetsformik";

export const FormikAbstraction = () => {
  return (
    <div className="main">
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato válido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida.")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextField name="firstName" type="text" label="First Name" />
            <MyTextField name="lastName" type="text" label="Last Name" />
            <MyTextField name="email" type="email" label="Correo" />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Develper</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Termns & Conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
