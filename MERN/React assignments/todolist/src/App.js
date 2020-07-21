import React, { useState } from 'react';
import axios from '';
import './App.css';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';

function App() {
  const [katanaSet, setKatanaSet] = useState("");
  const [list, setList] = useState([]);

  const getpokemon = fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(response => {
      console.log(response)
      setstate(response.results)
    })
    .catch(error => console.log(error));
  show loading display



  return (
    <div className="App">
      <FormComponent katanaSet={katanaSet} setKatanaSet={setKatanaSet} list={list} setList={setList} />
      <hr />
      <ListComponent list={list} setList={setList} />

    </div>
  );
}

export default App;
