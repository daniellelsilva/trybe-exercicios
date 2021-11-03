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
    this.setState((estadoAnterior, _props) => ({
      cliquesBotao1: estadoAnterior.cliquesBotao1 + 1
    }))
  }

  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      cliquesBotao2: estadoAnterior.cliquesBotao2 + 1
    }))
  }

  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      cliquesBotao3: estadoAnterior.cliquesBotao3 + 1
    }))
  }

  changeBtnColor(number) {
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
    <div>
      <button onClick={ this.handleClick1 } style={{ backgroundColor: this.changeBtnColor(this.state.cliquesBotao1) }}>Botão 1 | Count = {this.state.cliquesBotao1}</button>
      <button onClick={ this.handleClick2 } style={{ backgroundColor: this.changeBtnColor(this.state.cliquesBotao2) }}>Botão 2 | Count = {this.state.cliquesBotao2}</button>
      <button onClick={ this.handleClick3 } style={{ backgroundColor: this.changeBtnColor(this.state.cliquesBotao3) }}>Botão 3 | Count = {this.state.cliquesBotao3}</button>
    </div>
    )}
}

export default App;
