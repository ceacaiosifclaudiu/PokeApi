import React, { useState, useEffect } from "react";
import CardPokemons from "../pokemonDetails/CardPokemons";
import { useNavigate } from "react-router-dom";
import "./CardsWithPokemons.css";
import Pagination from "./Pagination";

const Card = () => {
  const [pokemons, setPokemons] = useState([]);
  const [input, setInput] = useState("");
  const nav = useNavigate();
  const [pokemonsOnPage, setPokemonsOnPage] = useState(0);
  const [page, setPage] = useState(1);

  const onClickLeft = (e) => {
    if (pokemonsOnPage == 0) {
      console.log("You cant go above then this!");
    } else {
      setPokemonsOnPage(pokemonsOnPage - 20);
      if (page >= 0) {
        setPage(page - 1);
      }
    }
  };

  const onClickRight = (e) => {
    if (pokemonsOnPage > 400) {
      console.log("You cant go higer then this!");
    } else {
      setPokemonsOnPage(pokemonsOnPage + 20);
      if (page < 30) {
        setPage(page + 1);
      }
    }
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
        <div className="title">
          <h1>Who's your Pokémon partner?</h1>
        </div>

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
      {!input ? (
        <Pagination
          pokemonsOnPage={pokemonsOnPage}
          setPokemonsOnPage={setPokemonsOnPage}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
          page={page}
          setPage={setPage}
        />
      ) : null}
    </div>
  );
};

export default Card;
