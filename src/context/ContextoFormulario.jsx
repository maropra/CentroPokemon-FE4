// Aqui debemos crear nuestro contexto y nuestro provider.
import React, { useState, createContext } from "react";

//creamos nuestro contexto
export const FormContext = createContext();

// Creamos el povider
const FormContextProvider = ({ children }) => {
  // Aquí almacenamos los datos ingresados
  const [datosForm, setDatosForm] = useState("");
  //Defino funcion para agregar los datos al estado
  const agregarDato = (clave, valor) => {
    setDatosForm({ ...datosForm, [clave]: valor });
  };
  // Retornamos el provider junto con sus children
  return (
    <FormContext.Provider value={{ datosForm, agregarDato }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
