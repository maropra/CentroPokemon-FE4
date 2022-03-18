import React, {useContext} from "react";
import {useQuery} from "react-query";
import { FormContext } from "../../context/ContextoFormulario";
import { obtenerTiposPokemon } from "../../utils/getTiposPokemon";

const Select = ({ name, label }) => {

    const {data, isLoading, isError} = useQuery(
        "tiposPokemon", 
        obtenerTiposPokemon
    )
    
    const tipos = data?.results?.map((tipo) =>{
        return <option key={tipo.name} value={tipo.name}>{tipo.name}</option>
    })

    const {handleBlur} = useContext(FormContext);

    const onChange = (e) => {
        e.preventDefault();
        handleBlur("ACTUALIZAR_POKEMON", name, e.target.value)
    }

    if (isLoading)
    return <div style={{ color: "white" }}>Cargando...</div>;

    if (isError)
    return (
      <div>
        Ups, hubo un error
      </div>
    );

    return data?.results ? (

        <div className="input-contenedor">
            <label htmlFor={name}>{label}</label>
            <select name={name} onChange={onChange} disabled={isLoading || isError}>
                {tipos}
            </select>
        </div>
    ) :
    null;
}

export default Select;