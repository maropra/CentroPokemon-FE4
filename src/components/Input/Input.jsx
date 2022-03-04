import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const { datosForm, agregarDato } = useContext(FormContext);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [input, setInput] = useState(datosForm[name] || "");

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    const valor = e.target.value;
    setInput(valor);
  };

  const onBlur = (e) => {
    e.preventDefault();
    agregarDato(name, input);
    //console.log(datosForm);

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
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
