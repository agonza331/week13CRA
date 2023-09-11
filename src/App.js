import React from 'react';
import './App.css';
import LoginForm from './components/loginForm';
import Navigation from './components/nav';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;
