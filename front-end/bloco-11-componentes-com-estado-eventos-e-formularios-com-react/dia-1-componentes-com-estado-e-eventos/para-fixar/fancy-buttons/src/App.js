import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cliquesBotao1: 0,
      cliquesBotao2: 0,
      cliquesBotao3: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1 = () => {
    this.setState(() => ({
      cliquesBotao1: 1,
    }))
}

handleClick2 = () => {
  this.setState(() => ({
    cliquesBotao2: 1,
  }))
}

handleClick3 = () => {
  this.setState(() => ({
    cliquesBotao3: 1,
  }))
}
  render() {
    return (
    <div>
      <button onClick={ this.handleClick1 }>Botão 1</button>
      <button onClick={ this.handleClick2 }>Botão 2</button>
      <button onClick={ this.handleClick3 }>Botão 3</button>
    </div>
    )}
}

export default App;
