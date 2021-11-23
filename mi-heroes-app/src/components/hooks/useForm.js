import { useState } from "react";
// RECIBE UN OBJETO, EL CUAL SE MANIPULA
export const useForm = (initialState = {}) => {
  const [value, setValue] = useState(initialState);
  const reset = () => {
    setValue(initialState);
  };
  // Sirve para leer rapido el objeto.
  const handleInputChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };
  return [value, handleInputChange, reset];
};
