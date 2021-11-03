import React from 'react';
import './App.css';

function handleClick() {
  console.log('clicou!')
}

class App extends React.Component {
  render() {
    return <button onClick={handleClick}>Botão</button>
  }
}

export default App;
