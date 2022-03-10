import React, { createContext, useReducer } from "react";

//creamos nuestro contexto
export const FormContext = createContext();

//creamos estado inicial de la app
const initialState = {
  entrenador: {
    nombre: "",
    apellido: "",
    email: "",
  },
  pokemon: {
    nombrePokemon: "",
    tipoPokemon: "",
    elementoPokemon: "",
    alturaPokemon: "",
    edadPokemon: "",
  },
};

//creamos función reductora
const reducer = (state, action) => {
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR":
      return {
        ...state,
        entrenador: {
          ...state.entrenador,
          ...action.payload,
        },
      };
    case "ACTUALIZAR_POKEMON":
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Creamos el povider
const FormContextProvider = ({ children }) => {

  //ESTADO CON USE REDUCER
  let [state, dispatch] = useReducer(reducer, initialState)


  /**
   * Dispara la acción del hook useReducer enviando información en formato clave: valor
   * @param {string} type Acción que se quiera realizar de la función reductora
   * @param {string} clave Propiedad del objeto
   * @param {string} valor Valor asignado a la propiedad ingresada
   */
  const handleBlur = (type, clave, valor) => {
    dispatch({
      type: type, 
      payload: {[clave]: valor}
    })

  }

  // Retornamos el provider junto con sus children
  return (
    <FormContext.Provider value={{ state, handleBlur }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
