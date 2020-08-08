import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>INSIDE APP COMPONENT</h1>
        <button className="btn btn-dark">
        <i className="fab fa-reacteurope"></i>I am a button<i className="fab fa-reacteurope"></i>
        </button>
      </div>
    );
  }
}

export default App;
