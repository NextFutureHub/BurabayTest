import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm.tsx';
import SideNav from './components/SideNav.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <RegistrationForm />
      <SideNav />
    </div>
  );
};

export default App;
