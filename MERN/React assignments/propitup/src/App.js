import React from 'react';

import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstname={"Jane"} lastname={"Doe"} age={45} haircolor={"Black"} />
        <PersonCard firstname={"John"} lastname={"Smith"} age={88} haircolor={"Brown"} />
        <PersonCard firstname={"Millard"} lastname={"Fillmore"} age={50} haircolor={"Brown"} />
        <PersonCard firstname={"Maria"} lastname={"Smith"} age={62} haircolor={"Brown"} />
      </header>
    </div>
  );
}


export default App;
