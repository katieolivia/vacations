import React, { Component } from 'react';
import VacationPackages from './components/VacationPackages';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Vacations</h2>
    
        <VacationPackages/> 
      </div>
    );
  }
}

export default App;
