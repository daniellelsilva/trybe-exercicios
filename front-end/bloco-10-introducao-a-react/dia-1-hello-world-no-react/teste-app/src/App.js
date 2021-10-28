import React from 'react'
import './App.css';

const Books = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const livros = ['o pintassilgo', 'o colecionador', 'crime e castigo'];

class App extends React.Component {
  render() {
    return (
      <ul>{ livros.map(livro => Books(livro))}</ul>
    )
  }
}

export default App;
