import React from 'react';
import './App.css';
import Home from "./Warung/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="container">                     
            <h1>HIMAJOH</h1>
            <h3>Warung Makan Kelompok 12</h3>        
                <Home />
        </div>
      </div>
    )
  }
}

export default App;