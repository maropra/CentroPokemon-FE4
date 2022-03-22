import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { FormContext } from "../../context/ContextoFormulario";
import { obtenerEspeciesPokemon } from "../../servicios/getEspeciesPokemon";

const InputEspecie = ({name, label}) => {
    const [mostrarPopup, setMostrarPopup] = useState(false);
    
    const {handleBlur} = useContext(FormContext);

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=20")

    const {data, isLoading, isError} = useQuery(
      ["especiesPokemon", url],
      () => obtenerEspeciesPokemon(url),
      { keepPreviousData: true }
    )
    
    const elegirEspecie = (e, nombreEspecie) => {
        e.preventDefault();
        handleBlur("ACTUALIZAR_POKEMON", name, nombreEspecie);
        setMostrarPopup(false);
    }

    const listadoEspecies = data?.results?.map(especie => {
        return (<button 
                    key={especie.name}
                    className="botones-especie"
                    onClick={(e) => elegirEspecie(e, especie.name)}>
                        {especie.name}
                </button>);
    })

    const handleNext = () => {
      setUrl(data?.next)
      console.log(url);
    }

    const handlePrevious = () => {
      if(data.previous !== null) setUrl(data.previous)
    }

    if (isLoading)
    return <div className="input-contenedor" style={{ color: "white" }}>Cargando...</div>;

    if (isError)
    return (
      <div className="input-contenedor">
        Ups, hubo un error
      </div>
    );

    return(
        <div className="input-contenedor">
        {mostrarPopup && (
            <div className="popup-especie">
            <h4>Seleccionar especie</h4>
            <div className="contenedor-especies">{listadoEspecies}</div>
            <div className="paginador">
                <button className="boton-anterior" onClick={handlePrevious}>Anterior</button>
                <button className="boton-siguiente" onClick={handleNext}>Siguiente</button>
            </div>
            </div>
        )}
      <p htmlFor={name}>{label}</p>
      <button
        className="boton-seleccionar-especies"
        onClick={() => setMostrarPopup(true)}
      >
        Seleccionar
      </button>
    </div>
    );
}

export default InputEspecie;