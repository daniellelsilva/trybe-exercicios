import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <>
        {conteudos.map((elemento) => (
          <div key={elemento.conteudo} className= 'card'>
            <h4>{`O conteúdo é: ${elemento.conteudo}`}</h4>
            <p>{`satus: ${elemento.status}`}</p>
            <p>{`bloco: ${elemento.bloco}`}</p>
          </div>
        ))}
      </>
    )
  }
}

export default Content;