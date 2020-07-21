import React, { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';

function App() {
  const [katanaSet, setKatanaSet] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <FormComponent katanaSet={katanaSet} setKatanaSet={setKatanaSet} list={list} setList={setList} />
      <hr />
      <ListComponent list={list} setList={setList} />

    </div>
  );
}

export default App;
