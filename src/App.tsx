import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm.tsx';
import Header from './components/Header.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <RegistrationForm />
    </div>
  );
};

export default App;
