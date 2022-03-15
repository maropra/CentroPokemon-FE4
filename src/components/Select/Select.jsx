import React from "react";
import {useQuery} from "react-query";
import { obtenerTiposPokemon } from "../../utils/getTiposPokemon";

const Select = ({ name, label }) => {

    const {data, isLoading, isError} = useQuery(
        "tiposPokemon", 
        obtenerTiposPokemon
    )
    
    const tipos = data?.results?.map((tipo) =>{
        return <option value={tipo.name}>{tipo.name}</option>
    })

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
            <select name={name}>
                {tipos}
            </select>
        </div>
    ) :
    null;
}

export default Select;