import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo';

function App() {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <UserForm formData={state} formResults={setState} hasBeenSubmitted={hasBeenSubmitted} setHasBeenSubmitted={setHasBeenSubmitted} />
      <UserInfo formInfo={state} hasBeenSubmitted={hasBeenSubmitted} />
    </div>
  );
}

export default App;
