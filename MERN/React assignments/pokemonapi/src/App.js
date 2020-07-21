import React, { useState } from 'react';
// import FetchPokemon from './components/fetchPokemon'
import './App.css';

function App() {
  const [state, setState] = useState([]);


  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(res => {
        return res.json()
      })
      .then(
        response => {
          setState(response.results);
        })
      .catch(e => console.log(e));
    console.log(state);
  }
  return (
    <div className="App">
      <button onClick={fetchPokemon}>Gotta Catch 'em All!</button>
      {
        state.map((item, idx) => {
          return (
            <div key={idx}>
              <label>^_^{item.name}^_^</label>
            </div>
          )
        })}
    </div >
  );
}


export default App;
