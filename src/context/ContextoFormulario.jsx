// Aqui debemos crear nuestro contexto y nuestro provider.
import React, { createContext, useReducer } from "react";

// crear nuestro useReducer en el contexto del formulario, para concentrar todo el estado del formulario en un solo lugar (y no tenerlo repartido en el código). Creamos el Hook (dentro del ContextoFormulario), y le agregamos el estado inicial. Por el momento, pongamos una función vacía como función reductora.

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
  //ESTADO CON USE STATE
  // Aquí almacenamos los datos ingresados
  // const [datosForm, setDatosForm] = useState("");
  //Defino funcion para agregar los datos al estado
  // const agregarDato = (clave, valor) => {
  //   setDatosForm({ ...datosForm, [clave]: valor });
  // };

  //ESTADO CON USE REDUCER
  let [state, dispatch] = useReducer(reducer, initialState)

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
