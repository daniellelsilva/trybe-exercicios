function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //   Exercicio 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let listaUl = document.querySelector('#days');

 function criaCalendario () {
   for (let index = 0; index < dezDaysList.length; index += 1) {
     let dias = dezDaysList[index];
     let criaLista = document.createElement('li');
     criaLista.innerText  = dias;
    listaUl.appendChild(criaLista);
    criaLista.className = 'day';

    if (dias === 24 || dias === 25 || dias === 31) {
      criaLista.classList.add('day', 'holiday');
    } else if (dias === 4 || dias === 11 || dias === 18 || dias === 25) {
      criaLista.classList.add('day', 'friday');
    }
   }
 }
 criaCalendario([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

//  Exercicio 2
function botaoFeriado (string) {
  let containerButton = document.querySelector('.buttons-container')
  let button = document.createElement('button');
  button.innerText = string;
  containerButton.appendChild(button);
  button.id = 'btn-holiday'
}
botaoFeriado('Feriado');

// EXercicio 3
function coresFeriado () {  
  let buttonFeriado = document.querySelector('#btn-holiday'); 
  let diasFeriado = document.querySelectorAll('.holiday');
  let antigaCor = 'rgb(238,238,238)';
  let novaCor = 'red';
  
  buttonFeriado.addEventListener('click', function () { 
    for (let index = 0; index < diasFeriado.length; index += 1){
      if (diasFeriado[index].style.backgroundColor === novaCor) {
        diasFeriado[index].style.backgroundColor = antigaCor;
      } else {
        diasFeriado[index].style.backgroundColor = novaCor;
      }
    }

  })
};
coresFeriado();

// EXercicio 4
  // criar o botão
function botaoSextaFeira (string) {
  let containerButton = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
  buttonFriday.innerText = string;
  containerButton.appendChild(buttonFriday);
  buttonFriday.id = 'btn-friday';
}
botaoSextaFeira('Sexta-feira');

// Exercicio 5
function coresSexta () {
  let buttonSexta = document.querySelector('#btn-friday');
  let diasSexta = document.querySelectorAll('.friday');
  let backgroundColor = 'rgb(238,238,238)';
  let novaCor = 'blue';
  // quando o click ocorrer, o for sera percorrido, por isso do evento "ouvinte" ficar aqui
  buttonSexta.addEventListener('click', function() { 
    for (let index = 0; index < diasSexta.length; index += 1) {
    if (diasSexta[index].style.backgroundColor === novaCor) {
      diasSexta[index].style.backgroundColor = backgroundColor;
    } else {
      diasSexta[index].style.backgroundColor = novaCor;
    }
  }
})
};
coresSexta();
// fazer caminho para o botao
// fazer caminho para os dias?

// implementar função

// quando clciar deve mudar a cor



 
  

