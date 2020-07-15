import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';

function App() {
  const [state, setState] = useState([])
  return (
    <div className="App">
      <BoxForm state={state} setState={setState} />
    </div>
  );
}

export default App;
