import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";

// En este componente tenemos nuestro formulario y dentro de él
// tenemos los componentes que necesitan consumir nuestro estado.
// Recuerda cual es el paso que debemos tomar para que nuestros
// componentes puedan consumir un estado global. ???

//Sumar tipo de Pokémon, elemento, altura y edad al formulario.

const Formulario = () => {
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          {/*
           Si tan solo tuviesemos una manera de "encapsular" nuestros componentes
           para que puedan acceder al estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" esPokemon={false} />
              <Input name="apellido" label="Apellido" esPokemon={false}/>
              <Input name="email" label="Email" type="email" esPokemon={false}/>
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombrePokemon" label="Nombre" esPokemon={true}/>
              <Input name="tipoPokemon" label="Tipo" esPokemon={true}/>
              <Input name="elementoPokemon" label="Elemento" esPokemon={true}/>
              <Input name="alturaPokemon" label="Altura" esPokemon={true}/>
              <Input name="edadPokemon" label="Edad" esPokemon={true}/>
            </div>
          </div>
            <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
