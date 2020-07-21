import React, { useState } from 'react';
// import FetchPokemon from './components/fetchPokemon'

import './App.css';
import PokemonList from './components/PokemonList';
import PokeButton from './components/PokeButton';

function App() {
  const [state, setState] = useState([]);


  return (
    <div className="App">
      <PokeButton setState={setState} />
      <PokemonList state={state} />
    </div >
  );
}

export default App;
