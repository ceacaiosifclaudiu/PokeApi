import React, { useState, useEffect } from "react";
import CardPokemons from "../pokemonDetails/CardPokemons";
import { useNavigate } from "react-router-dom";
import "./CardsWithPokemons.css";
import Pagination from "./Pagination";

const Card = () => {
  const [pokemons, setPokemons] = useState([]);
  const [input, setInput] = useState("");
  const nav = useNavigate();
  const [pokemonsOnPage, setPokemonsOnPage] = useState(20);

  const onClickLeft = (e) => {
    if (pokemonsOnPage == 0) {
      console.log("You cant go lower then this!");
    } else {
      setPokemonsOnPage(pokemonsOnPage - 20);
    }

    console.log(pokemonsOnPage);
  };

  const onClickRight = (e) => {
    setPokemonsOnPage(pokemonsOnPage + 20);
    console.log(pokemonsOnPage);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemonsOnPage}&limit=20`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, [pokemonsOnPage]);

  //----- The input should have a debounce response time of 300ms fromwhen the user stops typing.

  const [timer, setTimer] = useState(3);

  const handleChange = (event, timeout) => {
    if (timeout) clearTimeout(timeout);

    setTimeout(() => {
      setInput(event.target.value);
    }, 300);
  };

  //----- input debouce ends

  return (
    <div className="container">
      <div className="header">
        <h1>Let's find the pokemon you deserve!</h1>

        <div className="searchBarContainer">
          <div className="searchBarInput">
            <input type="text" className="searchBar" onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="cardsContainer">
        {pokemons
          .filter((pokemon) => pokemon.name.includes(input))
          .map((filteredPokemon, index) => {
            return (
              <CardPokemons
                filteredPokemon={filteredPokemon}
                name={filteredPokemon.name}
                key={index}
                id={index}
                url={filteredPokemon.url}
                onClick={() => nav(`/${filteredPokemon.name}`)}
              />
            );
          })}
      </div>
      <Pagination
        pokemonsOnPage={pokemonsOnPage}
        setPokemonsOnPage={setPokemonsOnPage}
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
      />
    </div>
  );
};

export default Card;
