import React, { useState } from 'react';
import './App.css';
import UserForm from './components/userForm';
import UserInfo from './components/userInfo';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    hasBeenSubmitted: useState(false)
  });
  return (
    <div className="App">
      <UserForm formData={state} formResults={setState} />
      <UserInfo formInfo={state} />
    </div>
  );
}

export default App;
