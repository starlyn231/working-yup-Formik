import { useField } from "formik";

//const props = [{ label: "", type: "input", name: "firstName" }];
export const MyTextInput = ({ props }) => {
  //in useField viene como props el values, y las funciones como onChanges etc...
  const { label } = props;
  const [field, meta] = useField();
  console.log(field);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error && (
        <span className="error"> {meta.error}</span>
      )}
    </>
  );
};
