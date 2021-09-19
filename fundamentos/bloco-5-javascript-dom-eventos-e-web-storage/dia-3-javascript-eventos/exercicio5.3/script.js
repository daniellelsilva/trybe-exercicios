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


// Exercicio 6

  function zoomIn () {
    // let declarada linha 20
    listaUl.addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
zoomIn();

  function zoomOut () {
    listaUl.addEventListener('mouseout', function(event){
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  };
zoomOut();


// Exercicio 7
 
  function adicionaTarfa (string) {
    let myTasks = document.querySelector('.my-tasks');
    let novasTarefa = document.createElement('span');
    novasTarefa.innerHTML = string
    myTasks.appendChild(novasTarefa);
    
  };

  adicionaTarfa('PROJETO');
 

  // Exercicio 8
  //  recebe cor
  // cria tag div dinamicamente
  // filho da classe my-tasks
  // deve adicionar cor de fundo
  function adicionaFundoTarefa (cor) {
    let myTasks = document.querySelector('.my-tasks');
    let fundoTarefa = document.createElement('div');
    fundoTarefa.className = 'task';
    fundoTarefa.style.backgroundColor = cor;
    myTasks.appendChild(fundoTarefa);
  }
  adicionaFundoTarefa('red');

  // Exercicio 9
  // função com EVENTO
  // CLICK na div cor 
  // atribuir classe TASK SELECTED quando selecionada
  // novo CLICK a classe volta a ser TASK

  function addSelected () {
  const classTask = document.querySelector('.task')
  const addClassSelected = document.getElementsByClassName('task selected')

  classTask.addEventListener('click', function(event){
    if (addClassSelected.length === 0) {
      event.target.className = 'task selected'
    } else {
      event.target.className = 'task';
    }
  });
};
addSelected(); 

// Exercicio 10

// classe dos dias = days
// atribuir cor do item da lista quando clicar no dia
// quando clicar novamente a cor deve voltar ao normal

// os dias, pegar a task selected, background color task selected

function changeDayColor() {
  let classTaskSelected = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let divTask = document.querySelector('.task');
  let divColor = divTask.style.backgroundColor;

  days.addEventListener('click', function(event){
    let daysColor = event.target.style.color;
    if(classTaskSelected.length > 0 && daysColor !== divColor) {
      let color = classTaskSelected[0].style.backgroundColor;
      event.target.style.color = color;
    } else if(daysColor === divColor && classTaskSelected.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

changeDayColor();

