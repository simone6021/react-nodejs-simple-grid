import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import Users from './components/Users';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <Users></Users>
        </div>
      </div>
    );
  }
}

export default App;
