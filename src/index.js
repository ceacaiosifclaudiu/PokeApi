import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import PokemonDetails from "./pages/pokemonDetail/PokemonDetails";
import Stats from "./components/details/stats/Stats";
import Moves from "./components/details/moves/Moves";
import Ability from "./components/details/ability/Ability";
import Sprites from "./components/details/sprites/Sprites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:name" element={<PokemonDetails />}>
        <Route path="sprites" element={<Sprites />} />
        <Route path="abilities" element={<Ability />} />
        <Route path="stats" element={<Stats />} />
        <Route path="moves" element={<Moves />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
