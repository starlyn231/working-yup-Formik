import { Formik, Form } from "formik";
import * as Yup from "yup";
import formJson from "../../data/custom-form.json";
import { MySelect, MyTextField } from "./componetsformik";

const initialValues = {};
const requiredFields = {};

for (const input of formJson) {
  //captura valor inicial
  initialValues[input.name] = input.value;

  //si no tiene validacion, sale
  if (!input.validations) continue;

  //crea un schema para cada uno de los campos
  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        rule.value || 2,
        `Mínimo de ${rule.value || 2} caracteres`
      );
    }

    if (rule.type === "email") {
      schema = schema.email(`Revise el formato del email`);
    }
  }
  // ... otras reglas

  requiredFields[input.name] = schema;
}
//objeto con todas las validaciones
const validationSchema = Yup.object({ ...requiredFields });

export const DinamicForm = () => {
  return (
    <div>
      <h1>AFDF</h1>

      <Formik
        initialValues={{ name: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextField
                    key={name}
                    type={type}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select Option </option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              return <span>Type: {type} No es soportado </span>;
            })}
            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
