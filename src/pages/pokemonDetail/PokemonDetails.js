import React, { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import Ability from "../../components/details/ability/Ability";
import Description from "../../components/details/description/Description";
import HeightWeightBaseExperience from "../../components/details/heightweightbaseexperience/HeightWeightBaseExperience";
import Moves from "../../components/details/moves/Moves";
import Photo from "../../components/details/Photo";
import PokemonName from "../../components/details/PokemonName";
import Stats from "../../components/details/stats/Stats";
import Type from "../../components/details/type/Type";
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
          <Photo src={front_default} />
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

          <nav className="links">
            <NavLink
              to="sprites"
              className={({ isActive }) => (isActive ? "linkActiv" : "link")}>
              <h2>Sprites</h2>
            </NavLink>
            <NavLink
              to="stats"
              className={({ isActive }) => (isActive ? "linkActiv" : "link")}>
              <h2>Stats</h2>
            </NavLink>
            <NavLink
              to="moves"
              className={({ isActive }) => (isActive ? "linkActiv" : "link")}>
              <h2>Moves</h2>
            </NavLink>
            <NavLink
              to="abilities"
              className={({ isActive }) => (isActive ? "linkActiv" : "link")}>
              <h2>Abilities</h2>
            </NavLink>
          </nav>

          <Outlet
            context={{
              stats,
              moves,
              abilities,
              front_default,
              front_shiny,
              back_default,
              back_shiny,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
