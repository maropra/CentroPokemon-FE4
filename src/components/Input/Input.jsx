import React, { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import PropTypes from "prop-types";

/**
 * Componente que devuelve un input del formulario con su label
 * Ejemplo de uso del componente <Input name="nombrePokemon" label="Nombre" esPokemon={true}>
 *
 */
const Input = ({ name, label, type = "text", esPokemon}) => {
  // Acceder al estado global y guardar en el contexto los datos del form.
  const { handleBlur } = useContext(FormContext);

  // Estado local para manejar el estado del input.
  const [input, setInput] = useState('');

   /**
   * Actualiza el estado local input con los datos del formulario.
   */
  const onChange = (e) => {
    const valor = e.target.value;
    setInput(valor);
  };

  /**
   * Clasifica los datos dependiendo si son del entrenador o del pokemon y los guarda en el contexto global 
   */
  const onBlur = (e) => {
    // Actualizar el estado global con los datos de cada input.
    e.preventDefault();
    if(esPokemon){
      handleBlur("ACTUALIZAR_POKEMON", name, input)  
    }else{
      handleBlur("ACTUALIZAR_ENTRENADOR", name, input)
    }
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={input}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

Input.prototypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  esPokemon: PropTypes.bool
}

export default Input;
