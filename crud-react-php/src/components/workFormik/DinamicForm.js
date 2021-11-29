import { Formik, Form } from "formik";
import formJson from "../../data/custom-form.json";
import { MyTextField } from "./componetsformik";

const initialValues = {};
for (const input of formJson) {
  initialValues[input.name] = input.value;
}
export const DinamicForm = () => {
  return (
    <div>
      <h1>AFDF</h1>

      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label }) => {
              return (
                <MyTextField
                  key={name}
                  type={type}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              );
            })}
            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
