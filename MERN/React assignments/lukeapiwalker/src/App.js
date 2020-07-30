import React, { useState, useEffect } from 'react';
import { Router, navigate } from '@reach/router'
import './App.css';
import Axios from 'axios';
import SearchResults from './components/SearchResults';

function App() {
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);
  useEffect = () => {
    Axios.get('http://swapi.dev/api/people/')
      .then(
        response => {
          setPeople(response.data.results);
        });
    Axios.get('http://swapi.dev/api/planets/')
      .then(
        response => {
          setPlanets(response.data.results);
        });

  }

  const getResults = (event) => {
    if (option.value === 'people') {
      navigate(`'/people/${idNum.value}'`);
    }
    else {
      navigate(`'/planets/${idNum.value}'`);
    }

  }

  return (
    <div className="App">
      <div>
        <form onSubmit={getResults}>
          <label for='searchBar'>Search For: </label>
          <select name="searchBar" id="searchBar">
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          <label >ID: </label>
          <input type="number" name="idNum" id="idNum" />
          <button type="submit">Search</button>
        </form>
      </div>
      <hr />
      <Router>
        <SearchResults path={'/:submitted/:id'} people={people} planets={planets} />
      </Router>
    </div>
  );
}

export default App;
