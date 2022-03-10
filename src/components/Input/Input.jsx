import React, { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

/**
 * Ejemplo de uso del componente <Input name="nombrePokemon" label="Nombre" esPokemon={true}>
 * @param {string} name Identificador del input
 * @param {string} label Nombre que se mostrará como label encima del input
 * @param {string} type Indica el tipo de input
 * @param {boolean} esPokemon  Indica si recolecta info del entrenador o del pokemon
 */
const Input = ({ name, label, type = "text", esPokemon}) => {
  // Acceder al estado global y guardar en el contexto los datos del form.
  const { state, handleBlur } = useContext(FormContext);

  // Estado local para manejar el estado del input.
  const [input, setInput] = useState('');

  const onChange = (e) => {
    // Actualizar el estado local del input.
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

export default Input;
