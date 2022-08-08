import React from "react";
import Photo from "../details/Photo";
import "./CardPokemons.css";

function PokemonDetails({ name, id, onClick, url }) {
  const arrayIds = url.split("/", [7]);
  const arrayId = arrayIds[6];

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${arrayId}.png`;

  return (
    <div className="pokemonDetails" id={id} key={id} onClick={onClick}>
      <Photo front_default={imageUrl} />

      <h1>{name}</h1>
    </div>
  );
}

export default PokemonDetails;
