import React from 'react';
import './App.css';
import ListApplicantComponent from './components/ListApplicantComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListApplicantComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
