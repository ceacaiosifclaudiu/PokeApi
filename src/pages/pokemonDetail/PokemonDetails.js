import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Ability from "../../components/details/Ability";
import Description from "../../components/details/Description";
import HeightWeightBaseExperience from "../../components/details/HeightWeightBaseExperience";
import Moves from "../../components/details/Moves";
import Photo from "../../components/details/Photo";
import PokemonName from "../../components/details/PokemonName";
import Stats from "../../components/details/Stats";
import Type from "../../components/details/Type";
import "./Pokemon.css";

function PokemonDetails() {
  const pokemonName = useParams();
  const nav = useNavigate();

  const [singlePokemon, setSinglePokemon] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.name}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePokemon(data);
      })
      .catch((err) => console.log(err));
  }, [pokemonName.name]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.name}`)
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.flavor_text_entries[0].flavor_text);
        console.log(data.flavor_text_entries[0].flavor_text);
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
      <button className="pokemonDetailsButton" onClick={() => nav("/")}>
        <h3>Back</h3>
      </button>
      <div className="pokemonCard pokeDetails">
        <div className="pokemonCardHeader">
          <Photo front_default={front_default} />
          <PokemonName singlePokemon={singlePokemon} />
          <Type singlePokemon={singlePokemon} />
        </div>

        <div className="pokemonCardBody">
          <Description description={description} />
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
