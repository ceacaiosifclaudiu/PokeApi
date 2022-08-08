import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ability from "../../components/details/Ability";
import HeightWeightBaseExperience from "../../components/details/HeightWeightBaseExperience";
import Moves from "../../components/details/Moves";
import Photo from "../../components/details/Photo";
import PokemonName from "../../components/details/PokemonName";
import Stats from "../../components/details/Stats";
import Type from "../../components/details/Type";
import "./Pokemon.css";

function PokemonDetails() {
  const pokemonName = useParams();

  const [singlePokemon, setSinglePokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.name}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePokemon(data);
      })
      .catch((err) => console.log(err));
  }, [pokemonName.name]);

  if (!singlePokemon) {
    return <>Loading …</>;
  }

  const { abilities, base_experience, moves, height, weight, stats } =
    singlePokemon;
  const { front_default, front_shiny, back_default, back_shiny } =
    singlePokemon.sprites;

  const ability = "powers.ability.name";
  return (
    <div className="container">
      <div className="pokemonCard">
        <div className="pokemonCardHeader">
          <Photo front_default={front_default} />
          <PokemonName singlePokemon={singlePokemon} />
          <Type singlePokemon={singlePokemon} />
        </div>

        <div className="pokemonCardBody">
          <HeightWeightBaseExperience
            height={height}
            weight={weight}
            base_experience={base_experience}
          />

          <Ability abilities={abilities} />
          <Stats stats={stats} />
          <Moves moves={moves} />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
