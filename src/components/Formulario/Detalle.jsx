import React, { useEffect, useContext } from "react";
import { useMutation } from "react-query";
import { FormContext } from "../../context/ContextoFormulario";
import { enviarForm } from "../../servicios/enviarForm";

const Detalle = () => {
  // Obtener los datos del formulario para poder mostrarlo en la vista previa.

  const { state } = useContext(FormContext);

  const {isError, isSuccess, isLoading, data, mutate, error } = useMutation(enviarForm)

  useEffect(() => {
    if (isSuccess) alert("Formulario enviado correctamente");
    if (isError) alert("No se pudo enviar el formulario" + error);
    console.log(isSuccess)
  }, [isError, isSuccess, data])
  
  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre:{state?.entrenador.nombre}</p>
          <p>Apellido:{state?.entrenador.apellido}</p>
          <p>Email:{state?.entrenador.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{state?.pokemon.nombrePokemon}</p>
          <p>Tipo:{state?.pokemon.tipoPokemon}</p>
          <p>Elemento:{state?.pokemon.elementoPokemon}</p>
          <p>Altura:{state?.pokemon.alturaPokemon}</p>
          <p>Edad:{state?.pokemon.edadPokemon}</p>
          <p>Especie:{state?.pokemon.especiePokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => mutate(state)}
      >
        Enviar Solicitud
      </button>
      {isLoading && <p>Cargando...</p>}
    </div>
  );
};

export default Detalle;
