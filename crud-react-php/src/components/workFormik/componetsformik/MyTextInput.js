import React from "react";
import { useField, ErrorMessage } from "formik";

export const MyTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <ErrorMessage name={props.name} component="span" />
      ) : null}
    </>
  );
};
