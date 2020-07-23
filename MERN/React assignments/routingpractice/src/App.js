import React from 'react';
import { Router, navigate } from '@reach/router'
import './App.css';
import WelcomeComp from './components/WelcomeComp';
import WordNumComp from './components/WordNumComp';
import ColorWordComp from './components/ColorWordComp';

function App() {
  const WelcomeHandler = (event) => {
    event.preventDefault();
    navigate('/home');
  }
  const WordNumHandler = (event) => {
    event.preventDefault();
    navigate('/"type a word or number in the url bar"');
  }
  const ColorHandler = (event) => {
    event.preventDefault();
    navigate('/"type the word (slash) background color (slash) text color"/blue/red');
  }
  return (
    <div className="App">
      <div>
        <h1>Please Click The Links So I Know Where You Wish To Go...</h1>
        <button onClick={WelcomeHandler}>Make Me Feel Welcome</button>
        <button onClick={WordNumHandler}>The Word or Number</button>
        <button onClick={ColorHandler}>The Crazy Word</button>
      </div>
      <hr />
      <Router>
        <WelcomeComp path={'/home'} />
        <WordNumComp path='/:wordNum' />
        <ColorWordComp path='/:word/:colorOne/:colorTwo' />
      </Router >

    </div >
  );
}

export default App;
